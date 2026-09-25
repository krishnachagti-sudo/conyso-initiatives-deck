// The card checker (CARD-STANDARD.md §5). A failure blocks release.
//
// Pure: takes a loaded deck and its context, returns a list of problems. The
// CLI at the bottom loads every deck under decks/ and exits non-zero on any
// problem. The network check (every source URL answering 200) will be a
// separate command, so this file and its tests never touch the network.

import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { NOTE_TYPES, KINDS, AFTER_PRIMERS, PRIORITIES, LICENCE_TIERS, LIMITS } from '../src/schema.mjs';

const ID_RE = /^[a-z0-9]+(?:[.-][a-z0-9]+)*(?:\.[a-z0-9-]+)+$/;
const CONCEPT_RE = /^[a-z0-9]+(?:\.[a-z0-9-]+)+$/;
const norm = (t) => String(t).trim().toLowerCase();
const words = (s) => String(s || '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
const listItems = (s) => {
  const html = (String(s || '').match(/<li[\s>]/gi) || []).length;
  const md = String(s || '').split('\n').filter((l) => /^\s*(?:[-*•]|\d+[.)])\s+/.test(l)).length;
  return Math.max(html, md);
};
const clozeBlanks = (s) => (String(s || '').match(/\{\{c\d+::/g) || []).length;
const nonEmpty = (v) => (Array.isArray(v) ? v.length > 0 : v !== undefined && v !== null && String(v).trim() !== '');

/**
 * @param {ReturnType<import('../src/decks.mjs').loadDeck>} deck
 * @param {{concepts?: Map<string,object>, prerequisiteTerms?: Iterable<string>}} ctx
 * @returns {{id: string, rule: string, message: string}[]}
 */
export function checkDeck(deck, ctx = {}) {
  const problems = [];
  const add = (id, rule, message) => problems.push({ id: id || '(deck)', rule, message });
  const { meta, notes } = deck;
  const concepts = ctx.concepts || new Map();

  // ── Deck metadata ────────────────────────────────────────────────────────
  for (const k of ['id', 'slug', 'title', 'family', 'version', 'pageBase', 'reportURL', 'licence']) {
    if (!nonEmpty(meta[k])) add(null, 'deck-meta', `deck.json is missing "${k}"`);
  }
  if (meta.id !== undefined && !Number.isInteger(meta.id)) add(null, 'deck-meta', 'deck.json "id" must be an integer and never change');
  // A deck cannot be released while anything is still listed as blocking it.
  if (meta.status === 'released' && nonEmpty(meta.releaseBlockers)) add(null, 'deck-meta', `status is "released" but releaseBlockers still lists ${meta.releaseBlockers.length} item(s)`);

  // ── Per-card rules ───────────────────────────────────────────────────────
  const seenIds = new Set();
  const seenOrders = new Set();
  for (const n of notes) {
    const id = n.id;
    if (!nonEmpty(id)) { add(null, 'id', `a card in topic "${n.topic}" has no id`); continue; }
    if (!ID_RE.test(id)) add(id, 'id', 'id must be lowercase, dot-separated, e.g. scrum.events.sprint-length');
    if (seenIds.has(id)) add(id, 'id', 'duplicate id');
    seenIds.add(id);

    if (!NOTE_TYPES[n.type]) add(id, 'type', `type must be one of ${Object.keys(NOTE_TYPES).join(', ')}`);
    if (!KINDS.includes(n.kind)) add(id, 'kind', `kind must be one of ${KINDS.join(', ')}`);
    if (!PRIORITIES.includes(n.priority)) add(id, 'priority', `priority must be one of ${PRIORITIES.join(', ')}`);

    // Order: explicit, unique, positive integer (Anki keeps it as the new-card position).
    if (!Number.isInteger(n.order) || n.order <= 0) add(id, 'order', 'order must be a positive integer');
    else if (seenOrders.has(n.order)) add(id, 'order', `order ${n.order} is used twice; positions must be unique`);
    seenOrders.add(n.order);

    // Front: a question or a cloze.
    if (!nonEmpty(n.front)) add(id, 'front', 'front is empty');
    else if (n.type === 'cloze') {
      const b = clozeBlanks(n.front);
      if (b !== 1) add(id, 'cloze', `a cloze card needs exactly one blank, found ${b}`);
    } else if (!/\?/.test(String(n.front))) add(id, 'front', 'the front must ask a question');

    // Back: short, and no long lists.
    if (n.type !== 'cloze') {
      if (!nonEmpty(n.back)) add(id, 'back', 'back is empty');
      else if (words(n.back) > LIMITS.backWords) add(id, 'back', `back has ${words(n.back)} words; the limit is ${LIMITS.backWords}`);
    }
    if (listItems(n.back) > LIMITS.listItems) add(id, 'list', `a list answer has more than ${LIMITS.listItems} items; split it`);

    // Feedback: every card explains, and says why rather than repeating the answer.
    if (!nonEmpty(n.explanation)) add(id, 'explanation', 'every card needs an explanation');
    else {
      const W = (s) => new Set(String(s || '').toLowerCase().replace(/\{\{c\d+::|\}\}/g, ' ').match(/[a-z0-9]+/g)?.filter((w) => w.length > 3) || []);
      const E = W(n.explanation);
      const B = W(n.type === 'cloze' ? n.front : `${n.front} ${n.back}`);
      if (E.size && E.size <= 12 && [...E].filter((w) => B.has(w)).length / E.size >= 0.85) {
        add(id, 'explanation', 'the explanation repeats the question or answer; say why');
      }
    }

    // Choices must be explained.
    if (nonEmpty(n.choices) && !nonEmpty(n.choicesExplained)) add(id, 'choices', 'choices need choicesExplained (why each wrong option is wrong)');
    if (nonEmpty(n.choices) && n.type !== 'scenario') add(id, 'choices', 'only scenario cards carry choices');

    // Sources.
    if (!nonEmpty(n.source)) add(id, 'source', 'source is missing');
    if (!nonEmpty(n.sourceURL)) add(id, 'source', 'sourceURL is missing');
    else if (!/^https?:\/\//.test(n.sourceURL)) add(id, 'source', 'sourceURL must be an http(s) link');
    // Wikipedia is a finding aid (research protocol): it may co-cite, but a card
    // resting on it alone must say so with sourceFallback: true.
    if (/wikipedia\.org/i.test(n.sourceURL || '') && !n.sourceFallback && !/(Pool|CFR|Guide|Handbook|AIM|docs|NIST|NOAA|NEETS|FM |TM |AC |manual)/.test(n.source || '')) {
      add(id, 'source', 'rests on Wikipedia alone: cite a primary source, or set sourceFallback: true if none exists');
    }
    if (!nonEmpty(n.sourceLicence)) add(id, 'source', 'sourceLicence is missing');
    else if (!Object.keys(LICENCE_TIERS).includes(String(n.sourceLicence).trim().charAt(0))) {
      add(id, 'source', `sourceLicence must start with a tier letter (${Object.keys(LICENCE_TIERS).join(', ')}); tier D is never allowed`);
    }

    // The licence label must match what the source host publishes under
    // (src/licences.json); a "#page=" anchor must be a page number.
    const rule = (ctx.licences || []).find((r) => r.url.test(n.sourceURL || ''));
    if (rule && nonEmpty(n.sourceLicence) && !rule.licence.test(n.sourceLicence)) add(id, 'licence', `sourceLicence "${n.sourceLicence}" does not match this source (expected ${rule.licence.source})`);
    const page = String(n.sourceURL || '').match(/#page=([^&]*)/);
    if (page && !/^[1-9]\d*$/.test(page[1])) add(id, 'source', `"#page=${page[1]}" is not a page number`);

    // "Name two …" must be answered with two.
    const nameN = String(n.front || '').match(/\b(?:name|list|give|what are|which are)\s+(two|three|four|five|six)\b/i);
    if (nameN && n.type !== 'cloze' && !nonEmpty(n.choices)) {
      const want = { two: 2, three: 3, four: 4, five: 5, six: 6 }[nameN[1].toLowerCase()];
      const got = String(n.back || '').split(/;|,|\band\b|\bor\b/).filter((x) => x.trim()).length;
      if (got < want) add(id, 'back', `the front asks for ${want} but the back gives ${got}`);
    }

    // Volatile facts carry a date.
    if (n.volatile && !/^\d{4}-\d{2}-\d{2}/.test(String(n.validAsOf || ''))) add(id, 'valid-as-of', 'a volatile card needs validAsOf (YYYY-MM-DD, plus version)');

    // Exam mapping only where the body allows it.
    if (nonEmpty(n.examRefs) && !meta.examRefsCleared) add(id, 'exam-refs', 'examRefs is set but this deck is not cleared for exam mapping (content policy §5)');

    // Concepts.
    if (!nonEmpty(n.conceptIDs)) add(id, 'concepts', 'conceptIDs is empty');
    else for (const c of n.conceptIDs) {
      if (!CONCEPT_RE.test(c)) add(id, 'concepts', `concept id "${c}" is malformed`);
      else if (!concepts.has(c)) add(id, 'concepts', `concept "${c}" is not in the family's concept registry`);
    }

    // Primers.
    if (n.kind === 'primer') {
      if (!nonEmpty(n.example)) add(id, 'primer', 'a primer needs an example');
      const intro = n.introduces || [];
      if (intro.length === 0) add(id, 'primer', 'a primer must introduce a term');
      // A term taught with its own abbreviation ("Incident Command System" and
      // "ICS") is one idea: the abbreviation does not count against the limit.
      // An abbreviation here is any short form (up to 12 characters, two words)
      // taught beside a longer term: "ICS", "X", "mH", "op-amp", "Planning P".
      const isAbbr = (t) => t.length <= 12 && t.split(/\s+/).length <= 2 && intro.some((o) => o !== t && o.length > t.length);
      const terms = intro.filter((t) => !isAbbr(t));
      if (terms.length > LIMITS.primerNewTerms || intro.length > LIMITS.primerNewTerms + 1) add(id, 'primer', `a primer introduces at most ${LIMITS.primerNewTerms} new term`);
    } else if (nonEmpty(n.introduces)) add(id, 'primer', 'only primers introduce terms');

    // A card's figure: a real file, alt text, a credit and a licence tier.
    if (n.image) {
      const im = n.image;
      if (!nonEmpty(im.file)) add(id, 'image', 'image.file is missing');
      else if (!/\.(png|jpe?g|svg|webp|gif)$/i.test(im.file)) add(id, 'image', 'image.file must be png, jpg, svg, webp or gif');
      else if (deck.dir && !existsSync(join(deck.dir, im.file))) add(id, 'image', `image file ${im.file} does not exist`);
      else if (deck.dir && statSync(join(deck.dir, im.file)).size > LIMITS.imageBytes) add(id, 'image', `image file is over ${LIMITS.imageBytes / 1024} KB`);
      if (String(im.alt || '').trim().length < 12) add(id, 'image', 'image.alt must describe the figure (12 characters or more)');
      if (!nonEmpty(im.credit)) add(id, 'image', 'image.credit is missing');
      if (!nonEmpty(im.licence) || !Object.keys(LICENCE_TIERS).includes(String(im.licence).trim().charAt(0))) add(id, 'image', 'image.licence must start with a tier letter (A, B or C)');
      if (im.side && !['front', 'back'].includes(im.side)) add(id, 'image', 'image.side must be front or back');
    }

    // Images: a text equivalent is required.
    for (const f of ['front', 'back', 'explanation', 'example']) {
      for (const img of String(n[f] || '').match(/<img\b[^>]*>/gi) || []) {
        if (!/\balt="[^"]+"/i.test(img)) add(id, 'image', `an image in ${f} has no alt text`);
      }
    }
  }

  // ── Teaching order: no undefined terms, primers first ───────────────────
  const byOrder = notes.filter((n) => Number.isInteger(n.order)).slice().sort((a, b) => a.order - b.order);
  const known = new Set([...(meta.assumedTerms || []), ...(ctx.prerequisiteTerms || [])].map(norm));
  const glossary = new Set(Object.keys(meta.glossary || {}).map(norm));
  // Writing in parallel (ctx.registry): a term the registry assigns to an EARLIER
  // topic counts as taught, so a writer's own check is meaningful before the
  // other topics exist. The final check runs without it.
  const topicNo = new Map(deck.topics.map((t) => [t.topic, parseInt(t.file, 10) || 0]));
  const registered = (term, topic) => (ctx.registry || []).some((r) => norm(r.term) === norm(term) && Number(r.topic) < (topicNo.get(topic) || 0));
  for (const n of byOrder) {
    for (const t of n.uses || []) {
      const introducedHere = n.kind === 'primer' && (n.introduces || []).map(norm).includes(norm(t));
      if (!known.has(norm(t)) && !introducedHere && !registered(t, n.topic)) add(n.id, 'undefined-term', `uses "${t}" before any primer introduces it`);
    }
    for (const t of n.introduces || []) known.add(norm(t));

    // Abbreviations: an all-capitals token in the card's text must be taught by
    // an earlier primer (or this card's own), listed in its uses, assumed, or
    // expanded in the deck's glossary. This catches jargon a writer never listed
    // in `uses`, which the term check cannot see.
    const text = ['front', 'back', 'explanation', 'example', 'contrast', 'choices', 'choicesExplained'].map((f) => n[f] || '').join(' ').replace(/\{\{c\d+::|\}\}/g, ' ');
    const has = (list, a) => [...list].some((k) => new RegExp(`(^|[^a-z0-9])${a}([^a-z0-9]|$)`).test(norm(k)));
    for (const tok of new Set(text.match(/\b[A-Z][A-Z0-9]{1,5}\b/g) || [])) {
      const a = tok.toLowerCase();
      if (/^(?:I{2,3}|IV|VI{0,3}|IX|XI{0,3})$/.test(tok)) continue; // Roman numerals: World War II
      if (glossary.has(a) || has(known, a) || has(n.uses || [], a)) continue;
      add(n.id, 'abbreviation', `"${tok}" is not taught, used, assumed or in the deck glossary`);
    }
  }
  for (const t of deck.topics) {
    const primers = t.notes.filter((n) => n.kind === 'primer' && Number.isInteger(n.order));
    if (primers.length === 0) { add(null, 'primer', `topic "${t.topic}" has no primer card`); continue; }
    const lastPrimer = Math.max(...primers.map((n) => n.order));
    for (const n of t.notes) {
      if (AFTER_PRIMERS.includes(n.kind) && Number.isInteger(n.order) && n.order < lastPrimer) {
        add(n.id, 'order', `a ${n.kind} card comes before its topic's primers`);
      }
    }
  }

  // ── Deck-level: fact + application for key concepts ─────────────────────
  const coreConcepts = new Set(notes.filter((n) => n.priority === 'core' && n.kind === 'fact').map((n) => (n.conceptIDs || [])[0]).filter(Boolean));
  for (const c of coreConcepts) {
    const applied = notes.some((n) => ['application', 'classification'].includes(n.kind) && (n.conceptIDs || []).includes(c));
    if (!applied) add(null, 'application', `core concept "${c}" has a fact card but no application or classification card`);
  }

  // ── Deck-level: one front, one answer ───────────────────────────────────
  // Two cards that ask the same thing but accept different answers leave the
  // learner guessing which one is wanted ("Name one of four…" set cards).
  // Choices or a figure make the question different, so those are exempt.
  const byFront = new Map();
  for (const n of notes) {
    if (n.type === 'cloze' || n.choices || n.image || !nonEmpty(n.front)) continue;
    const k = n.front.trim().toLowerCase();
    byFront.set(k, [...(byFront.get(k) || []), n]);
  }
  for (const group of byFront.values()) {
    if (new Set(group.map((n) => String(n.back).trim().toLowerCase())).size < 2) continue;
    for (const n of group) add(n.id, 'front', `${group.length} cards share this front but accept different answers; give each its own question`);
  }

  // ── Deck-level: official pool questions verbatim ────────────────────────
  // A deck that quotes a question pool names its skeleton (deck.json "pool");
  // every live question needs a card whose id ends in the pool ID, with the
  // question, the four choices and the key word for word, and the pool's
  // source line and date where the deck sets them.
  if (ctx.pool) {
    const tail = (n) => n.id.split('.').pop();
    const byTail = new Map(notes.map((n) => [tail(n), n]));
    const live = new Set(ctx.pool.map((q) => q.poolId.toLowerCase()));
    const flat = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();
    for (const q of ctx.pool) {
      const n = byTail.get(q.poolId.toLowerCase());
      if (!n) { add(null, 'pool', `pool question ${q.poolId} has no card`); continue; }
      const choices = Object.entries(q.choices).map(([k, v]) => `${k}) ${v}`).join('\n');
      if (flat(n.front) !== flat(q.question)) add(n.id, 'pool', `the front is not ${q.poolId}'s question word for word`);
      if (flat(n.choices) !== flat(choices)) add(n.id, 'pool', `the choices are not ${q.poolId}'s four options word for word, in order`);
      const ans = flat(q.answer);
      // A key over the back-length limit is shortened on the back; the choices keep it whole.
      if (flat(n.back) !== ans && words(ans) <= LIMITS.backWords) add(n.id, 'pool', `the back is not the keyed option (${q.correct}) of ${q.poolId}`);
      const p = meta.pool || {};
      if (p.source && n.source !== p.source.replace('{id}', q.poolId)) add(n.id, 'pool', `source must be "${p.source.replace('{id}', q.poolId)}"`);
      if (p.validAsOf && n.validAsOf !== p.validAsOf) add(n.id, 'pool', `validAsOf must be "${p.validAsOf}"`);
    }
    for (const n of notes) if (/^[a-z]\d[a-z]\d{2}$/.test(tail(n)) && !live.has(tail(n))) add(n.id, 'pool', 'the id names a pool question that is not in the live pool (withdrawn?)');
  }

  // ── Released IDs must never disappear ───────────────────────────────────
  for (const rid of deck.releasedIds || []) {
    if (!seenIds.has(rid)) add(rid, 'released-id', 'a released card is missing; retire it with the "retired" tag instead of deleting it');
  }

  return problems;
}

// ── CLI ────────────────────────────────────────────────────────────────────
//   node build/check.mjs [--only=slug,slug] [--summary] [--json]
//     [--registry=<terms.json>] [--concepts-extra=<file>,<file>]
// --summary prints counts by rule (and by abbreviation) instead of every line,
// so nobody has to count problems with grep. --concepts-extra adds a writer's
// own concept files before they are merged, so a writer's check can be clean.
if (import.meta.url === `file://${process.argv[1]}`) {
  const { readFileSync } = await import('node:fs');
  const { deckDirs, loadDeck, checkContext } = await import('../src/decks.mjs');
  const flag = (n, d) => process.argv.find((a) => a.startsWith(`--${n}=`))?.slice(n.length + 3) || d;
  const has = (n) => process.argv.includes(`--${n}`);
  const root = flag('decks', 'decks');
  const readJSON = (f) => JSON.parse(readFileSync(f, 'utf8'));
  const registry = flag('registry', '') ? readJSON(flag('registry', '')) : undefined;
  const extra = (flag('concepts-extra', '') || '').split(',').filter(Boolean).flatMap(readJSON);
  const only = flag('only', '')?.split(',').filter(Boolean);
  const cfg = readJSON('site.config.json');
  const all = [];
  for (const dir of deckDirs(root)) {
    const deck = loadDeck(dir);
    if (only?.length && !only.includes(deck.meta.slug)) continue;
    deck.meta.pageBase ||= `${cfg.origin}${cfg.base}${deck.meta.slug}/`; // as build.mjs does
    const ctx = checkContext(deck.meta, { decks: root, concepts: flag('concepts', 'concepts') });
    for (const c of extra) if (!ctx.concepts.has(c.id)) ctx.concepts.set(c.id, c);
    for (const p of checkDeck(deck, { ...ctx, registry })) all.push({ deck: deck.meta.slug, ...p });
  }
  if (has('json')) console.log(JSON.stringify(all, null, 1));
  else if (has('summary')) {
    const count = (key) => Object.entries(all.reduce((m, p) => ({ ...m, [key(p)]: (m[key(p)] || 0) + 1 }), {})).sort((a, b) => b[1] - a[1]);
    for (const [k, v] of count((p) => `${p.deck}  [${p.rule}]`)) console.log(`${String(v).padStart(5)}  ${k}`);
    const abbr = count((p) => (p.rule === 'abbreviation' ? p.message.match(/"([^"]+)"/)?.[1] : '')).filter(([k]) => k);
    if (abbr.length) console.log(`abbreviations: ${abbr.map(([k, v]) => `${k} ${v}`).join(', ')}`);
  } else for (const p of all) console.log(`${p.deck}  ${p.id}  [${p.rule}]  ${p.message}`);
  if (all.length) { console.error(`\n${all.length} problem(s). Release blocked.`); process.exitCode = 1; } // not exit(): it can drop piped output
  else console.log('card checker passed');
}

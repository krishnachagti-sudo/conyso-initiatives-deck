// Merge a deck's writer output into shape, mechanically (docs/PIPELINE-V3.md,
// A3). Replaces the one-off scripts wave 2 wrote for each deck.
//
//   node build/merge.mjs <slug> [--dry]
//
// 1. Concepts: research/deck-briefs/<slug>-concepts.json (research) and
//    <slug>-concepts-*.json (writers) → concepts/<family>.json,
//    leaving out concepts the prerequisite decks already own, hyphens for
//    underscores in ids.
// 2. Terms: "Term (ABBR)" in introduces becomes two entries, and in uses the
//    bare term; a registry abbreviation joins the primer that teaches its term.
// 3. Glossary: an abbreviation the checker flags that a prerequisite deck's
//    glossary expands is copied into this deck's glossary.
// 4. Report: cards per topic against research/deck-briefs/<slug>-budget.json.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { loadDeck, checkContext } from '../src/decks.mjs';
import { checkDeck } from './check.mjs';

const readJSON = (p) => JSON.parse(readFileSync(p, 'utf8'));
const write = (p, v) => writeFileSync(p, JSON.stringify(v, null, 2) + '\n');
const norm = (s) => String(s).trim().toLowerCase();
const PAREN = /^(.*\S) \(([^)]+)\)$/;
const ABBR = /^[A-Za-z0-9./&-]{1,12}$/;

export function merge(slug, { dry = false, briefs = 'research/deck-briefs', decks = 'decks', concepts = 'concepts' } = {}) {
  const dir = join(decks, slug);
  const meta = readJSON(join(dir, 'deck.json'));
  const report = { concepts: 0, split: 0, abbreviations: 0, glossary: 0, idsFixed: 0, topics: [] };

  // 1. Concepts.
  const owned = new Set((meta.prerequisiteDecks || []).flatMap((s) => {
    const f = join(concepts, `${readJSON(join(decks, s, 'deck.json')).family}.json`);
    return existsSync(f) ? readJSON(f).map((c) => c.id) : [];
  }));
  const fixId = (id) => id.replace(/_/g, '-');
  const target = join(concepts, `${meta.family}.json`);
  const merged = new Map(existsSync(target) ? readJSON(target).map((c) => [c.id, c]) : []);
  for (const f of readdirSync(briefs).filter((f) => (f === `${slug}-concepts.json` || f.startsWith(`${slug}-concepts-`)) && f.endsWith('.json'))) { // research's list, then writers' additions
    for (const c of readJSON(join(briefs, f))) {
      const id = fixId(c.id);
      if (owned.has(id) || merged.has(id)) continue;
      merged.set(id, { id, name: c.name });
      report.concepts++;
    }
  }

  // 2. Terms and ids, file by file.
  const registry = existsSync(join(briefs, `${slug}-terms.json`)) ? readJSON(join(briefs, `${slug}-terms.json`)).filter((r) => r.abbr && norm(r.abbr) !== norm(r.term)) : [];
  const notesDir = join(dir, 'notes');
  const files = readdirSync(notesDir).filter((f) => f.endsWith('.json')).sort();
  const docs = files.map((f) => [f, readJSON(join(notesDir, f))]);
  for (const [, doc] of docs) for (const n of doc.notes) {
    const ids = (n.conceptIDs || []).map(fixId);
    if (ids.join() !== (n.conceptIDs || []).join()) { n.conceptIDs = ids; report.idsFixed++; }
    if (n.uses) n.uses = [...new Set(n.uses.map((t) => (PAREN.test(t) ? (report.split++, t.match(PAREN)[1]) : t)))];
    if (n.introduces) {
      // "Term (ABBR)" → "Term", "ABBR". A bracket that is not one short token
      // with a capital ("(optional)", "(a, b, c)") is a gloss and is dropped.
      n.introduces = [...new Set(n.introduces.flatMap((t) => { const m = t.match(PAREN); if (!m) return [t]; report.split++; return ABBR.test(m[2]) && /[A-Z]/.test(m[2]) ? [m[1], m[2]] : [m[1]]; }))];
      if (n.kind === 'primer') for (const r of registry) {
        if (n.introduces.some((t) => norm(t) === norm(r.term)) && !n.introduces.includes(r.abbr)) { n.introduces.push(r.abbr); report.abbreviations++; }
      }
    }
  }
  if (!dry) { write(target, [...merged.values()].sort((a, b) => a.id.localeCompare(b.id))); for (const [f, doc] of docs) write(join(notesDir, f), doc); }

  // 3. Glossary from the prerequisite decks, for what the checker still flags.
  const deck = loadDeck(dir);
  const flagged = new Set(checkDeck(deck, checkContext(deck.meta, { decks, concepts })).filter((p) => p.rule === 'abbreviation').map((p) => p.message.match(/"([^"]+)"/)[1]));
  const glossary = { ...(meta.glossary || {}) };
  for (const s of meta.prerequisiteDecks || []) {
    const g = readJSON(join(decks, s, 'deck.json')).glossary || {};
    for (const a of flagged) if (g[a] && !glossary[a]) { glossary[a] = g[a]; report.glossary++; }
  }
  if (report.glossary && !dry) {
    const out = {};
    for (const [k, v] of Object.entries(meta)) { if (k === 'glossary') continue; out[k] = v; if (k === 'assumedTerms') out.glossary = Object.fromEntries(Object.entries(glossary).sort()); }
    if (!out.glossary) out.glossary = glossary;
    write(join(dir, 'deck.json'), out);
  }

  // 4. Budget.
  const budget = existsSync(join(briefs, `${slug}-budget.json`)) ? readJSON(join(briefs, `${slug}-budget.json`)) : {};
  for (const t of deck.topics) {
    const n = Number.parseInt(t.file, 10);
    const want = budget[n] ?? budget[String(n)];
    const off = want ? Math.round(((t.notes.length - want) / want) * 100) : null;
    report.topics.push({ topic: n, cards: t.notes.length, budget: want ?? null, off, ok: off === null || Math.abs(off) <= 15 });
  }
  return report;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const slug = process.argv[2];
  if (!slug) { console.error('usage: node build/merge.mjs <slug> [--dry]'); process.exitCode = 1; }
  else {
    const r = merge(slug, { dry: process.argv.includes('--dry') });
    console.log(`concepts added ${r.concepts}; "Term (ABBR)" split ${r.split}; abbreviations put on primers ${r.abbreviations}; glossary entries copied ${r.glossary}; concept ids hyphenated ${r.idsFixed}`);
    for (const t of r.topics) console.log(`${t.ok ? ' ' : '!'} topic ${String(t.topic).padStart(2)}  ${String(t.cards).padStart(4)} cards${t.budget ? `  budget ${t.budget} (${t.off > 0 ? '+' : ''}${t.off}%)` : ''}`);
    if (r.topics.some((t) => !t.ok)) console.log('! = more than 15% off budget: send the topic back to its writer');
  }
}

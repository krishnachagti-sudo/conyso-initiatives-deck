// The Primer in numbers: every figure the home page's Scale band and the
// /numbers/ page state about the whole site. All of it is counted from the
// decks at build time; nothing here is typed in. The comparison with other
// sites comes only from src/data/compare.json (loadCompare), which a
// researcher writes with a link and a date for every figure. Without that
// file the pages leave the comparison out entirely, so nothing unverified
// can ship.
//
// Pure functions over loaded decks ({ meta, topics, notes }), tested in
// test/moat.test.mjs.

import { readFileSync, existsSync } from 'node:fs';
import { FORMATS } from '../exporters/index.mjs';

const DAY = 864e5;

/**
 * Decks the numbers describe: released and not personal. A build with no
 * released deck at all (the test fixtures) counts every non-personal deck,
 * as the home page does, so the pages and their links always exist.
 */
export function publicDecks(decks) {
  const mine = decks.filter((d) => !d.meta.personal);
  const rel = mine.filter((d) => d.meta.status === 'released');
  return rel.length ? rel : mine;
}

/** The day a deck was added: the earliest date in its changelog (the same rule as /new/). */
export const addedOn = (d) => (d.meta.changelog || []).map((c) => c.date).filter(Boolean).sort()[0] || d.meta.updated || '';

/** The newest date anywhere in the decks' changelogs: the day these numbers describe. */
export const countedOn = (decks) => decks.flatMap((d) => [d.meta.updated, ...(d.meta.changelog || []).map((c) => c.date)]).filter(Boolean).sort().pop() || '';

/** The Monday on or before an ISO date (UTC). */
export function mondayOf(iso) {
  const t = new Date(`${iso}T00:00:00Z`);
  return new Date(t.getTime() - ((t.getUTCDay() + 6) % 7) * DAY).toISOString().slice(0, 10);
}

/** A source address without its section anchor or page fragment: one document. */
export const documentOf = (url) => String(url || '').split('#')[0].replace(/\/+$/, '');

// Number words the audit notes use at the start of a count.
const WORDS = { no: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20 };
const KINDS = ['wrong', 'unsupported', 'ambiguous', 'unclear', 'minor'];

/**
 * The problems an audit note says were found, by kind, where it states a
 * number: "2 wrong cards, 6 unsupported claims, 9 ambiguous cards ... were
 * fixed". Only a number written right before one of the five kinds counts, so
 * a note that gives no number adds nothing (an undercount, never a guess).
 * "No wrong answers" counts as a stated 0.
 */
export function auditFindings(text) {
  const out = Object.fromEntries(KINDS.map((k) => [k, 0]));
  let stated = false;
  const re = new RegExp(`(?:^|[^\\w.,])(?<!\\b(?:all|the|these|both|those)\\s+)(\\d[\\d,]*|${Object.keys(WORDS).join('|')})\\s+(${KINDS.join('|')})\\b`, 'gi');
  for (const m of String(text || '').matchAll(re)) {
    const raw = m[1].toLowerCase();
    const n = /\d/.test(raw) ? Number(raw.replace(/,/g, '')) : WORDS[raw];
    if (!Number.isFinite(n)) continue;
    out[m[2].toLowerCase()] += n;
    stated = true;
  }
  return { ...out, total: KINDS.reduce((a, k) => a + out[k], 0), stated };
}

/** Per-week additions and running totals, from each deck's first changelog date, oldest first, with a zero week before the first. */
export function growthSeries(decks, cardsOf = (d) => d.notes.length) {
  const weeks = new Map();
  for (const d of decks) {
    const at = addedOn(d);
    if (!at) continue;
    const w = mondayOf(at);
    const cur = weeks.get(w) || { decks: 0, cards: 0 };
    weeks.set(w, { decks: cur.decks + 1, cards: cur.cards + cardsOf(d) });
  }
  const keys = [...weeks.keys()].sort();
  if (!keys.length) return [];
  // Every week from the first to the last, so a quiet week shows as flat.
  const all = [new Date(Date.parse(`${keys[0]}T00:00:00Z`) - 7 * DAY).toISOString().slice(0, 10)];
  for (let t = Date.parse(`${keys[0]}T00:00:00Z`); t <= Date.parse(`${keys[keys.length - 1]}T00:00:00Z`); t += 7 * DAY) all.push(new Date(t).toISOString().slice(0, 10));
  let decksSoFar = 0;
  let cardsSoFar = 0;
  return all.map((week) => {
    const add = weeks.get(week) || { decks: 0, cards: 0 };
    decksSoFar += add.decks;
    cardsSoFar += add.cards;
    return { week, addedDecks: add.decks, addedCards: add.cards, decks: decksSoFar, cards: cardsSoFar };
  });
}

/**
 * Everything the pages say about the Primer as a whole.
 * @param {object[]} allDecks loaded decks; only released, non-personal ones count
 * @param {{ formats?: number, sinceDays?: number }} o
 */
export function primerStats(allDecks, { formats = FORMATS.length, sinceDays = 30 } = {}) {
  const decks = publicDecks(allDecks);
  const notes = decks.flatMap((d) => d.notes);
  const cardsOf = (d) => d.notes.length;
  const primers = notes.filter((n) => n.kind === 'primer');
  const terms = new Set(primers.flatMap((n) => n.introduces || []).map((t) => String(t).toLowerCase()));
  const documents = new Set(notes.map((n) => documentOf(n.sourceURL)).filter(Boolean));
  const sourced = notes.filter((n) => n.sourceURL).length;
  // A quote counts only in decks whose checker matches it word for word
  // against the cached source ("evidence": true in deck.json).
  const quoted = decks.filter((d) => d.meta.evidence).reduce((a, d) => a + d.notes.filter((n) => String(n.evidence || '').trim()).length, 0);
  const checks = decks.flatMap((d) => (d.meta.checks || []).map((c) => ({ deck: d.meta.slug, date: c.date, ...auditFindings(c.result) })));
  const counted = countedOn(decks);
  const since = counted ? new Date(Date.parse(`${counted}T00:00:00Z`) - (sinceDays - 1) * DAY).toISOString().slice(0, 10) : '';
  const recent = decks.filter((d) => addedOn(d) && addedOn(d) >= since && addedOn(d) <= counted);
  const fam = new Map();
  for (const d of decks) {
    const f = d.meta.familyTitle || d.meta.family || 'Other';
    const cur = fam.get(f) || { title: f, decks: 0, cards: 0, hub: false };
    // A family has a hub page only once one of its decks is released.
    fam.set(f, { title: f, decks: cur.decks + 1, cards: cur.cards + cardsOf(d), hub: cur.hub || d.meta.status === 'released' });
  }
  return {
    counted,
    decks: decks.length,
    cards: notes.length,
    primers: primers.length,
    terms: terms.size,
    families: fam.size,
    byFamily: [...fam.values()].sort((a, b) => b.cards - a.cards || a.title.localeCompare(b.title)),
    documents: documents.size,
    sourced,
    quoted,
    evidenceDecks: decks.filter((d) => d.meta.evidence).length,
    audits: checks.length,
    auditedDecks: new Set(checks.map((c) => c.deck)).size,
    auditsWithCounts: checks.filter((c) => c.stated).length,
    findingsFixed: checks.reduce((a, c) => a + c.total, 0),
    wrongFixed: checks.reduce((a, c) => a + c.wrong, 0),
    formats,
    sinceDays,
    since,
    recentDecks: recent.length,
    recentCards: recent.reduce((a, d) => a + cardsOf(d), 0),
    growth: growthSeries(decks, cardsOf),
  };
}

/** A share as a whole percentage, never rounded up to 100 unless it is all. */
export const pct = (part, whole) => (!whole ? 0 : part === whole ? 100 : Math.min(99, Math.round((100 * part) / whole)));

// ── the comparison (src/data/compare.json) ─────────────────────────────────

/**
 * The comparison file, checked, or null. A file that is missing, unreadable,
 * or has a row without a name, a link to its evidence and a date is treated
 * as absent: the pages then show only our own numbers.
 */
export function loadCompare(file = 'src/data/compare.json') {
  if (!existsSync(file)) return null;
  let data;
  try { data = JSON.parse(readFileSync(file, 'utf8')); } catch { return null; }
  return validCompare(data) ? data : null;
}

const isDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(String(s || ''));
const isUrl = (s) => /^https?:\/\/\S+$/.test(String(s || ''));

/** True when every row and claim carries what the pages need to show it honestly. */
export function validCompare(c) {
  if (!c || typeof c !== 'object' || !isDate(c.counted) || !Array.isArray(c.rows) || !c.rows.length) return false;
  for (const r of c.rows) {
    if (!r || !String(r.name || '').trim() || !isUrl(r.url) || !isUrl(r.evidenceUrl) || !isDate(r.fetched)) return false;
    for (const k of ['cards', 'certifications']) if (r[k] != null && !(Number.isFinite(r[k]) && r[k] >= 0)) return false;
  }
  if (c.claims != null && !(Array.isArray(c.claims) && c.claims.every((x) => x && String(x.text || '').trim() && String(x.basis || '').trim()))) return false;
  if (c.notClaims != null && !Array.isArray(c.notClaims)) return false;
  return true;
}

/** A claim from the file whose wording says "largest" or "biggest", or null. Its text is used verbatim. With us ({ cards }), null unless our cards outnumber every counted row. */
export function sizeClaim(c, us) {
  const claim = (c?.claims || []).find((x) => /\b(largest|biggest)\b/i.test(x.text)) || null;
  // A safety net for partial builds and future data: never say "largest"
  // unless our own count is above every count in the file.
  if (claim && us && !(us.cards > Math.max(0, ...(c.rows || []).map((r) => (Number.isFinite(r.cards) ? r.cards : 0))))) return null;
  return claim;
}

/** notClaims entries as plain strings (the file may give strings or { text }), without the researcher's notes to writers. */
export const notClaimTexts = (c) => (c?.notClaims || []).map((x) => (typeof x === 'string' ? x : x?.text || ''))
  // Notes addressed to writers, not readers, stay out of the page.
  .filter((t) => t && !/^\W*the best\W*\s+as a bare superlative/i.test(t))
  .map((t) => t.replace(/\s+in this task(?=[.;,]|$)/i, ''));

/** A claim's headline: its wording up to the first colon (the rest carries dated figures), without a closing full stop. */
export const claimHead = (claim) => String(claim?.text || '').split(':')[0].trim().replace(/\.$/, '');

/** The first sentence of a row's countNote, and the rest. */
export function splitNote(note) {
  const t = String(note || '').trim();
  const m = t.match(/^(.+?[.!?])\s+(?=[A-Z'‘“(]|[a-z][\w-]*\.[a-z]{2,}\b)/);
  return m ? { first: m[1], rest: t.slice(m[0].length) } : { first: t, rest: '' };
}

/** Why a site has no card count: the reason its countNote gives after "Not counted", or a plain fallback. */
export function whyNotCounted(note) {
  const t = String(note || '').trim();
  const fallback = 'no card total was found to read';
  if (!/^Not counted\b/i.test(t)) return fallback;
  const sentences = [];
  for (let rest = t.replace(/^Not counted[.:]?\s*/i, ''); rest;) { const { first, rest: r } = splitNote(rest); sentences.push(first); rest = r; }
  return sentences.find((x) => /forbid|disallow|\b403\b|blocked|captcha|no [\w ]*(count|total)|could not/i.test(x)) || fallback;
}

/**
 * A claim's basis as readers see it: the researcher's notes to editors
 * ("Phrase it as…", "see research-protocol.md", "recompute at build") are
 * left out; every other word stays as written.
 */
export function publicBasis(basis) {
  const sentences = [];
  for (let rest = String(basis || '').replace(/\s*\([^()]*recompute[^()]*\)/gi, '').trim(); rest;) { const { first, rest: r } = splitNote(rest); sentences.push(first); rest = r; }
  return sentences.filter((x) => !/^phrase it\b|research-protocol|^this is an absence claim|recompute at build/i.test(x)).join(' ');
}

/**
 * The bars for the Scale band: cards, ours first in red pen, then every
 * compared site that has a card count, largest first. Sites without one are
 * never drawn and never given a number: they come back in notCounted, with
 * the reason from their countNote, so the page can list them as such.
 */
export function scaleBars(c, us) {
  if (!c) return null;
  const counted = c.rows.filter((r) => Number.isFinite(r.cards));
  const ours = { name: 'The Exam Primer', us: true, value: us.cards, note: `${us.decks.toLocaleString('en-GB')} decks`, url: '', evidenceUrl: '' };
  const rows = counted.map((r) => ({ name: r.name, us: false, value: r.cards, url: r.url, evidenceUrl: r.evidenceUrl, fetched: r.fetched,
    note: Number.isFinite(r.certifications) ? `${r.certifications.toLocaleString('en-GB')} exams` : '' }))
    .sort((a, b) => b.value - a.value || a.name.localeCompare(b.name));
  const notCounted = c.rows.filter((r) => !Number.isFinite(r.cards)).map((r) => ({ name: r.name, url: r.url, evidenceUrl: r.evidenceUrl, fetched: r.fetched, why: whyNotCounted(r.countNote) }));
  const max = Math.max(ours.value, ...rows.map((r) => r.value)) || 1;
  return { metric: 'cards', max, counted: c.counted, rows: [ours, ...rows], notCounted };
}

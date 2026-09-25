// Reading decks and concept registries from disk.
//
// Layout (one directory per deck):
//   decks/<slug>/deck.json          deck metadata
//   decks/<slug>/notes/*.json       one file per topic: { "topic": "...", "notes": [ ... ] }
//   decks/<slug>/released-ids.json  IDs of every note ever released (written at release)
//   concepts/<family>.json          the family's concept registry: [{ "id", "name" }]
//
// One file per topic keeps diffs small and history per topic, the way the Law
// Tome keeps one file per entry.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { sourceReader } from './evidence.mjs';

const readJSON = (p) => JSON.parse(readFileSync(p, 'utf8'));

/**
 * @param {string} dir the deck directory
 * @returns {{meta: object, topics: {topic: string, file: string, notes: object[]}[], notes: object[], releasedIds: string[]}}
 */
export function loadDeck(dir) {
  const meta = readJSON(join(dir, 'deck.json'));
  const notesDir = join(dir, 'notes');
  const files = existsSync(notesDir) ? readdirSync(notesDir).filter((f) => f.endsWith('.json')).sort() : [];
  const topics = files.map((f) => {
    const t = readJSON(join(notesDir, f));
    return { topic: t.topic, file: f, notes: (t.notes || []).map((n) => ({ ...n, topic: t.topic })) };
  });
  const releasedPath = join(dir, 'released-ids.json');
  return {
    dir,
    meta,
    topics,
    notes: topics.flatMap((t) => t.notes),
    releasedIds: existsSync(releasedPath) ? readJSON(releasedPath) : [],
  };
}

/**
 * Terms taught by the decks this deck builds on (deck.json "prerequisiteDecks":
 * slugs under the same decks/ root). They count as known to the checker.
 */
export function prerequisiteTerms(root, meta) {
  const out = [];
  for (const slug of meta.prerequisiteDecks || []) {
    const dir = join(root, slug);
    if (!existsSync(join(dir, 'deck.json'))) throw new Error(`prerequisite deck "${slug}" not found under ${root}`);
    const d = loadDeck(dir);
    // "Term (ABBR)" counts as both the term and its abbreviation.
    // Only a bracket that looks like an abbreviation (one short token with a
    // capital: "PV", "SoD") is one; "(optional)" or "(a, b, c)" is a gloss.
    const abbr = (x) => /^[A-Za-z0-9./&-]{1,12}$/.test(x) && /[A-Z]/.test(x);
    const split = (t) => { const m = String(t).match(/^(.*\S) \(([^)]+)\)$/); return m ? [t, m[1], ...(abbr(m[2]) ? [m[2]] : [])] : [t]; };
    out.push(...d.notes.flatMap((n) => n.introduces || []).flatMap(split), ...(d.meta.assumedTerms || []));
  }
  return out;
}

/** @returns {Map<string, object>} concept id -> concept */
export function loadConcepts(conceptsDir, family) {
  const p = join(conceptsDir, `${family}.json`);
  if (!existsSync(p)) return new Map();
  return new Map(readJSON(p).map((c) => [c.id, c]));
}

/**
 * The concepts a deck may cite: its own family's, plus those of the families of
 * the decks it builds on (a KCSA card may reuse a KCNA concept).
 * @returns {Map<string, object>}
 */
export function deckConcepts(conceptsDir, root, meta) {
  const families = [meta.family, ...(meta.prerequisiteDecks || []).map((slug) => readJSON(join(root, slug, 'deck.json')).family)];
  return new Map([...new Set(families)].flatMap((f) => [...loadConcepts(conceptsDir, f)]));
}

/** The licence each source host must carry (src/licences.json). */
export function licenceRules() {
  return readJSON(new URL('./licences.json', import.meta.url)).rules.map((r) => ({ url: new RegExp(r.url), licence: new RegExp(r.licence) }));
}

/**
 * The official question pool a deck quotes verbatim, if its deck.json has a
 * "pool" block naming a skeleton folder (one topic-NN.json per topic, as
 * build/pool-skeleton.py writes). Paths are relative to the repository root.
 * @returns {{poolId: string, question: string, choices: Record<string,string>, correct: string, answer: string}[] | undefined}
 */
export function loadPool(meta, base = '.') {
  if (!meta.pool?.skeleton) return undefined;
  const dir = join(base, meta.pool.skeleton);
  return readdirSync(dir).filter((f) => /^topic-\d+\.json$/.test(f)).sort().flatMap((f) => {
    const topic = Number(f.match(/\d+/)[0]);
    return readJSON(join(dir, f)).questions.map((q) => ({ ...q, topic }));
  });
}

/** Everything checkDeck needs to know about a deck beyond its own files. */
export function checkContext(meta, { decks = 'decks', concepts = 'concepts', base = '.' } = {}) {
  return {
    sourceText: meta.evidence ? sourceReader(meta.slug, join(base, 'research/sources')) : undefined,
    concepts: deckConcepts(concepts, decks, meta),
    prerequisiteTerms: prerequisiteTerms(decks, meta),
    licences: licenceRules(),
    pool: loadPool(meta, base),
  };
}

/** Every deck directory under a root. */
export function deckDirs(root) {
  if (!existsSync(root)) return [];
  return readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(root, d.name, 'deck.json')))
    .map((d) => join(root, d.name))
    .sort();
}

/** URL-safe slug for topic anchors and subdeck ordering. */
export const slugify = (s) =>
  String(s).toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** True for a host whose terms forbid automated requests (src/no-fetch.json). */
export function noFetch(url, base = '.') {
  let host; try { host = new URL(url).hostname.replace(/^www\./, ''); } catch { return false; }
  const { hosts } = JSON.parse(readFileSync(join(base, 'src/no-fetch.json'), 'utf8'));
  return hosts.some((h) => host === h || host.endsWith(`.${h}`));
}

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
    out.push(...d.notes.flatMap((n) => n.introduces || []), ...(d.meta.assumedTerms || []));
  }
  return out;
}

/** @returns {Map<string, object>} concept id -> concept */
export function loadConcepts(conceptsDir, family) {
  const p = join(conceptsDir, `${family}.json`);
  if (!existsSync(p)) return new Map();
  return new Map(readJSON(p).map((c) => [c.id, c]));
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

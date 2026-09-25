// Write a term registry (research/deck-briefs/<slug>-terms.json) from a finished
// deck's primers, for decks built before registries existed. A later deck that
// builds on this one reads it as its topic-0 terms (BRIEF.md).
//
//   node build/registry-from-deck.mjs <slug> [--force]

import { writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { loadDeck } from '../src/decks.mjs';

const isAbbr = (t, other) => t.length <= 12 && t.length < other.length && t.split(/\s+/).length <= 2;

export function registryFromDeck(slug) {
  const deck = loadDeck(join('decks', slug));
  const out = [];
  for (const t of deck.topics) {
    const topic = Number.parseInt(t.file, 10);
    for (const n of t.notes.filter((x) => x.kind === 'primer').sort((a, b) => a.order - b.order)) {
      let [term, second] = n.introduces || [];
      if (!term) continue;
      // Wave 1 wrote "Term (ABBR)" as one entry: a registry term has no brackets.
      const m = term.match(/^(.*\S) \(([^)]+)\)$/);
      if (m) { term = m[1]; if (!second && /^[A-Za-z0-9./&-]{1,12}$/.test(m[2]) && /[A-Z]/.test(m[2])) second = m[2]; }
      const abbr = second && isAbbr(second, term) ? second : '';
      out.push({ term, abbr, topic, concept: (n.conceptIDs || [])[0] || '', source: n.sourceURL || '' });
    }
  }
  return out;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const slug = process.argv[2];
  const file = join('research/deck-briefs', `${slug}-terms.json`);
  if (!slug) { console.error('usage: node build/registry-from-deck.mjs <slug> [--force]'); process.exitCode = 1; }
  else if (existsSync(file) && !process.argv.includes('--force')) { console.error(`${file} exists; --force to replace it`); process.exitCode = 1; }
  else { const r = registryFromDeck(slug); writeFileSync(file, JSON.stringify(r, null, 1) + '\n'); console.log(`${file}: ${r.length} terms`); }
}

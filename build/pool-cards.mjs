// Write the verbatim pool cards for a deck, so writers never type them
// (docs/PIPELINE-V3.md, C1). For every question in the deck's pool skeleton
// that has no card yet, it adds a scenario card to that topic's notes file:
// id, question, the four choices, the key, source, date and any pool figure,
// all copied from the skeleton and deck.json "pool". Writers then fill in the
// explanation, choicesExplained, uses and conceptIDs, which are left empty on
// purpose so the checker insists on them.
//
//   node build/pool-cards.mjs <slug> [--topics=1,2,3]
//
// Cards go at order N×1000+500 upward in topic N, after the topic's primers.

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { loadPool } from '../src/decks.mjs';

const slugify = (s) => s.toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').split('-').slice(0, 4).join('-');

export function poolCards(deckDir, { topics, base = '.' } = {}) {
  const meta = JSON.parse(readFileSync(join(deckDir, 'deck.json'), 'utf8'));
  const pool = loadPool(meta, base);
  if (!pool) throw new Error(`${meta.slug} has no "pool" block in deck.json`);
  const p = meta.pool;
  const notesDir = join(deckDir, 'notes');
  const files = existsSync(notesDir) ? readdirSync(notesDir).filter((f) => f.endsWith('.json')) : [];
  const skeleton = (t) => JSON.parse(readFileSync(join(base, p.skeleton, `topic-${String(t).padStart(2, '0')}.json`), 'utf8'));
  const added = {};
  for (const t of [...new Set(pool.map((q) => q.topic))].filter((t) => !topics || topics.includes(t))) {
    const nn = String(t).padStart(2, '0');
    let file = files.find((f) => f.startsWith(`${nn}-`));
    const name = skeleton(t).topic.replace(/\s*\(.*$/, '');
    if (!file) { file = `${nn}-${slugify(name)}.json`; files.push(file); }
    const path = join(notesDir, file);
    const doc = existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : { topic: name, notes: [] };
    const topicSlug = file.replace(/^\d+-|\.json$/g, '');
    const have = new Set(doc.notes.map((n) => n.id.split('.').pop()));
    const used = new Set(doc.notes.map((n) => n.order));
    let order = t * 1000 + 500;
    for (const q of pool.filter((x) => x.topic === t)) {
      if (have.has(q.poolId.toLowerCase())) continue;
      while (used.has(order)) order += 2;
      used.add(order);
      const card = {
        id: `${meta.family}.${topicSlug}.${q.poolId.toLowerCase()}`,
        type: 'scenario', kind: 'application', priority: 'core', order,
        front: q.question,
        choices: Object.entries(q.choices).map(([k, v]) => `${k}) ${v}`).join('\n'),
        back: q.answer,
        choicesExplained: '',
        explanation: '',
        source: (p.source || '{id}').replace('{id}', q.poolId),
        sourceURL: p.sourceURL || '',
        sourceLicence: p.sourceLicence || '',
        ...(p.validAsOf ? { volatile: true, validAsOf: p.validAsOf } : {}),
        uses: [],
        conceptIDs: [],
        ...(q.figure && p.figures?.[q.figure] ? { image: p.figures[q.figure] } : {}),
      };
      doc.notes.push(card);
      added[file] = (added[file] || 0) + 1;
    }
    if (added[file]) { mkdirSync(notesDir, { recursive: true }); writeFileSync(path, JSON.stringify(doc, null, 2) + '\n'); }
  }
  return added;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const slug = process.argv[2];
  const topics = process.argv.find((a) => a.startsWith('--topics='))?.slice(9).split(',').map(Number);
  if (!slug) { console.error('usage: node build/pool-cards.mjs <slug> [--topics=1,2]'); process.exitCode = 1; }
  else {
    const added = poolCards(join('decks', slug), { topics });
    const total = Object.values(added).reduce((a, b) => a + b, 0);
    for (const [f, n] of Object.entries(added)) console.log(`${String(n).padStart(4)}  ${f}`);
    console.log(`${total} pool card(s) added; writers fill explanation, choicesExplained, uses and conceptIDs`);
  }
}

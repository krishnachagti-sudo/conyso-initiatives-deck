// Where a deck stands, topic by topic (docs/PIPELINE-V3.md, E5): which topic
// files exist, their card counts against budget, and checker problems in each.
// Used to write a resume prompt after an interruption, and before merging.
//
//   node build/status.mjs <slug> [--registry]
//
// --registry checks as a writer does, with the term registry and every
// writer's concept file, so problems another topic will resolve are not shown.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { loadDeck, checkContext } from '../src/decks.mjs';
import { checkDeck } from './check.mjs';

const readJSON = (p) => JSON.parse(readFileSync(p, 'utf8'));

export function status(slug, { briefs = 'research/deck-briefs', registry = false } = {}) {
  const dir = join('decks', slug);
  const deck = loadDeck(dir);
  const budget = existsSync(join(briefs, `${slug}-budget.json`)) ? readJSON(join(briefs, `${slug}-budget.json`)) : {};
  const ctx = checkContext(deck.meta);
  if (registry) {
    for (const f of readdirSync(briefs).filter((f) => f.startsWith(`${slug}-concepts`) && f.endsWith('.json'))) {
      for (const c of readJSON(join(briefs, f))) if (!ctx.concepts.has(c.id)) ctx.concepts.set(c.id, c);
    }
    ctx.registry = readJSON(join(briefs, `${slug}-terms.json`));
  }
  const problems = checkDeck(deck, ctx);
  const topicOf = new Map(deck.notes.map((n) => [n.id, Number.parseInt(deck.topics.find((t) => t.topic === n.topic)?.file, 10)]));
  const rows = [];
  const topics = new Set([...deck.topics.map((t) => Number.parseInt(t.file, 10)), ...Object.keys(budget).map(Number)]);
  for (const t of [...topics].sort((a, b) => a - b)) {
    const file = deck.topics.find((x) => Number.parseInt(x.file, 10) === t);
    rows.push({ topic: t, file: file?.file || null, cards: file?.notes.length || 0, budget: budget[t] ?? null,
      problems: problems.filter((p) => topicOf.get(p.id) === t).length });
  }
  return { rows, deckProblems: problems.filter((p) => !topicOf.has(p.id)).length };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const slug = process.argv[2];
  if (!slug) { console.error('usage: node build/status.mjs <slug> [--registry]'); process.exitCode = 1; }
  else {
    const { rows, deckProblems } = status(slug, { registry: process.argv.includes('--registry') });
    for (const r of rows) {
      const off = r.budget ? Math.round(((r.cards - r.budget) / r.budget) * 100) : null;
      const state = !r.file ? 'missing' : r.problems ? `${r.problems} problem(s)` : off !== null && Math.abs(off) > 15 ? 'off budget' : 'ok';
      console.log(`topic ${String(r.topic).padStart(2)}  ${String(r.cards).padStart(4)}${r.budget ? ` / ${r.budget}` : ''}  ${state}${r.file ? `  ${r.file}` : ''}`);
    }
    console.log(`deck-level problems: ${deckProblems}`);
  }
}

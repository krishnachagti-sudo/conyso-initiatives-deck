// Scenario cards whose explanations name the right answer as a wrong option
// while leaving a wrong option unexplained: the sign of letters that did not
// follow the answer when it moved (build/spread-answers.mjs before 2026-09-26).
//
//   node build/answer-letters.mjs [slug ...]

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parseChoices, isLabel } from './spread-answers.mjs';

export function mislettered(card) {
  const opts = parseChoices(card.choices);
  const right = String(card.back || '').match(/^\s*([A-E])[):]/)?.[1];
  if (!opts || !right || typeof card.choicesExplained !== 'string') return false;
  const text = card.choicesExplained;
  const named = new Set();
  for (let i = 0; i < text.length; i++) if (/[A-E]/.test(text[i]) && isLabel(text, i)) named.add(text[i]);
  const wrong = opts.map((o) => o.letter).filter((l) => l !== right);
  // Explanations that cover every wrong option by letter, but one is missing and the right one is there instead.
  return named.has(right) && wrong.filter((l) => !named.has(l)).length === 1 && named.size >= wrong.length;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const slugs = process.argv.slice(2).length ? process.argv.slice(2) : readdirSync('decks');
  let total = 0;
  for (const slug of slugs) {
    const dir = join('decks', slug, 'notes');
    if (!existsSync(dir)) continue;
    const hits = [];
    for (const f of readdirSync(dir).filter((x) => x.endsWith('.json'))) for (const n of JSON.parse(readFileSync(join(dir, f), 'utf8')).notes) if (mislettered(n)) hits.push(n.id);
    if (hits.length) console.log(`${slug}: ${hits.length}  ${hits.slice(0, 4).join(' ')}`);
    total += hits.length;
  }
  console.log(`${total} card(s)`);
  if (total) process.exitCode = 1;
}

// Move the right answer of a deck's own scenario cards off one letter, so a
// learner cannot guess "it's usually A" (the checker's answer-position rule).
// Pool questions keep the pool's order. For each card, the right option swaps
// places with the option at a position chosen from the card's id, and every
// letter reference in the back, explanation and choicesExplained is swapped
// to match ("A:", "B and D", "option C").
//
//   node build/spread-answers.mjs <slug> [--dry]

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

/** Options as [{letter, text}] from "A) …\nB) …", or null if not that shape. */
export function parseChoices(choices) {
  const lines = String(choices || '').split('\n').filter((l) => l.trim());
  const out = lines.map((l) => l.match(/^\s*([A-E])\)\s?(.*)$/));
  if (out.some((m) => !m) || out.length < 2 || out.some((m, i) => m[1] !== LETTERS[i])) return null;
  return out.map((m) => ({ letter: m[1], text: m[2] }));
}

/** Swap the letters a and b wherever they are used as option labels. */
export function swapLabels(text, a, b) {
  if (!text) return text;
  // A label is a lone capital followed by ) : , ; . or "and/or X", or after
  // "option". The article "A" is always followed by a word, so it never matches.
  const labelled = new RegExp(`(^|[^A-Za-z0-9])([${a}${b}])(?=\\s*[):,;.]|\\s+(?:and|or)\\s+[A-E]\\b|\\s*$)`, 'g');
  const named = new RegExp(`(\\b[Oo]ptions?\\s+)([${a}${b}])\\b`, 'g');
  const flip = (l) => (l === a ? b : a);
  // One pass per pattern, each on the original text's matches: mark first, then resolve.
  const marked = String(text).replace(labelled, (m, pre, l) => `${pre}\u0000${l}`).replace(named, (m, pre, l) => `${pre}\u0000${l}`);
  return marked.replace(/\u0000\u0000?([A-E])/g, (m, l) => flip(l));
}

export function spread(card) {
  const opts = parseChoices(card.choices);
  const right = String(card.back || '').match(/^\s*([A-E])[):]/)?.[1];
  if (!opts || !right) return false;
  const n = opts.length;
  const target = LETTERS[parseInt(createHash('sha256').update(card.id).digest('hex').slice(0, 8), 16) % n];
  if (target === right) return false;
  const i = LETTERS.indexOf(right), j = LETTERS.indexOf(target);
  [opts[i].text, opts[j].text] = [opts[j].text, opts[i].text];
  card.choices = opts.map((o) => `${o.letter}) ${o.text}`).join('\n');
  card.back = String(card.back).replace(/^(\s*)[A-E]/, `$1${target}`);
  for (const f of ['explanation', 'choicesExplained', 'why']) if (card[f]) card[f] = swapLabels(card[f], right, target);
  return true;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [slug] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  const dry = process.argv.includes('--dry');
  const dir = join('decks', slug, 'notes');
  let moved = 0;
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.json'))) {
    const p = join(dir, f);
    const d = JSON.parse(readFileSync(p, 'utf8'));
    let changed = false;
    for (const n of d.notes) if (!/[a-z]\d[a-z]\d{2}$/.test(n.id) && spread(n)) { moved += 1; changed = true; }
    if (changed && !dry) writeFileSync(p, JSON.stringify(d, null, 2) + '\n');
  }
  console.log(`${slug}: ${moved} scenario card(s) had their right answer moved${dry ? ' (dry run, nothing written)' : ''}`);
}

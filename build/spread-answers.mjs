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

// A letter after one of these words names something else: Class B airspace,
// Schedule C, Part D, vitamin E.
const NOT_A_LABEL_AFTER = new Set(('class classes type types part parts schedule schedules tier tiers section sections plan plans form forms vitamin '
  + 'appendix category categories level levels grade grades zone zones item line box column row group groups division subpart chapter unit '
  + 'figure table annex article title runway taxiway phase model series rule step stage exhibit attachment block range size area sector '
  + 'scale rating network address note hepatitis list amendment app channel band mode test drive paragraph question').split(' '));
// Words that can follow the option "A" but never the article "a".
const VERB_AFTER_A = /^(is|are|was|were|would|will|does|do|doesn't|did|can|cannot|can't|could|might|may|must|should|only|also|just|still|alone|too|either|neither|has|have|isn't|aren't|wouldn't|won't|instead|here)\b/;

/**
 * Is the lone capital at text[i] an option label ("B is wrong", "A:", "C and
 * D", "option B") rather than part of a word, a name or the article "A"?
 * Labels written as "X is wrong" were missed before 2026-09-26, which left
 * explanations calling the right answer wrong (sc-900 audits).
 */
export function isLabel(text, i) {
  const l = text[i];
  const before = text.slice(0, i), after = text.slice(i + 1);
  if (/[A-Za-z0-9'’\-_./+#&]$/.test(before)) return false;
  if (/^[A-Za-z0-9'’\-_+#&]/.test(after) || /^\.[A-Za-z0-9]/.test(after)) return false;
  const prevWord = before.match(/([A-Za-z]+)\s*$/)?.[1]?.toLowerCase();
  if (prevWord && NOT_A_LABEL_AFTER.has(prevWord)) return false;
  if (/^\s*([):,;.!?]|$)/.test(after)) return true;
  if (/^(options?|answers?|choices?)$/.test(prevWord || '')) return true;
  if (l !== 'A') return true;
  // "A" is also the article: a label only before a verb or "and/or <label>".
  const next = after.trimStart();
  return /^(and|or|nor)\s+[A-E]\b/.test(next) || VERB_AFTER_A.test(next);
}

/** Swap the letters a and b wherever they are used as option labels. */
export function swapLabels(text, a, b) {
  if (typeof text !== 'string' || !text) return text;
  const flip = (l) => (l === a ? b : a);
  return text.replace(new RegExp(`[${a}${b}]`, 'g'), (l, i) => (isLabel(text, i) ? flip(l) : l));
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

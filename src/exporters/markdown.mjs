// Markdown exports for note-taking apps (CARD-STANDARD.md §10).
//
// Obsidian Spaced Repetition plugin syntax (flashcards-general/tech.md §4,
// from the plugin README): notes tagged #flashcards; multi-line cards with the
// question, a line holding "?", then the answer; cloze via ==highlight==.
// Logseq (unofficial docs, same table): a block tagged #card with the answer
// in a child block; cloze via {{cloze …}}.

import { twoSided, inOrder, attribution, clozeAnswer, plain } from './common.mjs';

/** Obsidian: one file per deck, one multi-line card per section. */
export function obsidian(deck) {
  const out = [`#flashcards/${deck.meta.slug}`, '', `> ${attribution(deck)}`, ''];
  let topic = null;
  for (const n of inOrder(deck)) {
    if (n.topic !== topic) { topic = n.topic; out.push(`## ${topic}`, ''); }
    if (n.type === 'cloze') {
      const hl = plain(String(n.front).replace(/\{\{c\d+::(.*?)(?:::.*?)?\}\}/g, '==$1=='));
      const c = twoSided(n, { withContext: false });
      out.push(hl, '', c.back.split('\n\n').slice(1).join('\n\n'), '');
    } else {
      const c = twoSided(n, { withContext: false });
      out.push(c.front, '?', c.back, '');
    }
  }
  return out.join('\n');
}

/** Logseq: one page per deck; each card a #card block with the answer below it. */
export function logseq(deck) {
  const out = [`- ${attribution(deck)}`];
  let topic = null;
  const indent = (s, pad) => s.split('\n').filter((l) => l.trim()).map((l) => pad + l).join('\n');
  for (const n of inOrder(deck)) {
    if (n.topic !== topic) { topic = n.topic; out.push(`- ## ${topic}`); }
    if (n.type === 'cloze') {
      const cz = plain(String(n.front).replace(/\{\{c\d+::(.*?)(?:::.*?)?\}\}/g, '{{cloze $1}}'));
      out.push(`\t- ${cz} #card`);
      const extra = twoSided(n, { withContext: false }).back.split('\n\n').slice(1).join('\n');
      if (extra) out.push(indent(extra, '\t\t- '));
    } else {
      const c = twoSided(n, { withContext: false });
      out.push(`\t- ${c.front.replace(/\n+/g, ' ')} #card`);
      out.push(indent(c.back, '\t\t- '));
    }
  }
  return out.join('\n') + '\n';
}

export { clozeAnswer };

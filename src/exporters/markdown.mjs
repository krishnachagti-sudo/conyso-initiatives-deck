// Markdown exports for note-taking and flashcard apps (CARD-STANDARD.md §10).
// Every syntax below is from the app's own documentation, as recorded in
// flashcards-general/import-formats.md:
//   Obsidian Spaced Repetition: `#flashcards/<deck>` tag; multi-line cards
//     with a line holding only "?"; both sides must touch the separator; a
//     BLANK LINE ENDS A CARD; cloze via ==highlight==.
//   Logseq: a block with #card; answer as a child block; {{cloze x}}.
//   RemNote: `Question >> Answer`; multi-line answers with `>>>` on the front
//     bullet and the lines as child bullets; cloze {{text}}.
//   Mochi: a line of `---` splits the sides of a card; one file split into
//     cards on a delimiter chosen at import; cloze {{text}}.

import { twoSided, inOrder, attribution, plain } from './common.mjs';

const CLOZE = /\{\{c\d+::(.*?)(?:::.*?)?\}\}/g;
const oneLine = (s) => String(s).replace(/\s*\n+\s*/g, ' ').trim();
const lines = (s) => String(s).split('\n').map((l) => l.trim()).filter(Boolean);

/** Obsidian: one file per deck. No blank line inside a card, one between cards. */
export function obsidian(deck) {
  const out = [`#flashcards/${deck.meta.slug}`, '', `> ${attribution(deck)}`, ''];
  let topic = null;
  for (const n of inOrder(deck)) {
    if (n.topic !== topic) { topic = n.topic; out.push(`## ${topic}`, ''); }
    const c = twoSided(n, { withContext: false, sep: '\n', figure: 'md' });
    if (n.type === 'cloze') {
      const hl = oneLine(plain(String(n.front).replace(CLOZE, '==$1==')));
      out.push(hl, ...lines(c.extra.join('\n')), '');
    } else {
      out.push(...lines(c.front), '?', ...lines(c.back), '');
    }
  }
  return out.join('\n');
}

/** Logseq: one page per deck; each card a #card block with the answer below it. */
export function logseq(deck) {
  const out = [`- ${attribution(deck)}`];
  let topic = null;
  for (const n of inOrder(deck)) {
    if (n.topic !== topic) { topic = n.topic; out.push(`- ## ${topic}`); }
    const c = twoSided(n, { withContext: false, sep: '\n', figure: 'md' });
    if (n.type === 'cloze') {
      out.push(`\t- ${oneLine(plain(String(n.front).replace(CLOZE, '{{cloze $1}}')))} #card`);
      for (const l of lines(c.extra.join('\n'))) out.push(`\t\t- ${l}`);
    } else {
      out.push(`\t- ${oneLine(c.front)} #card`);
      for (const l of lines(c.back)) out.push(`\t\t- ${l}`);
    }
  }
  return out.join('\n') + '\n';
}

/** RemNote: `Q >>> ` with the answer lines as child bullets; cloze as {{text}}. */
export function remnote(deck) {
  const out = [`- ${attribution(deck)}`];
  let topic = null;
  for (const n of inOrder(deck)) {
    if (n.topic !== topic) { topic = n.topic; out.push(`- ${topic}`); }
    const c = twoSided(n, { withContext: false, sep: '\n', figure: 'md' });
    if (n.type === 'cloze') {
      out.push(`  - ${oneLine(plain(String(n.front).replace(CLOZE, '{{$1}}')))}`);
    } else {
      out.push(`  - ${oneLine(c.front)} >>>`);
      for (const l of lines(c.back)) out.push(`    - ${l}`);
    }
  }
  return out.join('\n') + '\n';
}

/** Card separator for the Mochi Markdown file, entered at import. */
export const MOCHI_CARD_DELIMITER = '===';

/** Mochi Markdown: sides split by `---`, cards split by the delimiter above. */
export function mochiMarkdown(deck) {
  const cards = inOrder(deck).map((n) => {
    const c = twoSided(n, { withContext: true, sep: '\n\n', figure: 'md' });
    if (n.type === 'cloze') {
      const cz = `${n.topic} › ${oneLine(plain(String(n.front).replace(CLOZE, '{{$1}}')))}`;
      return [cz, '---', c.extra.join('\n\n')].join('\n');
    }
    return [c.front, '---', c.back].join('\n');
  });
  return cards.join(`\n${MOCHI_CARD_DELIMITER}\n`) + '\n';
}

// Mochi's native .mochi file (flashcards-general/import-formats.md, Mochi
// format reference): a ZIP holding data.edn (or data.json with Transit
// encoding, which was not verified, so EDN is used), with `:version 2`,
// `:decks` (each with `:name`, a globally unique `:id` keyword of at least 8
// characters from [0-9A-Za-z], and `:cards`), and cards with `:content`
// (Markdown; `---` splits sides; `{{text}}` is a cloze) and `:pos`
// (lexicographic order). Ids are derived from the deck id and card id so they
// are stable across releases. Whether a re-import with the same card `:id`
// overwrites or adds a copy is NOT documented, so the deck page does not
// promise updates for Mochi.

import { createHash } from 'node:crypto';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';

import { twoSided, inOrder, attribution, plain } from './common.mjs';

const CLOZE = /\{\{c\d+::(.*?)(?:::.*?)?\}\}/g;
const ALPHA = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
/** A stable 12-character [0-9A-Za-z] id that starts with a letter. */
export function mochiId(...parts) {
  const h = createHash('sha256').update(parts.join('\u0000')).digest();
  let s = ALPHA[10 + (h[0] % 52)]; // EDN keywords must not start with a digit
  for (let i = 1; i < 12; i += 1) s += ALPHA[h[i] % ALPHA.length];
  return s;
}
const str = (s) => JSON.stringify(String(s)); // JSON string escapes are valid EDN

export function mochiEdn(deck) {
  const deckId = mochiId('deck', String(deck.meta.id));
  const cards = inOrder(deck).map((n, i) => {
    const c = twoSided(n, { withContext: true, sep: '\n\n', figure: 'md' });
    const content = n.type === 'cloze'
      ? `${n.topic} › ${plain(String(n.front).replace(CLOZE, '{{$1}}'))}\n---\n${c.extra.join('\n\n')}`
      : `${c.front}\n---\n${c.back}`;
    return `{:id :${mochiId('card', String(deck.meta.id), n.id)} :pos ${str(String(i + 1).padStart(6, '0'))} :content ${str(content)}}`;
  });
  const description = `${deck.meta.description || ''}\n\n${attribution(deck)}`.trim();
  return `{:version 2\n :decks [{:id :${deckId}\n          :name ${str(deck.meta.title)}\n          :cards [${cards.join('\n                  ')}]}]\n ;; ${description.replace(/\n/g, ' ')}\n}\n`;
}

/** Write the .mochi ZIP with Python's standard library (no extra dependency). */
export function writeMochi(deck, outPath) {
  const dir = mkdtempSync(join(tmpdir(), 'mochi-'));
  const edn = join(dir, 'data.edn');
  writeFileSync(edn, mochiEdn(deck));
  execFileSync('python3', ['-c', 'import sys,zipfile\nwith zipfile.ZipFile(sys.argv[2],"w",zipfile.ZIP_DEFLATED) as z: z.write(sys.argv[1],"data.edn")', edn, outPath]);
}

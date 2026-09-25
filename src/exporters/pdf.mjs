// PDF exports (CARD-STANDARD.md §10). HTML rendered to PDF by headless
// Chromium, so no PDF library is needed.
//
// Implemented now: the study sheet, every card as a question, its answer and
// its explanation, in teaching order, for reading and revision on paper.
// Waiting on the import-format research: double-sided cut-out cards, where
// the back page must be mirrored for the printer's flip edge. That layout is
// not built on a guess.

import { writeFileSync, existsSync, mkdtempSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';

import { twoSided, inOrder, attribution } from './common.mjs';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const para = (s) => esc(s).split('\n\n').map((p) => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');

/** The study sheet as a self-contained HTML document. */
export function studySheetHTML(deck) {
  const rows = [];
  let topic = null;
  let i = 0;
  for (const n of inOrder(deck)) {
    if (n.topic !== topic) { topic = n.topic; rows.push(`<h2>${esc(topic)}</h2>`); }
    i += 1;
    const c = twoSided(n, { withContext: false, figure: 'none' });
    const img = n._fig ? `<figure><img src="${pathToFileURL(resolve(n._fig.path)).href}" alt="${esc(n._fig.alt)}"></figure>` : '';
    rows.push(`<section class="card${n.kind === 'primer' ? ' primer' : ''}">
<div class="q"><span class="n">${i}.</span> ${para(c.front)}${n._fig?.side === 'front' ? img : ''}</div>${n._fig?.side === 'back' ? img : ''}
<div class="a">${para(c.back)}</div>
</section>`);
  }
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(deck.meta.title)} · study sheet</title>
<style>
@page { margin: 16mm 14mm; }
body { font-family: -apple-system, "Segoe UI", Roboto, Arial, sans-serif; font-size: 11pt; line-height: 1.45; color: #1c1c1c; }
h1 { font-size: 18pt; margin: 0 0 4pt; }
.meta { font-size: 9pt; color: #555; margin-bottom: 12pt; }
h2 { font-size: 13pt; border-bottom: 1px solid #999; padding-bottom: 2pt; margin: 16pt 0 6pt; break-after: avoid; }
.card { break-inside: avoid; margin: 0 0 8pt; padding: 6pt 8pt; border: 1px solid #ccc; }
.card.primer { border-left: 3px solid #1c1c1c; }
.q { font-weight: 600; }
.a { margin-top: 4pt; }
.n { color: #555; }
figure { margin: 4pt 0; } figure img { max-width: 100%; max-height: 70mm; }
p { margin: 0 0 4pt; }
</style></head><body>
<h1>${esc(deck.meta.title)}</h1>
<div class="meta">${esc(attribution(deck))}<br>Study sheet: cover the answer, say it aloud, then check. Primer cards (marked on the left) introduce each idea first.</div>
${rows.join('\n')}
</body></html>`;
}

/** Headless Chromium: CHROME_BIN, the preinstalled Playwright copy, or PATH. */
export function findChromium() {
  const candidates = [process.env.CHROME_BIN, '/opt/pw-browsers/chromium', 'chromium', 'chromium-browser', 'google-chrome'].filter(Boolean);
  for (const c of candidates) {
    if (c.startsWith('/') && !existsSync(c)) continue;
    try { execFileSync(c, ['--version'], { stdio: 'ignore' }); return c; } catch { /* next */ }
  }
  return null;
}

/** Render an HTML string to a PDF file. Throws without Chromium. */
export function htmlToPdf(html, outPath) {
  const chrome = findChromium();
  if (!chrome) throw new Error('Chromium not found: set CHROME_BIN');
  const dir = mkdtempSync(join(tmpdir(), 'pdf-'));
  const src = join(dir, 'page.html');
  writeFileSync(src, html);
  execFileSync(chrome, ['--headless', '--no-sandbox', '--disable-gpu', '--no-pdf-header-footer', `--print-to-pdf=${outPath}`, `file://${src}`], { stdio: 'ignore' });
}

export const writeStudySheet = (deck, outPath) => htmlToPdf(studySheetHTML(deck), outPath);

// ── Printable double-sided cards ─────────────────────────────────────────────
// Grid of 2 columns × 4 rows per sheet, symmetric margins, dashed cut lines.
// Pages alternate: fronts, then the matching backs. For long-edge duplex, the
// back page is the front grid mirrored left to right, so the card in row r,
// column c backs onto row r, column (cols − 1 − c). That mirroring rule is our
// own reasoning (import-formats.md, "Printable PDFs"), not a sourced claim, so
// the first page is an alignment test to print before the deck. Avery sheet
// margins are not published in anything we could read, so no Avery layout is
// claimed: these are plain sheets for cutting.

const SHEETS = {
  letter: { size: 'letter', w: '8.5in', h: '11in', margin: '0.5in' },
  a4: { size: 'A4', w: '210mm', h: '297mm', margin: '12mm' },
};
const COLS = 2;
const ROWS = 4;

const cardText = (s, limit) => {
  const t = esc(s);
  return `<div class="t${s.length > limit ? ' small' : ''}">${t.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>')}</div>`;
};

export function cardsHTML(deck, sheet = 'letter') {
  const sh = SHEETS[sheet];
  const notes = inOrder(deck);
  const per = COLS * ROWS;
  const pages = [];
  const grid = (cells) => `<div class="page"><div class="grid">${cells.join('')}</div></div>`;
  // Alignment test: a number in each cell on both sides.
  const nums = [...Array(per).keys()].map((i) => i + 1);
  pages.push(grid(nums.map((i) => `<div class="cell"><div class="t big">Front ${i}</div></div>`)));
  pages.push(grid(nums.map((_, i) => {
    const r = Math.floor(i / COLS); const c = i % COLS; const src = r * COLS + (COLS - 1 - c);
    return `<div class="cell"><div class="t big">Back ${src + 1}</div></div>`;
  })));
  for (let p = 0; p < notes.length; p += per) {
    const chunk = notes.slice(p, p + per);
    const fronts = [];
    const backs = [];
    for (let i = 0; i < per; i += 1) {
      const n = chunk[i];
      const c = n && twoSided(n, { withContext: false, withSource: false, sep: '\n\n', figure: 'none' });
      const fimg = n && n._fig && n._fig.side === 'front' ? `<img class="cimg" src="${pathToFileURL(resolve(n._fig.path)).href}" alt="${esc(n._fig.alt)}">` : '';
      fronts.push(n ? `<div class="cell"><div class="ctx">${esc(n.topic)} · ${p + i + 1}</div>${cardText(c.front, 160)}${fimg}</div>` : '<div class="cell empty"></div>');
    }
    for (let i = 0; i < per; i += 1) {
      const r = Math.floor(i / COLS); const col = i % COLS; const src = r * COLS + (COLS - 1 - col);
      const n = chunk[src];
      const c = n && twoSided(n, { withContext: false, withSource: false, sep: '\n\n', figure: 'none' });
      const back = n ? [c.answer, c.extra[0] || ''].filter(Boolean).join('\n\n') : '';
      backs.push(n ? `<div class="cell"><div class="ctx">${p + src + 1}</div>${cardText(back, 220)}</div>` : '<div class="cell empty"></div>');
    }
    pages.push(grid(fronts), grid(backs));
  }
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(deck.meta.title)} · cards</title>
<style>
@page { size: ${sh.size}; margin: ${sh.margin}; }
* { box-sizing: border-box; }
body { margin: 0; font-family: -apple-system, "Segoe UI", Roboto, Arial, sans-serif; color: #1c1c1c; }
.page { width: calc(${sh.w} - 2 * ${sh.margin}); height: calc(${sh.h} - 2 * ${sh.margin}); page-break-after: always; }
.grid { display: grid; grid-template-columns: repeat(${COLS}, 1fr); grid-template-rows: repeat(${ROWS}, 1fr); width: 100%; height: 100%; }
.cell { border: 1px dashed #888; padding: 10pt; overflow: hidden; display: flex; flex-direction: column; }
.cell.empty { border-color: #ddd; }
.ctx { font-size: 7.5pt; color: #555; margin-bottom: 4pt; }
.t { font-size: 10.5pt; line-height: 1.35; }
.t.small { font-size: 8.5pt; }
.cimg { max-width: 100%; max-height: 45%; object-fit: contain; margin-top: 4pt; }
.t.big { font-size: 20pt; margin: auto; }
</style></head><body>${pages.join('\n')}</body></html>`;
}

export const writeCardsLetter = (deck, outPath) => htmlToPdf(cardsHTML(deck, 'letter'), outPath);
export const writeCardsA4 = (deck, outPath) => htmlToPdf(cardsHTML(deck, 'a4'), outPath);

// PDF exports (CARD-STANDARD.md §10). HTML rendered to PDF by headless
// Chromium, so no PDF library is needed.
//
// Implemented now: the study sheet, every card as a question, its answer and
// its explanation, in teaching order, for reading and revision on paper.
// Waiting on the import-format research: double-sided cut-out cards, where
// the back page must be mirrored for the printer's flip edge. That layout is
// not built on a guess.

import { writeFileSync, existsSync, mkdtempSync } from 'node:fs';
import { join } from 'node:path';
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
    const c = twoSided(n, { withContext: false });
    rows.push(`<section class="card${n.kind === 'primer' ? ' primer' : ''}">
<div class="q"><span class="n">${i}.</span> ${para(c.front)}</div>
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

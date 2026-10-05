// Small visuals built at build time from a deck's own cards and counts
// (playbook: plain inline HTML and SVG, no chart library). Nothing here is
// illustrative filler: every card shown is a real card, every bar a real count.

import { inOrder } from '../exporters/common.mjs';
import { cardParts } from './deck-data.mjs';
import qrcode from './vendor/qrcode.mjs';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const KIND_LABEL = { primer: 'Explain', fact: 'Recall', application: 'Apply', classification: 'Recognise', contrast: 'Tell apart' };
const KIND_ORDER = ['primer', 'fact', 'application', 'classification', 'contrast'];

/** A stacked bar of the deck's card kinds, with a legend. */
export function kindBar(kinds, total) {
  const parts = KIND_ORDER.filter((k) => kinds[k]);
  return `<div class="kindbar" role="img" aria-label="${esc(parts.map((k) => `${kinds[k]} ${KIND_LABEL[k].toLowerCase()} cards`).join(', '))}">
<div class="kb-bar">${parts.map((k) => `<i class="kb-${k}" style="flex:${kinds[k]}"></i>`).join('')}</div>
<ul class="kb-legend">${parts.map((k) => `<li><i class="kb-${k}"></i>${KIND_LABEL[k]} <b>${kinds[k]}</b></li>`).join('')}</ul>
</div>`;
}

/**
 * Three real cards on one concept, in the order the deck teaches them: the
 * primer that explains it, a card that makes you recall it, and a card that
 * makes you apply it. Returns null if a deck has no such trio.
 */
export function teachingTrio(deck) {
  const notes = inOrder(deck);
  for (const p of notes.filter((n) => n.kind === 'primer')) {
    const c = (p.conceptIDs || [])[0];
    const f = notes.find((n) => n.kind === 'fact' && (n.conceptIDs || []).includes(c) && n.type !== 'cloze');
    const a = notes.find((n) => ['application', 'classification'].includes(n.kind) && (n.conceptIDs || []).includes(c) && !n.choices);
    if (f && a) return [p, f, a].map(cardParts);
  }
  return null;
}

export function trioHTML(trio, { href = '' } = {}) {
  const steps = [['1', 'Explain', 'A primer card teaches the idea in plain words.'], ['2', 'Recall', 'Then a card asks you to bring it back.'], ['3', 'Apply', 'Then a card asks you to use it.']];
  return `<ol class="trio">${trio.map((c, i) => `<li>
<div class="trio-step"><span class="trio-n">${steps[i][0]}</span><b>${steps[i][1]}</b><span>${steps[i][2]}</span></div>
<div class="icard mini"><div class="ic-top"><span>${esc(c.topic)}</span><b>${esc(c.kind)}</b></div><div class="ic-q"><p>${esc(c.front)}</p></div><div class="ic-rule"></div><div class="ic-a"><p class="ic-ans">${esc(c.answer)}</p></div></div>
</li>`).join('')}</ol>${href ? `<p class="trio-more"><a class="link" href="${href}">See the whole teaching path →</a></p>` : ''}`;
}

/**
 * A QR code as inline SVG, drawn at build time (src/site/vendor/qrcode.mjs).
 * One path, each row's dark runs merged, with the standard four-module quiet
 * zone. Dark on a white ground in both themes, since scanners expect that.
 */
export function qrSVG(text, { label = '', ecl = 'M' } = {}) {
  const q = qrcode(0, ecl);
  q.addData(String(text));
  q.make();
  const n = q.getModuleCount();
  const quiet = 4;
  const size = n + quiet * 2;
  let d = '';
  for (let r = 0; r < n; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (!q.isDark(r, c)) continue;
      let run = 1;
      while (c + run < n && q.isDark(r, c + run)) run += 1;
      d += `M${c + quiet} ${r + quiet}h${run}v1h-${run}z`;
      c += run - 1;
    }
  }
  return `<svg class="qr" viewBox="0 0 ${size} ${size}" role="img" aria-label="${esc(label || `QR code for ${text}`)}" shape-rendering="crispEdges"><rect width="${size}" height="${size}" fill="#fff"/><path d="${d}" fill="#141821"/></svg>`;
}

// /daily/: "The daily ten". Ten cards a day from across the released decks,
// the same ten for everyone on a UTC date. The selection is src/assets/daily-core.js,
// imported here and loaded by the browser, so both pick the same ten. This
// module writes daily/pool.json and, for the build date and the 400 days after
// it, daily/days/<YYYY-MM-DD>.json with just that day's ten, which is what the
// page and the home page's card of the day fetch. A browser falls back to the
// pool and picks for itself only when a day file is missing. The sample a
// reader without JavaScript sees is the build date's ten.
//
// pool.json:
//   { v: 1, launch: '2026-10-04', built: 'YYYY-MM-DD',
//     decks: { <slug>: { t: short title, f: family title } },
//     cards: [ { d: deck slug, n: short deck title, t: topic, q: question,
//                a: answer, c?: [choice texts, A first], k?: index of the right choice,
//                x?: short explanation } ] }
// Only cards that stand alone without their deck go in: multiple-choice
// scenario cards whose answer names one choice, and short facts. Never
// primers (they teach in sequence), never cards with a figure.

import { pick, dayFile, addDays } from '../../assets/daily-core.js';
import { esc, page, crumbs, otherWays } from '../layout.mjs';
import { deckStats, cardParts } from '../deck-data.mjs';

export const DAYS_AHEAD = 400;
const n0 = (n) => Number(n).toLocaleString('en-GB');
const LETTERS = 'ABCDEFGH';

const fnv = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); } return h >>> 0; };

const SEQUENCE = /\b(this deck|the previous card|the next card|earlier card|above|below)\b/i;

/** A card as a pool entry, or null when it does not stand alone. */
export function poolCard(note, deckMeta) {
  if (note.kind === 'primer' || note.image) return null;
  const p = cardParts(note);
  if (p.image || !p.front || !p.answer || SEQUENCE.test(p.front)) return null;
  const base = { d: deckMeta.slug, n: deckMeta.shortTitle || deckMeta.title, t: p.topic };
  const x = p.why && p.why.length <= 300 ? p.why : undefined;
  if (p.choices) {
    const rows = p.choices.split('\n').map((l) => l.trim()).filter(Boolean);
    const parsed = rows.map((l) => l.match(/^([A-H])\)\s+(.+)$/));
    if (rows.length < 2 || rows.length > 6 || parsed.some((m, i) => !m || m[1] !== LETTERS[i])) return null;
    const c = parsed.map((m) => m[2]);
    if (c.some((t) => t.length > 180) || p.front.length > 520) return null;
    // The answer names its letter ("C: …", "C) …") or repeats one choice's text.
    const am = p.answer.match(/^([A-H])\s*[:)]\s/);
    const norm = (s) => s.toLowerCase().replace(/[.\s]+$/, '').trim();
    const k = am ? LETTERS.indexOf(am[1]) : c.findIndex((t) => norm(t) === norm(p.answer));
    if (k < 0 || k >= c.length) return null;
    return { ...base, q: p.front, a: p.answer, c, k, ...(x ? { x } : {}) };
  }
  if (note.kind !== 'fact') return null;
  if (p.front.length > 220 || p.answer.length > 180) return null;
  return { ...base, q: p.front, a: p.answer, ...(x ? { x } : {}) };
}

/**
 * The pool: from every released deck, up to `perDeck` cards, about seven in ten
 * multiple choice. The cap shrinks as decks are added so the file stays near
 * `target` cards. Cards are taken in an order fixed by a hash of their ID, so
 * a rebuild picks the same cards unless the deck changed.
 */
export function buildPool(decks, { target = 1800, built = '' } = {}) {
  const released = decks.filter((d) => d.meta.status === 'released' && !d.meta.personal);
  const perDeck = Math.max(12, Math.min(60, Math.floor(target / Math.max(1, released.length))));
  const out = { v: 1, launch: '2026-10-04', built, decks: {}, cards: [] };
  for (const d of [...released].sort((a, b) => a.meta.slug.localeCompare(b.meta.slug))) {
    const m = d.meta;
    const cands = deckStats(d).notes
      .map((n) => ({ id: n.id, c: poolCard(n, m) }))
      .filter((x) => x.c)
      .sort((a, b) => fnv(a.id) - fnv(b.id) || a.id.localeCompare(b.id));
    const mc = cands.filter((x) => x.c.c);
    const facts = cands.filter((x) => !x.c.c);
    let wantMC = Math.round(perDeck * 0.7);
    let wantFact = perDeck - wantMC;
    if (mc.length < wantMC) { wantFact += wantMC - mc.length; wantMC = mc.length; }
    if (facts.length < wantFact) { wantMC = Math.min(mc.length, wantMC + wantFact - facts.length); wantFact = facts.length; }
    const picked = [...mc.slice(0, wantMC), ...facts.slice(0, wantFact)];
    if (!picked.length) continue;
    out.decks[m.slug] = { t: m.shortTitle || m.title, f: m.familyTitle || m.family || m.slug };
    // Keep the deck's teaching order inside the pool, for a stable file.
    const order = new Map(deckStats(d).notes.map((n, i) => [n.id, i]));
    picked.sort((a, b) => order.get(a.id) - order.get(b.id));
    out.cards.push(...picked.map((x) => x.c));
  }
  return out;
}

const lines = (s) => esc(s).split('\n').join('<br>');

function sampleCard(cfg, c, i) {
  const choices = c.c ? `<p class="ic-choices">${c.c.map((t, j) => `${LETTERS[j]}) ${esc(t)}`).join('<br>')}</p>` : '';
  return `<li><div class="icard"><div class="ic-top"><span>${String(i + 1).padStart(2, '0')} · ${esc(c.n)} · ${esc(c.t)}</span><b>${c.c ? 'multiple choice' : 'fact'}</b></div>`
    + `<div class="ic-q"><p>${lines(c.q)}</p>${choices}</div>`
    + `<details class="dy-reveal"><summary>Show the answer</summary><div class="ic-rule"></div><div class="ic-a"><p class="ic-ans">${lines(c.a)}</p>${c.x ? `<p class="ic-x"><b>Why</b> ${lines(c.x)}</p>` : ''}</div></details>`
    + `<p class="ic-src"><a href="${cfg.base}${esc(c.d)}/">From the ${esc(c.n)} deck → study the whole deck</a></p></div></li>`;
}

const STYLE = `<style>
.dy-app{margin:22px 0 10px;max-width:46em}
.dy-bar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 16px;font-family:var(--mono);font-size:13.5px;color:var(--faint);margin-bottom:12px}
.dy-dots{letter-spacing:2px;font-size:13px}
.dy-stage .icard{min-height:220px}
.dy-choices{display:grid;gap:8px;margin:14px 0 18px}
.dy-choice{display:flex;gap:12px;align-items:flex-start;text-align:left;font:inherit;font-size:17px;line-height:1.45;font-weight:400;color:var(--read);background:var(--surface-2);border:1px solid var(--line-strong);border-radius:var(--r);padding:10px 14px;cursor:pointer;min-height:46px;width:100%}
.dy-choice:hover:not(:disabled){border-color:var(--ink);color:var(--ink)}
.dy-choice:disabled{cursor:default;opacity:1}
.dy-choice .dy-l{font-family:var(--mono);font-weight:700;color:var(--ink);flex:0 0 auto;min-width:1.2em}
.dy-choice.is-right{background:var(--ok-soft);border-color:var(--ok);color:var(--ink)}
.dy-choice.is-right .dy-l::after{content:' ✓';color:var(--ok)}
.dy-choice.is-wrong{background:var(--accent-soft);border-color:var(--accent);color:var(--ink)}
.dy-choice.is-wrong .dy-l::after{content:' ✗';color:var(--accent)}
.dy-controls{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}
.dy-stage .keys{font-family:var(--mono);font-size:13px;color:var(--faint);margin-top:10px}
.dy-said{min-height:1.4em;margin-top:8px;color:var(--muted)}
.dy-result{background:var(--surface);border:1px solid var(--line);border-radius:var(--r);box-shadow:var(--e2);padding:20px 22px}
.dy-result h2{font-size:clamp(26px,3vw,34px)}
.dy-grid{font-size:28px;letter-spacing:4px;margin:10px 0 6px;line-height:1.3;overflow-wrap:anywhere}
.dy-stats{display:flex;flex-wrap:wrap;gap:10px 28px;margin:10px 0 16px}
.dy-stats dt{font-family:var(--mono);font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--faint)}
.dy-stats dd{font-family:var(--mono);font-size:20px;font-weight:700;color:var(--ink)}
.dy-share-text{font-family:var(--mono);font-size:14px;line-height:1.6;white-space:pre-wrap;overflow-wrap:anywhere;background:var(--bg);color:var(--ink);border:1px dashed var(--line-strong);border-radius:var(--r);padding:12px 14px;margin:0 0 12px}
.dy-result .share{gap:8px}
.dy-next{margin-top:14px;color:var(--read)}
.dy-cod{margin-top:30px}
.dy-cod h3,.dy-sample h2{margin-bottom:12px}
.dy-review{margin-top:26px}
.dy-review summary,.dy-reveal summary{cursor:pointer;font-weight:700;color:var(--ink)}
.dy-reveal{margin:10px 0 4px}
.dy-reveal summary{font-family:var(--mono);font-size:13.5px;color:var(--accent-ink);padding:4px 0}
.dy-list{list-style:none;padding:0;display:grid;grid-template-columns:minmax(0,1fr);gap:16px;margin-top:14px}
.dy-list > li{min-width:0}
.dy-app .icard,.dy-list .icard{overflow-wrap:anywhere}
.icard .ic-top span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dy-sample{margin-top:28px;max-width:46em}
.dy-sample .dy-list .icard{box-shadow:var(--e1)}
.dy-how{max-width:46em;padding:34px 0 10px}
.dy-how h2{font-size:clamp(24px,2.4vw,30px);margin:26px 0 8px}
.dy-how p{color:var(--read)}
@media(max-width:560px){.dy-grid{font-size:22px;letter-spacing:2px}.dy-choice{font-size:16px}.dy-result{padding:16px}}
</style>`;

export async function build({ cfg, decks }) {
  const built = new Date().toISOString().slice(0, 10);
  const pool = buildPool(decks, { built });
  const sample = pick(pool, built, 10).map((i) => pool.cards[i]);
  const days = {};
  for (let i = 0; i <= DAYS_AHEAD; i++) { const key = addDays(built, i); days[`daily/days/${key}.json`] = JSON.stringify(dayFile(pool, key)); }
  const examCount = Object.keys(pool.decks).length;
  const families = new Set(Object.values(pool.decks).map((x) => x.f)).size;
  const url = `${cfg.origin}${cfg.base}daily/`;
  const shareURL = url;

  const body = `${STYLE}<div class="wrap">
${crumbs(cfg, [['The daily ten', 'daily/']])}
<div class="hub-head"><h1>The daily ten</h1><p class="kicker" data-daily-num>A new ten every day at midnight UTC</p>
<p class="lead">Ten cards from across ${n0(examCount)} exam decks, the same ten for everyone today. Answer them, see your score, share it, and come back tomorrow.</p></div>
<div id="daily-app" class="dy-app" hidden data-brand="${esc(cfg.brand)}" data-share-url="${esc(shareURL)}" data-pool="${cfg.base}daily/pool.json" aria-label="Today’s ten cards"></div>
<section class="dy-sample" data-daily-fallback aria-labelledby="dy-sample-h">
<h2 id="dy-sample-h">A sample ten</h2>
<p>Today’s ten are picked in your browser, so the player needs JavaScript. These ten were picked the same way on ${esc(built)}, when this page was built. Say your answer, then open the card to check it.</p>
<ol class="dy-list">${sample.map((c, i) => sampleCard(cfg, c, i)).join('')}</ol>
</section>
<section class="dy-how prose" aria-labelledby="dy-how-h">
<h2 id="dy-how-h">How are the ten chosen?</h2>
<p>From a pool of ${n0(pool.cards.length)} cards that make sense on their own: multiple-choice scenarios and short facts from ${n0(examCount)} decks in ${n0(families)} exam families. The date seeds a fixed shuffle, so everyone gets the same ten on the same day. No two cards come from the same deck until every deck has had a turn, and each day mixes exam families.</p>
<h2>Is my score stored anywhere?</h2>
<p>Only in your own browser. Your streak and past scores are kept on this device and never sent anywhere. In a private window they are forgotten when you close it.</p>
<h2>Where do the cards come from?</h2>
<p>Every card is from a free deck on this site and cites its public source. Each card links to its deck, so if a card catches your interest you can study the whole exam from zero.</p>
</section>
</div>
${otherWays(cfg, 'daily/')}`;

  const html = page(cfg, {
    title: `The Daily Ten: Exam Flashcards | ${cfg.brand}`,
    description: `Ten flashcards a day from ${n0(examCount)} certification decks, the same ten for everyone. Score yourself, keep a streak and share your result. Free, no account.`,
    path: 'daily/',
    body,
    active: 'daily',
    og: 'og/daily.png',
    count: decks.reduce((a, d) => a + d.notes.length, 0),
    decks,
    graph: [
      { '@type': 'WebPage', '@id': `${url}#page`, name: 'The daily ten', url, description: `Ten flashcards a day from ${examCount} certification decks.`, isPartOf: { '@id': `${cfg.origin}${cfg.base}#website` } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: cfg.brand, item: `${cfg.origin}${cfg.base}` }, { '@type': 'ListItem', position: 2, name: 'The daily ten', item: url }] },
    ],
    scripts: `<script src="${cfg.base}assets/daily.js" defer></script>`,
  });

  return { pages: { 'daily/': html }, files: { 'daily/pool.json': JSON.stringify(pool), ...days }, urls: ['daily/'] };
}

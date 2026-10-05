// The reader's own desk: card anchors and reports, the QR code, the phone
// steps, "Study these", the shelf table and page, and the shared chrome
// (nav, settings, shortcuts, script order).
import test from 'node:test';
import assert from 'node:assert/strict';

import { loadDeck, slugify } from '../src/decks.mjs';
import { deckPage, phoneBlock } from '../src/site/deck-page.mjs';
import { cardAnchor, cardReportURL } from '../src/site/deck-data.mjs';
import { qrSVG } from '../src/site/visuals.mjs';
import { page, NAV } from '../src/site/layout.mjs';
import { shelfTable, build as buildShelf } from '../src/site/pages/shelf.mjs';

const cfg = { base: '/decks/', origin: 'https://conyso.com', brand: 'Conyso Decks' };
const deck = () => loadDeck('test/fixtures/decks/example');

test('cardAnchor: "c-" and the card ID with dots as dashes', () => {
  assert.equal(cardAnchor('psm2.empiricism.what-is-x'), 'c-psm2-empiricism-what-is-x');
  assert.equal(cardAnchor('a'), 'c-a');
});

test('cardReportURL: keeps the labels and names the card in the title', () => {
  const u = new URL(cardReportURL('https://github.com/o/r/issues/new?labels=card-report&title=Card+report%3A+deck', 'deck.topic.card'));
  assert.equal(u.searchParams.get('labels'), 'card-report');
  assert.equal(u.searchParams.get('title'), 'Card report: deck.topic.card');
  assert.equal(cardReportURL('', 'x'), '');
});

test('qrSVG: one square path on a white ground with a quiet zone, labelled, stable', () => {
  const svg = qrSVG('https://conyso.com/primer/psm-ii/psm-ii-1.0.0.apkg', { label: 'QR code: PSM II' });
  const [, w, h] = svg.match(/viewBox="0 0 (\d+) (\d+)"/).map(Number);
  assert.equal(w, h);
  assert.ok(w >= 21 + 8 && (w - 8 - 17) % 4 === 0, 'a valid QR size (17 + 4 × version) plus the four-module margin each side');
  assert.match(svg, /role="img" aria-label="QR code: PSM II"/);
  assert.match(svg, /<rect width="\d+" height="\d+" fill="#fff"\/>/);
  assert.equal((svg.match(/<path /g) || []).length, 1);
  assert.match(svg, /d="M4 4h7v1h-7z/, 'the top-left finder starts inside the quiet zone');
  assert.equal(svg, qrSVG('https://conyso.com/primer/psm-ii/psm-ii-1.0.0.apkg', { label: 'QR code: PSM II' }));
});

test('phone block: QR, three sets of steps that read without script, tabbed by data attributes', () => {
  const html = phoneBlock('https://conyso.com/x/x.apkg', { file: 'x.apkg', bytes: 2048 }, 'X');
  assert.match(html, /<svg class="qr"/);
  for (const os of ['ios', 'android', 'desktop']) assert.match(html, new RegExp(`data-tab-panel data-os="${os}"`));
  assert.match(html, /AnkiMobile/); assert.match(html, /AnkiDroid/); assert.match(html, /apps\.ankiweb\.net/);
  assert.match(html, /<div class="ph-tabs" data-tabs>/);
});

test('deck page: card anchors with the old IDs kept, card tools, Study these per step, save and due hooks', () => {
  const d = deck();
  const html = deckPage(cfg, d, { files: [{ format: 'apkg', label: 'Anki', file: 'example-0.1.0.apkg', bytes: 4096 }] });
  for (const n of d.notes) {
    assert.ok(html.includes(`<li id="${cardAnchor(n.id)}"><i id="${n.id}"></i>`), `${n.id} has both anchors`);
    assert.ok(html.includes(`<a href="#${cardAnchor(n.id)}">Link to card</a>`));
  }
  assert.match(html, /title=Card\+report%3A\+/);
  for (const t of d.topics) assert.ok(html.includes(`href="?topic=${slugify(t.topic)}#try"`), `Study these: ${t.topic}`);
  assert.match(html, /data-save-deck="example"[^>]*hidden/);
  assert.match(html, /data-due="example"/);
  assert.match(html, /class="entry-grid" data-deck="example"/);
  assert.match(html, /id="phone"/);
  assert.doesNotMatch(deckPage(cfg, d, { files: [] }), /id="phone"/, 'no package, no QR');
});

test('chrome: Shelf in the nav, settings and shortcuts present, store.js before the other scripts, the service worker registered', () => {
  assert.ok(NAV.some(([k, p]) => k === 'shelf' && p === 'shelf/'));
  const html = page(cfg, { title: 'T', description: 'D', path: '', body: '<p>x</p>', scripts: '<script src="/decks/assets/x.js" defer></script>' });
  assert.match(html, /<a href="\/decks\/shelf\/">Shelf<span class="nav-n" data-shelf-count><\/span><\/a>/);
  assert.match(html, /id="settings-btn"[^>]*hidden/);
  assert.match(html, /<div class="settings" id="settings" role="dialog"[^>]*hidden>/);
  assert.match(html, /<dialog class="kbd-sheet" id="kbd"/);
  assert.match(html, /data-kbd-open/);
  const at = (s) => html.indexOf(s);
  assert.ok(at('assets/store.js') > 0 && at('assets/store.js') < at('assets/common.js') && at('assets/common.js') < at('assets/shelf.js') && at('assets/shelf.js') < at('assets/x.js'));
  assert.match(html, /navigator\.serviceWorker\.register\('\/decks\/sw\.js',\{scope:'\/decks\/'\}\)/);
  assert.match(html, /primer:v1:settings/, 'settings are applied in <head>, before first paint');
});

test('shelf: a small table of released decks and an indexable page with an empty state', async () => {
  const d = deck();
  d.meta.status = 'released';
  const t = shelfTable([d]);
  assert.deepEqual(Object.keys(t[0]).sort(), ['c', 'f', 'h', 'n', 's', 't']);
  assert.equal(t[0].s, 'example');
  assert.equal(t[0].c, d.notes.length);
  const res = await buildShelf({ cfg, decks: [d] });
  const html = res.pages['shelf/'];
  assert.deepEqual(res.urls, ['shelf/']);
  assert.match(html, /<meta name="robots" content="index, follow/);
  assert.match(html, /id="shelf-empty"/);
  assert.match(html, /<script type="application\/json" id="shelf-data">\[/);
  assert.match(html, /class="on" aria-current="page">Shelf/);
});

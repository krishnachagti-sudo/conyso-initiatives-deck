// The deck page, the shared identity, and the preflight gate.
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, cpSync, rmSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';

import { loadDeck } from '../src/decks.mjs';
import { deckPage } from '../src/site/deck-page.mjs';
import { homePage } from '../src/site/home.mjs';
import { FOUNDER, FOUNDER_ID, CONYSO_ID } from '../src/site/identity.mjs';
import { preflight } from '../build/preflight.mjs';

const cfg = { base: '/decks/', origin: 'https://conyso.com', brand: 'Conyso Decks' };
const deck = () => loadDeck('test/fixtures/decks/example');
const manifest = { files: [{ format: 'csv', label: 'CSV, front and back', file: 'example-0.1.0.csv', bytes: 2048 }] };
const graph = (html) => JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];

test('identity is byte-identical to the other Conyso properties', () => {
  // Change these only together with conyso.com, the Law Tome and the Bias Atlas.
  assert.equal(FOUNDER_ID, 'https://conyso.com/founder/#person');
  assert.equal(CONYSO_ID, 'https://conyso.com/#organization');
  assert.equal(FOUNDER.name, 'Krishna Chagti');
  assert.equal(FOUNDER.jobTitle, 'Founder & CEO');
  assert.equal(FOUNDER.sameAs.length, 9);
  assert.equal(FOUNDER.sameAs[0], FOUNDER.url);
});

test('deck page: the answer box first, then question sections in order, every card, an anchor per topic', () => {
  const html = deckPage(cfg, deck(), manifest);
  assert.ok(html.indexOf('id="answer"') < html.indexOf('<section class="sec" id="path"'), 'the one question is answered before any section');
  assert.match(html, /Will this deck teach me Example deck \(test fixture\) from zero\?/);
  const order = ['path', 'try', 'download', 'time', 'import', 'method', 'limits', 'cards', 'sources', 'about'];
  const at = order.map((id) => html.indexOf(`id="${id}" aria-labelledby`));
  assert.ok(at.every((i) => i > 0), 'every section present');
  assert.deepEqual(at, [...at].sort((a, b) => a - b), 'in order');
  for (const id of order.filter((x) => x !== 'about')) assert.match(html, new RegExp(`<h2 id="${id}-h">[^<]*\\?</h2>`), `${id} heading is a question`);
  for (const n of deck().notes) assert.match(html, new RegExp(`id="${n.id.replace(/\./g, '\\.')}"`));
  assert.match(html, /<details class="topic" id="t-widgets"/);
  assert.match(html, /<a class="dl-tile" href="example-0\.1\.0\.csv" download/);
  assert.match(html, /<link rel="canonical" href="https:\/\/conyso\.com\/decks\/example\/">/);
  assert.match(html, /noindex/, 'unreleased decks are never indexed');
});

test('deck page: the answer box states counts the deck proves', () => {
  const html = deckPage(cfg, deck(), manifest);
  const primers = deck().notes.filter((n) => n.kind === 'primer').length;
  assert.match(html, new RegExp(`${primers} primer cards explain all ${primers} of its terms, each before any card tests it`));
  assert.match(html, /1 day to see every card/);
});

test('deck page: study data parses and cannot close its script tag', () => {
  const d = deck();
  d.notes[0].front = 'Is </script><b>x</b> safe?';
  const html = deckPage(cfg, d, manifest);
  const raw = html.match(/<script type="application\/json" id="study-data">([\s\S]*?)<\/script>/)[1];
  assert.ok(!raw.includes('<'));
  const data = JSON.parse(raw);
  assert.equal(data.length, 7);
  assert.deepEqual(Object.keys(data[0]).slice(0, 5), ['id', 'topic', 'kind', 'core', 'front']);
  assert.ok(data.every((c) => c.answer && c.sourceURL));
});

test('deck page: LearningResource with publisher, author and downloads', () => {
  const g = graph(deckPage(cfg, deck(), manifest));
  const lr = g.find((n) => n['@type'] === 'LearningResource');
  assert.equal(lr.publisher['@id'], 'https://conyso.com/decks/#organization');
  assert.equal(lr.author['@id'], FOUNDER_ID);
  assert.equal(lr.isAccessibleForFree, true);
  assert.equal(lr.encoding[0].contentUrl, 'https://conyso.com/decks/example/example-0.1.0.csv');
  assert.ok(lr.teaches.length > 0);
  const org = g.find((n) => n['@id'] === 'https://conyso.com/decks/#organization');
  assert.equal(org.parentOrganization['@id'], CONYSO_ID);
});

test('home page lists every deck and links its page', () => {
  const html = homePage(cfg, [deck()]);
  assert.match(html, /<a class="deck-card" href="\/decks\/example\/">/);
  assert.match(html, /7 cards · 3 primers/);
});

test('preflight: passes a clean build, catches broken links, bad canonicals and a blocked email', async () => {
  const dist = mkdtempSync(join(tmpdir(), 'dist-'));
  mkdirSync(join(dist, 'example'));
  writeFileSync(join(dist, 'example', 'example-0.1.0.csv'), 'Front,Back\r\n');
  mkdirSync(join(dist, 'example', 'media'));
  cpSync('test/fixtures/decks/example/media/sprocket.svg', join(dist, 'example', 'media', 'example-sprocket.svg'));
  writeFileSync(join(dist, 'example', 'index.html'), deckPage(cfg, deck(), manifest));
  writeFileSync(join(dist, 'index.html'), homePage(cfg, [deck()]));
  const { methodPage, formatsPage } = await import('../src/site/hubs.mjs');
  for (const [p, f] of [['method', methodPage], ['formats', formatsPage]]) { mkdirSync(join(dist, p)); writeFileSync(join(dist, p, 'index.html'), f(cfg, [deck()])); }
  cpSync('src/assets', join(dist, 'assets'), { recursive: true });
  assert.deepEqual(preflight(dist, cfg), []);
  rmSync(join(dist, 'assets', 'study.js'));
  assert.ok(preflight(dist, cfg).some((p) => p.message === 'broken link /decks/assets/study.js'));

  const fake = 'someone@example.net';
  const digest = createHash('sha256').update(fake).digest('hex');
  writeFileSync(join(dist, 'leak.html'), `<link rel="canonical" href="https://elsewhere.test/"><p>${fake}</p><a href="nope/">x</a>`);
  const msgs = preflight(dist, cfg, [digest]).filter((p) => p.file === 'leak.html').map((p) => p.message);
  assert.ok(msgs.includes('contains a private email address'));
  assert.ok(msgs.some((m) => m.startsWith('canonical https://elsewhere.test/')));
  assert.ok(msgs.includes('broken link /decks/nope/'));
});

test('a build for another host is a noindex preview with no IndexNow key', async () => {
  const { loadConfig } = await import('../src/site/config.mjs');
  const real = loadConfig([]);
  assert.equal(real.preview, false);
  const pv = loadConfig(['--origin=https://x.github.io/', '--base=repo']);
  assert.equal(pv.origin, 'https://x.github.io');
  assert.equal(pv.base, '/repo/');
  assert.equal(pv.preview, true);
  assert.equal(pv.indexNowKey, undefined);
  const html = homePage(pv, [deck()]);
  assert.match(html, /<meta name="robots" content="noindex, nofollow">/);
  assert.match(html, /<link rel="canonical" href="https:\/\/x\.github\.io\/repo\/">/);
});

test('colour tokens: text clears AA on every ground, and surfaces separate, in both themes', () => {
  const css = readFileSync('src/assets/site.css', 'utf8');
  const block = (sel) => css.slice(css.indexOf(sel)).split('}')[0];
  const tok = (b, name) => b.match(new RegExp(`--${name}:(#[0-9a-f]{6})`))[1];
  const lum = (hex) => {
    const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
  for (const sel of [':root{', 'html[data-theme="dark"]{']) {
    const b = block(sel);
    for (const ground of ['bg', 'surface', 'surface-2']) {
      for (const fg of ['ink', 'read', 'muted', 'faint']) {
        const r = ratio(tok(b, fg), tok(b, ground));
        assert.ok(r >= 4.5, `${sel} --${fg} on --${ground} is ${r.toFixed(2)}:1`);
      }
      for (const fg of ['accent', 'accent-ink', 'gold', 'ok']) {
        const r = ratio(tok(b, fg), tok(b, ground));
        assert.ok(r >= 4.5, `${sel} --${fg} on --${ground} is ${r.toFixed(2)}:1`);
      }
    }
    // Surfaces must separate (playbook: a card lifts off the page at about 1.25:1,
    // a border reads against its card at about 1.40:1), and button text must be
    // well clear of AA on the accent.
    const sep = (x, y, min) => { const r = ratio(tok(b, x), tok(b, y)); assert.ok(r >= min, `${sel} --${x} against --${y} is ${r.toFixed(2)}:1, under ${min}`); };
    sep('surface', 'bg', 1.25);
    sep('surface-2', 'bg', 1.15);
    sep('line', 'surface', 1.4);
    sep('on-accent', 'accent', 5.5);
  }
});

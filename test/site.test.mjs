// The deck page, the shared identity, and the preflight gate.
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
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

test('deck page: sections in the §8 order, every card, and an anchor per topic', () => {
  const html = deckPage(cfg, deck(), manifest);
  const order = ['start-here', 'study', 'download', 'can-and-cannot', 'import', 'settings', 'how-to', 'behind', 'exam', 'cards', 'made', 'sources', 'licence'];
  const at = order.map((id) => html.indexOf(`<section id="${id}"`));
  assert.ok(at.every((i) => i > 0), 'every section present');
  assert.deepEqual(at, [...at].sort((a, b) => a - b), 'in order');
  for (const n of deck().notes) assert.match(html, new RegExp(`id="${n.id.replace(/\./g, '\\.')}"`));
  assert.match(html, /<section class="topic" id="widgets">/);
  assert.match(html, /<a href="example-0\.1\.0\.csv" download>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/conyso\.com\/decks\/example\/">/);
  assert.match(html, /noindex/, 'fixture decks are never indexed');
});

test('deck page: study data parses and cannot close its script tag', () => {
  const d = deck();
  d.notes[0].front = 'Is </script><b>x</b> safe?';
  const html = deckPage(cfg, d, manifest);
  const raw = html.match(/<script type="application\/json" id="study-data">([\s\S]*?)<\/script>/)[1];
  assert.ok(!raw.includes('<'));
  const data = JSON.parse(raw);
  assert.equal(data.length, 7);
  assert.deepEqual(Object.keys(data[0]), ['id', 'kind', 'core', 'front', 'back']);
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

test('home page lists decks by family and links each deck page', () => {
  const html = homePage(cfg, [deck()]);
  assert.match(html, /<a href="\/decks\/example\/">Example deck/);
  assert.match(html, /7 cards/);
});

test('preflight: passes a clean build, catches broken links, bad canonicals and a blocked email', () => {
  const dist = mkdtempSync(join(tmpdir(), 'dist-'));
  mkdirSync(join(dist, 'example'));
  mkdirSync(join(dist, 'assets'));
  writeFileSync(join(dist, 'assets', 'site.css'), '');
  writeFileSync(join(dist, 'example', 'example-0.1.0.csv'), 'Front,Back\r\n');
  writeFileSync(join(dist, 'example', 'index.html'), deckPage(cfg, deck(), manifest));
  writeFileSync(join(dist, 'index.html'), homePage(cfg, [deck()]));
  const clean = preflight(dist, cfg).filter((p) => !p.message.includes('study.js'));
  assert.deepEqual(clean, []);
  assert.ok(preflight(dist, cfg).some((p) => p.message === 'broken link /decks/assets/study.js'));

  const fake = 'someone@example.net';
  const digest = createHash('sha256').update(fake).digest('hex');
  writeFileSync(join(dist, 'leak.html'), `<link rel="canonical" href="https://elsewhere.test/"><p>${fake}</p><a href="nope/">x</a>`);
  const msgs = preflight(dist, cfg, [digest]).filter((p) => p.file === 'leak.html').map((p) => p.message);
  assert.ok(msgs.includes('contains a private email address'));
  assert.ok(msgs.some((m) => m.startsWith('canonical https://elsewhere.test/')));
  assert.ok(msgs.includes('broken link /decks/nope/'));
});

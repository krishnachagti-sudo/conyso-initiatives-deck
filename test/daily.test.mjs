// The daily ten (src/assets/daily-core.js, shared by src/assets/daily.js and
// src/site/pages/daily.mjs) and the deck page's study helpers (src/assets/study.js,
// run here in a bare vm context with no DOM).
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

import { loadDeck } from '../src/decks.mjs';
import { buildPool, poolCard, build, DAYS_AHEAD } from '../src/site/pages/daily.mjs';
import * as D from '../src/assets/daily-core.js';
const plain = (x) => JSON.parse(JSON.stringify(x)); // values from the vm realm
const study = () => { const ctx = {}; vm.runInNewContext(readFileSync('src/assets/study.js', 'utf8'), ctx); return ctx.StudyKit; };

// A synthetic pool: 14 decks in 5 families, 12 cards each, every third a fact.
const fakePool = () => {
  const decks = {}; const cards = [];
  for (let i = 0; i < 14; i++) {
    const slug = `deck-${String(i).padStart(2, '0')}`;
    decks[slug] = { t: `Deck ${i}`, f: `Family ${i % 5}` };
    for (let j = 0; j < 12; j++) cards.push({ d: slug, n: `Deck ${i}`, t: 'T', q: `${slug} q${j}`, a: 'A: yes', ...(j % 3 ? { c: ['yes', 'no'], k: 0 } : {}) });
  }
  return { v: 1, decks, cards };
};

test('daily: numbered from the launch date, 2026-10-04 is #1', () => {
  assert.equal(D.LAUNCH, '2026-10-04');
  assert.equal(D.dailyNumber('2026-10-04'), 1);
  assert.equal(D.dailyNumber('2026-10-26'), 23);
  assert.equal(D.dailyNumber('2027-10-04'), 366);
  assert.equal(D.dayKey(Date.UTC(2026, 9, 4, 23, 59)), '2026-10-04', 'the day is the UTC date');
  assert.equal(D.dayKey(Date.UTC(2026, 9, 5, 0, 0)), '2026-10-05');
});

test('daily: the generator is deterministic and stays in [0, 1)', () => {
  const a = D.mulberry32(D.hash('daily:2026-10-04'));
  const b = D.mulberry32(D.hash('daily:2026-10-04'));
  const xs = Array.from({ length: 1000 }, () => a());
  assert.deepEqual(xs, Array.from({ length: 1000 }, () => b()));
  assert.ok(xs.every((x) => x >= 0 && x < 1));
  assert.notEqual(D.hash('daily:2026-10-04'), D.hash('daily:2026-10-05'));
  assert.equal(D.hash(''), 0x811c9dc5, 'FNV-1a offset basis');
});

test('daily: the same ten for everyone on a date, a different ten the next day', () => {
  const pool = fakePool();
  const day = plain(D.pick(pool, '2026-10-04'));
  assert.equal(day.length, 10);
  assert.deepEqual(plain(D.pick(plain(pool), '2026-10-04')), day, 'same pool, same date, same ten');
  assert.equal(new Set(day).size, 10, 'no card twice');
  assert.notDeepEqual(plain(D.pick(pool, '2026-10-05')), day);
});

test('daily: a day mixes decks and families, with three facts in fixed slots', () => {
  const pool = fakePool();
  for (const key of ['2026-10-04', '2026-11-30', '2027-02-14', '2028-02-29']) {
    const cards = plain(D.pick(pool, key)).map((i) => pool.cards[i]);
    assert.equal(new Set(cards.map((c) => c.d)).size, 10, `${key}: ten different decks`);
    assert.equal(new Set(cards.map((c) => pool.decks[c.d].f)).size, 5, `${key}: every family`);
    assert.deepEqual(cards.map((c) => !c.c), [false, false, true, false, false, true, false, false, true, false], `${key}: facts in slots 3, 6, 9`);
  }
});

test('daily: small pools still work', () => {
  const one = { decks: { a: { t: 'A', f: 'F' } }, cards: [{ d: 'a', q: '1', a: '1' }, { d: 'a', q: '2', a: '2' }, { d: 'a', q: '3', a: '3' }] };
  assert.equal(plain(D.pick(one, '2026-10-04')).length, 3);
  assert.deepEqual(plain(D.pick({ decks: {}, cards: [] }, '2026-10-04')), []);
});

test('daily: share text, streaks and the countdown', () => {
  const marks = [true, true, false, true, true, true, false, true, true, true];
  assert.equal(D.shareText('The Exam Primer', 23, marks, 'conyso.com/primer/daily/'),
    'The Exam Primer · Daily #23\n🟩🟩🟥🟩🟩🟩🟥🟩🟩🟩 8/10\nconyso.com/primer/daily/');
  const h = { '2026-10-04': {}, '2026-10-05': {}, '2026-10-06': {}, '2026-10-09': {} };
  assert.equal(D.streak(h, '2026-10-06'), 3);
  assert.equal(D.streak(h, '2026-10-07'), 3, 'today not played yet: the streak still stands');
  assert.equal(D.streak(h, '2026-10-08'), 0);
  assert.equal(D.streak(h, '2026-10-09'), 1);
  assert.equal(D.streak({}, '2026-10-09'), 0);
  assert.equal(D.bestStreak(h), 3);
  assert.equal(D.msToNextDay(Date.UTC(2026, 9, 4, 23, 0, 0)), 3600000);
  assert.equal(D.clock(3600000 + 61000), '01:01:01');
});

test('daily: pool cards stand alone, and the page has a no-script sample', async () => {
  const deck = loadDeck('test/fixtures/decks/example');
  for (const n of deck.notes) {
    const c = poolCard(n, deck.meta);
    if (!c) continue;
    assert.notEqual(n.kind, 'primer');
    assert.ok(!n.image);
    if (c.c) { assert.ok(c.k >= 0 && c.k < c.c.length); assert.match(c.a, new RegExp(`^${'ABCDEFGH'[c.k]}\\s*[:)]`)); }
  }
  const released = { ...deck, meta: { ...deck.meta, status: 'released' } };
  const pool = buildPool([released, { ...deck, meta: { ...deck.meta, status: 'draft', slug: 'draft' } }]);
  assert.deepEqual(Object.keys(pool.decks), [deck.meta.slug], 'released decks only');
  assert.ok(pool.cards.every((c) => c.d === deck.meta.slug && c.q && c.a));
  assert.deepEqual(buildPool([released]), pool, 'the pool is stable from build to build');

  const cfg = { base: '/primer/', origin: 'https://conyso.com', brand: 'The Exam Primer' };
  const res = await build({ cfg, decks: [released] });
  assert.deepEqual(res.urls, ['daily/']);
  assert.ok(res.files['daily/pool.json']);
  const html = res.pages['daily/'];
  assert.match(html, /id="daily-app"[^>]*hidden/);
  assert.match(html, /data-daily-fallback/);
  assert.match(html, /data-share-url="https:\/\/conyso\.com\/primer\/daily\/"/);
  assert.match(html, /assets\/daily\.js/);
  assert.doesNotMatch(html, /—/, 'no em dashes in page copy');
});

test('study: share line, planner and progress', () => {
  const S = study();
  assert.equal(S.sessionShare(18, 20, 'PSM II', 'https://conyso.com/primer/psm-ii/'), 'I scored 18/20 on PSM II flashcards · conyso.com/primer/psm-ii/');
  assert.deepEqual(plain(S.plan(700, '2026-12-01', '2026-10-04')), { days: 58, study: 51, perDay: 14 });
  assert.equal(S.plan(700, '2026-10-08', '2026-10-04').perDay, 0, 'under a week: no plan for new cards');
  const ids = ['a.1', 'a.2', 'a.3', 'a.4'];
  const marks = { [S.cardKey('a.1')]: 'k', [S.cardKey('a.2')]: 'a', [S.cardKey('a.3')]: 's', other: 'k' };
  assert.deepEqual(plain(S.tally(marks, ids)), { seen: 3, known: 1, again: 1 });
  assert.equal(S.cardKey('a.1'), S.cardKey('a.1'));
  assert.notEqual(S.cardKey('a.1'), S.cardKey('a.2'));
});

test('daily: the build\'s day files and the browser\'s own pick are the same ten', async () => {
  const deck = loadDeck('test/fixtures/decks/example');
  const cfg = { base: '/primer/', origin: 'https://conyso.com', brand: 'The Exam Primer' };
  // Several decks, so a day has something to choose between.
  const decks = ['a', 'b', 'c', 'd'].map((x, i) => ({ ...deck, meta: { ...deck.meta, slug: `${deck.meta.slug}-${x}`, familyTitle: `F${i % 2}`, status: 'released' } }));
  const res = await build({ cfg, decks });
  const pool = JSON.parse(res.files['daily/pool.json']);
  const dayFiles = Object.keys(res.files).filter((f) => f.startsWith('daily/days/'));
  assert.equal(dayFiles.length, DAYS_AHEAD + 1, 'the build date and 400 days after it');
  const first = dayFiles.sort()[0].slice(11, 21);
  assert.equal(first, new Date().toISOString().slice(0, 10));
  // The browser loads daily-core.js as its own module (import() in daily.js); load a
  // separate instance of the same file the way a browser would, from its source.
  const src = readFileSync('src/assets/daily-core.js', 'utf8');
  const browser = await import(`data:text/javascript;base64,${Buffer.from(src).toString('base64')}`);
  for (const key of [first, D.addDays(first, 1), D.addDays(first, 37), D.addDays(first, DAYS_AHEAD)]) {
    const file = JSON.parse(res.files[`daily/days/${key}.json`]);
    assert.deepEqual(file, JSON.parse(JSON.stringify(browser.dayFile(pool, key))), key);
    assert.deepEqual(file.cards, browser.pick(pool, key).map((i) => pool.cards[i]), key);
    assert.equal(file.num, D.dailyNumber(key));
  }
  const js = readFileSync('src/assets/daily.js', 'utf8');
  assert.match(js, /import\(new URL\('daily-core\.js'/, 'the browser uses the shared module');
  assert.doesNotMatch(js, /mulberry32|function pick/, 'and keeps no copy of the selection');
  assert.match(js, /daily\/days\//, 'it reads the day file first');
});

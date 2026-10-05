// The study widget's helpers, run in a bare vm context with no DOM:
// src/assets/srs-core.js (the scheduler and the calendar file) and
// src/assets/store.js (what the browser remembers, and moving older keys in).
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const plain = (x) => JSON.parse(JSON.stringify(x)); // values from the vm realm
const load = (file, ctx = {}) => { vm.runInNewContext(readFileSync(file, 'utf8'), ctx); return ctx; };
const SRS = load('src/assets/srs-core.js').PrimerSRS;
const Primer = load('src/assets/store.js').Primer;
const Kit = load('src/assets/study.js').StudyKit;

/** A Storage stand-in: optional quota (in characters) and a "private mode" that throws. */
class MemStorage {
  constructor({ quota = Infinity, throws = false } = {}) { this.m = new Map(); this.quota = quota; this.throws = throws; }
  get length() { return this.m.size; }
  key(i) { return [...this.m.keys()][i] ?? null; }
  getItem(k) { if (this.throws) throw new Error('SecurityError'); return this.m.has(k) ? this.m.get(k) : null; }
  setItem(k, v) {
    if (this.throws) { const e = new Error('blocked'); e.name = 'SecurityError'; throw e; }
    const used = [...this.m].reduce((n, [a, b]) => n + (a === k ? 0 : a.length + b.length), 0);
    if (used + k.length + String(v).length > this.quota) { const e = new Error('full'); e.name = 'QuotaExceededError'; throw e; }
    this.m.set(k, String(v));
  }
  removeItem(k) { this.m.delete(k); }
}
const events = () => { const log = []; return { log, win: { CustomEvent: class { constructor(t, o) { this.type = t; this.detail = o.detail; } }, dispatchEvent: (e) => log.push(e.detail) } }; };
const at = (y, m, d, h = 12, min = 0) => new Date(y, m - 1, d, h, min).getTime();

// ── srs-core ──────────────────────────────────────────────────────────────
test('srs: intervals climb 1, 3, 7, 16, 35 days, and Again comes back today', () => {
  const t = SRS.dayNum(at(2026, 10, 5));
  let e;
  const seen = [];
  for (let i = 0; i < 7; i++) { e = SRS.grade(e, 'k', t); seen.push(e[1] - t); }
  assert.deepEqual(seen, [1, 3, 7, 16, 35, 35, 35]);
  assert.deepEqual(plain(SRS.grade(e, 'a', t)), [0, t, 'a'], 'again: box 0, due today');
  assert.equal(SRS.grade(SRS.grade(e, 'a', t), 'k', t)[1] - t, 1, 'after Again, the climb starts over');
  assert.equal(SRS.nextInterval(undefined), 1);
  assert.equal(SRS.nextInterval([2, t, 'k']), 7);
  // A card that was only turned is still new.
  assert.ok(SRS.isNew(SRS.seen(undefined)));
  assert.equal(SRS.grade(SRS.seen(undefined), 'k', t)[0], 1);
});

test('srs: due counts and the order of a due session', () => {
  const t = 20000;
  const c = { a: [1, t - 3, 'k'], b: [0, t, 'a'], c: [2, t + 1, 'k'], d: [0, null, 's'], e: [1, t - 1, 'k'] };
  assert.equal(SRS.dueCount(c, t), 3);
  assert.equal(SRS.dueCount(c, t + 1), 4);
  assert.equal(SRS.dueCount(c, t, ['a', 'c', 'zz']), 1, 'only the keys asked for');
  const cards = ['a', 'b', 'c', 'd', 'e', 'f'].map((id) => ({ id, topic: id < 'd' ? 'Scrum Theory' : 'Événements & Co' }));
  assert.deepEqual(plain(SRS.queue('due', cards, c, t)), ['a', 'e', 'b'], 'longest overdue first');
  assert.deepEqual(plain(SRS.queue('new', cards, c, t)), ['d', 'f'], 'unmarked cards, turned ones included');
  assert.deepEqual(plain(SRS.queue('all', cards, c, t)), ['a', 'b', 'c', 'd', 'e', 'f']);
  assert.deepEqual(plain(SRS.queue('topic', cards, c, t, { topic: 'evenements-co' })), ['d', 'e', 'f'], 'topic slugs match the build');
  assert.equal(SRS.slugify('Scrum Theory'), 'scrum-theory');
});

test('srs: at most 20 new cards a day, counted again from midnight', () => {
  const late = SRS.dayNum(at(2026, 10, 5, 23, 59));
  const early = SRS.dayNum(at(2026, 10, 6, 0, 1));
  assert.equal(early - late, 1, 'a new day starts at local midnight');
  let n;
  for (let i = 0; i < 18; i++) n = SRS.countNew(n, late);
  assert.equal(SRS.newLeft(n, late), 2);
  const cards = Array.from({ length: 50 }, (_, i) => ({ id: `x${i}`, topic: 'T' }));
  assert.equal(SRS.queue('new', cards, {}, late, { left: SRS.newLeft(n, late) }).length, 2);
  assert.equal(SRS.queue('new', cards, {}, late).length, 20, 'the default limit');
  n = SRS.countNew(SRS.countNew(n, late), late);
  assert.equal(SRS.newLeft(n, late), 0);
  assert.equal(SRS.newLeft(n, early), 20, 'the next day starts fresh');
  assert.deepEqual(plain(SRS.countNew(n, early)), [early, 1]);
  // A card known at 23:59 is due the next morning.
  const e = SRS.grade(undefined, 'k', late);
  assert.ok(!SRS.isDue(e, late) && SRS.isDue(e, early));
});

test('srs: day keys and the exam plan', () => {
  assert.equal(SRS.dayKey(SRS.fromKey('2026-10-05')), '2026-10-05');
  assert.equal(SRS.dayKey(SRS.fromKey('2028-02-29') + 1), '2028-03-01');
  assert.deepEqual(plain(SRS.plan(700, '2026-12-01', '2026-10-04')), plain(Kit.plan(700, '2026-12-01', '2026-10-04')));
});

// ── the calendar file ─────────────────────────────────────────────────────
test('ics: a valid RFC 5545 calendar, one entry a day to the exam', () => {
  const text = SRS.calendar({ deck: 'PSM II, Scrum; “advanced”', slug: 'psm-ii', url: 'https://conyso.com/primer/psm-ii/#try', cards: 700, today: '2026-10-05', exam: '2026-11-05', host: 'conyso.com', now: Date.UTC(2026, 9, 5, 8, 30, 15) });
  assert.ok(text.endsWith('\r\n'));
  assert.ok(!/[^\r]\n/.test(text), 'every line ends in CRLF');
  const raw = text.split('\r\n').slice(0, -1);
  for (const l of raw) assert.ok(Buffer.byteLength(l) <= 75, `folded: ${l}`);
  const lines = text.replace(/\r\n /g, '').split('\r\n').slice(0, -1); // unfolded
  assert.equal(lines[0], 'BEGIN:VCALENDAR');
  assert.equal(lines.at(-1), 'END:VCALENDAR');
  assert.ok(lines.includes('VERSION:2.0'));
  assert.ok(lines.some((l) => l.startsWith('PRODID:')));
  const events = text.replace(/\r\n /g, '').split('BEGIN:VEVENT').slice(1);
  assert.equal(events.length, 32, '31 study days and the exam day');
  const uids = new Set();
  for (const ev of events) {
    assert.match(ev, /\r\nUID:psm-ii-\d{8}-exam-20261105@conyso\.com\r\n/);
    assert.match(ev, /\r\nDTSTAMP:20261005T083015Z\r\n/);
    assert.match(ev, /\r\nDTSTART;VALUE=DATE:\d{8}\r\nDTEND;VALUE=DATE:\d{8}\r\n/);
    assert.match(ev, /END:VEVENT\r\n/);
    uids.add(/UID:(.+)/.exec(ev)[1]);
  }
  assert.equal(uids.size, 32, 'unique UIDs');
  assert.match(events[0], /DTSTART;VALUE=DATE:20261005\r\nDTEND;VALUE=DATE:20261006/);
  // 700 cards over 31 - 7 = 24 days: 30 a day, then a week of review.
  assert.match(events[0], /SUMMARY:PSM II\\, Scrum\\; “advanced”: 30 new cards/);
  assert.match(events[0], /DESCRIPTION:Today’s target: 30 new cards\\, plus the cards due for review\.\\nOpen the deck: https:\/\/conyso\.com\/primer\/psm-ii\/#try/);
  assert.match(events[24], /DTSTART;VALUE=DATE:20261029[\s\S]*SUMMARY:[^\r]*: review/);
  assert.match(events[31], /DTSTART;VALUE=DATE:20261105[\s\S]*exam day/);
  // Folding never splits a multi-byte character.
  const long = SRS.icsFold('DESCRIPTION:' + '“é”'.repeat(40));
  assert.equal(long.replace(/\r\n /g, ''), 'DESCRIPTION:' + '“é”'.repeat(40));
  for (const l of long.split('\r\n')) assert.ok(Buffer.byteLength(l) <= 75);
  assert.equal(SRS.icsText('a,b;c\\d\ne'), 'a\\,b\\;c\\\\d\\ne');
});

test('ics: under a week to go is review days only', () => {
  const text = SRS.calendar({ deck: 'CKA', slug: 'cka', url: 'u', cards: 900, today: '2026-10-05', exam: '2026-10-08', now: 0 });
  assert.equal((text.match(/BEGIN:VEVENT/g) || []).length, 4);
  assert.ok(!/: \d+ new card/.test(text));
});

// ── store.js ──────────────────────────────────────────────────────────────
test('store: get, set, events, lists and settings', () => {
  const ls = new MemStorage();
  const { log, win } = events();
  const attrs = {};
  const doc = { documentElement: { setAttribute: (k, v) => { attrs[k] = v; }, removeAttribute: (k) => { delete attrs[k]; } } };
  const s = Primer.createStore(ls, { win, doc, now: () => at(2026, 10, 5) });
  assert.equal(s.persistent, true);
  assert.equal(s.get('nope', 7), 7);
  assert.equal(s.set('x', { a: 1 }), true);
  assert.equal(ls.getItem('primer:v1:x'), '{"a":1}');
  assert.deepEqual(plain(s.get('x')), { a: 1 });
  assert.deepEqual(plain(log.at(-1)), { key: 'x' });
  for (let i = 0; i < 14; i++) s.touchDeck(`d${i}`, `Deck ${i}`);
  s.touchDeck('d3', 'Deck 3');
  assert.equal(s.recentDecks().length, 12);
  assert.equal(s.recentDecks()[0].slug, 'd3');
  assert.equal(s.toggleShelf('cka', 'CKA'), true);
  assert.equal(s.onShelf('cka'), true);
  assert.deepEqual(plain(s.shelf()), ['cka']);
  assert.equal(s.toggleShelf('cka'), false);
  assert.deepEqual(plain(s.shelf()), []);
  for (let i = 0; i < 10; i++) s.addSearch(`q${i}`);
  s.addSearch('Q9');
  assert.deepEqual(plain(s.recentSearches()), ['Q9', 'q8', 'q7', 'q6', 'q5', 'q4', 'q3', 'q2']);
  assert.deepEqual(plain(s.settings()), { textSize: 'm', font: 'default', contrast: 'normal', focus: false });
  assert.deepEqual(attrs, { 'data-text': 'm', 'data-font': 'default', 'data-contrast': 'normal' });
  s.setSettings({ textSize: 'xl', focus: true, bogus: 1 });
  assert.deepEqual(attrs, { 'data-text': 'xl', 'data-font': 'default', 'data-contrast': 'normal', 'data-focus': 'on' });
  s.setSettings({ textSize: 'huge', focus: false });
  assert.equal(s.settings().textSize, 'm', 'unknown values fall back');
  assert.ok(!('data-focus' in attrs));
});

test('store: progress and due counts from the deck record', () => {
  const ls = new MemStorage();
  const now = at(2026, 10, 5);
  const s = Primer.createStore(ls, { now: () => now });
  assert.deepEqual(plain(s.progress('cka')), { seen: 0, known: 0, again: 0, due: 0, total: 0, lastAt: 0, lastCardId: null, lastTopic: null, lastTopicTitle: null });
  const t = s.dayNum(now);
  s.setDeck('cka', { c: { a: [1, t + 1, 'k'], b: [0, t, 'a'], c: [0, null, 's'], d: [2, t - 2, 'k'] }, id: 'cka.03.007', topic: 'storage', tt: 'Storage', total: 900, at: now });
  assert.deepEqual(plain(s.progress('cka')), { seen: 4, known: 2, again: 1, due: 2, total: 900, lastAt: now, lastCardId: 'cka.03.007', lastTopic: 'storage', lastTopicTitle: 'Storage' });
  s.set('other', 1);
  assert.deepEqual(Object.keys(s.allProgress()), ['cka']);
});

test('store: older keys move in without losing progress', () => {
  const ls = new MemStorage();
  const S = Kit;
  ls.setItem('study-marks:/primer/psm-ii/', JSON.stringify({ [S.cardKey('p.1')]: 'k', [S.cardKey('p.2')]: 'a', [S.cardKey('p.3')]: 's' }));
  ls.setItem('study:/primer/psm-ii/', JSON.stringify({ coreOnly: true, skipPrimers: false, againOnly: true, id: 'p.2' }));
  ls.setItem('exam-date:/primer/psm-ii/', '2026-12-01');
  ls.setItem('exam-date:/primer/cka/index.html', '2027-01-15');
  ls.setItem('daily:history', JSON.stringify({ '2026-10-04': { s: 8, n: 10 } }));
  ls.setItem('daily:progress', JSON.stringify({ key: '2026-10-05', marks: [1] }));
  ls.setItem('theme', 'dark');
  const now = at(2026, 10, 5);
  const s = Primer.createStore(ls, { now: () => now });
  const t = s.dayNum(now);
  const r = plain(s.deck('psm-ii'));
  assert.deepEqual(r.c[S.cardKey('p.2')], [0, t, 'a']);
  assert.deepEqual(r.c[S.cardKey('p.3')], [0, null, 's']);
  assert.equal(r.c[S.cardKey('p.1')][2], 'k');
  assert.ok(r.c[S.cardKey('p.1')][1] > t, 'known cards come back later');
  assert.deepEqual(r.f, { coreOnly: true, skipPrimers: false });
  assert.equal(r.id, 'p.2');
  assert.equal(r.exam, '2026-12-01');
  assert.equal(s.deck('cka').exam, '2027-01-15');
  const p = s.progress('psm-ii');
  assert.equal(p.seen, 3); assert.equal(p.known, 1); assert.equal(p.again, 1); assert.equal(p.due, 1);
  assert.equal(ls.getItem('study-marks:/primer/psm-ii/'), null, 'the old study keys are gone');
  assert.equal(ls.getItem('exam-date:/primer/psm-ii/'), null);
  assert.equal(ls.getItem('theme'), 'dark', 'the theme key stays (read before any script)');
  assert.deepEqual(plain(s.get('daily:history')), { '2026-10-04': { s: 8, n: 10 } });
  assert.ok(ls.getItem('daily:history'), 'daily.js keys stay while it still reads them');
  // daily.js keeps writing the old key: the next load merges the new day in.
  ls.setItem('daily:history', JSON.stringify({ '2026-10-04': { s: 8, n: 10 }, '2026-10-05': { s: 9, n: 10 } }));
  ls.setItem('daily:progress', JSON.stringify({ key: '2026-10-06', marks: [] }));
  const s2 = Primer.createStore(ls, { now: () => now });
  assert.deepEqual(Object.keys(s2.get('daily:history')), ['2026-10-04', '2026-10-05']);
  assert.equal(s2.get('daily:progress').key, '2026-10-06');
  // Running again changes nothing.
  assert.deepEqual(plain(s2.deck('psm-ii')), r);
});

test('store: a full storage keeps working in memory and says so', () => {
  const ls = new MemStorage({ quota: 400 });
  const { log, win } = events();
  const s = Primer.createStore(ls, { win });
  assert.equal(s.set('small', 1), true);
  const big = { c: Object.fromEntries(Array.from({ length: 50 }, (_, i) => [`k${i}`, [1, 20000, 'k']])) };
  assert.equal(s.setDeck('big', big), false);
  assert.deepEqual(plain(log.at(-1)), { key: 'deck:big', error: 'quota' });
  assert.equal(Object.keys(s.deck('big').c).length, 50, 'still there for this visit');
  assert.equal(s.progress('big').seen, 50);
  assert.ok(s.allProgress().big);
  s.remove('deck:big');
  assert.equal(s.deck('big'), null);
  assert.equal(s.get('small'), 1);
});

test('store: private mode (storage throws) works for the visit', () => {
  for (const storage of [new MemStorage({ throws: true }), () => { throw new Error('SecurityError'); }, null]) {
    const s = Primer.createStore(storage, {});
    assert.equal(s.persistent, false);
    assert.equal(s.get('x', 'fallback'), 'fallback');
    assert.equal(s.set('x', 2), false);
    assert.equal(s.get('x'), 2);
    assert.equal(s.toggleShelf('a'), true);
    assert.deepEqual(plain(s.shelf()), ['a']);
    assert.deepEqual(plain(s.progress('a')).seen, 0);
  }
});

test('study: tally reads both the old marks and the new card states', () => {
  const ids = ['a.1', 'a.2', 'a.3'];
  const k = Kit.cardKey;
  assert.deepEqual(plain(Kit.tally({ [k('a.1')]: [1, 3, 'k'], [k('a.2')]: [0, 1, 'a'], [k('a.3')]: [0, null, 's'] }, ids)), { seen: 3, known: 1, again: 1 });
});

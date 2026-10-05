// The moat: the Primer's own numbers (src/site/stats.mjs), the home page's
// Scale band and /numbers/ (src/site/pages/numbers.mjs). The comparison here
// uses test/fixtures/compare.fake.json, a clearly fake file that never ships.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { loadDeck } from '../src/decks.mjs';
import { auditFindings, growthSeries, primerStats, mondayOf, documentOf, pct, loadCompare, validCompare, scaleBars, sizeClaim, claimHead, whyNotCounted, publicBasis, notClaimTexts, splitNote } from '../src/site/stats.mjs';
import { build as buildNumbers, growthChart, scaleChart } from '../src/site/pages/numbers.mjs';
import { homePage } from '../src/site/home.mjs';

const cfg = { base: '/primer/', origin: 'https://conyso.com', brand: 'The Exam Primer' };
const mainOf = (html) => html.match(/<main\b[\s\S]*<\/main>/)[0].replace(/<script[\s\S]*?<\/script>/g, '');
const FAKE = JSON.parse(readFileSync('test/fixtures/compare.fake.json', 'utf8'));

function deck(slug, { family = 'Kubernetes and cloud native', first = '2026-09-25', status = 'released', checks = [], evidence = true } = {}) {
  const d = loadDeck('test/fixtures/decks/example');
  d.meta = { ...d.meta, slug, shortTitle: slug.toUpperCase(), title: `${slug} flashcards`, familyTitle: family, status, evidence, checks,
    changelog: [{ version: '0.1.0', date: first, notes: 'First draft.' }, { version: '1.0.0', date: '2026-10-04', notes: 'Released.' }] };
  return d;
}

test('auditFindings: counts only numbers written before a kind of problem', () => {
  const f = auditFindings('2 wrong cards, 6 unsupported claims, 9 ambiguous cards, 9 unclear ones and 34 minor issues were fixed; a third check confirmed all 2 wrong cards are now right.');
  assert.deepEqual([f.wrong, f.unsupported, f.ambiguous, f.unclear, f.minor, f.total, f.stated], [2, 6, 9, 9, 34, 60, true]);
  assert.equal(auditFindings('Fourteen wrong cards fixed').wrong, 14);
  assert.equal(auditFindings('No wrong answers; 4 unsupported claims').total, 4);
  assert.equal(auditFindings('about 1,250 minor issues').minor, 1250);
  assert.equal(auditFindings('None does, so the primer was retired.').stated, false);
  assert.equal(auditFindings('14 ethics cards were reworded').total, 0);
});

test('mondayOf, documentOf and pct', () => {
  assert.equal(mondayOf('2026-09-24'), '2026-09-21');
  assert.equal(mondayOf('2026-09-21'), '2026-09-21');
  assert.equal(mondayOf('2026-09-27'), '2026-09-21');
  assert.equal(documentOf('https://x.org/guide.pdf#page=4'), 'https://x.org/guide.pdf');
  assert.equal(documentOf('https://x.org/a/#s'), 'https://x.org/a');
  assert.equal(pct(999, 1000), 99, 'never rounds up to 100');
  assert.equal(pct(5, 5), 100);
  assert.equal(pct(0, 0), 0);
});

test('growthSeries: a zero week first, every week after, running totals', () => {
  const c = deck('c');
  c.meta.changelog = [{ version: '1.0.0', date: '2026-10-13', notes: 'Released.' }];
  const ds = [deck('a', { first: '2026-09-24' }), deck('b', { first: '2026-09-26' }), c];
  const g = growthSeries(ds, () => 10);
  assert.deepEqual(g.map((p) => p.week), ['2026-09-14', '2026-09-21', '2026-09-28', '2026-10-05', '2026-10-12']);
  assert.deepEqual(g.map((p) => p.decks), [0, 2, 2, 2, 3], 'a quiet week shows as flat');
  assert.deepEqual(g.map((p) => p.cards), [0, 20, 20, 20, 30]);
  assert.deepEqual(g.map((p) => p.addedDecks), [0, 2, 0, 0, 1]);
  assert.deepEqual(growthSeries([]), []);
});

test('primerStats: released decks only, computed from the cards', () => {
  const ds = [
    deck('a', { checks: [{ date: '2026-09-27', what: 'audit', result: '1 wrong card and 3 unclear ones were fixed.' }] }),
    deck('b', { family: 'Microsoft Azure', first: '2026-08-01', evidence: false }),
    deck('draft', { status: 'draft' }),
  ];
  const s = primerStats(ds, { formats: 15 });
  const per = ds[0].notes.length;
  assert.equal(s.decks, 2);
  assert.equal(s.cards, 2 * per);
  assert.equal(s.families, 2);
  assert.equal(s.formats, 15);
  assert.equal(s.audits, 1);
  assert.equal(s.findingsFixed, 4);
  assert.equal(s.wrongFixed, 1);
  assert.equal(s.counted, '2026-10-04');
  assert.equal(s.recentDecks, 1, 'b was added more than 30 days before the counted date');
  assert.equal(s.sourced, ds.slice(0, 2).reduce((a, d) => a + d.notes.filter((n) => n.sourceURL).length, 0));
  assert.equal(s.quoted, ds[0].notes.filter((n) => String(n.evidence || '').trim()).length, 'quotes count only where the checker verifies them');
  assert.equal(s.primers, 2 * ds[0].notes.filter((n) => n.kind === 'primer').length);
  assert.ok(s.documents >= 1 && s.documents <= s.cards);
  assert.deepEqual(s.byFamily.map((f) => f.cards), [per, per]);
});

test('compare.json: only a complete file counts; a bad one is treated as absent', () => {
  assert.equal(loadCompare('no/such/file.json'), null);
  assert.ok(validCompare(FAKE));
  const dir = mkdtempSync(join(tmpdir(), 'moat-'));
  const bad = { ...FAKE, rows: [{ ...FAKE.rows[0], evidenceUrl: '' }] };
  writeFileSync(join(dir, 'c.json'), JSON.stringify(bad));
  assert.equal(loadCompare(join(dir, 'c.json')), null, 'a row without evidence makes the file unusable');
  writeFileSync(join(dir, 'd.json'), '{ not json');
  assert.equal(loadCompare(join(dir, 'd.json')), null);
  assert.equal(validCompare({ ...FAKE, rows: [{ ...FAKE.rows[0], cards: -1 }] }), false);
});

test('scaleBars: cards only, ours first, sites without a count are listed as not counted', () => {
  const b = scaleBars(FAKE, { cards: 200000, decks: 59 });
  assert.equal(b.metric, 'cards');
  assert.deepEqual(b.rows.map((r) => r.name), ['The Exam Primer', 'Fixture Site A', 'Fixture Site B']);
  assert.equal(b.max, 200000);
  assert.deepEqual(b.notCounted.map((r) => r.name), ['Fixture Quizlet']);
  assert.equal(scaleBars(null, { cards: 1, decks: 1 }), null);
});

test('size claim: verbatim, and never when our count does not top every counted row', () => {
  assert.equal(sizeClaim(FAKE, { cards: 200000 }).text, FAKE.claims[0].text);
  assert.equal(sizeClaim(FAKE, { cards: 100 }), null);
  assert.equal(sizeClaim(null, { cards: 1 }), null);
  assert.equal(claimHead({ text: 'The largest X: about 5 cards.' }), 'The largest X');
  assert.equal(claimHead({ text: 'The largest X.' }), 'The largest X');
});

test('notes for writers stay off the page; reasons come from countNote', () => {
  assert.equal(publicBasis('None was found. Phrase it as "we found none". This is an absence claim (see research-protocol.md).'), 'None was found.');
  assert.equal(publicBasis('Totals: 1/2 (figures from the repo; recompute at build). Done.'), 'Totals: 1/2. Done.');
  assert.deepEqual(notClaimTexts({ notClaims: ["'The best' as a bare superlative: say what is checkable.", 'Any number for X: none was read in this task.'] }), ['Any number for X: none was read.']);
  assert.equal(whyNotCounted('Not counted: robots.txt disallows it. More detail.'), 'robots.txt disallows it.');
  assert.equal(whyNotCounted('Not counted. No count was published.'), 'No count was published.');
  assert.equal(whyNotCounted('Computed from a list.'), 'no card total was found to read');
  assert.deepEqual(splitNote('One. Two.'), { first: 'One.', rest: 'Two.' });
});

test('charts: labelled SVG, every bar named and linked to its evidence', () => {
  const g = growthChart([{ week: '2026-09-14', cards: 0, decks: 0 }, { week: '2026-09-21', cards: 100, decks: 2 }]);
  assert.match(g, /<svg[^>]*role="img"[^>]*aria-labelledby=/);
  assert.match(g, /<title id="growth-t">/);
  assert.match(g, /<desc id="growth-d">Week of 14 September 2026: 0 cards in 0 decks\. Week of 21 September 2026: 100 cards in 2 decks\.<\/desc>/);
  const c = scaleChart(cfg, scaleBars(FAKE, { cards: 200000, decks: 59 }));
  assert.match(c, /href="https:\/\/example\.com\/a\/evidence"/);
  assert.match(c, /Not counted:<\/b> Fixture Quizlet/);
  assert.ok(!/not stated|120,000 cards for Fixture Quizlet/.test(c));
});

test('/numbers/: our numbers always; the comparison only with a compare file', async () => {
  const ds = [deck('a'), deck('b', { family: 'Microsoft Azure' })];
  const without = (await buildNumbers({ cfg, decks: ds, compare: null })).pages['numbers/'];
  assert.match(without, /<h1>How big is the Primer, and how good\?<\/h1>/);
  assert.ok(!/id="compare"/.test(without), 'no comparison without compare.json');
  assert.ok(!/largest/i.test(mainOf(without)), 'no size claim without compare.json');
  for (const id of ['quality', 'growth', 'coverage', 'how', 'faq']) assert.match(without, new RegExp(`id="${id}"`));
  assert.match(without, /"@type":"Dataset"/);
  assert.match(without, /<table class="fmt-table mo-table">/, 'the growth chart has a table');
  const fake = { ...FAKE, rows: FAKE.rows.map((r) => ({ ...r, cards: r.cards == null ? null : 1 })) };
  const withIt = (await buildNumbers({ cfg, decks: ds, compare: fake })).pages['numbers/'];
  assert.match(withIt, /id="compare"/);
  assert.match(withIt, /The largest fixture collection of sourced certification flashcards/);
  assert.match(withIt, /We do not claim Fixture Quizlet has fewer cards in total\./);
  assert.match(withIt, /Is Fixture Quizlet bigger\?/);
});

test('home: the Scale band, its link to /numbers/, and a size claim only when supported', () => {
  const ds = [deck('a'), deck('b', { family: 'Microsoft Azure' })];
  const plain = homePage(cfg, ds, { compare: null });
  assert.match(plain, /id="scale-h"/);
  assert.match(plain, /href="\/primer\/numbers\/"/);
  assert.ok(!/mo-bars/.test(plain), 'no bars without compare.json');
  assert.ok(!/largest/i.test(mainOf(plain)));
  const fake = { ...FAKE, rows: FAKE.rows.map((r) => ({ ...r, cards: r.cards == null ? null : 1 })) };
  const claimed = homePage(cfg, ds, { compare: fake });
  assert.match(claimed, /class="mo-bars"/);
  const h2 = claimed.match(/<h2 id="scale-h">([\s\S]*?)<\/h2>/)[1].replace(/<[^>]+>/g, '');
  assert.equal(h2, claimHead(FAKE.claims[0]), 'the H2 is the claim, word for word');
});

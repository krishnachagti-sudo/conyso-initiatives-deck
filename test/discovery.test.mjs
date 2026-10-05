// The discovery pages: browse, family hubs, new (with its Atom feed), the
// roadmap and the search index (src/site/pages/*.mjs, src/assets/search.js).
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { gzipSync } from 'node:zlib';

import { loadDeck, deckDirs } from '../src/decks.mjs';
import { familySlug, familyPath, familyGroups, learningLevels, familyTitleTag, familyIntro, releasedDecks, andList, titleCase, firstDate, lastDate } from '../src/site/pages/families.mjs';
import { searchIndex, normText, build as buildBrowse } from '../src/site/pages/browse.mjs';
import { deckLevel, examName, finderModel, pickForLevel, recommend, answerTable, build as buildFinder } from '../src/site/pages/finder.mjs';
import { atomFeed, byWeek, weekOf } from '../src/site/pages/new.mjs';
import { displayName, roadmap, deckFor, requestURL, readMasterList, familyLabel } from '../src/site/pages/roadmap.mjs';

const cfg = { base: '/decks/', origin: 'https://conyso.com', brand: 'The Exam Primer' };

// Copies of the fixture deck under other names, families and dates.
function deck(slug, { family = 'Kubernetes and cloud native', short = slug.toUpperCase(), status = 'released', pre = [], first = '2026-09-25', updated = '2026-10-04', title } = {}) {
  const d = loadDeck('test/fixtures/decks/example');
  d.meta = { ...d.meta, slug, shortTitle: short, title: title || `${short} flashcards`, familyTitle: family, status, prerequisiteDecks: pre, updated,
    changelog: [{ version: '0.1.0', date: first, notes: 'First draft.' }, { version: '1.0.0', date: updated, notes: 'Released.' }] };
  return d;
}
const set = () => [
  deck('kcna', { short: 'Kubernetes' }),
  deck('cka', { pre: ['kcna'] }),
  deck('ckad', { pre: ['kcna'] }),
  deck('cks', { pre: ['kcna', 'cka'], first: '2026-09-29' }),
  deck('az-900', { family: 'Microsoft Azure', first: '2026-10-01' }),
  deck('draft', { family: 'Microsoft Azure', status: 'draft' }),
];

// A small well-formedness check: every tag closes in order, every & starts an
// entity, and nothing sits outside the root element.
function wellFormed(xml) {
  const body = xml.replace(/^<\?xml[^?]*\?>\s*/, '');
  assert.ok(!/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-f]+);)/i.test(body), 'bare ampersand');
  const stack = [];
  for (const m of body.matchAll(/<(\/?)([A-Za-z][\w:.-]*)((?:\s+[\w:.-]+="[^"<]*")*)\s*(\/?)>|<|>/g)) {
    if (m[0] === '<') assert.fail('stray <');
    if (m[0] === '>') continue; // > is allowed in text
    if (m[4]) continue;
    if (m[1]) assert.equal(stack.pop(), m[2], `</${m[2]}> closes the wrong element`);
    else stack.push(m[2]);
  }
  assert.equal(stack.length, 0, 'unclosed elements');
  return true;
}

test('family slugs and paths match the shared contract', () => {
  assert.equal(familySlug('Kubernetes and cloud native'), 'kubernetes-and-cloud-native');
  assert.equal(familySlug('Scrum & Kanban'), 'scrum-kanban');
  assert.equal(familyPath('Microsoft Azure'), 'families/microsoft-azure/');
  assert.equal(titleCase('Kubernetes and cloud native'), 'Kubernetes and Cloud Native');
  assert.equal(andList(['A', 'B', 'C']), 'A, B and C');
});

test('family grouping: released decks only, families A to Z, learning order inside', () => {
  const groups = familyGroups(set());
  assert.deepEqual(groups.map((g) => g.title), ['Kubernetes and cloud native', 'Microsoft Azure']);
  const k = groups[0];
  assert.deepEqual(k.levels.map((l) => l.map((d) => d.meta.slug)), [['kcna'], ['cka', 'ckad'], ['cks']]);
  assert.equal(k.cards, 4 * set()[0].notes.length, 'counts come from the cards');
  assert.deepEqual(groups[1].decks.map((d) => d.meta.slug), ['az-900'], 'drafts are left out');
  assert.match(familyIntro(k, new Map(set().map((d) => [d.meta.slug, d]))), /^4 decks, \d+ cards: Kubernetes, CKA, CKAD and CKS\. Start with Kubernetes; 3 of the others build on it\.$/);
});

test('learning levels survive a prerequisite cycle', () => {
  const a = deck('a', { pre: ['b'] });
  const b = deck('b', { pre: ['a'] });
  assert.equal(learningLevels([a, b]).flat().length, 2);
});

test('family titles stay within 60 characters and name decks from the data', () => {
  for (const g of familyGroups(set())) {
    const t = familyTitleTag(g, cfg.brand);
    assert.ok(t.length <= 60, t);
    assert.match(t, /Flashcards/);
  }
  assert.equal(familyTitleTag(familyGroups(set())[1], cfg.brand), 'Microsoft Azure Flashcards: AZ-900 | The Exam Primer');
});

test('new: weeks start on Monday, newest first', () => {
  assert.equal(weekOf('2026-10-04'), '2026-09-28'); // a Sunday
  assert.equal(weekOf('2026-09-28'), '2026-09-28');
  const weeks = byWeek(set());
  assert.deepEqual(weeks.map((w) => w.week), ['2026-09-28', '2026-09-21']);
  assert.deepEqual(weeks[0].decks.map((d) => d.meta.slug), ['az-900', 'cks']);
  assert.equal(firstDate(set()[0]), '2026-09-25');
  assert.equal(lastDate(set()[0]), '2026-10-04');
});

test('the Atom feed is well-formed, one entry per released deck, text escaped', () => {
  const decks = set();
  decks[0].meta.title = 'Q&A <b>"tags"</b> \u0001';
  const xml = atomFeed(cfg, decks);
  assert.ok(wellFormed(xml));
  assert.equal((xml.match(/<entry>/g) || []).length, 5);
  assert.match(xml, /<feed xmlns="http:\/\/www.w3.org\/2005\/Atom"/);
  assert.match(xml, /<title>Q&amp;A &lt;b&gt;&quot;tags&quot;&lt;\/b&gt; <\/title>/);
  assert.match(xml, /<updated>2026-10-04T00:00:00Z<\/updated>/);
  assert.match(xml, /<id>https:\/\/conyso.com\/decks\/kcna\/<\/id>/);
  assert.ok(!/@/.test(xml), 'no email address in the feed');
});

test('search index: topics and primer terms per deck, and small', async () => {
  const ix = searchIndex(set());
  assert.equal(ix.decks.length, 5);
  const d = ix.decks[0];
  assert.deepEqual(Object.keys(d), ['slug', 'title', 'shortTitle', 'familyTitle', 'cards', 'topics']);
  assert.ok(d.topics.some(([, terms]) => terms.length), 'primer terms are indexed');
  const res = await buildBrowse({ cfg, decks: set() });
  assert.ok(res.files['search-index.json'].length < 1e5);
  assert.deepEqual(res.urls, ['browse/']);
  assert.match(res.pages['browse/'], /data-family="Microsoft Azure"/);
  assert.ok(!res.pages['browse/'].includes('data-slug="draft"'));
});

test('search index for every real deck stays well under 1 MB', () => {
  const decks = deckDirs('decks').map(loadDeck).filter((d) => !d.meta.personal);
  const json = JSON.stringify(searchIndex(decks));
  assert.ok(json.length < 1e6, `${json.length} bytes`);
  assert.ok(gzipSync(json).length < 250e3);
  assert.equal(searchIndex(decks).decks.length, releasedDecks(decks).length);
});

test('roadmap: public names only, exams with a deck left out', () => {
  assert.equal(displayName('CDR Registration Examination for Dietitians (RD); lightly researched'), 'CDR Registration Examination for Dietitians (RD)');
  assert.equal(displayName('US Civics test (2025 version) *(not a certification)'), 'US Civics test (2025 version)');
  assert.equal(displayName('GitLab certifications (catalogue not captured)'), 'GitLab certifications');
  assert.equal(displayName('KCS v6 Fundamentals (Consortium for Service Innovation), a niche'), 'KCS v6 Fundamentals (Consortium for Service Innovation)');
  assert.equal(displayName('California Notary Public exam (state; a model for other states)'), 'California Notary Public exam');
  assert.equal(familyLabel('Scrum & Kanban (open guides)'), 'Scrum & Kanban');
  assert.equal(familyLabel('Privacy (IAPP)'), 'Privacy (IAPP)');

  const decks = [deck('cka', { title: 'Kubernetes administrator flashcards: for the Certified Kubernetes Administrator (CKA) exam' }),
    deck('az-305', { family: 'Microsoft Azure', title: 'Microsoft Azure Solutions Architect Expert (AZ-305)' }),
    deck('pspo', { title: 'Product Owner flashcards: for the Professional Scrum Product Owner I (PSPO I) assessment' }),
    deck('s7', { status: 'draft', title: 'FINRA Series 7 General Securities Representative Exam' })];
  const rows = [
    { exam: 'Certified Kubernetes Administrator', code: 'CKA (K8s v1.35)', family: 'Kubernetes & CNCF', status: 'Build', total: '29', verdict: 'Build first' },
    { exam: 'Designing Azure Infrastructure Solutions', code: 'AZ-305', family: 'Microsoft', status: 'Build' },
    { exam: 'Scrum.org PSPO I', code: '', family: 'Scrum & Kanban (open guides)', status: 'Build' },
    { exam: 'Scrum.org PSM I', code: '', family: 'Scrum & Kanban (open guides)', status: 'Build' },
    { exam: 'FINRA Series 7', code: '', family: 'Securities', status: 'Build' },
    { exam: 'FINRA Series 24', code: '', family: 'Securities', status: 'Build' },
    { exam: 'Some Exam', code: '', family: 'Other', status: 'Skip or wait' },
    { exam: 'NCLEX-RN', code: '', family: 'Nursing (skip)', status: 'Build' },
  ];
  assert.equal(deckFor(rows[3], decks), null, 'PSM I is not PSPO I');
  const out = roadmap(rows, decks);
  assert.deepEqual(out, [
    { family: 'Scrum & Kanban', exams: [{ name: 'Scrum.org PSM I', family: 'Scrum & Kanban', status: 'Planned' }] },
    { family: 'Securities', exams: [{ name: 'FINRA Series 24', family: 'Securities', status: 'Planned' }, { name: 'FINRA Series 7', family: 'Securities', status: 'In progress' }] },
  ]);
  assert.equal(requestURL('CIPP/E (IAPP)'), 'https://github.com/krishnachagti-sudo/conyso-initiatives-deck/issues/new?labels=exam-request&title=Exam%20request%3A%20CIPP%2FE%20(IAPP)');
});

test('roadmap reads the real master list without leaking internal columns', () => {
  const rows = readMasterList(readFileSync('master-list.csv', 'utf8'));
  assert.ok(rows.length > 0 && 'status' in rows[0]);
  const out = roadmap(rows, deckDirs('decks').map(loadDeck));
  for (const g of out) for (const x of g.exams) {
    assert.deepEqual(Object.keys(x), ['name', 'family', 'status']);
    assert.ok(!/research|verified|captured|;|\*\(/i.test(x.name), x.name);
  }
});

// search.js runs in a browser; its matching core is plain functions on window.
function searchCore() {
  const window = {};
  vm.runInNewContext(readFileSync('src/assets/search.js', 'utf8'), { window, document: { currentScript: null, querySelector: () => null, querySelectorAll: () => [] } });
  return window.__siteSearchCore;
}
const realIndex = () => searchIndex(deckDirs('decks').map(loadDeck).filter((d) => !d.meta.personal));

test('search: exam codes match however they are typed, and Roman II reads as 2', () => {
  const c = searchCore();
  assert.equal(c.norm('AZ-104'), 'az 104');
  assert.equal(c.norm('Professional Scrum Master II (PSM II)'), 'professional scrum master 2 psm 2');
  assert.equal(normText('Professional Scrum Master II (PSM II)'), c.norm('Professional Scrum Master II (PSM II)'), 'browse folds text the same way');
  assert.equal(c.query('What is a Sprint Goal?'), 'sprint goal');
  assert.equal(c.lev('kubernets', 'kubernetes', 2), 1);
  assert.equal(c.lev('abc', 'xyzxyz', 1), 2, 'gives up past the limit');
  const items = c.prepare(realIndex());
  for (const q of ['az104', 'AZ 104', 'az-104', 'Az104']) assert.equal(c.search(items, q)[0].label, 'AZ-104', q);
  assert.equal(c.search(items, 'psm2')[0].label, 'Scrum Master II');
});

test('search: typos find the nearest word, and decks rank above terms and topics', () => {
  const c = searchCore();
  const items = c.prepare(realIndex());
  const k = c.search(items, 'kubernets');
  assert.equal(k.fixed, 'kubernetes');
  assert.equal(k[0].label, 'Kubernetes');
  assert.equal(k[0].kind, 'deck');
  const kinds = k.map((r) => r.kind);
  assert.ok(kinds.lastIndexOf('deck') < kinds.indexOf('term'), 'every deck before the first term');
  const s = c.search(items, 'scrumm master');
  assert.equal(s.fixed, 'scrum master');
  assert.equal(s[0].label, 'Scrum Master II');
  const g = c.search(items, 'what is a sprint goal');
  assert.equal(g[0].label, 'Sprint Goal');
  assert.equal(g[0].kind, 'term');
  assert.equal(c.search(items, 'sprint goal').fixed, '', 'no correction when the words exist');
  assert.equal(c.search(items, '').length, 0);
  assert.ok(c.search(items, 'zzzzqqqq').length === 0);
});

test('finder: deck levels come from title words, then from the learning order', () => {
  const lv = (title, o) => deckLevel({ meta: { title, shortTitle: '' } }, o);
  assert.equal(lv('Microsoft Azure Fundamentals (AZ-900)'), 0);
  assert.equal(lv('Microsoft Azure Solutions Architect Expert (AZ-305)'), 2);
  assert.equal(lv('Scrum Master II flashcards'), 2);
  assert.equal(lv('Product Owner flashcards: for the Professional Scrum Product Owner I (PSPO I) assessment'), 1);
  assert.equal(lv('ISC2 Certified Information Systems Security Professional (CISSP)'), 2);
  assert.equal(lv('Plain', { depth: 0, maxDepth: 2, dependents: 3 }), 0);
  assert.equal(lv('Plain', { depth: 1, maxDepth: 2, dependents: 0 }), 1);
  assert.equal(lv('Plain', { depth: 2, maxDepth: 2, dependents: 0 }), 2);
  assert.equal(lv('Plain', { depth: 0, maxDepth: 0, dependents: 0 }), 1, 'a lone deck sits in the middle');
  assert.equal(examName({ meta: { title: 'Kubernetes administrator flashcards: for the Certified Kubernetes Administrator (CKA) exam' } }), 'Certified Kubernetes Administrator (CKA) exam');
  assert.equal(examName({ meta: { title: 'Microsoft Azure Administrator (AZ-104)' } }), 'Microsoft Azure Administrator (AZ-104)');
});

test('finder: recommendations follow the family order and name the exam asked for', () => {
  const decks = [...set(), deck('az-104', { family: 'Microsoft Azure', pre: ['az-900'], title: 'Microsoft Azure Administrator (AZ-104)' }),
    deck('az-400', { family: 'Microsoft Azure', pre: ['az-104', 'cka'], title: 'Microsoft DevOps Engineer Expert (AZ-400)' })];
  const m = finderModel(decks);
  assert.ok(!m.decks.draft, 'drafts are left out');
  const k = 'kubernetes-and-cloud-native';
  assert.equal(pickForLevel(m, k, 0), 'kcna', 'new learners start where the others build');
  assert.equal(pickForLevel(m, k, 2), 'cks', 'advanced is the end of the order');
  assert.ok(['cka', 'ckad'].includes(pickForLevel(m, k, 1)));
  const r0 = recommend(m, k, 0);
  assert.equal(r0.deck, 'kcna');
  assert.match(r0.why, /^Kubernetes is where Kubernetes and cloud native starts: 3 other decks in the subject build on it\.$/);
  // A named exam: new learners are sent to its first prerequisite, the route ends at the exam.
  const a = recommend(m, 'microsoft-azure', 0, 'az-400');
  assert.equal(a.deck, 'az-900');
  assert.equal(a.exam, 'az-400');
  assert.deepEqual(a.route, ['az-900', 'az-104', 'kcna', 'cka', 'az-400']);
  assert.match(a.why, /AZ-400 builds on AZ-104 and CKA\. As you are new to it, start with AZ-900/);
  assert.equal(recommend(m, 'microsoft-azure', 2, 'az-400').deck, 'az-400');
  assert.equal(recommend(m, 'microsoft-azure', 1, 'az-900').deck, 'az-900');
  assert.equal(recommend(m, 'nope', 0), null);
  // One answer for every family, level and goal, each pointing at a real deck.
  const t = answerTable(m);
  const want = m.families.reduce((n, f) => n + 3 * (1 + (f.decks.length > 1 ? f.decks.length : 0)), 0);
  assert.equal(Object.keys(t).length, want);
  for (const [key, [s, why, route]] of Object.entries(t)) {
    assert.ok(m.decks[s], key);
    assert.ok(route.includes(s), key);
    assert.ok(why.length > 20 && !/—/.test(why), key);
  }
});

test('finder: every real family gets an answer, and the page works without script', async () => {
  const decks = deckDirs('decks').map(loadDeck);
  const m = finderModel(decks);
  for (const f of m.families) for (const l of [0, 1, 2]) assert.ok(recommend(m, f.slug, l), `${f.slug} ${l}`);
  const res = await buildFinder({ cfg, decks: set() });
  assert.deepEqual(res.urls, ['which-deck/']);
  const html = res.pages['which-deck/'];
  const title = html.match(/<title>([^<]*)<\/title>/)[1];
  assert.ok(title.length <= 60, title);
  assert.match(html, /id="finder-band" hidden/, 'the questions wait for script');
  assert.match(html, /href="\/decks\/families\/kubernetes-and-cloud-native\/"/, 'subjects link to their hubs');
  assert.match(html, /Start here/);
  const data = JSON.parse(html.match(/<script type="application\/json" id="fx-data">([^<]*)<\/script>/)[1]);
  assert.ok(data.a['kubernetes-and-cloud-native|0|learn']);
  assert.ok(!html.includes('data-slug="draft"') && !data.decks.draft);
});

test('browse and hubs: tiles carry a save toggle and a progress slot, and link to the finder', async () => {
  const res = await buildBrowse({ cfg, decks: set() });
  const html = res.pages['browse/'];
  assert.match(html, /data-save-deck="cka"/);
  assert.match(html, /data-due="cka"/);
  assert.match(html, /href="\/decks\/which-deck\/"/);
  const { build: buildFamilies } = await import('../src/site/pages/families.mjs');
  const hub = (await buildFamilies({ cfg, decks: set() })).pages['families/kubernetes-and-cloud-native/'];
  assert.match(hub, /data-save-deck="kcna"/);
  assert.match(hub, /data-fx-mine="kcna"/);
  assert.match(hub, /which-deck\//);
});

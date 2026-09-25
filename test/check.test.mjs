// The card checker: the fixture passes, and each rule catches its own failure.
import test from 'node:test';
import assert from 'node:assert/strict';

import { checkDeck } from '../build/check.mjs';
import { loadDeck, loadConcepts } from '../src/decks.mjs';

const fresh = () => loadDeck('test/fixtures/decks/example');
const concepts = loadConcepts('test/fixtures/concepts', 'example');
const run = (deck) => checkDeck(deck, { concepts });
const rules = (deck) => run(deck).map((p) => p.rule);
const card = (deck, id) => deck.notes.find((n) => n.id === id);

test('the fixture deck passes every rule', () => {
  assert.deepEqual(run(fresh()), []);
});

test('a card that uses a term no earlier primer introduced fails', () => {
  const d = fresh();
  card(d, 'example.widgets.widget-teeth').uses.push('gearbox');
  assert.ok(rules(d).includes('undefined-term'));
});

test('a detail card placed before its topic primers fails', () => {
  const d = fresh();
  card(d, 'example.widgets.widget-teeth').order = 15; // between the two primers
  assert.ok(rules(d).includes('order'));
});

test('teaching positions must be unique', () => {
  const d = fresh();
  card(d, 'example.widgets.which-part').order = 30;
  assert.ok(run(d).some((p) => p.rule === 'order' && /used twice/.test(p.message)));
});

test('a primer needs an example and exactly one new term', () => {
  const d = fresh();
  const p = card(d, 'example.widgets.what-is-a-widget');
  delete p.example;
  p.introduces = ['widget', 'handle'];
  const r = run(d).filter((x) => x.rule === 'primer').map((x) => x.message).join(' | ');
  assert.match(r, /needs an example/);
  assert.match(r, /at most 1 new term/);
});

test('a primer may teach one term together with its abbreviation', () => {
  const d = fresh();
  const p = card(d, 'example.widgets.what-is-a-widget');
  const count = () => run(d).filter((x) => x.message.includes('at most 1 new term')).length;
  p.introduces = ['widget', 'WGT'];
  assert.equal(count(), 0);
  p.introduces = ['widget', 'WGT', 'WX'];
  assert.equal(count(), 1, 'two abbreviations are two ideas');
  p.introduces = ['widget', 'Handle'];
  assert.equal(count(), 1, 'two words are two terms');
});

test('every card explains, and choices explain every wrong option', () => {
  const d = fresh();
  delete card(d, 'example.widgets.which-part').explanation;
  delete card(d, 'example.assembly.jammed').choicesExplained;
  const r = rules(d);
  assert.ok(r.includes('explanation'));
  assert.ok(r.includes('choices'));
});

test('a long back or a long list fails', () => {
  const d = fresh();
  card(d, 'example.widgets.which-part').back = Array(30).fill('word').join(' ');
  card(d, 'example.widgets.widget-vs-sprocket').back = '- a\n- b\n- c\n- d';
  const r = rules(d);
  assert.ok(r.includes('back'));
  assert.ok(r.includes('list'));
});

test('a cloze card needs exactly one blank', () => {
  const d = fresh();
  card(d, 'example.widgets.widget-teeth').front = 'A {{c1::sprocket}} has {{c2::twelve}} teeth.';
  assert.ok(rules(d).includes('cloze'));
});

test('sources are required, and tier D or an unmarked tier is refused', () => {
  const d = fresh();
  card(d, 'example.widgets.which-part').sourceLicence = 'D · exam dump';
  delete card(d, 'example.widgets.widget-vs-sprocket').sourceURL;
  assert.equal(rules(d).filter((r) => r === 'source').length, 2);
});

test('a volatile card needs a valid-as-of date', () => {
  const d = fresh();
  delete card(d, 'example.assembly.jammed').validAsOf;
  assert.ok(rules(d).includes('valid-as-of'));
});

test('exam mapping is refused unless the deck is cleared for it', () => {
  const d = fresh();
  card(d, 'example.assembly.jammed').examRefs = ['Domain 1'];
  assert.ok(rules(d).includes('exam-refs'));
  d.meta.examRefsCleared = true;
  assert.ok(!rules(d).includes('exam-refs'));
});

test('concept ids must exist in the family registry', () => {
  const d = fresh();
  card(d, 'example.widgets.which-part').conceptIDs = ['example.widgets.gearbox'];
  assert.ok(rules(d).includes('concepts'));
});

test('a core fact concept needs an application or classification card', () => {
  const d = fresh();
  d.notes = d.notes.filter((n) => n.id !== 'example.widgets.which-part' && n.id !== 'example.assembly.jammed');
  d.topics = d.topics.map((t) => ({ ...t, notes: t.notes.filter((n) => d.notes.includes(n)) }));
  assert.ok(rules(d).includes('application'));
});

test('a released card cannot disappear', () => {
  const d = fresh();
  d.releasedIds = ['example.widgets.gone-card'];
  assert.ok(rules(d).includes('released-id'));
});

test('an image without alt text fails', () => {
  const d = fresh();
  card(d, 'example.widgets.which-part').explanation = 'See <img src="x.png">';
  assert.ok(rules(d).includes('image'));
});

test('images: the file must exist, with alt text, a credit and a licence tier', () => {
  const d = loadDeck('test/fixtures/decks/example');
  const n = d.notes.find((x) => x.id === 'example.widgets.which-part');
  n.image = { file: 'media/missing.png', alt: 'x', credit: '', licence: 'D · no' };
  const rules = checkDeck(d, { concepts: loadConcepts('test/fixtures/concepts', 'example') }).filter((p) => p.rule === 'image').map((p) => p.message);
  assert.ok(rules.some((m) => /does not exist/.test(m)));
  assert.ok(rules.some((m) => /alt must describe/.test(m)));
  assert.ok(rules.some((m) => /credit is missing/.test(m)));
  assert.ok(rules.some((m) => /tier letter/.test(m)));
});

test('abbreviations: an untaught all-capitals token is flagged unless glossed', () => {
  const d = loadDeck('test/fixtures/decks/example');
  const n = d.notes.find((x) => x.id === 'example.widgets.which-part');
  n.explanation += ' See the WSX for details.';
  const flagged = () => checkDeck(d, { concepts: loadConcepts('test/fixtures/concepts', 'example') }).filter((p) => p.rule === 'abbreviation');
  assert.equal(flagged().length, 1);
  d.meta.glossary = { WSX: 'Widget Standards Exchange' };
  assert.equal(flagged().length, 0);
});

test('explanations must say why, not repeat the answer', () => {
  const d = loadDeck('test/fixtures/decks/example');
  const n = d.notes.find((x) => x.id === 'example.widgets.which-part');
  n.explanation = 'The toothed wheel is the sprocket.';
  const rules = checkDeck(d, { concepts: loadConcepts('test/fixtures/concepts', 'example') }).map((p) => p.rule);
  assert.ok(rules.includes('explanation'));
});

test('Wikipedia alone needs sourceFallback; co-citing a primary source is fine', () => {
  const d = loadDeck('test/fixtures/decks/example');
  const n = d.notes.find((x) => x.id === 'example.widgets.which-part');
  const check = () => checkDeck(d, { concepts: loadConcepts('test/fixtures/concepts', 'example') }).filter((p) => /Wikipedia/.test(p.message));
  n.source = 'Wikipedia, “Sprocket”'; n.sourceURL = 'https://en.wikipedia.org/wiki/Sprocket';
  assert.equal(check().length, 1);
  n.sourceFallback = true;
  assert.equal(check().length, 0);
});

test('registry: a term owned by an earlier topic counts as taught while writing in parallel', () => {
  const d = loadDeck('test/fixtures/decks/example');
  const t2 = d.topics[1];
  const primer = t2.notes.find((x) => x.kind === 'primer');
  const later = { ...t2.notes.find((x) => x.kind !== 'primer'), id: 'example.assembly.uses-gear', order: 125, uses: ['gear'] };
  t2.notes.push(later); d.notes.push(later);
  const concepts = loadConcepts('test/fixtures/concepts', 'example');
  const undef = (ctx) => checkDeck(d, { concepts, ...ctx }).filter((p) => p.rule === 'undefined-term' && p.id === later.id);
  assert.equal(undef({}).length, 1);
  assert.equal(undef({ registry: [{ term: 'gear', topic: 1 }] }).length, 0);
  assert.equal(undef({ registry: [{ term: 'gear', topic: 2 }] }).length, 1, 'same-topic terms need a primer in the file');
  void primer;
});

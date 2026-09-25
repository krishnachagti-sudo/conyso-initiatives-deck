// Checker rules added after wave 2 (docs/PIPELINE-V3.md, D1): licence label by
// source host, page anchors, "name two" answers, and pool questions verbatim.
import test from 'node:test';
import assert from 'node:assert/strict';

import { checkDeck } from '../build/check.mjs';
import { loadDeck, loadConcepts, licenceRules } from '../src/decks.mjs';

const fresh = () => loadDeck('test/fixtures/decks/example');
const concepts = loadConcepts('test/fixtures/concepts', 'example');
const run = (deck, ctx = {}) => checkDeck(deck, { concepts, licences: licenceRules(), ...ctx });
const messages = (deck, rule, ctx) => run(deck, ctx).filter((p) => p.rule === rule).map((p) => p.message);
const plain = (d) => d.notes.find((n) => n.id === 'example.widgets.widget-vs-sprocket'); // a basic card, no choices or figure

test('the fixture still passes with the new rules', () => {
  assert.deepEqual(run(fresh()), []);
});

test('a licence label must match the source host', () => {
  const d = fresh();
  const n = plain(d);
  n.sourceURL = 'https://kubernetes.io/docs/concepts/';
  n.sourceLicence = 'B · Apache 2.0';
  assert.equal(messages(d, 'licence').length, 1);
  n.sourceLicence = 'B · CC BY 4.0';
  assert.equal(messages(d, 'licence').length, 0);
  n.sourceURL = 'https://www.ecfr.gov/current/title-47/part-97';
  n.sourceLicence = 'B · public domain (US Government work)';
  assert.equal(messages(d, 'licence').length, 0, 'any .gov page is public domain');
});

test('a page anchor must be a page number', () => {
  const d = fresh();
  plain(d).sourceURL = 'https://example.org/manual.pdf#page=undefined';
  assert.match(messages(d, 'source').join(), /not a page number/);
});

test('"name two" must be answered with two', () => {
  const d = fresh();
  const n = plain(d);
  n.front = 'Name two parts of a widget?';
  n.back = 'The handle.';
  assert.match(messages(d, 'back').join(), /asks for 2 but the back gives 1/);
  n.back = 'The handle and the gear.';
  assert.equal(messages(d, 'back').length, 0);
});

test('a pool card must quote its question, choices and key word for word', () => {
  const d = fresh();
  const base = plain(d);
  const n = { ...base, id: 'example.widgets.t1a01', type: 'scenario', kind: 'application', order: 9990,
    front: 'Which part turns?', choices: 'A) The gear\nB) The handle\nC) The base\nD) The pin',
    choicesExplained: 'The gear is the part that turns; the others hold still.', back: 'The gear' };
  d.notes.push(n);
  d.topics[0].notes.push(n);
  const pool = [{ poolId: 'T1A01', question: 'Which part turns?', choices: { A: 'The gear', B: 'The handle', C: 'The base', D: 'The pin' }, correct: 'A', answer: 'The gear' }];
  assert.deepEqual(messages(d, 'pool', { pool }), []);
  n.choices = 'A) The gear\nB) The handle\nC) The base';
  assert.match(messages(d, 'pool', { pool }).join(), /four options/);
  n.choices = 'A) The gear\nB) The handle\nC) The base\nD) The pin';
  n.back = 'B) The handle';
  assert.match(messages(d, 'pool', { pool }).join(), /keyed option/);
  n.back = 'The gear';
  assert.match(messages(d, 'pool', { pool: [] }).join(), /not in the live pool/);
  assert.match(messages(d, 'pool', { pool: [...pool, { ...pool[0], poolId: 'T1A02' }] }).join(), /T1A02 has no card/);
});

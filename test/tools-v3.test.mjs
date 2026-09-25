// The pipeline tools added after wave 2 (docs/PIPELINE-V3.md): pool cards
// from a skeleton, merge, and applying an auditor's patch file. Each runs on a
// copy of the fixture deck in a temporary folder.
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, cpSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { poolCards } from '../build/pool-cards.mjs';
import { merge } from '../build/merge.mjs';
import { applyFixes, bump } from '../build/apply-fixes.mjs';
import { checkDeck } from '../build/check.mjs';
import { loadDeck, loadConcepts, loadPool } from '../src/decks.mjs';

const copy = () => {
  const root = mkdtempSync(join(tmpdir(), 'deck-'));
  cpSync('test/fixtures/decks/example', join(root, 'decks/example'), { recursive: true });
  cpSync('test/fixtures/concepts', join(root, 'concepts'), { recursive: true });
  mkdirSync(join(root, 'briefs'));
  return root;
};
const readJSON = (p) => JSON.parse(readFileSync(p, 'utf8'));

test('pool cards come out verbatim and pass the pool rule', () => {
  const root = copy();
  const dir = join(root, 'decks/example');
  mkdirSync(join(root, 'skel'));
  writeFileSync(join(root, 'skel/topic-02.json'), JSON.stringify({ topic: 'Assembly', questions: [
    { poolId: 'T2A01', question: 'Which part turns?', choices: { A: 'The gear', B: 'The handle', C: 'The base', D: 'The pin' }, correct: 'A', answer: 'The gear' }] }));
  const meta = readJSON(join(dir, 'deck.json'));
  meta.pool = { skeleton: 'skel', source: 'Example Pool, {id}', sourceURL: 'https://example.org/pool.pdf', sourceLicence: 'A · public domain' };
  writeFileSync(join(dir, 'deck.json'), JSON.stringify(meta));
  assert.deepEqual(poolCards(dir, { base: root }), { '02-assembly.json': 1 });
  assert.deepEqual(poolCards(dir, { base: root }), {}, 'a second run adds nothing');
  const deck = loadDeck(dir);
  const card = deck.notes.find((n) => n.id === 'example.assembly.t2a01');
  assert.equal(card.choices, 'A) The gear\nB) The handle\nC) The base\nD) The pin');
  assert.equal(card.source, 'Example Pool, T2A01');
  const problems = checkDeck(deck, { concepts: loadConcepts(join(root, 'concepts'), 'example'), pool: loadPool(meta, root) });
  assert.deepEqual(problems.filter((p) => p.rule === 'pool'), []);
  assert.ok(problems.some((p) => p.id === card.id && p.rule === 'explanation'), 'the writer still owes the explanation');
});

test('merge splits "Term (ABBR)", drops glosses and hyphenates concept ids', () => {
  const root = copy();
  const dir = join(root, 'decks/example');
  const f = join(dir, 'notes/01-widgets.json');
  const doc = readJSON(f);
  doc.notes[0].introduces = ['widget (WGT)'];
  doc.notes[1].introduces = ['sprocket (a toothed wheel)'];
  writeFileSync(f, JSON.stringify(doc));
  writeFileSync(join(root, 'briefs/example-concepts-a.json'), JSON.stringify([{ id: 'example.new_idea', name: 'New idea' }]));
  const r = merge('example', { briefs: join(root, 'briefs'), decks: join(root, 'decks'), concepts: join(root, 'concepts') });
  const after = readJSON(f);
  assert.deepEqual(after.notes[0].introduces, ['widget', 'WGT']);
  assert.deepEqual(after.notes[1].introduces, ['sprocket']);
  assert.ok(readJSON(join(root, 'concepts/example.json')).some((c) => c.id === 'example.new-idea'));
  assert.equal(r.split, 2);
});

test('a patch file is applied, unmatched lines are reported, and bump adds a changelog line', () => {
  const root = copy();
  const dir = join(root, 'decks/example');
  const r = applyFixes(dir, [
    { id: 'example.widgets.widget-vs-sprocket', field: 'back', value: 'Changed.', severity: 'wrong' },
    { id: 'example.widgets.widget-vs-sprocket', field: 'example', value: null },
    { id: 'no.such.card', field: 'back', value: 'x' },
  ]);
  assert.equal(r.applied, 2);
  assert.deepEqual(r.unmatched, ['no.such.card']);
  const n = loadDeck(dir).notes.find((x) => x.id === 'example.widgets.widget-vs-sprocket');
  assert.equal(n.back, 'Changed.');
  assert.equal('example' in n, false);
  assert.equal(bump(dir, 'Test.', '2026-01-01'), '0.1.1');
  assert.deepEqual(readJSON(join(dir, 'deck.json')).changelog.at(-1), { version: '0.1.1', date: '2026-01-01', notes: 'Test.' });
});

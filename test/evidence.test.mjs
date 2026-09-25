// Evidence: a card's quoted source words must be in the cached source text,
// on the cited PDF page (src/evidence.mjs; the "evidence" checker rule).
import test from 'node:test';
import assert from 'node:assert/strict';

import { flatten, locate } from '../src/evidence.mjs';
import { checkDeck } from '../build/check.mjs';
import { loadDeck, loadConcepts } from '../src/decks.mjs';

test('flatten ignores markdown, quote style, dashes, ligatures and line-end hyphens', () => {
  assert.equal(flatten('**Don’t** use a [push](x.md) — ever'), flatten("don't use a push - ever"));
  assert.equal(flatten('conﬁguration inter-\nnational'), 'configuration international');
});

test('locate finds the PDF page a quote is on', () => {
  const pdf = 'Page one text.\fThe gear turns the\nwheel.\fPage three.';
  assert.deepEqual(locate(pdf, 'the gear turns the wheel'), { found: true, pages: [2] });
  assert.equal(locate(pdf, 'the wheel turns the gear').found, false);
  assert.deepEqual(locate('Plain page, no breaks.', 'plain page'), { found: true, pages: [] });
});

test('the evidence rule: required, found, and on the cited page', () => {
  const d = loadDeck('test/fixtures/decks/example');
  const text = 'Front matter.\fA widget is a small part that holds a sprocket.\fEnd.';
  const ctx = { concepts: loadConcepts('test/fixtures/concepts', 'example'), sourceText: () => text };
  const n = d.notes.find((x) => x.id === 'example.widgets.widget-vs-sprocket');
  n.sourceLicence = 'B · CC BY 4.0';
  const ev = () => checkDeck(d, ctx).filter((p) => p.id === n.id && p.rule === 'evidence').map((p) => p.message).join();
  assert.match(ev(), /quote the source words/);
  n.evidence = 'a small part that holds a sprocket';
  n.sourceURL = 'https://example.org/manual.pdf#page=2';
  assert.equal(ev(), '');
  n.sourceURL = 'https://example.org/manual.pdf#page=3';
  assert.match(ev(), /on page 2, not #page=3/);
  n.evidence = 'a large part that holds a sprocket';
  assert.match(ev(), /not in the source text/);
  n.sourceLicence = 'C · facts only, in our own words';
  assert.equal(ev(), '', 'tier C sources are not quoted');
});

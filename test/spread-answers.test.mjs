// Moving a scenario card's right answer off one letter (build/spread-answers.mjs).
import test from 'node:test';
import assert from 'node:assert/strict';
import { swapLabels, spread } from '../build/spread-answers.mjs';

test('option labels swap, the article "A" does not', () => {
  assert.equal(swapLabels('A: right. B, C and D miss it; option C is tempting.', 'A', 'C'), 'C: right. B, A and D miss it; option A is tempting.');
  assert.equal(swapLabels('Answer A. A mistake here costs time.', 'A', 'D'), 'Answer D. A mistake here costs time.');
});

test('the right option moves, and the back and explanations follow it', () => {
  const card = { id: 'x.y.some-scenario', back: 'A) Tuesday', choices: 'A) Tuesday\nB) Monday\nC) Friday\nD) Sunday', choicesExplained: 'B: too early. C: too late. D is never a business day.' };
  const before = card.choices;
  if (spread(card)) {
    const letter = card.back[0];
    assert.ok(card.choices.includes(`${letter}) Tuesday`));
    assert.notEqual(card.choices, before);
    assert.ok(!card.choicesExplained.includes(`${letter}:`), 'the right answer is not explained as wrong');
  }
});

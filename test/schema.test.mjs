// The note-type contract with every learner who has imported a deck.
// If this test fails, a field or note-type ID changed. After the first
// release that breaks in-place updates for everyone (CARD-STANDARD.md §3), so
// the fix is to revert the change, not to update the lock file, unless a new
// major version is being deliberately released.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import { FIELDS, NOTE_TYPES, FIELD_KEYS } from '../src/schema.mjs';

const lock = JSON.parse(readFileSync('src/schema.lock.json', 'utf8'));

test('fields match the lock, in order, with ID first', () => {
  assert.deepEqual(FIELDS, lock.fields);
  assert.equal(FIELDS[0], 'ID');
});

test('note-type ids match the lock', () => {
  for (const [k, v] of Object.entries(lock.noteTypes)) {
    assert.equal(NOTE_TYPES[k].id, v.id);
    assert.equal(NOTE_TYPES[k].cloze, v.cloze);
  }
});

test('every field has a JSON key', () => {
  assert.deepEqual(Object.keys(FIELD_KEYS), FIELDS);
});

// Every export is generated from the same deck and keeps the teaching order.
// The .apkg checks run only where genanki is installed (the apkg writer is a
// Python helper; its dependency must never break the rest of the suite).
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';

import { loadDeck } from '../src/decks.mjs';
import { ankiText, csvSimple, csvFull, tsvSimple, json } from '../src/exporters/text.mjs';
import { obsidian, logseq } from '../src/exporters/markdown.mjs';
import { ankiManifest, writeApkg, pythonWithGenanki, stableId } from '../src/exporters/anki.mjs';
import { twoSided } from '../src/exporters/common.mjs';
import { FIELDS } from '../src/schema.mjs';

const deck = () => loadDeck('test/fixtures/decks/example');
const ids = (d) => d.notes.slice().sort((a, b) => a.order - b.order).map((n) => n.id);

test('Anki text: headers, ID as the first field, one row per card in teaching order', () => {
  const out = ankiText(deck()).trim().split('\n');
  assert.equal(out[0], '#separator:tab');
  assert.match(out[5], /^#columns:Notetype\tDeck\tID\tFront/);
  const rows = out.slice(6);
  assert.equal(rows.length, 7);
  assert.deepEqual(rows.map((r) => r.split('\t')[2]), ids(deck()));
});

test('CSV and TSV carry both sides; cloze becomes a blank outside Anki', () => {
  const csv = csvSimple(deck());
  assert.match(csv.split('\r\n')[0], /^Front,Back$/);
  assert.match(csv, /has _____ teeth/);
  const tsv = tsvSimple(deck()).trim().split('\n');
  assert.equal(tsv.length, 7);
  for (const l of tsv) assert.equal(l.split('\t').length, 2, 'one tab per line, no stray newlines');
  const full = csvFull(deck()).split('\r\n')[0].split(',');
  assert.deepEqual(full.slice(2, 2 + FIELDS.length), FIELDS);
});

test('scenario choices and their explanations survive outside Anki', () => {
  const c = twoSided(deck().notes.find((n) => n.id === 'example.assembly.jammed'));
  assert.match(c.front, /B\) Worn sprocket teeth/);
  assert.match(c.back, /Why not the others/);
  assert.match(c.back, /Valid as of 2026-09-24/);
});

test('Markdown for Obsidian and Logseq uses each app\'s card syntax', () => {
  const o = obsidian(deck());
  assert.match(o, /^#flashcards\/example/);
  assert.match(o, /\n\?\n/);
  assert.match(o, /==twelve==/);
  const l = logseq(deck());
  assert.match(l, /#card/);
  assert.match(l, /\{\{cloze twelve\}\}/);
});

test('JSON keeps every card and the attribution', () => {
  const j = JSON.parse(json(deck()));
  assert.equal(j.notes.length, 7);
  assert.match(j.attribution, /CC BY-SA 4\.0/);
});

test('Anki manifest: explicit unique positions, and subdeck ids that are stable', () => {
  const m = ankiManifest(deck());
  const dues = m.notes.map((n) => n.due);
  assert.equal(new Set(dues).size, dues.length);
  assert.ok(dues.every((d) => d > 0));
  assert.equal(stableId('1', 'a'), stableId('1', 'a'));
  assert.deepEqual(ankiManifest(deck()).decks.map((d) => d.id), m.decks.map((d) => d.id));
});

const py = pythonWithGenanki();
const inspect = (apkg) => {
  const dir = mkdtempSync(join(tmpdir(), 'apkg-read-'));
  execFileSync('unzip', ['-q', apkg, '-d', dir]);
  const out = execFileSync(py, ['-c', `import sqlite3,json,sys
c=sqlite3.connect(sys.argv[1])
print(json.dumps([list(r) for r in c.execute("select substr(n.flds,1,instr(n.flds,char(31))-1), n.guid, c.due, n.mid from notes n join cards c on c.nid=n.id order by c.due")]))`, join(dir, 'collection.anki2')]);
  return JSON.parse(out.toString());
};

test('the .apkg keeps positions, fixed note types, and GUIDs that survive edits', { skip: !py && 'genanki not installed' }, () => {
  const dir = mkdtempSync(join(tmpdir(), 'apkg-'));
  const a = join(dir, 'a.apkg');
  const d1 = deck();
  writeApkg(d1, a);
  assert.ok(existsSync(a));
  const rows = inspect(a);
  assert.deepEqual(rows.map((r) => r[0]), ids(d1));
  assert.deepEqual(rows.map((r) => r[2]), d1.notes.map((n) => n.order).sort((x, y) => x - y));
  assert.ok(rows.every((r) => [1901826411, 1901826412, 1901826413].includes(r[3])));

  // Edit a card's content: its GUID must not change, or Anki would duplicate it.
  const d2 = deck();
  d2.notes.find((n) => n.id === 'example.widgets.which-part').back = 'The sprocket, always.';
  const b = join(dir, 'b.apkg');
  writeApkg(d2, b);
  assert.deepEqual(inspect(b).map((r) => r[1]), rows.map((r) => r[1]));
});

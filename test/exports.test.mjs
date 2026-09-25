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
import { obsidian, logseq, remnote, mochiMarkdown } from '../src/exporters/markdown.mjs';
import { brainscapeCsv } from '../src/exporters/text.mjs';
import { mochiEdn, mochiId } from '../src/exporters/mochi.mjs';
import { cardsHTML } from '../src/exporters/pdf.mjs';
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

test('Obsidian cards contain no blank line, because a blank line ends a card', () => {
  const body = obsidian(deck()).split('## ').slice(1).join('## ');
  const blocks = body.split(/\n\s*\n/).map((b) => b.trim()).filter((b) => b && !/^[A-Z][a-z]+$/.test(b));
  const qa = blocks.filter((b) => b.includes('\n?\n'));
  assert.equal(qa.length, 6, 'six question cards, each one unbroken block');
  for (const b of qa) assert.match(b, /Source:/, 'the source line stays inside its card');
});

test('RemNote, Mochi Markdown and Brainscape use their documented syntax', () => {
  const r = remnote(deck());
  assert.match(r, / >>>\n    - /);
  assert.match(r, /\{\{twelve\}\}/);
  const m = mochiMarkdown(deck());
  assert.equal(m.split('\n===\n').length, 7);
  assert.match(m, /\n---\n/);
  const b = brainscapeCsv(deck()).split('\r\n')[0];
  assert.equal(b, 'Q. Prompt,Q. Body,A. Body,A. Clarifier,A. Footnote');
});

test('.mochi data: version 2, stable letter-first ids, cards in teaching order', () => {
  const e = mochiEdn(deck());
  assert.match(e, /^\{:version 2/);
  const pos = [...e.matchAll(/:pos "(\d+)"/g)].map((x) => x[1]);
  assert.deepEqual(pos, [...pos].sort());
  assert.equal(pos.length, 7);
  assert.match(mochiId('x'), /^[A-Za-z][0-9A-Za-z]{11}$/);
  assert.equal(mochiId('x'), mochiId('x'));
});

test('printable cards: backs are mirrored left to right for long-edge duplex', () => {
  const h = cardsHTML(deck(), 'a4');
  const pages = h.split('<div class="page">').slice(1);
  assert.equal(pages.length, 4, 'alignment test (2 pages) + one sheet of fronts and backs');
  const firstTwo = (p) => [...p.matchAll(/class="ctx">(\d+)/g)].slice(0, 2).map((x) => x[1]);
  assert.deepEqual([...pages[2].matchAll(/class="ctx">[^<]*· (\d+)/g)].slice(0, 2).map((x) => x[1]), ['1', '2']);
  assert.deepEqual(firstTwo(pages[3]), ['2', '1']);
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

test('figures: every format carries the image or a labelled link, and its credit', () => {
  const d = deck();
  d.meta.pageBase = 'https://example.org/decks/example/';
  const md = obsidian(d);
  assert.match(md, /!\[A toothed wheel with a hole in its centre\]\(https:\/\/example\.org\/decks\/example\/media\/example-sprocket\.svg\)/);
  assert.match(csvSimple(d), /\[Figure: A toothed wheel with a hole in its centre\] https:\/\/example\.org\/decks\/example\/media\/example-sprocket\.svg/);
  assert.match(csvSimple(d), /Figure: Drawn for the test fixture \(CC BY-SA 4\.0\)/);
  const m = ankiManifest(d);
  assert.deepEqual(m.media.map((x) => x.name), ['example-sprocket.svg']);
  const note = m.notes.find((n) => n.id === 'example.widgets.which-part');
  assert.match(note.fields[FIELDS.indexOf('Front')], /<img src="example-sprocket\.svg" alt="A toothed wheel/);
  const j = JSON.parse(json(d)).notes.find((n) => n.id === 'example.widgets.which-part');
  assert.equal(j.image.file, 'media/sprocket.svg');
  assert.equal(j._fig, undefined, 'the resolved figure never leaks into the JSON export');
  assert.match(cardsHTML(d, 'a4'), /<img class="cimg" src="file:\/\/[^"]+sprocket\.svg"/);
});

test('the .apkg bundles the deck\'s media', { skip: !py && 'genanki not installed' }, () => {
  const dir = mkdtempSync(join(tmpdir(), 'apkg-media-'));
  const a = join(dir, 'a.apkg');
  writeApkg(deck(), a);
  const media = JSON.parse(execFileSync('unzip', ['-p', a, 'media']).toString());
  assert.deepEqual(Object.values(media), ['example-sprocket.svg']);
});

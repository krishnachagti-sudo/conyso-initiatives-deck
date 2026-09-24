// The export registry (CARD-STANDARD.md §10). One entry per format. The deck
// page's download list is generated from this, so adding a format here adds
// it everywhere. `apps` lists only apps whose import rules were read in their
// own documentation (flashcards-general/tech.md §4).

import { ankiText, csvSimple, csvFull, tsvSimple, json } from './text.mjs';
import { obsidian, logseq } from './markdown.mjs';
import { writeApkg } from './anki.mjs';
import { writeStudySheet } from './pdf.mjs';

export const FORMATS = [
  {
    key: 'apkg', suffix: '.apkg', label: 'Anki package',
    apps: ['Anki', 'AnkiDroid', 'AnkiMobile', 'RemNote', 'Mochi', 'Noji'],
    note: 'Full cards and teaching order. Re-importing a new version updates your cards and keeps your progress in Anki.',
    kind: 'binary', write: writeApkg,
  },
  {
    key: 'anki-text', suffix: '.anki.txt', label: 'Anki text import',
    apps: ['Anki'], note: 'Every field, deck and tag, for Anki’s text importer.',
    kind: 'text', render: ankiText,
  },
  {
    key: 'csv', suffix: '.csv', label: 'CSV, front and back',
    apps: ['Brainscape', 'Mochi', 'Excel', 'Google Sheets'], note: 'Two columns with a header row.',
    kind: 'text', render: csvSimple,
  },
  {
    key: 'csv-full', suffix: '.full.csv', label: 'CSV, every field',
    apps: ['Excel', 'Google Sheets'], note: 'All fields, for spreadsheets and your own tools.',
    kind: 'text', render: csvFull,
  },
  {
    key: 'tsv', suffix: '.tsv', label: 'Tab-separated, front and back',
    apps: ['Mnemosyne', 'Knowt'], note: 'One card per line; line breaks inside a card become “ / ”.',
    kind: 'text', render: tsvSimple,
  },
  {
    key: 'obsidian', suffix: '.obsidian.md', label: 'Markdown for Obsidian',
    apps: ['Obsidian (Spaced Repetition plugin)'], note: 'Multi-line cards and cloze highlights.',
    kind: 'text', render: obsidian,
  },
  {
    key: 'logseq', suffix: '.logseq.md', label: 'Markdown for Logseq',
    apps: ['Logseq'], note: '#card blocks with the answer as a child block.',
    kind: 'text', render: logseq,
  },
  {
    key: 'json', suffix: '.json', label: 'JSON',
    apps: ['Developers'], note: 'Every field and the attribution, as open data.',
    kind: 'text', render: json,
  },
  {
    key: 'study-sheet', suffix: '.study-sheet.pdf', label: 'Study sheet (PDF)',
    apps: ['Print', 'Any PDF reader'], note: 'Every card with its answer and explanation, in teaching order.',
    kind: 'binary', write: writeStudySheet,
  },
];

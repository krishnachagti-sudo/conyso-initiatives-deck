// The export registry (CARD-STANDARD.md §10). One entry per format. The deck
// page's download list is generated from this, so adding a format here adds
// it everywhere. `apps` lists only apps whose import rules were read in their
// own documentation (flashcards-general/tech.md §4).

import { ankiText, csvSimple, csvFull, tsvSimple, json, brainscapeCsv } from './text.mjs';
import { obsidian, logseq, remnote, mochiMarkdown, MOCHI_CARD_DELIMITER } from './markdown.mjs';
import { writeApkg } from './anki.mjs';
import { writeMochi } from './mochi.mjs';
import { writeStudySheet, writeCardsLetter, writeCardsA4 } from './pdf.mjs';

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
    key: 'tsv', suffix: '.tsv', label: 'Tab-separated, front and back (paste import)',
    apps: ['Quizlet (paste import)', 'Mnemosyne', 'Knowt'], note: 'One card per line, a tab between the sides; line breaks inside a card become “ / ”. In Quizlet, choose Tab between term and definition and New line between rows.',
    kind: 'text', render: tsvSimple,
  },
  {
    key: 'brainscape', suffix: '.brainscape.csv', label: 'CSV for Brainscape',
    apps: ['Brainscape'], note: 'Labelled columns: topic as the prompt, the answer, the explanation as the clarifier and the source as the footnote.',
    kind: 'text', render: brainscapeCsv,
  },
  {
    key: 'mochi', suffix: '.mochi', label: 'Mochi deck',
    apps: ['Mochi'], note: 'Mochi’s own format, keeping the teaching order. Re-importing a new version is not documented to update cards in place.',
    kind: 'binary', write: writeMochi,
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
    key: 'remnote', suffix: '.remnote.md', label: 'Markdown for RemNote',
    apps: ['RemNote'], note: 'Multi-line flashcards (>>>) and clozes. Re-importing adds changed cards beside the old ones, so import a new version into a fresh document.',
    kind: 'text', render: remnote,
  },
  {
    key: 'mochi-md', suffix: '.mochi.md', label: 'Markdown for Mochi',
    apps: ['Mochi'], note: `One file; enter ${MOCHI_CARD_DELIMITER} as the card delimiter at import. Sides are split by ---.`,
    kind: 'text', render: mochiMarkdown,
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
  {
    key: 'cards-letter', suffix: '.cards-letter.pdf', label: 'Printable cards, US Letter (PDF)',
    apps: ['Print'], note: '8 cards a sheet, fronts then mirrored backs for long-edge double-sided printing. Print the alignment test page first.',
    kind: 'binary', write: writeCardsLetter,
  },
  {
    key: 'cards-a4', suffix: '.cards-a4.pdf', label: 'Printable cards, A4 (PDF)',
    apps: ['Print'], note: '8 cards a sheet, fronts then mirrored backs for long-edge double-sided printing. Print the alignment test page first.',
    kind: 'binary', write: writeCardsA4,
  },
];

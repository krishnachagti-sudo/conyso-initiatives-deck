// Text exports: Anki text, CSV and TSV (CARD-STANDARD.md §10).
//
// Sources for the formats: flashcards-general/tech.md §1 (Anki text headers,
// Anki 2.1.54+) and §4 (Brainscape CSV/TSV, Mochi CSV headers, Mnemosyne
// tab-separated UTF-8, Knowt paste-in).

import { FIELDS, NOTE_TYPES } from '../schema.mjs';
import { fieldValues, tagsFor, deckPath, twoSided, inOrder, attribution } from './common.mjs';

/** RFC 4180 style quoting for a delimited field. */
export function quote(v, sep) {
  const s = String(v ?? '');
  return /["\n\r]/.test(s) || s.includes(sep) ? `"${s.replace(/"/g, '""')}"` : s;
}
const row = (cells, sep) => cells.map((c) => quote(c, sep)).join(sep);

/**
 * Anki text import with file headers. Columns: note type, deck, every field in
 * the frozen order (ID first, so Anki matches on it), then tags.
 */
export function ankiText(deck) {
  const sep = '\t';
  const head = [
    '#separator:tab',
    '#html:true',
    '#notetype column:1',
    '#deck column:2',
    `#tags column:${FIELDS.length + 3}`,
    `#columns:${['Notetype', 'Deck', ...FIELDS, 'Tags'].join('\t')}`,
  ];
  const lines = inOrder(deck).map((n) =>
    row([NOTE_TYPES[n.type].name, deckPath(deck, n), ...fieldValues(deck, n, { html: true }), tagsFor(deck, n).join(' ')], sep),
  );
  return [...head, ...lines].join('\n') + '\n';
}

/** Two columns, front and back, with a header row. Brainscape, Mochi, spreadsheets. */
export function csvSimple(deck) {
  const lines = [row(['Front', 'Back'], ',')];
  for (const n of inOrder(deck)) {
    const c = twoSided(n);
    lines.push(row([c.front, c.back], ','));
  }
  return lines.join('\r\n') + '\r\n';
}

/** Every field, one column each, plus deck and tags. For spreadsheets and tools. */
export function csvFull(deck) {
  const lines = [row(['Deck', 'NoteType', ...FIELDS, 'Tags'], ',')];
  for (const n of inOrder(deck)) {
    lines.push(row([deckPath(deck, n), n.type, ...fieldValues(deck, n), tagsFor(deck, n).join(' ')], ','));
  }
  return lines.join('\r\n') + '\r\n';
}

/**
 * Two columns, tab-separated, UTF-8, no header: one question and answer per
 * line, which is what Mnemosyne imports and paste-in importers accept.
 * Newlines inside a card would start a new card in these importers, so they
 * become " / ".
 */
export function tsvSimple(deck) {
  const flat = (s) => String(s).replace(/\t/g, ' ').replace(/\s*\n+\s*/g, ' / ');
  return inOrder(deck).map((n) => { const c = twoSided(n); return `${flat(c.front)}\t${flat(c.back)}`; }).join('\n') + '\n';
}

/** Full JSON: every field, deck metadata and attribution. */
export function json(deck) {
  return JSON.stringify({
    deck: deck.meta,
    attribution: attribution(deck),
    topics: deck.topics.map((t) => t.topic),
    notes: inOrder(deck).map((n) => ({ ...n, tags: tagsFor(deck, n), deckPath: deckPath(deck, n) })),
  }, null, 2) + '\n';
}

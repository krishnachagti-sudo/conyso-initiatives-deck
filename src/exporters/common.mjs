// Shared helpers for every exporter (CARD-STANDARD.md §10).
//
// Every format is generated from the same loaded deck. Nothing here changes a
// card; it only decides how a card is shown in a format that has fewer
// features than Anki.

import { FIELDS, FIELD_KEYS, PROMPTED_KINDS, NOTE_PROMPT } from '../schema.mjs';
import { slugify } from '../decks.mjs';

const listish = new Set(['introduces', 'uses', 'conceptIDs', 'examRefs']);

/** Deck path in Anki's `::` notation: family, deck, then numbered topic subdeck. */
export function deckPath(deck, note) {
  const idx = deck.topics.findIndex((t) => t.topic === note.topic);
  const n = String(idx + 1).padStart(2, '0');
  return `${deck.meta.familyTitle || deck.meta.family}::${deck.meta.title}::${n} ${note.topic}`;
}

/** Hierarchical tags that survive import into Anki. */
export function tagsFor(deck, note) {
  const t = [
    `deck::${deck.meta.slug}`,
    `topic::${slugify(note.topic)}`,
    `kind::${note.kind}`,
    `priority::${note.priority}`,
  ];
  if (note.volatile && note.validAsOf) t.push(`valid-as-of::${String(note.validAsOf).slice(0, 4)}`);
  for (const r of note.examRefs || []) t.push(`exam::${slugify(r)}`);
  return t;
}

/** Every Anki field as a string, in the frozen order. */
export function fieldValues(deck, note, { html = false } = {}) {
  const derived = {
    pageURL: `${deck.meta.pageBase}#${slugify(note.topic)}`,
    reportURL: deck.meta.reportURL,
    notePrompt: PROMPTED_KINDS.includes(note.kind) ? NOTE_PROMPT : '',
    myNote: '',
  };
  return FIELDS.map((f) => {
    const k = FIELD_KEYS[f];
    let v = k in derived ? derived[k] : note[k];
    if (v === undefined || v === null) return '';
    if (listish.has(k) && Array.isArray(v)) return v.join(', ');
    if (k === 'order') return String(v);
    return html ? String(v).replace(/\r?\n/g, '<br>') : String(v);
  });
}

/** HTML to plain text, keeping line breaks. */
export function plain(html) {
  return String(html || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li)>/gi, '\n')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<img\b[^>]*alt="([^"]*)"[^>]*>/gi, '[image: $1]')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const CLOZE = /\{\{c\d+::(.*?)(?:::(.*?))?\}\}/g;
/** A cloze sentence with the blank shown (hint if the card has one). */
export const clozeQuestion = (s) => String(s).replace(CLOZE, (_, _a, hint) => (hint ? `_____ (${hint})` : '_____'));
/** A cloze sentence with the answer filled in. */
export const clozeAnswer = (s) => String(s).replace(CLOZE, (_, a) => a);
/** Just the hidden text of a cloze. */
export const clozeHidden = (s) => [...String(s).matchAll(CLOZE)].map((m) => m[1]).join(', ');

/**
 * A two-sided view of any card, for formats without Anki's templates.
 * `withContext` prefixes the topic, as the Anki front does.
 */
export function twoSided(note, { withContext = true, withSource = true } = {}) {
  const ctx = withContext ? `${note.topic} › ` : '';
  let front;
  let answer;
  if (note.type === 'cloze') {
    front = ctx + plain(clozeQuestion(note.front));
    answer = plain(clozeAnswer(note.front));
  } else {
    front = ctx + plain(note.front);
    if (note.choices) front += `\n\n${plain(note.choices)}`;
    answer = plain(note.back);
  }
  const extra = [];
  if (note.explanation) extra.push(plain(note.explanation));
  if (note.choicesExplained) extra.push(`Why not the others: ${plain(note.choicesExplained)}`);
  if (note.example && note.kind === 'primer') extra.push(`Example: ${plain(note.example)}`);
  if (note.contrast) extra.push(`Contrast: ${plain(note.contrast)}`);
  if (withSource && note.source) extra.push(`Source: ${plain(note.source)} (${note.sourceURL})`);
  if (note.volatile && note.validAsOf) extra.push(`Valid as of ${note.validAsOf}`);
  const back = [answer, ...extra].filter(Boolean).join('\n\n');
  return { front, answer, back };
}

/** Notes in teaching order. Every export uses this order. */
export const inOrder = (deck) => deck.notes.slice().sort((a, b) => a.order - b.order);

/** Deck-level attribution line, required by CC BY-SA 4.0. */
export const attribution = (deck) =>
  `${deck.meta.title}, version ${deck.meta.version}. Licence: ${deck.meta.licence}. ${deck.meta.pageBase}`;

// Shared helpers for every exporter (CARD-STANDARD.md §10).
//
// Every format is generated from the same loaded deck. Nothing here changes a
// card; it only decides how a card is shown in a format that has fewer
// features than Anki.

import { FIELDS, FIELD_KEYS, PROMPTED_KINDS, NOTE_PROMPT } from '../schema.mjs';
import { slugify } from '../decks.mjs';
import { basename, join } from 'node:path';

// ── Figures ───────────────────────────────────────────────────────────────
// A card may carry one image: note.image = { file, alt, credit, licence, side }.
// `file` is relative to the deck directory (decks/<slug>/media/...). Media names
// are prefixed with the deck slug so decks never collide in Anki's flat media
// folder, and the same name is used on the site (<pageBase>media/<name>).

export const mediaName = (deck, file) => `${deck.meta.slug}-${basename(file)}`;

export function figureOf(deck, note) {
  const im = note.image;
  if (!im || !im.file) return null;
  const name = mediaName(deck, im.file);
  return {
    name,
    file: im.file,
    path: deck.dir ? join(deck.dir, im.file) : im.file,
    url: `${deck.meta.pageBase || ''}media/${name}`,
    alt: im.alt || '',
    credit: im.credit || '',
    licence: im.licence || '',
    side: im.side === 'back' ? 'back' : 'front',
  };
}

const escAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const figText = (f) => `[Figure: ${f.alt}] ${f.url}`;
const figCredit = (f) => `Figure: ${f.credit}${f.licence ? ` (${f.licence.replace(/^[A-D] · /, '')})` : ''}`;

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
export function fieldValues(deck, note, { html = false, imgSrc = 'media' } = {}) {
  const derived = {
    pageURL: `${deck.meta.pageBase}#${slugify(note.topic)}`,
    reportURL: deck.meta.reportURL,
    notePrompt: PROMPTED_KINDS.includes(note.kind) ? NOTE_PROMPT : '',
    myNote: '',
  };
  const values = FIELDS.map((f) => {
    const k = FIELD_KEYS[f];
    let v = k in derived ? derived[k] : note[k];
    if (v === undefined || v === null) return '';
    if (listish.has(k) && Array.isArray(v)) return v.join(', ');
    if (k === 'order') return String(v);
    return html ? String(v).replace(/\r?\n/g, '<br>') : String(v);
  });
  const fig = figureOf(deck, note);
  if (fig) {
    // In Anki the image sits in the Front (question side) or at the head of the
    // Explanation (answer side); its credit joins the Source line.
    const shown = html ? `<div class="fig"><img src="${escAttr(imgSrc === 'media' ? fig.name : fig.url)}" alt="${escAttr(fig.alt)}"></div>` : figText(fig);
    const at = FIELDS.indexOf(fig.side === 'front' ? 'Front' : 'Explanation');
    values[at] = fig.side === 'front' ? `${values[at]}${html ? '' : '\n'}${shown}` : `${shown}${html ? '' : '\n'}${values[at]}`;
    const src = FIELDS.indexOf('Source');
    values[src] = `${values[src]}${html ? '<br>' : '; '}${figCredit(fig)}`;
  }
  return values;
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
export function twoSided(note, { withContext = true, withSource = true, sep = '\n\n', figure = 'text' } = {}) {
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
  const fig = note._fig;
  if (fig && figure !== 'none') {
    const shown = figure === 'md' ? `![${fig.alt}](${fig.url})` : figText(fig);
    if (fig.side === 'front') front += `${sep}${shown}`; else extra.unshift(shown);
  }
  if (withSource && note.source) extra.push(`Source: ${plain(note.source)} (${note.sourceURL})${fig ? `; ${figCredit(fig)}` : ''}`);
  if (note.volatile && note.validAsOf) extra.push(`Valid as of ${note.validAsOf}`);
  const back = [answer, ...extra].filter(Boolean).join(sep);
  return { front, answer, extra, back };
}

/** Notes in teaching order. Every export uses this order. */
export const inOrder = (deck) => deck.notes.slice().sort((a, b) => a.order - b.order).map((n) => {
  // Attach the resolved figure (not enumerable, so the JSON export keeps the
  // card exactly as written).
  if (n.image && deck.meta) Object.defineProperty(n, '_fig', { value: figureOf(deck, n), enumerable: false, configurable: true, writable: true });
  return n;
});

/** Deck-level attribution line, required by CC BY-SA 4.0. */
export const attribution = (deck) =>
  `${deck.meta.title}, version ${deck.meta.version}. Licence: ${deck.meta.licence}. ${deck.meta.pageBase}${deck.meta.notice ? ` ${deck.meta.notice}` : ''}`;

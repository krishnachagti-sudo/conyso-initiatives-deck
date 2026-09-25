// Figures about a deck that its pages state. Everything here is counted from
// the deck itself, so a page can never claim more than the cards show.

import { inOrder, plain, clozeQuestion, clozeAnswer } from '../exporters/common.mjs';

export const NEW_PER_DAY = 20;          // Anki's default New cards/day
export const REVIEWS_PER_NEW = 10;      // Anki manual, Deck Options: 20 new a day → about 200 reviews a day

export function deckStats(deck) {
  const notes = inOrder(deck);
  const primers = notes.filter((n) => n.kind === 'primer');
  const terms = [...new Set(primers.flatMap((n) => n.introduces || []))];
  const topics = deck.topics.map((t) => {
    const tn = inOrder({ notes: t.notes });
    return {
      topic: t.topic,
      cards: tn.length,
      primers: tn.filter((n) => n.kind === 'primer').length,
      terms: tn.flatMap((n) => (n.kind === 'primer' ? n.introduces || [] : [])),
      first: tn[0]?.order ?? 0,
    };
  }).sort((a, b) => a.first - b.first);
  const sources = [...new Map(notes.map((n) => [n.sourceURL, n.source])).entries()].map(([url, title]) => ({
    url, title, cards: notes.filter((n) => n.sourceURL === url).length, licence: notes.find((n) => n.sourceURL === url)?.sourceLicence,
  }));
  return {
    notes,
    cards: notes.length,
    core: notes.filter((n) => n.priority === 'core').length,
    primers: primers.length,
    terms,
    topics,
    sources,
    days: Math.ceil(notes.length / NEW_PER_DAY),
    kinds: Object.fromEntries(['primer', 'fact', 'application', 'classification', 'contrast'].map((k) => [k, notes.filter((n) => n.kind === k).length])),
  };
}

/**
 * A card split into labelled parts, for the site's index cards. The exports
 * keep their own flat layout (twoSided); on the page each part gets its own
 * line and the source becomes a short link instead of a raw address.
 */
export function cardParts(n) {
  const cloze = n.type === 'cloze';
  return {
    id: n.id,
    topic: n.topic,
    kind: n.kind,
    core: n.priority === 'core',
    front: plain(cloze ? clozeQuestion(n.front) : n.front),
    choices: n.choices ? plain(n.choices) : '',
    answer: plain(cloze ? clozeAnswer(n.front) : n.back),
    why: n.explanation ? plain(n.explanation) : '',
    whyNot: n.choicesExplained ? plain(n.choicesExplained) : '',
    example: n.example && n.kind === 'primer' ? plain(n.example) : '',
    contrast: n.contrast ? plain(n.contrast) : '',
    validAsOf: n.volatile && n.validAsOf ? n.validAsOf : '',
    source: String(n.source || '').replace(/^.*?“(.+)”.*$/, '$1'),
    sourceURL: n.sourceURL || '',
    image: n._fig ? { src: `media/${n._fig.name}`, alt: n._fig.alt, credit: n._fig.credit, side: n._fig.side } : null,
  };
}

const escH = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const lines = (s) => escH(s).split('\n').join('<br>');

/** One index card as HTML: the same markup study.js builds in the browser. */
export function cardHTML(p, { top = '', answer = true, imgPrefix = '' } = {}) {
  const row = (label, text) => (text ? `<p class="ic-x"><b>${label}</b> ${lines(text)}</p>` : '');
  const fig = p.image ? `<figure class="ic-fig"><img src="${escH(imgPrefix + p.image.src)}" alt="${escH(p.image.alt)}" loading="lazy"><figcaption>${escH(p.image.credit)}</figcaption></figure>` : '';
  return `<div class="icard k-${escH(p.kind)}"><div class="ic-top"><span>${escH(top || p.topic)}</span><b>${escH(p.kind)}${p.core ? ' · core' : ''}</b></div>`
    + `<div class="ic-q"><p>${lines(p.front)}</p>${p.image?.side === 'front' ? fig : ''}${p.choices ? `<p class="ic-choices">${lines(p.choices)}</p>` : ''}</div>`
    + (answer ? `<div class="ic-rule"></div><div class="ic-a">${p.image?.side === 'back' ? fig : ''}<p class="ic-ans">${lines(p.answer)}</p>${row('Why', p.why)}${row('Why not the others', p.whyNot)}${row('Example', p.example)}${row('Not to confuse', p.contrast)}${row('Valid as of', p.validAsOf)}${p.sourceURL ? `<p class="ic-src"><a href="${escH(p.sourceURL)}">Source: ${escH(p.source)} ↗</a></p>` : ''}</div>` : '')
    + '</div>';
}

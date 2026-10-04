// Per-deck glossaries: /<slug>/glossary/.
//
// Every term a deck's primer cards introduce (note.introduces), with that
// primer's answer as the definition, grouped by the topic that teaches it and
// in teaching order, with an A to Z index. Nothing is written here that the
// deck does not say: the definition is the card's back, word for word, and
// each term links to its card on the deck page.
//
// Only released decks with at least MIN_TERMS terms get a page.

import { esc, page, crumbs, otherWays } from '../layout.mjs';
import { siteOrgId } from '../identity.mjs';
import { slugify } from '../../decks.mjs';
import { deckStats, cardParts } from '../deck-data.mjs';

export const MIN_TERMS = 5;
const n0 = (n) => Number(n).toLocaleString('en-GB');
const plural = (n, one, many = `${one}s`) => `${n0(n)} ${n === 1 ? one : many}`;
const lines = (s) => esc(s).split('\n').join('<br>');

/**
 * The deck's terms, each once, in teaching order.
 * @returns {{term: string, id: string, definition: string, topic: string, noteId: string, letter: string}[]}
 */
export function glossaryTerms(deck) {
  const seen = new Set();
  const ids = new Set();
  const out = [];
  for (const n of deckStats(deck).notes) {
    if (n.kind !== 'primer') continue;
    const definition = cardParts(n).answer;
    for (const term of n.introduces || []) {
      const key = term.toLowerCase();
      if (seen.has(key) || !definition) continue;
      seen.add(key);
      let id = `term-${slugify(term) || 'x'}`;
      for (let i = 2; ids.has(id); i++) id = `term-${slugify(term)}-${i}`;
      ids.add(id);
      const first = term.normalize('NFKD').replace(/[^A-Za-z0-9]/g, '').charAt(0).toUpperCase();
      out.push({ term, id, definition, topic: n.topic, noteId: n.id, letter: /[A-Z]/.test(first) ? first : '#' });
    }
  }
  return out;
}

/** True when the deck gets a glossary page (deck pages may link to it). */
export const hasGlossary = (deck) => deck.meta.status === 'released' && glossaryTerms(deck).length >= MIN_TERMS;

export const glossaryPath = (deck) => `${deck.meta.slug}/glossary/`;

const byName = (a, b) => a.term.localeCompare(b.term, 'en-GB', { sensitivity: 'base', numeric: true });

export function glossaryTitle(cfg, short, count) {
  for (const t of [`${short} Glossary: ${count} Terms Explained | ${cfg.brand}`, `${short} Glossary: ${count} Terms Explained`, `${short} Glossary | ${cfg.brand}`]) {
    if (t.length <= 60) return t;
  }
  return `${short} Glossary`;
}

/** A description that fits a results page whole (158 characters): as many example terms as fit. */
export function glossaryDescription(short, count, names) {
  const head = `Plain definitions of all ${count} terms the free ${short} flashcard deck teaches, grouped by topic`;
  for (let k = Math.min(3, names.length); k > 0; k--) {
    const d = `${head}: ${names.slice(0, k).join(', ')} and more.`;
    if (d.length <= 158) return d;
  }
  return `${head}.`;
}

export function glossaryPage(cfg, deck, { decks = [] } = {}) {
  const m = deck.meta;
  const short = m.shortTitle || m.title;
  const terms = glossaryTerms(deck);
  const stats = deckStats(deck);
  const path = glossaryPath(deck);
  const url = `${cfg.origin}${cfg.base}${path}`;
  const deckUrl = `${cfg.base}${m.slug}/`;
  const topics = stats.topics.map((t) => ({ topic: t.topic, terms: terms.filter((x) => x.topic === t.topic) })).filter((t) => t.terms.length);
  const primers = new Set(terms.map((t) => t.noteId)).size;
  const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '#'];
  const az = [...terms].sort(byName);
  const present = new Set(az.map((t) => t.letter));
  const family = m.familyTitle || m.family;

  const body = `<div class="wrap gl">
${crumbs(cfg, [[family, `families/${slugify(family)}/`], [short, `${m.slug}/`], ['Glossary', path]])}
<div class="hub-head">
<span class="label">Glossary</span>
<h1>${esc(short)} glossary: ${plural(terms.length, 'term')} explained</h1>
<p class="kicker">${plural(terms.length, 'term')} · ${plural(topics.length, 'topic')} · from ${plural(primers, 'primer card')}</p>
<p class="lead">Every term the free <a href="${deckUrl}">${esc(short)} flashcard deck</a> teaches, with the plain definition its primer card gives. They are grouped by topic, in the order the deck teaches them, and each links to its card.</p>
</div>
<nav class="gl-az" aria-label="Terms from A to Z">${letters.map((l) => (present.has(l) ? `<a href="#az-${l === '#' ? 'num' : l.toLowerCase()}" aria-label="Terms starting with ${l === '#' ? 'a number or symbol' : l}">${l}</a>` : `<span aria-hidden="true">${l}</span>`)).join('')}</nav>
<nav aria-labelledby="gl-topics-h"><h2 id="gl-topics-h" class="label" style="margin-top:22px">Topics</h2>
<ol class="gl-topics">${topics.map((t) => `<li><a href="#t-${slugify(t.topic)}">${esc(t.topic)}</a><small>${n0(t.terms.length)}</small></li>`).join('')}</ol></nav>
${topics.map((t) => `<section class="gl-sec" aria-labelledby="t-${slugify(t.topic)}"><h2 id="t-${slugify(t.topic)}">${esc(t.topic)}<small>${plural(t.terms.length, 'term')}</small></h2>
<dl class="gl-list">${t.terms.map((x) => `<div class="gl-term" id="${x.id}"><dt>${esc(x.term)}</dt><dd>${lines(x.definition)}<br><a class="gl-card" href="${deckUrl}#${esc(x.noteId)}" aria-label="${esc(x.term)}: the card in the ${esc(short)} deck">The card in the deck →</a></dd></div>`).join('')}</dl>
</section>`).join('\n')}
<section class="gl-sec gl-index" aria-labelledby="az-h"><h2 id="az-h">All ${plural(terms.length, 'term')}, A to Z</h2>
${letters.filter((l) => present.has(l)).map((l) => `<h3 id="az-${l === '#' ? 'num' : l.toLowerCase()}">${l}</h3><ul>${az.filter((x) => x.letter === l).map((x) => `<li><a href="#${x.id}">${esc(x.term)}</a></li>`).join('')}</ul>`).join('\n')}
</section>
<p class="gl-back"><a class="btn btn-primary" href="${deckUrl}">Study all ${n0(deck.notes.length)} ${esc(short)} cards</a></p>
</div>
${otherWays(cfg)}`;

  const description = glossaryDescription(short, terms.length, az.map((x) => x.term));
  const setId = `${url}#terms`;
  return page(cfg, {
    title: glossaryTitle(cfg, short, terms.length),
    description,
    path,
    body,
    og: `og/${m.slug}.png`,
    active: 'decks',
    decks,
    count: decks.reduce((a, d) => a + d.notes.length, 0),
    graph: [
      { '@type': 'CollectionPage', '@id': `${url}#page`, name: `${short} glossary`, url, description, inLanguage: 'en-GB', isPartOf: { '@id': `${cfg.origin}${cfg.base}#website` }, mainEntity: { '@id': setId }, publisher: { '@id': siteOrgId(cfg) } },
      {
        '@type': 'DefinedTermSet', '@id': setId, name: `${short} glossary`, url, description,
        license: 'https://creativecommons.org/licenses/by-sa/4.0/', publisher: { '@id': siteOrgId(cfg) },
        hasDefinedTerm: terms.map((x) => ({ '@type': 'DefinedTerm', '@id': `${url}#${x.id}`, name: x.term, description: x.definition, url: `${url}#${x.id}`, inDefinedTermSet: { '@id': setId } })),
      },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: cfg.brand, item: `${cfg.origin}${cfg.base}` },
        { '@type': 'ListItem', position: 2, name: family, item: `${cfg.origin}${cfg.base}families/${slugify(family)}/` },
        { '@type': 'ListItem', position: 3, name: short, item: `${cfg.origin}${cfg.base}${m.slug}/` },
        { '@type': 'ListItem', position: 4, name: 'Glossary', item: url },
      ] },
    ],
  });
}

export async function build({ cfg, decks }) {
  const pages = {};
  for (const d of decks.filter(hasGlossary)) pages[glossaryPath(d)] = glossaryPage(cfg, d, { decks: decks.filter((x) => x.meta.status === 'released') });
  return { pages, files: {}, urls: Object.keys(pages) };
}

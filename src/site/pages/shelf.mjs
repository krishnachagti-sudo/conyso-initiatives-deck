// /shelf/: the decks a reader saved and the ones they opened lately, with how
// far they have got. The list lives in this browser (src/assets/store.js), so
// the page is an indexable explainer with an empty state; src/assets/shelf.js
// fills it from a small table of every released deck written into the page.

import { esc, page, crumbs, otherWays, icon } from '../layout.mjs';
import { releasedDecks, shortOf, familyOf, stats, familyPath } from './families.mjs';

/** The table shelf.js reads: one row per released deck, the fields it shows. */
export function shelfTable(decks) {
  return releasedDecks(decks).map((d) => {
    const s = stats(d);
    return { s: d.meta.slug, t: shortOf(d), f: familyOf(d), c: s.cards, n: s.topics.length, h: familyPath(familyOf(d)) };
  }).sort((a, b) => a.t.localeCompare(b.t, 'en', { numeric: true }));
}

const FAQ = [
  ['Where is my shelf kept?', 'In this browser, on this device. There is no account, so another browser or another phone keeps a shelf of its own.'],
  ['What do “seen” and “due” mean?', 'Seen counts the cards you have turned in a deck’s “Try it”. Due counts the cards its spaced-repetition schedule brings back today.'],
  ['How do I clear it?', 'Remove decks one at a time here, or clear this site’s data in your browser’s settings. That also clears your progress.'],
];

export async function build({ cfg, decks }) {
  const all = releasedDecks(decks);
  const table = shelfTable(all);
  const url = `${cfg.origin}${cfg.base}shelf/`;
  const body = `<div class="wrap">
${crumbs(cfg, [['Shelf', 'shelf/']])}
<div class="hub-head"><h1>Your shelf</h1><p class="kicker">Saved decks and where you left off · kept in this browser</p><p class="lead">Save a deck from its page and it waits here, with how far you have got and how many cards are due today. Nothing leaves this browser.</p></div>
</div>
<div class="bg bg-box shelf-band"><section class="shelf wrap" aria-labelledby="shelf-h" data-shelf-page>
<div class="shelf-h"><h2 id="shelf-h">Saved decks</h2><p class="kicker" id="shelf-n" aria-live="polite"></p></div>
<ul class="shelf-grid" id="shelf-list" role="list"></ul>
<div class="shelf-empty" id="shelf-empty">
<div class="se-box" aria-hidden="true"><span class="se-tab"></span><span class="se-card"></span><span class="se-card"></span></div>
<div class="se-text"><h3>Nothing saved yet</h3><p>Open any deck and press <b>${icon('bookmark')} Save to shelf</b>. It will wait here with your progress.</p>
<noscript><p>The shelf reads what this browser saved, so it needs JavaScript.</p></noscript>
<p class="se-go"><a class="btn btn-primary" href="${cfg.base}browse/">${icon('layers')} Find a deck</a><a class="btn btn-ghost" href="${cfg.base}daily/">${icon('calendar')} Today’s ten</a></p></div>
</div>
</section></div>
<div class="wrap">
<section class="recent" aria-labelledby="recent-h" id="recent" hidden>
<h2 id="recent-h">Recently viewed</h2>
<ol class="recent-list" id="recent-list"></ol>
</section>
<div class="hub-body prose">
<section id="faq" class="faq"><h2>How the shelf works</h2>${FAQ.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join('')}</section>
</div>
<script type="application/json" id="shelf-data">${JSON.stringify(table).replace(/</g, '\\u003c')}</script>
</div>
${otherWays(cfg, 'shelf/')}`;
  const html = page(cfg, {
    title: `Your Shelf: Saved Decks and Progress | ${cfg.brand}`,
    description: 'The flashcard decks you saved, how many cards you have seen and how many are due today. Kept in your browser, with no account and no tracking.',
    path: 'shelf/', body, active: 'shelf', decks: all, count: all.reduce((a, d) => a + stats(d).cards, 0),
    graph: [{ '@type': 'WebPage', '@id': `${url}#page`, name: 'Your shelf', url, isPartOf: { '@id': `${cfg.origin}${cfg.base}#website` } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: cfg.brand, item: `${cfg.origin}${cfg.base}` }, { '@type': 'ListItem', position: 2, name: 'Shelf', item: url }] },
      { '@type': 'FAQPage', mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }],
  });
  return { pages: { 'shelf/': html }, files: {}, urls: ['shelf/'] };
}

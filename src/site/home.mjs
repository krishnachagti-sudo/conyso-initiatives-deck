// The home page (playbook, page-skeletons §3): hero, trust strip, card of the
// day, features, the decks, and a corrections call to action. Every number on
// it is counted from the decks at build time.

import { esc, page, icon, otherWays } from './layout.mjs';
import { deckStats, cardParts, cardHTML as icard } from './deck-data.mjs';

const n0 = (n) => Number(n).toLocaleString('en-GB');

export function homePage(cfg, decks) {
  const stats = decks.map((d) => ({ deck: d, s: deckStats(d) }));
  const cards = stats.reduce((a, x) => a + x.s.cards, 0);
  const primers = stats.reduce((a, x) => a + x.s.primers, 0);
  const lead = stats[0];

  // A primer card for the hero, and the pool the "card of the day" draws from.
  const primerCards = stats.flatMap(({ deck, s }) => s.notes.filter((n) => n.kind === 'primer').map((n) => ({
    ...cardParts(n), deck: deck.meta.shortTitle || deck.meta.title, slug: deck.meta.slug,
  })));
  const hero = primerCards[0];
  const cardHTML = (c, cls = '') => `<div class="${cls}">${icard({ ...c, why: '', sourceURL: '' }, { top: `${c.deck} · ${c.topic}` })}</div>`;

  const heroBand = `
<section class="hero wrap">
  <div class="hero-grid">
    <div>
      <p class="eyebrow">${n0(decks.length)} free deck${decks.length === 1 ? '' : 's'} · ${n0(cards)} cards · every one sourced</p>
      <h1><span>Most flashcard decks test you.</span><span class="l2">Few teach you first.</span><span class="l3">So every deck here <em>explains each idea before it asks about it</em>, and cites where it came from.</span></h1>
      ${lead ? `<p class="hero-hook">${n0(primers)} of the ${n0(cards)} cards are primers: plain-English introductions that come before any card tests the idea. <a href="${cfg.base}${esc(lead.deck.meta.slug)}/#path">See the teaching path →</a></p>` : ''}
      <div class="hero-actions">${lead ? `<a class="btn btn-primary" href="${cfg.base}${esc(lead.deck.meta.slug)}/">${icon('cards')} Open the ${esc(lead.deck.meta.shortTitle || lead.deck.meta.title)} deck</a><a class="btn" href="${cfg.base}${esc(lead.deck.meta.slug)}/#try">${icon('browser')} Try it in the browser</a>` : ''}</div>
      <p class="hero-credit">By <a href="https://conyso.com/founder/">Krishna Chagti</a> · an initiative by <a href="https://conyso.com/">Conyso</a> · <a href="${cfg.base}method/">how we teach</a></p>
    </div>
    ${hero ? `<div class="hero-card"><div class="stack tilt-r">${cardHTML(hero)}</div><p class="flip-hint">A primer card, the first in the ${esc(hero.deck)} deck</p></div>` : ''}
  </div>
</section>`;

  const trust = `
<div class="wrap"><div class="trust">
  <div><div class="big">${n0(cards)}</div><div class="big-l">cards, free, no account</div></div>
  <div><h3>Taught first</h3><p>Every term gets a primer card before any card asks about it. The build rejects a deck that breaks this.</p></div>
  <div><h3>Sourced</h3><p>Every card names and links the section of the source it was written from.</p></div>
  <div><h3>Any app</h3><p>Anki, Quizlet, Brainscape, Mochi, RemNote, Obsidian, Logseq, a spreadsheet or paper.</p></div>
</div></div>`;

  const cotd = primerCards.length ? `
<section class="band wrap" aria-labelledby="cotd-h">
  <div class="cotd">
    <div class="prose">
      <p class="eyebrow">Card of the day</p>
      <h2 id="cotd-h" style="font-size:clamp(28px,3.4vw,40px);margin-top:10px">A new primer every day.</h2>
      <p style="margin-top:12px">Primers are the cards most decks leave out: the ones that explain a term in plain words, with an example, before anything tests you on it. Here is today’s.</p>
      <p style="margin-top:14px"><a class="link" id="cotd-link" href="${cfg.base}${esc(hero.slug)}/#${esc(hero.id)}">See it in its deck →</a></p>
    </div>
    <div id="cotd-card">${cardHTML(hero, 'tilt-l')}</div>
  </div>
  <script type="application/json" id="cotd-data">${JSON.stringify(primerCards.map(({ slug, id, deck, topic, front, answer, example }) => ({ slug, id, deck, topic, front, answer, example }))).replace(/</g, '\\u003c')}</script>
</section>` : '';

  const features = [
    ['browser', 'Study in the browser', 'Go through any deck card by card in teaching order, with no app and no account.'],
    ['steps', 'Taught in order', 'Primers first, then facts, then cards that ask you to apply them. The order survives the import into Anki.'],
    ['source', 'Every card sourced', 'Each card links the exact section it was written from, and records that source’s licence.'],
    ['layers', 'Fifteen formats', 'One deck, exported for every popular flashcard app, for spreadsheets, and as printable cards.'],
    ['refresh', 'Updates keep your progress', 'Each card has a permanent ID, so a new version changes your cards in Anki without resetting them.'],
    ['calendar', 'Plan to your exam date', 'Enter the date and see how many new cards a day you need, and roughly how many reviews that brings.'],
  ];
  const featuresBand = `
<section class="band wrap" aria-labelledby="feat-h">
  <div class="band-h"><div><h2 id="feat-h">More than a download</h2><p class="sub">What a shared deck on a forum does not give you.</p></div></div>
  <div class="features">${features.map(([i, t, d]) => `<div class="feature">${icon(i)}<h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}</div>
</section>`;

  const deckBand = `
<section class="band wrap" id="decks" aria-labelledby="decks-h">
  <div class="band-h"><div><h2 id="decks-h">The decks</h2><p class="sub">${n0(decks.length)} published so far, with more certifications on the way.</p></div></div>
  <div class="deck-grid">${stats.map(({ deck, s }) => `<a class="deck-card" href="${cfg.base}${esc(deck.meta.slug)}/"><div class="icard"><div class="ic-top"><span>${esc(deck.meta.familyTitle || deck.meta.family)}</span><b>${deck.meta.status === 'released' ? 'released' : 'draft'}</b></div><h3>${esc(deck.meta.title)}</h3><p>${esc(deck.meta.description || '')}</p><div class="dc-stats">${n0(s.cards)} cards · ${n0(s.primers)} primers · ${n0(s.topics.length)} topics</div></div></a>`).join('')}</div>
</section>`;

  const cta = `
<section class="band wrap" aria-labelledby="cta-h">
  <div class="cta"><div><h2 id="cta-h">Found a card that is wrong?</h2><p>Quote the card and say what is wrong. It is checked against its source, fixed, and listed in the deck’s changelog.</p></div><a class="btn" href="https://github.com/krishnachagti-sudo/conyso-initiatives-deck/issues/new?labels=card-report">Report a card</a></div>
</section>`;

  const script = primerCards.length > 1 ? `<script>(function(){try{var d=JSON.parse(document.getElementById('cotd-data').textContent);var i=Math.floor(Date.now()/864e5)%d.length,c=d[i],box=document.querySelector('#cotd-card .icard');var e=function(t,c,x){var n=document.createElement(t);if(c)n.className=c;if(x!=null)n.textContent=x;return n};var ps=function(p,s){s.split('\\n\\n').forEach(function(b){p.appendChild(e('p',null,b))})};box.textContent='';var top=e('div','ic-top');top.append(e('span',null,c.deck+' · '+c.topic),e('b',null,'primer'));var q=e('div','ic-q');q.appendChild(e('p',null,c.front));var a=e('div','ic-a');a.appendChild(e('p','ic-ans',c.answer));if(c.example){var x=e('p','ic-x');x.append(e('b',null,'Example'),' '+c.example);a.appendChild(x)}box.append(top,q,e('div','ic-rule'),a);document.getElementById('cotd-link').href='${cfg.base}'+c.slug+'/#'+c.id}catch(x){}})();</script>` : '';

  return page(cfg, {
    title: `Certification Flashcards That Teach First | ${cfg.brand}`,
    description: `Free, sourced flashcard decks for certification exams that explain every idea before they test it. ${n0(cards)} cards for Anki, Quizlet, Brainscape, Mochi and print.`,
    path: '',
    body: `${heroBand}${trust}${cotd}${featuresBand}${deckBand}${cta}${otherWays(cfg, '')}`,
    graph: [{ '@type': 'WebSite', '@id': `${cfg.origin}${cfg.base}#website`, name: cfg.brand, url: `${cfg.origin}${cfg.base}`, inLanguage: 'en', publisher: { '@id': `${cfg.origin}${cfg.base}#organization` } },
      { '@type': 'CollectionPage', name: cfg.brand, url: `${cfg.origin}${cfg.base}`, mainEntity: { '@type': 'ItemList', itemListElement: decks.map((d, i) => ({ '@type': 'ListItem', position: i + 1, url: `${cfg.origin}${cfg.base}${d.meta.slug}/`, name: d.meta.title })) } }],
    scripts: script,
    active: 'decks',
    count: cards,
    decks: decks.map((d) => ({ slug: d.meta.slug, title: d.meta.shortTitle || d.meta.title })),
  });
}

// The home page (playbook, page-skeletons §3), kept lean: a hero with one
// claim, a strip of numbers, a picture of how a deck teaches (three real
// cards), the decks, the apps they work with, the card of the day, and a
// corrections call to action. Every number is counted at build time.

import { esc, page, icon, otherWays } from './layout.mjs';
import { deckStats, cardParts, cardHTML as icard } from './deck-data.mjs';
import { teachingTrio, trioHTML } from './visuals.mjs';
import { FORMATS } from '../exporters/index.mjs';

const n0 = (n) => Number(n).toLocaleString('en-GB');

// The apps named on the formats page, in the order a learner would look.
const APPS = ['Anki', 'AnkiDroid', 'AnkiMobile', 'Quizlet', 'Brainscape', 'Mochi', 'RemNote', 'Obsidian', 'Logseq', 'Knowt', 'Mnemosyne', 'Noji'];

export function homePage(cfg, decks) {
  const stats = decks.map((d) => ({ deck: d, s: deckStats(d) }));
  const cards = stats.reduce((a, x) => a + x.s.cards, 0);
  const primers = stats.reduce((a, x) => a + x.s.primers, 0);
  const lead = stats[0];
  const leadUrl = lead ? `${cfg.base}${esc(lead.deck.meta.slug)}/` : cfg.base;

  const primerCards = stats.flatMap(({ deck, s }) => s.notes.filter((n) => n.kind === 'primer').map((n) => ({
    ...cardParts(n), deck: deck.meta.shortTitle || deck.meta.title, slug: deck.meta.slug,
  })));
  const hero = primerCards[0];
  const cardHTML = (c, cls = '') => `<div class="${cls}">${icard({ ...c, why: '', sourceURL: '' }, { top: `${c.deck} · ${c.topic}` })}</div>`;
  const apps = APPS.filter((a) => FORMATS.some((f) => f.apps.some((x) => x.startsWith(a))));

  const heroBand = `
<section class="hero wrap">
  <div class="hero-grid">
    <div>
      <p class="eyebrow">Free · sourced · no account</p>
      <h1><span>Flashcards that</span><span class="l2">teach you first.</span></h1>
      <p class="hero-sub">Decks for certification exams that explain every idea before they test it.</p>
      <div class="hero-actions">${lead ? `<a class="btn btn-primary" href="${leadUrl}">${icon('cards')} Open the ${esc(lead.deck.meta.shortTitle || lead.deck.meta.title)} deck</a><a class="btn" href="${leadUrl}#try">${icon('browser')} Try it here</a>` : ''}</div>
    </div>
    ${hero ? `<div class="hero-card"><div class="stack tilt-r">${cardHTML(hero)}</div></div>` : ''}
  </div>
</section>`;

  const numbers = `
<div class="wrap"><div class="numbers">
  <div><b>${n0(cards)}</b><span>cards</span></div>
  <div><b>${n0(primers)}</b><span>primers that explain first</span></div>
  <div><b>${n0(FORMATS.length)}</b><span>formats per deck</span></div>
  <div><b>0</b><span>ads, accounts or trackers</span></div>
</div></div>`;

  const trio = lead && teachingTrio(lead.deck);
  const how = trio ? `
<section class="band wrap" aria-labelledby="how-h">
  <div class="band-h center"><h2 id="how-h">How a deck teaches</h2><p class="sub">Three real cards from the ${esc(lead.deck.meta.shortTitle || lead.deck.meta.title)} deck, in the order you meet them.</p></div>
  ${trioHTML(trio, { href: `${leadUrl}#path` })}
</section>` : '';

  const deckBand = `
<section class="band wrap" id="decks" aria-labelledby="decks-h">
  <div class="band-h"><h2 id="decks-h">The decks</h2></div>
  <div class="deck-grid">${stats.map(({ deck, s }) => `<a class="deck-card" href="${cfg.base}${esc(deck.meta.slug)}/"><div class="icard"><div class="ic-top"><span>${esc(deck.meta.familyTitle || deck.meta.family)}</span><b>${deck.meta.status === 'released' ? 'released' : 'draft'}</b></div><h3>${esc(deck.meta.title)}</h3><div class="dc-stats">${n0(s.cards)} cards · ${n0(s.primers)} primers · ${n0(s.topics.length)} topics</div></div></a>`).join('')}
  <div class="deck-soon"><span>${icon('cards')}</span><p>More certifications on the way.</p></div></div>
</section>`;

  const appsBand = `
<section class="band wrap" aria-labelledby="apps-h">
  <div class="band-h center"><h2 id="apps-h">Works with the app you use</h2><p class="sub">Or print the cards.</p></div>
  <ul class="app-chips">${apps.map((a) => `<li>${esc(a)}</li>`).join('')}<li class="paper">${icon('print')} Paper</li></ul>
  <p class="center"><a class="link" href="${cfg.base}formats/">Which file for which app →</a></p>
</section>`;

  const cotd = primerCards.length ? `
<section class="band wrap" aria-labelledby="cotd-h">
  <div class="cotd">
    <div><p class="eyebrow">Card of the day</p><h2 id="cotd-h">One primer a day.</h2><p class="sub">The kind of card most decks leave out.</p><p style="margin-top:14px"><a class="link" id="cotd-link" href="${cfg.base}${esc(hero.slug)}/#${esc(hero.id)}">See it in its deck →</a></p></div>
    <div id="cotd-card">${cardHTML(hero, 'tilt-l')}</div>
  </div>
  <script type="application/json" id="cotd-data">${JSON.stringify(primerCards.map(({ slug, id, deck, topic, front, answer, example }) => ({ slug, id, deck, topic, front, answer, example }))).replace(/</g, '\\u003c')}</script>
</section>` : '';

  const cta = `
<section class="band wrap" aria-labelledby="cta-h">
  <div class="cta"><div><h2 id="cta-h">Spotted a wrong card?</h2><p>It gets checked against its source and fixed.</p></div><a class="btn" href="https://github.com/krishnachagti-sudo/conyso-initiatives-deck/issues/new?labels=card-report">Report a card</a></div>
</section>`;

  const script = primerCards.length > 1 ? `<script>(function(){try{var d=JSON.parse(document.getElementById('cotd-data').textContent);var i=Math.floor(Date.now()/864e5)%d.length,c=d[i],box=document.querySelector('#cotd-card .icard');var e=function(t,c,x){var n=document.createElement(t);if(c)n.className=c;if(x!=null)n.textContent=x;return n};box.textContent='';var top=e('div','ic-top');top.append(e('span',null,c.deck+' · '+c.topic),e('b',null,'primer'));var q=e('div','ic-q');q.appendChild(e('p',null,c.front));var a=e('div','ic-a');a.appendChild(e('p','ic-ans',c.answer));if(c.example){var x=e('p','ic-x');x.append(e('b',null,'Example'),' '+c.example);a.appendChild(x)}box.append(top,q,e('div','ic-rule'),a);document.getElementById('cotd-link').href='${cfg.base}'+c.slug+'/#'+c.id}catch(x){}})();</script>` : '';

  return page(cfg, {
    title: `Certification Flashcards That Teach First | ${cfg.brand}`,
    description: `Free, sourced flashcard decks for certification exams that explain every idea before they test it. ${n0(cards)} cards for Anki, Quizlet, Brainscape, Mochi and print.`,
    path: '',
    body: `${heroBand}${numbers}${how}${deckBand}${appsBand}${cotd}${cta}${otherWays(cfg, '')}`,
    graph: [{ '@type': 'WebSite', '@id': `${cfg.origin}${cfg.base}#website`, name: cfg.brand, url: `${cfg.origin}${cfg.base}`, inLanguage: 'en', publisher: { '@id': `${cfg.origin}${cfg.base}#organization` } },
      { '@type': 'CollectionPage', name: cfg.brand, url: `${cfg.origin}${cfg.base}`, mainEntity: { '@type': 'ItemList', itemListElement: decks.map((d, i) => ({ '@type': 'ListItem', position: i + 1, url: `${cfg.origin}${cfg.base}${d.meta.slug}/`, name: d.meta.title })) } }],
    scripts: script,
    active: 'decks',
    count: cards,
    decks: decks.map((d) => ({ slug: d.meta.slug, title: d.meta.shortTitle || d.meta.title })),
  });
}

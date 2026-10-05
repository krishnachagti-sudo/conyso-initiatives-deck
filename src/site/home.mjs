// The home page, in the order of the Tome/Atlas home skeleton (playbook,
// page-skeletons §3), adapted: a hero with the claim and a search box, the
// card of the day, a trust strip, how a deck teaches, the research, the decks
// grouped by family with what is new this week, and a call to ask for an exam
// or report a card. Every number is counted at build time, so the page stays
// true as decks are added.

import { esc, page, icon, otherWays, familyPath, fit } from './layout.mjs';
import { deckStats, cardParts, cardHTML as icard } from './deck-data.mjs';
import { teachingTrio, trioHTML } from './visuals.mjs';
import { slugify } from '../decks.mjs';
import { FORMATS } from '../exporters/index.mjs';

const n0 = (n) => Number(n).toLocaleString('en-GB');
const plural = (n, one, many = `${one}s`) => `${n0(n)} ${n === 1 ? one : many}`;
// A hand-drawn arrow for margin notes: inline SVG, drawn in the note's colour.
const ARROW = '<svg class="note-arrow" viewBox="0 0 60 40" aria-hidden="true"><path d="M4 6c14 2 30 6 38 16 3 4 5 8 6 13M40 30l8 6 4-10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const REPORT = 'https://github.com/krishnachagti-sudo/conyso-initiatives-deck/issues/new?labels=card-report';

// The apps named on the formats page, in the order a learner would look.
const APPS = ['Anki', 'AnkiDroid', 'AnkiMobile', 'Quizlet', 'Brainscape', 'Mochi', 'RemNote', 'Obsidian', 'Logseq', 'Knowt', 'Mnemosyne', 'Noji'];

/** Released decks, or every deck when none is released yet. */
export const released = (decks) => (decks.some((d) => d.meta.status === 'released') ? decks.filter((d) => d.meta.status === 'released') : decks);

/** The date a deck first appeared: the earliest date in its changelog. */
export const firstPublished = (deck) => (deck.meta.changelog || []).map((c) => c.date).filter(Boolean).sort()[0] || '';

/** Decks first published within `days` days up to `today` (YYYY-MM-DD), newest first. */
export function newThisWeek(decks, today, days = 7) {
  const t = Date.parse(today);
  return decks
    .map((d) => ({ d, at: firstPublished(d) }))
    .filter(({ at }) => at && t - Date.parse(at) >= 0 && t - Date.parse(at) < days * 864e5)
    .sort((a, b) => b.at.localeCompare(a.at) || a.d.meta.slug.localeCompare(b.d.meta.slug))
    .map(({ d }) => d);
}

/** Decks grouped under their family title, A to Z; decks A to Z by short title within each. */
export function groupByFamily(decks) {
  const by = new Map();
  for (const d of decks) {
    const f = d.meta.familyTitle || d.meta.family || 'Other';
    if (!by.has(f)) by.set(f, []);
    by.get(f).push(d);
  }
  const name = (d) => d.meta.shortTitle || d.meta.title;
  return [...by.entries()].sort(([a], [b]) => a.localeCompare(b))
    .map(([title, ds]) => ({ title, decks: [...ds].sort((a, b) => name(a).localeCompare(name(b), 'en', { numeric: true })) }));
}

export function homePage(cfg, allDecks, { roadmap = 0, today = new Date().toISOString().slice(0, 10) } = {}) {
  // The home page shows released decks only (drafts keep their own noindex
  // pages); a build with no released deck, such as the test fixtures, shows all.
  const decks = released(allDecks);
  const stats = decks.map((d) => ({ deck: d, s: deckStats(d) }));
  const cardsOf = new Map(stats.map(({ deck, s }) => [deck, s.cards]));
  const cards = stats.reduce((a, x) => a + x.s.cards, 0);
  const primers = stats.reduce((a, x) => a + x.s.primers, 0);
  const sources = new Set(stats.flatMap(({ s }) => s.sources.map((x) => x.url))).size;
  const families = groupByFamily(decks);
  const short = (d) => d.meta.shortTitle || d.meta.title;
  const deckUrl = (d) => `${cfg.base}${esc(d.meta.slug)}/`;

  // The hero's sample card and the teaching trio come from the largest deck
  // that has a full trio, so the picture is of a real, typical deck.
  const byCards = [...stats].sort((a, b) => b.s.cards - a.s.cards || a.deck.meta.slug.localeCompare(b.deck.meta.slug));
  const lead = byCards.find(({ deck }) => teachingTrio(deck)) || byCards[0];
  const trio = lead && teachingTrio(lead.deck);
  const heroCard = lead && lead.s.notes.filter((n) => n.kind === 'primer').map(cardParts)[0];
  // Random deck: a fixed pick from the deck list so the link works without
  // script; common.js picks again from data-decks on each press. Not from the
  // build date: that would change the page, and so its lastmod, every day.
  const pick = decks.length ? decks[[...decks.map((d) => d.meta.slug).join(' ')].reduce((a, c) => a + c.charCodeAt(0), 0) % decks.length] : null;

  // A slow ticker of every deck under the hero (the sister sites have one).
  // The second copy only closes the loop, so it is hidden from assistive tech
  // and the keyboard; with reduced motion it is a plain scrollable row.
  const tickItems = [...decks].sort((a, b) => short(a).localeCompare(short(b), 'en', { numeric: true }));
  const tickList = (dup) => `<ul class="ticker-list"${dup ? ' aria-hidden="true"' : ''}>${tickItems.map((d) => `<li><a href="${deckUrl(d)}"${dup ? ' tabindex="-1"' : ''}>${esc(short(d))}</a></li>`).join('')}</ul>`;
  const ticker = decks.length > 6 ? `
<nav class="ticker" aria-label="Every deck" style="--dur:${Math.round(decks.length * 2.6)}s"><div class="ticker-track">${tickList(false)}${tickList(true)}</div></nav>` : '';

  // ── 1 Hero ──────────────────────────────────────────────────────────────
  const heroBand = `
<section class="hero wrap" aria-labelledby="hero-h">
  <div class="hero-grid">
    <div class="hero-main">
      <p class="eyebrow"><span data-count>${n0(decks.length)}</span> ${decks.length === 1 ? 'deck' : 'decks'} · <span data-count>${n0(cards)}</span> cards · free</p>
      <h1 id="hero-h"><span>Most exam flashcards are someone’s notes.</span><span class="l2"><span class="hl">Few name a source.</span></span><span class="l3">Ours explain each idea before they test it, and every card names its source.</span></h1>
      <form class="site-search" data-site-search action="${cfg.base}browse/" method="get" role="search">
        <label for="home-q" class="sr-only">Search the decks</label>
        <input id="home-q" name="q" type="search" placeholder="Find your exam, e.g. AZ-104 or pilot" autocomplete="off" spellcheck="false">
        <button class="btn btn-primary" type="submit">Search</button>
      </form>
      <div class="hero-actions">${pick ? `<a class="btn btn-ghost" href="${deckUrl(pick)}" data-random-deck data-decks="${esc(decks.map((d) => d.meta.slug).join(' '))}">${icon('refresh')} Random deck</a>` : ''}<a class="btn btn-ghost" href="${cfg.base}browse/">${icon('layers')} All ${plural(decks.length, 'deck')}</a></div>
    </div>
    ${heroCard ? `<div class="hero-card"><p class="note-hand">A real card from the ${esc(short(lead.deck))} deck${ARROW}</p><div class="stack tilt-r taped">${icard({ ...heroCard, why: '', sourceURL: '' }, { top: `${short(lead.deck)} · ${heroCard.topic}` })}</div></div>` : ''}
  </div>
</section>${ticker}`;

  // ── 2 Card of the day (filled by assets/daily.js) ───────────────────────
  const cotd = `
<div class="bg bg-grid"><section class="band band-tight wrap" aria-labelledby="cotd-h">
  <div class="cotd">
    <div class="cotd-text"><p class="eyebrow">Card of the day</p><h2 id="cotd-h">One card a day, <span class="hl">the same for everyone.</span></h2><p class="sub">Then see how many of today’s ten you can answer.</p><p class="cotd-more"><a class="link" href="${cfg.base}daily/">Play today’s ten →</a></p></div>
    <div class="cotd-card pinned" data-card-of-day aria-live="polite"><a class="icard daily-fallback" href="${cfg.base}daily/"><div class="ic-top"><span>Today</span><b>daily</b></div><div class="ic-q"><p>Ten questions, the same ten for everyone today.</p></div><div class="ic-rule"></div><div class="ic-a"><p>Open today’s ten →</p></div></a></div>
  </div>
</section></div>`;

  // ── 3 Trust strip ───────────────────────────────────────────────────────
  const trust = `
<div class="wrap"><div class="trust">
  <div><b class="big"><span class="hl-u" data-count>${n0(cards)}</span></b><span class="big-l">cards in ${plural(decks.length, 'deck')}</span></div>
  <div><h3>Sourced</h3><p>Every card links the section of the source it was written from.</p></div>
  <div><h3>Explains first</h3><p>${n0(primers)} primer cards teach each term before any card tests it.</p></div>
  <div><h3>Free and open</h3><p>No account, no ads, no tracking. Licensed CC BY-SA 4.0.</p></div>
</div></div>`;

  // ── 4 How a deck teaches ────────────────────────────────────────────────
  const how = trio ? `
<div class="bg bg-desk"><section class="band wrap" aria-labelledby="how-h">
  <div class="band-h center"><h2 id="how-h">How a deck <span class="hl">teaches</span></h2><p class="sub">Three real cards from the ${esc(short(lead.deck))} deck, in the order you meet them.</p></div>
  ${trioHTML(trio, { href: `${deckUrl(lead.deck)}#path` })}
</section></div>` : '';

  // ── 5 Built on the research ─────────────────────────────────────────────
  const research = `
<div class="bg bg-ruled"><section class="band wrap" aria-labelledby="sci-h">
  <div class="band-h center"><h2 id="sci-h">Built on the <span class="hl">research</span></h2><p class="sub">Every rule in the standard traces to a study, and we say where the evidence runs out.</p></div>
  <div class="sci">
    <div class="sci-c"><b>g = 0.33</b><span>Recalling beats rereading, in real classrooms</span><i>Yang et al. 2021</i></div>
    <div class="sci-c"><b>d = 0.46</b><span>Teaching the parts first helps newcomers</span><i>Mayer, pre-training studies</i></div>
    <div class="sci-c"><b>0.73 vs 0.39</b><span>Testing with feedback, against without</span><i>Rowland 2014</i></div>
    <div class="sci-c"><b>Facts + use</b><span>Mixed practice beat facts alone on harder questions</span><i>Agarwal 2019</i></div>
  </div>
  <p class="band-more"><a class="link" href="${cfg.base}method/">The science, and its limits →</a></p>
</section></div>`;

  // ── 6 The decks by family, and what is new this week ────────────────────
  const fresh = newThisWeek(decks, today);
  const newBand = fresh.length ? `
<div class="new-week" aria-labelledby="new-h">
  <div class="nw-h"><h3 id="new-h">New this week</h3><a class="link" href="${cfg.base}new/">Everything new →</a></div>
  <ul class="new-list">${fresh.map((d) => `<li><a href="${deckUrl(d)}"><b>${esc(short(d))}</b><span>${n0(cardsOf.get(d))} cards · ${esc(d.meta.familyTitle || d.meta.family || '')}</span></a></li>`).join('')}</ul>
</div>` : '';

  // Each family is a divider in a card box: a tab with its name, its counts,
  // its largest decks on ruled lines, and the rest one click away on its hub.
  // Every tile reserves the same number of lines, so the grid stays even.
  const SHOWN = 4;
  const famId = (t) => `fam-${slugify(t)}`;
  const deckBand = `
<div class="bg bg-box"><section class="band wrap" id="decks" aria-labelledby="decks-h">
  <div class="band-h"><div><h2 id="decks-h">The decks</h2><p class="kicker">${plural(decks.length, 'deck')} in ${plural(families.length, 'subject')}${roadmap ? ` · ${n0(roadmap)} more on the build list` : ''}</p></div><a class="btn btn-ghost" href="${cfg.base}browse/">${icon('layers')} Search and filter all</a></div>
  ${newBand}
  <ul class="fams" role="list">${families.map((f) => {
    const hub = f.decks.some((d) => d.meta.status === 'released') ? `${cfg.base}${esc(familyPath(f.title))}` : ''; // a hub exists once a deck is released
    const top = [...f.decks].sort((a, b) => cardsOf.get(b) - cardsOf.get(a) || short(a).localeCompare(short(b)));
    const more = top.length - SHOWN;
    return `
    <li class="fam">
      <h3 class="fam-tab" id="${famId(f.title)}">${hub ? `<a href="${hub}">${esc(f.title)}</a>` : esc(f.title)}</h3>
      <div class="fam-card">
        <p class="fam-n"><span>${plural(f.decks.length, 'deck')}</span><i aria-hidden="true"> · </i><span>${n0(f.decks.reduce((a, d) => a + cardsOf.get(d), 0))} cards</span></p>
        <ul class="fam-decks">${top.slice(0, SHOWN).map((d) => `<li><a href="${deckUrl(d)}"><span>${esc(short(d))}</span><b>${n0(cardsOf.get(d))}<span class="sr-only"> cards</span></b></a></li>`).join('')}</ul>
        ${hub ? `<p class="fam-more"><a href="${hub}">${more > 0 ? `+${n0(more)} more<span class="sr-only"> in ${esc(f.title)}</span>` : `Subject page<span class="sr-only">: ${esc(f.title)}</span>`} →</a></p>` : ''}
      </div>
    </li>`;
  }).join('')}
  </ul>
</section></div>`;

  // ── 7 The apps ──────────────────────────────────────────────────────────
  const apps = APPS.filter((a) => FORMATS.some((f) => f.apps.some((x) => x.startsWith(a))));
  const appsBand = `
<section class="band band-tight wrap" aria-labelledby="apps-h">
  <div class="band-h center"><h2 id="apps-h">Works with the app you use</h2><p class="sub">Or print the cards.</p></div>
  <ul class="app-chips">${apps.map((a) => `<li>${esc(a)}</li>`).join('')}<li class="paper">${icon('print')} Paper</li></ul>
  <p class="band-more"><a class="link" href="${cfg.base}formats/">Which file for which app →</a></p>
</section>`;

  // ── 8 Ask for an exam, or report a card ─────────────────────────────────
  const cta = `
<section class="band band-tight wrap" aria-label="Ask for an exam or report a card">
  <div class="asks">
    <div class="ask taped"><h2>Missing your exam?</h2><p>We add a few certifications every week.${roadmap ? ` ${n0(roadmap)} are on the build list.` : ''} Tell us which one you need.</p><a class="btn" href="${cfg.base}roadmap/">Ask for it</a></div>
    <div class="ask"><h2>Found a mistake?</h2><p>Quote the card and say what is wrong. It is checked against its source and fixed.</p><a class="btn" href="${REPORT}">Report a card</a></div>
  </div>
</section>`;

  return page(cfg, {
    title: `${cfg.brand}: Flashcards for Every Certification`,
    description: fit(158, `Free flashcards for ${plural(decks.length, 'certification exam')}, built from learning science: every idea explained before it is tested, every card sourced. For Anki, Quizlet and print.`,
      `Free flashcards for ${plural(decks.length, 'certification exam')}. Every idea explained before it is tested, every card sourced. For Anki, Quizlet and print.`),
    path: '',
    og: 'og/home.png',
    body: `${heroBand}${cotd}${trust}${how}${research}${deckBand}${appsBand}${cta}${otherWays(cfg, '')}`,
    graph: [{ '@type': 'WebSite', '@id': `${cfg.origin}${cfg.base}#website`, name: cfg.brand, url: `${cfg.origin}${cfg.base}`, inLanguage: 'en', publisher: { '@id': `${cfg.origin}${cfg.base}#organization` },
      potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: `${cfg.origin}${cfg.base}browse/?q={q}` }, 'query-input': 'required name=q' } },
    { '@type': 'CollectionPage', name: cfg.brand, url: `${cfg.origin}${cfg.base}`, mainEntity: { '@type': 'ItemList', itemListElement: decks.map((d, i) => ({ '@type': 'ListItem', position: i + 1, url: `${cfg.origin}${cfg.base}${d.meta.slug}/`, name: d.meta.title })) } }],
    scripts: `<script src="${cfg.base}assets/search.js" defer></script>\n<script src="${cfg.base}assets/daily.js" defer></script>`,
    count: cards,
    decks: decks.map((d) => ({ slug: d.meta.slug, title: short(d), family: d.meta.familyTitle || d.meta.family, status: d.meta.status })),
  });
}

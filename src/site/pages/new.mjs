// /new/: decks by the date of their first changelog entry, newest first,
// grouped by week (weeks start on Monday), and feed.xml, an Atom feed with one
// entry per deck so people can follow the weekly additions.

import { esc, page, crumbs, otherWays } from '../layout.mjs';
import { STYLE, n0, plural, releasedDecks, shortOf, familyOf, stats, coversLine, firstDate, lastDate, familyPath, searchScript } from './families.mjs';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const longDate = (iso) => { const [y, m, d] = iso.split('-').map(Number); return `${d} ${MONTHS[m - 1]} ${y}`; };

/** The Monday on or before an ISO date, as an ISO date (UTC, so no time zone can shift it). */
export function weekOf(iso) {
  const t = new Date(`${iso}T00:00:00Z`);
  const back = (t.getUTCDay() + 6) % 7;
  return new Date(t.getTime() - back * 864e5).toISOString().slice(0, 10);
}

/** Released decks newest first, grouped by the week of their first changelog date. */
export function byWeek(decks) {
  const sorted = releasedDecks(decks).filter((d) => firstDate(d))
    .sort((a, b) => firstDate(b).localeCompare(firstDate(a)) || shortOf(a).localeCompare(shortOf(b)));
  const weeks = new Map();
  for (const d of sorted) {
    const w = weekOf(firstDate(d));
    if (!weeks.has(w)) weeks.set(w, []);
    weeks.get(w).push(d);
  }
  return [...weeks.entries()].map(([week, ds]) => ({ week, decks: ds }));
}

const xml = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
  // Characters XML 1.0 does not allow.
  .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F￾￿]/g, '');
const stamp = (iso) => `${iso}T00:00:00Z`;

/** An Atom (RFC 4287) feed: one entry per released deck, newest first. */
export function atomFeed(cfg, decks) {
  const root = `${cfg.origin}${cfg.base}`;
  const list = byWeek(decks).flatMap((w) => w.decks);
  const updated = list.map(lastDate).filter(Boolean).sort().pop() || '1970-01-01';
  const entry = (d) => {
    const url = `${root}${d.meta.slug}/`;
    const s = stats(d);
    const summary = `${d.meta.title}. ${plural(s.cards, 'card')}, ${plural(s.primers, 'primer')}, ${plural(s.topics.length, 'topic')}. ${coversLine(d)}`;
    return `  <entry>
    <title>${xml(d.meta.title)}</title>
    <link rel="alternate" type="text/html" href="${xml(url)}"/>
    <id>${xml(url)}</id>
    <published>${stamp(firstDate(d))}</published>
    <updated>${stamp(lastDate(d))}</updated>
    <category term="${xml(familyOf(d))}"/>
    <summary type="text">${xml(summary)}</summary>
  </entry>`;
  };
  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="en-GB">
  <title>${xml(cfg.brand)}: new decks</title>
  <subtitle>Free flashcard decks for certification exams. One entry per deck, newest first.</subtitle>
  <link rel="self" type="application/atom+xml" href="${xml(root)}feed.xml"/>
  <link rel="alternate" type="text/html" href="${xml(root)}new/"/>
  <id>${xml(root)}feed.xml</id>
  <updated>${stamp(updated)}</updated>
  <author><name>${xml(cfg.brand)}</name><uri>${xml(root)}</uri></author>
  <rights>Decks licensed CC BY-SA 4.0</rights>
${list.map(entry).join('\n')}
</feed>
`;
}

export async function build({ cfg, decks }) {
  const all = releasedDecks(decks);
  const weeks = byWeek(all);
  const url = `${cfg.origin}${cfg.base}new/`;
  const latest = weeks[0];
  const lead = latest
    ? `${plural(latest.decks.length, 'deck')} added in the week of ${longDate(latest.week)}: ${latest.decks.map(shortOf).slice(0, 6).join(', ')}${latest.decks.length > 6 ? ' and more' : ''}. New decks are added most weeks.`
    : 'No decks yet.';
  const body = `${STYLE}<style>.dx-feed{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}.dx-when{font-family:var(--mono);font-size:13px;color:var(--faint)}</style><div class="wrap">
${crumbs(cfg, [['New', 'new/']])}
<div class="hub-head"><h1>What is new this week?</h1><p class="kicker">${plural(all.length, 'deck')} · ${plural(weeks.length, 'week')} of additions</p><p class="lead">${esc(lead)}</p>
<div class="dx-feed"><a class="btn" href="${cfg.base}feed.xml" type="application/atom+xml">Follow with the feed</a><a class="btn" href="${cfg.base}roadmap/">Ask for an exam</a></div></div>
<div class="hub-body">
${weeks.map((w) => `<section class="dx-group" aria-labelledby="w-${w.week}"><h2 id="w-${w.week}">Week of ${longDate(w.week)}<small>${plural(w.decks.length, 'deck')}</small></h2>
<ul class="dx-list">${w.decks.map((d) => { const s = stats(d); return `<li class="dx-item"><h3><a href="${cfg.base}${esc(d.meta.slug)}/">${esc(shortOf(d))}<small>${esc(d.meta.title)}</small></a></h3>
<div class="dx-meta"><time datetime="${esc(firstDate(d))}">Added ${longDate(firstDate(d))}</time> · <a href="${cfg.base}${familyPath(familyOf(d))}">${esc(familyOf(d))}</a> · ${plural(s.cards, 'card')} · ${plural(s.primers, 'primer')}</div>
<p>${esc(coversLine(d))}</p></li>`; }).join('')}</ul></section>`).join('\n')}
</div>
</div>
${otherWays(cfg, 'new/')}`;
  const html = page(cfg, {
    title: `New Certification Flashcard Decks | ${cfg.brand}`,
    description: latest ? ([5, 4, 3, 2, 1].map((k) => `The newest free flashcard decks, week by week. Latest: ${latest.decks.map(shortOf).slice(0, k).join(', ')}. Follow the feed for each new certification.`).find((d) => d.length <= 158) || 'The newest free flashcard decks, week by week. Follow the feed for each new certification.') : 'The newest free flashcard decks, week by week.',
    path: 'new/', body, active: 'new', decks: all, count: all.reduce((a, d) => a + stats(d).cards, 0), og: 'og/browse.png', scripts: searchScript(cfg),
    graph: [{ '@type': 'CollectionPage', '@id': `${url}#page`, name: 'New decks', url, isPartOf: { '@id': `${cfg.origin}${cfg.base}#website` },
      mainEntity: { '@type': 'ItemList', itemListOrder: 'https://schema.org/ItemListOrderDescending', itemListElement: weeks.flatMap((w) => w.decks).map((d, i) => ({ '@type': 'ListItem', position: i + 1, url: `${cfg.origin}${cfg.base}${d.meta.slug}/`, name: d.meta.title })) } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: cfg.brand, item: `${cfg.origin}${cfg.base}` }, { '@type': 'ListItem', position: 2, name: 'New', item: url }] }],
  });
  // The feed link belongs in <head>; page() has no option for it.
  const feedLink = `<link rel="alternate" type="application/atom+xml" title="${esc(cfg.brand)}: new decks (Atom)" href="${cfg.base}feed.xml">`;
  const withFeed = html.slice(0, html.indexOf('</head>')).includes('type="application/atom+xml"') ? html : html.replace('</head>', `${feedLink}\n</head>`);
  return { pages: { 'new/': withFeed }, files: { 'feed.xml': atomFeed(cfg, all) }, urls: ['new/'] };
}

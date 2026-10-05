// Family hubs: one page per meta.familyTitle at families/<slugify(title)>/,
// plus the index at families/. These are the long-tail search pages ("Kubernetes
// certification flashcards"), so the title, the answer sentence and the
// learning order are all computed from the decks themselves.
//
// The helpers at the top are shared by the other discovery pages (browse, new,
// roadmap) and tested in test/discovery.test.mjs.

import { esc, page, crumbs, otherWays, clamp, icon } from '../layout.mjs';
import { deckStats } from '../deck-data.mjs';
import { slugify } from '../../decks.mjs';

export const n0 = (n) => Number(n).toLocaleString('en-GB');
export const plural = (n, one, many = `${one}s`) => `${n0(n)} ${n === 1 ? one : many}`;

/** Decks that belong on the public pages: released, and not personal. */
export const releasedDecks = (decks) => decks.filter((d) => d.meta.status === 'released' && !d.meta.personal);

export const shortOf = (d) => d.meta.shortTitle || d.meta.title;
export const familyOf = (d) => d.meta.familyTitle || d.meta.family || 'Other';
export const familySlug = (familyTitle) => slugify(familyTitle);
export const familyPath = (familyTitle) => `families/${familySlug(familyTitle)}/`;

// Counting a deck once per build: deckStats sorts every note.
const statsCache = new WeakMap();
export function stats(d) {
  if (!statsCache.has(d)) statsCache.set(d, deckStats(d));
  return statsCache.get(d);
}

/** "A", "A and B", "A, B and C". */
export const andList = (xs) => (xs.length <= 1 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`);

/** Title case for a family name, keeping short joining words and acronyms as written. */
export function titleCase(s) {
  const small = new Set(['and', 'of', 'the', 'for', 'in', 'on', 'to', 'a', 'an', 'or']);
  return String(s).split(' ').map((w, i) => (i > 0 && small.has(w.toLowerCase()) ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1))).join(' ');
}

/** Dates in changelogs are ISO days. The first is when the deck was added. */
export const firstDate = (d) => (d.meta.changelog || []).map((c) => c.date).filter(Boolean).sort()[0] || d.meta.updated || '';
export const lastDate = (d) => [d.meta.updated, ...(d.meta.changelog || []).map((c) => c.date)].filter(Boolean).sort().pop() || '';

/**
 * Released decks grouped by familyTitle, families A to Z, decks in learning
 * order inside each (a deck after the decks it builds on, then A to Z).
 * @returns {{title: string, slug: string, path: string, decks: object[], cards: number, primers: number, levels: object[][]}[]}
 */
export function familyGroups(decks) {
  const by = new Map();
  for (const d of releasedDecks(decks)) {
    const f = familyOf(d);
    if (!by.has(f)) by.set(f, []);
    by.get(f).push(d);
  }
  return [...by.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([title, ds]) => {
    const levels = learningLevels(ds);
    return {
      title, slug: familySlug(title), path: familyPath(title),
      decks: levels.flat(), levels,
      cards: ds.reduce((a, d) => a + stats(d).cards, 0),
      primers: ds.reduce((a, d) => a + stats(d).primers, 0),
    };
  });
}

/**
 * Steps of a learning order: step 1 holds the decks that build on no other
 * deck in the group, step n the decks whose in-group prerequisites are all in
 * earlier steps. A cycle (which the checker would never let through) falls to
 * the last step rather than looping.
 */
export function learningLevels(ds) {
  const inGroup = new Map(ds.map((d) => [d.meta.slug, d]));
  const depth = new Map();
  const visit = (d, seen = new Set()) => {
    if (depth.has(d.meta.slug)) return depth.get(d.meta.slug);
    if (seen.has(d.meta.slug)) return 0;
    seen.add(d.meta.slug);
    const pre = (d.meta.prerequisiteDecks || []).filter((s) => inGroup.has(s));
    const v = pre.length ? 1 + Math.max(...pre.map((s) => visit(inGroup.get(s), seen))) : 0;
    depth.set(d.meta.slug, v);
    return v;
  };
  ds.forEach((d) => visit(d));
  const levels = [];
  for (const d of ds) (levels[depth.get(d.meta.slug)] ||= []).push(d);
  return levels.filter(Boolean).map((l) => l.sort((a, b) => shortOf(a).localeCompare(shortOf(b))));
}

/** "Covers: A, B, C and 9 more topics." from the deck's topics in teaching order. */
export function coversLine(d, n = 3) {
  const t = stats(d).topics.map((x) => x.topic);
  if (!t.length) return '';
  const head = t.slice(0, n);
  return t.length > n ? `Covers ${head.join(', ')} and ${plural(t.length - n, 'more topic')}.` : `Covers ${andList(head)}.`;
}

/**
 * A results-page title under 60 characters where the data allows:
 * "<Family> Flashcards: A, B and more | <brand>", dropping the brand, then
 * names, before it would run long.
 */
export function familyTitleTag(group, brand, max = 60) {
  const fam = titleCase(group.title);
  // Short names first (exam codes such as CKA read best in a result), then the
  // bigger deck; a name the family title already says ("Kubernetes" in
  // "Kubernetes and cloud native") adds nothing, so it goes last.
  const said = (d) => Number(group.title.toLowerCase().includes(shortOf(d).toLowerCase()));
  const names = [...group.decks].sort((a, b) => said(a) - said(b) || shortOf(a).length - shortOf(b).length || stats(b).cards - stats(a).cards || shortOf(a).localeCompare(shortOf(b))).map(shortOf);
  const render = (list, withBrand) => {
    const more = names.length > list.length;
    const tail = `: ${more ? `${list.join(', ')} and more` : andList(list)}`;
    return `${fam} Flashcards${tail}${withBrand ? ` | ${brand}` : ''}`;
  };
  const fit = (withBrand) => {
    const list = [];
    for (const n of names) if (list.length < 3 && render([...list, n], withBrand).length <= max) list.push(n);
    return list;
  };
  // Keep the brand unless dropping it names more decks.
  const [b, nb] = [fit(true), fit(false)];
  if (b.length && b.length >= nb.length) return render(b, true);
  if (nb.length) return render(nb, false);
  const bare = `${fam} Flashcards | ${brand}`;
  return bare.length <= max ? bare : `${fam} Flashcards`;
}

/** The answer-first sentence for a hub, counted from the data. */
export function familyIntro(group, byslug) {
  const n = group.decks.length;
  const names = group.decks.map(shortOf);
  let s = `${plural(n, 'deck')}, ${plural(group.cards, 'card')}: ${andList(names)}.`;
  if (group.levels.length > 1) {
    const roots = group.levels[0];
    const builders = group.decks.filter((d) => (d.meta.prerequisiteDecks || []).some((p) => roots.some((r) => r.meta.slug === p)));
    s += ` Start with ${andList(roots.map(shortOf))}; ${builders.length === 1 ? `the ${shortOf(builders[0])} deck builds` : `${n0(builders.length)} of the others build`} on ${roots.length === 1 ? 'it' : 'them'}.`;
  }
  const outside = [...new Set(group.decks.flatMap((d) => d.meta.prerequisiteDecks || []))].map((sl) => byslug.get(sl)).filter((p) => p && familyOf(p) !== group.title);
  if (outside.length) s += ` Some build on decks from other families: ${andList(outside.map(shortOf))}.`;
  return s;
}

const deckLink = (cfg, d) => `<a href="${cfg.base}${esc(d.meta.slug)}/">${esc(shortOf(d))}</a>`;

/** Loads the site search (search.js guards against loading twice). */
export const searchScript = (cfg) => `<script src="${cfg.base}assets/search.js" defer></script>`;

export const STYLE = `<style>
.dx-list,.prose .dx-list,.prose .dx-steps,.prose .dx-fams{list-style:none;padding:0;margin:0;display:grid;gap:12px}
.prose .dx-steps{margin-top:14px;gap:10px}
.prose .dx-list li+li,.prose .dx-steps li+li{margin-top:0}
.dx-item{background:var(--surface);border:1px solid var(--line);border-radius:var(--r);box-shadow:var(--e1);padding:14px 18px 16px}
.dx-item h3{font-size:21px;line-height:1.3;margin:0}
.dx-item h3 a{text-decoration:none;color:var(--ink)}
.dx-item h3 a:hover{color:var(--accent)}
.dx-item h3 small{display:block;font-family:var(--sans);font-weight:400;font-size:15.5px;color:var(--muted);margin-top:3px;line-height:1.4}
.dx-meta{font-family:var(--mono);font-size:13px;color:var(--faint);margin-top:6px;line-height:1.6}
.dx-meta a{color:var(--muted)}
.dx-item p{font-size:16.5px;color:var(--read);margin-top:6px;line-height:1.5}
.dx-item p.dx-pre{color:var(--muted)}
.dx-item .chips{margin-top:8px}
.dx-item .chip{font-size:14px;text-decoration:none;color:var(--read)}
.dx-item a.chip:hover{border-color:var(--ink);color:var(--ink)}
.dx-steps{list-style:none;padding:0;margin:14px 0 0;display:grid;gap:10px;counter-reset:st}
.dx-steps li{display:grid;grid-template-columns:auto minmax(0,1fr);gap:12px;align-items:baseline;counter-increment:st}
.dx-steps li::before{content:"Step " counter(st);font-family:var(--mono);font-size:12.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--accent-ink);white-space:nowrap}
html[data-theme="dark"] .dx-steps li::before{color:var(--accent)}
.dx-fams{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr));gap:14px}
.dx-fams a.dx-fam{display:block;height:100%;text-decoration:none;background:var(--surface);border:1px solid var(--line);border-radius:var(--r);box-shadow:var(--e1);padding:14px 18px 16px}
.dx-fams a.dx-fam:hover{border-color:var(--ink)}
.dx-fams b{display:block;font-family:var(--serif);font-size:21px;line-height:1.3}
.dx-fams span{display:block;font-size:16px;color:var(--muted);line-height:1.5;margin-top:4px}
.dx-fams .dx-meta{margin-top:4px}
.dx-group{padding-top:34px}
.dx-group > h2{font-size:clamp(23px,2.3vw,28px);margin-bottom:12px;display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 12px}
.dx-group > h2 a{text-decoration:none;color:var(--ink)}
.dx-group > h2 a:hover{color:var(--accent)}
.dx-group > h2 small{font-family:var(--mono);font-size:13px;font-weight:400;color:var(--faint)}
.dx-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.dx-wide{max-width:none}
@media(max-width:640px){.dx-item{padding:12px 14px 14px}.dx-item h3{font-size:19.5px}}
</style>`;

// ── the learner's own state on deck tiles (browse and family hubs) ─────────
// Each tile carries a save toggle ([data-save-deck], wired by the shelf
// script) and a progress line that MINE_SCRIPT fills from Primer.store when
// this browser has studied the deck. Without script neither shows.
export const TILE_STYLE = `<style>
html:not(.js) main .dx-item.has-save{padding-right:18px}
.fx-mine{display:flex;flex-wrap:wrap;align-items:center;gap:6px 12px;margin-top:8px}
.fx-mine[hidden]{display:none}
.fx-mine .pbar{flex:1 1 140px;max-width:220px;margin:0}
.fx-ask{display:inline-grid;gap:2px;margin-top:20px;padding:12px 18px 13px;max-width:100%;background:var(--surface);border:1px solid var(--line);border-top:3px solid var(--margin);border-radius:var(--r);box-shadow:var(--e1);text-decoration:none;color:var(--ink)}
.fx-ask b{font-family:var(--serif);font-weight:600;font-size:19px;line-height:1.3}
.fx-ask b span{color:var(--accent)}
.fx-ask:hover{box-shadow:var(--e2);border-color:var(--line-strong)}
.fx-ask:hover b{text-decoration:underline;text-underline-offset:.18em;text-decoration-thickness:1px}
</style>`;

/**
 * The save toggle on a deck tile, in the shelf script's own markup
 * (.tile-save; it wires every [data-save-deck] and shows it once it runs).
 */
export const saveButton = (d) => `<button type="button" class="tile-save" data-save-deck="${esc(d.meta.slug)}" data-title="${esc(shortOf(d))}" aria-pressed="false" title="Save to your shelf" hidden>${icon('bookmark')}<span class="sr-only">Save to shelf: ${esc(shortOf(d))}</span></button>`;

/** The learner's progress on a deck tile, filled in by MINE_SCRIPT (the due chip by the shelf script). */
export const mineLine = (d) => `<div class="fx-mine dx-meta" data-fx-mine="${esc(d.meta.slug)}" hidden><span class="pbar" aria-hidden="true"><i style="width:0"></i></span><span class="fx-seen"></span><span class="due-chip" data-due="${esc(d.meta.slug)}"></span></div>`;

/** A link to the deck finder, as a small index card. */
export const finderPrompt = (cfg) => `<a class="fx-ask" href="${cfg.base}which-deck/"><span class="eyebrow">Not sure where to start?</span><b>Answer three questions and get one deck <span aria-hidden="true">→</span></b></a>`;

/** Fills [data-fx-mine] from Primer.store.progress, and again after every store write. */
export const MINE_SCRIPT = `<script>(function(){
function fill(){var P=window.Primer&&window.Primer.store;if(!P||typeof P.progress!=='function')return;
[].forEach.call(document.querySelectorAll('[data-fx-mine]'),function(el){var s=el.getAttribute('data-fx-mine'),p;try{p=P.progress(s)}catch(e){return}
if(!p||!p.seen){el.hidden=true;return}var t=p.total||0,pct=t?Math.min(100,Math.round(p.seen/t*100)):0;
el.querySelector('.pbar i').style.width=pct+'%';
el.querySelector('.fx-seen').textContent='Seen '+Number(p.seen).toLocaleString('en-GB')+(t?' of '+Number(t).toLocaleString('en-GB'):'');
el.hidden=false})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fill);else fill();
window.addEventListener('primer:store',fill);
})();</script>`;

function deckItem(cfg, d, byslug, groupTitle) {
  const s = stats(d);
  const pre = (d.meta.prerequisiteDecks || []).map((sl) => byslug.get(sl)).filter(Boolean);
  const topics = s.topics.map((t) => `<a class="chip" href="${cfg.base}${esc(d.meta.slug)}/#t-${slugify(t.topic)}">${esc(t.topic)}</a>`).join('');
  return `<li class="dx-item has-save" id="d-${esc(d.meta.slug)}">
<h3><a href="${cfg.base}${esc(d.meta.slug)}/">${esc(shortOf(d))}<small>${esc(d.meta.title)}</small></a></h3>${saveButton(d)}
<div class="dx-meta">${plural(s.cards, 'card')} · ${plural(s.primers, 'primer')} · ${plural(s.topics.length, 'topic')} · v${esc(d.meta.version)}</div>
${mineLine(d)}
${pre.length ? `<p class="dx-pre">Builds on ${andList(pre.map((p) => `${deckLink(cfg, p)}${familyOf(p) !== groupTitle ? ` (${esc(familyOf(p))})` : ''}`))}.</p>` : ''}
${topics ? `<div class="chips" aria-label="Topics">${topics}</div>` : ''}
</li>`;
}

function hubPage(cfg, group, all, byslug) {
  const path = group.path;
  const url = `${cfg.origin}${cfg.base}${path}`;
  const fam = titleCase(group.title);
  const intro = familyIntro(group, byslug);
  const order = group.levels.length > 1 ? `<section aria-labelledby="order-h"><h2 id="order-h">In what order should I take them?</h2>
<p>Each step builds on the one before it. The decks in a step can be taken in any order.</p>
<ol class="dx-steps">${group.levels.map((l) => `<li><span>${andList(l.map((d) => deckLink(cfg, d)))}</span></li>`).join('')}</ol></section>` : '';
  const list = `<section aria-labelledby="decks-h"><h2 id="decks-h">What does each deck cover?</h2>
<ul class="dx-list">${group.decks.map((d) => deckItem(cfg, d, byslug, group.title)).join('')}</ul></section>`;
  const faq = [];
  if (group.levels.length > 1) faq.push([`Which ${group.title} deck should I start with?`, `${andList(group.levels[0].map(shortOf))}. ${group.levels.length > 2 ? `Then follow the ${n0(group.levels.length)} steps above.` : 'The other decks build on it.'}`]);
  faq.push(['Are these decks free?', 'Yes. Every deck is free to download and study, licensed CC BY-SA 4.0, with no account and no tracking.']);
  faq.push(['Are the decks official?', 'No. They are independent, written from public sources, and not affiliated with or approved by any exam body.']);
  const body = `${STYLE}${TILE_STYLE}<div class="wrap">
${crumbs(cfg, [['Families', 'families/'], [fam, path]])}
<div class="hub-head"><h1>${esc(fam)} flashcards</h1><p class="kicker">${plural(group.decks.length, 'deck')} · ${plural(group.cards, 'card')} · ${plural(group.primers, 'primer')}</p><p class="lead">${esc(intro)}</p>${group.decks.length > 1 ? finderPrompt(cfg) : ''}</div>
<div class="hub-body prose">
${order}
${list}
<section id="faq" class="faq"><h2>Questions people ask</h2>${faq.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join('')}</section>
<p><a class="link" href="${cfg.base}families/">Every family</a> · <a class="link" href="${cfg.base}browse/">All decks</a> · <a class="link" href="${cfg.base}roadmap/">Ask for an exam</a></p>
</div>
</div>
${otherWays(cfg, null)}`;
  const names = [...group.decks].sort((a, b) => stats(b).cards - stats(a).cards).map(shortOf);
  return page(cfg, {
    title: familyTitleTag(group, cfg.brand),
    description: [4, 3, 2, 1].flatMap((k) => [' Every idea explained before it is tested, every card sourced.', ' Every card sourced.', '']
      .map((tail) => `Free ${group.title} flashcards: ${plural(group.decks.length, 'deck')} and ${plural(group.cards, 'card')} for ${andList(names.slice(0, k))}${names.length > k ? ' and more' : ''}.${tail}`))
      .find((d) => d.length <= 158) || clamp(`Free ${group.title} flashcards: ${plural(group.decks.length, 'deck')} and ${plural(group.cards, 'card')}.`, 158),
    path, body, active: 'browse', decks: all, count: all.reduce((a, d) => a + stats(d).cards, 0),
    og: 'og/browse.png', scripts: `${searchScript(cfg)}${MINE_SCRIPT}`,
    graph: [
      { '@type': 'CollectionPage', '@id': `${url}#page`, name: `${fam} flashcards`, url, description: intro, isPartOf: { '@id': `${cfg.origin}${cfg.base}#website` },
        mainEntity: { '@type': 'ItemList', numberOfItems: group.decks.length, itemListElement: group.decks.map((d, i) => ({ '@type': 'ListItem', position: i + 1, url: `${cfg.origin}${cfg.base}${d.meta.slug}/`, name: d.meta.title })) } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: cfg.brand, item: `${cfg.origin}${cfg.base}` },
        { '@type': 'ListItem', position: 2, name: 'Families', item: `${cfg.origin}${cfg.base}families/` },
        { '@type': 'ListItem', position: 3, name: fam, item: url }] },
      { '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  });
}

function indexPage(cfg, groups, all) {
  const cards = groups.reduce((a, g) => a + g.cards, 0);
  const decksN = groups.reduce((a, g) => a + g.decks.length, 0);
  const url = `${cfg.origin}${cfg.base}families/`;
  const body = `${STYLE}<div class="wrap">
${crumbs(cfg, [['Families', 'families/']])}
<div class="hub-head"><h1>Which subject are you studying?</h1><p class="kicker">${plural(groups.length, 'family', 'families')} · ${plural(decksN, 'deck')} · ${plural(cards, 'card')}</p><p class="lead">Every deck belongs to a family of related exams. Each family page lists its decks, what they cover and the order to take them in.</p></div>
<ul class="dx-fams" style="margin-top:26px">${groups.map((g) => `<li><a class="dx-fam" href="${cfg.base}${g.path}"><b>${esc(titleCase(g.title))}</b><span class="dx-meta">${plural(g.decks.length, 'deck')} · ${plural(g.cards, 'card')}</span><span>${esc(andList(g.decks.map(shortOf)))}</span></a></li>`).join('')}</ul>
<p style="margin-top:26px"><a class="link" href="${cfg.base}which-deck/">Which deck should I start with?</a> · <a class="link" href="${cfg.base}browse/">Search and filter every deck</a> · <a class="link" href="${cfg.base}roadmap/">The exams we plan next</a></p>
</div>
${otherWays(cfg, null)}`;
  return page(cfg, {
    title: `Certification Flashcards by Subject | ${cfg.brand}`,
    description: [5, 4, 3, 2].map((k) => `${plural(decksN, 'free flashcard deck')} in ${plural(groups.length, 'family', 'families')}: ${andList(groups.slice(0, k).map((g) => g.title))}${groups.length > k ? ' and more' : ''}. Pick a subject to see its decks in order.`).find((d) => d.length <= 158) || `${plural(decksN, 'free flashcard deck')} in ${plural(groups.length, 'family', 'families')}. Pick a subject to see its decks in order.`,
    path: 'families/', body, active: 'browse', decks: all, count: cards, og: 'og/browse.png', scripts: searchScript(cfg),
    graph: [{ '@type': 'CollectionPage', '@id': `${url}#page`, name: 'Families', url, isPartOf: { '@id': `${cfg.origin}${cfg.base}#website` },
      mainEntity: { '@type': 'ItemList', itemListElement: groups.map((g, i) => ({ '@type': 'ListItem', position: i + 1, url: `${cfg.origin}${cfg.base}${g.path}`, name: titleCase(g.title) })) } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: cfg.brand, item: `${cfg.origin}${cfg.base}` }, { '@type': 'ListItem', position: 2, name: 'Families', item: url }] }],
  });
}

export async function build({ cfg, decks }) {
  const all = releasedDecks(decks);
  const byslug = new Map(all.map((d) => [d.meta.slug, d]));
  const groups = familyGroups(all);
  const pages = { 'families/': indexPage(cfg, groups, all) };
  for (const g of groups) pages[g.path] = hubPage(cfg, g, all, byslug);
  return { pages, files: {}, urls: Object.keys(pages) };
}

// /browse/: every released deck, grouped by family, and search-index.json.
//
// Without script the page is the full list, grouped by family. The inline
// script adds family chips, a sort and a text filter, reads ?q= (the address
// every site search form falls back to) and, once search-index.json has loaded,
// also matches the terms each deck's primers teach.

import { esc, page, crumbs, otherWays } from '../layout.mjs';
import { STYLE, n0, plural, releasedDecks, familyGroups, shortOf, familyOf, stats, coversLine, firstDate, titleCase, familyPath, searchScript } from './families.mjs';

/**
 * The site search index: one record per released deck with its topics and the
 * terms its primers teach (topic by topic, so a term can link to its topic).
 * Short keys would save little after gzip; names stay readable.
 */
export function searchIndex(decks) {
  return {
    v: 1,
    decks: releasedDecks(decks).map((d) => {
      const s = stats(d);
      return {
        slug: d.meta.slug,
        title: d.meta.title,
        shortTitle: shortOf(d),
        familyTitle: familyOf(d),
        cards: s.cards,
        topics: s.topics.map((t) => [t.topic, [...new Set(t.terms)]]),
      };
    }),
  };
}

const CHIP_STYLE = `<style>
.dx-tools{display:grid;gap:12px;margin-top:22px;padding:16px 18px;background:var(--surface-2);border:1px solid var(--line);border-radius:var(--r)}
.dx-tools[hidden]{display:none}
.dx-row{display:flex;flex-wrap:wrap;gap:10px 14px;align-items:center}
.dx-row label{font-family:var(--mono);font-size:12.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--faint)}
.dx-q{flex:1 1 260px;min-width:0;font:inherit;font-size:17px;padding:9px 12px;min-height:44px;border:1px solid var(--line-strong);border-radius:var(--r);background:var(--surface);color:var(--ink)}
.dx-sort{font:inherit;font-size:16px;padding:8px 10px;min-height:44px;border:1px solid var(--line-strong);border-radius:var(--r);background:var(--surface);color:var(--ink)}
.dx-chips{display:flex;flex-wrap:wrap;gap:6px}
.dx-chips button{font:inherit;font-size:14.5px;padding:4px 12px;min-height:34px;border:1px solid var(--line-strong);border-radius:20px;background:var(--surface);color:var(--read);cursor:pointer}
.dx-chips button[aria-pressed="true"]{background:var(--ink);border-color:var(--ink);color:var(--bg)}
.dx-count{font-family:var(--mono);font-size:13.5px;color:var(--faint)}
.dx-hit{font-size:15px!important;color:var(--gold)!important}
.dx-flat{margin-top:26px}
.dx-none{margin-top:26px;color:var(--muted)}
</style>`;

function item(cfg, d) {
  const s = stats(d);
  const topics = s.topics.map((t) => t.topic);
  const text = [d.meta.title, shortOf(d), familyOf(d), d.meta.slug, ...topics].join(' ').toLowerCase();
  return `<li class="dx-item" data-slug="${esc(d.meta.slug)}" data-family="${esc(familyOf(d))}" data-cards="${s.cards}" data-date="${esc(firstDate(d))}" data-name="${esc(shortOf(d).toLowerCase())}" data-text="${esc(text)}">
<h3><a href="${cfg.base}${esc(d.meta.slug)}/">${esc(shortOf(d))}<small>${esc(d.meta.title)}</small></a></h3>
<div class="dx-meta"><a href="${cfg.base}${familyPath(familyOf(d))}">${esc(familyOf(d))}</a> · ${plural(s.cards, 'card')} · ${plural(s.primers, 'primer')} · ${plural(topics.length, 'topic')}</div>
<p>${esc(coversLine(d))}</p>
</li>`;
}

const SCRIPT = (base) => `<script>(function(){
var root=document.getElementById('browse');if(!root)return;
var tools=document.getElementById('dx-tools'),q=document.getElementById('dx-q'),sort=document.getElementById('dx-sort'),count=document.getElementById('dx-count'),none=document.getElementById('dx-none');
var groups=[].slice.call(root.querySelectorAll('.dx-group')),items=[].slice.call(root.querySelectorAll('.dx-item'));
var flat=document.getElementById('dx-flat'),chips=[].slice.call(document.querySelectorAll('#dx-chips button'));
var fam='',terms={},total=items.length;
tools.hidden=false;
var params=new URLSearchParams(location.search);q.value=params.get('q')||'';
if(params.get('family'))fam=params.get('family');
if(params.get('sort'))sort.value=params.get('sort');
function norm(s){return String(s||'').toLowerCase().replace(/^\\s*(what|who|which)\\s+(is|are|was|were)\\s+(an?|the)?\\s*/,'').replace(/[?!.,;:"\\u201c\\u201d]+/g,' ').replace(/\\s+/g,' ').trim()}
function apply(push){
  var words=norm(q.value).split(' ').filter(Boolean),shown=0;
  items.forEach(function(li){
    var hay=li.getAttribute('data-text'),hit='';
    var ok=!fam||li.getAttribute('data-family')===fam;
    if(ok&&words.length){
      var all=words.every(function(w){return hay.indexOf(w)>-1});
      if(!all){var t=terms[li.getAttribute('data-slug')]||[],m=null;
        for(var i=0;i<t.length&&!m;i++){var tl=t[i].toLowerCase();if(words.every(function(w){return tl.indexOf(w)>-1}))m=t[i]}
        if(m)hit=m;else ok=false}
    }
    var h=li.querySelector('.dx-hit');
    if(hit){if(!h){h=document.createElement('p');h.className='dx-hit';li.appendChild(h)}h.textContent='Teaches \\u201c'+hit+'\\u201d'}else if(h)h.remove();
    li.hidden=!ok;if(ok)shown++;
  });
  var mode=sort.value;
  if(mode==='az'){
    items.forEach(function(li){var g=root.querySelector('.dx-group[data-family="'+CSS.escape(li.getAttribute('data-family'))+'"] ul');if(li.parentNode!==g)g.appendChild(li)});
    groups.forEach(function(g){var ul=g.querySelector('ul');[].slice.call(ul.children).sort(function(a,b){return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'))}).forEach(function(x){ul.appendChild(x)});g.hidden=!g.querySelector('.dx-item:not([hidden])')});
    flat.hidden=true;
  }else{
    var key=mode==='cards'?function(a,b){return b.getAttribute('data-cards')-a.getAttribute('data-cards')}:function(a,b){return b.getAttribute('data-date').localeCompare(a.getAttribute('data-date'))||a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'))};
    items.slice().sort(key).forEach(function(li){flat.appendChild(li)});
    groups.forEach(function(g){g.hidden=true});flat.hidden=false;
  }
  chips.forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-family')===fam))});
  none.hidden=shown>0;
  count.textContent=shown===total?'Showing all '+total+' decks':'Showing '+shown+' of '+total+' decks';
  if(push){var p=new URLSearchParams();if(q.value.trim())p.set('q',q.value.trim());if(fam)p.set('family',fam);if(sort.value!=='az')p.set('sort',sort.value);var s=p.toString();history.replaceState(null,'',location.pathname+(s?'?'+s:''))}
}
chips.forEach(function(b){b.addEventListener('click',function(){fam=b.getAttribute('data-family');apply(true)})});
q.addEventListener('input',function(){apply(true)});sort.addEventListener('change',function(){apply(true)});
tools.addEventListener('submit',function(e){e.preventDefault();apply(true)});
apply(false);
fetch('${base}search-index.json').then(function(r){return r.json()}).then(function(ix){ix.decks.forEach(function(d){var t=[];d.topics.forEach(function(x){t.push(x[0]);t.push.apply(t,x[1])});terms[d.slug]=t});apply(false)}).catch(function(){});
})();</script>`;

export async function build({ cfg, decks }) {
  const all = releasedDecks(decks);
  const groups = familyGroups(all);
  const cards = groups.reduce((a, g) => a + g.cards, 0);
  const url = `${cfg.origin}${cfg.base}browse/`;
  const body = `${STYLE}${CHIP_STYLE}<div class="wrap">
${crumbs(cfg, [['Browse', 'browse/']])}
<div class="hub-head"><h1>Every deck</h1><p class="kicker">${plural(all.length, 'deck')} · ${plural(cards, 'card')} · ${plural(groups.length, 'family', 'families')}</p><p class="lead">Every released deck, grouped by family. Each one explains its ideas before it tests them and cites a source on every card.</p></div>
<form class="dx-tools" id="dx-tools" role="search" action="${cfg.base}browse/" method="get" hidden>
<div class="dx-row"><label for="dx-q">Filter</label><input class="dx-q" id="dx-q" type="search" name="q" autocomplete="off" placeholder="An exam, a code or a term, such as Sprint Goal"><label for="dx-sort">Sort</label><select class="dx-sort" id="dx-sort" name="sort"><option value="az">A to Z</option><option value="cards">Most cards</option><option value="new">Newest</option></select></div>
<div class="dx-chips" id="dx-chips" role="group" aria-label="Family"><button type="button" data-family="" aria-pressed="true">All</button>${groups.map((g) => `<button type="button" data-family="${esc(g.title)}" aria-pressed="false">${esc(g.title)} <span class="dx-sr">(${plural(g.decks.length, 'deck')})</span></button>`).join('')}</div>
<p class="dx-count" id="dx-count" role="status" aria-live="polite"></p>
</form>
<div id="browse">
${groups.map((g) => `<section class="dx-group" data-family="${esc(g.title)}" aria-labelledby="f-${g.slug}"><h2 id="f-${g.slug}"><a href="${cfg.base}${g.path}">${esc(titleCase(g.title))}</a><small>${plural(g.decks.length, 'deck')} · ${plural(g.cards, 'card')}</small></h2>
<ul class="dx-list">${[...g.decks].sort((a, b) => shortOf(a).localeCompare(shortOf(b))).map((d) => item(cfg, d)).join('')}</ul></section>`).join('\n')}
<ul class="dx-list dx-flat" id="dx-flat" aria-label="Decks" hidden></ul>
<p class="dx-none" id="dx-none" hidden>No deck matches. <a href="${cfg.base}roadmap/">See the exams we plan next, or ask for one.</a></p>
</div>
<p style="margin-top:28px"><a class="link" href="${cfg.base}families/">Every family</a> · <a class="link" href="${cfg.base}new/">New decks</a> · <a class="link" href="${cfg.base}roadmap/">Ask for an exam</a></p>
</div>
${otherWays(cfg, 'browse/')}`;
  const html = page(cfg, {
    title: `All Certification Flashcard Decks | ${cfg.brand}`,
    description: `Browse ${plural(all.length, 'free flashcard deck')} with ${n0(cards)} cards across ${plural(groups.length, 'family', 'families')}. Filter by family, sort by size or date, or search for an exam or a term.`,
    path: 'browse/', body, active: 'browse', decks: all, count: cards, og: 'og/browse.png',
    scripts: `${SCRIPT(cfg.base)}${searchScript(cfg)}`,
    graph: [{ '@type': 'CollectionPage', '@id': `${url}#page`, name: 'Every deck', url, isPartOf: { '@id': `${cfg.origin}${cfg.base}#website` },
      mainEntity: { '@type': 'ItemList', numberOfItems: all.length, itemListElement: all.map((d, i) => ({ '@type': 'ListItem', position: i + 1, url: `${cfg.origin}${cfg.base}${d.meta.slug}/`, name: d.meta.title })) } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: cfg.brand, item: `${cfg.origin}${cfg.base}` }, { '@type': 'ListItem', position: 2, name: 'Browse', item: url }] }],
  });
  return { pages: { 'browse/': html }, files: { 'search-index.json': JSON.stringify(searchIndex(all)) }, urls: ['browse/'] };
}

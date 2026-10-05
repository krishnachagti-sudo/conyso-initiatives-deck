// /numbers/: "How big is the Primer, and how good?" The answer first, then
// the comparison with other sites (only when src/data/compare.json exists),
// our quality numbers, growth over time, coverage by subject, how we counted,
// and the questions people ask. Every figure is counted from the decks by
// src/site/stats.mjs; every figure about another site, and every claim about
// size, comes word for word from compare.json with its link and date.
//
// The chart pieces here are shared with the home page's Scale band. Charts
// are plain HTML bars or inline SVG with a title and description, each with
// the numbers in a table beside it, so they read without script, in either
// theme and on a screen reader.

import { esc, page, crumbs, otherWays, fit } from '../layout.mjs';
import { primerStats, loadCompare, scaleBars, sizeClaim, notClaimTexts, pct, claimHead, whyNotCounted, publicBasis } from '../stats.mjs';
import { familyPath } from './families.mjs';
import { longDate } from './new.mjs';

const n0 = (n) => Number(n).toLocaleString('en-GB');
const plural = (n, one, many = `${one}s`) => `${n0(n)} ${n === 1 ? one : many}`;
const shortDate = (iso) => longDate(iso).replace(/ (\d{4})$/, ''); // "21 September"

// ── shared chart pieces ─────────────────────────────────────────────────────

/**
 * The comparison bars: cards, our row first in red pen, the others shaded
 * in pencil, each named, numbered and linked to its evidence. Only sites
 * with a card count get a bar; the rest are named underneath as "not
 * counted", never given a number. The empty .hl-u span is only a cue:
 * common.js marks it "on" as it scrolls into view (and on print, and on a
 * full-page capture), and the bar grows from the left then; without script,
 * or with reduced motion, the bars are simply drawn.
 */
export function scaleChart(cfg, bars, { id = 'scale', reasons = false } = {}) {
  if (!bars) return '';
  const row = (r) => {
    const w = Math.max(0.6, (100 * r.value) / bars.max);
    const note = r.note ? `<small>${r.us ? 'this site · ' : ''}${esc(r.note)}</small>` : '';
    const name = r.us ? `<span class="mo-name"><b>${esc(r.name)}</b>${note}</span>` : `<span class="mo-name"><a href="${esc(r.url)}" rel="nofollow noopener">${esc(r.name)}</a>${note}</span>`;
    const val = `<span class="mo-val"><span${r.value > 9 ? ' data-count' : ''}>${n0(r.value)}</span><span class="sr-only"> cards</span></span>`;
    const ev = r.us ? `<a class="mo-ev" href="${cfg.base}numbers/#how">how<span class="sr-only"> we counted our own</span></a>` : `<a class="mo-ev" href="${esc(r.evidenceUrl)}" rel="nofollow noopener">evidence<span class="sr-only"> for ${esc(r.name)}, read ${esc(r.fetched)}</span> ↗</a>`;
    return `<li class="mo-bar${r.us ? ' is-us' : ''}">${name}<span class="mo-track" aria-hidden="true"><i style="width:${w.toFixed(2)}%"></i><span class="hl-u mo-cue"></span></span>${val}${ev}</li>`;
  };
  const nc = bars.notCounted || [];
  const notCounted = !nc.length ? '' : reasons
    ? `<div class="mo-nc"><h3>Not counted, and why</h3><ul>${nc.map((r) => `<li><a href="${esc(r.url)}" rel="nofollow noopener">${esc(r.name)}</a>: ${esc(r.why)} <a class="mo-ev" href="${esc(r.evidenceUrl)}" rel="nofollow noopener">evidence<span class="sr-only"> for ${esc(r.name)}</span> ↗</a></li>`).join('')}</ul></div>`
    : `<p class="mo-nc-line"><b>Not counted:</b> ${nc.map((r) => esc(r.name)).join(', ')}. <a href="${cfg.base}numbers/#compare">Why each one →</a></p>`;
  return `<figure class="mo-scale" aria-labelledby="${id}-cap">
<p class="mo-axis" aria-hidden="true"><span>Cards</span></p>
<ol class="mo-bars" role="list">${bars.rows.map(row).join('')}</ol>
${notCounted}
<figcaption id="${id}-cap" class="mo-foot"><span>Cards, counted <time datetime="${esc(bars.counted)}">${esc(bars.counted)}</time>.</span> <a class="link" href="${cfg.base}numbers/#how">How we counted →</a></figcaption>
</figure>`;
}

/**
 * The growth chart: cards in the Primer at the end of each week, a ruled line
 * on graph paper with a dot per week. The SVG stretches to its box
 * (non-scaling strokes) and every label and dot is HTML, so nothing shrinks
 * or squashes on a phone. A table with the same numbers goes beside it.
 */
export function growthChart(series, { mini = false, id = 'growth' } = {}) {
  if (!series.length) return '';
  const W = 600;
  const H = 200;
  const max = Math.max(...series.map((p) => p.cards)) || 1;
  const x = (i) => (series.length === 1 ? W : (W * i) / (series.length - 1));
  const y = (v) => H - (H * 0.9 * v) / max;
  const pts = series.map((p, i) => [x(i), y(p.cards)]);
  const d = `M${pts.map(([a, b]) => `${a.toFixed(1)} ${b.toFixed(1)}`).join(' L')}`;
  const area = `${d} L${W} ${H} L0 ${H} Z`;
  const last = series[series.length - 1];
  const desc = series.map((p) => `Week of ${longDate(p.week)}: ${n0(p.cards)} cards in ${plural(p.decks, 'deck')}`).join('. ');
  const svg = `<svg class="mo-g-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">Cards in the Primer, week by week</title><desc id="${id}-d">${esc(desc)}.</desc>
<path class="mo-g-area" d="${area}"/><path class="mo-g-line" d="${d}" vector-effect="non-scaling-stroke"/></svg>`;
  const at = (i) => `left:${((100 * pts[i][0]) / W).toFixed(2)}%;top:${((100 * pts[i][1]) / H).toFixed(2)}%`;
  const dots = series.map((p, i) => `<span class="mo-g-dot${i === series.length - 1 ? ' is-last' : ''}" style="${at(i)}" title="Week of ${esc(longDate(p.week))}: ${n0(p.cards)} cards"></span>`).join('');
  const every = Math.ceil(series.length / (mini ? 2 : 8));
  const ticks = series.map((p, i) => (i % every === 0 || i === series.length - 1 ? `<span style="left:${((100 * pts[i][0]) / W).toFixed(2)}%">${esc(shortDate(p.week))}</span>` : '')).join('');
  return `<div class="mo-g${mini ? ' mo-g-mini' : ''}">
<div class="mo-g-plot"><span class="hl-u mo-cue"></span>${svg}<span class="mo-g-dots" aria-hidden="true">${dots}<span class="mo-g-lab" style="${at(series.length - 1)}">${n0(last.cards)} cards</span></span></div>
<div class="mo-g-x" aria-hidden="true">${ticks}</div>
</div>`;
}

/** The growth numbers as a table: the chart's text equivalent. */
export function growthTable(series) {
  return `<div class="table-scroll"><table class="fmt-table mo-table"><caption class="sr-only">Decks and cards added each week</caption><thead><tr><th scope="col">Week of</th><th scope="col">Decks added</th><th scope="col">Cards added</th><th scope="col">Decks in all</th><th scope="col">Cards in all</th></tr></thead>
<tbody>${series.map((p) => `<tr><td><time datetime="${p.week}">${esc(longDate(p.week))}</time></td><td>${n0(p.addedDecks)}</td><td>${n0(p.addedCards)}</td><td>${n0(p.decks)}</td><td>${n0(p.cards)}</td></tr>`).join('')}</tbody></table></div>`;
}

/** Cards per subject family, largest first, each linked to its hub. */
export function familyChart(cfg, byFamily) {
  const max = Math.max(...byFamily.map((f) => f.cards)) || 1;
  return `<ol class="mo-bars mo-fams" role="list">${byFamily.map((f) => `<li class="mo-bar"><span class="mo-name">${f.hub ? `<a href="${cfg.base}${esc(familyPath(f.title))}">${esc(f.title)}</a>` : esc(f.title)}<small>${plural(f.decks, 'deck')}</small></span><span class="mo-track" aria-hidden="true"><i style="width:${Math.max(0.6, (100 * f.cards) / max).toFixed(2)}%"></i><span class="hl-u mo-cue"></span></span><span class="mo-val">${n0(f.cards)}<span class="sr-only"> cards</span></span></li>`).join('')}</ol>`;
}

/** The "why size isn't the point" paragraph: our own counted numbers only. */
export function notJustSize(cfg, s) {
  return `A count on its own says little; what matters is what is on each card. Here all ${n0(s.decks)} decks are built to <a href="${cfg.base}method/">one standard</a>. <b>${pct(s.sourced, s.cards)}%</b> of the ${n0(s.cards)} cards link the source they were written from, and ${n0(s.quoted)} quote its own words, checked word for word by the build. ${n0(s.primers)} primer cards explain a term before any card tests it. ${plural(s.audits, 'audit')} fixed at least ${n0(s.findingsFixed)} problems before release.`;
}

// ── the page ────────────────────────────────────────────────────────────────

const yesNo = (v) => (v === true ? 'Yes' : v === false ? 'No' : v == null || v === '' ? 'Not stated' : String(v));

const cap = (v) => { const t = yesNo(v); return t.charAt(0).toUpperCase() + t.slice(1); };

function compareTable(cfg, c, s) {
  const ours = { name: 'The Exam Primer', url: `${cfg.origin}${cfg.base}`, what: 'Free flashcard decks for certification exams and assessments, all built to one standard.', free: true, openLicence: 'CC BY-SA 4.0', sourcedCards: `Every card (${pct(s.sourced, s.cards)}%)`, oneStandard: true, evidenceUrl: `${cfg.base}numbers/#how`, fetched: s.counted };
  const tr = (r, us) => {
    const exams = us ? `${n0(s.decks)} decks` : Number.isFinite(r.certifications) ? n0(r.certifications) : '<span class="mo-nc-cell">Not counted</span>';
    const cards = us ? n0(s.cards) : Number.isFinite(r.cards) ? n0(r.cards) : '<span class="mo-nc-cell">Not counted</span>';
    return `<tr${us ? ' class="is-us"' : ''}><th scope="row">${us ? esc(r.name) : `<a href="${esc(r.url)}" rel="nofollow noopener">${esc(r.name)}</a>`}<small>${esc(r.what || '')}</small></th><td>${esc(cap(r.free))}</td><td>${esc(cap(r.openLicence))}</td><td>${esc(cap(r.sourcedCards))}</td><td>${esc(cap(r.oneStandard))}</td><td class="num">${exams}</td><td class="num">${cards}</td><td class="mo-read"><a href="${esc(r.evidenceUrl)}"${us ? '' : ' rel="nofollow noopener"'}>${us ? 'Method' : 'Source ↗'}<span class="sr-only"> for ${esc(r.name)}</span></a><small>${esc(r.fetched)}</small></td></tr>`;
  };
  return `<div class="table-scroll mo-cmp-wrap" tabindex="0" role="region" aria-label="The comparison table, scrolls sideways"><table class="fmt-table mo-table mo-cmp"><caption class="sr-only">The Exam Primer and the alternatives, side by side, read ${esc(c.counted)}</caption>
<thead><tr><th scope="col">Site</th><th scope="col">Free</th><th scope="col">Open licence</th><th scope="col">Sourced cards</th><th scope="col">One standard</th><th scope="col">Exams</th><th scope="col">Cards</th><th scope="col">Read</th></tr></thead>
<tbody>${tr(ours, true)}${c.rows.map((r) => tr(r, false)).join('')}</tbody></table></div>`;
}

/** The questions people ask, answered from our numbers and, for other sites, from compare.json only. */
export function numbersFaq(s, c) {
  const faq = [[`How many flashcards are in The Exam Primer?`, `${n0(s.cards)} cards in ${plural(s.decks, 'deck')} across ${plural(s.families, 'subject')}, counted on ${longDate(s.counted)}. ${n0(s.primers)} of them are primers that teach a term before it is tested.`]];
  if (c) {
    const claim = sizeClaim(c, s);
    const not = notClaimTexts(c);
    if (claim) faq.push(['Is it the largest?', `Of openly licensed collections, yes. ${claimHead(claim)}: ${n0(s.cards)} cards under CC BY-SA 4.0 in ${plural(s.decks, 'deck')}. ${publicBasis(claim.basis)}${not[0] ? ` It is not the largest in every sense. What we do not claim: ${not[0]}` : ''}`]);
    else if (not.length) faq.push(['Is it the largest?', `We do not say so. ${not.join(' ')}`]);
    const q = c.rows.find((x) => /quizlet/i.test(x.name));
    if (q) {
      faq.push([`Is ${q.name} bigger?`, `Almost certainly, in total. ${q.name}’s sets are made by its users at very large scale, and they almost certainly outnumber ours. We could not count them: ${whyNotCounted(q.countNote).replace(/\.$/, '')} (read ${q.fetched}). What we claim is narrower: ours is the largest openly licensed, sourced, one-standard collection of certification flashcards we found.`]);
    }
  }
  faq.push(['How often do these numbers change?', `Every time the site is built. Each figure is counted from the decks themselves, so it moves when a deck is added or a card is fixed. ${plural(s.recentDecks, 'deck')} were added in the ${s.sinceDays} days to ${longDate(s.counted)}.`]);
  faq.push(['What counts as a source document?', `A distinct web page or file that a card links as its source, with the section or page anchor removed, so two cards citing different sections of one guide count once. ${n0(s.documents)} documents are cited in all.`]);
  return faq;
}

export async function build({ cfg, decks, compare }) {
  const s = primerStats(decks);
  if (!s.decks) return { pages: {}, files: {}, urls: [] };
  const c = compare === undefined ? loadCompare() : compare;
  const bars = scaleBars(c, s);
  const claim = sizeClaim(c, s);
  const url = `${cfg.origin}${cfg.base}numbers/`;
  const faq = numbersFaq(s, c);
  const tile = (n, label, line, unit = '') => `<li class="mo-tile"><b>${unit ? `${n0(n)}${unit}` : `<span${n > 9 ? ' data-count' : ''}>${n0(n)}</span>`}</b><span class="mo-tl">${label}</span><p>${line}</p></li>`;

  const sections = [];
  if (c) {
    sections.push(`<section class="sec" id="compare" aria-labelledby="compare-h"><span class="label">The scale</span>
<h2 id="compare-h">${claim ? esc(claimHead(claim)) : 'How does it compare with the alternatives?'}</h2>
<p class="mo-basis">Other sites read on <time datetime="${esc(c.counted)}">${esc(longDate(c.counted))}</time>, each from its own pages, linked below.</p>
${scaleChart(cfg, bars, { id: 'nscale', reasons: true })}
${(c.claims || []).length ? `<div class="mo-claims"><h3>What we claim, and on what basis</h3><ul>${c.claims.map((x) => `<li><b>${esc(x.text)}</b><span>${esc(publicBasis(x.basis))}</span></li>`).join('')}</ul></div>` : ''}
<h3>Side by side</h3>
${compareTable(cfg, c, s)}
${notClaimTexts(c).length ? `<div class="mo-not"><h3>What we do not claim</h3><ul>${notClaimTexts(c).map((t) => `<li>${esc(t)}</li>`).join('')}</ul></div>` : ''}
</section>`);
  }
  sections.push(`<section class="sec" id="quality" aria-labelledby="quality-h"><span class="label">The quality</span>
<h2 id="quality-h">How good is each card?</h2>
<ul class="mo-tiles" role="list">
${tile(pct(s.sourced, s.cards), 'of cards name a source', `${n0(s.sourced)} of ${n0(s.cards)} link the section they were written from.`, '%')}
${tile(s.quoted, 'cards quote the source', `Its own words, found word for word in a saved copy by the build, in ${plural(s.evidenceDecks, 'deck')}.`)}
${tile(s.primers, 'primers', `Each explains a term before any card tests it: ${n0(s.terms)} terms taught.`)}
${tile(s.documents, 'source documents', 'Distinct guides, standards, rules and docs pages that cards cite.')}
${tile(s.audits, s.audits === 1 ? 'audit recorded' : 'audits recorded', `Every card read against its source; at least ${n0(s.findingsFixed)} problems fixed, ${n0(s.wrongFixed)} of them cards that were wrong.`)}
${tile(s.formats, 'file formats', 'Every deck as an Anki package, CSV, Markdown, JSON and printable PDF.')}
</ul>
<p class="mo-note">${notJustSize(cfg, s)}</p>
</section>`);
  sections.push(`<section class="sec" id="growth" aria-labelledby="growth-h"><span class="label">The growth</span>
<h2 id="growth-h">How fast is it growing?</h2>
<p>${plural(s.recentDecks, 'deck')} and ${n0(s.recentCards)} cards were added in the ${s.sinceDays} days to ${longDate(s.counted)}. New decks arrive most weeks.</p>
${growthChart(s.growth, { id: 'ngrowth' })}
<details class="mo-data"><summary>The numbers behind the chart</summary>${growthTable(s.growth)}</details>
<p class="mo-small">Each deck counts from the week of its first changelog entry, at its size today.</p>
</section>`);
  sections.push(`<section class="sec" id="coverage" aria-labelledby="coverage-h"><span class="label">The coverage</span>
<h2 id="coverage-h">Which subjects does it cover?</h2>
<p>${plural(s.families, 'subject')}, the most cards first.</p>
${familyChart(cfg, s.byFamily)}
</section>`);
  sections.push(`<section class="sec" id="how" aria-labelledby="how-h"><span class="label">The method</span>
<h2 id="how-h">How we counted</h2>
<p>Counted on <time datetime="${esc(s.counted)}">${esc(longDate(s.counted))}</time>, the newest date in any deck’s changelog, from the published decks only (drafts are left out). The site recounts every time it is built.</p>
<dl class="mo-how">
<div><dt>Decks and cards</dt><dd>Released decks, and the cards in them, not counting retired cards.</dd></div>
<div><dt>Sourced cards</dt><dd>Cards with a source link. The build refuses a card without one.</dd></div>
<div><dt>Quoted cards</dt><dd>Cards carrying a quote of 4 to 60 words from their source, in decks where the checker finds each quote word for word in a saved copy of that source.</dd></div>
<div><dt>Primers and terms</dt><dd>Cards of kind “primer”, and the distinct terms they introduce.</dd></div>
<div><dt>Source documents</dt><dd>Distinct source links with the section or page anchor removed.</dd></div>
<div><dt>Audits and fixes</dt><dd>Each audit recorded in a deck’s “checks”. Fixes add up the numbers each audit note states for wrong, unsupported, ambiguous, unclear and minor problems; a note that gives no number adds none, so this is a floor. ${n0(s.auditsWithCounts)} of ${n0(s.audits)} notes state numbers.</dd></div>
<div><dt>Growth</dt><dd>Each deck dated by its first changelog entry, grouped by week (weeks start on Monday).</dd></div>
${c ? `<div><dt>Other sites</dt><dd>Counted from each site’s own pages on the date beside it, by following the evidence link; compiled ${esc(c.counted)}. A site whose card total could not be read is listed as “not counted”, with the reason, and never given an estimate.</dd></div>` : ''}
</dl>
</section>`);

  const lead = `${n0(s.decks)} decks and ${n0(s.cards)} free flashcards in ${plural(s.families, 'subject')}. ${pct(s.sourced, s.cards)}% of cards name their source, ${n0(s.quoted)} quote it word for word, and ${n0(s.primers)} primers teach a term before it is tested.${claim ? ` ${claimHead(claim)}.` : ''}`;
  const body = `<div class="wrap">
${crumbs(cfg, [['In numbers', 'numbers/']])}
<div class="hub-head"><p class="eyebrow">The Primer in numbers</p><h1>How big is the Primer, and how good?</h1><p class="kicker">counted ${esc(s.counted)} · ${plural(s.decks, 'deck')} · ${n0(s.cards)} cards</p><p class="lead">${esc(lead)}</p></div>
<div class="hub-body prose mo-body">
${sections.join('\n')}
<section class="sec faq" id="faq" aria-labelledby="faq-h"><span class="label">Questions</span><h2 id="faq-h">Questions people ask</h2>${faq.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join('')}</section>
</div>
</div>
${otherWays(cfg, 'numbers/')}`;

  const measures = [
    ['Released decks', s.decks], ['Cards', s.cards], ['Cards with a source link', s.sourced], ['Cards quoting their source', s.quoted],
    ['Primer cards', s.primers], ['Terms taught', s.terms], ['Subject families', s.families], ['Source documents cited', s.documents],
    ['Audits recorded', s.audits], ['Problems fixed in audits (at least)', s.findingsFixed], ['Export formats', s.formats], [`Decks added in the last ${s.sinceDays} days`, s.recentDecks],
  ];
  const html = page(cfg, {
    title: fit(60, `The Exam Primer in Numbers: Decks, Cards and Sources`, `${cfg.brand} in Numbers`),
    description: fit(158, `${n0(s.decks)} decks and ${n0(s.cards)} free flashcards, counted from the data: how many cite and quote a source, teach before testing, and how fast it grows.`,
      `${n0(s.decks)} decks and ${n0(s.cards)} free flashcards, counted from the data: sources, quotes, primers, audits and growth.`),
    path: 'numbers/', body, decks: decks.filter((d) => d.meta.status === 'released'), count: s.cards, og: 'og/home.png',
    graph: [
      { '@type': 'WebPage', '@id': `${url}#page`, name: 'How big is the Primer, and how good?', url, isPartOf: { '@id': `${cfg.origin}${cfg.base}#website` }, dateModified: s.counted, mainEntity: { '@id': `${url}#dataset` } },
      { '@type': 'Dataset', '@id': `${url}#dataset`, name: `${cfg.brand} in numbers`, url,
        description: `Counts describing ${cfg.brand}, a free collection of flashcard decks for certification exams: decks, cards, sourced and quoted cards, primers, source documents, audits, export formats and growth by week, computed from the deck data at build time.`,
        creator: { '@id': `${cfg.origin}${cfg.base}#organization` }, license: 'https://creativecommons.org/licenses/by-sa/4.0/', isAccessibleForFree: true, dateModified: s.counted, temporalCoverage: `${s.growth[0]?.week || s.counted}/${s.counted}`,
        variableMeasured: measures.map(([name, value]) => ({ '@type': 'PropertyValue', name, value })) },
      { '@type': 'ItemList', '@id': `${url}#families`, name: 'Cards by subject', itemListOrder: 'https://schema.org/ItemListOrderDescending', itemListElement: s.byFamily.map((f, i) => ({ '@type': 'ListItem', position: i + 1, name: `${f.title}: ${n0(f.cards)} cards`, ...(f.hub ? { url: `${cfg.origin}${cfg.base}${familyPath(f.title)}` } : {}) })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: cfg.brand, item: `${cfg.origin}${cfg.base}` }, { '@type': 'ListItem', position: 2, name: 'In numbers', item: url }] },
      { '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  });
  return { pages: { 'numbers/': html }, files: {}, urls: ['numbers/'] };
}

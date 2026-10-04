// /roadmap/: the exams on the build list (master-list.csv, status "Build")
// that have no released deck yet, grouped by the CSV's family column, each with
// a link that opens a prefilled GitHub issue.
//
// Only three things leave the CSV: the exam's name (with research notes such
// as "lightly researched" removed), its family, and a status this page sets
// ("Planned", or "In progress" when a draft deck exists). Scores, ranks,
// verdicts, codes and report names stay internal.

import { readFileSync } from 'node:fs';
import { esc, page, crumbs, otherWays } from '../layout.mjs';
import { STYLE, n0, plural, releasedDecks, stats, searchScript } from './families.mjs';
import { slugify } from '../../decks.mjs';

const REPO = 'https://github.com/krishnachagti-sudo/conyso-initiatives-deck';

// Read the CSV the way build/build.mjs does (quoted fields may contain commas).
const csvRow = (line) => [...line.matchAll(/(?:^|,)("(?:[^"]|"")*"|[^,]*)/g)].map((m) => m[1].replace(/^"|"$/g, '').replace(/""/g, '"'));
export function readMasterList(text) {
  const [hdr, ...rows] = text.trim().split('\n').map(csvRow);
  return rows.map((r) => Object.fromEntries(hdr.map((h, i) => [h, r[i] ?? ''])));
}

/** The exam's public name: research notes and asides removed. */
export function displayName(exam) {
  return String(exam)
    .replace(/\s*\([^)]*;[^)]*\)/g, '')              // "(state; a model for other states)"
    .replace(/;.*$/, '')                          // "…; lightly researched", "…; Java SE 17 as a tag"
    .replace(/\s*\*\([^)]*\)\*?/g, '')            // "*(not a certification)"
    .replace(/\s*\((?=[^)]*\b(?:not |captured|verified|researched|completeness|due|site|course card|open for|lightly)\b)[^)]*\)/gi, '')
    .replace(/,\s+a niche$/i, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Matching a CSV row to a deck. There is no slug column, so a row has a deck
// when every significant word of its name (asides removed) appears in one
// deck's title, short title, slug or description; or when its code (one with
// a digit, such as AZ-305) appears in a deck's title. A name of the form
// "Vendor A / B / C" is tried as "Vendor A", "Vendor B", "Vendor C".
const STOP = new Set(['and', 'the', 'of', 'for', 'a', 'an', 'to', 'in', 'on', 'with', 'exam', 'exams', 'test', 'certification', 'certified', 'flashcards']);
const words = (s) => String(s).toLowerCase().split(/[^a-z0-9./&+-]+/).map((t) => t.replace(/^[.\-&+]+|[.\-&+]+$/g, '')).filter((t) => t && !STOP.has(t));
const has = (set, t) => {
  if (set.has(t)) return true;
  if (!t.includes('/')) return false;
  const parts = t.split('/').filter((p) => p.length >= 2);
  return parts.length >= 2 && parts.every((p) => set.has(p));
};
function variants(exam) {
  const bare = String(exam).replace(/\*?\([^)]*\)\*?/g, ' ').replace(/;.*$/, '').replace(/\s+/g, ' ').trim();
  const segs = bare.split(' / ');
  if (segs.length < 2) return [bare];
  const first = segs[0].split(' ');
  const prefix = first.slice(0, -1).join(' ');
  return [segs[0], ...segs.slice(1).map((s) => `${prefix} ${s}`.trim())];
}
// "Scrum.org PSPO I", "ProKanban PK I": also try the name without its first
// word (the awarding body), when two or more words remain.
// The rest must still carry a code ("PSPO", "PK"), so "CDL General Knowledge" never
// becomes "General Knowledge".
const withoutBody = (v) => { const w = v.split(' '); return w.length >= 3 && w.slice(1).some((t) => /[A-Z]{2,}|\d/.test(t)) ? [v, w.slice(1).join(' ')] : [v]; };
export function deckFor(row, decks) {
  decks = decks.filter((d) => !d.meta.personal);
  const mk = (s) => { const set = new Set(words(s)); for (const t of [...set]) if (t.includes('/')) t.split('/').forEach((p) => set.add(p)); return set; };
  const hays = decks.map((d) => {
    const title = mk([d.meta.title, d.meta.shortTitle, d.meta.slug.replace(/-/g, ' ')].join(' '));
    return { d, title, set: new Set([...title, ...mk(d.meta.description)]) };
  });
  const names = variants(row.exam).flatMap(withoutBody).map((v) => ({ v, w: words(v) })).filter((x) => x.w.length);
  // One word is enough only for an acronym that names one deck ("CISSP", "CC").
  const ok = (x, hits) => x.w.length > 1 || (hits.length === 1 && /^[A-Z0-9/-]{2,}$/.test(x.v.trim()));
  // 1. Every word of the name in a deck's title.
  for (const x of names) {
    const hits = hays.filter((h) => x.w.every((t) => has(h.title, t)));
    // The closest title wins: "Azure Fundamentals" is AZ-900, not "Azure AI Fundamentals".
    const extra = (h) => new Set(words(h.d.meta.title).filter((t) => !x.w.includes(t))).size;
    if (hits.length && ok(x, hits)) return hits.sort((a, b) => extra(a) - extra(b))[0].d;
  }
  // 2. A code that one deck's title carries: the code column's ("KCSA", "AZ-305")
  //    or one after the awarding body in the name ("IRS VITA/TCE …").
  const joined = /^[A-Z][A-Z0-9]*(?:[/-][A-Z0-9]+)+$/;
  const codes = [String(row.code || '').trim().split(/\s+/)[0]].filter((t) => joined.test(t) || /^[A-Z]{3,}$/.test(t))
    .concat(String(row.exam).replace(/\([^)]*\)/g, ' ').split(/\s+/).slice(1).filter((t) => joined.test(t)));
  for (const c of codes) {
    const re = new RegExp(`(^|[^A-Za-z0-9/])${c.replace(/[/-]/g, '\\$&')}($|[^A-Za-z0-9/])`);
    const hits = decks.filter((d) => re.test(d.meta.title));
    if (hits.length === 1) return hits[0];
  }
  // 3. Every word of the name in a deck's title and description together, for
  //    names of real words only (so "IT" cannot match "before it is tested").
  for (const x of names.filter((n) => n.w.every((t) => t.length >= 3))) {
    const hits = hays.filter((h) => x.w.every((t) => has(h.set, t)));
    if (hits.length && ok(x, hits)) return hits[0].d;
  }
  return null;
}

// Research shorthand in the family column, spelled out for readers.
const LABELS = { 'LF-other': 'Linux Foundation', PythonInst: 'Python Institute', 'USCG-Merchant-Mariner': 'US Coast Guard', 'Hands-on': 'Practical exams' };
export const familyLabel = (f) => LABELS[String(f).trim()] || String(f || '').replace(/\s*\([a-z][^)]*\)/g, '').trim() || 'Other';

/**
 * The public roadmap: rows marked "Build" with no released deck, each as
 * { name, family, status }, grouped by family (families A to Z, names A to Z).
 */
export function roadmap(rows, decks) {
  const released = new Set(releasedDecks(decks).map((d) => d.meta.slug));
  const out = [];
  // A family marked "(skip)" is a research note that the exam is not a target.
  for (const r of rows.filter((x) => x.status === 'Build' && !/\(skip\)/i.test(x.family))) {
    const d = deckFor(r, decks);
    if (d && released.has(d.meta.slug)) continue;
    const fam = familyLabel(r.family);
    const name = displayName(r.exam).replace(new RegExp(`^${fam.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}:\\s*`, 'i'), '');
    if (!name) continue;
    out.push({ name, family: fam, status: d ? 'In progress' : 'Planned' });
  }
  const by = new Map();
  for (const x of out) { if (!by.has(x.family)) by.set(x.family, []); by.get(x.family).push(x); }
  return [...by.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([family, exams]) => ({ family, exams: exams.sort((a, b) => a.name.localeCompare(b.name)) }));
}

export const requestURL = (name) => `${REPO}/issues/new?labels=exam-request&title=${encodeURIComponent(`Exam request: ${name}`)}`;
export const askURL = () => `${REPO}/issues/new?labels=exam-request&title=${encodeURIComponent('Exam request: ')}`;

const ROAD_STYLE = `<style>
.dx-jump{display:flex;flex-wrap:wrap;gap:6px;margin-top:22px}
.dx-jump a{font-size:14.5px;text-decoration:none;padding:3px 11px;border:1px solid var(--line-strong);border-radius:20px;background:var(--surface);color:var(--read)}
.dx-jump a:hover{border-color:var(--ink)}
.dx-road{list-style:none;padding:0;margin:0;background:var(--surface);border:1px solid var(--line);border-radius:var(--r);box-shadow:var(--e1)}
.dx-road li{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:4px 16px;padding:10px 16px;border-top:1px solid var(--line)}
.dx-road li:first-child{border-top:0}
.dx-road .nm{font-weight:700;color:var(--ink);min-width:0;overflow-wrap:anywhere}
.dx-road .st{font-family:var(--mono);font-size:12.5px;letter-spacing:.05em;text-transform:uppercase;color:var(--faint);margin-left:8px;font-weight:400}
.dx-road .st.ip{color:var(--ok)}
.dx-road a{font-size:15.5px;color:var(--gold);white-space:nowrap}
.dx-road a:hover{color:var(--accent)}
.dx-cta{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}
</style>`;

export async function build({ cfg, decks }) {
  const all = releasedDecks(decks);
  const rows = readMasterList(readFileSync('master-list.csv', 'utf8'));
  const groups = roadmap(rows, decks);
  const total = groups.reduce((a, g) => a + g.exams.length, 0);
  const inProgress = groups.reduce((a, g) => a + g.exams.filter((x) => x.status === 'In progress').length, 0);
  const url = `${cfg.origin}${cfg.base}roadmap/`;
  const id = (f) => `c-${slugify(f)}`;
  const body = `${STYLE}${ROAD_STYLE}<div class="wrap">
${crumbs(cfg, [['Roadmap', 'roadmap/']])}
<div class="hub-head"><h1>Which exams are coming next?</h1><p class="kicker">${plural(total, 'exam')} planned · ${plural(groups.length, 'category', 'categories')} · ${plural(all.length, 'deck')} published</p>
<p class="lead">${n0(total)} exams on the build list do not have a deck yet${inProgress ? `, and ${n0(inProgress)} of them ${inProgress === 1 ? 'is' : 'are'} in progress` : ''}. Need one of them, or one that is not listed? Ask for it: each request is a public GitHub issue.</p>
<div class="dx-cta"><a class="btn btn-primary" href="${esc(askURL())}">Ask for an exam that isn’t listed</a><a class="btn" href="${cfg.base}browse/">See the published decks</a></div></div>
<nav class="dx-jump" aria-label="Categories">${groups.map((g) => `<a href="#${id(g.family)}">${esc(g.family)} <span class="dx-sr">(${plural(g.exams.length, 'exam')})</span><span aria-hidden="true"> · ${n0(g.exams.length)}</span></a>`).join('')}</nav>
<div class="hub-body dx-wide">
${groups.map((g) => `<section class="dx-group" id="${id(g.family)}" aria-labelledby="${id(g.family)}-h"><h2 id="${id(g.family)}-h">${esc(g.family)}<small>${plural(g.exams.length, 'exam')}</small></h2>
<ul class="dx-road">${g.exams.map((x) => `<li><span class="nm">${esc(x.name)}<span class="st${x.status === 'In progress' ? ' ip' : ''}">${esc(x.status)}</span></span><a href="${esc(requestURL(x.name))}" aria-label="Request this exam: ${esc(x.name)}">Request this exam</a></li>`).join('')}</ul></section>`).join('\n')}
<section class="dx-group"><h2>Not on the list?</h2><p class="prose">Ask for it, with the exam’s name and the body that sets it. <a href="${esc(askURL())}">Ask for an exam that isn’t listed</a>.</p></section>
</div>
</div>
${otherWays(cfg, null)}`;
  const html = page(cfg, {
    title: `Exam Roadmap: Decks Coming Next | ${cfg.brand}`,
    description: `${n0(total)} certification exams on the build list across ${plural(groups.length, 'category', 'categories')}, each without a deck yet. Ask for the exam you need.`,
    path: 'roadmap/', body, decks: all, scripts: searchScript(cfg), count: all.reduce((a, d) => a + stats(d).cards, 0),
    graph: [{ '@type': 'WebPage', '@id': `${url}#page`, name: 'Roadmap', url, isPartOf: { '@id': `${cfg.origin}${cfg.base}#website` } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: cfg.brand, item: `${cfg.origin}${cfg.base}` }, { '@type': 'ListItem', position: 2, name: 'Roadmap', item: url }] }],
  });
  return { pages: { 'roadmap/': html }, files: {}, urls: ['roadmap/'] };
}

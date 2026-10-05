// /which-deck/: "Which deck should I start with?"
//
// Without script the page is a plain answer: every subject, its decks in
// learning order and the one to start with, each linking to its family hub.
// With script (src/assets/finder.js) three or four taps (subject, level, goal
// and, for an exam, which one) pick one deck. Every recommendation is worked
// out here at build time from the deck data alone: families, the decks each
// one builds on (prerequisiteDecks), card counts and the level words in the
// deck titles. The page carries the answers as JSON; finder.js only looks
// them up and draws them, so new decks need nothing changed here.

import { esc, page, crumbs, otherWays } from '../layout.mjs';
import { n0, plural, releasedDecks, familyGroups, shortOf, familyOf, stats, andList, titleCase, STYLE } from './families.mjs';

export const PATH = 'which-deck/';

/** Levels a learner can say they are at, and the deck levels they map to. */
export const LEVELS = [
  { id: 0, label: 'New to it', note: 'I have not studied this subject before.' },
  { id: 1, label: 'Some experience', note: 'I know the basics or work with it already.' },
  { id: 2, label: 'Going for an advanced exam', note: 'I want the hardest exam in the subject.' },
];

const ADVANCED = /\b(expert|specialist|advanced|extra|black belt|instructor)\b/i;
const ROMAN_HIGH = /\b(II|III|IV)\b/;
const ROMAN_ONE = /\bI\b(?!\/)/;
const ENTRY = /\b(fundamentals|foundations?|essentials|associate|technician|beginners?|introduction|basics)\b/i;

/**
 * A deck's level from its title words, else from its place in the family's
 * learning order: 0 entry, 1 middle, 2 advanced.
 *   depth: its step in the family order (0 = builds on nothing in the family)
 *   maxDepth: the family's last step; dependents: decks that build on it.
 */
export function deckLevel(d, { depth = 0, maxDepth = 0, dependents = 0 } = {}) {
  const t = `${d.meta.title} ${shortOf(d)}`;
  if (ROMAN_HIGH.test(t) || ADVANCED.test(t)) return 2;
  if (/\bprofessional\b/i.test(t)) return ROMAN_ONE.test(t) ? 1 : 2; // "Professional Scrum Product Owner I" is a first step
  if (ENTRY.test(t)) return 0;
  if (depth === 0 && (dependents > 0 || maxDepth === 0)) return maxDepth === 0 && dependents === 0 ? 1 : 0;
  if (depth >= 2 && depth === maxDepth) return 2;
  return 1;
}

/** "Certified Kubernetes Administrator (CKA) exam" from "Kubernetes administrator flashcards: for the Certified ...". */
export function examName(d) {
  const t = d.meta.title;
  const m = t.match(/\bflashcards:\s*(?:for\s+)?(?:the\s+)?(.+)$/i);
  return (m ? m[1] : t).trim();
}

/**
 * Everything the finder needs, from the decks alone.
 * @returns {{families: {title, slug, path, cards, steps: string[][], decks: string[]}[], decks: Object<string, {s, t, n, x, c, f, lv, dp, pre, all, dep}>}}
 *   per deck: s slug, t short title, n full title, x exam name, c cards, f family slug,
 *   lv level, dp step, pre direct prerequisites (any family), all every ancestor in
 *   learning order, dep how many decks in the family build on it (directly or not).
 */
export function finderModel(decks) {
  const all = releasedDecks(decks);
  const byslug = new Map(all.map((d) => [d.meta.slug, d]));
  const groups = familyGroups(all);
  const out = { families: [], decks: {} };
  // Every ancestor of a deck, earliest first (cycles are cut, as in learningLevels).
  const ancestors = (d, seen = new Set()) => {
    const res = [];
    for (const p of d.meta.prerequisiteDecks || []) {
      const pd = byslug.get(p);
      if (!pd || seen.has(p)) continue;
      seen.add(p);
      for (const a of ancestors(pd, seen)) if (!res.includes(a)) res.push(a);
      if (!res.includes(p)) res.push(p);
    }
    return res;
  };
  for (const g of groups) {
    const depth = new Map();
    g.levels.forEach((l, i) => l.forEach((d) => depth.set(d.meta.slug, i)));
    const maxDepth = g.levels.length - 1;
    const anc = new Map(g.decks.map((d) => [d.meta.slug, ancestors(d)]));
    for (const d of g.decks) {
      const slug = d.meta.slug;
      const dep = g.decks.filter((x) => anc.get(x.meta.slug).includes(slug)).length;
      out.decks[slug] = {
        s: slug, t: shortOf(d), n: d.meta.title, x: examName(d), c: stats(d).cards, f: g.slug,
        lv: deckLevel(d, { depth: depth.get(slug), maxDepth, dependents: dep }), dp: depth.get(slug),
        pre: (d.meta.prerequisiteDecks || []).filter((p) => byslug.has(p)), all: anc.get(slug), dep,
      };
    }
    out.families.push({ title: g.title, slug: g.slug, path: g.path, cards: g.cards, steps: g.levels.map((l) => l.map((d) => d.meta.slug)), decks: g.decks.map((d) => d.meta.slug) });
  }
  return out;
}

// Which levels to fall back to when a family has no deck at the one asked for.
const FALLBACK = { 0: [0, 1, 2], 1: [1, 2, 0], 2: [2, 1, 0] };

/** The deck to take for "learn the subject" at a level: computed, never chosen by hand. */
export function pickForLevel(model, famSlug, level) {
  const fam = model.families.find((f) => f.slug === famSlug);
  if (!fam) return null;
  const ds = fam.decks.map((s) => model.decks[s]);
  for (const lv of FALLBACK[level] ?? FALLBACK[0]) {
    const c = ds.filter((d) => d.lv === lv);
    if (!c.length) continue;
    // Entry and middle: the deck most others build on, earliest in the order.
    // Advanced: the latest in the order. Then the bigger deck, then A to Z.
    return c.sort((a, b) => b.dep - a.dep || (lv === 2 ? b.dp - a.dp : a.dp - b.dp) || b.c - a.c || a.t.localeCompare(b.t))[0].s;
  }
  return null;
}

const names = (model, slugs) => andList(slugs.map((s) => model.decks[s].t));
const otherFam = (model, s, fam) => model.decks[s].f !== fam.slug;

/**
 * One recommendation: { deck, why, route, exam }.
 *   goal: 'learn' or the slug of the exam's deck.
 *   route: the decks to take in order, ending with the exam's deck (or the
 *   recommended one when learning).
 */
export function recommend(model, famSlug, level, goal = 'learn') {
  const fam = model.families.find((f) => f.slug === famSlug);
  if (!fam) return null;
  const famName = fam.title;
  if (fam.decks.length === 1) {
    const d = model.decks[fam.decks[0]];
    const pre = d.all;
    const why = pre.length && level === 0
      ? `${d.t} is the only ${famName} deck. It builds on ${names(model, d.pre)}, so start there if the basics are new.`
      : `${d.t} is the only ${famName} deck: ${plural(d.c, 'card')}, every idea explained before it is tested.`;
    return { deck: pre.length && level === 0 ? pre[0] : d.s, why, route: [...pre, d.s], exam: null };
  }
  if (goal !== 'learn' && model.decks[goal] && model.decks[goal].f === fam.slug) {
    const x = model.decks[goal];
    const route = [...x.all, x.s];
    let deck = x.s, why;
    if (!x.pre.length) why = level === 2 ? `${x.t} is the deck for that exam, with ${plural(x.c, 'card')}. It builds on no other deck, so go straight in.` : `${x.t} is the deck for that exam and builds on no other deck, so you can start it straight away.`;
    else if (level === 0) { deck = x.all[0]; why = `${x.t} builds on ${names(model, x.pre)}. As you are new to it, start with ${model.decks[deck].t} and work through to ${x.t}.`; }
    else if (level === 1) why = `${x.t} is the deck for that exam. It builds on ${names(model, x.pre)}: skim ${x.pre.length === 1 ? 'that deck' : 'those'} first if any of it is new.`;
    else why = `${x.t} is the deck for that exam, with ${plural(x.c, 'card')}. Go straight in and use ${names(model, x.pre)} to revise the basics.`;
    return { deck, why, route, exam: x.s };
  }
  const s = pickForLevel(model, famSlug, level);
  const d = model.decks[s];
  const inFam = d.pre.filter((p) => !otherFam(model, p, fam));
  const outFam = d.pre.filter((p) => otherFam(model, p, fam));
  let why;
  if (level === 0 && d.lv !== 0 && !inFam.length) why = `${d.t} is a good first step in ${famName}: it builds on no other deck in the subject${d.dep ? ` and ${plural(d.dep, 'other deck')} build on it` : ''}.`;
  else if (d.lv === 0) why = d.dep ? `${d.t} is where ${famName} starts: ${plural(d.dep, 'other deck')} in the subject build on it.` : `${d.t} is a first step in ${famName}: it builds on no other deck in the subject.`;
  else if (d.lv === 1) why = inFam.length ? `${d.t} is the next step once you know the basics: it builds on ${names(model, inFam)}.` : `${d.t} builds on no other ${famName} deck, so you can start it straight away.`;
  else why = d.pre.length ? `${d.t} is written for an advanced exam and comes late in the order: it builds on ${names(model, d.pre)}.` : `${d.t} is written for an advanced exam, with ${plural(d.c, 'card')}.`;
  if (outFam.length && d.lv !== 2) why += ` It also draws on ${names(model, outFam)} from another subject.`;
  return { deck: s, why, route: [...d.all, s], exam: null };
}

/** Every answer the page can give, keyed "family|level|goal". */
export function answerTable(model) {
  const t = {};
  for (const f of model.families) for (const { id } of LEVELS) {
    for (const goal of ['learn', ...(f.decks.length > 1 ? f.decks : [])]) {
      const r = recommend(model, f.slug, id, goal);
      t[`${f.slug}|${id}|${goal}`] = [r.deck, r.why, r.route];
    }
  }
  return t;
}

const FX_STYLE = `<style>
.fx-band{margin-top:28px;padding:30px 0 36px}
.fx{display:grid;gap:22px;max-width:56rem}
.fx[hidden],.fx-q[hidden],.fx-opt[hidden],.fx-res[hidden]{display:none}
.fx-q{position:relative;background:var(--surface);border:1px solid var(--line);border-top:3px solid var(--margin);border-radius:var(--r);box-shadow:var(--e2);padding:16px 20px 20px}
.fx-q h3,.fx-res h2{font-size:clamp(21px,2.2vw,25px);line-height:1.25;margin:4px 0 0;outline:0}
.fx-qhead{display:flex;justify-content:space-between;align-items:baseline;gap:8px 16px;flex-wrap:wrap}
.fx-opts{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr));gap:10px;margin-top:14px}
.fx-opts.fx-wide{grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr))}
.fx-opt{display:block;width:100%;text-align:left;font:inherit;color:var(--read);background:var(--surface-2);border:1px solid var(--line-strong);border-radius:6px 6px var(--r) var(--r);border-bottom:3px solid var(--line-strong);padding:10px 14px 9px;min-height:48px;cursor:pointer;line-height:1.35}
.fx-opt b{display:inline-block;font-family:var(--serif);font-weight:600;font-size:18px;color:var(--ink)}
.fx-opt span{display:block;font-size:14.5px;color:var(--muted);margin-top:2px}
.fx-opt small{display:block;font-family:var(--mono);font-size:12px;color:var(--faint);margin-top:3px}
.fx-opt:hover{border-color:var(--ink);border-bottom-color:var(--margin);background:var(--surface)}
.fx-opt[aria-pressed="true"]{background:var(--surface);border-color:var(--ink);border-bottom-color:var(--margin);box-shadow:var(--e1)}
.fx-opt[aria-pressed="true"] b{background:var(--hl-img) 0 62%/100% .78em no-repeat;padding:0 .14em;margin:0 -.14em;-webkit-box-decoration-break:clone;box-decoration-break:clone}
.fx-done .fx-opt:not([aria-pressed="true"]){display:none}
.fx-done .fx-opts{grid-template-columns:minmax(0,auto);justify-content:start}
.fx-done .fx-opt{pointer-events:none;min-height:0;padding:6px 12px 5px}
.fx-done{padding:10px 20px 12px;box-shadow:var(--e1)}
.fx-done h3{font-size:17px;font-family:var(--sans);font-weight:400;color:var(--muted)}
.fx-done .fx-opts{margin-top:6px}
.fx-done .fx-opt span,.fx-done .fx-opt small{display:none}
.fx-done .fx-qhead .eyebrow{display:none}
.fx-done .fx-qhead{position:absolute;top:6px;right:14px}
.fx-q.fx-done + .fx-q.fx-done{margin-top:-12px}
.fx-change{font:inherit;font-size:15px;font-weight:700;color:var(--gold);background:none;border:0;padding:6px 2px;min-height:36px;cursor:pointer;text-decoration:underline;text-underline-offset:.18em}
.fx-change:hover{color:var(--accent-ink)}
.fx-q:not(.fx-done) .fx-change{display:none}
.fx-res{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:var(--r);box-shadow:var(--e3);padding:28px 24px 22px;border-top:3px solid var(--margin)}
.fx-res .fx-deck{font-family:var(--serif);font-size:clamp(28px,3.4vw,38px);line-height:1.15;margin-top:8px}
.fx-res .fx-deck a{color:var(--ink);text-decoration:none}
.fx-res .fx-deck a:hover{color:var(--accent-ink)}
.fx-res .fx-full{color:var(--muted);font-size:16px;margin-top:4px}
.fx-why{font-size:18.5px;line-height:1.55;color:var(--read);margin-top:12px;max-width:44em}
.fx-acts{display:flex;flex-wrap:wrap;align-items:center;gap:10px 12px;margin-top:18px}
.fx-res h3{font-family:var(--mono);font-weight:400;font-size:12.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--faint);margin-top:26px}
.fx-res .dx-steps a{font-weight:650}
.fx-res .dx-steps .fx-on{font-weight:700;color:var(--ink)}
.fx-res .dx-steps .fx-on .hl{color:var(--ink)}
.fx-res .fx-tag{font-family:var(--mono);font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--accent-ink);margin-left:6px;white-space:nowrap}
html[data-theme="dark"] .fx-res .fx-tag{color:var(--accent)}
.fx-res .fx-before{font-size:15.5px;color:var(--muted);margin-top:10px}
.fx-again{margin-top:18px;font-size:15.5px}
.fx-fams .fam-decks li{display:flex}
.fx-fams .fam-decks a{flex:1;min-width:0}
.fx-start{font-family:var(--mono);font-size:12px;color:var(--accent-ink)!important}
html[data-theme="dark"] .fx-start{color:var(--accent)!important}
@media(max-width:640px){
  .fx-band{padding:22px 0 26px}
  .fx-q{padding:14px 14px 16px}
  .fx-res{padding:24px 16px 18px}
  .fx-acts .btn{flex:1 1 100%;justify-content:center}
  .fx-fams{grid-template-columns:minmax(0,1fr)}
  .fx-fams .fam-decks,.fx-fams .fam-more{display:block}
  .fx-fams .fam-n span{display:inline}
  .fx-fams .fam-n i{display:inline}
}
</style>`;

function optionButton({ v, label, note = '', small = '', attrs = '' }) {
  return `<button type="button" class="fx-opt" data-v="${esc(v)}" aria-pressed="false"${attrs}><b>${esc(label)}</b>${note ? `<span>${esc(note)}</span>` : ''}${small ? `<small>${esc(small)}</small>` : ''}</button>`;
}

function question(n, id, title, opts, wide = false) {
  return `<div class="fx-q" data-q="${id}"${n > 1 ? ' hidden' : ''}>
<div class="fx-qhead"><p class="eyebrow">Question ${n}</p><button type="button" class="fx-change" data-change="${id}">Change<span class="sr-only"> answer to: ${esc(title)}</span></button></div>
<h3 id="fx-q-${id}" tabindex="-1">${esc(title)}</h3>
<div class="fx-opts${wide ? ' fx-wide' : ''}" role="group" aria-labelledby="fx-q-${id}">${opts}</div>
</div>`;
}

export async function build({ cfg, decks }) {
  const all = releasedDecks(decks);
  const model = finderModel(all);
  const fams = model.families;
  const D = model.decks;
  const cards = fams.reduce((a, f) => a + f.cards, 0);
  const url = `${cfg.origin}${cfg.base}${PATH}`;
  const multi = fams.filter((f) => f.decks.length > 1);
  const starts = (f) => f.steps[0].filter((s) => D[s].lv !== 2).length ? f.steps[0].filter((s) => D[s].lv !== 2) : f.steps[0];
  const startOf = (f) => {
    const s = pickForLevel(model, f.slug, 0);
    return s ? [s] : starts(f);
  };
  const lead = `Start with the deck the rest of your subject builds on, then take the others in order. Answer three quick questions and this page picks one of the ${plural(all.length, 'deck')} for you, from how the decks build on each other, their titles and their size.`;

  // No script: every subject, its first deck and its order, linking to its hub.
  const list = `<ul class="fams fx-fams" role="list">${fams.map((f) => {
    const first = new Set(startOf(f));
    return `<li class="fam">
<h3 class="fam-tab"><a href="${cfg.base}${f.path}">${esc(titleCase(f.title))}</a></h3>
<div class="fam-card">
<p class="fam-n"><span>${plural(f.decks.length, 'deck')}</span><i aria-hidden="true"> · </i><span>${n0(f.cards)} cards</span></p>
<ol class="fam-decks">${f.decks.map((s) => `<li><a href="${cfg.base}${esc(s)}/"><span>${esc(D[s].t)}</span><b${first.has(s) ? ' class="fx-start"' : ''}>${first.has(s) ? 'Start here' : f.steps.length > 1 ? `Step ${D[s].dp + 1}` : `${n0(D[s].c)}<span class="sr-only"> cards</span>`}</b></a></li>`).join('')}</ol>
<p class="fam-more"><a href="${cfg.base}${f.path}">Subject page<span class="sr-only">: ${esc(f.title)}</span> →</a></p>
</div></li>`;
  }).join('')}</ul>`;

  const q1 = question(1, 'fam', 'What are you studying?', fams.map((f) => optionButton({ v: f.slug, label: titleCase(f.title), small: `${plural(f.decks.length, 'deck')} · ${n0(f.cards)} cards` })).join(''));
  const q2 = question(2, 'lv', 'How much do you know already?', LEVELS.map((l) => optionButton({ v: String(l.id), label: l.label, note: l.note })).join(''));
  const q3 = question(3, 'goal', 'What do you want from it?', [
    optionButton({ v: 'exam', label: 'Pass a named exam', note: 'I have a certification in mind.' }),
    optionButton({ v: 'learn', label: 'Learn the subject', note: 'I want to understand it, exam or not.' }),
  ].join(''));
  const q4 = question(4, 'exam', 'Which exam?', multi.flatMap((f) => f.decks.map((s) => optionButton({ v: s, label: D[s].t, note: D[s].x, attrs: ` data-fam="${esc(f.slug)}"` }))).join(''), true);

  const data = { base: cfg.base, levels: LEVELS.map((l) => l.label), fams: Object.fromEntries(fams.map((f) => [f.slug, { t: titleCase(f.title), p: f.path, s: f.steps }])),
    decks: Object.fromEntries(Object.values(D).map((d) => [d.s, [d.t, d.n, d.c, d.f]])), a: answerTable(model) };

  const faq = [
    ['Which deck should I start with?', `The first deck in your subject's order: ${andList(multi.slice(0, 6).map((f) => `${D[startOf(f)[0]].t} for ${f.title}`))}${multi.length > 6 ? `, and so on for the other ${plural(multi.length - 6, 'subject')}` : ''}. The others build on it.`],
    ['How does this page choose?', 'Only from the decks themselves: which decks each one builds on, the level words in their titles (such as Fundamentals, Associate, Expert or II) and how many cards they have. Nothing you tap is sent anywhere.'],
    ['Do I have to take the decks in order?', 'No. Every deck explains its ideas before it tests them, so you can start anywhere. The order only saves you meeting an idea before the deck that teaches it.'],
  ];

  const body = `${STYLE}${FX_STYLE}<div class="wrap">
${crumbs(cfg, [['Browse', 'browse/'], ['Which deck?', PATH]])}
<div class="hub-head"><h1>Which deck should I start with?</h1><p class="kicker">${plural(fams.length, 'subject')} · ${plural(all.length, 'deck')} · ${plural(cards, 'card')}</p><p class="lead">${esc(lead)}</p></div>
</div>
<div class="bg bg-grid fx-band" id="finder-band" hidden><section class="wrap fx" id="finder" aria-label="Deck finder">
${q1}
${q2}
${q3}
${q4}
<div class="fx-res taped" id="fx-res" hidden tabindex="-1"></div>
<p class="sr-only" id="fx-live" role="status" aria-live="polite"></p>
</section></div>
<div class="wrap">
<section class="hub-body dx-wide" style="padding-top:44px" aria-labelledby="subj-h"><h2 id="subj-h">Where each subject starts</h2>
<p>Each subject lists its decks in the order they build on each other. Its page explains what each deck covers.</p>
${list}
</section>
<section id="faq" class="faq hub-body"><h2>Questions people ask</h2>${faq.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join('')}</section>
<p style="margin-top:4px;padding-bottom:30px"><a class="link" href="${cfg.base}browse/">Search every deck</a> · <a class="link" href="${cfg.base}families/">Every subject</a> · <a class="link" href="${cfg.base}roadmap/">Ask for an exam</a></p>
</div>
<script type="application/json" id="fx-data">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>
${otherWays(cfg, null)}`;

  const html = page(cfg, {
    title: `Which Flashcard Deck Should I Start With? | ${cfg.brand}`,
    description: `Three quick questions pick one of ${plural(all.length, 'free certification flashcard deck')} for you, with the order to take its subject's decks in. Worked out from how the decks build on each other.`,
    path: PATH, body, active: 'browse', decks: all, count: cards, og: 'og/browse.png',
    scripts: `<script src="${cfg.base}assets/finder.js" defer></script>`,
    graph: [
      { '@type': 'WebPage', '@id': `${url}#page`, name: 'Which deck should I start with?', url, description: lead, isPartOf: { '@id': `${cfg.origin}${cfg.base}#website` } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: cfg.brand, item: `${cfg.origin}${cfg.base}` },
        { '@type': 'ListItem', position: 2, name: 'Browse', item: `${cfg.origin}${cfg.base}browse/` },
        { '@type': 'ListItem', position: 3, name: 'Which deck?', item: url }] },
      { '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  });
  return { pages: { [PATH]: html }, files: {}, urls: [PATH] };
}

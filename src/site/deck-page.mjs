// The deck page: the entry page of this site (playbook, page-skeletons §4).
//
// The site's one question is "Will it teach me?", so the answer box asks it
// first, in the deck's own words, and answers with counts the checker has
// already proved: every term a card uses is introduced by an earlier primer.
// Every section heading is a question a learner would type, answered in the
// section's first sentence. Every card is on the page in HTML, so the page,
// not the download, is what search and answer engines read.

import { esc, page, icon, crumbs, otherWays, shareRow } from './layout.mjs';
import { siteOrgId, FOUNDER_ID } from './identity.mjs';
import { FORMATS } from '../exporters/index.mjs';
import { attribution } from '../exporters/common.mjs';
import { slugify } from '../decks.mjs';
import { deckStats, cardParts, cardHTML, NEW_PER_DAY, REVIEWS_PER_NEW } from './deck-data.mjs';
import { kindBar } from './visuals.mjs';

const kb = (bytes) => (bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`);

const n0 = (n) => Number(n).toLocaleString('en-GB');
const plural = (n, one, many = `${one}s`) => `${n0(n)} ${n === 1 ? one : many}`;
const list = (xs) => (xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`);

// Which formats go together on the page, in the order a learner looks for them.
const GROUPS = [
  ['Anki', ['apkg', 'anki-text']],
  ['Other flashcard apps', ['tsv', 'brainscape', 'mochi', 'mochi-md', 'remnote']],
  ['Note-taking apps', ['obsidian', 'logseq']],
  ['Paper', ['study-sheet', 'cards-letter', 'cards-a4']],
  ['Spreadsheets and your own tools', ['csv', 'csv-full', 'json']],
];

const SECTIONS = [
  ['path', 'The path'],
  ['try', 'Try it'],
  ['download', 'Download'],
  ['time', 'How long'],
  ['import', 'Into Anki'],
  ['method', 'How to study'],
  ['limits', 'Limits'],
  ['cards', 'Every card'],
  ['sources', 'Sources'],
  ['about', 'About'],
];

export function deckPage(cfg, deck, manifest, { decks = [] } = {}) {
  const m = deck.meta;
  const s = deckStats(deck);
  const short = m.shortTitle || m.title;
  const url = `${cfg.origin}${cfg.base}${m.slug}/`;
  const files = new Map((manifest?.files || []).map((f) => [f.format, f]));
  const apkg = files.get('apkg');
  const released = m.status === 'released';
  const assumed = m.assumedTerms || [];
  const prereq = m.prerequisites || [];
  const check = (m.checks || [])[0];

  // ── Head of the entry ────────────────────────────────────────────────────
  const facts = [
    ['Cards', `${n0(s.cards)} <small>${n0(s.core)} core</small>`],
    ['Primers', `${n0(s.primers)} <small>one per term</small>`],
    ['Topics', n0(s.topics.length)],
    ['Source', esc(m.sourceShort || s.sources[0]?.title || '')],
    ['Licence', esc(m.licence)],
    ['Checked', check ? esc(check.date) : '—'],
  ];

  const answerQ = `Will this deck teach me ${short} from zero?`;
  const answerV = prereq.length ? `Yes, once you know ${list(prereq)}.` : 'Yes.';
  const answerP = `${plural(s.primers, 'primer card')} explain all ${n0(s.terms.length)} of its terms, each before any card tests it.`;
  const answerFull = `${answerP} The build refuses a deck in which a card uses a term no earlier card has taught.${assumed.length ? ` The only words it takes as known are everyday ones: ${list(assumed)}.` : ''}`;

  const head = `
${crumbs(cfg, [[m.familyTitle || m.family, ''], [short, `${m.slug}/`]])}
<div class="entry-head">
  <div class="meta-row"><span>Deck № ${String(m.number || 1).padStart(3, '0')}</span><span class="badge ${released ? 'b-released' : 'b-draft'}">${released ? 'Released' : 'Draft'}</span><span>${esc(m.familyTitle || m.family)}</span><span>v${esc(m.version)}${m.updated ? ` · updated ${esc(m.updated)}` : ''}</span></div>
  <h1>${esc(m.title)}</h1>
  <p class="entry-stmt">${esc(m.description || '')}</p>
  <div class="answer" id="answer">
    <div class="q">${esc(answerQ)}</div>
    <div class="v">${esc(answerV)}</div>
    <p>${answerP}</p>
    ${kindBar(s.kinds, s.cards)}
    ${released ? '' : `<p class="draft-note"><span class="badge b-draft">Draft</span> Checked against its source; newcomer and expert review still to come.${(m.releaseBlockers || []).length ? ` Before release: ${(m.releaseBlockers).map(esc).join('; ')}.` : ''}</p>`}
    <div class="dl">${apkg ? `<a class="btn btn-primary" href="${esc(apkg.file)}" download>${icon('download')} Download for Anki <small>${kb(apkg.bytes)}</small></a>` : ''}<a class="btn" href="#download">All ${n0(files.size)} formats</a><a class="btn" href="#try">${icon('browser')} Try it here</a></div>
  </div>
  <dl class="facts">${facts.map(([k, v]) => `<div class="fact"><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
</div>`;

  // ── 01 The path ─────────────────────────────────────────────────────────
  const maxCards = Math.max(...s.topics.map((t) => t.cards));
  const path = `
<section class="sec" id="path" aria-labelledby="path-h"><span class="label">01 · The path</span>
<h2 id="path-h">In what order does it teach ${esc(short)}?</h2>
<p class="lead">${plural(s.topics.length, 'step')}. Each opens by explaining its terms.</p>
<ol class="path">${s.topics.map((t, i) => `<li><span class="step">${i + 1}</span><h3><a class="link" href="#t-${slugify(t.topic)}">${esc(t.topic)}</a></h3><div class="pmeta">${plural(t.cards, 'card')} · ${plural(t.primers, 'primer')}</div>${t.terms.length ? `<div class="chips">${t.terms.map((x) => `<span class="chip new">${esc(x)}</span>`).join('')}</div>` : ''}<div class="pbar" aria-hidden="true"><i style="width:${Math.round((t.cards / maxCards) * 100)}%"></i></div></li>`).join('')}</ol>
</section>`;

  // ── 02 Try it ───────────────────────────────────────────────────────────
  const studyData = s.notes.map(cardParts);
  const tryIt = `
<section class="sec" id="try" aria-labelledby="try-h"><span class="label">02 · Try it</span>
<h2 id="try-h">Can I try the cards before I download?</h2>
<p>Yes, right here. Say your answer before you turn the card.</p>
<div id="study-app" class="study" hidden></div>
<noscript><p>Trying the cards here needs JavaScript. Every card is also listed in full under “Every card”.</p></noscript>
<script type="application/json" id="study-data">${JSON.stringify(studyData).replace(/</g, '\\u003c')}</script>
</section>`;

  // ── 03 Download ─────────────────────────────────────────────────────────
  const byKey = new Map(FORMATS.map((f) => [f.key, f]));
  const row = (key) => {
    const f = byKey.get(key); const file = files.get(key);
    if (!f || !file) return '';
    const printy = f.key.startsWith('cards') || f.key === 'study-sheet';
    return `<a class="dl-tile" href="${esc(file.file)}" download title="${esc(f.note)}">${icon(printy ? 'print' : 'download')}<span class="dt-l">${esc(f.label)}</span><span class="dt-a">${esc(f.apps.join(' · '))}</span><span class="dt-s">${esc(f.suffix)} · ${kb(file.bytes)}</span></a>`;
  };
  const download = `
<section class="sec" id="download" aria-labelledby="download-h"><span class="label">03 · Download</span>
<h2 id="download-h">Which file do I need for my app?</h2>
<p>For Anki, the package. For anything else, the file named after your app. <a href="${cfg.base}formats/">Details for each app</a>.</p>
<div class="dl-tiles">${['apkg', 'tsv', 'study-sheet', 'cards-a4'].map(row).join('')}</div>
<details class="more-files"><summary>All ${n0(files.size)} files, by app</summary>
${GROUPS.map(([g, keys]) => { const rows = keys.map(row).join(''); return rows ? `<div class="dl-group"><h3>${esc(g)}</h3><div class="dl-tiles">${rows}</div></div>` : ''; }).join('')}
</details>
</section>`;

  // ── 04 How long ─────────────────────────────────────────────────────────
  const time = `
<section class="sec" id="time" aria-labelledby="time-h"><span class="label">04 · How long</span>
<h2 id="time-h">How long will it take to learn?</h2>
<p>${plural(s.days, 'day')} to see every card, at Anki’s default pace.</p>
<div class="stats3"><div class="stat"><b>${n0(NEW_PER_DAY)}</b><span>new cards a day</span></div><div class="stat"><b>${n0(s.days)}</b><span>days to see all ${n0(s.cards)}</span></div><div class="stat"><b>~${n0(NEW_PER_DAY * REVIEWS_PER_NEW)}</b><span>reviews a day after that, per the <a class="link" href="https://docs.ankiweb.net/deck-options.html">Anki manual</a></span></div></div>
<div id="planner" class="planner" data-cards="${s.cards}" data-core="${s.core}" hidden></div>
<p class="hint">${icon('bulb')} Short of time? Start with the core cards: <code>tag:priority::core</code>.</p>
</section>`;

  // ── 05 Into Anki ────────────────────────────────────────────────────────
  const importSec = `
<section class="sec" id="import" aria-labelledby="import-h"><span class="label">05 · Into Anki</span>
<h2 id="import-h">How do I import it into Anki?</h2>
<ol class="steps4">
<li><b>Open the .apkg</b><span>In Anki 23.10 or later, AnkiDroid or AnkiMobile.</span></li>
<li><b>Leave progress unticked</b><span>“Import any learning progress” stays off.</span></li>
<li><b>Keep the order</b><span>Gather order: Deck. Sort order: not random.</span></li>
<li><b>Update the same way</b><span>A new version updates your cards and keeps your progress.</span></li>
</ol>
</section>`;

  // ── 06 How to study ─────────────────────────────────────────────────────
  const method = `
<section class="sec" id="method" aria-labelledby="method-h"><span class="label">06 · How to study</span>
<h2 id="method-h">How should I study with these cards?</h2>
<div class="tips">
<div class="tip">${icon('bulb')}<b>Answer before you flip</b><span>Commit to an answer, then check.</span></div>
<div class="tip">${icon('refresh')}<b>Forgot means Again</b><span>Not Hard: Hard tells Anki you remembered.</span></div>
<div class="tip">${icon('steps')}<b>Retention around 90%</b><span>Higher makes the workload climb steeply.</span></div>
<div class="tip">${icon('calendar')}<b>Same time daily</b><span>“After breakfast, I do my reviews.”</span></div>
<div class="tip">${icon('alert')}<b>Fell behind?</b><span>Pause new cards until you catch up.</span></div>
<div class="tip">${icon('check')}<b>Exam close?</b><span>Stop new cards; drill misses and practice questions.</span></div>
</div>
</section>`;

  // ── 07 Limits ───────────────────────────────────────────────────────────
  const practice = (m.practiceLinks || []).map((l) => `<li><a href="${esc(l.url)}">${esc(l.label)}</a></li>`).join('');
  const limits = `
<section class="sec" id="limits" aria-labelledby="limits-h"><span class="label">07 · Limits</span>
<h2 id="limits-h">What can these cards not do?</h2>
<div class="callout">${icon('alert')}<div><p><strong>They cannot make you pass on their own.</strong> They build the knowledge; exam questions test applying it, so pair them with practice questions. We make no claim about pass rates.</p></div></div>
${practice ? `<h3>Practice questions</h3><ul>${practice}</ul>` : ''}
</section>`;

  // ── 08 Every card ───────────────────────────────────────────────────────
  let no = 0;
  const everyCard = `
<section class="sec" id="cards" aria-labelledby="cards-h"><span class="label">08 · Every card</span>
<h2 id="cards-h">What is on every card?</h2>
<p>All ${n0(s.cards)}, in teaching order. Open a topic to read its cards.</p>
${s.topics.map((t, ti) => {
    const tnotes = s.notes.filter((n) => n.topic === t.topic);
    return `<details class="topic" id="t-${slugify(t.topic)}"><summary>${esc(t.topic)}<small>${plural(t.cards, 'card')}</small></summary><ol class="cards">${tnotes.map((n) => {
      no = s.notes.indexOf(n) + 1;
      return `<li id="${esc(n.id)}">${cardHTML(cardParts(n), { top: `№ ${String(no).padStart(3, '0')}` })}</li>`;
    }).join('')}</ol></details>`;
  }).join('\n')}
</section>`;

  // ── 09 Sources ──────────────────────────────────────────────────────────
  const sources = `
<section class="sec" id="sources" aria-labelledby="sources-h"><span class="label">09 · Sources</span>
<h2 id="sources-h">Where does every card come from?</h2>
<p>Each card links the section of ${esc(m.sourceShort || 'the source')} it was written from. No exam questions, no paid course material.</p>
<ol class="sources">${s.sources.map((x) => `<li><div><a href="${esc(x.url)}">${esc(x.title)}</a><span class="st">${plural(x.cards, 'card')} · ${esc(x.licence || '')}</span></div></li>`).join('')}</ol>
${check ? `<div class="checked"><h3>${icon('check')} What we checked</h3><p><strong>${esc(check.date)}.</strong> ${esc(check.what)}. ${esc(check.result)}</p></div>` : ''}
</section>`;

  // ── 10 About (FAQ) ──────────────────────────────────────────────────────
  const faq = [
    ['Will it teach me from zero?', answerFull],
    ['Is this deck free?', `Yes. There is no account and no paywall. The deck is licensed ${m.licence}, so you may share and adapt it as long as you credit it and share alike.`],
    ['Is it official?', 'No. It is an independent deck, written from the openly licensed source it cites, and it is not affiliated with, sponsored, endorsed or approved by any exam body or by the source’s authors.'],
    ['Will a new version wipe my progress in Anki?', 'No. Every card keeps a permanent ID, so importing a newer version changes the cards in place and keeps their review history.'],
    ['How were the cards made?', `Cards are drafted with AI assistance, only from the source they cite. A second, independent pass checks every card against that source, and a person reviews every card before release.${released ? '' : ' This deck is still a draft, so that last review is not finished.'}`],
    ['What if a card is wrong?', 'Report it with the link below. It is checked against its source and fixed, and the fix is listed in the changelog.'],
  ];
  const about = `
<section class="sec faq" id="about" aria-labelledby="about-h"><span class="label">10 · About</span>
<h2 id="about-h">About this deck</h2>
<div class="qa">${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}${Object.keys(m.glossary || {}).length ? `<details><summary>Abbreviations used</summary><dl class="gloss">${Object.entries(m.glossary).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl></details>` : ''}<details><summary>Licence and notices</summary><p>${esc(attribution(deck))}</p></details></div>
</section>`;

  // ── Aside ───────────────────────────────────────────────────────────────
  const citeText = `${m.title}, version ${m.version}. ${cfg.brand}. ${url}. Licensed ${m.licence}.`;
  const changelog = (m.changelog || []).map((c) => `<li><span class="mono">${esc(c.version)} · ${esc(c.date)}</span><br>${esc(c.notes)}</li>`).join('');
  const aside = `
<aside class="panel" aria-label="About this deck">
  <div class="pcard"><h2>Get the deck</h2>${apkg ? `<a class="btn btn-primary" href="${esc(apkg.file)}" download>${icon('download')} Anki package <small>${kb(apkg.bytes)}</small></a>` : ''}<a class="btn" href="#download">Every other format</a><a class="btn" href="#try">${icon('browser')} Try it here</a></div>
  <div class="pcard"><h2>Cite this deck</h2><p class="cite" id="cite-text">${esc(citeText)}</p><button class="copy-btn" type="button" data-copy-from="cite-text">Copy citation</button><span class="sh-said" role="status" aria-live="polite"></span></div>
  <div class="pcard"><h2>Pass it on</h2>${shareRow({ url, title: `${m.title}: free flashcards`, text: m.description })}</div>
  <div class="pcard"><h2>Found a mistake?</h2><p>Quote the card and say what is wrong. It is checked against the source and fixed.</p><p style="margin-top:8px"><a class="link" href="${esc(m.reportURL)}">Report a card</a></p></div>
  ${changelog ? `<div class="pcard"><h2>Changelog</h2><ul>${changelog}</ul></div>` : ''}
</aside>`;

  const toc = `<nav class="toc" aria-label="On this page"><span class="label">On this page</span><ol>${SECTIONS.map(([id, l], i) => `<li><a href="#${id}"><span>${String(i + 1).padStart(2, '0')}</span>${esc(l)}</a></li>`).join('')}</ol>${check ? `<p class="toc-foot">Checked ${esc(check.date)} against ${plural(s.sources.length, 'section')} of the source.</p>` : ''}</nav>`;

  const body = `<div class="wrap-wide">
${head}
<div class="entry-grid">
${toc}
<article>
${path}${tryIt}${download}${time}${importSec}${method}${limits}${everyCard}${sources}${about}
</article>
${aside}
</div>
</div>
${otherWays(cfg)}`;

  const graph = [
    {
      '@type': 'LearningResource',
      '@id': `${url}#deck`,
      name: m.title,
      description: m.description,
      url,
      inLanguage: 'en',
      isAccessibleForFree: true,
      learningResourceType: 'Flashcards',
      educationalLevel: 'Beginner',
      license: 'https://creativecommons.org/licenses/by-sa/4.0/',
      version: m.version,
      ...(m.updated ? { dateModified: m.updated } : {}),
      publisher: { '@id': siteOrgId(cfg) },
      author: { '@id': FOUNDER_ID },
      teaches: s.terms,
      isBasedOn: s.sources.map((x) => ({ '@type': 'CreativeWork', name: x.title, url: x.url })),
      encoding: (manifest?.files || []).map((f) => ({ '@type': 'MediaObject', name: f.label, contentUrl: `${url}${f.file}`, contentSize: kb(f.bytes) })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: cfg.brand, item: `${cfg.origin}${cfg.base}` },
        { '@type': 'ListItem', position: 2, name: m.title, item: url },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [[answerQ, `${answerV} ${answerFull}`], ...faq.slice(1)].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ];

  const core = `${short} Flashcards: Free, Taught From Zero`;
  return page(cfg, {
    title: `${core} | ${cfg.brand}`.length <= 60 ? `${core} | ${cfg.brand}` : core,
    description: `Free ${short} flashcards that teach before they test: ${s.cards} sourced cards, ${s.primers} primers, for Anki, Quizlet, Brainscape, Mochi, Obsidian and print.`,
    path: `${m.slug}/`,
    body,
    graph,
    scripts: `<script src="${cfg.base}assets/study.js" defer></script>`,
    ...(released ? {} : { robots: 'noindex, follow' }), // only released decks are indexed
    count: s.cards,
    decks,
  });
}

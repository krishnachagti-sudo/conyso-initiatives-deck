// The two hubs, on the playbook's hub skeleton (page-skeletons §5):
// breadcrumb, a question H1, a count kicker, one answering sentence, sections,
// "Questions people ask", and the "Other ways in" band.
//
// Research figures on the method page are the ones in CARD-STANDARD.md, each
// checked against its paper in learning-science/. Nothing is added here that
// is not there.

import { esc, page, crumbs, otherWays, icon } from './layout.mjs';
import { FORMATS } from '../exporters/index.mjs';
import { deckStats } from './deck-data.mjs';

const n0 = (n) => Number(n).toLocaleString('en-GB');

function hub(cfg, { slug, name, h1, kicker, lead, sections, faq, title, description, decks, active }) {
  const body = `<div class="wrap">
${crumbs(cfg, [[name, `${slug}/`]])}
<div class="hub-head"><h1>${esc(h1)}</h1><p class="kicker">${esc(kicker)}</p><p class="lead">${lead}</p></div>
<div class="hub-body prose">
${sections.join('\n')}
<section id="faq" class="faq"><h2>Questions people ask</h2>${faq.map(([q, a]) => `<h3>${esc(q)}</h3><p>${a}</p>`).join('')}</section>
</div>
</div>
${otherWays(cfg, `${slug}/`)}`;
  const url = `${cfg.origin}${cfg.base}${slug}/`;
  return page(cfg, {
    title, description, path: `${slug}/`, body, active,
    decks: decks.map((d) => ({ slug: d.meta.slug, title: d.meta.shortTitle || d.meta.title })),
    count: decks.reduce((a, d) => a + d.notes.length, 0),
    graph: [
      { '@type': 'WebPage', '@id': `${url}#page`, name: h1, url, isPartOf: { '@id': `${cfg.origin}${cfg.base}#website` } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: cfg.brand, item: `${cfg.origin}${cfg.base}` }, { '@type': 'ListItem', position: 2, name, item: url }] },
      { '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })) },
    ],
  });
}

export function methodPage(cfg, decks) {
  const st = decks.map(deckStats);
  const cards = st.reduce((a, s) => a + s.cards, 0);
  const primers = st.reduce((a, s) => a + s.primers, 0);
  const applied = st.reduce((a, s) => a + s.kinds.application + s.kinds.classification, 0);
  return hub(cfg, {
    slug: 'method', name: 'How we teach', active: 'method', decks,
    title: `How These Flashcards Teach Before They Test | ${cfg.brand}`,
    description: 'Why every deck explains each idea with a primer card before testing it, cites a source on every card, and mixes facts with application. The research, and its limits.',
    h1: 'How do these decks teach?',
    kicker: `${n0(cards)} cards · ${n0(primers)} primers · ${n0(applied)} application cards`,
    lead: `Every deck explains each idea with a primer card before any card tests it, explains the answer on the back of every card, and cites where each card came from. Of the ${n0(cards)} cards published so far, ${n0(primers)} are primers and ${n0(applied)} ask you to apply an idea to a situation.`,
    sections: [
      `<section><h2>Why teach before testing?</h2>
<p>Because a card you cannot understand teaches nothing. Many shared decks jump straight to the test and assume you know the subject already.</p>
<p>Teaching the parts before the whole helps newcomers (median d = 0.46 in Mayer’s pre-training studies). So every topic opens with primer cards, one new term each, and the build refuses a deck where any card uses a term no earlier card taught.</p></section>`,
      `<section><h2>What makes a card work?</h2>
<div class="tips">
<div class="tip">${icon('refresh')}<b>Recall, spaced out</b><span>Beats rereading in classrooms (g = 0.33, Yang 2021).</span></div>
<div class="tip">${icon('bulb')}<b>A reason on every back</b><span>Feedback roughly doubles the benefit (Rowland 2014).</span></div>
<div class="tip">${icon('cards')}<b>One answer per card</b><span>No lists over three; sets split card by card.</span></div>
<div class="tip">${icon('steps')}<b>Facts, then use</b><span>Mixed practice beat facts alone (Agarwal 2019).</span></div>
<div class="tip">${icon('check')}<b>Wrong options explained</b><span>Unexplained lures can stick (Roediger &amp; Marsh 2005).</span></div>
<div class="tip">${icon('source')}<b>Every card sourced</b><span>Each links the exact section it came from.</span></div>
</div></section>`,
      `<section><h2>What does the research not show?</h2>
<div class="callout">${icon('alert')}<div><p>That premade decks match cards you make yourself: self-made cards did better (d = 0.45 on definitions, Pan 2022). Teaching first may narrow that gap; nobody has tested it, and we do not claim it.</p><p>No study has tested flashcards for a particular certification. Pair them with practice questions.</p></div></div></section>`,
      `<section id="checks"><h2>How is every card checked?</h2>
<ol class="steps4">
<li><b>The build</b><span>Refuses any card that breaks a rule: order, source, explanation.</span></li>
<li><b>A source audit</b><span>A second pass reads every card against its source.</span></li>
<li><b>A newcomer</b><span>Someone new to the subject studies the cards in order.</span></li>
<li><b>An expert</b><span>Someone qualified reviews the deck before release.</span></li>
</ol>
<p class="hint">${icon('alert')} “Draft” means the first two are done, not the last two. Drafts stay out of search results.</p></section>`,
      `<section id="ai"><h2>What part does AI play?</h2>
<p>AI drafts cards from the cited source only; the audit and people decide what ships.</p></section>`,
    ],
    faq: [
      ['Are the decks official?', 'No. They are independent, written from openly licensed sources, and not affiliated with or approved by any exam body.'],
      ['Why not just use a shared deck from AnkiWeb?', 'Use whichever teaches you. Most shared decks are one person’s notes: they rarely cite sources, rarely explain their answers, and often assume you already know the subject. These decks are built to one standard so they do none of those things.'],
      ['Can I skip the primers if I already know the basics?', 'Yes. In the browser, tick “Skip primers”. In Anki, search for <code>tag:kind::primer</code> and suspend the results.'],
      ['Can it be wrong?', 'Yes. Every card links its source so you can check it, and a reported mistake is checked against that source and fixed.'],
    ],
  });
}

const GROUP_OF = { apkg: 'anki', 'anki-text': 'anki', tsv: 'apps', brainscape: 'apps', mochi: 'apps', 'mochi-md': 'apps', remnote: 'apps', obsidian: 'notes', logseq: 'notes', 'study-sheet': 'print', 'cards-letter': 'print', 'cards-a4': 'print', csv: 'data', 'csv-full': 'data', json: 'data' };
const GROUPS = [
  ['anki', 'Anki, AnkiDroid and AnkiMobile', 'Take the Anki package. It is the only format that keeps the teaching order, carries every field and updates your cards in place when a new version comes out.'],
  ['apps', 'Quizlet, Brainscape, Mochi and RemNote', 'Each has its own file, written in the syntax its own import documentation describes.'],
  ['notes', 'Obsidian and Logseq', 'Markdown files in the card syntax of each app’s flashcard feature.'],
  ['print', 'Paper', 'A study sheet with every answer, and cards to print double-sided and cut out.'],
  ['data', 'Spreadsheets and your own tools', 'Plain CSV and JSON, with every field and the licence attribution.'],
];

export function formatsPage(cfg, decks) {
  const allApps = [...new Set(FORMATS.flatMap((f) => f.apps))].filter((a) => !['Print', 'Any PDF reader', 'Developers', 'Excel', 'Google Sheets'].includes(a));
  const NAME = { Developers: 'Your own code', Print: 'Paper', 'Any PDF reader': 'Any PDF reader' };
  const byApp = new Map();
  for (const f of FORMATS) for (const a of f.apps) { const k = NAME[a] || a; if (!byApp.has(k)) byApp.set(k, []); byApp.get(k).push(f); }
  const order = [...byApp.keys()].sort((x, y) => (x === 'Paper') - (y === 'Paper') || (x === 'Your own code') - (y === 'Your own code') || x.localeCompare(y));
  const table = `<div class="table-scroll"><table class="fmt-table"><thead><tr><th>App</th><th>Take this file</th></tr></thead><tbody>${order.map((a) => `<tr><td>${esc(a)}</td><td>${byApp.get(a).map((f) => `${esc(f.label)} <code>${esc(f.suffix)}</code>`).join('<br>')}</td></tr>`).join('')}</tbody></table></div>`;
  return hub(cfg, {
    slug: 'formats', name: 'Which file?', active: 'formats', decks,
    title: `Which Flashcard File Works With My App? | ${cfg.brand}`,
    description: `Every deck comes in ${FORMATS.length} formats: Anki, Quizlet, Brainscape, Mochi, RemNote, Obsidian, Logseq, CSV, JSON and printable PDF cards. Which file to take, and how to import it.`,
    h1: 'Which file works with my app?',
    kicker: `${FORMATS.length} formats · ${allApps.length} apps`,
    lead: `For Anki, take the <code>.apkg</code> package; for any other app, take the file named after it. Every deck is exported in ${FORMATS.length} formats from one source, so the cards are the same whichever you choose.`,
    sections: [
      `<section><h2>Every app, and its file</h2>${table}</section>`,
      ...GROUPS.map(([id, h, intro]) => `<section id="${id}"><h2>${esc(h)}</h2><p>${esc(intro)}</p>${FORMATS.filter((f) => GROUP_OF[f.key] === id).map((f) => `<h3>${esc(f.label)} <code>${esc(f.suffix)}</code></h3><p>${esc(f.note)} <em>Works with: ${esc(f.apps.join(', '))}.</em></p>`).join('')}</section>`),
    ],
    faq: [
      ['Which format keeps my progress when a deck is updated?', 'The Anki package. Every card has a permanent ID, so importing a newer version changes cards in place. RemNote adds changed cards beside the old ones, and Mochi does not document how it handles a re-import.'],
      ['Can I use these decks in Quizlet?', 'Yes, through Quizlet’s paste import: take the tab-separated file, choose Tab between term and definition and New line between rows. Line breaks inside a card become “ / ”.'],
      ['Why does the teaching order matter in Anki?', 'Because primer cards must come before the cards that use their terms. Leave New card gather order on Deck and use a non-random sort order, or Anki may show you a question before the card that explains it.'],
      ['How do I print double-sided cards?', 'Print the alignment test pages first, on the same printer, with double-sided printing flipped on the long edge. If the test lines up, print the rest.'],
    ],
  });
}

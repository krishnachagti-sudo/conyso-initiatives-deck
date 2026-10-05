// The deck page: the entry page of this site (playbook, page-skeletons §4).
//
// The site's one question is "Will it teach me?", so the answer box asks it
// first, in the deck's own words, and answers with counts the checker has
// already proved: every term a card uses is introduced by an earlier primer.
// Every section heading is a question a learner would type, answered in the
// section's first sentence. Every card is on the page in HTML, so the page,
// not the download, is what search and answer engines read.

import { esc, page, icon, crumbs, otherWays, shareRow, familyPath, fit } from './layout.mjs';
import { hasGlossary, glossaryTerms, glossaryPath } from './pages/glossary.mjs';
import { siteOrgId, FOUNDER_ID } from './identity.mjs';
import { FORMATS } from '../exporters/index.mjs';
import { attribution } from '../exporters/common.mjs';
import { slugify } from '../decks.mjs';
import { deckStats, cardParts, cardHTML, cardAnchor, cardReportURL, NEW_PER_DAY, REVIEWS_PER_NEW } from './deck-data.mjs';
import { kindBar, qrSVG } from './visuals.mjs';
import { LASTMOD_TOKEN } from '../../build/lastmod.mjs';

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

/** The answer box, in words: the one question the page answers first. Shared with the Markdown twin. */
export function deckAnswer(deck, s = deckStats(deck)) {
  const m = deck.meta;
  const short = m.shortTitle || m.title;
  const prereq = m.prerequisites || [];
  const assumed = m.assumedTerms || [];
  const answerQ = `Will this deck teach me ${short} from zero?`;
  const answerV = prereq.length ? `Yes, once you know ${list(prereq)}.` : 'Yes.';
  const answerP = `${plural(s.primers, 'primer card')} explain all ${n0(s.terms.length)} of its terms, each before any card tests it.`;
  const answerFull = `${answerP} The build refuses a deck in which a card uses a term no earlier card has taught.${assumed.length ? ` The only words it takes as known are everyday ones: ${list(assumed)}.` : ''}`;
  return { answerQ, answerV, answerP, answerFull };
}

/** The "About this deck" questions and answers. Shared with the Markdown twin. */
export function deckFaq(deck, answerFull = deckAnswer(deck).answerFull) {
  const m = deck.meta;
  return [
    ['Will it teach me from zero?', answerFull],
    ['Is this deck free?', `Yes. There is no account and no paywall. The deck is licensed ${m.licence}, so you may share and adapt it as long as you credit it and share alike.`],
    ['Is it official?', 'No. It is an independent deck, written from the openly licensed source it cites, and it is not affiliated with, sponsored, endorsed or approved by any exam body or by the source’s authors.'],
    ['Will a new version wipe my progress in Anki?', 'No. Every card keeps a permanent ID, so importing a newer version changes the cards in place and keeps their review history.'],
    ['How were the cards made?', `Cards are drafted with AI assistance, only from the source they cite. A second, independent pass checks every card against that source, and every fix is recorded in the changelog. ${(m.openReviews || m.releaseBlockers || []).some((r) => /expert/.test(r)) ? 'A review by people who hold the certification is still to come, so if a card looks wrong, report it.' : 'If a card looks wrong, report it.'}`],
    ['What if a card is wrong?', 'Report it with the link below. It is checked against its source and fixed, and the fix is listed in the changelog.'],
  ];
}

/** The study widget's cards, written beside the deck page as study.json. */
export function studyJson(deck) {
  return JSON.stringify(deckStats(deck).notes.map(cardParts));
}

/**
 * "Get it on your phone": a QR code for the Anki package and the steps for
 * each app. Without script the three sets of steps are listed one after
 * another; common.js turns them into tabs and opens the reader's own.
 */
export function phoneBlock(fileURL, apkg, short) {
  const panel = (os, label, app, steps) => `<section class="ph-panel" data-tab-panel data-os="${os}" data-label="${label.split(' ')[0]}" aria-label="${label}"><h4>${label}: ${app}</h4><ol>${steps.map((x) => `<li>${x}</li>`).join('')}</ol></section>`;
  const get = `<a class="link" href="${esc(apkg.file)}" download>Download for Anki</a>`;
  return `<div class="phone" id="phone">
<figure class="ph-qr">${qrSVG(fileURL, { label: `QR code: the ${short} Anki package` })}<figcaption>Point your phone’s camera here to download the ${esc(short)} deck.</figcaption></figure>
<div class="ph-how"><h3>${icon('phone')} Get it on your phone</h3>
<div class="ph-tabs" data-tabs>
${panel('ios', 'iPhone and iPad', 'AnkiMobile', ['Install <b>AnkiMobile Flashcards</b> from the App Store. It is the official Anki app for iPhone and iPad, and it is paid.', `Scan the code with the Camera app, or open this page on the phone and tap ${get}.`, 'Open the download from Safari’s downloads or the Files app, tap Share and choose AnkiMobile.'])}
${panel('android', 'Android', 'AnkiDroid', ['Install <b>AnkiDroid</b> from Google Play. It is free and open source.', `Scan the code with the camera, or open this page on the phone and tap ${get}.`, 'Open the downloaded file and choose AnkiDroid. Or, in AnkiDroid, open the menu, choose Import and pick the file.'])}
${panel('desktop', 'Computer', 'Anki', ['Install <b>Anki</b> from <a class="link" href="https://apps.ankiweb.net/">apps.ankiweb.net</a>. It is free for Windows, Mac and Linux.', `${get} (.apkg, ${kb(apkg.bytes)}).`, 'Double-click the file, or in Anki choose File, then Import.'])}
</div>
<p class="ph-sync">Studying on two devices? A free AnkiWeb account keeps them in step. Import settings are under <a class="link" href="#import">Into Anki</a>.</p>
</div>
</div>`;
}

export function deckPage(cfg, deck, manifest, { decks = [] } = {}) {
  const m = deck.meta;
  const s = deckStats(deck);
  const short = m.shortTitle || m.title;
  const url = `${cfg.origin}${cfg.base}${m.slug}/`;
  const files = new Map((manifest?.files || []).map((f) => [f.format, f]));
  const apkg = files.get('apkg');
  const released = m.status === 'released';
  // The latest check: decks gain new checks after release (last by date, then by position).
  const check = (m.checks || []).map((c, i) => ({ c, i })).sort((x, y) => String(x.c.date || '').localeCompare(String(y.c.date || '')) || x.i - y.i).pop()?.c;

  // ── Head of the entry ────────────────────────────────────────────────────
  const facts = [
    ['Cards', `${n0(s.cards)} <small>${n0(s.core)} core</small>`],
    ['Primers', `${n0(s.primers)} <small>one per term</small>`],
    ['Topics', n0(s.topics.length)],
    ['Checked', check ? esc(check.date) : '—'],
    ['Source', esc(m.sourceShort || s.sources[0]?.title || ''), 'wide'],
  ];
  const family = m.familyTitle || m.family;
  const famHub = released && family; // a family has a hub only once it has a released deck
  const glossary = hasGlossary(deck) ? { href: `${cfg.base}${glossaryPath(deck)}`, n: glossaryTerms(deck).length } : null;
  const others = apkg ? 'Every other format' : `All ${plural(files.size, 'format')}`;

  const { answerQ, answerV, answerP, answerFull } = deckAnswer(deck, s);

  const head = `
<div class="entry-head">
${crumbs(cfg, [...(famHub ? [[family, familyPath(family)]] : []), [short, `${m.slug}/`]])}
  <div class="meta-row"><span>Deck № ${String(m.number || 1).padStart(3, '0')}</span><span class="badge ${released ? 'b-released' : 'b-draft'}">${released ? 'Released' : 'Draft'}</span>${famHub ? `<a href="${cfg.base}${esc(familyPath(family))}">${esc(family)}</a>` : family ? `<span>${esc(family)}</span>` : ''}<span>v${esc(m.version)}${m.updated ? ` · updated ${esc(m.updated)}` : ''}</span><span>${esc(m.licence)}</span></div>
  <h1>${esc(m.title)}</h1>
  <p class="entry-stmt">${esc(m.description || '')}</p>
  <div class="answer taped" id="answer">
    <div class="q">${esc(answerQ)}</div>
    <div class="v">${esc(answerV).replace(/^Yes\b/, '<span class="hl">Yes</span>')}</div>
    <p>${answerP}</p>
    ${kindBar(s.kinds, s.cards)}
    <div class="dl">${apkg ? `<a class="btn btn-primary" href="${esc(apkg.file)}" download>${icon('download')} Download for Anki <small>.apkg · ${kb(apkg.bytes)}</small></a>` : ''}<a class="btn" href="#try">${icon('browser')} Try it here</a><button class="btn btn-ghost save-b" type="button" data-save-deck="${esc(m.slug)}" data-title="${esc(short)}" aria-pressed="false" hidden>${icon('bookmark')}<span>Save to shelf</span></button><a class="dl-more" href="#download">${others} →</a><span class="due-chip" data-due="${esc(m.slug)}"></span></div>
    ${released ? ((m.openReviews || []).length ? `<p class="footnote">Every card has been checked against its source by an independent audit. Still to come: ${(m.openReviews).map(esc).join('; ')}.</p>` : '') : `<p class="footnote"><span class="badge b-draft">Draft</span> Checked against its source; newcomer and expert review still to come.${(m.releaseBlockers || []).length ? ` Before release: ${(m.releaseBlockers).map(esc).join('; ')}.` : ''}</p>`}
  </div>
  <dl class="facts">${facts.map(([k, v, w]) => `<div class="fact${w ? ` ${w}` : ''}"><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
  ${glossary ? `<p class="facts-more"><a class="link" href="${glossary.href}">Glossary: ${plural(glossary.n, 'term')} →</a></p>` : ''}
</div>`;

  // ── 01 The path ─────────────────────────────────────────────────────────
  const maxCards = Math.max(...s.topics.map((t) => t.cards));
  const path = `
<section class="sec" id="path" aria-labelledby="path-h"><span class="label">01 · The path</span>
<h2 id="path-h">In what order does it teach ${esc(short)}?</h2>
<p class="lead">${plural(s.topics.length, 'step')}. Each opens by explaining its terms.</p>
<ol class="path">${s.topics.map((t, i) => { const ts = slugify(t.topic); return `<li data-topic="${ts}"><span class="step">${i + 1}</span><h3><a class="link" href="#t-${ts}">${esc(t.topic)}</a></h3><div class="pmeta">${plural(t.cards, 'card')} · ${plural(t.primers, 'primer')}<span class="p-prog" data-topic-progress></span></div>${t.terms.length ? `<div class="chips">${t.terms.map((x) => `<span class="chip new">${esc(x)}</span>`).join('')}</div>` : ''}<div class="pfoot"><div class="pbar" aria-hidden="true" style="width:${Math.max(8, Math.round((t.cards / maxCards) * 100))}%"><i></i></div><a class="p-study" href="?topic=${ts}#try">${icon('play')} Study these<span class="sr-only">: ${esc(t.topic)}</span></a></div></li>`; }).join('')}</ol>
</section>`;

  // ── 02 Try it ───────────────────────────────────────────────────────────
  const studyData = s.notes.map(cardParts);
  const tryIt = `
<section class="sec" id="try" aria-labelledby="try-h"><span class="label">02 · Try it</span>
<h2 id="try-h">Can I try the cards before I download?</h2>
<p>Yes, right here. Say your answer before you turn the card.</p>
<div id="study-app" class="study" hidden></div>
<noscript><p>Trying the cards here needs JavaScript. Every card is also listed in full under “Every card”.</p></noscript>
<div id="study-data" data-src="${cfg.base}${esc(m.slug)}/study.json" hidden></div>
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
${apkg ? phoneBlock(`${url}${apkg.file}`, apkg, short) : ''}
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
      return `<li id="${cardAnchor(n.id)}"><i id="${esc(n.id)}"></i>${cardHTML(cardParts(n), { top: `№ ${String(no).padStart(3, '0')}` })}<p class="c-tools"><a href="#${cardAnchor(n.id)}">Link to card</a><a href="${esc(cardReportURL(m.reportURL, n.id))}" rel="nofollow">Report card</a></p></li>`;
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
  const faq = deckFaq(deck, answerFull);
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
  <div class="pcard pc-get"><h2>Get the deck</h2>${apkg ? `<a class="btn btn-primary" href="${esc(apkg.file)}" download>${icon('download')} Anki package <small>${kb(apkg.bytes)}</small></a>` : ''}<a class="btn" href="#try">${icon('browser')} Try it here</a><a class="dl-more" href="#download">${others} →</a></div>
  <div class="pcard"><h2>Cite this deck</h2><p class="cite" id="cite-text">${esc(citeText)}</p><button class="copy-btn" type="button" data-copy-from="cite-text">Copy citation</button><span class="sh-said" role="status" aria-live="polite"></span></div>
  <div class="pcard"><h2>Pass it on</h2>${shareRow({ url, title: `${m.title}: free flashcards`, text: m.description })}</div>
  <div class="pcard"><h2>Found a mistake?</h2><p>Quote the card and say what is wrong. It is checked against the source and fixed.</p><p class="pc-more"><a class="link" href="${esc(m.reportURL)}">Report a card</a></p></div>
  ${changelog ? `<div class="pcard"><h2>Changelog</h2><ul>${changelog}</ul></div>` : ''}
</aside>`;

  const toc = `<nav class="toc" aria-label="On this page"><span class="label">On this page</span><ol>${SECTIONS.map(([id, l], i) => `<li><a href="#${id}"><span>${String(i + 1).padStart(2, '0')}</span>${esc(l)}</a></li>`).join('')}${glossary ? `<li><a class="toc-out" href="${glossary.href}"><span>→</span>Glossary</a></li>` : ''}</ol>${check ? `<p class="toc-foot">Checked ${esc(check.date)} against ${plural(s.sources.length, 'section')} of the source.</p>` : ''}</nav>`;

  // Phones: the two main actions stay in reach at the foot of the screen.
  const actbar = `<div class="actbar" data-actbar>${apkg ? `<a class="btn btn-primary" href="${esc(apkg.file)}" download>${icon('download')} Download for Anki</a>` : `<a class="btn btn-primary" href="#download">${icon('download')} Download</a>`}<a class="btn" href="#try">${icon('browser')} Try it</a></div>`;

  const body = `<div class="wrap">
<div class="entry-grid" data-deck="${esc(m.slug)}" data-deck-title="${esc(short)}">
${head}
${toc}
<article>
${path}${tryIt}${download}${time}${importSec}${method}${limits}${everyCard}${sources}${about}
</article>
${aside}
</div>
</div>
${otherWays(cfg)}
${actbar}`;

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
      // A released page: the day its content last changed (build/lastmod.mjs).
      // A draft is not in the sitemap or the manifest, so it keeps the deck's date.
      ...(released ? { dateModified: LASTMOD_TOKEN } : m.updated ? { dateModified: m.updated } : {}),
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
        ...(famHub ? [{ '@type': 'ListItem', position: 2, name: family, item: `${cfg.origin}${cfg.base}${familyPath(family)}` }] : []),
        { '@type': 'ListItem', position: famHub ? 3 : 2, name: m.title, item: url },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [[answerQ, `${answerV} ${answerFull}`], ...faq.slice(1)].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ];

  const core = `${short} Flashcards: Free, Taught From Zero`;
  return page(cfg, {
    title: fit(60, `${core} | ${cfg.brand}`, core, `${short} Flashcards, Free | ${cfg.brand}`, `${short} Flashcards | ${cfg.brand}`, `${short} Flashcards`),
    description: fit(158,
      `Free ${short} flashcards that teach before they test: ${n0(s.cards)} sourced cards, ${n0(s.primers)} primers, for Anki, Quizlet, Brainscape, Mochi, Obsidian and print.`,
      `Free ${short} flashcards that teach before they test: ${n0(s.cards)} sourced cards, ${n0(s.primers)} primers, for Anki, Quizlet and print.`,
      `Free ${short} flashcards that teach before they test: ${n0(s.cards)} sourced cards, for Anki, Quizlet and print.`,
      `Free ${short} flashcards: ${n0(s.cards)} sourced cards that teach before they test.`),
    path: `${m.slug}/`,
    og: `og/${m.slug}.png`,
    body,
    graph,
    scripts: `<script src="${cfg.base}assets/study.js" defer></script>`,
    ...(released ? {} : { robots: 'noindex, follow' }), // only released decks are indexed
    count: s.cards,
    decks,
  });
}

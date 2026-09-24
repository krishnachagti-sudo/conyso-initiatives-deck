// The deck page (CARD-STANDARD.md §8): the deck is half the product and this
// page is the other half. Section order follows §8. Every card is readable
// here in HTML, so the page, not the download, is what search and answer
// engines index.

import { esc, page } from './layout.mjs';
import { siteOrgId, FOUNDER_ID } from './identity.mjs';
import { FORMATS } from '../exporters/index.mjs';
import { twoSided, inOrder, attribution } from '../exporters/common.mjs';
import { slugify } from '../decks.mjs';

const kb = (bytes) => (bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`);
const paras = (s) => esc(s).split('\n\n').map((p) => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');

/**
 * @param {object} cfg site.config.json
 * @param {object} deck a loaded deck
 * @param {{files: {format: string, file: string, bytes: number}[]}} manifest from the export step
 */
export function deckPage(cfg, deck, manifest) {
  const m = deck.meta;
  const notes = inOrder(deck);
  const core = notes.filter((n) => n.priority === 'core').length;
  const url = `${cfg.origin}${cfg.base}${m.slug}/`;
  const byFormat = new Map((manifest?.files || []).map((f) => [f.format, f]));

  const downloads = FORMATS.filter((f) => byFormat.has(f.key)).map((f) => {
    const file = byFormat.get(f.key);
    return `<li><a href="${esc(file.file)}" download>${esc(f.label)}</a> <span class="size">${kb(file.bytes)}</span><br><span class="apps">${esc(f.apps.join(' · '))}</span><br><span class="note">${esc(f.note)}</span></li>`;
  }).join('\n');

  const topics = deck.topics.map((t) => {
    const cards = inOrder({ notes: t.notes }).map((n) => {
      const c = twoSided(n, { withContext: false, sep: '\n\n' });
      return `<li class="card k-${esc(n.kind)}" id="${esc(n.id)}"><div class="q">${paras(c.front)}</div><div class="a">${paras(c.back)}</div><div class="kind">${esc(n.kind)}${n.priority === 'core' ? ' · core' : ''}</div></li>`;
    }).join('\n');
    return `<section class="topic" id="${slugify(t.topic)}"><h3>${esc(t.topic)}</h3><ol class="cards">${cards}</ol></section>`;
  }).join('\n');

  const studyData = notes.map((n) => {
    const c = twoSided(n, { withContext: true, sep: '\n\n' });
    return { id: n.id, kind: n.kind, core: n.priority === 'core', front: c.front, back: c.back };
  });

  const start = m.startHere || {};
  const practice = (m.practiceLinks || []).map((l) => `<li><a href="${esc(l.url)}">${esc(l.label)}</a></li>`).join('');
  const changelog = (m.changelog || []).map((c) => `<li><strong>${esc(c.version)}</strong> (${esc(c.date)}): ${esc(c.notes)}</li>`).join('');
  const sources = [...new Map(notes.map((n) => [n.sourceURL, n.source])).entries()]
    .map(([u, s]) => `<li><a href="${esc(u)}">${esc(s)}</a></li>`).join('');

  const body = `
<nav class="crumbs" aria-label="Breadcrumb"><a href="${cfg.base}">All decks</a> › <span aria-current="page">${esc(m.title)}</span></nav>
<article class="deck">
<h1>${esc(m.title)}</h1>
${m.status === 'released' ? '' : `<p class="status" role="note"><strong>Draft.</strong> This deck has not finished review. Cards may still change.</p>`}
<p class="kicker">${notes.length} cards · ${core} core · version ${esc(m.version)}${m.updated ? ` · updated ${esc(m.updated)}` : ''}</p>
<p class="lede">${esc(m.description || '')}</p>

<section id="start-here"><h2>Start here</h2>
${start.what ? `<p><strong>What it is.</strong> ${esc(start.what)}</p>` : ''}
${start.problem ? `<p><strong>What problem it solves.</strong> ${esc(start.problem)}</p>` : ''}
${start.scenario ? `<p><strong>A worked example.</strong> ${esc(start.scenario)}</p>` : ''}
<p><strong>What you need first.</strong> ${(m.prerequisites || []).length ? esc(m.prerequisites.join(', ')) : 'Nothing: every term is introduced by a primer card before any card tests it.'}${(m.assumedTerms || []).length ? ` The only words used without a card of their own are everyday ones: ${esc(m.assumedTerms.join(', '))}.` : ''}</p>
</section>

<section id="study"><h2>Study in your browser</h2>
<p>Flip through every card in teaching order, no app or account needed. This is for reading and first learning; for spaced repetition, download the deck into an app below.</p>
<div id="study-app" class="study" hidden></div>
<noscript><p>The study mode needs JavaScript. Every card is also listed in full below.</p></noscript>
<script type="application/json" id="study-data">${JSON.stringify(studyData).replace(/</g, '\\u003c')}</script>
</section>

<section id="download"><h2>Download</h2>
<p>One deck, every format. The Anki package keeps everything and updates in place; the other formats carry the same cards in each app’s own syntax.</p>
<ul class="downloads">${downloads}</ul>
</section>

<section id="can-and-cannot"><h2>What these cards can and cannot do</h2>
<p>Pulling an answer out of memory, spaced over days, is one of the best-studied ways to remember facts. These cards cover the knowledge an exam assumes you have.</p>
<p>They do not teach you to answer scenario questions on their own, and knowing your cards is not a readiness test. Pair them with practice questions. No study has tested flashcards for this exam specifically, and we do not claim a pass rate.</p>
${practice ? `<p><strong>Practice questions:</strong></p><ul>${practice}</ul>` : ''}
<p>When you miss a practice question, find the card behind it below, or add one.</p>
</section>

<section id="import"><h2>How to import into Anki</h2>
<ol>
<li>Open the <code>.apkg</code> file in Anki (desktop 23.10 or later).</li>
<li>Leave “Import any learning progress” unticked.</li>
<li>Keep New card gather order on <strong>Deck</strong> and a non-random sort order, and Insertion order on <strong>Sequential</strong>, or the teaching order is lost.</li>
<li>To update later, import the new version the same way. Your cards update in place and keep their progress.</li>
</ol>
</section>

<section id="settings"><h2>Settings and workload</h2>
<p>Use FSRS with desired retention around 0.90. Above that, the workload rises steeply. When you forget, press <strong>Again</strong>, never Hard.</p>
<div id="planner" class="planner" data-cards="${notes.length}" data-core="${core}" hidden></div>
<p>As a rule of thumb from the <a href="https://docs.ankiweb.net/deck-options.html">Anki manual</a>, 20 new cards a day leads to about 200 reviews a day. If that is too much, study the core cards only (tag <code>priority::core</code>) rather than raising limits.</p>
</section>

<section id="how-to"><h2>Five things that make it work</h2>
<ol>
<li>Say the answer before you flip.</li>
<li>Forgot means Again.</li>
<li>Keep desired retention around 90%.</li>
<li>Pick a daily cue and a minimum: “After breakfast, I do my reviews.”</li>
<li>Expect it to feel harder than rereading. That is how it works.</li>
</ol>
<p>Habits take weeks to months to form, and missing a day does not undo them.</p>
</section>

<section id="behind"><h2>If you fall behind</h2>
<p>You do not have to start over. Stop new cards until you are caught up, cap your daily reviews, and sort reviews by how overdue they are, or put the overdue cards in a filtered deck.</p>
</section>

<section id="exam"><h2>Before and after the exam</h2>
<p>Start four to eight weeks out if you can, and review daily. Stop adding new cards in the last stretch, and use the final days for your weak cards and timed practice questions.</p>
<p>After you pass, keep the deck at zero new cards and a low review cap. Knowledge fades within a couple of years without use, and this keeps it for the job and for recertification.</p>
</section>

<section id="cards"><h2>Every card</h2>
<p>All ${notes.length} cards in teaching order. Primer cards introduce each idea before anything tests it.</p>
${topics}
</section>

<section id="made"><h2>How these cards were made</h2>
<p>Cards are drafted with AI assistance, only from the public sources cited on each card. A second, independent pass checks every card against its source, and a person reviews every card before release. No card is made from, or checked against, exam content.</p>
<p><a href="${esc(m.reportURL)}">Report a problem with a card.</a></p>
</section>

<section id="sources"><h2>Sources</h2><ul>${sources}</ul></section>

${changelog ? `<section id="changelog"><h2>Changelog</h2><ul>${changelog}</ul></section>` : ''}

<section id="licence"><h2>Licence and notices</h2>
<p>${esc(attribution(deck))}</p>
</section>
</article>`;

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
      license: 'https://creativecommons.org/licenses/by-sa/4.0/',
      version: m.version,
      ...(m.updated ? { dateModified: m.updated } : {}),
      publisher: { '@id': siteOrgId(cfg) },
      author: { '@id': FOUNDER_ID },
      teaches: [...new Set(notes.filter((n) => n.kind === 'primer').flatMap((n) => n.introduces || []))],
      encoding: (manifest?.files || []).map((f) => ({ '@type': 'MediaObject', name: f.label, contentUrl: `${url}${f.file}`, contentSize: kb(f.bytes) })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: cfg.brand, item: `${cfg.origin}${cfg.base}` },
        { '@type': 'ListItem', position: 2, name: m.title, item: url },
      ],
    },
  ];

  return page(cfg, {
    title: `${m.title}: Free Flashcards`,
    description: `${notes.length} free, sourced flashcards${m.description ? `: ${m.description}` : ''}. Anki, CSV, Markdown and PDF.`,
    path: `${m.slug}/`,
    body,
    graph,
    scripts: `<script src="${cfg.base}assets/study.js" defer></script>`,
    // Only released decks are indexed: drafts and fixtures are reachable but not searchable.
    ...(m.status === 'released' ? {} : { robots: 'noindex, follow' }),
  });
}

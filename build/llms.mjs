// llms.txt and llms-full.txt (llmstxt.org), pure, no I/O. Forked in spirit
// from the Law Tome's build/llms.mjs.
//
// llms.txt is the map: what the site is, the licence, the machine-readable
// surfaces, the ways in (hubs, families, glossaries) and one line per deck.
// llms-full.txt is the corpus as plain text, so an answer engine can ground
// on it without fetching every page: per released deck its title, URL,
// licence, description, prerequisites, topics in teaching order and every
// term its primer cards teach, with the definition the card gives.
//
// Every figure is counted from the decks; every definition is the card's own
// answer, word for word (glossaryTerms in src/site/pages/glossary.mjs).

import { deckStats } from '../src/site/deck-data.mjs';
import { glossaryTerms, hasGlossary, glossaryPath } from '../src/site/pages/glossary.mjs';
import { familyGroups, titleCase } from '../src/site/pages/families.mjs';

/** llms-full.txt above this size drops the definitions and keeps the terms. */
export const FULL_LIMIT = 5 * 1024 * 1024;

const n0 = (n) => Number(n).toLocaleString('en-GB');
const oneLine = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();
const releasedOf = (decks) => decks.filter((d) => d.meta.status === 'released' && !d.meta.personal);

export const INTRO = 'Free flashcard decks for certification exams, all built to one standard from the research on how people learn, by Conyso. Every card cites a public source, every deck teaches each idea before it tests it, and every deck downloads for Anki, Quizlet, Brainscape, Mochi, RemNote, Obsidian, Logseq, spreadsheets and paper. Decks are licensed CC BY-SA 4.0.';

/** The site's hub pages, in the order a reader would want them: [path, label, what it is]. */
export const HUB_PAGES = [
  ['browse/', 'All decks', 'every deck, grouped by subject, with search and filters'],
  ['families/', 'Subjects', 'every family of related exams, each with its decks and the order to take them in'],
  ['new/', 'New decks', 'the decks added most recently, week by week (also as feed.xml)'],
  ['daily/', 'The daily ten', 'ten cards a day from across the decks, the same ten for everyone'],
  ['roadmap/', 'Roadmap', 'the exams planned next, and how to ask for one'],
  ['method/', 'The science', 'the learning research behind every deck, and its limits'],
  ['formats/', 'Which file for my app?', 'what each download is for: Anki, Quizlet, Brainscape, Mochi, RemNote, Obsidian, Logseq, paper'],
];

function licence(root, brand) {
  return [
    '## Licence and citation',
    '',
    'Decks licensed CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/): you may share and adapt them, including commercially, if you credit them and share alike.',
    `Cite a deck as: <Deck title>, version <version>. ${brand}. ${root}<slug>/. Licensed CC BY-SA 4.0.`,
    'The decks are independent: not affiliated with, endorsed or approved by any exam body.',
    '',
  ];
}

/**
 * llms.txt.
 * @param {object} cfg site config ({ origin, base, brand })
 * @param {object[]} decks loaded decks; only released ones are listed
 */
export function llmsIndex(cfg, decks) {
  const root = `${cfg.origin}${cfg.base}`;
  const listed = releasedOf(decks);
  const cards = listed.reduce((a, d) => a + d.notes.length, 0);
  const out = [`# ${cfg.brand}`, '', `> ${INTRO}`, ''];
  out.push(`${n0(listed.length)} decks, ${n0(cards)} cards. Every page has a Markdown twin at <page>index.md (for example ${root}index.md).`, '');
  out.push(...licence(root, cfg.brand));
  out.push('## Machine-readable', '');
  out.push(`- ${root}llms-full.txt: every deck with its topics in teaching order and every term its primer cards teach, with definitions.`);
  out.push(`- ${root}sitemap.xml: every indexable URL, with the date each last changed.`);
  out.push(`- ${root}feed.xml: Atom feed of new decks.`);
  out.push(`- ${root}search-index.json: every deck with its topics and terms, as JSON.`);
  out.push('');
  out.push('## Ways in', '');
  for (const [p, l, what] of HUB_PAGES) out.push(`- [${l}](${root}${p}): ${what}.`);
  out.push('');
  const groups = familyGroups(listed);
  if (groups.length) {
    out.push('## Subjects', '');
    for (const g of groups) out.push(`- [${titleCase(g.title)} flashcards](${root}${g.path}): ${n0(g.decks.length)} ${g.decks.length === 1 ? 'deck' : 'decks'}, ${n0(g.cards)} cards.`);
    out.push('');
  }
  out.push('## Decks', '');
  out.push(listed.map((d) => `- [${oneLine(d.meta.title)}](${root}${d.meta.slug}/): ${n0(d.notes.length)} cards. ${oneLine(d.meta.description)}`.trim()).join('\n') || '- The first decks are in preparation.');
  out.push('');
  const glossaries = listed.filter(hasGlossary);
  if (glossaries.length) {
    out.push('## Glossaries', '');
    for (const d of glossaries) out.push(`- [${oneLine(d.meta.shortTitle || d.meta.title)} glossary](${root}${glossaryPath(d)}): ${n0(glossaryTerms(d).length)} terms with definitions.`);
    out.push('');
  }
  return out.join('\n');
}

/**
 * llms-full.txt: the full corpus. Over FULL_LIMIT bytes it is rebuilt with
 * terms only (no definitions), so it stays a size a crawler will fetch.
 * @returns {string}
 */
export function llmsFull(cfg, decks, { limit = FULL_LIMIT } = {}) {
  const full = render(cfg, decks, true);
  return Buffer.byteLength(full) <= limit ? full : render(cfg, decks, false);
}

function render(cfg, decks, definitions) {
  const root = `${cfg.origin}${cfg.base}`;
  const listed = releasedOf(decks);
  const cards = listed.reduce((a, d) => a + d.notes.length, 0);
  const out = [`# ${cfg.brand}: full corpus`, '', `> ${INTRO}`, ''];
  out.push(`${n0(listed.length)} decks, ${n0(cards)} cards. For each deck: its address, licence, description, what it builds on, its topics in the order it teaches them, and ${definitions ? 'every term its primer cards teach, with the definition the card gives' : 'every term its primer cards teach (the definitions are on each deck page and its Markdown twin)'}. A primer card explains one term before any card tests it.`, '');
  out.push(`The map of the site is ${root}llms.txt. Every page has a Markdown twin at <page>index.md.`, '');
  out.push(...licence(root, cfg.brand));
  for (const d of listed) {
    const m = d.meta;
    const s = deckStats(d);
    const terms = glossaryTerms(d);
    out.push('---', '', `## ${oneLine(m.title)}`, '');
    out.push(`URL: ${root}${m.slug}/`);
    out.push(`Licence: ${oneLine(m.licence)}`);
    out.push(`Cards: ${n0(s.cards)} (${n0(s.primers)} primers, ${n0(s.core)} core) · Topics: ${n0(s.topics.length)} · Version: ${oneLine(m.version)}`);
    if (m.familyTitle || m.family) out.push(`Subject: ${oneLine(m.familyTitle || m.family)}`);
    if ((m.prerequisites || []).length) out.push(`Builds on: ${m.prerequisites.map(oneLine).join('; ')}`);
    if (hasGlossary(d)) out.push(`Glossary: ${root}${glossaryPath(d)}`);
    if (m.description) out.push('', oneLine(m.description));
    out.push('', 'Topics, in teaching order:');
    s.topics.forEach((t, i) => out.push(`${i + 1}. ${oneLine(t.topic)} (${n0(t.cards)} cards)`));
    if (terms.length) {
      out.push('', `Terms (${n0(terms.length)}):`);
      for (const x of terms) out.push(definitions ? `- ${oneLine(x.term)}: ${oneLine(x.definition)}` : `- ${oneLine(x.term)}`);
    }
    out.push('');
  }
  return out.join('\n');
}

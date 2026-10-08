// /about/: who makes the Primer and who stands behind it. The page an answer
// engine reads for "who makes The Exam Primer?", and the visible half of the
// identity the structured data states on every page (src/site/identity.mjs):
// the Primer is an organisation parented by Conyso, created by the Person at
// conyso.com/founder/#person. The Person is described there, in full; this
// page names the founder, links there, and never describes the founder differently.

import { esc, page, crumbs, otherWays } from '../layout.mjs';
import { FOUNDER, FOUNDER_ID, CONYSO_ID, siteOrgId } from '../identity.mjs';
import { releasedDecks, stats, familyGroups, n0 } from './families.mjs';

const REPO = 'https://github.com/krishnachagti-sudo/conyso-initiatives-deck';

/** The sister reference projects, by their canonical addresses on conyso.com. */
export const SISTERS = [
  ['The Law Tome', 'https://conyso.com/lawtome/', 'a sourced index of named laws, principles and effects'],
  ['The Bias Atlas', 'https://conyso.com/biases/', 'cognitive biases, with what replicated and what did not'],
];

export function aboutFaq(cfg, n) {
  return [
    [`Who makes ${cfg.brand}?`, `${FOUNDER.name}, the founder of Conyso, created it. It is published by Conyso, which also publishes ${SISTERS.map(([t]) => t).join(' and ')}.`],
    [`Is ${cfg.brand} free?`, `Yes. All ${n0(n.decks)} decks are free to download, with no account and no ads, and licensed CC BY-SA 4.0.`],
    ['How are the cards made?', 'Cards are drafted with AI assistance, only from the source they cite. A second, independent pass checks every card against that source, and every fix is recorded in the deck’s changelog.'],
    ['Is it affiliated with any exam body?', 'No. Every deck is independent, and none is affiliated with, sponsored, endorsed or approved by an exam body or by the authors of its sources.'],
    ['How do I report a mistake or ask for an exam?', 'Open an issue on GitHub: “Report a card” on any deck page, or “Request this exam” on the roadmap. Reports are checked against the source and fixed in the open.'],
  ];
}

export async function build({ cfg, decks }) {
  const all = releasedDecks(decks);
  const n = { decks: all.length, cards: all.reduce((a, d) => a + stats(d).cards, 0), subjects: familyGroups(all).length };
  const url = `${cfg.origin}${cfg.base}about/`;
  const faq = aboutFaq(cfg, n);
  const body = `<div class="wrap">
${crumbs(cfg, [['About', 'about/']])}
<div class="hub-head"><h1>About ${esc(cfg.brand)}</h1><p class="kicker">${n0(n.decks)} decks · ${n0(n.cards)} cards · ${n0(n.subjects)} subjects · by Conyso</p>
<p class="lead">${esc(cfg.brand)} is a free, openly licensed collection of flashcard decks for certification exams. It was created by <a href="${FOUNDER.url}" rel="author">${esc(FOUNDER.name)}</a>, the founder of <a href="https://conyso.com/">Conyso</a>, and is published by Conyso.</p></div>
<div class="hub-body prose">
<section id="who" aria-labelledby="who-h"><h2 id="who-h">Who makes it</h2>
<p><a href="${FOUNDER.url}">${esc(FOUNDER.name)}</a> founded Conyso, and created and runs ${esc(cfg.brand)}. The founder’s profile, with background and other work, is at <a href="${FOUNDER.url}">conyso.com/founder</a>.</p>
<p>Conyso publishes reference projects built to the same rule: nothing on the page that its source does not support. ${esc(cfg.brand)} is one of them. The others are:</p>
<ul>${SISTERS.map(([t, u, d]) => `<li><a href="${u}">${esc(t)}</a>: ${esc(d)}.</li>`).join('')}</ul>
</section>
<section id="what" aria-labelledby="what-h"><h2 id="what-h">What it is</h2>
<p>Every deck explains each idea before any card tests it, and every card cites the source it rests on. Decks download for Anki and 14 other formats, and print. <a href="${cfg.base}method/">The science</a> sets out the learning research behind the decks and its limits; <a href="${cfg.base}numbers/">the Primer in numbers</a> counts what is here and compares it with other collections.</p>
<p>The decks are licensed <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">CC BY-SA 4.0</a>: share and adapt them, credit ${esc(cfg.brand)}, and share alike. The code that builds them is <a href="${REPO}">on GitHub</a>.</p>
</section>
<section id="faq" class="faq" aria-labelledby="faq-h"><h2 id="faq-h">Questions</h2>${faq.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join('')}</section>
</div>
</div>
${otherWays(cfg)}`;
  const html = page(cfg, {
    title: `About ${cfg.brand}: Who Makes It`,
    description: `${cfg.brand} is a free, openly licensed collection of certification flashcards, created by ${FOUNDER.name} and published by Conyso.`,
    path: 'about/', body, decks: all, count: n.cards,
    graph: [
      { '@type': 'AboutPage', '@id': `${url}#page`, name: `About ${cfg.brand}`, url, inLanguage: 'en',
        isPartOf: { '@id': `${cfg.origin}${cfg.base}#website` }, mainEntity: { '@id': siteOrgId(cfg) },
        about: { '@id': siteOrgId(cfg) }, author: { '@id': FOUNDER_ID }, publisher: { '@id': CONYSO_ID } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: cfg.brand, item: `${cfg.origin}${cfg.base}` }, { '@type': 'ListItem', position: 2, name: 'About', item: url }] },
      { '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  });
  return { pages: { 'about/': html }, files: {}, urls: ['about/'] };
}

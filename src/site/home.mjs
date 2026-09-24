// The home page: every published deck, grouped by family.

import { esc, page } from './layout.mjs';

export function homePage(cfg, decks) {
  const byFamily = new Map();
  for (const d of decks) {
    const f = d.meta.familyTitle || d.meta.family;
    if (!byFamily.has(f)) byFamily.set(f, []);
    byFamily.get(f).push(d);
  }
  const total = decks.reduce((s, d) => s + d.notes.length, 0);
  const groups = [...byFamily.entries()].map(([f, ds]) => `<section><h2>${esc(f)}</h2><ul class="deck-list">${ds.map((d) =>
    `<li><a href="${cfg.base}${esc(d.meta.slug)}/">${esc(d.meta.title)}</a> <span class="count">${d.notes.length} cards${d.meta.status === 'released' ? '' : ' · draft'}</span><br><span class="desc">${esc(d.meta.description || '')}</span></li>`).join('')}</ul></section>`).join('\n');
  const body = `<h1>Free flashcard decks for certification exams</h1>
<p class="kicker">${decks.length} deck${decks.length === 1 ? '' : 's'} · ${total} cards</p>
<p class="lede">Every card is written from public sources and cites them. Every deck teaches each idea before it tests it, and downloads for Anki, Quizlet, Brainscape, Mochi, RemNote, Obsidian, Logseq, spreadsheets and paper.</p>
${groups || '<p>The first decks are in preparation.</p>'}`;
  return page(cfg, {
    title: `${cfg.brand}: Free, Sourced Flashcards for Certification Exams`,
    description: 'Free, standardised flashcard decks for certification exams. Every card sourced, every idea taught before it is tested. Anki, CSV, Markdown and PDF.',
    path: '',
    body,
    graph: [{ '@type': 'WebSite', '@id': `${cfg.origin}${cfg.base}#website`, name: cfg.brand, url: `${cfg.origin}${cfg.base}`, publisher: { '@id': `${cfg.origin}${cfg.base}#organization` } }],
  });
}

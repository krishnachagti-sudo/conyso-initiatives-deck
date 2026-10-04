// Share images, robots.txt, the manifest, the not-found page and the glossaries.
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { loadDeck } from '../src/decks.mjs';
import { robotsTxt, webManifest, notFoundPage, ogJobs, drawImages, pythonWithPillow, CRAWLERS } from '../src/site/pages/seo.mjs';
import { glossaryTerms, glossaryPage, glossaryTitle, glossaryDescription, hasGlossary, build as buildGlossaries, MIN_TERMS } from '../src/site/pages/glossary.mjs';

const cfg = { base: '/primer/', origin: 'https://conyso.com', brand: 'The Exam Primer' };
const graph = (html) => JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];

/** The fixture deck, released, with enough primers for a glossary. */
function deck({ extra = 3, status = 'released' } = {}) {
  const d = loadDeck('test/fixtures/decks/example');
  d.meta.status = status;
  const base = d.notes.find((n) => n.kind === 'primer');
  for (let i = 0; i < extra; i++) {
    const n = { ...base, id: `example.extra-${i}`, order: 9000 + i, introduces: [`zeta term ${i}`], back: `Definition number ${i}.`, topic: 'Assembly' };
    d.notes.push(n);
    d.topics.find((t) => t.topic === 'Assembly').notes.push(n);
  }
  return d;
}

test('robots.txt: everyone allowed, AI crawlers named, the sitemap absolute', () => {
  const r = robotsTxt(cfg);
  assert.match(r, /^User-agent: \*\nAllow: \/$/m);
  for (const c of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'CCBot']) assert.ok(CRAWLERS.includes(c) && r.includes(`User-agent: ${c}\n`), c);
  assert.match(r, /^Sitemap: https:\/\/conyso\.com\/primer\/sitemap\.xml$/m);
  assert.doesNotMatch(r, /Disallow/);
  for (const line of r.split('\n')) assert.match(line, /^(#.*|User-agent: \S+|Allow: \/|Sitemap: https:\/\/\S+|)$/, `valid line: ${line}`);
});

test('site.webmanifest: valid JSON, scoped to the site, with a 512px icon', () => {
  const m = JSON.parse(webManifest(cfg));
  assert.equal(m.name, 'The Exam Primer');
  assert.equal(m.start_url, '/primer/');
  assert.equal(m.scope, '/primer/');
  assert.ok(m.icons.some((i) => i.sizes === '512x512' && i.type === 'image/png' && i.src === '/primer/icon-512.png'));
  for (const i of m.icons) assert.ok(i.src.startsWith('/primer/'));
});

test('404 page: noindex, a search form that works without script, ways onward', () => {
  const html = notFoundPage(cfg, [deck()]);
  assert.match(html, /<meta name="robots" content="noindex, follow">/);
  assert.match(html, /<form data-site-search[^>]*action="\/primer\/browse\/" method="get">/);
  assert.match(html, /<label for="nf-q">[^<]+<\/label>\s*<input id="nf-q" name="q"/);
  assert.match(html, /href="\/primer\/browse\/"/);
  assert.match(html, /href="\/primer\/daily\/"/);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
});

test('share images: one per page type and per deck, counts from the decks', () => {
  const d = deck();
  const jobs = ogJobs(cfg, [d, deck({ status: 'draft' })]);
  assert.deepEqual(jobs.slice(0, 3).map((j) => j.file), ['og/home.png', 'og/browse.png', 'og/daily.png']);
  const own = jobs.find((j) => j.file === 'og/example.png');
  const primers = d.notes.filter((n) => n.kind === 'primer').length;
  assert.equal(own.meta, `${d.notes.length} cards · ${primers} primers · free`);
  assert.equal(own.title, d.meta.shortTitle || d.meta.title);
  assert.match(jobs[0].meta, new RegExp(`^1 deck · ${d.notes.length} cards`), 'drafts are not counted on the home image');
  assert.equal(own.host, 'conyso.com/primer');
});

test('share images: drawn at 1200×630, the icon at 512×512', { skip: !pythonWithPillow() && 'Pillow is not installed' }, () => {
  const out = mkdtempSync(join(tmpdir(), 'og-'));
  try {
    const jobs = ogJobs(cfg, [deck()]);
    drawImages(out, jobs);
    const size = (f) => { const b = readFileSync(join(out, f)); assert.equal(b.toString('latin1', 1, 4), 'PNG'); return [b.readUInt32BE(16), b.readUInt32BE(20)]; };
    for (const j of jobs) assert.deepEqual(size(j.file), [1200, 630], j.file);
    assert.deepEqual(size('icon-512.png'), [512, 512]);
    assert.deepEqual(size('apple-touch-icon.png'), [180, 180]);
  } finally { rmSync(out, { recursive: true, force: true }); }
});

test('glossary: every introduced term once, with its primer’s back, in teaching order', () => {
  const d = deck();
  const terms = glossaryTerms(d);
  const expected = d.notes.filter((n) => n.kind === 'primer').sort((a, b) => a.order - b.order).flatMap((n) => n.introduces);
  assert.deepEqual(terms.map((t) => t.term), expected);
  assert.equal(terms.find((t) => t.term === 'zeta term 1').definition, 'Definition number 1.');
  assert.equal(new Set(terms.map((t) => t.id)).size, terms.length, 'ids are unique');
});

test('glossary: only released decks with enough terms get a page', async () => {
  assert.ok(hasGlossary(deck()));
  assert.ok(!hasGlossary(deck({ extra: MIN_TERMS - 4 })), 'too few terms');
  assert.ok(!hasGlossary(deck({ status: 'draft' })), 'drafts have none');
  const res = await buildGlossaries({ cfg, decks: [deck(), deck({ status: 'draft' })] });
  assert.deepEqual(res.urls, ['example/glossary/']);
  assert.deepEqual(Object.keys(res.pages), ['example/glossary/']);
});

test('glossary page: one H1, terms by topic, A–Z links, links back, DefinedTermSet', () => {
  const d = deck();
  const html = glossaryPage(cfg, d, { decks: [d] });
  const terms = glossaryTerms(d);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
  assert.match(html, new RegExp(`<h1>[^<]+ glossary: ${terms.length} terms explained</h1>`));
  assert.match(html, /<link rel="canonical" href="https:\/\/conyso\.com\/primer\/example\/glossary\/">/);
  for (const t of terms) {
    assert.match(html, new RegExp(`<div class="gl-term" id="${t.id}"><dt>${t.term}</dt>`));
    assert.ok(html.includes(`href="/primer/example/#${t.noteId}"`), `${t.term} links to its card`);
  }
  assert.ok(html.indexOf('id="t-widgets"') < html.indexOf('id="t-assembly"'), 'topics in teaching order');
  for (const l of new Set(terms.map((t) => t.letter))) assert.match(html, new RegExp(`href="#az-${l.toLowerCase()}"[^>]*>${l}</a>[\\s\\S]*<h3 id="az-${l.toLowerCase()}">`));
  const g = graph(html);
  const set = g.find((x) => x['@type'] === 'DefinedTermSet');
  assert.equal(set.hasDefinedTerm.length, terms.length);
  assert.deepEqual(set.hasDefinedTerm.map((x) => x.name), terms.map((t) => t.term));
  assert.ok(set.hasDefinedTerm.every((x) => x.inDefinedTermSet['@id'] === set['@id'] && x.description));
  assert.ok(g.some((x) => x['@type'] === 'BreadcrumbList' && x.itemListElement.length === 4));
});

test('glossary title fits a results page', () => {
  assert.equal(glossaryTitle(cfg, 'PSM II', 30), 'PSM II Glossary: 30 Terms Explained | The Exam Primer');
  assert.equal(glossaryTitle(cfg, 'Aviation Mechanic Powerplant', 424), 'Aviation Mechanic Powerplant Glossary: 424 Terms Explained');
  assert.ok(glossaryTitle(cfg, 'A very long certification name indeed, really', 999).length <= 60);
});

test('glossary description is never cut short', () => {
  assert.match(glossaryDescription('PSM II', 30, ['a', 'b', 'c', 'd']), /: a, b, c and more\.$/);
  const long = glossaryDescription('Aviation Mechanic Powerplant', 424, ['a very long term name '.repeat(4), 'b', 'c']);
  assert.ok(long.length <= 158 && long.endsWith('.'));
});

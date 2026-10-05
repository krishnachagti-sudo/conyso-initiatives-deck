// Answer-engine surfaces: Markdown twins, llms.txt and llms-full.txt, honest
// lastmod, IndexNow, and the preflight checks that guard them.
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';

import { loadDeck } from '../src/decks.mjs';
import { deckMarkdown, glossaryMarkdown, htmlToMarkdown, pageMarkdown } from '../src/site/markdown.mjs';
import { glossaryTerms } from '../src/site/pages/glossary.mjs';
import { page, withMarkdownLink } from '../src/site/layout.mjs';
import { LASTMOD_TOKEN, pageHash, resolve, stamp } from '../build/lastmod.mjs';
import { llmsIndex, llmsFull } from '../build/llms.mjs';
import { validKey, lastBuildDate, changedUrls, payload, batches, submit, MAX_URLS } from '../build/indexnow.mjs';
import { preflight } from '../build/preflight.mjs';

const cfg = { base: '/primer/', origin: 'https://conyso.com', brand: 'The Exam Primer' };
const released = () => { const d = loadDeck('test/fixtures/decks/example'); d.meta.status = 'released'; return d; };

// ── Markdown twins ───────────────────────────────────────────────────────────

test('deck twin: the answer first, then the topics in order with every primer term and its definition', () => {
  const d = released();
  const md = deckMarkdown(cfg, d, { files: [{ format: 'csv', label: 'CSV, front and back', file: 'example-0.1.0.csv', bytes: 2048 }] });
  const lines = md.split('\n');
  assert.equal(lines[0], `# ${d.meta.title}`);
  const answer = md.indexOf('Will this deck teach me');
  assert.ok(answer > 0 && answer < md.indexOf('## '), 'the answer comes before the first section');
  const topics = [...md.matchAll(/^### \d+\. (.+)$/gm)].map((m) => m[1]);
  assert.ok(topics.length >= 1);
  for (const t of glossaryTerms(d)) assert.ok(md.includes(`**${t.term}:** ${t.definition.replace(/\s+/g, ' ').trim()}`), `term ${t.term} with its definition`);
  assert.match(md, /\[CSV, front and back\]\(https:\/\/conyso\.com\/primer\/example\/example-0\.1\.0\.csv\)/);
  assert.match(md, /^Source: https:\/\/conyso\.com\/primer\/example\/ · /m);
  for (const m of md.matchAll(/\]\(<?([^)>]+)>?\)/g)) assert.match(m[1], /^https?:\/\//, `link ${m[1]} is absolute`);
  assert.doesNotMatch(md, /—/, 'no em dashes');
});

test('glossary twin: every term with its definition and a link to its card', () => {
  const d = released();
  const md = glossaryMarkdown(cfg, d);
  const terms = glossaryTerms(d);
  assert.match(md, new RegExp(`^# .+ glossary: ${terms.length} terms? explained$`, 'm'));
  for (const t of terms) assert.ok(md.includes(`**${t.term}:**`));
  assert.match(md, /\(\[card\]\(https:\/\/conyso\.com\/primer\/example\/#/);
});

test('HTML to Markdown: headings, lists, links made absolute, tables; interface dropped', () => {
  const html = `<nav class="crumbs"><a href="/primer/">Home</a></nav><div class="hub-head"><h1>Which file?</h1><p class="lead">For Anki, take the <code>.apkg</code>. <a href="../browse/">All decks</a>.</p></div>
<form><input name="q"><button>Search</button></form><svg aria-hidden="true"><use href="#i"/></svg>
<ul><li><a href="/primer/cka/">CKA<small>Kubernetes</small></a></li><li>Two &amp; three</li></ul>
<table><tr><th>App</th><th>File</th></tr><tr><td>Anki</td><td>.apkg</td></tr></table>
<section class="ways wrap"><h2>Other ways</h2></section><div hidden>secret</div><script>var x = "<h2>no</h2>";</script>`;
  const md = htmlToMarkdown(html, 'https://conyso.com/primer/formats/');
  assert.match(md, /^# Which file\?$/m);
  assert.match(md, /For Anki, take the `\.apkg`\. \[All decks\]\(https:\/\/conyso\.com\/primer\/browse\/\)\./);
  assert.match(md, /^- \[CKA \(Kubernetes\)\]\(https:\/\/conyso\.com\/primer\/cka\/\)$/m);
  assert.match(md, /^- Two & three$/m);
  assert.match(md, /^\| App \| File \|\n\| --- \| --- \|\n\| Anki \| \.apkg \|$/m);
  for (const gone of ['Home', 'Search', 'Other ways', 'secret', 'no']) assert.doesNotMatch(md, new RegExp(`\\b${gone}\\b`));
});

test('page twin: H1, then the page description as the answer', () => {
  const html = page(cfg, { title: 'T', description: 'The one-line answer.', path: 'x/', body: '<p class="kicker">3 decks</p><h1>Heading</h1><p>Body.</p>' });
  const md = pageMarkdown(cfg, html, 'https://conyso.com/primer/x/');
  assert.match(md, /^# Heading\n\n> The one-line answer\.\n\n3 decks\n\nBody\./);
});

test('the twin link: added after the canonical once, and never on a noindex page', () => {
  const html = page(cfg, { title: 'T', description: 'D', path: 'x/', body: '' });
  const once = withMarkdownLink(html, 'https://conyso.com/primer/x/index.md');
  assert.match(once, /<link rel="canonical" href="https:\/\/conyso\.com\/primer\/x\/">\n<link rel="alternate" type="text\/markdown" href="https:\/\/conyso\.com\/primer\/x\/index\.md">/);
  assert.equal(withMarkdownLink(once, 'https://conyso.com/primer/x/index.md'), once);
  assert.match(page(cfg, { title: 'T', description: 'D', path: 'x/', body: '', markdown: true }), /type="text\/markdown" href="https:\/\/conyso\.com\/primer\/x\/index\.md"/);
  assert.doesNotMatch(page(cfg, { title: 'T', description: 'D', path: 'x/', body: '', markdown: true, robots: 'noindex, follow' }), /text\/markdown/);
});

// ── llms.txt and llms-full.txt ───────────────────────────────────────────────

test('llms.txt lists the hub pages, the subjects, the decks and the glossaries', () => {
  const d = released();
  const txt = llmsIndex(cfg, [d]);
  for (const p of ['browse/', 'families/', 'new/', 'daily/', 'roadmap/', 'method/', 'formats/', 'llms-full.txt', 'sitemap.xml', `${d.meta.slug}/`]) assert.ok(txt.includes(`https://conyso.com/primer/${p}`), p);
  assert.match(txt, /## Subjects\n\n- \[.+ flashcards\]\(https:\/\/conyso\.com\/primer\/families\//);
});

test('llms-full.txt: per deck its URL, licence, prerequisites, topics in order and every term with its definition', () => {
  const d = released();
  d.meta.prerequisites = ['the Widgets deck'];
  const txt = llmsFull(cfg, [d, loadDeck('test/fixtures/decks/example')]);
  assert.equal(txt.match(/^## /gm).length, 2, 'the licence block and one deck: unreleased decks are left out');
  assert.match(txt, /^URL: https:\/\/conyso\.com\/primer\/example\/$/m);
  assert.match(txt, /^Licence: CC BY-SA 4\.0$/m);
  assert.match(txt, /^Builds on: the Widgets deck$/m);
  assert.match(txt, new RegExp(`^Cards: ${d.notes.length} `, 'm'));
  assert.match(txt, /^1\. .+ \(\d+ cards\)$/m);
  for (const t of glossaryTerms(d)) assert.ok(txt.includes(`- ${t.term}: ${t.definition.replace(/\s+/g, ' ').trim()}`));
  assert.ok(Buffer.byteLength(txt) < 5 * 1024 * 1024);
  const small = llmsFull(cfg, [d], { limit: 200 });
  assert.ok(!small.includes(glossaryTerms(d)[0].definition.slice(0, 30)), 'over the limit, the definitions go');
  assert.ok(small.includes(`- ${glossaryTerms(d)[0].term}\n`), 'and the terms stay');
});

// ── lastmod ──────────────────────────────────────────────────────────────────

test('lastmod: a page hashes without its date, and the same wherever it is hosted', () => {
  const at = (pre) => `<meta content="${LASTMOD_TOKEN}"><link rel="canonical" href="${pre}x/"><a href="https://x.com/share?u=${encodeURIComponent(`${pre}x/`)}">s</a>`;
  assert.equal(pageHash(at('https://conyso.com/primer/'), ['https://conyso.com/primer/', '/primer/']), pageHash(at('https://y.github.io/primer/'), ['https://y.github.io/primer/', '/primer/']));
  assert.notEqual(pageHash('<p>a</p>'), pageHash('<p>b</p>'));
  assert.equal(stamp(`${LASTMOD_TOKEN} ${LASTMOD_TOKEN}`, '2026-10-05'), '2026-10-05 2026-10-05');
});

test('lastmod: a date moves only when the page does; new pages are today; a bad manifest is not fatal', () => {
  const pages = { '': '<p>home</p>', 'a/': '<p>a</p>' };
  const first = resolve(pages, null, '2026-10-01');
  assert.deepEqual(first.dates, { '': '2026-10-01', 'a/': '2026-10-01' });
  const again = resolve(pages, first.manifest, '2026-10-05');
  assert.deepEqual(again.dates, first.dates);
  assert.deepEqual(again.manifest, first.manifest, 'building twice gives identical hashes and dates');
  assert.deepEqual(again.changed, []);
  const edit = resolve({ ...pages, 'a/': '<p>a, edited</p>', 'b/': '<p>b</p>' }, first.manifest, '2026-10-05');
  assert.deepEqual(edit.dates, { '': '2026-10-01', 'a/': '2026-10-05', 'b/': '2026-10-05' });
  assert.deepEqual(Object.keys(resolve(pages, { pages: 'junk' }, '2026-10-05').dates), ['', 'a/']);
});

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));

test('build: twins beside indexable pages, honest lastmod, stable across builds, preflight clean', () => {
  const tmp = mkdtempSync(join(tmpdir(), 'geo-'));
  const lm = join(tmp, 'lastmod.json');
  const build = (out) => execFileSync(process.execPath, ['build/build.mjs', '--fixtures', '--decks=example', '--only=csv', `--out=${out}`, `--lastmod=${lm}`], { stdio: 'pipe' });
  build(join(tmp, 'a'));
  const m1 = readFileSync(lm, 'utf8');
  build(join(tmp, 'b'));
  assert.equal(readFileSync(lm, 'utf8'), m1, 'a second build leaves every hash and date as it was');
  const a = join(tmp, 'a'); const b = join(tmp, 'b');
  for (const f of walk(a).filter((x) => /\.(html|md|xml|txt)$/.test(x))) {
    assert.equal(readFileSync(join(b, relative(a, f)), 'utf8'), readFileSync(f, 'utf8'), `${relative(a, f)} is the same in both builds`);
  }
  const manifest = JSON.parse(m1);
  const sitemap = readFileSync(join(a, 'sitemap.xml'), 'utf8');
  for (const [p, { date }] of Object.entries(manifest.pages)) {
    assert.ok(sitemap.includes(`<loc>https://conyso.com/primer/${p}</loc><lastmod>${date}</lastmod>`), `sitemap dates ${p || '(home)'}`);
    const html = readFileSync(join(a, p, 'index.html'), 'utf8');
    assert.ok(html.includes(`<link rel="alternate" type="text/markdown" href="https://conyso.com/primer/${p}index.md">`), `${p || '(home)'} advertises its twin`);
    assert.ok(existsSync(join(a, p, 'index.md')), `${p || '(home)'} has its twin`);
  }
  // The fixture deck is not released: noindex, so no twin and no sitemap entry.
  assert.ok(!existsSync(join(a, 'example', 'index.md')));
  assert.doesNotMatch(readFileSync(join(a, 'example', 'index.html'), 'utf8'), /text\/markdown|@@LASTMOD@@/);
  assert.ok(!existsSync(join(a, '404.md')));
  // An old date survives a rebuild while the page is unchanged.
  const old = { ...manifest, pages: Object.fromEntries(Object.entries(manifest.pages).map(([p, v]) => [p, { ...v, date: '2026-01-02' }])) };
  old.pages['method/'].hash = 'changed';
  writeFileSync(lm, JSON.stringify(old));
  build(join(tmp, 'c'));
  const dated = JSON.parse(readFileSync(lm, 'utf8')).pages;
  assert.equal(dated[''].date, '2026-01-02');
  assert.equal(dated['method/'].date, new Date().toISOString().slice(0, 10));
  assert.match(readFileSync(join(tmp, 'c', 'sitemap.xml'), 'utf8'), /<loc>https:\/\/conyso\.com\/primer\/<\/loc><lastmod>2026-01-02<\/lastmod>/);
  assert.deepEqual(preflight(join(tmp, 'c'), cfg), []);
});

// ── IndexNow ─────────────────────────────────────────────────────────────────

test('IndexNow: only the pages that changed in the last build, with the key file at the host root', () => {
  const KEY = '1fad8697495a79c8bc03db90a16f1d52';
  const manifest = { v: 1, pages: { '': { date: '2026-10-05' }, 'cka/': { date: '2026-09-01' }, 'psm-ii/': { date: '2026-10-05' } } };
  assert.equal(lastBuildDate(manifest), '2026-10-05');
  assert.equal(lastBuildDate(null), '');
  const urls = changedUrls(manifest, lastBuildDate(manifest), 'https://conyso.com/primer/');
  assert.deepEqual(urls, ['https://conyso.com/primer/', 'https://conyso.com/primer/psm-ii/']);
  assert.deepEqual(payload('https://conyso.com/primer/', KEY, urls), {
    host: 'conyso.com', key: KEY, keyLocation: `https://conyso.com/${KEY}.txt`, urlList: urls,
  });
  assert.ok(validKey(KEY) && !validKey('nothex!') && !validKey(undefined));
  assert.deepEqual(batches(Array.from({ length: MAX_URLS + 1 }, (_, i) => i)).map((b) => b.length), [MAX_URLS, 1]);
});

test('IndexNow: submit posts the payload, and never throws', async () => {
  const KEY = '1fad8697495a79c8bc03db90a16f1d52';
  const sent = [];
  const ok = await submit('https://conyso.com/primer/', KEY, ['https://conyso.com/primer/'], async (url, init) => { sent.push([url, JSON.parse(init.body)]); return { status: 202 }; });
  assert.equal(ok.ok, true);
  assert.equal(sent[0][0], 'https://api.indexnow.org/IndexNow');
  assert.equal(sent[0][1].keyLocation, `https://conyso.com/${KEY}.txt`);
  const down = await submit('https://conyso.com/primer/', KEY, ['https://conyso.com/primer/'], async () => { throw new Error('offline'); });
  assert.equal(down.ok, false);
  assert.deepEqual(await submit('https://conyso.com/primer/', KEY, [], async () => { throw new Error('not called'); }), { ok: true, reason: 'nothing changed', sent: 0 });
});

// ── preflight ────────────────────────────────────────────────────────────────

test('preflight: a missing twin, a leaked token and an undated sitemap URL fail; a 404 needs no canonical', () => {
  const dist = mkdtempSync(join(tmpdir(), 'pf-'));
  mkdirSync(join(dist, 'x'));
  writeFileSync(join(dist, 'x', 'index.html'), withMarkdownLink('<link rel="canonical" href="https://conyso.com/primer/x/"><script type="application/ld+json">{"dateModified":"@@LASTMOD@@"}</script>', 'https://conyso.com/primer/x/index.md'));
  writeFileSync(join(dist, '404.html'), '<p>Not here</p>');
  writeFileSync(join(dist, 'sitemap.xml'), '<urlset><url><loc>https://conyso.com/primer/x/</loc></url></urlset>');
  const msgs = preflight(dist, cfg).map((p) => `${p.file}: ${p.message}`);
  assert.ok(msgs.includes('x/index.html: advertises a Markdown twin that is missing: https://conyso.com/primer/x/index.md'));
  assert.ok(msgs.some((m) => m.startsWith('x/index.html: contains the unstamped lastmod token')));
  assert.ok(msgs.includes('sitemap.xml: 1 URL(s) without a <lastmod>'));
  assert.ok(!msgs.some((m) => m.startsWith('404.html')));
});

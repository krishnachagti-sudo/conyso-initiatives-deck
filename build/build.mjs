// Build every deck and the site around it (CARD-STANDARD.md §5, §8, §10).
//
//   node build/build.mjs                 decks/ → dist/<slug>/ (page + every format)
//   node build/build.mjs --fixtures      also build the test fixtures
//
// Only decks with status "released" are indexed and listed in the sitemap and
// llms.txt; drafts and fixtures get pages marked noindex.
//   node build/build.mjs --only=csv,json only some formats
//   node build/build.mjs --out=dir       write somewhere other than dist/
//   node build/build.mjs --personal      only decks marked "personal": true in deck.json,
//                                        to personal-dist/ (no site pages); the site skips them
//   node build/build.mjs --origin=https://x.github.io --base=/repo/
//                                        build for another host: a noindex preview (src/site/config.mjs)
//   node build/build.mjs --lastmod=file  read and write this lastmod manifest instead (tests)
//
// lastmod: every sitemap URL carries the day its page last changed, from the
// committed manifest src/data/lastmod.json (build/lastmod.mjs). Only a
// complete build (no --only, --decks, --fixtures, --personal or preview) writes
// that file: a partial build renders different pages, so its hashes would
// describe a site that is never published. Commit the file after a full build.
// Every indexable page also gets a Markdown twin, index.md, beside it.
//
// dist/ is uploaded as-is to <origin><base> (site.config.json). Each deck's
// page and its downloads share one directory, so download links are relative.
// A deck with checker problems is not exported. Binary formats need genanki
// (.apkg) and Chromium (PDF); if either is missing the build fails, so a
// release never ships with a format silently absent.

import { mkdirSync, writeFileSync, readFileSync, statSync, cpSync, rmSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

import { deckDirs, loadDeck, checkContext } from '../src/decks.mjs';
import { checkDeck } from './check.mjs';
import { FORMATS } from '../src/exporters/index.mjs';
import { mediaName } from '../src/exporters/common.mjs';
import { deckPage, studyJson } from '../src/site/deck-page.mjs';
import { homePage } from '../src/site/home.mjs';
import { methodPage, formatsPage } from '../src/site/hubs.mjs';
import { loadConfig } from '../src/site/config.mjs';
import { withMarkdownLink } from '../src/site/layout.mjs';
import { deckMarkdown, glossaryMarkdown, pageMarkdown } from '../src/site/markdown.mjs';
import { hasGlossary, glossaryPath } from '../src/site/pages/glossary.mjs';
import { manifestFile, resolve as resolveLastmod, stamp } from './lastmod.mjs';
import { llmsIndex, llmsFull } from './llms.mjs';

const arg = (n) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1];
const only = arg('only')?.split(',');
const deckFilter = arg('decks')?.split(','); // preview builds: only these decks
const personal = process.argv.includes('--personal'); // decks for one person's own study, never on the site
const out = arg('out') || (personal ? 'personal-dist' : 'dist');
const cfg = loadConfig();
const lastmodArg = arg('lastmod');
const today = new Date().toISOString().slice(0, 10);
const sources = [{ decks: 'decks', concepts: 'concepts' }];
if (process.argv.includes('--fixtures')) sources.push({ decks: 'test/fixtures/decks', concepts: 'test/fixtures/concepts' });

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

let failed = 0;
const built = [];
for (const src of sources) {
  for (const dir of deckDirs(src.decks)) {
    const deck = loadDeck(dir);
    if (Boolean(deck.meta.personal) !== personal) continue;
    if (deckFilter && !deckFilter.includes(deck.meta.slug)) continue;
    const { slug, version } = deck.meta;
    // Real decks take their page address from the site config; a deck.json
    // value (the fixtures have one) is kept so tests stay independent of it.
    deck.meta.pageBase ||= `${cfg.origin}${cfg.base}${slug}/`;
    const problems = checkDeck(deck, checkContext(deck.meta, { decks: src.decks, concepts: src.concepts }));
    if (problems.length) {
      failed += 1;
      console.error(`✗ ${slug}: ${problems.length} checker problem(s); not exported. Run npm run check.`);
      continue;
    }
    // Retired cards keep their ids in the source (CARD-STANDARD.md §7). Anki
    // formats still carry them, tagged "retired", so an update marks them in a
    // learner's collection; every other format and the site leave them out.
    const isRetired = (n) => (n.tags || []).includes('retired');
    const full = deck;
    if (deck.notes.some(isRetired)) {
      const topics = deck.topics.map((t) => ({ ...t, notes: t.notes.filter((n) => !isRetired(n)) })).filter((t) => t.notes.length);
      Object.assign(deck, { all: full.notes, topics, notes: topics.flatMap((t) => t.notes) });
    }
    const target = join(out, slug);
    mkdirSync(target, { recursive: true });
    const files = [];
    for (const f of FORMATS.filter((x) => !only || only.includes(x.key))) {
      const name = `${slug}-${version}${f.suffix}`;
      const path = join(target, name);
      const src = f.key === 'apkg' || f.key === 'anki-text' ? { ...deck, notes: deck.all || deck.notes } : deck;
      if (f.kind === 'text') writeFileSync(path, f.render(src));
      else f.write(src, path);
      const buf = readFileSync(path);
      files.push({ format: f.key, label: f.label, file: name, bytes: statSync(path).size, sha256: createHash('sha256').update(buf).digest('hex') });
    }
    // The deck's figures, under their published media names (common.mjs, mediaName).
    for (const n of deck.notes.filter((x) => x.image)) {
      mkdirSync(join(target, 'media'), { recursive: true });
      cpSync(join(deck.dir, n.image.file), join(target, 'media', mediaName(deck, n.image.file)));
    }
    const manifest = { deck: slug, version, cards: deck.notes.length, files };
    writeFileSync(join(target, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
    built.push({ deck, manifest, target });
    console.log(`✓ ${slug} ${version}: ${deck.notes.length} cards, ${files.length} formats → ${target}`);
  }
}

if (personal) { if (failed) process.exitCode = 1; process.exit(); }

// Pages. Deck pages are written after every deck is built, so each page's
// footer can list all of them.
const deckList = built.map((b) => b.deck);
// Every HTML page is held here (base-relative path → HTML with the lastmod
// token still in it) and written at the end, once its date is known.
const PAGES = new Map();
const nav = deckList.map((d) => ({ slug: d.meta.slug, title: d.meta.shortTitle || d.meta.title, family: d.meta.familyTitle, status: d.meta.status }));
for (const b of built) {
  PAGES.set(`${b.deck.meta.slug}/`, deckPage(cfg, b.deck, b.manifest, { decks: nav }));
  writeFileSync(join(b.target, 'study.json'), studyJson(b.deck)); // the study widget's cards, fetched on load
}
// The roadmap figure on the home page: exams in MASTER-LIST.md marked "Build"
// (buildable now under CONTENT-POLICY.md). Quoted fields may contain commas.
const csvRow = (line) => [...line.matchAll(/(?:^|,)("(?:[^"]|"")*"|[^,]*)/g)].map((m) => m[1].replace(/^"|"$/g, '').replace(/""/g, '"'));
const [hdr, ...rows] = readFileSync('master-list.csv', 'utf8').trim().split('\n').map(csvRow);
const roadmap = rows.filter((r) => r[hdr.indexOf('status')] === 'Build').length;
const pages = { '': homePage(cfg, deckList, { roadmap }), 'method/': methodPage(cfg, deckList), 'formats/': formatsPage(cfg, deckList) };
for (const [p, html] of Object.entries(pages)) PAGES.set(p, html);
cpSync('src/assets', join(out, 'assets'), { recursive: true }); // fonts travel with their OFL licence files

// Page modules: every src/site/pages/*.mjs exports build(ctx) returning
// { pages: { 'path/': html }, files: { 'name': string|Buffer }, urls: ['path/'] }.
// urls are the indexable pages that module adds to the sitemap.
const extraUrls = [];
const pageDir = 'src/site/pages';
if (existsSync(pageDir)) {
  for (const f of readdirSync(pageDir).filter((x) => x.endsWith('.mjs')).sort()) {
    const mod = await import(new URL(`../${pageDir}/${f}`, import.meta.url));
    const res = await mod.build({ cfg, decks: deckList, built, out });
    for (const [p, html] of Object.entries(res.pages || {})) PAGES.set(p, html);
    for (const [name, data] of Object.entries(res.files || {})) { mkdirSync(join(out, name, '..'), { recursive: true }); writeFileSync(join(out, name), data); }
    extraUrls.push(...(res.urls || []));
  }
}

const listed = deckList.filter((d) => d.meta.status === 'released'); // sitemap and llms.txt: released decks only
const root = `${cfg.origin}${cfg.base}`;
const sitemapPaths = [...new Set(['', 'method/', 'formats/', ...listed.map((d) => `${d.meta.slug}/`), ...extraUrls])];

// Markdown twins (src/site/markdown.mjs): decks and glossaries from the data,
// every other indexable page from its <main>. Each page then advertises its twin.
const indexable = (html) => !/<meta name="robots" content="noindex/.test(html);
const TWINS = new Map();
for (const b of built.filter((x) => x.deck.meta.status === 'released')) {
  TWINS.set(`${b.deck.meta.slug}/`, deckMarkdown(cfg, b.deck, b.manifest));
  if (hasGlossary(b.deck)) TWINS.set(glossaryPath(b.deck), glossaryMarkdown(cfg, b.deck));
}
for (const [p, html] of PAGES) {
  if (!indexable(html)) { TWINS.delete(p); continue; }
  if (!TWINS.has(p)) TWINS.set(p, pageMarkdown(cfg, html, `${root}${p}`));
  PAGES.set(p, withMarkdownLink(html, `${root}${p}index.md`));
}

// Honest lastmod (build/lastmod.mjs): a sitemap page's date moves only when
// its rendered content does.
const lastmodPath = lastmodArg || manifestFile;
const complete = !only && !deckFilter && !personal && !cfg.preview && !process.argv.includes('--fixtures');
let prevManifest = null;
try { prevManifest = JSON.parse(readFileSync(lastmodPath, 'utf8')); } catch { /* none yet: every page is new */ }
const hashed = Object.fromEntries(sitemapPaths.filter((p) => PAGES.has(p)).map((p) => [p, PAGES.get(p)]));
const prefixes = [root, cfg.base].filter((x) => x && x !== '/');
const { dates, manifest: nextManifest, changed } = resolveLastmod(hashed, prevManifest, today, prefixes);
for (const [p, html] of PAGES) {
  mkdirSync(join(out, p), { recursive: true });
  writeFileSync(join(out, p, 'index.html'), stamp(html, dates[p] || today));
}
for (const [p, md] of TWINS) writeFileSync(join(out, p, 'index.md'), md);
if (complete || lastmodArg) {
  mkdirSync(join(lastmodPath, '..'), { recursive: true });
  writeFileSync(lastmodPath, `${JSON.stringify(nextManifest, null, 2)}\n`);
  // If this says every page changed on a build where nothing was edited,
  // something volatile has leaked into a page.
  console.log(`✓ lastmod: ${changed.length} of ${Object.keys(hashed).length} pages changed → ${lastmodPath}`);
  if (changed.length && changed.length <= 25) for (const p of changed) console.log(`  changed: ${p || '(home)'}`);
} else {
  console.log(`  lastmod: partial or preview build, ${lastmodPath} left as it is (${changed.length} of ${Object.keys(hashed).length} pages differ from it)`);
}

const urls = sitemapPaths.map((p) => ({ loc: `${root}${p}`, lastmod: dates[p] }));
writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`);

// llms.txt (llmstxt.org): the map of the site; llms-full.txt: the corpus (build/llms.mjs).
writeFileSync(join(out, 'llms.txt'), llmsIndex(cfg, deckList));
writeFileSync(join(out, 'llms-full.txt'), llmsFull(cfg, deckList));

if (cfg.indexNowKey) writeFileSync(join(out, `${cfg.indexNowKey}.txt`), cfg.indexNowKey);
writeFileSync(join(out, '.nojekyll'), ''); // GitHub Pages: serve files as they are

console.log(`✓ site${cfg.preview ? ` (noindex preview for ${cfg.origin}${cfg.base})` : ''}: ${built.length} deck page(s), home, sitemap (${urls.length} URLs), Markdown twins (${TWINS.size}), llms.txt, llms-full.txt → ${out}`);
if (failed) process.exitCode = 1; // not exit(): it can drop piped output

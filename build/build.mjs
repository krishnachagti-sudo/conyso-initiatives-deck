// Build every deck and the site around it (CARD-STANDARD.md §5, §8, §10).
//
//   node build/build.mjs                 decks/ → dist/<slug>/ (page + every format)
//   node build/build.mjs --fixtures      also build the test fixtures
//
// Only decks with status "released" are indexed and listed in the sitemap and
// llms.txt; drafts and fixtures get pages marked noindex.
//   node build/build.mjs --only=csv,json only some formats
//   node build/build.mjs --out=dir       write somewhere other than dist/
//   node build/build.mjs --origin=https://x.github.io --base=/repo/
//                                        build for another host: a noindex preview (src/site/config.mjs)
//
// dist/ is uploaded as-is to <origin><base> (site.config.json). Each deck's
// page and its downloads share one directory, so download links are relative.
// A deck with checker problems is not exported. Binary formats need genanki
// (.apkg) and Chromium (PDF); if either is missing the build fails, so a
// release never ships with a format silently absent.

import { mkdirSync, writeFileSync, readFileSync, statSync, cpSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

import { deckDirs, loadDeck, loadConcepts, prerequisiteTerms } from '../src/decks.mjs';
import { checkDeck } from './check.mjs';
import { FORMATS } from '../src/exporters/index.mjs';
import { mediaName } from '../src/exporters/common.mjs';
import { deckPage } from '../src/site/deck-page.mjs';
import { homePage } from '../src/site/home.mjs';
import { methodPage, formatsPage } from '../src/site/hubs.mjs';
import { loadConfig } from '../src/site/config.mjs';

const arg = (n) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1];
const only = arg('only')?.split(',');
const out = arg('out') || 'dist';
const cfg = loadConfig();
const sources = [{ decks: 'decks', concepts: 'concepts' }];
if (process.argv.includes('--fixtures')) sources.push({ decks: 'test/fixtures/decks', concepts: 'test/fixtures/concepts' });

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

let failed = 0;
const built = [];
for (const src of sources) {
  for (const dir of deckDirs(src.decks)) {
    const deck = loadDeck(dir);
    const { slug, version } = deck.meta;
    // Real decks take their page address from the site config; a deck.json
    // value (the fixtures have one) is kept so tests stay independent of it.
    deck.meta.pageBase ||= `${cfg.origin}${cfg.base}${slug}/`;
    const problems = checkDeck(deck, { concepts: loadConcepts(src.concepts, deck.meta.family), prerequisiteTerms: prerequisiteTerms(src.decks, deck.meta) });
    if (problems.length) {
      failed += 1;
      console.error(`✗ ${slug}: ${problems.length} checker problem(s); not exported. Run npm run check.`);
      continue;
    }
    const target = join(out, slug);
    mkdirSync(target, { recursive: true });
    const files = [];
    for (const f of FORMATS.filter((x) => !only || only.includes(x.key))) {
      const name = `${slug}-${version}${f.suffix}`;
      const path = join(target, name);
      if (f.kind === 'text') writeFileSync(path, f.render(deck));
      else f.write(deck, path);
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

// Pages. Deck pages are written after every deck is built, so each page's
// footer can list all of them.
const deckList = built.map((b) => b.deck);
const nav = deckList.map((d) => ({ slug: d.meta.slug, title: d.meta.shortTitle || d.meta.title }));
for (const b of built) writeFileSync(join(b.target, 'index.html'), deckPage(cfg, b.deck, b.manifest, { decks: nav }));
// The roadmap figure on the home page: exams in MASTER-LIST.md marked "Build"
// (buildable now under CONTENT-POLICY.md). Quoted fields may contain commas.
const csvRow = (line) => [...line.matchAll(/(?:^|,)("(?:[^"]|"")*"|[^,]*)/g)].map((m) => m[1].replace(/^"|"$/g, '').replace(/""/g, '"'));
const [hdr, ...rows] = readFileSync('master-list.csv', 'utf8').trim().split('\n').map(csvRow);
const roadmap = rows.filter((r) => r[hdr.indexOf('status')] === 'Build').length;
const pages = { '': homePage(cfg, deckList, { roadmap }), 'method/': methodPage(cfg, deckList), 'formats/': formatsPage(cfg, deckList) };
for (const [p, html] of Object.entries(pages)) { mkdirSync(join(out, p), { recursive: true }); writeFileSync(join(out, p, 'index.html'), html); }
cpSync('src/assets', join(out, 'assets'), { recursive: true }); // fonts travel with their OFL licence files

const listed = deckList.filter((d) => d.meta.status === 'released'); // sitemap and llms.txt: released decks only
const root = `${cfg.origin}${cfg.base}`;
const urls = [{ loc: root }, { loc: `${root}method/` }, { loc: `${root}formats/` }, ...listed.map((d) => ({ loc: `${root}${d.meta.slug}/`, lastmod: d.meta.updated }))];
writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`);

// llms.txt (llmstxt.org): a plain map of the site for answer engines.
writeFileSync(join(out, 'llms.txt'), `# ${cfg.brand}

> Free flashcard decks for certification exams, all built to one standard from the research on how people learn, by Conyso. Every card cites a public source, every deck teaches each idea before it tests it, and every deck downloads for Anki, Quizlet, Brainscape, Mochi, RemNote, Obsidian, Logseq, spreadsheets and paper. Decks are licensed CC BY-SA 4.0.

## Decks

${listed.map((d) => `- [${d.meta.title}](${root}${d.meta.slug}/): ${d.notes.length} cards. ${d.meta.description || ''}`.trim()).join('\n') || '- The first decks are in preparation.'}
`);

if (cfg.indexNowKey) writeFileSync(join(out, `${cfg.indexNowKey}.txt`), cfg.indexNowKey);
writeFileSync(join(out, '.nojekyll'), ''); // GitHub Pages: serve files as they are

console.log(`✓ site${cfg.preview ? ` (noindex preview for ${cfg.origin}${cfg.base})` : ''}: ${built.length} deck page(s), home, sitemap (${urls.length} URLs), llms.txt → ${out}`);
if (failed) process.exit(1);

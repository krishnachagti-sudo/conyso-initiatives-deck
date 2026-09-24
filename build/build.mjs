// Build every deck and the site around it (CARD-STANDARD.md §5, §8, §10).
//
//   node build/build.mjs                 decks/ → dist/<slug>/ (page + every format)
//   node build/build.mjs --fixtures      also build the test fixtures (noindex, not in the sitemap)
//   node build/build.mjs --only=csv,json only some formats
//   node build/build.mjs --out=dir       write somewhere other than dist/
//
// dist/ is uploaded as-is to <origin><base> (site.config.json). Each deck's
// page and its downloads share one directory, so download links are relative.
// A deck with checker problems is not exported. Binary formats need genanki
// (.apkg) and Chromium (PDF); if either is missing the build fails, so a
// release never ships with a format silently absent.

import { mkdirSync, writeFileSync, readFileSync, statSync, readdirSync, copyFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

import { deckDirs, loadDeck, loadConcepts } from '../src/decks.mjs';
import { checkDeck } from './check.mjs';
import { FORMATS } from '../src/exporters/index.mjs';
import { deckPage } from '../src/site/deck-page.mjs';
import { homePage } from '../src/site/home.mjs';

const arg = (n) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1];
const only = arg('only')?.split(',');
const out = arg('out') || 'dist';
const cfg = JSON.parse(readFileSync('site.config.json', 'utf8'));
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
    const problems = checkDeck(deck, { concepts: loadConcepts(src.concepts, deck.meta.family) });
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
    const manifest = { deck: slug, version, cards: deck.notes.length, files };
    writeFileSync(join(target, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
    writeFileSync(join(target, 'index.html'), deckPage(cfg, deck, manifest));
    built.push(deck);
    console.log(`✓ ${slug} ${version}: ${deck.notes.length} cards, ${files.length} formats → ${target}`);
  }
}

// Site-wide pages and files.
writeFileSync(join(out, 'index.html'), homePage(cfg, built));
mkdirSync(join(out, 'assets'), { recursive: true });
for (const f of readdirSync('src/assets')) copyFileSync(join('src/assets', f), join(out, 'assets', f));

const listed = built.filter((d) => d.meta.status !== 'fixture');
const root = `${cfg.origin}${cfg.base}`;
const urls = [{ loc: root }, ...listed.map((d) => ({ loc: `${root}${d.meta.slug}/`, lastmod: d.meta.updated }))];
writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`);

// llms.txt (llmstxt.org): a plain map of the site for answer engines.
writeFileSync(join(out, 'llms.txt'), `# ${cfg.brand}

> Free, standardised flashcard decks for certification exams, by Conyso. Every card cites a public source, every deck teaches each idea before it tests it, and every deck downloads for Anki, Quizlet, Brainscape, Mochi, RemNote, Obsidian, Logseq, spreadsheets and paper. Decks are licensed CC BY-SA 4.0.

## Decks

${listed.map((d) => `- [${d.meta.title}](${root}${d.meta.slug}/): ${d.notes.length} cards. ${d.meta.description || ''}`.trim()).join('\n') || '- The first decks are in preparation.'}
`);

if (cfg.indexNowKey) writeFileSync(join(out, `${cfg.indexNowKey}.txt`), cfg.indexNowKey);

console.log(`✓ site: ${built.length} deck page(s), home, sitemap (${urls.length} URLs), llms.txt → ${out}`);
if (failed) process.exit(1);

// Build every deck: check, then export every format (CARD-STANDARD.md §5, §10).
//
//   node build/build.mjs                 decks/ → dist/decks/<slug>/
//   node build/build.mjs --fixtures      also build the test fixtures
//   node build/build.mjs --only=csv,json only some formats
//
// A deck with checker problems is not exported. Binary formats need genanki
// (.apkg) and Chromium (PDF); if either is missing the build fails, so a
// release never ships with a format silently absent.

import { mkdirSync, writeFileSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

import { deckDirs, loadDeck, loadConcepts } from '../src/decks.mjs';
import { checkDeck } from './check.mjs';
import { FORMATS } from '../src/exporters/index.mjs';

const arg = (n) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1];
const only = arg('only')?.split(',');
const out = arg('out') || 'dist';
const sources = [{ decks: 'decks', concepts: 'concepts' }];
if (process.argv.includes('--fixtures')) sources.push({ decks: 'test/fixtures/decks', concepts: 'test/fixtures/concepts' });

let failed = 0;
for (const src of sources) {
  for (const dir of deckDirs(src.decks)) {
    const deck = loadDeck(dir);
    const { slug, version } = deck.meta;
    const problems = checkDeck(deck, { concepts: loadConcepts(src.concepts, deck.meta.family) });
    if (problems.length) {
      failed += 1;
      console.error(`✗ ${slug}: ${problems.length} checker problem(s); not exported. Run npm run check.`);
      continue;
    }
    const target = join(out, 'decks', slug);
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
    writeFileSync(join(target, 'manifest.json'), JSON.stringify({ deck: slug, version, cards: deck.notes.length, files }, null, 2) + '\n');
    console.log(`✓ ${slug} ${version}: ${deck.notes.length} cards, ${files.length} formats → ${target}`);
  }
}
if (failed) process.exit(1);

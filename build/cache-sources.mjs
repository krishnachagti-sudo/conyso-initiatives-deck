// Keep a text copy of every openly licensed source a deck cites, in the
// repository, so audits, fixes and updates read it offline instead of fetching
// it again (docs/PIPELINE-V3.md, B4; decision D2).
//
//   node build/cache-sources.mjs [--only=slug,slug] [--saved=<folder of earlier downloads>]
//
// For each document a deck's cards cite (sourceURL without its #anchor):
//   tier A or B → research/sources/<slug>/<name>.txt, plus a manifest row;
//   tier C      → a manifest row only (URL, date, checksum): never the text.
// PDFs go through pdftotext, which keeps page breaks (form feeds), so page N
// of the text is PDF page N. HTML becomes plain text. A site that refuses the
// download (403) is taken from --saved when a file there has the same name,
// or the name given for its URL in research/sources/<slug>/aliases.json.
// Documents already in the manifest are not fetched again.

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync, mkdtempSync, rmSync } from 'node:fs';
import { join, basename } from 'node:path';
import { tmpdir } from 'node:os';
import { deckDirs, loadDeck } from '../src/decks.mjs';
import { rawGitHub } from './sources.mjs';

const arg = (n) => process.argv.find((a) => a.startsWith(`--${n}=`))?.slice(n.length + 3);
const UA = 'Mozilla/5.0 (compatible; research)';

/** Plain text from HTML: drop scripts, styles and tags; keep block breaks. */
export function htmlText(html) {
  const ent = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', mdash: '—', ndash: '–', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', hellip: '…', sect: '§', middot: '·' };
  return html
    .replace(/<(script|style|noscript|svg|head)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<(br|\/p|\/div|\/li|\/h[1-6]|\/tr|\/section|\/article|\/pre|\/table)\b[^>]*>/gi, '\n')
    .replace(/<li\b[^>]*>/gi, '\n- ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (m, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (m, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&([a-z]+);/gi, (m, e) => ent[e.toLowerCase()] ?? m)
    .replace(/[ \t]+/g, ' ').replace(/ *\n */g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

const nameFor = (url) => {
  const u = new URL(url);
  const tail = (u.pathname.replace(/\/$/, '').split('/').pop() || u.hostname).replace(/\.(pdf|html?|md)$/i, '');
  const slug = `${u.hostname.replace(/^www\./, '')}-${decodeURIComponent(tail)}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
  return `${slug}-${createHash('sha256').update(url).digest('hex').slice(0, 6)}.txt`;
};

function fetchTo(url, file) {
  try {
    const code = execFileSync('curl', ['-sS', '-L', '--max-time', '120', '-A', UA, '-o', file, '-w', '%{http_code}', url], { stdio: ['ignore', 'pipe', 'ignore'] }).toString();
    return Number(code);
  } catch { return 0; }
}

function findSaved(dir, url) {
  if (!dir || !existsSync(dir)) return null;
  const want = decodeURIComponent(basename(new URL(url).pathname)).toLowerCase();
  if (!want || want.length < 5) return null;
  const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
  return walk(dir).find((p) => basename(p).toLowerCase() === want) || null;
}

function toText(file, url) {
  const head = readFileSync(file).subarray(0, 5).toString();
  if (head === '%PDF-') return execFileSync('pdftotext', [file, '-']).toString();
  if (head.startsWith('PK')) {
    // A course ZIP: keep the student manual (what cards cite), else every PDF.
    const pdfs = execFileSync('unzip', ['-Z1', file]).toString().split('\n').filter((f) => /\.pdf$/i.test(f));
    const pick = pdfs.filter((f) => /student manual|(^|[\s_/-])SM([\s_./-]|$)/i.test(f));
    return (pick.length ? pick : pdfs).map((f) => `=== ${f} ===\n${execFileSync('sh', ['-c', 'unzip -p "$0" "$1" | pdftotext - -', file, f], { maxBuffer: 1 << 28 }).toString()}`).join('\n');
  }
  const raw = readFileSync(file, 'utf8');
  return /<html|<body|<div|<p[ >]/i.test(raw) && !/\.md$/i.test(url) ? htmlText(raw) : raw;
}

export function cacheDeck(deckDir, { saved, out = 'research/sources' } = {}) {
  const deck = loadDeck(deckDir);
  const dir = join(out, deck.meta.slug);
  mkdirSync(dir, { recursive: true });
  const manifestPath = join(dir, 'manifest.json');
  const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : [];
  const have = new Map(manifest.map((m) => [m.url, m]));
  const docs = new Map();
  for (const n of deck.notes) if (n.sourceURL) {
    const url = n.sourceURL.split('#')[0];
    if (!docs.has(url)) docs.set(url, { licence: n.sourceLicence || '', cards: 0 });
    docs.get(url).cards++;
  }
  const tmp = mkdtempSync(join(tmpdir(), 'src-'));
  const tally = { cached: 0, reused: 0, tierC: 0, failed: [] };
  for (const [url, { licence, cards }] of docs) {
    if (have.has(url) && (have.get(url).path === null || existsSync(join(dir, have.get(url).path)))) { tally.reused++; continue; }
    const tier = licence.trim().charAt(0);
    const file = join(tmp, 'doc');
    const row = { url, tier, licence, cards, fetched: new Date().toISOString().slice(0, 10) };
    const code = fetchTo(rawGitHub(url), file);
    let src = code >= 200 && code < 300 ? file : null;
    // aliases.json maps a URL to a file under --saved, for copies saved under another name.
    const alias = existsSync(join(dir, 'aliases.json')) ? JSON.parse(readFileSync(join(dir, 'aliases.json'), 'utf8'))[url] : null;
    if (!src && saved && alias && existsSync(join(saved, alias))) { src = join(saved, alias); row.via = 'saved copy'; }
    if (!src) { const s = findSaved(saved, url); if (s) { src = s; row.via = 'saved copy'; } }
    if (!src) { row.path = null; row.via = `not saved (HTTP ${code || 'no answer'})`; tally.failed.push(url); }
    else {
      row.sha256 = createHash('sha256').update(readFileSync(src)).digest('hex');
      if (tier === 'A' || tier === 'B') {
        const name = nameFor(url);
        try { writeFileSync(join(dir, name), toText(src, url)); row.path = name; tally.cached++; }
        catch { row.path = null; row.via = 'could not extract text'; tally.failed.push(url); }
      } else { row.path = null; row.via = row.via || 'tier C: text not kept'; tally.tierC++; }
    }
    have.set(url, row);
  }
  rmSync(tmp, { recursive: true, force: true });
  writeFileSync(manifestPath, JSON.stringify([...have.values()].sort((a, b) => a.url.localeCompare(b.url)), null, 1) + '\n');
  return tally;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const only = arg('only')?.split(',');
  for (const d of deckDirs('decks')) {
    const slug = basename(d);
    if (only && !only.includes(slug)) continue;
    const t = cacheDeck(d, { saved: arg('saved') });
    console.log(`${slug}: ${t.cached} cached, ${t.reused} already cached, ${t.tierC} tier C (manifest only), ${t.failed.length} not saved`);
    for (const u of t.failed.slice(0, 5)) console.log(`   not saved: ${u}`);
  }
}

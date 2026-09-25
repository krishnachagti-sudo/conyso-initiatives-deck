// Every source link must answer (CARD-STANDARD.md §5). Checks each distinct
// source document across all decks once, following redirects, and checks that
// every "#page=" anchor falls inside its PDF.
//
//   node build/sources.mjs [--decks=decks] [--fixtures] [--only=slug,slug]
//
// Uses curl rather than fetch so it goes through the same proxy settings as
// everything else on the machine. A site that blocks automated requests (403,
// 429) is reported as a warning to check by hand, not as a failure.

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { deckDirs, loadDeck, noFetch } from '../src/decks.mjs';

const arg = (n) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1];
const roots = [arg('decks') || 'decks'];
if (process.argv.includes('--fixtures')) roots.push('test/fixtures/decks');
const only = arg('only')?.split(','); // one writer's deck, not the whole repository

/** GitHub pages refuse automated requests here; the same file is on raw.githubusercontent.com. */
export function rawGitHub(url) {
  const m = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)(?:\/(?:blob|tree)\/([^/]+)\/(.+))?\/?$/);
  if (!m) return url;
  const [, owner, repo, branch, path] = m;
  return path ? `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}` : `https://raw.githubusercontent.com/${owner}/${repo}/HEAD/README.md`;
}

export function status(url) {
  url = rawGitHub(url);
  const run = (extra) => {
    try {
      return Number(execFileSync('curl', ['-sS', '-L', '-o', '/dev/null', '-w', '%{http_code}', '--max-time', '30',
        '-A', 'Mozilla/5.0 (compatible; ConysoDecksLinkCheck/1.0)', ...extra, url], { stdio: ['ignore', 'pipe', 'ignore'] }).toString());
    } catch { return 0; }
  };
  const head = run(['-I']);
  return head >= 200 && head < 300 ? head : run([]);
}

/** Pages in a PDF, or 0 if it cannot be downloaded or read. */
export function pdfPages(url, dir) {
  const file = join(dir, `${createHash('sha256').update(url).digest('hex').slice(0, 16)}.pdf`);
  try {
    execFileSync('curl', ['-sS', '-L', '--max-time', '120', '-A', 'Mozilla/5.0 (compatible; ConysoDecksLinkCheck/1.0)', '-o', file, url], { stdio: 'ignore' });
    return Number(execFileSync('pdfinfo', [file]).toString().match(/^Pages:\s+(\d+)/m)?.[1] || 0);
  } catch { return 0; }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  // One request per document: "#page=" anchors are grouped under their URL.
  const docs = new Map();
  for (const root of roots) for (const dir of deckDirs(root)) {
    const deck = loadDeck(dir);
    if (only && !only.includes(deck.meta.slug)) continue;
    for (const n of deck.notes) if (n.sourceURL) {
      const [url, frag = ''] = n.sourceURL.split('#');
      if (!docs.has(url)) docs.set(url, { ids: [], pages: new Map() });
      const d = docs.get(url);
      d.ids.push(n.id);
      const page = Number(frag.match(/(?:^|&)page=(\d+)/)?.[1]);
      if (page) d.pages.set(page, [...(d.pages.get(page) || []), n.id]);
    }
  }
  const tmp = mkdtempSync(join(tmpdir(), 'pdfs-'));
  let bad = 0;
  for (const [url, { ids, pages }] of docs) {
    if (noFetch(url)) { console.warn(`? ${url} (site terms forbid automated requests; open it by hand) — ${ids.length} card(s)`); continue; }
    const s = status(url);
    if (s >= 200 && s < 300) console.log(`✓ ${s} ${url}`);
    else if (s === 403 || s === 429) { console.warn(`? ${s} ${url} (blocks automated checks; open it by hand) — ${ids.length} card(s)`); continue; }
    else { bad += 1; console.error(`✗ ${s || 'no answer'} ${url} — used by ${ids.slice(0, 5).join(', ')}${ids.length > 5 ? '…' : ''}`); continue; }
    // A page anchor must fall inside the document.
    if (!pages.size) continue;
    const total = pdfPages(url, tmp);
    if (!total) { console.warn(`? could not count the pages of ${url}`); continue; }
    for (const [page, pids] of pages) if (page > total) { bad += 1; console.error(`✗ #page=${page} is beyond the ${total} pages of ${url} — ${pids.slice(0, 5).join(', ')}`); }
  }
  rmSync(tmp, { recursive: true, force: true });
  console.log(`${docs.size} source document(s), ${bad} problem(s)`);
  if (bad) process.exitCode = 1; // not exit(): it can drop piped output
}

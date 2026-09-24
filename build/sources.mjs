// Every source link must answer (CARD-STANDARD.md §5). Checks each distinct
// sourceURL across all decks once, following redirects.
//
//   node build/sources.mjs [--decks=decks] [--fixtures]
//
// Uses curl rather than fetch so it goes through the same proxy settings as
// everything else on the machine. A site that blocks automated requests (403,
// 429) is reported as a warning to check by hand, not as a failure.

import { execFileSync } from 'node:child_process';
import { deckDirs, loadDeck } from '../src/decks.mjs';

const arg = (n) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1];
const roots = [arg('decks') || 'decks'];
if (process.argv.includes('--fixtures')) roots.push('test/fixtures/decks');

export function status(url) {
  const run = (extra) => {
    try {
      return Number(execFileSync('curl', ['-sS', '-L', '-o', '/dev/null', '-w', '%{http_code}', '--max-time', '30',
        '-A', 'Mozilla/5.0 (compatible; ConysoDecksLinkCheck/1.0)', ...extra, url], { stdio: ['ignore', 'pipe', 'ignore'] }).toString());
    } catch { return 0; }
  };
  const head = run(['-I']);
  return head >= 200 && head < 300 ? head : run([]);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const urls = new Map();
  for (const root of roots) for (const dir of deckDirs(root)) {
    const deck = loadDeck(dir);
    for (const n of deck.notes) if (n.sourceURL) {
      if (!urls.has(n.sourceURL)) urls.set(n.sourceURL, []);
      urls.get(n.sourceURL).push(n.id);
    }
  }
  let bad = 0;
  for (const [url, ids] of urls) {
    const s = status(url);
    if (s >= 200 && s < 300) console.log(`✓ ${s} ${url}`);
    else if (s === 403 || s === 429) console.warn(`? ${s} ${url} (blocks automated checks; open it by hand) — ${ids.length} card(s)`);
    else { bad += 1; console.error(`✗ ${s || 'no answer'} ${url} — used by ${ids.slice(0, 5).join(', ')}${ids.length > 5 ? '…' : ''}`); }
  }
  console.log(`${urls.size} source link(s), ${bad} broken`);
  if (bad) process.exit(1);
}

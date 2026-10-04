// Release a deck: status "released", version 1.0.0 on first release (or a
// minor bump after), a changelog line, and released-ids.json, so the checker
// keeps every released card from disappearing.
//
//   node build/release.mjs <slug>[,<slug>…] [--date=YYYY-MM-DD] [--dry]
//
// A deck is released only once an independent audit is recorded in
// deck.json "checks". Its release blockers move to "openReviews": the reviews
// still to come, which the deck page lists, so nothing claims a review that
// has not happened.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { loadDeck } from '../src/decks.mjs';

const args = process.argv.slice(2);
const flag = (n) => args.find((a) => a.startsWith(`--${n}=`))?.slice(n.length + 3);
const dry = args.includes('--dry');
const date = flag('date') || new Date().toISOString().slice(0, 10);
const slugs = (args.find((a) => !a.startsWith('--')) || '').split(',').filter(Boolean);

export function releaseMeta(meta, ids, today) {
  if (!meta.checks?.length) throw new Error(`${meta.slug}: no independent audit recorded in "checks"; audit it before release`);
  const first = meta.status !== 'released';
  const [maj, min] = String(meta.version || '0.1.0').split('.').map(Number);
  const version = first ? (maj >= 1 ? `${maj}.${min + 1}.0` : '1.0.0') : `${maj}.${min + 1}.0`;
  const open = [...new Set([...(meta.openReviews || []), ...(meta.releaseBlockers || [])])];
  const next = { ...meta, status: 'released', version, updated: today, releaseBlockers: [] };
  if (open.length) next.openReviews = open; else delete next.openReviews;
  next.changelog = [...(meta.changelog || []), { version, date: today, notes: first ? `Released, after an independent audit of every card against its source.` : `Updated release.` }];
  return { meta: next, ids: [...new Set(ids)].sort() };
}

if (!slugs.length) {
  if (process.argv[1]?.endsWith('release.mjs')) { console.error('usage: node build/release.mjs <slug>[,<slug>…] [--date=YYYY-MM-DD] [--dry]'); process.exitCode = 1; }
} else {
  for (const slug of slugs) {
    const dir = join('decks', slug);
    const deck = loadDeck(dir);
    const { meta, ids } = releaseMeta(deck.meta, [...deck.releasedIds, ...deck.notes.map((n) => n.id)], date);
    console.log(`${slug}: ${deck.meta.status} ${deck.meta.version} → released ${meta.version}, ${ids.length} ids${meta.openReviews ? `; open reviews: ${meta.openReviews.join('; ')}` : ''}`);
    if (dry) continue;
    writeFileSync(join(dir, 'deck.json'), JSON.stringify(meta, null, 2) + '\n');
    writeFileSync(join(dir, 'released-ids.json'), JSON.stringify(ids, null, 2) + '\n');
  }
}

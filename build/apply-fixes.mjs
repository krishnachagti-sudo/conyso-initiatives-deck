// Apply an auditor's patch file to a deck (docs/PIPELINE-V3.md, D2), so a
// known fix costs no agent tokens. One JSON object per line:
//
//   {"id": "<card id>", "field": "back", "value": "…", "severity": "wrong", "reason": "…"}
//   {"id": "<card id>", "field": "sourceFallback", "value": null}      removes the field
//   {"id": "<card id>", "op": "delete"}                                 removes the card
//   {"op": "add", "file": "03-x.json", "card": {…}}                     adds a card
//
//   node build/apply-fixes.mjs <slug> <fixes.jsonl> [--dry]
//
// Lines that match no card are reported, never guessed at. If the deck was
// already pushed (deck.json is tracked by git), the patch version goes up and
// the changelog gets a line. Run the checker afterwards.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { loadDeck, checkContext } from '../src/decks.mjs';
import { checkDeck } from './check.mjs';

const write = (p, v) => writeFileSync(p, JSON.stringify(v, null, 2) + '\n');

/** Bump the patch version and add a dated changelog line. */
export function bump(deckDir, note, today = new Date().toISOString().slice(0, 10)) {
  const p = join(deckDir, 'deck.json');
  const m = JSON.parse(readFileSync(p, 'utf8'));
  const [a, b, c] = m.version.split('.').map(Number);
  m.version = `${a}.${b}.${c + 1}`;
  m.changelog = [...(m.changelog || []), { version: m.version, date: today, notes: note }];
  write(p, m);
  return m.version;
}

const tracked = (p) => { try { execFileSync('git', ['ls-files', '--error-unmatch', p], { stdio: 'ignore' }); return true; } catch { return false; } };

export function applyFixes(deckDir, lines, { dry = false } = {}) {
  const notesDir = join(deckDir, 'notes');
  const docs = readdirSync(notesDir).filter((f) => f.endsWith('.json')).sort().map((f) => [f, JSON.parse(readFileSync(join(notesDir, f), 'utf8'))]);
  const where = new Map();
  for (const [f, doc] of docs) doc.notes.forEach((n) => where.set(n.id, [f, doc]));
  const out = { applied: 0, unmatched: [], bySeverity: {} };
  for (const fx of lines) {
    if (fx.op === 'add') {
      const hit = docs.find(([f]) => f === fx.file);
      if (!hit || !fx.card?.id || where.has(fx.card.id)) { out.unmatched.push(fx.card?.id || '(add without id)'); continue; }
      hit[1].notes.push(fx.card);
      where.set(fx.card.id, hit);
    } else {
      const hit = where.get(fx.id);
      if (!hit) { out.unmatched.push(fx.id); continue; }
      const doc = hit[1];
      if (fx.op === 'delete') { doc.notes = doc.notes.filter((n) => n.id !== fx.id); where.delete(fx.id); }
      else {
        const n = doc.notes.find((x) => x.id === fx.id);
        if (fx.value === null) delete n[fx.field]; else n[fx.field] = fx.value;
      }
    }
    out.applied++;
    out.bySeverity[fx.severity || 'unstated'] = (out.bySeverity[fx.severity || 'unstated'] || 0) + 1;
  }
  if (!dry && out.applied) {
    for (const [f, doc] of docs) write(join(notesDir, f), doc);
    if (tracked(join(deckDir, 'deck.json'))) out.version = bump(deckDir, `Audit fixes: ${Object.entries(out.bySeverity).map(([k, v]) => `${v} ${k}`).join(', ')}.`);
  }
  return out;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [slug, file] = process.argv.slice(2);
  if (!slug || !file) { console.error('usage: node build/apply-fixes.mjs <slug> <fixes.jsonl> [--dry]'); process.exitCode = 1; }
  else {
    const lines = readFileSync(file, 'utf8').split('\n').filter((l) => l.trim()).map((l, i) => { try { return JSON.parse(l); } catch { throw new Error(`${file}:${i + 1} is not JSON`); } });
    const r = applyFixes(join('decks', slug), lines, { dry: process.argv.includes('--dry') });
    console.log(`${r.applied} fix(es) applied (${Object.entries(r.bySeverity).map(([k, v]) => `${k} ${v}`).join(', ') || 'none'})${r.version ? `; deck is now v${r.version}` : ''}`);
    if (r.unmatched.length) { console.log(`${r.unmatched.length} line(s) matched no card: ${r.unmatched.slice(0, 10).join(', ')}`); process.exitCode = 1; }
    // A patch must not break a rule: check the patched cards now, so the next
    // step starts from a clean deck (writers' concept files count as merged).
    const deck = loadDeck(join('decks', slug));
    const ctx = checkContext(deck.meta);
    const briefs = 'research/deck-briefs';
    for (const f of readdirSync(briefs).filter((x) => x.startsWith(`${slug}-concepts`) && x.endsWith('.json'))) for (const c of JSON.parse(readFileSync(join(briefs, f), 'utf8'))) if (!ctx.concepts.has(c.id)) ctx.concepts.set(c.id, c);
    const patched = new Set(lines.map((l) => l.id || l.card?.id));
    const broke = checkDeck(deck, ctx).filter((p) => patched.has(p.id));
    for (const p of broke) console.log(`! ${p.id}  [${p.rule}]  ${p.message}`);
    if (broke.length) { console.log(`${broke.length} patched card(s) now break a checker rule: fix them before moving on`); process.exitCode = 1; }
  }
}

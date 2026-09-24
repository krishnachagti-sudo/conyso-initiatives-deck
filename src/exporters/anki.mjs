// Anki .apkg export (CARD-STANDARD.md §2, §3, §10).
//
// Node builds a manifest; build/apkg.py turns it into the package with
// genanki. Subdeck IDs are derived from the deck's fixed id and the topic
// name, so they are stable across builds without being stored.

import { createHash } from 'node:crypto';
import { writeFileSync, existsSync, mkdtempSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';

import { FIELDS, NOTE_TYPES } from '../schema.mjs';
import { TEMPLATES, CSS } from '../anki/templates.mjs';
import { fieldValues, tagsFor, deckPath, inOrder, attribution } from './common.mjs';

/** A stable 31-bit positive id from text (Anki ids are integers). */
export function stableId(...parts) {
  const h = createHash('sha256').update(parts.join('\u0000')).digest();
  return (h.readUInt32BE(0) & 0x3fffffff) + (1 << 30);
}

export function ankiManifest(deck) {
  const paths = [];
  const index = new Map();
  for (const n of inOrder(deck)) {
    const p = deckPath(deck, n);
    if (!index.has(p)) { index.set(p, paths.length); paths.push(p); }
  }
  return {
    fields: FIELDS,
    noteTypes: NOTE_TYPES,
    templates: TEMPLATES,
    css: CSS,
    decks: paths.map((p, i) => ({
      id: stableId(String(deck.meta.id), p),
      name: p,
      description: i === 0 ? `${deck.meta.description || ''}<br><br>${attribution(deck)}` : '',
    })),
    notes: inOrder(deck).map((n) => ({
      id: n.id,
      type: n.type,
      fields: fieldValues(deck, n, { html: true }),
      tags: tagsFor(deck, n),
      due: n.order,
      deckIndex: index.get(deckPath(deck, n)),
    })),
  };
}

/** Python with genanki: the repo's .venv if present, else python3. */
export function pythonWithGenanki() {
  const venv = '.venv/bin/python';
  for (const py of [venv, 'python3']) {
    if (py === venv && !existsSync(venv)) continue;
    try { execFileSync(py, ['-c', 'import genanki'], { stdio: 'ignore' }); return py; } catch { /* try next */ }
  }
  return null;
}

/** Write the .apkg. Throws if genanki is unavailable. */
export function writeApkg(deck, outPath) {
  const py = pythonWithGenanki();
  if (!py) throw new Error('genanki is not installed: python3 -m venv .venv && .venv/bin/pip install -r requirements.txt');
  const dir = mkdtempSync(join(tmpdir(), 'apkg-'));
  const manifest = join(dir, 'manifest.json');
  writeFileSync(manifest, JSON.stringify(ankiManifest(deck)));
  execFileSync(py, ['build/apkg.py', manifest, outPath], { stdio: 'inherit' });
}

// Evidence: the source's own words that support a card, found in the cached
// source text (research/sources/<slug>/, written by build/cache-sources.mjs).
// It makes an invented reason visible and checks page anchors against the
// text (docs/REVIEW-PROMETHEUS.md: invented reasons were half of all audit
// findings, and a written rule did not stop them).

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/** Text reduced so formatting differences don't matter: markdown, quotes, dashes, ligatures, hyphenated line breaks, case, whitespace. */
export function flatten(s, { joinHyphens = true } = {}) {
  return String(s ?? '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')          // [text](link) → text
    .replace(/[*_`#>|]/g, ' ')                         // markdown emphasis, code, headings, tables
    .replace(/[‘’‛′]/g, "'").replace(/[“”„″]/g, '"')
    .replace(/[‐‑‒–—―−]/g, '-')
    .replace(/ﬁ/g, 'fi').replace(/ﬂ/g, 'fl').replace(/ﬀ/g, 'ff').replace(/ﬃ/g, 'ffi').replace(/ﬄ/g, 'ffl')
    .replace(/­/g, '')
    .replace(joinHyphens ? /(\w)-\s*\n\s*(\w)/g : /$^/g, '$1$2') // hyphen at a PDF line end
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

/**
 * Where a quote appears in a text: { found, pages } with the 1-based PDF pages
 * (form feeds) that hold it; pages is empty for a text without page breaks.
 */
export function locate(text, quote) {
  const found = locateIn(text, quote, {});
  // A hyphen that really ends a line, like `kubectl taint … NoSchedule-`, must survive.
  return found.found ? found : locateIn(text, quote, { joinHyphens: false });
}

function locateIn(text, quote, opts) {
  const flatten_ = (s) => flatten(s, opts);
  const q = flatten_(quote);
  if (!q) return { found: false, pages: [] };
  const parts = String(text).split('\f');
  if (parts.length === 1) return { found: flatten_(text).includes(q), pages: [] };
  const pages = [];
  parts.forEach((p, i) => { if (flatten_(p).includes(q)) pages.push(i + 1); });
  // A quote may run across a page break.
  if (!pages.length && flatten_(parts.join(' ')).includes(q)) return { found: true, pages: [] };
  return { found: pages.length > 0, pages };
}

/** The cached text for a source URL (anchor ignored), or null if it is not cached. */
export function sourceReader(slug, base = 'research/sources') {
  const dir = join(base, slug);
  const manifest = existsSync(join(dir, 'manifest.json')) ? JSON.parse(readFileSync(join(dir, 'manifest.json'), 'utf8')) : [];
  const byUrl = new Map(manifest.map((m) => [m.url, m]));
  const cache = new Map();
  return (url) => {
    const row = byUrl.get(String(url).split('#')[0]);
    if (!row?.path) return null;
    if (!cache.has(row.path)) cache.set(row.path, readFileSync(join(dir, row.path), 'utf8'));
    return cache.get(row.path);
  };
}

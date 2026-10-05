// When did this page actually change? (pure, no I/O)
//
// Forked from the Law Tome's build/lastmod.mjs. Google uses a sitemap's
// <lastmod> only "if it's consistently and verifiably accurate", so a build
// that stamps every URL with today's date teaches it to ignore the field. The
// honest answer: a page changed when its rendered bytes changed. Hash each
// render, keep the hashes in a committed manifest, and move a page's date
// only when its hash moves.
//
// Three traps, each of which makes the feature look installed while doing
// nothing (reference-site playbook, search-visibility):
//
//   1. The date is inside the page (dateModified in the JSON-LD). Pages are
//      rendered with LASTMOD_TOKEN where the date goes, hashed with the hole
//      still in it, and stamped only once the date is decided.
//   2. The hash must not depend on the deploy target. The site's own prefix
//      (origin + base, and base alone, plain and percent-encoded) is
//      normalised out, so a manifest made locally matches a build anywhere.
//   3. The manifest is committed (src/data/lastmod.json), because CI and the
//      gated ship build from a clean checkout. Never delete it: without it
//      every page looks new, which is true of nothing and tells search
//      engines nothing.
//
// Only a complete build (every format, every deck, no fixtures, the real
// host) may write the manifest: a --only=csv build renders fewer download
// tiles, so its hashes describe a different page. See build.mjs.

import { createHash } from 'node:crypto';

/** Rendered in place of the date, replaced after hashing. Ugly on purpose, so a leak is obvious (preflight checks). */
export const LASTMOD_TOKEN = '@@LASTMOD@@';

/** The committed manifest. In src/, not beside the output: dist/ is gitignored. */
export const manifestFile = 'src/data/lastmod.json';

/** The hash rule's version. Bump it (and migrate, as the Tome does) if pageHash's normalisation changes. */
export const HASH_VERSION = 1;

/**
 * Content fingerprint of one rendered page, with the date still a hole in it.
 * `prefixes` are the site's own location strings (origin + base, then base);
 * a bare '/' must not be passed, since it would flatten every path.
 */
export function pageHash(html, prefixes = []) {
  let s = String(html);
  // Share links carry the page's own URL percent-encoded, so both forms go.
  // Longest first, so origin + base is consumed before base alone.
  const forms = [...prefixes].filter((p) => p && p !== '/').flatMap((p) => [p, encodeURIComponent(p)]).sort((a, b) => b.length - a.length);
  for (const p of forms) s = s.split(p).join(' SITE ');
  return createHash('sha256').update(s, 'utf8').digest('hex').slice(0, 16);
}

/** Fill the hole. A page without one is returned untouched. */
export function stamp(html, date) {
  return String(html).split(LASTMOD_TOKEN).join(date);
}

/**
 * Decide a date for every page and produce the manifest to commit.
 *   hash matches the manifest → keep its date (the page did not change)
 *   hash differs, or new page  → today
 * A missing or malformed manifest degrades to "everything is new"; it never throws.
 *
 * @param {Record<string,string>} pages base-relative path → rendered HTML (token intact)
 * @param {{v?:number, pages?:Record<string,{hash:string,date:string}>}|null} prev the committed manifest
 * @param {string} today ISO date
 * @param {string[]} [prefixes] see pageHash
 * @returns {{dates:Record<string,string>, manifest:{v:number,pages:object}, changed:string[]}}
 */
export function resolve(pages = {}, prev, today, prefixes = []) {
  const old = (prev && typeof prev.pages === 'object' && prev.pages) || {};
  const dates = {};
  const next = {};
  const changed = [];
  // Sorted, so the committed file has a stable, reviewable diff.
  for (const path of Object.keys(pages).sort()) {
    const hash = pageHash(pages[path], prefixes);
    const before = old[path];
    const unchanged = before && before.hash === hash && before.date;
    const date = unchanged ? before.date : today;
    if (!unchanged) changed.push(path);
    dates[path] = date;
    next[path] = { hash, date };
  }
  return { dates, manifest: { v: HASH_VERSION, pages: next }, changed };
}

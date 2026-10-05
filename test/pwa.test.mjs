// The installable, offline site: the service worker's routing rules
// (src/assets/sw.js, run in a bare vm context, where it only defines its
// functions), the build's cache versioning and injection
// (src/site/pages/pwa.mjs), the offline page and the web app manifest.
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import vm from 'node:vm';

import { shellAssets, precacheList, shellVersion, injectSW, offlinePage, pagesCache, build } from '../src/site/pages/pwa.mjs';
import { webManifest } from '../src/site/pages/seo.mjs';

const cfg = { base: '/primer/', origin: 'https://conyso.com', brand: 'The Exam Primer' };
const SRC = readFileSync('src/assets/sw.js', 'utf8');
/** The worker's functions, as a test sees them: no self, no caches, so it registers nothing. */
const worker = (src = SRC) => { const ctx = { URL }; vm.runInNewContext(src, ctx); return ctx; };

test('sw: each request goes to the right strategy', () => {
  const { route } = worker();
  const scope = { origin: 'https://conyso.com', base: '/primer/' };
  const nav = (path, extra = {}) => route({ url: `https://conyso.com${path}`, method: 'GET', mode: 'navigate', accept: 'text/html', ...extra }, scope);
  const get = (path, extra = {}) => route({ url: `https://conyso.com${path}`, method: 'GET', mode: 'cors', accept: '*/*', ...extra }, scope);

  // Pages: network first.
  for (const p of ['/primer/', '/primer/daily/', '/primer/daily/?day=2026-10-04', '/primer/psm-ii/', '/primer/psm-ii/?topic=x#study:y', '/primer/daily/archive/', '/primer/404.html']) assert.equal(nav(p), 'page', p);
  assert.equal(get('/primer/cka/', { accept: 'text/html,application/xhtml+xml' }), 'page', 'an HTML fetch that is not a navigation');

  // Data: stale-while-revalidate.
  for (const p of ['/primer/psm-ii/study.json', '/primer/daily/days/2026-10-05.json', '/primer/daily/pool.json', '/primer/search-index.json', '/primer/cka/media/cka-fig-1.png']) assert.equal(get(p), 'data', p);

  // The shell: cache first.
  for (const p of ['/primer/assets/site.css', '/primer/assets/daily.js', '/primer/assets/fonts/fraunces-latin-wght-normal.woff2', '/primer/assets/icon.svg', '/primer/site.webmanifest', '/primer/icon-192.png', '/primer/icon-512.png', '/primer/apple-touch-icon.png']) assert.equal(get(p), 'asset', p);

  // Never stored: the downloads, other hosts, other sites on the host, writes, the worker itself.
  for (const p of ['/primer/psm-ii/psm-ii-1.2.0.apkg', '/primer/psm-ii/psm-ii-1.2.0.study-sheet.pdf', '/primer/psm-ii/psm-ii-1.2.0.cards-a4.pdf', '/primer/all.zip', '/primer/psm-ii/psm-ii-1.2.0.csv', '/primer/psm-ii/psm-ii-1.2.0.tsv', '/primer/psm-ii/psm-ii-1.2.0.json', '/primer/psm-ii/psm-ii-1.2.0.mochi', '/primer/psm-ii/psm-ii-1.2.0.obsidian.md', '/primer/psm-ii/index.md', '/primer/psm-ii/manifest.json', '/primer/og/psm-ii.png', '/primer/feed.xml', '/primer/daily/feed.xml', '/primer/sitemap.xml', '/primer/llms-full.txt', '/primer/sw.js', '/primer/assets/sw.js']) {
    assert.equal(get(p), 'bypass', p);
    assert.equal(nav(p), 'bypass', `${p} (as a navigation)`);
  }
  assert.equal(route({ url: 'https://cdn.example.com/primer/assets/site.css', method: 'GET' }, scope), 'bypass', 'another host');
  assert.equal(route({ url: 'https://example.com/primer/', method: 'GET', mode: 'navigate' }, scope), 'bypass', 'another origin, same path');
  assert.equal(nav('/lawtome/'), 'bypass', 'a sister site on the same host is outside the scope');
  assert.equal(nav('/primerx/'), 'bypass', 'a look-alike path');
  assert.equal(get('/primer/psm-ii/study.json', { method: 'POST' }), 'bypass', 'not a GET');
  assert.equal(route({ url: 'not a url', method: 'GET' }, scope), 'bypass');
  assert.equal(get('/primer/assets/../sw.js'), 'bypass', 'no climbing out of assets/');

  // A preview on github.io is its own scope.
  const preview = { origin: 'https://someone.github.io', base: '/conyso-initiatives-deck/' };
  assert.equal(route({ url: 'https://someone.github.io/conyso-initiatives-deck/daily/', method: 'GET', mode: 'navigate' }, preview), 'page');
  assert.equal(route({ url: 'https://someone.github.io/other-repo/', method: 'GET', mode: 'navigate' }, preview), 'bypass');
});

test('sw: page keys drop the query; only this version\'s caches survive activation', () => {
  const ctx = worker(injectSW(SRC, { version: 'v2', base: '/primer/', precache: [] }));
  assert.equal(ctx.pageKey('https://conyso.com/primer/daily/?day=2026-10-04#x'), 'https://conyso.com/primer/daily/');
  const names = ['primer:/primer/:shell:v1', 'primer:/primer/:shell:v2', 'primer:/primer/:pages', 'primer:/primer/:data', 'primer:/lawtome/:shell:v1', 'other'];
  assert.deepEqual([...ctx.stale(names)], ['primer:/primer/:shell:v1'], 'old shells go; pages, data and other sites\' caches stay');
  assert.equal(ctx.PAGES, pagesCache('/primer/'), 'the offline page reads the same cache name');
});

test('sw: the build fills in version, base and precache, and refuses a worker without placeholders', () => {
  const out = injectSW(SRC, { version: 'abc123', base: '/primer/', precache: ['/primer/', '/primer/offline/'] });
  assert.doesNotMatch(out, /__SW_/);
  const ctx = worker(out);
  assert.equal(ctx.VERSION, 'abc123');
  assert.equal(ctx.BASE, '/primer/');
  assert.deepEqual([...ctx.PRECACHE], ['/primer/', '/primer/offline/']);
  assert.equal(ctx.SHELL, 'primer:/primer/:shell:abc123');
  assert.throws(() => injectSW('var VERSION = 1;', { version: 'x', base: '/', precache: [] }), /missing/);
  // A base with a quote cannot break out of the string.
  assert.equal(worker(injectSW(SRC, { version: 'v', base: "/a'b/", precache: [] })).BASE, "/a'b/");
});

test('sw: the cache version follows the shell\'s bytes, not the build', () => {
  const a = [['assets/site.css', Buffer.from('body{}')], ['assets/common.js', Buffer.from('1')]];
  assert.equal(shellVersion(a), shellVersion([...a].reverse()), 'order does not matter');
  assert.match(shellVersion(a), /^[0-9a-f]{16}$/);
  assert.notEqual(shellVersion(a), shellVersion([['assets/site.css', Buffer.from('body{ }')], a[1]]), 'one byte changes it');
  assert.notEqual(shellVersion(a), shellVersion([...a, ['assets/new.js', Buffer.from('')]]), 'a new file changes it');
  assert.notEqual(shellVersion([['a', 'bc']]), shellVersion([['ab', 'c']]), 'names and bytes cannot run together');
});

test('sw: the precache is the shell, the Latin fonts, and the three pages', () => {
  const names = ['site.css', 'common.js', 'store.js', 'study.js', 'daily.js', 'daily-core.js', 'search.js', 'sw.js', 'icon.svg',
    'fonts/fraunces-latin-wght-normal.woff2', 'fonts/fraunces-latin-ext-wght-normal.woff2', 'fonts/OFL-Fraunces.txt', 'fonts/jetbrains-mono-latin-700-normal.woff2', 'notes.md'];
  const shell = shellAssets(names);
  assert.deepEqual(shell, ['common.js', 'daily-core.js', 'daily.js', 'fonts/fraunces-latin-wght-normal.woff2', 'fonts/jetbrains-mono-latin-700-normal.woff2', 'icon.svg', 'search.js', 'site.css', 'store.js', 'study.js']);
  const list = precacheList('/primer/', shell);
  for (const p of ['/primer/', '/primer/daily/', '/primer/offline/', '/primer/site.webmanifest', '/primer/icon-192.png', '/primer/icon-512.png', '/primer/assets/site.css', '/primer/assets/store.js']) assert.ok(list.includes(p), p);
  assert.ok(!list.some((p) => /sw\.js|-ext-|\.txt|\.apkg|\.pdf/.test(p)), 'no worker, extended fonts, licences or downloads');
});

test('pwa build: writes <base>sw.js from the copied assets and removes the stray copy', async () => {
  const out = mkdtempSync(join(tmpdir(), 'pwa-'));
  try {
    mkdirSync(join(out, 'assets/fonts'), { recursive: true });
    for (const f of ['site.css', 'common.js', 'daily.js', 'icon.svg', 'fonts/atkinson-hyperlegible-latin-400-normal.woff2']) writeFileSync(join(out, 'assets', f), f);
    writeFileSync(join(out, 'assets/sw.js'), SRC);
    const res = await build({ cfg, out });
    assert.deepEqual(res.urls, [], 'the offline page is not in the sitemap');
    assert.ok(!existsSync(join(out, 'assets/sw.js')), 'no un-filled worker under assets/');
    const ctx = worker(res.files['sw.js']);
    assert.equal(ctx.BASE, '/primer/');
    assert.ok(ctx.PRECACHE.includes('/primer/assets/daily.js'));
    assert.ok(ctx.PRECACHE.includes('/primer/assets/fonts/atkinson-hyperlegible-latin-400-normal.woff2'));
    // Same files, same version; a changed stylesheet, a new version.
    writeFileSync(join(out, 'assets/sw.js'), SRC);
    const again = worker((await build({ cfg, out })).files['sw.js']);
    assert.equal(again.VERSION, ctx.VERSION, 'stable from build to build');
    writeFileSync(join(out, 'assets/site.css'), 'site.css, edited');
    assert.notEqual(worker((await build({ cfg, out })).files['sw.js']).VERSION, ctx.VERSION, 'a deploy that changes the shell refreshes the cache');
    // The preview's base.
    const prev = worker((await build({ cfg: { ...cfg, base: '/conyso-initiatives-deck/' }, out })).files['sw.js']);
    assert.ok(prev.PRECACHE.every((p) => p.startsWith('/conyso-initiatives-deck/')));
  } finally { rmSync(out, { recursive: true, force: true }); }
});

test('offline page: noindex, in the site\'s chrome, says what works offline', () => {
  const html = offlinePage(cfg);
  assert.match(html, /<meta name="robots" content="noindex, follow">/);
  assert.match(html, /<h1>You are offline<\/h1>/);
  assert.match(html, /Decks you have opened/);
  assert.match(html, /daily ten, if you loaded it today/);
  assert.match(html, /href="\/primer\/"/);
  assert.match(html, new RegExp(`caches\\.open\\("${pagesCache('/primer/').replace(/[/]/g, '\\/')}"\\)`), 'lists the reader\'s saved decks from the pages cache');
  assert.doesNotMatch(html, /—/, 'no em dashes');
});

test('site.webmanifest: installable, standalone, scoped to base, with shortcuts', () => {
  const m = JSON.parse(webManifest(cfg));
  assert.equal(m.start_url, '/primer/');
  assert.equal(m.scope, '/primer/');
  assert.equal(m.id, '/primer/');
  assert.equal(m.display, 'standalone');
  assert.equal(m.theme_color, '#e6dcc6');
  assert.equal(m.background_color, '#e6dcc6');
  const css = readFileSync('src/assets/site.css', 'utf8');
  assert.ok(css.includes(`--bg:${m.background_color}`), 'the colour is the desk token');
  for (const s of ['192x192', '512x512']) assert.ok(m.icons.some((i) => i.sizes === s && i.type === 'image/png' && (!i.purpose || i.purpose.includes('any'))), s);
  assert.ok(m.icons.some((i) => i.purpose === 'maskable'));
  assert.deepEqual(m.shortcuts.map((s) => s.url), ['/primer/daily/', '/primer/shelf/']);
  assert.ok(m.shortcuts.every((s) => s.name && s.icons?.length));
});

// The files search engines, browsers and share previews look for at the root
// (playbook, page-skeletons §8): robots.txt, the not-found page, the web app
// manifest and its icons, and the 1200x630 share images every page names in
// og:image (layout.mjs, the `og` option).
//
// Share images are drawn by build/og.py (Pillow) in the site's index-card
// look, from figures counted here from the decks. New decks get theirs on the
// next build with nothing to add.

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { page, otherWays } from '../layout.mjs';

const ROOT = fileURLToPath(new URL('../../../', import.meta.url));
const n0 = (n) => Number(n).toLocaleString('en-GB');
const plural = (n, one, many = `${one}s`) => `${n0(n)} ${n === 1 ? one : many}`;

// Crawlers named one by one (search-record §5): search and answer engines,
// and the training crawlers too, since the decks are CC BY-SA and being in
// the models is part of being cited.
export const CRAWLERS = [
  'Googlebot', 'Bingbot', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot',
  'anthropic-ai', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot', 'Applebot-Extended', 'CCBot',
  'Amazonbot', 'meta-externalagent', 'cohere-ai', 'Diffbot', 'DuckDuckBot',
];

/** The site's address without the scheme, for the foot of a share image. */
export const hostLabel = (cfg) => `${new URL(cfg.origin).host}${cfg.base}`.replace(/\/$/, '');

export function robotsTxt(cfg) {
  return `# ${cfg.brand}: ${cfg.origin}${cfg.base}
# Crawlers read robots.txt only at the root of a host. On conyso.com that is
# https://conyso.com/robots.txt, which governs this site; this copy is for a
# host that serves the site at its root (and for the preview).
# Every page may be crawled, quoted and used: the decks are CC BY-SA 4.0.

User-agent: *
Allow: /

${CRAWLERS.map((c) => `User-agent: ${c}`).join('\n')}
Allow: /

Sitemap: ${cfg.origin}${cfg.base}sitemap.xml
`;
}

/**
 * The web app manifest: the site installs as an app (src/assets/sw.js keeps it
 * working offline), scoped to base, in the desk's colour (--bg in site.css),
 * with shortcuts to the daily ten and the reader's shelf.
 */
export function webManifest(cfg) {
  return JSON.stringify({
    id: cfg.base,
    name: cfg.brand,
    short_name: cfg.brand.replace(/^The /, ''),
    description: 'Free flashcard decks for certification exams, all built to one standard.',
    lang: 'en-GB',
    dir: 'ltr',
    start_url: cfg.base,
    scope: cfg.base,
    display: 'standalone',
    background_color: '#e6dcc6',
    theme_color: '#e6dcc6',
    categories: ['education'],
    icons: [
      { src: `${cfg.base}assets/icon.svg`, sizes: 'any', type: 'image/svg+xml' },
      { src: `${cfg.base}icon-192.png`, sizes: '192x192', type: 'image/png' },
      { src: `${cfg.base}icon-512.png`, sizes: '512x512', type: 'image/png' },
      { src: `${cfg.base}icon-512.png`, sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      { src: `${cfg.base}apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
    ],
    shortcuts: [
      { name: 'The daily ten', short_name: 'Daily ten', description: 'Ten questions, the same ten for everyone today', url: `${cfg.base}daily/`, icons: [{ src: `${cfg.base}icon-192.png`, sizes: '192x192', type: 'image/png' }] },
      { name: 'My shelf', short_name: 'My shelf', description: 'The decks you have saved', url: `${cfg.base}shelf/`, icons: [{ src: `${cfg.base}icon-192.png`, sizes: '192x192', type: 'image/png' }] },
    ],
  }, null, 2) + '\n';
}

export function notFoundPage(cfg, decks) {
  const released = decks.filter((d) => d.meta.status === 'released');
  const body = `<div class="wrap nf">
<span class="label">Error 404</span>
<h1>This page is not here</h1>
<p class="lead">The address may be mistyped, or the page may have moved. Search for the exam you are studying for, or start from one of these.</p>
<form data-site-search role="search" action="${cfg.base}browse/" method="get">
<label for="nf-q">Search ${n0(released.length)} decks</label>
<input id="nf-q" name="q" type="search" autocomplete="off" placeholder="An exam, a subject or a term">
<button class="btn btn-primary" type="submit">Search</button>
</form>
<ul>
<li><a href="${cfg.base}browse/">All decks, by subject</a></li>
<li><a href="${cfg.base}daily/">The daily ten</a></li>
<li><a href="${cfg.base}">The home page</a></li>
</ul>
</div>
${otherWays(cfg)}`;
  return page(cfg, {
    title: `Page not found | ${cfg.brand}`,
    description: 'This page is not here. Search the free flashcard decks, or browse them all by subject.',
    path: '404.html',
    body,
    robots: 'noindex, follow',
    og: 'og/home.png',
    decks: released,
    scripts: `<script src="${cfg.base}assets/search.js" defer></script>`,
  });
}

/** What each share image says. Every figure is counted from the decks. */
export function ogJobs(cfg, decks) {
  const released = decks.filter((d) => d.meta.status === 'released');
  const cards = released.reduce((a, d) => a + d.notes.length, 0);
  const families = new Set(released.map((d) => d.meta.familyTitle || d.meta.family)).size;
  const common = { kind: 'card', brand: cfg.brand, host: hostLabel(cfg) };
  return [
    { ...common, file: 'og/home.png', label: 'Free flashcard decks', family: 'CC BY-SA 4.0', title: 'Flashcards for every certification', meta: `${plural(released.length, 'deck')} · ${plural(cards, 'card')} · free` },
    { ...common, file: 'og/browse.png', label: 'All decks', family: 'By subject', title: 'Every deck, by subject', meta: `${plural(released.length, 'deck')} · ${plural(families, 'subject')} · free` },
    { ...common, file: 'og/daily.png', label: 'Daily', family: 'A new ten every day', title: 'The daily ten', meta: 'Ten questions · the same for everyone' },
    // Every built deck, drafts too, so no page names an image that is missing.
    ...decks.map((d) => ({
      ...common,
      file: `og/${d.meta.slug}.png`,
      label: 'Flashcard deck',
      family: d.meta.familyTitle || '',
      title: d.meta.shortTitle || d.meta.title,
      meta: `${plural(d.notes.length, 'card')} · ${plural(d.notes.filter((n) => n.kind === 'primer').length, 'primer')} · free`,
    })),
  ];
}

/** A Python with Pillow: the repo's .venv if it has it, else python3. */
export function pythonWithPillow() {
  const venv = join(ROOT, '.venv/bin/python');
  for (const py of [process.env.OG_PYTHON, venv, 'python3'].filter(Boolean)) {
    if (py === venv && !existsSync(venv)) continue;
    try { execFileSync(py, ['-c', 'import PIL'], { stdio: 'ignore' }); return py; } catch { /* try next */ }
  }
  return null;
}

/** Draw the jobs (and the app icons) into out. Throws if Pillow is missing, so a release never ships without its images. */
export function drawImages(out, jobs, { icons = true } = {}) {
  const py = pythonWithPillow();
  if (!py) throw new Error('Pillow is not installed, so the share images cannot be drawn: pip install Pillow (or add it to requirements.txt and the .venv)');
  mkdirSync(join(out, 'og'), { recursive: true });
  const spec = {
    fonts: join(ROOT, 'src/assets/fonts'),
    svg: join(ROOT, 'src/assets/icon.svg'),
    jobs: [
      ...jobs.map(({ file, ...j }) => ({ ...j, out: resolve(out, file) })),
      ...(icons ? [512, 192, 180].map((size) => ({ kind: 'icon', size, out: resolve(out, size === 180 ? 'apple-touch-icon.png' : `icon-${size}.png`) })) : []),
    ],
  };
  execFileSync(py, [join(ROOT, 'build/og.py')], { input: JSON.stringify(spec), stdio: ['pipe', 'inherit', 'inherit'] });
}

export async function build({ cfg, decks, out }) {
  drawImages(out, ogJobs(cfg, decks));
  return {
    pages: {},
    files: {
      'robots.txt': robotsTxt(cfg),
      'site.webmanifest': webManifest(cfg),
      '404.html': notFoundPage(cfg, decks),
    },
    urls: [],
  };
}


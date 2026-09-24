// Page shell: <head>, header, footer (reference-site playbook,
// references/page-skeletons.md §2). Lean on purpose: no fonts to download, no
// third-party script, no analytics.

import { siteOrg, conysoOrg, founderNode } from './identity.mjs';

export const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Titles and descriptions sized for a results page (playbook: 60 / 158). */
export const clamp = (s, max) => {
  const t = String(s).replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' ') > max * 0.6 ? cut.lastIndexOf(' ') : cut.length)}…`;
};

const jsonLd = (graph) =>
  `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>`;

export function page(cfg, { title, description, path, body, graph = [], scripts = '', robots = 'index, follow, max-snippet:-1, max-image-preview:large' }) {
  const url = `${cfg.origin}${cfg.base}${path}`;
  if (cfg.preview) robots = 'noindex, nofollow'; // never let a preview host compete with the real one
  const asset = (p) => `${cfg.base}assets/${p}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="format-detection" content="telephone=no">
<title>${esc(clamp(title, 60))}</title>
<meta name="description" content="${esc(clamp(description, 158))}">
<meta name="robots" content="${robots}">
<link rel="canonical" href="${esc(url)}">
<meta property="og:site_name" content="${esc(cfg.brand)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${esc(url)}">
<meta property="og:title" content="${esc(clamp(title, 60))}">
<meta property="og:description" content="${esc(clamp(description, 158))}">
<meta name="theme-color" content="#f5f7f4" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#101614" media="(prefers-color-scheme: dark)">
<link rel="stylesheet" href="${asset('site.css')}">
${jsonLd([siteOrg(cfg), conysoOrg(), founderNode(), ...graph])}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site" data-nosnippet>
  <a class="brand" href="${cfg.base}">${esc(cfg.brand)}</a>
  <span class="tagline">Free flashcard decks for certification exams. Every card sourced.</span>
</header>
<main id="main">
${body}
</main>
<footer class="site" data-nosnippet>
  <p><strong>${esc(cfg.brand)}</strong> · free, sourced, standardised flashcard decks. No ads, no account, no tracking of what you study.</p>
  <p>Created by Krishna Chagti · an initiative by <a href="https://conyso.com/">Conyso</a>. Decks licensed CC BY-SA 4.0.</p>
</footer>
${scripts}
</body>
</html>
`;
}

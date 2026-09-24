// The chrome every page shares: <head>, the three-row masthead, the footer,
// the share bar and the icon sprite. It follows the reference-site playbook's
// page skeletons (§2), forked from the Law Tome's partials: same structure,
// this site's words and look.

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

// Icons: inline SVG symbols in Tabler's stroke style, drawn here, so there is
// no icon font to load and no glyph can render as a box.
const ICONS = {
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
  share: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 10.9 7.6-3.8M8.2 13.1l7.6 3.8"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  md: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 15V9l2.5 3L12 9v6M16 9v6M14 13l2 2 2-2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  cards: '<rect x="3" y="7" width="14" height="12" rx="1.5"/><path d="M7 4h12.5A1.5 1.5 0 0 1 21 5.5V15"/><path d="M6 11h8M6 14h5"/>',
  check: '<path d="m5 12 5 5 9-10"/>',
  steps: '<path d="M4 20h4v-4h4v-4h4V8h4"/>',
  browser: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.8-4M4 5v4h4M4 13a8 8 0 0 0 14.8 4M20 19v-4h-4"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  source: '<path d="M7 8h10M7 12h10M7 16h6"/><rect x="3" y="3" width="18" height="18" rx="2"/>',
  alert: '<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
  print: '<path d="M7 9V3h10v6M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><rect x="7" y="14" width="10" height="7"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  up: '<path d="M12 19V5M5 12l7-7 7 7"/>',
};
export const icon = (name, cls = 'i') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const sprite = () => `<svg width="0" height="0" style="position:absolute" aria-hidden="true">${Object.entries(ICONS).map(([k, p]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${p}</symbol>`).join('')}</svg>`;

/** The mark: two index cards, the front one with its red header rule. */
export const mark = (cls = 'mark') => `<svg class="${cls}" viewBox="0 0 38 28" aria-hidden="true"><rect x="7" y="1" width="30" height="20" rx="1.5" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.6"/><rect x="1" y="6" width="30" height="21" rx="1.5" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.6"/><path d="M4 11.5h24" stroke="var(--accent)" stroke-width="1.6"/><path d="M4 16h24M4 20.5h24" stroke="var(--rule)" stroke-width="1.2"/></svg>`;

const NAV = [
  ['decks', '', 'All decks'],
  ['method', 'method/', 'How we teach'],
  ['formats', 'formats/', 'Which file?'],
];

/** The ways into the site, for the band at the foot of every page. */
export const WAYS = [
  ['', 'All decks', 'Every published deck, by subject'],
  ['method/', 'How we teach', 'Why every deck explains each idea before it tests it'],
  ['formats/', 'Which file for my app?', 'Anki, Quizlet, Brainscape, Mochi, RemNote, Obsidian, Logseq, paper'],
];

export function otherWays(cfg, current = null) {
  return `<section class="ways wrap" aria-labelledby="ways-h"><h2 id="ways-h">Other ways into the decks</h2><div class="ways-grid">${WAYS.filter(([p]) => p !== current).map(([p, t, d]) => `<a href="${cfg.base}${p}"><b>${esc(t)}</b><span>${esc(d)}</span></a>`).join('')}</div></section>`;
}

export function crumbs(cfg, trail) {
  const parts = [`<a href="${cfg.base}">All decks</a>`, ...trail.map(([label, path], i) =>
    i === trail.length - 1 ? `<span aria-current="page">${esc(label)}</span>` : `<a href="${cfg.base}${path}">${esc(label)}</a>`)];
  return `<nav class="crumbs" aria-label="Breadcrumb">${parts.join('<span class="sep">/</span>')}</nav>`;
}

/**
 * The share bar. Native share, copy link and copy as Markdown are wired by
 * common.js; the network links are plain URLs that work without script. A
 * live bar (the footer's) reads the address from the page when pressed.
 */
export function shareRow({ url = '', title = '', text = '', live = false } = {}) {
  const e = encodeURIComponent;
  const nets = live ? [] : [
    ['X', `https://x.com/intent/post?text=${e(title)}&url=${e(url)}`],
    ['Bluesky', `https://bsky.app/intent/compose?text=${e(`${title} ${url}`)}`],
    ['LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${e(url)}`],
    ['Reddit', `https://www.reddit.com/submit?url=${e(url)}&title=${e(title)}`],
  ];
  return `<div class="share" data-nosnippet data-share data-share-url="${esc(url)}" data-share-title="${esc(title)}" data-share-text="${esc(text)}" role="group" aria-label="Share">
<button class="sh-b" type="button" data-share-native hidden>${icon('share')} Share</button>
<button class="sh-b" type="button" data-share-copy="url">${icon('link')} <span>Copy link</span></button>
<button class="sh-b" type="button" data-share-copy="md">${icon('md')} <span>Copy as Markdown</span></button>
${nets.map(([n, h]) => `<a class="sh-b" href="${esc(h)}" target="_blank" rel="noopener nofollow">${n}</a>`).join('')}${live ? '' : `<a class="sh-b" href="mailto:?subject=${esc(e(title))}&amp;body=${esc(e(url))}">${icon('mail')} Email</a>`}
<span class="sh-said" role="status" aria-live="polite"></span>
</div>`;
}

/**
 * @param {object} cfg site config (src/site/config.mjs)
 * @param {{title: string, description: string, path: string, body: string, graph?: object[],
 *   scripts?: string, robots?: string, active?: string, count?: number, decks?: {slug: string, title: string}[]}} o
 */
export function page(cfg, { title, description, path, body, graph = [], scripts = '', robots = 'index, follow, max-snippet:-1, max-image-preview:large', active, count, decks = [] }) {
  const url = `${cfg.origin}${cfg.base}${path}`;
  if (cfg.preview) robots = 'noindex, nofollow'; // never let a preview host compete with the real one
  const asset = (p) => `${cfg.base}assets/${p}`;
  const t = esc(clamp(title, 60));
  const d = esc(clamp(description, 158));
  const nav = NAV.map(([k, p, l]) => `<a href="${cfg.base}${p}"${k === active ? ' class="on" aria-current="page"' : ''}>${l}</a>`).join('');
  const foot = (h, links) => `<nav class="foot-col" aria-label="${esc(h)}"><h2>${esc(h)}</h2>${links.map(([p, l]) => `<a href="${p.startsWith('http') ? p : cfg.base + p}">${esc(l)}</a>`).join('')}</nav>`;
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="format-detection" content="telephone=no">
<title>${t}</title>
<meta name="description" content="${d}">
<meta name="robots" content="${robots}">
<link rel="canonical" href="${esc(url)}">
<meta property="og:site_name" content="${esc(cfg.brand)}">
<meta property="og:locale" content="en_GB">
<meta property="og:type" content="website">
<meta property="og:url" content="${esc(url)}">
<meta property="og:title" content="${t}">
<meta property="og:description" content="${d}">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${t}">
<meta name="twitter:description" content="${d}">
<meta name="theme-color" content="#ebe4d4" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#14161b" media="(prefers-color-scheme: dark)">
<link rel="icon" href="${asset('icon.svg')}" type="image/svg+xml">
<link rel="preload" href="${asset('fonts/fraunces-latin-wght-normal.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${asset('fonts/jetbrains-mono-latin-400-normal.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${asset('site.css')}">
<script>try{var s=localStorage.getItem('theme');if(s==='dark'||(!s&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.dataset.theme='dark'}catch(e){}</script>
${jsonLd([siteOrg(cfg), conysoOrg(), founderNode(), ...graph])}
</head>
<body>
${sprite()}
<a class="skip" href="#main">Skip to content</a>
<header class="site" data-nosnippet>
  <div class="kick"><div class="wrap"><span class="k-l">Free · CC BY-SA 4.0</span><span class="k-c">flashcards that teach each idea before they test it</span><span class="k-r">no ads · no tracking</span></div></div>
  <div class="wrap bar">
    <a class="brand" href="${cfg.base}" aria-label="${esc(cfg.brand)}, home">${mark()}<span class="brand-txt"><span class="brand-name">${esc(cfg.brand)}</span><span class="brand-sub">certification flashcards</span></span></a>
    <nav class="links" id="primary-nav" aria-label="Primary">${nav}</nav>
    <div class="right">
      ${count != null ? `<a class="count" href="${cfg.base}"><span class="count-n">${count.toLocaleString('en-GB')}</span><span class="count-l">cards</span></a>` : ''}
      <button class="icon-btn" id="theme" type="button" aria-label="Switch between light and dark">${icon('moon', 'i th-moon')}${icon('sun', 'i th-sun')}</button>
      <button class="icon-btn menu-btn" id="menu" type="button" aria-label="Menu" aria-expanded="false" aria-controls="primary-nav">${icon('menu', 'i m-open')}${icon('close', 'i m-close')}</button>
    </div>
  </div>
</header>
<main id="main" tabindex="-1">
${body}
</main>
<footer class="site" data-nosnippet>
  <div class="wrap foot-grid">
    <div class="foot-brand">
      <a class="brand" href="${cfg.base}">${mark()}<span class="brand-txt"><span class="brand-name">${esc(cfg.brand)}</span></span></a>
      <p class="foot-blurb">Free flashcard decks for certification exams. Every card cites its source, and every deck teaches each idea before it tests it. No ads, no account, no tracking of what you study.</p>
      <p class="foot-conyso">Created by <a href="https://conyso.com/founder/" rel="author">Krishna Chagti</a> · an initiative by <a href="https://conyso.com/">Conyso</a>.</p>
      <p class="foot-motto">Learn it first. Then remember it.</p>
    </div>
    ${foot('Decks', [['', 'All decks'], ...decks.map((x) => [`${x.slug}/`, x.title])])}
    ${foot('Use them', [['formats/', 'Which file for my app?'], ['formats/#anki', 'Importing into Anki'], ['formats/#print', 'Printing the cards']])}
    ${foot('The project', [['method/', 'How we teach'], ['method/#checks', 'How cards are checked'], ['method/#ai', 'The part AI plays'], ['https://github.com/krishnachagti-sudo/conyso-initiatives-deck/issues/new?labels=card-report', 'Report a card']])}
  </div>
  <div class="wrap foot-share"><span class="fs-lab">Know someone studying for an exam?</span>${shareRow({ live: true })}</div>
  <div class="wrap foot-rule"><span>Decks licensed <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">CC BY-SA 4.0</a>. Independent: not affiliated with any exam body.</span><span>Report a wrong card and it is checked against its source and fixed.</span></div>
</footer>
<a class="totop" href="#main" aria-label="Back to top" hidden>${icon('up')}</a>
<script src="${asset('common.js')}" defer></script>
${scripts}
</body>
</html>
`;
}

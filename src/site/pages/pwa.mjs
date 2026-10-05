// The site as an installable, offline-capable app: the service worker at
// <base>sw.js and the offline page at <base>offline/ (noindex).
//
// The worker's source is src/assets/sw.js. The build copies src/assets to
// dist/assets before the page modules run, so this module reads the copied
// shell files from there, hashes them, and writes <base>sw.js with three
// values filled in (injectSW): the cache version (that hash, so a deploy that
// changes any shell file refreshes the cache and drops the old one), the base
// path (the worker's scope, so a github.io preview under /<repo>/ gets its
// own) and the precache list. The unfilled copy in assets/ is removed: a
// worker there could only control /assets/.
//
// The manifest (site.webmanifest) and the 192 and 512 px icons are written by
// seo.mjs. layout.mjs registers the worker.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { page } from '../layout.mjs';

const ROOT = fileURLToPath(new URL('../../../', import.meta.url));
export const SW_SOURCE = join(ROOT, 'src/assets/sw.js');

/** The name of the cache that holds the pages a reader has opened (the same rule as sw.js). */
export const pagesCache = (base) => `primer:${base}:pages`;
export const dataCache = (base) => `primer:${base}:data`;

/**
 * The shell files under assets/ that every page needs: the stylesheet, every
 * top-level script but the worker itself, the icon, and the Latin subsets of
 * the fonts (the Latin Extended ones load only for the odd character, and are
 * cached when they do).
 */
export function shellAssets(names) {
  return names.filter((n) => /^[^/]+\.(css|js)$/.test(n) && n !== 'sw.js'
    || n === 'icon.svg'
    || /^fonts\/(?!.*-ext-)[^/]+\.woff2$/.test(n)).sort();
}

/** Every address the worker stores on install, under base. */
export function precacheList(base, assets) {
  return [
    base, `${base}daily/`, `${base}offline/`,
    `${base}site.webmanifest`, `${base}icon-192.png`, `${base}icon-512.png`, `${base}apple-touch-icon.png`,
    ...assets.map((a) => `${base}assets/${a}`),
  ];
}

/** A short content hash of the shell: name and bytes of each file, in order. */
export function shellVersion(files) {
  const h = createHash('sha256');
  for (const [name, data] of [...files].sort(([a], [b]) => a.localeCompare(b))) h.update(`${name}\0`).update(data).update('\0');
  return h.digest('hex').slice(0, 16);
}

/** sw.js with its three values filled in. Throws if a placeholder is missing, so a stale worker never ships. */
export function injectSW(src, { version, base, precache }) {
  for (const k of ["'__SW_VERSION__'", "'__SW_BASE__'", "'__SW_PRECACHE__'"]) if (!src.includes(k)) throw new Error(`sw.js: ${k} is missing`);
  return src
    .replace("'__SW_VERSION__'", JSON.stringify(version))
    .replace("'__SW_BASE__'", JSON.stringify(base))
    .replace("'__SW_PRECACHE__'", JSON.stringify(precache));
}

const STYLE = `<style>
.pw-offline .lead{max-width:40rem}
.pw-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:26px}
.pw-saved{margin-top:46px;max-width:46rem;box-shadow:var(--e1)}
.pw-saved .ic-q{font-size:19px}
.pw-ok{list-style:none;margin:0;padding:0;display:block}
.pw-ok li{position:relative;padding-left:30px;font-size:17.5px;line-height:32px;color:var(--read)}
.pw-ok li b{color:var(--ink)}
.pw-ok .i{position:absolute;left:0;top:7px;width:18px;height:18px;color:var(--ok)}
.pw-ok li.pw-no .i{color:var(--faint)}
.pw-here{margin-top:12px;padding-top:10px;border-top:1px dashed var(--line-strong)}
.pw-here h2{font-family:var(--mono);font-size:12.5px;font-weight:400;letter-spacing:.06em;text-transform:uppercase;color:var(--faint);line-height:32px;margin:0}
.pw-here ul{list-style:none;margin:0;padding:0;display:block}
.pw-here li{line-height:32px;font-size:17.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pw-here li a{font-weight:700}
.nf.pw-offline ul.pw-ok,.nf.pw-offline .pw-here ul{margin-top:0;display:block}
.nf.pw-offline li a{font-size:inherit}
@media(max-width:560px){.pw-saved{margin-top:40px;padding-left:16px;padding-right:16px}.pw-ok li{font-size:16.5px;line-height:30px}}
</style>`;

// Lists what this browser has kept: deck pages from the pages cache (their
// titles read from the stored HTML) and today's daily ten.
const script = (base) => `<script>
(function(){
var r=document.querySelector('[data-retry]');if(r){r.hidden=false;r.addEventListener('click',function(){location.reload()})}
if(!('caches' in window))return;
var base=${JSON.stringify(base)},box=document.querySelector('[data-offline-here]'),ul=box&&box.querySelector('ul');if(!ul)return;
var add=function(href,text){var li=document.createElement('li'),a=document.createElement('a');a.href=href;a.textContent=text;li.appendChild(a);ul.appendChild(li);box.hidden=false};
var today=new Date().toISOString().slice(0,10);
caches.match(base+'daily/days/'+today+'.json').then(function(hit){if(hit)add(base+'daily/','Today’s daily ten')}).catch(function(){}).then(function(){
return caches.open(${JSON.stringify(pagesCache(base))}).then(function(c){return c.keys()}).then(function(keys){
var decks=keys.map(function(k){return new URL(k.url)}).filter(function(u){return u.pathname.indexOf(base)===0&&/^[a-z0-9-]+\\/$/.test(u.pathname.slice(base.length))&&!/^(daily|browse|new|method|formats|shelf|offline|roadmap|families|which-deck)\\/$/.test(u.pathname.slice(base.length))}).slice(0,24);
return Promise.all(decks.map(function(u){return caches.match(u.href).then(function(res){return res?res.text():''}).then(function(h){var m=h.match(/<title>([^<|:]+)/);var t=m?m[1].replace(/&amp;/g,'&').trim():u.pathname.slice(base.length,-1);return{u:u,t:t}})})).then(function(xs){xs.sort(function(a,b){return a.t.localeCompare(b.t)}).forEach(function(x){add(x.u.pathname,x.t)})});
});
}).catch(function(){});
})();
</script>`;

export function offlinePage(cfg, decks = []) {
  const base = cfg.base;
  const tick = '<svg class="i" aria-hidden="true"><use href="#i-check"/></svg>';
  const dash = '<svg class="i" aria-hidden="true"><use href="#i-download"/></svg>';
  const body = `${STYLE}<div class="wrap nf pw-offline">
<span class="label">Offline</span>
<h1>You are offline</h1>
<p class="lead">This page is not saved on this device, and there is no connection to fetch it. The pages you have already opened still work, so you can keep studying.</p>
<p class="pw-actions"><button class="btn btn-primary" type="button" data-retry hidden>Try again</button><a class="btn" href="${base}">The home page</a><a class="btn btn-ghost" href="${base}daily/">The daily ten</a></p>
<div class="icard pw-saved taped">
<div class="ic-top"><span>What works offline</span><b>On this device</b></div>
<ul class="pw-ok">
<li>${tick}<b>Decks you have opened.</b> The deck page and its study cards are kept, and your progress is saved as you go.</li>
<li>${tick}<b>The daily ten, if you loaded it today.</b> Your score and streak count as usual.</li>
<li>${tick}<b>The home page and this site’s look,</b> kept from your first visit.</li>
<li class="pw-no">${dash}<b>Downloads need a connection:</b> Anki packages, PDFs and the other files are never stored, so they are always the latest.</li>
</ul>
<div class="pw-here" data-offline-here hidden><h2>Saved on this device</h2><ul></ul></div>
</div>
</div>`;
  return page(cfg, {
    title: `You are offline | ${cfg.brand}`,
    description: 'You are offline. Decks you have opened and the daily ten you loaded today still work on this device.',
    path: 'offline/',
    body,
    robots: 'noindex, follow',
    decks,
    scripts: script(base),
  });
}

export async function build({ cfg, decks = [], out }) {
  const offline = offlinePage(cfg, decks);
  const assetsDir = join(out, 'assets');
  const walk = (dir, pre = '') => (existsSync(dir) ? readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name), `${pre}${e.name}/`) : [`${pre}${e.name}`])) : []);
  const assets = shellAssets(walk(assetsDir));
  const src = readFileSync(SW_SOURCE, 'utf8');
  // The version covers the shell, the offline page and the worker's own code.
  const version = shellVersion([...assets.map((a) => [`assets/${a}`, readFileSync(join(assetsDir, a))]), ['offline/', offline], ['sw.js', src]]);
  rmSync(join(assetsDir, 'sw.js'), { force: true });
  return {
    pages: { 'offline/': offline },
    files: { 'sw.js': injectSW(src, { version, base: cfg.base, precache: precacheList(cfg.base, assets) }) },
    urls: [],
  };
}


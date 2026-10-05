// The service worker: the site works offline and can be installed.
//
// It is published at <base>sw.js, scope <base> (src/site/pages/pwa.mjs writes
// it there with the three values below filled in; this copy in assets/ is the
// source). layout.mjs registers it.
//
//   VERSION   a hash of every precached asset's bytes, so a deploy that changes
//             any of them installs a fresh shell cache and drops the old one
//   BASE      the site's path, e.g. /primer/ (a preview on github.io uses its own)
//   PRECACHE  the app shell: the stylesheet, the scripts, the fonts every page
//             uses, the icons, the home page, /daily/ and /offline/
//
// How each request is answered (route(), a pure function the tests run):
//   page        network first; a copy goes in the pages cache, which answers
//               when the network fails; /offline/ is the last resort. A page is
//               never served stale while the network works.
//   data        stale-while-revalidate: study.json, the daily ten's day files,
//               the pool, the search index and deck figures
//   asset       cache first, from the versioned shell (assets/ and the icons)
//   bypass      everything else goes straight to the network and is never
//               stored: other hosts, non-GET requests, the downloads (.apkg,
//               PDFs, CSV, zips and the rest), share images, feeds, sitemaps.
/* eslint-env serviceworker */
'use strict';

var VERSION = '__SW_VERSION__';
var BASE = '__SW_BASE__';
var PRECACHE = '__SW_PRECACHE__';

var PREFIX = 'primer:' + BASE + ':';
var SHELL = PREFIX + 'shell:' + VERSION;
var PAGES = PREFIX + 'pages';
var DATA = PREFIX + 'data';
var LIMITS = {}; LIMITS[PAGES] = 80; LIMITS[DATA] = 120;
var NETWORK_WAIT = 6000; // a page waits this long for a slow network before a cached copy answers

var DOWNLOAD = /\.(apkg|pdf|zip|gz|csv|tsv|txt|md|mochi|xml|png|jpe?g|webp|gif|svg)$/i;
var DATA_FILE = /(^|\/)(study\.json|search-index\.json|daily\/pool\.json|daily\/days\/\d{4}-\d\d-\d\d\.json)$/;
var FIGURE = /^[^/]+\/media\/[^/]+\.(png|jpe?g|webp|gif|svg)$/i;
var ICON = /^(site\.webmanifest|icon-\d+\.png|apple-touch-icon\.png)$/;

/**
 * Which strategy answers a request: 'page', 'data', 'asset' or 'bypass'.
 * req: { url, method, mode, accept }; scope: { origin, base }.
 */
function route(req, scope) {
  var u;
  try { u = new URL(req.url); } catch (e) { return 'bypass'; }
  if ((req.method || 'GET') !== 'GET') return 'bypass';
  if (u.origin !== scope.origin) return 'bypass';
  if (u.pathname.indexOf(scope.base) !== 0) return 'bypass';
  var rel = u.pathname.slice(scope.base.length);
  if (rel === 'sw.js') return 'bypass';
  if (/^assets\//.test(rel) && !/\.\./.test(rel)) return /(^|\/)sw\.js$/.test(rel) ? 'bypass' : 'asset';
  if (ICON.test(rel)) return 'asset';
  if (DATA_FILE.test(rel) || FIGURE.test(rel)) return 'data';
  if (DOWNLOAD.test(rel) || /\.json$/i.test(rel)) return 'bypass';
  var html = req.mode === 'navigate' || /text\/html/.test(req.accept || '');
  if (html && (rel === '' || /\/$/.test(rel) || /\.html$/.test(rel))) return 'page';
  return 'bypass';
}

/** A page's cache key: the address without its query or fragment (?day=, ?topic= show the same HTML). */
function pageKey(url) {
  var u = new URL(url);
  return u.origin + u.pathname;
}

/** Caches this worker keeps; every other cache under PREFIX is from an old version. */
function stale(names) {
  var keep = [SHELL, PAGES, DATA];
  return names.filter(function (n) { return n.indexOf(PREFIX) === 0 && keep.indexOf(n) < 0; });
}

if (typeof self !== 'undefined' && typeof self.addEventListener === 'function' && typeof caches !== 'undefined') {
  var origin = self.location.origin;
  var abs = function (p) { return new URL(p, self.location.href).href; };

  self.addEventListener('install', function (event) {
    event.waitUntil(caches.open(SHELL).then(function (cache) {
      // One by one, so one missing file cannot stop the rest; the offline page must arrive.
      return Promise.all(PRECACHE.map(function (p) {
        var req = new Request(abs(p), { cache: 'reload' });
        return fetch(req).then(function (res) {
          if (!res.ok) throw new Error(p + ' ' + res.status);
          return cache.put(/\/$/.test(p) ? pageKey(req.url) : req, res);
        }).catch(function (err) { if (p === BASE + 'offline/') throw err; });
      }));
    }).then(function () { return self.skipWaiting(); }));
  });

  self.addEventListener('activate', function (event) {
    event.waitUntil(caches.keys().then(function (names) {
      return Promise.all(stale(names).map(function (n) { return caches.delete(n); }));
    }).then(function () { return self.clients.claim(); }));
  });

  // waitUntil throws once the event has settled; the work still runs.
  var later = function (event, p) { try { event.waitUntil(p); } catch (e) { /* settled */ } return p; };
  var trim = function (name) {
    return caches.open(name).then(function (cache) {
      return cache.keys().then(function (keys) {
        var over = keys.length - LIMITS[name];
        return Promise.all(keys.slice(0, Math.max(0, over)).map(function (k) { return cache.delete(k); }));
      });
    });
  };
  var keep = function (name, key, res) {
    if (!res || !res.ok || res.type !== 'basic') return Promise.resolve();
    return caches.open(name).then(function (c) { return c.put(key, res); }).then(function () { return trim(name); });
  };

  var page = function (event) {
    var key = pageKey(event.request.url);
    var fromCache = function () {
      return caches.match(key, { ignoreSearch: true }).then(function (hit) {
        return hit || caches.match(abs(BASE + 'offline/'));
      });
    };
    var net = fetch(event.request).then(function (res) {
      if (res.ok) later(event, keep(PAGES, key, res.clone()));
      return res;
    });
    // A slow network: after a few seconds a cached copy answers if there is one.
    var slow = new Promise(function (resolve) {
      setTimeout(function () {
        caches.match(key, { ignoreSearch: true }).then(function (hit) { if (hit) resolve(hit); });
      }, NETWORK_WAIT);
    });
    return Promise.race([net, slow]).catch(fromCache).then(function (res) { return res || fromCache(); });
  };

  var data = function (event) {
    return caches.open(DATA).then(function (cache) {
      return cache.match(event.request).then(function (hit) {
        var net = fetch(event.request).then(function (res) {
          if (res.ok) later(event, keep(DATA, event.request, res.clone()));
          return res;
        });
        if (hit) { later(event, net.catch(function () {})); return hit; }
        return net;
      });
    });
  };

  var asset = function (event) {
    return caches.match(event.request, { ignoreSearch: true }).then(function (hit) {
      return hit || fetch(event.request).then(function (res) {
        if (res.ok && res.type === 'basic') { var copy = res.clone(); later(event, caches.open(SHELL).then(function (c) { return c.put(event.request, copy); })); }
        return res;
      });
    });
  };

  self.addEventListener('fetch', function (event) {
    var r = event.request;
    var how = route({ url: r.url, method: r.method, mode: r.mode, accept: r.headers.get('accept') }, { origin: origin, base: BASE });
    if (how === 'page') event.respondWith(page(event));
    else if (how === 'data') event.respondWith(data(event));
    else if (how === 'asset') event.respondWith(asset(event));
    // bypass: no respondWith, so the browser fetches it as if there were no worker
  });
}

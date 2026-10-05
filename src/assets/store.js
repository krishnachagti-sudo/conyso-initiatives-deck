// The site's one place for what this browser remembers (shared contract 1).
//
// Everything lives in localStorage under the prefix "primer:v1:", as JSON. No
// accounts, nothing is sent anywhere. Storage can be missing (private mode,
// blocked site data) or full: every read and write is wrapped, and a copy is
// kept in memory, so pages work the same for the visit and simply forget.
//
// window.Primer.store:
//   get(key, fallback), set(key, value) → true when it reached storage, remove(key)
//   progress(slug) → { seen, known, again, due, total, lastAt, lastCardId, lastTopic (topic slug),
//     lastTopicTitle }
//   allProgress() → { [slug]: progress } for decks with any activity
//   deck(slug), setDeck(slug, record): the raw per-deck record (study.js)
//   touchDeck(slug, title), recentDecks() → [{ slug, title, at }] newest first, max 12
//   shelf() → [slug], shelfItems() → [{ slug, title, at }], onShelf(slug), toggleShelf(slug, title) → boolean
//   settings(), setSettings(partial): applied as data-text, data-font, data-contrast
//     and data-focus (only when on) on <html>
//   recentSearches(), addSearch(q) (max 8)
//   persistent: false when nothing will outlive the page
// Every write fires window 'primer:store' with { detail: { key } } (and
// { error: 'quota' } when storage was full).
//
// A deck record, key "deck:<slug>":
//   { c: { <cardKey>: [box, dueDay|null, mark] }, n: [day, newCardsGraded],
//     f: { coreOnly, skipPrimers }, mode, sel (chosen topic), id, topic, tt (the last
//     card's ID, topic slug and topic name), at, total, exam }
//   cardKey is a short FNV-1a hash of the card ID; days are whole local days
//   since 1970-01-01 (see srs-core.js); mark is 'k' knew it, 'a' again, 's' seen.
//
// Older keys, from before this file, are moved in on load (see migrate()):
//   study:<path>, study-marks:<path>, exam-date:<path> → deck:<slug> (then removed)
//   daily:history, daily:progress → primer:v1:daily:… (merged on every load and
//   left in place while daily.js still reads them)
(function (root) {
  'use strict';
  var PREFIX = 'primer:v1:';
  var DAY = 86400000;
  var SIZES = ['s', 'm', 'l', 'xl'], FONTS = ['default', 'readable'], CONTRASTS = ['normal', 'high'];
  var DEFAULTS = { textSize: 'm', font: 'default', contrast: 'normal', focus: false };

  var cardKey = function (id) {
    var h = 0x811c9dc5;
    for (var i = 0; i < id.length; i++) { h ^= id.charCodeAt(i); h = Math.imul(h, 0x01000193); }
    return (h >>> 0).toString(36);
  };
  var dayNum = function (t) { var d = t == null ? new Date() : new Date(t); return Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / DAY); };
  var slugOfPath = function (p) { var s = String(p).replace(/index\.html$/, '').split('/').filter(Boolean); return s[s.length - 1] || ''; };

  /**
   * A store over a Storage-like object (or a function returning one, which may
   * throw). opts: { win: event target with dispatchEvent, doc: for settings,
   * now: () => ms }. Exposed for the tests; the page uses window.Primer.store.
   */
  function createStore(storage, opts) {
    opts = opts || {};
    var win = opts.win || null;
    var now = opts.now || function () { return Date.now(); };
    var mem = {};
    var ls = null;
    try {
      ls = typeof storage === 'function' ? storage() : storage;
      if (ls) { ls.setItem(PREFIX + 'probe', '1'); ls.removeItem(PREFIX + 'probe'); }
    } catch (e) { ls = null; }

    var raw = function (k) { try { return ls ? ls.getItem(k) : null; } catch (e) { return null; } };
    var emit = function (detail) {
      if (!win || !win.dispatchEvent) return;
      try { win.dispatchEvent(new win.CustomEvent('primer:store', { detail: detail })); } catch (e) { /* old browsers */ }
    };
    var isQuota = function (e) { return e && (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED' || e.code === 22 || e.code === 1014); };

    var get = function (key, fallback) {
      if (Object.prototype.hasOwnProperty.call(mem, key)) return mem[key] === undefined ? fallback : JSON.parse(mem[key]);
      var s = raw(PREFIX + key);
      if (s == null) return fallback;
      try { return JSON.parse(s); } catch (e) { return fallback; }
    };
    var set = function (key, value) {
      var s = JSON.stringify(value);
      var ok = false, quota = false;
      if (ls) {
        try { ls.setItem(PREFIX + key, s); ok = true; } catch (e) { quota = isQuota(e); }
      }
      // Kept in memory only when storage failed, so the visit still works.
      if (ok) delete mem[key]; else mem[key] = s;
      emit(quota ? { key: key, error: 'quota' } : { key: key });
      return ok;
    };
    var remove = function (key) {
      try { if (ls) ls.removeItem(PREFIX + key); } catch (e) { /* ignore */ }
      mem[key] = undefined;
      emit({ key: key });
    };

    // ── Moving older keys in ─────────────────────────────────────────────
    var legacyKeys = function () {
      var out = [];
      try { for (var i = 0; ls && i < ls.length; i++) out.push(ls.key(i)); } catch (e) { /* ignore */ }
      return out;
    };
    var readLegacy = function (k) { var s = raw(k); if (s == null) return null; try { return JSON.parse(s); } catch (e) { return s; } };
    var migrate = function () {
      if (!ls) return;
      var keys = legacyKeys();
      var today = dayNum(now());
      var bySlug = {};
      keys.forEach(function (k) {
        var m = /^(study|study-marks|exam-date):(.+)$/.exec(k || '');
        if (!m) return;
        var slug = slugOfPath(m[2]);
        if (!slug) return;
        (bySlug[slug] = bySlug[slug] || {})[m[1]] = k;
      });
      Object.keys(bySlug).forEach(function (slug) {
        var src = bySlug[slug];
        var rec = get('deck:' + slug, null) || { c: {} };
        rec.c = rec.c || {};
        if (src['study-marks']) {
          var marks = readLegacy(src['study-marks']) || {};
          var i = 0;
          Object.keys(marks).forEach(function (h) {
            if (rec.c[h]) return;
            var v = marks[h];
            // Known cards come back over the next week rather than all tomorrow.
            if (v === 'k') rec.c[h] = [1, today + 1 + (i++ % 7), 'k'];
            else if (v === 'a') rec.c[h] = [0, today, 'a'];
            else rec.c[h] = [0, null, 's'];
          });
        }
        if (src.study) {
          var st = readLegacy(src.study) || {};
          rec.f = rec.f || { coreOnly: !!st.coreOnly, skipPrimers: !!st.skipPrimers };
          if (!rec.id && st.id) rec.id = st.id;
        }
        if (src['exam-date'] && !rec.exam) { var d = readLegacy(src['exam-date']); if (/^\d{4}-\d{2}-\d{2}$/.test(String(d))) rec.exam = String(d); }
        if (!rec.at) rec.at = now();
        if (set('deck:' + slug, rec)) Object.keys(src).forEach(function (t) { try { ls.removeItem(src[t]); } catch (e) { /* ignore */ } });
      });
      // The daily ten: merged, never removed, while daily.js still uses the old keys.
      var h = readLegacy('daily:history');
      if (h && typeof h === 'object') {
        var cur = get('daily:history', {}) || {};
        var changed = false;
        Object.keys(h).forEach(function (d) { if (!cur[d]) { cur[d] = h[d]; changed = true; } });
        if (changed) set('daily:history', cur);
      }
      var p = readLegacy('daily:progress');
      if (p && typeof p === 'object') {
        var cp = get('daily:progress', null);
        if (!cp || String(p.key || '') > String(cp.key || '')) set('daily:progress', p);
      }
    };

    // ── Decks ────────────────────────────────────────────────────────────
    var deck = function (slug) { var r = get('deck:' + slug, null); return r && typeof r === 'object' ? r : null; };
    var setDeck = function (slug, rec) { return set('deck:' + slug, rec); };
    var progress = function (slug) {
      var r = deck(slug) || {};
      var c = r.c || {};
      var today = dayNum(now());
      var t = { seen: 0, known: 0, again: 0, due: 0, total: Number(r.total) || 0, lastAt: Number(r.at) || 0, lastCardId: r.id || null, lastTopic: r.topic || null, lastTopicTitle: r.tt || null };
      Object.keys(c).forEach(function (k) {
        var e = c[k];
        if (!e) return;
        t.seen += 1;
        if (e[2] === 'k') t.known += 1; else if (e[2] === 'a') t.again += 1;
        if (e[1] != null && e[1] <= today) t.due += 1;
      });
      return t;
    };
    var allProgress = function () {
      var out = {};
      var slugs = {};
      var pre = PREFIX + 'deck:';
      legacyKeys().forEach(function (k) { if (k && k.indexOf(pre) === 0) slugs[k.slice(pre.length)] = 1; });
      Object.keys(mem).forEach(function (k) { if (k.indexOf('deck:') === 0) slugs[k.slice(5)] = mem[k] !== undefined ? 1 : 0; });
      Object.keys(slugs).forEach(function (s) {
        if (!slugs[s]) return;
        var p = progress(s);
        if (p.seen || p.lastCardId) out[s] = p;
      });
      return out;
    };
    var list = function (key) { var v = get(key, []); return Array.isArray(v) ? v : []; };
    var touchDeck = function (slug, title) {
      if (!slug) return;
      var l = list('recent').filter(function (d) { return d && d.slug !== slug; });
      l.unshift({ slug: slug, title: String(title || slug), at: now() });
      set('recent', l.slice(0, 12));
    };
    var recentDecks = function () { return list('recent').slice(0, 12); };
    var shelfItems = function () { return list('shelf').filter(function (d) { return d && d.slug; }); };
    var shelf = function () { return shelfItems().map(function (d) { return d.slug; }); };
    var onShelf = function (slug) { return shelf().indexOf(slug) >= 0; };
    var toggleShelf = function (slug, title) {
      var l = shelfItems();
      var on = !l.some(function (d) { return d.slug === slug; });
      if (on) l.unshift({ slug: slug, title: String(title || slug), at: now() });
      else l = l.filter(function (d) { return d.slug !== slug; });
      set('shelf', l);
      return on;
    };

    // ── Settings ─────────────────────────────────────────────────────────
    var settings = function () {
      var s = get('settings', {}) || {};
      return {
        textSize: SIZES.indexOf(s.textSize) >= 0 ? s.textSize : DEFAULTS.textSize,
        font: FONTS.indexOf(s.font) >= 0 ? s.font : DEFAULTS.font,
        contrast: CONTRASTS.indexOf(s.contrast) >= 0 ? s.contrast : DEFAULTS.contrast,
        focus: s.focus === true,
      };
    };
    var apply = function () {
      var el = opts.doc && opts.doc.documentElement;
      if (!el) return;
      var s = settings();
      el.setAttribute('data-text', s.textSize);
      el.setAttribute('data-font', s.font);
      el.setAttribute('data-contrast', s.contrast);
      if (s.focus) el.setAttribute('data-focus', 'on'); else el.removeAttribute('data-focus');
    };
    var setSettings = function (partial) {
      var s = settings();
      for (var k in partial || {}) if (Object.prototype.hasOwnProperty.call(DEFAULTS, k)) s[k] = partial[k];
      set('settings', s);
      apply();
      return settings();
    };

    // ── Searches ─────────────────────────────────────────────────────────
    var recentSearches = function () { return list('searches').filter(function (q) { return typeof q === 'string'; }).slice(0, 8); };
    var addSearch = function (q) {
      q = String(q || '').trim().slice(0, 120);
      if (!q) return;
      var l = recentSearches().filter(function (x) { return x.toLowerCase() !== q.toLowerCase(); });
      l.unshift(q);
      set('searches', l.slice(0, 8));
    };

    try { migrate(); } catch (e) { /* never block a page on old data */ }
    apply();
    return {
      get: get, set: set, remove: remove, deck: deck, setDeck: setDeck, progress: progress, allProgress: allProgress,
      touchDeck: touchDeck, recentDecks: recentDecks, shelf: shelf, shelfItems: shelfItems, onShelf: onShelf, toggleShelf: toggleShelf,
      settings: settings, setSettings: setSettings, applySettings: apply, recentSearches: recentSearches, addSearch: addSearch,
      persistent: !!ls, cardKey: cardKey, dayNum: dayNum, PREFIX: PREFIX,
    };
  }

  root.Primer = root.Primer || {};
  root.Primer.createStore = createStore;
  if (typeof document === 'undefined' || !document.documentElement || root.Primer.store) return;
  var store = createStore(function () { return root.localStorage; }, { win: root, doc: document });
  root.Primer.store = store;
  // Another tab changed something: re-apply settings and tell this page.
  root.addEventListener('storage', function (e) {
    if (!e.key || e.key.indexOf(PREFIX) !== 0) return;
    var key = e.key.slice(PREFIX.length);
    if (key === 'settings') store.applySettings();
    try { root.dispatchEvent(new CustomEvent('primer:store', { detail: { key: key, external: true } })); } catch (x) { /* ignore */ }
  });
})(typeof window !== 'undefined' ? window : globalThis);

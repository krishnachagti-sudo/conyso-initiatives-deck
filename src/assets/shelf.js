// The reader's own shelf, on every page (shared contracts 1 and 2):
//   [data-save-deck] buttons save a deck (deck pages, and a small button this
//   file adds to each deck tile on the browse, family and new pages);
//   [data-due] shows a deck's cards due today; [data-shelf-count] the number
//   of saved decks; the deck page's learning path gets per-step progress and a
//   "you stopped here" note; the home page gets "Continue where you left off";
//   /shelf/ lists saved and recently viewed decks.
// Everything is read from window.Primer.store (store.js); nothing is sent.
(function () {
  'use strict';
  var P = window.Primer;
  var S = P && P.store;
  if (!S) return;
  var me = document.currentScript;
  var base = me && me.src ? new URL('../', me.src).pathname : '/';
  var doc = document;
  var all = function (sel, root) { return Array.prototype.slice.call((root || doc).querySelectorAll(sel)); };
  var n0 = function (n) { return Number(n || 0).toLocaleString('en-GB'); };
  var plural = function (n, one, many) { return n0(n) + ' ' + (n === 1 ? one : (many || one + 's')); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var icon = function (name) { return '<svg class="i" aria-hidden="true"><use href="#i-' + name + '"/></svg>'; };
  // The same slug rule as src/decks.mjs, so topic names match their anchors.
  var slugify = function (s) { return String(s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); };
  var ago = function (t) {
    if (!t) return '';
    var m = Math.round((Date.now() - t) / 60000);
    if (m < 2) return 'just now';
    if (m < 60) return m + ' minutes ago';
    var h = Math.round(m / 60);
    if (h < 24) return plural(h, 'hour') + ' ago';
    var d = Math.round(h / 24);
    return d === 1 ? 'yesterday' : plural(d, 'day') + ' ago';
  };
  var deckURL = function (slug) { return base + encodeURIComponent(slug) + '/'; };
  var resumeURL = function (slug, p) { return deckURL(slug) + (p && p.lastTopic ? '?topic=' + encodeURIComponent(slugify(p.lastTopic)) : '') + '#try'; };

  // One polite live region for everything this file announces.
  var live = doc.createElement('p');
  live.className = 'sr-only'; live.setAttribute('role', 'status'); live.setAttribute('aria-live', 'polite');
  doc.body.appendChild(live);
  var say = function (t) { live.textContent = ''; setTimeout(function () { live.textContent = t; }, 30); };

  // ── Save buttons ────────────────────────────────────────────────────────
  var paintSave = function (b) {
    var on = S.onShelf(b.getAttribute('data-save-deck'));
    b.setAttribute('data-painted', '');
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    var label = b.querySelector('span:not(.sr-only)');
    if (label) label.textContent = on ? 'On your shelf' : 'Save to shelf';
    var sr = b.querySelector('.sr-only');
    if (sr) sr.textContent = (on ? 'On your shelf: ' : 'Save to shelf: ') + (b.getAttribute('data-title') || '');
    b.title = on ? 'On your shelf. Press to remove.' : 'Save to your shelf';
  };
  doc.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-save-deck]');
    if (!b) return;
    var slug = b.getAttribute('data-save-deck');
    var title = b.getAttribute('data-title') || slug;
    var on = S.toggleShelf(slug, title);
    b.classList.remove('pop'); void b.offsetWidth; if (on) b.classList.add('pop');
    say(on ? title + ' saved to your shelf.' : title + ' removed from your shelf.');
  });

  // Deck tiles on other pages: a small bookmark in each tile's corner.
  all('.dx-item').forEach(function (li) {
    var a = li.querySelector('h3 a[href]');
    if (!a || li.querySelector('[data-save-deck]')) return;
    var slug = li.getAttribute('data-slug') || (a.getAttribute('href').split('/').filter(Boolean).pop() || '');
    if (!slug) return;
    var title = (a.firstChild && a.firstChild.nodeType === 3 ? a.firstChild.nodeValue : a.textContent).trim();
    var b = doc.createElement('button');
    b.type = 'button'; b.className = 'tile-save';
    b.setAttribute('data-save-deck', slug); b.setAttribute('data-title', title);
    b.innerHTML = icon('bookmark') + '<span class="sr-only"></span>';
    li.classList.add('has-save');
    li.appendChild(b);
  });

  // ── Counts ──────────────────────────────────────────────────────────────
  var paintCounts = function () {
    all('[data-save-deck]').forEach(function (b) { b.hidden = false; paintSave(b); });
    all('[data-shelf-count]').forEach(function (el) {
      var n = S.shelf().length;
      el.textContent = n ? String(n) : '';
      el.setAttribute('aria-label', n ? plural(n, 'saved deck') : '');
    });
    all('[data-due]').forEach(function (el) {
      var due = S.progress(el.getAttribute('data-due')).due;
      el.textContent = due ? n0(due) + ' due' : '';
      el.title = due ? plural(due, 'card') + ' due today' : '';
    });
  };

  // ── Deck page: touch, per-step progress, "you stopped here" ─────────────
  var deckEl = doc.querySelector('[data-deck]');
  if (deckEl) S.touchDeck(deckEl.getAttribute('data-deck'), deckEl.getAttribute('data-deck-title'));
  var paintPath = function () {
    if (!deckEl) return;
    var slug = deckEl.getAttribute('data-deck');
    var rec = S.deck(slug) || {};
    var c = rec.c || {};
    var p = S.progress(slug);
    var today = S.dayNum();
    var here = p.lastTopic ? slugify(p.lastTopic) : '';
    var any = Object.keys(c).length > 0;
    all('.path li[data-topic]').forEach(function (li) {
      var ts = li.getAttribute('data-topic');
      var ids = all('#t-' + ts + ' .cards > li > i[id]').map(function (i) { return i.id; });
      var seen = 0, due = 0;
      ids.forEach(function (id) { var e = c[S.cardKey(id)]; if (!e) return; seen += 1; if (e[1] != null && e[1] <= today) due += 1; });
      var out = li.querySelector('[data-topic-progress]');
      if (out) out.textContent = any && ids.length ? ' · ' + n0(seen) + ' of ' + n0(ids.length) + ' seen' + (due ? ' · ' + n0(due) + ' due' : '') : '';
      var bar = li.querySelector('.pbar i');
      if (bar) bar.style.width = ids.length ? Math.round((seen / ids.length) * 100) + '%' : '0%';
      li.classList.toggle('done', any && ids.length > 0 && seen === ids.length);
      var on = here && here === ts;
      li.classList.toggle('here', !!on);
      var note = li.querySelector('.here-note');
      if (on && !note) {
        note = doc.createElement('p');
        note.className = 'here-note';
        note.innerHTML = 'You stopped here';
        li.insertBefore(note, li.querySelector('.pfoot'));
      } else if (!on && note) note.remove();
    });
  };

  // ── Home: continue where you left off ───────────────────────────────────
  var resume = doc.querySelector('[data-resume]');
  var paintResume = function () {
    if (!resume) return;
    var recent = S.recentDecks();
    var prog = S.allProgress();
    // The deck studied most recently, else the deck opened most recently.
    var pick = null;
    Object.keys(prog).forEach(function (s) { if (!pick || (prog[s].lastAt || 0) > (prog[pick].lastAt || 0)) pick = s; });
    var lastOpen = recent[0];
    if (lastOpen && (!pick || (lastOpen.at || 0) > (prog[pick].lastAt || 0) + 864e5)) pick = lastOpen.slug;
    if (!pick) { resume.hidden = true; resume.innerHTML = ''; return; }
    var p = S.progress(pick);
    var title = (recent.filter(function (r) { return r.slug === pick; })[0] || S.shelfItems().filter(function (r) { return r.slug === pick; })[0] || { title: pick }).title;
    var pct = p.total ? Math.min(100, Math.round((p.seen / p.total) * 100)) : 0;
    var others = recent.filter(function (r) { return r.slug !== pick; }).slice(0, 3);
    var started = p.seen > 0;
    resume.innerHTML =
      '<div class="rs-card">' +
        '<div class="rs-main">' +
          '<p class="eyebrow" id="resume-h">' + (started ? 'Continue where you left off' : 'Pick up where you were') + '</p>' +
          '<h2 class="rs-t"><a href="' + deckURL(pick) + '">' + esc(title) + '</a></h2>' +
          '<p class="rs-meta">' + (p.lastTopic ? 'Next: ' + esc(p.lastTopicTitle || p.lastTopic) + ' · ' : '') + esc(ago(p.lastAt || (lastOpen && lastOpen.slug === pick ? lastOpen.at : 0))) + '</p>' +
          (started ? '<div class="rs-bar" role="img" aria-label="' + n0(p.seen) + ' of ' + n0(p.total || p.seen) + ' cards seen"><i style="width:' + pct + '%"></i></div>' +
            '<p class="rs-n"><span>' + n0(p.seen) + (p.total ? ' of ' + n0(p.total) : '') + ' seen</span>' + (p.due ? '<b class="due-chip">' + n0(p.due) + ' due</b>' : '<span>nothing due today</span>') + '</p>' : '<p class="rs-n"><span>Not started yet. The first cards explain the terms.</span></p>') +
        '</div>' +
        '<div class="rs-act"><a class="btn btn-primary" href="' + resumeURL(pick, p) + '">' + icon('play') + (started ? ' Resume' : ' Start') + '</a>' +
          '<a class="link" href="' + base + 'shelf/">Your shelf →</a></div>' +
      '</div>' +
      (others.length ? '<p class="rs-more"><span>Also open lately:</span> ' + others.map(function (r) { return '<a href="' + deckURL(r.slug) + '">' + esc(r.title) + '</a>'; }).join('') + '</p>' : '');
    resume.hidden = false;
    requestAnimationFrame(function () { resume.classList.add('in'); });
  };

  // ── /shelf/ ─────────────────────────────────────────────────────────────
  var shelfPage = doc.querySelector('[data-shelf-page]');
  var table = {};
  try { JSON.parse((doc.getElementById('shelf-data') || {}).textContent || '[]').forEach(function (d) { table[d.s] = d; }); } catch (e) { /* no table */ }
  var ring = function (pct) {
    var r = 21, len = 2 * Math.PI * r;
    return '<svg class="ring" viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="' + r + '" class="ring-bg"/>' + (pct ? '<circle cx="26" cy="26" r="' + r + '" class="ring-fg" stroke-dasharray="' + (len * pct / 100).toFixed(1) + ' ' + len.toFixed(1) + '" transform="rotate(-90 26 26)"/>' : '') + '</svg>';
  };
  var paintShelf = function () {
    if (!shelfPage) return;
    var items = S.shelfItems();
    var list = doc.getElementById('shelf-list');
    var empty = doc.getElementById('shelf-empty');
    doc.getElementById('shelf-n').textContent = items.length ? plural(items.length, 'deck') + ' saved' : '';
    empty.hidden = items.length > 0;
    list.innerHTML = items.map(function (it) {
      var d = table[it.slug] || { t: it.title || it.slug, c: 0 };
      var p = S.progress(it.slug);
      var total = p.total || d.c || 0;
      var pct = total ? Math.min(100, Math.round((p.seen / total) * 100)) : 0;
      return '<li class="sh-tile">' +
        '<h3 class="fam-tab"><a href="' + deckURL(it.slug) + '">' + esc(d.t || it.title) + '</a></h3>' +
        '<div class="sh-card">' +
          '<div class="sh-ring">' + ring(pct) + '<b>' + pct + '<small>%</small></b></div>' +
          '<div class="sh-info"><p class="sh-fam">' + esc(d.f || '') + '</p>' +
            '<p class="sh-n">' + (p.seen ? n0(p.seen) + ' of ' + n0(total) + ' seen' : total ? n0(total) + ' cards · not started' : 'Not started') + '</p>' +
            (p.due ? '<p><span class="due-chip">' + n0(p.due) + ' due today</span></p>' : p.seen ? '<p class="sh-ok">' + icon('check') + ' Nothing due today</p>' : '') +
          '</div>' +
          '<div class="sh-act"><a class="btn btn-primary" href="' + resumeURL(it.slug, p) + '">' + icon('play') + (p.seen ? ' Resume' : ' Start') + '<span class="sr-only">: ' + esc(d.t || it.title) + '</span></a>' +
            '<button class="sh-rm" type="button" data-save-deck="' + esc(it.slug) + '" data-title="' + esc(d.t || it.title) + '" aria-pressed="true">' + icon('close') + '<span class="sr-only"></span></button></div>' +
        '</div></li>';
    }).join('');
    all('.sh-rm', list).forEach(function (b) { b.querySelector('.sr-only').textContent = 'Remove ' + b.getAttribute('data-title') + ' from your shelf'; b.title = 'Remove from shelf'; });
    var rec = S.recentDecks();
    var rs = doc.getElementById('recent');
    rs.hidden = rec.length === 0;
    doc.getElementById('recent-list').innerHTML = rec.map(function (r) {
      var d = table[r.slug] || {};
      var p = S.progress(r.slug);
      var total = p.total || d.c || 0;
      return '<li><a href="' + deckURL(r.slug) + '">' + esc(d.t || r.title) + '</a>' +
        '<span class="rl-meta">' + (p.seen && total ? n0(p.seen) + ' of ' + n0(total) + ' seen · ' : '') + esc(ago(r.at)) + '</span>' +
        (S.onShelf(r.slug) ? '<span class="rl-on">' + icon('bookmark') + '<span class="sr-only">On your shelf</span></span>' : '') + '</li>';
    }).join('');
  };

  var paint = function () { paintCounts(); paintPath(); paintResume(); paintShelf(); };
  paint();
  var queued = false;
  window.addEventListener('primer:store', function (e) {
    var k = e.detail && e.detail.key || '';
    if (k === 'settings' || k === 'searches' || queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; paint(); });
  });
  // Buttons drawn later by other scripts (the deck finder) are painted too.
  if ('MutationObserver' in window) {
    var late = false;
    new MutationObserver(function () {
      if (late) return;
      late = true;
      requestAnimationFrame(function () { late = false; all('[data-save-deck]:not([data-painted])').forEach(function (b) { b.hidden = false; paintSave(b); }); });
    }).observe(doc.body, { childList: true, subtree: true });
  }
  // Coming back to a page from the history cache: progress may have moved on.
  window.addEventListener('pageshow', function (e) { if (e.persisted) paint(); });
})();

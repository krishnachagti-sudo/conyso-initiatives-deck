// Site behaviour shared by every page: theme, menu, the measured masthead
// height, random deck, the deck page's phone action bar, the contents rail's
// scroll spy, share and copy buttons, reading settings and focus mode,
// keyboard shortcuts (contract 3), tabs, card links and reports, back to top.
// Every feature degrades to plain HTML without script.
(function () {
  'use strict';
  var root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } },
  };

  // Theme: the head script already applied the stored or system choice.
  var theme = document.getElementById('theme');
  if (theme) theme.addEventListener('click', function () {
    var dark = root.dataset.theme !== 'dark';
    if (dark) root.dataset.theme = 'dark'; else delete root.dataset.theme;
    store.set('theme', dark ? 'dark' : 'light');
  });

  // Menu (phones).
  var header = document.querySelector('header.site');
  var menu = document.getElementById('menu');
  if (menu && header) {
    menu.addEventListener('click', function () {
      var open = header.classList.toggle('menu-open');
      menu.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('menu-open')) { header.classList.remove('menu-open'); menu.setAttribute('aria-expanded', 'false'); menu.focus(); }
    });
  }

  // The masthead's real height, so sticky rails park below it (playbook §3.2).
  var measure = function () { if (header) root.style.setProperty('--header-h', header.offsetHeight + 'px'); };
  measure();
  window.addEventListener('resize', measure);

  // Contents rail: highlight the section in view and keep its chip visible.
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
  if (links.length && 'IntersectionObserver' in window) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var current = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var a = byId[en.target.id];
        if (!a || a === current) return;
        if (current) current.classList.remove('on');
        a.classList.add('on');
        current = a;
        var rail = a.closest('ol');
        if (rail && rail.scrollWidth > rail.clientWidth) rail.scrollTo({ left: a.offsetLeft - 24, behavior: 'smooth' });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    Object.keys(byId).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  // Share and copy.
  var copy = function (text, said) {
    var done = function () { if (said) { said.textContent = 'Copied'; setTimeout(function () { said.textContent = ''; }, 1800); } };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, function () {});
    else { var t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); done(); } catch (e) {} t.remove(); }
  };
  Array.prototype.forEach.call(document.querySelectorAll('[data-share]'), function (box) {
    var url = function () { return box.dataset.shareUrl || location.href.split('#')[0]; };
    var title = function () { return box.dataset.shareTitle || document.title; };
    var said = box.querySelector('.sh-said');
    var nat = box.querySelector('[data-share-native]');
    if (nat && navigator.share) {
      nat.hidden = false;
      nat.addEventListener('click', function () { navigator.share({ title: title(), text: box.dataset.shareText || '', url: url() }).catch(function () {}); });
    }
    Array.prototype.forEach.call(box.querySelectorAll('[data-share-copy]'), function (b) {
      b.addEventListener('click', function () {
        copy(b.dataset.shareCopy === 'md' ? '[' + title() + '](' + url() + ')' : url(), said);
      });
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll('[data-copy-from]'), function (b) {
    b.addEventListener('click', function () {
      var src = document.getElementById(b.dataset.copyFrom);
      if (src) copy(src.textContent.trim(), b.nextElementSibling);
    });
  });

  // Random deck: the link goes to a deck picked at build time; with script,
  // each press picks again from the published list.
  Array.prototype.forEach.call(document.querySelectorAll('[data-random-deck]'), function (a) {
    var slugs = (a.dataset.decks || '').split(/\s+/).filter(Boolean);
    if (slugs.length < 2) return;
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
      var here = a.getAttribute('href');
      var base = here.replace(/[^/]+\/$/, '');
      var next = here;
      while (next === here) next = base + slugs[Math.floor(Math.random() * slugs.length)] + '/';
      a.setAttribute('href', next);
    });
  });

  // Phones: the deck page's action bar steps aside while the answer box (which
  // has the same buttons) or the downloads are on screen.
  var actbar = document.querySelector('[data-actbar]');
  if (actbar && 'IntersectionObserver' in window) {
    var onScreen = new Set();
    var watch = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) onScreen.add(en.target); else onScreen.delete(en.target); });
      actbar.classList.toggle('away', onScreen.size > 0);
    });
    ['answer', 'download', 'try'].forEach(function (id) { var el = document.getElementById(id); if (el) watch.observe(el); });
    var foot = document.querySelector('footer.site');
    if (foot) watch.observe(foot);
  }

  // Motion (all of it optional): highlighter marks draw in, below-the-fold
  // blocks rise into place, and numbers count up, each once, as they come into
  // view. Nothing in view at load is ever hidden, and with reduced motion or no
  // IntersectionObserver every element simply stays as the HTML has it.
  var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var marks = document.querySelectorAll('.hl,.hl-u');
  if (still || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(marks, function (m) { m.classList.add('on'); });
  } else {
    var fmt = function (n) { return n.toLocaleString('en-GB'); };
    var count = function (el) {
      var end = parseInt(el.textContent.replace(/\D/g, ''), 10);
      if (!(end > 9)) return;
      el.style.display = 'inline-block'; el.style.minWidth = el.getBoundingClientRect().width + 'px'; el.style.textAlign = 'right';
      var t0 = null, dur = 900;
      var step = function (t) {
        if (t0 === null) t0 = t;
        var k = Math.min(1, (t - t0) / dur);
        el.textContent = fmt(Math.round(end * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        seen.unobserve(el);
        if (el.hasAttribute('data-count')) count(el);
        el.classList.add('on');
        if (el.classList.contains('rv')) setTimeout(function () { el.classList.remove('rv', 'on'); el.style.removeProperty('--rv'); }, 1200); // hand the transform back to :hover
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    var vh = window.innerHeight;
    var rise = '.band-h,.fam,.sci-c,.trio>li,.ask,.ways-grid>a,.trust>div,.new-list li,.sec,.pcard,.dx-item,.dx-fams>li,.gl-term';
    Array.prototype.forEach.call(document.querySelectorAll(rise), function (el) {
      if (el.getBoundingClientRect().top < vh) return; // in view at load: never hidden
      var i = 0, s = el; while ((s = s.previousElementSibling) && i < 5) i += 1;
      el.style.setProperty('--rv', i);
      el.classList.add('rv');
      seen.observe(el);
    });
    // Safety: nothing may stay hidden. At the foot of the page (where a
    // bottom margin can keep the last blocks from ever "entering"), before
    // printing, and once the page is long done loading, show whatever is left.
    var revealAll = function () {
      Array.prototype.forEach.call(document.querySelectorAll('.rv:not(.on),.hl:not(.on),.hl-u:not(.on)'), function (el) { seen.unobserve(el); el.classList.add('on'); });
    };
    var atFoot = function () { if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) { revealAll(); window.removeEventListener('scroll', atFoot); } };
    window.addEventListener('scroll', atFoot, { passive: true });
    window.addEventListener('beforeprint', revealAll);
    window.addEventListener('resize', function () { if (window.innerHeight > document.documentElement.scrollHeight * 0.8) revealAll(); }); // a full-page capture
    Array.prototype.forEach.call(marks, function (m) { seen.observe(m); });
    Array.prototype.forEach.call(document.querySelectorAll('[data-count]'), function (n) { seen.observe(n); });
  }

  var $ = function (sel, r) { return (r || document).querySelector(sel); };
  var $$ = function (sel, r) { return Array.prototype.slice.call((r || document).querySelectorAll(sel)); };
  var me = document.currentScript;
  var base = me && me.src ? new URL('../', me.src).pathname : '/';
  var S = window.Primer && window.Primer.store;

  // Reading settings: a card that drops from the masthead. store.js keeps the
  // choices and writes them onto <html> as data-text, data-font, data-contrast
  // and data-focus; the stylesheet does the rest.
  var sBtn = document.getElementById('settings-btn');
  var sBox = document.getElementById('settings');
  if (sBtn && sBox && S) {
    sBtn.hidden = false;
    var sync = function () {
      var st = S.settings();
      var pick = { 'st-text': st.textSize, 'st-font': st.font, 'st-contrast': st.contrast };
      $$('input[type=radio]', sBox).forEach(function (i) { i.checked = pick[i.name] === i.value; });
      var f = $('input[name=st-focus]', sBox); if (f) f.checked = !!st.focus;
    };
    var openS = function () {
      sync(); sBox.hidden = false; sBtn.setAttribute('aria-expanded', 'true');
      var first = $('input:checked', sBox) || $('input', sBox); if (first) first.focus();
    };
    var closeS = function (back) { if (sBox.hidden) return; sBox.hidden = true; sBtn.setAttribute('aria-expanded', 'false'); if (back) sBtn.focus(); };
    sBtn.addEventListener('click', function () { if (sBox.hidden) openS(); else closeS(); });
    $$('[data-settings-close]', sBox).forEach(function (b) { b.addEventListener('click', function () { closeS(true); }); });
    sBox.addEventListener('keydown', function (e) { if (e.key === 'Escape') { e.stopPropagation(); closeS(true); } });
    document.addEventListener('click', function (e) { if (!sBox.hidden && !sBox.contains(e.target) && !sBtn.contains(e.target)) closeS(); });
    document.addEventListener('focusin', function (e) { if (!sBox.hidden && !sBox.contains(e.target) && e.target !== sBtn) closeS(); });
    sBox.addEventListener('change', function (e) {
      var t = e.target;
      if (t.name === 'st-text') S.setSettings({ textSize: t.value });
      else if (t.name === 'st-font') S.setSettings({ font: t.value });
      else if (t.name === 'st-contrast') S.setSettings({ contrast: t.value });
      else if (t.name === 'st-focus') { S.setSettings({ focus: t.checked }); if (t.checked) focusTarget(); }
      measure();
    });
    var reset = $('[data-settings-reset]', sBox);
    if (reset) reset.addEventListener('click', function () { S.setSettings({ textSize: 'm', font: 'default', contrast: 'normal', focus: false }); sync(); measure(); });
    window.addEventListener('primer:store', function (e) { if (e.detail && e.detail.key === 'settings') sync(); });
  }
  // Focus mode keeps only the study cards or the daily ten; bring them into view.
  var focusTarget = function () {
    var t = document.getElementById('try') || $('.dy-app');
    if (t) setTimeout(function () { t.scrollIntoView({ block: 'start' }); }, 30);
  };
  $$('[data-focus-exit]').forEach(function (b) {
    b.addEventListener('click', function () { if (S) S.setSettings({ focus: false }); else delete root.dataset.focus; measure(); });
  });
  if (root.dataset.focus === 'on') focusTarget();

  // Keyboard shortcuts (contract 3). Page widgets keep their own keys; nothing
  // here fires while typing in a field or once a widget has used the key.
  var sheet = document.getElementById('kbd');
  var openSheet = function () {
    if (!sheet) return;
    if (sheet.showModal) { if (!sheet.open) sheet.showModal(); } else sheet.setAttribute('open', '');
  };
  if (sheet) sheet.addEventListener('click', function (e) { if (e.target === sheet) sheet.close(); }); // the backdrop
  $$('[data-kbd-open]').forEach(function (b) { b.addEventListener('click', openSheet); });
  var findSearch = function () { return $('form[data-site-search] input[name=q]') || $('#dx-q'); };
  var focusSearch = function () {
    var q = findSearch();
    if (!q || q.closest('[hidden]')) { location.href = base + 'browse/#search'; return; }
    q.focus(); if (q.select) q.select();
    var r = q.getBoundingClientRect();
    if (r.top < 0 || r.bottom > window.innerHeight) q.scrollIntoView({ block: 'center' });
  };
  if (location.hash === '#search') setTimeout(focusSearch, 60);
  var typing = function (t) { return t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)); };
  var gAt = 0;
  var GO = { h: '', b: 'browse/', d: 'daily/', s: 'shelf/' };
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey && (e.key === 'k' || e.key === 'K')) { e.preventDefault(); if (sheet && sheet.open) sheet.close(); focusSearch(); return; }
    if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey || typing(e.target)) return;
    if (sheet && sheet.open) return; // the sheet closes itself on Esc
    if (gAt && Date.now() - gAt < 1500 && Object.prototype.hasOwnProperty.call(GO, e.key)) { gAt = 0; e.preventDefault(); location.href = base + GO[e.key]; return; }
    gAt = 0;
    if (e.key === '/') { e.preventDefault(); focusSearch(); }
    else if (e.key === '?') { e.preventDefault(); openSheet(); }
    else if (e.key === 'g') gAt = Date.now();
  });

  // Tabs: [data-tabs] holds [data-tab-panel data-label] sections, which read
  // one after another without script. The deck page's phone steps open on the
  // reader's own kind of device.
  var ua = navigator.userAgent || '';
  var device = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) ? 'ios' : /Android/.test(ua) ? 'android' : 'desktop';
  $$('[data-tabs]').forEach(function (box, bi) {
    var panels = $$('[data-tab-panel]', box);
    if (panels.length < 2) return;
    var list = document.createElement('div');
    list.className = 'tabs-list'; list.setAttribute('role', 'tablist'); list.setAttribute('aria-label', 'Your device');
    var tabs = panels.map(function (p, i) {
      var id = 'tab-' + bi + '-' + i;
      p.id = p.id || 'panel-' + bi + '-' + i;
      var b = document.createElement('button');
      b.type = 'button'; b.id = id; b.setAttribute('role', 'tab'); b.setAttribute('aria-controls', p.id);
      b.textContent = p.getAttribute('data-label');
      if (p.getAttribute('data-os') === device) { var m = document.createElement('small'); m.textContent = 'this device'; b.appendChild(m); }
      p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', id); p.removeAttribute('aria-label'); p.tabIndex = 0;
      list.appendChild(b);
      return b;
    });
    var select = function (i, focus) {
      tabs.forEach(function (t, j) { var on = i === j; t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1; panels[j].hidden = !on; });
      if (focus) tabs[i].focus();
    };
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(i); });
      t.addEventListener('keydown', function (e) {
        var k = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
        if (k === undefined) return;
        e.preventDefault(); select((k + tabs.length) % tabs.length, true);
      });
    });
    box.insertBefore(list, box.firstChild);
    box.classList.add('tabbed');
    var start = panels.map(function (p) { return p.getAttribute('data-os'); }).indexOf(device);
    select(start < 0 ? 0 : start);
  });

  // Every card: a link that also copies itself, and a report link that
  // carries the card's front. A hash into a closed topic opens it.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('.c-tools a[href^="#"]');
    if (a) {
      var url = location.href.split('#')[0] + a.getAttribute('href');
      var done = function () { if (!a.dataset.label) a.dataset.label = a.textContent; a.textContent = 'Link copied'; a.classList.add('ok'); setTimeout(function () { a.textContent = a.dataset.label; a.classList.remove('ok'); }, 1800); };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(url).then(done, function () {}); else done();
      return;
    }
    var r = e.target.closest && e.target.closest('.c-tools a[rel~=nofollow]');
    if (r && !r.dataset.filled) {
      var li = r.closest('li');
      var raw = li && li.querySelector(':scope > i[id]');
      var front = li && li.querySelector('.ic-q');
      var dt = $('[data-deck-title]');
      var deckT = dt ? dt.getAttribute('data-deck-title') : document.title;
      var body = 'Card: ' + (raw ? raw.id : li.id) + '\nDeck: ' + deckT + '\nPage: ' + location.href.split('#')[0] + '#' + li.id +
        '\n\nFront of the card:\n> ' + (front ? front.innerText.trim().replace(/\n+/g, '\n> ') : '') +
        '\n\nWhat is wrong? If you can, quote what the source says.\n';
      try { var u = new URL(r.href); u.searchParams.set('body', body); r.href = u.href; r.dataset.filled = '1'; } catch (x) { /* keep the plain link */ }
    }
  });
  var openHash = function () {
    var h = location.hash.slice(1);
    if (!h || h === 'search') return;
    try { h = decodeURIComponent(h); } catch (x) { return; }
    var el = document.getElementById(h);
    if (!el) return;
    var d = el.closest('details');
    if (d && !d.open) { d.open = true; }
    if (!d) return;
    var go = function () { if (!moved) (el.tagName === 'I' ? el.parentNode : el).scrollIntoView({ block: 'center', behavior: 'instant' }); };
    requestAnimationFrame(go);
    // Content above (the study widget, fonts) can arrive later and push the
    // card down; follow it until the reader moves on their own.
    window.addEventListener('load', go);
    [400, 1200, 2500].forEach(function (t) { setTimeout(go, t); });
  };
  var moved = false;
  ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (ev) { window.addEventListener(ev, function () { moved = true; }, { once: true, passive: true }); });
  openHash();
  window.addEventListener('hashchange', function () { moved = false; openHash(); });

  // Back to top.
  var top = document.querySelector('.totop');
  if (top) {
    var onScroll = function () { top.hidden = window.scrollY < 900; };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();

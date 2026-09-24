// Site behaviour shared by every page: theme, menu, the measured masthead
// height, the contents rail's scroll spy, share and copy buttons, back to top.
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

  // Back to top.
  var top = document.querySelector('.totop');
  if (top) {
    var onScroll = function () { top.hidden = window.scrollY < 900; };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();

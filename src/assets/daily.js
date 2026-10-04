// The daily ten, and the card of the day, in the browser.
//
// The selection itself lives in daily-core.js (shared with the build, which
// imports the same file). This script loads it with import(), then reads
// today's day file, daily/days/<UTC date>.json (the ten cards, a few KB), which
// the build writes for 400 days ahead. Only if that file is missing (an old
// build) does it fetch the whole pool, daily/pool.json, and pick here.
//
// History and streak live in this browser only (localStorage, wrapped so the
// page still works in private mode). Text is set with textContent, never
// innerHTML, so card text cannot inject markup.
(function () {
  'use strict';
  if (typeof document === 'undefined' || !document.createElement) return;
  var script = document.currentScript;
  var scriptURL = (script && script.src) || location.href;
  import(new URL('daily-core.js', scriptURL).href).then(main).catch(function () { /* the pages keep their no-script content */ });

  function main(D) {
  var dayKey = D.dayKey, dailyNumber = D.dailyNumber, shareText = D.shareText, streak = D.streak, bestStreak = D.bestStreak, msToNextDay = D.msToNextDay, clock = D.clock;
  // ── In the browser ─────────────────────────────────────────────────────
  var store = {
    get: function (k) { try { return JSON.parse(window.localStorage.getItem(k) || 'null'); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } },
  };
  var el = function (tag, attrs, text) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    return n;
  };
  var lines = function (p, text) {
    String(text).split('\n').forEach(function (line, i) { if (i) p.appendChild(el('br')); p.appendChild(document.createTextNode(line)); });
    return p;
  };
  var LETTERS = 'ABCDEFGH';
  var dateLong = function (key) { return new Date(key + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }); };

  // Today's ten: the day file, or the pool and the shared selection when there is none.
  var dayPromises = {};
  var loadDay = function (key, poolURL) {
    if (!dayPromises[key]) {
      var json = function (r) { if (!r.ok) throw new Error(r.status); return r.json(); };
      dayPromises[key] = fetch(new URL('../daily/days/' + key + '.json', scriptURL).href).then(json)
        .catch(function () { return fetch(poolURL || new URL('../daily/pool.json', scriptURL).href).then(json).then(function (pool) { return D.dayFile(pool, key); }); });
    }
    return dayPromises[key];
  };
  var deckURL = function (pool, slug) { return new URL('../' + slug + '/', scriptURL).href; };
  var dailyURL = function () { return new URL('../daily/', scriptURL).href; };
  var deckName = function (pool, c) { return (pool.decks[c.d] && pool.decks[c.d].t) || c.d; };

  /** An index card for one pool card. opts.answer: show the answer part. */
  var cardEl = function (pool, c, opts) {
    opts = opts || {};
    var box = el('div', { class: 'icard' + (opts.cls ? ' ' + opts.cls : '') });
    var top = el('div', { class: 'ic-top' });
    top.append(el('span', null, deckName(pool, c) + ' · ' + c.t), el('b', null, opts.label || (c.c ? 'multiple choice' : 'fact')));
    box.appendChild(top);
    var q = el('div', { class: 'ic-q' });
    q.appendChild(lines(el('p'), c.q));
    box.appendChild(q);
    return box;
  };
  var answerEl = function (pool, c, linkText) {
    var a = el('div', { class: 'ic-a' });
    a.appendChild(lines(el('p', { class: 'ic-ans' }), c.a));
    if (c.x) { var p = el('p', { class: 'ic-x' }); p.append(el('b', null, 'Why'), ' '); a.appendChild(lines(p, c.x)); }
    var from = el('p', { class: 'ic-src' });
    var link = el('a', { href: deckURL(pool, c.d) });
    link.textContent = linkText || ('From the ' + deckName(pool, c) + ' deck → study the whole deck');
    from.appendChild(link);
    a.appendChild(from);
    return a;
  };

  // ── Card of the day: any [data-card-of-day] element ─────────────────────
  var fillCardOfDay = function (box, pool) {
    var c = pool.cards[0];
    if (!c) return;
    box.textContent = '';
    var card = cardEl(pool, c, { label: 'Card of the day' });
    if (c.c) { var ch = el('p', { class: 'ic-choices' }); lines(ch, c.c.map(function (t, i) { return LETTERS[i] + ') ' + t; }).join('\n')); card.querySelector('.ic-q').appendChild(ch); }
    var uid = 'cod-a-' + Math.floor(Math.random() * 1e9).toString(36);
    var rule = el('div', { class: 'ic-rule', hidden: '' });
    var ans = answerEl(pool, c, 'From the ' + deckName(pool, c) + ' deck →');
    ans.id = uid; ans.hidden = true;
    var row = el('p', { class: 'cod-actions', style: 'display:flex;flex-wrap:wrap;gap:10px;margin:14px 0 2px' });
    var toggle = el('button', { type: 'button', class: 'btn', 'aria-expanded': 'false', 'aria-controls': uid }, 'Show answer');
    var play = el('a', { class: 'btn btn-primary', href: dailyURL() }, 'Play the daily ten');
    toggle.addEventListener('click', function () {
      var open = ans.hidden;
      ans.hidden = rule.hidden = !open;
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Hide answer' : 'Show answer';
    });
    row.append(toggle, play);
    card.append(rule, ans, row);
    box.appendChild(card);
  };
  var cods = document.querySelectorAll('[data-card-of-day]');
  if (cods.length) {
    loadDay(dayKey(), cods[0].getAttribute('data-pool') || null).then(function (day) {
      Array.prototype.forEach.call(cods, function (b) { fillCardOfDay(b, day); });
    }).catch(function () { /* the element keeps whatever it shows without script */ });
  }

  // ── The player on /daily/ ────────────────────────────────────────────────
  var app = document.getElementById('daily-app');
  if (!app) return;
  var brand = app.getAttribute('data-brand') || 'The Exam Primer';
  var shareURL = app.getAttribute('data-share-url') || location.href;
  var plainURL = shareURL.replace(/^https?:\/\//, '');
  var today = dayKey();
  var num = dailyNumber(today);
  var HKEY = 'daily:history';
  var PKEY = 'daily:progress';

  loadDay(today, app.getAttribute('data-pool') || null).then(function (pool) {
    var cards = pool.cards;
    if (!cards.length) return;
    var history = store.get(HKEY) || {};
    var prog = store.get(PKEY);
    var state = prog && prog.key === today && Array.isArray(prog.marks) ? { marks: prog.marks.slice(0, cards.length), picks: prog.picks || [] } : { marks: [], picks: [] };
    state.i = state.marks.length;
    state.shown = false;
    var save = function () { store.set(PKEY, { key: today, marks: state.marks, picks: state.picks }); };

    document.querySelectorAll('[data-daily-fallback]').forEach(function (n) { n.hidden = true; });
    document.querySelectorAll('[data-daily-num]').forEach(function (n) { n.textContent = 'Daily #' + num + ' · ' + dateLong(today); });
    app.hidden = false;
    app.textContent = '';

    var bar = el('div', { class: 'dy-bar' });
    var pos = el('span', { class: 'dy-pos' });
    var prog2 = el('div', { class: 'progress', 'aria-hidden': 'true' }); var fill = el('i'); prog2.appendChild(fill);
    var dots = el('span', { class: 'dy-dots', 'aria-hidden': 'true' });
    bar.append(pos, prog2, dots);
    var stage = el('div', { class: 'dy-stage' });
    var said = el('p', { class: 'dy-said', role: 'status', 'aria-live': 'polite' });
    app.append(bar, stage, said);

    var drawBar = function () {
      var done = state.marks.length;
      pos.textContent = done >= cards.length ? 'Done · ' + cards.length + ' of ' + cards.length : 'Card ' + (state.i + 1) + ' of ' + cards.length;
      fill.style.width = (done / cards.length * 100) + '%';
      dots.textContent = cards.map(function (_, i) { return i < done ? (state.marks[i] ? '🟩' : '🟥') : '⬜'; }).join('');
    };

    var mark = function (right, choice) {
      state.marks[state.i] = !!right;
      state.picks[state.i] = choice == null ? null : choice;
      save();
    };
    var next = function () {
      state.i += 1; state.shown = false;
      if (state.i >= cards.length) finish(true); else drawCard();
    };

    var drawCard = function () {
      var c = cards[state.i];
      stage.textContent = '';
      drawBar();
      var card = cardEl(pool, c);
      card.setAttribute('tabindex', '-1');
      var answered = state.marks.length > state.i;
      var controls = el('div', { class: 'controls dy-controls' });
      if (c.c) {
        var group = el('div', { class: 'dy-choices', role: 'group', 'aria-label': 'Choose an answer' });
        c.c.forEach(function (t, i) {
          var b = el('button', { type: 'button', class: 'dy-choice', 'data-i': String(i) });
          b.append(el('span', { class: 'dy-l' }, LETTERS[i]), el('span', null, t));
          if (answered) {
            b.disabled = true;
            if (i === c.k) b.classList.add('is-right');
            else if (i === state.picks[state.i]) b.classList.add('is-wrong');
          }
          b.addEventListener('click', function () {
            if (state.marks.length > state.i) return;
            var right = i === c.k;
            mark(right, i);
            said.textContent = right ? 'Right.' : 'Not quite. The answer is ' + LETTERS[c.k] + '.';
            drawCard();
            var nb = stage.querySelector('[data-next]'); if (nb) nb.focus();
          });
          group.appendChild(b);
        });
        card.querySelector('.ic-q').appendChild(group);
      }
      if (answered || (!c.c && state.shown)) {
        card.append(el('div', { class: 'ic-rule' }), answerEl(pool, c));
      }
      if (answered) {
        var nx = el('button', { type: 'button', class: 'btn btn-primary', 'data-next': '' }, state.i === cards.length - 1 ? 'See my score →' : 'Next card →');
        nx.addEventListener('click', next);
        controls.appendChild(nx);
      } else if (!c.c && !state.shown) {
        var show = el('button', { type: 'button', class: 'btn btn-primary', 'data-show': '' }, 'Show answer');
        show.addEventListener('click', function () { state.shown = true; drawCard(); var k = stage.querySelector('[data-knew]'); if (k) k.focus(); });
        controls.appendChild(show);
      } else if (!c.c) {
        var knew = el('button', { type: 'button', class: 'btn btn-primary', 'data-knew': '' }, 'I knew it');
        var not = el('button', { type: 'button', class: 'btn', 'data-not': '' }, 'Not yet');
        knew.addEventListener('click', function () { mark(true); said.textContent = 'Marked as known.'; next(); });
        not.addEventListener('click', function () { mark(false); said.textContent = 'Marked as not yet.'; next(); });
        controls.append(knew, not);
      }
      stage.append(card, controls);
      stage.appendChild(el('p', { class: 'keys' }, c.c ? 'Keys: A to ' + LETTERS[c.c.length - 1] + ' (or 1 to ' + c.c.length + ') to answer · Enter for the next card' : 'Keys: Space shows the answer · 1 I knew it · 2 not yet'));
    };

    var timer = null;
    var finish = function (focus) {
      said.textContent = '';
      var marks = state.marks.slice(0, cards.length);
      var right = marks.filter(Boolean).length;
      if (!history[today]) { history[today] = { s: right, n: cards.length, m: marks.map(function (x) { return x ? 1 : 0; }).join('') }; store.set(HKEY, history); }
      drawBar();
      stage.textContent = '';
      var text = shareText(brand, num, marks, plainURL);
      var res = el('section', { class: 'dy-result', 'aria-labelledby': 'dy-score' });
      var h = el('h2', { id: 'dy-score', tabindex: '-1' }, 'You scored ' + right + ' out of ' + cards.length);
      var grid = el('p', { class: 'dy-grid', role: 'img', 'aria-label': right + ' right, ' + (cards.length - right) + ' wrong' }, marks.map(function (m) { return m ? '🟩' : '🟥'; }).join(''));
      var st = streak(history, today), best = bestStreak(history);
      var stats = el('dl', { class: 'dy-stats' });
      [['Streak', st + (st === 1 ? ' day' : ' days')], ['Best streak', best + (best === 1 ? ' day' : ' days')], ['Days played', String(Object.keys(history).length)]].forEach(function (r) {
        var d = el('div'); d.append(el('dt', null, r[0]), el('dd', null, r[1])); stats.appendChild(d);
      });
      var pre = el('pre', { class: 'dy-share-text', id: 'dy-share-text' }, text);
      var row = el('div', { class: 'share', role: 'group', 'aria-label': 'Share your score' });
      var copyMsg = el('span', { class: 'sh-said', role: 'status', 'aria-live': 'polite' });
      var copy = function () {
        var done = function () { copyMsg.textContent = 'Copied'; setTimeout(function () { copyMsg.textContent = ''; }, 2000); };
        if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, function () {});
        else { var t = el('textarea'); t.value = text; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); done(); } catch (e) {} t.remove(); }
      };
      var shareBtn = el('button', { type: 'button', class: 'btn btn-primary' }, navigator.share ? 'Share my score' : 'Copy my score');
      shareBtn.addEventListener('click', function () {
        if (navigator.share) navigator.share({ text: text }).catch(function () {});
        else copy();
      });
      row.appendChild(shareBtn);
      if (navigator.share) { var cb = el('button', { type: 'button', class: 'sh-b' }, 'Copy'); cb.addEventListener('click', copy); row.appendChild(cb); }
      var e = encodeURIComponent;
      [['X', 'https://x.com/intent/post?text=' + e(text)],
        ['LinkedIn', 'https://www.linkedin.com/sharing/share-offsite/?url=' + e(shareURL)],
        ['Bluesky', 'https://bsky.app/intent/compose?text=' + e(text)],
        ['Reddit', 'https://www.reddit.com/submit?url=' + e(shareURL) + '&title=' + e(brand + ' · Daily #' + num + ': ' + right + '/' + cards.length)]].forEach(function (n) {
        row.appendChild(el('a', { class: 'sh-b', href: n[1], target: '_blank', rel: 'noopener nofollow' }, n[0]));
      });
      row.appendChild(copyMsg);
      var next = el('p', { class: 'dy-next' });
      var clk = el('b', { class: 'mono' });
      next.append('The next ten in ', clk, ' (midnight UTC).');
      var tick = function () {
        var ms = msToNextDay();
        if (dayKey() !== today) { next.textContent = ''; next.append('A new ten is ready. ', el('a', { href: location.pathname, class: 'link' }, 'Play it now')); clearInterval(timer); return; }
        clk.textContent = clock(ms);
      };
      tick();
      if (timer) clearInterval(timer);
      timer = setInterval(tick, 1000);
      res.append(h, grid, stats, pre, row, next);

      // Today's card of the day stays, with the ten to look back over.
      var cod = el('div', { class: 'dy-cod' });
      cod.append(el('h3', null, 'Today’s card of the day'));
      var codBox = el('div'); fillCardOfDay(codBox, pool); cod.appendChild(codBox);
      var rev = el('details', { class: 'dy-review' });
      rev.appendChild(el('summary', null, 'Look back over today’s ten'));
      var ol = el('ol', { class: 'dy-list' });
      cards.forEach(function (c, i) {
        var li = el('li');
        var card = cardEl(pool, c, { label: (marks[i] ? '🟩 right' : '🟥 missed') });
        if (c.c) { var ch = el('p', { class: 'ic-choices' }); lines(ch, c.c.map(function (t, j) { return LETTERS[j] + ') ' + t; }).join('\n')); card.querySelector('.ic-q').appendChild(ch); }
        card.append(el('div', { class: 'ic-rule' }), answerEl(pool, c));
        li.appendChild(card); ol.appendChild(li);
      });
      rev.appendChild(ol);
      stage.append(res, cod, rev);
      if (focus) h.focus();
    };

    app.addEventListener('keydown', function (ev) {
      if (ev.altKey || ev.ctrlKey || ev.metaKey) return;
      var t = ev.target.tagName;
      if (t === 'INPUT' || t === 'TEXTAREA') return;
      if (state.i >= cards.length) return;
      var c = cards[state.i];
      var answered = state.marks.length > state.i;
      var k = ev.key.length === 1 ? ev.key.toUpperCase() : ev.key;
      var click = function (sel) { var b = stage.querySelector(sel); if (b) { ev.preventDefault(); b.click(); } };
      if (answered) {
        // Enter on a focused button or link already does its own thing.
        if (k === 'ArrowRight' || (k === 'Enter' && t !== 'BUTTON' && t !== 'A')) click('[data-next]');
        return;
      }
      if (c.c) {
        var i = LETTERS.indexOf(k); if (i < 0 && /^[1-8]$/.test(k)) i = +k - 1;
        if (i >= 0 && i < c.c.length) click('.dy-choice[data-i="' + i + '"]');
      } else if (!state.shown) {
        if (k === ' ' && t !== 'BUTTON') click('[data-show]');
      } else if (k === '1') click('[data-knew]');
      else if (k === '2') click('[data-not]');
    });

    if (state.marks.length >= cards.length) finish(); else drawCard();
  }).catch(function () {
    app.hidden = false;
    app.textContent = '';
    app.appendChild(el('p', { class: 'dy-said' }, 'Today’s ten could not be loaded. Check your connection and reload the page. The sample below still works.'));
  });
  }
})();

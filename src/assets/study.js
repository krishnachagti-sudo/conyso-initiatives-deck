// Study mode and workload planner for a deck page. No scheduling on purpose:
// this is for reading and first learning; spaced repetition belongs in an app.
// Everything is built with textContent, never innerHTML, so card text cannot
// inject markup. Storage is a convenience only and may be unavailable: the
// widget works the same without it, it just forgets.
//
// Kept per deck, in this browser only:
//   study:<path>        filters and the card you were on
//   study-marks:<path>  { <short card hash>: 'k' knew it | 'a' again | 's' seen }
//   exam-date:<path>    the date entered in the planner
(function (root) {
  'use strict';

  // ── Pure helpers (also run by the tests, with no DOM) ───────────────────
  var BUFFER = 7; // the last week is for weak cards and practice questions, no new cards
  var DAY = 86400000;

  /** A short, stable key for a card ID, so progress on big decks stays small. */
  var cardKey = function (id) {
    var h = 0x811c9dc5;
    for (var i = 0; i < id.length; i++) { h ^= id.charCodeAt(i); h = Math.imul(h, 0x01000193); }
    return (h >>> 0).toString(36);
  };
  /** Progress counts from a marks object. */
  var tally = function (marks, ids) {
    var t = { seen: 0, known: 0, again: 0 };
    ids.forEach(function (id) {
      var m = marks[cardKey(id)];
      if (!m) return;
      t.seen += 1;
      if (m === 'k') t.known += 1; else if (m === 'a') t.again += 1;
    });
    return t;
  };
  /** "I scored 18/20 on PSM II flashcards · conyso.com/primer/psm-ii/" */
  var sessionShare = function (known, total, deck, url) {
    return 'I scored ' + known + '/' + total + ' on ' + deck + ' flashcards · ' + String(url).replace(/^https?:\/\//, '');
  };
  /**
   * Cards a day to see `cards` new cards by a week before the exam.
   * today and exam are 'YYYY-MM-DD'. Returns { days, study, perDay } (perDay 0 when there is no time).
   */
  var plan = function (cards, exam, today) {
    var d = function (s) { var p = s.split('-'); return Date.UTC(+p[0], +p[1] - 1, +p[2]); };
    var days = Math.round((d(exam) - d(today)) / DAY);
    var study = days - BUFFER;
    return { days: days, study: study, perDay: study >= 1 ? Math.ceil(cards / study) : 0 };
  };
  root.StudyKit = { cardKey: cardKey, tally: tally, sessionShare: sessionShare, plan: plan, BUFFER: BUFFER };
  if (typeof document === 'undefined' || !document.createElement) return;

  // ── In the browser ─────────────────────────────────────────────────────
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* private mode */ } },
    del: function (k) { try { window.localStorage.removeItem(k); } catch (e) { /* private mode */ } },
  };
  var el = function (tag, attrs, text) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    return n;
  };
  var lines = function (p, text) {
    String(text).split('\n').forEach(function (line, i) {
      if (i) p.appendChild(el('br'));
      p.appendChild(document.createTextNode(line));
    });
    return p;
  };
  // The site's .controls rows set display, which beats the hidden attribute.
  var show = function (n, on) { n.style.display = on ? '' : 'none'; };
  var n0 = function (n) { return Number(n).toLocaleString('en-GB'); };
  var localToday = function () { var t = new Date(); return t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0'); };
  var deckTitle = (function () {
    var c = document.querySelector('.crumbs [aria-current]');
    var h = document.querySelector('h1');
    return ((c && c.textContent) || (h && h.textContent) || document.title).trim();
  })();
  var canonical = (function () { var l = document.querySelector('link[rel="canonical"]'); return (l && l.href) || location.href.split('#')[0]; })();

  var marksKey = 'study-marks:' + location.pathname;
  var marks = {};
  try { marks = JSON.parse(store.get(marksKey) || '{}') || {}; } catch (e) { marks = {}; }
  var saveMarks = function () { store.set(marksKey, JSON.stringify(marks)); };
  var all = [];
  var replan = function () {};

  // ---- Study mode ---------------------------------------------------------
  var app = document.getElementById('study-app');
  var dataEl = document.getElementById('study-data');
  if (app && dataEl) {
    all = JSON.parse(dataEl.textContent);
    var ids = all.map(function (c) { return c.id; });
    var key = 'study:' + location.pathname;
    var saved = {};
    try { saved = JSON.parse(store.get(key) || '{}'); } catch (e) { saved = {}; }
    var state = { coreOnly: !!saved.coreOnly, skipPrimers: !!saved.skipPrimers, againOnly: !!saved.againOnly, id: saved.id || null, shown: false, summary: false };
    var session = { known: 0, again: 0, marked: {} };

    var bar = el('div', { class: 'bar2' });
    var pos = el('span', { 'aria-live': 'polite' });
    var prog = el('div', { class: 'progress', 'aria-hidden': 'true' });
    var progFill = el('i'); prog.appendChild(progFill);
    var box = function (label) { var i = el('input', { type: 'checkbox' }); var l = el('label'); l.append(i, label); return [i, l]; };
    var core = box('Core only'), primer = box('Skip primers'), again = box('Only cards marked Again');
    var coreBox = core[0], primerBox = primer[0], againBox = again[0];
    bar.append(pos, prog, core[1], primer[1], again[1]);
    var tallyLine = el('p', { class: 'keys', style: 'margin:-4px 0 10px' });

    var card = el('div', { class: 'icard', tabindex: '-1' });
    var controls = el('div', { class: 'controls' });
    var prev = el('button', { type: 'button', class: 'btn' }, '← Back');
    var flip = el('button', { type: 'button', class: 'btn btn-primary' }, 'Turn the card');
    var next = el('button', { type: 'button', class: 'btn' }, 'Next →');
    controls.append(prev, flip, next);
    var markRow = el('div', { class: 'controls', role: 'group', 'aria-label': 'How did you do?' });
    var knew = el('button', { type: 'button', class: 'btn btn-primary' }, '1 · I knew it');
    var miss = el('button', { type: 'button', class: 'btn' }, '2 · Again');
    var end = el('button', { type: 'button', class: 'btn' }, 'End session');
    markRow.append(knew, miss, end);
    var said = el('p', { class: 'sh-said', role: 'status', 'aria-live': 'polite', style: 'display:block;min-height:1.4em;margin-top:6px' });
    var hint = el('p', { class: 'keys' }, 'Space turns the card · 1 I knew it · 2 again · ← → move between cards');
    app.append(bar, tallyLine, card, controls, markRow, said, hint);
    app.hidden = false;
    coreBox.checked = state.coreOnly;
    primerBox.checked = state.skipPrimers;
    againBox.checked = state.againOnly;

    var list = function () {
      return all.filter(function (c) {
        return (!state.coreOnly || c.core) && (!state.skipPrimers || c.kind !== 'primer') && (!state.againOnly || marks[cardKey(c.id)] === 'a');
      });
    };
    var save = function () { store.set(key, JSON.stringify({ coreOnly: state.coreOnly, skipPrimers: state.skipPrimers, againOnly: state.againOnly, id: state.id })); };
    var sessionTotal = function () { return session.known + session.again; };
    var drawTally = function () {
      var t = tally(marks, ids);
      tallyLine.textContent = 'Your progress on this device: ' + n0(t.seen) + ' of ' + n0(all.length) + ' seen · ' + n0(t.known) + ' known · ' + n0(t.again) + ' to see again'
        + (sessionTotal() ? ' · this session ' + session.known + '/' + sessionTotal() : '');
    };

    var summary = function () {
      state.summary = true;
      said.textContent = '';
      card.textContent = '';
      show(controls, false); show(markRow, false); show(hint, false);
      var total = sessionTotal();
      var t = tally(marks, ids);
      var h = el('h3', { tabindex: '-1', style: 'margin:6px 0 4px;outline:none' }, total ? 'Session score: ' + session.known + ' / ' + total : 'No cards marked yet');
      card.appendChild(h);
      var body = el('div', { class: 'ic-a' });
      body.appendChild(el('p', null, total
        ? 'You knew ' + session.known + ' of the ' + total + ' cards you marked. ' + (session.again ? session.again + ' marked Again: tick “Only cards marked Again” to go over them.' : 'None to see again.')
        : 'Turn a card, then mark it “I knew it” or “Again” to score a session.'));
      body.appendChild(el('p', null, 'On this device you have now seen ' + n0(t.seen) + ' of ' + n0(all.length) + ' cards in this deck.'));
      card.appendChild(body);
      var actions = el('div', { class: 'controls' });
      var more = el('button', { type: 'button', class: 'btn btn-primary' }, 'Keep studying');
      more.addEventListener('click', function () { state.summary = false; show(controls, true); show(markRow, true); show(hint, true); render(); card.focus(); });
      actions.appendChild(more);
      if (session.again) {
        var redo = el('button', { type: 'button', class: 'btn' }, 'Go over the Again cards');
        redo.addEventListener('click', function () { state.againOnly = againBox.checked = true; state.id = null; state.summary = false; show(controls, true); show(markRow, true); show(hint, true); render(); card.focus(); });
        actions.appendChild(redo);
      }
      card.appendChild(actions);
      if (total) {
        var text = sessionShare(session.known, total, deckTitle, canonical);
        var pre = el('p', { class: 'cite', style: 'margin-top:16px' }, text);
        var row = el('div', { class: 'share', role: 'group', 'aria-label': 'Share your score', style: 'margin-top:10px' });
        var msg = el('span', { class: 'sh-said', role: 'status', 'aria-live': 'polite' });
        var copy = function () {
          var done = function () { msg.textContent = 'Copied'; setTimeout(function () { msg.textContent = ''; }, 2000); };
          if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, function () {});
          else { var ta = el('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); done(); } catch (e) {} ta.remove(); }
        };
        var sb = el('button', { type: 'button', class: 'sh-b' }, navigator.share ? 'Share my score' : 'Copy my score');
        sb.addEventListener('click', function () { if (navigator.share) navigator.share({ text: text }).catch(function () {}); else copy(); });
        row.appendChild(sb);
        var e = encodeURIComponent;
        [['X', 'https://x.com/intent/post?text=' + e(text)],
          ['LinkedIn', 'https://www.linkedin.com/sharing/share-offsite/?url=' + e(canonical)],
          ['Bluesky', 'https://bsky.app/intent/compose?text=' + e(text)],
          ['Reddit', 'https://www.reddit.com/submit?url=' + e(canonical) + '&title=' + e(text.split(' · ')[0])]].forEach(function (n) {
          row.appendChild(el('a', { class: 'sh-b', href: n[1], target: '_blank', rel: 'noopener nofollow' }, n[0]));
        });
        row.appendChild(msg);
        card.append(pre, row);
      }
      var reset = el('button', { type: 'button', class: 'copy-btn', style: 'margin-top:16px' }, 'Clear my progress for this deck');
      reset.addEventListener('click', function () {
        if (!window.confirm('Clear what this browser remembers about this deck?')) return;
        marks = {}; store.del(marksKey); session = { known: 0, again: 0, marked: {} };
        drawTally(); replan(); summary(); said.textContent = 'Progress cleared.';
      });
      card.appendChild(reset);
      drawTally();
      h.focus();
    };

    var render = function () {
      if (state.summary) return;
      var cards = list();
      card.textContent = '';
      drawTally();
      if (!cards.length) {
        pos.textContent = state.againOnly ? 'No cards marked Again.' : 'No cards match these filters.';
        flip.disabled = prev.disabled = next.disabled = knew.disabled = miss.disabled = true;
        show(markRow, !!sessionTotal());
        return;
      }
      var i = Math.max(0, cards.findIndex(function (c) { return c.id === state.id; }));
      var c = cards[i];
      state.id = c.id;
      pos.textContent = (i + 1) + ' / ' + cards.length;
      progFill.style.width = ((i + 1) / cards.length * 100) + '%';
      var m = marks[cardKey(c.id)];
      var top = el('div', { class: 'ic-top' });
      top.append(el('span', null, c.topic), el('b', null, c.kind + (c.core ? ' · core' : '') + (m === 'k' ? ' · known' : m === 'a' ? ' · again' : '')));
      card.appendChild(top);
      var q = el('div', { class: 'ic-q' });
      q.appendChild(lines(el('p'), c.front));
      var figure = function () {
        var f = el('figure', { class: 'ic-fig' });
        f.appendChild(el('img', { src: c.image.src, alt: c.image.alt }));
        f.appendChild(el('figcaption', null, c.image.credit));
        return f;
      };
      if (c.image && c.image.side === 'front') q.appendChild(figure());
      if (c.choices) q.appendChild(lines(el('p', { class: 'ic-choices' }), c.choices));
      card.appendChild(q);
      if (state.shown) {
        if (!marks[cardKey(c.id)]) { marks[cardKey(c.id)] = 's'; saveMarks(); drawTally(); }
        card.appendChild(el('div', { class: 'ic-rule' }));
        var a = el('div', { class: 'ic-a' });
        if (c.image && c.image.side === 'back') a.appendChild(figure());
        a.appendChild(lines(el('p', { class: 'ic-ans' }), c.answer));
        [['Why', c.why], ['Why not the others', c.whyNot], ['Example', c.example], ['Not to confuse', c.contrast], ['Valid as of', c.validAsOf]].forEach(function (r) {
          if (!r[1]) return;
          var p = el('p', { class: 'ic-x' }); p.append(el('b', null, r[0]), ' '); a.appendChild(lines(p, r[1]));
        });
        if (c.sourceURL) { var sp = el('p', { class: 'ic-src' }); sp.appendChild(el('a', { href: c.sourceURL }, 'Source: ' + c.source + ' ↗')); a.appendChild(sp); }
        card.appendChild(a);
      }
      flip.textContent = state.shown ? 'Hide the answer' : 'Turn the card';
      flip.disabled = false;
      prev.disabled = i === 0;
      next.disabled = i === cards.length - 1;
      knew.disabled = miss.disabled = !state.shown;
      show(markRow, true);
      show(end, !!sessionTotal());
      save();
    };
    var move = function (d) {
      var cards = list();
      var i = cards.findIndex(function (c) { return c.id === state.id; });
      var j = Math.min(cards.length - 1, Math.max(0, i + d));
      if (j !== i) { state.id = cards[j].id; state.shown = false; render(); }
    };
    var markCard = function (k) {
      if (!state.shown || state.summary) return;
      var cards = list();
      var i = cards.findIndex(function (c) { return c.id === state.id; });
      var c = cards[i];
      if (!c) return;
      var prevMark = session.marked[c.id];
      if (prevMark) session[prevMark === 'k' ? 'known' : 'again'] -= 1;
      session.marked[c.id] = k;
      session[k === 'k' ? 'known' : 'again'] += 1;
      marks[cardKey(c.id)] = k;
      saveMarks();
      replan();
      said.textContent = k === 'k' ? 'Marked as known.' : 'Marked to see again.';
      // With "Again only" on, a card marked known leaves the list; stay at the same place.
      var after = list();
      var at = after.findIndex(function (x) { return x.id === c.id; });
      var nextCard = at < 0 ? after[i] : after[at + 1];
      state.shown = false;
      if (!nextCard) { summary(); return; } // the end of the list: the session's score
      state.id = nextCard.id; state.shown = false; render();
    };

    flip.addEventListener('click', function () { state.shown = !state.shown; render(); });
    prev.addEventListener('click', function () { move(-1); });
    next.addEventListener('click', function () { move(1); });
    knew.addEventListener('click', function () { markCard('k'); });
    miss.addEventListener('click', function () { markCard('a'); });
    end.addEventListener('click', summary);
    var filter = function () { state.coreOnly = coreBox.checked; state.skipPrimers = primerBox.checked; state.againOnly = againBox.checked; state.shown = false; state.summary = false; show(controls, true); show(markRow, true); show(hint, true); render(); };
    coreBox.addEventListener('change', filter);
    primerBox.addEventListener('change', filter);
    againBox.addEventListener('change', filter);
    app.addEventListener('keydown', function (e) {
      if (e.altKey || e.ctrlKey || e.metaKey || state.summary) return;
      var t = e.target.tagName;
      if (t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT') return;
      if (e.key === ' ') { if (t === 'BUTTON' || t === 'A') return; e.preventDefault(); state.shown = !state.shown; render(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); }
      else if (e.key === '1' && state.shown) { e.preventDefault(); markCard('k'); }
      else if (e.key === '2' && state.shown) { e.preventDefault(); markCard('a'); }
    });
    render();
  }

  // ---- Workload planner ---------------------------------------------------
  // The Anki manual (Deck Options, New cards/day): learning 20 new cards a day
  // leads to roughly 200 reviews a day. That ratio is the only number used.
  var planner = document.getElementById('planner');
  if (planner) {
    var total = Number(planner.dataset.cards);
    var coreN = Number(planner.dataset.core);
    var left = el('div');
    var dateLabel = el('label', { for: 'exam-date' }, 'Your exam date');
    var date = el('input', { type: 'date', id: 'exam-date', min: localToday() });
    left.append(dateLabel, date);
    var out = el('output', { 'aria-live': 'polite', for: 'exam-date' });
    planner.append(left, out);
    planner.hidden = false;
    var dateKey = 'exam-date:' + location.pathname;
    var savedDate = store.get(dateKey);
    if (savedDate) date.value = savedDate;
    var num = function (n) { return el('span', { class: 'num' }, n0(n)); };
    var line = function (parts) { var p = el('p'); parts.forEach(function (x) { p.append(x); }); return p; };

    replan = function () {
      out.textContent = '';
      if (!date.value) { out.appendChild(line(['Enter your exam date to see how many new cards a day you need.'])); return; }
      store.set(dateKey, date.value);
      var p = plan(total, date.value, localToday());
      if (p.days < 0) { out.appendChild(line(['That date has passed. Enter your next exam date.'])); return; }
      if (p.perDay < 1) {
        out.appendChild(line([num(Math.max(p.days, 0)), ' days left is not enough to learn the whole deck with spacing. Go through the ', num(coreN), ' core cards here in the browser, and spend the rest of your time on practice questions.']));
        return;
      }
      var perDay = p.perDay;
      out.appendChild(line([num(p.days), ' days to go. To see all ', num(total), ' cards a week before the exam: ', num(perDay), ' new card' + (perDay === 1 ? '' : 's') + ' a day.']));
      if (all.length) {
        var t = tally(marks, all.map(function (c) { return c.id; }));
        if (t.seen) {
          var rest = Math.max(0, total - t.seen);
          var restPer = Math.ceil(rest / p.study);
          out.appendChild(line(['You have seen ', num(t.seen), ' here, so ', num(rest), ' are left: ', num(restPer), ' a day.']));
        }
      }
      out.appendChild(line(['Expect about ', num(perDay * 10), ' reviews a day once you are under way (the Anki manual: 20 new cards a day leads to about 200 reviews a day).']));
      if (perDay > 20 && coreN < total) out.appendChild(line(['That is heavy. The ', num(coreN), ' core cards alone need ', num(Math.ceil(coreN / p.study)), ' a day: start with those.']));
    };
    date.addEventListener('change', replan);
    replan();
  }
})(typeof window !== 'undefined' ? window : globalThis);

// Study mode and workload planner for a deck page. No scheduling on purpose:
// this is for reading and first learning; spaced repetition belongs in an app.
// Everything is built with textContent, never innerHTML, so card text cannot
// inject markup. Storage is a convenience only and may be unavailable.
(function () {
  'use strict';

  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* private mode */ } },
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
  var paras = function (parent, text) {
    String(text).split('\n\n').forEach(function (block) {
      var p = el('p');
      block.split('\n').forEach(function (line, i) {
        if (i) p.appendChild(el('br'));
        p.appendChild(document.createTextNode(line));
      });
      parent.appendChild(p);
    });
  };

  // ---- Study mode ---------------------------------------------------------
  var app = document.getElementById('study-app');
  var dataEl = document.getElementById('study-data');
  if (app && dataEl) {
    var all = JSON.parse(dataEl.textContent);
    var key = 'study:' + location.pathname;
    var saved = {};
    try { saved = JSON.parse(store.get(key) || '{}'); } catch (e) { saved = {}; }
    var state = { coreOnly: !!saved.coreOnly, skipPrimers: !!saved.skipPrimers, id: saved.id || null, shown: false };

    var bar = el('div', { class: 'bar2' });
    var pos = el('span', { 'aria-live': 'polite' });
    var prog = el('div', { class: 'progress', 'aria-hidden': 'true' });
    var progFill = el('i'); prog.appendChild(progFill);
    var coreBox = el('input', { type: 'checkbox' });
    var primerBox = el('input', { type: 'checkbox' });
    var coreLabel = el('label'); coreLabel.append(coreBox, 'Core only');
    var primerLabel = el('label'); primerLabel.append(primerBox, 'Skip primers');
    bar.append(pos, prog, coreLabel, primerLabel);

    var card = el('div', { class: 'icard', tabindex: '-1' });
    var controls = el('div', { class: 'controls' });
    var prev = el('button', { type: 'button', class: 'btn' }, '← Back');
    var flip = el('button', { type: 'button', class: 'btn btn-primary' }, 'Turn the card');
    var next = el('button', { type: 'button', class: 'btn' }, 'Next →');
    controls.append(prev, flip, next);
    var hint = el('p', { class: 'keys' }, 'Space turns the card · ← → move between cards');
    app.append(bar, card, controls, hint);
    app.hidden = false;
    coreBox.checked = state.coreOnly;
    primerBox.checked = state.skipPrimers;

    var list = function () {
      return all.filter(function (c) {
        return (!state.coreOnly || c.core) && (!state.skipPrimers || c.kind !== 'primer');
      });
    };
    var save = function () { store.set(key, JSON.stringify({ coreOnly: state.coreOnly, skipPrimers: state.skipPrimers, id: state.id })); };

    var render = function () {
      var cards = list();
      card.textContent = '';
      if (!cards.length) { pos.textContent = 'No cards match these filters.'; flip.disabled = prev.disabled = next.disabled = true; return; }
      var i = Math.max(0, cards.findIndex(function (c) { return c.id === state.id; }));
      var c = cards[i];
      state.id = c.id;
      pos.textContent = (i + 1) + ' / ' + cards.length;
      progFill.style.width = ((i + 1) / cards.length * 100) + '%';
      var top = el('div', { class: 'ic-top' });
      top.append(el('span', null, c.topic), el('b', null, c.kind + (c.core ? ' · core' : '')));
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
      save();
    };
    var move = function (d) {
      var cards = list();
      var i = cards.findIndex(function (c) { return c.id === state.id; });
      var j = Math.min(cards.length - 1, Math.max(0, i + d));
      if (j !== i) { state.id = cards[j].id; state.shown = false; render(); }
    };

    flip.addEventListener('click', function () { state.shown = !state.shown; render(); });
    prev.addEventListener('click', function () { move(-1); });
    next.addEventListener('click', function () { move(1); });
    coreBox.addEventListener('change', function () { state.coreOnly = coreBox.checked; state.shown = false; render(); });
    primerBox.addEventListener('change', function () { state.skipPrimers = primerBox.checked; state.shown = false; render(); });
    app.addEventListener('keydown', function (e) {
      if (e.target.tagName === 'INPUT') return;
      if (e.key === ' ') { e.preventDefault(); state.shown = !state.shown; render(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); }
    });
    render();
  }

  // ---- Workload planner ---------------------------------------------------
  // The Anki manual (Deck Options, New cards/day): learning 20 new cards a day
  // leads to roughly 200 reviews a day. That ratio is the only number used.
  var planner = document.getElementById('planner');
  if (planner) {
    var total = Number(planner.dataset.cards);
    var core = Number(planner.dataset.core);
    var BUFFER = 7; // the last week is for weak cards and practice questions, no new cards
    var left = el('div');
    var dateLabel = el('label', { for: 'exam-date' }, 'Your exam date');
    var date = el('input', { type: 'date', id: 'exam-date' });
    left.append(dateLabel, date);
    var out = el('output', { 'aria-live': 'polite', for: 'exam-date' });
    planner.append(left, out);
    planner.hidden = false;
    var savedDate = store.get('exam-date:' + location.pathname);
    if (savedDate) date.value = savedDate;
    var num = function (n) { return el('span', { class: 'num' }, String(n)); };
    var line = function (parts) { var p = el('p'); parts.forEach(function (x) { p.append(x); }); return p; };

    var plan = function () {
      out.textContent = '';
      if (!date.value) { out.appendChild(line(['Enter your exam date to see how many new cards a day you need.'])); return; }
      store.set('exam-date:' + location.pathname, date.value);
      var today = new Date(); today.setHours(0, 0, 0, 0);
      var days = Math.round((new Date(date.value + 'T00:00:00') - today) / 86400000);
      var study = days - BUFFER;
      if (study < 1) {
        out.appendChild(line([num(Math.max(days, 0)), ' days left is not enough to learn the whole deck with spacing. Go through the ', num(core), ' core cards here in the browser, and spend the rest of your time on practice questions.']));
        return;
      }
      var perDay = Math.ceil(total / study);
      var corePerDay = Math.ceil(core / study);
      out.appendChild(line([num(days), ' days to go. To see all ', num(total), ' cards a week before the exam: ', num(perDay), ' new card' + (perDay === 1 ? '' : 's') + ' a day.']));
      out.appendChild(line(['Expect about ', num(perDay * 10), ' reviews a day once you are under way (the Anki manual: 20 new cards a day leads to about 200 reviews a day).']));
      if (perDay > 20 && core < total) out.appendChild(line(['That is heavy. The ', num(core), ' core cards alone need ', num(corePerDay), ' a day: start with those.']));
    };
    date.addEventListener('change', plan);
    plan();
  }
})();

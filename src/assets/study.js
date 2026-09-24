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

    var bar = el('div', { class: 'bar' });
    var pos = el('span', { 'aria-live': 'polite' });
    var coreBox = el('input', { type: 'checkbox' });
    var primerBox = el('input', { type: 'checkbox' });
    var coreLabel = el('label'); coreLabel.append(coreBox, ' Core cards only');
    var primerLabel = el('label'); primerLabel.append(primerBox, ' Skip primers');
    bar.append(pos, coreLabel, primerLabel);

    var face = el('div', { class: 'face', tabindex: '-1' });
    var controls = el('div', { class: 'controls' });
    var prev = el('button', { type: 'button' }, '← Previous');
    var flip = el('button', { type: 'button', class: 'primary' }, 'Show answer');
    var next = el('button', { type: 'button' }, 'Next →');
    controls.append(prev, flip, next);
    var hint = el('p', { class: 'tag' }, 'Keys: space shows the answer, arrows move between cards.');
    app.append(bar, face, controls, hint);
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
      face.textContent = '';
      if (!cards.length) { pos.textContent = 'No cards match these filters.'; flip.disabled = prev.disabled = next.disabled = true; return; }
      var i = Math.max(0, cards.findIndex(function (c) { return c.id === state.id; }));
      var c = cards[i];
      state.id = c.id;
      pos.textContent = 'Card ' + (i + 1) + ' of ' + cards.length;
      face.appendChild(el('div', { class: 'tag' }, c.kind + (c.core ? ' · core' : '')));
      var front = el('div', { class: 'front' }); paras(front, c.front); face.appendChild(front);
      if (state.shown) { var back = el('div', { class: 'back' }); paras(back, c.back); face.appendChild(back); }
      flip.textContent = state.shown ? 'Hide answer' : 'Show answer';
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
    var h = el('h3', null, 'Plan your daily load');
    var dateLabel = el('label'); var date = el('input', { type: 'date' });
    dateLabel.append('Exam date ', date);
    var out = el('output', { 'aria-live': 'polite' });
    planner.append(h, dateLabel, out);
    planner.hidden = false;
    var savedDate = store.get('exam-date:' + location.pathname);
    if (savedDate) date.value = savedDate;

    var plan = function () {
      out.textContent = '';
      if (!date.value) { out.textContent = 'Enter your exam date to see how many new cards a day you need.'; return; }
      store.set('exam-date:' + location.pathname, date.value);
      var today = new Date(); today.setHours(0, 0, 0, 0);
      var days = Math.round((new Date(date.value + 'T00:00:00') - today) / 86400000);
      var study = days - BUFFER;
      if (study < 1) {
        out.textContent = 'With ' + Math.max(days, 0) + ' day(s) left, there is not enough time to learn the full deck with spacing. Study the core cards (' + core + ') in the web mode above and put the rest of your time into practice questions.';
        return;
      }
      var perDay = Math.ceil(total / study);
      var corePerDay = Math.ceil(core / study);
      var lines = [
        days + ' days to go. Learning all ' + total + ' cards by a week before the exam means about ' + perDay + ' new card' + (perDay === 1 ? '' : 's') + ' a day.',
        'At that pace, expect roughly ' + perDay * 10 + ' reviews a day once you are under way (the Anki manual: 20 new cards a day leads to about 200 reviews a day).',
      ];
      if (perDay > 20 && core < total) lines.push('That is a heavy load. The ' + core + ' core cards alone need about ' + corePerDay + ' new cards a day: set New cards/day to that and study the core subset first.');
      lines.forEach(function (t) { out.appendChild(el('p', null, t)); });
    };
    date.addEventListener('change', plan);
    plan();
  }
})();

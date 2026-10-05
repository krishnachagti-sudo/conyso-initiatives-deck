// Study mode and workload planner for a deck page.
//
// The widget schedules cards with a simple Leitner system (srs-core.js): "Again"
// brings a card back today, "I knew it" moves it to the next box, due in 1, 3,
// 7, 16 or 35 days. Modes: Due today, New cards (20 a day), Whole deck, One
// topic (?topic=<slug> or #study:<slug>). Opening the page at #try or with
// ?resume=1 goes back to the last card.
//
// Progress is kept per deck in this browser only, through window.Primer.store
// (store.js, which also moves in the keys older versions of this file used).
// Pages built before store.js existed do not load it, so this file loads
// store.js and srs-core.js from beside itself when they are missing.
// Everything is built with textContent, never innerHTML, so card text cannot
// inject markup.
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
  /** Progress counts from a marks object ({ key: 'k' | 'a' | 's' } or { key: [box, due, mark] }). */
  var tally = function (marks, ids) {
    var t = { seen: 0, known: 0, again: 0 };
    ids.forEach(function (id) {
      var m = marks[cardKey(id)];
      if (!m) return;
      if (Array.isArray(m)) m = m[2];
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

  // ── Loading the helpers ──────────────────────────────────────────────────
  var here = (document.currentScript && document.currentScript.src) || location.href;
  var need = function (file, ready) {
    if (ready()) return Promise.resolve();
    return new Promise(function (done) {
      var s = document.createElement('script');
      s.src = new URL(file, here).href;
      s.onload = s.onerror = function () { done(); };
      document.head.appendChild(s);
    });
  };
  need('store.js', function () { return root.Primer && root.Primer.store; })
    .then(function () { return need('srs-core.js', function () { return root.PrimerSRS; }); })
    .then(function () { if (root.PrimerSRS) main(root.PrimerSRS); });

  function main(SRS) {
  // Without store.js (blocked or offline), keep the visit's progress in memory.
  var S = (root.Primer && root.Primer.store) || (function () {
    var m = {};
    var html = document.documentElement;
    return {
      deck: function (s) { return m[s] || null; }, setDeck: function (s, r) { m[s] = r; return false; },
      touchDeck: function () {}, settings: function () { return { focus: html.hasAttribute('data-focus') }; },
      setSettings: function (p) { if (p.focus) html.setAttribute('data-focus', 'on'); else html.removeAttribute('data-focus'); },
    };
  })();

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
  var today = function () { return SRS.dayNum(); };
  var localToday = function () { return SRS.dayKey(today()); };
  var dateLong = function (day) { return new Date(day * DAY).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' }); };
  var dateShort = function (day) { return new Date(day * DAY).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' }); };
  var days = function (n) { return n === 1 ? '1 day' : n + ' days'; };
  var deckTitle = (function () {
    var c = document.querySelector('.crumbs [aria-current]');
    var h = document.querySelector('h1');
    return ((c && c.textContent) || (h && h.textContent) || document.title).trim();
  })();
  var canonical = (function () { var l = document.querySelector('link[rel="canonical"]'); return (l && l.href) || location.href.split('#')[0].split('?')[0]; })();

  var app = document.getElementById('study-app');
  var dataEl = document.getElementById('study-data');
  var planner = document.getElementById('planner');
  var slug = (function () {
    var src = dataEl && dataEl.getAttribute('data-src');
    var parts = String(src || location.pathname).replace(/(study\.json|index\.html)$/, '').split('/').filter(Boolean);
    return parts[parts.length - 1] || 'deck';
  })();

  var rec = S.deck(slug) || {};
  rec.c = rec.c || {};
  var warned = false;
  var said = null;
  var saveRec = function () {
    rec.at = Date.now();
    if (!S.setDeck(slug, rec) && !warned && said) { warned = true; said.textContent = 'This browser is not keeping your progress, so it will be lost when you close the page.'; }
  };
  S.touchDeck(slug, deckTitle);

  var all = [];
  var replan = function () {};
  var redraw = function () {};
  root.addEventListener('primer:store', function (e) {
    var d = e.detail || {};
    if (d.external && d.key === 'deck:' + slug) { rec = S.deck(slug) || {}; rec.c = rec.c || {}; redraw(); replan(); }
  });

  // ---- Study mode ---------------------------------------------------------
  // The cards come from <slug>/study.json, fetched when the page loads, so the
  // HTML does not carry every card twice (an inline block still works).
  var startStudy = function (data) {
    all = data;
    rec.total = all.length;
    var byId = {};
    all.forEach(function (c) { byId[c.id] = c; });
    var ids = all.map(function (c) { return c.id; });
    var keys = ids.map(cardKey);
    var topics = [];
    var seenTopic = {};
    all.forEach(function (c) { var s = SRS.slugify(c.topic); if (!seenTopic[s]) { seenTopic[s] = 1; topics.push({ slug: s, name: c.topic }); } });
    var validTopic = function (s) { return !!s && !!seenTopic[s]; };
    var topicName = function (s) { var t = topics.filter(function (x) { return x.slug === s; })[0]; return t ? t.name : ''; };
    var f = rec.f || {};
    var state = { mode: 'all', topic: validTopic(rec.sel) ? rec.sel : (topics[0] && topics[0].slug), coreOnly: !!f.coreOnly, skipPrimers: !!f.skipPrimers, q: [], i: 0, shown: false, summary: false };
    var session = { known: 0, again: 0, marked: {} };

    // Modes: a radio group, so the choice reads clearly even before styling.
    var modes = el('div', { class: 'bar2 st-modes', role: 'radiogroup', 'aria-label': 'What to study' });
    var radios = {};
    var counts = {};
    [['due', 'Due today'], ['new', 'New cards'], ['all', 'Whole deck'], ['topic', 'One topic']].forEach(function (m) {
      var i = el('input', { type: 'radio', name: 'st-mode-' + slug, value: m[0] });
      var l = el('label', { class: 'st-mode' });
      counts[m[0]] = el('span', { class: 'st-n' });
      l.append(i, m[1], ' ', counts[m[0]]);
      radios[m[0]] = i;
      modes.appendChild(l);
    });
    var topicSel = el('select', { class: 'st-topic', 'aria-label': 'Topic', style: 'font:inherit;max-width:100%;padding:5px 8px;border:1px solid var(--line-strong);border-radius:var(--r);background:var(--bg);color:var(--ink)' });
    topics.forEach(function (t) { topicSel.appendChild(el('option', { value: t.slug }, t.name)); });
    modes.appendChild(topicSel);

    var bar = el('div', { class: 'bar2' });
    var pos = el('span', { 'aria-live': 'polite' });
    var prog = el('div', { class: 'progress', 'aria-hidden': 'true' });
    var progFill = el('i'); prog.appendChild(progFill);
    var box = function (label) { var i = el('input', { type: 'checkbox' }); var l = el('label'); l.append(i, label); return [i, l]; };
    var core = box('Core only'), primer = box('Skip primers');
    var coreBox = core[0], primerBox = primer[0];
    var focusBtn = el('button', { type: 'button', class: 'copy-btn st-focusbtn', 'aria-pressed': 'false', style: 'margin:0 0 0 auto' }, 'Focus mode');
    modes.appendChild(focusBtn);
    bar.append(pos, prog, core[1], primer[1]);
    var tallyLine = el('p', { class: 'keys st-tally', style: 'margin:-4px 0 10px' });

    var card = el('div', { class: 'icard', tabindex: '-1' });
    var controls = el('div', { class: 'controls' });
    var prev = el('button', { type: 'button', class: 'btn' }, '← Back');
    var flip = el('button', { type: 'button', class: 'btn btn-primary' }, 'Turn the card');
    var next = el('button', { type: 'button', class: 'btn' }, 'Next →');
    controls.append(prev, flip, next);
    var markRow = el('div', { class: 'controls', role: 'group', 'aria-label': 'How did you do?' });
    var knew = el('button', { type: 'button', class: 'btn btn-primary' }, '1 · I knew it');
    var miss = el('button', { type: 'button', class: 'btn', 'aria-label': 'Again: see it later today' }, '2 · Again');
    var end = el('button', { type: 'button', class: 'btn' }, 'End session');
    markRow.append(knew, miss, end);
    said = el('p', { class: 'sh-said', role: 'status', 'aria-live': 'polite', style: 'display:block;min-height:1.4em;margin-top:6px' });
    var hint = el('p', { class: 'keys' }, 'Space turns the card · 1 I knew it · 2 again · ← → move between cards');
    app.append(modes, bar, tallyLine, card, controls, markRow, said, hint);
    app.hidden = false;
    coreBox.checked = state.coreOnly;
    primerBox.checked = state.skipPrimers;
    if (!S.persistent && root.Primer && root.Primer.store) { warned = true; said.textContent = 'This browser is not keeping your progress, so it will be lost when you close the page.'; }

    var filtered = function () { return all.filter(function (c) { return (!state.coreOnly || c.core) && (!state.skipPrimers || c.kind !== 'primer'); }); };
    var queueFor = function (mode) {
      return SRS.queue(mode, filtered(), rec.c, today(), { key: cardKey, left: SRS.newLeft(rec.n, today()), topic: state.topic });
    };
    // The session's queue for the current mode, starting at `id` when it is in it.
    var build = function (id) {
      state.q = queueFor(state.mode);
      var at = id ? state.q.indexOf(id) : -1;
      state.i = Math.max(0, at);
      state.shown = false;
      return at >= 0;
    };
    var drawModes = function () {
      counts.due.textContent = n0(queueFor('due').length);
      counts.new.textContent = n0(queueFor('new').length);
      counts.all.textContent = n0(filtered().length);
      Object.keys(radios).forEach(function (m) { radios[m].checked = m === state.mode; });
      topicSel.value = state.topic;
      show(topicSel, state.mode === 'topic');
      var on = !!S.settings().focus;
      focusBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
      focusBtn.textContent = on ? 'Leave focus mode' : 'Focus mode';
    };
    var save = function () {
      rec.f = { coreOnly: state.coreOnly, skipPrimers: state.skipPrimers };
      rec.mode = state.mode;
      rec.sel = state.topic;
      var c = byId[state.q[state.i]];
      if (c) { rec.id = c.id; rec.topic = SRS.slugify(c.topic); rec.tt = c.topic; }
      saveRec();
    };
    var sessionTotal = function () { return session.known + session.again; };
    var drawTally = function () {
      var t = tally(rec.c, ids);
      tallyLine.textContent = 'On this device: ' + n0(t.seen) + ' of ' + n0(all.length) + ' seen · ' + n0(t.known) + ' known · ' + n0(SRS.dueCount(rec.c, today(), keys)) + ' due today'
        + (sessionTotal() ? ' · this session ' + session.known + '/' + sessionTotal() : '');
    };
    var resume = function () { state.summary = false; show(controls, true); show(markRow, true); show(hint, true); };

    var summary = function (why) {
      state.summary = true;
      card.textContent = '';
      show(controls, false); show(markRow, false); show(hint, false);
      drawModes();
      var total = sessionTotal();
      var t = tally(rec.c, ids);
      var due = queueFor('due').length;
      var fresh = queueFor('new').length;
      var h = el('h3', { tabindex: '-1', style: 'margin:6px 0 4px;outline:none' }, total ? 'Session score: ' + session.known + ' / ' + total : (why || 'No cards marked yet'));
      card.appendChild(h);
      var body = el('div', { class: 'ic-a' });
      if (total && why) body.appendChild(el('p', null, why));
      body.appendChild(el('p', null, total
        ? 'You knew ' + session.known + ' of the ' + total + ' cards you marked. ' + (session.again ? session.again + ' marked Again come back today.' : 'None to see again today.')
        : 'Turn a card, then mark it “I knew it” or “Again” to score a session.'));
      body.appendChild(el('p', null, 'On this device you have now seen ' + n0(t.seen) + ' of ' + n0(all.length) + ' cards in this deck. Due today: ' + n0(due) + '. New cards left today: ' + n0(fresh) + '.'));
      card.appendChild(body);
      var actions = el('div', { class: 'controls' });
      var go = function (mode, label, primary) {
        var b = el('button', { type: 'button', class: 'btn' + (primary ? ' btn-primary' : '') }, label);
        b.addEventListener('click', function () { state.mode = mode; resume(); build(); render(); card.focus(); });
        actions.appendChild(b);
      };
      if (due) go('due', 'Review the ' + n0(due) + ' due', true);
      if (fresh) go('new', 'Learn ' + n0(fresh) + ' new', !due);
      if (state.mode === 'all' || state.mode === 'topic' || (!due && !fresh)) {
        var more = el('button', { type: 'button', class: 'btn' + (!due && !fresh ? ' btn-primary' : '') }, 'Keep going');
        more.addEventListener('click', function () { resume(); if (!state.q.length || state.mode === 'due' || state.mode === 'new') { state.mode = 'all'; build(rec.id); } render(); card.focus(); });
        actions.appendChild(more);
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
        rec = { c: {}, exam: rec.exam, total: all.length, f: rec.f };
        saveRec();
        session = { known: 0, again: 0, marked: {} };
        replan(); summary(); said.textContent = 'Progress cleared.';
      });
      card.appendChild(reset);
      drawTally();
      h.focus();
    };

    var status = function (e) {
      if (SRS.isNew(e)) return 'new';
      if (SRS.isDue(e, today())) return e[2] === 'a' ? 'again' : 'due';
      return 'next ' + dateShort(e[1]);
    };
    var render = function () {
      if (state.summary) return;
      drawModes();
      card.textContent = '';
      drawTally();
      if (state.i >= state.q.length) state.i = Math.max(0, state.q.length - 1);
      var c = byId[state.q[state.i]];
      if (!c) {
        pos.textContent = state.mode === 'due' ? 'Nothing due today' : state.mode === 'new' ? 'No new cards left today' : 'No cards match these filters';
        progFill.style.width = '0';
        var empty = el('div', { class: 'ic-q' });
        empty.appendChild(el('p', null, state.mode === 'due' ? 'Nothing is due today. Learn some new cards, or come back tomorrow.'
          : state.mode === 'new' ? 'You have met today’s ' + SRS.NEW_PER_DAY + ' new cards. Review what is due, or come back tomorrow.' : 'No cards match these filters.'));
        card.appendChild(empty);
        flip.disabled = prev.disabled = next.disabled = knew.disabled = miss.disabled = true;
        show(end, !!sessionTotal());
        return;
      }
      var k = cardKey(c.id);
      var st = rec.c[k];
      pos.textContent = (state.i + 1) + ' / ' + state.q.length + (state.mode === 'topic' ? ' in ' + topicName(state.topic) : '');
      progFill.style.width = ((state.i + 1) / state.q.length * 100) + '%';
      var top = el('div', { class: 'ic-top' });
      top.append(el('span', null, c.topic), el('b', null, c.kind + (c.core ? ' · core' : '') + ' · ' + status(st)));
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
        if (!st) { rec.c[k] = SRS.seen(st); drawTally(); }
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
      var iv = SRS.nextInterval(rec.c[k]);
      knew.textContent = '1 · I knew it · ' + days(iv);
      knew.setAttribute('aria-label', 'I knew it: see it again in ' + days(iv));
      flip.textContent = state.shown ? 'Hide the answer' : 'Turn the card';
      flip.disabled = false;
      prev.disabled = state.i === 0;
      next.disabled = state.i === state.q.length - 1;
      knew.disabled = miss.disabled = !state.shown;
      show(markRow, true);
      show(end, !!sessionTotal());
      save();
    };
    redraw = function () { if (state.summary) { drawModes(); drawTally(); } else render(); };
    var move = function (d) {
      var j = Math.min(state.q.length - 1, Math.max(0, state.i + d));
      if (j !== state.i) { state.i = j; state.shown = false; render(); }
    };
    var markCard = function (m) {
      if (!state.shown || state.summary) return;
      var id = state.q[state.i];
      if (!byId[id]) return;
      var t = today();
      var k = cardKey(id);
      var before = rec.c[k];
      if (SRS.isNew(before)) rec.n = SRS.countNew(rec.n, t);
      var after = SRS.grade(before, m, t);
      rec.c[k] = after;
      var prevMark = session.marked[id];
      if (prevMark) session[prevMark === 'k' ? 'known' : 'again'] -= 1;
      session.marked[id] = m;
      session[m === 'k' ? 'known' : 'again'] += 1;
      saveRec();
      replan();
      said.textContent = m === 'k' ? 'Known. Next review in ' + days(after[1] - t) + ', on ' + dateLong(after[1]) + '.' : 'Again. It comes back later today.';
      state.shown = false;
      // Due and New work through a queue: a known card leaves it, an Again
      // card goes to the back. Whole deck and One topic simply move on.
      if (state.mode === 'due' || state.mode === 'new') {
        state.q.splice(state.i, 1);
        if (m === 'a') state.q.push(id);
        if (!state.q.length) { summary(state.mode === 'due' ? 'Everything due today is done.' : 'That is today’s new cards done.'); return; }
        if (state.i >= state.q.length) state.i = 0;
      } else {
        if (state.i >= state.q.length - 1) { summary('You reached the end of the list.'); return; }
        state.i += 1;
      }
      render();
    };
    var setMode = function (mode, topic) {
      state.mode = mode;
      if (topic) state.topic = topic;
      resume();
      build(mode === 'all' || mode === 'topic' ? rec.id : null);
      render();
      said.textContent = mode === 'topic' ? 'Studying ' + topicName(state.topic) + ': ' + n0(state.q.length) + ' cards.' : '';
    };

    flip.addEventListener('click', function () { state.shown = !state.shown; render(); });
    prev.addEventListener('click', function () { move(-1); });
    next.addEventListener('click', function () { move(1); });
    knew.addEventListener('click', function () { markCard('k'); });
    miss.addEventListener('click', function () { markCard('a'); });
    end.addEventListener('click', function () { summary(); });
    Object.keys(radios).forEach(function (m) { radios[m].addEventListener('change', function () { if (radios[m].checked) setMode(m); }); });
    topicSel.addEventListener('change', function () { setMode('topic', topicSel.value); });
    var filter = function () { state.coreOnly = coreBox.checked; state.skipPrimers = primerBox.checked; var id = state.q[state.i]; resume(); build(id); render(); };
    coreBox.addEventListener('change', filter);
    primerBox.addEventListener('change', filter);
    var setFocus = function (on) {
      S.setSettings({ focus: on });
      drawModes();
      if (on) app.scrollIntoView({ block: 'start' });
      said.textContent = on ? 'Focus mode on. Press Escape to leave it.' : 'Focus mode off.';
    };
    focusBtn.addEventListener('click', function () { setFocus(!S.settings().focus); });
    root.addEventListener('primer:store', function (e) { if (e.detail && e.detail.key === 'settings') drawModes(); });
    app.addEventListener('keydown', function (e) {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      var t = e.target.tagName;
      if (t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT' || e.target.isContentEditable) return;
      if (e.key === 'Escape' && S.settings().focus) { e.preventDefault(); setFocus(false); return; }
      if (state.summary) return;
      if (e.key === ' ') { if (t === 'BUTTON' || t === 'A') return; e.preventDefault(); state.shown = !state.shown; render(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); }
      else if (e.key === '1' && state.shown) { e.preventDefault(); markCard('k'); }
      else if (e.key === '2' && state.shown) { e.preventDefault(); markCard('a'); }
    });

    // Where to start: a topic link, a resume link, or what is due.
    var params = new URLSearchParams(location.search);
    var hashTopic = function () { var m = /^#study:(.+)$/.exec(location.hash); try { return m ? decodeURIComponent(m[1]) : null; } catch (e) { return null; } };
    var wanted = params.get('topic') || hashTopic();
    var resuming = location.hash === '#try' || params.get('resume') === '1';
    var bringIntoView = function () {
      (document.getElementById('try') || app).scrollIntoView({ block: 'start' });
      try { card.focus({ preventScroll: true }); } catch (e) { card.focus(); }
    };
    if (validTopic(wanted)) { state.mode = 'topic'; state.topic = wanted; build(); }
    else if (resuming && rec.id && byId[rec.id]) {
      state.mode = ['due', 'new', 'all', 'topic'].indexOf(rec.mode) >= 0 ? rec.mode : 'all';
      if (!build(rec.id)) { state.mode = 'all'; build(rec.id); } // marked since: find it in the whole deck
    } else {
      state.mode = queueFor('due').length ? 'due' : queueFor('new').length ? 'new' : 'all';
      build(state.mode === 'all' ? rec.id : null);
    }
    render();
    if (wanted || params.get('resume') === '1' || (resuming && rec.id)) bringIntoView();
    if (wanted && !validTopic(wanted)) said.textContent = 'That topic is not in this deck, so here is the rest of it.';
    root.addEventListener('hashchange', function () {
      var w = hashTopic();
      if (validTopic(w)) { setMode('topic', w); bringIntoView(); }
    });
  };
  if (app && dataEl) {
    if (dataEl.getAttribute('data-src')) {
      fetch(dataEl.getAttribute('data-src')).then(function (r) { return r.json(); }).then(function (d) { startStudy(d); replan(); }).catch(function () {});
    } else startStudy(JSON.parse(dataEl.textContent));
  }

  // ---- Workload planner ---------------------------------------------------
  // The Anki manual (Deck Options, New cards/day): learning 20 new cards a day
  // leads to roughly 200 reviews a day. That ratio is the only number used.
  if (planner) {
    var total = Number(planner.dataset.cards);
    var coreN = Number(planner.dataset.core);
    var left = el('div');
    var dateLabel = el('label', { for: 'exam-date' }, 'Your exam date');
    var date = el('input', { type: 'date', id: 'exam-date', min: localToday() });
    var ics = el('button', { type: 'button', class: 'btn st-ics' }, 'Add study sessions to my calendar');
    var icsNote = el('p', { class: 'st-ics-note', style: 'font-family:var(--mono);font-size:13px;line-height:1.5;color:var(--faint);margin-top:8px' }, 'Saves an .ics file with one entry a day until the exam, for any calendar app.');
    var icsSaid = el('p', { class: 'sh-said', role: 'status', 'aria-live': 'polite', style: 'display:block;min-height:1.4em' });
    var icsBox = el('div', { class: 'st-ics-box', style: 'margin-top:14px' });
    icsBox.append(ics, icsNote, icsSaid);
    left.append(dateLabel, date, icsBox);
    var out = el('output', { 'aria-live': 'polite', for: 'exam-date' });
    planner.append(left, out);
    planner.hidden = false;
    if (rec.exam) date.value = rec.exam;
    var num = function (n) { return el('span', { class: 'num' }, n0(n)); };
    var line = function (parts) { var p = el('p'); parts.forEach(function (x) { p.append(x); }); return p; };
    var seenCount = function () { return all.length ? tally(rec.c, all.map(function (c) { return c.id; })).seen : Object.keys(rec.c).length; };

    replan = function () {
      out.textContent = '';
      show(icsBox, false);
      if (!date.value) { out.appendChild(line(['Enter your exam date to see how many new cards a day you need.'])); return; }
      if (rec.exam !== date.value) { rec.exam = date.value; saveRec(); }
      var p = plan(total, date.value, localToday());
      if (p.days < 0) { out.appendChild(line(['That date has passed. Enter your next exam date.'])); return; }
      show(icsBox, p.days >= 1);
      if (p.perDay < 1) {
        out.appendChild(line([num(Math.max(p.days, 0)), ' days left is not enough to learn the whole deck with spacing. Go through the ', num(coreN), ' core cards here in the browser, and spend the rest of your time on practice questions.']));
        return;
      }
      var perDay = p.perDay;
      out.appendChild(line([num(p.days), ' days to go. To see all ', num(total), ' cards a week before the exam: ', num(perDay), ' new card' + (perDay === 1 ? '' : 's') + ' a day.']));
      var seen = seenCount();
      if (seen) {
        var rest = Math.max(0, total - seen);
        out.appendChild(line(['You have seen ', num(seen), ' here, so ', num(rest), ' are left: ', num(Math.ceil(rest / p.study)), ' a day.']));
      }
      out.appendChild(line(['Expect about ', num(perDay * 10), ' reviews a day once you are under way (the Anki manual: 20 new cards a day leads to about 200 reviews a day).']));
      if (perDay > 20 && coreN < total) out.appendChild(line(['That is heavy. The ', num(coreN), ' core cards alone need ', num(Math.ceil(coreN / p.study)), ' a day: start with those.']));
    };
    ics.addEventListener('click', function () {
      if (!date.value) return;
      var host = 'conyso.com';
      try { host = new URL(canonical).hostname || host; } catch (e) { /* keep */ }
      var text = SRS.calendar({ deck: deckTitle, slug: slug, url: canonical + '#try', cards: Math.max(0, total - seenCount()), today: localToday(), exam: date.value, host: host });
      var a = el('a', { href: URL.createObjectURL(new Blob([text], { type: 'text/calendar;charset=utf-8' })), download: slug + '-study-plan.ics' });
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      var n = SRS.fromKey(date.value) - today();
      icsSaid.textContent = 'Saved ' + slug + '-study-plan.ics: ' + n + ' study day' + (n === 1 ? '' : 's') + ' and your exam day. Open it to add them to your calendar.';
    });
    date.addEventListener('change', function () { icsSaid.textContent = ''; replan(); });
    replan();
  }
  }
})(typeof window !== 'undefined' ? window : globalThis);

// /which-deck/: the deck finder. The page is complete without script (every
// subject with its first deck and its order). This file shows the questions,
// one at a time, and draws the answer. Every answer was worked out at build
// time from the deck data (src/site/pages/finder.mjs) and sits in #fx-data;
// nothing here decides anything, and nothing is sent anywhere.
//
// Answers are kept in the address (?s=<family>&l=<level>&g=<goal>) so the
// back button and a shared link both land on the same answer.
(function () {
  var band = document.getElementById('finder-band');
  var el = document.getElementById('fx-data');
  if (!band || !el) return;
  var data;
  try { data = JSON.parse(el.textContent); } catch (e) { return; }
  var root = document.getElementById('finder');
  var res = document.getElementById('fx-res');
  var live = document.getElementById('fx-live');
  var Q = {};
  [].forEach.call(root.querySelectorAll('.fx-q'), function (q) { Q[q.getAttribute('data-q')] = q; });
  var st = { fam: '', lv: '', goal: '', exam: '' };

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function n0(n) { return Number(n).toLocaleString('en-GB'); }
  function and(xs) { return xs.length <= 1 ? xs.join('') : xs.slice(0, -1).join(', ') + ' and ' + xs[xs.length - 1]; }
  function multi() { var f = data.fams[st.fam]; return !!f && f.s.reduce(function (a, l) { return a + l.length; }, 0) > 1; }
  function opts(q) { return [].slice.call(q.querySelectorAll('.fx-opt')); }
  function press(q, v) { opts(q).forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-v') === v)); }); }

  // Which questions show, and which are answered (collapsed to their answer).
  function layout(focusNext) {
    var need = ['fam'];
    if (st.fam) need.push('lv');
    if (st.fam && st.lv !== '' && multi()) need.push('goal');
    if (st.goal === 'exam' && multi()) need.push('exam');
    var val = { fam: st.fam, lv: st.lv, goal: st.goal, exam: st.exam };
    var next = null;
    Object.keys(Q).forEach(function (k) {
      var q = Q[k], on = need.indexOf(k) > -1;
      q.hidden = !on;
      if (!on) return;
      if (k === 'exam') opts(q).forEach(function (b) { b.hidden = b.getAttribute('data-fam') !== st.fam; });
      press(q, val[k]);
      var done = val[k] !== '' && !q.hasAttribute('data-editing');
      q.classList.toggle('fx-done', done);
      if (!done && !next) next = q;
    });
    var ready = !next;
    if (ready) show(); else { res.hidden = true; res.textContent = ''; }
    save();
    if (focusNext) {
      var t = ready ? res.querySelector('h2') : next.querySelector('h3');
      if (t) { t.focus({ preventScroll: true }); t.scrollIntoView({ block: ready ? 'start' : 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }
    }
  }

  function show() {
    var goal = multi() ? (st.goal === 'exam' ? st.exam : 'learn') : 'learn';
    var a = data.a[st.fam + '|' + st.lv + '|' + goal];
    if (!a) { res.hidden = true; return; }
    var f = data.fams[st.fam], d = data.decks[a[0]], b = data.base, slug = a[0];
    var route = a[2], exam = goal !== 'learn' ? goal : '';
    var inFam = {};
    f.s.forEach(function (l) { l.forEach(function (s) { inFam[s] = 1; }); });
    var before = route.filter(function (s) { return !inFam[s] && data.decks[s]; });
    function item(s) {
      var x = data.decks[s], tag = s === slug ? 'Start here' : s === exam ? 'Your exam' : '';
      var cls = s === slug || s === exam || route.indexOf(s) > -1 ? ' class="fx-on"' : '';
      var name = s === slug ? '<span class="hl">' + esc(x[0]) + '</span>' : esc(x[0]);
      return '<a' + cls + ' href="' + b + esc(s) + '/">' + name + '</a>' + (tag ? '<span class="fx-tag">' + tag + '</span>' : '');
    }
    res.innerHTML =
      '<p class="eyebrow">' + (exam && exam !== slug ? 'Start with' : 'Your deck') + '</p>' +
      '<h2 tabindex="-1" class="fx-deck"><a href="' + b + esc(slug) + '/"><span class="hl">' + esc(d[0]) + '</span></a></h2>' +
      '<p class="fx-full">' + esc(d[1]) + ' · ' + n0(d[2]) + ' cards</p>' +
      '<p class="fx-why">' + esc(a[1]) + '</p>' +
      '<div class="fx-acts"><a class="btn btn-primary" href="' + b + esc(slug) + '/#try">Study now</a>' +
      '<a class="btn" href="' + b + esc(slug) + '/#download">Download</a>' +
      (window.Primer && window.Primer.store ? '<button type="button" class="save-b" data-save-deck="' + esc(slug) + '" data-title="' + esc(d[0]) + '" aria-pressed="false"><svg class="i" aria-hidden="true"><use href="#i-bookmark"/></svg><span>Save to shelf</span><span class="sr-only">: ' + esc(d[0]) + '</span></button>' : '') + '</div>' +
      (f.s.length > 1 || before.length ? '<h3>The order to take ' + esc(f.t) + ' in</h3>' +
        (before.length ? '<p class="fx-before">First, from another subject: ' + and(before.map(function (s) { return '<a href="' + b + esc(s) + '/">' + esc(data.decks[s][0]) + '</a>'; })) + '.</p>' : '') +
        '<ol class="dx-steps">' + f.s.map(function (l) { return '<li><span>' + and(l.map(item)) + '</span></li>'; }).join('') + '</ol>' : '') +
      '<p class="fx-again"><button type="button" class="fx-change" data-restart>Start again</button> · <a class="link" href="' + b + esc(f.p) + '">Everything in ' + esc(f.t) + '</a></p>';
    res.hidden = false;
    // The highlighter draws itself in (the motion layer leaves it still under reduced motion).
    var marks = res.querySelectorAll('.hl');
    requestAnimationFrame(function () { requestAnimationFrame(function () { [].forEach.call(marks, function (m) { m.classList.add('on'); }); }); });
    syncSave();
    live.textContent = 'Recommended: ' + d[0] + '. ' + a[1];
  }

  // The save button is wired by the shelf script (one click handler on the
  // document); this only paints its state, as the button is drawn after that
  // script has painted the page.
  function syncSave() {
    var s = window.Primer && window.Primer.store;
    var btn = res.querySelector('[data-save-deck]');
    if (!s || !btn || typeof s.onShelf !== 'function') return;
    var on = !!s.onShelf(btn.getAttribute('data-save-deck'));
    btn.setAttribute('aria-pressed', String(on));
    var label = btn.querySelector('span:not(.sr-only)');
    if (label) label.textContent = on ? 'On your shelf' : 'Save to shelf';
  }
  window.addEventListener('primer:store', function (e) { if (!e.detail || e.detail.key === 'shelf' || !e.detail.key) syncSave(); });

  function save() {
    var p = new URLSearchParams();
    if (st.fam) p.set('s', st.fam);
    if (st.lv !== '') p.set('l', st.lv);
    if (st.goal) p.set('g', st.goal === 'exam' ? (st.exam || 'exam') : 'learn');
    var s = p.toString();
    try { history.replaceState(null, '', location.pathname + (s ? '?' + s : '')); } catch (e) {}
  }
  function restore() {
    var p = new URLSearchParams(location.search);
    var fam = p.get('s') || '';
    if (!data.fams[fam]) return;
    st.fam = fam;
    var lv = p.get('l');
    if (lv === '0' || lv === '1' || lv === '2') st.lv = lv; else return;
    var g = p.get('g') || '';
    if (g === 'learn') st.goal = 'learn';
    else if (g === 'exam') st.goal = 'exam';
    else if (data.decks[g] && data.decks[g][3] === fam) { st.goal = 'exam'; st.exam = g; }
  }

  root.addEventListener('click', function (e) {
    var t = e.target.closest('button');
    if (!t || !root.contains(t)) return;
    if (t.hasAttribute('data-restart')) {
      st = { fam: '', lv: '', goal: '', exam: '' };
      Object.keys(Q).forEach(function (k) { Q[k].removeAttribute('data-editing'); });
      layout(true);
      return;
    }
    var ch = t.getAttribute('data-change');
    if (ch) {
      Q[ch].setAttribute('data-editing', '');
      Q[ch].classList.remove('fx-done');
      var cur = Q[ch].querySelector('.fx-opt[aria-pressed="true"]') || Q[ch].querySelector('.fx-opt:not([hidden])');
      if (cur) cur.focus();
      return;
    }
    if (!t.classList.contains('fx-opt')) return;
    var q = t.closest('.fx-q'), k = q.getAttribute('data-q'), v = t.getAttribute('data-v');
    q.removeAttribute('data-editing');
    if (k === 'fam') { if (v !== st.fam) { st.exam = ''; if (st.goal === 'exam') st.goal = ''; } st.fam = v; }
    else if (k === 'lv') st.lv = v;
    else if (k === 'goal') { st.goal = v; if (v !== 'exam') st.exam = ''; }
    else if (k === 'exam') st.exam = v;
    layout(true);
  });

  restore();
  band.hidden = false;
  layout(false);
})();

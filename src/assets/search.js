// Site search: live results for every form[data-site-search] (a text input
// named q). Without script the form submits to browse/?q=, which filters the
// list there. With it, the input becomes a combobox (ARIA 1.2 pattern): up and
// down move through the results, Enter opens one (or submits the form when
// none is chosen), Escape closes the list, then clears the field. The count is
// announced through a polite live region.
//
// Results come from search-index.json: decks (by name, code and family),
// their topics, and the terms their primer cards teach, so "what is a Sprint
// Goal" finds the deck that teaches it and opens it at that topic.
//
// Matching forgives the usual slips: exam codes match however they are typed
// ("az104", "AZ 104", "az-104"), "II" and "2" are the same, and a word that is
// in no deck is matched to the nearest word that is ("kubernets", "scrumm").
// Decks whose names match come first, then terms, then topics.
//
// An empty, focused box lists recent searches and recently viewed decks from
// the learner's own browser (window.Primer.store, when it has loaded).
(function () {
  if (window.__siteSearch) return;
  window.__siteSearch = true;

  var script = document.currentScript || document.querySelector('script[src$="search.js"]');
  var src = script && script.getAttribute('src') || '';
  var base = src.replace(/assets\/search\.js.*$/, '') || '/';

  // ── matching ─────────────────────────────────────────────────────────────
  function slugify(s) {
    return String(s).toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  // Lower case, no accents or punctuation, hyphens and slashes as spaces,
  // Roman II and III as digits: "PSM II" and "psm 2" read the same.
  function norm(s) {
    return String(s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
      .replace(/[‘’'"“”?!.,;:()[\]{}–—/_-]+/g, ' ')
      .replace(/\biii\b/g, '3').replace(/\bii\b/g, '2').replace(/\s+/g, ' ').trim();
  }
  function squash(s) { return s.replace(/ /g, ''); }
  // "what is a sprint goal" -> "sprint goal"
  function query(s) {
    return norm(s).replace(/^(what|who|which|how)\s+(is|are|was|were|does|do)\s+/, '').replace(/^(define|meaning of|explain)\s+/, '').replace(/^(an?|the)\s+/, '').trim();
  }

  // Edit distance, giving up once it passes max.
  function lev(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    var prev = [], cur, i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur = [i];
      var best = i;
      for (j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (cur[j] < best) best = cur[j];
      }
      if (best > max) return max + 1;
      prev = cur;
    }
    return prev[b.length];
  }

  function prepare(j) {
    var items = [], vocab = {};
    function add(it) {
      it.sq = squash(it.hay);
      it.hay.split(' ').forEach(function (w) { if (w.length > 2) vocab[w] = 1; });
      items.push(it);
    }
    (j.decks || []).forEach(function (d) {
      var tl = norm([d.shortTitle, d.title, d.slug].join(' '));
      add({ kind: 'deck', d: d, label: d.shortTitle, sub: d.familyTitle + ' · ' + Number(d.cards).toLocaleString('en-GB') + ' cards', href: base + d.slug + '/', hay: tl + ' ' + norm(d.familyTitle), tl: tl, name: norm(d.shortTitle) });
      (d.topics || []).forEach(function (t) {
        var anchor = '#t-' + slugify(t[0]);
        add({ kind: 'topic', d: d, label: t[0], sub: 'Topic in ' + d.shortTitle, href: base + d.slug + '/' + anchor, hay: norm(t[0]), name: norm(t[0]) });
        (t[1] || []).forEach(function (term) {
          add({ kind: 'term', d: d, label: term, sub: 'Taught in ' + d.shortTitle + ' · ' + t[0], href: base + d.slug + '/' + anchor, hay: norm(term), name: norm(term) });
        });
      });
    });
    items.vocab = Object.keys(vocab);
    return items;
  }

  // A query word that no indexed word contains gets the nearest indexed words instead.
  function fix(items, w) {
    if (w.length < 4 || /\d/.test(w)) return null;
    var v = items.vocab, i;
    for (i = 0; i < v.length; i++) if (v[i].indexOf(w) > -1) return null;
    var max = w.length >= 8 ? 2 : 1, out = [];
    for (i = 0; i < v.length; i++) {
      var t = v[i];
      // The whole word, or its start, so a half-typed slip still finds it.
      var d = Math.min(lev(w, t, max), t.length > w.length + 1 ? lev(w, t.slice(0, w.length), max) + 1 : max + 1);
      if (d <= max) out.push([d, t]);
    }
    out.sort(function (a, b) { return a[0] - b[0] || a[1].length - b[1].length; });
    return out.length ? out.slice(0, 6).map(function (x) { return x[1]; }) : null;
  }

  function search(items, raw) {
    var res = [];
    res.total = 0;
    res.fixed = '';
    var q = query(raw);
    if (!q || !items) return res;
    var words = q.split(' ');
    var alts = words.map(function (w) { return fix(items, w); });
    var fuzzy = alts.filter(Boolean).length;
    var fixed = words.map(function (w, i) { return alts[i] ? alts[i][0] : w; }).join(' ');
    var qs = squash(fixed);
    function within(text, sq) {
      return function (w, i) {
        if (alts[i]) return alts[i].some(function (a) { return text.indexOf(a) > -1; });
        return text.indexOf(w) > -1 || sq.indexOf(w) > -1;
      };
    }
    var out = [];
    items.forEach(function (it) {
      if (!words.every(within(it.hay, it.sq))) return;
      // Decks named by the query first, then decks matched by family, then terms, then topics.
      var s = it.kind === 'deck' ? (words.every(within(it.tl, squash(it.tl))) ? 200 : 40) : it.kind === 'term' ? 30 : 20;
      var ns = squash(it.name);
      if (ns === qs) s += 100;
      else if (ns.indexOf(qs) === 0) s += 60;
      else if ((' ' + it.hay).indexOf(' ' + fixed) > -1) s += 40;
      s -= fuzzy * 10;
      s -= Math.min(it.name.length, 60) / 10; // shorter names first among equals
      out.push({ it: it, s: s });
    });
    out.sort(function (a, b) { return b.s - a.s; });
    // One result per place: a term and its topic both open the same anchor.
    var seen = {};
    for (var i = 0; i < out.length && res.length < 8; i++) {
      var k = out[i].it.href + '|' + out[i].it.name;
      if (seen[k]) continue;
      seen[k] = 1;
      res.push(out[i].it);
    }
    res.total = out.length;
    if (fuzzy) res.fixed = fixed;
    return res;
  }

  // Exposed for tests, and for pages that want the same ranking.
  window.__siteSearchCore = { norm: norm, query: query, lev: lev, prepare: prepare, search: search };
  window.__siteSearchRank = function (j, q) { return search(prepare(j), q); };

  var forms = [].slice.call(document.querySelectorAll('form[data-site-search]'));
  if (!forms.length) return;

  var index = null, loading = null;
  function load() {
    if (index) return Promise.resolve(index);
    if (!loading) loading = fetch(base + 'search-index.json').then(function (r) { return r.json(); }).then(function (j) { index = prepare(j); return index; });
    return loading;
  }
  function store() { var p = window.Primer; return p && p.store || null; }
  function remember(q) {
    var s = store();
    q = String(q || '').trim();
    if (s && typeof s.addSearch === 'function' && query(q).length > 1) try { s.addSearch(q); } catch (e) {}
  }
  function recent() {
    var s = store(), out = { searches: [], decks: [] };
    if (!s) return out;
    try { out.searches = (s.recentSearches && s.recentSearches() || []).slice(0, 5); } catch (e) {}
    try { out.decks = (s.recentDecks && s.recentDecks() || []).slice(0, 5); } catch (e) {}
    return out;
  }

  var css = '.ss-wrap{position:relative}' +
    '.ss-list{position:absolute;left:0;right:0;top:calc(100% + 4px);z-index:40;list-style:none;margin:0;padding:4px;background:var(--surface,#fff);border:1px solid var(--line-strong,#999);border-top:3px solid var(--margin,#dd776f);border-radius:var(--r,2px);box-shadow:var(--e3,0 8px 24px rgba(0,0,0,.2));max-height:min(70vh,460px);overflow-y:auto;min-width:min(100%,280px)}' +
    '.ss-list[hidden]{display:none}.ss-list ul{list-style:none;margin:0;padding:0}' +
    '.ss-opt{display:block;padding:8px 10px;border-radius:var(--r,2px);cursor:pointer;color:var(--ink,#111);line-height:1.35;text-align:left}' +
    '.ss-opt b{display:block;font-weight:700;font-size:16px;overflow-wrap:anywhere}' +
    '.ss-opt span{display:block;font-family:var(--mono,monospace);font-size:12.5px;color:var(--faint,#555);margin-top:2px;overflow-wrap:anywhere}' +
    '.ss-opt b i{font-style:normal;background:var(--hl-img) 0 62%/100% .78em no-repeat;padding:0 .08em;margin:0 -.08em}' +
    '.ss-opt[aria-selected="true"],.ss-opt:hover{background:var(--gold-soft,#e8eefa);outline:1px solid var(--gold,#1f4488)}' +
    '.ss-h{display:block;padding:8px 10px 2px;font-family:var(--mono,monospace);font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--faint,#555)}' +
    '.ss-fix{padding:6px 10px 4px;font-size:14.5px;color:var(--muted,#444)}.ss-fix b{color:var(--ink,#111)}' +
    '.ss-empty{padding:8px 10px;font-size:15px;color:var(--muted,#444)}' +
    '.ss-live{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  // The label with the typed text marked, as the highlighter would.
  function labelNode(text, q) {
    var b = document.createElement('b');
    var at = q ? text.toLowerCase().indexOf(q.toLowerCase()) : -1;
    if (at < 0) { b.textContent = text; return b; }
    var i = document.createElement('i');
    i.textContent = text.slice(at, at + q.length);
    b.appendChild(document.createTextNode(text.slice(0, at)));
    b.appendChild(i);
    b.appendChild(document.createTextNode(text.slice(at + q.length)));
    return b;
  }

  var uid = 0;
  forms.forEach(function (form) {
    var input = form.querySelector('input[name="q"]');
    if (!input || form.hasAttribute('data-ss-ready')) return;
    form.setAttribute('data-ss-ready', '');
    var n = ++uid;
    var wrap = input.parentNode;
    if (getComputedStyle(wrap).position === 'static') wrap.classList.add('ss-wrap');
    var list = document.createElement('ul');
    list.id = 'ss-list-' + n;
    list.className = 'ss-list';
    list.setAttribute('role', 'listbox');
    list.setAttribute('aria-label', 'Search results');
    list.hidden = true;
    var live = document.createElement('span');
    live.className = 'ss-live';
    live.setAttribute('role', 'status');
    live.setAttribute('aria-live', 'polite');
    wrap.appendChild(list);
    form.appendChild(live);
    input.setAttribute('role', 'combobox');
    input.setAttribute('aria-autocomplete', 'list');
    input.setAttribute('aria-expanded', 'false');
    input.setAttribute('aria-controls', list.id);
    input.setAttribute('autocomplete', 'off');

    var choices = [], active = -1, timer = 0, k = 0;
    function close() {
      list.hidden = true;
      input.setAttribute('aria-expanded', 'false');
      input.removeAttribute('aria-activedescendant');
      active = -1;
    }
    function open() {
      list.hidden = false;
      input.setAttribute('aria-expanded', 'true');
    }
    function mark(i) {
      var opts = list.querySelectorAll('[role="option"]');
      if (!opts.length) return;
      active = (i + opts.length) % opts.length;
      for (var x = 0; x < opts.length; x++) opts[x].setAttribute('aria-selected', String(x === active));
      input.setAttribute('aria-activedescendant', opts[active].id);
      opts[active].scrollIntoView({ block: 'nearest' });
    }
    // A choice with href opens a page; one with q fills the box and searches.
    function option(parent, c, q) {
      var li = document.createElement('li');
      li.className = 'ss-opt';
      li.id = list.id + '-' + (k++);
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', 'false');
      var s = document.createElement('span');
      s.textContent = c.sub;
      li.appendChild(labelNode(c.label, q));
      li.appendChild(s);
      li.addEventListener('mousedown', function (e) { e.preventDefault(); });
      li.addEventListener('click', function () { choose(c); });
      parent.appendChild(li);
      choices.push(c);
    }
    function group(title, cs) {
      if (!cs.length) return;
      var li = document.createElement('li');
      li.setAttribute('role', 'presentation');
      var h = document.createElement('span');
      h.className = 'ss-h';
      h.id = list.id + '-g' + (k++);
      h.textContent = title;
      var ul = document.createElement('ul');
      ul.setAttribute('role', 'group');
      ul.setAttribute('aria-labelledby', h.id);
      li.appendChild(h);
      li.appendChild(ul);
      list.appendChild(li);
      cs.forEach(function (c) { option(ul, c, ''); });
    }
    function choose(c) {
      if (c.q != null) { input.value = c.q; input.focus(); update(); return; }
      remember(input.value);
      location.href = c.href;
    }
    function reset() {
      list.textContent = '';
      choices = [];
      active = -1;
      k = 0;
      input.removeAttribute('aria-activedescendant');
    }
    // An empty box: what this browser searched for and opened lately.
    function showRecent() {
      reset();
      var r = recent();
      group('Recent searches', r.searches.filter(Boolean).map(function (q) { return { label: String(q), sub: 'Search again', q: String(q) }; }));
      group('Recently viewed', r.decks.filter(function (d) { return d && d.slug; }).map(function (d) { return { label: d.title || d.slug, sub: 'Deck', href: base + d.slug + '/' }; }));
      if (!choices.length) { close(); live.textContent = ''; return; }
      open();
      live.textContent = choices.length + (choices.length === 1 ? ' recent item' : ' recent items');
    }
    function render() {
      var q = input.value;
      if (!query(q)) { showRecent(); return; }
      reset();
      var results = search(index, q);
      if (results.fixed) {
        var f = document.createElement('li');
        f.className = 'ss-fix';
        f.setAttribute('role', 'presentation');
        f.appendChild(document.createTextNode('Showing matches for '));
        var b = document.createElement('b');
        b.textContent = results.fixed;
        f.appendChild(b);
        list.appendChild(f);
      }
      var hl = results.fixed ? '' : q.trim();
      results.forEach(function (it) { option(list, { label: it.label, sub: it.kind === 'deck' ? 'Deck · ' + it.sub : it.sub, href: it.href }, hl); });
      if (!results.length) {
        var none = document.createElement('li');
        none.className = 'ss-empty';
        none.setAttribute('role', 'presentation');
        none.textContent = 'No deck or term matches. Press Enter to search the list of decks.';
        list.appendChild(none);
      }
      open();
      var t = results.total || 0;
      live.textContent = (t === 0 ? 'No results' : t > results.length ? results.length + ' of ' + t + ' results shown' : t + (t === 1 ? ' result' : ' results')) + (results.fixed ? ', for ' + results.fixed : '');
    }
    function update() {
      clearTimeout(timer);
      if (!query(input.value)) { showRecent(); return; }
      timer = setTimeout(function () {
        load().then(render).catch(function () { close(); });
      }, 80);
    }
    input.addEventListener('focus', function () { load().catch(function () {}); update(); });
    input.addEventListener('input', update);
    input.addEventListener('keydown', function (e) {
      var isOpen = !list.hidden;
      if (e.key === 'ArrowDown') { e.preventDefault(); if (!isOpen) { update(); return; } mark(active + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); if (isOpen) mark(active - 1); }
      else if (e.key === 'Enter') {
        if (isOpen && active > -1 && choices[active]) { e.preventDefault(); choose(choices[active]); }
      } else if (e.key === 'Escape') {
        if (isOpen) { e.preventDefault(); close(); } else if (input.value) { e.preventDefault(); input.value = ''; live.textContent = ''; }
      }
    });
    form.addEventListener('submit', function () { remember(input.value); });
    input.addEventListener('blur', function () { setTimeout(close, 120); });
  });
})();

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
(function () {
  if (window.__siteSearch) return;
  window.__siteSearch = true;
  var forms = [].slice.call(document.querySelectorAll('form[data-site-search]'));
  if (!forms.length) return;

  var script = document.currentScript || document.querySelector('script[src$="search.js"]');
  var src = script && script.getAttribute('src') || '';
  var base = src.replace(/assets\/search\.js.*$/, '') || '/';
  var index = null, loading = null;
  function load() {
    if (index) return Promise.resolve(index);
    if (!loading) loading = fetch(base + 'search-index.json').then(function (r) { return r.json(); }).then(function (j) { index = prepare(j); return index; });
    return loading;
  }

  function slugify(s) {
    return String(s).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  function norm(s) {
    return String(s || '').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[\u2018\u2019'"\u201c\u201d?!.,;:()]+/g, ' ').replace(/\s+/g, ' ').trim();
  }
  // "what is a sprint goal" \u2192 "sprint goal"
  function query(s) {
    return norm(s).replace(/^(what|who|which|how)\s+(is|are|was|were|does|do)\s+/, '').replace(/^(define|meaning of|explain)\s+/, '').replace(/^(an?|the)\s+/, '').trim();
  }

  function prepare(j) {
    var items = [];
    (j.decks || []).forEach(function (d) {
      var hay = norm([d.shortTitle, d.title, d.familyTitle, d.slug.replace(/-/g, ' ')].join(' '));
      items.push({ kind: 'deck', d: d, label: d.shortTitle, sub: d.familyTitle + ' \u00b7 ' + d.cards.toLocaleString('en-GB') + ' cards', href: base + d.slug + '/', hay: hay, name: norm(d.shortTitle) });
      (d.topics || []).forEach(function (t) {
        var anchor = '#t-' + slugify(t[0]);
        items.push({ kind: 'topic', d: d, label: t[0], sub: 'Topic in ' + d.shortTitle, href: base + d.slug + '/' + anchor, hay: norm(t[0]), name: norm(t[0]) });
        (t[1] || []).forEach(function (term) {
          items.push({ kind: 'term', d: d, label: term, sub: 'Taught in ' + d.shortTitle + ' \u00b7 ' + t[0], href: base + d.slug + '/' + anchor, hay: norm(term), name: norm(term) });
        });
      });
    });
    return items;
  }

  function search(items, q) {
    q = query(q);
    if (!q) return [];
    var words = q.split(' ');
    var out = [];
    items.forEach(function (it) {
      if (!words.every(function (w) { return it.hay.indexOf(w) > -1; })) return;
      var s = it.kind === 'deck' ? 30 : it.kind === 'term' ? 20 : 10;
      if (it.name === q) s += 100;
      else if (it.name.indexOf(q) === 0) s += 60;
      else if ((' ' + it.hay).indexOf(' ' + q) > -1) s += 40;
      s -= Math.min(it.name.length, 60) / 10; // shorter names first among equals
      out.push({ it: it, s: s });
    });
    out.sort(function (a, b) { return b.s - a.s; });
    // One result per place: a term and its topic both open the same anchor.
    var seen = {}, res = [];
    for (var i = 0; i < out.length && res.length < 8; i++) {
      var k = out[i].it.href + '|' + out[i].it.name;
      if (seen[k]) continue;
      seen[k] = 1;
      res.push(out[i].it);
    }
    res.total = out.length;
    return res;
  }

  var css = '.ss-wrap{position:relative}' +
    '.ss-list{position:absolute;left:0;right:0;top:calc(100% + 4px);z-index:40;list-style:none;margin:0;padding:4px;background:var(--surface,#fff);border:1px solid var(--line-strong,#999);border-radius:var(--r,2px);box-shadow:var(--e3,0 8px 24px rgba(0,0,0,.2));max-height:min(70vh,460px);overflow-y:auto;min-width:min(100%,280px)}' +
    '.ss-list[hidden]{display:none}' +
    '.ss-opt{display:block;padding:8px 10px;border-radius:var(--r,2px);cursor:pointer;color:var(--ink,#111);line-height:1.35;text-align:left}' +
    '.ss-opt b{display:block;font-weight:700;font-size:16px;overflow-wrap:anywhere}' +
    '.ss-opt span{display:block;font-family:var(--mono,monospace);font-size:12.5px;color:var(--faint,#555);margin-top:2px;overflow-wrap:anywhere}' +
    '.ss-opt[aria-selected="true"],.ss-opt:hover{background:var(--gold-soft,#e8eefa);outline:1px solid var(--gold,#1f4488)}' +
    '.ss-empty{padding:8px 10px;font-size:15px;color:var(--muted,#444)}' +
    '.ss-all{display:block;padding:8px 10px;font-size:15px;color:var(--gold,#1f4488);border-top:1px solid var(--line,#ddd);margin-top:4px}' +
    '.ss-live{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

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

    var results = [], active = -1, timer = 0;
    function close() {
      list.hidden = true;
      input.setAttribute('aria-expanded', 'false');
      input.removeAttribute('aria-activedescendant');
      active = -1;
    }
    function mark(i) {
      var opts = list.querySelectorAll('[role="option"]');
      if (!opts.length) return;
      active = (i + opts.length) % opts.length;
      for (var k = 0; k < opts.length; k++) opts[k].setAttribute('aria-selected', String(k === active));
      input.setAttribute('aria-activedescendant', opts[active].id);
      opts[active].scrollIntoView({ block: 'nearest' });
    }
    function render() {
      var q = input.value;
      list.textContent = '';
      active = -1;
      input.removeAttribute('aria-activedescendant');
      if (!query(q)) { close(); live.textContent = ''; return; }
      results = search(index, q);
      results.forEach(function (it, i) {
        var li = document.createElement('li');
        li.className = 'ss-opt';
        li.id = list.id + '-' + i;
        li.setAttribute('role', 'option');
        li.setAttribute('aria-selected', 'false');
        var b = document.createElement('b'); b.textContent = it.label;
        var s = document.createElement('span'); s.textContent = it.kind === 'deck' ? 'Deck \u00b7 ' + it.sub : it.sub;
        li.appendChild(b); li.appendChild(s);
        li.addEventListener('mousedown', function (e) { e.preventDefault(); });
        li.addEventListener('click', function () { location.href = it.href; });
        list.appendChild(li);
      });
      if (!results.length) {
        var none = document.createElement('li');
        none.className = 'ss-empty';
        none.setAttribute('role', 'presentation');
        none.textContent = 'No deck or term matches. Press Enter to search the list of decks.';
        list.appendChild(none);
      }
      list.hidden = false;
      input.setAttribute('aria-expanded', 'true');
      var t = results.total || 0;
      live.textContent = t === 0 ? 'No results' : t > results.length ? results.length + ' of ' + t + ' results shown' : t + (t === 1 ? ' result' : ' results');
    }
    function update() {
      clearTimeout(timer);
      timer = setTimeout(function () {
        load().then(render).catch(function () { close(); });
      }, 80);
    }
    input.addEventListener('focus', function () { load().catch(function () {}); if (query(input.value)) update(); });
    input.addEventListener('input', update);
    input.addEventListener('keydown', function (e) {
      var open = !list.hidden;
      if (e.key === 'ArrowDown') { e.preventDefault(); if (!open) { update(); return; } mark(active + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); if (open) mark(active - 1); }
      else if (e.key === 'Enter') {
        if (open && active > -1 && results[active]) { e.preventDefault(); location.href = results[active].href; }
      } else if (e.key === 'Escape') {
        if (open) { e.preventDefault(); close(); } else if (input.value) { e.preventDefault(); input.value = ''; live.textContent = ''; }
      }
    });
    input.addEventListener('blur', function () { setTimeout(close, 120); });
  });

  // Exposed for tests and for pages that want the same ranking.
  window.__siteSearchRank = function (j, q) { return search(prepare(j), q); };
})();

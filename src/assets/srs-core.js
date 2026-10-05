// Spaced repetition for the study widget, as pure functions (no DOM, no
// storage), so the tests run them in node. Loaded by study.js; sets
// window.PrimerSRS (globalThis.PrimerSRS in node).
//
// The scheduler is a Leitner box system:
//   - "Again" puts a card in box 0, due today: it comes back in this session.
//   - "I knew it" moves a card up one box. Box n is next due INTERVALS[n] days
//     later: 1, 3, 7, 16, then 35 days, and 35 days from then on.
//   - A card turned but never marked is "seen": not scheduled, still new.
//   - At most NEW_PER_DAY cards are marked for the first time each day (20,
//     the Anki default the deck page cites). The count starts again at local
//     midnight.
// Days are whole local calendar days since 1970-01-01 (dayNum), so "due today"
// changes at the learner's own midnight.
//
// A card's state is a small array [box, dueDay|null, mark] (mark: 'k' knew it,
// 'a' again, 's' seen); the deck's new-card count is [day, count].
(function (root) {
  'use strict';
  var DAY = 86400000;
  var INTERVALS = [0, 1, 3, 7, 16, 35];
  var NEW_PER_DAY = 20;
  var BUFFER = 7; // the last week before the exam: no new cards

  /** Whole local days since 1970-01-01 for a Date or ms (default now). */
  var dayNum = function (t) { var d = t == null ? new Date() : new Date(t); return Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / DAY); };
  /** 'YYYY-MM-DD' for a day number. */
  var dayKey = function (n) { return new Date(n * DAY).toISOString().slice(0, 10); };
  /** Day number for 'YYYY-MM-DD'. */
  var fromKey = function (s) { var p = String(s).split('-'); return Math.round(Date.UTC(+p[0], +p[1] - 1, +p[2]) / DAY); };

  /** A card state is new until it has been marked once. */
  var isNew = function (e) { return !e || e[2] === 's' || e[0] == null; };
  var isDue = function (e, today) { return !!e && e[1] != null && e[1] <= today; };
  /** The next state after a mark ('k' or 'a') on `today`. */
  var grade = function (e, mark, today) {
    if (mark === 'a') return [0, today, 'a'];
    var box = isNew(e) ? 1 : Math.min(INTERVALS.length - 1, (e[0] || 0) + 1);
    return [box, today + INTERVALS[box], 'k'];
  };
  /** Days until the card is next due if marked "I knew it" now. */
  var nextInterval = function (e) { return INTERVALS[isNew(e) ? 1 : Math.min(INTERVALS.length - 1, (e[0] || 0) + 1)]; };
  /** The state after the card is turned: seen, unless it already has a mark. */
  var seen = function (e) { return e || [0, null, 's']; };

  /** Cards marked for the first time today, given the stored [day, count]. */
  var newDone = function (n, today) { return n && n[0] === today ? n[1] || 0 : 0; };
  var newLeft = function (n, today, limit) { return Math.max(0, (limit == null ? NEW_PER_DAY : limit) - newDone(n, today)); };
  /** The new-card count after one more first mark today. */
  var countNew = function (n, today) { return [today, newDone(n, today) + 1]; };

  /** How many of `keys` (card keys) are due on `today` in states `c`. */
  var dueCount = function (c, today, keys) {
    var t = 0;
    (keys || Object.keys(c || {})).forEach(function (k) { if (isDue(c[k], today)) t += 1; });
    return t;
  };

  /**
   * The order to study `cards` ([{ id, topic }], already filtered) in a mode:
   *   due   cards due today, the longest overdue first, then deck order
   *   new   unmarked cards in deck order, at most `left`
   *   all   the whole list in deck order
   *   topic the cards whose topic slug is `topic`, in deck order
   * key(id) gives the state key for a card ID.
   */
  var queue = function (mode, cards, c, today, o) {
    o = o || {};
    var key = o.key || function (id) { return id; };
    var st = function (x) { return c[key(x.id)]; };
    if (mode === 'due') {
      return cards.map(function (x, i) { return { x: x, i: i, d: (st(x) || [])[1] }; })
        .filter(function (y) { return y.d != null && y.d <= today; })
        .sort(function (a, b) { return a.d - b.d || a.i - b.i; })
        .map(function (y) { return y.x.id; });
    }
    if (mode === 'new') return cards.filter(function (x) { return isNew(st(x)); }).slice(0, o.left == null ? NEW_PER_DAY : o.left).map(function (x) { return x.id; });
    if (mode === 'topic') return cards.filter(function (x) { return slugify(x.topic) === o.topic; }).map(function (x) { return x.id; });
    return cards.map(function (x) { return x.id; });
  };

  /** The same slugs as the build (src/decks.mjs), for ?topic= and #study: links. */
  var slugify = function (s) {
    return String(s).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  // ── The exam plan as a calendar file (RFC 5545) ──────────────────────────
  var icsText = function (s) { return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n'); };
  /** Fold a content line at 75 octets (UTF-8), never inside a character. */
  var icsFold = function (line) {
    var out = [], cur = '', bytes = 0, limit = 75;
    for (var ch of line) {
      var cp = ch.codePointAt(0);
      var b = cp < 0x80 ? 1 : cp < 0x800 ? 2 : cp < 0x10000 ? 3 : 4;
      if (bytes + b > limit) { out.push(cur); cur = ' '; bytes = 1; limit = 75; }
      cur += ch; bytes += b;
    }
    out.push(cur);
    return out.join('\r\n');
  };
  var stamp = function (ms) { return new Date(ms).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''); };
  var compact = function (n) { return dayKey(n).replace(/-/g, ''); };

  /**
   * Cards a day to see `cards` new cards by a week before the exam.
   * Returns { days, study, perDay } (perDay 0 when there is no time).
   */
  var plan = function (cards, exam, today) {
    var days = fromKey(exam) - fromKey(today);
    var study = days - BUFFER;
    return { days: days, study: study, perDay: study >= 1 ? Math.ceil(cards / study) : 0 };
  };

  /**
   * One all-day event a day from `today` to the day before `exam` (both
   * 'YYYY-MM-DD'), with that day's target, and one on the exam day.
   * o: { deck, slug, url, cards (still to see), host, now (ms) }.
   * Returns the .ics text with CRLF line endings.
   */
  var calendar = function (o) {
    var t0 = fromKey(o.today), t1 = fromKey(o.exam);
    var p = plan(o.cards, o.exam, o.today);
    var lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//The Exam Primer//Study plan//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
      'X-WR-CALNAME:' + icsText('Study plan: ' + o.deck)];
    var host = o.host || 'conyso.com';
    var dt = stamp(o.now == null ? Date.now() : o.now);
    var ev = function (day, summary, desc) {
      lines.push('BEGIN:VEVENT', 'UID:' + o.slug + '-' + compact(day) + '-exam-' + compact(t1) + '@' + host, 'DTSTAMP:' + dt,
        'DTSTART;VALUE=DATE:' + compact(day), 'DTEND;VALUE=DATE:' + compact(day + 1),
        'SUMMARY:' + icsText(summary), 'DESCRIPTION:' + icsText(desc), 'URL:' + o.url, 'TRANSP:TRANSPARENT', 'END:VEVENT');
    };
    var link = o.url;
    for (var d = t0; d < t1 && d - t0 < 400; d++) {
      var learning = p.perDay > 0 && d < t1 - BUFFER;
      if (learning) ev(d, o.deck + ': ' + p.perDay + ' new card' + (p.perDay === 1 ? '' : 's'), 'Today’s target: ' + p.perDay + ' new card' + (p.perDay === 1 ? '' : 's') + ', plus the cards due for review.\nOpen the deck: ' + link);
      else ev(d, o.deck + ': review', 'No new cards today. Go over the cards due for review and the ones you marked Again, then practice questions.\nOpen the deck: ' + link);
    }
    if (t1 >= t0) ev(t1, o.deck + ': exam day', 'Good luck.\n' + link);
    lines.push('END:VCALENDAR');
    return lines.map(icsFold).join('\r\n') + '\r\n';
  };

  root.PrimerSRS = {
    INTERVALS: INTERVALS, NEW_PER_DAY: NEW_PER_DAY, BUFFER: BUFFER,
    dayNum: dayNum, dayKey: dayKey, fromKey: fromKey, isNew: isNew, isDue: isDue, grade: grade, nextInterval: nextInterval, seen: seen,
    newDone: newDone, newLeft: newLeft, countNew: countNew, dueCount: dueCount, queue: queue, slugify: slugify,
    plan: plan, calendar: calendar, icsText: icsText, icsFold: icsFold,
  };
})(typeof window !== 'undefined' ? window : globalThis);

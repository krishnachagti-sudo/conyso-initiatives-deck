// The daily ten's selection, shared by the build (src/site/pages/daily.mjs
// imports it) and the browser (src/assets/daily.js loads it with import()).
// One copy of the code, so the day files the build writes and the ten a
// browser picks from the pool are the same ten.
//
// How the ten are picked (pick):
//   1. The day key is the UTC date, "YYYY-MM-DD".
//   2. Seed = FNV-1a 32-bit hash of "daily:" + day key. The generator is mulberry32.
//   3. The pool's decks are grouped by exam family (pool.decks[slug].f), families
//      sorted by name, then shuffled (Fisher–Yates with the generator); each
//      family's decks are shuffled the same way.
//   4. Ten deck slots are dealt round robin, one deck from each family per round,
//      so a day spreads across as many exams as there are, and no deck appears
//      twice until every deck has appeared once.
//   5. Slots 3, 6 and 9 prefer a short fact; the rest prefer a multiple-choice
//      card. Within its deck a slot takes a card at random (falling back to the
//      other kind when the deck has none left of the preferred one).
//   The card of the day is the first of the ten.
// Everyone with the same pool gets the same ten. Adding a deck to the pool
// changes the ten from the day the new pool is published.
//
// Daily number: days since the launch date 2026-10-04, which is #1.

export const LAUNCH = '2026-10-04';
const DAY = 86400000;

export const dayKey = (d) => new Date(d == null ? Date.now() : d).toISOString().slice(0, 10);
export const dayIndex = (key) => { const p = key.split('-'); return Math.round(Date.UTC(+p[0], +p[1] - 1, +p[2]) / DAY); };
export const keyOfIndex = (i) => new Date(i * DAY).toISOString().slice(0, 10);
export const addDays = (key, n) => keyOfIndex(dayIndex(key) + n);
export const dailyNumber = (key) => Math.max(1, dayIndex(key) - dayIndex(LAUNCH) + 1);

/** FNV-1a, 32-bit. */
export const hash = (s) => {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return h >>> 0;
};
/** mulberry32: a small, well-mixed 32-bit generator. Returns floats in [0, 1). */
export const mulberry32 = (seed) => {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};
const shuffle = (xs, rnd) => {
  for (let i = xs.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [xs[i], xs[j]] = [xs[j], xs[i]]; }
  return xs;
};

const FACT_SLOTS = [2, 5, 8];

/** Indices into pool.cards of the day's cards, in play order. */
export function pick(pool, key, n = 10) {
  const cards = pool.cards || [];
  if (!cards.length) return [];
  const rnd = mulberry32(hash(`daily:${key}`));
  const byDeck = {};
  cards.forEach((c, i) => { (byDeck[c.d] ||= []).push(i); });
  const fams = {};
  for (const slug of Object.keys(byDeck).sort()) {
    const f = pool.decks?.[slug]?.f || slug;
    (fams[f] ||= []).push(slug);
  }
  const famList = shuffle(Object.keys(fams).sort(), rnd).map((f) => shuffle(fams[f].slice(), rnd));
  const order = [];
  for (let round = 0; order.length < Object.keys(byDeck).length; round++) {
    for (const ds of famList) if (round < ds.length) order.push(ds[round]);
  }
  const used = new Set();
  const out = [];
  const limit = Math.min(n, cards.length);
  for (let s = 0; out.length < limit; s++) {
    const free = byDeck[order[s % order.length]].filter((i) => !used.has(i));
    if (!free.length) { if (s > order.length * (n + 1)) break; continue; }
    const wantFact = FACT_SLOTS.includes(out.length);
    const pref = free.filter((i) => !cards[i].c === wantFact);
    const from = pref.length ? pref : free;
    const chosen = from[Math.floor(rnd() * from.length)];
    used.add(chosen);
    out.push(chosen);
  }
  return out;
}

/**
 * One day's file (daily/days/<key>.json): the ten cards and their decks, the
 * same shape as the pool, so the player reads either.
 */
export function dayFile(pool, key) {
  const cards = pick(pool, key, 10).map((i) => pool.cards[i]);
  const decks = {};
  for (const c of cards) decks[c.d] = pool.decks[c.d];
  return { v: 1, date: key, num: dailyNumber(key), decks, cards };
}

/** The Wordle-style result. marks: array of booleans (true = right). */
export const shareText = (brand, num, marks, url) =>
  `${brand} · Daily #${num}\n${marks.map((m) => (m ? '🟩' : '🟥')).join('')} ${marks.filter(Boolean).length}/${marks.length}\n${url}`;

/** Consecutive days played up to today (or up to yesterday when today is not yet played). */
export function streak(history = {}, key) {
  history ||= {};
  let i = dayIndex(key);
  if (!history[key]) i -= 1;
  let n = 0;
  while (history[keyOfIndex(i)]) { n += 1; i -= 1; }
  return n;
}
export function bestStreak(history) {
  const idx = Object.keys(history || {}).filter((k) => /^\d{4}-\d\d-\d\d$/.test(k)).map(dayIndex).sort((a, b) => a - b);
  let best = 0, run = 0;
  idx.forEach((d, j) => { run = j && d === idx[j - 1] + 1 ? run + 1 : 1; if (run > best) best = run; });
  return best;
}
export const msToNextDay = (now = Date.now()) => (Math.floor(now / DAY) + 1) * DAY - now;
export const clock = (ms) => {
  const s = Math.max(0, Math.floor(ms / 1000));
  const pad = (x) => String(x).padStart(2, '0');
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`;
};

/**
 * The day a ?day= address asks for, or null when it is not one to play: it must
 * be a real date written YYYY-MM-DD, on or after the launch, and not after today
 * (the ten for days still to come stay unseen).
 */
export function replayDay(param, today) {
  if (!param || !/^\d{4}-\d\d-\d\d$/.test(param)) return null;
  if (keyOfIndex(dayIndex(param)) !== param) return null; // 2026-02-30 and the like
  if (dayIndex(param) < dayIndex(LAUNCH) || dayIndex(param) > dayIndex(today)) return null;
  return param;
}

/** Every day from the launch to `to`, newest first. */
export function pastDays(to, from = LAUNCH) {
  const out = [];
  for (let i = dayIndex(to); i >= dayIndex(from); i--) out.push(keyOfIndex(i));
  return out;
}

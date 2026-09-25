// Print what a writer needs for its topics and nothing else (docs/PIPELINE-V3.md,
// C3): the budget, the registry terms each topic teaches, its concepts (each
// with the matching passage of its cached source), its traps and the sources. Writers read this instead of the whole brief.
//
//   node build/topic-slice.mjs <slug> <topic>[,<topic>…]
//
// Reads the research outputs in research/deck-briefs/: <slug>-terms.json,
// <slug>-concepts.json, <slug>-budget.json, <slug>-sources.json, and the
// "[Tn]"-tagged trap lines in <slug>.md.

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { sourceReader } from '../src/evidence.mjs';

const B = 'research/deck-briefs';
const readJSON = (f) => (existsSync(join(B, f)) ? JSON.parse(readFileSync(join(B, f), 'utf8')) : null);

const STOP = new Set('the and for with from that this into over under than then their them they what when where which while your about after before other their these those there also only such each more most less least made make does done being been have has had not are was were will would shall should can could may might must its it\'s per via'.split(' '));

/**
 * The passage of a cached source that best matches a concept: the ~120 words on
 * the cited page (or in the whole document) with the most of the concept's
 * words. Writers start from this instead of searching, which is where most of
 * their tool calls, and so their tokens, went (docs/REVIEW-PROMETHEUS.md).
 */
export function excerpt(text, url, name, size = 110) {
  if (!text) return null;
  const cited = Number(String(url).match(/#page=(\d+)/)?.[1]) || 0;
  // Words with their PDF page (form feeds split pages; plain text is page 0).
  const pages = text.split('\f');
  const w = [], pg = [];
  pages.forEach((p, i) => { for (const x of p.replace(/\s+/g, ' ').trim().split(' ')) if (x) { w.push(x); pg.push(pages.length > 1 ? i + 1 : 0); } });
  const low = w.map((x) => x.toLowerCase().replace(/[^a-z0-9$%-]/g, ''));
  const keys = [...new Set((String(name).toLowerCase().match(/[a-z0-9$%-]+/g) || []).filter((k) => (k.length > 3 && !STOP.has(k)) || /\d/.test(k)))];
  if (!keys.length) return null;
  // Rare words count for more than words found on every page.
  const freq = Object.fromEntries(keys.map((k) => [k, low.filter((x) => x.startsWith(k)).length]));
  const weight = Object.fromEntries(keys.map((k) => [k, freq[k] ? 1 / Math.log(2 + freq[k]) : 0]));
  const pairs = keys.slice(1).map((k, i) => [keys[i], k]);
  // The concept's rarest word (found at least once) must be in the window.
  const rarest = keys.filter((k) => freq[k]).sort((a, b) => freq[a] - freq[b])[0];
  if (!rarest) return null;
  let best = -1, at = -1;
  for (let i = 0; i < low.length; i++) {
    if (!low[i].startsWith(rarest)) continue;
    const start = Math.max(0, i - 6);
    const win = low.slice(start, start + size);
    let score = keys.reduce((a, k) => a + (win.some((x) => x.startsWith(k)) ? weight[k] : 0), 0);
    for (const [x, y] of pairs) if (win.some((t, j) => t.startsWith(x) && win[j + 1]?.startsWith(y))) score += 3 * Math.max(weight[x], weight[y]);
    const raw = w.slice(start, start + size).join(' ');
    score -= ((raw.match(/\. \. \./g) || []).length + (raw.match(/•/g) || []).length) * 0.5;
    const nums = w.slice(start, start + size).filter((x) => /^\d+[,.]?$/.test(x)).length;
    if (nums > size * 0.12) score -= 5; // an index page: words followed by page numbers
    if (cited && pg[i] === cited) score += 0.3;
    if (score > best) { best = score; at = start; }
  }
  if (at < 0) return null;
  const page = pg[at] ? ` (p. ${pg[at]}${cited && pg[at] !== cited ? `; cited #page=${cited}` : ''})` : '';
  return `${w.slice(at, at + size).join(' ')}${page}`;
}

export function slice(slug, topics, { excerpts = true } = {}) {
  const read = excerpts ? sourceReader(slug) : () => null;
  const terms = readJSON(`${slug}-terms.json`) || [];
  const concepts = readJSON(`${slug}-concepts.json`) || [];
  const budget = readJSON(`${slug}-budget.json`) || {};
  const sources = readJSON(`${slug}-sources.json`) || [];
  const brief = existsSync(join(B, `${slug}.md`)) ? readFileSync(join(B, `${slug}.md`), 'utf8') : '';
  const out = [];
  for (const t of topics) {
    const cs = concepts.filter((c) => Number(c.topic) === t);
    const tag = new RegExp(`\\[T${t}\\]`);
    out.push(`## Topic ${t}${cs[0]?.topicName ? `: ${cs[0].topicName}` : ''}`, `Budget: ${budget[t] ?? '?'} cards (±15%). Card ids: <family>.<topic-slug>.<card-slug>; order ${t * 1000}–${t * 1000 + 999}.`, '',
      '### Terms this topic teaches (one primer each; spell them exactly so; teach the abbreviation in the same primer)');
    for (const r of terms.filter((r) => Number(r.topic) === t)) out.push(`- "${r.term}"${r.abbr ? ` + abbreviation "${r.abbr}"` : ''}: ${r.source}`);
    out.push('', '### Concepts (id | kind | priority | source | note)');
    for (const c of cs) {
      out.push(`- ${c.id} | ${c.name} | ${c.kind} | ${c.priority} | ${c.source || ''}${c.figure ? ` | figure: ${c.figure}` : ''}${c.note ? ` | ${c.note}` : ''}`);
      const first = String(c.source || '').split(/\s*;\s*/)[0];
      const ex = first && excerpt(read(first), first, c.name);
      if (ex) out.push(`  > ${ex}`); // a starting point found by keyword: check it is the passage you need
    }
    const traps = brief.split('\n').filter((l) => tag.test(l));
    if (traps.length) out.push('', '### Traps', ...traps);
    out.push('');
  }
  const used = new Set(concepts.filter((c) => topics.includes(Number(c.topic))).flatMap((c) => String(c.source || '').split(/\s*;\s*/)).map((u) => u.split('#')[0]));
  const srcs = sources.filter((s) => [...used].some((u) => u && (u.startsWith(s.url.split('#')[0]) || s.url.startsWith(u))));
  out.push('## Sources to read (saved text first; fetch only what is missing)');
  for (const s of srcs.length ? srcs : sources) out.push(`- ${s.title}: ${s.url} | tier ${s.tier} | ${s.path || 'not saved'}`);
  return out.join('\n');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [slug, list] = process.argv.slice(2);
  // --no-excerpts prints the slice without source passages.
  if (!slug || !list) { console.error('usage: node build/topic-slice.mjs <slug> <topic>[,<topic>…]'); process.exitCode = 1; }
  else console.log(slice(slug, list.split(',').map(Number), { excerpts: !process.argv.includes('--no-excerpts') }));
}

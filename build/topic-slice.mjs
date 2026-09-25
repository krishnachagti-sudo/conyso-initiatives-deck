// Print what a writer needs for its topics and nothing else (docs/PIPELINE-V3.md,
// C3): the budget, the registry terms each topic teaches, its concepts, its
// traps and the sources to read. Writers read this instead of the whole brief.
//
//   node build/topic-slice.mjs <slug> <topic>[,<topic>…]
//
// Reads the research outputs in research/deck-briefs/: <slug>-terms.json,
// <slug>-concepts.json, <slug>-budget.json, <slug>-sources.json, and the
// "[Tn]"-tagged trap lines in <slug>.md.

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const B = 'research/deck-briefs';
const readJSON = (f) => (existsSync(join(B, f)) ? JSON.parse(readFileSync(join(B, f), 'utf8')) : null);

export function slice(slug, topics) {
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
    for (const r of terms.filter((r) => Number(r.topic) === t)) out.push(`- ${r.term}${r.abbr ? ` (${r.abbr})` : ''}: ${r.source}`);
    out.push('', '### Concepts (id | kind | priority | source | note)');
    for (const c of cs) out.push(`- ${c.id} | ${c.kind} | ${c.priority} | ${c.source || ''}${c.figure ? ` | figure: ${c.figure}` : ''}${c.note ? ` | ${c.note}` : ''}`);
    const traps = brief.split('\n').filter((l) => tag.test(l));
    if (traps.length) out.push('', '### Traps', ...traps);
    out.push('');
  }
  const used = new Set(concepts.filter((c) => topics.includes(Number(c.topic))).flatMap((c) => String(c.source || '').split(/\s*;\s*/)).map((u) => u.split('#')[0]));
  const srcs = sources.filter((s) => [...used].some((u) => u && (u.startsWith(s.url.split('#')[0]) || s.url.startsWith(u))));
  out.push('## Sources to read (saved text first; fetch only what is missing)');
  for (const s of srcs.length ? srcs : sources) out.push(`- ${s.title}: ${s.url} | ${s.licence} | ${s.path || 'not saved'}`);
  return out.join('\n');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [slug, list] = process.argv.slice(2);
  if (!slug || !list) { console.error('usage: node build/topic-slice.mjs <slug> <topic>[,<topic>…]'); process.exitCode = 1; }
  else console.log(slice(slug, list.split(',').map(Number)));
}

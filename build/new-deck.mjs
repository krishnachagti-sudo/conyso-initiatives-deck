// Set up a deck from its research outputs, so a new deck costs no agent time
// before writing (docs/PIPELINE-V3.md, step 2): deck.json and the writers'
// notes, from research/deck-briefs/<slug>.md and <slug>-sources.json.
//
//   node build/new-deck.mjs <slug> --family=<prefix> --title="…" --short="…"
//     --family-title="…" [--prereq=kcna,kcsa] [--source-short="…"]
//     [--description="…"] [--volatile="<validAsOf text>"] [--blocker="…"]…
//
// The deck notice is the block quote after "Deck notice" in the brief. Then
// run node build/cache-sources.mjs --research=<slug>.

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
const flag = (n) => args.find((a) => a.startsWith(`--${n}=`))?.slice(n.length + 3);
const flags = (n) => args.filter((a) => a.startsWith(`--${n}=`)).map((a) => a.slice(n.length + 3));
const readJSON = (p) => JSON.parse(readFileSync(p, 'utf8'));

export function deckNotice(brief) {
  const i = brief.search(/deck notice/i);
  if (i < 0) return '';
  const lines = brief.slice(i).split('\n').slice(1);
  const quote = [];
  for (const l of lines) { if (/^\s*>/.test(l)) quote.push(l.replace(/^\s*>\s?/, '')); else if (quote.length) break; }
  return quote.join(' ').replace(/\s+/g, ' ').trim();
}

const slug = args.find((a) => !a.startsWith('--'));
if (!slug || !flag('family') || !flag('title')) {
  console.error('usage: node build/new-deck.mjs <slug> --family=<prefix> --title="…" --short="…" --family-title="…" [--prereq=a,b]');
  process.exitCode = 1;
} else {
  const B = 'research/deck-briefs';
  const brief = readFileSync(join(B, `${slug}.md`), 'utf8');
  const sources = readJSON(join(B, `${slug}-sources.json`));
  const decks = readdirSync('decks').filter((d) => existsSync(join('decks', d, 'deck.json'))).map((d) => readJSON(join('decks', d, 'deck.json')));
  const prereq = (flag('prereq') || '').split(',').filter(Boolean);
  const notice = deckNotice(brief);
  const today = new Date().toISOString().slice(0, 10);
  const meta = {
    id: Math.max(...decks.map((d) => d.id)) + 1,
    slug,
    number: Math.max(...decks.map((d) => d.number || 0)) + 1,
    title: flag('title'),
    shortTitle: flag('short') || flag('title'),
    family: flag('family'),
    familyTitle: flag('family-title') || '',
    version: '0.1.0',
    status: 'draft',
    evidence: true,
    releaseBlockers: ['newcomer read-through', 'expert review', ...flags('blocker')],
    description: flag('description') || `${flag('short') || flag('title')}: every idea explained before it is tested, every card quoting the source words it rests on.`,
    reportURL: `https://github.com/krishnachagti-sudo/conyso-initiatives-deck/issues/new?labels=card-report&title=Card+report%3A+${slug}`,
    licence: 'CC BY-SA 4.0',
    examRefsCleared: false,
    prerequisites: prereq.map((p) => `the ${decks.find((d) => d.slug === p)?.shortTitle || p} deck`),
    ...(prereq.length ? { prerequisiteDecks: prereq } : {}),
    assumedTerms: [],
    sourceShort: flag('source-short') || 'its official sources',
    ...(notice ? { notice } : {}),
    changelog: [{ version: '0.1.0', date: today, notes: 'First draft, not yet released.' }],
  };
  mkdirSync(join('decks', slug, 'notes'), { recursive: true });
  mkdirSync(join('decks', slug, 'media'), { recursive: true });
  writeFileSync(join('decks', slug, 'deck.json'), JSON.stringify(meta, null, 2) + '\n');

  const hosts = new Map();
  for (const s of sources) {
    const h = s.url.replace(/^https?:\/\/([^/]+).*/, '$1');
    if (!hosts.has(h)) hosts.set(h, { tier: s.tier, licence: String(s.licence).replace(/\s+/g, ' ').slice(0, 80) });
  }
  const volatile = flag('volatile') || `${today} · <version or edition>`;
  const notes = `# ${meta.shortTitle}: notes for every writer (read after DIGEST.md)

- **Slug:** \`${slug}\`. **Family prefix:** \`${meta.family}\` (card ids \`${meta.family}.<topic-slug>.<card-slug>\`, concept ids \`${meta.family}.<concept-slug>\`). Use the concept ids in \`${slug}-concepts.json\`; add new ones only when a card needs them.
- **Builds on:** ${prereq.length ? prereq.map((p) => `\`${p}\``).join(', ') + '. Their registry terms (topic 0) count as taught: never re-introduce them.' : 'nothing. Every term gets its primer.'}
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
${[...hosts].map(([h, v]) => `  - ${h} → tier ${v.tier} (${v.licence})`).join('\n')}
- **Evidence is required.** The texts are in \`research/sources/${slug}/\`; the slice prints a passage under each concept.
- **Volatile facts:** \`volatile: true\`, \`validAsOf: "${volatile}"\`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.
`;
  writeFileSync(join(B, `${slug}-writers.md`), notes);
  console.log(`decks/${slug}/deck.json (id ${meta.id}, number ${meta.number}${notice ? ', notice from the brief' : ', NO NOTICE FOUND'}); ${B}/${slug}-writers.md (${hosts.size} hosts)`);
}

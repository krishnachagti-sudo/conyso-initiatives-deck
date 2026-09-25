# Writer's brief (the only document writers and fixers need)

You write the cards for some topics of ONE deck. Read this page, the deck's
notes (`research/deck-briefs/<slug>-writers.md`) and your topic slice
(`node build/topic-slice.mjs <slug> <topics>`). Do not read the research brief
or CARD-STANDARD.md unless this page does not answer a question. For the
shape and tone of cards, see decks/kanban-guide/notes/*.json.

## Rules
- **The one rule.** Never write a fact you did not read in a source you fetched
  or that is saved (`research/sources/<slug>/` first, then the scratch folder).
  Paraphrase in plain British English. Quote only when the words matter, and
  then verbatim. Unsure → leave it out and report it.
- **Privacy.** No email, name or personal detail in any request. Use a generic
  User-Agent.
- **Coverage.** Every concept in your slice gets its cards, extras included:
  decks are comprehensive. Stay within 15% of each topic's budget. If you
  cannot, say so in your report; never trim to save effort.
- Never run git. Never edit another writer's topics.

## Files
- One file per topic: `decks/<slug>/notes/<NN>-<topic-slug>.json`, shaped
  `{"topic": "<title>", "notes": [...]}`. Save each topic file as soon as it is
  complete, so an interruption loses at most one topic.
- New concepts: `research/deck-briefs/<slug>-concepts-<letter>.json`, as
  `[{"id", "name"}]`.
- Figures: `decks/<slug>/media/`, png or svg, under 400 KB.

## Formats (exactly these)
- **Card id:** `<family>.<topic-slug>.<card-slug>`. Lowercase, with hyphens
  inside words and dots between parts, e.g. `prom.alerting.pending-state`.
- **Concept id:** `<family>.<concept-slug>`. Hyphens only, never underscores,
  and always the deck's own family prefix. Reuse a prerequisite deck's concept
  id only if it already exists in its `concepts/<family>.json`.
- **Terms:** in `introduces` and `uses`, spell each term exactly as the
  registry does, with no brackets. A primer that teaches an abbreviation
  lists both, e.g. `"introduces": ["Incident Command System", "ICS"]`, and
  says both on the card.
- **Order:** topic N uses N×1000 to N×1000+999, unique, in teaching order, with
  gaps of 5 to 10. Primers come first.
- **sourceLicence:** the tier letter, then the licence, as src/licences.json
  expects for the host, e.g. "B · CC BY 4.0", "B · Apache 2.0",
  "B · public domain (US Government work)", or "C · facts only, in our own
  words" for a source that is not openly licensed.
- **sourceURL:** the exact page or anchor. For a PDF use `#page=N`, where N is
  the PDF page (count form feeds in pdftotext output), not the printed number.
- **Pool cards** are written by `node build/pool-cards.mjs <slug>`, never by
  hand. You fill in each one's explanation, choicesExplained, uses and
  conceptIDs; question, choices and key stay word for word.

## Card shape
Every card: id; type (basic | cloze with one `{{c1::…}}` | scenario with
choices); kind (primer | fact | application | classification | contrast);
priority (core | extra); order; front (a question, or a cloze sentence); back
(≤ 25 words, lists ≤ 3 items); explanation (1–2 sentences saying WHY, never
restating the answer); source (title, section, page); sourceURL;
sourceLicence; uses; conceptIDs.
- **evidence** (decks whose deck.json has `"evidence": true`): for a tier A
  or B source, 4 to 60 words copied **exactly** from the cited source, and
  from the cited PDF page. These words must support the back and the
  explanation. The checker finds them in the cached text
  (`research/sources/<slug>/`). If a reason in your explanation is not in the
  evidence, the reason is yours: cut it. Tier C cards have no evidence (we do
  not quote tier C).
- **Primers** also have `introduces` (one term, plus its abbreviation) and an
  `example` (concrete: "like X, but…").
- **Volatile facts:** `volatile: true` and `validAsOf: "YYYY-MM-DD · <version>"`.
- **Scenario cards:** `choicesExplained` says why each wrong option is wrong.

## Teaching
- Each topic opens with primers for its registry terms, then facts, then
  application and classification cards (every core fact concept needs one),
  then contrasts.
- Use only terms from earlier topics or the prerequisite deck, and your own
  earlier primers.
- Abbreviations: teach them in a primer, or name them in your report for the
  glossary.
- **Sets:** one card per member. Each member's card asks a question that only
  that member answers. Never write "Name one of the four…" with a different
  accepted answer on each card; the checker rejects shared fronts.
- "Name two" questions give two answers.
- Scenarios are your own: never copy a course's activities or worked examples.

## Habits the audits keep finding (fix them as you write)
- **No invented "why".** An explanation may restate, apply or connect what
  the cited section says. A reason ("which is why", "mainly because") must
  be in the source. About half the pilot audit's findings were invented
  reasons.
- **Keep the source's hedges.** "Usually", "not necessarily", "almost
  certainly" stay as written; never harden them into "always", "not" or
  "means".
- **Open lists stay open.** If the source lists more items than you ask for,
  write "What are two…?" and accept any two; say "among others" when a list
  is partial. Never cloze the last item of a partial list.
- **Tier C means your own words and your own example.** Write the fact from
  scratch. Rewording the source's sentence lightly is copying.
- **The anchor must hold the claim.** Cite the section the claim comes from,
  not a nearby one.
- **An example never gives away a later card.** A primer's `example` must not
  be the same scenario a later card asks about. Two cards that ask the same
  thing: keep one.

## Figures
A concept whose slice names a figure gets that figure on one card, where the
figure is the content: a chart, a schematic, an organisation chart. Add it as
`"image": {"file": "media/<name>", "alt": "<what it shows, fully>", "credit":
"<publisher, document, figure>", "licence": "<tier> · <licence>", "side":
"front"|"back"}`. Either crop the source's own figure (open licences only;
never seals, logos or photos of people) or draw a plain SVG from the sourced
facts, credited "Drawn for this deck from <source>". Figures are part of the
budget, not an extra.

## Working lean (every tool call re-sends everything you have read)
- **Grep, don't read.** Find the passage you need with `grep -n -A8
  '<phrase>' <file>` and read only that. Open a whole page only when the
  card is about the whole page.
- **One write per topic.** Plan the topic's cards, then write the file in a
  single Write. Don't build it up through many small Edits.
- **Check once per topic.** Run the checks when the topic file is complete,
  fix everything they list in one pass, and run them once more.

## Last pass, before the checks
Reread every explanation beside its evidence (or its cited passage), and ask
of each: is every reason in it stated there? Delete the ones that are not.
This is the single most common audit finding. If your source is missing from
`research/sources/<slug>/`, run `node build/cache-sources.mjs --only=<slug>`.

## Before you reply
From /home/user/conyso-initiatives-deck, all three must be clean for your
topics:
- `node build/check.mjs --only=<slug> --summary --registry=research/deck-briefs/<slug>-terms.json --concepts-extra=research/deck-briefs/<slug>-concepts.json,<your concept file>`
- `node build/status.mjs <slug> --registry`
- `node build/sources.mjs --only=<slug>`

## Your reply
At most five lines:
1. files written;
2. cards per topic against budget;
3. figures added;
4. anything assigned that you did not cover or could not verify;
5. abbreviations for the glossary.

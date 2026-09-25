# Research brief (given to every research agent)

You research ONE certification so that writers can build its deck. You do not
write cards, definitions or explanations: writers read the sources themselves.
Your job is to find and pin down what the deck must cover, where each thing is
written, and what may be used. Keep it lean. The Law Tome and Bias Atlas needed
no research stage at all; this one exists only to map a whole exam at once.

**Budget:** about 150k tokens. Stop fetching once every outline item has a
source. The Markdown brief stays under 5,000 words.

## Rules
- **The one rule.** Never write a fact you have not read in a source you fetched
  in this task. No figures, dates, counts, section numbers or licence terms from
  memory. Anything you cannot confirm goes under "Not verified", with what you
  tried. The leads in your prompt were written from memory: they are not
  evidence.
- **Privacy.** Never put any email address, name or other personal detail in a
  request (User-Agent, header, query, body). Use a generic User-Agent such as
  "Mozilla/5.0 (compatible; research)".
- **Respect a site's terms.** If a site blocks automated fetching or its
  terms forbid scraping, do not get round it: no proxy readers (such as
  r.jina.ai), no mirrors or caches of its pages. Use the owner's openly
  licensed documents instead, or record the gap under "Not verified".
- **Fetch pages, not sites.** Download only the pages and documents the outline
  needs; never mirror a website or clone a repository. Save each one once to the
  scratch folder, extract its text (pdftotext for PDFs) and grep it.
- **Look twice only where it matters.** Read the exam facts (pass mark, question
  count, time, dates) and each licence statement in the raw text, not through a
  summarising tool. Nothing else needs a second fetch.
- **Build on the prerequisite deck.** If the deck builds on another
  (prerequisiteDecks), read that deck's `research/sources/<slug>/manifest.json`
  and `<slug>-terms.json` first. Re-use its sources and its terms; research only
  what is new.
- Never run git, not even read-only in a scratch clone. Write only your outputs and the scratch folder.

## Outputs (in research/deck-briefs/)
1. **`<slug>.md`**, under 5,000 words:
   - **Exam facts:** owner, current version and dates, question count, time,
     pass mark, format, retake rules, validity. Each with its quote and URL.
     Say which facts change often.
   - **Naming:** the owner's trademark and naming terms from its own site, and
     how CONTENT-POLICY.md §4 applies. Include the deck notice text.
   - **Outline:** every domain and objective in the owner's order, with
     weights. Tag each with the topic that covers it, as `[T3]`.
   - **Traps:** one bullet each, tagged `[Tn]`: things candidates confuse,
     outdated versions still in circulation, rules that changed recently.
   - **Languages:** the exam's languages, and any official or openly licensed
     translation of the main sources. One short paragraph.
   - **Not verified.**
2. **`<slug>-sources.json`**: `[{"id", "title", "url", "publisher",
   "licence": "<quoted from the source>", "tier": "A|B|C", "path": "<saved
   text, in scratch>"}]`. Take the tier from CONTENT-POLICY.md §3; do not
   restate it.
3. **`<slug>-terms.json`** (the term registry): `[{"term", "abbr", "topic",
   "concept", "source"}]`, one entry per term to teach, in teaching order.
   `term` is the exact spelling writers will use. It has **no brackets**: an
   abbreviation goes in `abbr`, and a synonym or gloss goes in the concept's
   `note`. `topic` 0 means a prerequisite deck already teaches it.
4. **`<slug>-concepts.json`**: `[{"id", "name", "topic", "topicName", "kind":
   "term|rule|number|procedure|set|contrast", "priority": "core|extra",
   "source": "<URL#anchor or #page=N>", "figure": "<figure to show, if the
   figure is the content>", "note": "<≤ 15 words, only if needed>"}]`.
   - Concept ids are `<family>.<slug>`: lowercase, hyphens only, and the
     deck's own family prefix.
   - **One concept is one testable thing:** one rule, one number, one
     procedure, one term or one set. Never bundle ("Stock options: ISO, ESPP
     and nonstatutory" is three concepts, each with its own rules). The
     budget counts cards per concept, so a bundled concept silently drops
     cards and the deck stops being comprehensive.
   - Every outline item maps to at least one concept.
   - `#page=N` is the PDF page: count the form feeds in pdftotext output,
     not the printed page number.
5. **`<slug>-budget.json`**: `{"<topic>": <target cards>}`. Count one primer
   per term, one fact per rule or number, one card per member of a set with
   more than 3 members, one application or classification per core concept,
   and one contrast per contrast concept. Decks are comprehensive: extra
   concepts get cards too.
   Then add 10% to each topic: across batch 1, writers covering every concept
   landed 8–15% above counts made this way.
6. **If the exam uses a public question pool**, give each concept a `"pool"`
   array of the question IDs it covers. Run `python3 build/pool-skeleton.py
   <pool.txt> <slug>-concepts.json <slug>-skeleton` and fix the concept list
   until no question is unmapped. The deck's `pool` block then lets
   `build/pool-cards.mjs` write the pool cards.

## Your reply
At most five lines:
1. the files written;
2. counts of outline items, concepts, terms and budgeted cards;
3. the most important thing you could not verify;
4. where the leads in your prompt were wrong.

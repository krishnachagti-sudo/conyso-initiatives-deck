# Card writer brief (given to every writer agent)

You write the cards for ONE topic of ONE deck. Read, in order:
1. research/deck-briefs/DIGEST.md (the one-page standard; open CARD-STANDARD.md only
   for a question the digest does not answer).
2. The deck's research brief: research/deck-briefs/<slug>.md. It is your map, not
   your evidence: every card is written from the source itself, which you fetch.
3. The exemplar: decks/scrum-guide/notes/*.json, for the shape and tone of cards.

## Privacy (absolute)
Never put any email address, name or other personal detail in a request: not in a
User-Agent, header, query string or body. If a site asks for contact details in the
User-Agent, use a generic one such as "Mozilla/5.0 (compatible; research)" or skip
that site.

## The one rule
Never write a fact you have not read in a source you fetched during this task.
Paraphrase in plain British English; quote only when the exact words matter, and
then verbatim. If you cannot confirm a fact, leave the card out and list it in
your report. An incomplete topic beats an invented card.

## What you write
One file: decks/<slug>/notes/<NN>-<topic-slug>.json, shaped
`{ "topic": "<Topic title>", "notes": [ ... ] }`, and one concept file:
research/deck-briefs/<slug>-concepts-<NN>.json, an array of
`{ "id": "<family>.<concept>", "name": "<Name>" }` for every conceptID you use
that is new (the main session merges these into concepts/<family>.json).

Every card needs: id (`<family>.<topic-slug>.<card-slug>`, lowercase), type
(basic | cloze | scenario), kind (primer | fact | application | classification |
contrast), priority (core | extra), order (integers inside YOUR range, unique,
increasing in teaching order, gaps of 2 to 10), front, back (not for cloze),
explanation, source (title, section), sourceURL (the exact section or page),
sourceLicence (tier letter, then licence, e.g. "A · public domain"), uses (every
term the card relies on, spelled exactly as introduced), conceptIDs, and for
primers: introduces (exactly one term) and example. Volatile facts: volatile:
true and validAsOf ("YYYY-MM-DD · <version>").

Figures: where the figure IS the content (a schematic, a chart symbol, a
sectional-chart extract), save the image into decks/<slug>/media/ (png or svg,
under 400 KB, cropped to what the card asks about) and add
`"image": {"file": "media/<name>", "alt": "<what it shows, fully>", "credit":
"<publisher, document, figure number>", "licence": "<tier> · <licence>",
"side": "front"|"back"}`. Only use figures whose licence the brief records as
public domain or open. Never use a figure as decoration.

## Coverage and teaching order
- Cover EVERY outline item and concept the brief assigns to your topic. The deck
  must leave nothing out. End your report with any assigned item you did not
  cover, and why.
- Open with primers: one per new term, in dependency order, each with a plain
  answer, an explanation of why it matters, and a concrete example.
- You may use, without a primer, only: the terms listed as already taught
  (given in your assignment) and the terms your own primers introduce earlier.
- Then facts (one answer each; numbers with units and conditions), then
  application and classification cards (every core fact concept needs one), then
  contrast cards for confusable pairs.
- Complete sets: every member of an examinable list gets its own card.
- Backs of 25 words or fewer; lists of at most 3 items; explanations of one or
  two sentences.
- Scenario cards with choices must explain why each wrong option is wrong.
- Question-pool decks (tier A): you may use the real pool question verbatim as a
  scenario card with its choices, citing the pool and question ID in source.
  Still add the primers and fact cards that teach what the question tests.

## Before you finish
Run the two commands at the foot of DIGEST.md; your files must be clean.

Run `node build/check.mjs --decks=decks --concepts=concepts` after merging your
concepts into a temporary copy if needed, or simply check that your file parses
(`node -e "JSON.parse(require('fs').readFileSync(process.argv[1]))" <file>`).
Cross-topic undefined-term errors from other writers' topics are expected; fix
only your own.

Never run git. Never edit another topic's file.

## Your reply
At most 150 words: your file, card count by kind, figures added, concepts added,
and every assigned item you could not cover or verify.

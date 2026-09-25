# Reconciliation brief: one deck, after all its writers finish

Several writers drafted this deck's topics in parallel. Make it one coherent,
teach-first deck. Read CARD-STANDARD.md §2 and §2a, and the privacy and one-rule
sections of WRITER.md. Use the saved sources; fetch only what is missing, and
prefer primary sources to Wikipedia.

1. deck.json: create it if missing, following decks/kanban-guide/deck.json (id
   given in your assignment, status "draft", notice and licence from the brief's
   naming section). assumedTerms: only words an adult newcomer to the subject
   genuinely knows (e.g. "computer", "file", "internet"). Anything technical gets a
   primer instead.
2. concepts/<family>.json: merge every research/deck-briefs/<slug>-concepts-*.json,
   de-duplicated.
3. Terms: run `node build/check.mjs`. For each undefined-term error, either fix the
   spelling in `uses` to match the primer that introduces it, or add a primer
   (sourced, with example) in the topic where the term is first needed, before its
   first use. Keep one primer per term: where two writers both introduced a term,
   keep the earlier one and turn the later one into a fact card or delete it (only
   if nothing depends on it), updating `uses` elsewhere.
3b. Abbreviations: the checker's `abbreviation` rule flags every all-capitals
   token in a card's text that is not taught, used, assumed or glossed. For a term
   the exam tests (a code, a unit, a named thing a learner must know), add or
   reuse a primer before first use. For citation shorthand and incidental
   abbreviations (document names like CFR or AIM, PDF, US), add an entry to
   deck.json "glossary": {"ABBR": "expansion, as the source writes it"}; the
   glossary is shown on the deck page. Rewording to avoid the abbreviation is
   also fine where it reads better.
4. Deferred cards: add every card the writers reported deferring or cutting for
   teaching-order reasons (listed in your assignment), placed after the topic that
   teaches their prerequisites.
5. Order: unique, increasing; primers of each topic before its other cards.
6. Finish with the checker passing. Do not rewrite cards beyond what these steps
   need. Never run git.

Reply in under 120 words: primers added, duplicates removed, spellings fixed,
cards added, assumedTerms, and anything you could not resolve.

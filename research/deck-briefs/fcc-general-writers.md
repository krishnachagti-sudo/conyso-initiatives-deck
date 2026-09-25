# FCC General: notes for every writer (read after WRITER.md and DIGEST.md)

- Deck slug fcc-general; card ids gen.<topic-slug>.<card-slug>; pool cards use the
  pool ID lowercased as the card slug. ConceptIDs: the brief's (gen.*); reuse the
  Technician deck's tech.* concept IDs where the brief says so.
- Terms: EXACTLY as in research/deck-briefs/fcc-general-terms.json. Topic 0 terms
  are taught by the Technician deck (prerequisiteDecks): use them freely, never
  re-introduce them.
- Pool cards: skeletons in research/deck-briefs/fcc-general-skeleton/topic-NN.json.
  Every question becomes a scenario card: front = question, choices "A) …\nB) …\n
  C) …\nD) …" verbatim, back = the keyed option verbatim (if over 25 words, the
  key part, with the full text still in choices), explanation = WHY, choicesExplained
  = why each other option is wrong. source "NCVEC 2023–2027 General Pool, <ID>";
  sourceURL the pool file in the brief; sourceLicence "A · public domain". All
  core. Every pool card: volatile: true, validAsOf "2026-09-25 · 2023–2027 General
  pool, valid to 2027-06-30".
- Before each topic's pool cards: primers for the registry terms it owns, and fact
  cards for what the questions test.
- Figure G7-1: save a crop from the pool PDF/Word copy (see the brief) to
  decks/fcc-general/media/figure-g7-1.png (credit "NCVEC Question Pool Committee,
  2023–2027 General Pool, figure G7-1", licence "A · public domain"), side front.
- Order ranges: topic N uses N×1000 to N×1000+999.
- Concepts file: research/deck-briefs/fcc-general-concepts-<letter>.json.
- Your check: node build/check.mjs --registry=research/deck-briefs/fcc-general-terms.json
  (plus the concept files merged into concepts/gen.json only by the main session:
  until then, concept errors are expected; every other error in your files is yours).

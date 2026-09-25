# FEMA ICS: notes for every writer (read after WRITER.md and DIGEST.md)

- Deck slug fema-ics. Card ids: fema.<topic-slug>.<card-slug>. ConceptIDs: the
  brief's §4 IDs exactly (fema.ics.*, fema.nims.*, …; hyphens only, never underscores).
- Terms: EXACTLY as in research/deck-briefs/fema-ics-terms.json (NIMS capitalisation).
  Teach an abbreviation in the same primer as its full term. Abbreviations the brief
  lists as assumed (FEMA, DHS, OSHA, …) go to the main session for the glossary: list
  any you use in your final report.
- Sources: cite the exact page (PDF #page=N) or, for IS-100.c/IS-200.c manuals, the
  course ZIP URL plus "Student Manual, Lesson N, Visual N, SM-page", as the brief says.
  Licence "B · public domain (US Government work)". www.fema.gov answers 403 here:
  use the saved copies in the scratch folder, never memory.
- Scenario cards: write new scenarios in the style the brief describes; never copy
  the course activities word for word.
- Figures: the brief's §6 visuals marked usable (never ones with photos, never the
  FEMA/DHS seal). Save crops to decks/fema-ics/media/ with credit "FEMA, <document>,
  <page>" and licence "B · public domain (US Government work)"; draw simple SVGs for
  the brief's drawable diagrams (credit "Drawn for this deck from <source>", licence
  "B · CC BY-SA 4.0").
- Order ranges: topic N uses N×1000 to N×1000+999 (gaps of 5 to 10).
- Concept file: research/deck-briefs/fema-ics-concepts-<letter>.json ([{id, name}]).
- Your check: node build/check.mjs --registry=research/deck-briefs/fema-ics-terms.json
  (concept errors are expected until the main session merges concepts/fema.json;
  every other error in your files is yours). Look only at lines starting "fema-ics".

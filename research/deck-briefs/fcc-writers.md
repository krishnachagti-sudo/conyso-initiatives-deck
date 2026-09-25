# FCC Technician: notes for every writer (read after WRITER.md)

- Deck slug: fcc-technician. Card ids: tech.<topic-slug>.<card-slug>; pool cards
  use the pool ID as the card slug, lowercase (tech.<topic-slug>.t1a01).
- ConceptIDs: use the Concept ID column of the brief (tech.elec.current, ...).
  Terms in `introduces`/`uses`: the brief's Concept column name, lowercased, first
  name only where it lists two (e.g. "current", "voltage", "metric prefixes").
- Your pool questions are pre-parsed in research/deck-briefs/fcc-skeleton/topic-NN.json
  (verbatim from the public-domain pool, errata applied). Turn EVERY one into a
  `scenario` card: front = the question, choices = "A) …\nB) …\nC) …\nD) …" exactly
  as given, back = the correct option's text (shorten to 25 words only by quoting
  the key part), choicesExplained = why each wrong option is wrong, explanation =
  why the right one is right. source = "NCVEC 2026–2030 Technician Pool, <ID>" and,
  where the skeleton gives a Part 97 reference, also cite it in explanation.
  sourceURL = the pool PDF URL in the brief (for rule questions, you may cite the
  eCFR section instead if you verified the wording there). sourceLicence =
  "A · public domain". kind: application (or classification when it asks to
  recognise something). Every pool question is core.
- Before the pool cards of each topic: primers for every new term and fact cards
  for every number/rule the questions test, so the questions are answerable by a
  newcomer who studied the earlier cards. Pool questions follow them.
- Figures: the pool's figures are already in decks/fcc-technician/media/
  (figure-t1.jpg, figure-t2.jpg, figure-t3.jpg; credit "NCVEC Question Pool
  Committee, 2026–2030 Technician Pool, figure T-1" etc.; licence
  "A · public domain"). Every question that refers to a figure gets it with
  side "front". Diagrams listed in the brief's §6 as drawable: draw a simple SVG
  (black on white, labelled), credit "Drawn for this deck from <source>",
  licence "B · CC BY-SA 4.0".
- Order ranges: topic N uses N×1000 to N×1000+999 (gaps of 5 to 10).

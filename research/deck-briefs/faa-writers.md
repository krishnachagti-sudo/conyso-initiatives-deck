# FAA Part 107: notes for every writer (read after WRITER.md)

- Deck slug: faa-part-107. Card ids: uas.<topic-slug>.<card-slug>. ConceptIDs:
  uas.<concept-slug>, from the brief's concept names. Terms in introduces/uses:
  the brief's concept names, lowercased.
- Sources are US Government works: sourceLicence "B · public domain (US Government
  work)". Cite the exact section: 14 CFR 107.xx (eCFR URL), AC 107-2 paragraph,
  ACS element code, PHAK chapter and page. Use the CURRENT rule text (the brief
  flags §107.5 reserved and §107.9 retitled): where an older guide disagrees with
  current eCFR, eCFR wins; mark rule cards volatile with validAsOf "2026-09-25 ·
  14 CFR Part 107 as of that date".
- Where the two official weightings or editions disagree, do not pick one on a
  card; teach only what both agree on, or cite the dated source explicitly.
- Figures: testing-supplement figures (FAA-CT-8080-2H) are in the saved sources.
  Crop exactly the part the card asks about (pdftoppm -r 150, then crop with
  Python PIL; PNG, under 400 KB, legible at phone width), save to
  decks/faa-part-107/media/, credit "FAA, Airman Knowledge Testing Supplement
  FAA-CT-8080-2H, figure N", licence "B · public domain (US Government work)".
  Check the chart area names against the image before writing them on a card.
- Order ranges: topic N uses N×1000 to N×1000+999 (gaps of 5 to 10).
- Concept file: research/deck-briefs/faa-part-107-concepts-<letter>.json.

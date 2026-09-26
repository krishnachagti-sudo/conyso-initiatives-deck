# DOT hazmat: notes for every writer (read after DIGEST.md)

- **Slug:** `dot-hazmat`. **Family prefix:** `hazmat` (card ids `hazmat.<topic-slug>.<card-slug>`, concept ids `hazmat.<concept-slug>`). Use the concept ids in `dot-hazmat-concepts.json`; add new ones only when a card needs them.
- **Builds on:** nothing. Every term gets its primer.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - www.govinfo.gov → tier B (govinfo Public Domain & Copyright Notice: "Title 17, Section 105, United States )
  - www.ecfr.gov → tier B (No licence statement read on ecfr.gov; used only for amendment dates, no text re)
  - www.federalregister.gov → tier B (No licence statement read on federalregister.gov; used only to find rule citatio)
- **Evidence is required.** The texts are in `research/sources/dot-hazmat/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-26 · 49 CFR as amended in 2026"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

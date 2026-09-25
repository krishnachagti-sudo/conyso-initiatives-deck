# EPA 608: notes for every writer (read after DIGEST.md)

- **Slug:** `epa-608`. **Family prefix:** `epa608` (card ids `epa608.<topic-slug>.<card-slug>`, concept ids `epa608.<concept-slug>`). Use the concept ids in `epa-608-concepts.json`; add new ones only when a card needs them.
- **Builds on:** nothing. Every term gets its primer.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - www.epa.gov → tier B (EPA web policy: "These documents may be freely distributed and used for non-comm)
  - espanol.epa.gov → tier B (EPA web policy: "These documents may be freely distributed and used for non-comm)
  - www.ecfr.gov → tier B (GPO: "Copyright protection under this title is not available for any work of the)
  - www.govinfo.gov → tier B (Policy page; quoted only for its copyright statement)
- **Evidence is required.** The texts are in `research/sources/epa-608/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · 40 CFR Part 82 Subpart F as in force"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

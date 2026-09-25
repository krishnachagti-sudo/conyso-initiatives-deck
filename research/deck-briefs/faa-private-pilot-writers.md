# Private Pilot: notes for every writer (read after DIGEST.md)

- **Slug:** `faa-private-pilot`. **Family prefix:** `ppl` (card ids `ppl.<topic-slug>.<card-slug>`, concept ids `ppl.<concept-slug>`). Use the concept ids in `faa-private-pilot-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `faa-part-107`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - www.faa.gov → tier B (US Government work: "Copyright protection under this title is not available for )
  - media.psiexams.com → tier C ("Copyright © 2024 by PSI")
  - aeronav.faa.gov → tier B (US Government work: "Copyright protection under this title is not available for )
  - www.ecfr.gov → tier B (US Government work: "Copyright protection under this title is not available for )
  - uscode.house.gov → tier B (US Government work: "Copyright protection under this title is not available for )
- **Evidence is required.** The texts are in `research/sources/faa-private-pilot/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · FAA-S-ACS-6C and 14 CFR as in force"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

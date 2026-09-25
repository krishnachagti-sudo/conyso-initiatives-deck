# Commercial Pilot: notes for every writer (read after DIGEST.md)

- **Slug:** `faa-commercial`. **Family prefix:** `cpl` (card ids `cpl.<topic-slug>.<card-slug>`, concept ids `cpl.<concept-slug>`). Use the concept ids in `faa-commercial-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `faa-private-pilot`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - www.faa.gov → tier B (US Government work: "Copyright protection under this title is not available for )
  - media.psiexams.com → tier C ("Copyright © 2024 by PSI" (no licence granted: facts only))
  - www.ecfr.gov → tier B (US Government work: "Copyright protection under this title is not available for )
  - uscode.house.gov → tier B (Statute text; itself a US Government work (17 U.S.C. 105(a)))
- **Evidence is required.** The texts are in `research/sources/faa-commercial/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · FAA-S-ACS-7B and 14 CFR as in force"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

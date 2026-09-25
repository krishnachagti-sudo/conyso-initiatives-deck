# FCC Extra: notes for every writer (read after DIGEST.md)

- **Slug:** `fcc-extra`. **Family prefix:** `extra` (card ids `extra.<topic-slug>.<card-slug>`, concept ids `extra.<concept-slug>`). Use the concept ids in `fcc-extra-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `fcc-general`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - www.ncvec.org → tier A (Released with the pool on the release page; the page says: "The NCVEC Question P)
  - www.govinfo.gov → tier B (US Government work: "Copyright protection under this title is not available for )
  - archive.org → tier B ("DISTRIBUTION STATEMENT A: Approved for public release; distribution is unlimite)
  - www.swpc.noaa.gov → tier B (US Government work: "Copyright protection under this title is not available for )
  - www.arrl.org → tier C ("Copyright © 2026 The American Radio Relay League, Inc. All rights reserved. Rep)
- **Evidence is required.** The texts are in `research/sources/fcc-extra/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · 2024–2028 Extra pool, valid to 2028-06-30"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

# VITA: notes for every writer (read after DIGEST.md)

- **Slug:** `irs-vita`. **Family prefix:** `vita` (card ids `vita.<topic-slug>.<card-slug>`, concept ids `vita.<concept-slug>`). Use the concept ids in `irs-vita-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `irs-ea-part1`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - www.irs.gov → tier B ("Content on this website that was created or maintained by federal employees in )
- **Evidence is required.** The texts are in `research/sources/irs-vita/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · filing season 2026 (tax year 2025)"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

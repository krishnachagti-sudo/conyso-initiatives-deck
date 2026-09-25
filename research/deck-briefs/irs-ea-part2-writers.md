# EA Part 2: notes for every writer (read after DIGEST.md)

- **Slug:** `irs-ea-part2`. **Family prefix:** `ea2` (card ids `ea2.<topic-slug>.<card-slug>`, concept ids `ea2.<concept-slug>`). Use the concept ids in `irs-ea-part2-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `irs-ea-part1`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - test-takers.psigov.us → tier C (No licence or copyright statement found in the bulletin text)
  - www.irs.gov → tier B ("Content on this website that was created or maintained by federal employees in )
- **Evidence is required.** The texts are in `research/sources/irs-ea-part2/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · tax year 2025 (exam window to 2027-02-28)"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

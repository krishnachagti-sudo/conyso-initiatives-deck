# GitHub Actions: notes for every writer (read after DIGEST.md)

- **Slug:** `github-actions`. **Family prefix:** `gha` (card ids `gha.<topic-slug>.<card-slug>`, concept ids `gha.<concept-slug>`). Use the concept ids in `github-actions-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `github-foundations`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - learn.microsoft.com → tier C ("© Microsoft 2026" (page footer))
  - github.com → tier B ("This project is dual-licensed under: Creative Commons Attribution 4.0 - for doc)
  - brand.github.com → tier C ("© 2026 GitHub, Inc. All rights reserved." and "No adaptation or use of any kind)
  - docs.github.com → tier B ("Creative Commons Attribution 4.0 - for documentation and content in the assets,)
- **Evidence is required.** The texts are in `research/sources/github-actions/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-26 · GitHub Docs as published"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

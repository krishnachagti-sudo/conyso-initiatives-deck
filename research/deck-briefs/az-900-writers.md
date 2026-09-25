# AZ-900: notes for every writer (read after DIGEST.md)

- **Slug:** `az-900`. **Family prefix:** `az900` (card ids `az900.<topic-slug>.<card-slug>`, concept ids `az900.<concept-slug>`). Use the concept ids in `az-900-concepts.json`; add new ones only when a card needs them.
- **Builds on:** nothing. Every term gets its primer.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - learn.microsoft.com → tier C ("© Microsoft 2026" (page footer))
  - www.microsoft.com → tier C (Microsoft legal page; no open licence)
  - cdn-dynmedia-1.microsoft.com → tier C (Microsoft trademark list; no open licence)
  - github.com → tier B ("Microsoft and any contributors grant you a license to the Microsoft documentati)
- **Evidence is required.** The texts are in `research/sources/az-900/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · Azure documentation as published"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

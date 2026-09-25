# Istio: notes for every writer (read after DIGEST.md)

- **Slug:** `istio-ica`. **Family prefix:** `istio` (card ids `istio.<topic-slug>.<card-slug>`, concept ids `istio.<concept-slug>`). Use the concept ids in `istio-ica-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `kcna`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - github.com → tier B ("The Curriculum is available under the [CC-BY 4.0+ License]" (cncf/curriculum RE)
  - raw.githubusercontent.com → tier B ("The Curriculum is available under the [CC-BY 4.0+ License]")
  - training.linuxfoundation.org → tier C ("© 2026 Linux Foundation - Education. The Linux Foundation®. All rights reserved)
  - docs.linuxfoundation.org → tier C (no licence stated; facts only)
  - www.linuxfoundation.org → tier C (no licence stated; facts only)
  - istio.io → tier B ("Apache License Version 2.0, January 2004" (istio/istio.io LICENSE); site footer)
- **Evidence is required.** The texts are in `research/sources/istio-ica/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · Istio docs 1.31 (exam targets 1.26)"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

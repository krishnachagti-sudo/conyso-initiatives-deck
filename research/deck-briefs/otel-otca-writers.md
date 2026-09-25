# OpenTelemetry: notes for every writer (read after DIGEST.md)

- **Slug:** `otel-otca`. **Family prefix:** `otel` (card ids `otel.<topic-slug>.<card-slug>`, concept ids `otel.<concept-slug>`). Use the concept ids in `otel-otca-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `kcna`, `prometheus-pca`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - github.com → tier B ("The Curriculum is available under the [CC-BY 4.0+ License]" (cncf/curriculum RE)
  - training.linuxfoundation.org → tier C ("© 2026 Linux Foundation - Education. The Linux Foundation®. All rights reserved)
  - docs.linuxfoundation.org → tier C (no licence stated; facts only)
  - www.linuxfoundation.org → tier C ("© 2026 The Linux Foundation®. All rights reserved.")
  - opentelemetry.io → tier B ("Docs CC BY 4.0" (opentelemetry.io footer: "© 2019–present OpenTelemetry Authors)
- **Evidence is required.** The texts are in `research/sources/otel-otca/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · OpenTelemetry docs as of that date"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

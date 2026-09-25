# Argo: notes for every writer (read after DIGEST.md)

- **Slug:** `argo-capa`. **Family prefix:** `argo` (card ids `argo.<topic-slug>.<card-slug>`, concept ids `argo.<concept-slug>`). Use the concept ids in `argo-capa-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `kcna`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - github.com → tier B ("The Curriculum is available under the [CC-BY 4.0+ License]" (cncf/curriculum RE)
  - training.linuxfoundation.org → tier C ("© 2026 Linux Foundation - Education. The Linux Foundation®. All rights reserved)
  - docs.linuxfoundation.org → tier C (no licence stated; facts only)
  - www.linuxfoundation.org → tier C ("The Linux Foundation has the following registered trademarks in the United Stat)
  - argo-workflows.readthedocs.io → tier B ("Apache License Version 2.0, January 2004"; "Copyright 2017-2018 The Argo Author)
  - argo-cd.readthedocs.io → tier B ("Apache License Version 2.0, January 2004"; "Copyright 2017-2018 The Argo Author)
  - argo-rollouts.readthedocs.io → tier B ("Apache License Version 2.0, January 2004"; "Copyright 2017-2018 The Argo Author)
  - argoproj.github.io → tier B ("Apache License Version 2.0, January 2004"; "Copyright 2018 The Argoproj Authors)
- **Evidence is required.** The texts are in `research/sources/argo-capa/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · Argo docs as of that date"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

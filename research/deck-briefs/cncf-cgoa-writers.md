# CGOA: notes for every writer (read after DIGEST.md)

- **Slug:** `cncf-cgoa`. **Family prefix:** `cgoa` (card ids `cgoa.<topic-slug>.<card-slug>`, concept ids `cgoa.<concept-slug>`). Use the concept ids in `cncf-cgoa-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `kcna`, `argo-capa`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - training.linuxfoundation.org → tier C ("© 2026 Linux Foundation - Education. The Linux Foundation®. All rights reserved)
  - docs.linuxfoundation.org → tier C (No licence stated on the page)
  - www.linuxfoundation.org → tier C ("Except as otherwise provided, Content on this site, including all materials pos)
  - github.com → tier B ("The Curriculum is available under the [CC-BY 4.0+ License]" (cncf/curriculum RE)
  - opengitops.dev → tier C ("© 2026 The Linux Foundation. All rights reserved." (site footer))
  - glossary.cncf.io → tier B ("Documentation Distributed under CC BY 4.0" (site footer))
  - kubernetes.io → tier B ("Documentation Distributed under CC BY 4.0" (site footer))
  - fluxcd.io → tier B (Apache License 2.0 (fluxcd/website LICENSE and each controller repo LICENSE: "Ap)
  - argo-cd.readthedocs.io → tier B (Apache License 2.0; argoproj/argo-cd LICENSE: "Copyright 2017-2018 The Argo Auth)
- **Evidence is required.** The texts are in `research/sources/cncf-cgoa/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-26 · project docs as published"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

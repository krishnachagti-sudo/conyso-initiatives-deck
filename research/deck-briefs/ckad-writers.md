# CKAD: notes for every writer (read after DIGEST.md)

- **Slug:** `ckad`. **Family prefix:** `ckad` (card ids `ckad.<topic-slug>.<card-slug>`, concept ids `ckad.<concept-slug>`). Use the concept ids in `ckad-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `kcna`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - github.com → tier B ("The Curriculum is available under the [CC-BY 4.0+ License]" (cncf/curriculum RE)
  - training.linuxfoundation.org → tier C ("© 2026 Linux Foundation - Education. The Linux Foundation®. All rights reserved)
  - docs.linuxfoundation.org → tier C (no licence stated; facts only)
  - www.cncf.io → tier C ("Copyright © 2026 The Linux Foundation®. All rights reserved.")
  - www.linuxfoundation.org → tier C ("Copyright © 2026 The Linux Foundation®. All rights reserved.")
  - docs.docker.com → tier B ("Copyright 2013-2026 Docker, Inc., released under the [Apache 2.0 license]" (doc)
  - kubernetes.io → tier B ("Documentation Distributed under CC BY 4.0" (kubernetes.io footer); kubernetes/w)
  - glossary.cncf.io → tier B (CC BY 4.0 (as recorded in the KCNA manifest; not re-read in this task))
  - helm.sh → tier B ("© Helm Authors 2026. Documentation distributed under CC-BY-4.0." (helm.sh foote)
- **Evidence is required.** The texts are in `research/sources/ckad/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · Kubernetes v1.35 (docs as of that date)"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

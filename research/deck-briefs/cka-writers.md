# CKA: notes for every writer (read after DIGEST.md)

- **Slug:** `cka`. **Family prefix:** `cka` (card ids `cka.<topic-slug>.<card-slug>`, concept ids `cka.<concept-slug>`). Use the concept ids in `cka-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `kcna`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - github.com → tier B ("The Curriculum is available under the [CC-BY 4.0+ License](https://creativecomm)
  - training.linuxfoundation.org → tier C ("© 2026 Linux Foundation - Education. The Linux Foundation®. All rights reserved)
  - docs.linuxfoundation.org → tier C (no licence stated; facts only)
  - www.linuxfoundation.org → tier C ("Copyright © 2026 The Linux Foundation®. All rights reserved.")
  - kubernetes.io → tier B ("Documentation Distributed under CC BY 4.0" (page footer; "© 2026 The Kubernetes)
  - helm.sh → tier B ("© Helm Authors 2026. Documentation distributed under CC-BY-4.0." (page footer))
  - gateway-api.sigs.k8s.io → tier B (Apache License 2.0 (kubernetes-sigs/gateway-api LICENSE, linked as "License" fro)
- **Evidence is required.** The texts are in `research/sources/cka/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · Kubernetes v1.35 (the exam version)"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

# CCA: notes for every writer (read after DIGEST.md)

- **Slug:** `cncf-cca`. **Family prefix:** `cca` (card ids `cca.<topic-slug>.<card-slug>`, concept ids `cca.<concept-slug>`). Use the concept ids in `cncf-cca-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `kcna`, `cka`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - github.com → tier B ("The Curriculum is available under the [CC-BY 4.0+ License]" (cncf/curriculum RE)
  - raw.githubusercontent.com → tier B ("The Curriculum is available under the [CC-BY 4.0+ License]")
  - training.linuxfoundation.org → tier C ("© 2026 Linux Foundation - Education. The Linux Foundation®. All rights reserved)
  - docs.linuxfoundation.org → tier C (No licence statement on the page; LF Terms of Use apply)
  - www.linuxfoundation.org → tier C ("Except as otherwise provided, Content on this site... is licensed under a Creat)
  - ebpf.io → tier B ("The content of the ebpf.io website is licensed under a Creative Commons Attribu)
  - glossary.cncf.io → tier B ("Documentation Distributed under CC BY 4.0")
  - kubernetes.io → tier B ("© 2026 The Kubernetes Authors | Documentation Distributed under CC BY 4.0")
  - docs.cilium.io → tier B ("The Cilium user space components are licensed under the Apache License, Version)
- **Evidence is required.** The texts are in `research/sources/cncf-cca/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-26 · Cilium 1.20 documentation"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

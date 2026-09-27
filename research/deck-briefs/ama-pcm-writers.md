# Marketing management: notes for every writer (read after DIGEST.md)

- **Slug:** `ama-pcm`. **Family prefix:** `pcm` (card ids `pcm.<topic-slug>.<card-slug>`, concept ids `pcm.<concept-slug>`). Use the concept ids in `ama-pcm-concepts.json`; add new ones only when a card needs them.
- **Builds on:** nothing. Every term gets its primer.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - en.wikipedia.org → tier B (B · CC BY-SA 4.0: "Text is available under the Creative Commons Attribution-Shar)
  - www.ftc.gov → tier B (B · public domain: "Most material on the FTC's website is considered work of the)
  - myama.my.site.com → tier C (C · all rights reserved: "This Site, and all materials appearing on it, are prot)
  - www.ama.org → tier C (C · all rights reserved: "This Site, and all materials appearing on it, are prot)
  - foundation.wikimedia.org → tier B (Terms page (read for AI and automated-use clauses; none bars AI use))
- **Evidence is required.** The texts are in `research/sources/ama-pcm/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-27 · sources as published"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.
- **OpenStax is tier D** (its pages bar ingestion into generative AI): never use or recall it.
- **ftc.gov:** label "B · public domain" (src/licences.json requires "public domain" for .gov).
- **ama.org:** tier C, facts only; never quote it. Keep prices off cards. Use the AMA marks only as adjectives and never claim anything official.

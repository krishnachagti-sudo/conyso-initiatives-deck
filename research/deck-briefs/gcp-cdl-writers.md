# Cloud Digital Leader: notes for every writer (read after DIGEST.md)

- **Slug:** `gcp-cdl`. **Family prefix:** `gcdl` (card ids `gcdl.<topic-slug>.<card-slug>`, concept ids `gcdl.<concept-slug>`). Use the concept ids in `gcp-cdl-concepts.json`; add new ones only when a card needs them.
- **Builds on:** nothing. Every term gets its primer.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - services.google.com → tier C (No licence or copyright notice in the extracted text; all rights reserved by def)
  - cloud.google.com → tier C (No Creative Commons notice; footer links "Site terms" (Google Terms of Service))
  - support.google.com → tier C ("©2026 Google" (page footer); no open licence)
  - developers.google.com → tier B ("Except as otherwise noted, the content of this page is licensed under the Creat)
  - policies.google.com → tier C (Terms of service; no open licence)
  - partnermarketinghub.withgoogle.com → tier C (No open licence)
  - docs.cloud.google.com → tier B ("Except as otherwise noted, the content of this page is licensed under the Creat)
- **Evidence is required.** The texts are in `research/sources/gcp-cdl/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-26 · Google Cloud documentation as published"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

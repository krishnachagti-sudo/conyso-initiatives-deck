# Professional Cloud Architect: notes for every writer (read after DIGEST.md)

- **Slug:** `gcp-pca`. **Family prefix:** `gpca` (card ids `gpca.<topic-slug>.<card-slug>`, concept ids `gpca.<concept-slug>`). Use the concept ids in `gcp-pca-concepts.json`; add new ones only when a card needs them.
- **Builds on:** nothing. Every term gets its primer.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - services.google.com → tier C (No copyright or licence statement in the PDF text; no Creative Commons notice)
  - cloud.google.com → tier C (No Creative Commons notice on the page (0 matches))
  - developers.google.com → tier B ("Except as otherwise noted, the content of this page is licensed under the Creat)
  - policies.google.com → tier C (Terms of service; no open licence)
  - partnermarketinghub.withgoogle.com → tier C (No open licence found; used for naming rules only)
  - about.google → tier C (No open licence found; used for naming rules only)
  - docs.cloud.google.com → tier B ("Except as otherwise noted, the content of this page is licensed under the Creat)
- **Evidence is required.** The texts are in `research/sources/gcp-pca/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-26 · Google Cloud documentation as published"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

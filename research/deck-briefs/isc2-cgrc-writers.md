# ISC2 CGRC: notes for every writer (read after DIGEST.md)

- **Slug:** `isc2-cgrc`. **Family prefix:** `cgrc` (card ids `cgrc.<topic-slug>.<card-slug>`, concept ids `cgrc.<concept-slug>`). Use the concept ids in `isc2-cgrc-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `isc2-cc`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - edge.sitecorecloud.io → tier C ("All contents of this site constitute the property of ISC2, Inc. and may not be )
  - www.isc2.org → tier C ("All contents of this site constitute the property of ISC2, Inc. and may not be )
  - www.nist.gov → tier B ("Works authored by NIST employees are not subject to Copyright protection within)
  - nvlpubs.nist.gov → tier B ("Works authored by NIST employees are not subject to Copyright protection within)
  - csrc.nist.gov → tier B ("Works authored by NIST employees are not subject to Copyright protection within)
  - www.govinfo.gov → tier B (No licence statement read on the page; a US federal statute, regulation or agenc)
  - www.ecfr.gov → tier B (No licence statement read on the page; a US federal statute, regulation or agenc)
  - publications.europa.eu → tier B (No licence read for this text (EUR-Lex legal notice returned an AWS WAF challeng)
  - www.fedramp.gov → tier B ("The FedRAMP name and the FedRAMP logo are the property of the General Services )
- **Evidence is required.** The texts are in `research/sources/isc2-cgrc/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-26 · CGRC outline as published"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

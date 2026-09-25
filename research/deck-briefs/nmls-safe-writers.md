# SAFE MLO: notes for every writer (read after DIGEST.md)

- **Slug:** `nmls-safe`. **Family prefix:** `safe` (card ids `safe.<topic-slug>.<card-slug>`, concept ids `safe.<concept-slug>`). Use the concept ids in `nmls-safe-concepts.json`; add new ones only when a card needs them.
- **Builds on:** nothing. Every term gets its primer.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - mortgage.nationwidelicensingsystem.org → tier C ("All materials contained on this website are copyrighted except where explicitly)
  - uscode.house.gov → tier B (No licence statement found on the page; the text is a US federal statute. See Go)
  - www.consumerfinance.gov → tier B ("Information created by the CFPB is in the public domain and you may reproduce, )
  - www.govinfo.gov → tier B ("Copyright protection under this title is not available for any work of the Unit)
  - files.consumerfinance.gov → tier B ("Information created by the CFPB is in the public domain and you may reproduce, )
  - www.hud.gov → tier B (No licence statement found on the page; US federal agency page (page served almo)
  - www.benefits.va.gov → tier B (No licence statement found on the page; US federal agency page)
  - www.fincen.gov → tier B (No licence statement found on the page; US federal agency page)
  - www.irs.gov → tier B (Not re-read in this task; CONTENT-POLICY.md lists IRS publications as tier B)
  - www.fanniemae.com → tier C (Not read: the site refused the fetch (HTTP 403))
- **Evidence is required.** The texts are in `research/sources/nmls-safe/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · rules and limits in force"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

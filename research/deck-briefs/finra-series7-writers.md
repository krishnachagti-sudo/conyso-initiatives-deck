# Series 7: notes for every writer (read after DIGEST.md)

- **Slug:** `finra-series7`. **Family prefix:** `s7` (card ids `s7.<topic-slug>.<card-slug>`, concept ids `s7.<concept-slug>`). Use the concept ids in `finra-series7-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `finra-sie`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - www.finra.org → tier C ("the content and material provided through the FINRA Website shall be used ONLY )
  - www.govinfo.gov → tier B ("Copyright protection under this title is not available for any work of the Unit)
  - www.irs.gov → tier B ("Content on this website that was created or maintained by federal employees in )
  - www.msrb.org → tier C (No licence statement fetched: msrb.org/terms-use returned 404)
  - www.treasurydirect.gov → tier B ("Copyright protection under this title is not available for any work of the Unit)
  - uscode.house.gov → tier B ("Copyright protection under this title is not available for any work of the Unit)
- **Evidence is required.** The texts are in `research/sources/finra-series7/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · rules in force"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.
- **Never cite msrb.org.** MSRB's terms forbid derivative works (tier D); the checker refuses any card citing it. For a municipal-securities rule, cite the SEC or Federal Register text, or leave the concept out and report it.
- **Never read or cite finra.org.** FINRA's Terms of Use bar using its site with AI programs (tier D). FINRA rule facts need the SEC or Federal Register text; otherwise leave the concept out and report it.
- **Settlement is T+1** (SEC Rule 15c6-1 as amended); investor.gov pages that still say T+2 are out of date.

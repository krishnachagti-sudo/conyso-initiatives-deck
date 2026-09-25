# SIE: notes for every writer (read after DIGEST.md)

- **Slug:** `finra-sie`. **Family prefix:** `sie` (card ids `sie.<topic-slug>.<card-slug>`, concept ids `sie.<concept-slug>`). Use the concept ids in `finra-sie-concepts.json`; add new ones only when a card needs them.
- **Builds on:** nothing. Every term gets its primer.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - www.finra.org → tier C ("© 2026 FINRA. All Rights Reserved." Terms of Use: works "may not be copied, rep)
  - www.msrb.org → tier D (MSRB Terms of Use (last updated January 2, 2026): users may not "copy, reproduce)
  - www.ecfr.gov → tier B (17 U.S.C. 105: "Copyright protection under this title is not available for any w)
  - uscode.house.gov → tier B (17 U.S.C. 105: "Copyright protection under this title is not available for any w)
  - www.investor.gov → tier B ("An official website of the United States government"; "Paid for by the U.S. Sec)
  - www.irs.gov → tier B (17 U.S.C. 105: "Copyright protection under this title is not available for any w)
  - www.federalreserve.gov → tier B ("Unless otherwise indicated, information on Board's website is in the public dom)
  - www.bea.gov → tier B (17 U.S.C. 105: "Copyright protection under this title is not available for any w)
- **Evidence is required.** The texts are in `research/sources/finra-sie/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · rules in force"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.
- **Never cite msrb.org.** MSRB's terms forbid derivative works (tier D); the checker refuses any card citing it. For a municipal-securities rule, cite the SEC or Federal Register text, or leave the concept out and report it.
- **Never read or cite finra.org.** FINRA's Terms of Use bar using its site with AI programs (tier D). FINRA rule facts need the SEC or Federal Register text; otherwise leave the concept out and report it.
- **Settlement is T+1** (SEC Rule 15c6-1 as amended); investor.gov pages that still say T+2 are out of date.

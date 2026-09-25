# Enrolled Agent Part 1: notes for every writer (read after DIGEST.md)

- **Slug:** `irs-ea-part1`. **Family prefix:** `ea`. Example card id:
  `ea.filing-status.qss-two-years`; example concept id: `ea.qualifying-surviving-spouse`.
  Use the concept ids in `irs-ea-part1-concepts.json`; add new ones only if a
  card needs them.
- **Builds on:** nothing. Every term gets its primer.
- **Sources and their licence labels:** irs.gov publications, instructions and
  pages → `"B · public domain (US Government work)"`; the PSI Candidate
  Information Bulletin → `"C · facts only, in our own words"`.
- **Evidence is required** (deck.json `"evidence": true`). Every card citing
  an IRS source carries `evidence`: 4 to 60 words copied exactly from that
  source, on the cited `#page=N`. The texts are in
  `research/sources/irs-ea-part1/` (see manifest.json). Find the page with
  `grep -n` in the text; pages are separated by form feeds, so the page
  number is the count of form feeds before the line, plus one. If your source
  is not there, run `node build/cache-sources.mjs --only=irs-ea-part1`.
- **Tax year:** the exam tests tax year 2025 law (window 1 July 2026 – 28
  February 2027). Cite the 2025 edition of every publication; the sources
  file names each. Never use a 2026 figure.
- **Volatile facts:** every dollar amount, percentage threshold and date is
  `volatile: true`, `validAsOf: "2026-09-25 · tax year 2025 (exam window to
  2027-02-28)"`.
- **Pool:** none.
- **Figures:** none needed. A table on a card is written out as text.
- **Scenarios:** your own taxpayers and numbers. Never reuse a publication's
  worked example, e.g. its named taxpayers. The arithmetic in a scenario
  must be shown step by step in the explanation.
- **Plain language:** the audience includes career changers. Explain the tax
  term in the primer before any card uses it, and name the form (Form 1040,
  Schedule A…) the rule lives on.
- **Deck notice:** already in deck.json.

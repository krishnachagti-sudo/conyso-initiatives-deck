# Lessons from batches 2 and 3

Batches 2 and 3 took the Primer from 24 decks to 38 (CISSP, CCSP, SC-900,
DP-900, AZ-900, AZ-104, FAA Commercial and Instrument, FCC Extra and others),
with up to 20 writer and audit agents running at once. Costs are in
`research/ledger.csv`.

## Mistakes

**A tool we wrote ourselves broke 500 cards.** The checker found that in 14
decks more than half the scenario answers sat on one letter, so
`build/spread-answers.mjs` moved each right answer to a letter chosen from the
card's id and swapped the letters in its explanations to match. The swap only
recognised a letter followed by punctuation ("B:", "C,"), and most writers
explain options as "B is wrong because…". So 377 explanations in 11 shipped
decks, and about 190 more in SC-900 and DP-900 before they shipped, called the
right answer wrong and left a wrong option unexplained. The old test also
changed "U.S.C." to "U.S.B." and "Form 1095-A" to "1095-B". The SC-900 and DP-900
auditors caught it in their first run. The shipped cards were redone from
the text before the spread (git history kept it); the swap now also covers
a letter used as the subject of a sentence and leaves names alone; and the
checker's `answer-letters` rule stops a deck with the fault from shipping.
The lesson: a tool that rewrites hundreds of cards needs a checker rule
for the damage it could do, written before it runs, not after an audit.

**FINRA's terms bar AI use.** We found this mid-run: FINRA's terms of use
forbid using its content with AI tools. The SIE writers were redirected,
saved copies of FINRA pages were deleted, and finra.org, msrb.org and
nasaa.org are now tier D in `src/licences.json` and on the no-fetch list
(`src/no-fetch.json`), which `sources.mjs` and `cache-sources.mjs` obey.
The Series 7, 63, 65 and 66 decks are parked. The IAPP's Conditions of Use
(§4.2) say the same; the AIGP researcher read them first and stopped. iapp.org
is tier D too, and CIPP/US, whose topic plan came from the IAPP body of
knowledge, is held for a decision. The lesson: read a site's terms
before research starts, not when its pages are already cached. BRIEF.md now
says so, and the rule paid off at once: researchers stopped at the terms page
for CompTIA (Security+), the AICPA and NASBA (the CPA exam) and aws.amazon.com,
before reading any exam content. AWS's own terms license docs.aws.amazon.com
under CC BY-SA 4.0, so an AWS deck can rest on the docs alone.

**Two usage-limit stops killed every agent at once.** Topic files saved as
each topic was finished survived both. A file half-written when the limit
hit was never on disk, because writers build a topic in the scratchpad and
write it in one go. Relaunching only the missing topics cost little.

## What changed in the process

- Research adds 10% to each topic's budget; writers covering every concept
  landed 8–15% above bare counts.
- The checker's answer-position rule: a deck with 20 or more of its own
  scenario cards fails when more than half share one answer letter.
- `prerequisiteTerms` follows prerequisites of prerequisites (FCC Extra →
  General → Technician).
- Pool decks (FCC) are exempt from the abbreviation rule for the pool's own
  verbatim text.
- Auditors may run the repository's `build/` tools but never another agent's
  scratch scripts; writers name helpers `<slug>-t<topics>-…`.

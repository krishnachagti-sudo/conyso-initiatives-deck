# Audit brief (given to every audit agent)

You audit every card of ONE deck. You do not edit files; you report. Work from
the sources already saved in the deck's scratch folder (named in your
assignment); fetch only what is missing. Keep context small: grep the saved text.

## Privacy (absolute)
Never put any email address, name or other personal detail in a request: not in a
User-Agent, header, query string or body. If a site asks for contact details in the
User-Agent, use a generic one such as "Mozilla/5.0 (compatible; research)" or skip
that site.

## Pass 1: correct and sourced
For every card:
- Every claim in front, back, explanation, example, contrast, choices and
  choicesExplained is supported by its cited source. Paraphrase is fine; changed
  meaning, overstatement ("only", "always", "must" not in the source), wrong
  numbers or units, and inference presented as the source's statement are not.
- The cited section actually holds the support.
- Quoted words match the source verbatim.
- Exactly one defensible answer; wrong options are really wrong and explained.
- Figures show what the card says, with a correct credit and licence.

## Pass 2: easy to understand
Read each card as a newcomer who has studied only the cards before it. Flag:
- a word, abbreviation or symbol not taught by an earlier card or explained on
  the card;
- a sentence a newcomer would have to read twice (long, nested, passive where
  active is plainer, double negatives, stacked nouns);
- a front that could be read two ways, or whose answer does not match what it
  asked;
- a back that states the answer less plainly than it could, or buries it;
- an explanation that restates the answer instead of saying why;
- an example that is abstract when a concrete one would do;
- jargon where an everyday word says the same thing (keep the exam's own term,
  but explain it).
Suggest the plainer wording in each case.

## Report
Write the full report to research/deck-briefs/<slug>-audit.md: one line per
problem card, as `id | pass 1 or 2 | severity (wrong / unsupported / ambiguous /
unclear / minor) | the problem | the source text or the plainer wording`.
Your reply, at most 120 words: cards checked, counts by severity, and the three
most serious problems.

# Audit brief (given to every audit agent)

You check the cards of ONE deck (or the topics named in your assignment) for
truth and clarity. You do not edit cards: you write a report and a patch
file, and a script applies the patches. Work from the saved text in
`research/sources/<slug>/` (see its manifest.json); fetch only what is
missing, never mirroring a site. Grep; don't read whole documents.

**Privacy.** No email, name or personal detail in any request. Use a generic
User-Agent.

**Policy.** For what a source may be used for, cite CONTENT-POLICY.md §3 (tiers
A, B, C) and do not paraphrase it. Tier C is allowed for facts in our own words.

## Out of scope: the checker catches these
Do not report:
- undefined terms and abbreviations;
- back length and list length;
- explanations that restate the answer;
- shared fronts, and "name two" answered with one;
- Wikipedia-only sources;
- licence labels that don't match the source host;
- `#page=` values that are not numbers or fall outside the PDF;
- pool questions, choices, keys, ids and source lines (all checked word for
  word against the skeleton);
- missing fields.

For pool cards, check only the explanation and choicesExplained.

## Pass 1: true and sourced
Where a card has `evidence`, the checker has already confirmed those words
are in the source, on the cited page. Your job is to check that the evidence
actually supports the back and the explanation. Anything the card claims
beyond the evidence needs another passage from the source, or it is a
finding.
- Every claim is supported by the cited page or section. Paraphrase is fine.
  These are not: changed meaning; overstatement ("only", "always", "must" not
  in the source); wrong numbers or units; inference presented as the
  source's own statement.
- The cited page actually holds the support. For a PDF, check that `#page=N`
  is the page where it appears.
- Quoted words match the source verbatim.
- Exactly one defensible answer, and every wrong option is really wrong.
- Scenarios are original, not a course activity reworded.
- Figures show what the card says, with the right credit and licence.

## Pass 2: easy to understand
Read each card as a newcomer who has studied only the cards before it. Flag
a sentence they would read twice, a front open to two readings, a buried
answer, an abstract example where a concrete one would do, and jargon where
an everyday word would do (keep the exam's own term, but explain it).

## Output
1. **`research/deck-briefs/<slug>-audit[-<part>].md`**: one line per finding,
   as `id | severity | problem | evidence (source words, with page)`.
   Severity is one of wrong, unsupported, ambiguous, unclear or minor.
2. **`research/deck-briefs/<slug>-fixes[-<part>].jsonl`**: for every finding
   whose fix you know, one JSON line:
   `{"id", "field", "value", "severity", "reason"}`, with the complete new
   value of the field. `"value": null` removes a field; `{"id", "op":
   "delete"}` removes a card. Write the fix itself, in plain British English,
   checked against the source.
   - A finding that needs more research gets `"needs": "research"` and no
     value.
   - A **minor** finding with no patch is logged and skipped, so patch it or
     leave it.
   - **A patch must pass the checker:** a front is a question ending in "?"
     ("Name two…" becomes "What are two…?"), a back has 25 words or fewer, an
     explanation says why, and code goes in backticks. Before you reply, run
     `node build/apply-fixes.mjs <slug> <your fixes file> --dry`. It patches a
     copy and names every patched card that breaks a rule; fix those lines.

## Your reply
At most five lines:
1. cards checked;
2. counts by severity;
3. patches written, and findings that need research;
4. the three most serious problems.

# Wave 2: what went wrong, and what changed

Wave 2 built four decks, 3,818 cards in all: US civics 593, FEMA ICS 1,075,
KCSA 1,096 and FCC General 1,054. It ran the leaner wave 1 pipeline. Research
ran on the strong model, with a term registry and a card budget. Writers ran
on the smaller model with the one-page digest. Audits ran on the strong model,
and fixers on the smaller one. Every deck passed the checker, the build and
preflight before it was pushed.

## What it cost

Agent tokens, counted from each agent's own report. The FCC General, civics
and KCSA research ran before the API limit hit and is not in these figures.

| Stage | Model | Tokens | Per card |
|---|---|---|---|
| Writing (18 writers) | smaller | 5.06M | 1,324 |
| Merge fixes (abbreviations, order, fronts) | smaller | 0.76M | 199 |
| Figures (FEMA ICS) | smaller | 0.18M | 47 |
| Audits (8 auditors) | strong | 2.40M | 629 |
| Audit fixes (8 fixers) | smaller | 2.88M | 755 |
| Research (FEMA ICS only) | strong | 0.30M | 79 |
| **Total** | | **11.58M** | **3,033** |

Per card, that is no cheaper than wave 1 (about 2,700). But about three
quarters of it now runs on the smaller model, which costs a fraction as much
per token. The honest reading: writing got cheap, and checking did not.
Auditing and fixing take 46% of the tokens, and fixers spend more than the
auditors who found the problems.

## Mistakes

1. **The weekly API limit stopped every agent mid-file.** Partial files
   survived, and resumed writers finished them. But the agents had no
   warning, and one file was left empty, which crashed the checker for the
   whole deck.
   *Fix:* writers save each topic file as soon as it is whole. A resumed
   writer is told which files exist and to finish them, not redo them.
2. **Concept-ID conventions were implied, not stated.** Civics writers used
   underscores, which the ID pattern rejects. KCSA writers put new concepts
   under the prerequisite deck's `k8s.*` prefix.
   *Fix:* the writer notes for FEMA ICS state the prefix and "hyphens only".
   Every deck's writer notes should do the same. The checker now also
   accepts concepts from `prerequisiteDecks`, so reusing a KCNA concept is
   legitimate.
3. **One writer cut 45% of its budget.** It was sent back, and all KCSA
   topics then landed at 85–94% of target.
   *Fix:* writers report counts against the budget per topic. The main
   session checks those counts before merging, and sends a short writer
   back to the same agent, whose context is still loaded.
4. **Abbreviations were recorded in three different ways:** "Term (ABBR)"
   as one entry, the abbreviation in the text only, or both as separate
   entries. The checker read only the last way correctly.
   *Fix:* a primer lists the term and its abbreviation as two
   `introduces` entries. The checker now counts a term plus its own
   abbreviation as one idea. Merge scripts attach registry abbreviations
   to their primers automatically.
5. **Set cards shared one front.** About 70 FEMA ICS cards asked "Name
   one of the four…", so every member of the set was a correct answer to
   every card.
   *Fix:* a checker rule. Two cards with the same front and different
   answers fail, unless choices or a figure set them apart. It also caught
   one pair each in two decks that had already been pushed.
6. **Pool cards drifted from the house format.** One writer put the option
   letter in the answer and used different IDs and dashes. Two pool cards
   lost their keyed option.
   *Fix, still to do:* check pool cards against the skeleton mechanically:
   verbatim question and choices, key among the choices, and the house ID
   and source format. It is pure data, and an auditor should not be
   spending judgement on it.
7. **My audit prompt was stricter than the policy.** I told the KCSA
   auditors that only tier A or B sources were allowed. CONTENT-POLICY
   allows tier C (facts in our own words, linked, never copied).
   *Fix:* audit prompts quote the policy; they do not paraphrase it.
8. **Figures were skipped when they were optional.** The FEMA ICS writers
   added none. A dedicated figure pass drew 12, but four needed fixing
   when I looked at them: the Planning P had its steps out of order, and
   the organisation chart implied a false hierarchy.
   *Fix:* a figure pass per deck. The main session renders every figure
   and checks it against the source before commit.
9. **Writers ran the link check across the whole repository,** which timed
   out every time.
   *Fix:* `build/sources.mjs --only=<slug>`, now in the digest.
10. **Merge scripts in shell one-liners broke on quoting** (an apostrophe
    in card text).
    *Fix:* merge and fix scripts are written to a file and then run.

## What went right

- The term registry and `--registry` checks worked. The cross-topic
  reconciliation passes that wave 1 needed were not needed. At merge,
  undefined-term errors were in single figures per deck.
- No wrong fact survived: 90 wrong answers or statements were found in
  audit and fixed. They included a wrong key in a copied scenario, an
  inverted anonymous-access rule, several arithmetic errors, and a card
  counting one overwhelmed state as a national catastrophe.
- Pool coverage was verified mechanically, against the skeleton, for all
  423 FCC General questions.

## Next

The biggest saving is to move more of the audit's findings into the
checker. Candidates:
- the pool validator (mistake 6);
- a licence label that matches the source's domain;
- `#page=` links that stay within the PDF's page count;
- a "name N" card that gives N answers.

Each of these was found by hand at least once in wave 2.

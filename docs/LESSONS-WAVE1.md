# Wave 1: what went wrong, and what changed

Wave 1 built four decks (3,844 cards) with 38 agents and about 10.5 million
agent tokens: roughly 2,700 tokens a card, over several hours. The cards came
out right (no wrong facts survived the audits), but a third of the cost was
rework. This is the record of why, and the fix for each.

## Mistakes

1. **No shared term list.** Parallel writers on one deck named the same term
   differently and each wrote its own primer for shared terms, so every deck
   needed a reconciliation pass (about 0.7M tokens).
   *Fix:* the research agent writes a term registry (`<slug>-terms.json`): each
   term's exact spelling, abbreviation, owning topic and source. Writers use it,
   and the checker's `--registry` flag treats earlier topics' registry terms as
   taught, so a writer's own check is meaningful while other topics are unwritten.
2. **Rules added after writing.** The abbreviation rule arrived after the decks
   existed and forced about 650 retroactive fixes.
   *Fix:* every mechanical rule lives in the checker before writing starts, and
   writers run it on their own files.
3. **The audit caught what a machine could.** About 260 explanations only
   restated the answer, 31 cards rested on Wikipedia, and several links were dead.
   *Fix:* checker rules for restating explanations and Wikipedia-only sources;
   writers run `build/sources.mjs` on their links. The audit is left with
   judgement: is it true, is it clear.
4. **Everyone read everything.** 38 agents each read the full card standard,
   content policy and brief.
   *Fix:* a one-page writer digest (DIGEST.md) replaces the full documents for
   writers and fixers.
5. **No card budget.** Topics ran to 100+ cards, some out of the exam's scope.
   *Fix:* the research brief sets a card budget per topic from the outline and
   its weights; writers stay within 15% and mark anything beyond scope "extra".
6. **The same top model for every job.** Applying audit fixes and drafting from a
   finished brief do not need the strongest model.
   *Fix:* research and the accuracy audit keep the strongest model; writers and
   fixers use a cheaper one.
7. **Order ranges too tight.** A writer cut seven cards to fit 100 order slots.
   *Fix:* ranges of 1,000 per topic.
8. **Privacy.** Two agents put personal details in request headers before the
   rule existed.
   *Fix:* an explicit privacy rule in every brief (done during wave 1).
9. **Wikipedia as a source.** The protocol treats it as a finding aid; writers
   used it for definitions when primary sources were not saved.
   *Fix:* research agents save the primary definitional sources (e.g. 47 CFR,
   government handbooks) up front; the checker flags Wikipedia-only cards.

## What worked, keep it
- Script-built skeletons for public-domain question pools (the FCC pool): writers
  added teaching, not typing.
- Saving sources to disk once and grepping them.
- Two-pass audits; splitting large decks across auditors.
- Short agent replies, full detail in files.

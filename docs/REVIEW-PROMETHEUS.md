# Review: the Prometheus deck, the first built with pipeline v3

25 September 2026. 468 cards, six topics, four diagrams. 1.58M agent tokens:
3,378 a card. Wave 2 averaged 3,033 and the target is 1,800, so v3 did not
save tokens on this deck yet. Some stages worked and some did not. This note
records which, and what changes before the next deck.

## Tokens per card, by stage

| Stage | This deck | Wave 2 | Target | Verdict |
|---|---|---|---|---|
| Research | 322 | about 280 | 140 | Halved per deck (151k against FEMA ICS's 302k); the cost per card is high only because the deck is small |
| Writing (including the pilot) | 1,955 | 1,324 | 900 | **Worse.** See below |
| Merge clean-up | 0 | 199 | 20 | **Worked:** stating the formats exactly left nothing to repair |
| Audit (including the pilot audit) | 945 | 629 | 450 | Worse, partly because the pilot audit covered only 68 cards |
| Fixing | 0 | 755 | 250 | **Worked:** every finding came with a patch that a script applied |
| Verifying fixes | 156 | 0 | 40 | New: all 13 wrong cards confirmed right |

## Why writing cost more

The writer transcripts show how the tokens were spent. The topics 4–6
writer:
- made about 120 tool calls;
- read about 400,000 characters of whole documentation pages;
- ran the checks about 45 times;
- built its files through 22 small edits.

Every call re-sends everything read so far, so many small turns over a large
context is what costs. The pilot had the same pattern, on one small topic.
The fix, now the "Working lean" section of DIGEST.md:
- grep for the passage rather than reading the page;
- write each topic in a single write;
- run the checks once per topic.

## What the audits found, and what changed

- **Invented reasons.** Writers still give a reason in explanations that the
  source does not, even after the pilot's habits were added to DIGEST.md.
  This was about half the findings in both audits. The rule works for the
  auditor but has not yet changed what writers do. Next: the writer's own
  last pass rereads every explanation against its source for exactly this.
- **Patches that broke rules.** 4 of 38 in the pilot and 8 of 87 in the
  main audit. The instruction meant to prevent it had never been saved: an
  edit script failed without saying so. Fixed. Auditors can now test a
  patch file with `apply-fixes --dry`, which patches a copy.
- **Figures.** Two of the three drawn diagrams needed changes when I looked
  at them:
  - the alert-state labels were clipped;
  - the Alertmanager chart implied an order of steps the docs never state.

  The official architecture diagram carried third-party logos, so it was
  redrawn without them. Rendering every figure before commit keeps paying
  for itself.
- **Tools.** merge.mjs and the writer's check did not read research's own
  concept list; status.mjs lacked pageBase; the abbreviation check read
  regexes as prose. All fixed.

## Next deck

- Apply the "Working lean" rules, and measure writing again. Target: under
  1,000 tokens a card.
- **Skip the separate pilot audit on a small deck.** Fold the pilot into the
  main audit, and keep only the main session's 15-card read of the pilot.
  The pilot audit's lessons were real, but on a 470-card deck it cost 250
  tokens a card.
- Choose a larger deck, so research and pilot costs spread over more cards.

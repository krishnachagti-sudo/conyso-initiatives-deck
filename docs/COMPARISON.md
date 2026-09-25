# Every run so far: what was best

Agent tokens per card come from research/ledger.csv and the wave 1 lessons.
The audit share is the proportion of cards an independent audit found a
problem with; "wrong" means a wrong answer or statement.

| Run | Writers | Setup | Tokens per card | Cards audited with a finding | Wrong |
|---|---|---|---|---|---|
| Wave 1 (4 decks, 3,844 cards) | strong | writer brief only | about 2,700 | not recorded per card | not recorded |
| Wave 2 (4 decks, 3,818 cards) | smaller | registry, budget, digest | about 3,240 with research | 20–45% (civics 231 of 593) | 90 cards (2.4%) |
| Prometheus (468 cards) | smaller | pipeline v3: pilot, exact formats, patches | 3,378 | 20% main audit, 46% pilot | 13 (2.8%) |
| **Enrolled Agent Part 1 (749 cards)** | **strong** | **v3 + evidence + source passages + ten-call budget** | **about 2,050** | **3% (24 of 749)** | **7 (0.9%)** |

## Enrolled Agent Part 1, by stage

| Stage | Tokens per card | Target |
|---|---|---|
| Research (including the concept split) | 222 | 140 |
| Writing | 1,284 | 900 |
| Merge clean-up | 0 | 20 |
| Audit | 482 | 450 |
| Fixing | 0 (every finding patched by script) | 250 |

## What made the difference

1. **Evidence.** Each card quotes the source words it rests on, and the
   checker finds them on the cited page. Invented reasons, half of all
   findings before, almost disappeared. Audits got cheaper because the
   auditor compares a card with its quote.
2. **The strong model writing.** Fewer tool calls (21–65 a writer, not
   about 120) and far fewer mistakes: 0.9% wrong against 2.4–2.8%.
3. **Source passages in the slice.** Writers start from the passage instead
   of searching, and the passage's page corrects wrong anchors.
4. **Patches instead of fixers.** No fixer agents at all; the auditors'
   patches applied cleanly on the first run.
5. **Exact formats and the merge script.** Merge clean-up went from
   0.76M tokens (wave 2) to nothing.

## What still costs

- **Writing, at 1,284 a card, is the largest stage.** Writers reading
  their three documents and the slice at the start is a fixed cost, so
  larger shares (two or three topics a writer) are cheaper per card.
- **Research on a deck that needed a second pass** (the concept split). The
  brief now asks for one testable thing per concept from the start.

## The pipeline from here

Every stage runs on the strong model, with evidence required in every new
deck. A pilot topic runs only for decks over 800 cards. Writers take two
or three topics each, audits cover up to about 400 cards each, and a
verify pass checks the cards fixed for being wrong. Decks run in parallel
batches.

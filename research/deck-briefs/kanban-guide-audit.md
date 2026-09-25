# Audit: kanban-guide (314 cards)

Audited 25 September 2026 against AUDIT.md. Sources were the saved files in the deck's
scratch folder: kg2025.txt (the ProKanban May 2025 PDF, which the cards cite), kg_v2020.12.txt,
kpg-en.txt (read page by page), kgst.txt, ku_kanban-guide.txt, kanbanguides.txt,
kg_history.txt, pk_kpg.txt, the pk_kanban-playbook_* pages, pk_blog_cfd.txt,
pk_blog_visualizing-flow-metrics---where-to-begin.txt and prokanban.org_the-kanban-guide.txt.
All 8 SVGs were rendered and checked against their cards.

Pass 2 read the cards in `order` (100 to 1112) across all ten files.

## General notes (not counted as card lines)

- **Guide wording differs between the two PDFs.** The cards cite the ProKanban PDF
  (kg2025.txt). Its wording differs from the kanbanguides.org re-typeset (kg_v2025.5.txt) in
  a few places: "helps workflow and often also improves", "small and incremental",
  "The visualization of the DoW is called a Kanban board", "mostly originated", "For these
  mandatory four flow metrics, the terms started and finished refer to how … defined those
  terms". The brief (§2 S1a) says a diff found "no differences in content". That is true of
  meaning but not of wording. Verbatim quotes must follow kg2025.txt. The cards I checked
  already do.
- **182 cards give no page number in `source`** (most of files 06 to 10, e.g. "The Kanban
  Guide (May 2025), “Flow Metrics”"). Their `sourceURL` does carry `#page=`. For consistency
  with files 01 to 05, add "p. N" to `source`.
- **Figures.** All 8 SVGs show what their cards say. Every figure with data says it is
  illustrative ("ILLUSTRATIVE DATA", "Illustrative", or "examples, not rules"). I checked the
  scatterplot values: they give 50th = 6, 70th = 8 and 85th = 11 days, with 3 of 20 dots
  above 11. The one alt-text slip is listed below.
- **No card is outright wrong.** The problems are overstatements ("must" where the Guide
  says "should" or "essential"), explanations the source does not support, citations that
  point at the wrong page or source, and terms a newcomer has not yet been taught.

## Problem cards

id | pass | severity | problem | source text or plainer wording
---|---|---|---|---
definition-of-workflow.sle-example-only | 1 | unsupported | The back says "each system's SLE comes from its own history". That overstates the Guide, which allows a best guess when there is no history. | "The SLE should be based on historical cycle time … If historical cycle time data does not exist, a best guess will do" (p. 5). Back: "No. That figure is only the Guide's example. Each system's SLE should be based on its own past Cycle Times, or a best guess until it has them."
definition-of-workflow.board-transparent | 1 | unsupported | The front asks what "must" be made transparent. The Guide says doing so "is essential" and uses no "must". | "Making at least the minimum elements of DoW transparent on a Kanban board is essential…" (p. 6). Front: "What does the Guide say it is essential to make transparent on a Kanban board?"
managing-active-work.exceptions-in-dow | 1 | unsupported | The front says exceptions "must be recorded". The Guide says "should". | "Any acceptable exceptions to controlling WIP should be made explicit as part of the DoW." (p. 6). Front: "Where should any acceptable exceptions to WIP control be made explicit?"
managing-active-work.scenario-unwritten-exception | 1 | unsupported | The front asks "What does the Guide require?" and the explanation says exceptions "must be explicit". The Guide says "should". | Front: "What does the Guide say the team should do?" Explanation: "The Guide says acceptable exceptions should be made explicit as part of the DoW…"
managing-active-work.scenario-at-control | 1 | minor | The explanation for choice C says exceptions "must be made explicit". The Guide says "should". | "C: the Guide says exceptions should be made explicit as part of the DoW, not improvised."
using-metrics.scenario-multiple-sles | 1 | ambiguous | The back says "fix why features age", but the front never says that features age. The answer draws on the playbook's scenario, which the learner has not seen. | Add to the front: "…Features often take weeks and age past the old SLE." Or drop "fix why features age" from the back and say "Start with one SLE for all work and improve flow first; each separate SLE needs at least 10 to 20 completed items."
definition-of-workflow.sle-forecast-or-target | 1 | minor | `source` also cites the ProKanban /kpg FAQ (tier C), but `sourceLicence` is only "B" and `sourceURL` gives only the Guide. | Give both licences, or move the FAQ point to using-metrics.sle-forecast-not-target, which already cites it.
guide-and-terms.insurance-team | 1 | minor | The back relies on "the Guide names finance", which is in "Why Use Kanban" (p. 4). The card cites only "Conventions Used" (p. 2). | Add "“Why Use Kanban”, p. 4" to `source`.
guide-and-terms.director-reads-reports | 1 | minor | The stakeholder definition is on p. 2 ("Conventions Used"). The card cites only "Definition of Kanban" (p. 4). | Cite both p. 2 and p. 4.
guide-and-terms.stakeholder-vs-member | 1 | minor | This has the same citation gap as the card above: the stakeholder part comes from p. 2. | Cite both p. 2 and p. 4.
definition.what-are-the-practices | 1 | minor | "the Guide says they work in tandem, so each supports the others". The second half is the deck's own inference, but it reads as the Guide's claim. | "The Guide says they work in tandem, meaning together, not as separate options."
flow-and-value.which-strategy | 1 | minor | The explanation for choice C says "the Guide prescribes no fixed plan". The Guide says nothing about plans. | "C: the Guide asks members to keep improving their workflow, including just-in-time changes, not to stick to a fixed plan."
managing-active-work.control-benefits | 1 | minor | The explanation "people spend less effort switching" is not in the Guide. | Either drop it, or cite the playbook ("attention is split … task switching", /why-control-wip). Plainer: "The Guide gives no reason. ProKanban's playbook notes that too many items split people's attention."
managing-active-work.limit-not-every-column | 1 | minor | The support is on PDF p. 52 of the Pocket Guide, not p. 53. | "Don't let anyone tell you that Kanban requires every column on your board to have a WIP limit…" (kpg-en p. 52). Change to #page=52.
managing-active-work.blocked-policy-when-to-mark | 1 | minor | The explanation says the Pocket Guide "lists three such policies". It says "at least three". | "There are at least three levels of blocked that need to be established" (p. 37).
improving-workflow.any-dow-element | 1 | minor | The page is wrong: "Options for Improvement" is on PDF p. 56, not p. 51. | "Any element of your Definition of Workflow (DoW) is a candidate for experimental improvement." (p. 56)
improving-workflow.failed-experiment | 1 | minor | The page is wrong in the same way: p. 56, not p. 51. | "If it makes things worse, go back to what you were doing before." (p. 56)
flow-metrics.what-is-throughput | 1 | minor | The explanation "It shows how consistently work is being completed; the team chooses the unit of time" is not in the Guide, which the card cites. It comes from the playbook (/flow-metrics) and the Pocket Guide (p. 66). | Cite those sources, or explain from the Guide: "Only finished items count, and each counts as one, whatever its size."
history-editions.scenario-immutable | 1 | minor | The explanation for choice A says the 2025 Endnote "keeps only the rule that the minimum must be preserved". It also says other practices can and likely should be added. | "A: the 2025 Endnote says other practices may be added but the minimum must be preserved. It does not call Kanban immutable."
using-metrics.what-is-a-percentile-line | 1 | minor | The example is imprecise. 17 of 20 items finishing in 11 days or less does not make 11 days the 85th percentile unless the 17th-fastest item took 11 days. | "Sort your last 20 Cycle Times. If the 17th-fastest took 11 days, 85% finished in 11 days or less: the 85th percentile is 11 days."
using-metrics.what-is-a-cfd | 1 | minor | The explanation (KGST, Sprint Retrospective, p. 8) and the example (Pocket Guide p. 21, "Cumulative Arrivals/Departures diagram") come from sources the card does not cite. Its only source is the CFD blog. | Add the KGST p. 8 and kpg-en p. 21 citations.
using-metrics.what-is-conservation-of-flow | 1 | minor | "the law's numbers stop matching reality" is not what the Pocket Guide says. | "Every time you violate an assumption of Little's Law your process becomes less predictable" and the data may show "a rosier picture" (pp. 93–94). Explanation: "Break these and the process becomes less predictable, and your data may look better than reality."
using-metrics.ll-abandoned-work | 1 | minor | This has the same unsupported claim: "makes the law's numbers stop matching reality". | "Abandoning work breaks Conservation of Flow and makes the process less predictable."
using-metrics.ll-averages | 1 | minor | "It is only misused when people apply it to single items…" adds "single items" and turns the source's point into an "only" rule. | "It is only bad when people try to apply the law for uses that were never intended." (p. 86). Explanation: "Averages are fine; problems start when people use the law for things it was never meant for, such as forecasts."
using-metrics.ll-growing-board | 1 | minor | The explanation "Growing WIP also usually means the average age of WIP is rising" is the deck's inference, not the source's. | Drop it, or mark it as an inference: "It may also mean assumption 4 is broken; check the average age of WIP."
using-metrics.sle-vs-target | 1 | minor | "Treating the SLE as a target invites gaming" is not in the cited FAQ. | The FAQ says: "Your SLE isn't a target, it's a forecast. It tells you what is true today." Keep the second half and drop "invites gaming".
using-metrics.daily-throughput-zero | 1 | minor | "Leaving out empty days makes Throughput look higher and steadier than it is" is the deck's inference. The playbook only says to include those days. | Mark it as reasoning: "Otherwise the record would skip the days when nothing finished, making Throughput look higher and steadier."
using-metrics.cfd-not-forecasting | 1 | minor | The explanation "Plans based on averages fail, on average" reads as a quotation, but it is not in the saved blog text (the blog's quoted line is missing from the capture). | Either check it against the live blog, or write: "Forecasts built on averages hide the spread of real outcomes."
using-metrics.what-is-a-throughput-run-chart | 1 | minor | The explanation "including periods when nothing finished" comes from the playbook (/flow-metrics), not from the /kpg page the card cites. | Add the playbook question 4.1 citation.
managing-active-work.limit-not-every-column (figure wip-control-options.svg) | 1 | minor | The alt text says "a limit of 3 above Build and above Test". The figure prints "limit 3" below those columns. The same alt text is on classify-control-boards. | Alt: "Board 1 shows a limit of 3 under Build and under Test only."
guide-and-terms.what-is-kanban | 2 | unclear | "Knowledge work" is the Guide's scope, but no card ever explains it. It recurs at o=143, 152, 269 and 924. | Add to the explanation: "Knowledge work is work done mainly by thinking and handling information, such as software, analysis, finance or planning."
definition.what-is-kgst | 2 | minor | "Scrum" is used without explanation, and later cards (o=804, 1068) rely on "sprint" and "Sprint Retrospective". | "…for teams using Kanban alongside Scrum, a popular framework in which teams work in fixed-length cycles called Sprints."
flow-and-value.why-not-maximize | 2 | minor | "pushing one element up can push others down": "element" is vague here. | "…and pushing one of the three qualities (effectiveness, efficiency, predictability) up can push the others down."
theory.what-is-flow-theory | 2 | minor | The five theory names are listed for memorising, but no card says what any of them means, so the five "missing item" cards are rote. | Give a one-line gloss for each, e.g. "systems thinking (looking at the whole system, not parts), lean principles (from Toyota: cutting waste and delay), variation (natural spread in outcomes), quality control (checking output meets a standard)".
definition-of-workflow.what-is-dow-abbr | 2 | minor | The example uses "pulls", which is not taught until o=606. | "Our DoW says an item starts when someone moves it into Build."
definition-of-workflow.what-are-started-finished | 2 | minor | The explanation mentions "the Guide's flow metrics", which are not taught until o=800. | "They mark where the workflow begins and ends. The Guide's measurements, taught later, use these same points."
definition-of-workflow.what-is-cycle-time | 2 | minor | The explanation relies on "four mandatory flow metrics" (o=800) and "SLE" (o=518, the next card), neither of which has been taught yet. | "It is one of the Guide's required measurements. The next card shows how it is used to set a service level expectation (SLE)."
definition-of-workflow.what-is-a-kanban-board | 2 | unclear | The explanation "essential to processing the knowledge that informs how the workflow operates and improves" is heavy, stacked-noun wording that a newcomer has to read twice. | "Showing at least the minimum DoW elements on the board lets everyone see what is happening, so they can run the workflow well and improve it."
definition-of-workflow.board-transparent | 2 | unclear | This explanation has the same stacked phrase: "processing the knowledge that informs optimal workflow operation and continuous improvement". | "The Guide says this is essential: it gives the team the information it needs to run and keep improving the workflow."
definition-of-workflow.sle-visualized | 2 | unclear | "On the DoW." A newcomer has just learned that the DoW is a shared understanding, so "visualized on an understanding" puzzles. | Back: "On the DoW (the Guide's words). In practice, wherever the DoW is shown, such as the Kanban board." Keep the Guide's term, but mark the gloss as the deck's.
definition-of-workflow.policies-cover | 2 | minor | "One set of rules for every state" can be read as a single rule set shared by all states. | "Rules for each state, so nobody has to guess how an item moves on."
definition-of-workflow.working-agreement | 2 | minor | "swarm" is used before it is taught at o=612. | "We all help on anything blocked for a day."
managing-active-work.what-is-active-management | 1 | minor | The back is the deck's own definition ("taking deliberate action … so that they keep flowing"), not the Guide's. The Guide defines this practice by listing its forms. | "Acting on the items already between started and finished, for example by controlling WIP, stopping items ageing unnecessarily and unblocking blocked work."
managing-active-work.what-is-blocked-work | 2 | minor | "internal or external dependency" is jargon. | "…usually because it is waiting on someone or something inside or outside the team."
managing-active-work.what-is-a-wip-limit | 2 | minor | "A number, slots or tokens" leaves a newcomer unsure what slots or tokens are. | "A cap shown on the board, as a number or as a fixed set of places (slots or tokens) that items must occupy, on one column, several grouped columns or the whole board."
managing-active-work.blocked-policy-wip-limits | 2 | unclear | The back is hard to parse: "The policy on blocked items and WIP limits: how long a blocked item counts, stopping the team from pulling other work." | "The 'blocked items and WIP limits' policy. It says how long a blocked item keeps counting towards the WIP limit, and so keeps the team from pulling new work."
managing-active-work.ensemble-ways | 2 | minor | "Completing later-stage tasks earlier" is abstract. | "Doing later steps early, e.g. writing the tests while the item is still being built; splitting the item's tasks among several people; bringing in fresh eyes to get past a sticking point."
flow-metrics.what-is-velocity | 2 | unclear | "Story points" and "sprint" are never explained. | "Story points are a team's own estimate of effort for an item; a sprint is a fixed work period (often two weeks) in Scrum. So velocity is estimated effort finished per period, not a count of items."
flow-metrics.what-is-lead-time | 2 | minor | "commitment point" is not explained. | "…from the moment the team commits to doing the item (its commitment point) to completion."
flow-metrics.classify-count-now | 2 | minor | "standup" is unexplained jargon. | "A daily team check-in starts with…"
history-editions.method-not-guide | 2 | unclear | "classes of service" and "change-management principles" appear here and again at o=1060, but neither is ever explained. | "Classes of service are different handling rules for different kinds of work, such as an urgent lane that jumps the queue (Kanban Method)."
using-metrics.what-is-a-cfd | 2 | minor | The example names "Little" and "his law" before Little's Law is taught at o=1012. | Move the example to what-is-littles-law, or write: "John Little, whose law comes a few cards on, used such a diagram…"
using-metrics.what-is-monte-carlo | 2 | unclear | The card introduces Monte Carlo simulation but never says what it is. | Add a one-line gloss with a source, e.g. "a method that replays random samples of past data, such as daily Throughput, thousands of times to give a range of likely outcomes with probabilities". The saved sources do not define it, so fetch a source first.
using-metrics.cfd-shows | 2 | minor | "Sprint Retrospective" is unexplained. | "…in the Sprint Retrospective (Scrum's end-of-cycle review meeting)."

## Counts

Cards checked: 314. There are 54 problem lines covering 51 cards. Three cards have two
lines each: board-transparent and what-is-a-cfd (one pass-1, one pass-2), and
limit-not-every-column (a citation line and a figure alt-text line).

| Severity | Pass 1 | Pass 2 | Total |
|---|---|---|---|
| wrong | 0 | 0 | 0 |
| unsupported | 4 | 0 | 4 |
| ambiguous | 1 | 0 | 1 |
| unclear | 0 | 8 | 8 |
| minor | 26 | 15 | 41 |

## Three most serious

1. **definition-of-workflow.sle-example-only.** The back says each SLE "comes from its own
   history", which contradicts the Guide's best-guess allowance. The deck teaches that
   allowance itself at o=578.
2. **"Must" where the Guide says "should" or "essential"** (exceptions-in-dow,
   scenario-unwritten-exception, board-transparent). PK I questions often turn on exactly
   this difference.
3. **using-metrics.scenario-multiple-sles.** The back relies on a fact ("features age") that
   the front never gives, so learners cannot reach the answer from the card.

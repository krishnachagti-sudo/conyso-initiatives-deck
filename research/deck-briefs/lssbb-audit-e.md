# lssbb audit, part e: topics 10 (lean and flow), 11 (control), 12 (DFSS)

161 cards checked (77 + 59 + 25). Fixes: `lssbb-fixes-e.jsonl` (the dry run applies 11 fixes and 1 is skipped because it needs research).

Checks that found nothing:
- No card names ASQ, CSSBB or any certifying body.
- No card cites Wikipedia, so none rests on a "citation needed" or "disputed" passage.
- No six-word overlap with the cached isixsigma glossary, and nothing reads as drawn from OpenStax.
- In all 31 scenario cards, the choicesExplained letters match the choices, leaving out the right answer. No letter inside a word, subscript or chart name (A₂, D₄, R chart, c chart) was changed by the re-spread.
- Every formula and constant matches NIST: R chart limits R̄D₄, R̄ and R̄D₃ (pmc321); A₂/D₃/D₄ = 1.880/0/3.267 for n = 2 and 0.577/0/2.115 for n = 5; the I-MR limits x̄ ± 3·MR̄/1.128 (pmc322); the p chart p ± 3√(p(1−p)/n) (pmc332); the c chart c̄ ± 3√c̄ (pmc331); EWMA λ between 0.2 and 0.3 (pmc324); the WECO zone and trend rules; and the false-alarm rates of 371 and 91.75 (pmc32).
- Cards that quote raw LaTeX as evidence (r-chart-limits, constants-n2, imr-d2, p-chart-limits, c-chart-poisson, c-chart-calc, xbar-r-calc, imr-calc, p-chart-calc, weco-scenario) all state the formula readably in the back or front.
- The arithmetic in every calc scenario checks out, and each distractor matches its stated error.
- The lean cards hold up:
  - LeanOhio's seven wastes (TIM WOOD, p. 15) are stated correctly.
  - The major-losses card is right: the EPA TPM text says "five major losses" and the table heading and rows give six ("Six major losses…"; the OEE paragraph also says "six big losses").
  - No card gives a takt-time formula. The takt cards follow EPA JIT/Kanban ("rate at which each product must be completed … time per part"). EPA Cellular Manufacturing gives a conflicting gloss, "Takt time, or the number of units each operation can produce in a given time", but no card uses it.
- LeanOhio and Starter Kit page numbers (#page) are all correct.

| id | severity | problem | evidence (source words, with page) |
|---|---|---|---|
| lssbb.lean-flow.tps-house-pillars | unsupported | The claim "Jidoka is another name for autonomation" is not on the cited Chapter 2 page, which glosses jidoka only as "built in quality". Jidoka is never taught in the deck. | EPA Cellular Manufacturing, Step 2: "modified to stop and signal … using a technique called autonomation (or jidoka)". Primer added via the autonomation card. |
| lssbb.lean-flow.autonomation | unclear | The card should carry the jidoka gloss so that the TPS-house card (later in the order) is not the first place a learner meets the word. | EPA Cellular Manufacturing, Step 2: "also been known as \"automation with a human touch\" and jidoka". |
| lssbb.lean-flow.load-levelling | minor | Heijunka appears in the concept name "Load levelling (heijunka)" but in no card. No cached source uses the word, so a gloss needs research, or the word should be dropped from the concept name (needs research). | EPA JIT/Kanban "Load leveling" has no Japanese term; LeanOhio has no heijunka entry. |
| lssbb.lean-flow.kaizen | ambiguous | The EPA etymology ("take apart" + "make good") is stated as plain fact, but LeanOhio glosses the word differently. | EPA guide ch. 2, "Kaizen Events": "a combination of two Japanese words that mean 'to take apart' and 'to make good'"; LeanOhio p. 7: "Japanese for \"improvement\", or \"change for the better\"". |
| lssbb.lean-flow.five-s-set-in-order | minor | "Typically ends with" overstates the source. | EPA guide ch. 2, "5S": "would result in the organization of tools and materials into labeled and color coded storage locations". |
| lssbb.lean-flow.five-s-standardise | minor | "Fixes how the earlier steps are done" is not in the source. | EPA guide ch. 2, "5S": "Standardize (Make consistent): Standardize cleaning, inspection, and safety practices." |
| lssbb.control.what-is-cusum | unclear | The back doesn't say what is summed (deviations of the sample means from the in-control mean), so the chart cannot be understood from the card. | NIST 6.3.2.3: "S_m = Σ(x̄_i − μ̂_0) … against the sample number m, where μ̂_0 is the estimate of the in-control mean"; "random pattern centered about zero". |
| lssbb.control.c-chart-calc | unclear | The options mix lower/upper order ("25 and 0", "40 and 10" against "20 and 30"), and the note for option B doesn't explain the zero. | NIST 6.3.3.1: "c̄ ± 3√c̄". |
| lssbb.dfss.dmadv-vs-idov | ambiguous | "Neither" reads as though neither is a DFSS roadmap. The DMADV claim is not on the cited DFSS page. | MoreSteam, DMAIC article: "DMADV … sometimes called Design for Six Sigma (DFSS)"; DFSS guide: "DFSS utilizes the IDOV … roadmap". |

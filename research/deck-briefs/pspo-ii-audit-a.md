# pspo-ii audit A: topics 01–03

Scope: decks/pspo-ii/notes/01-po-accountability.json (40 cards), 02-value-decisions.json (56) and 03-kva-measures.json (76), 172 cards in all, none of them pool cards. Each card was checked against its `evidence` first. Claims beyond the evidence were grepped in research/sources/pspo-ii/ (Scrum Guide 2020, EBM Guide 2024, Nexus Guide 2021). All four sources are tier B (CONTENT-POLICY.md §3). For the figure, the EBM PDF was fetched once with a generic User-Agent and page 4 was rendered to look at Figure 1. Nothing was saved to the repository.

Checks that found nothing:
- **Letters.** Every scenario's back letter matches its choice text word for word. Its choicesExplained names every wrong letter exactly once and never names the key.
- **Forbidden content.** No card cites www.scrum.org or states a PSPO II exam fact.
- **"Final say".** The primer pspo2.po-accountability.final-say quotes the phrase correctly and cites the right page. Nexus Guide p. 6, under "The Nexus Integration Team consists of: The Product Owner", reads: "a Product Backlog has a single Product Owner who has the final say on its contents".
- **Figure accuracy.** decks/pspo-ii/media/ebm-experiment-loop.svg matches EBM Figure 1 (p. 4) in content: the Value Delivered and Time axes; the steps from Starting State to Current State; the Immediate Tactical Goal, Intermediate Goal and Strategic Goal star; and the four-part Experiment Loop inset linked to the Immediate Tactical Goal. The Adapt text is paraphrased, and the loop arrows and the fan of dotted paths are simplified. The credit ("adapted from Mike Rother’s Improvement Kata") matches footnote 2. The licence is a problem: see the first finding.

**Repeats of prerequisite facts.** The brief (pspo-ii.md) says "The 126 PSPO I concepts are not repeated here". The 35 deletions below are fact cards that re-teach a scrum-pspo or scrum-guide fact, and scenarios that copy a PSPO I scenario, all with no harder angle. Every affected concept keeps at least one pspo-ii application card. Some concepts are left with scenarios only, which is the brief's own "Scenario-only" pattern for rules taught in the prerequisites. Several concept entries in pspo-ii-concepts.json (for example pspo2.inputs-no-correlation, pspo2.t2m-questions and pspo2.itg-improve-cv-reduce-uv) duplicate PSPO I concepts. The registry should be tidied to match.

## Findings

pspo2.value-decisions.figure-path-to-strategic-goal | unsupported | The image is labelled "B · CC BY-SA 4.0", but the Figure 1 artwork carries its own all-rights-reserved notice. The SVG closely copies the figure's layout and the wording of its quadrants. Needs a person's decision: either confirm that the publication's CC BY-SA grant covers the figure, or redraw it in our own words (tier C) or drop it. | Figure 1 image, p. 4: "© 2024 Scrum.org. All Rights Reserved."; front matter: "This publication is offered for license under the Attribution Share-Alike license"
pspo2.po-accountability.two-product-owners | unsupported | The back says the Product Owner "may delegate work to others", but the cited Nexus p. 6 passage has no word on delegation. The D line also calls the Product Owner a "role". Moved the card to the Scrum Guide's Product Owner section, which supports both points. | Scrum Guide, Product Owner: "may delegate the responsibility to others. Regardless, the Product Owner remains accountable. … The Product Owner is one person, not a committee."
pspo2.po-accountability.urgent-unrelated-request | unsupported | The explanation says "new work waits in the Product Backlog", which is stronger than the Guide. The Guide forbids only changes that endanger the Sprint Goal. | Scrum Guide, The Sprint: "No changes are made that would endanger the Sprint Goal"
pspo2.value-decisions.premium-reports | ambiguous | Choice B ("Build nothing until a survey is complete") is a defensible cheap test, since the Guide says a partial build "may be sufficient", not that it is the only way. Replaced B with an option the Guide clearly rules out. | EBM p. 7: "it may be sufficient for a team to simply build enough of it"; "beliefs in what is valuable are merely assumptions until they are validated by customers"
pspo2.kva-measures.uv-question-invest | ambiguous | The front "Which Unrealized Value question is about money?" also fits "Is it worth the effort and risk…?". | EBM p. 10: "Is it worth the effort and risk to pursue these untapped opportunities? Should further investments be made to capture additional Unrealized Value?"
pspo2.kva-measures.two-hour-install | minor | The A line says the product "was delivered on time", which the scenario never states. | Scenario text
pspo2.value-decisions.skip-inspect | minor | The explanation says the Inspect step "is never skipped", which overstates the Guide. | EBM p. 7: "Did the change you made improve your results based on the measurements you have made? Not all changes do"
pspo2.po-accountability.represents-many-stakeholders | minor | Repeats pspo.po-accountability.represents-many word for word. Delete. | Scrum Guide, Product Owner: "may represent the needs of many stakeholders"
pspo2.po-accountability.who-proposes-who-defines | minor | Repeats pspo.po-accountability.proposes-value and team-defines-sprint-goal. Delete. | Scrum Guide, Sprint Planning
pspo2.po-accountability.developers-decide-how | minor | Repeats scrum.events.who-decides-how. Delete. | Scrum Guide, Sprint Planning: "sole discretion of the Developers"
pspo2.po-accountability.adaptation-empowered | minor | Repeats scrum.team.adaptation-harder. Delete. | Scrum Guide, Adaptation
pspo2.po-accountability.adjust-as-soon-as-possible | minor | Repeats the scrum-guide pillars card "when must the adjustment be made?". Delete. | Scrum Guide, Adaptation
pspo2.po-accountability.courage-tough-problems | minor | Repeats the sentence of the scrum-guide values cloze on courage. Delete. | Scrum Guide, Scrum Values
pspo2.po-accountability.purposefully-incomplete | minor | Repeats scrum.basics.purposefully-incomplete. Not deleted, because it is the only card for its concept. Logged only. | Scrum Guide, Scrum Definition
pspo2.po-accountability.renegotiate-vs-cancel | minor | Contrasts two PSPO I facts. Its concept is marked "Scenario-only … no new fact". Delete. | Scrum Guide, Commitment: Sprint Goal
pspo2.po-accountability.stakeholder-edits-backlog | minor | Near copy of pspo.po-accountability.convince-scenario: a marketing lead with edit rights moves her items to the top. Delete. | Scrum Guide, Product Owner
pspo2.po-accountability.steering-committee | minor | Near copy of pspo.po-accountability.committee-scenario. Delete. | Scrum Guide, Product Owner
pspo2.po-accountability.delegated-items-accountable | minor | Near copy of pspo.po-accountability.delegation-scenario: a business analyst writes most items and some are unclear. Delete. | Scrum Guide, Product Owner
pspo2.po-accountability.goal-dictated | minor | Near copy of pspo.po-accountability.dictated-goal-scenario, down to the key C. Delete. | Scrum Guide, Sprint Planning
pspo2.po-accountability.bigger-than-expected | minor | Same situation and answer as pspo.po-accountability.no-cancel-scenario. Delete. | Scrum Guide, Commitment: Sprint Goal
pspo2.po-accountability.goal-obsolete-acquisition | minor | Same structure and answer as pspo.po-accountability.cancel-scenario. Delete. | Scrum Guide, The Sprint
pspo2.value-decisions.inputs-no-correlation | minor | Repeats pspo.value-ebm.inputs. Delete. | EBM p. 5
pspo2.value-decisions.negative-outcomes | minor | Its back matches pspo.value-ebm.negative-outcome word for word. Delete. | EBM p. 6
pspo2.value-decisions.outcomes-hard-to-measure | minor | Repeats pspo.value-ebm.easy-vs-hard. Delete. | EBM p. 6
pspo2.value-decisions.impacts-without-outcomes | minor | Repeats pspo.value-ebm.impacts-without-outcomes. Delete. | EBM p. 6
pspo2.value-decisions.decide-success-measure | minor | Repeats pspo.value-ebm.loop-hypothesis. Delete. | EBM p. 6
pspo2.value-decisions.feature-is-hypothesis | minor | Repeats pspo.value-ebm.features-hypotheses. Delete. | EBM p. 7
pspo2.value-decisions.build-enough | minor | Repeats pspo.value-ebm.build-enough. Delete. | EBM p. 7
pspo2.value-decisions.missed-goal-not-bad | minor | Repeats pspo.value-ebm.failed-experiment. Delete. | EBM p. 12
pspo2.value-decisions.forty-features | minor | Close to pspo.value-ebm.more-features-scenario, which also has 40 features, but asks a slightly different question. Logged only. | EBM p. 6
pspo2.kva-measures.cv-trend | minor | Repeats pspo.value-ebm.cv-customers, cv-employees and cv-investors. Delete. | EBM p. 9
pspo2.kva-measures.profit-hides-satisfaction | minor | Same point as pspo.value-ebm.cv-scenario. Delete. | EBM p. 9
pspo2.kva-measures.high-profit-few-alternatives | minor | Near copy of pspo.value-ebm.cv-scenario (the island ferry). Delete. | EBM p. 9
pspo2.kva-measures.uv-stagnation | minor | Repeats pspo.value-ebm.kva-stagnation. Delete. | EBM p. 8
pspo2.kva-measures.a2i-question-organisation | minor | Repeats pspo.value-ebm.a2i-questions. Delete. | EBM p. 10
pspo2.kva-measures.a2i-question-customers | minor | Repeats pspo.value-ebm.a2i-questions. Delete. | EBM p. 10
pspo2.kva-measures.t2m-question-learn | minor | Repeats pspo.value-ebm.t2m-questions. Delete. | EBM p. 11
pspo2.kva-measures.t2m-question-adapt | minor | Repeats pspo.value-ebm.t2m-questions. Delete. | EBM p. 11
pspo2.kva-measures.t2m-question-test | minor | Repeats pspo.value-ebm.t2m-questions. Delete. | EBM p. 11
pspo2.kva-measures.low-value-features-accumulate | minor | Repeats pspo.value-ebm.a2i-erosion. Delete. | EBM p. 10
pspo2.kva-measures.t2m-cv-frequency | minor | Repeats pspo.value-ebm.t2m-cv. Delete. | EBM p. 11
pspo2.kva-measures.itg-cv-uv | minor | Repeats pspo.value-ebm.itg-cv-uv word for word. Delete. | EBM p. 11
pspo2.kva-measures.only-a2i-t2m | minor | Repeats pspo.value-ebm.internal-only word for word. Delete. | EBM p. 12
pspo2.kva-measures.defect-trends | minor | Repeats pspo.value-ebm.kvm-defect-trends. Delete. | EBM p. 16

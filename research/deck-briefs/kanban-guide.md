# Deck brief: The Kanban Guide (ProKanban.org PK I)

Slug: `kanban-guide`. Researched 25 September 2026. Every quote below was read in a
file downloaded during this task to
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/kanban-guide/`
(file names given in brackets). Anything I could not confirm is in §9.

**Short version.** PK I is ProKanban.org's paid, 60-minute multiple-choice
assessment. Its body of knowledge is **The Kanban Guide, May 2025 edition** (John
Coleman and Daniel Vacanti), an openly licensed 8-page document. The Guide is tier B.
ProKanban's own pages, the Kanban Pocket Guide and the PK I topic list are all rights
reserved (tier C). The Guide is very short. Most of the deck is therefore its
definitions and rules, plus clearly marked "extra" material (Little's Law, SLE
percentiles, charts) drawn as facts from the tier-C Pocket Guide and from the tier-B
Scrum.org guide. Two catches: the Guide contradicts itself on its licence (§2), and
ProKanban does not publish the number of questions (§9).

---

## 1. Exam facts

Owner: **ProKanban.org** (the footer on every page reads "© 2026 ProKanban.org — All
rights reserved"). The exam is called "Professional Kanban I" and abbreviated "PK I".

| Fact | Value | Quote and URL | Volatile? |
|---|---|---|---|
| Name and level | Professional Kanban I, entry level | "PK I · Certification assessment / Professional Kanban I. Validate your depth of knowledge of Kanban and its application. The entry-level professional certification expected of practitioners and Scrum Masters running Kanban teams." https://prokanban.org/product/pki [pk_product_pki] | low |
| Duration | 60 minutes | "Duration60 min" and "The exam is timed at 60 minutes and scored immediately on submission." /product/pki | medium |
| Pass mark | 85% | "Pass mark85%", "The pass mark is 85%." /product/pki. Also on https://prokanban.org/certifications: "A timed, multiple-choice exam. Pass mark is 85%." [pk_certifications] | medium |
| Format | Timed, multiple choice | "FormatTimed, multiple-choice" /product/pki | low |
| Delivery | Online, on demand | "DeliveryOn demand, online" and "you will receive an access code by email that you use to sit the exam whenever you are ready." /product/pki | low |
| Cost | US$200 | "$200 USD · 60 min · 85% to pass · Credly-verified" /product/pki. /certifications also shows "Price$200". | **high** |
| Class required? | No | "Do I have to take APK before the assessment? No — the PK I assessment is open to anyone. That said, Applying Professional Kanban is designed to prepare you for it, and most successful candidates take the course first." /product/pki | low |
| Prep course | Applying Professional Kanban (APK), 2 days | "2-day live course · earns the PK I certification"; "PrerequisitesNone"; "CertificationPK I". https://prokanban.org/courses/applying-professional-kanban [pk_courses_applying-professional-kanban] | medium |
| Retakes | **The owner's pages disagree** | /certifications FAQ: "Yes. Each paid assessment comes with two attempts. Students of an APK course receive two free PK I attempts. Additional attempts can be purchased individually." /product/pki: "RetakesPurchase per attempt" and "On a fail, you can purchase another attempt whenever you are ready." | **high**: state only "retakes are possible" |
| Validity | Does not expire | "ProKanban certifications do not expire. Your Credly badge is evergreen." /product/pki; same on /certifications. | low |
| Badge | Credly, issued after a pass | /product/pki: "On a pass, your Credly badge is issued within 48 hours." The training page (https://prokanban.org/training?course=APK) says "within 24 hours". The two pages conflict. | medium |
| Scoring | Immediate result | "You know your result immediately and can retake if needed." /certifications | low |
| Cheaper readiness check | $20 "small batch assessment" | "the small batch assessment covers a slice of the same content for $20 per attempt. Pass it and we'll email you $50 off this certification" /product/pki | **high** |
| Free practice | Practice sets of about 10 minutes | "Every Professional Kanban certification has a free practice set" and "Roughly ten minutes." https://prokanban.org/assessments [www.prokanban.org_assessments] | medium |
| Version of the exam | **Not published** | No exam version or effective date appears on any ProKanban page. The Guide the exam is built on is dated May 2025 (see §2). | — |
| Number of questions | **Not published by the owner** | See §9. | — |

Marketing figures on /certifications (not exam rules; do not put them on cards):
"50 % first-attempt pass rate", "83 % average score", "4,057 2025 candidates".

Which facts change often: price, the retake and attempt policy (already inconsistent),
the badge turnaround, the $20 small batch offer and the pass-rate figures. Card writers
should put `ValidAsOf: 2026-09-25` on any card that carries one of them, or better,
keep these facts on the deck page rather than on cards.

## 2. Sources

| # | Title | URL | Publisher | Licence as quoted from the source itself | Tier | Deck use |
|---|---|---|---|---|---|---|
| S1 | **The Kanban Guide, May 2025** (PDF, 8 pp.) | https://prokanban.org/pdfs/kanban-guide-2025-05.pdf [kanban-guide-2025-05.pdf, text kg2025.txt] | Orderly Disruption Limited and Daniel S. Vacanti, Inc. (John Coleman and Daniel Vacanti); hosted by ProKanban.org | Footer on every page: "© 2019-2025 Orderly Disruption Limited, Daniel S. Vacanti, Inc. Offered for license under the Attribution ShareAlike license of Creative Commons, accessible at http://creativecommons.org/licenses/by-sa/4.0/legalcode …". **But** the "License" section on p. 8 says: "This work is licensed by Orderly Disruption Limited and Daniel S. Vacanti, Inc. under a Creative Commons Attribution 4.0 International License." | **B** | The primary source: quote and adapt it, attributing both licensors. Because the document states two licences, follow the stricter one (CC BY-SA 4.0). That is compatible with our own CC BY-SA 4.0 decks either way. |
| S1a | Same edition, LaTeX re-typeset | https://kanbanguides.org/the-kanban-guide/2025.5/pdf/kanban-guide.v2025.5.en.pdf [kg_v2025.5] | kanbanguides.org | The same footer ("This publication is offered for license under the Attribution ShareAlike license…"), the same p. 8 "Creative Commons Attribution 4.0" line, and "Edition 2025.5 · 2025-05-01" | B | Cross-check only. A word-level diff against S1 found no differences in content; this copy adds an author and contributor line. |
| S1b | ProKanban web reader of the Guide | https://prokanban.org/the-kanban-guide [prokanban.org_the-kanban-guide] | ProKanban.org | The page says "2025 edition · CC-BY-SA 4.0" and repeats the S1 footer notice | B for the Guide text; **C for ProKanban's added glosses** | **Do not cite it for Guide wording.** It is abridged: it leaves out "The order in which these are implemented is not important…", "The visualization of the DoW is called a Kanban board", the whole pull-system paragraph, the multiple-DoW paragraph, the flow-metric renaming sentence, the "best guess" SLE sentence and the History section. It also changes "visualized on the DoW" to "visualized on the DoW Kanban board". Its "Terms in this section" boxes add ProKanban glosses (e.g. WIP is "The single biggest lever for flow") that are not in the Guide. |
| S2 | The Kanban Guide, December 2020 | https://kanbanguides.org/the-kanban-guide/2020.12/pdf/kanban-guide.v2020.12.en.pdf [kg_v2020.12] | Orderly Disruption Ltd / Daniel S. Vacanti, Inc. | Same footer (CC BY-SA 4.0) plus a "License" section naming "Creative Commons Attribution 4.0" | B | For the "what changed" cards only (§7). Never a source for current rules. |
| S3 | The Kanban Guide, July 2020 (first edition) | https://kanbanguides.org/the-kanban-guide/2020.7/pdf/kanban-guide-v2020.7.en.pdf [kg_v2020.7] | same | "© 2019-2020 … Offered for license under the Attribution ShareAlike license of Creative Commons" | B | History only. |
| S4 | Kanban Guides home and edition history | https://kanbanguides.org/ and https://kanbanguides.org/the-kanban-guide/history/ [kanbanguides, kg_history] | kanbanguides.org | No licence line on the page | C | Facts: edition dates ("The Kanban Guide (May 2025)", "Living Document - Updated May 1, 2025", "The Kanban Guide (December 2020)") and the existence of the separate Open Guide to Kanban (§7). |
| S5 | **The Kanban Pocket Guide** (PDF, 103 pp.) | https://prokanban.org/pdfs/kanban-pocket-guide-en.pdf [kpg-en] | Daniel Vacanti, Prateek Singh and Colleen Johnson (Leanpub, ISBN 978-0-9864363-8-3, "published on 2022-08-19") | "© 2022 Daniel Vacanti, Prateek Singh and Colleen Johnson". No open licence. ProKanban offers it as a free download. | **C** | Facts in our own words only, never copied: Little's Law and its assumptions, Work Item Age, SLE percentiles as triggers, right-sizing, the difference between WIP and WIP limits. ProKanban calls it one of the "Two documents [that] anchor that understanding" (https://prokanban.org/kanban [pk_kanban]). |
| S6 | ProKanban certification pages | https://prokanban.org/certifications, https://prokanban.org/product/pki, https://prokanban.org/assessments | ProKanban.org | "© 2026 ProKanban.org — All rights reserved" | C | Exam facts (§1), stated in our own words. Do **not** reproduce the PK I sample question: it is exam-style content. Our policy §2.1 excludes exam content, and the question is all rights reserved. |
| S7 | ProKanban Kanban Playbook (e.g. /kanban-playbook/why-control-wip, /flow-metrics, /scatterplot-lookback, /multiple-sles) | https://prokanban.org/kanban-playbook/… [pk_kanban-playbook_*] | ProKanban.org | "All rights reserved" | C | Facts only, for "extra" cards (e.g. that WIP is the one flow metric a team can control directly). |
| S8 | The Kanban Guide for Scrum Teams, January 2021 | https://scrumorg-website-prod.s3.amazonaws.com/drupal/2021-01/01-2021%20Kanban%20Guide.pdf [scrumorg_kgst_2021-01.pdf, kgst.txt]. The landing page https://www.scrum.org/resources/kanban-guide-scrum-teams returned HTTP 403 to both curl and WebFetch. | Scrum.org, Daniel Vacanti, Yuval Yeret ("Developed and sustained by Scrum.org, Daniel Vacanti, and Yuval Yeret") | "© 2021 Scrum.org. Offered for license under the Attribution Share-Alike license of Creative Commons, accessible at http://creativecommons.org/licenses/by-sa/4.0/legalcode" | B | A **different document**, the basis of Scrum.org's PSK I rather than PK I. None of the ProKanban pages I fetched mention it or Scrum.org. Use it only for the "don't confuse" cards (four practices and a different definition, §7) and, labelled, for the Scrum-events angle. |
| S9 | Kanban University, "Kanban Guide" (the Kanban Method) | https://kanban.university/kanban-guide/ [ku_kanban-guide] | Kanban University | "© 2026 Kanban University. All rights reserved. Accredited Kanban Trainer and Kanban Coaching Professional are registered trademarks of Kanban University." | C | Trap cards only (§7), in our own words. **Never** a source of PK I content. |

## 3. Exam outline (coverage checklist)

**ProKanban's published topic list for PK I** (/product/pki, all rights reserved). It is
listed here for internal coverage checking only. Per CONTENT-POLICY §2.3 the deck
links to it and uses our own labels. The page says: "The PK I covers 6 topic areas.
Every question maps to one of these areas." No weights are published.

1. "The Kanban Guide — three practices and four flow metrics"
2. "Defining and visualizing the workflow"
3. "Actively managing items in progress with WIP limits"
4. "Improving the workflow using flow metrics"
5. "Definition of Workflow and explicit policies"
6. "Common Kanban system elements and pull-based flow"

**The openly licensed structure we build on: the Guide's own sections** (S1, table
of contents p. 3):

| Guide section | Page | Our topic label (proposal) | Maps to PK I areas |
|---|---|---|---|
| Preface; Conventions Used | 2 | T1 What the Guide is and its terms | 1, 6 |
| Definition of Kanban | 4 | T2 Kanban in one sentence: the strategy and its three practices | 1 |
| Why Use Kanban | 4 | T3 Flow and value: effectiveness, efficiency, predictability | 1, 4 |
| Kanban Theory | 4 | T4 The theory behind it | 6 |
| Kanban Practices → Defining and Visualizing the Workflow | 5–6 | T5 The Definition of Workflow and the Kanban board | 2, 5 |
| Kanban Practices → Actively Managing Items in a Workflow | 6 | T6 Managing active work: controlling WIP, pull, age, blockers | 3, 6 |
| Kanban Practices → Improving the Workflow | 7 | T7 Improving the workflow | 4 |
| Flow Metrics | 7 | T8 The four flow metrics | 1, 4 |
| Endnote; History; Acknowledgments; 2025 Adaptations; License | 8 | T9 History, editions and what changed | — |
| (extra, S5/S7/S8) | — | T10 Using the metrics: Little's Law, SLE percentiles, charts | 3, 4 |

PK I area 3 says "WIP limits", but the 2025 Guide deliberately made WIP control "Less
explicit (and hence more flexible)" (§7). Teach WIP limits as one way to control WIP,
not as a requirement. Area 6's "common Kanban system elements" has no fixed list in
the Guide. I read it as covering the DoW elements, the board, pull and blocked work.

## 4. Concept inventory (teaching order)

Section references are to S1 (May 2025 PDF) unless marked otherwise. Definitions are
the Guide's own words or a close paraphrase. Concept IDs are proposals (`kg.*`).
"Vol." marks a volatile fact.

### T1 What the Guide is and its terms
| ID | Concept | Definition (source) | Prereqs | Core/extra |
|---|---|---|---|---|
| kg.guide.purpose | Purpose of the Guide | "a unifying reference for the community by offering the minimal guidance for Kanban." (Preface, p. 2) | — | core |
| kg.guide.conventions | Conventions exist to clarify, not replace | "They are not meant to replace any other existing definitions but to clarify how they are intended to be applied here." (Preface) | — | extra |
| kg.term.kanban-system | Kanban / Kanban system (convention) | "the holistic set of concepts in this guide––specifically as pertains to knowledge work." (Conventions, p. 2) | — | core |
| kg.term.stakeholder | Stakeholder | "An entity, individual, or group responsible for, interested in, or affected by the inputs, activities, and outcomes of the Kanban system." (p. 2) | kanban-system | core |
| kg.term.value | Value | "Either a potential or realized benefit for a stakeholder." Examples: needs of "the customer, the end-user, the organization, and the environment." (p. 2) | stakeholder | core |
| kg.term.visualize | Visualize, visualization | "Any method to convey ideas effectively, including conceptual clarification, not necessarily only visual." (p. 2) | — | core |
| kg.term.risk | Risk | "The chance that something bad could happen." (p. 2) | — | core |
| kg.term.members | Kanban system members | "Those who participate in the value delivery of a Kanban system" (Definition, p. 4) | kanban-system | core |
| kg.term.kanban-system-impl | Kanban system (implementation) | "In their implementation, these Kanban practices are collectively called a Kanban system." (p. 4) | three practices | core |

### T2 Definition of Kanban
| ID | Concept | Definition (source) | Prereqs | Core/extra |
|---|---|---|---|---|
| kg.def.kanban | Definition | "Kanban is a strategy for optimizing the flow of value through a process." (p. 4) | value, flow | core |
| kg.def.three-practices | The three practices, "working in tandem" | "Defining and visualizing a workflow; Actively managing items in a workflow; Improving a workflow" (p. 4) | def.kanban | core |
| kg.def.knowledge-work | Scope | Applies "specifically as pertains to knowledge work" (Conventions). Also: "not limited to any specific industry or context… finance, utilities, healthcare, and software" and "can be used at any scale" (p. 4) | — | extra |

### T3 Flow and value
| ID | Concept | Definition (source) | Prereqs | Core/extra |
|---|---|---|---|---|
| kg.flow.flow | Flow | "Flow is the movement of potential value through a system." (Why Use Kanban, p. 4) | value | core |
| kg.flow.strategy | Strategy | "the strategy of Kanban is to optimize value by optimizing flow." (p. 4) | flow | core |
| kg.flow.balance | Value optimization = balance of three | "striving to find the right balance of effectiveness, efficiency, and predictability" (p. 4) | strategy | core |
| kg.flow.effective | Effective | "An effective workflow delivers what stakeholders want when they want it." (p. 4) | balance | core |
| kg.flow.efficient | Efficient | "allocates available economic resources as optimally as possible to deliver value." (p. 4) | balance | core |
| kg.flow.predictable | Predictable | "being able to accurately forecast value delivery within an acceptable degree of uncertainty." (p. 4) | balance | core |
| kg.flow.right-questions | Ask the right questions sooner | "get Kanban system members to ask the right questions sooner as part of a continuous improvement effort"; "aim for a sustainable balance among these three elements" (p. 4) | balance | core |
| kg.flow.tradeoffs | Trade-offs and risk | "Ultimately, the strategy of Kanban is to help you understand trade-offs and manage risk." (p. 4) | risk | core |
| kg.flow.optimize-not-maximize | Optimize, not maximize | The 2020 Guide: "Optimization does not necessarily imply maximization." (S2, p. 4). The Pocket Guide explains the choice of word (S5 ch. 5). Not in the 2025 text. | balance | extra |

### T4 Kanban theory
| ID | Concept | Definition (source) | Prereqs | Core/extra |
|---|---|---|---|---|
| kg.theory.list | Theories drawn on | "systems thinking, lean principles, queuing theory (batch size and queue size), variation, and quality control" (Kanban Theory, p. 4) | — | core |
| kg.theory.augment | Kanban augments other approaches | "Kanban can and should be used to augment those delivery techniques." (p. 4) | — | core |

### T5 Definition of Workflow and the board
| ID | Concept | Definition (source) | Prereqs | Core/extra |
|---|---|---|---|---|
| kg.dow.dow | Definition of Workflow (DoW) | "The explicit shared understanding of flow among Kanban system members within their context"; "a fundamental concept of Kanban. All other elements of this guide depend heavily on how workflow is defined." (p. 5) | flow, members | core |
| kg.dow.minimum | The DoW's minimum elements | "At a minimum, Kanban system members must create their DoW using all of the following elements" (six bullets, p. 5) | dow | core |
| kg.dow.work-item | 1. Work items | "individual units of value that are moving through the workflow… referred to as work items (or items)." | dow | core |
| kg.dow.started-finished | 2. Started and finished points | "A definition for when work items are started and finished… your workflow may have more than one started or finished point." | work-item | core |
| kg.dow.states | 3. Defined states | "One or more defined states that the work items flow through from started to finished." | started-finished | core |
| kg.dow.wip | WIP (as defined in the DoW) | "Any work items between a started point and a finished point are considered work in progress (WIP)." | states | core |
| kg.dow.wip-control | 4. How WIP is controlled | "A definition of how WIP will be controlled from started to finished." | wip | core |
| kg.dow.policies | 5. Explicit policies | "Explicit policies about how work items can flow through each state from started to finished." | states | core |
| kg.dow.sle | 6. Service level expectation (SLE) | "a forecast of how long it should take a work item to flow from started to finished." (p. 5) | started-finished, cycle time | core |
| kg.dow.sle-parts | The SLE's two parts | "a period of elapsed time and a probability associated with that period (e.g., "85% of work items will be finished in eight days or less")" (p. 5) | sle | core |
| kg.dow.sle-basis | Basis of the SLE | "should be based on historical cycle time and, once calculated, should be visualized on the DoW. If historical cycle time data does not exist, a best guess will do until there is enough historical data" (p. 5) | sle, cycle time | core |
| kg.dow.order | Order of adoption | "The order in which these are implemented is not important as long as they are all adopted." (p. 5) | minimum | core |
| kg.dow.additional | Extra DoW elements | "additional DoW elements such as values, principles, and working agreements" (p. 5) | minimum | extra |
| kg.dow.multiple | Multiple DoWs | "often require more than one DoW… this guide prescribes no minimum or maximum number of DoWs, it encourages establishing a DoW wherever the Kanban system members require connecting flow to value realization." (p. 5) | dow | core |
| kg.board.board | Kanban board | "The visualization of the DoW is called a Kanban board." (p. 6) | dow, visualize | core |
| kg.board.transparent | What the board must show | "Making at least the minimum elements of DoW transparent on a Kanban board is essential" (p. 6) | board | core |
| kg.board.no-format | No required layout | "There are no specific guidelines for how a visualization should look… limited only by their imagination" (p. 6) | board | core |
| kg.board.columns-optional | Columns not required (extra) | "There's nothing that even says you have to use columns for states." (S5 ch. 4, "The Kanban Board"); To Do → Doing → Done "is a perfectly valid workflow" (S5 ch. 4, "Workflow States") | board | extra |

### T6 Actively managing items
| ID | Concept | Definition (source) | Prereqs | Core/extra |
|---|---|---|---|---|
| kg.manage.must | Items must be actively managed | "Items in the workflow must be managed actively." (p. 6) | three practices | core |
| kg.manage.forms | Forms of active management | "Controlling WIP. / Ensuring work items do not age unnecessarily, using the SLE as a reference. / Unblocking blocked work." (p. 6), "including but not limited to" | wip, sle, work item age | core |
| kg.manage.review | Reviewing active items | "A common practice… review the active items regularly. This review can occur continuously, at regular intervals, or through a combination of both." (p. 6). No daily meeting is required. | forms | core |
| kg.manage.control-wip | WIP control is mandatory | "Kanban system members must explicitly control the number of work items in a workflow from started to finished." (p. 6) | wip | core |
| kg.manage.control-representation | Any representation | "That control can be represented on a Kanban board in any way that Kanban system members deem appropriate." (p. 6) | control-wip | core |
| kg.manage.neither | Neither above nor below | "Ideally, the system would operate neither above nor below the agreed upon control." (p. 6) | control-wip | core |
| kg.manage.pull | Pull system | "An effect of controlling WIP is that it should create a pull system… start work on an item (pull or select) only when there is a clear signal that there is capacity to do so." (p. 6) | control-wip | core |
| kg.manage.signal | Signal to select work | "When WIP drops below the control set in the DoW, that can be a signal to select new work." Members "should refrain from selecting more… beyond the WIP control." (p. 6) | pull | core |
| kg.manage.benefits | What controlling WIP brings | "helps workflow and often also improves the Kanban system members' collective focus, commitment, and collaboration." (p. 6) | control-wip | core |
| kg.manage.exceptions | Exceptions go in the DoW | "Any acceptable exceptions to controlling WIP should be made explicit as part of the DoW." (p. 6) | control-wip, dow | core |
| kg.manage.wip-limit | WIP limit (extra) | One common way to control WIP. The 2020 Guide: "usually represented as numbers or slots/tokens on a Kanban board that are called WIP limits" (S2, p. 6). The 2025 Guide does not use the term. Not every column needs one: "Don't let anyone tell you that Kanban requires every column on your board to have a WIP limit." (S5 ch. 4) | control-wip | core (because PK I area 3 names it) |
| kg.manage.wip-vs-limit | WIP is not the sum of WIP limits (extra) | "You cannot calculate WIP simply by adding up all the WIP limits on your board." (S5 ch. 6); "Setting a WIP limit is not necessarily the same as limiting Work In Progress." (S5 App. A) | wip-limit, wip | core |
| kg.manage.age-first (extra) | Two ways to stop items ageing | Finish them, or don't start them; "The real reason to control WIP is to prevent unnecessary aging." (S5 ch. 1) | work item age | extra |
| kg.manage.ensemble (extra) | Pairing, swarming, mobbing | Lowering WIP below the number of team members so several people help an ageing item (S5 ch. 3) | control-wip | extra |
| kg.manage.blocked-policies (extra) | Policies for blocked work | When to mark an item blocked; whether blocked items count towards WIP limits; when to remove them (S5 ch. 3) | policies | extra |
| kg.manage.right-sizing (extra) | Right-sizing | Using the SLE range as the "right size" for work entering the system. Items need not be the same size: "variation in work item size will always exist." (S5 ch. 2) | sle | extra |

### T7 Improving the workflow
| ID | Concept | Definition (source) | Prereqs | Core/extra |
|---|---|---|---|---|
| kg.improve.responsibility | The members' responsibility | "to continuously improve their workflow to achieve a better balance of effectiveness, efficiency, and predictability" (p. 7) | dow, balance | core |
| kg.improve.study | Study guides change | "Continual study of the system can guide potential improvements to the DoW." (p. 7) | — | core |
| kg.improve.no-cadence | No meeting or cadence required | "There is no requirement, however, to wait for a formal meeting at a regular cadence… can and should make just-in-time alterations" (p. 7) | — | core |
| kg.improve.size | Change need not be small | "nothing that prescribes improvements to workflow to be small and incremental. If… a significant change is needed, then that is what they should implement." (p. 7) | — | core |
| kg.improve.re-baseline (extra) | Re-baselining the SLE after a change | After a major change, "once you have 10-ish "new" items that have completed after the change you should have a enough data to calculate a new SLE" (S5 ch. 5) | sle | extra |

### T8 The four flow metrics
| ID | Concept | Definition (source) | Prereqs | Core/extra |
|---|---|---|---|---|
| kg.metrics.required | Minimum metrics are required | "The application of Kanban requires collecting and analyzing a minimum set of flow metrics." (Flow Metrics, p. 7) | — | core |
| kg.metrics.four | The four mandatory metrics | "The four mandatory flow metrics to track in Kanban are: WIP, Throughput, Work Item Age, Cycle Time" (p. 7) | — | core |
| kg.metrics.wip | WIP | "The number of work items started but not finished." (p. 7) | started-finished | core |
| kg.metrics.throughput | Throughput | "The number of work items finished per unit of time. Note the measurement of throughput is the exact count of work items." (p. 7) | work-item | core |
| kg.metrics.age | Work Item Age | "The elapsed time between when a work item started and the current date." (p. 7) | started-finished | core |
| kg.metrics.cycle-time | Cycle Time | "The elapsed time between when a work item started and when a work item finished." (p. 7) | started-finished | core |
| kg.metrics.names | Other names allowed | "they can refer to any of these measures using any other names they choose (e.g., Cycle Time could be Flow Time, Throughput could be Delivery Rate, etc.)" (p. 7) | four | core |
| kg.metrics.dow-bound | Started and finished come from the DoW | "the terms started and finished refer to how the Kanban system members have defined those terms in the DoW." (p. 7) | dow | core |
| kg.metrics.meaningless | Useful only if they inform practice | "these metrics are meaningless unless they can inform one or more of the three Kanban practices." (p. 7) | four | core |
| kg.metrics.how | How to use them is the members' choice | "e.g., visualize them in charts, assess variation" (p. 7) | — | core |
| kg.metrics.minimum | Minimum, not a maximum | "represent only the minimum required… may and often should use additional context-specific measures" (p. 7) | — | core |
| kg.metrics.elapsed (extra) | Elapsed time, not working time | Cycle time is measured in elapsed time; "delay is the enemy of flow!" (S5 ch. 6) | cycle-time | extra |
| kg.metrics.age-converts (extra) | Age becomes cycle time | Once an item exits, "all the age that has accumulated… immediately becomes converted to Cycle Time." (S5 ch. 6) | age, cycle-time | extra |
| kg.metrics.velocity (extra) | Throughput is not velocity | When velocity means story points, "Throughput and Velocity are anything but synonymous." (S5 ch. 6) | throughput | extra |
| kg.metrics.lead-time (extra) | Cycle time vs "lead time" | The Guide's term is cycle time. "Lead time" varies by context (ProKanban /kpg FAQ). The Kanban Method uses lead time from a commitment point (S9). | cycle-time | extra |

### T9 History, editions and what changed
| ID | Concept | Definition (source) | Prereqs | Core/extra |
|---|---|---|---|---|
| kg.hist.roots | Roots | Toyota Production System, Taiichi Ohno, W. Edwards Deming (History, p. 8) | — | extra |
| kg.hist.corbis | Knowledge-work origin | "mostly originated on a team at Corbis in 2006" (p. 8) | — | extra |
| kg.hist.editions | Editions | July 2020, December 2020, May 2025 (S3, S2, S1; S4 history) | — | extra (Vol.) |
| kg.hist.endnote | Endnote rule | "One can and likely should add other principles, methodologies, and techniques… but the minimum set of practices, metrics, and the spirit of optimizing value must be preserved." (p. 8) | — | core |
| kg.hist.2025-changes | The 2025 Adaptations list | The ten bullets on p. 8 (see §7) | all | core |

### T10 Using the metrics (all extra, from S5/S7/S8)
| ID | Concept | Definition (source) | Prereqs | Core/extra |
|---|---|---|---|---|
| kg.ll.formula | Little's Law (flow form) | "Average Cycle Time = Average Work In Progress / Average Throughput" (S5 App. A). Original form: L = λW (S5 App. A) | the three metrics | extra |
| kg.ll.averages | A relationship of averages | "Little's Law is a relationship of averages." (S5 App. A) | formula | extra |
| kg.ll.assumptions | The five assumptions (flow form) | arrivals equal departures on average; all started work finishes and exits; WIP roughly the same at the start and end of the interval; average age of WIP neither increasing nor decreasing; consistent units (S5 App. A) | formula | extra |
| kg.ll.conservation | Conservation of flow vs stability | Assumptions 1–2 are "Conservation of Flow"; 3–4 are "system stability" (S5 App. A) | assumptions | extra |
| kg.ll.not-forecast | Not a forecasting tool | "Little's Law is only concerned with looking backward… not meant to be used to make deterministic predictions" (S5 App. A) | formula | extra |
| kg.ll.lever | WIP is the lever | Of the three variables, "WIP is the only one we can directly control in real time." (S7 /why-control-wip) | formula | extra |
| kg.sle.percentile-triggers | Percentile lines as triggers | With an 85th-percentile SLE, an item at the 50th-percentile age has a 30% chance of missing the SLE (up from 15%); at the 70th, 50% (S5 ch. 2) | sle, scatterplot | extra |
| kg.sle.single-first | Start with one SLE | "Multiple SLEs are a last resort, not a sign of maturity." (S7 /multiple-sles) | sle | extra |
| kg.chart.scatterplot | Cycle time scatterplot | "shows each completed work item plotted by when it finished and how long it took"; percentile lines give the SLE (S7 /scatterplot-lookback) | cycle-time | extra |
| kg.chart.aging | Aging WIP chart | Named in S7 (/scatterplot-lookback: "their Aging WIP chart triggers earlier interventions"). No full definition fetched. | age, sle | extra |
| kg.chart.cfd | Cumulative flow diagram | Can visualize "WIP, approximate average Cycle Time and average Throughput" (S8, Sprint Retrospective, p. 8). Little used a "Cumulative Arrivals/Departures diagram" (S5 ch. 1) | the three metrics | extra |
| kg.chart.throughput | Throughput run chart | Shown as weekly throughput in ProKanban's lab (/kpg). The playbook says record daily throughput "including zero-completion days" (S7 /flow-metrics) | throughput | extra |
| kg.forecast.monte-carlo | Monte Carlo forecasting | Once the process mostly conforms to LL's assumptions, "we can start to use something like Monte Carlo simulation on our historical data to make forecasts" (S5 App. A) | ll.assumptions, throughput | extra |

## 5. Numbers and thresholds

| Figure | Units and conditions | Source line |
|---|---|---|
| 3 | practices of Kanban | "the following three practices working in tandem" (S1 p. 4) |
| 4 | mandatory flow metrics | "The four mandatory flow metrics to track in Kanban" (S1 p. 7) |
| 6 | minimum DoW elements (count of bullets; the Guide gives no number) | S1 p. 5, six bullets after "using all of the following elements" |
| 5 | conventions (Kanban/Kanban system, stakeholder, value, visualize/visualization, risk) | S1 p. 2. The web reader says "This guide uses five conventions" (S1b), a count the PDF does not state. |
| 3 | elements of value optimization (effectiveness, efficiency, predictability) | S1 p. 4 |
| 3 | listed forms of active management | S1 p. 6 (the 2020 edition had 4, §7) |
| 2 | parts of an SLE: elapsed time + probability | S1 p. 5 |
| 85% / 8 days | **example** SLE only, not a rule | "85% of work items will be finished in eight days or less" (S1 p. 5) |
| 2006 | Corbis origin | S1 p. 8 |
| May 2025 (2025-05-01) | current Guide edition | S1 cover "May 2025"; S1a "Edition 2025.5 · 2025-05-01"; S4 "Living Document - Updated May 1, 2025" |
| Dec 2020, Jul 2020 | earlier editions | S2, S3 covers |
| 60 min, 85%, US$200 | PK I exam (Vol.) | §1 |
| 2 days | APK course length | §1 |
| 50th → 30%, 70th → 50% | chance of missing an 85th-percentile SLE once age reaches that percentile (extra) | S5 ch. 2 "Percentiles as Intervention Triggers" |
| ~10 items | completed after a change before recalculating the SLE (rule of thumb, extra) | S5 ch. 5 |
| 10–20 items | per work type if multiple SLEs are used (extra) | S7 /multiple-sles |
| 5 | Little's Law assumptions in the throughput form (extra) | S5 App. A |
| 100 bottles, 2 per week → 50 weeks | Little's wine-rack example of L = λW (extra) | S5 App. A |

## 6. Visuals

**Figures in the sources that are content:** none reusable.
- S1 (the Guide) has **no figures**. `pdfimages` finds only an 80×15 px image on p. 8,
  presumably the licence badge.
- S5 Figure 1.1 "A Cumulative Arrivals/Departures Diagram" (p. 16 of the book) and
  Figure 3.1 "Sample Work Item Breakdown Strategies" (credited to Becky McKneeley).
  Both are © tier C, so not usable.
- S9 (Kanban University) Figures 1–6 are all rights reserved, and from the wrong body
  of knowledge.

**Diagrams we can draw ourselves from sourced facts** (tier B unless noted):
1. **Kanban board as a picture of the DoW.** Columns for defined states between one
   started line and one finished line, cards as work items, one WIP-control marker, a
   policy note per column, and the SLE printed on the board. Shows: the six DoW
   elements (S1 p. 5), "The visualization of the DoW is called a Kanban board" (p. 6),
   and the SLE "should be visualized on the DoW" (p. 5). Cards ask: "Which DoW element
   is missing from this board?" The caption must say layout is free ("no specific
   guidelines", p. 6).
2. **Three ways to control WIP.** The same board drawn three times: a limit per
   column, one limit for the whole board, and grouped columns. Shows: control "can be
   represented… in any way" (S1 p. 6); the Pocket Guide's list of options (S5 ch. 4,
   facts only). Cards ask: "Is a per-column WIP limit required?" (No.)
3. **Pull signal.** The WIP count drops below the control, so a new item may be
   selected. Shows S1 p. 6 ("When WIP drops below the control set in the DoW, that can
   be a signal to select new work").
4. **Four metrics on one timeline.** Items as bars from started to finished against
   "today". Shows: WIP = bars crossing today; Work Item Age = start to today; Cycle
   Time = start to finish; Throughput = finishes counted per week. From S1 p. 7. Cards
   ask which metric a highlighted span shows.
5. **Cycle time scatterplot with percentile lines and an SLE.** Made-up data; x =
   finish date, y = cycle time in days; the 50th, 70th and 85th percentile lines; SLE
   label "85% in ≤ N days". Shows: SLE parts and basis (S1 p. 5); the scatterplot
   description (S7, facts only); percentile triggers (S5 ch. 2, facts only). The data
   must be labelled "illustrative".
6. **Aging WIP view.** In-progress items plotted by state against age, with the same
   percentile bands. Shows "Ensuring work items do not age unnecessarily, using the SLE
   as a reference" (S1 p. 6) and the percentile triggers (S5 ch. 2).
7. **Cumulative flow diagram.** Illustrative arrivals and departures bands. Shows:
   vertical gap = WIP, horizontal gap ≈ approximate average cycle time, slope of the
   departures line = throughput. S8 p. 8 supports only "approximate average Cycle Time
   and average Throughput" and WIP. The reading rules (vertical vs horizontal) are
   **not** stated in any source I fetched. Either keep the card to the S8 sentence, or
   find a source for the reading rules first (§9).
8. **Little's Law triangle.** CT = WIP / TH with the five assumptions around it,
   grouped as conservation of flow (1–2), stability (3–4) and units (5). From S5
   App. A, facts only. Tier C text, so our own wording.
9. **Edition diff table.** 2020 vs 2025: three practices unchanged; "Kanban Measures"
   renamed "Flow Metrics"; SLE moved into the DoW; "WIP limits" wording relaxed;
   immutability removed. From S1 p. 8 "2025 Adaptations" and S2.
10. **"Three documents called Kanban guide" comparison.** The Kanban Guide (S1, three
    practices), the Kanban Guide for Scrum Teams (S8, four practices, a "work-in-progress
    limited pull system"), and the Kanban Method (S9, six general practices, lead time,
    classes of service, STATIK). This is a table, not a figure.

## 7. Confusions and traps

1. **The Kanban Method (Kanban University) is a different body of knowledge.** S9
   teaches "Change Management Principles" ("Start with what you do now", "Agree to
   pursue improvement through evolutionary change", "Encourage acts of leadership at
   all levels"), "Service Delivery Principles", "six general Kanban practices"
   (Visualize, Limit WIP, Manage Flow, Make Policies Explicit, Implement Feedback
   Loops, Improve Collaboratively / Evolve Experimentally), "Lead time" from a
   "commitment point", "Delivery rate", "Classes of Service", "cadences" and STATIK.
   **None of these are in the Kanban Guide.** A card must never say they are, and no
   card should teach them as PK I content. ProKanban's own playbook warns that classes
   of service "add policy complexity and tend to hurt overall predictability" (S7
   /multiple-sles). One ProKanban marketing quote on /certifications mentions
   "service-class prioritization", so it may come up. Treat that as unverified exam
   scope, not as Guide content.
2. **The Kanban Guide for Scrum Teams (Scrum.org, Jan 2021) is not the Kanban Guide.**
   It defines Kanban as "a strategy for optimizing the flow of value through a process
   that uses a visual, work-in-progress limited pull system" and lists **four**
   practices: "Visualization of the Workflow; Limiting Work in Progress (WIP); Active
   management of work items in progress; Inspecting and adapting the team's Definition
   of Workflow" (S8 p. 3–4). The Kanban Guide has three practices and no "visual" or
   "pull" in its 2025 definition. It is the basis of Scrum.org's PSK, not PK I. No
   ProKanban page I fetched mentions it.
3. **Old editions still circulate.** In the December 2020 Guide:
   - The definition said "…through a process that uses a visual, pull-based system" (removed in 2025).
   - The section was "Kanban Measures" (now "Flow Metrics").
   - WIP control was "usually represented as numbers or slots/tokens… called WIP limits" (now any representation).
   - Active management had a fourth form, "Avoiding work items piling up in any part of the workflow" (removed).
   - The SLE was its own subsection (now inside the DoW).
   - The Endnote said "Kanban's practices and measures are immutable. Although implementing only parts of Kanban is possible, the result is not Kanban." (deleted in 2025: "Deleted reference to immutability of Kanban").
   - Work Item Age ended at "the current time" (2025: "the current date").

   The Pocket Guide (2022) quotes the 2020 wording, so check every Pocket Guide quote
   against S1.
4. **The official 2025 change list** (S1 p. 8, "2025 Adaptations"), verbatim bullets:
   "To convey intent, conventions were added for: Kanban, Kanban system, stakeholder,
   value, risk, visualize, and visualization"; "Value realization could be for
   stakeholders, including but not limited to customers"; "Simpler definition of
   Kanban, specifically as pertains to knowledge work"; "Service Level Expectation was
   moved into the Definition of Workflow section"; "Less explicit (and hence more
   flexible) how WIP is controlled"; "More explicit about multiple DoWs, variation,
   connecting flow to value realization"; "Simplified the three practices, and select
   (items) is mentioned more often"; "Kanban Measures renamed to Flow Metrics"; "More
   explicit about the flexibility around flow metric names"; "Deleted reference to
   immutability of Kanban". A related change: "effective" now serves "stakeholders"
   (2020: "customers").
5. **WIP vs WIP limit vs WIP control.** WIP is a metric (a count). A WIP limit is one
   possible form of control. The Guide requires *control* but no particular form. Sum of
   WIP limits ≠ WIP (S5 ch. 6).
6. **Cycle time vs lead time vs Work Item Age.** The Guide's metric is Cycle Time
   (finished items). Age is for unfinished items, measured to the current date. The
   Guide allows renaming (e.g. "Flow Time"). "Lead time" is the Kanban Method's term.
7. **Throughput is a count of items**, "the exact count of work items". It is not story
   points and not velocity (S1 p. 7; S5 ch. 6).
8. **The SLE is a forecast, not a target or a commitment.** It has two parts: time and
   probability. The 85%/8 days figure is an example. With no history, "a best guess
   will do" (S1 p. 5). ProKanban's /kpg FAQ: "Your SLE isn't a target, it's a
   forecast."
9. **No required meetings or cadence.** Review of active items can be "continuously, at
   regular intervals, or… both" (p. 6). Improvements need not wait for "a formal
   meeting at a regular cadence" and need not be "small and incremental" (p. 7). Scrum
   terms (Sprint, Daily Scrum, Retrospective, Increment, Product Backlog) do not appear
   in the Kanban Guide.
10. **Little's Law is not in the Kanban Guide.** It appears in S5, S7 and S8 only.
    Teach it as extra and background. It uses averages and looks backward. It is not
    for deterministic forecasts.
11. **Work items need not be the same size** (S5 ch. 2, App. A). Right-sizing is not
    same-sizing.
12. **Two licences in one document** (§2). Attribute to "Orderly Disruption Limited and
    Daniel S. Vacanti, Inc." and follow CC BY-SA 4.0.
13. **The ProKanban web reader is not the Guide text** (S1b). Its three-practice
    summary adds advice that is not in the Guide ("Set WIP limits. Watch item age.
    Pull the oldest work first.", "Review flow metrics regularly").
14. **The Open Guide to Kanban** (John Coleman, July 2025) is "an adaptation of the May
    2025 Kanban Guide" with its own edition history (S4). It is not the PK I text.

## 8. Naming

- **What ProKanban publishes about its marks: nothing I could find.** I fetched every
  page in https://prokanban.org/sitemap-0.xml that looked relevant: /certifications,
  /product/pki, /about-us, /code-of-conduct, /privacy-policy, /the-kanban-guide and
  /kpg. I also tried /terms, /terms-of-use, /trademark, /trademarks and /legal (all 404).
  No page has a trademark notice, trademark guidelines or an ® / ™ against "PK I",
  "Professional Kanban" or "ProKanban". The only notice is "© 2026 ProKanban.org — All
  rights reserved".
- **The Guide is not a ProKanban mark or text.** Its licensors are "Orderly Disruption
  Limited and Daniel S. Vacanti, Inc." (S1). kanbanguides.org names "John Coleman and
  Daniel Vacanti" as authors.
- **The word "KANBAN" may be a registered US mark of a third party.** A web search
  returned USPTO-aggregator listings saying "KANBAN" (serial 97322273) is registered to
  "Kanban International, LLC". I could not fetch the record (uspto.report returned
  403), so this is **unverified** (§9). Kanban University states "Accredited Kanban
  Trainer and Kanban Coaching Professional are registered trademarks of Kanban
  University" (S9 footer). Neither affects plain use of the word "Kanban" to describe
  the subject, but a lawyer should look (CONTENT-POLICY §8).
- **How CONTENT-POLICY §4 applies:**
  - ProKanban is not on the §5 list of bodies we don't name yet, so the general rule
    applies. Name the exam only to state a true fact. Plain text, no logo, our brand
    first.
  - Proposed title: "[Site name] deck for the Professional Kanban I (PK I) assessment
    from ProKanban.org". Not "PK I Flashcards" and not "official".
  - Since no prescribed wording exists, use the "Everyone else" notice: "Professional
    Kanban I (PK I) is a trademark of ProKanban.org. This deck is independent and is not
    affiliated with, sponsored, endorsed or approved by ProKanban.org."
  - Add the Guide attribution: "Contains material from The Kanban Guide (May 2025) ©
    2019-2025 Orderly Disruption Limited, Daniel S. Vacanti, Inc., licensed under CC
    BY-SA 4.0."
  - The URL path `/decks/kanban/pk-i/` is acceptable under §4. PK I is not in the domain.
  - ProKanban's PK I topic list is all rights reserved, so link to /product/pki rather
    than copy it (§2.3). `ExamRefs` may use our own topic labels mapped to it, since
    ProKanban is not a §5 body. Confirm this with the lead before release.
  - The PK I sample question and the practice-set questions are exam-style content.
    Never adapt them (§2.1, §2.7).

## Languages

**PK I assessment.** No ProKanban page names the languages the exam is offered in. I
searched /product/pki, /certifications and /assessments for "language", "English" and
"translat" and found nothing. The only claim is third-party: "80 questions in English"
(TheScrumMaster.co.uk, §9). The owner has not confirmed that PK I is English-only.
(ProKanban's training page filters courses by "EN DE FR ES IT HR", but that is course
delivery, not the exam: https://prokanban.org/training?course=APK.)

**Translations of The Kanban Guide.** The list is from
https://kanbanguides.org/the-kanban-guide/translations/, fetched 2026-09-25 [kg_translations].
The page labels them "Community Translations" and warns: "Translations of the Kanban
Guides with older dates may not contain the most recent information." English is the
only "Official Current Version".
- **May 2025 edition:** French, Japanese and Farsi (Persian), e.g.
  https://kanbanguides.org/fr/the-kanban-guide/2025.5/pdf/kanban-guide.v2025.5.fr.pdf.
  The page also lists "Spanish (Spain) (October 2025)".
- **December 2020 edition (outdated, §7):** Catalan, Chinese (Simplified), Chinese
  (Traditional), Czech, Italian, Marathi, Portuguese (Brazil), Romanian, Russian and
  Spanish (PDFs at `/the-kanban-guide/2020.12/pdf/kanban-guide.v2020.12.<lang>.pdf`).
- **Licence:** I checked only the French 2025 PDF [kg_fr_2025.pdf]. It carries the same
  licence conflict as the English one. Its footer reads "© 2019-2025 Orderly Disruption
  Limited, Daniel S. Vacanti, Inc. Cette publication est proposée sous licence
  Attribution ShareAlike license of Creative Commons…". Its "Licence" section reads
  "…sous une licence Creative Commons Attribution 4.0 International." Treat the other
  translations as tier B only after checking each file.
- ProKanban's Guide page claims "Translated into 8 languages" (S1b) without listing
  them. That does not match the 14 non-English languages on kanbanguides.org.

## 9. Not verified

1. **Number of questions.** No ProKanban page states it. I grepped /product/pki,
   /certifications and /assessments for "question" and found nothing about a count. A
   third-party blog (TheScrumMaster.co.uk, published 2025-01-07,
   https://www.thescrummaster.co.uk/agile/how-to-pass-the-professional-kanban-i-pk-i-assessment-from-prokanban/)
   says "The assessment contains 80 questions in English of multiple choice type". It is
   not the owner, so **do not use it**. The same blog says "score over 85%", which is
   not the owner's "85% to pass".
2. **Retake policy.** The owner's pages contradict each other (two attempts included vs
   pay per attempt). Ask ProKanban, or state only "retakes can be purchased".
3. **Badge turnaround.** 48 h (/product/pki) vs 24 h (training page).
4. **Which Guide edition PK I tests.** No ProKanban page says so. /the-kanban-guide and
   /kpg present the 2025 edition as current, but the PK I topic list's "WIP limits"
   wording echoes 2020. Assume May 2025.
5. **Exam language, open or closed book, proctoring, question types** (single vs
   multiple answer): not stated by the owner.
6. **The licence conflict inside the Guide** (CC BY-SA 4.0 footer vs CC BY 4.0
   "License" section). This is verified as a conflict; which one the licensors intend
   is not. Both are tier B.
7. **Whether PK I draws on the Kanban Guide for Scrum Teams.** No ProKanban page
   mentions it, so I found no evidence either way. Also, the Scrum.org landing page
   returned 403. I used the S3-hosted January 2021 PDF found by web search and could
   not confirm there is no later edition.
8. **The KANBAN US trademark** (Kanban International, LLC, serial 97322273). Seen only
   in search-result snippets; uspto.report returned 403.
9. **Cumulative flow diagram reading rules** (vertical = WIP, horizontal = approximate
   cycle time, slope = throughput). No fetched source states them fully. S8 gives only
   that a CFD can show WIP, approximate average cycle time and average throughput.
10. **Aging WIP chart definition.** It is only named in S7, never defined.
11. **ProKanban's "Common Kanban system elements"** (PK I area 6). No list is published.

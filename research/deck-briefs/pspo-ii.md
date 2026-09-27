# Research brief: Professional Scrum Product Owner II (PSPO II)

Slug: `pspo-ii`. Family prefix: `pspo2`. Researched 27 September 2026.

**Builds on:** `prerequisiteDecks: ["scrum-pspo"]` (which itself builds on
`scrum-guide`). All 64 terms in `scrum-pspo-terms.json` (the 31 Scrum Guide
terms and the 33 PSPO I terms) are registered at topic 0 in
`pspo-ii-terms.json`, under their `scrum.*` and `pspo.*` concept ids. Writers
use them and never re-teach them. The 126 PSPO I concepts are not repeated
here. This deck goes deeper in two ways. It adds the Scrum Guide, EBM and
Nexus rules that PSPO I left out. It also adds scenario cards that make the
learner apply both decks' rules to Product Owner decisions.

**How the sources were read.** scrum.org is on the no-fetch list, so no
scrum.org page was fetched in this task. The three open guides were read in
full from the cached copies in `research/sources/scrum-pspo/` and
`research/sources/scrum-guide/`. Their licence lines were checked in the
cached text (see Naming). One new source was fetched: the Wikipedia article
"Business model canvas", for the business-modelling focus area (see Sources).
Strategyzer, which owns the canvas, was checked first and rejected (see Not
verified).

## Topics and budget

| Topic | Name | Concepts | Budget | Of which scenarios |
|---|---|---|---|---|
| T0 | PSPO I and Scrum Guide decks (prerequisites) | 0 new | 0 | n/a |
| T1 | Product Owner accountability and decision authority | 14 | 42 | 25 |
| T2 | Value-driven decisions and experiments | 18 | 59 | 32 |
| T3 | Key Value Areas and measures in practice | 26 | 73 | 37 |
| T4 | Vision, strategy, goals and the business model | 14 | 50 | 24 |
| T5 | Stakeholders and customers | 9 | 29 | 18 |
| T6 | Product Backlog management and ordering | 9 | 35 | 26 |
| T7 | Forecasting and release planning | 10 | 33 | 22 |
| T8 | Scaling with Nexus | 38 | 79 | 30 |
| | **Total** | **138** | **400** | **214** |

**How the budget was counted.** The BRIEF.md rule gives one primer per term
and one fact per rule, number, procedure or contrast. A set with more than 3
members gets one card per member. Each core concept gets one application
card, and every application card in this deck is a **scenario**: a short,
original situation in which a Product Owner has to decide something. Some
concepts also carry extra scenarios. Each concept's `scenarios` field in
`pspo-ii-concepts.json` gives its total scenario count. Nine `procedure`
concepts have the note "Scenario-only". They add no new fact. They exist to
hold judgement scenarios that apply prerequisite rules, for example Sprint
cancellation, stakeholder pressure, ordering and fixed-date requests. Their
notes name the `pspo.*` concepts they apply. Raw count 360 (214 scenarios),
plus 10% gives 400. This is inside the 350–450 range, and scenarios are about
54%.

**Where the weight falls.** T8 has the most concepts because the Nexus Guide
is short and dense, and PSPO I has only six Nexus concepts. It gets few extra
scenarios, because scaling is the last of the requested focus areas. T2 and
T3 carry the most judgement about value and measures. T5, T6 and T7 have
little new sourced fact, since PSPO I already covers the Scrum Guide rules
there. Most of their cards are scenarios.

## Exam facts

**None could be verified in this task.** The exam owner's page is on
www.scrum.org, which is on the no-fetch list, and no cached copy of the PSPO II
page exists in `research/sources/`. The only lead in the repository is the
market note `candidates-longtail/agile-business.md` §3.1. A different task
read these values from Wayback Machine snapshots of Scrum.org assessment
pages. They are recorded here only as leads to confirm:

| Fact | Lead (unverified) | Changes often? |
|---|---|---|
| Owner | Scrum.org (Advanced Development Methods, Inc.; see Naming) | No |
| Fee | $250 | **Often** |
| Questions and time | 40 questions, 60 minutes | Sometimes |
| Pass mark | 85% | Sometimes |
| Format | Multiple choice, multiple answer | Rarely |
| Preparation | "Recommends PSPO and PSPO-A courses" | Sometimes |
| Certificate holders | 24,979 (count page, May 2026) | Often |

The same note says "PSPO-A" is an instructor-led course that prepares for
PSPO II, not a separate exam. Its navigation text reads "Deepen understanding
of the many PO stances". Validity, retake rules, delivery, languages and the
list of focus areas were not found in any source this task could use. A person
who may read scrum.org has to confirm every row before the deck states any
of them.

## Naming

**Source of the naming rules.** This task did not re-read ADM's trademark
guidelines, because they are on scrum.org. The rules below are carried over
from `scrum-pspo.md` (Naming), where they were read on 25 September 2026.
Its manifest records the trademark list and guidelines as tier C. They
apply unchanged to PSPO II:

- Word marks only, in "an informational context … such as … preparation for
  ADM certification exams", shown less prominently than the programme title
  and "only in a referential context". The marks are adjectives, never nouns
  or verbs, never plural or possessive, and never abbreviated except as the
  Trademark List allows.
- No logos or badges. No marks in domain names or social handles, and none
  in "misleading meta tags or other hidden text".
- ADM's copyright text: "Use of ADM proprietary copyrighted material is
  strictly prohibited without prior approval from ADM." Scrum.org's web pages,
  including the online Nexus Guide and the learning series, are tier C:
  facts only, in our own words, linked but never quoted. Only the EBM and
  Nexus **PDFs** carry CC BY-SA.

**How CONTENT-POLICY.md §4 applies.** Scrum.org is not in §5, so the §4
general rule and the "Everyone else" notice row apply. ADM's own attribution
and disclaimer are used as well, as in the PSPO I deck. Our brand leads. The
exam name appears only to state what the deck covers, in plain text with no
badge. Nothing may claim to be "official". The focus-area outline is on an
all-rights-reserved page, so under §2.3 the deck links to it and uses its own
topic labels (the T1–T8 names above).

- **Title:** `[Site name] deck for the Scrum.org™ Professional Scrum Product
  Owner™ II (PSPO™ II) assessment`. Never "PSPO II Flashcards" and never
  "PSPO II's". The "II" follows the "I" of the PSPO I page, but this task
  could not read how the PSPO II page writes the name.
- **Path:** `/decks/scrum/pspo-ii/` is acceptable under §4. As for PSPO I,
  a lawyer should confirm that a mark in a path segment is not "hidden text".
- Keep PSPO out of meta keywords, meta descriptions and hidden structured
  data. The market note quotes ADM's ban on marks "IN ANY META TAG OR OTHER
  HIDDEN TEXT".

**Deck notice**

> Scrum.org™, Professional Scrum Product Owner™, PSPO™ and Nexus™ are
> trademarks and/or registered trademarks of Advanced Development Methods,
> Inc., d/b/a Scrum.org. This deck is independent and is not affiliated with
> Advanced Development Methods d/b/a Scrum.org (ADM), and does not constitute
> an endorsement of any product, service or point of view by ADM.

**Attribution for tier-B text** (licence lines confirmed in the cached text
in this task):
- Scrum Guide 2020: "© 2020 Ken Schwaber and Jeff Sutherland This publication
  is offered for license under the Attribution Share-Alike license of Creative
  Commons". The copyright holders are the authors, not Scrum.org. The cached
  page also carries "© 2025 ScrumGuides.org. All rights reserved." as a site
  footer, which covers the website around the Guide, not the Guide itself.
- EBM Guide, May 2024: "© 2024 Scrum.org This publication is offered for
  license under the Attribution Share-Alike license of Creative Commons".
  Figure 1 is "adapted from Mike Rother’s Improvement Kata", so credit that too.
- Nexus Guide, January 2021: "© 2021 Scrum.org. Offered for license under
  the Offered for license under the Attribution Share Alike license of
  Creative Commons". The doubled phrase is in the original, so quote it as it
  stands. "Ken Schwaber and Scrum.org developed Nexus."
- Wikipedia, "Business model canvas": "Text is available under the Creative
  Commons Attribution-ShareAlike 4.0 License" (page footer). Credit
  "Wikipedia contributors". The canvas image (File:Business Model Canvas.png)
  has its own licence, which was not checked, so do not use it until someone
  checks it.

## Outline

**The owner's outline was not read.** PSPO II's focus areas and any weights
are on www.scrum.org. So this outline follows the focus areas named in this
task's instructions, which are leads and not the owner's list. Each is
tagged with the topic that covers it:

1. Product value and value-driven decisions [T2] [T3]
2. Evidence-Based Management: the four Key Value Areas and their measures [T3] (PSPO I teaches each example measure; this deck teaches the contrasts between measures, classifying measures, and how to use them)
3. Product vision, strategy and goals [T4] (EBM goal levels, purpose and goals, goal classification)
4. The Product Goal [T4] [T6] (`pspo2.product-goal-judgement`, `pspo2.increment-stepping-stone`)
5. Stakeholder and customer management [T5] [T1]
6. Product Backlog management and ordering [T6]
7. Forecasting and release planning [T7]
8. Business modelling [T4] (business model canvas, from Wikipedia; all `extra`)
9. The Product Owner's stances and accountability [T1] (accountability only: see Not verified for stances)
10. Scaling with Nexus [T8]

Ten outline items. Every item maps to at least one concept.

**Sources per topic.** T1, T5, T6 and T7 rest on the Scrum Guide. T2 and T3
rest on the EBM Guide 2024. T4 draws on the EBM Guide, the Scrum Guide and
Wikipedia. T8 rests on the Nexus Guide 2021. All are tier B. No concept rests
on a tier-C page. The learning-series pages in `pspo-ii-sources.json` are
listed by name only, so the deck can link to them for further reading.

**Figures.** EBM Guide Figure 1 (experiment loop, `#page=4`) goes with
`pspo2.complex-small-steps`. Nexus Guide Figure 1 (`#page=5`) is CC BY-SA
and may be shown with T8 primers. EBM Figure 2 already belongs to PSPO I.

**Guidance for scenario writers.**
- Scenarios are original situations, never exam questions or recalled exam
  content (CONTENT-POLICY §2.1).
- The EBM Guide's infectious-disease example is the Guide's own exercise.
  Cite it, but write new goal-classification scenarios instead of reusing it.
- The 2020 Scrum Guide gives **no ordering criteria**. An ordering scenario
  may rest only on sourced reasons: value and hypotheses (EBM), Product Goal
  fit, dependencies (Nexus), and technical debt as waste and risk (EBM).

## Traps

- [T1] The Product Owner "proposes" how the Sprint could increase value, but "the whole Scrum Team" defines the Sprint Goal. It "must be finalized prior to the end of Sprint Planning".
- [T1] How items become an Increment is "at the sole discretion of the Developers. No one else tells them how", and that includes the Product Owner.
- [T1] Delegation is not a committee. The Product Owner "may delegate the responsibility to others" and "remains accountable", but is "one person, not a committee".
- [T2] Spending more is not delivering more: inputs have "no correlation" with the value customers experience.
- [T2] Impacts (revenue, share price) can rise while outcomes fall, which "usually harms the organization". Impacts are only sustainable through improved customer outcomes.
- [T2] A failed experiment "is not a bad thing". The Product Owner adapts from it and does not hide it.
- [T2] Features need not be fully built to test their value. Build "enough of it to validate critical assumptions".
- [T3] Lead Time starts "when an idea is proposed, or a hypothesis is formed". Customer Cycle Time starts "when work starts on a release". Lead Time for Changes runs from "code-committed to code successfully running in production".
- [T3] Mean Time to Repair runs from error detected to fixed. Time to Restore Service runs from "the start of a service outage" to full availability. Both are Time-to-Market measures.
- [T3] Employee Satisfaction is a Current Value measure, but Employee Engagement is an Ability to Innovate measure.
- [T3] Customer Satisfaction is Current Value. Customer or User Satisfaction Gap is Unrealized Value.
- [T3] Production Incident Count, Change Failure Rate, Technical Debt and Defect Trends are Ability to Innovate measures, not Time-to-Market.
- [T3] Build and Integration Frequency "is superseded by actual release measures" for a team that releases often.
- [T3] Improving only A2I and T2M while ignoring CV and UV means focusing on internal process. Immediate Tactical Goals "should improve Current Value and reduce Unrealized Value".
- [T4] EBM's Vision Statement is "the change that the organization wants to make in the world". Its Mission Statement is why the organisation "is uniquely capable" of it. PSPO I's tier-C wording from the Business Strategy page differs, so writers should cite the EBM wording.
- [T4] The business model canvas has nine blocks, "key partnerships" among them. The same article later calls this block "Partner network", so use the list name.
- [T5] The Sprint Review covers "what has changed in their environment" as well as what was built. Attendees "collaborate on what to do next".
- [T6] "Ready for selection" means an item "can be Done by the Scrum Team within one Sprint". Readiness is not a Scrum artifact or commitment.
- [T6] The Developers select the Sprint's items "through discussion with the Product Owner". The Product Owner does not assign them.
- [T7] The smallest release improves value for "some subset of the customers/users", not for all of them.
- [T7] An Increment "is born" the moment an item meets the Definition of Done, not at the Sprint Review.
- [T8] The Nexus Sprint Review "replaces individual Scrum Team Sprint Reviews". Team Daily Scrums and team Retrospectives still happen and complement the Nexus events.
- [T8] In plain Scrum, several teams "mutually define" one Definition of Done. In Nexus, the Nexus Integration Team "is responsible for" it, and teams may be stricter but "cannot apply less rigorous criteria".
- [T8] Nexus Integration Team membership "takes precedence over individual Scrum Team membership".
- [T8] The Nexus Integration Team has "a Scrum Master", who "may also be a Scrum Master in one or more of the Scrum Teams".
- [T8] Scaling does not always mean more people: "Scaling-down … can be an important practice in delivering more value."
- [T8] Nexus Sprint Planning produces four things: the Nexus Sprint Goal, a Sprint Goal for each team, one Nexus Sprint Backlog, and a Sprint Backlog for each team.

## Languages

The exam's languages were not verified (scrum.org is on the no-fetch list).
All four sources used here are English. The PSPO I brief records search
results showing Polish and Dutch 2024 EBM PDFs and Spanish 2021 Nexus PDFs on
Scrum.org's S3 bucket. They were not fetched or checked there or here.

## Not verified

- **Every exam fact** (fee, question count, time, pass mark, format, retakes,
  validity, languages). The only leads are the unverified values in the
  market note above. Tried: no cached PSPO II page in `research/sources/`,
  and scrum.org may not be fetched.
- **PSPO II focus areas and weights.** The outline follows the leads given
  in this task, not the owner's list.
- **Product Owner stances.** No usable source names or defines them. The
  cached guides do not mention stances. The only mention found is the
  market note's quote from Scrum.org's navigation ("the many PO stances").
  The stance names were not written from memory. T1 covers accountability
  only. A stances topic needs a tier-B source first.
- **Business modelling beyond the canvas.** Strategyzer's Terms of Service
  (https://www.strategyzer.com/legal/terms-of-service, read in this task)
  say "you agree not to … create derivative works based on the Strategyzer
  AG Services, such as Content". That makes strategyzer.com pages tier D. The
  Wikipedia article's claim that the canvas "is distributed under a Creative
  Commons license" cites a Strategyzer support page that was not opened.
  Whether the PSPO II exam tests the canvas at all is unknown, so all its
  concepts are `extra`.
- **Product vision techniques and ordering techniques.** The Scrum.org
  learning series cover these, but they are tier C (names only) and were not
  read. No tier-B source was found for them in the time available.
- **Licence lines of the tier-C Scrum.org pages** in `pspo-ii-sources.json`
  are copied from the PSPO I manifest, not re-read.
- **Scrum Guide anchors** are reused from the earlier briefs and not
  re-checked against the live HTML.

**Where this task's leads were wrong or incomplete.** The three guide
licences were as stated, "B · CC BY-SA 4.0". But the Scrum Guide's copyright
belongs to Ken Schwaber and Jeff Sutherland, not Scrum.org, and the Nexus
Guide's licence sentence repeats a phrase. "Product Owner stances" and
"business modelling" have no source in the cached copies. The first brief
asked for a self-contained personal deck. That was replaced by a published
deck built on `scrum-pspo`.

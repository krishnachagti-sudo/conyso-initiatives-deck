# Research brief: Professional Scrum Master II (PSM II)

Slug: `psm-ii`. Family prefix: `psm2`. Researched 27 September 2026.

> **Deck notice.** Scrum.org™, Professional Scrum Master™, PSM™ and Nexus™ are
> trademarks and/or registered trademarks of Advanced Development Methods,
> Inc., d/b/a Scrum.org. This deck is independent and is not affiliated with
> Advanced Development Methods d/b/a Scrum.org (ADM), and does not constitute
> an endorsement of any product, service or point of view by ADM.

**How this was researched.** www.scrum.org was not fetched at all: its
guidelines say "Scraping of the www.scrum.org website is strictly prohibited"
(quoted in `scrum-pspo.md`). The four Scrum.org guides were read from the copies
already cached in `research/sources/` (their PDFs come from Scrum.org's S3
bucket, not the website). Fetched in this task, with a generic User-Agent:
`https://agilemanifesto.org/`, `https://agilemanifesto.org/principles.html`,
`https://scrumguides.org/scrum-guide.html` (to read the HTML anchor ids; its
SHA-256 `64aade68…` matches the cached copy in `research/sources/scrum-guide/manifest.json`)
and `https://scrumguides.org/revisions.html`. Saved text is in the scratch folder
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/psm-ii/`.

**Prerequisite decks.** `prerequisiteDecks: ["scrum-guide", "scrum-pspo"]`. The 64
terms of `scrum-pspo-terms.json` (which include the 31 `scrum-guide` terms) are
registered at topic 0 in `psm-ii-terms.json` under their `scrum.*` and `pspo.*`
concept ids. They are not re-taught. The PSPO concepts already cover the Product
Owner, Nexus basics and EBM's goals, KVAs and example measures, so this deck
adds only what a Scrum Master is judged on. Scenario cards may still draw on
those prerequisite concepts. Two `psm2` concepts deliberately restate a
prerequisite rule from the Scrum Master's side; each has a note naming the
`pspo` concept it applies.

## Topics

| Topic | Name | Main source |
|---|---|---|
| T1 | Empiricism, Scrum values and agility | Scrum Guide (theory, values); Agile Manifesto and principles |
| T2 | The Scrum Master accountability | Scrum Guide `#scrum-master`; revision history (2017 wording) |
| T3 | Coaching the Developers in self-management | Scrum Guide (team, Developers, Daily Scrum, Sprint Backlog); revision history |
| T4 | Serving the Product Owner and stakeholders | Scrum Guide `#scrum-master`, `#sprint-planning`, `#sprint-review` |
| T5 | Facilitating the events and handling dysfunctions | Scrum Guide `#scrum-events` to `#sprint-retrospective`, `#end-note` |
| T6 | Serving the organisation | Scrum Guide `#scrum-master`, `#scrum-team`, `#purpose-of-the-scrum-guide` |
| T7 | Scaling with Nexus | Nexus Guide 2021 (PDF pages 2–10) |
| T8 | Evidence-Based Management for Scrum Masters | EBM Guide 2024 (PDF pages 3–12) |
| T9 | Kanban with Scrum | Kanban Guide for Scrum Teams 2021 (PDF pages 3–8) |

PDF page numbers were checked by counting form feeds. In all three PDFs the
printed page number equals the PDF page.

## Exam facts

**None could be verified.** Every exam fact (price, question count, time
limit, pass mark, format, languages, retake rules, validity) lives only on
`https://www.scrum.org/assessments/professional-scrum-master-ii-certification`
or similar Scrum.org pages. Those pages are on the no-fetch list and are not in
any cached manifest. The PSPO I facts in `scrum-pspo.md` do not transfer to
PSM II. Before release, a person should read the PSM II page in a browser and
fill in this table with quotes. Facts that change often on Scrum.org pages
(from the PSPO I research): price, practice assessments and the credential
provider. Question count, time and pass mark change sometimes.

| Fact | Value | Quote and URL |
|---|---|---|
| Owner | Scrum.org (Advanced Development Methods, Inc.) | "Advanced Development Methods, Inc. d/b/a Scrum.org (“ADM”)", quoted in `scrum-pspo.md` from https://www.scrum.org/scrumorg-trademarks-and-copyrights |
| Questions, time, pass mark, price, format, retakes, validity, prerequisites | Not verified | — |
| Scrum Guide version | The 2020 Guide is the current one: "The 2020 Scrum Guide TM … a direct port of the November 2020 version" | https://scrumguides.org/scrum-guide.html |

## Naming

- **Marks.** Scrum.org's own guidelines use PSM in their worked example:
  "Correct: This training is intended to help you prepare for the Scrum.org™
  PSM™ I assessment." and "Incorrect: This PSM I training…" (quoted in
  `scrum-pspo.md` from the TM and © Guidelines). The Nexus Guide writes
  "Nexus™" (cached PDF, page 1). Whether "Professional Scrum Master II" and
  "PSM II" are on ADM's trademark list, and with which symbol, was not
  checked (see Not verified). This brief follows the PSPO deck and uses ™.
- **Usage terms** (recorded in `scrum-pspo.md` from ADM's guidelines): marks
  only "in an informational context", "less prominently than the rest of the
  program title", "only in a referential context"; as adjectives, never
  plural or possessive; no logos or badges; no marks in domains, social
  handles, meta tags or hidden text; "Use of ADM proprietary copyrighted
  material is strictly prohibited without prior approval from ADM."
- **How CONTENT-POLICY.md §4 applies.** Scrum.org is not in §5, so the §4
  general rule and the "Everyone else" row apply, plus ADM's own disclaimer
  (the deck notice above, same form as the PSPO deck's). Our brand leads; the
  mark is plain text, adjectival and less prominent; no badge; no
  "official". Title: `[Site name] deck for the Scrum.org™ Professional Scrum
  Master™ II (PSM™ II) assessment`. Never "PSM II Flashcards", never "PSM's".
  URL path `/decks/scrum/psm-ii/` is acceptable under §4 (the same open
  question as PSPO: whether ADM's hidden-text rule reaches a path segment).
  No Scrum.org outline is copied (§2.3): the deck links to the assessment
  page and uses its own topic labels.
- **Attribution for tier-B text.** Scrum Guide: "© 2020 Ken Schwaber and Jeff
  Sutherland", CC BY-SA 4.0 (the authors, not Scrum.org, hold it). Nexus
  Guide: "© 2021 Scrum.org", CC BY-SA 4.0. EBM Guide: "© 2024 Scrum.org", CC
  BY-SA 4.0. Kanban Guide for Scrum Teams: "© 2021 Scrum.org", CC BY-SA 4.0;
  its title page says "Developed and sustained by Scrum.org, Daniel Vacanti,
  and Yuval Yeret". All four licence lines were re-read in the cached text.
- **Agile Manifesto (tier C).** Its notice reads "© 2001, the above authors
  this declaration may be freely copied in any form, but only in its entirety
  through this notice." That permits copying the whole declaration with its
  notice. It is not an open licence to adapt or quote in part, so it is tier C.
  A card may paraphrase a value statement, or a deck page may show the
  whole declaration with the notice. The principles page carries no notice at
  all: tier C, paraphrase only. The Scrum Guide revision history page is
  "© 2025 ScrumGuides.org. All rights reserved.": tier C, facts only.

## Outline

**No PSM II outline was read.** The assessment page and its list of focus
areas are on www.scrum.org (no-fetch). No weights are known. What is known,
as names only (tier C), are the three Professional Scrum Competency pages
listed in `research/sources/scrum-pspo/manifest.json`, with the focus-area
names recorded in `scrum-pspo.md`. They are mapped below to this deck's
topics. The deck covers the brief's advanced areas under its own labels.

**1. Understanding and Applying the Scrum Framework**
(`https://www.scrum.org/professional-scrum-competencies/understanding-and-applying-scrum-framework`)
- Empiricism [T1] [T5] [T8]
- Scrum Team [T2] [T3]
- Events [T5] [T3] [T4]
- Artifacts [T3] [T5] [T0]
- Done [T3] [T7] [T0]
- Scaling (recorded as on this page but not in the PSPO I list) [T7]

**2. Developing People and Teams**
(`https://www.scrum.org/professional-scrum-competencies/developing-people-and-teams-old`)
- Self-Managing Teams [T3] [T2]
- Any other focus areas (such as facilitation, coaching or leadership) were
  not recorded and are not verified. The deck covers coaching, facilitation
  and leadership through the Scrum Guide's Scrum Master text [T2] [T4] [T5] [T6].

**3. Managing Products with Agility**
(`https://www.scrum.org/professional-scrum-competencies/managing-products-with-agility`)
- Forecasting & Release Planning [T4] [T9] [T0]
- Product Vision [T0]
- Product Value [T8] [T0]
- Product Backlog Management [T4] [T0]
- Business Strategy [T8] [T0]
- Stakeholders & Customers [T4] [T6]

**Deck areas with no verified outline item:** the Agile Manifesto and its
principles [T1]; Kanban with Scrum [T9]; serving the organisation [T6].

Counts: 3 competencies and 13 recorded focus areas, **16 outline items**. Each
maps to at least one concept in `psm-ii-concepts.json` or in a prerequisite
deck (T0).

**Figure.** Nexus Guide Figure 1, "The Nexus Framework" (`#page=5`), is attached to
`psm2.nit-accountable`. It is inside the CC BY-SA PDF. No Kanban figure is used:
the Little's Law equation is an image and is missing from the text extract, so
the writer must read it from the PDF (`#page=4`).

## Budget

450 cards: T1 58, T2 51, T3 57, T4 43, T5 61, T6 36, T7 48, T8 31, T9 65.

Method: BRIEF.md's count (a primer per term, a fact per rule or number, one
card per member of a set over 3 members, one application per core concept,
one contrast per contrast concept), plus 10%. That gives 356 cards, about 134 of them
applications. Then **94 extra scenario cards** are added in the judgement
topics (T1 2, T2 18, T3 16, T4 18, T5 14, T6 16, T7 4, T8 4, T9 2). They may
draw on this deck's concepts or the prerequisite decks' (for example: a
stakeholder edits the Product Backlog, `pspo.po-convince-to-change`; a
manager asks the Scrum Master to cancel the Sprint, `pspo.po-cancels-sprint`).
Writing every application card as a scenario puts roughly 51% of the deck in
scenarios. Scenarios must be the writers' own (DIGEST.md): nothing from
Scrum.org courses, open assessments or any recalled exam question.

Priorities: 122 of 151 concepts are core. Nexus and Kanban details that a
Scrum Master applies less often are `extra`. Sets over 3 members: Scrum values
(5), Manifesto values (4), Manifesto principles (12), ways the Scrum Master
serves the team (4) and the organisation (4), Daily Scrum benefits (4), what
the Retrospective inspects (5), Nexus Sprint Planning results (4), A2I
impediments (4), flow metrics (4), Kanban practices (4), visualisation
contents (5).

## Traps

- [T2] The 2020 Guide says Scrum Masters are "true leaders who serve the Scrum Team and the larger organization". "Servant-leader" is the 2017 wording ("The Scrum Master is a servant-leader for the Scrum Team", revision history). Older material is still in circulation.
- [T2] The Scrum Master is "accountable for the Scrum Team's effectiveness", but does so "by enabling the Scrum Team to improve its practices, within the Scrum framework". It does not manage the team.
- [T2] The Scrum Master is "Causing the removal of impediments". Causing the removal is not the same as removing every impediment personally. Coaching the team to remove its own impediments fits the self-management coaching duty.
- [T2] [T5] The Scrum Master ensures events "take place and are positive, productive, and kept within the timebox". The Scrum Guide does not require the Scrum Master to run or attend the Daily Scrum: it is "an event for the Developers".
- [T3] Self-managing (2020) means deciding "who does what, when, and how". The revision history contrasts this with self-organizing (earlier Guides), where Development Teams chose "who and how". Self-managing adds "what".
- [T3] "Development Team" and a separate team within the team no longer exist. The 2020 Guide aimed to end "proxy" or "us and them" behaviour between the PO and the Dev Team.
- [T3] The three Daily Scrum questions were removed in 2020. The Developers "can select whatever structure and techniques they want".
- [T3] "Quality does not decrease" during the Sprint, and Developers "are required to conform to the Definition of Done". Pressure to skip quality to meet a date is a dysfunction to address, not a trade-off the Scrum Master can agree to.
- [T4] The Scrum Master facilitates stakeholder collaboration "as requested or needed", and helps "find techniques" for the Product Goal and backlog. The Product Owner stays accountable.
- [T4] The Sprint Goal is defined by "the whole Scrum Team", and "must be finalized prior to the end of Sprint Planning".
- [T5] "Failure to operate any events as prescribed results in lost opportunities to inspect and adapt." Skipping a Retrospective because "nothing changed" is a classic wrong answer.
- [T5] Improvements "may even be added to the Sprint Backlog for the next Sprint". "May" matters: the 2020 Guide softened the older rule on retrospective items (revision history).
- [T5] "Inspection without adaptation is considered pointless", and "Inspection without transparency is misleading and wasteful".
- [T6] [T5] Scrum is "purposefully incomplete" and "immutable". Adding complementary practices is fine ("container for other techniques"). Dropping or changing an element means "the result is not Scrum".
- [T6] Too-large teams "should consider reorganizing into multiple cohesive Scrum Teams, each focused on the same product". That is sharing one Product Goal, Product Backlog and Product Owner, not one team per component.
- [T7] Nexus is "approximately three to nine Scrum Teams" (`pspo.nexus-size`). The Nexus Sprint Review "replaces individual Scrum Team Sprint Reviews", but team Daily Scrums and Retrospectives still happen.
- [T7] A team may use "a more stringent Definition of Done" but "cannot apply less rigorous criteria than agreed for the Integrated Increment".
- [T7] "Membership in the Nexus Integration Team takes precedence over individual Scrum Team membership."
- [T7] "Scaling-down, reducing the number of people who work on something, can be an important practice in delivering more value." Adding people is not the default answer.
- [T8] "Positive Impacts are only sustainably achievable when customers experience improved outcomes." Improving A2I and T2M alone, "without monitoring CV and UV", focuses only on internal processes.
- [T8] A failed experiment "is not a bad thing"; the learning feeds new experiments.
- [T9] Kanban with Scrum "does not require any additional events", and does not remove the Sprint. It is "a common misconception that teams can only deliver value once per Sprint": they "must deliver value at least once per Sprint".
- [T9] "If cycle times are too long, the first action Scrum Teams should consider is lowering WIP."
- [T9] The WIP metric is different from "the policies a Scrum Team uses to limit WIP". Work Item Age applies "only to items that are still in progress"; Cycle Time is for finished items.
- [T9] "No one outside of the Scrum Team should tell the Scrum Team how to define their Workflow."
- [T9] Two Kanban guides exist: the Kanban Guide for Scrum Teams (2021, Scrum.org) and the separate Kanban Guide (ProKanban.org, 2025, taught in the `kanban-guide` deck). Their definitions differ in wording. This deck cites only the Scrum Teams guide.
- [T1] "While there is value in the items on the right, we value the items on the left more": the Manifesto does not reject processes, documentation, contracts or plans.

## Languages

No PSM II language information could be read (Scrum.org no-fetch). The PSPO I
page listed English, Japanese and Simplified Chinese (`scrum-pspo.md`); that
may not apply to PSM II. The Agile Manifesto page links 68 language versions (English included); their notices were not checked. Scrum Guide, Nexus,
EBM and Kanban-for-Scrum-Teams translations were not checked.

## Not verified

- **All PSM II exam facts and the PSM II focus-area list.** They are on
  www.scrum.org, which was not fetched. A person should read the assessment
  page in a browser before release.
- **Other Developing People and Teams focus areas** (such as facilitation,
  coaching and leadership styles) and the Scrum Master "stances" model. No
  cached or openly licensed source contains them. The deck teaches coaching,
  facilitation and leadership only through the Scrum Guide text.
- **How the competency names were obtained.** `scrum-pspo.md` says the
  Scrum.org pages were read through the `r.jina.ai` reader. BRIEF.md now
  forbids proxy readers. The names are used here as tier-C labels only; a
  person should confirm them directly.
- **Trademark status and symbols** for "Professional Scrum Master", "PSM" and
  "PSM II" on ADM's trademark list.
- **Whether PSM II uses the 2024 EBM Guide, the 2021 Nexus Guide and the 2021
  Kanban Guide for Scrum Teams.** No owner page was read that names them.
- **Little's Law equation.** It is an image in the Kanban PDF (`#page=4`) and
  is missing from the text extract.

## Leads in the prompt

- The four Scrum.org guides are CC BY-SA 4.0, as stated: confirmed in the
  cached text of each.
- The Agile Manifesto's notice is not an open licence. It allows copying only
  "in its entirety through this notice", so the Manifesto is tier C, and the
  principles page has no notice at all.
- The original instruction (a personal, self-contained deck) was superseded:
  the deck is published and builds on `scrum-guide` and `scrum-pspo`.
- "Competency names cited from research/sources/scrum-pspo/manifest.json":
  the manifest has the page URLs but no names or text (`path: null`). The
  names come from `scrum-pspo.md`.

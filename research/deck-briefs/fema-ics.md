# Research brief: FEMA ICS and NIMS independent study courses (IS-100.c, IS-200.c, IS-700.b, IS-800.d)

Slug: `fema-ics`. Researched 25 September 2026 (a resumed run; files saved by the
interrupted run were re-used only after being re-read and re-checked). Every fact below
was read in a source downloaded during this task. Raw copies and extracted text are in
the scratch folder
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/fema-ics/`
(file names given as `[file]`; `live/` holds today's second fetches).

**One deck, four groups.** The deck covers four separate FEMA Independent Study (IS)
courses, each with its own online final exam and certificate. The topics are grouped in
course order, like subdecks:

| Group | Course | Topics |
|---|---|---|
| A | IS-100.c An Introduction to the Incident Command System, ICS 100 | T1–T4 |
| B | IS-200.c Basic Incident Command System for Initial Response, ICS 200 | T5–T10 |
| C | IS-700.b An Introduction to the National Incident Management System | T11–T16 |
| D | IS-800.d National Response Framework, An Introduction | T17–T20 |

IS-200.c lists IS-100.c as a prerequisite, and IS-800.d recommends IS-700. So B assumes
A, and D assumes C. The topics are in teaching order, and a term is introduced once, in
the first topic that needs it. For example, Unified Command is taught in T2 (IS-100.c)
and deepened in T5 (IS-200.c) and T13 (IS-700.b).

How sources were read:
- **PDFs.** Extracted with `pdftotext` (plain and `-layout`); page numbers below are **PDF
  page numbers** (form-feed count), which is what `#page=N` opens. The printed "SM-N"
  footer equals the PDF page in the IS-100.c manual. It is **one less** than the PDF page
  in the IS-200.c and IS-700.b manuals (for example, IS-200.c PDF p. 194 is printed
  "SM-193").
- **IS-100.c and IS-200.c manuals.** Taken from the official course-material ZIPs (the
  student manual PDF inside each ZIP is byte-identical to the copy saved as
  `SM100c.pdf` / `SM200c.pdf`). The ZIP is the only official URL for these manuals, so
  cards cite the ZIP URL plus "Student Manual, Lesson N, Visual N, SM-page".
- **training.fema.gov pages.** Fetched twice (the interrupted run, and again today into
  `live/`); every exam fact below was present in both fetches.
- **fema.gov.** Pages and PDFs on www.fema.gov were fetched by the interrupted run
  (`nimspage`, `nrfpage`, `lifelines`, `corecap`, `glossary`, `webinfo`, NRF and NPG
  PDFs). Today www.fema.gov answers **403 Access Denied** (Akamai) to this environment for
  every request, so they could not be fetched a second time. See §10.
- **Checking.** The concept inventory (§4) is generated from
  `scratchpad/fema_concepts.py`. A checker (`scratchpad/fema_verify.py`) compared the
  content words of every definition with the text of the cited pages (±2 pages). 450 of
  473 matched on 75% or more of their words. The other 23 were read by hand against the
  source: all were paraphrases (different verb forms) of text that is there, and one
  (lifelines) was corrected.

---

## 1. Exam facts

**Owner.** FEMA's Emergency Management Institute runs the Independent Study Program. The
training site now brands itself "NDEMU" (the page title reads "NDEMU | Independent Study
Program"), and its footer reads "training.fema.gov An official website of the U.S.
Department of Homeland Security". The course pages say: "The Emergency Management
Institute developed its ICS courses collaboratively with: National Wildfire Coordinating
Group (NWCG) · U.S. Department of Agriculture · United States Fire Administration's
National Fire Programs Branch". [`IS-100.c.txt`, `live/IS-100.c.txt`]

Course page URL pattern (each fetched twice):
`https://training.fema.gov/programs/independent-study/courseoverview.aspx?code=<CODE>&lang=en`

| Fact | IS-100.c | IS-200.c | IS-700.b | IS-800.d | Volatile |
|---|---|---|---|---|---|
| Full title (course page) | Introduction to the Incident Command System, ICS 100 | Basic Incident Command System for Initial Response, ICS-200 | An Introduction to the National Incident Management System | National Response Framework, An Introduction | no |
| "Course Date" (course page) | 6/25/2018 | 3/11/2019 | 6/25/2018 | 5/6/2020 | yes |
| Student manual release | "Date Released: 03/2025" [`SM100c.p.txt`] | "Date Released: 09/2020" [`SM200c.p.txt`] | "Date Released: 06/2020" [`SMIS0700b.p.txt`] | no manual (see below) | yes |
| Plan of instruction | "Date Released: 03/2025" [`POI100c.txt`] | "Date Released 3/2019" [`POI200c.txt`] | "Date Released: 06/2020" [`POIIS0700b.txt`] | none published | yes |
| "Course Length" | 2 hours | 4 hours | 3.5 hours | 3 hours | yes |
| "CEUs" | 0.2 | 0.4 | 0.4 | 0.3 | yes |
| "Prerequisites" | None | "IS-100.c An Introduction to the Incident Command System (ICS 100)." | none | "Recommended: IS-0700, An Introduction to the National Incident Management System" | no |
| Course material online | "Interactive Web Based Course" + classroom ZIP | same | same + separate PDFs | **"IS-800.d Online Course is Temporarily Unavailable"** | **yes** |

**IS-800.d is exam-only today.** The course page says: "IS-800.d Online Course is
Temporarily Unavailable — students should download and review the National Response
Framework and review the National Response Framework document. You may then take the
IS-800.d online exam for a completion certificate". The link points to
`www.fema.gov/emergency-managers/national-preparedness/frameworks/response`. Its
materials page lists no files. [`live/IS-800.d.txt`, `mat800.txt`] So Group D is built
from the NRF itself (Fourth Edition, 28 October 2019).

**Format.** Multiple choice, online.
- "To receive a certificate of completion, you must take the multiple-choice Final Exam
  and score at least 75 percent on the test." [`SM100c.txt` SM-p. near end; the same
  sentence is in `SM200c.txt` and `IG100c.txt`; IS-700.b: "students must take the
  multiple-choice Final Exam, and score 75 percent on the test." `SMIS0700b.txt`]
- POIs: "An online multiple-choice course exam shall be administered after the course
  completion. The exam measures and assesses the student's learning of the course's
  content. Exam items will be linked to the course objectives." [`POI100c.txt`,
  `POI200c.txt`; IS-700.b adds: "For the Instructor-Led Training version of the course, a
  Pre-test will be administered at the beginning of the course in addition to the Final
  Exam." `POIIS0700b.txt`]
- Every course page: "Test questions are scrambled to protect test integrity".
- Exams need a FEMA SID: "Independent Study Exams require a FEMA Student Identification
  Number (FEMA SID)" and "Independent Study Exams use Login.gov". [IS FAQ]

**Pass mark: 75%.** This is confirmed, in two fetches of the IS FAQ
(`https://training.fema.gov/programs/independent-study/isfaq.aspx?lang=en`,
[`isfaq.txt`, `live/isfaq.html`]): "Our exams are based upon pass/fail criteria with the
benchmark for successful completion set at 75%." Every course manual's objectives slide
also says: "Achieve 75% or higher on the final exam." [`SM100c.txt`, `SM200c.txt`,
`SMIS0700b.txt`]

**Number of questions: not published.** It is not on any course page, manual,
instructor guide, POI or FAQ read (see §10).

**Time limit: none published for the online exam.** The instructor-led IS-100.c agenda
gives "Final Exam (1 hour)" [`IG100c.txt`]. That is classroom time, not an online limit.

**Retakes.** From the same FAQ answer: "Our program does not limit your exam attempts.
Please be aware that online exams are scrambled, and the questions may change when you
take the final exam." Also: "To maintain the integrity of our courses, we do not
distribute test scores or questions missed."

**Certificate.** "Upon successful completion of an Independent Study (IS) exam, your
training record is updated in the NDEMU Student Portal where you can view, download,
save and print your electronic certificate". [IS FAQ]

**Validity.** No expiry is stated anywhere read. There is one equivalence statement, on
the IS-200.c page: "IS-200.c is an updated version of the IS-200 course. If you have
successfully completed IS-200.b or IS-200.a, you may want to review the new version of
the course. For credentialing purposes, the courses are equivalent." The same page adds:
"This course is NIMS compliant and meets the NIMS Baseline Training requirements for
IS-200."

**CEUs.** "0.1 CEU = 1 Contact Hour or 1 hour of instruction/learning." [IS FAQ]

**Cheating.** The penalty "may include, but is not limited to: expulsion; foreclosure
from future classes for a specified period; forfeiture of certificate…". [IS FAQ]

**What changes often.** These facts are volatile; date every card that uses them:
- IS-800.d's availability;
- the course and manual dates;
- CEUs and course lengths;
- the portal and sign-in names (NDEMU Student Portal, Login.gov, FEMA SID);
- the lifelines count (§7).

The 75% benchmark and unlimited attempts are stable across both fetches and all
manuals, but they are programme policy, so still date them. Our deck page, not the cards, should carry
the exam facts; the registry keeps them out of the term list, and they appear in §4
T1 as `extra`, volatile concepts.

---

## 2. Sources

Licence tiers follow CONTENT-POLICY.md §3.

| # | Title (file) | URL | Publisher | Licence as quoted from the source | Tier | Use |
|---|---|---|---|---|---|---|
| S1 | IS-0100.c Student Manual, March 2025 (inside the course ZIP) [`SM100c.txt`] | https://training.fema.gov/programs/independent-study/_course-files/is-100.c/English/IS-0100c_complete-course.zip | FEMA EMI | IS FAQ, "Are NDEMU Course materials copyrighted?": "Unless otherwise indicated in the course materials, under 17 USC § 105 these government produced materials are not afforded copyright protection and are within the public domain." No copyright notice appears in any manual text (grep for "copyright", "©"). | B · public domain (US Government work) | Group A cards; org-chart figures |
| S2 | IS-0200.c Student Manual, September 2020 (in ZIP) [`SM200c.txt`] | https://training.fema.gov/programs/independent-study/_course-files/is-200.c/English/IS-200c-complete-course.zip | FEMA EMI | as S1 | B | Group B cards; ICS 201, org charts, incident typing |
| S3 | IS-0700.b Student Manual, June 2020 [`SMIS0700b.txt`] | https://training.fema.gov/programs/independent-study/_course-files/is-700.b/Student%20Manual/SMIS0700b.pdf | FEMA EMI | as S1 | B | Group C cards |
| S4 | National Incident Management System, Third Edition, October 2017 [`NIMS2017.txt`] | https://training.fema.gov/programs/independent-study/_course-files/is-700.b/Handouts/National_Incident_Management%20System_Third%20Edition_October_2017.pdf (the same document is linked from https://www.fema.gov/emergency-managers/nims as `/sites/default/files/2020-07/fema_nims_doctrine-2017.pdf`) | FEMA / DHS | US Government work (17 USC § 105). fema.gov "Reuse and Copyright": "Most material on FEMA.gov is free of copyright and may be copied and distributed without permission." The IS FAQ statement covers it as an IS-700.b handout. No copyright notice in the text. | B | Glossary definitions (pp. 71–81), figures, all Group C and many A/B definitions |
| S5 | National Response Framework, Fourth Edition, 28 October 2019 [`NRF2019.txt`] | https://www.fema.gov/sites/default/files/documents/NRF_FINALApproved_2011028.pdf (linked from https://www.fema.gov/emergency-managers/national-preparedness/frameworks/response) | DHS | fema.gov "Reuse and Copyright" as above. The page adds: "We sometimes use photos or graphics that we licensed or that are restricted. Check to see if there is a copyright or photo credit." No credit or copyright notice in the NRF text. | B | Group D; lifelines, ESF table |
| S6 | NIMS 2017 Learning Materials (slides) [`NIMS2017_ISLM.txt`] | https://training.fema.gov/nims/docs/NIMS.2017.Instructor%20Student%20Learning%20Materials.pdf | FEMA EMI | as S1 | B | What changed from NIMS 2008 (traps) |
| S7 | IS FAQ [`isfaq.txt`, `live/isfaq.html`] | https://training.fema.gov/programs/independent-study/isfaq.aspx?lang=en | FEMA EMI | as S1 | B | Pass mark, attempts, licence statement |
| S8 | Course overview pages (4) [`IS-*.txt`, `live/`] | courseoverview.aspx?code=IS-100.c / IS-200.c / IS-700.b / IS-800.d (&lang=en) | FEMA EMI | as S1 | B | Objectives, dates, prerequisites |
| S9 | IS course list [`crslist.txt`, `live/crslist.html`] | https://training.fema.gov/programs/independent-study/crslist.aspx?lang=en | FEMA EMI | as S1 | B | Current versions ("Last Updated") |
| S10 | Plans of Instruction and Instructor Guides (IS-100.c, IS-200.c, IS-700.b) [`POI*.txt`, `IG*.txt`] | inside the ZIPs; IS-700.b: `.../is-700.b/Instructor%20Guide/IGIS0700b.pdf`, `.../is-700.b/POI/POIIS0700b.pdf` | FEMA EMI | as S1 | B | Outline (lesson objectives) |
| S11 | National Preparedness Goal, Second Edition, September 2015 [`NPG2015.txt`] | https://www.fema.gov/sites/default/files/2020-06/national_preparedness_goal_2nd_edition.pdf | DHS | fema.gov reuse statement | B | Core capabilities, mission areas |
| S12 | FEMA Community Lifelines page ("Last updated March 8, 2024") [`lifelines.txt`] | https://www.fema.gov/emergency-managers/practitioners/lifelines | FEMA | fema.gov reuse statement | B | Trap: eight lifelines now |
| S13 | FEMA NIMS page ("Last updated July 28, 2025"), NRF page ("Last updated August 21, 2025"), Mission Areas and Core Capabilities page ("Last updated July 20, 2020") [`nimspage.txt`, `nrfpage.txt`, `corecap.txt`] | https://www.fema.gov/emergency-managers/nims ; …/national-preparedness/frameworks/response ; …/national-preparedness/mission-core-capabilities | FEMA | fema.gov reuse statement | B | Current ESF names, grant requirement |
| S14 | fema.gov Website Information ("Last updated May 1, 2023") [`webinfo.txt`] | https://www.fema.gov/about/website-information | FEMA | the reuse statement itself | — | Licence evidence |

**Licence caveats, verbatim, that the deck must honour:**
- IS FAQ: "Changes to original NDEMU content are not authorized by NDEMU. When using
  NDEMU curriculum materials or portions thereof, agencies, organizations and individuals
  should cite NDEMU as the originator of the material. The materials should not be used or
  displayed by non-federal entities in a manner or way which states or implies endorsement
  of a user's products or services by the Federal Government."
- **What this means for the deck:**
  - Cards paraphrase, and never present a modified figure as FEMA's own.
  - Every figure carries the credit "FEMA Emergency Management Institute (NDEMU), <course>
    Student Manual, <Visual>" or "FEMA, NIMS 2017, Figure N".
  - The deck page carries a non-endorsement line (§8).
  - A cropped figure is labelled "cropped from".
- fema.gov: photos or graphics may be licensed or restricted. **Use no photographs from
  any source.** The manuals contain photos and video stills, which are decorative anyway.
  Use only diagrams and tables.

No tier A, C or D source is needed. The **final exam questions are exam content (tier D)**:
never used, never "recalled". There is no public question pool.

---

## 3. Exam outline (coverage checklist)

The owner publishes course objectives (on the course pages) and lesson objectives (in
the POIs and manuals). No weights are published. The deck must cover every line below.
The topic that covers each item is in brackets.

### A. IS-100.c (course page objectives, verbatim; POI enabling objectives)
Course objectives: "At the completion of this course, you should be able to:"
1. "Explain the principles and basic structure of the Incident Command System (ICS)." [T1, T3, T4]
2. "Describe the NIMS management characteristics that are the foundation of the ICS." [T2]
3. "Describe the ICS functional areas and the roles of the Incident Commander and Command Staff." [T3]
4. "Describe the General Staff roles within ICS." [T4]
5. "Identify how NIMS management characteristics apply to ICS for a variety of roles and discipline areas." [T2, application cards throughout A]

Lessons (SM contents and POI "Enabling Objectives"):
- L1 Course Welcome and ICS Overview: "Describe the Whole Community approach to ICS."; "Identify the basic concept and benefits of ICS." [T1]
- L2 NIMS Management Characteristics: "Describe the 14 NIMS management characteristics." [T2]
- L3 ICS Functional Areas and Command Staff Roles: "Identify the five major ICS functional areas."; "Describe the role of the Incident Commander."; "Describe the selection of and transfer of command between Incident Commanders." [T3]
- L4 General Staff Roles: "Identify the ICS titles used for General Staff members."; "Describe the major activities of the four general staff sections." [T4]
- L5 How ICS Applies to You: "Identify how the NIMS Management Characteristics apply in specific roles."; "…in specific situations." (Emerald City Flood scenario, four updates) [application cards T1–T4]

### B. IS-200.c (course page objectives; POI unit objectives)
Course objectives: "Describe the course objectives and summarize basic information about the Incident Command System (ICS) and National Incident Management System (NIMS):"
1. "Describe how the NIMS Management Characteristics relate to Incident Command and Unified Command." [T5]
2. "Describe the delegation of authority process, implementing authorities, management by objectives, and preparedness plans and objectives." [T6]
3. "Identify ICS organizational components, the Command Staff, the General Staff, and ICS tools." [T7]
4. "Describe different types of briefings and meetings." [T8]
5. "Explain flexibility within the standard ICS organizational structure." [T9]
6. "Explain transfer of command briefings and procedures." [T10]
7. "Use ICS to manage an incident or event." [T10 + application cards B]

Units (POI "UNIT OBJECTIVES"):
- U1 Course Overview: "Describe the Incident Command System (ICS)."; "Describe the National Incident Management System (NIMS)." [T1, T11] (HSPD-5, HSPD-8/PPD-8 [T1])
- U2 Incident Command and Unified Command: "Describe chain of command and formal communication relationships."; "Identify common leadership responsibilities and values."; "Describe span of control and modular development."; "Describe the use of position titles." [T5]
- U3 Delegation of Authority & Management by Objectives: "Describe the delegation of authority process."; "Describe scope of authority."; "Define management by objectives."; "Explain the importance of preparedness plans and agreements." [T6]
- U4 Functional Areas and Positions: "Describe the functions of organizational positions within the Incident Command System (ICS)."; "Identify the ICS tools needed to manage an incident."; "Demonstrate the use of an ICS Form 201, Incident Briefing." [T7]
- U5 Incident Briefings and Meetings: "Describe components of field, staff, and section briefings/meetings."; "Prepare to give an operational period briefing." [T8]
- U6 Organizational Flexibility: "Explain how the modular organization expands and contracts."; "Identify factors to consider when analyzing the complexity of an incident."; "Define the five types of incidents." [T9]
- U7 Transfer of Command: "Describe the process of transfer of command."; "List the briefing elements involved in transfer of command." [T10]
- U8 Application Activity: "NIMS Management Characteristics; Incident Command and Unified Command; Initial Size-up; Developing Incident Objectives; Determining Resource Requirements; Determining Appropriate ICS Structure for an Incident; Transfer of Command" [scenario cards in T6, T9, T10]
- U9 Course Summary [no new content]

### C. IS-700.b (course page objectives; POI enabling objectives)
Course objectives: "At the end of this course, students will be able to:"
1. "Describe and identify the key concepts, principles, scope, and applicability underlying NIMS." [T11]
2. "Describe activities and methods for managing resources." [T12]
3. "Describe the NIMS Management Characteristics." [T2, revisited in T13]
4. "Identify and describe Incident Command System (ICS) organizational structures." [T13]
5. "Explain Emergency Operations Center (EOC) functions, common models for staff organization, and activation levels." [T14]
6. "Explain the interconnectivity within the NIMS Management and Coordination structures: ICS, EOC, Joint Information System (JIS), and Multiagency Coordination Groups (MAC Groups)." [T15]
7. "Identify and describe the characteristics of communications and information systems, effective communication, incident information, and communication standards and formats." [T16]

Lessons (POI):
- L1 Fundamentals and Concepts of NIMS: "Describe the applicability and scope of NIMS."; "Describe the key concepts and principles underlying NIMS." [T11]
- L2 NIMS Resource Management: "Describe the four key activities of NIMS Resource Management Preparedness."; "Identify the methods for Managing Resources during an Incident."; "Define features of Mutual Aid." [T12, T6]
- L3 NIMS Management Characteristics: "Differentiate among the fourteen NIMS Management Characteristics." [T2]
- L4 Incident Command System (ICS): "Describe Incident Command System (ICS) organizational structures." [T13]
- L5 Emergency Operations Centers (EOC): "Describe basic Emergency Operations Center (EOC) functions."; "Describe EOC staff organization models."; "Describe EOC activation levels." [T14]
- L6 Other NIMS Structures and Interconnectivity: "Identify the roles and responsibilities of the Multiagency Coordination Group."; "Describe the Joint Information System (JIS)."; "Describe Interconnectivity of NIMS Command and Coordination Structures." [T15]
- L7 Communications and Information Management: "Identify the four key principles of communications and information management."; "Describe the communications management practices and considerations."; "Identify how incident information is used."; "Identify the three concepts related to Communications Standards and Formats." [T16]
- L8 Course Summary [no new content]

### D. IS-800.d (course page objectives; no POI or manual is published)
"By the end of this course, students will be able to:"
1. "Describe the purpose, scope, organization, and underlying doctrine of the National Response Framework." [T17]
2. "Describe the roles and responsibilities of response partners." [T19, T20]
3. "Describe core capabilities for response and actions required to deliver those capabilities." [T18]
4. "Describe coordinating structures and operational planning used to support emergency response." [T19, T20]
5. "Describe how the stabilization of the seven Community Lifelines reduces threats to public health and safety, or economic security." [T18]

Because the course itself is unavailable, the NRF's own sections serve as the D outline:
- Introduction, Scope, Guiding Principles [T17];
- Community Lifelines, Core Capabilities [T18];
- Roles and Responsibilities, Operational Coordination (Local, State, Tribal, Federal
  coordinating structures) [T19, T20];
- Emergency Support Functions, Authorities and Policies, Operational Planning,
  Supporting Documents and Review [T20, T17].

---

## 4. Concept inventory

473 concepts in 20 topics, in teaching order (353 core, 120 extra).
- **Kind**:
  - `term` is a named thing: it gets a primer and is in the registry;
  - `set` is a list: every member gets its own card when it has more than 3 members;
  - `rule`, `number` and `procedure` get fact or decision cards;
  - `contrast` gets a contrast card.
- **Registry**: "yes" means the term is in `fema-ics-terms.json`, spelled as shown there.
  Three `set` or `procedure` rows are also registry terms, because writers will use
  their names: NIMS Management Characteristics, Size-up and NIMS components.
- **Prerequisites** are registry terms that must be taught first. The generator checked
  that every prerequisite appears earlier in the teaching order.
- **Source section**:
  - "SM" is the student manual, with "L" (lesson), "V" (visual) and p (PDF page);
  - "NIMS 2017 pN" and "NRF pN" are PDF pages;
  - "NIMS 2017 changes slide N" is S6.
- **URLs** for each row are in the registry (`source`), or come from the §2 table:
  - IS-100.c/IS-200.c rows → the course ZIP (S1/S2);
  - IS-700.b → S3#page=N;
  - NIMS → S4#page=N;
  - NRF → S5#page=N;
  - NPG → S11#page=N.
- **Definitions** are plain paraphrases of the cited passage. Glossary definitions follow
  NIMS 2017 closely, because that is the doctrine the exams test.

### Topic 1. ICS and NIMS basics (A. IS-100.c)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.ics.basics.incident` | Incident | yes | term | core | no | - | An occurrence, natural or manmade, that necessitates a response to protect life or property; includes planned events. | NIMS 2017 Glossary p74; IS-100.c SM Glossary |
| `fema.ics.basics.planned-event` | Planned Event | yes | term | core | no | Incident | An incident that is a scheduled non-emergency activity (e.g., sporting event, concert, parade). | NIMS 2017 Glossary p78 |
| `fema.ics.basics.emergency` | Emergency | yes | term | core | no | Incident | Any incident, natural, technological or human-caused, that needs responsive action to protect life or property. | NIMS 2017 Glossary p73 |
| `fema.ics.basics.jurisdiction` | Jurisdiction | yes | term | core | no | Incident | A range or sphere of authority (public agencies have jurisdiction at an incident related to their legal responsibilities), or a political or geographic area such as a city, county, tribe or state. | NIMS 2017 Glossary p76 |
| `fema.ics.basics.hazard` | Hazard | yes | term | extra | no | - | Something potentially dangerous or harmful, often the root cause of an unwanted outcome. | NIMS 2017 Glossary p74 |
| `fema.ics.basics.threat` | Threat | yes | term | extra | no | - | A natural or manmade occurrence, individual, entity or action with the potential to harm life, information, operations, the environment or property. | NIMS 2017 Glossary p81 |
| `fema.ics.basics.ics` | Incident Command System (ICS) | yes | term | core | no | Incident | A standardized approach to the command, control, and coordination of on-scene incident management, providing a common hierarchy for personnel from multiple organizations. | NIMS 2017 Glossary p74; IS-100.c SM L1 V12 p15 |
| `fema.ics.basics.nims` | National Incident Management System (NIMS) | yes | term | core | no | - | A systematic, proactive approach guiding all levels of government, NGOs, and the private sector to work together to prevent, protect against, mitigate, respond to, and recover from the effects of incidents. | NIMS 2017 Glossary p77; IS-100.c SM L1 V16 p19 |
| `fema.ics.basics.incident-management` | Incident Management | yes | term | core | no | Incident | The broad spectrum of activities and organizations providing operations, coordination and support at all levels of government to plan for, respond to and recover from an incident, whatever its cause, size or complexity. | NIMS 2017 Glossary p75 |
| `fema.ics.basics.incident-personnel` | Incident Personnel | yes | term | extra | no | Incident Management | All individuals with roles in incident management or support, whether on scene, in an EOC, or in a MAC Group. | NIMS 2017 Glossary p75 |
| `fema.ics.basics.ics-part-of-nims` | ICS is one part of NIMS | - | rule | core | no | ICS; NIMS | ICS is just one part of NIMS; it sits within the Command and Coordination component. | IS-100.c SM L1 V16 p19 |
| `fema.ics.basics.whole-community` | Whole Community | yes | term | core | no | - | A focus on enabling participation in incident management by the private and nonprofit sectors, NGOs and the public, together with all levels of government. | NIMS 2017 Glossary p81; IS-100.c SM L1 V11 p14 |
| `fema.ics.basics.ngo` | Nongovernmental Organization (NGO) | yes | term | core | no | - | A group based on the interests of its members, individuals or institutions; not created by a government but may work cooperatively with it. | NIMS 2017 Glossary p78 |
| `fema.ics.basics.private-sector` | Private Sector | yes | term | extra | no | - | Organizations and individuals that are not part of any governmental structure, including for-profit and not-for-profit organizations. | NIMS 2017 Glossary p79 |
| `fema.ics.basics.ics-uses` | When ICS is used | - | rule | core | no | ICS; Planned Event | ICS can be used for any incident, any size or cause, including planned events; using it every time builds skills for larger incidents. | IS-100.c SM L1 V13 p16 |
| `fema.ics.basics.history` | ICS origin: 1970s California fires | - | number | core | no | ICS | ICS was developed in the 1970s after catastrophic California fires; response problems were rarely due to lack of resources or failed tactics. | IS-100.c SM L1 V12 p15 |
| `fema.ics.basics.40-years` | ICS tested for more than 40 years | - | number | extra | no | ICS | ICS has been tested for more than 40 years of emergency and nonemergency applications. | IS-100.c SM L1 V20 p26 |
| `fema.ics.basics.benefits` | Benefits of ICS | - | set | core | no | ICS | Clarifies chain of command and supervision; interoperable communications and plain language; orderly planning; common flexible predesigned structure; cooperation across disciplines. | IS-100.c SM L1 V19 p25 |
| `fema.ics.basics.ensures` | What ICS helps ensure | - | set | core | no | ICS | Safety of responders, community members and others; achievement of incident objectives; efficient use of resources. | IS-100.c SM L1 V20 p26 |
| `fema.ics.basics.life-safety` | Life safety is the top priority | - | rule | core | no | ICS | "ICS works! It saves lives! Life safety is the top priority for ICS response." | IS-100.c SM L1 V16 note p19-20 |
| `fema.ics.basics.nims-components-3` | Three NIMS components | - | set | core | no | NIMS | Resource Management; Command and Coordination (including ICS); Communications and Information Management. | IS-100.c SM L1 V16 p19; NIMS 2017 p11-12 |
| `fema.ics.basics.grants` | NIMS implementation and federal preparedness grants | - | rule | extra | yes | NIMS | Jurisdictions receiving some federal grants (e.g., National Preparedness Grants) must demonstrate NIMS implementation; use of ICS is a key indicator. | IS-100.c SM L1 V16 note p20; fema.gov NIMS page (Aug 2026) |
| `fema.ics.basics.sara` | SARA 1986 (SARA) | - | number | extra | no | - | The Superfund Amendments and Reauthorization Act of 1986 directed OSHA to set rules for operations at hazardous materials incidents. | IS-100.c SM L1 V16 note p20 |
| `fema.ics.basics.osha-1910-120` | OSHA rule 1910.120 | - | number | core | no | SARA 1986 | Effective March 6, 1990, requires all organizations that handle hazardous materials to use ICS. | IS-100.c SM L1 V16 note p20 |
| `fema.ics.basics.epa` | EPA requires states to use ICS at hazmat incidents | - | rule | extra | no | - | The EPA requires States to use ICS at hazardous materials incidents. | IS-100.c SM L1 V16 note p20 |
| `fema.ics.basics.institutionalize` | Institutionalizing ICS: policy and organizational levels | - | rule | extra | no | ICS | Policy level: officials adopt ICS by executive order, proclamation or legislation and direct its training, exercise and use; organizational level: ICS in plans, training and exercises. | IS-100.c SM L1 V16 note p20 |
| `fema.ics.basics.hspd5` | HSPD-5, Management of Domestic Incidents (HSPD-5) | yes | term | extra | no | NIMS | Required DHS to establish a National Response Framework and a National Incident Management System. | IS-200.c SM L1 V13 p17 |
| `fema.ics.basics.hspd8-ppd8` | Presidential Policy Directive 8 (PPD-8), National Preparedness (PPD-8) | yes | term | extra | no | - | HSPD-8 directed a National Preparedness System; PPD-8 describes a whole-community approach to preparedness. | IS-200.c SM L1 V13 p17 |
| `fema.exam.pass-mark` | Final exam pass mark: 75% | - | number | extra | yes | - | IS exams are pass/fail with the benchmark for successful completion set at 75%. | IS FAQ; IS-100.c SM L1 V9 |
| `fema.exam.attempts` | Unlimited exam attempts | - | number | extra | yes | - | "Our program does not limit your exam attempts." Scores and missed questions are not released. | IS FAQ |

### Topic 2. The 14 NIMS Management Characteristics (A. IS-100.c)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.mc.overview` | NIMS Management Characteristics | yes | set | core | no | NIMS; ICS | Fourteen characteristics (formerly called ICS Management Characteristics) that are the foundation of NIMS command and coordination, including ICS. | IS-100.c SM L2 V4 p45; NIMS 2017 changes slide 20 |
| `fema.mc.common-terminology` | Common Terminology | yes | term | core | no | NIMS Management Characteristics | Standard names for organizational functions, resource descriptions and incident facilities so different organizations can work together. | IS-100.c SM L2 V5 p48 |
| `fema.mc.no-codes` | Avoid codes and jargon | - | rule | core | no | Common Terminology | During an incident avoid radio codes, agency-specific codes, acronyms or jargon; they can cause confusion or compromise life safety. | IS-100.c SM L2 V5 p48 |
| `fema.mc.plain-language` | Plain Language | yes | term | core | no | Common Terminology | Communication the intended audience can understand; in NIMS, avoiding or limiting codes, abbreviations and jargon in multi-agency incidents. | NIMS 2017 Glossary p78 |
| `fema.mc.clear-text` | Clear Text | yes | term | extra | no | Plain Language | Communication that does not use codes. | NIMS 2017 Glossary p72 |
| `fema.mc.modular-organization` | Modular Organization | yes | term | core | no | NIMS Management Characteristics | The organization develops top-down in a modular fashion based on incident size, complexity and hazards; the Incident Commander is responsible for its establishment and expansion. | IS-100.c SM L2 V7 p50 |
| `fema.mc.mbo` | Management by Objectives (MBO) | yes | term | core | no | NIMS Management Characteristics | Establishing specific, measurable objectives; identifying strategies, tactics, tasks; issuing assignments, plans, procedures and protocols; documenting results. | IS-100.c SM L2 V8 p51; NIMS Glossary p76 |
| `fema.mc.incident-action-planning` | Incident Action Planning | yes | term | core | no | Management by Objectives | The process that guides incident management; its product, the IAP, captures priorities, objectives, strategies, tactics and assignments for operational periods. | IS-100.c SM L2 V9 p52 |
| `fema.mc.iap` | Incident Action Plan (IAP) | yes | term | core | no | Incident Action Planning | An oral or written plan containing the objectives set by the IC or UC and addressing tactics and support activities for the planned operational period, generally 12 to 24 hours. | NIMS 2017 Glossary p74 |
| `fema.mc.operational-period` | Operational Period | yes | term | core | no | Incident Action Plan | The time scheduled for executing a given set of operation actions, as specified in the IAP; typically 12 to 24 hours. | NIMS 2017 Glossary p78 |
| `fema.mc.iap-oral-written` | IAP may be oral or written; hazmat requires written | - | rule | core | no | Incident Action Plan | For smaller or less complex incidents the IAP may be oral or written, except hazardous materials incidents, which require a written IAP. | IS-100.c SM L2 V9 p52 |
| `fema.mc.iap-written-when` | When a written IAP becomes increasingly important | - | rule | core | no | Incident Action Plan | When the incident is likely to extend beyond one operational period, becomes more complex, or involves multiple jurisdictions or agencies. | IS-700.b SM L3 V6 p71; IS-200.c SM L1 |
| `fema.mc.iap-four-questions` | Four questions every IAP answers | - | set | core | no | Incident Action Plan | What do we want to do? Who is responsible for doing it? How do we communicate with each other? What is the procedure if someone is injured? | IS-100.c SM L2 V9 note p53 |
| `fema.mc.iap-effective` | Features of an effective IAP | - | set | extra | no | Incident Action Plan | Covers a specified timeframe; proactive; specifies objectives; states activities; assigns responsibilities; identifies resources; specifies communication protocols. | IS-100.c SM L2 V9 p52 |
| `fema.mc.span-of-control` | Span of Control | yes | term | core | no | NIMS Management Characteristics | The number of subordinates for which a supervisor is responsible, usually expressed as the ratio of supervisors to individuals. | NIMS 2017 Glossary p80 |
| `fema.mc.span-1-5` | Optimal span of control 1:5 (guideline) | - | number | core | no | Span of Control | The optimal span of control is one supervisor to five subordinates; the 1:5 ratio is a guideline and incident personnel use judgment. | NIMS 2017 p32; IS-100.c SM L2 V11 p55 |
| `fema.mc.span-factors` | Factors that change span of control | - | set | core | no | Span of Control | Type of incident; nature of the task; hazards and safety factors; distances between personnel and resources. | IS-700.b SM L3 V7 p72 |
| `fema.mc.facilities` | Incident Facilities and Locations | yes | term | core | no | NIMS Management Characteristics | Support facilities (ICP, incident base, staging areas, camps, mass casualty triage areas, points of distribution, emergency shelters) set up for specific purposes. | IS-700.b SM L3 V8 p73; IS-100.c SM L2 V13 p57 |
| `fema.mc.crm` | Comprehensive Resource Management | yes | term | core | no | NIMS Management Characteristics | Maintaining accurate, up-to-date resource inventories and tracking; standard mechanisms to identify, order, mobilize, track, demobilize, reimburse and restock resources. | IS-100.c SM L2 V14 p58; IS-700.b SM L3 V9 |
| `fema.mc.resources` | Resources | yes | term | core | no | - | Personnel, equipment, teams, supplies, and facilities available or potentially available for assignment, described by kind and type. | NIMS 2017 Glossary p79 |
| `fema.mc.integrated-comms` | Integrated Communications | yes | term | core | no | NIMS Management Characteristics | A common communications plan and interoperable processes and systems, including voice and data links, to maintain connectivity, situational awareness and information sharing. | IS-100.c SM L2 V16 p60; IS-700.b SM L3 V10 |
| `fema.mc.establish-transfer` | Establishment and Transfer of Command | yes | term | core | no | NIMS Management Characteristics | Command is clearly established at the start by the organization with primary responsibility; transfer always includes a briefing and is communicated to all personnel. | IS-100.c SM L2 V18 p62; IS-700.b SM L3 V11 |
| `fema.mc.unified-command` | Unified Command (UC) | yes | term | core | no | NIMS Management Characteristics | An ICS application used when more than one agency has incident jurisdiction or when incidents cross political jurisdictions; no single commander, jointly approved objectives. | NIMS 2017 Glossary p81; IS-100.c SM L2 V20 p64 |
| `fema.mc.uc-when` | When Unified Command is used | - | set | core | no | Unified Command | Multiple jurisdictions; a single jurisdiction with multiagency involvement; multiple jurisdictions with multiagency involvement. | IS-700.b SM L3 V12 p77 |
| `fema.mc.chain-of-command` | Chain of Command | yes | term | core | no | NIMS Management Characteristics | The orderly line of authority within the ranks of incident management organizations. | NIMS 2017 Glossary p72; IS-100.c SM L2 V21 p65 |
| `fema.mc.unity-of-command` | Unity of Command | yes | term | core | no | Chain of Command | Each individual involved in incident management reports to and takes direction from only one person. | NIMS 2017 Glossary p81; IS-100.c SM L2 V22 p66 |
| `fema.mc.not-day-to-day` | You no longer report to your day-to-day supervisor | - | rule | core | no | Unity of Command | When assigned to an incident you report only to your ICS supervisor and no longer directly to your day-to-day supervisor. | IS-100.c SM L2 V22 p66 |
| `fema.mc.accountability` | Accountability | yes | term | core | no | NIMS Management Characteristics | Principles: check-in/check-out, incident action planning, unity of command, personal responsibility, span of control, resource tracking. | IS-100.c SM L2 V23 p67; IS-700.b SM L3 V14 |
| `fema.mc.check-in` | Check-In | yes | term | core | no | Accountability | The process through which resources first report to an incident; all responders report in to receive an assignment. | NIMS 2017 Glossary p72 |
| `fema.mc.dispatch-deployment` | Dispatch/Deployment | yes | term | core | no | NIMS Management Characteristics | Resources deploy only when requested or dispatched by an appropriate authority; unrequested resources should not self-dispatch. | IS-100.c SM L2 V24 p68; IS-700.b SM L3 V15 |
| `fema.mc.dispatch` | Dispatch | yes | term | extra | no | - | The ordered movement of a resource or resources to an assigned operational mission, or an administrative move between locations. | NIMS 2017 Glossary p73 |
| `fema.mc.initial-briefing` | What your initial briefing should include | - | set | extra | no | Check-In | Situation assessment, your job responsibilities, coworkers, work area, break areas, how to get resources, operational periods/shifts, safety procedures and PPE. | IS-100.c SM L2 V24 note p69 |
| `fema.mc.info-intel` | Information and Intelligence Management | yes | term | core | no | NIMS Management Characteristics | Established processes for gathering, analyzing, assessing, sharing and managing incident information and intelligence. | IS-100.c SM L2 V27 p71; IS-700.b SM L3 V16 |
| `fema.mc.intelligence-meaning` | "Intelligence" in NIMS | - | rule | core | no | Information and Intelligence Management | In NIMS, intelligence refers exclusively to threat-related information developed by law enforcement, medical surveillance and other investigative organizations. | IS-100.c SM L2 V27 p71 |
| `fema.mc.eei` | Essential Elements of Information (EEI) | yes | term | extra | no | Information and Intelligence Management | Important and standard information items that support timely and informed decisions. | NIMS 2017 Glossary p74 |

### Topic 3. Functional areas, Incident Commander and Command Staff (A. IS-100.c)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.cs.five-functions` | Five major ICS functional areas | - | set | core | no | ICS | Command, Operations, Planning, Logistics, Finance/Administration. | IS-100.c SM L3 V3-V4 p78-79 |
| `fema.cs.intel-inv` | Intelligence/Investigations (I/I) | yes | term | core | no | Five major ICS functional areas | A sixth ICS function identified in NIMS, established for incidents with intensive intelligence gathering and investigative activity. | IS-100.c SM L3 V5 p80; NIMS Glossary p75 |
| `fema.cs.command` | Command | yes | term | core | no | - | The act of directing, ordering, or controlling by virtue of explicit statutory, regulatory, or delegated authority. | NIMS 2017 Glossary p72; IS-100.c SM L3 V12 |
| `fema.cs.incident-command` | Incident Command | yes | term | core | no | Command | The ICS element responsible for overall management of the incident: the IC or UC plus any Command Staff activated. | NIMS 2017 Glossary p74 |
| `fema.cs.ic` | Incident Commander (IC) | yes | term | core | no | Incident Command | The individual responsible for on-scene incident activities, including developing objectives and ordering and releasing resources; overall authority and responsibility. | NIMS 2017 Glossary p75 |
| `fema.cs.ic-always-staffed` | IC is the only position always staffed | - | rule | core | no | Incident Commander | The Incident Commander is the only position that is always staffed; on small incidents the IC may do all management functions. | IS-100.c SM L3 V13 p89 |
| `fema.cs.ic-not-rank` | IC qualification is not based solely on rank | - | rule | core | no | Incident Commander | Qualifications to serve as IC should not be based solely on rank, grade, or technical knowledge. | IS-100.c SM L3 V12 |
| `fema.cs.ic-responsibilities` | IC specific responsibilities | - | set | core | no | Incident Commander | Ensuring overall incident safety; providing information services to stakeholders; establishing and maintaining liaison with other agencies. | IS-100.c SM L3 V15 |
| `fema.cs.ic-all-functions` | IC performs every unfilled function | - | rule | core | no | Incident Commander | The IC only creates the sections needed and is responsible for every ICS function until it is delegated. | IS-100.c SM L3 V19; IS-200.c SM L4 V3 |
| `fema.cs.transfer-reasons` | Reasons for transfer of command | - | set | core | no | Establishment and Transfer of Command | More qualified IC arrives; agency legally required to take command (e.g., FBI for terrorism investigations); complexity changes; current IC needs rest. | IS-100.c SM L3 V16 note p92 |
| `fema.cs.transfer-steps` | Five actions in assuming command | - | procedure | core | no | Establishment and Transfer of Command | Assess with current IC; receive face-to-face briefing; choose transfer time; notify HQ, staffs and all personnel; may reassign previous IC. | IS-100.c SM L3 V17 note |
| `fema.cs.transfer-not-competency` | Transfer does not reflect on competency | - | rule | extra | no | Establishment and Transfer of Command | Transition of command on an expanding incident is to be expected and does not reflect on the current IC's competency. | IS-100.c SM L3 V17 note |
| `fema.cs.deputy` | Deputy | yes | term | core | no | Incident Commander | A fully qualified individual who can be delegated the superior's authority; may act as relief; assigned to IC, EOC director, General Staff and branch directors. | NIMS 2017 Glossary p73; IS-100.c SM L3 V15 |
| `fema.cs.command-staff` | Command Staff | yes | term | core | no | Incident Commander | Personnel the IC or UC assigns to support the command function: typically PIO, Safety Officer and Liaison Officer, reporting directly to the IC. | NIMS 2017 Glossary p72; IS-100.c SM L3 V20 p98 |
| `fema.cs.officer` | Officer | yes | term | core | no | Command Staff | The ICS title for a member of the Command Staff authorized to make decisions and act in their area of responsibility. | NIMS 2017 Glossary p78 |
| `fema.cs.pio` | Public Information Officer (PIO) | yes | term | core | no | Command Staff | Command Staff member who interfaces with the public, media and other agencies with incident-related information needs. | NIMS 2017 Glossary p79; IS-100.c SM L3 V20 |
| `fema.cs.safety-officer` | Safety Officer (SOFR) | yes | term | core | no | Command Staff | Command Staff member who monitors operations and advises the IC/UC on safety, including health and safety of incident personnel; can stop or prevent unsafe acts. | NIMS 2017 Glossary p80 |
| `fema.cs.liaison-officer` | Liaison Officer (LNO) | yes | term | core | no | Command Staff | Command Staff member who is the point of contact for representatives of cooperating and assisting agencies and organizations. | NIMS 2017 Glossary p76; IS-100.c SM L3 V20 |
| `fema.cs.tech-specialists` | Technical specialists as command advisors | - | rule | extra | no | Command Staff | ICs may appoint technical specialists (legal, medical, science and technology, access and functional needs) as command advisors. | IS-100.c SM L3 V20 p98 |
| `fema.cs.coordination` | Coordination | yes | term | core | no | Incident Command | Activities that ensure the on-site ICS organization gets the information, resources and support it needs, e.g., setting priorities among incidents and resolving critical resource issues. | IS-100.c SM L3 V26; NIMS Glossary 'Coordinate' p72 |
| `fema.cs.four-responsibilities` | Four overarching areas of incident management | - | set | core | no | Coordination | Tactical response (ICS); incident support (EOCs); policy guidance (MAC Groups); outreach to media and public (JIS). | IS-100.c SM L3 V27 p106 |
| `fema.cs.eoc` | Emergency Operations Center (EOC) | yes | term | core | no | Coordination | The physical (or virtual) location where coordination of information and resources to support on-scene incident management normally takes place. | NIMS 2017 Glossary p73; IS-100.c SM L3 V28 |
| `fema.cs.jic` | Joint Information Center (JIC) | yes | term | core | no | Public Information Officer | A facility where personnel coordinate incident-related public information; the central point of contact for all news media. | NIMS 2017 Glossary p75; IS-100.c SM L3 V29 |
| `fema.cs.command-vs-coordination` | Command vs coordination | - | contrast | core | no | Command; Coordination | Command: establish objectives, make assignments, order resources. Coordination: share information, synchronize messages, set priorities among incidents. | IS-100.c SM L3 V30 |
| `fema.cs.ics-titles-unique` | ICS titles are independent of day-to-day titles | - | rule | core | no | ICS | There is no correlation between ICS organization and any agency's administrative structure; deployed staff use their ICS position title. | IS-100.c SM L3 V11 note |

### Topic 4. General Staff sections (A. IS-100.c)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.gs.general-staff` | General Staff | yes | term | core | no | Five major ICS functional areas | Incident personnel organized by function reporting to the IC/UC: Operations, Planning, Logistics and Finance/Administration Section Chiefs. | NIMS 2017 Glossary p74 |
| `fema.gs.section` | Section | yes | term | core | no | General Staff | The ICS organizational element responsible for a major functional area (Operations, Planning, Logistics, Finance/Administration). | NIMS 2017 Glossary p80 |
| `fema.gs.chief` | Chief | yes | term | core | no | Section | The ICS title for individuals responsible for managing functional sections. | NIMS 2017 Glossary p72 |
| `fema.gs.ops-first` | Operations is established first | - | rule | core | no | General Staff | In an expanding incident the IC first establishes the Operations Section; others are established as needed. | IS-100.c SM L4 V3 p114 |
| `fema.gs.operations` | Operations Section | yes | term | core | no | Section | Implements tactical incident operations described in the IAP; may include branches, divisions and/or groups. | NIMS 2017 Glossary p78; IS-100.c SM L4 V5-V6 |
| `fema.gs.ops-features` | Operations Section features | - | set | core | no | Operations Section | Directs all tactical operations; typically among the first assigned; develops (expands) from the bottom up; has the most resources; may have Staging Areas. | IS-100.c SM L4 V6 note; IS-200.c SM L4 V15 |
| `fema.gs.planning` | Planning Section | yes | term | core | no | Section | Collects, evaluates and disseminates operational information, prepares and documents the IAP, and tracks the situation and resource status. | NIMS 2017 Glossary p78 |
| `fema.gs.planning-activities` | Planning Section major activities | - | set | core | no | Planning Section | Preparing and documenting IAPs; managing information and situational awareness; tracking resources; maintaining documentation; developing demobilization plans. | IS-100.c SM L4 V8 p120 |
| `fema.gs.logistics` | Logistics Section | yes | term | core | no | Section | Provides facilities, services, and material support for the incident. | NIMS 2017 Glossary p76 |
| `fema.gs.logistics-activities` | Logistics Section major activities | - | set | core | no | Logistics Section | Ordering and accounting for personnel, equipment and supplies; communication planning and resources; food; facilities; support transportation; medical services to incident personnel. | IS-100.c SM L4 V10 |
| `fema.gs.finance` | Finance/Administration Section | yes | term | core | no | Section | Responsible for an incident's administrative and financial considerations. | NIMS 2017 Glossary p74 |
| `fema.gs.finance-activities` | Finance/Administration major activities | - | set | core | no | Finance/Administration Section | Contract negotiation and monitoring; timekeeping; cost analysis; compensation for injury or property damage; documentation for reimbursement. | IS-100.c SM L4 V12 |
| `fema.gs.no-section-ic-does` | If a section is not established, the IC performs it | - | rule | core | no | General Staff | If no Operations (Planning, Logistics) Section is established, the IC performs those functions; each Section Chief activates any further staffing. | IS-100.c SM L4 V5, V7, V9 |

### Topic 5. Command relationships, communication and leadership (B. IS-200.c)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.cr.uc-vs-unity` | Unity of command vs Unified Command | - | contrast | core | no | Unity of Command; Unified Command | Unity of command: each person reports to one supervisor. Unified Command: several agencies jointly command with common objectives. "Don't confuse" them. | IS-200.c SM L2 V3 p35; L9 V3 |
| `fema.cr.uc-features` | Unified Command features | - | set | core | no | Unified Command | Common objectives and strategies; joint decisions from a single command structure at one ICP; maintains unity of command. | IS-200.c SM L2 V5 p37 |
| `fema.cr.uc-advantages` | Advantages of Unified Command | - | set | core | no | Unified Command | Single set of objectives; collective strategy; better information flow; shared priorities and restrictions; no agency's authority compromised; single IAP. | IS-200.c SM L2 V6 p38; NRF p17 |
| `fema.cr.formal-comm` | Formal communication | yes | term | core | no | Chain of Command | Follows lines of authority; must be used for receiving/giving work assignments, requesting support or resources, and reporting progress. | IS-200.c SM L2 V9 p42 |
| `fema.cr.informal-comm` | Informal communication | yes | term | core | no | Formal communication | Exchange of incident information passed horizontally or vertically without restriction; never used for resource requests or tasking. | IS-200.c SM L2 V10-V11 p43-44 |
| `fema.cr.leadership` | Common leadership responsibilities | - | set | extra | no | - | Communicate and seek feedback; supervise the scene; evaluate the plan; accept modification; ensure safe work practices; take command of resources; motivate; show initiative. | IS-200.c SM L2 V14 p48 |
| `fema.cr.safety-first-duty` | Safety is the first duty of ICS leadership | - | rule | core | no | - | The safety of all personnel is the first duty of ICS leadership; ensuring safe work practices is the top priority among leadership responsibilities. | IS-200.c SM L2 V14 note p48 |
| `fema.cr.values` | Leadership values | - | set | extra | no | - | Commitment to duty, respect, and integrity. | IS-200.c SM L2 V15 p49 |
| `fema.cr.comm-responsibilities` | Communication responsibilities of all responders | - | set | extra | no | - | Brief others; debrief actions; communicate hazards; acknowledge messages; ask if they do not know. Face-to-face is most effective. | IS-200.c SM L2 V20 p55 |
| `fema.cr.briefing-elements` | Briefing elements: task, purpose, end state | - | set | extra | no | - | Task (what is to be done), purpose (why), end state (how it should look when done). | IS-200.c IG L2 V21 p IG-79 (zip 04 IG) |
| `fema.cr.assessment` | Incident management assessment methods | - | set | extra | no | - | Corrective action report/After-Action Review (AAR), debriefing, post-incident critique, mitigation plans. | IS-200.c SM L2 V22 p57 |
| `fema.cr.aar` | After-Action Review (AAR) | yes | term | extra | no | - | An assessment method conducted after a major activity to find out what happened and why. | IS-200.c SM L2 V22 p57 |
| `fema.cr.form-follows-function` | Form follows function | - | rule | core | no | Modular Organization | ICS organization size is set through incident planning; add Teams, Divisions, Groups, Branches or Sections when span of control is exceeded, reduce when too few. | IS-200.c SM L2 V29 p67 |
| `fema.cr.position-titles-purpose` | Why ICS uses distinct position titles | - | set | core | no | - | Common standard; qualified people fill positions; requested personnel are qualified; standardized communication; describes responsibilities. | IS-200.c SM L2 V32 p70 |
| `fema.cr.supervisory-titles` | Supervisory titles by level | - | set | core | no | - | Incident Command: Incident Commander; Command Staff: Officer; Section: Chief; Branch: Director; Division/Group: Supervisor; Unit: Unit Leader; Strike Team/Task Force: Leader. (Single Resource Boss appears in the table's support column.) | IS-200.c SM L2 V33 p71 |
| `fema.cr.support-titles` | Support position titles by level | - | set | core | no | Supervisory titles by level | Deputy for Incident Command, Section and Branch; Assistant for Command Staff; Manager for Unit; N/A for Division/Group. | IS-200.c SM L2 V33 p71 |
| `fema.cr.director` | Director | yes | term | core | no | - | ICS title for the person supervising a branch; also the title of the person managing an EOC team. | NIMS 2017 Glossary p73 |
| `fema.cr.supervisor` | Supervisor | yes | term | core | no | - | ICS title for the person responsible for a division or group. | NIMS 2017 Glossary p80 |
| `fema.cr.leader` | Leader | yes | term | core | no | - | ICS title for the person supervising a unit, strike team, resource team, or task force. | NIMS 2017 Glossary p76 |
| `fema.cr.manager` | Manager | yes | term | extra | no | - | Individual within an ICS unit assigned specific managerial responsibilities (e.g., Staging Area Manager, Camp Manager). | NIMS 2017 Glossary p76 |
| `fema.cr.single-resource` | Single Resource | yes | term | core | no | Resources | An individual, a piece of equipment and its personnel complement, or a crew/team with an identified work supervisor. | NIMS 2017 Glossary p80 |
| `fema.cr.95-percent` | About 95% of incidents are small | - | number | extra | no | Single Resource | Approximately 95% of all incidents are small responses with Command and single resources. | IS-200.c SM L2 V30 p68 |

### Topic 6. Authority, objectives and incident action planning (B. IS-200.c)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.ao.authority` | Authority | yes | term | core | no | - | A right or obligation to act on behalf of a department, agency, or jurisdiction. | IS-200.c SM L3 V2 p76 |
| `fema.ao.chief-elected` | Chief elected official holds responsibility for protection | - | rule | core | no | Authority | In most jurisdictions responsibility for protecting citizens rests with the chief elected official; in private industry with the chief executive officer. | IS-200.c SM L3 V2 p76 |
| `fema.ao.ahj` | Authority Having Jurisdiction (AHJ) | yes | term | core | no | Authority | An entity with authority and responsibility for developing, implementing, maintaining and overseeing the qualification process in its organization or jurisdiction. | NIMS 2017 Glossary p71 |
| `fema.ao.scope` | Scope of authority | - | rule | core | no | Authority | An IC's scope of authority comes from existing laws, agency policies and procedures, and/or a delegation of authority. | IS-200.c SM L3 V4 p78 |
| `fema.ao.doa` | Delegation of Authority | yes | term | core | no | Authority; Incident Commander | A statement the agency executive gives the IC delegating authority and assigning responsibility; may include priorities, expectations, constraints. | NIMS 2017 Glossary p73; IS-200.c SM L3 V5 p79 |
| `fema.ao.doa-features` | Delegation of authority: key features | - | set | core | no | Delegation of Authority | Grants authority for specific functions; issued in writing or verbally (ideally writing); lets the IC assume command; does NOT relieve the granting authority of ultimate responsibility. | IS-200.c SM L3 V5 p79 |
| `fema.ao.authority-not-responsibility` | Authority can be delegated; responsibility cannot | - | rule | core | no | Delegation of Authority | "Authority can be delegated; responsibility cannot." | IS-200.c SM L9 V5 p280 |
| `fema.ao.doa-not-needed` | When a delegation of authority is not needed | - | rule | core | no | Delegation of Authority | When the IC acts within existing authorities (e.g., a fire chief at a structure fire). | IS-200.c SM L3 V6 p80 |
| `fema.ao.doa-needed` | When a delegation of authority is needed | - | set | core | no | Delegation of Authority | Incident outside the IC's jurisdiction; scope complex or beyond existing authorities; required by law or procedures. | IS-200.c SM L3 V7 p81 |
| `fema.ao.doa-elements` | Elements of a delegation of authority | - | set | extra | no | Delegation of Authority | Legal and financial authorities/restrictions; reporting; demographic and political issues; priorities; public information plan; communications; ongoing evaluation; conditions for transfer or release. | IS-200.c SM L3 V9 p83 |
| `fema.ao.implementing` | Implementing authorities | - | rule | extra | no | Scope of authority | Within scope of authority the IC sets objectives, then strategies, resources and ICS structure, with authority to protect responders, citizens and environment. | IS-200.c SM L3 V12 p88 |
| `fema.ao.six-steps` | Steps for establishing and implementing objectives | - | procedure | core | no | Management by Objectives | 1 Understand agency policy; 2 assess situation; 3 establish objectives; 4 select strategies; 5 perform tactical direction; 6 provide follow-up. | IS-200.c SM L3 V14 p90 |
| `fema.ao.priorities` | Overall priorities: life safety, incident stabilization, property preservation | - | set | core | no | - | First life safety, second incident stabilization, third property preservation; not sequential steps, often done simultaneously. | IS-200.c SM L3 V16 p92 |
| `fema.ao.incident-objective` | Incident Objective | yes | term | core | no | Management by Objectives | A statement of an outcome to be accomplished; realistic, achievable and measurable yet flexible enough for alternatives. | NIMS 2017 Glossary p75 |
| `fema.ao.effective-objectives` | Effective incident objectives | - | set | core | no | Incident Objective | Specific; measurable with standard and timeframe; attainable; within the IC's authorities; evaluated for effectiveness. | IS-200.c SM L3 V17 p93 |
| `fema.ao.smart` | SMART objectives (SMART) | yes | term | core | no | Incident Objective | Specific, Measurable, Action-oriented, Realistic and Time-sensitive (IS-200.c Lesson 8 wording). | IS-200.c SM L8 V21 p255 |
| `fema.ao.strategy` | Strategy | yes | term | core | no | Incident Objective | The general course of action or direction to accomplish incident objectives. | NIMS 2017 Glossary p80; IS-200.c SM L3 V19 |
| `fema.ao.tactics` | Tactics | yes | term | core | no | Strategy | The deployment and directing of resources on an incident to accomplish the objectives; specify how strategies are executed. | NIMS 2017 Glossary p80; IS-200.c SM L3 V19 |
| `fema.ao.who-sets-what` | Who sets objectives, strategies and tactics | - | rule | core | no | Strategy; Tactics | The IC establishes goals and selects strategies; the Operations Section, if established, determines tactics. | IS-200.c SM L3 V20 p97 |
| `fema.ao.size-up` | Size-up | yes | procedure | core | no | Incident Commander | First responder to arrive assumes command and assesses nature and magnitude, hazards, evacuation, injuries, isolation needs, priorities and resources, ICP and staging location, access routes. | IS-200.c SM L3 V15 p91 |
| `fema.ao.planning-p` | Operational Period Planning Cycle (Planning P) | yes | term | core | no | Incident Action Plan | Graphic of the sequence of meetings, work periods and briefings used each operational period to produce the IAP. | IS-200.c SM L3 V22 p99; NIMS 2017 Fig A-12 p116 |
| `fema.ao.eop` | Emergency Operations Plan (EOP) | yes | term | core | no | - | A plan for responding to a variety of potential hazards; developed at federal, state and local levels and consistent with NIMS. | NIMS 2017 Glossary p73; IS-200.c SM L3 V25 |
| `fema.ao.sop` | Standard Operating Procedure (SOP) | yes | term | core | no | - | A reference document or operations manual giving purpose, authorities, duration and details for the preferred method of performing functions uniformly. | NIMS 2017 Glossary p80 |
| `fema.ao.sog` | Standard operating guidelines (SOG) | yes | term | extra | no | - | A standard indication or outline of policy (IS-200.c); contrast SOPs, which are step-by-step instructions. | IS-200.c SM L3 V24 p101 |
| `fema.ao.preparedness-plans` | Common preparedness plans | - | set | extra | no | Emergency Operations Plan | Federal, state or local EOPs; SOGs; SOPs; jurisdictional or agency policies. | IS-200.c SM L3 V24 p101 |
| `fema.ao.mutual-aid` | Mutual aid | yes | term | core | no | - | Voluntary provision or sharing of resources and services between jurisdictions or organizations when existing resources are inadequate. | IS-200.c SM L3 V27 p104; IS-700.b SM L2 V24 |
| `fema.ao.maa` | Mutual Aid Agreement or Assistance Agreement | yes | term | core | no | Mutual aid | A written or oral agreement between agencies/organizations and/or jurisdictions giving a mechanism to quickly obtain assistance. | NIMS 2017 Glossary p77 |
| `fema.ao.maa-legal-basis` | Mutual aid agreements establish the legal basis | - | rule | core | no | Mutual Aid Agreement or Assistance Agreement | Mutual aid agreements establish the legal basis for two or more entities to share resources. | IS-200.c SM L3 V26 p103 |
| `fema.ao.maa-topics` | Mutual aid agreement topics | - | set | extra | no | Mutual Aid Agreement or Assistance Agreement | Reimbursement; recognition of licensure and certification; mobilization procedures; voice and data interoperability protocols; resource management protocols. | IS-200.c SM L3 V27 note p104 |
| `fema.ao.emac` | Emergency Management Assistance Compact (EMAC) | yes | term | core | no | Mutual aid | A congressionally ratified, non-federal, state-to-state mutual aid compact for sharing resources across state lines; resolves liability and reimbursement up front. | NIMS 2017 Glossary p73; IS-200.c SM L3 V28 |
| `fema.ao.emac-members` | EMAC signatories | - | number | extra | yes | Emergency Management Assistance Compact | All 50 states, the District of Columbia, Puerto Rico, Guam, and the U.S. Virgin Islands. | IS-200.c SM L3 V28 note p105; IS-700.b SM L2 V28 |
| `fema.ao.aid-levels` | Mutual aid at all levels | - | set | extra | no | Mutual aid | Local: agreements with neighbours; states: EMAC; federal agencies: to each other and to states, tribes and territories under the NRF. | IS-200.c SM L3 V28 p105 |

### Topic 7. Positions, organisational elements and ICS forms (B. IS-200.c)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.po.ic-approves` | IC approves the IAP and resource orders/releases | - | rule | core | no | Incident Commander; Incident Action Plan | The IC develops objectives and approves the IAP and all requests for ordering and releasing resources. | IS-200.c SM L4 V2 p111 |
| `fema.po.deputy-reasons` | Three reasons to designate a Deputy IC | - | set | core | no | Deputy | Perform tasks requested by the IC; perform command in relief (e.g., next operational period); represent an assisting agency that shares or may gain jurisdiction. | IS-200.c SM L4 V4 p113 |
| `fema.po.deputy-qualified` | Deputy must be fully qualified | - | rule | core | no | Deputy | The only ICS requirement for a Deputy is that he or she be fully qualified and equally capable to assume the position. | IS-200.c SM L4 V4 p113 |
| `fema.po.assistant` | Assistant | yes | term | core | no | Command Staff | Title for subordinates of principal Command Staff and EOC director's staff positions, with lesser capability and responsibility; may be assigned to unit leaders. | NIMS 2017 Glossary p71; IS-200.c SM L4 V9 |
| `fema.po.lead-pio` | One lead PIO; IC approves releases | - | rule | core | no | Public Information Officer | With PIOs from several agencies the IC/UC designates one lead PIO; the IC/UC approves release of incident-related information. | IS-200.c SM L4 Command Staff table; IS-700.b SM L4 V13 note |
| `fema.po.assisting-agency` | Assisting Agency | yes | term | core | no | - | An agency or organization providing personnel, services, or other resources to the agency with direct responsibility for incident management. | NIMS 2017 Glossary p71; IS-200.c SM L4 V11 |
| `fema.po.cooperating-agency` | Cooperating Agency | yes | term | core | no | Assisting Agency | An agency supplying assistance other than direct operational or support functions or resources. | NIMS 2017 Glossary p72; IS-200.c SM L4 V12 |
| `fema.po.agency-rep` | Agency Representative | yes | term | core | no | Assisting Agency; Cooperating Agency | A person assigned from an assisting or cooperating agency with authority to make decisions on that agency's participation. | NIMS 2017 Glossary p71; IS-200.c SM L4 V13 |
| `fema.po.ops-chief` | Operations Section Chief (OSC) | yes | term | core | no | Operations Section | Responsible to the IC for direct management of all operational activities; establishes tactical objectives each operational period; helps prepare the IAP. | IS-200.c SM L4 V16 p127 |
| `fema.po.staging-area` | Staging Area | yes | term | core | no | Operations Section | A temporary location for available resources in which personnel, supplies, and equipment await operational assignment. | NIMS 2017 Glossary p80 |
| `fema.po.staging-rules` | Staging Area rules | - | rule | core | no | Staging Area | Resources in staging are assigned and ready; out-of-service resources are not in staging; a Staging Area Manager reports to the OSC (or IC if no OSC). | IS-200.c SM L4 V17 p128 |
| `fema.po.division` | Division | yes | term | core | no | Operations Section | Organizational level responsible for operations within a defined geographic area. | NIMS 2017 Glossary p73; IS-200.c SM L4 V19 |
| `fema.po.group` | Group | yes | term | core | no | Division | Organizational subdivision for a functional area of operation, not necessarily within one geographic area. | NIMS 2017 Glossary p74; IS-200.c SM L4 V19 |
| `fema.po.branch` | Branch | yes | term | core | no | Division; Group | Level with functional or geographic responsibility for major parts of operations; between Section Chief and divisions/groups in Operations, and between section and units in Logistics. | NIMS 2017 Glossary p72 |
| `fema.po.branch-when` | When branches are established; how named | - | rule | core | no | Branch | When divisions/groups exceed the OSC's span of control; identified by Roman numerals or functional name; managed by a Branch Director. | IS-200.c SM L4 V20 p131 |
| `fema.po.air-ops` | Air Operations Branch | yes | term | extra | no | Branch | Activated on larger incidents to coordinate aviation; reports to the OSC; may have an Air Tactical Group (airborne activity) and Air Support Group (ground support). | IS-200.c SM L4 V22 p134 |
| `fema.po.task-force` | Task Force | yes | term | core | no | Single Resource | Any combination of resources of different kinds and/or types assembled for a mission, with common communications and a leader. | NIMS 2017 Glossary p81; IS-200.c SM L6 V22 |
| `fema.po.strike-team` | Strike Team | yes | term | core | no | Single Resource | A set number of resources of the same kind and type with an established minimum of personnel, common communications and a leader. | NIMS 2017 Glossary p80 |
| `fema.po.resource-team` | Resource Team | yes | term | core | no | Strike Team | Law enforcement term for a strike team (added in NIMS 2017). | NIMS 2017 Glossary p79; NIMS 2017 changes slide 22 |
| `fema.po.unit` | Unit | yes | term | core | no | Section | Organizational element with functional responsibility for a specific activity in the Planning, Logistics, and Finance/Administration Sections. | NIMS 2017 Glossary p81 |
| `fema.po.unit-leader` | Unit Leader | yes | term | extra | no | Unit | The individual in charge of a unit in ICS. | NIMS 2017 Glossary p81 |
| `fema.po.tech-specialist` | Technical Specialist | yes | term | core | no | Planning Section | Advisors with special skills who initially report to the Planning Section and may be reassigned; any discipline required. | IS-200.c SM L4 V24 p136 |
| `fema.po.resources-unit` | Resources Unit | yes | term | core | no | Planning Section | Planning unit responsible for all check-in activity and the status of all personnel and equipment resources. | IS-200.c SM L4 V25 note p137 |
| `fema.po.situation-unit` | Situation Unit | yes | term | core | no | Planning Section | Planning unit that collects and processes current situation information, prepares displays and summaries, maps and projections. | IS-200.c SM L4 V25 note p137 |
| `fema.po.demob-unit` | Demobilization Unit | yes | term | core | no | Planning Section | Planning unit that, on large complex incidents, helps ensure orderly, safe and cost-effective release of personnel. | IS-200.c SM L4 V25 note p137 |
| `fema.po.documentation-unit` | Documentation Unit | yes | term | core | no | Planning Section | Planning unit that prepares the IAP, maintains incident documentation and provides duplication. | IS-200.c SM L4 V25 note p137 |
| `fema.po.planning-look-ahead` | Planning looks beyond the current operational period | - | rule | extra | no | Planning Section | One of Planning's most important functions is to look beyond the current and next operational period to anticipate problems. | IS-200.c SM L4 V23 p135 |
| `fema.po.service-branch` | Service Branch | yes | term | core | no | Logistics Section | Logistics branch with Communications, Medical and Food Units. | IS-200.c SM L4 V28 p140 |
| `fema.po.support-branch` | Support Branch | yes | term | core | no | Logistics Section | Logistics branch with Supply, Facilities and Ground Support Units. | IS-200.c SM L4 V29 p141 |
| `fema.po.comms-unit` | Communications Unit | yes | term | extra | no | Service Branch | Plans use of communications equipment and facilities; installs, tests, distributes and repairs equipment; supervises the Incident Communications Center. | IS-200.c SM L4 V28 |
| `fema.po.medical-unit` | Medical Unit | yes | term | core | no | Service Branch | Develops the Medical Plan and gets medical aid and transport for injured or ill incident personnel (not the affected population). | IS-200.c SM L4 V27-V28 |
| `fema.po.medical-unit-contrast` | Medical Unit supports responders; population care is Operations | - | contrast | core | no | Medical Unit | Logistics functions (except Supply) support incident personnel; medical resources for the affected population are managed under Operations. | IS-200.c SM L4 V27 note p139 |
| `fema.po.food-unit` | Food Unit | yes | term | extra | no | Service Branch | Supplies food for responder personnel for the whole incident, including remote locations and people who cannot leave field assignments. | IS-200.c SM L4 V28 |
| `fema.po.supply-unit` | Supply Unit | yes | term | core | no | Support Branch | Orders personnel, equipment and supplies; receives, stores and inventories supplies; services nonexpendable equipment. | IS-200.c SM L4 V29 |
| `fema.po.facilities-unit` | Facilities Unit | yes | term | extra | no | Support Branch | Sets up, maintains and demobilizes facilities (ICP, base, camps) and provides facility security. | IS-200.c SM L4 V29 |
| `fema.po.ground-support-unit` | Ground Support Unit | yes | term | extra | no | Support Branch | Supports out-of-service resources; transports personnel and supplies; fuels and maintains vehicles; implements the Traffic Plan. | IS-200.c SM L4 V29 |
| `fema.po.time-unit` | Time Unit | yes | term | core | no | Finance/Administration Section | Records equipment and personnel time. | IS-200.c SM L4 V31 p143 |
| `fema.po.procurement-unit` | Procurement Unit | yes | term | core | no | Finance/Administration Section | Administers financial matters for vendor contracts, leases and fiscal agreements. | IS-200.c SM L4 V31 p143 |
| `fema.po.comp-claims-unit` | Compensation/Claims Unit | yes | term | core | no | Finance/Administration Section | Handles financial concerns from property damage, injuries or fatalities at the incident. | IS-200.c SM L4 V31 p143 |
| `fema.po.cost-unit` | Cost Unit | yes | term | core | no | Finance/Administration Section | Tracks costs, analyzes cost data, makes estimates and recommends cost-saving measures. | IS-200.c SM L4 V31 p143 |
| `fema.po.finance-tech-spec` | Single finance function via a Technical Specialist | - | rule | extra | no | Finance/Administration Section | When only one finance function (e.g., cost analysis) is needed, a Technical Specialist in Planning can provide it instead of activating the section. | IS-200.c SM L4 V30 p142 |
| `fema.po.ii-placement` | Where I/I can be placed | - | set | core | no | Intelligence/Investigations | Planning Section, Operations Section, Command Staff, a separate General Staff section, or a combination. | IS-200.c SM L4 V32 p144; NIMS 2017 Fig A-11 p109 |
| `fema.po.ics-tools` | ICS tools to have at an incident | - | set | extra | no | - | The affected jurisdiction's EOP; agency policies and procedures manuals; maps of the affected area. | IS-200.c SM L4 V34 p146 |
| `fema.po.ics-forms` | ICS Forms | yes | term | core | no | - | Standard forms for recording and communicating incident information; know each form's purpose, preparation and distribution. | IS-200.c SM L4 V35 p147 |
| `fema.po.ics-201` | ICS Form 201, Incident Briefing (ICS 201) | yes | term | core | no | ICS Forms | An eight-part form giving the IC/UC status information for briefing incoming resources or a new IC: situation, objectives, current actions, resource status. | IS-200.c SM L4 V36 p148 |
| `fema.po.ics-201-initial-iap` | ICS 201 can serve as the initial IAP | - | rule | core | no | ICS Form 201, Incident Briefing | The ICS 201 occasionally serves as the initial IAP until a Planning Section is established and generates an IAP. | IS-200.c SM L4 V37 p149 |
| `fema.po.other-forms` | Other common ICS forms (202-221, 308) | - | set | extra | no | ICS Forms | E.g., 202 Incident Objectives, 203 Organization Assignment List, 204 Assignment List, 205 Radio Communications Plan, 206 Medical Plan, 211 Check-In List, 213 General Message, 214 Unit Log, 215 Operational Planning Worksheet, 221 Demobilization Plan. | IS-200.c SM L4 V39 p153 |

### Topic 8. Briefings and meetings (B. IS-200.c)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.bm.iap-process` | Incident Action Planning Process | yes | term | core | no | Operational Period Planning Cycle | The progression of meetings and briefings used to develop the IAP used at the Operational Period Briefing. | IS-200.c SM L5 V2 p157 |
| `fema.bm.initial-assessment` | Initial response and assessment | yes | term | core | no | Size-up | The first responder on scene makes the initial (rapid) assessment and takes immediate actions; basis for situational awareness and resource requests. | IS-200.c SM L5 V2 note |
| `fema.bm.agency-admin-briefing` | Agency Administrator Briefing | yes | term | core | no | Delegation of Authority | Senior official's briefing to incident managers when the IC/UC works outside normal responsibilities; supports the delegation of authority with priorities and constraints. | IS-200.c SM L5 V2 note |
| `fema.bm.incident-briefing` | Incident briefing | yes | term | core | no | ICS Form 201, Incident Briefing | Marks the transition from reactive to proactive management; initial responder briefs the incoming IC/UC. | IS-200.c SM L5 V2 note |
| `fema.bm.initial-uc-meeting` | Initial Unified Command Meeting | yes | term | core | no | Unified Command | UC members meet privately to share priorities, limitations and concerns and usually develop initial joint objectives. | IS-200.c SM L5 V2 note |
| `fema.bm.strategy-meeting` | Strategy Meeting/Command and General Staff Meeting | yes | term | core | no | General Staff | IC/UC meets Command and General Staff to discuss objectives and give direction on how to meet them. | IS-200.c SM L5 V2 note |
| `fema.bm.tactics-meeting` | Tactics Meeting | yes | term | core | no | Operations Section Chief | Led by the OSC to review proposed tactics and plan resource assignments; with Logistics Chief, Safety Officer, Resources Unit Leader; uses ICS 215 and 215A. | IS-200.c SM L5 V2 note |
| `fema.bm.planning-meeting` | Planning Meeting | yes | term | core | no | Tactics Meeting | Final review and approval of operational plans and resource assignments; ideally no surprises; staffs confirm they can support the plan. | IS-200.c SM L5 V2 note; NIMS Glossary p78 |
| `fema.bm.three-levels` | Three levels of briefings | - | set | core | no | - | Staff level, field level, section level. | IS-200.c SM L5 V4 p162 |
| `fema.bm.staff-level` | Staff-level briefing | yes | term | core | no | Three levels of briefings | Delivered to resources on nonoperational and support tasks at the ICP or Base. | IS-200.c SM L5 V4 p162 |
| `fema.bm.field-level` | Field-level briefing | yes | term | core | no | Three levels of briefings | Delivered to individual resources or crews assigned to operational tasks at or near the incident site. | IS-200.c SM L5 V4 p162 |
| `fema.bm.section-level` | Section-level briefing | yes | term | core | no | Three levels of briefings | Delivered to an entire Section by its Section Chief; includes the Operational Period Briefing. | IS-200.c SM L5 V4 p162 |
| `fema.bm.briefing-topics` | Briefing topics checklist | - | set | extra | no | Three levels of briefings | Situation and objectives; safety and emergency procedures; tasks; facilities; communications; expectations; resource process; schedules; questions. | IS-200.c SM L5 V6 p165 |
| `fema.bm.opb` | Operational Period Briefing | yes | term | core | no | Section-level briefing; Incident Action Plan | Conducted at the start of each operational period to present the IAP to Operations supervisory personnel; concise; also called Shift Operations Briefing. | IS-200.c SM L5 V10 p169 |
| `fema.bm.opb-facilitator` | Planning Section Chief facilitates the Operational Period Briefing | - | rule | core | no | Operational Period Briefing | The Planning Section Chief reviews the agenda, facilitates, and closes by announcing the next Planning Meeting and briefing. | IS-200.c SM L5 V11-V12 p170-171 |
| `fema.bm.opb-roles` | Operational Period Briefing agenda roles | - | set | extra | no | Operational Period Briefing | IC/PSC present objectives; Situation Unit Leader gives the situation; current and oncoming OSCs; Logistics; Finance; PIO; Liaison; technical specialists; Safety Officer; IC directs deployment. | IS-200.c SM L5 V11-V12 |

### Topic 9. Flexibility, resources and incident complexity (B. IS-200.c)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.fx.flexibility-standardization` | Flexibility does not override common terminology | - | rule | core | no | Common Terminology; Modular Organization | Flexibility is exercised only within the standard ICS structure and position titles; no nonstandard structures or titles. | IS-200.c SM L6 V2 p177 |
| `fema.fx.structure-basis` | What the ICS structure is based on | - | set | core | no | Modular Organization | Size and complexity of the incident; specifics of the hazard environment; incident planning process and objectives. | IS-200.c SM L6 V3 p178 |
| `fema.fx.expansion-rules` | Expansion and contraction rules | - | set | core | no | Modular Organization | Fill only positions needed for objectives; each activated element has a person in charge; maintain effective span of control. | IS-200.c SM L6 V5 p180 |
| `fema.fx.activate-without-chief` | Elements can be activated without their Section Chief | - | rule | core | no | Section; Unit | E.g., the Situation Unit can be activated without a Planning Section Chief; supervision then rests with the IC. | IS-200.c SM L6 V7 p182 |
| `fema.fx.no-combining` | Do not combine positions or create titles | - | rule | core | no | - | Rather than combining positions, assign one person to supervise multiple units using standard titles; titles may not be shortened or combined. | IS-200.c SM L6 V9 p184; L9 V10 |
| `fema.fx.rm-process` | Incident resource management process | - | set | core | no | Comprehensive Resource Management | Identify requirements; order and acquire; mobilize; track and report; demobilize; reimburse and restock. | IS-200.c SM L6 V10 p185; IS-700.b SM L2 V14 |
| `fema.fx.workload` | Predictable workload patterns | - | set | extra | no | Planning Section; Logistics Section | Operations: immediate and massive; Resources and Situation Units busy early, Documentation and Demobilization later; Supply and Communications busy at start and end. | IS-200.c SM L6 V12 p187 |
| `fema.fx.complexity-analysis` | Complexity analysis | yes | term | core | no | - | An analysis to identify resource requirements and whether the management structure is appropriate; too few resources risk life and property, too many risk unsupervised unqualified staff. | IS-200.c SM L6 V13 p188 |
| `fema.fx.complexity-factors` | Complexity analysis factors | - | set | core | no | Complexity analysis | Safety; impacts on life, property, economy; hazmat; weather; cascading events; crime scene/terrorism; political sensitivity and media; area and jurisdictions; resource availability. | IS-200.c SM L6 V14 p189 |
| `fema.fx.resource-typing` | Resource Typing | yes | term | core | no | Resources | Defining and categorizing incident resources by capability so responders get the right personnel and equipment. | IS-200.c SM L6 V17 p194; IS-700.b SM L2 V4 |
| `fema.fx.capability` | Capability | yes | term | core | no | Resource Typing | The core capability for which a resource is most useful. | IS-200.c SM L6 V17; NIMS changes slide 12 |
| `fema.fx.category` | Category | yes | term | core | no | Resource Typing | The function for which a resource is most useful (e.g., firefighting, law enforcement, health and medical). | IS-200.c SM L6 V17; IS-700.b SM L2 V4 |
| `fema.fx.kind` | Kind | yes | term | core | no | Resource Typing | A broad class of resource: personnel, teams, facilities, equipment or supplies. | NIMS 2017 Glossary p76; IS-200.c SM L6 V17 |
| `fema.fx.type` | Type | yes | term | core | no | Kind | A resource's minimum capability to perform its function, based on size, power, capacity (equipment) or experience and qualifications (personnel/teams). | NIMS 2017 Glossary p81; IS-200.c SM L6 V17 |
| `fema.fx.type1-most` | Type 1 is the most capable resource | - | number | core | no | Type | Type 1 has greater capacity than Types 2, 3 or 4 (IS-200.c writes Type I to Type IV). | IS-700.b SM L2 V4 p35; IS-200.c SM L6 V20 p197 |
| `fema.fx.ambulance-example` | Typing example: Type 3 Ambulance Ground Team | - | number | extra | no | Type; Kind | Category EMS, kind Team: crew of 2 (EMT and operator), BLS capability, transports 2 non-ambulatory patients. | IS-200.c SM L6 V17 note |
| `fema.fx.rtlt` | Resource Typing Library Tool (RTLT) | yes | term | extra | yes | Resource Typing | FEMA's online catalogue of national resource typing definitions, position qualifications and Position Task Books. | IS-200.c SM L6 V21 p198 |
| `fema.fx.kind-without-type` | Ordering a kind without a type risks the wrong resource | - | rule | core | no | Kind; Type | Requesting a resource kind without a type ("We need a HazMat team") could bring an inadequate resource. | IS-200.c SM L6 V19 p196 |
| `fema.fx.incident-typing` | Incident typing | yes | term | core | no | Complexity analysis | Incidents are categorized into five types by complexity: Type 5 least complex, Type 1 most complex; used for resource decisions and ordering IMTs. | IS-200.c SM L6 V24 p201 |
| `fema.fx.type-3-5-majority` | Most incidents are Type 3-5 | - | number | extra | no | Incident typing | The vast majority of incidents are in the Type 3-5 range. | IS-200.c SM L6 V25 p202 |
| `fema.fx.type5` | Type 5 incident | - | number | core | no | Incident typing | One or two single resources with up to six personnel; only the IC activated; contained in first operational period; no written IAP. | IS-200.c SM L6 V26 p203 |
| `fema.fx.type4` | Type 4 incident | - | number | core | no | Incident typing | Several resources; Command/General Staff only if needed; one operational period in control phase; no written IAP for non-hazmat, documented operational briefing. | IS-200.c SM L6 V27 p204 |
| `fema.fx.type3` | Type 3 incident | - | number | core | no | Incident typing | Capabilities exceed initial response; some or all Command/General Staff and Division/Group or Unit positions; may run multiple operational periods; written IAP may be required. | IS-200.c SM L6 V28 p205 |
| `fema.fx.type2` | Type 2 incident | - | number | core | no | Incident typing | Regional/national resources; most or all Command and General Staff; ops personnel normally <=200 per operational period, total <=500 (guidelines); written IAP each period. | IS-200.c SM L6 V29 p206 |
| `fema.fx.type1` | Type 1 incident | - | number | core | no | Incident typing | National resources; all Command and General Staff; branches; ops personnel often >500 per period and total usually >1,000; written IAP; may result in disaster declaration. | IS-200.c SM L6 V30 p207 |
| `fema.fx.imt` | Incident Management Team (IMT) | yes | term | core | no | Command Staff; General Staff | A rostered group of ICS-qualified personnel: an IC, Command and General Staff, and others in key ICS positions. | NIMS 2017 Glossary p75; IS-200.c SM L6 V31 |
| `fema.fx.imt-types` | IMT types | - | set | extra | no | Incident Management Team | Type 5 local village/township; Type 4 city, county or fire district; Type 3 state, territory, tribal or metro area; Types 2 and 1 national and state. | IS-200.c SM L6 V31 p208 |

### Topic 10. Transfer of command and initial response (B. IS-200.c)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.tc.transfer` | Transfer of command | yes | term | core | no | Establishment and Transfer of Command | The process of moving responsibility for incident command from one IC to another IC or UC. | IS-200.c SM L7 V2 p219 |
| `fema.tc.when` | When command is transferred (IS-200.c list) | - | set | core | no | Transfer of command | Legal requirement; effectiveness or efficiency; complexity changes; relief on long incidents; personal emergencies; agency administrator directs it. | IS-200.c SM L7 V3 p220 |
| `fema.tc.more-qualified` | A more qualified person does not automatically take command | - | rule | core | no | Transfer of command | They may assume command per agency guidelines, maintain command as is and monitor, or request a more qualified IC from a higher jurisdiction. | IS-200.c SM L7 V5 p222 |
| `fema.tc.procedure` | Transfer procedure: face-to-face with full briefing | - | rule | core | no | Transfer of command | Whenever possible transfer face-to-face with a complete briefing; communicate the effective time and date to all personnel. | IS-200.c SM L7 V6 p223 |
| `fema.tc.briefing-elements` | Transfer of command briefing elements | - | set | core | no | Transfer of command | Situation status; objectives and priorities; current organization; resource assignments; resources ordered/en route; facilities; communications plan; prognosis and concerns; introductions of staff. | IS-200.c SM L7 V8 p225 |
| `fema.tc.ics201-document` | Use ICS 201 to document the transfer | - | rule | core | no | ICS Form 201, Incident Briefing | Information shared must be documented; the initial IC can use ICS Form 201; complex transfers document every aspect. | IS-200.c SM L7 V9 p226 |
| `fema.tc.first-on-scene` | First on scene explicitly establishes command | - | rule | core | no | Establishment and Transfer of Command | The first on scene explicitly establishes incident or unified command and states and records when command is transferred. | IS-200.c SM L8 V8 p241 |
| `fema.tc.initial-ic-in-uc` | Initial IC may join a Unified Command | - | rule | extra | no | Unified Command | As complexity grows the initial IC may continue as a member of a UC, or more senior personnel may be appointed. | IS-200.c SM L8 V36 p273 |

### Topic 11. NIMS fundamentals and components (C. IS-700.b)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.nf.editions` | NIMS editions: 2004, 2008, 2017 (third edition) | - | number | core | yes | NIMS | NIMS 2017 (Third Edition, October 2017) replaces the 2008 NIMS and retains concepts from 2004 and 2008. | NIMS 2017 changes slides 2-4 |
| `fema.nf.applicability` | NIMS applicability and scope | - | rule | core | no | NIMS | Applies to all stakeholders with incident responsibilities and to all incidents regardless of size, complexity or scope, plus planned events. | NIMS 2017 p12; IS-700.b SM L1 V5 p19 |
| `fema.nf.is-is-not` | What NIMS is and is not | - | contrast | core | no | NIMS | NIMS is not only ICS, not only for certain responders, not static, not a response plan, not only for large incidents, not a resource-ordering system, not a communications plan. | NIMS 2017 Table 1 p12; IS-700.b SM L1 V6 p20 |
| `fema.nf.priorities` | Incident management priorities | - | set | core | no | - | Saving lives, stabilizing the incident, and protecting property and the environment. | IS-700.b SM L1 V8 p22 |
| `fema.nf.guiding-principles` | Three NIMS guiding principles | - | set | core | no | NIMS | Flexibility, Standardization, Unity of Effort. | IS-700.b SM L1 V8 p22; NIMS 2017 |
| `fema.nf.mission-area` | Mission Area | yes | term | core | no | - | One of five areas (Prevention, Protection, Mitigation, Response, Recovery) designated in the National Preparedness Goal to group core capabilities. | NIMS 2017 Glossary p76 |
| `fema.nf.nps` | National Preparedness System | yes | term | extra | no | Mission Area | An organized process to achieve the National Preparedness Goal of a secure and resilient Nation. | NIMS 2017 Glossary p78 |
| `fema.nf.flexibility` | Flexibility | yes | term | core | no | Three NIMS guiding principles | NIMS scales from routine local incidents to those needing interstate mutual aid or federal assistance, and adapts to any hazard or setting. | IS-700.b SM L1 V9 p23 |
| `fema.nf.standardization` | Standardization | yes | term | core | no | Three NIMS guiding principles | Standard structures, practices and common terminology that support interoperability among organizations. | IS-700.b SM L1 V10 p24 |
| `fema.nf.unity-of-effort` | Unity of Effort | yes | term | core | no | Three NIMS guiding principles | Coordinating activities among organizations to achieve common objectives while each keeps its own authority and accountability; added as a principle in NIMS 2017. | IS-700.b SM L1 V11 p25; NIMS 2017 changes slide 8 |
| `fema.nf.unity-effort-vs-command` | Unity of effort vs unity of command | - | contrast | core | no | Unity of Effort; Unity of Command | Unity of effort coordinates through cooperation and common interests without interfering with agencies' authorities; unity of command means one supervisor each. | NRF p40; NIMS Glossary p81 |
| `fema.nf.components-2017` | Three NIMS components (2017) | yes: NIMS components | set | core | no | NIMS | Resource Management; Command and Coordination; Communications and Information Management. | NIMS 2017 changes slide 9; IS-700.b SM L1 V12 p26 |
| `fema.nf.components-2008` | NIMS 2008 had five components | - | contrast | extra | yes | Three NIMS components (2017) | Preparedness; Communications and Information Management; Resource Management; Command and Management; Ongoing Management and Maintenance. 2017 removed Preparedness. | NIMS 2017 changes slides 4, 9 |
| `fema.nf.rm-def` | Resource Management component | yes | term | core | no | Three NIMS components (2017) | Standard mechanisms to systematically manage personnel, equipment, supplies, teams and facilities before and during incidents. | NIMS 2017 changes slide 10; IS-100.c SM L1 V16 |
| `fema.nf.cc-def` | Command and Coordination component | yes | term | core | no | Three NIMS components (2017) | Leadership roles, processes and recommended structures for incident management at operational and incident support levels. | NIMS 2017 changes slide 10 |
| `fema.nf.cim-def` | Communications and Information Management component | yes | term | core | no | Three NIMS components (2017) | Systems and methods ensuring incident personnel and decision makers have the means and information to make and communicate decisions. | NIMS 2017 changes slide 10 |
| `fema.nf.mission-areas` | Five mission areas | - | set | core | no | - | Prevention, Protection, Mitigation, Response, Recovery. | NIMS Glossary 'Mission Area' p76; NPG p7 |

### Topic 12. NIMS resource management (C. IS-700.b)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.rm.preparedness-4` | Four resource management preparedness activities | - | set | core | no | Resource Management component | Identifying and typing resources; qualifying, certifying and credentialing personnel; planning for resources; acquiring, storing and inventorying resources. | IS-700.b SM L2 V3 p34 |
| `fema.rm.typing-4` | Four elements of a typing definition | - | set | core | no | Resource Typing | Capability, Category, Kind, Type. | IS-700.b SM L2 V4 p35; NIMS changes slide 12 |
| `fema.rm.qualification` | Qualification | yes | term | core | no | Authority Having Jurisdiction | Personnel meet minimum established standards (training, experience, physical and medical fitness) to fill specific positions. | IS-700.b SM L2 V6 p37 |
| `fema.rm.certification` | Certification | yes | term | core | no | Qualification | Recognition from an AHJ or third party that an individual has completed qualification for a position. | IS-700.b SM L2 V6 p37; NIMS Glossary p72 |
| `fema.rm.credentialing` | Credentialing | yes | term | core | no | Certification | Documentation, typically an ID card or badge, that identifies personnel and verifies their qualifications for a position. | IS-700.b SM L2 V6 p37; NIMS Glossary p72 |
| `fema.rm.badging` | Badging | yes | term | extra | no | Credentialing | Assigning physical incident-specific credentials to establish legitimacy and permit access to incident sites. | NIMS 2017 Glossary p71 |
| `fema.rm.nqs` | National Qualification System (NQS) | yes | term | extra | no | Qualification | A common language and approach for qualifying, certifying and credentialing incident personnel for mutual aid. | NRF p18 |
| `fema.rm.planning-strategies` | Resource planning strategies | - | set | extra | no | - | Stockpiling; mutual aid agreements; reassigning resources from non-essential tasks; contracts with vendors. | IS-700.b SM L2 V8 p39 |
| `fema.rm.inventory-vs-tracking` | Inventorying vs tracking | - | contrast | core | no | - | Resource inventorying is a preparedness activity outside incident response; resource tracking occurs during an incident. | IS-700.b SM L2 V9 p40 |
| `fema.rm.resource-tracking` | Resource Tracking | yes | term | core | no | Inventorying vs tracking | The process all incident personnel use to maintain information on the location and status of resources ordered, deployed or assigned. | NIMS 2017 Glossary p79 |
| `fema.rm.identify-requirements` | Identify requirements | - | procedure | core | no | Incident resource management process | Identify type and quantity needed, location, and who will receive and use the resources; continually refine. | IS-700.b SM L2 V15 p47 |
| `fema.rm.order-acquire` | Order and acquire | - | procedure | core | no | Incident resource management process | Order locally first; otherwise by contracts, mutual aid, or requests to another level of government; the providing organization must consent. | IS-700.b SM L2 V16 p48 |
| `fema.rm.mobilization` | Mobilization | yes | term | core | no | Order and acquire | Processes for activating, assembling and transporting requested resources; deploying personnel get departure, travel, reporting, assignment, duration and order/incident numbers. | NIMS 2017 Glossary p77; IS-700.b SM L2 V17 p49 |
| `fema.rm.activation` | Activation (fixed facilities) | - | rule | extra | no | Mobilization | Mobilizing fixed facility resources is called activation rather than deployment. | IS-700.b SM L2 V17 p49 |
| `fema.rm.unrequested` | Why unrequested resources are a problem | - | set | core | no | Dispatch/Deployment | Add supervisory, logistical and safety needs; deplete resources; complicate tracking and accountability; block access for requested resources. | IS-700.b SM L2 V18 p50 |
| `fema.rm.track-report` | Track and report | - | procedure | core | no | Resource Tracking | Track resources from mobilization through demobilization; purpose is accountability and responder safety. | IS-700.b SM L2 V19 p51 |
| `fema.rm.demobilization` | Demobilization | yes | term | core | no | Mobilization | The orderly, safe, and efficient return of an incident resource to its original location and status. | NIMS 2017 Glossary p73; IS-700.b SM L2 V20 |
| `fema.rm.demob-early` | Plan demobilization at the start | - | rule | core | no | Demobilization | Managers begin demobilization planning at the same time they begin mobilizing resources. | IS-700.b SM L2 V20 p52 |
| `fema.rm.reimbursement` | Reimbursement | yes | term | core | no | - | A mechanism to recoup funds expended for incident-specific activities; pays resource providers' expenses. | NIMS 2017 Glossary p79; IS-700.b SM L2 V21 |
| `fema.rm.ma-scope` | Levels at which mutual aid agreements exist | - | set | extra | no | Mutual Aid Agreement or Assistance Agreement | Neighbouring communities; within a state; between states, territories and tribes; between federal agencies; internationally; with NGOs and private sector. | IS-700.b SM L2 V28 p60 |
| `fema.rm.ma-process` | Mutual aid process | - | procedure | core | no | Mutual aid | Provider evaluates the request against its own needs; if it can spare the resource it deploys per the agreement; the receiver can decline unsuitable resources. | IS-700.b SM L2 V29 p61 |

### Topic 13. Command and coordination structures; ICS in NIMS (C. IS-700.b)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.cc.four-structures` | Four NIMS Command and Coordination structures | - | set | core | no | Command and Coordination component | ICS, Emergency Operations Centers, MAC Groups, Joint Information System. | IS-700.b SM L4 V2 p87; NIMS changes slide 19 |
| `fema.cc.macs` | Multiagency Coordination System (MACS) | yes | term | core | no | Four NIMS Command and Coordination structures | An overarching term for the NIMS Command and Coordination systems: ICS, EOCs, MAC Group/policy groups, and JISs. | NIMS 2017 Glossary p77; NIMS changes slide 41 |
| `fema.cc.macs-2008` | MACS redefined in 2017 | - | contrast | core | yes | Multiagency Coordination System | NIMS 2008 treated MACS as an architecture with EOCs and MAC Groups as elements; NIMS 2017 made it the umbrella for ICS, EOCs, MAC Groups and JIS. | NIMS 2017 changes slide 41 |
| `fema.cc.two-forms` | Two forms of incident command | - | set | core | no | Incident Command | A single Incident Commander or a Unified Command. | IS-700.b SM L4 V10 p96 |
| `fema.cc.single-ic` | When a single IC is designated | - | rule | core | no | Incident Commander | Single jurisdiction without overlapping responsibility; across boundaries, organizations may still agree on a single IC. | IS-700.b SM L4 V11 p97 |
| `fema.cc.uc-partners` | UC partners keep their own authority | - | rule | core | no | Unified Command | Each UC partner keeps authority, responsibility and accountability for its own personnel; together they set objectives, a single ordering system, integrated operations. | IS-700.b SM L4 V12 p98 |
| `fema.cc.one-pio` | Only one PIO per incident | - | rule | core | no | Public Information Officer | Whether command is single or unified, only one PIO should be designated per incident; assistants may come from other agencies. | IS-700.b SM L4 V13 note p99-100 |
| `fema.cc.safety-authority` | Safety Officer's immediate authority | - | rule | core | no | Safety Officer | The Safety Officer has immediate authority to stop and/or prevent unsafe acts; ultimate safety responsibility stays with the IC/UC and supervisors. | IS-700.b SM L4 V13 note |
| `fema.cc.ops-objectives` | Typical Operations objectives | - | set | extra | no | Operations Section | Saving lives; reducing the immediate hazard; protecting property and environment; establishing situational control; restoring normal operations. | IS-700.b SM L4 V15 note p102 |
| `fema.cc.icp` | Incident Command Post (ICP) | yes | term | core | no | Incident Facilities and Locations | The field location where the primary functions of incident command are performed; may be co-located with the base. | NIMS 2017 Glossary p74; IS-700.b SM L4 V16 |
| `fema.cc.base` | Incident Base | yes | term | core | no | Incident Facilities and Locations | Where personnel coordinate and administer logistics functions; typically only one per incident; may be co-located with the ICP. | NIMS 2017 Glossary p74 |
| `fema.cc.camp` | Camp | yes | term | core | no | Incident Base | A site separate from the base, equipped and staffed for sleeping, food, water and sanitation for incident personnel. | NIMS 2017 Glossary p72 |
| `fema.cc.imat` | Incident Management Assistance Team (IMAT) | yes | term | core | no | Incident Management Team | An IMT that supports on-scene personnel and/or the affected jurisdiction(s); FEMA IMATs help provide federal assistance. | NIMS 2017 Glossary p75; IS-700.b SM L4 V19 |
| `fema.cc.area-command` | Area Command | yes | term | core | no | Incident Command | Oversees management of multiple incidents, or a very large or evolving situation with multiple ICS organizations. | NIMS 2017 Glossary p71; IS-700.b SM L4 V20 |
| `fema.cc.area-command-when` | When Area Command is used | - | rule | core | no | Area Command | Activated only if necessary; especially several ICPs requesting similar scarce resources; sets priorities between incidents. | IS-700.b SM L4 V20 p108 |
| `fema.cc.unified-area-command` | Unified Area Command | yes | term | extra | no | Area Command; Unified Command | Area Command established when incidents under it are multijurisdictional. | NIMS 2017 Glossary p81 |
| `fema.cc.incident-complex` | Incident Complex | yes | term | extra | no | Area Command | Two or more incidents in the same general area assigned to a single IC or UC. | NIMS 2017 Glossary p75 |
| `fema.cc.ac-vs-uc` | Area Command vs Unified Command | - | contrast | core | no | Area Command; Unified Command | Area Command oversees several incidents/ICS organizations and allocates scarce resources; UC is joint command of one incident by multiple agencies. | IS-700.b SM L4 V20-V22 |

### Topic 14. Emergency Operations Centers (C. IS-700.b)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.eo.eoc-functions` | EOC primary functions | - | set | core | no | Emergency Operations Center | Collecting, analyzing and sharing information; supporting resource needs and requests; coordinating plans and future needs; sometimes coordination and policy direction. | IS-700.b SM L5 V2 note p117 |
| `fema.eo.ics-vs-eoc` | ICS on scene, EOCs off site | - | contrast | core | no | Emergency Operations Center; Incident Command System | ICS manages on-scene tactical response; EOCs are off-site and support incident command. | IS-700.b SM L5 V2 p117; NIMS changes slide 30 |
| `fema.eo.eoc-forms` | EOCs can be fixed, temporary or virtual | - | rule | extra | no | Emergency Operations Center | EOCs can be fixed locations, temporary facilities, or virtual structures with remote staff. | IS-700.b SM L5 V2 note |
| `fema.eo.doc` | Departmental Operations Center (DOC) | yes | term | core | no | Emergency Operations Center | An operations center dedicated to a single department or agency, focused on internal agency incident management. | NIMS 2017 Glossary p73 |
| `fema.eo.three-structures` | Three common EOC team structures | - | set | core | no | Emergency Operations Center | ICS or ICS-like structure; Incident Support Model (ISM) structure; Departmental structure. | IS-700.b SM L5 V3 p119; NIMS changes slide 31 |
| `fema.eo.ics-like` | ICS or ICS-like EOC structure | yes | term | core | no | Three common EOC team structures | Uses the standard ICS structure, often with 'Coordination' or 'Support' added to section titles; familiar and aligned with the field. | IS-700.b SM L5 V4 p120; NIMS 2017 p127 |
| `fema.eo.ism` | Incident Support Model (ISM) | yes | term | core | no | Three common EOC team structures | EOC structure that separates situational awareness from planning and combines operations and logistics into incident support. | IS-700.b SM L5 V5 p121 |
| `fema.eo.ism-sections` | ISM EOC sections | - | set | core | yes | Incident Support Model | Situational Awareness, Planning Support, Resources Support, and Center Support Sections. | NIMS 2017 App B Tab 2 p130; changes slide 33 |
| `fema.eo.departmental` | Departmental EOC structure | yes | term | core | no | Three common EOC team structures | Uses day-to-day departmental relationships so representatives function with minimal startup time. | IS-700.b SM L5 V6 p122 |
| `fema.eo.config-factors` | What EOC organization varies with | - | set | extra | no | Emergency Operations Center | Authorities; staffing; agencies represented; facilities; communications; political considerations; the mission. | IS-700.b SM L5 V3 p119 |
| `fema.eo.activation-triggers` | EOC activation triggers | - | set | core | no | Emergency Operations Center | Multiple jurisdictions; IC/UC expects rapid expansion; past precedent; director or official directs; imminent incident; EOP thresholds; significant population impacts. | IS-700.b SM L5 V8 p124 |
| `fema.eo.levels` | EOC activation levels | - | set | core | no | Emergency Operations Center | 3 Normal Operations/Steady State; 2 Enhanced Steady State/Partial Activation; 1 Full Activation. | NIMS 2017 Table 2 p49; IS-700.b SM L5 V9 p125 |
| `fema.eo.level3` | Level 3: Normal Operations/Steady State | - | number | core | no | EOC activation levels | Normal activities when no incident or specific risk is identified; routine watch and warning. | NIMS 2017 Table 2 p49; NIMS Glossary p78 |
| `fema.eo.level2` | Level 2: Enhanced Steady State/Partial Activation | - | number | core | no | EOC activation levels | Certain team members activated to monitor a credible threat or support a new, potentially evolving incident. | NIMS 2017 Table 2 p49 |
| `fema.eo.level1` | Level 1: Full Activation | - | number | core | no | EOC activation levels | EOC team activated, including all assisting agencies, for a major incident or credible threat. | NIMS 2017 Table 2 p49 |

### Topic 15. MAC Groups, JIS and interconnectivity (C. IS-700.b)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.mj.mac-group` | Multiagency Coordination Group (MAC Group) | yes | term | core | no | Four NIMS Command and Coordination structures | Agency administrators/executives or designees who give policy guidance, support resource prioritization and allocation, and enable decision making; also called policy groups. | NIMS 2017 Glossary p77; IS-700.b SM L6 V3 |
| `fema.mj.mac-not-command` | MAC Groups do not command | - | rule | core | no | Multiagency Coordination Group | The MAC Group does not perform incident command functions nor replace EOCs or dispatch organizations. | IS-700.b SM L6 V3 p132 |
| `fema.mj.elected-officials` | Elected and appointed officials operate at the policy level | - | rule | core | no | Multiagency Coordination Group | They are responsible for constituents' safety and overall effectiveness of incident management; the MAC Group lets them work together. | IS-700.b SM L6 V5 p134 |
| `fema.mj.jis` | Joint Information System (JIS) | yes | term | core | no | Four NIMS Command and Coordination structures | Integrates incident information and public affairs to provide consistent, coordinated, accurate, accessible, timely and complete information; supports ICS, EOCs and MAC Groups. | NIMS 2017 Glossary p76; IS-700.b SM L6 V9 |
| `fema.mj.jis-activities` | JIS activities | - | set | extra | no | Joint Information System | Coordinated interagency messages; public information plans and strategies; advising on public affairs; managing rumors and inaccurate information. | IS-700.b SM L6 V9 note; NIMS changes slide 40 |
| `fema.mj.pio-jic-elements` | PIO and JIC are supporting elements of the JIS | - | rule | core | no | Joint Information System; Joint Information Center | The PIO and JIC support the JIS; the JIC houses JIS operations; normally one JIC per incident, multiple allowed. | IS-700.b SM L6 V10 p140 |
| `fema.mj.info-cycle` | Public information cycle | - | set | core | no | Joint Information System | Gathering, verifying, coordinating, disseminating information. | IS-700.b SM L6 V11 p141 |
| `fema.mj.jic-types` | Types of JIC | - | set | extra | no | Joint Information Center | Incident, Virtual, Satellite, Area, National JIC. | NIMS 2017 Table 3 p54 |
| `fema.mj.interconnectivity` | Interconnectivity of NIMS structures | - | procedure | core | no | Four NIMS Command and Coordination structures | Local personnel use ICS; large/complex incidents activate EOCs; MAC Groups give senior guidance; a JIC manages JIS messaging across all levels. | IS-700.b SM L6 V16 p147 |
| `fema.mj.federal-involvement` | When the federal government becomes involved | - | set | core | no | - | When governors or tribal leaders request and are approved; when federal interests are involved; as statute or regulation requires. | IS-700.b SM L6 V17 p148; NRF p40 |
| `fema.mj.stafford` | Stafford Act | yes | term | core | no | - | Robert T. Stafford Disaster Relief and Emergency Assistance Act; federal assistance when the President declares an emergency or major disaster. | IS-700.b SM L6 V17 p148; NRF p50 |
| `fema.mj.federal-lead` | When the federal government leads | - | rule | core | no | - | On federal property or where it has primary jurisdiction (e.g., terrorist attack, major oil spill); otherwise it usually supports. | IS-700.b SM L6 V17 p148 |

### Topic 16. Communications and information management (C. IS-700.b)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.ci.four-principles` | Four key communications and information systems principles | - | set | core | no | Communications and Information Management component | Interoperability; Reliability, Scalability and Portability; Resilience and Redundancy; Security. | IS-700.b SM L7 V3 p157; NIMS changes slide 43 |
| `fema.ci.situational-awareness` | Situational awareness | yes | term | core | no | - | Up-to-date understanding of the incident; establishing and maintaining it (with accessibility and voice and data interoperability) is a principal goal of the Communications and Information Management component. | NIMS 2017 p60 |
| `fema.ci.security-new` | Security added as fourth principle in 2017 | - | contrast | extra | yes | Four key communications and information systems principles | NIMS 2017 added Security as a fourth key principle. | NIMS 2017 changes slide 43 |
| `fema.ci.interoperability` | Interoperability | yes | term | core | no | Four key communications and information systems principles | The ability of systems, personnel and equipment to exchange functionality, data and services so organizations operate effectively together; within and across jurisdictions, via voice, data and video, in real time. | NIMS 2017 Glossary p75; IS-700.b SM L7 V4 |
| `fema.ci.reliable-portable-scalable` | Reliability, Scalability, and Portability | yes | term | core | no | Four key communications and information systems principles | Reliable: familiar, adaptable, dependable; portable: transportable and integrable across jurisdictions; scalable: expands from small to large and more users. | IS-700.b SM L7 V5 p159 |
| `fema.ci.resilient-redundant` | Resilience and Redundancy | yes | term | core | no | Four key communications and information systems principles | Resiliency: keep working after damage or loss of infrastructure; redundancy: duplicate systems provide alternate methods when primary fails. | IS-700.b SM L7 V6 p160 |
| `fema.ci.security` | Security | yes | term | core | no | Four key communications and information systems principles | Voice, data, networks and systems secured to the appropriate level to control access to sensitive information, in line with privacy laws. | IS-700.b SM L7 V7 p161 |
| `fema.ci.comm-types` | Standardized communications types | - | set | core | no | - | Strategic, Tactical, Support, Public communications. | IS-700.b SM L7 V10 p164 |
| `fema.ci.strategic` | Strategic communications | yes | term | core | no | Standardized communications types | High-level directions: resource priority decisions, roles and responsibilities, overall courses of action. | IS-700.b SM L7 V10 p164 |
| `fema.ci.tactical` | Tactical communications | yes | term | core | no | Standardized communications types | Communications among on-scene command and tactical personnel and cooperating agencies. | IS-700.b SM L7 V10 p164 |
| `fema.ci.support` | Support communications | yes | term | core | no | Standardized communications types | Coordination supporting strategic and tactical communications (e.g., hospitals on resource ordering, traffic and public works). | IS-700.b SM L7 V10 p164 |
| `fema.ci.public` | Public communications | yes | term | core | no | Standardized communications types | Alerts and warnings, press conferences. | IS-700.b SM L7 V10 p164 |
| `fema.ci.planning-determines` | Communications planning determines | - | set | extra | no | - | Which systems and platforms; who may use them; what information is essential; technical requirements. | IS-700.b SM L7 V11 p165 |
| `fema.ci.agreements` | Communications agreements | - | rule | extra | no | - | Agreements among parties to an EOP specify systems and platforms, network connections, data formats and cybersecurity. | IS-700.b SM L7 V12 p166 |
| `fema.ci.equipment-standards` | Equipment standards considerations | - | set | extra | no | - | Range of conditions; range of users; current national standards; durable equipment. | IS-700.b SM L7 V13 p167 |
| `fema.ci.situation-report` | Situation Report (SITREP) | yes | term | core | no | - | Confirmed or verified information on incident details; regular reports on status during the past operational period. | NIMS 2017 Glossary p80; IS-700.b SM L7 V17 |
| `fema.ci.status-report` | Status Report | yes | term | core | no | Situation Report | Reports such as spot reports with vital or time-sensitive information; function-specific, less formal than SITREPs, not on a set schedule. | NIMS 2017 Glossary p80 |
| `fema.ci.data-elements` | Data collection and processing elements | - | set | extra | no | - | Initial size-up/rapid assessment; data collection plans; validation; analysis; dissemination; updating. | IS-700.b SM L7 V19 p173 |
| `fema.ci.standards-formats` | Communications standards and formats (3 concepts) | - | set | core | no | - | Common terminology, plain language and compatibility; technology use and procedures; information security/operational security. | IS-700.b SM L7 V21 p175 |
| `fema.ci.no-10-codes` | Avoid 10-codes in multi-organization incidents | - | rule | core | no | Plain Language | Use plain language and clear text; avoid organizational acronyms or jargon such as "10-codes". | IS-700.b SM L7 V22 p176 |
| `fema.ci.opsec` | Operational Security (OPSEC) | yes | term | extra | no | - | Procedures protecting sensitive or classified operations (sources and methods, investigative techniques, informants). | NIMS 2017 Glossary p78; IS-700.b SM L7 V24 |
| `fema.ci.technologies` | Communications technologies | - | set | extra | no | - | Radio and telephone; public warning systems; GIS and incident management software; social media. | IS-700.b SM L7 V23 p177 |

### Topic 17. NRF purpose, scope and guiding principles (D. IS-800.d)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.nr.nrf` | National Response Framework (NRF) | yes | term | core | no | - | A guide to how the Nation responds to all types of disasters and emergencies, built on NIMS concepts to align roles and responsibilities. | NRF 4th ed p8 |
| `fema.nr.edition` | NRF Fourth Edition, October 28, 2019 | - | number | core | yes | National Response Framework | Fourth edition dated October 28, 2019; supersedes the third edition (June 2016); effective 60 days after publication. | NRF 4th ed cover and p7 |
| `fema.nr.history` | Federal Response Plan 1992, National Response Plan 2004 | - | number | extra | no | National Response Framework | The NRF builds on over 25 years of guidance beginning with the Federal Response Plan (1992) and the National Response Plan (2004). | NRF p7 |
| `fema.nr.response` | Response | yes | term | core | no | National Response Framework | Actions to save lives, protect property and the environment, stabilize the incident, and meet basic human needs; includes executing plans to enable recovery. | NRF p8 |
| `fema.nr.structure` | NRF structure: base document, ESF annexes, support annexes | - | set | core | no | National Response Framework | Base document; ESF annexes (federal coordinating structures by function); support annexes (common supporting processes). | NRF p9 |
| `fema.nr.support-annexes` | NRF support annexes | - | set | extra | yes | NRF structure: base document, ESF annexes, support annexes | Financial management; international coordination; public affairs; tribal relations; volunteer and donations management; worker safety and health. | NRF p9 |
| `fema.nr.cikr-superseded` | CIKR and Private Sector support annexes superseded by ESF #14 | - | rule | extra | no | NRF support annexes | The Critical Infrastructure and Key Resources and Private Sector Coordination Support Annexes were superseded by ESF #14. | NRF p9 |
| `fema.nr.scope` | NRF scope | - | rule | core | no | National Response Framework | All threats and hazards; applies to federal and SLTT departments in operations needing coordinated federal response; can be implemented partially or fully. | NRF p9-10 |
| `fema.nr.catastrophic` | Catastrophic incident | yes | term | core | no | - | An incident so severe that the Nation's collective capability to manage all response requirements would be overwhelmed. | NRF p10 |
| `fema.nr.audience` | NRF intended audience | - | set | extra | no | National Response Framework | Communities; private sector; NGOs; local, state, tribal, territorial and insular area governments; the federal government. | NRF p11 |
| `fema.nr.insular` | Insular areas | yes | term | extra | no | - | Guam, Commonwealth of the Northern Mariana Islands, American Samoa, and the U.S. Virgin Islands. | NRF p8 fn 6 |
| `fema.nr.principles` | Five NRF guiding principles | - | set | core | no | National Response Framework | Engaged partnership; tiered response; scalable, flexible and adaptable operational capabilities; unity of effort through unified command; readiness to act. | NRF p11-13 |
| `fema.nr.engaged` | Engaged partnership | yes | term | core | no | Five NRF guiding principles | Governments understand their needs best and must engage the whole community with shared goals and aligned capabilities. | NRF p12 |
| `fema.nr.tiered` | Tiered response | yes | term | core | no | Five NRF guiding principles | Most incidents begin and end locally; support is tiered: federally supported, state managed, locally executed. | NRF p12-13 |
| `fema.nr.scalable` | Scalable, flexible, and adaptable operational capabilities | yes | term | core | no | Five NRF guiding principles | Response must expand, adapt and stay resilient as incidents change in size, scope and complexity. | NRF p13 |
| `fema.nr.unity-uc` | Unity of effort through unified command | yes | term | core | no | Five NRF guiding principles; Unified Command | Unified command enables unity of effort when no single organization has the authority or resources to manage alone. | NRF p13 |
| `fema.nr.military-uc` | Military forces are not under incident UC | - | rule | extra | no | Unity of effort through unified command | Military forces stay under the military chain of command and coordinate with, but do not operate under, the IC or UC. | NRF p13 fn 14 |
| `fema.nr.readiness` | Readiness to act | yes | term | core | no | Five NRF guiding principles | A forward-leaning posture and decisive action; all response personnel anticipate and manage risk. | NRF p13 |
| `fema.nr.proactive-federal` | Federal pre-positioning before a request | - | rule | extra | no | Readiness to act | Before or during catastrophic incidents the federal government may mobilize assets in anticipation of a formal request. | NRF p14 |
| `fema.nr.quadrennial` | NRF reviewed quadrennially | - | number | extra | no | National Response Framework | Reviews evaluate the NRF's effectiveness on a quadrennial basis; DHS oversees maintenance. | NRF p56 |

### Topic 18. Community lifelines and core capabilities (D. IS-800.d)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.lc.lifeline` | Community lifeline | yes | term | core | no | - | A service that enables continuous operation of critical government and business functions and is essential to human health and safety or economic security. | NRF p7, p14 |
| `fema.lc.stabilization` | Stabilization | yes | term | core | no | Community lifeline | Occurs when immediate threats to life and property are anticipated, resourced and managed and basic lifeline services are provided to survivors. | NRF p7 fn 4 |
| `fema.lc.primary-effort` | Stabilizing lifelines is the primary response effort | - | rule | core | no | Community lifeline | Stabilizing community lifelines is the primary effort during response; lifelines reframe incident information for root cause and impact analysis. | NRF p14 |
| `fema.lc.seven` | Seven community lifelines (NRF 2019) | - | set | core | yes | Community lifeline | Safety and Security; Food, Water, Shelter; Health and Medical; Energy (Power & Fuel); Communications; Transportation; Hazardous Material. | NRF p14 Fig 1 |
| `fema.lc.safety-security` | Safety and Security lifeline | yes | term | core | no | Seven community lifelines (NRF 2019) | Law enforcement and government services, search and rescue, evacuations, firefighting, responder safety. | NRF Table 1 p15 |
| `fema.lc.fws` | Food, Water, Shelter lifeline | yes | term | core | no | Seven community lifelines (NRF 2019) | Water treatment and distribution, food retail and distribution, wastewater, sheltering, agriculture (NRF 2019 wording). | NRF Table 1 p15 |
| `fema.lc.health` | Health and Medical lifeline | yes | term | core | no | Seven community lifelines (NRF 2019) | Medical care, public health, patient movement, fatality management, behavioral health, veterinary support, medical supply chains. | NRF Table 1 p15 |
| `fema.lc.energy` | Energy lifeline | yes | term | core | no | Seven community lifelines (NRF 2019) | Electric power generation, transmission and distribution plus gas and liquid fuel systems. | NRF Table 1 p15 |
| `fema.lc.comms` | Communications lifeline | yes | term | core | no | Seven community lifelines (NRF 2019) | Broadband, cellular, landline, cable, satellite and broadcast; alerts, warnings and messages; 911 and dispatch; access to financial services. | NRF Table 1 p15-16 |
| `fema.lc.transport` | Transportation lifeline | yes | term | core | no | Seven community lifelines (NRF 2019) | Highway/roadway, mass transit, railway, aviation, maritime, pipeline and intermodal systems. | NRF Table 1 p16 |
| `fema.lc.hazmat` | Hazardous Material lifeline | yes | term | core | no | Seven community lifelines (NRF 2019) | Systems that mitigate threats from facilities storing hazardous substances, and removal of debris, pollutants and contaminants. | NRF Table 1 p16 |
| `fema.lc.eight-now` | FEMA now lists eight lifelines (Water Systems) | - | contrast | extra | yes | Seven community lifelines (NRF 2019) | FEMA's current lifelines page lists eight, adding Water Systems (potable water infrastructure, wastewater management) and naming 'Food, Hydration, Shelter'; IS-800.d and NRF 2019 teach seven, with 'Food, Water, Shelter'. | fema.gov Community Lifelines page (last updated 8 Mar 2024) |
| `fema.lc.benefits` | What applying lifelines allows | - | set | extra | no | Community lifeline | Prioritize and sequence response; common lexicon; unity of effort; clarify complex versus complicated parts of a disaster. | NRF p17 |
| `fema.lc.ncf` | National Critical Functions | yes | term | extra | no | - | Government and private sector functions so vital that their disruption would debilitate security, economy, public health or safety. | NRF p16 fn 16 |
| `fema.lc.critical-infrastructure` | Critical Infrastructure | yes | term | core | no | - | Assets, systems and networks, physical or virtual, so vital to the United States that their incapacitation or destruction would have a debilitating impact on security, national economic security, national public health or safety. | NIMS 2017 Glossary p72 |
| `fema.lc.16-sectors` | 16 critical infrastructure sectors | - | number | extra | no | - | Cross-sector operations involve organizations from one or more of the 16 critical infrastructure sectors. | NRF p6 fn 1; p20 |
| `fema.lc.core-capability` | Core Capability | yes | term | core | no | Five mission areas | An element defined in the National Preparedness Goal as necessary to prevent, protect against, mitigate, respond to and recover from the greatest risks. | NIMS Glossary p72; NRF p18 |
| `fema.lc.npg` | National Preparedness Goal (NPG) | yes | term | core | no | Core Capability | "A secure and resilient Nation with the capabilities required across the whole community to prevent, protect against, mitigate, respond to, and recover from the threats and hazards that pose the greatest risk." | NIMS Glossary p77; NPG 2nd ed (Sept 2015) |
| `fema.lc.mission-defs` | NRF definitions of the five mission areas | - | set | core | no | Five mission areas | Prevention: avoid/stop imminent terrorism; Protection: secure the homeland; Mitigation: reduce loss by lessening impact; Response: save lives, stabilize lifelines, protect property, meet needs; Recovery: restore and revitalize. | NRF p18 |
| `fema.lc.common-three` | Three core capabilities common to all mission areas | - | set | core | no | Core Capability | Planning; Public Information and Warning; Operational Coordination. | NPG 2015 Table 1 fn 6 p7; NRF p38 |
| `fema.lc.response-15` | Response core capabilities (15) | - | set | core | yes | Core Capability | Planning; PI&W; Operational Coordination; Infrastructure Systems; Critical Transportation; Environmental Response/Health and Safety; Fatality Management; Fire Management and Suppression; Logistics and Supply Chain Mgmt; Mass Care; Mass Search and Rescue; On-scene Security, Protection and LE; Operational Communications; Public Health, Healthcare and EMS; Situational Assessment. | NPG 2015 Table 1 p7; Table 5 p17-21 |
| `fema.lc.cc-defs` | Response core capability definitions | - | set | core | no | Response core capabilities (15) | Each response core capability has a one-sentence definition and preliminary targets in NPG Table 5 (e.g., Situational Assessment: decision-relevant information on hazard, cascading effects and response status). | NPG 2015 Table 5 p17-21 |
| `fema.lc.lscm-replaced` | Logistics and Supply Chain Management replaced Public and Private Services and Resources | - | rule | extra | no | Response core capabilities (15) | Footnote 9: Logistics and Supply Chain Management replaces the previous "Public and Private Services and Resources" core capability. | NPG 2015 p19 fn 9 |
| `fema.lc.lifeline-cc-map` | Lifelines map to core capabilities | - | rule | extra | no | Community lifeline; Core Capability | Core capabilities are applied to stabilize lifelines (e.g., Transportation lifeline to Critical Transportation). | NRF Table 2 p19 |
| `fema.lc.rsf` | Recovery Support Function (RSF) | yes | term | extra | no | - | Organizing structures under the National Disaster Recovery Framework; there are six RSFs. | NIMS Glossary p79; NRF p21 |

### Topic 19. Operational coordination and federal structures (D. IS-800.d)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.oc.optimal-model` | Locally executed, state managed, federally supported | - | rule | core | no | Tiered response | Optimal response is locally executed; state, tribal, territorial or insular area managed; federally supported, with private sector and NGO engagement. | NRF p21 |
| `fema.oc.private-sector-role` | Private sector responsibility for its own systems | - | rule | core | no | Private Sector | Businesses and infrastructure owners and operators have primary responsibility for operating and repairing their systems in emergencies. | NRF p21 |
| `fema.oc.beoc` | Private sector coordinating structures | - | set | extra | no | Private Sector | Business EOCs, trade groups and coordinating councils, ISACs, private sector information/intelligence centers, healthcare coalitions. | NRF p22 |
| `fema.oc.healthcare-coalition` | Healthcare coalition | yes | term | extra | no | Multiagency Coordination Group | Multi-agency coordination groups integrating healthcare facilities with EMS, public health and emergency management. | NRF p25 fn 21 |
| `fema.oc.local-structures` | Local coordinating structures | - | set | extra | no | - | Local planning committees, healthcare coalitions, CERT, chapters of national associations. | NRF p23-24 |
| `fema.oc.cert` | Community Emergency Response Team (CERT) | yes | term | extra | no | - | A local coordinating structure and volunteer option named in the NRF. | NRF p24, p33 |
| `fema.oc.state-eoc` | State EOCs support local response | - | rule | core | no | Emergency Operations Center | Local incident command directs on-scene activities; state EOCs activate as needed to support local EOCs and responders. | NRF p24 |
| `fema.oc.tribal-request` | Tribes may request their own declaration | - | rule | core | no | Stafford Act | Federally recognized tribes may directly request their own emergency or major disaster declaration or be included in a state request. | NRF p24 |
| `fema.oc.tacg` | Tribal Assistance Coordination Group (TAC-G) | yes | term | extra | no | Multiagency Coordination Group | A MAC Group led by the Bureau of Indian Affairs Emergency Management Program that assists federally recognized tribes. | NRF p25 |
| `fema.oc.federal-end-state` | Federal response end state | - | rule | extra | no | - | Achieved when SLTT entities no longer need federal help for life-saving or life-sustaining support, allowing transition to recovery. | NRF p25 |
| `fema.oc.unified-coordination` | Unified coordination | yes | term | core | no | Unified Command | Primary state/tribal/territorial/federal incident management at the incident level, typically directed from a JFO and organized using ICS. | NRF p25 |
| `fema.oc.jfo` | Joint Field Office (JFO) | yes | term | core | no | Unified coordination | A temporary federal facility providing a central location for coordinating response by all levels of government, private sector and NGOs. | NIMS Glossary p75; NRF p25 |
| `fema.oc.ucg` | Unified Coordination Group (UCG) | yes | term | core | no | Unified coordination | Senior leaders with significant jurisdictional authority representing state, tribal, territorial and federal (sometimes local, private, NGO) interests; leads unified coordination staff. | NRF p25-26 |
| `fema.oc.uc-not-onscene` | Unified coordination does not manage on-scene operations | - | contrast | core | no | Unified coordination | Although ICS-based, unified coordination supports on-scene efforts rather than managing them; multiple UCGs coordinate by area command principles. | NRF p26 |
| `fema.oc.rrcc` | Regional Response Coordination Center (RRCC) | yes | term | core | no | - | Multi-agency coordination center in each of FEMA's 10 regional offices, run under the Regional Administrator; hands incident-level coordination to the UCG once established. | NRF p29 |
| `fema.oc.10-regions` | FEMA has 10 regional offices | - | number | core | no | Regional Response Coordination Center | FEMA has 10 regional offices, each headed by a Regional Administrator. | NRF p29 |
| `fema.oc.joc` | Joint Operations Center (JOC) | yes | term | core | no | - | Regional interagency operations center the FBI may establish to lead the law enforcement response, led by an FBI on-scene commander. | NRF p29 |
| `fema.oc.noc` | National Operations Center (NOC) | yes | term | core | no | - | DHS's principal operations center; provides situational awareness and a common operating picture and serves as the national fusion center. | NRF p30 |
| `fema.oc.nrcc` | National Response Coordination Center (NRCC) | yes | term | core | no | National Operations Center | Multiagency coordination center at FEMA Headquarters coordinating overall federal support for major disasters and emergencies; a functional component of the NOC. | NIMS Glossary p78; NRF p30 |
| `fema.oc.nbeoc` | National Business Emergency Operations Center (NBEOC) | yes | term | extra | no | National Response Coordination Center | FEMA component within the NRCC for public-private information sharing. | NRF p30 |
| `fema.oc.ciocc` | CISA Integrated Operations Coordination Center (CIOCC) | yes | term | extra | yes | - | Focal point for cyber, physical and communications infrastructure situational awareness (as of NRF 2019). | NRF p30 |
| `fema.oc.nmcc` | National Military Command Center (NMCC) | yes | term | extra | no | - | DoD's focal point for monitoring and coordinating worldwide military operations. | NRF p30 |
| `fema.oc.sioc` | Strategic Information and Operations Center (SIOC) | yes | term | extra | no | - | The FBI's worldwide EOC. | NRF p31 |
| `fema.oc.nsc` | National Security Council (NSC) | yes | term | extra | no | - | The principal policy body for national security issues requiring Presidential determination. | NRF p31 |

### Topic 20. ESFs, roles, authorities and planning (D. IS-800.d)

| Concept ID | Term (abbr) | Registry | Kind | Core/extra | Volatile | Prerequisites | Plain definition | Source section |
|---|---|---|---|---|---|---|---|---|
| `fema.es.esf` | Emergency Support Function (ESF) | yes | term | core | no | Core Capability | Grouping of governmental and certain private sector capabilities into an organizational structure to provide the capabilities most likely needed to manage incidents. | NIMS Glossary p73; NRF p27 |
| `fema.es.esf-primary-not-exclusive` | ESFs are the primary, not exclusive, federal coordinating structures | - | rule | core | no | Emergency Support Function | Federal ESFs are primary but not exclusive coordinating structures for delivering response core capabilities; any ESF can help stabilize any lifeline. | NRF p27 |
| `fema.es.esf-coordinator` | ESF coordinator | yes | term | core | no | Emergency Support Function | Department or agency overseeing preparedness for an ESF and coordinating its primary and support agencies. | NRF p27, p43 |
| `fema.es.primary-agency` | ESF primary agency | yes | term | core | no | ESF coordinator | Agency with significant authorities, roles, resources and capabilities for a function within an ESF. | NRF p44 |
| `fema.es.support-agency` | ESF support agency | yes | term | core | no | ESF primary agency | Agency with specific capabilities or resources that support the primary agency. | NRF p44 |
| `fema.es.selective-activation` | ESFs are selectively activated | - | rule | core | no | Emergency Support Function | ESFs may be selectively activated by FEMA or a lead federal agency; not every incident needing federal support activates ESFs; the NRF is always in effect. | NRF p28 |
| `fema.es.no-mandatory-link` | No mandatory link between state/local and federal ESFs | - | rule | extra | no | Emergency Support Function | Jurisdictions may tailor the ESF construct; there is no mandatory or direct linkage to federal ESFs. | NRF p28 |
| `fema.es.mission-assignment` | Mission assignment | yes | term | extra | no | Stafford Act | Through the Stafford Act, FEMA may issue mission assignments to obtain resources and services from federal departments and agencies. | NRF p28 |
| `fema.es.15-esfs` | Fifteen federal ESFs | - | set | core | yes | Emergency Support Function | #1 Transportation; #2 Communications; #3 Public Works and Engineering; #4 Firefighting; #5 Information and Planning; #6 Mass Care, Emergency Assistance, Temporary Housing, and Human Services; #7 Logistics; #8 Public Health and Medical; #9 Search and Rescue; #10 Oil and Hazmat Response; #11 Agriculture and Natural Resources; #12 Energy; #13 Public Safety and Security; #14 Cross-Sector Business and Infrastructure; #15 External Affairs. | NRF Table 4 p45-47 |
| `fema.es.coordinators` | ESF coordinators | - | set | extra | yes | Fifteen federal ESFs | #1 DOT; #2 DHS/CISA; #3 DoD/USACE; #4 USDA Forest Service and DHS/FEMA/USFA; #5 DHS/FEMA; #6 DHS/FEMA; #7 GSA and DHS/FEMA; #8 HHS; #9 DHS/FEMA; #10 EPA; #11 USDA; #12 DOE; #13 DOJ/ATF; #14 DHS/CISA; #15 DHS. | NRF Table 4 p45-47 |
| `fema.es.esf14` | ESF #14 Cross-Sector Business and Infrastructure (new in 2019) | - | rule | core | yes | Fifteen federal ESFs | New in the fourth edition; coordinates cross-sector operations, especially sectors not aligned to other ESFs (e.g., Financial Services). | NRF p3, p47 |
| `fema.es.red-cross-esf6` | American Red Cross co-leads ESF #6 | - | rule | core | no | Fifteen federal ESFs | The Red Cross, a congressionally chartered "federal chartered instrumentality", is co-lead of ESF #6. | NRF p34-35 |
| `fema.es.esflg` | Emergency Support Function Leadership Group (ESFLG) | yes | term | extra | no | ESF coordinator | Federal ESF coordinators and annex coordinating agencies; FEMA leads it. | NRF p48 |
| `fema.es.voad` | National VOAD (VOAD) | yes | term | extra | yes | Nongovernmental Organization | National Voluntary Organizations Active in Disaster: over 70 national organizations and 56 territorial and state equivalents. | NRF p35 |
| `fema.es.ncmec` | National Emergency Child Locator Center | yes | term | extra | no | - | Within NCMEC, helps identify and reunify children with families. | NRF p35 |
| `fema.es.individuals` | Individuals, families and households | - | rule | extra | no | - | Reduce hazards at home, prepare kits and plans, volunteer, and follow local authorities' guidance. | NRF p33-34 |
| `fema.es.chief-elected` | Chief elected or appointed official | yes | term | core | no | - | Responsible for public safety and welfare; duties: obtain assistance from other agencies, direct response, ensure public information. | NRF p35 |
| `fema.es.emergency-manager` | Emergency manager | yes | term | core | no | - | Oversees day-to-day emergency management and coordinates the local program, EOC resource requests, damage assessments and mutual aid agreements. | NRF p35-36 |
| `fema.es.states` | States apply in-state resources first | - | rule | core | no | - | States supplement local efforts; local officials contact the state when mutual aid cannot meet needs; states can use EMAC then request federal help. | NRF p36-37 |
| `fema.es.emac-nema` | EMAC administered by NEMA | - | rule | extra | no | Emergency Management Assistance Compact | EMAC is administered by the National Emergency Management Association. | NRF p37 |
| `fema.es.governor` | Governor | yes | term | core | no | - | Coordinates state resources and strategy; may amend or suspend orders; communicates with the public; coordinates with tribes; commands state military forces (National Guard not in federal service). | NRF p37-38 |
| `fema.es.national-guard` | National Guard | yes | term | extra | no | Governor | State resource the governor may order to state active duty; under Secretary of Defense command when in federal service. American Samoa has no National Guard. | NRF p38 |
| `fema.es.tribal-chief` | Tribal chief executive | yes | term | extra | no | - | Responsible for the tribe's public safety and welfare; may request federal assistance and negotiate mutual aid. | NRF p39 |
| `fema.es.federal-when` | When the federal government becomes involved (NRF) | - | set | core | no | - | Federal interests involved; SLTT resources insufficient and assistance requested; or authorized/required by statute, regulation or policy. | NRF p40 |
| `fema.es.president` | The President leads the federal response effort | - | rule | extra | no | - | Regardless of type of incident the President leads the federal response effort. | NRF p40 |
| `fema.es.sec-dhs` | Secretary of Homeland Security: principal federal official for domestic incident management | - | rule | core | no | - | The Secretary of Homeland Security is the principal federal official for domestic incident management. | NRF p40 |
| `fema.es.fema-admin` | FEMA Administrator | yes | term | core | no | - | Principal adviser to the President, Secretary of Homeland Security and NSC on emergency management; operates NRCC and RRCCs. | NRF p41 |
| `fema.es.attorney-general` | Attorney General | yes | term | core | no | - | Lead responsibility for criminal investigations of terrorist acts or threats, acting through the FBI. | NRF p41-42 |
| `fema.es.secdef` | Secretary of Defense | yes | term | core | no | - | DoD resources committed when approved by the SecDef or directed by the President; command of DoD forces supporting civil authorities stays with the SecDef. | NRF p42 |
| `fema.es.dsca` | Defense support of civil authorities (DSCA) | yes | term | extra | no | Secretary of Defense | DoD support to civil authorities; when DoD resources are authorized to support civil authorities, command of those forces remains with the Secretary of Defense (policy in DoD Directive 3025.18). | NRF p42 |
| `fema.es.secstate` | Secretary of State | yes | term | extra | no | - | Responsible for communication and coordination with other nations; accepts or declines international assistance offers. | NRF p43 |
| `fema.es.dni` | Director of National Intelligence (DNI) | yes | term | extra | no | - | Head of the intelligence community (17 elements); principal adviser on national-security intelligence. | NRF p43 |
| `fema.es.stafford-request` | Stafford Act request by governor or tribal chief executive | - | rule | core | no | Stafford Act | When response is beyond SLTT capabilities the governor or tribal chief executive can request federal assistance; most Stafford Act assistance requires a cost share. | NRF p50 |
| `fema.es.emergency-declaration` | Emergency declaration | yes | term | core | no | Stafford Act | More limited in scope than a major disaster declaration, fewer programs, not normally associated with recovery; may be issued before an incident. | NRF p50 |
| `fema.es.major-disaster` | Major disaster declaration | yes | term | core | no | Emergency declaration | Provides more federal response and recovery programs; may only be issued after an incident. | NRF p50 |
| `fema.es.no-request-emergency` | President may declare an emergency without a request | - | rule | extra | no | Emergency declaration | Where the United States has exclusive or preeminent responsibility and authority. | NRF p50 |
| `fema.es.predeploy` | FEMA may pre-deploy assets | - | rule | extra | no | Stafford Act | Stafford Act assistance comes after a declaration, but FEMA may pre-deploy assets when a declaration is likely and imminent. | NRF p50 |
| `fema.es.own-authorities` | Federal agencies acting under their own authorities | - | rule | core | no | - | Some agencies act under their own authorities and funding (e.g., wildland fire, agricultural disease, cyber) without a Stafford declaration. | NRF p50-52 |
| `fema.es.lfa` | Lead Federal Agency (LFA) | yes | term | core | no | - | Agency designated by the President or agreed by agencies to lead a non-Stafford Act federal response; appoints a senior response official. | NRF p28, p53 |
| `fema.es.economy-act` | Economy Act (federal-to-federal support) | - | rule | extra | no | - | Federal agencies may use reimbursable agreements under the Economy Act; FEMA support to an LFA can be reimbursable under it. | NRF p52-53 |
| `fema.es.international` | International assistance push and pull | - | rule | extra | no | - | "Pull" requests resources for known needs; "push" accepts assistance for diplomatic interests; State Department formally accepts or declines. | NRF p52 |
| `fema.es.deliberate-vs-incident` | Deliberate planning vs incident action planning | - | contrast | core | no | - | Deliberate planning develops plans before incidents; incident (crisis) action planning adapts plans under time pressure during an imminent or ongoing incident. | NRF p53 |
| `fema.es.fiop` | Federal Interagency Operational Plan (FIOP) | yes | term | extra | no | - | Supports the NRF at federal level with roles, critical tasks and resourcing; NRF and FIOP concepts are mandatory for federal departments and agencies. | NRF p55 |
| `fema.es.continuity` | Continuity considerations | - | rule | extra | no | - | Continuity is a shared whole-community responsibility and should be built into all plans, including lifeline interdependencies. | NRF p56 |

---

## 5. Numbers and thresholds

Every figure a candidate must know. The source line is quoted from the extracted text,
with the PDF page. "V" marks a volatile figure: date it on the card.

| Figure | Units and conditions | Source line | Where |
|---|---|---|---|
| 75% | IS final exam pass benchmark (all four courses) (V) | "the benchmark for successful completion set at 75%"; "score at least 75 percent on the test" | IS FAQ; SM100c / SM200c final pages; SMIS0700b "score 75 percent" |
| No limit | exam attempts (V) | "Our program does not limit your exam attempts." | IS FAQ |
| 0.1 CEU = 1 hour | CEU rule | "0.1 CEU = 1 Contact Hour or 1 hour of instruction/learning." | IS FAQ |
| 2 h / 4 h / 3.5 h / 3 h | course length, IS-100.c / 200.c / 700.b / 800.d (V) | "Course Length: 2 hours" etc. | course pages |
| 1970s | when ICS was developed | "ICS was developed in the 1970s following a series of catastrophic fires in California." | S1 p15 |
| more than 40 years | ICS testing record | "has been tested for more than 40 years of emergency and nonemergency applications" | S1 p26 |
| 1986 | SARA | "The Superfund Amendments and Reauthorization Act (SARA) of 1986 established Federal regulations for handling hazardous materials." | S1 p20 |
| 1910.120; 6 March 1990 | OSHA rule requiring ICS for organisations handling hazmat | "OSHA rule 1910.120, effective March 6, 1990, requires all organizations that handle hazardous materials to use ICS." | S1 p20 |
| 14 | NIMS Management Characteristics | "Describe the 14 NIMS management characteristics." | S1 p43; S6 slide 21 |
| 5 | major ICS functional areas (Command, Operations, Planning, Logistics, Finance/Administration) | "Identify the five major ICS functional areas." | S1 p76; S6 slide 25 |
| 4 | General Staff sections | "Describe the major activities of the four general staff sections." | POI100c L4 |
| 1:5 | optimal span of control, a guideline only | "The optimal span of control for incident management is one supervisor to five subordinates… The 1:5 ratio is a guideline" | S4 p32; S1 p55 |
| 3–7 (5 optimal); 8–10 | **old** NIMS 2008 span of control; 8–10 for large law enforcement operations (trap) | "should range from 3 to 7 subordinates, with 5 being optimal. During a large-scale law enforcement operation, 8 to 10 subordinates may be optimal." | S6 slide 24 |
| 12 to 24 hours | typical operational period / IAP period | "Operational periods can be of various lengths, but are typically 12 to 24 hours."; IAP "generally 12 to 24 hours" | S4 p78, p74 |
| approx. 95% | share of incidents that are small responses (IC plus single resources) | "Approximately 95% of all incidents are small responses" | S2 p68 |
| Types 5 → 1 | incident complexity; Type 1 = most complex | "Type 5 incidents are the least complex and Type 1 the most complex." | S2 p201 |
| Type 3–5 | where most incidents fall | "The vast majority of incidents are in the Type 3-5 range." | S2 p202 |
| 1–2 single resources, up to 6 personnel; first operational period | Type 5 incident; no written IAP | "One or two single resources with up to six personnel… contained within the first operational period… No written Incident Action Plan is required." | S2 p203 |
| one operational period | Type 4 incident, control phase; no written IAP for non-hazmat | "Limited to one operational period in the control phase. No written Incident Action Plan is required for non- HazMat incid[ents]" | S2 p204 |
| ≤200 ops per period; ≤500 total | Type 2 incident | "Operations personnel typically do not exceed 200 per operational period and the total does not exceed 500." | S2 p206 |
| >500 ops per period; >1,000 total | Type 1 incident | "Operations personnel often exceed 500 per operational period and total personnel will usually exceed 1,000." | S2 p207 |
| IMT Type 5 … Type 1 | IMT level: 5 Local Village and Township; 4 City, County, or Fire District; 3 State, Territory, Tribal, or Metropolitan Area; 2 National and State; 1 National and State | as listed | S2 p208 |
| Type 1 = most capable | resource typing | resource "Type 1" is the highest capability (inventory `fema.fx.type1-most`) | S3 p35; S2 p197 |
| crew of 2; 2 patients | worked typing example: Type 3 Ambulance Ground Team | "a crew of 2 (an EMT 1 and an Ambulance Operator), with Basic Life Support (BLS) Capability, and the capacity to transport 2 non-ambulatory patients" | S2 p194 |
| 50 + DC + PR + Guam + USVI | EMAC signatories (V) | "Signatories include all 50 states, the District of Columbia, Puerto Rico, Guam, and the U.S. Virgin Islands." | S2 p105; S3 p60 |
| Levels 3, 2, 1 | EOC activation levels: 3 Normal Operations/Steady State; 2 Enhanced Steady-State/Partial Activation; 1 Full Activation (1 is the highest) | Table 2 | S4 p49; S3 p125 |
| 2004, 2008, 2017 | NIMS issued, revised, third edition (October 2017) | "Originally issued in 2004"; "supersedes the NIMS document issued in December 2008" | S4 pp. 3, 15 |
| 5 → 3 | NIMS components, 2008 → 2017 | "NIMS 2008 defined five NIMS Components… NIMS 2017 defines three NIMS framework components" | S6 slide 10 |
| 3 | NIMS guiding principles (Flexibility, Standardization, Unity of Effort) | "Unity of Effort is a third NIMS Guiding Principle added in NIMS 2017." | S6 slide 9 |
| 4 | NIMS Command and Coordination structures (ICS, EOCs, MAC Group, JIS) | "The Joint Information System (JIS) is the fourth NIMS Command and Coordination structure." | S6 slides 20, 40 |
| 4 | communications and information systems principles | "(1) Interoperability; (2) Reliability, Scalability, and Portability; (3) Resilience and Redundancy; and (4) Security" | S4 p60; S6 slide 44 |
| 3 | common EOC structures (ICS or ICS-like; Incident Support Model; Departmental) | Figures 7–9 | S4 pp. 47–48 |
| 6 | resource management tasks during an incident | "The Resource Management Process defines the six resource management tasks performed in an incident." | S6 alt-text slide 18; S4 Fig. 2 p22 |
| 4 | resource management preparedness activities | "Describe the four key activities of NIMS Resource Management Preparedness." | POIIS0700b L2 |
| 4th edition, 28 October 2019 | current NRF | "National Response Framework Fourth Edition October 28, 2019" | S5 p1 |
| June 2016; 60 days | NRF Third Edition superseded; the fourth edition "becomes effective 60 days after publication" | "This document supersedes the National Response Framework, Third Edition that was issued in June 2016 and becomes effective 60 days after publication." | S5 p7 |
| 1992; 2004 | Federal Response Plan; National Response Plan | "beginning with the Federal Response Plan, published in 1992, and the National Response Plan, published in 2004" | S5 p7 |
| quadrennial | NRF review cycle | "Reviews will be conducted in order to evaluate the effectiveness of the NRF on a quadrennial basis." | S5 p56 |
| 7 | community lifelines in NRF 2019 and IS-800.d (V: FEMA's page now lists 8) | "Figure 1 identifies the seven community lifelines" | S5 p14; S12 |
| 16 | critical infrastructure sectors | "one or more of the 16 critical infrastructure sectors" | S5 p3, p8 |
| 5 | mission areas (Prevention, Protection, Mitigation, Response, Recovery) | "One of five areas (Prevention, Protection, Mitigation, Response, and Recovery)" | S4 p76 |
| 3 | core capabilities common to all mission areas | "Planning, Public Information and Warning, and Operational Coordination are common to all mission areas." | S11 p7 (Table 1 fn 6) |
| 15 | Response core capabilities (count of the Response column) | NPG Table 1 | S11 p7 |
| 15 | Emergency Support Functions | Table 4 (ESF #1–#15) | S5 pp. 45–47; S13 NRF page |
| 10 | FEMA regional offices, each with an RRCC | "FEMA has 10 regional offices, each headed by a Regional Administrator." | S5 p29 |
| 17 | intelligence community elements | "The intelligence community, comprising 17 elements across the Federal Government" | S5 p43 |
| 28 | federal US&R task forces (extra, V) | "FEMA coordinates 28 federal disaster response task forces" | S13 NRF page |

---

## 6. Visuals

All the figures below are US Government works; see §2 for the licence and credit line.
Crop to the diagram only, and never include a photo (several manual visuals mix photos
into their charts: check before cropping). NIMS page numbers are the PDF pages where the
caption sits.

**Figures that are content (NIMS 2017, S4):**

| Figure | PDF page | What a card asks |
|---|---|---|
| Table 1: Overview of NIMS (Is / Is Not) | 12 | classify statements as NIMS is / is not |
| Figure 1: Qualification, Certification, and Credentialing of Incident Personnel | 18 | order of the steps; which step is which |
| Figure 2: Resource Management Process | 22 | the six tasks in order (occlusion) |
| Figure 3: Example of an ICS Organization with a Single Incident Commander | 35 | name the blanked box (Command Staff, General Staff) |
| Figure 4: Example of an ICS Organization with Unified Command | 36 | what differs from Figure 3 |
| Figure 5: Incident Facilities (ICP, Staging Area(s), Incident Base, Camps, with icons) | 42 | which facility houses which function |
| Figure 6: Example of Area Command | 44 | relationship of Area Command to ICPs and EOC/MAC Group |
| Figures 7, 8, 9: ICS-like, ISM and Departmental EOC structures | 47, 47, 48 | identify the EOC model from its chart |
| Table 2: EOC Activation Levels | 49 | level number ↔ title ↔ description |
| Table 3: Examples of JIC Types | 54 | match JIC type to use |
| Figure 10: Federal Support to Response Activities | 58 | tiered support flow |
| Table A-1: ICS Organization (element → leader title → support title) | 92 | "who leads a Division?" (Supervisor) |
| Figure A-1: Assistant Safety Officers | 94 | extra |
| Figure A-2: Major Organizational Elements of the Operations Section | 96 | Branch / Division / Group / Strike Team / Task Force placement |
| Figures A-3, A-4: geographic and functional branch organization | 97, 98 | geographic vs functional branches |
| Figures A-5, A-6: geographical Divisions; functional Groups | 98, 99 | Division vs Group |
| Figure A-7: Air Operations Organization | 100 | where Air Operations Branch sits |
| Figure A-8: Planning Section Organization | 101 | four units + Technical Specialists |
| Figure A-9: Logistics Section with Branch Organizational Structure | 104 | Service vs Support Branch units |
| Figure A-10: Finance/Administration Section Organization | 107 | four units |
| Figure A-11: Options for the Placement of the I/I Function | 109 | the placements |
| Figure A-12: Operational Period Planning Cycle (Planning P) | 116 | order of meetings (occlusion) |
| Table A-2: The IAP and Typical Attachments | 119 | which ICS form is prepared by whom (extra) |
| Table A-3: Summary Table of Major ICS Positions | 123 | position → primary function |
| Figures B-1, B-2, B-3: EOC organization structures | 128, 130, 132 | as Figures 7–9, in more detail |

**NRF 2019 (S5):**

| Figure | PDF page | What a card asks |
|---|---|---|
| Figure 1: Community Lifelines for Incident Stabilization (seven icons) | 14 | name the lifeline from its icon |
| Table 1: Community Lifeline Descriptions | 15 | lifeline ↔ components |
| Figure 2: The Application of Community Lifelines | 16 | extra |
| Table 2: Lifelines ↔ Response Core Capabilities | 19 | which capabilities stabilise which lifeline |
| Figure 3: ICS organization with a Single Incident Commander | 23 | (duplicate of NIMS Fig. 3) |
| Figure 4: Unified Coordination | 26 | JFO/UCG structure |
| Table 3: Example ESF actions for the Health and Medical lifeline | 27 | extra |
| Table 4: Emergency Support Functions and ESF Coordinators | 45–47 | ESF number ↔ name ↔ coordinator (text table: cards need no image) |
| Figure 5: Incident Management and Response Authorities for the Federal Government | 49 | Stafford vs non-Stafford |
| Table 5: Other Federal Department and Agency Authorities | 51 | extra |
| Figure 6: Alignment of Planning Efforts with PPD-8 | 55 | extra |

**Student manual visuals (S1–S3; PDF pages):**

| Manual | Page | Visual | What a card asks |
|---|---|---|---|
| IS-100.c | 86 | L3 Visual 11: ICS Structure (IC, Command Staff box, General Staff box) | blank a box; clean chart, no photo |
| IS-100.c | 98 | L3 Visual 20: ICS Command Staff | the three officers |
| IS-100.c | 113 | L4 Visual 2: General Staff | the four Section Chiefs |
| IS-100.c | 50 | L2 Visual 7: Modular Organization | expansion by need (check for photos) |
| IS-200.c | 130–131 | L4 Visuals 19–20: Divisions and Groups; Branches | geographic vs functional |
| IS-200.c | 134 | L4 Visual 22: Air Operations Branch | placement |
| IS-200.c | 137 | L4 Visual 25: Planning Section Units | four units |
| IS-200.c | 139 | L4 Visual 27: Logistics Section Units (Service: Communications, Medical, Food; Support: Supply, Facilities, Ground Support) | which branch holds which unit; clean chart |
| IS-200.c | 142 | L4 Visual 30: Finance/Administration Section | four units |
| IS-200.c | 148–149 | L4 Visuals 36–37: ICS Form 201, Incident Briefing | sections of the form |
| IS-200.c | 157 | L5 Visual 2: Incident Action Planning Process (Planning P) | meeting order |
| IS-200.c | 99 | L3 Visual 22: Operational Period Planning Cycle | as above |
| IS-200.c | 201–202 | L6 Visuals 24–25: Incident typing | Type 5 → 1 (the clock graphics are decorative; draw our own) |
| IS-200.c | 68 | L2 Visual 30: Typical Organizational Structure | **photo-based: do not use** |
| IS-700.b | 35 | L2 Visual 4: Typing Resources | Kind vs Type |
| IS-700.b | 108 | L4 Visual 20: Area Command | as NIMS Fig. 6 |
| IS-700.b | 120–122 | L5 Visuals 4–6: ICS-like, ISM, Departmental EOC | as NIMS Figs 7–9 |
| IS-700.b | 146–147 | L6 Visuals 15–16: Interconnectivity of NIMS structures | what connects to what |

The handouts are also usable: `Sample Typing (pdf).pdf`, `IS-200.c Sample Completed ICS Form
201.pdf` and `Activity 4.2 - ICS201 Student Version.pdf` (all in the IS-200.c ZIP).

**Diagrams we can draw ourselves from sourced facts** (preferred where the FEMA chart
mixes in photos):
1. The ICS organisation, from Table A-1 and §4 T3/T4/T7: IC → Command Staff (PIO, Safety
   Officer, Liaison Officer) → four sections → branches, divisions and groups, units.
2. The Logistics Section: Service Branch vs Support Branch, with their six units.
3. The Planning P, drawn from the meeting order in S4 Fig. A-12 and S2 L5.
4. The ladder of supervisory titles by level (Table A-1): Section → Chief; Branch →
   Director; Division/Group → Supervisor; Unit → Leader; Strike Team/Task Force → Leader.
5. The complexity ladder: Type 5 → Type 1 incidents, with the S2 pp. 203–207 figures.
6. EOC activation levels 3 → 1.
7. NIMS 2017 structure: 3 components → Command and Coordination → 4 structures.
8. The seven community lifelines as a labelled grid (our own icons: do not copy FEMA's).
9. The tiered response flow: local → state → federal (NRF, "locally executed, state
   managed, federally supported").

---

## 7. Confusions and traps

**Old versions still circulating.**
1. **Older course letters.** The course list shows exactly IS-100.c, IS-200.c, IS-700.b
   and IS-800.d [`crslist.txt`, `live/crslist.html`].
   - The code IS-100.b opens the IS-100.c page [`live/IS-100.b.txt` shows "IS-100.C"].
   - IS-700.c and IS-100.d return "Course cannot be found. This course may be retired."
     [`live/IS-700.c.txt`, `IS-100.d.txt`].
   - Study sites quoting IS-100.b, IS-700.a or IS-800.b/c content are out of date. Only
     IS-200 has an equivalence statement ("For credentialing purposes, the courses are
     equivalent").
2. **Which date is "the version".** Course date, manual date and POI date differ:
   - IS-100.c: course 6/25/2018, manual 03/2025;
   - IS-200.c: course 3/11/2019, POI 3/2019, manual 09/2020;
   - IS-700.b: course 6/25/2018, manual 06/2020.
   Cards should cite the manual date as the content version.
3. **IS-800.d has no current course material.** The web course is "Temporarily
   Unavailable", and FEMA points learners to the NRF itself. Third-party IS-800 summaries
   may follow older NRF editions, which had no lifelines and no ESF #14 [S5 p7: "This
   fourth edition of the NRF…"].

**What changed in NIMS 2017** (S6; all core to T2 and T11–T16):

4. **Characteristics renamed.** The "ICS Management Characteristics" are now the "NIMS
   Management Characteristics" (S6 slide 21: "(formerly called ICS Management
   Characteristics)").
5. **Components cut from five to three.** 2008: Preparedness; Communications and
   Information Management; Resource Management; Command and Management; Ongoing
   Management and Maintenance. 2017: Resource Management; Command and Coordination;
   Communications and Information Management. **"Command and *Management*" is the 2008
   name.** (S6 slide 10)
6. **Unity of Effort** was added as the third guiding principle. Do not confuse it with
   unity of command (T11 contrast).
7. **Span of control** changed from "3 to 7, with 5 optimal" (2008) to a 1:5 guideline
   with judgement (2017). (S6 slide 24; S4 p32)
8. **MACS was redefined.** In 2008 it was an architecture whose elements were EOCs and MAC
   Groups. In 2017 it is the overarching term for ICS, EOCs, MAC Groups and JIS (S6 slide 42).
9. **Security** is new as the fourth communications principle (S6 slide 44).
10. **The EOC guidance was expanded.** 2017 added:
    - three example structures: "ICS or ICS-like", "Incident Support Model (ISM)" and
      "Departmental";
    - activation levels 3/2/1 (S4 pp. 47–49).
    **Lead not confirmed:** the term "Center Management System" appears in **none** of
    the sources read (0 hits in S1–S5 text; see §10). Do not teach it.
11. **Planning P changes.** It adds "Agency Administrator Briefing (If Appropriate)" and
    a Strategy Meeting (S6 slide 28).
12. **Intelligence/Investigations** is a function, not a fixed box. "The IC/UC can place
    the I/I function in multiple locations within the incident command structure" (S6
    slide 26; S4 Fig. A-11), for example in the Planning Section or the Operations
    Section. It is not a sixth section by default.

**Numbering that runs backwards.**

13. **Type 1 is always the biggest.** It is the most complex incident (Types 5 → 1) and
    the most capable resource type, and a Type 1 IMT is the "National and State Level
    (Type 1 Incident)" team. Learners assume 1 = smallest.
14. **EOC Level 1 is Full Activation**; Level 3 is normal operations.

**Lifelines.**

15. **NRF 2019 and IS-800.d have seven lifelines.** They name the food lifeline "Food,
    Water, Shelter" and write "Energy (Power & Fuel)" and "Hazardous Material". FEMA's
    lifelines page (last updated 8 March 2024) lists **eight**: it adds "Water Systems
    (Potable Water Infrastructure, Wastewater Management)" and renames the food lifeline
    "Food, Hydration, Shelter". The exam objective says "the seven Community Lifelines".
    Teach seven, and flag the eighth as a volatile `extra` card.
16. **ESF #14 changed.** It is now "Cross-Sector Business and Infrastructure" (new in
    2019), and supersedes the older CIKR and Private-Sector support annexes. ESF #2's
    coordinator is DHS/CISA.

**Look-alike pairs** (each gets a contrast card, §8c):

17. Unified Command vs unity of command vs unified coordination (the last is the federal
    JFO/UCG structure, which does not manage on-scene operations).
18. Area Command (it oversees several incidents, each with its own ICS organisation) vs
    Unified Command (several agencies, one incident).
19. Command vs coordination: ICS works on scene; EOCs, MAC Groups and JIS work off site
    or in support. **MAC Groups do not command.**
20. Division (geographic) vs Group (functional); Branch vs Section; Strike Team (same kind
    and type) vs Task Force (mixed); Single Resource.
21. Service Branch (Communications, Medical, Food) vs Support Branch (Supply, Facilities,
    Ground Support). The Medical Unit cares for **responders**; care for the public
    belongs to Operations.
22. Deputy (fully qualified, can take over) vs Assistant (Command Staff subordinate);
    Assisting vs Cooperating Agency; Agency Representative vs Liaison Officer.
23. Qualification vs certification vs credentialing vs badging (the AHJ leads).
24. Kind vs Type; Capability vs Category (resource typing).
25. Objectives vs strategy vs tactics: the IC sets objectives, and Operations determines
    tactics. Authority can be delegated; responsibility cannot.
26. Formal vs informal communication; plain language vs clear text.
27. Staff-level vs section-level vs field-level briefings; the Operational Period
    Briefing is facilitated by the Planning Section Chief.
28. JIS (the system) vs JIC (a place); PIO. There is only one lead PIO per incident.
29. Situation Report vs Status Report.
30. Emergency declaration vs major disaster declaration (Stafford Act). The President may
    declare an emergency without a request where federal responsibility is primary.
31. Written IAP: "For smaller/less complex incidents, the IAP may be oral or written,
    except for hazardous materials incidents, which require a written IAP." (S1 p52)
32. Resources Unit vs Situation Unit; Demobilization vs Documentation Unit (Planning);
    Time vs Cost vs Procurement vs Compensation/Claims (Finance).

---

## 8. Naming

- **The owner's terms.**
  - The courses are FEMA Independent Study courses, run by FEMA's Emergency Management
    Institute. The site now brands itself "NDEMU".
  - The course codes and titles are FEMA's: "IS-100.c", "Introduction to the Incident
    Command System, ICS 100", and so on.
  - FEMA does not present them as trademarks. No "™" or "®" appears on any course page,
    manual or FAQ read.
- **What FEMA asks** (IS FAQ, verbatim):
  - "should cite NDEMU as the originator of the material";
  - "should not be used or displayed by non-federal entities in a manner or way which
    states or implies endorsement of a user's products or services by the Federal
    Government";
  - "Changes to original NDEMU content are not authorized by NDEMU."
- **fema.gov** sends users to "DHS Intellectual Property usage, including using the
  official seal and other trade or certification marks for DHS programs". That DHS page
  returned 403 (§10). So: **never use the FEMA or DHS seal or logo.**
- **How CONTENT-POLICY §4 applies.** FEMA is not in §5, the "don't name yet" list, so the
  deck may name the courses to state a true fact.
  - Title pattern: "[Site name] deck for the FEMA IS-100.c, IS-200.c, IS-700.b and IS-800.d
    courses (ICS, NIMS and NRF)". Never "Official FEMA deck", "FEMA-approved" or
    "certified".
  - Our brand leads. Plain text only, no seal.
  - URL path: `/decks/fema/ics/` is acceptable; never put FEMA in a domain.
- **Footer notice.** FEMA prescribes no wording, so use the "Everyone else" pattern plus
  the NDEMU attribution: "IS-100.c, IS-200.c, IS-700.b and IS-800.d are courses of the
  FEMA Emergency Management Institute (NDEMU). This deck is independent and is not
  affiliated with, sponsored, endorsed or approved by FEMA, DHS or the Federal Government.
  Course content is adapted from NDEMU and FEMA publications, which are US Government works
  in the public domain; NDEMU is the originator of the material." The last clause answers
  the FAQ's "cite NDEMU as the originator".
- **ExamRefs.** The outlines (course objectives) are public-domain US Government works
  (tier B), so outline mapping is permitted.

---

## 8b. Term registry

`research/deck-briefs/fema-ics-terms.json`: **244 entries**, topics 1–20, in teaching
order. Rebuilt from this brief by `scratchpad/fema_concepts.py json`. It **replaces** the
partial file left by the interrupted run, which had 462 rows mixing rules and numbers in
with the terms.

What is in it:
- one row per `term`-kind concept in §4, plus the three named `set`/`procedure` rows
  (NIMS Management Characteristics, Size-up, NIMS components);
- **no duplicate terms** (checked case-insensitively);
- **every concept ID is unique.**

How to use it:
- **Spelling.** `term` is the exact spelling writers must use. It is the source's spelling
  with our gloss removed: for example "Coordination", not "Coordination (incident
  coordination)", and "Reliability, Scalability, and Portability" as NIMS 2017 writes it.
  Use the NIMS capitalisation ("Unified Command", "Span of Control").
- **Abbreviations.** `abbr` holds the source's abbreviation (ICS, NIMS, IAP, UC, PIO,
  EOC…). Teach the abbreviation in the same primer as the full term.
- **Source.** `source` is the defining passage's URL:
  - a NIMS or NRF PDF `#page=N`;
  - the IS-700.b manual `#page=N`;
  - or the IS-100.c/IS-200.c course ZIP (with the SM page in §4).
- **Assumed terms.** Abbreviations the deck uses without a primer should go in the deck
  glossary: FEMA, DHS, EMI/NDEMU, OSHA, EPA, SARA, USACE, CISA, DoD, FBI, HHS, USDA, DOE,
  DOT, GSA, ATF, DOJ.

Rules, sets and numbers are **not** registry terms. They carry concept IDs (§4) for
`conceptIDs`, but get fact, application or decision cards, not primers.

The primary sources that define basic terms are saved in the scratch folder, so writers
need no Wikipedia:
- the NIMS 2017 glossary (`NIMS2017.txt`, PDF pp. 71–81; the page index for each glossary
  term is in `nims_glossary_pages.json`);
- the manual glossaries (end of `SM100c.txt`, `SM200c.txt`);
- the NRF (`NRF2019.txt`);
- the NPG (`NPG2015.txt`);
- the fema.gov glossary page (`glossary.html`).

---

## 8c. Card budget

The method:
- one primer per registry term;
- one fact card per rule, number and procedure;
- for each set, one card per member when it has more than 3 members (CARD-STANDARD
  rule 10), otherwise one;
- one application or classification card per core concept;
- one contrast card per `contrast` concept, plus the §7 look-alike pairs that have no
  contrast concept of their own (`EXTRA_CONTRAST` in the generator).

Generated by `scratchpad/fema_concepts.py budget`.

| Topic | Group | Concepts (core) | Primers | Fact | Application / classification | Contrast | Target |
|---|---|---|---|---|---|---|---|
| T1 ICS and NIMS basics | A. IS-100.c | 30 (17) | 15 | 19 | 17 | 0 | **51** |
| T2 The 14 NIMS Management Characteristics | A. IS-100.c | 35 (30) | 24 | 21 | 30 | 3 | **78** |
| T3 Functional areas, Incident Commander and Command Staff | A. IS-100.c | 25 (23) | 13 | 17 | 22 | 1 | **53** |
| T4 General Staff sections | A. IS-100.c | 13 (13) | 7 | 23 | 13 | 0 | **43** |
| T5 Command relationships, communication and leadership | B. IS-200.c | 22 (14) | 8 | 42 | 13 | 3 | **66** |
| T6 Authority, objectives and incident action planning | B. IS-200.c | 32 (25) | 15 | 39 | 25 | 2 | **81** |
| T7 Positions, organisational elements and ICS forms | B. IS-200.c | 47 (37) | 34 | 12 | 36 | 6 | **88** |
| T8 Briefings and meetings | B. IS-200.c | 16 (14) | 12 | 21 | 14 | 1 | **48** |
| T9 Flexibility, resources and incident complexity | B. IS-200.c | 27 (22) | 9 | 34 | 22 | 3 | **68** |
| T10 Transfer of command and initial response | B. IS-200.c | 8 (7) | 1 | 20 | 7 | 0 | **28** |
| T11 NIMS fundamentals and components | C. IS-700.b | 17 (15) | 9 | 6 | 13 | 3 | **31** |
| T12 NIMS resource management | C. IS-700.b | 21 (16) | 9 | 25 | 15 | 2 | **51** |
| T13 Command and coordination structures; ICS in NIMS | C. IS-700.b | 18 (15) | 8 | 12 | 13 | 2 | **35** |
| T14 Emergency Operations Centers | C. IS-700.b | 15 (13) | 4 | 25 | 12 | 2 | **43** |
| T15 MAC Groups, JIS and interconnectivity | C. IS-700.b | 12 (10) | 3 | 12 | 10 | 2 | **27** |
| T16 Communications and information management | C. IS-700.b | 22 (15) | 12 | 26 | 15 | 2 | **55** |
| T17 NRF purpose, scope and guiding principles | D. IS-800.d | 20 (12) | 9 | 24 | 12 | 0 | **45** |
| T18 Community lifelines and core capabilities | D. IS-800.d | 25 (18) | 14 | 37 | 18 | 1 | **70** |
| T19 Operational coordination and federal structures | D. IS-800.d | 24 (13) | 15 | 8 | 12 | 1 | **36** |
| T20 ESFs, roles, authorities and planning | D. IS-800.d | 44 (24) | 23 | 48 | 23 | 2 | **96** |
| **Total** | | **473 (353)** | **244** | **471** | **342** | **36** | **1093** |

**Deck total: 1,093 cards.** That is 244 primers, 471 fact cards, 342 application or
classification cards and 36 contrast cards.
- **Application share.** Application cards are 31% of the deck, close to the
  CARD-STANDARD starting point of about a third.
- **By group:** A (IS-100.c) 225; B (IS-200.c) 379; C (IS-700.b) 242; D (IS-800.d) 247.
- **No weights are published,** so the budget follows the number of concepts.
- **Group B is largest.** IS-200.c carries the most positions, titles and procedures:
  every unit, every briefing level, and incident Types 1–5.
- **Scenario cards.** The IS-100.c L5 (Emerald City Flood) and IS-200.c L8 (Liberty County
  Fair) scenarios suggest the style of scenario cards. Write new scenarios; do not copy
  the course activities word for word.
- **Tolerance.** Writers stay within 15% of their topic's target (DIGEST).

---

## 9. Languages

- **The final exams: language not stated.** No course page, FAQ or manual read states the
  exam language. The Spanish views of the four course pages (`...&lang=es`,
  [`es_IS-*.txt`]) translate only the labels ("Descripción General del Curso", "Fecha del
  Curso"); the course text stays English.
- **Spanish course materials.** The materials pages list:
  - IS-100.c: "Español: IS-0100c_curso-completo.zip 16.4MB";
  - IS-200.c: "Español: IS0200c_curso-completo.zip 18MB" [`mat100.txt`, `mat200.txt`].
  These are US Government works (IS FAQ statement, §2), tier B. They were not downloaded
  or read.
- **No other languages.** IS-700.b and IS-800.d list no Spanish materials. No official
  translation of NIMS 2017 or NRF 2019 is linked from the fema.gov NIMS or NRF pages read
  (grep for "Spanish", "Español", "translat" found nothing).
- **Conclusion:** an English deck. A Spanish deck for IS-100.c/IS-200.c could later be
  built from the Spanish ZIPs.

---

## 10. Not verified

1. **Number of exam questions and any time limit.** Not stated on:
   - the course pages (4, fetched twice);
   - the IS FAQ (twice);
   - the student manuals, instructor guides or POIs for IS-100.c, IS-200.c and IS-700.b
     (grep for "questions", "items", "percent", "minutes").
   The only related wording is "Test questions are scrambled" and "online exams are
   scrambled, and the questions may change". The classroom agenda's "Final Exam (1 hour)"
   is not an online limit. **Do not state a question count or time limit anywhere.**
2. **fema.gov second fetch.** www.fema.gov (and dhs.gov) returned "Access Denied" (HTTP
   403, Akamai) to every request from this environment today. Saved first fetches exist.
   What rests on them:
   - the NRF PDF (`wb_nrf.pdf`/`NRF2019.txt`, 57 pages, PDF title "National Response
     Framework", created 29 Oct 2019);
   - the NPG PDF;
   - the NIMS, NRF, lifelines, core-capabilities, glossary and website-information pages.
   The NIMS 2017 PDF has a second official copy on training.fema.gov, which answered 200
   today. Card writers' link checks against fema.gov URLs may fail from this environment
   in the same way; the URLs are the ones fema.gov's own pages link to.
3. **Validity or expiry of IS certificates.** No statement found (FAQ, course pages).
   Only the IS-200 equivalence statement exists. Say nothing about expiry.
4. **"Center Management System".** This lead was not confirmed: the phrase has 0 hits in
   the IS-100.c, IS-200.c and IS-700.b manuals, NIMS 2017 and NRF 2019. What *is*
   confirmed for 2017 is the EOC terminology: the three EOC structures, the activation
   levels, EOC director, and the ISM's Situational Awareness, Planning Support, Resources
   Support and Center Support sections (S6 slide 34). If the term matters, a later
   source (for example a FEMA EOC guide) must be fetched first.
5. **The DHS intellectual property policy page** (linked from fema.gov's reuse statement)
   returned 403. Nothing is claimed from it beyond "do not use the seal".
6. **The IS-800.d web course.** Its pages (emilms.fema.gov/is_0800d/…) now return "File
   Not Found". The five pages in `is800web/` came from an earlier fetch whose origin is
   not recorded, so **they are not used as a source**. Group D rests on the NRF.
7. **The Spanish ZIPs** were not opened (§9).
8. **Exam language** (§9).
9. **Whether IS-100.c's March 2025 manual changed exam content.** The course date is still
   6/25/2018. No change note was found. Cards cite the 03/2025 manual.

# Research brief: FAA Flight Instructor Airplane (FIA) and Fundamentals of Instructing (FOI) knowledge tests

Slug: `faa-cfi`. Family prefix: `cfi`. Researched 25 September 2026.
Every fact below was read in a source fetched in this task or in a source the
prerequisite decks' research fetched and saved. New downloads are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/faa-cfi/`;
re-used files are read in place from `../faa-private-pilot/`, `../faa-commercial/`,
`../faa-instrument/` and `research/sources/faa-commercial/`, and are marked "re-used" in
`faa-cfi-sources.json`. `#page=N` anchors are PDF pages counted from form feeds;
`build.py` in the scratch folder regenerates the concepts, terms and budget and
fails on any anchor whose text is not on the stated page.

**Prerequisite decks.** `prerequisiteDecks: ["faa-commercial", "faa-private-pilot"]`
(families `cpl`, `ppl`). I read both briefs, the commercial `manifest.json` and both
term registries first, and re-fetched nothing they had saved. Re-used: 14 CFR part
61 (the eCFR copy saved today already contains subpart H, §§61.181–61.199, with
the December 2024 amendments), the Testing Matrix (revised 9/25/26), the September
2026 ATCA bulletin, the ACS list page, the ACS knowledge-test table, AFH chapters 5,
6, 7, 9 and 10, the Instrument Flying Handbook (from faa-instrument), 17 U.S.C. 105
and FAA Order 1700.6D. New fetches: the Aviation Instructor's Handbook
(FAA-H-8083-9B), the Flight Instructor Airplane ACS (FAA-S-ACS-25), AC 61-65K and
AFH chapter 3.

A script compared every knowledge (K) element of ACS-25 (codes `AI.…`, Areas II–XIV)
with the Private (ACS-6C) and Commercial (ACS-7B) K text: 390 of 605 are word for
word the same, so the ppl and cpl decks already carry them. Of the 215 that differ,
most are rewordings of topics those decks teach (collision avoidance, principles of
flight, weight and balance terms, publications) or the phrase "Common errors related
to this Task". The genuinely new material is:

- the whole of Area I, Fundamentals of Instructing (`FI.…` codes; the FOI test), from the AIH;
- the flight instructor certificate (subpart H) and the endorsements an instructor gives (AI.II.K; AC 61-65K);
- teaching the manoeuvres: purpose, elements, common errors (AI.IV and every "Common errors" K element), from the AFH and IFH;
- stall and spin demonstrations at instructor depth (AI.X.B, F–I), flight characteristics and the region of reversed command, and the multiengine airspeed/configuration demonstration (AI.XIII.C).

`faa-cfi-terms.json` opens with **283 topic-0 terms**: every `faa-private-pilot-terms.json`
and `faa-commercial-terms.json` entry with a non-zero topic, copied with its `ppl.*`
or `cpl.*` concept id and source (the `uas.*` terms two decks down are not
repeated). Writers must not redefine topic-0 terms; where a `cfi` concept re-applies a
ppl or cpl idea, its note says so (e.g. `cfi.cross-control-demo`, `cfi.adm`).

## Topics

| Topic | Name | Main sources |
|---|---|---|
| T0 | Private and commercial decks (prerequisites) | as those decks |
| T1 | Risk management and SRM in instruction | AIH ch.1, ch.10 |
| T2 | Human behaviour and effective communication | AIH ch.2, ch.4 |
| T3 | The learning process | AIH ch.3 |
| T4 | The teaching process, delivery methods and instructional aids | AIH ch.5, ch.7 |
| T5 | Assessment, critique and questioning | AIH ch.6, app.B, glossary |
| T6 | Instructor responsibilities and flight instruction techniques | AIH ch.8, ch.9 |
| T7 | Flight instructor certificate: eligibility, privileges, limitations and recent experience | 14 CFR 61.3(d), 61.19(d), 61.181–61.199; AC 61-65K; Testing Matrix |
| T8 | Endorsements, logbook entries and instructor records | 14 CFR 61.51(h), 61.87, 61.93, 61.95, 61.189; AC 61-65K app.A |
| T9 | Teaching the manoeuvres: common errors, stall and spin demonstrations | ACS-25 Areas IV–XIV; AFH ch.3, 5, 6, 7, 9, 10; IFH ch.7 |

Counts: 289 concepts (229 core, 60 extra); 360 terms (77 new, 283 topic 0);
1,114 budgeted cards. T1–T6 are the FOI deck; T7–T9 are the FIA layer.

## Exam facts

Two tests. An initial airplane CFI applicant takes both unless exempt from FOI.

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | FAA (Airman Testing Standards Branch) | ACS-25 foreword: "Office of Safety Standards, Regulatory Support Division, Airman Testing Standards Branch, has published the Flight Instructor for Airplane Category Airman Certification Standards" (https://www.faa.gov/training_testing/testing/acs/cfi_airplane_acs_25.pdf#page=2) | No |
| Test codes | FOI, Fundamentals of Instructing; FIA, Flight Instructor Airplane; AFA, added rating | Matrix: "FIA Flight Instructor Airplane 100 16 2.5 70"; "FOI Fundamentals of Instructing 50 16 1.5 70"; "AFA Flight Instructor Airplane (Added Rating)* 25 16 1.0 70" (https://www.faa.gov/training_testing/testing/testing_matrix#page=10, "Revised 9/25/26") | No |
| Questions | FIA 100; FOI 50; AFA 25 | Matrix, as above; the ACS table agrees (ACS-25 #page=100) | Rarely |
| Time | FIA 2.5 h; FOI 1.5 h; AFA 1.0 h | Matrix, as above; ACS-25 table identical. The FAA "Correct Allotted Times" table (October 2024) lists no FIA/FOI row, and says the others are "accurate as published" | Low |
| Pass mark | 70% | Matrix "70"; ACS-25 "Passing Score 70" | No |
| Minimum age to test | 16 (certificate: 18) | Matrix "16"; §61.183(a) "Be at least 18 years of age" | No |
| Outline | FAA-S-ACS-25, November 2023, effective 31 May 2024; supersedes the PTS FAA-S-8081-6D | ACS list: "Flight Instructor for Airplane Category (FAA-S-ACS-25) April 2024 n/a Effective May 31, 2024" (https://www.faa.gov/training_testing/testing/acs). ACS-25: "Material in FAA-S-ACS-25 supersedes FAA-S-8081-6D, Flight Instructor Practical Test Standards for Airplane, dated June 2012" (#page=2) | Rarely |
| FOI exemption | FOI not required for holders of a flight or ground instructor certificate, a state teacher's certificate for 7th grade or higher, or teachers at an accredited college | §61.183(e)(1)–(3); ACS-25: "*The FOI knowledge test applies unless the applicant meets the criteria listed in 14 CFR part 61, section 61.183(e)" (#page=100) | No |
| Added rating | AFA only for existing flight instructor certificate holders; glider CFIs adding airplane take FIA | Matrix: "The above Added Rating tests may be taken ONLY if the applicant already holds a Flight Instructor Certificate … Flight Instructors holding a Glider Rating and seeking to add an Airplane Rating must take the Flight Instructor Airplane (FIA) knowledge test" (#page=10) | Wording clarified 9/2026 (ATCA #page=11) |
| Authorisation to test | FIA, AFA: none. FOI: pilot-school graduation certificate or logbook endorsement | Matrix: "Authorization for Flight and Ground Instructor tests listed above (except FOI, IHF, and SIA through SIY): • Requires NO instructor endorsement or other form of written authorization. Acceptable forms of authorization for Fundamentals of Instructing (FOI) (effective September 1, 2024): • Certificate of graduation … (14 CFR § 61.71(a)) • Logbook endorsement from an authorized ground or flight instructor … (14 CFR § 61.183(d), 14 CFR § 61.185(a)(1) …)" (#page=10) | **Yes: changed 1 Sep 2024** |
| Retake | Failed AKTR plus an endorsement from an instructor who gave the additional training | Matrix: "An applicant retesting AFTER FAILURE is required to submit the applicable AKTR … along with an endorsement by an authorized instructor who gave the applicant the required additional training. (14 CFR § 61.49(a)(2))" (#page=10) | No |
| Validity | 24 calendar months (§61.39(a)(1)), as taught in `ppl.knowledge-test-validity` | re-used | No |
| Testing supplement | FAA-CT-8080-5H (2018) | Matrix page heading: "Airman Knowledge Testing Supplement for Flight Instructor, Ground Instructor, and Sport Pilot Instructor, FAA-CT-8080-5H (2018)" (#page=10) | **Yes** |
| Embedded images | From 26 October 2026 | ATCA: "Effective October 26, 2026, the following exams will feature questions with embedded images: • Flight Instructor • Airline Transport Pilot" (https://www.faa.gov/training_testing/testing/September_2026_Special_Edition.pdf#page=5) | **Yes** |
| Exam review | FIA and FOI under assessment; modifications expected | ATCA #page=4: "assessments for the following exams are underway. Flight Instructor: o Flight Instructor Airplane (FIA) … o Fundamentals of Instructing (FOI) … Modifications based on the assessments of the exams mentioned above are ant[icipated]" | **Yes** |
| Report | AKTR lists ACS codes | ACS-25: "The Airman Knowledge Test Report (AKTR) lists ACS codes that correlate to a specific Task element … for any incorrect responses on the knowledge test" (#page=100–101) | No |
| What is tested | K and R elements | "Knowledge and risk management elements are primarily evaluated during the knowledge testing phase" (#page=101) | No |
| Question pool | Not public | CONTENT-POLICY §3 lists "the FAA question bank (confidential)" as tier C; BRIEF step 6 does not apply | No |

**Weights.** None found. The ACS gives no percentages. The PSI information
bulletins used by the ppl, IFR and CAX decks are on `media.psiexams.com`, whose
robots.txt now reads `User-agent: * Disallow: /` (checked today), and
`www.psiexams.com` disallows `/*.pdf$`. I did not fetch them. See Not verified.

**Stamp `ValidAsOf: 2026-09-25`** on: FOI authorisation, embedded images,
supplement, the "assessments underway" notice, and every Matrix quote.

## Naming

- The FAA publishes no trademark terms for "Flight Instructor", "CFI", "FIA" or
  "FOI"; they are regulatory names of a US Government certificate and tests. FAA
  Order 1700.6D (re-used) governs the logo only: "Only FAA organizations may use the
  FAA logo, unless approved", and it "may not be used in any way that implies
  endorsement by the FAA, DOT, or the United States government of any product".
- **CONTENT-POLICY §4:** plain-text factual naming, our brand first, no FAA logo or
  DOT seal, no "official" or "FAA-approved". The FAA is not in §5. The "is a
  trademark of" sentence in the §4 "Everyone else" notice does not fit a government
  certificate, so the notice follows the ppl, IFR and CAX decks. Title: "[Site name]
  deck for the FAA Flight Instructor Airplane (FIA) and Fundamentals of Instructing
  (FOI) knowledge tests". The ACS is a US Government work, so `ExamRefs` may carry
  ACS codes (FI.I.B.K5, AI.II.K.K2 …); the owner confirms under §2.3.
- **Licence.** No new FAA document carries its own licence or a "©"/"courtesy"
  credit (searched: AIH-9B, ACS-25, AC 61-65K, AFH ch.3; the AIH's two hits for
  "courtesy" are prose). The AIH preface says its contents "do not have the force
  and effect of law". The licence rests on 17 U.S.C. 105(a): "Copyright protection
  under this title is not available for any work of the United States Government"
  (re-used copy). Tier B throughout.
- **Deck notice:**

> Contains material from 14 CFR part 61, the FAA Flight Instructor for Airplane
> Category Airman Certification Standards, the Aviation Instructor's Handbook, the
> Airplane Flying Handbook, the Instrument Flying Handbook and Advisory Circular
> 61-65K, which are US Government works in the public domain. This deck is
> independent and is not affiliated with, sponsored, endorsed or approved by the
> Federal Aviation Administration or the U.S. Department of Transportation. The
> Flight Instructor Airplane (FIA) and Fundamentals of Instructing (FOI) knowledge
> tests are FAA tests.

## Outline (FAA-S-ACS-25, owner's order; no weights published)

K elements only; each Task's R elements map to the same topics. PDF pages are for ACS-25.
"Same as ppl/cpl" means the K text matches ACS-6C or ACS-7B word for word.

**I. Fundamentals of Instructing (FOI test)** (#page=9–15)
- I.A Human Behavior and Communication: K1a–e definitions, relationship, motivation, human needs, defence mechanisms [T2]; K2a–e emotional reactions [T2]; K3 adult learner [T2]; K4a–c elements of, barriers to, developing communication [T2].
- I.B Learning Process: K1 definitions [T3]; K2a–b behaviourism, cognitive theory [T3]; K3 perceptions and insight [T3]; K4 acquiring knowledge [T3]; K5 laws of learning [T3]; K6a–c domains [T3]; K7 characteristics [T3]; K8 SBT [T3]; K9a–d stages, knowledge of results, developing skills, plateaus [T3]; K10 types of practice [T3]; K11 evaluation versus critique [T3]; K12 distractions, fixation [T3]; K13 errors [T3]; K14a–d memory, forgetting [T3]; K15 retention [T3]; K16 transfer [T3].
- I.C Course Development, Lesson Plans, Classroom Techniques: K1a–b teaching process, essential skills [T4]; K2 course of training [T4]; K3a–d objectives, performance-based and decision-based objectives, ACS in curricula [T4]; K4 organisation of material [T4]; K5a–f lecture, discussion, guided discussion, cooperative, demonstration-performance, drill and practice [T4]; K6 e-learning [T4]; K7a–d instructional aids [T4]; K8 integrated flight instruction [T6]; K9 problem-based instruction [T4]; K10a–c blocks of learning, syllabus, lesson plans [T4].
- I.D Evaluation, Assessment, Testing: K1 effective assessment [T5]; K2 traditional [T5]; K3a–c learner-centred, manoeuvre grades, risk management skills [T5]; K4 choosing a method [T5]; K5 critiques [T5]; K6a–c effective questions, questions to avoid, answering questions [T5]; K7 assessment of piloting ability [T6].
- I.E Professional Environment: K1a–e instructor responsibilities [T6]; K2 supervision and surveillance [T6]; K3 qualifications and professionalism [T6]; K4 professional development [T6]; K5 ethics and conduct [T6].
- I.F Risk Management and Accident Prevention: K1 teaching risk identification, assessment, mitigation [T1]; K2a–b PAVE, FRATs [T1]; K3 when and how to introduce [T1]; K4 by phase of instruction [T1]; K5a–c common risks, best practices, takeoffs and landings [T1]; K6 ADM, CRM/SRM [T1][T0].

§61.185(a)(1) lists the FOI areas in regulation form (`cfi.foi-knowledge-areas`, 6 items).

**II. Technical Subject Areas** (#page=16–29)
- II.A Human Factors K1a–l, K2–K4 [T0; wording differs from ppl, content taught there].
- II.B Visual Scanning and Collision Avoidance K1–K8 [T0: ppl T11/T12].
- II.C Runway Incursion Avoidance K1–K6 [T0: ppl T12].
- II.D Principles of Flight K1–K6 [T0: ppl T7]; II.E Flight Controls and Systems [T0]; II.F Performance and Limitations K3–K4 weight and balance terms and CG methods [T0: ppl T8].
- II.G NAS, K4 currency of publications [T0]; II.H Navigation Systems [T0]; II.I Cross-Country Planning [T0].
- II.J 14 CFR and Publications K1–K6: parts 1, 61, 91; 49 CFR 830; ACs, INFOs, SAFOs; ACS/PTS; POH/AFM; AIM [T0][T7: part 61 subpart H].
- **II.K Endorsements and Logbook Entries** (#page=24): K1 logbook entries for instruction given [T8]; K2 pre-solo knowledge test, solo endorsements [T8]; K3 other endorsements (Class B, SFAR) [T8]; K4a–c practical test recommendation [T8]; K5 flight review endorsement [T8]; K6 instructor records [T7]; K7 renewal and reinstatement [T7]. R1 "Endorsements without appropriate limitations or expiration dates" [T8].
- II.L Seaplane [T0]; II.M Night [T0]; II.N–O High altitude, oxygen and pressurisation [T0: cpl T6]; II.P OEI Performance (AMEL, AMES) K1–K7 [T0: ppl T16, cpl T7].

**III. Preflight Preparation** (#page=30–32)
- III.A Pilot Qualifications: K1 certification, currency, records [T0][T8]; K2 privileges and limitations "at student pilot, sport, recreational, private, commercial, and flight instructor levels" [T0][T7]; K3 medical and BasicMed [T0]; K4 documents [T0][T7: `cfi.cfi-possession`].
- III.B Airworthiness [T0]; III.C Weather Information [T0].

**IV. Preflight Lesson on a Maneuver** (#page=33): K1 purpose; K2 elements and common errors; K3 desired outcomes, completion standards [T9][T4].

**V. Preflight Procedures** (#page=34–38); **VI. Airport and Seaplane Base Operations** (#page=39–40): K text as ppl/cpl except "Common errors" (VI.A.K9, VI.B.K5) [T0][T9].

**VII. Takeoffs, Landings, and Go-Arounds** (#page=41–61): A–O as ppl/cpl, each with "Purpose of and procedures for" and "Common errors" [T0][T9]; VII.M Slip to a Landing K1–K5 [T0: ppl forward slip][T9]; VII.O Power-Off 180° [T0: cpl T4][T9].

**VIII. Fundamentals of Flight** (#page=62–63): A–D straight-and-level, level turns, climbs, descents: K1 purpose, K2 control and trim, K3 visual references, K4 integrated flight instruction, K5 common errors [T9][T6].

**IX. Performance and Ground Reference Maneuvers** (#page=65–70): A steep turns, B steep spiral, C chandelles, D lazy eights, E ground reference manoeuvres, F eights on pylons [T0: cpl T4, ppl T13][T9: common errors].

**X. Slow Flight, Stalls, and Spins** (#page=71–81)
- X.A slow flight, X.C–E power-off, power-on, accelerated stalls [T0][T9].
- **X.B Demonstration of Flight Characteristics** (#page=72): K2 power required; K3 minimum power required speed and region of reversed command; K4–K5 relationships and control inputs; K7a–f airspeeds [T9][T0].
- **X.F Cross-Controlled, X.G Elevator Trim, X.H Secondary Stall Demonstrations** (#page=77–80): K1 aerodynamics, K2 situations, K3 recognition, K4 entry and minimum altitude, K5 recovery, K6 common errors [T9][T0: `ppl.cross-control-stall`, `ppl.elevator-trim-stall`, `ppl.secondary-stall`].
- **X.I Spin Awareness and Spins** (#page=80–81): K5 human factors in spin instruction; K6 determining spin approval from category and type certificate; K7–K12 situations, entry, stabilised spin, orientation, recovery [T9][T0: `ppl.spin-phases`, `ppl.spin-recovery`].

**XI. Basic Instrument Maneuvers** (#page=82–85): A–E, K text as ppl plus common errors [T0][T9, IFH].

**XII. Emergency Operations** (#page=87–92): A–G as ppl/cpl plus common errors [T0][T9].

**XIII. Multiengine Operations** (#page=94–96): A, B as cpl T7 [T0]; **C Demonstration of effects of airspeeds and configurations on OEI performance** K1–K8 [T9, extra].

**XIV. Postflight Procedures** (#page=98): as ppl [T0].

§61.187(b)(1) lists the 14 single-engine areas of operation that ACS-25 follows (`cfi.cfi-areas-of-operation`).

## Traps

- [T3] **Laws of learning:** the AIH-9B says Thorndike "formulated three laws of learning … readiness, … exercise, and … effect", and "three more have been added: the law of primacy, the law of intensity, and the law of recency" (#page=62). Older material presents six laws as a single set.
- [T3] **Levels of learning versus Bloom:** Bloom's cognitive domain has six levels (#page=65); the AIH's "four practical learning levels are rote, understanding, application, and correlation", and correlation "should be the objective of aviation instruction" (#page=65–66).
- [T3] **Skill stages:** "cognitive, associative, and automaticity" (#page=75); the heading reads "Automatic Response Stage".
- [T3] **Forgetting:** AIH-9B names "retrieval failure, fading, interference, and repression or suppression" (#page=88). Older prep says "disuse"; the glossary still defines "disuse".
- [T2] **Maslow:** the AIH text heads six levels, adding "Cognitive and Aesthetic" ("In later years, Maslow added cognitive … and aesthetic … needs", #page=40), and notes research found the hierarchy "was not universal" (#page=38). Five-level answers come from older editions.
- [T2] **Defence mechanisms** in AIH-9B: repression, denial, compensation, projection, rationalization, reaction formation, fantasy, displacement (#page=42–44). Candidates mix projection with rationalization and compensation.
- [T4] **Teaching process, two wordings:** ch.5 "preparation, presentation, application, and assessment" (#page=104); ch.7 "preparation, presentation, application, and review and evaluation" (#page=153).
- [T4] **Demonstration-performance** has four phases, "explanation, demonstration, learner performance with instructor supervision, and evaluation" (#page=175); **telling-and-doing** has three steps, with the transition "learner tells—instructor does" between the second and third (#page=176–177).
- [T6] **Positive exchange of flight controls** is a "three-step process" (#page=178); do not confuse it with the three telling-and-doing steps.
- [T5] **Halo error** is "Sympathy or over-identification with a learner" affecting objectivity (#page=133).
- [T5] **Questions to avoid:** puzzle, oversize, toss-up, bewilderment, trick and irrelevant (#page=142–143); yes/no questions such as "Do you understand?" are also ruled out.
- [T5] **Manoeuvre grades** are describe, explain, practice, perform and not observed (#page=137); they are not the four levels of learning.
- [T7] **CFI certificates no longer expire.** §61.19(d)(1): certificates "issued … on or after December 1, 2024, [are] issued without an expiration date"; (d)(2): older ones expire "24 calendar months from the month in which it was issued, renewed, or reinstated". Privileges depend on **recent experience** within "the preceding 24 calendar months" (§61.197(a)). "Renewal" questions and prep written before December 2024 are out of date.
- [T7] **Reinstatement** (§61.199(a)): 3 calendar months or less after the recent-experience period, a FIRC is enough; more than 3, a practical test.
- [T7] **FIRC timing:** completed "Within the preceding 3 calendar months" (§61.197(b)(2)(iii)); the 5-applicant/80% option looks back 24 calendar months ((b)(2)(i)).
- [T7] **Two "80%" rules differ:** recent experience (5 applicants, 24 months, §61.197(b)(2)(i)); trainer of initial CFIs (5 applicants, 24 months, or 24 months held plus 200 hours, §61.195(h)(2)); Gold Seal (10 applicants, 80%, 24 months, AC 61-65K #page=24).
- [T7] **8 hours** of flight training in any 24 consecutive hours (§61.195(a)); **5 hours** PIC in make and model before giving multiengine, helicopter or powered-lift certificate training (§61.195(f)); **15 hours** PIC in category and class to become a CFI (§61.183(j)); records kept **3 years** (§61.189(c)).
- [T7] **FOI authorisation conflict:** the Matrix requires a graduation certificate or endorsement for FOI "effective September 1, 2024" (#page=10), while AC 61-65K para 9.2 still says applicants "are not required to show evidence of completed training to take flight instructor, ground instructor … knowledge tests" (#page=5). Follow the Matrix for the test centre.
- [T7] **Spin endorsement** (§61.183(i)) applies to airplane and glider CFI applicants, "even if the applicant were to initially seek a flight instructor certificate with an airplane multiengine rating" (AC 61-65K #page=21).
- [T8] **90 days** for solo and Class B solo endorsements (§61.87(n), §61.95); the plastic student pilot certificate "does not have an expiration date" (AC 61-65K #page=14).
- [T8] **25 NM versus 50 NM:** solo takeoffs and landings at another airport within 25 NM (§61.93(b)(1)); repeated specific cross-countries within 50 NM without separate endorsements (§61.93(b)(2)).
- [T8] **Pre-solo test:** the student's authorised instructor must "Administer the test" and "review all incorrect answers" before authorising solo (§61.87(b)(2)).
- [T8] **AC version:** AC 61-65K (14 November 2025) cancelled 61-65J (30 October 2024); prep citing 61-65H/J endorsement wording is out of date.
- [T9] **Spin approval:** "The first rule for spin demonstration is to ensure that the airplane is approved for spins" (AFH ch.5 #page=23); an airplane approved in the utility category but loaded to normal-category limits "may not recover from a spin that is allowed to progress beyond one turn" (#page=26).
- [T0] **Outdated standards:** FAA-S-8081-6D (PTS) was superseded by ACS-25; the AIH-9B (2020) "supersedes FAA-H-8083-9A … dated 2008" (#page=4). Much FOI prep still follows 9A.

## Languages

English only as far as the fetched sources show: §61.183(b) requires the applicant
to "read, speak, write, and understand the English language". No FAA page fetched
offers FIA or FOI in another language. No official or openly licensed translation of
the AIH, ACS-25 or AC 61-65K was found; none was searched beyond the FAA pages fetched.

## Budget

`faa-cfi-budget.json` follows BRIEF.md: one primer per new term, one fact per rule,
number, procedure or contrast, one card per member of sets with more than 3 members,
one application per core concept, plus 10%. Topic 0 has no budget. T9 is the largest
(393) because each common-errors list is a set counted from the handbook (e.g. 18
for intentional stalls, 15 for normal approaches, 14 for chandelles). Sets whose size I
did not count carry `members=0` in `build.py` and the note "Count … in the source
before writing": operational pitfalls, reasons for instructional aids, lesson-plan
purposes, characteristics of a well-planned lesson, minimising frustration, flight
instructor responsibilities, guided-discussion question types, and the IFH
climbs-and-descents list (two-column layout). Their budget is one card each and will
rise when counted.

## Not verified

1. **Content-area weights.** The PSI FIA and FOI information bulletins were not
   fetched: `media.psiexams.com/robots.txt` disallows all paths. The guessed URLs
   `FIA_Information_Bulletin.pdf` and `FOI_Information_Bulletin.pdf` returned 404
   before I checked robots.txt; I then stopped. No other source gives weights.
2. **FOI and ACS codes.** ACS-25 Area I carries `FI.` codes and the Matrix
   highlights tests whose AKTR shows ACS codes, but the colour highlighting is lost
   in the text copy; whether the FOI AKTR prints `FI.` codes was not confirmed.
3. **FIA question coverage outside the ACS K text,** e.g. how far FIA tests
   teaching-specific aerodynamics beyond ppl/cpl, was not checkable (no public pool).
4. **FAA-CT-8080-5H** (instructor testing supplement) was not fetched; figure
   fields name handbook figures only.
5. **Set sizes** listed under Budget were not counted. The AIH figures (e.g.
   Figure 1-3 IMSAFE, Figure 6-1) are images; members were taken from headings.
6. **Region of reversed command** is named in ACS-25 (AI.X.B.K3) but not explained
   there; the ppl sources (PHAK ch.11) were not re-read for it.
7. **Gold Seal criteria** come from AC 61-65K, which points to FAA Order 8900.1
   (not fetched).
8. **Leads in the prompt.** The prompt named "14 CFR 61 subpart H" as new; the
   prerequisite decks' eCFR copy of part 61 already contained it, so it was
   re-used, not re-fetched. The eCFR block was not re-tested. The other leads
   (FAA-H-8083-9 for FOI, the Flight Instructor ACS) were right; the current editions
   are FAA-H-8083-9B and FAA-S-ACS-25.

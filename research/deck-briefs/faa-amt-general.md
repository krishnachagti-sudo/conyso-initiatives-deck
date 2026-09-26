# Research brief: FAA Aviation Mechanic General knowledge test (AMG)

Slug: `faa-amt-general`. Family prefix: `amtg`. Researched 26 September 2026.
Every fact below was read in a source fetched in this task, or in a source an
earlier FAA deck's research fetched and saved. New downloads are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/faa-amt-general/`;
re-used files are read in place from `research/sources/faa-private-pilot/`
(14 CFR 1.1, parts 39, 43, 61 and 91 as eCFR copies saved 2026-09-25, the Testing
Matrix, the September 2026 ATCA, 17 U.S.C. 105) and `research/sources/faa-cfi/`
(Order 1700.6D). Nothing in `faa-commercial/` fitted. `build.py` and
`concepts_def.py` in the scratch folder regenerate the concepts, terms and budget:
each concept's anchor is found by searching its text in the saved source, and the
build fails on any text it cannot find.

**No prerequisite deck.** The mechanic certificate does not build on a pilot
certificate, so there is no topic 0; every term is taught here. The pilot decks
(`ppl`) teach some of the same rules from a pilot's side (91.409 inspections,
91.213 inoperative equipment, 43 App. A preventive maintenance); writers may look
at those cards for consistency but this deck teaches them from the mechanic's side.

## Topics

| Topic | Name | ACS subject | Main sources |
|---|---|---|---|
| T1 | Fundamentals of electricity and electronics | I.A | AMTH ch.12 |
| T2 | Aircraft drawings | I.B | AMTH ch.4 |
| T3 | Weight and balance | I.C | AMTH ch.6 |
| T4 | Fluid lines and fittings | I.D | AMTH ch.9; AC 43.13-1B ch.9 |
| T5 | Aircraft materials, hardware and processes | I.E | AMTH ch.7; AC 43.13-1B ch.4 (welding), ch.7 (hardware) |
| T6 | Ground operations and servicing | I.F | AMTH ch.1 |
| T7 | Cleaning, corrosion control and finishes | I.G | AMTH ch.8; AC 43.13-1B ch.6; 14 CFR 45 |
| T8 | Mathematics | I.H | AMTH ch.3 |
| T9 | The mechanic certificate: eligibility, tests and privileges | I.I K1, K2, K23 | 14 CFR 65 subparts A, D, E; AMTH ch.13; Companion Guide |
| T10 | Regulations, maintenance forms, records and publications | I.I (rest) | 14 CFR 1.1, 39, 43, 91 subpart E; AMTH ch.2; AC 43.13-1B |
| T11 | Physics for aviation | I.J | AMTH ch.5 |
| T12 | Inspection concepts, measuring tools and NDT | I.K | AMTH ch.10–11; AC 43.13-1B ch.5 |
| T13 | Human factors | I.L | AMTH ch.14 |

Counts: 774 concepts (549 core, 225 extra); 376 terms; 1,919 budgeted cards.
AMTH = Aviation Maintenance Technician Handbook – General, FAA-H-8083-30B (2023),
one 677-page PDF; `#page=N` is the PDF page. Chapter first pages: ch.1 p22, ch.2
p50, ch.3 p96, ch.4 p124, ch.5 p150, ch.6 p212, ch.7 p245, ch.8 p325, ch.9 p354,
ch.10 p377, ch.11 p416, ch.12 p442, ch.13 p616, ch.14 p624.

## Exam facts

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | FAA (Flight Standards, Airman Testing Standards Branch; now "Testing Standards Section"); delivered by PSI | ACS foreword: "Office of Safety Standards, Regulatory Support Division, Airman Testing Standards Branch has published the Aviation Mechanic General, Airframe, and Powerplant Airman Certification Standards" (https://www.faa.gov/training_testing/testing/acs/Aviation_Mechanic_Certification_Standards.pdf#page=2). Companion Guide: "the FAA utilizes the testing vendor PSI Services, LLC (PSI)" (https://www.faa.gov/training_testing/testing/acs/amt_acs_companion_guide.pdf#page=15) | Vendor: rarely |
| Test code and name | AMG, "Aviation Maintenance Technician General" | Matrix: "AMG Aviation Maintenance Technician General 60 N/A 2.0 70" (https://www.faa.gov/training_testing/testing/testing_matrix#page=6, "Revised 9/25/26"). The Companion Guide calls it "Aviation Mechanic Technician - General" (#page=12) and the ATCA "Aviation Mechanic General (AMG)" | No |
| Outline | FAA-S-ACS-1, dated 1 November 2021, one document for General, Airframe and Powerplant; no change issued | ACS list: "Aviation Mechanic General, Airframe, and Powerplant (FAA-S-ACS-1) November 2021 n/a Effective September 21, 2022" (https://www.faa.gov/training_testing/testing/acs). Revision history has one row, "11/01/2021" (ACS #page=3). 14 CFR 65.23(a)(3): "FAA–S–ACS–1 … November 1, 2021; IBR approved for §§ 65.75 and 65.79" (govinfo part 65 #page=6) | Rarely |
| Used for testing since | 31 July 2023 | Companion Guide: "will be used as the testing standard for the written, oral, and practical tests after July 31, 2023 … Until July 31, 2023, the FAA will use the … Practical Test Standards" (#page=6) | No |
| Questions | 60 | Matrix (above); Companion Guide table "AMG … 60 N/A 2.0 70" (#page=12) | No |
| Time | 2.0 hours | same | No |
| Pass mark | 70% | §65.17(b): "The minimum passing grade for each test is 70 percent" (govinfo part 65 #page=5) | No |
| Age | None for the test; 18 for the certificate | Matrix and Companion Guide: age "N/A". §65.71(a)(1): "Be at least 18 years of age". Companion Guide: an applicant under 18 who passes "should hold their documentation until they turn 18" (#page=24) | No |
| Format | Multiple choice, single correct response; embedded images | Companion Guide: "objective multiple-choice questions. There is a single correct response for each test question" (#page=12). ATCA: "The following exams feature questions with embedded images: … Aviation Maintenance Technician (General, Airframe, and Powerplant)" (https://www.faa.gov/training_testing/testing/September_2026_Special_Edition.pdf#page=5) | **Yes** |
| What is tested | Knowledge elements only | Companion Guide: "Knowledge—(written test, oral test) … Risk—(oral test, practical test) … Skill—(practical test)" (#page=11) | No |
| Testing supplement | FAA-CT-8080-4G (2018) until withdrawn | Matrix: "Airman Knowledge Testing Supplement for Aviation Maintenance Technician - General, Airframe, and Powerplant; and Parachute Rigger, FAA-CT-8080-4G (2018)" (#page=6); ATCA: "The date for removing testing supplements from test centers has not yet been set" (#page=5) | **Yes** |
| Authorisation | AMTS document (graduation, or completion of the General curriculum before graduation); Form 8610-2 signed by an inspector; military COE | Matrix #page=6: "An airman applicant who has not graduated from an FAA-certificated AMTS may take the AMG test prior to graduation by presenting an authenticated document indicating satisfactory completion of the General curriculum. (14 CFR §§ 65.75(c) and 147.31)"; "Do NOT accept an original issuance application for an AMG test only" | No |
| Retake | After 30 days, or sooner with a signed statement from an airman holding the certificate and rating sought | §65.19 (govinfo part 65 #page=6); Matrix NOTE 1–2 (#page=6); Companion Guide #page=10 | No |
| Validity | All tests within 24 months | §65.71(a)(3): "Have passed all of the prescribed tests within a period of 24 months". Companion Guide: "An AKTR expires 24 calendar months after the month the applicant completes the written test" (#page=19). §65.75(d): expired report usable only "in accordance with § 61.40" | No |
| Report | AKTR lists ACS codes for missed questions; the oral retests them | Companion Guide #page=19, #page=20 | No |
| Cheating | 1 year ineligible | §65.18(b) (govinfo part 65 #page=5) | No |
| Weights | Ranges per subject (below) | Companion Guide "Written Test Blueprints" (#page=13) | Possibly (PSI assessment under way) |
| Upcoming change | PSI assessment of AMG; modifications "anticipated to be implemented in 2027" | ATCA #page=4 | **Yes** |
| Question pool | Not public | CONTENT-POLICY §3 lists "the FAA question bank (confidential)" as tier C; no public pool, so BRIEF step 6 does not apply | No |

**Weights (Companion Guide, FAA, tier B).** "The following charts show what
percentage of each subject area an applicant can expect to see on their written
tests" (#page=13):

| ACS subject | % of questions |
|---|---|
| A Fundamentals of Electricity and Electronics | 5–15 |
| B Aircraft Drawings | 5–10 |
| C Weight and Balance | 5–10 |
| D Fluid Lines and Fittings | 5–10 |
| E Aircraft Materials, Hardware, and Processes | 5–10 |
| F Ground Operations and Servicing | 5–15 |
| G Cleaning and Corrosion Control | 5–10 |
| H Mathematics | 5–10 |
| I Regulations, Maintenance Forms, Records, and Publications | 5–10 |
| J Physics for Aviation | 5–10 |
| K Inspection Concepts and Techniques | 5–10 |
| L Human Factors | 5–10 |

**Stamp `ValidAsOf: 2026-09-26`** on: embedded images, supplement, the 2027
assessment notice, the Matrix wording, and every CFR fact taken from the 2025
govinfo edition of part 65.

## Naming

- No FAA page fetched states trademark terms for "Aviation Mechanic", "AMT" or
  "AMG"; they are regulatory names of a US Government certificate and test. The
  FAA's Web Policies and Disclaimer pages (fetched) state no copyright, reuse or
  AI terms. FAA Order 1700.6D (re-used) governs the logo only: it may not be used
  "in any way that implies endorsement by the FAA, DOT, or the United States
  government of any product".
- **CONTENT-POLICY §4:** plain-text factual naming, our brand first, no FAA logo or
  DOT seal, no "official" or "FAA-approved". The FAA is not in §5. As in the pilot
  decks, the "is a trademark of" sentence does not fit a government test. Title:
  "[Site name] deck for the FAA Aviation Mechanic General knowledge test (AMG)".
  The ACS is a US Government work, so `ExamRefs` may carry ACS codes (AM.I.C.K4 …);
  the owner confirms under §2.3.
- **Licence.** No FAA document fetched carries its own licence or "©" (searched the
  ACS, Companion Guide, AMTH-30B, AC 43.13-1B, sample O&P FAQ). The licence rests on
  17 U.S.C. 105(a) (re-used copy) and govinfo's notice: "The intent of the section is
  to place in the public domain all work of the United States Government". **Caveat:**
  AMTH-30B's Acknowledgments credit third-party images (companies, photographers and
  Wikimedia Commons, one "Cc-by-sa-2.0-fr"); those figures are not public domain. The
  `figure` field names only FAA tables (e.g. Figure 1-31, 8-6); check each figure's
  credit before reproducing it.
- **Deck notice:**

> Contains material from 14 CFR parts 1, 39, 43, 45, 65 and 91, the FAA Aviation
> Mechanic General, Airframe, and Powerplant Airman Certification Standards and its
> Companion Guide, the Aviation Maintenance Technician Handbook – General
> (FAA-H-8083-30B) and Advisory Circular 43.13-1B, which are US Government works in
> the public domain; some handbook images are third-party material and are not
> reproduced. This deck is independent and is not affiliated with, sponsored,
> endorsed or approved by the Federal Aviation Administration, the U.S. Department
> of Transportation or PSI Services LLC. The Aviation Mechanic General knowledge
> test (AMG) is an FAA test delivered at PSI testing centres.

## Outline (FAA-S-ACS-1, Section I General, owner's order; Companion Guide weights)

All 12 subjects, 166 knowledge elements (177 codes with sub-elements) and 62 risk
elements. Only K elements are on the written test; R elements (oral and practical)
map to the same topics and many have their own concept. PDF pages are for the ACS.

**A. Fundamentals of Electricity and Electronics (5–15%)** (#page=6–7) [T1]
- K1 electron vs conventional flow; K2 magnetism; K3 capacitance; K4 inductance; K5 AC circuits; K6 DC circuits.
- K7a–f Ohm's, Kirchhoff's, Watt's, Faraday's and Lenz's laws, right-hand motor rule; K8 measurement tools; K9 voltage, K9a regulation; K10 current; K11a–d impedance, series, parallel and total resistance; K12 power; K13–K14 series and parallel circuits.
- K15 batteries; K16 transformers; K17 continuity; K18 switches and relays; K19 fuses, circuit breakers, current limiters; K20 resistor types and colour code; K21 semiconductors; K22 digital logic (RAM, ROM, NVRAM, gates, inverter, rectifier, flip-flop); K23 binary [T1][T8]; K24 ESD; K25 circuit drawings [T1][T2]; K26 complex circuits; K27 AC and DC motors.
- R1–R4 measurements, battery types, high-voltage circuits, working around batteries.

**B. Aircraft Drawings (5–10%)** (#page=8) [T2]
- K1 drawings, blueprints, sketches, charts, graphs, schematics, lines and symbols; K2 repair or alteration against type design using drawings; K3 inspection using drawings; K4 terms.
- R1–R4 tolerances, alteration specifications, applicability by model and serial number, current version.

**C. Weight and Balance (5–10%)** (#page=9) [T3]
- K1 terminology; K2 purpose of weighing; K3 weighing procedures and area; K4 arm, moment, CG, moment index; K5 weight and CG limits; K6 purpose of CG; K7 adverse loading; K8 empty weight configuration; K9 ballast; K10 jacking.
- R1–R5 jacking, weighing, scales, CG outside limits, overweight.

**D. Fluid Lines and Fittings (5–10%)** (#page=11) [T4]
- K1 tubing and hose materials, sizes, fittings; K2 material identification; K3 rigid line fabrication, installation, inspection; K4 flexible hose; K5 torque wrench on fittings; K6 torque seal.
- R1–R7 system configuration, safety equipment, hazardous fluids, high pressure, twisted hose, loosened fitting, tools while torquing.

**E. Aircraft Materials, Hardware, and Processes (5–10%)** (#page=12) [T5]
- K1 materials; K2 heat treatment and metal working; K3 forces (tension, compression, torsion, bending, strain, shear) [T5][T11]; K4 hardware; K5 safety wire and clips; K6 precision measurement [T12]; K7 soldering; K8 torquing tools; K9 compatibility; K10 torque and preload; K11 identification markings; K12–K14 acceptable and unacceptable welds, weld repairs.
- R1–R4 PPE, improper torque, used hardware and SUPs, critical fasteners.

**F. Ground Operations and Servicing (5–15%)** (#page=14) [T6]
- K1 towing; K2 securing; K3 fuelling and defuelling; K4 airport operation area, ATC communications, runway incursions; K5 engine start, ground running, taxiing; K6 fire extinguishers; K7 oil, hydraulic, pneumatic, de-icing servicing; K8 oxygen servicing; K9 avgas and turbine fuel identification; K10 fuel additives; K11 approved fuel grades; K12 tool accountability; K13 material handling; K14 parts protection; K15 hazmat, SDS, PPE; K16 FOD.
- R1–R10 towing, external power, ungrounded fuelling, misfuelling, oxygen, checklist use, engine runs, cowling off, other aircraft nearby.

**G. Cleaning and Corrosion Control (5–10%)** (#page=16–17) [T7]
- K1 cleaning; K2–K7 corrosion theory, types, prone areas, prevention, identification, removal; K8–K9 CPCs; K10 high-pressure equipment; K11 wrong cleaners on aluminium or composites; K12 dissimilar metals; K13 conversion coatings; K14–K16 protective materials, primers, topcoats; K17–K19 surface preparation, ambient conditions; K20 replacing registration marks and placards (part 45); K21 finish inspection; K22 finishing safety; K23 application techniques; K24 control surface balance after refinishing.
- R1–R8 health, ventilation, choice of process, SDS, flammables, disposal, PPE, application.

**H. Mathematics (5–10%)** (#page=18) [T8]
- K1–K2 areas and volumes; K3 geometric terms; K4–K5 ratio, proportion, percentage; K6 algebra; K7 metric conversion; K8 scientific, decimal, fractional and binary notation; K9 rounding; K10 powers; K11 measurement systems; K12 signed numbers; K13 basic operations.
- R1–R3 order of operations, signed numbers, rounding.

**I. Regulations, Maintenance Forms, Records, and Publications (5–10%)** (#page=19)
- K1 privileges and limitations [T9]; K2 recent experience [T9]; K3 return-to-service entry after maintenance (43.9) [T10]; K4 entry after inspection (43.11) [T10]; K5 Forms 337, 8010-4, 8100-2, 8130-3 [T10]; K6 part 1 terms [T10]; K7 major or minor [T10]; K8 regulatory framework [T10]; K9 aircraft specifications, TCDS, ACs, ADs [T10]; K10 AMOC [T10]; K11 manuals, SBs, MMEL [T10]; K12 FAA databases [T10]; K13–K14 manufacturer methods and intervals [T10]; K15–K16 approved and acceptable data [T10]; K17 airworthiness limitations [T10]; K18 warnings, cautions, notes [T10]; K19 inoperative equipment [T10]; K20 discrepancy records and placards [T10]; K21–K22 effectivity [T10]; K23 address change [T9].
- R1–R5 documentation, SDS, complacency, warnings, component applicability.

**J. Physics for Aviation (5–10%)** (#page=21) [T11]
- K1 matter and energy; K2 work, power, force, motion; K3 simple machines; K4 heat and pressure; K5 Bernoulli; K6 Newton's laws; K7 gas laws and fluid mechanics; K8 theory of flight; K9 standard atmosphere; K10 primary and secondary controls; K11 vortex generators, fences, stall strips; K12 temperature, density, weight, volume; K13 force, area, pressure.
- R1–R4 density altitude, repairs to flight surfaces, performance data, units.

**K. Inspection Concepts and Techniques (5–10%)** (#page=22) [T12]
- K1 calipers, micrometers, gauges; K2 calibration; K3 NDT; K4 progressive, 100-hour, annual and other inspections [T12][T10]; K5 inspection methods and tools.
- R1–R5 demagnetising, precision instruments, calibration, choosing a technique, ohmmeter damage.

**L. Human Factors (5–10%)** (#page=23) [T13]
- K1 safety culture; K2 human error; K3 event investigation; K4 human performance; K5 physical and social environment; K6 hazard reporting; K7 teamwork and leadership; K8 professionalism; K9 shift and task turnover; K10 preconditions for unsafe acts; K11 types of error.
- R1–R3 selective reporting, fatigue and fitness for duty, condition monitoring.

## Traps

- [T9] **Question count:** AMG is 60 questions in 2.0 hours; AMA and AMP are 100 questions in the same 2.0 hours (Matrix; Companion Guide #page=12).
- [T9] **Only K elements are on the written test.** The Companion Guide maps Knowledge to "written test, oral test" and Risk to "oral test, practical test" (#page=11). Pilot-deck habits ("K and R are tested on the knowledge test") do not carry over.
- [T9] **Retest rule is not the pilot rule:** 30 days, or sooner with "a signed statement from an airman holding the certificate and rating sought" (§65.19(b)), not an instructor endorsement.
- [T9] **Ages:** no age to take AMG ("N/A"); 18 to hold the certificate (§65.71(a)(1)).
- [T9] **Taking General early:** §65.75(c) lets a school student take the General test before meeting experience with an AMTS document showing completion of the General portion; the Companion Guide adds that a school "is not required to provide" one (#page=9).
- [T9] **24 months, two wordings:** "within a period of 24 months" (§65.71(a)(3)) vs "24 calendar months after the month" (Companion Guide #page=19). An expired report is usable only under the §61.40 relief (§65.75(d)), which covers persons serving outside the US in support of US Armed Forces operations (§61.40(b)(1), re-used eCFR copy).
- [T9] **Experience:** 18 months for one rating, 30 months "concurrently performing the duties appropriate to both" (§65.77(b)).
- [T9] **Recent experience** is 6 months in the preceding 24 months as a mechanic, supervising mechanics, or supervising maintenance in an executive capacity, or the Administrator finding him able (§65.83).
- [T9] **Exclusions:** a mechanic may not do "major repairs to, and major alterations of, propellers, and any repair to, or alteration of, instruments" (§65.81(a)); must have done the work before, or show it under supervision.
- [T9] **100-hour vs annual:** an airframe or powerplant rating allows the 100-hour inspection (§65.85(a), 65.87(a)); the annual needs an inspection authorisation (§65.95(a)(2)). IA "expires on March 31 of each odd-numbered year" (§65.92(a)); failed IA test: 90 days before retesting (§65.91(c)).
- [T10] **2025 amendments.** The current eCFR (saved 2026-09-25) shows §43.12 "[Reserved]", and §43.13 amended by Amdt. 43-63 (90 FR 35211) and §91.409 by Amdt. 91-381 (90 FR 35222), both July 24, 2025. AMTH-30B (2023) and the 1-1-25 CFR edition on govinfo still show §43.12 "Maintenance records: Falsification, reproduction, or alteration". Cite the current eCFR for part 43 and 91; do not write a card on §43.12.
- [T10] **100-hour overrun:** "may be exceeded by not more than 10 hours while en route"; the excess counts towards the next 100 hours (§91.409(b)). The annual is "within the preceding 12 calendar months" (§91.409(a)).
- [T10] **43.9 vs 43.11:** 43.9 is the maintenance entry (description, completion date, name, signature, certificate number and kind of certificate); 43.11 is the inspection entry. Candidates mix them.
- [T10] **Form 337:** "at least in duplicate", copy to the owner, copy to the FAA "within 48 hours after" return to service (Part 43 App. B).
- [T10] **Preventive maintenance** is "simple or minor preservation operations and the replacement of small standard parts" (§1.1) and limited to the 31 items of Part 43 App. A(c).
- [T10] **AC 43.13-1B** is acceptable data for "minor repairs"; it becomes approved data for a major repair only when listed in Block 8 of Form 337 and appropriate, directly applicable and not contrary to manufacturer's data (AC #page=1).
- [T10] **Old handbook in circulation:** the FAA's own sample oral questions cite "FAA-H-8083-30A" page numbers (sample O&P FAQ); the current edition is 30B (2023) and pages differ.
- [T6] **Avgas colours:** 80 red, 100 green, 100LL blue, 115 purple (AMTH Figure 1-31, #page=47). Grades in general use are "80/87, 100/130, and 100LL"; "115/145, is in limited use" (#page=46).
- [T6] **Fire classes:** the NFPA "classified fires into three basic types: Class A, Class B, and Class C"; Class D (flammable metal) is "not commercially considered by the NFPA to be a basic type" (AMTH #page=26).
- [T4] **Flare angle:** flaring tools "produce a flare of 35° to 37°"; never an automotive tool that "produces a flare of 45°" (AMTH #page=357). Tube size numbers are sixteenths of an inch of outside diameter (#page=355).
- [T4] **Buna-N and Skydrol:** "Do not use for phosphate ester base hydraulic fluid (Skydrol™)" (AMTH #page=369).
- [T5] **Icebox rivets** stay soft enough to drive "for up to 2 weeks" in a refrigerator (AMTH #page=296).
- [T5] **O-ring colours:** codes on O-rings compatible with hydrocarbon fluid "always contains red but never contain blue" (AMTH #page=278).
- [T7] **Steel wool** or steel brushes on aluminium or magnesium embed steel and cause corrosion (AMTH #page=330).
- [T12] **Magnetic particle** works only on "ferromagnetic materials, such as iron and steel. It is not applicable to nonmagnetic materials" (AMTH #page=405).
- [T13] **Numbers:** "approximately 75–80 percent" of aviation accidents are human error; "about 12 percent" of those are maintenance related (AMTH #page=624).
- [T6] **Embedded images:** AMT tests already carry them (ATCA #page=5); the paper supplement FAA-CT-8080-4G is still at centres. Old prep material assumes the supplement only.

## Languages

The test is in English: §65.71(a)(2) requires the applicant to "read, write, speak,
and understand the English language", with the exception that an applicant employed
outside the United States by a U.S. air carrier may have the certificate endorsed
"Valid only outside the United States". The Companion Guide says "English language
proficiency is required" and points to AC 60-28 (#page=9). No FAA page fetched offers
AMG in another language. No official or openly licensed translation of the ACS,
AMTH-30B or AC 43.13-1B was found; none was searched beyond the FAA pages fetched.

## Budget

`faa-amt-general-budget.json` follows BRIEF.md: one primer per term, one fact per
rule, number, procedure or contrast, one card per member of sets with more than 3
members, one application per core concept, plus 10%. Topics 1 (263), 5 (219) and 10
(270) are largest because ACS I.A has 27 K elements and I.I has 23. Set sizes were
counted from AMTH headings or the regulation (e.g. 31 items in 43 App. A(c), 12 Dirty
Dozen, 6 shop-safety headings, 11 line types) except these, which are estimates to
recount when writing: `resistor-types`, `resistance-factors`, `ac-motor-types`,
`diagram-types`, `fluid-line-id`, `temper-designations`, `bolt-head-markings`,
`rivet-head-markings`, `non-self-locking-nuts`, `safety-pins`, `welding-processes`,
`unacceptable-weld`, `extinguisher-types`, `taxi-signals`, `light-signals`,
`corrosive-agents`, `corrosion-prone-areas`, `corrosion-types-ac`, `finish-defects`,
`metric-system`, `special-powers`, `record-43-11`, `app-d-scope`, `records-91-417`,
`cfr-structure`, `part-23-25`, `sound-properties`, `secondary-controls`,
`lift-devices`, `helicopter-aero`, `publications-for-inspection`, `hand-tools`,
`wrenches`, `micrometer-parts`, `common-errors`.

Anchors for eCFR sections are section URLs (e.g. `…/part-43/section-43.9`);
appendices to part 43 use the part URL with the appendix named in the concept.
Part 65 and part 45 anchors are PDF pages of the govinfo 1-1-25 edition.

## Not verified

1. **Current text of 14 CFR part 65.** eCFR now answers automated requests with a
   "Request Access" page, so I did not fetch it; govinfo's most recent edition is
   1-1-25. The July 2025 rule that changed parts 43 and 91 may also have changed part
   65 (for example §65.85(b), 65.87(b) light-sport privileges, or the repairman
   sections); I could not check. Re-read part 65 on eCFR by hand before writing T9.
2. **Where §43.12's falsification rule went.** The current eCFR shows it reserved; I
   did not find a replacement section.
3. **No AMTH-30B text** for fuel additives (I.F.K10), flip-flops (I.A.K22), Form
   8130-3 (I.I.K5) or finish application techniques (I.G.K23). The Airframe and
   Powerplant handbooks (FAA-H-8083-31B, -32B) were not fetched. These concepts cite
   the ACS only and carry a note.
4. **Weights** are FAA ranges only. The PSI AMG bulletin was not fetched (the CFI
   brief found `media.psiexams.com/robots.txt` disallows all paths; not re-checked).
5. **Estimated set sizes** listed under Budget.
6. **FAA sample questions.** The FAA publishes no sample written AMG questions: its
   "Airman Knowledge Sample Tests" link goes to PSI's login page (not fetched). It
   does publish a sample oral and practical test (fetched); it is exam-style content,
   so it gives format facts only and is never card content (CONTENT-POLICY §6).
7. **Leads in the prompt.** (a) "14 CFR … (govinfo)": govinfo's latest edition
   (1-1-25) predates the July 2025 amendments to parts 43 and 91, so cards cite the
   current eCFR copies re-used from the ppl research; only part 65 and part 45 rest on
   govinfo. (b) "FAA sample test questions": none for the written test (item 6).
   (c) "Reuse faa-commercial/": nothing there fitted; faa-private-pilot/ and faa-cfi/
   did. (d) The ACS (FAA-S-ACS-1, 2021, no change) and AMTH-30B (2023) are the current
   revisions, as the prompt expected; the Companion Guide is at Change 2 (September 2024).

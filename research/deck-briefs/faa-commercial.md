# Research brief: FAA Commercial Pilot Airplane knowledge test (CAX)

Slug: `faa-commercial`. Family prefix: `cpl`. Researched 25 September 2026.
Every fact below was read in a source fetched in this task, or in a source the
prerequisite deck's research fetched and saved. New downloads are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/faa-commercial/`;
re-used files are read in place from `../faa-private-pilot/` (and one from
`../faa-instrument/`) and flagged "re-used" in `faa-commercial-sources.json`.
`#page=N` anchors are PDF pages counted from form feeds; `build.py` in the scratch
folder regenerates the concepts, terms and budget and fails on any anchor whose
text is not on the stated page.

**Prerequisite deck.** `prerequisiteDecks: ["faa-private-pilot"]` (family `ppl`),
which itself builds on `faa-part-107` (`uas`). I read the ppl brief, its
`manifest.json`, `faa-private-pilot-terms.json` and concept list first, and did
not re-fetch anything it had saved: 14 CFR parts 61 and 91, AFH chapters 5, 7, 9,
10 and 13, PHAK chapter 7, the Testing Matrix, the ATCA bulletin and the ACS list
page are all re-used. A script compared every knowledge (K) element in the
Commercial ACS (FAA-S-ACS-7B) with the Private ACS (FAA-S-ACS-6C): apart from
I.A.K4, I.B.K4, I.F.K2e–f, II.C.K3 and IV.M, the K text of Areas I–IV, VI, IX and
XI is the private text, word for word. The genuinely new K elements are the four commercial
manoeuvres (V.B–E), the power-off 180° accuracy landing (IV.M), accelerated stalls
(VII.D), high-altitude operations (Area VIII), the special airworthiness
certificate limitation (I.B.K4) and the commercial side of I.A (certificate,
second-class medical, privileges). The CAX deck therefore teaches only:

- the commercial certificate (eligibility, 250-hour experience, TAA, medical);
- what "compensation or hire" allows (61.133, part 119 exceptions, 91.147,
  special airworthiness limits);
- complex, high-performance and TAA systems (AFH ch.12, a new fetch);
- the commercial manoeuvres and the power-off 180;
- accelerated stalls at commercial depth;
- high-altitude operations (AC 61-107B, a new fetch; PHAK ch.7 re-used);
- a thin multiengine layer (all extra).

`faa-commercial-terms.json` opens with **246 topic-0 terms**: every
`faa-private-pilot-terms.json` entry with a non-zero topic, copied with its `ppl.*`
concept id and source. The 150 `uas.*` terms the ppl registry carries at its own
topic 0 are taught two decks down and are not repeated. Writers must not
redefine topic-0 terms; where a `cpl` concept re-applies a ppl idea, its note says
so (e.g. `cpl.medical-reverts`, `cpl.100-hour-for-hire-cpl`).

## Topics

| Topic | Name | Main sources |
|---|---|---|
| T0 | Private pilot deck (prerequisite) | as that deck |
| T1 | Commercial certificate: eligibility, experience and medical | 14 CFR 61.1, 61.23, 61.121–61.131 |
| T2 | Commercial privileges, limitations and operations for hire | 61.133; 119.1; 91.147, 91.313–91.327, 91.409 |
| T3 | Complex, high-performance and technically advanced airplanes | AFH ch.12; 61.1, 61.31(f) |
| T4 | Commercial performance and ground reference manoeuvres | AFH ch.7, 9, 10; ACS Area V, IV.M |
| T5 | Accelerated stalls and spin awareness | AFH ch.5 |
| T6 | High-altitude operations: oxygen, pressurisation and physiology | AC 61-107B; PHAK ch.7; 91.211(b) |
| T7 | Multiengine commercial tasks (AMEL, AMES; all extra) | AFH ch.13 |

Counts: 174 concepts (117 core, 57 extra); 283 terms (37 new, 246 topic 0);
401 budgeted cards.

## Exam facts

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | FAA (Airman Testing Standards Branch); delivered by PSI | ACS foreword: "Office of Safety Standards, Regulatory Support Division, Airman Testing Standards Branch, has published the Commercial Pilot – Airplane Airman Certification Standards" (https://www.faa.gov/training_testing/testing/acs/commercial_airplane_acs_7.pdf#page=2). CIB: "The Commercial Pilot Airplane (CAX) knowledge exam is available at PSI's FAA approved testing centers." (https://media.psiexams.com/faa/CAX_Information_Bulletin.pdf#page=2) | Vendor: rarely |
| Test code and name | CAX, Commercial Pilot Airplane | Matrix: "CAX Commercial Pilot Airplane 100 16 2.5 70" (https://www.faa.gov/training_testing/testing/testing_matrix#page=7, "Revised 9/25/26") | No |
| Not to be confused with | CCP, Commercial Pilot Airplane Canadian Conversion | Matrix: "CCP Commercial Pilot Airplane Canadian Conversion 40 18 2.0 70"; "Requires NO instructor endorsement" (#page=7) | No |
| Outline | FAA-S-ACS-7B, November 2023, effective 31 May 2024; supersedes ACS-7A Change 1 | ACS list: "Commercial Pilot for Airplane Category (FAA-S-ACS-7B) April 2024 n/a Effective May 31, 2024" (https://www.faa.gov/training_testing/testing/acs). ACS p.i: "Material in FAA-S-ACS-7B supersedes FAA-S-ACS-7A, Commercial Pilot – Airplane Airman Certification Standards, Change 1." (#page=2) | Rarely (2017, 2018, 2019, 2023 per the revision history, #page=3) |
| Questions | 100 scored + 5 unscored validation | CIB: "In addition to the 100 questions in the CAX exam, 5 validation questions will be administered … These questions will not be scored" (#page=4) | Validation count may change |
| Time | **2.5 hours (150 minutes)** | Matrix "2.5"; CIB "150 Minutes"; ACS Knowledge Test Table: Correct Allotted Times: "CAX Commercial Pilot Airplane 100 16 2.5 4/24/23 70" and "Allotted times are incorrect, in the corresponding ACS" (https://www.faa.gov/training_testing/testing/acs/acs_knowledge_test_table.pdf, "Updated: October 2024"). The ACS itself still says "CAX Commercial Pilot Airplane 100 16 3.0 70" (#page=73) | **Yes: the ACS is wrong**; cite the Matrix |
| Pass mark | 70% | Matrix "70"; CIB "70% correct" | No |
| Minimum age to test | 16 (certificate: 18) | Matrix "16"; §61.123(a) "Be at least 18 years of age" | No |
| Format | Multiple choice, one best answer; embedded images | CIB: "The questions are the multiple-choice type, and you are to select the one best answer" (#page=4). ATCA: "The following exams feature questions with embedded images: • Commercial Pilot" (https://www.faa.gov/training_testing/testing/September_2026_Special_Edition.pdf#page=5) | **Yes** |
| Testing supplement | FAA-CT-8080-1E (2018) until withdrawn | Matrix: "Airman Knowledge Testing Supplement for Commercial Pilot, FAA-CT-8080-1E (2018)" (#page=7); ATCA: "The date for removing testing supplements from test centers has not yet been set." | **Yes** |
| Authorisation to test | Ground-school graduation certificate or statement, or instructor written statement/logbook endorsement | CIB: "Written statement or logbook endorsement from an authorized ground or flight instructor certifying that the applicant completed an applicable ground training or home study course and is prepared for the knowledge test. (AC 61-65H) (14 CFR § 61.35)" (#page=4) | No |
| Retake | Failed AKTR plus an endorsement from an instructor who gave additional training; no waiting period stated for CAX | Matrix: "An applicant retesting AFTER FAILURE is required to submit the applicable AKTR (whether valid or expired) indicating failure, along with an endorsement from an authorized instructor who gave the applicant additional training and who has determined the applicant proficient to pass the test." (#page=7) | No |
| Validity | 24 calendar months before the month of the practical test | §61.39(a)(1)(i), as quoted and taught in the ppl deck (`ppl.knowledge-test-validity`) | No |
| Report | AKTR lists ACS codes | ACS: "The Airman Knowledge Test Report (AKTR) lists ACS codes that correlate to a specific Task element" (#page=73) | No |
| What is tested | K and R elements | "Knowledge and risk management elements are primarily evaluated during the knowledge testing phase" (ACS #page=74) | No |
| Question pool | Not public | CONTENT-POLICY §3 lists "the FAA question bank (confidential)" as tier C; no public pool, so BRIEF step 6 does not apply | No |

**Weights (PSI CIB, © 2024 PSI, tier C: state as facts, never copy the page).**
"The percentage of items allocated to each content area on the CAX examination was
determined by the industry-wide job task analysis study completed in 2020."
(CIB #page=4). The ACS gives none.

| ACS Area | CIB % |
|---|---|
| I Preflight Preparation | 24 |
| II Preflight Procedures | 15 |
| III Airport and Seaplane Base Operations | 9 |
| IV Takeoffs, Landings, and Go-Arounds | 15 |
| V Performance and Ground Reference Maneuvers | 2 |
| VI Navigation | 10 |
| VII Slow Flight and Stalls | 12 |
| VIII High Altitude Operations | 3 |
| IX Emergency Operations | 9 |
| XI Postflight Procedures | 1 |

Area X (Multiengine Operations) has no row; the ten rows sum to 100. Areas I–IV,
VI, IX and XI (83% of items) share the private K text apart from the elements
named above, so the ppl deck carries most of the exam and T1–T7 are the
difference.

**Stamp `ValidAsOf: 2026-09-25`** on: allotted time, embedded images, supplement,
weights, BasicMed-dependent medical rules, and the Matrix wording.

## Naming

- The FAA publishes no trademark terms for "Commercial Pilot" or "CAX"; these are
  regulatory names of a US Government certificate and test. FAA Order 1700.6D
  (re-used from the faa-instrument scratch copy) governs the logo only: "Only FAA
  organizations may use the FAA logo, unless approved", and it "may not be used in
  any way that implies endorsement by the FAA, DOT, or the United States
  government of any product".
- **CONTENT-POLICY §4:** plain-text factual naming, our brand first, no FAA logo or
  DOT seal, no "official" or "FAA-approved". The FAA is not in §5. The "is a
  trademark of" sentence in the §4 "Everyone else" notice does not fit a
  government certificate, so the notice follows the ppl and IFR decks. Title:
  "[Site name] deck for the FAA Commercial Pilot Airplane knowledge test (CAX)".
  The ACS is a US Government work, so `ExamRefs` may carry ACS codes (CA.V.C.K2 …);
  the owner confirms under §2.3. PSI and ATCA sample questions are not card content
  (§2.1).
- **Licence.** No FAA document fetched here carries its own licence or a "©"
  or "courtesy" credit (searched: ACS-7B, AFH ch.12, AC 61-107B, knowledge-test
  table, PHAK ch.7). The licence rests on 17 U.S.C. 105(a): "Copyright protection
  under this title is not available for any work of the United States Government"
  (re-used copy). The PSI bulletin is "Copyright © 2024 by PSI" (tier C).
- **Deck notice:**

> Contains material from 14 CFR parts 61, 91 and 119, the FAA Commercial Pilot for
> Airplane Category Airman Certification Standards, the Airplane Flying Handbook,
> the Pilot's Handbook of Aeronautical Knowledge and Advisory Circular 61-107B,
> which are US Government works in the public domain. This deck is independent
> and is not affiliated with, sponsored, endorsed or approved by the Federal
> Aviation Administration, the U.S. Department of Transportation or PSI Services
> LLC. The Commercial Pilot Airplane knowledge test (CAX) is an FAA test
> delivered at PSI testing centres.

## Outline (FAA-S-ACS-7B, owner's order; CIB weights)

Only K elements are listed; each Task's R elements map to the same topics.
"Same as private" means the K text matches FAA-S-ACS-6C and the ppl concepts
cover it. PDF pages are for the ACS.

**I. Preflight Preparation (24%)** (#page=9–17)
- I.A Pilot Qualifications: K1 certification requirements, recent experience, recordkeeping [T1][T0: `ppl.flight-review`, `ppl.recent-experience-day`]; K2 privileges and limitations [T2]; K3 medical class, expiration, privileges [T1: second class][T0]; K4 documents to exercise commercial privileges [T0: `ppl.present-documents`]; K5 BasicMed [T0]. References add "119.1(e)" [T2].
- I.B Airworthiness: K1a–d certificates, inspections, ADs/SAIBs, special flight permit; K2 preventive maintenance; K3, K3a–d equipment, inoperative equipment, MEL, KOEL, placards [T0, same as private; `cpl.100-hour-for-hire-cpl` T2]; **K4 special airworthiness certificate operating limitations** [T2]. (The private K1e owner/PIC responsibilities has no CA counterpart.)
- I.C Weather Information: K1–K4 [T0, same as private].
- I.D Cross-Country Flight Planning: K1–K6 [T0, same as private].
- I.E National Airspace System: K1–K4 [T0, same as private].
- I.F Performance and Limitations: K1, K2a–e (K2e now "Loading and weight and balance"; K2f archived), K3 [T0].
- I.G Operation of Systems: K1a–l, K2 [T0; complex and turbocharged depth T3; K1l oxygen T6].
- I.H Human Factors: K1–K4 [T0; hypoxia depth T6].
- I.I Seaplane (ASES, AMES): K1–K9 [T0: `ppl.seaplane-topics`].

**II. Preflight Procedures (15%)** (#page=18–22)
- II.A–F: same K text as private except II.C.K3 "Engine limitations as they relate to starting" [T0: `ppl.engine-start-limits`]; the private "aborted start" element has no CA counterpart. Retractable-gear preflight [T3].

**III. Airport and Seaplane Base Operations (9%)** (#page=23–24)
- III.A K1–K9, III.B K1–K4 [T0, same as private].

**IV. Takeoffs, Landings, and Go-Arounds (15%)** (#page=25–42)
- IV.A–L normal, soft-field, short-field, confined-area, glassy and rough water [T0, same as private].
- **IV.M Power-Off 180° Accuracy Approach and Landing (ASEL, ASES)** (#page=40–41): K1 stabilised approach and energy management [T0][T4]; K2 atmosphere and wind [T4]; K3 wind correction [T4]; K4 purpose of the power-off accuracy approach [T4]. Replaces the private "Forward Slip" task at M.
- IV.N Go-Around/Rejected Landing: K1–K3 [T0]; **K4** (new code) procedures, timely decision, airspeeds [T0: `ppl.go-around-decision`, `ppl.go-around-procedure`].

**V. Performance Maneuvers and Ground Reference Maneuvers (2%)** (#page=43–47)
- V.A Steep Turns: K1, K2a–e coordination, overbanking, VA and weight, load factor and accelerated stalls, rate and radius [T0][T4: 50° bank].
- **V.B Steep Spiral (ASEL, ASES):** K1 relationship to emergency landing; K2 constant radius about a point; K3 wind and ground track [T4].
- **V.C Chandelles (ASEL, ASES):** K1 how to fly; K2a–d coordination, overbanking, VA and weight, accelerated stalls; K3 configuration for maximum-performance climb; K4 pitch control with decreasing airspeed [T4][T5].
- **V.D Lazy Eights (ASEL, ASES):** K1 how to fly; K2 aerodynamics and coordination; K3 performance and airspeed limits; K4 phases from entry to recovery [T4].
- **V.E Eights on Pylons (ASEL, ASES):** K1 purpose; K2 coordinated and uncoordinated flight; K3 pivotal altitude and its factors; K4 wind and ground track; K5 phases [T4].

**VI. Navigation (10%)** (#page=48–50)
- VI.A–D: K text same as private [T0].

**VII. Slow Flight and Stalls (12%)** (#page=52–56)
- VII.A–C slow flight, power-off and power-on stalls [T0].
- **VII.D Accelerated Stalls** (#page=55): K1 aerodynamics (AOA, airspeed, load factor, power, weight, CG, attitude, yaw); K2 stall characteristics and indications; K3 factors and prevention; K4 fundamentals of stall recovery [T5][T0: `ppl.stall-recovery`, `ppl.accelerated-stall`].
- VII.E Spin Awareness: K1–K3 [T0: `ppl.spin-phases`, `ppl.spin-recovery`].

**VIII. High-Altitude Operations (3%)** (#page=57–58)
- **VIII.A Supplemental Oxygen:** K1 regulatory requirements for crew and passengers [T0: `ppl.oxygen-12500`/`-14000`/`-15000`][T6: 91.211(b)]; K2a–c impairment, hypoxia symptoms, TUC [T0][T6]; K3a continuous-flow, demand and pressure-demand systems [T6]; K3b aviator's breathing oxygen versus other oxygen [T6]; K3c precautions [T6].
- **VIII.B Pressurization:** K1 pressurisation concepts and failure modes [T6]; K2a–c as VIII.A [T6]; K2d effects of rapid decompression [T6].

**IX. Emergency Operations (9%)** (#page=59–65)
- IX.A–D emergency descent, emergency approach and landing, malfunctions, emergency equipment [T0, same as private; steep spiral link T4; turbocharger failure T3].
- IX.E–G engine failure before VMC, after lift-off, OEI approach and landing (AMEL, AMES) [T0: ppl T16][T7].

**X. Multiengine Operations (AMEL, AMES; no CIB weight)** (#page=66–70)
- X.A–D manoeuvring OEI, VMC demonstration, OEI by reference to instruments, OEI instrument approach [T0][T7].

**XI. Postflight Procedures (1%)** (#page=71)
- XI.A K1–K2 shutdown, securing, discrepancies; XI.B K1–K5 seaplane [T0].

§61.125(b) lists the commercial aeronautical knowledge areas in regulation form
(`cpl.cpl-knowledge-areas`, 16 items); a secondary checklist.

## Traps

- [T1] **Allotted time:** ACS-7B's table says 3.0 hours; the FAA's "Correct Allotted Times" table, the Matrix and the CIB say 2.5 h / 150 minutes. Note too that CAX is 100 questions, not 60 like PAR and IRA.
- [T1] **Two ages:** 16 to take CAX (Matrix), 18 for the certificate (§61.123(a)).
- [T1] **Experience:** 250 h total, but inside it 100 h powered (50 in airplanes), 100 h PIC (50 in airplanes) and 50 h cross-country PIC (only 10 in airplanes) (§61.129(a)(1)–(2)). Candidates mix up which "50" and "10" belong where.
- [T1] **Dual cross-countries** are each "2-hour" and "more than 100 nautical miles" straight-line, one by day and one by night; the **solo long cross-country** is 300 NM total, three landings, one point at least 250 NM straight-line (150 NM in Hawaii) (§61.129(a)(3)(iii)–(iv), (a)(4)(i)).
- [T1] **Night solo:** 5 h night VFR with 10 takeoffs and 10 landings at an airport with an operating control tower (§61.129(a)(4)(ii)). The private night currency rule (three to a full stop, §61.57(b)) is different.
- [T1] **Complex requirement changed:** the 10 h may be in "a complex airplane, a turbine-powered airplane, or a technically advanced airplane (TAA)" (§61.129(a)(3)(ii)); prep material that says "complex only" is out of date. The TAA needs PFD, MFD with GPS moving map, a two-axis autopilot, and PFD/MFD "continuously visible" (§61.129(j)).
- [T1] **Second-class medical:** commercial privileges end "at the end of the last day of the … 12th month" after the exam month, at any age; the same certificate then serves private privileges to the 60th (under 40) or 24th (40 or older) month (§61.23(d)(2)).
- [T2] **No instrument rating:** the certificate reads "The carriage of passengers for hire in (airplanes) … on cross-country flights in excess of 50 nautical miles or at night is prohibited" (§61.133(b)(1)). It limits passengers for hire, not all commercial flying.
- [T2] **Commercial certificate ≠ right to run an air carrier:** privileges require being "qualified in accordance with this part and with the applicable parts of this chapter that apply to the operation" (§61.133(a)(1)); part 119 applies to air carriers and commercial operators, with the 119.1(e) exceptions (student instruction, 91.147 air tours within 25 SM, ferry or training flights, aerial work, and others).
- [T2] **Air tours:** the 119.1(e)(2) exception needs "a Letter of Authorization issued under § 91.147", within "a 25-statute mile radius" of the departure airport, nonstop, beginning and ending at the same airport.
- [T2] **Special airworthiness certificates:** "No person may operate a restricted category civil aircraft carrying persons or property for compensation or hire" (§91.313(c), with a special-purpose carve-out); limited and experimental aircraft are barred from carrying persons or property for hire "in operations that" need a part 119 certificate, are listed in §119.1(e), and others (§§91.315, 91.319(a)(2)); light-sport only for towing, training and listed aerial work (§91.327(a)).
- [T3] **Complex vs high-performance:** complex is retractable gear, flaps and a controllable-pitch propeller (or FADEC) (§61.1); high-performance is "an engine of more than 200 horsepower" (§61.31(f)(1)). Separate endorsements (taught in ppl).
- [T3] **Power changes:** "When increasing power, increase the rpm first and then the manifold pressure"; decreasing, manifold pressure first; "high manifold pressure and low rpm can induce damaging detonation" (AFH ch.12 #page=8).
- [T3] **Turbocharging:** altitude turbocharging ("normalizing") holds sea-level manifold pressure to the critical altitude; ground boosting uses "more than the standard 29 inches" (AFH ch.12 #page=10).
- [T4] **Bank angles differ by manoeuvre:** commercial steep turn "approximately a 50° bank" (private ACS: 45°); steep spiral "not to exceed 60°"; chandelle "approximately 30°"; lazy eight about 30° at the 90° point; eights on pylons "not to exceed 40°" (ACS #page=43–47; AFH ch.10).
- [T4] **Chandelle vs lazy eight:** chandelle is constant bank then constant pitch; the lazy eight is "the only standard flight training maneuver in which flight control pressures are constantly changing" (AFH ch.10 #page=4, 6).
- [T4] **Pivotal altitude** depends on groundspeed, not bank: "square the groundspeed, then divide by 15 (if … miles per hour) or divide by 11.3 (if … knots)" and add the ground's MSL elevation; "the bank chosen does not alter the pivotal altitude" (AFH ch.7 #page=15, 17). Turns-around-a-point (constant radius, ppl) is not eights on pylons (no constant radius, no drift correction).
- [T4] **Power-off 180:** touchdown "within 200 feet beyond or on the specified point" (ACS #page=41). Not "±200 ft": landing short fails.
- [T5] **Accelerated stall** practice: "never … with wing flaps in the extended position"; "bank of approximately 45°, and in no case at a speed greater than" the manufacturer's speed, VA or VO (AFH ch.5 #page=19).
- [T6] **Pressurised-cabin oxygen** (91.211(b)): above FL250 a 10-minute supply per occupant; above FL350 one pilot wears a mask; at or below FL410 the mask may be off if two pilots have quick-donning masks. Unpressurised rules (12,500/14,000/15,000) are ppl.
- [T6] **Slow decompression** "is as dangerous as or more dangerous than a rapid or explosive decompression" (AC 61-107B #page=27). "Explosive" is under 0.5 seconds (PHAK ch.7 #page=36).
- [T6] **TUC table** (AC 61-107B Figure 2-3) now carries a caution that TUCs "reflect wide variation among individuals"; rapid decompression cuts TUC by about 50% between 25,000 and 43,000 ft.
- [T6] **Oxygen type:** fill with oxygen meeting "SAE AS8010 … Aviator's Breathing Oxygen Purity Standard" (PHAK ch.7 #page=37). The "medical or welding oxygen" contrast was not found in the sources fetched (see Not verified).
- [T0] **Codes:** CA.I.F.K2f, CA.IX.C.K1a–d and others are archived in ACS-7B (#page=4); older AKTRs and prep material may still cite them. Old material also cites the PTS FAA-S-8081-12C.

## Languages

The test is English only as far as the fetched sources show: §61.123(b) requires
the applicant to "read, speak, write, and understand the English language", and
the ACS applies the "FAA Aviation English Language Standard (AELS)" (#page=74). No
FAA or PSI page fetched offers CAX in another language. No official or openly
licensed translation of the ACS, AFH, PHAK or AC 61-107B was found; none was
searched beyond the FAA pages fetched.

## Budget

`faa-commercial-budget.json` follows BRIEF.md: one primer per new term, one fact
per rule, number, procedure or contrast, one card per member of sets with more
than 3 members, one application per core concept, plus 10%. Topic 0 has no
budget. Set sizes were counted in the source (e.g. 12 exceptions in 119.1(e), 9
rows in the TUC table, 6 decompression phenomena), except
`cpl.accelerated-stall-situations` (4, read from the AFH sentence).

## Not verified

1. **Common carriage and "holding out".** AC 120-12A (Private Carriage Versus
   Common Carriage) is not an ACS reference and was not fetched; T2 teaches only
   the regulatory text of 61.133, 119.1 and 91.147. Fetch it before writing any
   card on common versus private carriage.
2. **Aviator's breathing oxygen versus medical or industrial oxygen**
   (CA.VIII.A.K3b "Differences between and identification of"): only the SAE
   AS8010 standard was found (PHAK ch.7, AC 61-107B). No fetched text states the
   differences; `cpl.aviators-breathing-oxygen` carries the term only. The Aviation
   Weather and other FAA handbooks were not searched.
3. **VA and weight** (CA.V.A.K2c, V.C.K2c): AFH ch.5 points to PHAK ch.5 for "the
   effects of aircraft weight"; the ppl brief could not find the direction of
   change there either. No `cpl` concept states it.
4. **FAA-P-8740-66** (multiengine pamphlet) and **AC 61-67** (stall and spin
   awareness), both ACS references, were not fetched. T5 and T7 use the AFH.
5. **Commercial testing supplement FAA-CT-8080-1E** was not fetched; figure
   fields name handbook figures only.
6. **§61.129(b)–(i)** (multiengine and other category experience) were not
   extracted; the deck covers the single-engine airplane path only.
7. **ACS effective date** is stated on the ACS list page ("Effective May 31,
   2024"), not in the PDF, whose cover says November 2023.
8. **Weights**: PSI's March 2024 split (2020 job task analysis) is the only one
   found; it may be revised.
9. **Leads in the prompt.** None was wrong. The test name and code (CAX) match the
   Matrix; the eCFR API worked as the private-pilot research found (the versioner
   endpoint requires a compressed response: "This endpoint requires response
   compression"). The eCFR block itself was not re-tested.

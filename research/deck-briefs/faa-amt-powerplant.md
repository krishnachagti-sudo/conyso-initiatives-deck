# Research brief: FAA Aviation Mechanic Powerplant knowledge test (AMP)

Slug: `faa-amt-powerplant`. Family prefix: `amtp`. Researched 26 September 2026.
Every fact below was read in a source fetched in this task or in a copy saved by
the `faa-amt-general` research. New downloads are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/faa-amt-powerplant/`;
re-used files are read in place from `research/sources/faa-amt-general/` (ACS,
Companion Guide, Testing Matrix, September 2026 ATCA, AC 43.13-1B, eCFR copies of
parts 43 and 91, govinfo part 65, 17 U.S.C. 105, FAA web policies, Order 1700.6D,
sample O&P FAQ). `build.py` and `concepts_def.py` in the scratch folder regenerate
the concepts, terms and budget: each anchor is found by searching its heading or
text in the saved source, and the build fails on any text it cannot find.

**Prerequisite deck.** `prerequisiteDecks: ["faa-amt-general"]` (prefix `amtg`).
The Powerplant test is taken with the General test, and the General deck already
teaches electricity, fluid lines, hardware, fuels, fire classes, NDT, inspections,
part 43 definitions, maintenance records, ADs, TCDS and the mechanic certificate.
Those 75 terms are **topic 0** at the head of `faa-amt-powerplant-terms.json`, each
pointing to its `amtg.` concept and spelled as the General deck spells it. The
build refuses any topic-1+ term whose spelling matches a General term. Where the
ACS repeats a General subject from the powerplant side (III.C.K1 inspections,
III.C.K5 ADs, III.F generators), the concepts here teach only what is
powerplant-specific: 43.15(c) engine runs, App. D(d) and (h), App. A powerplant
and propeller items, part 33, and so on.

## Topics

| Topic | Name | ACS subject | Main sources |
|---|---|---|---|
| T1 | Reciprocating engines | III.A | AMTH-P ch.1, 8 (storage), 10 (overhaul, operation), 11 (light-sport) |
| T2 | Turbine engines | III.B | AMTH-P ch.1, 8, 10 |
| T3 | Engine inspection, records and approved data | III.C | 14 CFR 43 (43.2, 43.10, 43.15, App. A, App. D), 91.403, 91.421, 33.7, 33.70, part 33 App. A; AMTH-P ch.8, 10; AC 43.13-1B ch.8 §1 |
| T4 | Engine instrument systems | III.D | AMTH-P ch.10; AMTH-A ch.10 |
| T5 | Engine fire protection systems | III.E | AMTH-P ch.9; AMTH-A ch.17 |
| T6 | Engine electrical systems | III.F | AMTH-P ch.4 (second half); AMTH-A ch.9; AC 43.13-1B ch.11 |
| T7 | Engine lubrication systems | III.G | AMTH-P ch.6 |
| T8 | Ignition and starting systems | III.H | AMTH-P ch.4 (first half), ch.5; AC 43.13-1B 8-15 to 8-20 |
| T9 | Engine fuel and fuel metering systems | III.I | AMTH-P ch.2; AC 43.13-1B ch.8 §2 |
| T10 | Reciprocating engine induction and cooling systems | III.J | AMTH-P ch.3, 6 (cooling), 11 (liquid cooling) |
| T11 | Turbine engine air systems | III.K | AMTH-P ch.1, 3, 6; AMTH-A ch.15 |
| T12 | Engine exhaust and reverser systems | III.L | AMTH-P ch.3; AC 43.13-1B ch.8 §3 |
| T13 | Propellers | III.M | AMTH-P ch.7; AC 43.13-1B ch.8 §4–5; 43 App. A(a)(3), (b)(3) |

Counts: 749 concepts (505 core, 244 extra); 471 terms (75 at topic 0, 396 new);
1,699 budgeted cards. AMTH-P = Aviation Maintenance Technician Handbook –
Powerplant, FAA-H-8083-32B (2023), one 500-page PDF. Chapter first pages (PDF):
ch.1 p22, ch.2 p83, ch.3 p129, ch.4 p160, ch.5 p231, ch.6 p247, ch.7 p287, ch.8
p328, ch.9 p350, ch.10 p369, ch.11 p434, glossary p459, index p490. AMTH-A =
Airframe handbook FAA-H-8083-31B (2023), 1,052 pages; used only for ch.9
electrical (p417), ch.10 instruments (p520), ch.15 ice and rain (p881) and ch.17
fire protection (p973), where the Powerplant handbook is thin (ECAM, range
markings, annunciators, IDG, paralleling, fire zone classes, container checks).

## Exam facts

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | FAA; delivered by PSI | ACS foreword: the "Airman Testing Standards Branch has published the Aviation Mechanic General, Airframe, and Powerplant Airman Certification Standards" (https://www.faa.gov/training_testing/testing/acs/Aviation_Mechanic_Certification_Standards.pdf#page=2). Companion Guide: "the FAA utilizes the testing vendor PSI Services, LLC (PSI)" (https://www.faa.gov/training_testing/testing/acs/amt_acs_companion_guide.pdf#page=15) | Vendor: rarely |
| Test code and name | AMP, "Aviation Maintenance Technician Powerplant" | Matrix: "AMP Aviation Maintenance Technician Powerplant 100 N/A 2.0 70" (https://www.faa.gov/training_testing/testing/testing_matrix, "Revised 9/25/26: Page 5"). Companion Guide table: "AMP Aviation Mechanic Technician - Powerplant" (#page=12) | No |
| Outline | FAA-S-ACS-1, 1 November 2021, Section III Powerplant; no change issued | ACS list: "Aviation Mechanic General, Airframe, and Powerplant (FAA-S-ACS-1) November 2021 n/a Effective September 21, 2022" (https://www.faa.gov/training_testing/testing/acs) | Rarely |
| Questions | 100 | Matrix and Companion Guide (#page=12): "AMP … 100 N/A 2.0 70" | No |
| Time | 2.0 hours | same | No |
| Pass mark | 70% | same; §65.17(b): "The minimum passing grade for each test is 70 percent" (govinfo part 65 #page=5) | No |
| Age | None for the test ("N/A"); 18 for the certificate (General deck T9) | Matrix | No |
| Format | Multiple choice, single correct response; embedded images | Companion Guide: "objective multiple-choice questions. There is a single correct response for each test question" (#page=12). ATCA: "The following exams feature questions with embedded images: … Aviation Maintenance Technician (General, Airframe, and Powerplant)" (https://www.faa.gov/training_testing/testing/September_2026_Special_Edition.pdf#page=5) | **Yes** |
| Supplement | FAA-CT-8080-4G (2018), still listed | Matrix p.5: "Airman Knowledge Testing Supplement for Aviation Maintenance Technician - General, Airframe, and Powerplant; and Parachute Rigger, FAA-CT-8080-4G (2018)" | **Yes** |
| Authorisation | AMTS document for the completed curriculum; Form 8610-2 signed by an inspector; military COE; for a retest, the failed AKTR | Companion Guide: "The completed curriculum as indicated on the document authorizes the applicant to take the corresponding test (i.e., either general and airframe; general and powerplant; or general, airframe, and powerplant)" (#page=12). Matrix p.5 lists the same forms | No |
| When it may be taken | Only after the experience requirement | §65.75(a): "after meeting the applicable experience requirements of § 65.77, pass a written test, appropriate to the rating sought"; the early-test exception (c) covers the General test only (govinfo part 65 #page=13) | No |
| Experience | School document, or 18 months for one rating (30 for both) | §65.77(b)(1): "At least 18 months of practical experience … appropriate to the rating sought"; (b)(2) "At least 30 months … concurrently" (#page=13) | No |
| Retake | 30 days, or sooner with a signed statement | Matrix NOTE 1: "A 30-day waiting period is required, before retesting, if the applicant presents a failed AKTR, but no retesting endorsement"; NOTE 2: no wait with "a signed statement from an airman holding the certificate and rating(s) sought" | No |
| Validity | All tests within 24 months; added rating within 24 calendar months | §65.71(a)(3) "within a period of 24 months"; §65.71(b) additional rating "within a period of 24 calendar months" (#page=12) | No |
| Weights | Ranges per subject (below) | Companion Guide "Aviation Mechanic – Powerplant 100-Question Test" (#page=14) | Possibly |
| Upcoming change | PSI assessment of AMP; modifications "anticipated to be implemented in 2027" | ATCA #page=4 | **Yes** |
| Practical test bank | AMP practical projects "In final review" (AMG activated 20 April 2026, AMA scheduled 20 July 2026) | ATCA #page=2 | **Yes** (not the written test) |
| Question pool | Not public | CONTENT-POLICY §3: "the FAA question bank (confidential)" is tier C; BRIEF step 6 does not apply | No |

**Weights (Companion Guide #page=14):** Reciprocating Engines 5–15%; Turbine
Engines 5–10%; Engine Inspection 5–10%; Engine Instrument Systems 5–10%; Engine
Fire Protection Systems 5–10%; Engine Electrical Systems 5–15%; Engine Lubrication
Systems 5–10%; Ignition and Starting Systems 5–10%; Engine Fuel and Fuel Metering
Systems 5–10%; Reciprocating Engine Induction and Cooling Systems 5–10%; Turbine
Engine Air Systems 5–10%; Engine Exhaust and Reverser Systems 5–10%; Propellers
5–10%.

**Stamp `ValidAsOf: 2026-09-26`** on: embedded images, the supplement, the 2027
assessment, the Matrix wording, and every part 33 and part 65 fact (govinfo 1-1-25
edition).

## Naming

- As for the General deck: no FAA page fetched states trademark terms for
  "Aviation Mechanic", "AMT" or "AMP"; they name a US Government certificate and
  test. The FAA Web Policies page states no copyright, reuse or AI terms. Order
  1700.6D governs the FAA logo only (no use implying FAA endorsement). faa.gov
  robots.txt disallows admin, search and user paths, not the handbook, ACS or
  testing paths fetched.
- **CONTENT-POLICY §4:** plain text, our brand first, no FAA logo or DOT seal, never
  "official" or "FAA-approved". The FAA is not in §5. The "is a trademark of"
  sentence does not fit a government test. Title: "[Site name] deck for the FAA
  Aviation Mechanic Powerplant knowledge test (AMP)". `ExamRefs` may carry ACS codes
  (AM.III.A.K4 …).
- **Licence.** Neither handbook carries its own licence; the basis is 17 U.S.C.
  105(a) and govinfo's notice. **Caveats:** AMTH-P's Acknowledgments credit
  third-party images (Pratt & Whitney, Teledyne Continental Motors, Lycoming,
  Rotax suppliers and private photographers); AMTH-A's credit many more, and
  AMTH-A PDF p.294 (a welding table outside this deck) carries "Copyright © 1997 TM
  Technologies". Reproduce no handbook image without checking its credit; the
  `figure` field names FAA tables and schematics only.
- **Deck notice:**

> Contains material from 14 CFR parts 33, 43, 65 and 91, the FAA Aviation Mechanic
> General, Airframe, and Powerplant Airman Certification Standards and its
> Companion Guide, the Aviation Maintenance Technician Handbooks – Powerplant
> (FAA-H-8083-32B) and – Airframe (FAA-H-8083-31B), and Advisory Circular
> 43.13-1B, which are US Government works in the public domain; some handbook
> images are third-party material and are not reproduced. This deck is independent
> and is not affiliated with, sponsored, endorsed or approved by the Federal
> Aviation Administration, the U.S. Department of Transportation or PSI Services
> LLC. The Aviation Mechanic Powerplant knowledge test (AMP) is an FAA test
> delivered at PSI testing centres.

## Outline (FAA-S-ACS-1 Section III Powerplant, owner's order; Companion Guide weights)

13 subjects, 119 knowledge elements and 44 risk elements. Only K elements are on
the written test (Companion Guide #page=11, see General brief); R elements map to
the same topics and many have a concept. ACS PDF pages in brackets.

**A. Reciprocating Engines (5–15%)** (#page=49) [T1]
- K1 types [T1]; K2 reciprocating operating principles; K3 internal combustion principles (four-stroke, two-stroke, rotary, valve timing) [T1]; K4 horizontally opposed construction; K5 radial construction (master-and-articulated rods, cam ring, firing order) [T1]; K6 storage and preservation [T1]; K7 performance (PLANK, SFC, horsepower and efficiencies) [T1]; K8 maintenance and inspection (overhaul, defect terms, cylinder work) [T1][T3]; K9 ground operations [T1]; K10 diesel principles [T1].
- R1 moving the propeller [T1][T8]; R2 ground running [T1]; R3 engine fire [T1]; R4 other than manufacturer's procedures [T3].

**B. Turbine Engines (5–10%)** (#page=50) [T2]
- K1 operating principles (Brayton cycle, thrust); K2 types (turbojet, turbofan, turboprop, turboshaft); K3 construction (compressors, diffuser, combustors, turbines, bearings and seals); K4 performance and monitoring; K5 troubleshooting, maintenance, inspection (blade damage, blending, hot section); K6 procedures after installation (rigging, trim); K7 causes of performance loss; K8 bleed air [T2][T11]; K9 storage and preservation; K10 APU [T2][T0]; K11 adjustment and testing (trim, analyser) — all [T2].
- R1–R4 operation, maintenance, fire, FOD [T2].

**C. Engine Inspection (5–10%)** (#page=51) [T3]
- K1 inspection requirements under parts 43 and 91 (43.15(c), App. D(d), (h)); K2 life-limited parts and intervals (43.10, 33.70, 91.403(c)); K3 special inspections (AC 43.13-1B 8-2, sudden stoppage) [T3][T0]; K4 FAA-approved data; K5 SLs, SBs, ICA, ADs, TCDS [T3][T0]; K6 recordkeeping under part 43 (43.2, 43.9, App. A powerplant and propeller items); K7 component inspection, checking, servicing (compression test, removal reasons); K8 engine mounts — all [T3].
- R1 compression test [T3]; R2–R3 maintenance on operating reciprocating and turbine engines [T1][T2].

**D. Engine Instrument Systems (5–10%)** (#page=52) [T4]
- K1 fuel flow; K2 temperature (EGT, oil, CHT, TIT); K3 engine speed; K4 pressure (manifold, fuel, oil); K5 annunciators; K6 torquemeters; K7 EPR; K8 EICAS; K9 FADEC [T4][T8][T9]; K10 ECAM; K11 range markings — all [T4].
- R1–R2 maintenance damage, calibration error [T4].

**E. Engine Fire Protection Systems (5–10%)** (#page=54) [T5]
- K1 types of fires [T0] and engine fire zones [T5]; K2 detection operation; K3 detection maintenance; K4 agents, systems, operation; K5 extinguishing system maintenance — all [T5].
- R1 discharge cartridges; R2 agents; R3 squib circuits [T5].

**F. Engine Electrical Systems (5–15%)** (#page=55) [T6]
- K1 generators [T6][T0]; K2 alternators; K3 starter generators [T6][T8]; K4 voltage regulators, overvoltage and overcurrent protection; K5 DC generation; K6 AC generation; K7 finding wire size; K8 paralleling; K9 CSD and IDG [T6][T0]; K10 wiring, switches, protective devices — all [T6].
- R1 polarity; R2 annunciator response; R3 energised circuits; R4 wiring near flammable fluid lines [T6].

**G. Engine Lubrication Systems (5–10%)** (#page=56) [T7]
- K1 oil types and grades; K2 system operation and components; K3 wet sump; K4 dry sump; K5 chip detectors; K6 maintenance, servicing, analysis (SOAP); K7 excessive oil consumption — all [T7].
- R1 mixing oils; R2 other than manufacturer's lubricants; R3 used oil [T7].

**H. Ignition and Starting Systems (5–10%)** (#page=57) [T8]
- K1 ignition theory; K2 spark plugs; K3 shower of sparks and impulse coupling; K4 the three magneto circuits; K5 solid-state ignition; K6 FADEC; K7 starters; K8 magneto components; K9 turbine ignition — all [T8].
- R1 advanced and retarded timing; R2 capacitor discharge systems; R3 ungrounded magneto [T8].

**I. Engine Fuel and Fuel Metering Systems (5–10%)** (#page=58) [T9]
- K1 fuel/air ratio, metering, carburettor theory; K2 float carburettors; K3 pressure carburettors; K4 continuous-flow injection; K5 FADEC; K6 hydromechanical fuel control; K7 fuel nozzles and manifolds; K8 turbine metering; K9 fuel system inspection; K10 operation; K11 heaters; K12 lines; K13 pumps; K14 valves; K15 filters; K16 drains — all [T9].
- R1–R5 fuel control adjustment, components containing fuel, maintenance considerations [T9].

**J. Reciprocating Engine Induction and Cooling Systems (5–10%)** (#page=60) [T10]
- K1 induction and cooling theory; K2 induction icing; K3 superchargers; K4 turbochargers, intercoolers, controllers; K5 augmenter cooling; K6 filtering; K7 carburettor heat; K8 pressure cowling; K9 baffles and seals; K10 liquid cooling — all [T10].
- R1 turbochargers; R2 ground operation; R3 FOD; R4 coolant chemicals [T10].

**K. Turbine Engine Air Systems (5–10%)** (#page=62) [T11]
- K1 air cooling; K2 cowling airflow; K3 internal cooling; K4 baffles and seals; K5 insulation blankets; K6 induction (inlets, screens, bellmouth); K7 bleed air; K8 anti-ice — all [T11].
- R1 bleed air maintenance; R2 ground operation [T11].

**L. Engine Exhaust and Reverser Systems (5–10%)** (#page=63) [T12]
- K1 reciprocating exhaust; K2 turbine exhaust; K3 noise suppression (mufflers, hush kits, augmenter tubes); K4 thrust reversers — all [T12].
- R1–R5 exhaust maintenance, reverser operation, exhaust leaks and failures, ground operation [T12].

**M. Propellers (5–10%)** (#page=64) [T13]
- K1 theory; K2 types and blade design; K3 pitch control; K4 constant-speed and governor; K5 turbine reverse/beta; K6 servicing, maintenance, inspection (tracking, balancing, AC 43.13-1B repairs); K7 removal and installation; K8 propeller TCDS [T13][T3]; K9 synchronisation; K10 ice control — all [T13].
- R1 ground operation; R2 maintenance and inspection [T13].

## Traps

- [T3] **Out-of-date handbook in circulation.** The FAA's own sample oral questions cite "FAA-H-8083-32A" page numbers (sample O&P FAQ); the current edition is 32B (2023), a single 500-page PDF on the FAA handbooks page, with different pagination.
- [T3] **Only General may be taken early.** §65.75(a) requires the Powerplant test "after meeting the applicable experience requirements of § 65.77"; the early exception in §65.75(c) is for the General test.
- [T3] **Compression test numbers.** AMTH-P: regulated pressure "80 psi" (#page=408). AC 43.13-1B 8-14: "less than a 60/80 reading on the differential test gauges on a hot engine" and failed rechecks mean "the cylinder must be removed and inspected" (#page=445); "A loss in excess of 25 percent of the input air pressure is cause to suspect the cylinder", recheck after "at least 3 minutes" of running (#page=448). Candidates mix the 60/80 and 25% rules.
- [T3] **43.15(c)(2) engine run** before returning a reciprocating-engine aircraft to service after an annual or 100-hour: power output (static and idle rpm), magnetos, fuel and oil pressure, cylinder and oil temperature. Turbines: run "in accordance with the manufacturer's recommendations" (43.15(c)(3)).
- [T3] **Powerplant major repairs** are only three kinds: crankcase or crankshaft separation on an engine with an integral supercharger, or with "other than spur-type propeller reduction gearing", and special repairs to structural parts by welding, plating or metallising (Part 43 App. A(b)(2)). Separating a crankcase of an ordinary direct-drive engine is not on the list.
- [T13] **Propeller repairs:** "Any repairs to, or straightening of steel blades" and "Shortening of blades" are major (App. A(b)(3)); a mechanic may not do major propeller repairs at all (§65.81(a), General deck).
- [T3] **Life-limited parts** in part 33 are counted in flight cycles: "maximum allowable number of flight cycles for each engine life-limited part" (§33.70, govinfo #page=20).
- [T1] **Detonation vs pre-ignition.** Detonation is "the spontaneous combustion of the unburned charge ahead of the flame fronts after ignition" (#page=397); pre-ignition is combustion "before the timed spark" (#page=398).
- [T1] **Double-row radial firing order:** for a 14-cylinder engine "add 9 or subtract 5" (#page=37).
- [T1] **Desiccant colour:** silica gel is dried back to "its original blue color"; "When the relative humidity is less than 30 percent, corrosion does not normally take place" (#page=346).
- [T7] **Oil grade numbers:** commercial aviation 80 = SAE 40, 100 = SAE 50, 120 = SAE 60 (Figure 6-3, #page=248). A candidate who reads "100" as SAE 100 is wrong.
- [T7] **Oil tank expansion space:** "not less than the greater of 10 percent of the tank capacity or 0.5 gallons" (#page=250–251).
- [T8] **Ignition switch check:** "usually made at 700 rpm"; the engine should stop firing, and after "a drop of 200–300 rpm" return to BOTH quickly (#page=190). An open P-lead means a magneto is "not being shut off", and turning the propeller "can result in personnel injury or death" (#page=190).
- [T8] **Turbine igniters:** the energy "can cause injury or death" (#page=205); disconnect the exciter input and "wait at least one minute" before disconnecting the igniter lead (#page=206).
- [T8] **E-gap** is the position "a few degrees beyond neutral" where the points open (#page=162); the condenser is "wired in parallel with the breaker points" (#page=162).
- [T9] **Stoichiometric mixture:** "0.067 pounds of fuel to 1 pound of air (mixture ratio of 15:1)" (#page=86); best power and best economy mixtures are different points (#page=84).
- [T5] **Red disc vs yellow disc:** red ejects when the container contents "have dumped overboard due to excessive heat"; yellow when "the flight crew activates the fire extinguisher system" (#page=358).
- [T5] **Halon 1301** is "the most common extinguishing agent still used today"; HRD systems deliver agent "in 1 to 2 seconds" (#page=356).
- [T5] **Fire zones vs fire classes.** AMTH-P lists designated fire zones (power section, accessory section, APU compartment …, #page=356); AMTH-A classes zones by airflow ("Class A zone—area of heavy airflow past regular arrangements of similarly shaped obstructions", AMTH-A #page=979). Neither is the NFPA fire class A–D taught in the General deck.
- [T13] **Governor:** underspeed, "the flyweights tilt inward" and pitch decreases (#page=295); overspeed, "The flyweights tilt outward" and pitch increases (#page=297).
- [T13] **Propeller slip** "is the difference between the geometric pitch of the propeller and its effective pitch" (#page=288).
- [T2] **Bypass ratio** is fan flow over core flow ("100 lb/sec … 20 lb/sec … 5:1", #page=57); medium bypass is "between 2:1 and 4:1" (glossary #page=476).
- [T4] **Range markings:** colours "red, yellow, green, blue, white"; a white slippage mark shows if the glass has turned (AMTH-A #page=598).
- [T0] **Parts 43 and 91 citations:** cite the current eCFR copies (they include the July 2025 amendments); govinfo's latest edition (1-1-25) predates them. Part 33 rests on govinfo 1-1-25 only.
- [T3] **Embedded images and supplement:** AMT tests already embed images (ATCA #page=5) while the Matrix still lists FAA-CT-8080-4G; old prep material assumes the paper supplement only.

## Languages

The test is in English; §65.71(a)(2) requires the applicant to "read, write, speak,
and understand the English language" (with the "Valid only outside the United
States" exception, General brief). No FAA page fetched offers AMP in another
language. No official or openly licensed translation of the ACS, FAA-H-8083-32B,
-31B or AC 43.13-1B was found; none was searched beyond the FAA pages fetched.

## Budget

`faa-amt-powerplant-budget.json` follows BRIEF.md: one primer per term, one fact
per rule, number, procedure or contrast, one card per member of sets with more
than 3 members, one application per core concept, plus 10%. Topic-0 terms get no
cards. T1 (283) is largest because it carries reciprocating theory, overhaul and
the 25 defect terms (#page=371–372). T11 (40) and T12 (46) are small because the
handbook treats them briefly. Set sizes were counted from handbook headings,
lists or the regulation (App. D(d) 11, App. D(h) 4, App. A(a)(2) 6, (a)(3) 6,
(b)(2) 3, (b)(3) 14, 43.10(c) 7, 43.15(c)(2) 4, defect terms 25, propeller types
7, turbine lubrication components 14, removal reasons 7) except these estimates,
to recount when writing: `engine-general-requirements`, `radial-crankcase`,
`valve-operating-mechanism`, `gas-turbine`, `blade-damage-terms`,
`performance-loss-causes`, `engine-instruments-required`, `fire-detector-methods`,
`fire-zones`, `fire-zone-classes`, `extinguishing-agents`, `oil-functions`,
`oil-consumption`, `wear-metals`, `basic-fuel-system`, `turbine-fuel-controls`,
`turbo-components`, `turbine-bleed-systems`, `propeller-general`,
`wire-size-factors`, `generator-controls`, `carburettor-types`.

Anchors: AMTH-P, AMTH-A, AC 43.13-1B, ACS and part 33 anchors are PDF pages
(`#page=N`, form feeds counted); part 43 and 91 anchors are eCFR section URLs,
with the appendix named in the concept. Concepts whose only source is an ACS code
say so in `note`.

## Not verified

1. **Handbook text for four ACS items.** No text in FAA-H-8083-32B or -31B on
   inlet particle separators (III.K.S7), hush kits (III.L.K3), fire bottle
   hydrostatic test intervals (III.E.S11; -31B mentions hydrostatic testing
   only outside its fire chapter) or a stand-alone diesel chapter (III.A.K10; the diesel cycle has one
   heading, #page=48). Those concepts cite the ACS and carry a note. Manufacturer data
   were not searched.
2. **Current text of 14 CFR part 33 and part 65.** eCFR refuses automated
   requests; govinfo's latest edition is 1-1-25. Amendments after that date were
   not checked. Re-read §§33.7, 33.70, part 33 App. A and §§65.71–65.87 on eCFR by
   hand before writing.
3. **Estimated set sizes** listed under Budget.
4. **PSI's AMP bulletin and sample questions** were not fetched (PSI pages were not
   checked for robots.txt in this task; the CFI research found
   `media.psiexams.com/robots.txt` disallows all paths).
5. **Page numbers of the eCFR copies** do not exist; appendix concepts cite the
   part URL.
6. **Leads in the prompt.** (a) "AMT Handbook — Powerplant (FAA-H-8083-32B, two
   volumes)": the FAA handbooks page and the PDF itself show 32B (2023) as one
   500-page file; I did not verify whether the earlier 32A was split. (b)
   "14 CFR Parts 33, 43 and 91 (govinfo)": parts 43 and 91 are cited from the
   current eCFR copies, because govinfo's 1-1-25 edition predates the July 2025
   amendments; only part 33 (and part 65) rests on govinfo. (c) The ACS
   (FAA-S-ACS-1, 2021, no change), AC 43.13-1B with Change 1 (Active) and the 2023
   handbooks are the current revisions, as the prompt expected. (d) The Airframe
   handbook (FAA-H-8083-31B), not named in the prompt, was needed for ECAM, range
   markings, IDG, paralleling and fire zone classes.

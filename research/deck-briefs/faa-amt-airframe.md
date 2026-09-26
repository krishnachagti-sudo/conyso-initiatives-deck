# Research brief: FAA Aviation Mechanic Airframe knowledge test (AMA)

Slug: `faa-amt-airframe`. Family prefix: `amta`. Researched 26 September 2026.
Prerequisite deck: **`faa-amt-general`** (prerequisiteDecks). Every fact below was
read in a source fetched in this task or in one the `faa-amt-general` research saved.
New downloads are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/faa-amt-airframe/`;
re-used files are read in place from `…/scratchpad/sources/faa-amt-general/` (ACS,
Companion Guide, AC 43.13-1B, govinfo part 65, handbook list page) and
`research/sources/faa-amt-general/` (eCFR parts 39, 43 and 91 saved 2026-09-25,
Testing Matrix, September 2026 ATCA, 17 U.S.C. 105, Order 1700.6D). `build.py` and
`concepts_def.py` in the scratch folder regenerate the concepts, terms and budget: each
anchor is found by searching its text in the saved source (contents pages skipped),
and the build fails on text it cannot find, on a malformed id, or on a new term that
repeats a `faa-amt-general` term.

**Building on General.** The General deck already teaches 376 terms and 774 concepts,
including 14 CFR 1.1 definitions, parts 39 and 43, 91 subpart E (91.409, 91.411,
91.413, 91.417), Appendices A, B, D, E, F, fire classes and extinguishers, oxygen
servicing hazards, fuel grades and fuelling, basic welding, rivet codes, blind rivets,
control cables, turnbuckles, safety wiring, O-rings, hose, batteries, generators, CSD,
NDT and basic aerodynamics. None of these is re-taught. The 55 General terms this deck
leans on appear in the term registry with `topic` 0 and General's concept id. Airframe
concepts go one level deeper (e.g. `amta.cable-tension` rigging, not `amtg.control-cables`).

## Topics

| Topic | Name | ACS subject | Main sources |
|---|---|---|---|
| T1 | Metallic structures and welding | II.A | AMTH ch.1, 4, 5; AC 43.13-1B ch.4 |
| T2 | Non-metallic structures: wood, fabric, composites, plastics, interiors | II.B | AMTH ch.3, 6, 7; AC 43.13-1B ch.2, 9; AC 43.13-2C ch.10 |
| T3 | Flight controls, assembly and rigging | II.C | AMTH ch.1–2 |
| T4 | Airframe inspection | II.D | AMTH ch.2; 14 CFR 39, 43, 91 (eCFR) |
| T5 | Landing gear, wheels, brakes and tyres | II.E | AMTH ch.13; AC 43.13-2C ch.6, 14 |
| T6 | Hydraulic and pneumatic systems | II.F | AMTH ch.12 |
| T7 | Cabin environmental systems | II.G | AMTH ch.16; 14 CFR 25.841; AC 43.13-2C ch.7 |
| T8 | Aircraft instrument systems | II.H (+ II.I K16–K17) | AMTH ch.10; Part 43 App. E |
| T9 | Communication and navigation systems | II.I | AMTH ch.11; AC 43.13-2C ch.3–4; 91.207 |
| T10 | Aircraft fuel systems | II.J | AMTH ch.14 |
| T11 | Aircraft electrical systems | II.K | AMTH ch.9; AC 43.13-1B ch.11; AC 43.13-2C ch.5, 11 |
| T12 | Ice and rain control systems | II.L | AMTH ch.15 |
| T13 | Airframe fire protection systems | II.M | AMTH ch.17; 14 CFR 25.857 |
| T14 | Rotorcraft fundamentals | II.N | AMTH ch.1–2 |
| T15 | Water and waste systems | II.O | ACS; AMTH ch.15 (thin) |

Counts: 199 knowledge elements (A–O), 75 risk elements; 1,159 concepts (724 core, 435
extra); 518 terms (463 new, 55 topic 0); 2,670 budgeted cards.

AMTH = Aviation Maintenance Technician Handbook – Airframe, FAA-H-8083-31B (2023), one
1,052-page PDF. Chapter first PDF pages: ch.1 p27, ch.2 p72, ch.3 p139, ch.4 p163, ch.5
p277, ch.6 p312, ch.7 p338, ch.8 p396, ch.9 p417, ch.10 p520, ch.11 p604, ch.12 p680,
ch.13 p732, ch.14 p824, ch.15 p881, ch.16 p912, ch.17 p973, glossary p993, index p1033.
Chapter 8 (painting) is taught by General (ACS I.G); only `amta.dope` uses it.

## Exam facts

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | FAA; test delivered by PSI | ACS foreword: "Airman Testing Standards Branch has published the Aviation Mechanic General, Airframe, and Powerplant Airman Certification Standards" (https://www.faa.gov/training_testing/testing/acs/Aviation_Mechanic_Certification_Standards.pdf#page=2). Companion Guide: "the FAA utilizes the testing vendor PSI Services, LLC (PSI)" (https://www.faa.gov/training_testing/testing/acs/amt_acs_companion_guide.pdf#page=15) | Vendor: rarely |
| Test code and name | AMA, "Aviation Maintenance Technician Airframe" | Matrix: "AMA Aviation Maintenance Technician Airframe 100 N/A 2.0 70" (https://www.faa.gov/training_testing/testing/testing_matrix#page=6, "Revised 9/25/26"). Companion Guide: "AMA Aviation Mechanic Technician - Airframe" (#page=12); ATCA: "Aviation Maintenance Technician Airframe (AMA)" | No |
| Outline | FAA-S-ACS-1 (1 November 2021), Section II Airframe, subjects A–O | ACS list: "Aviation Mechanic General, Airframe, and Powerplant (FAA-S-ACS-1) November 2021 n/a Effective September 21, 2022" (https://www.faa.gov/training_testing/testing/acs); Section II at ACS #page=24–48 | Rarely |
| Questions | 100 | Matrix (above); Companion Guide "AMA … 100 N/A 2.0 70" (#page=12); blueprint heading "Aviation Mechanic – Airframe 100-Question Test" (#page=13) | No |
| Time | 2.0 hours | same | No |
| Pass mark | 70% | Matrix and Companion Guide "Passing Score … 70"; §65.17(b) "The minimum passing grade for each test is 70 percent" (govinfo part 65, as General) | No |
| Age | None for the test | Matrix "N/A"; certificate age 18 is taught in General (`amtg.mechanic-eligibility-age`) | No |
| Format | Multiple choice, single correct response; embedded images | Companion Guide: "objective multiple-choice questions. There is a single correct response for each test question" (#page=12). ATCA: "The following exams feature questions with embedded images: … Aviation Maintenance Technician (General, Airframe, and Powerplant)" (https://www.faa.gov/training_testing/testing/September_2026_Special_Edition.pdf#page=5) | **Yes** |
| What is tested | Knowledge elements; R and S go to the oral and practical | Companion Guide #page=11 (as General) | No |
| Authorisation | AMTS document for the Airframe curriculum; Form 8610-2 signed by an inspector; military COE; failed AKTR for a retest | Companion Guide: "The completed curriculum as indicated on the document authorizes the applicant to take the corresponding test (i.e., either general and airframe; general and powerplant; or general, airframe, and powerplant)" (#page=12); Matrix #page=6 | No |
| Supplement | FAA-CT-8080-4G (2018) still listed | Matrix #page=6 | **Yes** |
| Retake, validity, cheating | As AMG: §65.19, 24 months, §65.18 | Taught in General T9; not repeated here | No |
| Privileges tested indirectly | Airframe rating: return to service "excluding major repairs and major alterations"; may do the 100-hour | §65.85(a) (https://www.govinfo.gov/content/pkg/CFR-2025-title14-vol2/pdf/CFR-2025-title14-vol2-part65.pdf#page=14); taught as `amtg.airframe-privileges` | Possibly (see Not verified) |
| Weights | Ranges per subject (below) | Companion Guide #page=13–14 | Possibly |
| Upcoming change | PSI assessment of AMA; "Modifications … anticipated to be implemented in 2027" | ATCA #page=4 | **Yes** |
| Practical framework | New AMA practical projects "Scheduled for activation July 20, 2026" | ATCA #page=2 (oral/practical only; not this deck) | **Yes** |
| Question pool | Not public | CONTENT-POLICY §3 lists "the FAA question bank (confidential)" as tier C; BRIEF step 6 does not apply | No |

**Weights (Companion Guide, #page=13–14).** "Aviation Mechanic – Airframe 100-Question
Test … Percentage of Test Questions by Knowledge Area":

| ACS subject | % | ACS subject | % |
|---|---|---|---|
| A Metallic Structures | 5–15 | I Communication, Light Signals, and Runway Lighting Systems | 5–10 |
| B Non-Metallic Structures | 5–10 | J Aircraft Fuel Systems | 5–10 |
| C Flight Controls | 5–10 | K Aircraft Electrical Systems | 5–10 |
| D Airframe Inspection | 5–15 | L Ice and Rain Control Systems | 5–10 |
| E Landing Gear Systems | 5–10 | M Airframe Fire Protection Systems | 5–10 |
| F Hydraulic and Pneumatic Systems | 5–10 | N Rotorcraft Fundamentals | 5–10 |
| G Environmental Systems | 5–10 | O Water and Waste Systems | 5–10 |
| H Aircraft Instrument Systems | 5–10 | | |

**Stamp `ValidAsOf: 2026-09-26`** on: embedded images, the supplement, the 2027
assessment, the Matrix wording, AC 43.13-2C (issued 29 July 2026), and every CFR fact
taken from the 1-1-25 govinfo editions of parts 23, 25 and 65.

## Naming

- No FAA page fetched states trademark terms for "Aviation Mechanic", "AMT" or "AMA";
  they are regulatory names of a US Government certificate and test. The FAA Web
  Policies page (re-used) states no copyright, reuse or AI terms. Order 1700.6D
  (re-used) governs the FAA logo only. faa.gov and govinfo.gov robots.txt (read today)
  disallow only `/core/`, `/profiles/` and similar system paths.
- **CONTENT-POLICY §4:** plain-text factual naming, our brand first, no FAA logo or DOT
  seal, no "official" or "FAA-approved". The FAA is not in §5. As in the General deck,
  the "is a trademark of" sentence does not fit a government test. Title: "[Site name]
  deck for the FAA Aviation Mechanic Airframe knowledge test (AMA)". `ExamRefs` may
  carry ACS codes (AM.II.A.K1 …); the owner confirms under §2.3.
- **Licence.** No FAA document fetched carries its own licence. AMTH-31B, AC 43.13-2C
  and the govinfo CFR PDFs rest on 17 U.S.C. 105(a) and govinfo's notice ("public
  documents can generally be reprinted without legal restriction. However, Government
  publications may contain copyrighted material"). **Caveat:** AMTH-31B's
  Acknowledgments credit many companies and photographers for images, and the aluminium
  filler-rod chart on PDF p294 reads "Copyright © 1997 TM Technologies". The `figure`
  field names FAA tables only (e.g. cylinder table p918, range-marking chart p599,
  Figure 15-5); check each figure's credit before reproducing it.
- **Deck notice:**

> Contains material from 14 CFR parts 23, 25, 39, 43, 65 and 91, the FAA Aviation
> Mechanic General, Airframe, and Powerplant Airman Certification Standards and its
> Companion Guide, the Aviation Maintenance Technician Handbook – Airframe
> (FAA-H-8083-31B) and Advisory Circulars 43.13-1B and 43.13-2C, which are US
> Government works in the public domain; some handbook images are third-party material
> and are not reproduced. This deck is independent and is not affiliated with,
> sponsored, endorsed or approved by the Federal Aviation Administration, the U.S.
> Department of Transportation or PSI Services LLC. The Aviation Mechanic Airframe
> knowledge test (AMA) is an FAA test delivered at PSI testing centres.

## Outline (FAA-S-ACS-1, Section II Airframe, owner's order; Companion Guide weights)

All 15 subjects, 199 K elements and 75 R elements (ACS #page=24–48). Only K elements
are on the written test; R elements map to the same topic and many have a concept.

**A. Metallic Structures (5–15%)** (#page=24) [T1]
- K1 inspection/testing of metal structures; K2 sheet metal defects; K3 repair materials; K4 layout, forming, drilling; K5 rivets, hardware, fasteners for a repair; K6 heat treatment of aluminium; K7 rivet layout; K8 rivet removal and installation; K9 safety practices.
- K10 flame welding gases; K11 storage/handling of welding gases; K12 flame welding; K13 inert-gas welding; K14 shielding gases; K15 steel tubing weld repairs; K16 weld repair procedures; K17 types of structures and characteristics.
- R1–R5 repair materials, sheet metal safety, PPE, compressed gas bottles, electric welding equipment.

**B. Non-Metallic Structures (5–10%)** (#page=26) [T2]
- K1–K6 wood structures, moisture effects, wood types, substitutes, defects, repairs.
- K7–K17 covering: selection factors, approved materials, seams, textile terms, surface preparation, methods, attachment, deterioration areas, preservation, inspection, repair.
- K18–K22 composites: inspection, defects, fibre/core/matrix, storage and shelf life, repairs and fasteners; K23–K25 thermoplastics; K26–K27 windows care and repairs; K28 composite and window safety; K29 restraints and upholstery.
- R1–R7 adhesive or fastener choice, composite repairs, exposure, storage, mixing, unapproved materials, shelf life.

**C. Flight Controls (5–10%)** (#page=28) [T3]
- K1 control cables; K2 cable maintenance; K3 cable connectors; K4 cable guides; K5 control stops; K6 push-pull tubes; K7 torque tubes; K8 bellcranks; K9 flutter and balance; K10 rigging; K11 flight controls and stabiliser systems; K12 other wing features; K13 secondary and auxiliary surfaces.
- R1–R5 cable tension chart, rigging, lifting equipment, calibration of tensiometers, tensiometer use.

**D. Airframe Inspection (5–15%)** (#page=30) [T4]
- K1 part 91 inspection requirements; K2 part 43 recordkeeping; K3 AD compliance; K4 life-limited parts; K5 special inspections; K6 FAA-approved data; K7 service letters, SBs, ICA, ADs; K8 CFRs for inspection and airworthiness; K9 corrosion types and identification.
- R1–R5 over/under maintenance, visual inspection, radiography, checklists, record documentation.
- K1–K3, K8 and K9 rest largely on General (`amtg.annual-inspection`, `amtg.record-43-9`, `amtg.part-39-ad`, corrosion concepts); this topic adds the airframe side (ELT 91.207, App. D airframe groups, 91.417 AD and life-limited status).

**E. Landing Gear Systems (5–10%)** (#page=31) [T5]
- K1–K2 fixed and retractable systems and components; K3 strut servicing; K4 bungee and spring steel gear; K5 steering; K6 position and warning systems; K7 brake servicing; K8 anti-skid; K9 wheel, brake and tyre construction; K10 tyre storage and servicing; K11 gear, tyre and wheel safety; K12 brake actuating systems; K13 skis and floats.
- R1–R6 gear/tyre/wheel precautions, jacks, high pressure, hydraulic fluid storage, strut disassembly, gear operation near people.

**F. Hydraulic and Pneumatic Systems (5–10%)** (#page=33) [T6]
- K1 components and fluids; K2 operation; K3 servicing; K4 inspection and troubleshooting; K5 pneumatic types and components; K6 pneumatic servicing; K7 accumulators; K8 seals and fluid/seal compatibility; K9 hoses, lines, fittings; K10 regulators, restrictors, valves; K11 filters.
- R1–R5 relieving pressure, high pressure, fluid storage, cross-contamination, seal compatibility.

**G. Environmental Systems (5–10%)** (#page=35) [T7]
- K1 pressurisation; K2 bleed air heating; K3 instrument cooling; K4 exhaust heat exchangers; K5 combustion heaters; K6 vapour cycle; K7 air cycle; K8 cabin pressurisation components; K9 oxygen system types; K10 oxygen maintenance.
- R1–R6 oxygen maintenance, refrigerant recovery, chemical generators, compressed gas, refrigerant types, combustion heaters.

**H. Aircraft Instrument Systems (5–10%)** (#page=37) [T8]
- K1 annunciators (warning, caution, advisory); K2–K3 magnetic compass and swinging; K4 pressure; K5 temperature; K6 position sensors; K7 gyros; K8 direction; K9 vacuum and pneumatic; K10 pitot-static; K11 fuel quantity [T10]; K12 range markings; K13 electronic displays; K14 ESDS; K15 BITE; K16 EFIS; K17 EICAS; K18 HUD; K19 static leak checks (parts 43, 91); K20 limitations; K21 AOA and stall warning; K22 takeoff and landing gear configuration warnings; K23 bonding; K24 panel removal and installation.
- R1–R5 air and water on instruments, intermittent annunciator, ESDS, gyros, pitot-static test.

**I. Communication and Navigation Systems (5–10%)** (#page=39; Companion Guide name differs, see Traps) [T9]
- K1 radio principles; K2 components; K3 antennas, static wicks, avionics mounting; K4 interphone/intercom; K5 VHF, HF, SATCOM; K6 ACARS; K7 ELT; K8 ADF; K9 VOR; K10 DME; K11 ILS; K12 GPS; K13 TCAS; K14 weather radar; K15 GPWS; K16 autopilot [T8]; K17 auto-throttle [T8]; K18 SAS (rotorcraft); K19 radio altimeter; K20 ADS-B; K21 transponder/encoder.
- R1–R6 ELT testing, high-power systems, harness routing, antenna mounting, ESD, live systems.

**J. Aircraft Fuel Systems (5–10%)** (#page=41) [T10]
- K1 types; K2 components, filters, selector valves; K3 tanks/cells; K4 fuel flow; K5 transfer, fuelling, defuelling; K6 jettison; K7 fuel types; K8 maintenance and inspection; K9 quantity indication.
- R1–R5 maintenance, contamination, spills, tank entry, defuelling.

**K. Aircraft Electrical Systems (5–10%)** (#page=43) [T11]
- K1 DC generation and distribution; K2 AC generation and distribution; K3 starter generators; K4 CSD and IDG; K5 regulators, overvoltage and overcurrent; K6 inverters; K7 wire sizes, types, installation, circuit protection; K8 switch derating; K9 shielding; K10 lightning protection; K11 panel removal (duplicate of H.K24) [T8]; K12 lighting; K13 troubleshooting; K14 soldering; K15 connectors, splices, terminals, switches; K16 measurement and testing; K17 battery maintenance.
- R1–R9 testing, external power, energised circuits, wiring areas, routing, wire size, terminals, soldering effects and practices.

**L. Ice and Rain Control Systems (5–10%)** (#page=45) [T12]
- K1 icing causes/effects; K2 ice detection; K3 anti-ice; K4 de-ice; K5 wipers, chemical and bleed air rain control; K6 maintenance; K7 conditions that degrade vision.
- R1–R3 testing, deicing fluids, cleaning heated windshields.

**M. Airframe Fire Protection Systems (5–10%)** (#page=46) [T13]
- K1 types of fires [General T6] and fire zones; K2 detection and warning; K3 detection maintenance; K4 smoke and CO detection; K5 agents; K6 extinguishing systems; K7 extinguishing maintenance.
- R1–R3 squib circuits, PPE, agents.

**N. Rotorcraft Fundamentals (5–10%)** (#page=47) [T14]
- K1 aerodynamics; K2 flight controls; K3 transmissions; K4 rigging; K5 rotor systems; K6 skid shoe and tube inspection; K7 blade construction; K8 vibration, track and balance; K9 drive system vibration.
- R1–R4 blades on the ground, ground handling, functional tests, rotorcraft maintenance.

**O. Water and Waste Systems (5–10%)** (#page=48) [T15]
- K1 potable water; K2 lavatory waste; K3 inspection and servicing. R1 waste servicing safety.

## Traps

- [T4] **AMA is 100 questions in 2.0 hours**, the same time as AMG's 60 (Matrix #page=6). Pace differs; pass mark 70% for both.
- [T9] **Subject I has two names.** ACS: "Communication and Navigation Systems" (#page=39). Companion Guide blueprint: "Communication, Light Signals, and Runway Lighting Systems" (#page=13). The ACS K list has no light-signal or runway-lighting element; teach the ACS list, and note light signals are in General (`amtg.light-signals`).
- [T4] **Handbook edition.** The Companion Guide's reference list says "FAA-H-8083-31 … Aviation Maintenance Technician Handbook–Airframe (Volumes 1 and 2)" (#page=25). The current FAA-H-8083-31B (2023) is one PDF of 1,052 pages with no volumes (handbook list page: "FAA-H-8083-31B … 2023"). Page references from two-volume 31A prep material do not match.
- [T11] **AC 43.13-2B is cancelled.** The FAA AC page shows "43.13-2B … (Cancelled) Date cancelled 2026-07-29 Cancelled by 43.13-2C"; AC 43.13-2C is dated 7/29/26 and "AC 43.13-2B … dated March 3, 2008, is canceled" (AC 43.13-2C §1.4). Cite 2C. AC 43.13-1B (with Change 1) remains "Active".
- [T4] **2025 CFR changes.** As in General: govinfo's 1-1-25 edition predates the July 2025 amendments to parts 43 and 91; cite the eCFR copies for 43 and 91.
- [T1] **Rivet numbers:** diameter = skin thickness × 3, "use the next larger size rivet" (AMTH #page=248); edge distance "never be less than 2 times the diameter", pitch "at least 3 times", rows "never be less than 21⁄2 times" (#page=195); shop head "one and a half times the diameter of the rivet shank" (#page=194).
- [T1] **Acetylene** pressure limit and the three flames (neutral, carburising, oxidising) are separate concepts; welding processes as a list are General (`amtg.welding-processes`), flames and tube repairs are Airframe.
- [T2] **Fabric 70%:** fabric is airworthy until breaking strength falls below "70 percent of the strength of the new fabric required for the aircraft" (AMTH #page=147), measured against the original fabric required, not the fabric now fitted.
- [T2] **Cotton to polyester** re-covering is a major alteration (AMTH #page=141).
- [T2] **Wood grain slope** "cannot be steeper than 1:15" (AMTH #page=318).
- [T6] **Fluids never mix:** "petroleum-based and phosphate ester-based fluids will not mix; neither are the seals for any one fluid usable with or tolerant of any of the other fluids"; wrong fluid → "immediately drain and flush the system" (AMTH #page=682). MIL-H-5606 "is dyed red" (#page=681); Buna-N versus Skydrol is General.
- [T7] **Oxygen cylinders:** DOT 3AA steel 1,800 psi, hydrostatic every 5 years, unlimited life; DOT 3HT 1,850 psi, every 3 years, 24 years or 4,380 fillings (AMTH table, #page=918); test pressure "5⁄3 of its certified rating" (#page=917).
- [T7] **Missing green disc** means the oxygen overboard relief has opened (AMTH #page=926). Do not confuse with the fire bottle discs.
- [T13] **Red disc versus yellow disc:** red = contents "dumped overboard due to excessive heat"; yellow = system "activated by the flight crew" (AMTH #page=985).
- [T13] **Halon 1301** is "a total flooding agent", **1211** "a streaming agent" (AMTH #page=981).
- [T13] **Cargo classes are A, B, C and E;** 25.857(d) is "[Reserved]" (govinfo part 25 #page=116). Candidates look for a Class D.
- [T7] **Cabin altitude:** "not more than 8,000 feet under normal operating conditions" (14 CFR 25.841(a), govinfo part 25 #page=112).
- [T7] **Refrigerant:** R134a boils at "approximately –15 °F" (AMTH #page=954); "The EPA requires certification of technicians" who work with vapour-cycle refrigerant (#page=968). Old material names R-12.
- [T9] **ELT rules:** inspection "within 12 calendar months after the last inspection"; battery replaced after "more than 1 cumulative hour" or "50 percent of their useful life"; new date marked outside the transmitter and in the record (91.207(c)–(d), eCFR). General teaches 91.411/91.413 (24 months); ELT is 12.
- [T8] **Warning, caution, advisory** colours and instrument range markings (red, green, yellow, white arc, blue radial) are separate concepts (`amta.annunciators`, `amta.range-markings`, chart #page=599).
- [T8] **Autopilot and auto-throttle** are ACS subject I (K16–K17) but AMTH-31B teaches them in chapter 10 (instruments); the concepts sit in T8.
- [T8] **Duplicate element:** H.K24 and K.K11 are both "Instrument or instrument panel removal and installation"; one concept (`amta.instrument-mounting`) covers both.
- [T15] **Water and waste** has its own 5–10% band but AMTH-31B has no chapter on it (see Not verified).

## Languages

The test is in English; §65.71(a)(2) and the Companion Guide's "English language
proficiency is required" (#page=9) apply as for AMG (taught in General). No FAA page
fetched offers AMA in another language. No official or openly licensed translation of
the ACS, AMTH-31B, AC 43.13-1B or AC 43.13-2C was found; none was searched beyond the
FAA pages fetched.

## Budget

`faa-amt-airframe-budget.json` follows BRIEF.md: one primer per term, one fact per rule,
number, procedure or contrast, one card per member of sets with more than 3 members,
one application per core concept, plus 10%. T1 (421) and T2 (378) are largest: 17 and
29 K elements, with welding, wood, fabric and composites each a chapter. T15 (16) is
small because its source is thin. Set sizes counted from AMTH headings or the
regulation (e.g. 4 cargo classes, 5 fire zones, 3 accumulator types, 3 hydraulic fluid
types, 4 fuel leak classes, 15 AMA subjects) except these, which are estimates to
recount when writing: `wing-configurations`, `spar-types`, `punch-types`,
`cutting-tools-sheet`, `form-blocks`, `damage-types`, `layout-terminology`,
`wood-substitutes`, `defects-permitted`, `defects-not-permitted`, `glue-terms`,
`fabric-terms`, `manufacturing-defects`, `in-service-defects`, `vacuum-bag-materials`,
`fiber-types`, `other-wing-features`, `flow-control-valves`, `seal-materials`,
`pneumatic-components`, `gaseous-system`, `vapor-cycle-components`, `servicing-equipment`,
`acm-components`, `frequency-bands`, `avionics-considerations`, `jet-transport-fuel`,
`fuel-pumps`, `fuel-quantity`, `fuel-contaminants`, `exterior-lights`, `large-ac-power`,
`ice-control-methods`, `deice-components`, `fire-protection-requirements`,
`tire-damage`, `app-d-*`.

Anchors: AMTH and AC anchors are PDF pages; eCFR anchors are section URLs (Part 43
appendices use the part URL); parts 23, 25 and 65 anchors are PDF pages of the govinfo
1-1-25 editions. Concepts anchored only to an ACS code (e.g. `amta.lavatory-waste`,
`amta.satcom`, `amta.hud`, `amta.esds`) have no handbook text and carry a note.

## Not verified

1. **Water and waste systems (II.O).** AMTH-31B mentions potable water and grey-water
   tanks only under ice protection (#page=910–911); no FAA source fetched describes
   lavatory waste components or servicing. `amta.lavatory-waste`,
   `amta.water-waste-servicing` and `amta.waste-servicing-safety` cite the ACS only.
   A writer needs another public-domain source (e.g. an FAA AC) before writing them.
2. **Other ACS items with no AMTH-31B text:** SATCOM (I.K5), interphone (I.K4), HUD
   (H.K18), ESDS handling (H.K14), instrument cooling (G.K3), sheet-metal shop safety
   (A.K9), life-limited part identification (D.K4). Searched the whole handbook text;
   these concepts cite the ACS and carry a note.
3. **Current part 65, 23 and 25 text.** eCFR refuses automated requests, so parts 23,
   25 and 65 come from govinfo's 1-1-25 edition; any 2025–26 amendment (for example to
   §65.85 or the transport-category rules) is unchecked. Part 23 in that edition is the
   performance-based rewrite ("Amdt. 23–64, 81 FR 96689, Dec. 30, 2016"), so it gives
   few numbers; cards should prefer AMTH and part 25 facts.
4. **Changes in AC 43.13-2C.** It was issued 29 July 2026; I read its contents and §1.4
   only and did not diff it against 2B. Chapters 3–5 and 11 (avionics, antennas, lights,
   batteries) are cited by heading.
5. **AMA-specific PSI material.** The ATCA points to a PSI "FAA Aircraft Mechanic
   Applicants (AMT)" page; not fetched (the CFI brief found PSI's media host disallows
   all paths in robots.txt; not re-checked). No FAA sample AMA questions exist to fetch.
6. **Estimated set sizes** listed under Budget.
7. **Leads in the prompt.** (a) "AMT Handbook — Airframe (FAA-H-8083-31B, two volumes)":
   31B is one volume (one 1,052-page PDF); the two volumes were 31A, which the Companion
   Guide still cites. (b) "AC 43.13-1B and -2B": 43.13-2B was cancelled on 29 July 2026
   by 43.13-2C, which this brief uses; 43.13-1B with Change 1 is still active.
   (c) "14 CFR … (govinfo)": used for parts 23, 25 and 65; parts 39, 43 and 91 use the
   saved eCFR copies because govinfo's edition predates the July 2025 amendments.
   (d) The ACS (FAA-S-ACS-1, November 2021) is current, as the prompt expected.

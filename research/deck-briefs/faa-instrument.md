# Research brief: FAA Instrument Rating – Airplane knowledge test (IRA)

Slug: `faa-instrument`. Family prefix: `ifr`. Researched 25 September 2026.
Every fact below was read in a source fetched during this task. Raw files and
extracted text are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/faa-instrument/`
(file names given as `[file]`). Page numbers are PDF pages (form feeds in
pdftotext output), not printed page numbers.

**Prerequisite deck.** `prerequisiteDecks: ["faa-private-pilot"]` (prefix `ppl`,
researched in parallel). This deck does **not** re-teach private pilot basics.
The IRA and Private Pilot ACS knowledge lists overlap word for word in places:
IR.I.B.K1–K4 (weather sources, METAR/SPECI/PIREP, surface analysis and CVA, TAF,
GFA, FB, convective outlook, AIRMET/SIGMET/convective SIGMET, the twelve
meteorology items, digital weather displays) are the same text as PA.I.C.K1–K4
(`private_airplane_acs_6.pdf#page=11`) `[par_acs.txt]`. The private ACS also
covers pitot-static, vacuum and compass basics, hypoxia, spatial disorientation,
optical illusions and inoperative equipment (PA.I.G, PA.I.H, PA.I.B.K3a). These
are **topic 0**: `faa-instrument-terms.json` starts with 26 topic-0 terms whose
`concept` ids (`ppl.*`) are **provisional** and must be reconciled with
`faa-private-pilot-terms.json` once it exists (it did not exist when this brief
was written; no `research/sources/faa-private-pilot/manifest.json` either).
The IFR deck teaches only the instrument layer: IFR rules and numbers, IFR use of
weather (alternates, icing, IFR AIRMETs), instruments at IFR depth, attitude
instrument flying, navigation systems, ATC, procedures and emergencies.

## Topics

| Topic | Name | ACS Areas |
|---|---|---|
| T1 | Instrument rating, currency and logging | I.A |
| T2 | IFR weather, icing and ice protection | I.B, II.A |
| T3 | IFR flight planning, alternates and fuel | I.C |
| T4 | IFR airworthiness and equipment checks | II.C, V.A (VOR checks) |
| T5 | Flight instruments and flight-deck systems | II.A.K2, II.B |
| T6 | Attitude instrument flying and disorientation | IV.A, IV.B |
| T7 | Navigation systems: VOR, DME, ILS, GPS and RNAV | II.B.K2, V.A |
| T8 | ATC clearances, departures and communications | III.A, V.B |
| T9 | En route altitudes, airways and holding | I.C.K2, III.B |
| T10 | Arrivals, approach procedures and minimums | V.B (STAR), VI.A, VI.B |
| T11 | Landing, missed approach, circling and visual approaches | VI.C, VI.D, VI.E |
| T12 | Emergencies and abnormal operations under IFR | VII, VIII |

Counts: 330 concepts (239 core, 91 extra), 159 terms (26 at topic 0), 627
budgeted cards. Instrument Approach Procedures and Preflight Preparation carry
26% each (PSI weights, below), so T3 and T10–T11 are the largest topics.

## Exam facts

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | FAA Flight Standards, Airman Testing Standards Branch; test delivered by PSI | ACS foreword: "Office of Safety Standards, Regulatory Support Division, Airman Testing Standards Branch, has published the Instrument Rating – Airplane Airman Certification Standards" (https://www.faa.gov/training_testing/testing/acs/instrument_rating_airplane_acs_8.pdf#page=2) `[ira_acs.txt]`. PSI bulletin: "The Instrument Rating Airplane (IRA) knowledge exam is available at PSI's FAA approved testing centers." (https://media.psiexams.com/faa/IRA_Information_Bulletin.pdf#page=2) `[cib_ira.txt]` | Vendor: rarely |
| Test code and name | IRA, Instrument Rating Airplane | Matrix: "IRA Instrument Rating Airplane 60 15 2.0 70" (https://www.faa.gov/training_testing/testing/testing_matrix, "Revised 9/25/26", PDF p.11) `[matrix.txt]` | No |
| Outline | FAA-S-ACS-8C, dated November 2023, effective 31 May 2024 | ACS list page: "Instrument Rating – Airplane (FAA-S-ACS-8C) April 2024 n/a Effective May 31, 2024" (https://www.faa.gov/training_testing/testing/acs) `[acs_page.html]`; cover "November 2023" `[ira_acs.txt]` | Every few years (8, 8A, 8B, 8C since 2016, ACS p.2) |
| Questions | 60 scored + 5 unscored validation | Matrix "60"; CIB: "In addition to the 60 questions in the IRA exam, 5 validation questions will be administered … These questions will not be scored" (CIB p.4) | Validation count: may change |
| Time | **2.0 hours (120 minutes)** per the Matrix and CIB; the ACS table says 2.5 | Matrix "2.0"; CIB "120 Minutes"; ACS App. 1 table "IRA Instrument Rating - Airplane 60 15 2.5 70" (ACS p.31) | **Yes: sources disagree**; the Matrix (25 Sept 2026) is newest |
| Pass mark | 70% | Matrix "70"; CIB "70% correct" | No |
| Minimum age | 15 | Matrix and ACS table age column "15" | No |
| Format | Multiple choice, one correct answer, independent items; embedded images | "The airman knowledge test consists of multiple-choice questions. A single correct response exists for each test question. A correct response to one question does not depend upon, or influence, the correct response to another." (FAA-G-ACS-2 p.8, https://www.faa.gov/training_testing/testing/acs/acs_companion_guide_pilots.pdf) `[acs_cg.txt]` | **Yes** (below) |
| Image questions | From 26 Oct 2026, IRA includes image questions not in the supplement | "Beginning October 26, 2026*, the Instrument Rating Airplane (IRA) and Unmanned Aircraft General-Small (UAG) tests will include image-based questions not found in the test supplements … from the latest Sectional Charts, Instrument Approach Charts, and Low Altitude Enroute Charts" ("*Corrected date from the previous edition") (ATCA Sept 2026, p.6, https://www.faa.gov/training_testing/testing/September_2026_Special_Edition.pdf) `[atca_sep26.txt]` | **Yes** |
| Testing supplement | FAA-CT-8080-3F (2017), until withdrawn | Matrix header: "Airman Knowledge Testing Supplement for Instrument Rating, FAA-CT-8080-3F (2017)"; ATCA p.5: "The date for removing testing supplements from test centers has not yet been set." | **Yes** |
| Authorisation to test | Ground-school graduation certificate or an instructor endorsement | Matrix: "Written statement or logbook endorsement from an FAA authorized ground or flight instructor certifying that the applicant is prepared to take the required knowledge test. (14 CFR § 61.65(a)(4))" | No |
| Retake | After failure: failed AKTR plus instructor endorsement for additional training; **no waiting period is stated** for IRA | Matrix p.11: "An applicant retesting AFTER FAILURE is required to submit the applicable AKTR … must also present an endorsement from an authorized instructor who gave the applicant additional training" (14 CFR 61.49(a)); contrast the Parachute Rigger section's "30-day waiting period" | No |
| Validity | Knowledge test must be passed within the 24 calendar months before the month of the practical test | 14 CFR 61.39(a)(1)(i): "Within the 24-calendar-month period preceding the month the applicant completes the practical test" (https://www.ecfr.gov/current/title-14/part-61/section-61.39) `[ecfr/61.39.txt]` | No |
| Holders | An instrument-rated pilot need not retake it | 61.65(a)(7): "an applicant is not required to take another knowledge test when that person already holds an instrument rating" | No |
| Report | AKTR lists ACS codes for missed questions | ACS p.31: "The Airman Knowledge Test Report (AKTR) lists ACS codes that correlate to a specific Task element"; Matrix: IRA highlighted as having ACS codes on the AKTR | No |
| What is tested | Knowledge (K) and risk-management (R) elements | "Knowledge and risk management elements are primarily evaluated during the knowledge testing phase of the airman certification process." (ACS p.32) | No |
| Weights | See Outline | PSI CIB, "determined by the industry-wide job task analysis study completed in 2020" (CIB p.4) | Yes |

Stamp volatile facts `ValidAsOf: 2026-09-25`: time, image questions, supplement,
weights, Matrix wording.

## Naming

- **No trademark claim found.** "Instrument Rating – Airplane", "IRA" and "ACS" are
  regulatory names of a US Government certificate. FAA Order 1700.6D (effective
  02/27/2024) governs the logo only: "Only FAA organizations may use the FAA logo,
  unless approved by the Assistant Administrator for Communications", and it "may
  not be used in any way that implies endorsement by the FAA, DOT, or the United
  States government of any product, service, or enterprise … or which appears to
  sanction the activities of a third party."
  (https://www.faa.gov/documentLibrary/media/Order/Order_1700.6D.pdf) `[order_1700_6d.txt]`
- **How CONTENT-POLICY.md §4 applies.** Plain-text factual naming, our brand leads,
  no FAA logo or DOT seal, no "official", "approved" or "certified". FAA is not in
  §5. Title pattern: "[Site name] deck for the FAA Instrument Rating – Airplane
  knowledge test (IRA)". The §4 "Everyone else" wording ("is a trademark of") does
  not fit a government rating, so the notice drops the trademark sentence, as in
  the Part 107 brief. §3 already puts the FAA question bank out of use; build from
  the handbooks, AIM and 14 CFR. PSI and ATCA sample questions are not card
  content (§2.1). The ACS is a US Government work, so `ExamRefs` to ACS codes seem
  permissible; owner to confirm under §2.3.
- **Deck notice text:**

> This deck is independent and is not affiliated with, sponsored, endorsed or
> approved by the Federal Aviation Administration, the U.S. Department of
> Transportation or PSI Services LLC. The Instrument Rating – Airplane knowledge
> test (IRA) is an FAA test delivered at PSI testing centres. Cards are built from FAA
> handbooks, the Aeronautical Information Manual and 14 CFR, which are US
> Government works.

- **Licence.** 17 U.S.C. 105: "Copyright protection under this title is not
  available for any work of the United States Government"
  (https://www.govinfo.gov/content/pkg/USCODE-2023-title17/html/USCODE-2023-title17-chap1-sec105.htm)
  `[usc17_105.htm]`. The FAA handbooks page adds: "Any reproduction or modification
  of this material from original FAA source material is solely the responsibility
  of the publisher." `[handbooks.html]`. No "©" or "courtesy" notice was found in
  the IFH, IPH, ACS, AIM sections or ATCA text, except one IPH figure credit,
  "Images courtesy of NASA Langley" (IPH ch.4 p.20), also a federal source. The PSI
  bulletin is "Copyright © 2024 by PSI" (tier C: facts only).

## Outline

FAA-S-ACS-8C, owner's order. 8 Areas, 22 Tasks, 90 knowledge codes (including
sub-elements) and about 100 risk-management codes. Weights are the PSI CIB's "%
of ACS Items" (CIB p.4); the ACS itself gives none. Tasks VII.B and VII.C apply to
AMEL/AMES only. K text is summarised; R elements are listed by theme.

**I. Preflight Preparation — 26%**
- **I.A Pilot Qualifications** (ACS p.8): K1 certification, recency, recordkeeping [T1]; K2 privileges and limitations [T1]; K3 part 68 BasicMed [T0]. R: proficiency vs currency, personal minimums, fitness, unfamiliar aircraft/avionics [T1][T0].
- **I.B Weather Information** (p.8–9): K1 weather sources [T0][T2]; K2 products: a METAR/SPECI/PIREP, b surface analysis/CVA, c TAF, d GFA, e FB, f convective outlook, g AIRMET/SIGMET/convective SIGMET [T0 decoding; T2 IFR use]; K3 IFR meteorology a–l (stability, wind, temperature, moisture, fronts, clouds, turbulence, thunderstorms, icing and freezing level, fog, frost, obstructions to visibility) [T0; T2 for i]; K4 flight-deck digital weather [T2]. R: go/no-go and divert, personal minimums, icing/turbulence aloft; limits of onboard weather and forecasts [T2].
- **I.C Cross-Country Flight Planning** (p.10): K1 route planning: a navaids [T9], b SUA [T3], c preferred routes [T3], d primary and alternate airports [T3], e en route charts [T3], f Chart Supplements [T3], g NOTAMs [T3], h TPP [T3]; K2 altitude selection (terrain, glide, IFR cruising altitudes, wind, oxygen) [T3][T9]; K3 calculations a–c (time, ETA/UTC, fuel and reserve) [T0][T3]; K4 IFR flight plan elements [T3]; K5 activating and closing an IFR flight plan [T3]. R: pilot, aircraft, environment, external pressures, ATC limits, planning apps [T3].

**II. Preflight Procedures — 14%**
- **II.A Aircraft Systems Related to IFR** (p.12): K1 anti-ice and deice systems (airframe, propeller, intake, fuel, pitot-static) [T2]; K2 flight control systems [T5]. R: icing, system limits, automation in IMC [T2][T5].
- **II.B Flight Instruments and Navigation Equipment** (p.12–13): K1 a pitot-static, b gyro/electric/vacuum, c electrical, PFD/MFD, transponder, ADS-B, d compass [T5]; K2 a VOR, DME, ILS, marker beacons, b RNAV, GPS, WAAS, FMS, autopilot [T7][T5]; K3 EFB [T5]. R: automation, approved vs non-approved devices, failure modes, EFB, databases [T5][T7].
- **II.C Instrument Flight Deck Check** (p.13): K1 purpose and defects [T4]; K2 IFR airworthiness, inspections, required equipment [T4]; K3 inoperative equipment [T4][T0]. R: inoperative equipment, outdated publications or databases [T4].

**III. ATC Clearances and Procedures — 7%**
- **III.A Compliance with ATC Clearances** (p.14): K1 clearances and pilot/controller responsibilities, void times [T8]; K2 PIC emergency authority [T8]; K3 lost communications and non-radar procedures [T12][T8]. R: misunderstood, wrong, unflyable or misdirected clearances [T8].
- **III.B Holding Procedures** (p.14–15): K1 holding: reporting, speeds, entries, published and non-published [T9]. R: fuel with an unexpected EFC, minimum fuel, causes of holding, entry and wind correction [T9][T8].

**IV. Flight by Reference to Instruments — 11%**
- **IV.A Instrument Flight** (p.16): K1 attitude instrument flying [T6]; K2 pitch, bank and power instruments [T6]; K3 normal and abnormal indications [T6]. R: degraded cross-check, spatial disorientation and illusions, unfamiliar avionics [T6].
- **IV.B Recovery from Unusual Flight Attitudes** (p.16): K1 recovery [T6]; K2 prevention [T6]; K3 regaining VMC after IIMC/UIMC [T6]; K4 automation [T6]. R: as listed in the ACS (R2 archived) [T6].

**V. Navigation Systems — 8%**
- **V.A Intercepting and Tracking, DME Arcs** (p.18): K1 ground-based navigation, tests and regulations [T7][T4]; K2 satellite navigation, RAIM, WAAS, databases, interference [T7]. R: automation, distraction, system limits [T7].
- **V.B Departure, En Route, and Arrival** (p.19): K1 ATC routes, DPs and climb gradients, STARs [T8][T9][T10]; K2 pilot/controller responsibilities, communications, ATC services [T8]. R: compliance, traffic-equipment limits, see and avoid [T8].

**VI. Instrument Approach Procedures — 26%**
- **VI.A Non-precision Approach** (p.20): K1 procedures and limits, LP vs LNAV [T10]; K2 RNAV annunciations [T10][T7]; K3 navigation systems [T7]; K4 stabilised approach [T10]. R: deviation, frequency, automation, configuration, unstable approach, weather, below MDA [T10][T11].
- **VI.B Precision Approach** (p.21): K1 procedures, descent rates, inoperative-equipment minimums [T10]; K2 displays and modes [T10]; K3 navigation systems, integrity [T7]; K4 stabilised approach [T10]. R: as VI.A [T10].
- **VI.C Missed Approach** (p.22–23): K1 missed approach procedures, FMS/autopilot [T11]. R: deviations, hold/divert/retry, configuration, early missed approach, automation [T11].
- **VI.D Circling Approach** (p.23–24): K1 circling procedures, approach categories and speeds [T11][T10]. R: night/marginal visibility, losing sight of the airport, low-altitude manoeuvring, missed approach while circling [T11].
- **VI.E Landing from an Instrument Approach** (p.24–25): K1 landing factors, straight-in or circling [T11]; K2 airport signs, markings, lighting, approach lights [T11][T0]; K3 landing profiles [T11]. R: unstable approach, below glidepath, instrument-to-visual transition [T11].

**VII. Emergency Operations — 6%**
- **VII.A Loss of Communications** (p.26): K1 lost-comms procedures, re-establishing contact, when to deviate and when to begin the approach [T12]. R: causes, deviation from procedures [T12].
- **VII.B One Engine Inoperative, straight-and-level and turns (AMEL, AMES)** (p.26): K1 [T12]. R: identification, performance, low-altitude manoeuvring, fuel [T12].
- **VII.C Approach and Landing with an Inoperative Engine (AMEL, AMES)** (p.27): K1 [T12]. R: (R2 archived) [T12].
- **VII.D Approach with Loss of Primary Flight Instrument Indicators** (p.28): K1 recognising and reporting failed instruments [T12]; K2 failure modes and mitigation [T12][T5].

**VIII. Postflight Procedures — 2%**
- **VIII.A Checking Instruments and Equipment** (p.30): K1 documenting discrepancies [T12]. R: postflight inspection and documentation [T12].

## Traps

- [T0] Test time: the Matrix (revised 25 Sept 2026) and the PSI CIB give 2.0 h / 120 min; the ACS App. 1 table still says 2.5. Use the Matrix.
- [T10] From 26 Oct 2026, IRA questions may show current IFR low en route and approach chart excerpts, not only the 2017 supplement (FAA-CT-8080-3F) figures. Chart cards should use current FAA charts.
- [T2] The IFH (2012) lists the "Area Forecast (FA)" (`FAA-H-8083-15B.pdf#page=313`); the ACS lists the GFA instead. Teach the GFA from AIM 7-1-4, never the FA.
- [T2] The names AIRMET Sierra, Tango and Zulu appear in AIM 7-1-6 with the Alaska and Hawaii text AIRMETs; contiguous-US AIRMETs are graphical, listing hazards such as "Instrument flight rule conditions (ceiling < 1000' and/or surface visibility < 3 miles)".
- [T2] Flight categories: LIFR is below 500 ft and/or below 1 mile; IFR is 500 to below 1,000 ft and/or 1 to below 3 miles (AIM 7-1-7). Candidates swap the boundaries.
- [T3] The "1-2-3" test for needing an alternate (2,000 ft, 3 SM, 1 h either side of ETA, 91.169(b)) is confused with the alternate's own minimums (600-2 precision, 800-2 nonprecision, 91.169(c)).
- [T3] IFR fuel is to destination, then alternate, then 45 min at normal cruise (91.167). The alternate leg drops out on the same 1-2-3 test.
- [T8] Takeoff minimums in 91.175(f) apply to parts 121, 125, 129 and 135. Under part 91 there is no regulatory IFR takeoff minimum; ODP use is also stated for those parts.
- [T4] VOR check limits differ: VOT and ground checkpoint ±4°, airborne checkpoint and airway ground point 6°, dual VOR 4° between the two; 30 days (91.171).
- [T4] Altimeter/static/encoder and transponder checks are both 24 calendar months (91.411, 91.413), but only 91.411 is tied to IFR in controlled airspace.
- [T1] Currency (6 approaches, holding, intercepting and tracking, 6 calendar months) versus the IPC: once currency has lapsed for more than six further calendar months, only an IPC restores it (61.57(c),(d)(1)).
- [T1] Instrument time for the rating is 40 h, of which 15 h from a CFII (61.65(d)(2)); cross-country PIC is 50 h, 10 h in airplanes (61.65(d)(1)). The long IFR cross-country is 250 NM for airplanes, 100 NM for helicopters.
- [T10] DA is MSL, DH is height above ground; MDA is MSL (14 CFR 1.1). HAT is height above touchdown (97.3).
- [T10] LNAV/VNAV and LPV are APV, not "precision" under 14 CFR 1.1 (precision means "an electronic glide slope … such as ILS and PAR"). An LNAV approach with advisory vertical guidance "must still be flown to an MDA" (AIM 5-4-5).
- [T10] LP is not LPV: "LP will be published in locations where vertically guided minima cannot be provided", and never alongside LNAV/VNAV or LPV (AIM 5-4-5).
- [T10] Approach category is VREF (or 1.3 VSO) at maximum landing weight; manoeuvring faster means using a higher category's minimums (AIM 5-4-7).
- [T7] 91.175(k) now lists ILS components as localizer, glide slope and outer marker (plus inner marker for Cat II/III). The IFH (2012) still lists "localizer, glideslope, outer marker, middle marker, and inner marker" (`FAA-H-8083-15B.pdf#page=301`).
- [T7] IFH Addendum B (Nov 2019) replaces the IFH's "ILS Errors" text on false glide slopes: capture from below at charted altitudes avoids them.
- [T11] Visual references: approach lights alone allow descent only to 100 ft above TDZE unless the red terminating or side-row bars are visible (91.175(c)(3)(i)).
- [T11] Contact approach: pilot must request it, ATC cannot initiate, 1 SM ground visibility. A visual approach can be ATC-initiated, needs 1,000 ft and 3 miles (AIM 5-4-23, 5-4-25).
- [T8] VFR-on-top is an IFR clearance; ATC will not authorise it in Class A (AIM 4-4-8).
- [T12] Lost comms: route is assigned, vectored, expected, filed; altitude is the **highest** of assigned, minimum IFR and expected, per segment (91.185(c)). In VFR conditions, land as soon as practicable.
- [T6] ACS codes IR.IV.B.R2 and IR.VII.C.R2 are archived (Companion Guide p.26); older AKTRs and prep material may still cite them.
- [T0] Old study material cites the Practical Test Standard FAA-S-8081-4E (2010) or ACS-8B; 8C is current (ACS p.2).

## Languages

The test is English only as far as the fetched sources show: 61.65(a)(2) requires
the applicant to "read, speak, write, and understand the English language", and no
FAA or PSI page fetched mentions another language for IRA. No official or openly
licensed translation of the IFH, IPH, AIM or ACS was found; none was searched
beyond the FAA pages fetched.

## Not verified

1. **Private pilot boundary.** Topic-0 `ppl.*` concept ids are provisional; the
   faa-private-pilot brief was not yet written. Reconcile before writing cards.
2. **Unintended IMC escape, one-engine-inoperative instrument flight and postflight
   discrepancy documentation** (IR.IV.B.K3, VII.B, VII.C, VIII.A) have no teaching
   source fetched; their concepts cite the ACS page. The ACS references the Airplane
   Flying Handbook FAA-H-8083-3 and the POH/AFM; fetch FAA-H-8083-3 before writing.
3. **Aviation Weather Handbook FAA-H-8083-28** (listed "04/02/2026") and ACs 91-74,
   91-92, 90-100, 90-105, 90-107, 91-78, 91.21-1, 120-108, 68-1 (all ACS references)
   were not fetched. BasicMed IFR limits (part 68, 61.113(i)) not fetched: topic 0.
4. **Weights.** PSI's split (March 2024 bulletin, 2020 job task analysis) is the only
   one found. It may be revised; the ACS gives none.
5. **Clearance items and several set sizes** were not fully counted (AIM 4-4-3 lists
   at least clearance limit, departure procedure, route, altitude data, holding
   instructions). The budget assumes 4 members for 13 uncounted sets.
6. **Currency of the IPH (2017) and IFH (2012).** Both predate current products and
   rules (e.g. the IFH's Area Forecast; the IPH mentions DUATS). No newer edition is
   listed on the FAA handbooks page as fetched. Cite 14 CFR and the AIM (Change 3,
   effective 7/9/2026) for rules.
7. **Test statistics and PSI sample questions** were not fetched (the sample test
   needs a PSI account).

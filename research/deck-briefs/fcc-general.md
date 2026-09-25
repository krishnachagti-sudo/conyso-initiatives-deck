# Research brief: FCC Amateur Radio General Class, Element 3 (slug `fcc-general`)

Researched 2026-09-25. Raw downloads and extracted text are in the scratch folder:
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/fcc-general/`.
Every fact below was read in a file fetched during this task, or in a file the Technician research saved earlier the same day (47 CFR Part 97 from eCFR, the NEETS modules 1, 2, 10, 11 and 12, the FR 2026-00587 text). The task said to reuse those files; they are cited by their path under `sources/fcc-technician/`. Section 10 lists what could not be checked.

**This deck assumes the Technician deck (`fcc-technician`) as a prerequisite.** Its 224 introduced terms are listed as topic 0 in the term registry (§8b), and the concept inventory below adds only what the General pool needs on top.

The full current pool (423 live questions, all six errata applied) is in `research/deck-briefs/fcc-general-pool.txt`, in the same format as `fcc-technician-pool.txt`. It is public domain; see §2.

**Key file names in scratch:**
- `pool_feb2026.pdf` / `.txt` / `.docx`: the current pool (with the 6th errata, 4 Feb 2026, 87 pp.).
- `pool.json`: the parsed pool (423 questions plus the list of 9 withdrawn IDs); `compact.txt`: one line per question with its keyed answer.
- `pool_nov2024.pdf` / `.txt`: the superseded 5th-errata release (still posted).
- `G7-1.pdf`, `docx/word/media/image1.png`: figure G7-1.
- `ncvec_general.html` / `.txt`, `ncvec_pools.html`, `ncvec_qpc.txt`, `ncvec_home.txt`: NCVEC pages.
- `arrl_*.txt`: ARRL pages (withdrawn questions, question pools, upgrading to General, exam element credit).
- `p97_*.txt`: extracts of 47 CFR Part 97 sections (from `sources/fcc-technician/part97.xml`, eCFR issue 2026-09-22); `p1.1307.xml` / `.txt`: 47 CFR 1.1307 (eCFR API, 2026-09-22).
- `fr_2026-00587.txt`: text of 91 FR 1405 (the 2026 60-metre rule change).
- `neets/mod03…mod17.pdf` / `.txt`: US Navy NEETS modules 3, 6, 7, 8, 9, 13, 14, 16, 17 (new); copies of the text of modules 1, 2, 10, 11, 12; `neets/glossary.json`: all 1,280 NEETS glossary entries, parsed.
- `swpc/*.txt`: NOAA Space Weather Prediction Center pages.
- `parse.py`, `mkpool.py`, `data.py`, `gen.py`: the scripts that parsed the pool and generated §3, §4, §8b and §8c.

---

## 1. Exam facts

| Fact | Value | Exact source words | Source | Changes often? |
|---|---|---|---|---|
| Who sets the exam | The FCC, by rule. General needs Elements 2 and 3. | "(b) General Class operator: Elements 2 and 3;" | 47 CFR 97.501(b), eCFR https://www.ecfr.gov/current/title-47/section-97.501 | No |
| Who writes the pool | The NCVEC Question Pool Committee (QPC) | "The Question Pools are developed and maintained by the Question Pool Committee (QPC) of the NCVEC by FCC instruction and Part 97 Rules & Regulation : Sec. 97.523" | https://www.ncvec.org/index.php/amateur-question-pools | No |
| Current version | 2023–2027 General pool, **effective 1 July 2023 to 30 June 2027** (the lead is confirmed) | Pool PDF syllabus header: "2023-2027 General Class / FCC Element 3 Question Pool Syllabus / Effective 7/01/2023 – 6/30/2027". ARRL: "Valid from July 1, 2023 until June 30, 2027." | Pool PDF p.8: https://www.ncvec.org/downloads/General%20Class%20Pool%20and%20Syllabus%202023-2027%20Public%20Release%20with%206th%20Errata%20Feb%204%202026.pdf ; https://www.arrl.org/question-pools | **Yes: expires in 9 months (§7.1)** |
| Original release | 1 December 2022 | "2023-2027 General Class Question Pool / Originally Released on December 1, 2022" | Pool PDF p.1 (errata sheets) | — |
| Errata | Six errata: 1 Feb 2023 (9 questions reworded, G9C06 and G9D13 withdrawn), 10 Apr 2023 (3 reworded, G6B09 withdrawn), 1 Dec 2023 ("FCC Rule Change", G1C08 and G1C10 withdrawn; G2E12 option D reworded), 6 Mar 2024 (G1E09 withdrawn), 8 Nov 2024 (G8C01 withdrawn), **4 Feb 2026 (G1A04 and G1C09 withdrawn)** | "6th Errata Issued February 4, 2026 / Two Questions Withdrawn From Use: G1A04 – question deleted … G1C09– question deleted" | https://www.ncvec.org/index.php/2023-2027-general-question-pool-release ; pool PDF pp.1–7 | Yes |
| Withdrawn questions | 9: G1A04, G1C08, G1C09, G1C10, G1E09, G6B09, G8C01, G9C06, G9D13. Groups were not renumbered. | ARRL: "General Element 3 Pool (valid from July 1, 2023 until June 30, 2027): G1A04 G1C08 G1C09 G1C10 G1E09 G6B09 G8C01 G9C06 G9D13 The remaining questions in each subelement were not renumbered." | https://www.arrl.org/withdrawn-questions (fetched 2026-09-25); the pool PDF marks each "Question Deleted (section not renumbered)" | Yes: re-check before release |
| Number of questions | 35 | "(b) Element 3: 35 questions concerning the privileges of a General Class operator license." | 97.503(b), https://www.ecfr.gov/current/title-47/section-97.503 | Rarely |
| Pass mark | 26 correct (74.3%, our calculation) (the lead is confirmed) | "The minimum passing score is 26 questions answered correctly." | 97.503(b) | Rarely |
| How questions are drawn | One from each of 35 groups: G1 5, G2 5, G3 3, G4 5, G5 3, G6 2, G7 3, G8 3, G9 4, G0 2 | e.g. "SUBELEMENT G1 – COMMISSION’S RULES [5 Exam Questions – 5 Groups]" | Pool PDF syllabus pp.8–9 | With each pool |
| Pool size | **423 live questions** (432 originally; 9 withdrawn). The printed syllabus says 425 because the G1 header still reads "54 Questions" after the 6th errata. I parsed 423 unique IDs and checked every one against the .docx. | 97.523: "at least 10 times the number of questions required for a single examination" | Pool PDF; https://www.ecfr.gov/current/title-47/section-97.523 (quoted on the NCVEC pools page) | With each errata |
| Format | Multiple choice, 4 answers; key and rule citation not shown on the exam | "Each pool is released with the exact questions and 4 multiple choice answers … On the actual exam, the correct answer letter in parentheses, and any rules citations do not appear with the question number." | https://www.ncvec.org/index.php/amateur-question-pools | No |
| Who administers | At least 3 VEs; for a General exam each must hold Amateur Extra or Advanced | "(a) … a team of at least 3 VEs at an examination session coordinated by a VEC." "(ii) Amateur Extra or Advanced Class in order to administer a General Class operator license examination;" | 97.509(a), (b)(3)(ii) | No |
| Who prepares the question set | An Extra VE, or an Advanced VE for Element 3; questions only from the pool | "(1) Element 3: Advanced Class operator." "(b) Each question set administered to an examinee must utilize questions taken from the applicable question pool." | 97.507(a)(1), (b) | No |
| Prerequisite | A Technician licence or a passed Element 2 | ARRL: "To upgrade to General Class, you must already hold a Technician Class license (or have recently passed the Technician license exam)." Rule: 97.501(b) (Elements 2 and 3) | https://www.arrl.org/upgrading-to-a-general-license (tier C, facts only) | No |
| Time limit | **Not verified** (§10) | — | — | — |
| Retakes | The same question set may not be reused; retake policy is set by each VEC | "The same question set may not be re-administered to the same examinee." | 97.509(f). The Technician brief quotes W5YI's policy (no waiting period, new fee): W5YI VE Manual 2026.1 §2.7 | VEC policy |
| Credit for a passed element | CSCE valid 365 days; the holder may use the higher privileges until the grant or 365 days, whichever first | "…within the previous 365 days, is authorized to exercise the rights and privileges of the higher operator class until final disposition of the application or until 365 days following the passing of the examination, whichever comes first." | 97.9(b); 97.505(b) | No |
| Temporary identification | "AG" after the call sign while using General privileges on a CSCE | "(2) For a control operator who has requested a license modification from Novice or Technician to General Class: AG;" | 97.119(f)(2) | No |
| Element credit for old licences | Expired General/Advanced (or pre-21 Mar 1987 Technician): Element 3 credit; expired Extra: Elements 3 and 4; but Element 2 must be passed again | 97.505(a) table: "(2) Advanced; General; or Technician granted before March 21, 1987 \| Elements 2 and 3 \| Element 3." ARRL: "Previous license holders must pass the current 35-question Technician level exam" | 97.505(a); https://www.arrl.org/exam-element-credit (tier C) | No |
| Licence term, renewal, fees | Same as Technician: 10 years (97.25), renew no sooner than 90 days before expiry (1.949(a)), 2-year grace (97.21(b)), $35 FCC fee (1.1102) | See the Technician brief §1 | research/deck-briefs/fcc-technician.md | Fee: yes |

**Facts that change often:** the pool itself (a new 2027–2031 General pool is due; §7.1), its errata and withdrawn list, the 60 m rules (changed 13 Feb 2026), band-plan frequencies, fees and VEC policies.

---

## 2. Sources

| # | Title | URL | Publisher | Licence, as the source states it | Tier | Use in the deck |
|---|---|---|---|---|---|---|
| S1 | General Class Pool and Syllabus 2023-2027 Public Release with 6th Errata Feb 4 2026 (PDF 87 pp., and DOCX) | https://www.ncvec.org/downloads/General%20Class%20Pool%20and%20Syllabus%202023-2027%20Public%20Release%20with%206th%20Errata%20Feb%204%202026.pdf (.docx at the same path). The page links it as http://ncvec.org/…, which 301-redirects to https. | NCVEC Question Pool Committee | Stated on the release page, not in the PDF: "The NCVEC Question Pool Committee hereby releases into public domain the 2023-2027 General, Element 3, Question pool." (grep of the PDF text finds no "public domain") | **A** | Real pool questions on cards, cited by ID; the syllabus (outline); the key |
| S2 | NCVEC "2023- 2027 General Question Pool Release" page | https://www.ncvec.org/index.php/2023-2027-general-question-pool-release | NCVEC | The public-domain line above; no licence for the page itself | A for the pool; C for page text | Errata history, dates, withdrawn list |
| S3 | Figure G7-1 | https://www.ncvec.org/downloads/G7-1.pdf (1 page); also pool PDF p.87 and the DOCX (`word/media/image1.png`, 1845×1455) | NCVEC QPC | Released with the pool. Pool PDF: "NOTE: One graphic is required for certain questions in section G7 and is included on the following page." The page also says "The final pool doc with all errata is included at the top of this page." | A | Symbol cards (§6) |
| S4 | 47 CFR Part 97 (eCFR issue 2026-09-22), sections 97.3, 97.7, 97.9, 97.13, 97.15, 97.101, 97.111, 97.113, 97.115, 97.119, 97.203, 97.205, 97.221, 97.301, 97.303, 97.305, 97.307, 97.309, 97.311, 97.313, 97.407, 97.501–97.509 | https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-97 (saved as `sources/fcc-technician/part97.xml`) | Office of the Federal Register / FCC | US government work: 17 USC 105, "Copyright protection under this title is not available for any work of the United States Government" (quoted in the Technician brief) | **B** | Rules, band tables, power limits. Cite by section. |
| S5 | 47 CFR 1.1307 (RF exposure evaluation and exemptions) | https://www.ecfr.gov/current/title-47/section-1.1307 (fetched via https://www.ecfr.gov/api/versioner/v1/full/2026-09-22/title-47.xml?section=1.1307) | as S4 | as S4 | B | G0A06, G0A12 (1 mW exemption) |
| S6 | FR 2026-00587, WRC-15 implementation (91 FR 1405, 14 Jan 2026, effective 13 Feb 2026) | https://www.govinfo.gov/content/pkg/FR-2026-01-14/html/2026-00587.htm | FCC / Federal Register | US government work | B | The 60 m change behind the 6th errata (§7.3) |
| S7 | US Navy NEETS (Navy Electricity and Electronics Training Series) Modules 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17 | https://archive.org/details/NEETSModule01 … NEETSModule17 (PDF at https://archive.org/download/NEETSModuleNN/NEETSModuleNN.pdf) | Naval Education and Training Professional Development and Technology Center | Each module's front matter: "DISTRIBUTION STATEMENT A: Approved for public release; distribution is unlimited." (checked in all 9 new modules) | **B** (US government work) | Primer definitions of electronics terms (glossaries in Appendix I) |
| S8 | NOAA SWPC pages: F10.7 cm Radio Emissions; Geomagnetic Storms; Planetary K-index; Solar Flares (Radio Blackouts); Coronal Mass Ejections; Coronal Holes; Ionosphere; HF Radio Communications; Space Weather Glossary | https://www.swpc.noaa.gov/phenomena/f107-cm-radio-emissions ; …/phenomena/geomagnetic-storms ; …/products/planetary-k-index ; …/phenomena/solar-flares-radio-blackouts ; …/phenomena/coronal-mass-ejections ; …/phenomena/coronal-holes ; …/phenomena/ionosphere ; …/impacts/hf-radio-communications ; …/content/space-weather-glossary | NOAA / National Weather Service | US government work (17 USC 105). The pages show no licence line of their own; the F10.7 page credits the data to "National Research Council Canada in partnership with the Natural Resources Canada", so do not copy its chart. | B (text); do not reuse the NRC chart | Solar and ionosphere primers (topics 16–17) |
| S9 | NCVEC "Amateur Question Pools" and "Question Pool Committee" pages | https://www.ncvec.org/index.php/amateur-question-pools ; https://www.ncvec.org/index.php/question-pool-committee | NCVEC | none stated | C | Pool structure and 4-year cycle |
| S10 | ARRL: Withdrawn Questions; Question Pools; Upgrading to a General License; Exam Element Credit | https://www.arrl.org/withdrawn-questions ; https://www.arrl.org/question-pools ; https://www.arrl.org/upgrading-to-a-general-license ; https://www.arrl.org/exam-element-credit | ARRL | "Copyright © 2026 The American Radio Relay League, Inc. All rights reserved. Reproduction of material from any ARRL web page without written permission is strictly prohibited." | **C** | Facts only, in our own words |
| S11 | 2023-2027 General pool with 5th Errata (8 Nov 2024) | https://www.ncvec.org/downloads/General%20Class%20Pool%20and%20Syllabus%202023-2027%20Public%20Release%20with%205th%20Errata%20Nov%208%202024.pdf | NCVEC QPC | as S1 | — | **Do not use.** Superseded; still contains G1A04 and G1C09. Used only for §7.2. |
| S12 | The Technician brief and its sources | research/deck-briefs/fcc-technician.md | this project | — | — | Prerequisite concepts; shared exam facts |

**No ARRL study text (General Class License Manual, etc.) was used, and none should be.** ARRL's upgrade page advertises it; it is tier C at most.

---

## 3. The exam outline (coverage checklist, in the owner's order)

Quoted from the pool syllabus (S1, PDF pp.8–9); the syllabus is public domain, so it may be copied. "Q" is the number of live pool questions in the group, counted from the parsed pool. Every group supplies exactly one exam question.

**G1 Commission’s Rules** (5 exam questions, 5 groups, 52 live pool questions; printed 54, live 52 after the 6th errata)

| Group | Q | Withdrawn | Syllabus text |
|---|---|---|---|
| G1A | 10 | G1A04 | General class control operator frequency privileges; primary and secondary allocations |
| G1B | 11 | — | Antenna structure limitations; good engineering and good amateur practice; beacon operation; prohibited transmissions; retransmitting radio signals |
| G1C | 8 | G1C08, G1C09, G1C10 | Transmitter power regulations; data emission standards; 60-meter operation requirements |
| G1D | 12 | — | Volunteer Examiners and Volunteer Examiner Coordinators; temporary identification; element credit; remote operation |
| G1E | 11 | G1E09 | Control categories; repeater regulations; third-party rules; ITU regions; automatically controlled digital station |

**G2 Operating Procedures** (5 exam questions, 5 groups, 60 live pool questions)

| Group | Q | Withdrawn | Syllabus text |
|---|---|---|---|
| G2A | 12 | — | Phone operating procedures: USB/LSB conventions, breaking into a contact, transmitter setup for voice operation; answering DX stations |
| G2B | 11 | — | Operating effectively; band plans; drills and emergencies; RACES operation |
| G2C | 11 | — | CW operating procedures and procedural signals; Q signals; full break-in |
| G2D | 11 | — | Volunteer Monitor Program; HF operations |
| G2E | 15 | — | Digital mode operating procedures |

**G3 Radio Wave Propagation** (3 exam questions, 3 groups, 37 live pool questions)

| Group | Q | Withdrawn | Syllabus text |
|---|---|---|---|
| G3A | 14 | — | Sunspots and solar radiation; geomagnetic field and stability indices |
| G3B | 12 | — | Maximum Usable Frequency; Lowest Usable Frequency; short path and long path propagation; determining propagation conditions; ionospheric refraction |
| G3C | 11 | — | Ionospheric regions; critical angle and frequency; HF scatter; near vertical incidence skywave (NVIS) |

**G4 Amateur Radio Practices** (5 exam questions, 5 groups, 60 live pool questions)

| Group | Q | Withdrawn | Syllabus text |
|---|---|---|---|
| G4A | 13 | — | Station configuration and operation |
| G4B | 13 | — | Tests and test equipment |
| G4C | 12 | — | Interference to consumer electronics; grounding and bonding |
| G4D | 11 | — | Speech processors; S meters; sideband operation near band edges |
| G4E | 11 | — | Mobile and portable HF stations; alternative energy source operation |

**G5 Electrical Principles** (3 exam questions, 3 groups, 40 live pool questions)

| Group | Q | Withdrawn | Syllabus text |
|---|---|---|---|
| G5A | 12 | — | Reactance; inductance; capacitance; impedance; impedance transformation; resonance |
| G5B | 14 | — | The decibel; current and voltage dividers; electrical power calculations; sine wave root-mean-square (RMS) values; PEP calculations |
| G5C | 14 | — | Resistors, capacitors, and inductors in series and parallel; transformers |

**G6 Circuit Components** (2 exam questions, 2 groups, 23 live pool questions)

| Group | Q | Withdrawn | Syllabus text |
|---|---|---|---|
| G6A | 12 | — | Resistors; capacitors; inductors; rectifiers; solid-state diodes and transistors; vacuum tubes; batteries |
| G6B | 11 | G6B09 | Analog and digital integrated circuits (ICs); microwave ICs (MMICs); display devices; RF connectors; ferrite cores |

**G7 Practical Circuits** (3 exam questions, 3 groups, 38 live pool questions)

| Group | Q | Withdrawn | Syllabus text |
|---|---|---|---|
| G7A | 13 | — | Power supplies; schematic symbols |
| G7B | 11 | — | Digital circuits; amplifiers and oscillators |
| G7C | 14 | — | Transceiver design; filters; oscillators; digital signal processing (DSP) |

**G8 Signals and Emissions** (3 exam questions, 3 groups, 42 live pool questions)

| Group | Q | Withdrawn | Syllabus text |
|---|---|---|---|
| G8A | 14 | — | Carriers and modulation: AM, FM, and single sideband; modulation envelope; digital modulation; overmodulation; link budgets and link margins |
| G8B | 13 | — | Frequency changing; bandwidths of various modes; deviation; intermodulation |
| G8C | 15 | G8C01 | Digital emission modes |

**G9 Antennas and Feed Lines** (4 exam questions, 4 groups, 46 live pool questions)

| Group | Q | Withdrawn | Syllabus text |
|---|---|---|---|
| G9A | 11 | — | Feed lines: characteristic impedance and attenuation; standing wave ratio (SWR) calculation, measurement, and effects; antenna feed point matching |
| G9B | 12 | — | Basic dipole and monopole antennas |
| G9C | 11 | G9C06 | Directional antennas |
| G9D | 12 | G9D13 | Specialized antenna types and applications |

**G0 Electrical and RF Safety** (2 exam questions, 2 groups, 25 live pool questions)

| Group | Q | Withdrawn | Syllabus text |
|---|---|---|---|
| G0A | 12 | — | RF safety principles, rules, and guidelines; routine station evaluation |
| G0B | 13 | — | Station safety: electrical shock, grounding, fusing, interlocks, and wiring; antenna and tower safety |
**Totals:** 10 subelements, 35 groups, 35 exam questions, 423 live pool questions (432 released; 9 withdrawn).

**Weights (derived from the syllabus):**
- G1, G2 and G4 are each 5/35, about 14%.
- G9 is 4/35, about 11%.
- G3, G5, G7 and G8 are each 3/35, about 9%.
- G6 and G0 are each 2/35, about 6%.

**Syllabus items with no question of their own:**
- "voltage dividers" (G5B): only the current divider is asked (G5B02).
- "display devices" (G6B): only the LED is asked (G6B08).
- "rectifiers" (G6A): no G6A question; rectifiers are asked in G7A03–G7A07.
- "Control categories" (G1E): only automatic control of digital stations and repeaters is asked.
- "60-meter operation requirements" (G1C): two questions remain (G1C03, G1C04) after G1A04 and G1C09 were withdrawn.

Cover these as "extra" cards or skip them. The deck still covers every group.

---

## 4. Concept inventory (teaching order)

**Key to the columns:**
- **Def.:** a plain definition taken from the source named. "Pool" means the pool's keyed correct answer (S1); "97.x" and "1.x" mean 47 CFR (S4, S5); NEETS means S7; SWPC means S8.
- **Pre:** terms to teach first. Lower-case terms such as "impedance" or "PEP" are Technician terms (registry topic 0); the others are introduced earlier in this deck.
- **V:** volatile (✔ means it could change with rule amendments, a band plan or the new pool).
- **C/E:** core or extra.
- **Pool IDs:** the questions that test the concept. Every one of the 423 live IDs appears below at least once; this was checked by script (`gen.py`).
- **Concept IDs:** proposed for `concepts/gen.json` (prefix `gen.`). The family is the same as Technician's ("Amateur radio"); if the build wants one family file, merge `tech.` and `gen.` IDs there.

**Teaching order.** Electronics first (topics 1–9), because the rules and operating topics use sideband, bandwidth, PEP and ERP. Then digital modes, rules, operating, propagation, station practice, antennas and safety. Each topic's "New terms" line lists exactly the registry entries for that topic.

### Topic 1: Reactance, impedance and resonance (G5A; 12 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.ac.reactance | Reactance; unit ohm; symbol X | "Opposition to the flow of alternating current caused by capacitance or inductance" (Pool G5A02); NEETS Mod 2 glossary: "The opposition offered to the flow of an alternating current by the inductance, capacitance, or both" | G5A02, G5A03, G5A04, G5A09, G5A11 | impedance, inductance, capacitance |  | C |
| gen.ac.xl-frequency | Inductive reactance rises with frequency | "As the frequency of the applied AC increases, the reactance increases" (Pool G5A05) | G5A05 | reactance |  | C |
| gen.ac.xc-frequency | Capacitive reactance falls with frequency | "As the frequency of the applied AC increases, the reactance decreases" (Pool G5A06) | G5A06 | reactance |  | C |
| gen.ac.impedance-ratio | Impedance as the ratio of voltage to current | "The ratio of voltage to current" (Pool G5A08); NEETS Mod 2 glossary: "The total opposition offered to the flow of an alternating current" | G5A08 | impedance |  | C |
| gen.ac.admittance | Admittance | "the inverse of impedance" (Pool G5A07) | G5A07 | impedance |  | C |
| gen.ac.resonance | Resonance: XL and XC cancel; series LC impedance very low | "Inductive reactance and capacitive reactance cancel" (G5A12); in a series LC circuit "Resonance causes impedance to be very low" (G5A01) | G5A01, G5A12 | reactance, resonant circuit |  | C |
| gen.ac.matching | Impedance matching devices | Transformer, pi-network and a length of transmission line: "All these choices are correct" (Pool G5A10) | G5A10 | impedance, transformer |  | C |

**New terms (registry, topic 1):** reactance (X); inductive reactance (XL); capacitive reactance (XC); admittance; impedance matching; pi-network.

### Topic 2: Decibels, power, RMS and PEP (G5B; 14 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.math.db-3 | 3 dB = a factor of two in power | "Approximately 3 dB" (Pool G5B01) | G5B01 | decibels |  | C |
| gen.math.db-loss | 1 dB loss = 20.6 percent | "20.6 percent" (Pool G5B10) | G5B10 | decibels |  | C |
| gen.circ.current-divider | Parallel branch currents add | Total current "equals the sum of the currents through each branch" (Pool G5B02) | G5B02 | parallel, current |  | C |
| gen.pow.calc | Power: P = E squared / R, P = I x E, P = I squared x R | 400 V into 800 ohms = 200 W (G5B03); 12 V x 0.2 A = 2.4 W (G5B04); 7.0 mA through 1,250 ohms = about 61 mW (G5B05) | G5B03, G5B04, G5B05 | power formula, ohm's law |  | C |
| gen.ac.rms | RMS value | "The RMS value" produces the same power dissipation in a resistor as a DC voltage of the same value (Pool G5B07); NEETS Mod 2 glossary: effective value is "Same as root-mean-square" | G5B07 | alternating current, power |  | C |
| gen.ac.peak-rms | Peak = 1.414 x RMS; peak-to-peak = 2 x peak | 120 V RMS = 339.4 V peak-to-peak (G5B08); 17 V peak = 12 V RMS (G5B09) | G5B08, G5B09 | rms value |  | C |
| gen.pow.pep-calc | PEP from voltage across a load | 200 V p-p across 50 ohms = 100 W PEP (G5B06); 500 V p-p = 625 W (G5B14); 1200 W into 50 ohms = 245 V RMS (G5B12) | G5B06, G5B12, G5B14 | PEP, rms value, peak-to-peak value |  | C |
| gen.pow.pep-average | Unmodulated carrier: PEP equals average power | Ratio of PEP to average power "1.00" (G5B11); average 1060 W gives PEP 1060 W (G5B13) | G5B11, G5B13 | PEP, average power |  | C |

**New terms (registry, topic 2):** rms value (RMS); peak value; peak-to-peak value; average power; sine wave.

### Topic 3: Components in series and parallel; transformers (G5C; 14 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.circ.r-parallel | Resistors in parallel | 10, 20 and 50 ohms in parallel = 5.9 ohms (G5C03); 100 and 200 ohms = about 67 ohms (G5C04) | G5C03, G5C04 | resistor, parallel |  | C |
| gen.circ.c-combos | Capacitors: parallel values add; series combine like parallel resistors | Two 5.0 nF + one 750 pF in parallel = 10.750 nF (G5C08); three 100 uF in series = 33.3 uF (G5C09); 20 uF in series with 50 uF = 14.3 uF (G5C12); to increase capacitance add "A capacitor in parallel" (G5C13) | G5C08, G5C09, G5C12, G5C13 | capacitor, series, parallel |  | C |
| gen.circ.l-combos | Inductors: series values add; parallel combine like parallel resistors | Three 10 mH in parallel = 3.3 mH (G5C10); 20 mH + 50 mH in series = 70 mH (G5C11); to increase inductance add "An inductor in series" (G5C14) | G5C10, G5C11, G5C14 | inductor, series, parallel |  | C |
| gen.xfmr.mutual-inductance | Mutual inductance | Causes voltage across the secondary (Pool G5C01); NEETS Mod 2 glossary: magnetic lines of force from one inductor "link with the turns of the other" | G5C01 | transformer, inductance |  | C |
| gen.xfmr.turns-ratio | Voltage ratio follows the turns ratio | 500-turn primary, 1500-turn secondary, 120 VAC in: 360 V out (G5C06); feeding a 4:1 step-down transformer backwards: "The input voltage is multiplied by 4" (G5C02) | G5C02, G5C06 | turns ratio, primary winding, secondary winding |  | C |
| gen.xfmr.impedance-ratio | Impedance ratio = turns ratio squared | Matching 600 ohms to 50 ohms needs "3.5 to 1" (Pool G5C07) | G5C07 | turns ratio, impedance matching |  | C |
| gen.xfmr.primary-wire | Step-up transformer primary carries the higher current | "To accommodate the higher current of the primary" (Pool G5C05) | G5C05 | step-up transformer |  | C |

**New terms (registry, topic 3):** nanofarad; microfarad; millihenry (mH); primary winding; secondary winding; mutual inductance (M); turns ratio; step-up transformer; step-down transformer.

### Topic 4: Components: batteries, diodes, transistors, tubes, ICs, connectors, ferrites (G6A, G6B; 23 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.comp.lead-acid | 12 V lead-acid battery: minimum discharge 10.5 V | "10.5 volts" (Pool G6A01) | G6A01 | battery |  | C |
| gen.comp.internal-resistance | Low internal resistance allows high discharge current | "High discharge current" (Pool G6A02) | G6A02 | battery, resistance |  | C |
| gen.comp.diode-threshold | Forward threshold: germanium 0.3 V, silicon 0.7 V | Pool G6A03, G6A05 | G6A03, G6A05 | diode |  | C |
| gen.comp.capacitor-types | Electrolytic: high capacitance for its volume; low-voltage ceramic: low cost | Pool G6A04, G6A08 | G6A04, G6A08 | capacitor |  | C |
| gen.comp.wire-wound | Wire-wound resistors have inductance, so avoid them in RF circuits | "The resistor's inductance could make circuit performance unpredictable" (Pool G6A06) | G6A06 | resistor, inductance |  | C |
| gen.comp.bjt-switch | A BJT switch works between saturation and cutoff | "Saturation and cutoff" (Pool G6A07) | G6A07 | bipolar junction transistor |  | C |
| gen.comp.mosfet | MOSFET: gate insulated from the channel | "The gate is separated from the channel by a thin insulating layer" (Pool G6A09); NEETS Mod 7 glossary: gate "insulated from the channel area by silicon-oxide" | G6A09 | FET |  | C |
| gen.comp.tube-grids | Vacuum tube: control grid regulates cathode-to-plate flow; screen grid cuts grid-to-plate capacitance | Pool G6A10, G6A12; NEETS Mod 6 glossary (control grid "regulate[s] the plate current") | G6A10, G6A12 | electron, anode and cathode |  | C |
| gen.comp.self-resonance | Above its self-resonant frequency an inductor becomes capacitive | Pool G6A11 | G6A11 | inductor, resonant frequency |  | C |
| gen.comp.ferrite | Ferrite cores: mix sets frequency performance; toroid advantages; bead adds impedance to common-mode current | Pool G6B01, G6B05 ("All these choices are correct"), G6B10; NEETS Mod 11 glossary: ferrite has "both magnetic properties and resistance to current flow" | G6B01, G6B05, G6B10 | inductor, ferrite choke |  | C |
| gen.comp.mmic | MMIC | "Monolithic Microwave Integrated Circuit" (Pool G6B02) | G6B02 | integrated circuit, microwave |  | C |
| gen.comp.cmos-ttl | CMOS vs TTL: CMOS has low power consumption | Pool G6B03 | G6B03 | integrated circuit |  | C |
| gen.comp.op-amp | An op amp is an analog IC | "Analog" (Pool G6B06); NEETS Mod 8 glossary: very high gain, very high input impedance, very low output impedance | G6B06 | integrated circuit, gain |  | C |
| gen.comp.led-bias | An LED emits light when forward biased | Pool G6B08 | G6B08 | LED |  | C |
| gen.comp.connectors | RF connectors: BNC to about 4 GHz; type N moisture-resistant to 10 GHz; SMA small threaded, several GHz; RCA phono for low frequency or DC | Pool G6B04, G6B07, G6B11, G6B12 | G6B04, G6B07, G6B11, G6B12 | rf connector |  | C |
| gen.comp.display | Display devices (syllabus item G6B) | In the syllabus; the only related question is the LED (G6B08) | — | LED |  | E |

**New terms (registry, topic 4):** lead-acid battery; internal resistance; forward threshold voltage; germanium (Ge); silicon (Si); electrolytic capacitor; ceramic capacitor; wire-wound resistor; saturation; cutoff; MOSFET; vacuum tube; plate; control grid; screen grid; self-resonant frequency; ferrite; toroid; common-mode current; MMIC; CMOS; TTL; analog; operational amplifier (op amp); forward bias; BNC connector (BNC); type N connector; SMA connector (SMA); RCA phono connector (RCA).

### Topic 5: Power supplies and schematic symbols (G7A; 13 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.ps.bleeder | Bleeder resistor discharges the filter capacitors when power is removed | Pool G7A01; NEETS Mod 1 glossary: "A resistor which is used to draw a fixed current" | G7A01 | filter capacitor, resistor |  | C |
| gen.ps.filter | Power supply filter network: capacitors and inductors | Pool G7A02; NEETS Mod 6 glossary (filter) | G7A02 | capacitor, inductor |  | C |
| gen.ps.rectifiers | Half-wave (one diode, 180 degrees) vs full-wave (two diodes and a centre-tapped transformer, 360 degrees); unfiltered full-wave output = DC pulses at twice the input frequency | Pool G7A03, G7A04, G7A05, G7A06, G7A07; NEETS Mod 6/7 glossary: rectifier converts AC to pulsating DC | G7A03, G7A04, G7A05, G7A06, G7A07 | rectifier, diode, transformer |  | C |
| gen.ps.switchmode | Switchmode supply: high-frequency operation allows smaller components | Pool G7A08 | G7A08 | regulator |  | C |
| gen.sch.fig-g71 | Figure G7-1 symbols: 1 FET, 2 NPN junction transistor, 5 Zener diode, 6 solid core transformer, 7 tapped inductor | Pool G7A09-G7A13 | G7A09, G7A10, G7A11, G7A12, G7A13 | schematic, FET, bipolar junction transistor, transformer, inductor |  | C |
| gen.comp.zener | Zener diode | NEETS Mod 7 glossary: "A PN-junction diode designed to operate in the reverse-bias breakdown region" | G7A10 | diode |  | C |

**New terms (registry, topic 5):** bleeder resistor; filter network; half-wave rectifier; full-wave rectifier; center-tapped transformer; switchmode power supply; linear power supply; Zener diode; NPN junction transistor (NPN); tapped inductor; solid core transformer.

### Topic 6: Amplifiers, oscillators and digital logic (G7B; 11 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.amp.neutralization | Neutralizing an amplifier eliminates self-oscillation | "To eliminate self-oscillations" (Pool G7B01); NEETS Mod 8 glossary: "counteracting ... the effects of interelectrode capacitance" | G7B01 | RF power amplifier |  | C |
| gen.amp.classes | Amplifier classes: A conducts 100% of the time; C is most efficient and suits FM | Pool G7B02, G7B04, G7B11; NEETS Mod 7 glossary: Class C collector current "cut off for more than one-half of the input signal" | G7B02, G7B04, G7B11 | gain, transistor |  | C |
| gen.amp.linear | Linear amplifier preserves the input waveform | Pool G7B10; NEETS Mod 7 glossary: linear = output "in direct proportion to the input" | G7B10 | RF power amplifier |  | C |
| gen.amp.efficiency | Efficiency = RF output power / DC input power | Pool G7B08 | G7B08 | power |  | C |
| gen.dig.and-gate | Two-input AND gate: output high only when both inputs are high | Pool G7B03; NEETS Mod 13 p.2-6: "requires all inputs to be TRUE at the same time" | G7B03 | digital |  | C |
| gen.dig.counter | A 3-bit binary counter has 8 states | Pool G7B05 | G7B05 | bit |  | C |
| gen.dig.shift-register | Shift register | "A clocked array of circuits that passes data in steps along the array" (Pool G7B06) | G7B06 | bit |  | C |
| gen.osc.basic | Sine wave oscillator = filter + amplifier in a feedback loop; LC oscillator frequency set by L and C in the tank circuit | Pool G7B07, G7B09; NEETS Mod 9 glossary: tank circuit "A tuned circuit used to temporarily store energy" | G7B07, G7B09 | oscillator, resonant circuit |  | C |

**New terms (registry, topic 6):** self-oscillation; neutralization; Class A amplifier; Class B amplifier; Class AB amplifier; Class C amplifier; linear amplifier; amplifier efficiency; digital; AND gate; bit; binary counter; shift register; feedback; tank circuit.

### Topic 7: Transmitter and receiver design, filters, DSP and SDR (G7C; 14 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.xcvr.balanced-modulator | Balanced modulator gives double-sideband RF; a filter then selects one sideband | Pool G7C02, G7C01 | G7C01, G7C02 | sideband, modulation |  | C |
| gen.xcvr.matching-transformer | Impedance matching transformer at the transmitter output presents the desired impedance | Pool G7C03 | G7C03 | impedance matching |  | C |
| gen.rx.product-detector | Product detector extracts the signal in an SSB receiver | Pool G7C04; NEETS Mod 17 p.5-7: "The product detector demodulates ssb, cw, and fsk signals" | G7C04 | SSB |  | C |
| gen.xcvr.dds | DDS: variable output frequency with crystal-oscillator stability | Pool G7C05 | G7C05 | oscillator |  | C |
| gen.dsp.filter | DSP filters: a wide range of bandwidths and shapes | Pool G7C06 | G7C06 | bandwidth |  | C |
| gen.filter.terms | Filter terms: insertion loss (inside the passband), cutoff frequency (half-power), ultimate rejection, bandwidth between the half-power points | Pool G7C07, G7C12, G7C13, G7C14 | G7C07, G7C12, G7C13, G7C14 | decibels, bandwidth |  | C |
| gen.rx.sensitivity-factors | Receiver sensitivity depends on input gain, demodulator bandwidth and noise figure | "All these choices are correct" (Pool G7C08) | G7C08 | sensitivity |  | C |
| gen.sdr.iq | SDR I and Q signals are 90 degrees apart; I-Q allows all modulation types; software does filtering, detection and modulation | Pool G7C09, G7C10, G7C11 | G7C09, G7C10, G7C11 | software-defined radio |  | C |

**New terms (registry, topic 7):** balanced modulator; double sideband (DSB); product detector; direct digital synthesizer (DDS); crystal oscillator; digital signal processing (DSP); passband; insertion loss; low-pass filter; band-pass filter; cutoff frequency; half-power point; ultimate rejection; noise figure; demodulator; software-defined radio (SDR); I-Q modulation.

### Topic 8: Modulation (G8A; 14 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.mod.fsk | Direct binary FSK: change an oscillator's frequency with a digital signal | Pool G8A01 | G8A01 | oscillator, modulation |  | C |
| gen.mod.pm | Phase modulation; a reactance modulator on an RF amplifier stage produces PM | Pool G8A02, G8A04 | G8A02, G8A04 | modulation, fm |  | C |
| gen.mod.fm | Frequency modulation changes the instantaneous frequency | Pool G8A03 | G8A03 | fm |  | C |
| gen.mod.am | AM varies the instantaneous power; the envelope joins the peaks | Pool G8A05, G8A11 | G8A05, G8A11 | amplitude modulation |  | C |
| gen.mod.ssb-narrowest | SSB is the narrowest phone emission of those listed | Pool G8A07 | G8A07 | SSB, bandwidth |  | C |
| gen.mod.overmodulation | Overmodulation: excessive bandwidth; flat-topping from excessive drive or speech level | Pool G8A08, G8A10; NEETS Mod 12 glossary (overmodulation) | G8A08, G8A10 | amplitude modulation, bandwidth |  | C |
| gen.mod.psk | QPSK: 0, 90, 180 and 270 degree shifts carry pairs of bits; QPSK31 is sideband sensitive, error-correcting, about as wide as BPSK31 | Pool G8A12, G8A06 | G8A06, G8A12 | psk, bit |  | C |
| gen.mod.ft8 | FT8 uses 8-tone frequency shift keying | Pool G8A09 | G8A09 | ft8 |  | C |
| gen.link.budget | Link budget and link margin | Budget: "The sum of transmit power and antenna gains minus system losses as seen at the receiver" (G8A13). Margin: "The difference between received power level and minimum required signal level" (G8A14) | G8A13, G8A14 | antenna gain, decibels |  | C |

**New terms (registry, topic 8):** frequency shift keying (FSK); phase modulation (PM); reactance modulator; modulation envelope; overmodulation; flat-topping; QPSK; BPSK; link budget; link margin.

### Topic 9: Mixing, bandwidth, deviation and intermodulation (G8B; 13 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.mix.lo-if | A mixer's LO is tuned to convert signals to the IF; the output holds the sum and difference; mixing = heterodyning | Pool G8B01, G8B11, G8B03; NEETS Mod 12 glossary: heterodyning is "Mixing two frequencies across a nonlinear impedance" | G8B01, G8B03, G8B11 | mixer, oscillator |  | C |
| gen.mix.image | Image response: interference from a signal twice the IF away | Pool G8B02; NEETS Mod 17 glossary: image frequency | G8B02 | intermediate frequency |  | C |
| gen.tx.multiplier | Multiplier stage generates a harmonic to reach the operating frequency | Pool G8B04; NEETS Mod 12 glossary | G8B04 | harmonic |  | C |
| gen.imd | Intermodulation: two signals in a non-linear circuit; odd-order products (e.g. 2F1-F2) lie closest to the originals | Pool G8B12, G8B05, G8B13 | G8B05, G8B12, G8B13 | spurious emission |  | C |
| gen.fm.bandwidth | FM bandwidth = 2 x (deviation + modulating frequency) | 5 kHz deviation, 3 kHz modulating frequency = 16 kHz (Pool G8B06) | G8B06 | deviation, bandwidth |  | C |
| gen.fm.multiplied-deviation | Deviation at the oscillator = output deviation / multiplication factor | 12.21 MHz oscillator, 146.52 MHz output, 5 kHz deviation: 416.7 Hz (Pool G8B07) | G8B07 | deviation, frequency multiplier |  | C |
| gen.mode.duty-cycle | High-duty-cycle modes can exceed a transmitter's average power rating | Pool G8B08 | G8B08 | duty cycle |  | C |
| gen.rx.bandwidth-match | Receiver bandwidth matched to the mode gives the best SNR | Pool G8B09 | G8B09 | bandwidth |  | C |
| gen.dig.symbol-rate | Higher symbol rates need wider bandwidth | Pool G8B10 | G8B10 | bandwidth |  | C |

**New terms (registry, topic 9):** local oscillator (LO); intermediate frequency (IF); heterodyning; image response; frequency multiplier; intermodulation; odd-order product; modulating frequency; signal-to-noise ratio; symbol rate.

### Topic 10: Digital modes: how they work and how to operate them (G8C, G2E; 30 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.dig.wspr | WSPR: low-power beacon mode for assessing HF propagation | Pool G8C02 | G8C02 | beacon, digital mode |  | C |
| gen.dig.packet-header | The header of a packet frame holds routing and handling information | Pool G8C03 | G8C03 | packet radio |  | C |
| gen.dig.baudot | Baudot: a 5-bit code with start and stop bits | Pool G8C04; 97.309(a)(1): "The 5-unit, start-stop, International Telegraph Alphabet No. 2 ... (commonly known as 'Baudot')" | G8C04 | bit |  | C |
| gen.dig.arq-nak | ARQ: a NAK requests retransmission; too many attempts drop the connection | Pool G8C05, G8C06 | G8C05, G8C06 | arq |  | C |
| gen.dig.fec | FEC corrects errors by sending redundant information | Pool G8C10 | G8C10 | digital mode |  | C |
| gen.dig.ft8-ops | FT8: very low SNR; report +3 = +3 dB in 2.5 kHz; clock within about 1 s; reply in the alternate time slot; USB; about 14.074-14.077 MHz | Pool G8C07, G8C15, G2E07, G2E04, G2E05, G2E15 | G8C07, G8C15, G2E04, G2E05, G2E07, G2E15 | ft8, signal-to-noise ratio | ✔ yes (band-plan frequency) | C |
| gen.dig.psk31 | PSK31 uses Varicode; upper-case letters take longer codes | Pool G8C08, G8C12 | G8C08, G8C12 | psk |  | C |
| gen.dig.mesh | Mesh networks re-route around a failed node; AREDN gives high-speed data in emergencies and events | Pool G8C09, G2E11 | G8C09, G2E11 | mesh network |  | C |
| gen.dig.mark-space | FSK's two frequencies are mark and space | Pool G8C11 | G8C11 | frequency shift keying |  | C |
| gen.dig.waterfall | Waterfall: frequency horizontal, strength as intensity, time vertical; vertical lines beside a signal = overmodulation | Pool G8C14, G8C13 | G8C13, G8C14 | overmodulation |  | C |
| gen.dig.voice | Digital voice modes: DMR, D-STAR and System Fusion | Pool G8C16 | G8C16 | dmr |  | C |
| gen.dig.rtty | RTTY via AFSK on SSB uses LSB; 170 Hz shift; failure to decode: reversed mark/space, wrong baud rate or wrong sideband | Pool G2E01, G2E06, G2E14 | G2E01, G2E06, G2E14 | mark and space, sideband |  | C |
| gen.dig.winlink | Winlink: email over radio, a form of packet, VHF and HF; VARA protocol; gateway = Remote Message Server; connect on the published frequency; PACTOR links only two stations | Pool G2E12, G2E02, G2E13, G2E10, G2E09, G2E03 | G2E02, G2E03, G2E09, G2E10, G2E12, G2E13 | winlink, gateway |  | C |
| gen.dig.20m-segment | Most 20 m digital activity lies between 14.070 and 14.100 MHz | Pool G2E08 | G2E08 | band plan | ✔ yes (band plan) | C |

**New terms (registry, topic 10):** WSPR; header; Baudot code; NAK; forward error correction (FEC); time slot; FT4; JT65; JT9; PSK31; Varicode; AREDN; mark and space; waterfall display; D-STAR; System Fusion; RTTY; AFSK; baud; PACTOR; VARA; Remote Message Server (RMS).

### Topic 11: General privileges: bands, emissions and power (G1A, G1C; 18 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.priv.bands | General HF privileges (97.301(d)): all of 160, 60, 30, 17, 12, 10 m; parts of 80/75, 40, 20, 15 m; Extra-only segments on 80, 40, 20, 15 m | 97.301(b),(d) tables; Pool G1A01, G1A05, G1A08, G1A09 | G1A01, G1A05, G1A08, G1A09 | privileges, amateur band, licence class | ✔ | C |
| gen.priv.upper-voice | Where the General voice segment is partial, it is the upper part | "The upper frequency portion" (Pool G1A11); 97.301(d) (e.g. 75 m 3.800-4.000, 40 m 7.175-7.300 MHz Region 2) | G1A11 | privileges, phone | ✔ | C |
| gen.priv.30m | 30 m: no phone or image; 200 W PEP limit | 97.305(c) lists only "RTTY, data" for 30 m; 97.313(c)(1): 200 W PEP on 10.10-10.15 MHz; Pool G1A02, G1A03, G1C01 | G1A02, G1A03, G1C01 | PEP, phone, image emission | ✔ | C |
| gen.priv.10m | 10 m: CW anywhere; repeaters only above 29.5 MHz | 97.305(a) (CW on any authorised frequency); 97.205(b) excludes 28.0-29.5 MHz; Pool G1A07, G1A10 | G1A07, G1A10 | repeater, CW | ✔ | C |
| gen.priv.secondary | Secondary user: no harmful interference to, and accept interference from, primary users | 97.303 intro; Pool G1A06 | G1A06 | secondary service, harmful interference |  | C |
| gen.pwr.max | 1500 W PEP output is the maximum (12 m, 10 m, 160 m); power is measured as PEP output | 97.313(b); Pool G1C02, G1C05, G1C06, G1C11 | G1C02, G1C05, G1C06, G1C11 | PEP | ✔ | C |
| gen.priv.60m | 60 m: emissions no wider than 2.8 kHz; non-dipole antennas need gain records | 97.303(h)(3): "emissions do not occupy more than 2.8 kHz"; 97.313(i): "Licensees using other antennas must maintain in their station records ... the antenna gain"; Pool G1C03, G1C04 | G1C03, G1C04 | ERP, dipole, antenna gain | ✔ yes (changed 13 Feb 2026) | C |
| gen.priv.60m-2026 | 60 m after 13 Feb 2026: 5351.5-5366.5 kHz band at 9.15 W ERP plus four channels at 100 W ERP | 97.303(h)(3); 97.313(i); 91 FR 1405 | — | ERP | ✔ | E |
| gen.dig.protocol-doc | A new digital protocol must be publicly documented before use | Pool G1C07; 97.309(a)(4): "any technique whose technical characteristics have been documented publicly" | G1C07 | digital mode |  | C |

**New terms (registry, topic 11):** General class; Amateur Extra class; Advanced class; MF; image emission; data emission; primary service; ERP; 60-meter channel; digital protocol.

### Topic 12: Station rules: antennas, beacons, transmissions, repeaters, third parties, automatic control (G1B, G1E; 22 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.rules.antenna-height | Antenna structures over 200 ft (60.96 m), or near a public-use airport, need FAA notice and FCC registration | 97.15(a); Pool G1B01 | G1B01 | antenna |  | C |
| gen.rules.prb1 | PRB-1: local rules must reasonably accommodate amateur communications and be the minimum practicable regulation | 97.15(b); Pool G1B06 | G1B06 | antenna structure |  | C |
| gen.rules.beacon | Beacons: purpose is observation of propagation and reception; one per band per location; 100 W; automatic HF beacons only at 28.20-28.30 MHz; beacon frequencies 14.100, 18.110, 21.150, 24.930, 28.200 MHz | 97.3(a)(9); 97.203(b),(c),(d); Pool G1B02, G1B03, G1B09, G1B10, G1E10 | G1B02, G1B03, G1B09, G1B10, G1E10 | beacon |  | C |
| gen.rules.retransmit | Occasional retransmission of US government weather and propagation forecasts is allowed | 97.113(c); Pool G1B04 | G1B04 | broadcasting |  | C |
| gen.rules.one-way | One-way transmissions allowed include Morse code practice | 97.111(b)(5); Pool G1B05 | G1B05 | broadcasting |  | C |
| gen.rules.abbreviations | Abbreviations and procedural signals are allowed if they do not obscure the meaning | Pool G1B07; 97.113(a)(4) bars messages "encoded for the purpose of obscuring their meaning" | G1B07 | q signals |  | C |
| gen.rules.foreign | Contacts with any country except those that have notified the ITU of objection | 97.111(a)(1); Pool G1B08 | G1B08 | ITU Region |  | C |
| gen.rules.good-practice | The FCC determines good engineering and good amateur practice | Pool G1B11; 97.101(a) | G1B11 | — |  | C |
| gen.rules.repeater-10m | A 10 m repeater may retransmit a Technician's 2 m signal only if the repeater's control operator is General or higher | Pool G1E02; 97.205(b) | G1E02 | repeater, control operator |  | C |
| gen.rules.auto-digital | Automatically controlled digital stations: 6 m and shorter plus limited HF segments; outside those, the initiating station must be under local or remote control | 97.221(b),(c); Pool G1E11, G1E03 | G1E03, G1E11 | automatic control, local control, remote control |  | C |
| gen.rules.interference-steps | Specific steps are required within 1 mile of an FCC monitoring station, on secondary bands, and with spread spectrum | "All these choices are correct" (Pool G1E04); 97.13(b), 97.303, 97.311(b) | G1E04 | harmful interference |  | C |
| gen.rules.third-party | Third parties: revoked licensees may not participate; messages under an agreement must relate to amateur radio, personal remarks or emergencies; allowed via remote control whenever allowed at all | 97.115(b)(2), 97.115(a)(2), 97.117; Pool G1E01, G1E05, G1E12 | G1E01, G1E05, G1E12 | third-party communications |  | C |
| gen.rules.itu-region2 | North and South America are ITU Region 2 | Pool G1E06 | G1E06 | ITU Region |  | C |
| gen.rules.wifi | No part of 2.4 GHz may be used to talk to unlicensed Wi-Fi stations | "No part" (Pool G1E07) | G1E07 | — |  | C |
| gen.pwr.ss | Spread spectrum: 10 W PEP maximum | 97.313(j): "10 W PEP when the station is transmitting a SS emission type"; Pool G1E08 | G1E08 | PEP |  | C |

**New terms (registry, topic 12):** antenna structure; PRB-1; good amateur practice; propagation beacon; one-way transmission; procedural signal (prosign); retransmission; third-party agreement; automatically controlled digital station; FCC monitoring station; spread spectrum (SS); Wi-Fi.

### Topic 13: Volunteer examiners, element credit, temporary identification, remote operation (G1D; 12 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.ve.accreditation | VEs are accredited by a VEC; minimum age 18; a non-US citizen VE must hold a General or higher FCC licence | 97.509(b)(1),(2),(3); Pool G1D07, G1D10, G1D08 | G1D07, G1D08, G1D10 | — |  | C |
| gen.ve.general-ve | A General VE may give Technician exams only; at least three General-or-higher VEs observe a Technician exam | 97.509(a),(b)(3)(i); Pool G1D02, G1D04 | G1D02, G1D04 | Volunteer Examiner |  | C |
| gen.lic.csce | A CSCE counts for 365 days and lets its holder use the higher privileges until the grant or 365 days | 97.9(b); 97.505(b); Pool G1D03, G1D09 | G1D03, G1D09 | CSCE |  | C |
| gen.lic.ag | Identify with "AG" after the call sign when using General privileges before the upgrade shows in the database | 97.119(f)(2); Pool G1D06 | G1D06 | station identification, self-assigned indicator |  | C |
| gen.lic.expired-credit | Holders of expired General, Advanced or Extra licences get partial credit, but must pass the current Element 2 | 97.505(a) table; Pool G1D01, G1D11 | G1D01, G1D11 | examination element |  | C |
| gen.remote.licence | Remote operation: a US station controlled from abroad needs a US licence; a foreign station controlled from the US follows only that country's rules | 97.7; Pool G1D05, G1D12 | G1D05, G1D12 | remote control |  | C |
| gen.exam.element3 | Element 3: 35 questions, 26 to pass; General requires Elements 2 and 3 | 97.501(b), 97.503(b) | — | — |  | E |

**New terms (registry, topic 13):** Volunteer Examiner (VE); Volunteer Examiner Coordinator (VEC); accreditation; examination element; element credit; AG indicator (AG).

### Topic 14: Phone and CW operating (G2A, G2C; 23 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.op.sideband-convention | USB at 14 MHz and up (including 17 and 12 m) and on VHF/UHF SSB; LSB on 160, 75 and 40 m by accepted practice | Pool G2A01, G2A02, G2A03, G2A04, G2A09 | G2A01, G2A02, G2A03, G2A04, G2A09 | upper sideband, SSB |  | C |
| gen.op.ssb | SSB: the most common HF voice mode; less bandwidth and greater power efficiency; one sideband sent, the other and the carrier suppressed | Pool G2A05, G2A06, G2A07 | G2A05, G2A06, G2A07 | SSB, sideband |  | C |
| gen.op.break-in-phone | To break into a phone contact, say your call sign once | Pool G2A08 | G2A08 | call sign |  | C |
| gen.op.vox | VOX allows hands-free operation | Pool G2A10 | G2A10 | PTT |  | C |
| gen.op.cq-dx | Only stations outside the lower 48 states should answer a US station's "CQ DX" | Pool G2A11 | G2A11 | cq |  | C |
| gen.op.alc-adjust | ALC is set with the transmit audio or microphone gain | Pool G2A12 | G2A12 | automatic level control |  | C |
| gen.cw.qsk | Full break-in (QSK): receive between code characters and elements | Pool G2C01 | G2C01 | morse code |  | C |
| gen.cw.prosigns | KN = listening only for a specific station; AR = end of a formal message | Pool G2C03, G2C08 | G2C03, G2C08 | procedural signal |  | C |
| gen.cw.q-signals | QRS? send slower; QRL? are you busy / is this frequency in use; QSL received and understood; QRN troubled by static; QRV ready to receive | Pool G2C02, G2C04, G2C09, G2C10, G2C11 | G2C02, G2C04, G2C09, G2C10, G2C11 | q signals |  | C |
| gen.cw.speed | Answer a CQ at your comfortable copying speed, no faster than the CQ | Pool G2C05 | G2C05 | cq |  | C |
| gen.cw.zero-beat | Zero beat: match your transmit frequency to the received signal | Pool G2C06 | G2C06 | CW |  | C |
| gen.cw.rst-c | A "C" added to an RST report means a chirpy or unstable signal | Pool G2C07 | G2C07 | signal report |  | C |

**New terms (registry, topic 14):** VOX; CQ DX; automatic level control (ALC); full break-in (QSK); KN; AR; QRS; QRL; QSL; QRN; QRV; zero beat; RST report (RST); signal report.

### Topic 15: Operating practice, emergencies, Volunteer Monitors and HF operation (G2B, G2D; 22 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.op.priority | No station has priority access to any frequency, except during emergencies | 97.101(b),(c); Pool G2B01 | G2B01 | — |  | C |
| gen.op.distress | If a station in distress breaks in, acknowledge it and find out what help is needed | Pool G2B02 | G2B02 | — |  | C |
| gen.op.interference | Resolve interference from changed propagation in a mutually acceptable way | Pool G2B03 | G2B03 | interference |  | C |
| gen.op.separation | Minimum separation: CW 150-500 Hz; SSB 2-3 kHz | Pool G2B04, G2B05 | G2B04, G2B05 | CW, SSB |  | C |
| gen.op.qrl | Before calling CQ: send QRL? on CW or ask if the frequency is in use on phone, then your call sign | Pool G2B06 | G2B06 | QRL |  | C |
| gen.op.band-plan | Follow the voluntary band plan; 50.1-50.125 MHz is for contacts with stations outside the 48 contiguous states | Pool G2B07, G2B08 | G2B07, G2B08 | band plan | ✔ yes (band plan) | C |
| gen.op.races | RACES control operator must hold an FCC amateur licence; drills limited to 1 hour a week | 97.407(a),(d)(4); Pool G2B09, G2B11 | G2B09, G2B11 | RACES |  | C |
| gen.op.net-backup | Good net management: have a backup frequency | Pool G2B10 | G2B10 | net control station |  | C |
| gen.vm.program | Volunteer Monitor Program: formally enlisted amateurs who monitor for rule violations and encourage self-regulation; they localise stations by comparing beam headings | Pool G2D01, G2D02, G2D03 | G2D01, G2D02, G2D03 | — |  | C |
| gen.op.paths | Azimuthal projection map shows true bearings and distances; long path = 180 degrees from the short-path heading | Pool G2D04, G2D06 | G2D04, G2D06 | beam antenna |  | C |
| gen.op.cq-hf | HF CQ: repeat CQ a few times, "this is", your call sign a few times, then listen | Pool G2D05 | G2D05 | cq |  | C |
| gen.op.nato | NATO phonetic alphabet: Alpha, Bravo, Charlie, Delta | Pool G2D07 | G2D07 | phonetic alphabet |  | C |
| gen.op.log | Keep a log to help answer an FCC request about your station | Pool G2D08 | G2D08 | — |  | C |
| gen.op.contest-id | In HF contests, identify according to normal FCC rules | Pool G2D09 | G2D09 | contest, station identification |  | C |
| gen.op.qrp | QRP = low-power transmit operation | Pool G2D10 | G2D10 | q signals |  | C |
| gen.op.signal-reports | Signal reports at the start of an HF contact let each station operate to conditions | Pool G2D11 | G2D11 | — |  | C |

**New terms (registry, topic 15):** priority access; station in distress; Volunteer Monitor Program; azimuthal projection map; short path; long path; NATO phonetic alphabet; station log; QRP.

### Topic 16: The Sun and the geomagnetic field (G3A; 14 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.sun.sunspots | More sunspots: better propagation on the higher frequencies; 15, 12 and 10 m least reliable at low solar activity; 20 m supports worldwide daytime propagation at any point in the cycle | Pool G3A01, G3A04, G3A07; SWPC glossary: sunspots are "concentrations of magnetic flux" | G3A01, G3A04, G3A07 | sunspot cycle, propagation |  | C |
| gen.sun.flare-sid | Solar flare UV and X-rays arrive in about 8 minutes; a sudden ionospheric disturbance hits lower frequencies harder | Pool G3A03, G3A02; SWPC (flares): effects occur "at the same time the event is observed"; D-layer absorption degrades HF | G3A02, G3A03 | ionosphere |  | C |
| gen.sun.sfi | Solar flux index: solar radiation at 10.7 cm | Pool G3A05; SWPC: "The solar radio flux at 10.7 cm (2800 MHz) is an excellent indicator of solar activity" | G3A05 | wavelength |  | C |
| gen.geo.storm | Geomagnetic storm: a temporary disturbance of Earth's field; degrades high-latitude HF; auroras can reflect VHF | Pool G3A06, G3A08, G3A09; SWPC: "a major disturbance of Earth's magnetosphere" | G3A06, G3A08, G3A09 | auroral propagation |  | C |
| gen.sun.rotation | A 26- to 28-day cycle follows the rotation of the Sun's surface layers | Pool G3A10; SWPC coronal holes: "several solar rotations (27-day periods)" | G3A10 | — |  | C |
| gen.sun.cme | A CME takes 15 hours to several days to affect propagation | Pool G3A11; SWPC: fastest CMEs "in as little as 15-18 hours. Slower CMEs can take several days" | G3A11 | — |  | C |
| gen.geo.k-a | K-index: short-term stability of the geomagnetic field; A-index: long-term stability | Pool G3A12, G3A13; SWPC Kp page: K-index "quantifies disturbances in the horizontal component of earth's magnetic field ... 0-9" | G3A12, G3A13 | geomagnetic field |  | C |
| gen.sun.coronal-holes | Charged particles from coronal holes disturb HF | Pool G3A14; SWPC: coronal holes are sources of high-speed solar wind | G3A14 | — |  | C |

**New terms (registry, topic 16):** sunspot number; solar flare; X-ray; sudden ionospheric disturbance (SID); solar flux index; geomagnetic field; geomagnetic storm; solar rotation; coronal mass ejection (CME); K-index (K); A-index (A); coronal hole.

### Topic 17: The ionosphere: MUF, LUF, regions, scatter and NVIS (G3B, G3C; 23 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.prop.echo | Short- and long-path signals together can give a slightly delayed echo | Pool G3B01 | G3B01 | short path, long path |  | C |
| gen.prop.muf | MUF: highest usable frequency between two points; depends on path, time, season, solar radiation and disturbances; just below it has the least attenuation; below MUF and above LUF waves are refracted back | Pool G3B08, G3B02, G3B03, G3B05; NEETS Mod 10 glossary; SWPC glossary | G3B02, G3B03, G3B05, G3B08 | ionosphere, refraction |  | C |
| gen.prop.luf | LUF: lowest usable frequency between two points; below it signals are attenuated; if LUF exceeds MUF, ordinary skywave fails | Pool G3B07, G3B06, G3B11 | G3B06, G3B07, G3B11 | maximum usable frequency |  | C |
| gen.prop.check | Check propagation with an internet network of automated receiving stations | Pool G3B04 | G3B04 | propagation |  | C |
| gen.prop.hop | One hop: F2 about 2,500 miles, E about 1,200 miles; F2 skip is longest because F2 is highest | Pool G3B09, G3B10, G3C03 | G3B09, G3B10, G3C03 | skip, f region |  | C |
| gen.prop.summer-noise | Lower HF in summer: high atmospheric noise (static) | Pool G3B12 | G3B12 | QRN |  | C |
| gen.prop.d-region | D region: closest to Earth; absorbs 160-40 m signals (below 10 MHz) in daylight | Pool G3C01, G3C05, G3C11; SWPC glossary: D region about 40-90 km, absorption rises with flares | G3C01, G3C05, G3C11 | ionosphere |  | C |
| gen.prop.critical | Critical frequency: highest frequency refracted back at a given incidence angle; critical angle: highest takeoff angle that returns | Pool G3C02, G3C04; NEETS Mod 10 glossary | G3C02, G3C04 | refraction |  | C |
| gen.prop.scatter | HF scatter: fluttering, distorted (many paths), weak; lets signals be heard in the skip zone | Pool G3C06, G3C07, G3C08, G3C09 | G3C06, G3C07, G3C08, G3C09 | skip zone |  | C |
| gen.prop.nvis | NVIS: short-distance MF/HF propagation at high elevation angles | Pool G3C10 | G3C10 | elevation angle |  | C |

**New terms (registry, topic 17):** maximum usable frequency (MUF); lowest usable frequency (LUF); skywave; hop; D region; E region; F2 region (F2); atmospheric noise; critical frequency; takeoff angle; critical angle; skip zone; HF scatter; elevation angle; near vertical incidence skywave (NVIS).

### Topic 18: Station operation and test equipment (G4A, G4B; 26 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.st.notch | Notch filter reduces interference from carriers in the passband | Pool G4A01 | G4A01 | passband |  | C |
| gen.st.reverse-sideband | Receiving CW on the opposite sideband may reduce interference | Pool G4A02 | G4A02 | sideband |  | C |
| gen.st.noise-blanker | Noise blanker reduces receiver gain during a noise pulse | Pool G4A03 | G4A03 | gain |  | C |
| gen.st.noise-reduction | More noise reduction can distort received signals | Pool G4A07 | G4A07 | — |  | C |
| gen.st.tube-tuning | Tube amplifier: TUNE for a pronounced plate-current dip; LOAD for desired output without exceeding maximum plate current | Pool G4A04, G4A08 | G4A04, G4A08 | vacuum tube, plate |  | C |
| gen.st.alc | ALC prevents excessive drive; keep it inactive for AFSK data | Pool G4A05, G4A11 | G4A05, G4A11 | automatic level control |  | C |
| gen.st.tuner | Antenna tuner increases power transfer from transmitter to feed line | Pool G4A06 | G4A06 | antenna tuner |  | C |
| gen.st.amp-delay | Delay RF after keying so the external amplifier can switch the antenna | Pool G4A09 | G4A09 | RF power amplifier |  | C |
| gen.st.keyer | Electronic keyer: automatic dots and dashes | Pool G4A10 | G4A10 | electronic keyer |  | C |
| gen.st.dual-vfo | Dual VFO: transmit on one frequency and listen on another | Pool G4A12 | G4A12 | VFO |  | C |
| gen.st.attenuator | Receive attenuator prevents overload from strong signals | Pool G4A13 | G4A13 | — |  | C |
| gen.test.scope | Oscilloscope: horizontal and vertical amplifiers; shows complex waveforms; best for CW keying waveform; vertical input takes attenuated RF output for envelope checks | Pool G4B01, G4B02, G4B03, G4B04 | G4B01, G4B02, G4B03, G4B04 | voltmeter |  | C |
| gen.test.input-impedance | High voltmeter input impedance reduces circuit loading | Pool G4B05 | G4B05 | voltmeter, impedance |  | C |
| gen.test.dmm-analog | Digital multimeter: higher precision; analog preferred for adjusting to a maximum or minimum | Pool G4B06, G4B09 | G4B06, G4B09 | multimeter |  | C |
| gen.test.two-tone | Two-tone test: two non-harmonically related audio tones to check linearity | Pool G4B07, G4B08 | G4B07, G4B08 | linear amplifier |  | C |
| gen.test.wattmeter | Directional wattmeter gives SWR | Pool G4B10 | G4B10 | directional wattmeter, swr |  | C |
| gen.test.analyzer | Antenna analyzer: connect antenna and feed line; strong nearby signals upset readings; measures coax impedance | Pool G4B11, G4B12, G4B13 | G4B11, G4B12, G4B13 | antenna analyzer |  | C |

**New terms (registry, topic 18):** notch filter; noise blanker; noise reduction; plate current; TUNE control; LOAD control; drive; keying line; dual VFO; receive attenuator; receiver overload; oscilloscope; keying waveform; input impedance; loading; digital multimeter; analog multimeter; two-tone test; linearity.

### Topic 19: Interference, grounding and bonding; speech processing, S meters and band edges (G4C, G4D; 23 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.rfi.bypass | A bypass capacitor reduces RF interference to audio circuits | Pool G4C01 | G4C01 | capacitor, radio frequency interference |  | C |
| gen.rfi.arcing | Arcing at a poor connection causes wideband interference | Pool G4C02 | G4C02 | interference |  | C |
| gen.rfi.sounds | RFI to audio devices: SSB = distorted speech; CW = on-and-off humming or clicking | Pool G4C03, G4C04 | G4C03, G4C04 | radio frequency interference |  | C |
| gen.gnd.rf-burns | RF burns: a ground wire with high impedance at that frequency; a resonant ground puts high RF voltage on enclosures | Pool G4C05, G4C06 | G4C05, G4C06 | ground |  | C |
| gen.gnd.no-solder | No soldered joints in lightning grounds: a strike's heat destroys them | Pool G4C07 | G4C07 | ground, lightning arrester |  | C |
| gen.rfi.common-mode | A ferrite choke on an audio cable reduces common-mode RFI | Pool G4C08 | G4C08 | common-mode current, ferrite choke |  | C |
| gen.gnd.ground-loop | Ground loops cause hum reports; minimise them by bonding enclosures | Pool G4C09, G4C10 | G4C09, G4C10 | bonding |  | C |
| gen.gnd.bonding | Bond enclosures to minimise RF hot spots; ground metal enclosures so hazardous voltages cannot appear on the chassis | Pool G4C11, G4C12 | G4C11, G4C12 | bonding, ground |  | C |
| gen.sp.processor | Speech processor raises apparent loudness and average power; misadjusted gives distortion, intermodulation and background noise | Pool G4D01, G4D02, G4D03 | G4D01, G4D02, G4D03 | average power, intermodulation |  | C |
| gen.smeter | S meter measures received strength; 1 S unit = 6 dB; 20 dB over S9 = 100 times; S8 to S9 needs about 4 times the power | Pool G4D04, G4D06, G4D05, G4D07 | G4D04, G4D05, G4D06, G4D07 | decibels |  | C |
| gen.ssb.band-edge | A 3 kHz LSB signal lies below the displayed carrier and USB above it: keep the carrier at least 3 kHz inside the segment edge | Pool G4D08, G4D09, G4D10, G4D11 | G4D08, G4D09, G4D10, G4D11 | upper sideband, SSB |  | C |

**New terms (registry, topic 19):** bypass capacitor; arcing; RF burn; resonant ground connection; ground loop; hum; RF hot spot; speech processor; S meter; S unit; displayed carrier frequency; phone segment.

### Topic 20: Mobile stations and alternative energy (G4E; 11 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.mobile.antenna | Mobile HF antennas: capacitance hat lengthens electrically; corona ball reduces discharge from the tip; efficiency of the short antenna is the main limit; bandwidth may be very limited | Pool G4E01, G4E02, G4E05, G4E06 | G4E01, G4E02, G4E05, G4E06 | antenna loading, bandwidth |  | C |
| gen.mobile.power | 100 W mobile: fused, heavy-gauge wire direct to the battery, not the auxiliary socket | Pool G4E03, G4E04 | G4E03, G4E04 | fuse, current |  | C |
| gen.mobile.noise | Vehicle interference: charging system, fuel delivery, control computers | "All these choices are correct" (Pool G4E07) | G4E07 | interference |  | C |
| gen.solar.pv | Solar panels: cells in series-parallel; about 0.5 V per silicon cell; series diode stops night discharge; charge controller for LiFePO4 | Pool G4E08, G4E09, G4E10, G4E11 | G4E08, G4E09, G4E10, G4E11 | series, parallel, diode, battery |  | C |

**New terms (registry, topic 20):** capacitance hat; corona ball; auxiliary power socket; photovoltaic cell; solar panel; open-circuit voltage; series-parallel; charge controller; lithium iron phosphate battery.

### Topic 21: Feed lines and SWR (G9A; 11 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.fl.z0 | Characteristic impedance of parallel line depends on conductor spacing and radius; window line about 450 ohms | Pool G9A01, G9A03; NEETS Mod 10 glossary: "The ratio of voltage to current at any given point on a transmission line" | G9A01, G9A03 | feed line, impedance |  | C |
| gen.fl.loss | Coax loss rises with frequency; expressed in dB per 100 feet; high SWR increases loss; more line loss lowers the SWR measured at the input | Pool G9A05, G9A06, G9A02, G9A11 | G9A02, G9A05, G9A06, G9A11 | coax, decibels, swr |  | C |
| gen.swr.reflection | Reflected power comes from a feed line / feed point impedance mismatch; match them to prevent standing waves | Pool G9A04, G9A07 | G9A04, G9A07 | swr, impedance |  | C |
| gen.swr.calc | Resistive load SWR = larger impedance / smaller: 200 on 50 = 4:1; 10 on 50 = 5:1 | Pool G9A09, G9A10 | G9A09, G9A10 | swr |  | C |
| gen.swr.tuner-line | A tuner at the transmitter does not change the SWR on the feed line (still 5:1) | Pool G9A08 | G9A08 | antenna tuner, swr |  | C |

**New terms (registry, topic 21):** characteristic impedance; parallel conductor feed line; window line; feed line loss; reflected power; feed point impedance; standing waves; matching network.

### Topic 22: Antennas: dipoles, verticals, Yagis and special types (G9B, G9C, G9D; 35 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.ant.random-wire | Random wire fed directly: station equipment may carry significant RF current | Pool G9B01 | G9B01 | antenna |  | C |
| gen.ant.ground-plane | Quarter-wave ground-plane: slope radials down to near 50 ohms; omnidirectional in azimuth; ground-mounted radials on or just under the surface | Pool G9B02, G9B03, G9B06 | G9B02, G9B03, G9B06 | whip antenna |  | C |
| gen.ant.dipole-pattern | Dipole in free space: figure-eight at right angles to the wire; below 1/2 wavelength high, high-angle azimuth pattern is almost omnidirectional | Pool G9B04, G9B05 | G9B04, G9B05 | dipole |  | C |
| gen.ant.dipole-impedance | Dipole feed point impedance falls steadily as height drops to 1/10 wavelength, and rises as the feed point moves toward the ends | Pool G9B07, G9B08 | G9B07, G9B08 | feed point impedance |  | C |
| gen.ant.horizontal | Horizontal HF antennas have lower ground losses | Pool G9B09 | G9B09 | polarization |  | C |
| gen.ant.length | Lengths: 14.250 MHz half-wave dipole about 33 ft; 3.550 MHz about 132 ft; 28.5 MHz quarter-wave monopole about 8 ft | Pool G9B10, G9B11, G9B12 | G9B10, G9B11, G9B12 | wavelength, dipole |  | C |
| gen.yagi.elements | Yagi: driven element about 1/2 wavelength; reflector longer, director shorter | Pool G9C02, G9C03; NEETS Mod 10 glossary (driven element, reflector, director) | G9C02, G9C03 | yagi |  | C |
| gen.yagi.tuning | Yagi bandwidth rises with larger-diameter elements; longer boom and more directors raise gain; boom length, element number and spacing set gain, F/B and SWR bandwidth | Pool G9C01, G9C05, G9C10 | G9C01, G9C05, G9C10 | yagi, antenna gain |  | C |
| gen.ant.dbi-dbd | Gain in dBi is 2.15 dB higher than in dBd | Pool G9C04; 97.3(b)(2),(3) (EIRP vs ERP, factor 1.64) | G9C04 | antenna gain, decibels |  | C |
| gen.ant.pattern-terms | Front-to-back ratio; main lobe | F/B: "The power radiated in the major lobe compared to that in the opposite direction" (G9C07); main lobe: "The direction of maximum radiated field strength" (G9C08) | G9C07, G9C08 | beam antenna |  | C |
| gen.ant.stacking | Two Yagis stacked 1/2 wavelength apart: about 3 dB more gain; stacking narrows the main lobe in elevation | Pool G9C09, G9D05 | G9C09, G9D05 | yagi, main lobe |  | C |
| gen.yagi.matching | Beta (hairpin) match: shorted stub at the feed point; gamma match: driven element need not be insulated from the boom | Pool G9C11, G9C12 | G9C11, G9C12 | yagi, impedance matching |  | C |
| gen.ant.nvis | Best 40 m daytime NVIS antenna: horizontal dipole 1/10 to 1/4 wavelength high | Pool G9D01 | G9D01 | near vertical incidence skywave |  | C |
| gen.ant.efhw | End-fed half-wave feed point impedance is very high | Pool G9D02 | G9D02 | feed point impedance |  | C |
| gen.ant.halo | Halo: omnidirectional in its plane | Pool G9D03 | G9D03 | — |  | C |
| gen.ant.traps | Traps enable multiband operation; multiband antennas have poor harmonic rejection | Pool G9D04, G9D11 | G9D04, G9D11 | harmonic |  | C |
| gen.ant.log-periodic | Log-periodic: wide bandwidth; element length and spacing vary logarithmically | Pool G9D06, G9D07 | G9D06, G9D07 | beam antenna |  | C |
| gen.ant.screwdriver | Screwdriver antenna varies its base loading inductance | Pool G9D08 | G9D08 | antenna loading |  | C |
| gen.ant.beverage | Beverage: directional receiving on MF and low HF | Pool G9D09; NEETS Mod 10 p.4-41 (long-wire "wave antenna") | G9D09 | MF |  | C |
| gen.ant.small-loop | Electrically small loop (under 1/10 wavelength): nulls broadside to the loop | Pool G9D10 | G9D10 | — |  | C |
| gen.ant.inverted-v | Inverted V: a dipole on a single central support | Pool G9D12 | G9D12 | dipole |  | C |

**New terms (registry, topic 22):** random-wire antenna; ground-plane antenna; radial; monopole; azimuth; omnidirectional; radiation pattern; figure-eight pattern; free space; driven element; reflector; director; boom; dBi; dBd; front-to-back ratio; main lobe; stacking; beta match (hairpin match); gamma match; end-fed half-wave antenna; halo antenna; antenna trap; multiband antenna; log-periodic antenna; screwdriver antenna; Beverage antenna; small loop antenna; null; inverted V.

### Topic 23: RF exposure and station safety (G0A, G0B; 25 pool questions)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| gen.rf.heating | RF energy heats body tissue | Pool G0A01 | G0A01 | non-ionizing radiation |  | C |
| gen.rf.exposure-factors | Duty cycle, frequency and power density all determine exposure | "All these choices are correct" (Pool G0A02) | G0A02 | duty cycle, power density |  | C |
| gen.rf.compliance | Compliance by OET Bulletin 65 calculation, computer modelling or calibrated measurement; do a routine evaluation and keep people out of high-exposure areas | Pool G0A03, G0A08; 97.13(c)(1),(2) | G0A03, G0A08 | oet bulletin 65, maximum permissible exposure |  | C |
| gen.rf.time-averaging | Time averaging: total exposure averaged over a period | Pool G0A04 | G0A04 | averaging time |  | C |
| gen.rf.exceed | If limits are exceeded, act to prevent exposure; if not exempt, evaluate per OET Bulletin 65 | 97.13(c)(2); Pool G0A05, G0A06 | G0A05, G0A06 | oet bulletin 65 |  | C |
| gen.rf.duty-cycle | A lower duty cycle permits more power | Pool G0A07 | G0A07 | duty cycle |  | C |
| gen.rf.measure | Accurate field strength: a calibrated field strength meter with a calibrated antenna | Pool G0A09 | G0A09 | — |  | C |
| gen.rf.neighbor | If a neighbour could be over the limit, make sure the beam cannot point at them when present | Pool G0A10 | G0A10 | main lobe |  | C |
| gen.rf.indoor | Indoor antenna: keep occupied areas within MPE limits | Pool G0A11 | G0A11 | maximum permissible exposure |  | C |
| gen.rf.exemption | RF exposure rules cover every station above 1 mW time-averaged | Pool G0A12; 1.1307(b)(3)(i)(A): exempt if "The available maximum time-averaged power is no more than 1 mW" | G0A12 | — | ✔ | C |
| gen.elec.240v | Four-wire 240 VAC: fuse only the hot wires | Pool G0B01 | G0B01 | hot conductor, fuse |  | C |
| gen.elec.wire-size | NEC: 20 A breaker needs at least AWG 12; AWG 14 wiring takes a 15 A fuse or breaker | Pool G0B02, G0B03 | G0B02, G0B03 | circuit breaker | ✔ yes (NEC edition) | C |
| gen.gnd.lightning | Lightning ground system outside the building; ground rods bonded with all other grounds; arrestors where feed lines enter | Pool G0B04, G0B11, G0B13 | G0B04, G0B11, G0B13 | lightning arrester, ground, bonding |  | C |
| gen.elec.gfci | GFCI trips when current flows from a hot wire directly to ground | Pool G0B05 | G0B05 | hot conductor |  | C |
| gen.elec.nec | The National Electrical Code covers electrical safety of the station | Pool G0B06 | G0B06 | — |  | C |
| gen.tower.climbing | Harness rated for the climber and within its service life; lock out and tag power circuits before climbing | Pool G0B07, G0B08 | G0B07, G0B08 | — |  | C |
| gen.safe.generator | Run emergency generators in a well-ventilated area | Pool G0B09 | G0B09 | — |  | C |
| gen.safe.solder | Lead-tin solder: wash hands so lead does not contaminate food | Pool G0B10 | G0B10 | — |  | C |
| gen.safe.interlock | Power supply interlock removes dangerous voltages when the cabinet is opened | Pool G0B12 | G0B12 | — |  | C |

**New terms (registry, topic 23):** time averaging; routine RF exposure evaluation; field strength meter; exemption; National Electrical Code; AWG; ground fault circuit interrupter (GFCI); safety harness; lockout and tagout; emergency generator; lead-tin solder; interlock.

**Count:** 246 concept rows across 23 topics: 243 core, 3 extra (gen.comp.display, gen.priv.60m-2026, gen.exam.element3). The pool IDs listed cover all 423 live questions (checked by script). As in the Technician deck, a writer may add one concept per pool question (`gen.q.G1A01`) if the build wants it.

---

## 5. Numbers and thresholds

| Figure | Conditions | Source line |
|---|---|---|
| 35 questions; pass = 26 correct | Element 3 | 97.503(b) |
| Elements 2 and 3 | Needed for General | 97.501(b) |
| 423 live pool questions; 35 groups; 10 subelements; 9 withdrawn | 2023–2027 pool after the 6th errata | S1 |
| Effective 7/01/2023 – 6/30/2027 | Current pool | Pool PDF p.8 |
| CSCE valid 365 days; higher privileges until grant or 365 days | Upgrade in progress | 97.9(b), 97.505(b); G1D03, G1D09 |
| "AG" indicator | Technician using General privileges before the grant | 97.119(f)(2); G1D06 |
| ≥ 3 VEs; VE at least 18 years old | Any exam | 97.509(a), (b)(2); G1D04, G1D10 |
| General VE: Technician exams only; General exam needs Extra or Advanced VEs | | 97.509(b)(3)(i),(ii); G1D02 |
| **General HF segments** (Region 2, MHz): 160 m 1.800–2.000; 80 m 3.525–3.600; 75 m 3.800–4.000; 60 m 5.3515–5.3665 plus channels; 40 m 7.025–7.125 and 7.175–7.300; 30 m 10.100–10.150; 20 m 14.025–14.150 and 14.225–14.350; 17 m 18.068–18.168; 15 m 21.025–21.200 and 21.275–21.450; 12 m 24.890–24.990; 10 m 28.000–29.700. Also 2200 m 135.7–137.8 kHz and 630 m 472–479 kHz. | Control operator of General class | 97.301(d) table |
| Extra-only segments on 80, 40, 20 and 15 m | e.g. 40 m 7.000–7.025 and 7.125–7.175 MHz are Extra/Advanced only | 97.301(b),(c),(d); G1A01, G1A05, G1A08 |
| General phone segments (upper part of each band): 75 m 3.800–4.000; 40 m 7.175–7.300; 20 m 14.225–14.350; 17 m 18.110–18.168; 15 m 21.275–21.450; 12 m 24.930–24.990; 10 m 28.300–29.700; 160 m whole band | Our intersection of 97.301(d) with the phone rows of 97.305(c) | 97.301(d), 97.305(c); G1A11 |
| 30 m: RTTY and data only (no phone, no image); 200 W PEP | All licensees | 97.305(c) row (viii); 97.313(c)(1); G1A02, G1A03, G1C01 |
| 1.5 kW (1500 W) PEP output | Maximum anywhere, including 160, 12 and 10 m | 97.313(b); G1C02, G1C05, G1C06 |
| 10 W PEP | Spread spectrum | 97.313(j); G1E08 |
| 100 W | Beacon transmitter power | 97.203(c); G1B10 ("100 watts PEP output") |
| 28.20–28.30 MHz | Automatically controlled HF beacons | 97.203(d); G1B09 |
| 14.100, 18.110, 21.150, 24.930, 28.200 MHz | Propagation beacon frequencies to avoid | G1E10 (pool only) |
| Above 29.5 MHz | 10 m repeaters (97.205(b) excludes 28.0–29.5 MHz) | 97.205(b); G1A10 |
| 60 m: emissions ≤ 2.8 kHz; 5351.5–5366.5 kHz at ≤ 9.15 W ERP; channels 5332, 5348, 5373, 5405 kHz (centre) at ≤ 100 W ERP; carrier 1.5 kHz below centre for phone, data, RTTY | Since 13 Feb 2026 | 97.303(h)(3), 97.313(i); 91 FR 1405; G1C03 |
| Half-wave dipole = gain 1 (0 dBd) for 60 m ERP; other antennas: keep gain data in station records | 60 m | 97.313(i); G1C04 |
| 1.64 (= 2.15 dB) | EIRP = ERP × 1.64; dBi = dBd + 2.15 | 97.3(b)(2),(3); G9C04 |
| 200 ft (60.96 m) | Antenna height needing FAA notice and FCC registration (away from public-use airports) | 97.15(a); G1B01 |
| 1 mile (1600 m) | Protect an FCC monitoring facility | 97.13(b); G1E04 |
| 500 Hz | Max bandwidth of an automatically controlled digital station answering outside the auto segments | 97.221(c)(2) (extra) |
| 1 hour per week | RACES drills; up to 72 h twice a year with state approval | 97.407(d)(4); G2B11 |
| CW 150–500 Hz; SSB 2–3 kHz | Minimum separation | G2B04, G2B05 |
| 50.1–50.125 MHz | Band-plan DX window (voluntary) | G2B08 |
| 14.070–14.100 MHz; 14.074–14.077 MHz | 20 m digital; FT8 (voluntary) | G2E08, G2E15 |
| 170 Hz | Common RTTY shift | G2E06 |
| ≈1 s | FT8 clock accuracy | G2E07 |
| +3 dB in 2.5 kHz | FT8 report "+3" | G8C15 |
| 8 minutes | Flare UV and X-ray arrival | G3A03 |
| 15 hours to several days | CME arrival (SWPC: fastest "15-18 hours") | G3A11; S8 |
| 26–28 days | Solar rotation cycle (SWPC: "27-day periods") | G3A10; S8 |
| 10.7 cm (2800 MHz) | Solar flux index | G3A05; S8 |
| K-index 0–9 (5 or more = storm) | SWPC Kp page | S8 |
| 2,500 miles (F2); 1,200 miles (E) | Maximum one-hop distance | G3B09, G3B10 |
| Below 10 MHz | D-region daytime absorption | G3C11 |
| 3 dB = ×2; 1 dB loss = 20.6%; 6 dB per S unit; +20 dB = ×100; S8→S9 ≈ ×4 power | | G5B01, G5B10, G4D06, G4D05, G4D07 |
| V(peak) = 1.414 × V(RMS); V(p-p) = 2 × V(peak) | 120 V RMS = 339.4 V p-p; 17 V peak = 12 V RMS | G5B08, G5B09 |
| PEP = (V(p-p)/2 × 0.707)² / R | 200 V p-p / 50 Ω = 100 W; 500 V p-p = 625 W; 1200 W → 245 V RMS | G5B06, G5B14, G5B12 |
| Series C, parallel L: reciprocal formula; parallel C, series L: add | 3 × 100 µF series = 33.3 µF; 20+50 µF series = 14.3 µF; 3 × 10 mH parallel = 3.3 mH | G5C09, G5C12, G5C10 |
| Turns ratio = voltage ratio; impedance ratio = turns ratio² | 500:1500 turns, 120 V → 360 V; 600 Ω→50 Ω needs 3.5:1 | G5C06, G5C07 |
| Germanium 0.3 V; silicon 0.7 V | Diode forward threshold | G6A03, G6A05 |
| 10.5 V | Minimum discharge, 12 V lead-acid | G6A01 |
| BNC ≈4 GHz; type N 10 GHz | Connector upper limits | G6B04, G6B07 |
| Half-wave 180°; full-wave 360°; full-wave ripple at 2× input frequency | Rectifiers | G7A05, G7A06, G7A07 |
| Class A conducts 100% | Amplifier classes | G7B04 |
| 3 bits → 8 states | Binary counter | G7B05 |
| 90° | I-Q phase difference | G7C09 |
| FM bandwidth = 2 × (deviation + modulating frequency) = 16 kHz for 5 kHz / 3 kHz | Carson's rule, named nowhere in the pool | G8B06 |
| 416.7 Hz | Oscillator deviation for 5 kHz at 146.52 MHz from 12.21 MHz (×12) | G8B07 |
| QPSK: 0°, 90°, 180°, 270° | Pairs of bits | G8A12 |
| Baudot: 5-bit plus start and stop | | G8C04; 97.309(a)(1) |
| 450 Ω | Window line | G9A03 |
| SWR = Z(high)/Z(low): 200/50 = 4:1; 50/10 = 5:1 | Resistive loads | G9A09, G9A10 |
| Half-wave dipole ≈ 468/f(MHz) ft: 33 ft at 14.250 MHz, 132 ft at 3.550 MHz; quarter-wave ≈ 234/f: 8 ft at 28.5 MHz | The formula is our inference from the keyed answers; the pool gives only the results | G9B10, G9B11, G9B12 |
| NVIS dipole 1/10 to 1/4 wavelength high | 40 m daytime | G9D01 |
| Small loop < 1/10 wavelength circumference | Nulls broadside | G9D10 |
| Stacked Yagis 1/2 wavelength apart: ≈3 dB more gain | Free space | G9C09 |
| 0.5 V | Open-circuit voltage, silicon PV cell | G4E09 |
| 3 kHz | Keep an SSB carrier at least 3 kHz inside the segment edge | G4D10, G4D11 |
| 1 mW | RF exposure exemption threshold (time-averaged) | 1.1307(b)(3)(i)(A); G0A12 |
| AWG 12 for 20 A; AWG 14 with 15 A | NEC | G0B02, G0B03 |

---

## 6. Visuals

### Figure in the pool (content, tier A)

| Figure | File URL | What it shows (numbered components, as keyed by the pool) | Pool questions | Components not asked |
|---|---|---|---|---|
| G7-1 | https://www.ncvec.org/downloads/G7-1.pdf (1 page, PDF metadata "CreationDate: Tue Jan 4 10:30:51 2011"); pool PDF page 87; DOCX `word/media/image1.png` (1845×1455 PNG) | 1 field effect transistor; 2 NPN junction transistor; 5 Zener diode; 6 solid core transformer; 7 tapped inductor | G7A09, G7A10, G7A11, G7A12, G7A13 | 3, 4, 8, 9, 10, 11 |

- **Licence:** released with the pool into the public domain (S1, S3). Saved locally as `G7-1.pdf` and `docx/word/media/image1.png`.
- **Broken link:** the release page also links "G7-1 diagram 2023 Figure G7-1.jpg" (https://www.ncvec.org/downloads/G7-1%20diagram%202023%20Figure%20G7-1.jpg). It returns **HTTP 404**. Use the PDF or the DOCX image.
- **Card uses:** "In figure G7-1, which symbol is the Zener diode?" and the reverse. Use the real questions G7A09–G7A13. Crop each numbered symbol for single-symbol recognition cards.
- **Do not label** components 3, 4, 8, 9, 10 and 11 on cards. The pool does not identify them.
- **Metadata:** the PDF dates from 2011, so the artwork is older than this pool. That is an inference from metadata only.

### Diagrams we can draw from sourced facts
1. **General HF band chart:** each band's General segments and phone segments, the Extra-only gaps, and the 30 m and 60 m limits (97.301(d), 97.305(c), 97.313). Carry a valid-as-of date; 60 m changed in 2026.
2. **SSB occupancy at band edges:** LSB occupies 3 kHz below the displayed carrier, USB 3 kHz above it (G4D08–G4D11).
3. **Ionosphere layers:** D, E and F2 with heights (SWPC glossary: D about 40–90 km; E about 90–160 km; F2 peak 200–600 km) and one-hop ranges (G3B09, G3B10).
4. **MUF/LUF window:** usable frequencies between LUF and MUF; none when LUF > MUF (G3B05, G3B06, G3B11).
5. **Critical angle and skip zone:** takeoff angles that return versus pass through; scatter into the skip zone (G3C02, G3C04, G3C09).
6. **Sine wave values:** peak, peak-to-peak and RMS (G5B07–G5B09).
7. **Reactance versus frequency:** XL rising, XC falling, crossing at resonance (G5A05, G5A06, G5A12).
8. **Transformer turns ratio** and impedance ratio (G5C06, G5C07).
9. **Rectifier outputs:** half-wave versus full-wave pulses (G7A05–G7A07).
10. **Amplifier conduction:** Class A 360°, Class C under 180° (G7B04; NEETS Mod 7 glossary definitions of Classes A, AB, B, C).
11. **Superheterodyne mixer:** RF + LO → sum and difference → IF; image at twice the IF (G8B01, G8B02, G8B11).
12. **AM envelope** and flat-topping (G8A11, G8A10).
13. **Yagi:** reflector, driven element, directors; main lobe and back lobe (G9C02, G9C03, G9C07, G9C08).
14. **Dipole pattern:** figure-eight at right angles to the wire (G9B04).
15. **dBi versus dBd:** isotropic, dipole (+2.15 dB) (G9C04; 97.3(b)).
16. **S-meter ladder:** S8, S9, S9 + 20 dB with power ratios (G4D05–G4D07).
17. **Solar event timeline:** flare effects in about 8 minutes; CME in 15 hours to several days (G3A03, G3A11).
18. **Waterfall display** layout: frequency across, time down, strength as brightness (G8C14).

---

## 7. Confusions and traps

**1. The pool expires on 30 June 2027, nine months from now.** The NCVEC pools page lists "2023- 2027 General Question Pool Release" as current, with no successor posted as of 2026-09-25. The NCVEC says pools are "normally valid for 4 years" and "released to the public normally 6 months prior to becoming effective". So a 2027–2031 General pool is likely around January 2027; that date is an inference, not a published one. The Technician brief shows how much a new pool changes: 88 of 409 Technician stems were new or reworded. **Every card must carry `ValidAsOf: 2026-09-25 · 2023–2027 General pool, 6th errata`, and the deck needs a rebuild plan for July 2027.** The QPC page names the "2026-2027 NCVEC Question Pool Committee" (chair Roland Anders, K3RA).

**2. Two versions of the current pool are online.** The release page still links the 5th-errata file (8 Nov 2024) next to the 6th (4 Feb 2026). A diff shows exactly two differences: the 5th still contains G1A04 and G1C09. Older copies elsewhere may also contain G1C08 and G1C10 (withdrawn 1 Dec 2023 for an "FCC Rule Change") and G1E09, G6B09, G8C01, G9C06 and G9D13. Use only the 4 Feb 2026 file.

**3. 60 metres changed on 13 February 2026, and the pool only partly caught up.** 91 FR 1405 (FR 2026-00587) added the 5351.5–5366.5 kHz band at 9.15 W ERP and kept the four channels at 100 W ERP. The FR says the Commission "limits utilization of these frequencies to those holding a General Class license or higher".
   - The QPC withdrew G1A04 (the old "specific channels" rule, keyed "60 meters") and G1C09 (keyed "ERP of 100 watts PEP with respect to a dipole") on 4 Feb 2026.
   - **G1C03** (2.8 kHz on USB) remains, and its answer is still true: 97.303(h)(3) reads "For all 60 m spectrum, Amateur operators shall ensure that their emissions do not occupy more than 2.8 kHz." But the pool cites 97.303(h)(1), which is now the fixed-service sharing clause.
   - **G1C04** (record antenna gain if not a dipole) remains, and its answer is still true, but the rule is now **97.313(i)**. The pool cites 97.303(i), which now covers 7.2–7.3 MHz broadcasting.
   - Cards must cite the current paragraphs and must not teach "60 m is channels only" or "100 W ERP everywhere on 60 m".
   - Earlier change: 88 FR 85126 (7 Dec 2023) replaced HF baud-rate limits with 2.8 kHz (97.307(f)(3)). That is why G1C08 and G1C10 were withdrawn (see the Technician brief §7.5).

**4. The printed syllabus counts are stale.** The G1 header says "54 Questions", but the live G1 has 52 (10 + 11 + 8 + 12 + 11). The syllabus total is 425; the live pool is 423. Group IDs have gaps (G1A04, G1C08–G1C10, G1E09, G6B09, G8C01, G9C06, G9D13) and must not be renumbered.

**5. Pool rule references with errors.** Cite the correct paragraph on cards.
   - G1B05 "[97.111((5)(b)]" is 97.111(b)(5).
   - G1D04 "[97.509(3)(i)(c)]" is 97.509(a) and (b)(3)(i).
   - G1D12 cites 97.507 ("Preparing an examination"), which has nothing to do with remote operation.
   - G1C03 cites 97.303(h)(1) and G1C04 cites 97.303(i); see §7.3.
   - G0A06 "[1.1307(1)(b)(3)(i)]" and G0A12 "[1.1307(1)(b)(3)(i)(A)]" are 1.1307(b)(3)(i) and (b)(3)(i)(A).
   - G1B06 cites "PRB-1, 101 FCC 2d 952 (1985)"; 97.15(b) is the rule text.

**6. Keyed answers that leave out part of the rule.**
   - G2B09 is keyed "Only a person holding an FCC-issued amateur operator license". 97.407(a) also requires that the person be "certified by a civil defense organization as enrolled in that organization". Teach both.
   - G1D11: an expired General must pass **Element 2**, not Element 3, to get a licence back (97.505(a); ARRL exam-element-credit page).
   - G1B10: the pool says "100 watts PEP output"; 97.203(c) says only "must not exceed 100 W".

**7. Voluntary band plan, not rule.** 14.070–14.100 MHz digital, 14.074 MHz FT8, 50.1–50.125 MHz DX window, CW/SSB spacing, and the LSB/USB conventions (G2A09: "commonly accepted amateur practice") are practice, not Part 97. Label them as such.

**8. "All these choices are correct".** It is the key in 15 questions: G1E04, G2E03, G2E12, G2E14, G3B02, G4D03, G4E07, G5A10, G6B05, G7C08, G7C11, G8A06, G9C10, G0A02, G0A03. Cards that quote them need the listed options. It is also a **wrong** option in 26 others, including G1A05, G1B02, G1B03, G1B05, G1E01, G2B07, G2B10, G2D03, G2D09, G3B04, G4A06, G4A11, G4B11, G4B12, G4C07, G7A02, G7B11, G8B13, G9C12, G0A05, G0A08, G0A10, G0B05, G0B07, G0B08 and G0B09.

**9. Calculation traps.**
   - G5B06/G5B14: PEP uses half the peak-to-peak voltage, then × 0.707, then squared over R.
   - G5B13/G5B11: for an unmodulated carrier, PEP = average power.
   - G5C02: a step-down transformer fed backwards multiplies the voltage by 4.
   - G9A08: a tuner at the rig does not change the feed-line SWR.
   - G9A11: line loss makes the measured SWR look better.
   - G8B07: divide the deviation by the multiplication factor (146.52 / 12.21 = 12).

**10. Confusable pairs** (contrast cards, CARD-STANDARD rule 20):
   - inductive reactance rises / capacitive reactance falls with frequency (G5A05 / G5A06)
   - capacitors add in parallel / inductors and resistors add in series (G5C08, G5C11, G5C13, G5C14)
   - germanium 0.3 V / silicon 0.7 V (G6A03 / G6A05)
   - control grid / screen grid (G6A10 / G6A12)
   - CMOS (low power) / TTL (G6B03)
   - BNC / type N / SMA / RCA phono (G6B04, G6B07, G6B11, G6B12)
   - half-wave / full-wave rectifier (G7A04–G7A06)
   - linear / switchmode supply (G7A08)
   - figure G7-1 symbol 1 (FET) / 2 (NPN) (G7A09 / G7A11)
   - Class A (100%, linear) / Class C (most efficient, FM only) (G7B02, G7B04, G7B11)
   - balanced modulator (makes DSB) / product detector (demodulates SSB) (G7C02 / G7C04)
   - insertion loss / ultimate rejection / cutoff frequency (G7C07, G7C13, G7C12)
   - FM (instantaneous frequency) / PM (phase; reactance modulator) (G8A03 / G8A02, G8A04)
   - link budget / link margin (G8A13 / G8A14)
   - image response / intermodulation (G8B02 / G8B12)
   - ARQ (retransmit) / FEC (redundancy) (G8C05 / G8C10)
   - RTTY AFSK on LSB / FT8 on USB (G2E01 / G2E05)
   - Varicode (PSK31) / Baudot (RTTY) (G8C12 / G8C04)
   - General VE (Technician exams only) / VEs for General exams (Extra or Advanced) (G1D02; 97.509(b)(3))
   - AG / AE / KT indicators (97.119(f))
   - 200 W PEP (30 m) / 1500 W PEP / 10 W (spread spectrum) / 100 W (beacons) (G1C01, G1C02, G1E08, G1B10)
   - 28.20–28.30 MHz (HF automatic beacons) / above 29.5 MHz (10 m repeaters) (G1B09 / G1A10)
   - USB (14 MHz and up, VHF/UHF) / LSB (160, 75, 40 m) (G2A01–G2A04)
   - KN / AR; QRL / QRS / QRV; QSL / QRN (G2C)
   - short path / long path (G2D06, G3B01)
   - flare (8 minutes) / CME (15 hours to days) / coronal hole (G3A03, G3A11, G3A14)
   - K-index short-term / A-index long-term (G3A12 / G3A13)
   - MUF / LUF (G3B07 / G3B08)
   - critical frequency / critical angle (G3C02 / G3C04)
   - D region absorbs / F2 region gives the longest skip (G3C05 / G3C03)
   - HF scatter (into the skip zone) / NVIS (high-angle short range) (G3C09 / G3C10)
   - notch filter / noise blanker / noise reduction (G4A01, G4A03, G4A07)
   - TUNE (plate dip) / LOAD (desired output) (G4A04 / G4A08)
   - digital multimeter (precision) / analog multimeter (peaking) (G4B06 / G4B09)
   - SSB RFI (distorted speech) / CW RFI (on-off hum) (G4C03 / G4C04)
   - ground loop (hum) / RF hot spot (G4C10 / G4C11)
   - capacitance hat / corona ball (G4E01 / G4E02)
   - reflector (longer) / director (shorter) (G9C03)
   - dBi / dBd (G9C04)
   - beta (hairpin) match / gamma match (G9C11 / G9C12)
   - front-to-back ratio / main lobe (G9C07 / G9C08)
   - AWG 12 with 20 A / AWG 14 with 15 A (G0B02 / G0B03)
   - time averaging / duty cycle (G0A04 / G0A07)

**11. The Technician deck's numbers still apply, with General twists.** The 200 W PEP Technician HF limit becomes 1500 W for General, except 30 m, where 200 W applies to everyone. CW is allowed anywhere on 10 m for General (97.305(a)). The Technician's 10 m phone segment (28.3–28.5 MHz) grows to 28.3–29.7 MHz.

---

## 8. Naming

- **Owner's terms.** The rules name the exam "Element 3" and the licence "General Class operator license" (97.501(b), 97.503(b)). The NCVEC calls the pool the "2023-2027 General, Element 3, Question pool". The NCVEC describes itself: "The National Conference of Volunteer Examiner Coordinators (NCVEC) is a not-for-profit voluntary association … The NCVEC is a private organization" (https://www.ncvec.org/).
- **Trademark guidance.** No trademark or name-use text appears on the NCVEC pages fetched (home, pools, QPC, General release page). fcc.gov again returned HTTP 403 (https://www.fcc.gov/wireless/bureau-divisions/mobility-division/amateur-radio-service), so no FCC seal or name-use policy was read. The ARRL copyright notice is quoted in §2; it names no trademark.
- **How CONTENT-POLICY.md §4 applies.** Use the general rule: plain text, our brand first, a true factual statement. Suggested title, matching the Technician deck: "Amateur radio flashcards: for the FCC General exam (2023–2027 pool)", or "[Site name] deck for the FCC Amateur Radio General Class (Element 3) exam". No FCC seal or logo, and no "official", "approved" or "certified".
- **Footer notice** (adapted, as for Technician, because no trademark claim was verified): "Questions marked 'Pool' are from the 2023–2027 General question pool, released into the public domain by the NCVEC Question Pool Committee. Also contains material from 47 CFR Parts 1 and 97, US Navy NEETS modules and NOAA SWPC pages, US Government works in the public domain. This deck is independent and is not affiliated with, sponsored, endorsed or approved by the FCC, the NCVEC or any VEC." Legal review per CONTENT-POLICY §8.
- **"Real questions" wording.** The pool is public (tier A), so the cards may say they use real pool questions (CONTENT-POLICY §2.7).
- **Other bodies.** CONTENT-POLICY §5 lists no restricted body. Do not name ARRL products.

---

## 8b. Term registry

Written to **`research/deck-briefs/fcc-general-terms.json`**: 526 entries of `{"term", "abbr", "topic", "concept", "source"}`, in teaching order.

- **Topic 0 (prerequisite): 224 entries.** These are exactly the terms the Technician deck's primers introduce (`introduces` in `decks/fcc-technician/notes/*.json`), in that deck's order, spelled as it spells them (for example "fm", "swr", "ohm's law", "licence class"). Each keeps the Technician concept ID and source URL. Writers may use them without a primer. The Technician deck's `assumedTerms` (radio, battery, wire, microphone, computer, internet, transmitter, receiver, signal, satellite) are also usable.
- **Topics 1–23: 302 new entries.** One per term in the concept inventory, with the topic whose primers introduce it and the concept ID. No new term duplicates a Technician term (checked by script, case-insensitively). Every prerequisite in the §4 "Pre" column is either a topic-0 term or a term introduced in the same or an earlier topic (checked by script).
- **Sources.**
  - Terms defined by the pool's keyed answer point to the pool PDF (S1).
  - Regulatory terms point to their eCFR section (S4, S5).
  - Electronics terms point to the NEETS module whose glossary or text defines them (S7). The parsed glossaries are in `neets/glossary.json` with PDF page numbers, for example "ZENER DIODE: A PN-junction diode designed to operate in the reverse-bias breakdown region" (Mod 7, PDF p.239).
  - Solar and ionosphere terms point to the SWPC page (S8).
  - Writers never need Wikipedia for a new General term.
- **Abbreviations.** `abbr` is filled where the pool or source gives one (e.g. "MUF", "LUF", "QSK", "VEC"), and left empty where no source uses one. Where the term is itself an abbreviation (e.g. "MMIC", "QRS"), `abbr` repeats it.

---

## 8c. Card budget

**Method.** For each topic:
- primers: one per new term;
- facts: one per core concept, since each is a rule or number;
- pool cards: one per live pool question, each of which is also the application card for its concept;
- contrast cards: taken from §7.10.

Extra concepts (3) are not budgeted. The Technician deck came out at 1,012 cards for 409 questions; this budget is comparable.

| # | Topic | Groups | Exam Qs | Pool Qs | Primers (new terms) | Facts (core concepts) | Pool cards | Contrast | **Target** |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Reactance, impedance and resonance | G5A | 1 | 12 | 6 | 7 | 12 | 2 | **27** |
| 2 | Decibels, power, RMS and PEP | G5B | 1 | 14 | 5 | 8 | 14 | 2 | **29** |
| 3 | Components in series and parallel; transformers | G5C | 1 | 14 | 9 | 7 | 14 | 2 | **32** |
| 4 | Components: batteries, diodes, transistors, tubes, ICs, connectors, ferrites | G6A, G6B | 2 | 23 | 29 | 15 | 23 | 5 | **72** |
| 5 | Power supplies and schematic symbols | G7A | 1 | 13 | 11 | 6 | 13 | 3 | **33** |
| 6 | Amplifiers, oscillators and digital logic | G7B | 1 | 11 | 15 | 8 | 11 | 2 | **36** |
| 7 | Transmitter and receiver design, filters, DSP and SDR | G7C | 1 | 14 | 17 | 8 | 14 | 2 | **41** |
| 8 | Modulation | G8A | 1 | 14 | 10 | 9 | 14 | 3 | **36** |
| 9 | Mixing, bandwidth, deviation and intermodulation | G8B | 1 | 13 | 10 | 9 | 13 | 3 | **35** |
| 10 | Digital modes: how they work and how to operate them | G8C, G2E | 2 | 30 | 22 | 14 | 30 | 3 | **69** |
| 11 | General privileges: bands, emissions and power | G1A, G1C | 2 | 18 | 10 | 8 | 18 | 3 | **39** |
| 12 | Station rules: antennas, beacons, transmissions, repeaters, third parties, automatic control | G1B, G1E | 2 | 22 | 12 | 15 | 22 | 3 | **52** |
| 13 | Volunteer examiners, element credit, temporary identification, remote operation | G1D | 1 | 12 | 6 | 6 | 12 | 3 | **27** |
| 14 | Phone and CW operating | G2A, G2C | 2 | 23 | 14 | 12 | 23 | 3 | **52** |
| 15 | Operating practice, emergencies, Volunteer Monitors and HF operation | G2B, G2D | 2 | 22 | 9 | 16 | 22 | 2 | **49** |
| 16 | The Sun and the geomagnetic field | G3A | 1 | 14 | 12 | 8 | 14 | 2 | **36** |
| 17 | The ionosphere: MUF, LUF, regions, scatter and NVIS | G3B, G3C | 2 | 23 | 15 | 10 | 23 | 4 | **52** |
| 18 | Station operation and test equipment | G4A, G4B | 2 | 26 | 19 | 17 | 26 | 3 | **65** |
| 19 | Interference, grounding and bonding; speech processing, S meters and band edges | G4C, G4D | 2 | 23 | 12 | 11 | 23 | 3 | **49** |
| 20 | Mobile stations and alternative energy | G4E | 1 | 11 | 9 | 4 | 11 | 1 | **25** |
| 21 | Feed lines and SWR | G9A | 1 | 11 | 8 | 5 | 11 | 1 | **25** |
| 22 | Antennas: dipoles, verticals, Yagis and special types | G9B, G9C, G9D | 3 | 35 | 30 | 21 | 35 | 4 | **90** |
| 23 | RF exposure and station safety | G0A, G0B | 2 | 25 | 12 | 19 | 25 | 3 | **59** |
| | **Total** | 35 groups | 35 | 423 | 302 | 243 | 423 | 62 | **1030** |
**Deck total: about 1,030 cards** (302 primers, 243 facts, 423 pool cards, 62 contrasts). Weighting check: G9 (4 exam questions) gets topics 21–22, 115 cards; G6 (2 exam questions) gets topic 4, 72 cards, because it introduces 29 component terms. Order ranges: topic N uses N×1000 to N×1000+999, as in the Technician deck.

---

## 9. Languages

- **The pool is published in English only.** The General release page (https://www.ncvec.org/index.php/2023-2027-general-question-pool-release) links only the English PDF and DOCX files (5th and 6th errata) and the G7-1 files. No translation is listed there or on the NCVEC pools page.
- **The rules set no exam language.** Part 97 subpart F (97.501–97.527) contains no language requirement for written exams. The Technician brief searched the eCFR text for "language", "Spanish" and "translat". The only language rule concerns on-air ID: "By a phone emission in the English language" (97.119(b)(2)).
- **Spanish sessions exist.** The Technician research found GLAARG's "VEs for Spanish Exam Sessions" page (https://glaarg.org/ves-for-spanish-exam-sessions-2/, © GLAARG VEC, tier C). It does not say which text Spanish exams use. Not re-fetched for this brief.
- **No official or openly licensed translation** of the General pool or of Part 97 was found. Deck: English only.

---

## 10. Not verified

1. **Exam time limit.** Part 97 subpart F sets none. The Technician research found none in the ARRL and W5YI pages; not re-checked for General.
2. **Release date of the next (2027–2031) General pool.** It is not posted on ncvec.org as of 2026-09-25. An ARRL news search (https://www.arrl.org/news/search?q=general+question+pool) returned no usable results. The "about January 2027" estimate in §7.1 comes only from the NCVEC's "normally 6 months prior" statement.
3. **fcc.gov.** HTTP 403 again (amateur radio service page). As a result, no FCC name or seal policy and no FCC statement on General privileges or exams was read.
4. **Why G1A04 and G1C09 were withdrawn.** The 6th errata gives no reason. Linking them to the 13 Feb 2026 60 m rule (91 FR 1405) is my inference from their keyed answers and the rule text.
5. **The keyed answers of G1C03 and G1C04 under the new 60 m rule.** They still match 97.303(h)(3) and 97.313(i) as I read them. The QPC has not said so, and a 7th errata could withdraw them.
6. **Figure G7-1 components 3, 4, 8, 9, 10, 11.** No source identifies them. Do not label them.
7. **Half-wave dipole length formula (468/f).** The pool gives only results (33 ft, 132 ft, 8 ft); I found no fetched source stating the constant. Teach the results, or derive them from 300/f (a Technician fact, T3B06) with a stated end-effect shortening only if a source is found.
8. **National Electrical Code content** (AWG 12 for 20 A, AWG 14 with 15 A, GFCI behaviour). The NEC is an NFPA publication and was not fetched; the pool keyed answers are the only source. Tier A for the pool text itself.
9. **OET Bulletin 65 and Supplement B.** These are cited by 97.13(c) and G0A03/G0A06 but were not fetched (fcc.gov 403).
10. **Band-plan frequencies** (14.070–14.100, 14.074 FT8, 50.1–50.125 DX window, the beacon frequencies in G1E10) come only from the pool. No band-plan source was fetched, and ARRL's band plan is tier C.
11. **Retake and fee policies** of VECs other than W5YI (read in the Technician research) were not checked.
12. **NCVEC page footers.** No licence for page text was found; only the pool carries the public-domain release.

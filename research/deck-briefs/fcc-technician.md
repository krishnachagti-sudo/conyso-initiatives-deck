# Research brief: FCC Amateur Radio Technician Class, Element 2 (slug `fcc-technician`)

Researched 2026-09-25. Raw downloads and extracted text are in the scratch folder:
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/fcc-technician/`.
Every fact below was read in a file fetched during this task. Section 10 lists what could not be checked.
The full current pool (409 questions, errata applied) is in `research/deck-briefs/fcc-technician-pool.txt`. It is public domain; see §2.

**Key file names in scratch:**
- `pool_feb2026.pdf` / `.txt` / `.docx`: the current pool.
- `pool.json`: the parsed pool.
- `pool_dec2025.pdf`: the superseded first release.
- `pool2022.pdf` / `.json`: the previous pool.
- `T1.jpg`, `T2.jpg`, `T3.jpg`, `diagrams.pdf`: the pool figures.
- `part97.xml` / `.txt`: 47 CFR Part 97 from eCFR, current to 2026-09-22.
- `p1.1310.*`, `p1.949.*`, `p1.1102.*`: sections of 47 CFR Part 1.
- `fr_2026-00587.htm`, `usc17_105.html`: the 2026 rule change and 17 USC 105.
- `ncvec_*.txt`, `arrl_*.txt`, `w5yi_manual.txt`: organisation pages.

---

## 1. Exam facts

| Fact | Value | Exact source words | Source | Changes often? |
|---|---|---|---|---|
| Who sets the exam | The FCC, by rule. Element 2 is the only exam for Technician. | "(c) Technician Class operator: Element 2." | 47 CFR 97.501(c), eCFR https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-97 | No |
| Who writes the question pool | The NCVEC Question Pool Committee (QPC) | "The Question Pools are developed and maintained by the Question Pool Committee (QPC) of the NCVEC by FCC instruction and Part 97 Rules & Regulation : Sec. 97.523" | https://www.ncvec.org/index.php/amateur-question-pools | No |
| Who administers it | A team of at least 3 accredited VEs, at a session coordinated by a VEC | "Each examination for an amateur operator license must be administered by a team of at least 3 VEs at an examination session coordinated by a VEC." | 97.509(a) | No |
| Current version | 2026–2030 Technician pool | PDF header: "2026-2030 Technician Class / FCC Element 2 Question Pool / Effective 7/01/2026 – 6/30/2030" | Pool PDF, Feb 19 2026 release, p.1–2: http://ncvec.org/downloads/2026-2030%20Technician%20Pool%20and%20Syllabus%20Public%20Release%20Feb%2019%202026.pdf | Yes: every 4 years |
| Release and errata | First released 18 Dec 2025. Errata issued 19 Feb 2026 changed the wording of 4 questions (T1C01, T5A05, T7A09, T0A10). | "Release date December 18, 2025"; "Errata Issued February 19, 2026 … In the pool itself, 4 questions modified" | https://www.ncvec.org/index.php/2026-2030-technician-question-pool | Yes |
| Withdrawn questions | None as of 2026-09-25 | "Technician Element 2 Pool (valid from July 1, 2026 until June 30, 2030): None" | https://www.arrl.org/withdrawn-questions | Yes: re-check before each release |
| Pool lifecycle | 4 years; released about 6 months before use | "The pools are normally valid for 4 years and each question pool is reviewed and updated on a four-year rotation." "…released to the public normally 6 months prior to becoming effective" | https://www.ncvec.org/index.php/amateur-question-pools | — |
| Number of questions | 35 | "(a) Element 2: 35 questions concerning the privileges of a Technician Class operator license." | 97.503(a) | Rarely |
| Pass mark | 26 correct. That is 74.3% (our calculation, not a quoted figure). | "The minimum passing score is 26 questions answered correctly." | 97.503(a) | Rarely |
| How questions are drawn | One question from each of the 35 groups. The syllabus gives exam questions and groups per subelement (6/6, 3/3, 3/3, 2/2, 4/4, 4/4, 4/4, 4/4, 2/2, 3/3). | e.g. "SUBELEMENT T1 - COMMISSION'S RULES [6 Exam Questions - 6 Groups] 68 Questions" | Pool syllabus, PDF p.2–3 | With each pool |
| Pool size | 409 questions. The subelement counts add up to 409, and I parsed exactly 409 unique IDs. | "…at least 10 times the number of questions required for a single examination" (97.523) | Pool PDF; 97.523 | With each pool |
| Format | Multiple choice with 4 answers. The answer key and rule reference are not shown on the exam. | "Each pool is released with the exact questions and 4 multiple choice answers and the correct answer for each question is designated in ( ) … On the actual exam, the correct answer letter in parentheses, and any rules citations do not appear" | https://www.ncvec.org/index.php/amateur-question-pools | No |
| Who prepares the question set | A VE of the required class, using only pool questions | "Each question set administered to an examinee must utilize questions taken from the applicable question pool." | 97.507(b) | No |
| Time limit | **Not verified** (see §10) | — | — | — |
| Retakes | The FCC rule forbids reusing the same question set. Retake policy is set by each VEC. For W5YI: no waiting period, a retest at the same session is at the team's option, and each retest costs another fee. | "The same question set may not be re-administered to the same examinee." (97.509(f)). W5YI: "There is no waiting period to retake a failed examination with W5YI. At the option of the VE team, this may be accomplished one or more times at the same test session." "Applicants immediately retaking failed examinations must pay another fee" | 97.509(f); W5YI VE Manual 2026.1 §2.7, https://www.w5yi-vec.org/W5YIVEManual2026.1.html | VEC policy, may change |
| Credit for a passed element | A CSCE counts for 365 days | "…credit to an examinee holding a CSCE for each element the CSCE indicates the examinee passed within the previous 365 days." | 97.505(b) | No |
| When a new licensee may transmit | Only once the grant appears in ULS | 97.5(a) requires a person "named in an amateur station license grant on the ULS consolidated license database"; pool T1C10: "As soon as your operator/station license grant appears in the FCC's license database" | 97.5(a); T1C10 | No |
| Licence term | 10 years | "An amateur service license is normally granted for a 10-year term." | 97.25 | No |
| Renewal window | From 90 days before expiry until the expiry date | "…no later than the expiration date of the authorization, and no sooner than 90 days prior to the expiration date." | 47 CFR 1.949(a) | No |
| Grace period | 2 years. No operating privileges until the licence is renewed. | "…during a 2 year filing grace period… Unless and until the license grant is renewed, no privileges in this part are conferred." | 97.21(b) | No |
| FCC fee | $35 for a new licence, a renewal or a vanity call sign | Table 2 to 1.1102(c): "New license, modification | $35." "Renewal | $35." "Vanity Call Sign (Amateur Radio Service) | $35." | 47 CFR 1.1102(c) | Yes |
| Exam session fee | Set by the VEC; ARRL says usually $15 or less | "The exam fee is set by the VEC and is usually $15 or less." | https://www.arrl.org/what-to-bring-to-an-exam-session (tier C: facts only) | Yes |
| Who may apply | Anyone except a representative of a foreign government | "Except for a representative of a foreign government, any person who qualifies by examination is eligible to apply for an operator/primary station license grant." | 97.5(b)(1) | No |

**Facts that change often:** the pool version and its errata or withdrawn questions, the fees, VEC policies, and the eCFR text. The eCFR text is amended from time to time: 97.301, 97.305, 97.307 and 97.313 were last amended at 91 FR 1430–1431 on 14 Jan 2026, effective 13 Feb 2026 (see §7).

---

## 2. Sources

| # | Title | URL | Publisher | Licence, as the source states it | Tier | Use in the deck |
|---|---|---|---|---|---|---|
| S1 | 2026-2030 Technician Pool and Syllabus Public Release, Feb 19 2026 (PDF and DOCX, 79 pp.) | http://ncvec.org/downloads/2026-2030%20Technician%20Pool%20and%20Syllabus%20Public%20Release%20Feb%2019%202026.pdf (.docx at the same path) | NCVEC Question Pool Committee | Stated on the release page, **not** in the PDF: "The NCVEC Question Pool Committee (QPC) hereby releases the 2026-2030 Technician Class (Element 2) Question Pool into the public domain." | **A** | Real pool questions on cards, cited by ID (e.g. "Pool T1B11"). The outline (syllabus). The answer key. |
| S2 | NCVEC 2026-2030 Technician pool release page | https://www.ncvec.org/index.php/2026-2030-technician-question-pool | NCVEC | The public-domain line above. The site itself shows no licence; the 2022 page footer reads "© 2023 NCVEC". | A for the pool; C for other page text | Errata, release dates |
| S3 | Figures T-1, T-2, T-3 (JPG) and "2026-2030 Technician Pool 3 Diagrams.pdf" | http://ncvec.org/downloads/TECH_2026/Technician%20Diagram%20T1.jpg (and T2, T3); http://ncvec.org/downloads/TECH_2026/2026-2030%20Technician%20Pool%203%20Diagrams.pdf | NCVEC QPC | Released on the same page as the pool. The pool PDF says: "NOTE: The 3 graphics required for certain questions in sections T6C and T6D are included on the following pages." They are part of the pool document released into the public domain. | A | Schematic-reading cards (§6) |
| S4 | 47 CFR Part 97, Amateur Radio Service (eCFR, "up to date as of 2026-09-23"; issue 2026-09-22) | https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-97 (fetched through the API: https://www.ecfr.gov/api/versioner/v1/full/2026-09-22/title-47.xml?part=97) | Office of the Federal Register / FCC | US government work. 17 USC 105: "Copyright protection under this title is not available for any work of the United States Government" (https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title17-section105). eCFR's own wording on status was not fetched (§10). | **B** | Rules, numbers, band tables. Cite by section. |
| S5 | 47 CFR 1.949 (renewal), 1.1102 (fees), 1.1310 (RF exposure MPE table) | https://www.ecfr.gov/current/title-47/section-1.949 ; …/section-1.1102 ; …/section-1.1310 | as S4 | as S4 | B | 90-day renewal window, $35 fee, MPE limits |
| S6 | FR 2026-00587, WRC-15 implementation (91 FR 1405, 14 Jan 2026; effective 2026-02-13) | https://www.govinfo.gov/content/pkg/FR-2026-01-14/html/2026-00587.htm | FCC / Federal Register | US government work (17 USC 105) | B | Recent rule change (60 m; General and above only) |
| S7 | NCVEC "Amateur Question Pools" page | https://www.ncvec.org/index.php/amateur-question-pools | NCVEC | none stated | C | Pool structure, lifecycle, format |
| S8 | 2022-2026 Technician pool (errata of March 7 2022) | http://ncvec.org/downloads/Technician%20Pool%20and%20Syllabus%202022-2026%20Public%20Release%20Errata%20March%207%202022.pdf | NCVEC QPC | Not quoted: that page shows no public-domain line in the text I extracted | — | **Do not use.** Expired 6/30/2026. Used only to identify the traps in §7. |
| S9 | ARRL: What to Bring to an Exam Session; Withdrawn Questions; Question Pools; Getting Your Technician License | https://www.arrl.org/what-to-bring-to-an-exam-session ; https://www.arrl.org/withdrawn-questions ; https://www.arrl.org/question-pools | ARRL | "Copyright © 2026 The American Radio Relay League, Inc. All rights reserved. Reproduction of material from any ARRL web page without written permission is strictly prohibited." | **C** | Facts only, in our own words: exam fee, withdrawn-question status |
| S10 | W5YI Volunteer Examiner's Manual 2026.1 | https://www.w5yi-vec.org/W5YIVEManual2026.1.html | W5YI Licensing Services | "Copyright: 1984, 2026 W5YI Licensing Services Inc., Plano, Texas All Rights Reserved" | C | Retake policy (one VEC's) |

**No ARRL study text (License Manual, etc.) was used, and none should be.** It is tier C at most, and its wording must not be copied.

---

## 3. The exam outline (coverage checklist, in the owner's order)

This is quoted from the pool syllabus (S1, PDF p.2–3). The outline is public domain, so it may be copied. "Q" is the number of pool questions in the group, counted from the parsed pool; the counts match the syllabus totals. Every group supplies exactly one exam question.

**T1 Commission's Rules** (6 exam questions, 6 groups, 68 pool questions)
| Group | Q | Syllabus text |
|---|---|---|
| T1A | 11 | Purpose and permissible use of the Amateur Radio Service; Operator/primary station license grant; Meanings of basic terms used in FCC rules; Interference; RACES rules; Phonetics; Frequency Coordinator; Beacon |
| T1B | 12 | Frequency allocations; Emission modes; Spectrum sharing; Transmissions near band edges; Contacting the International Space Station; Power output |
| T1C | 11 | Licensing: classes, sequential and vanity call sign systems, places where the Amateur Radio Service is regulated by the FCC, name and address on FCC license database, term, renewal, grace period, maintaining mailing address; International communications |
| T1D | 12 | Authorized and prohibited transmissions; Sale of equipment |
| T1E | 11 | Control operator: eligibility, designating, privileges, duties, location, required; Control point; Control types: automatic, remote |
| T1F | 11 | Station identification; Repeaters; Third-party communications; Club stations; FCC inspection |

**T2 Operating Procedures** (3 exam questions, 3 groups, 37)
| T2A | 11 | Station operation: choosing an operating frequency, calling another station, test transmissions; Band plans: calling frequencies, repeater offsets |
|---|---|---|
| T2B | 14 | VHF/UHF operating practices: FM repeater, simplex, reverse splits; Access tones: CTCSS, DTMF; DMR operation; Resolving operating problems; Q signals |
| T2C | 12 | Public service: emergency operations, applicability of FCC rules, RACES and ARES, net and traffic procedures, operating restrictions during emergencies, use of phonetics in message handling |

**T3 Radio Wave Propagation** (3, 3, 35)
| T3A | 12 | Radio wave characteristics: how a radio signal travels, fading, multipath, polarization, wavelength vs absorption; Antenna orientation |
|---|---|---|
| T3B | 12 | Electromagnetic wave properties: wavelength vs frequency, nature and velocity of electromagnetic waves, relationship of wavelength and frequency; Electromagnetic Spectrum Definitions: UHF, VHF, HF |
| T3C | 11 | Propagation modes: sporadic E, meteor scatter, auroral propagation, tropospheric ducting; F region skip; Line of sight and radio horizon |

**T4 Amateur Radio Practices** (2, 2, 23)
| T4A | 12 | Station setup: connecting a microphone, RF power meter, a power source, a computer, digital equipment, an SWR meter; RF grounding; Mobile radio installation |
|---|---|---|
| T4B | 11 | Operating controls: frequency tuning, use of filters, squelch function, AGC, memory channels, noise blanker, microphone gain, receiver incremental tuning (RIT), bandwidth selection, scanning function; Digital transceiver configuration; DMR code plugs and talk groups |

**T5 Electrical Principles** (4, 4, 50)
| T5A | 11 | Current and voltage: terminology and units, conductors and insulators, alternating and direct current |
|---|---|---|
| T5B | 13 | Math for electronics: conversion of electrical units, decibels |
| T5C | 12 | Capacitance and inductance terminology and units; Radio frequency definition and units; Impedance definition and units; Calculating power |
| T5D | 14 | Ohm's Law; Series and parallel circuits |

**T6 Electronic and Electrical Components** (4, 4, 46)
| T6A | 11 | Fixed and variable resistors; Capacitors; Inductors; Fuses; Switches; Batteries |
|---|---|---|
| T6B | 12 | Semiconductors: basic principles and applications of solid-state devices, diodes and transistors; Gain |
| T6C | 12 | Circuit diagrams: use of term schematic, basic structure; Schematic symbols of basic components |
| T6D | 11 | Component functions: rectifiers, relays, voltage regulators, meters, indicators, integrated circuits, transformers; Resonant circuit; Shielding |

**T7 Practical Circuits** (4, 4, 44)
| T7A | 11 | Station equipment: receivers, transceivers, transmitter amplifiers, RF preamplifiers, transverters; Basic radio circuit concepts and terminology: sensitivity, selectivity, mixers, oscillators, Push-To-Talk (PTT), VFO, modulation |
|---|---|---|
| T7B | 11 | Symptoms, causes, and cures of common transmitter and receiver problems: overload and overdrive, distortion, interference and consumer electronics, RF feedback |
| T7C | 11 | Antenna and transmission line measurements and troubleshooting: measuring SWR, effects of high SWR, causes of feed line failures; Basic coaxial cable characteristics; Use of dummy loads when testing |
| T7D | 11 | Using basic test instruments: voltmeter, ammeter, and ohmmeter; Soldering |

**T8 Signals and Emissions** (4, 4, 47)
| T8A | 12 | Basic characteristics of FM and SSB; Bandwidth of various modulation modes: CW, SSB, FM, fast-scan TV; Choice of emission type: selection of USB vs LSB, use of SSB for weak signal work, use of FM for VHF packet and repeaters |
|---|---|---|
| T8B | 12 | Amateur satellite operation: Doppler shift, basic orbits, operating protocols, modulation mode selection, transmitter power considerations, telemetry, satellite tracking programs, beacons, uplink and downlink mode definitions, spin fading, definition of "LEO", setting uplink power |
| T8C | 11 | Operating activities: radio direction finding, contests, linking over the internet, exchanging grid locators |
| T8D | 12 | Non-voice and digital communications: image signals and definition of NTSC, CW, packet radio, PSK, APRS, error detection and correction, amateur radio networking, DMR, WSJT modes, Broadband-Hamnet |

**T9 Antennas and Feed Lines** (2, 2, 23)
| T9A | 11 | Antennas: vertical and horizontal polarization, concept of antenna gain, definition and types of beam antennas, antenna loading, common portable and mobile antennas, relationships between resonant length and frequency, dipole pattern |
|---|---|---|
| T9B | 12 | Feed lines: types, attenuation vs frequency, selecting; SWR concepts; Antenna tuners (couplers); RF Connectors: selecting, weather protection |

**T0 Safety** (3, 3, 36)
| T0A | 12 | Power circuits and hazards: hazardous voltages, fuses and circuit breakers, grounding, electrical code compliance; Lightning protection; Battery safety |
|---|---|---|
| T0B | 11 | Antenna safety: tower safety and grounding, installing antennas, antenna supports |
| T0C | 13 | RF hazards: radiation exposure, proximity to antennas, recognized safe power levels, radiation types, duty cycle |

**Totals:** 10 subelements, 35 groups, 35 exam questions, 409 pool questions. Each group's IDs run continuously from 01 to its count, with no gaps.

**Weights, derived from the syllabus:**
- T1 is 6/35, about 17%.
- T5, T6, T7 and T8 are each 4/35, about 11%.
- T2, T3 and T0 are each 3/35, about 9%.
- T4 and T9 are each 2/35, about 6%.

**Syllabus items with no correct answer or stem in the pool:** AGC, memory channels, noise blanker (T4B); RF preamplifiers (T7A); overdrive (T7B); Broadband-Hamnet as a name (T8D). I checked stems and correct answers by string search; some of these terms appear only in distractors. Cover them as "extra" or skip them. The deck still covers every group.

---

## 4. Concept inventory (teaching order)

**Key to the columns:**
- **Def.:** a plain definition taken from the source named. "Pool" means the pool's keyed correct answer; "97.x" means 47 CFR.
- **Pre:** concepts to teach first.
- **V:** volatile (✔ means it could change with rule amendments or a new pool).
- **C/E:** core or extra.
- **Pool IDs:** the questions that test the concept. Every one of the 409 IDs appears at least once below.
- **Concept IDs:** proposed for `concepts/fcc-technician.json` (prefix `tech.`).

### Topic 1: Units, prefixes and basic electrical quantities (T5A, T5B, T5C)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.elec.current | Current; ampere | "the flow of electrons in an electric circuit" is current; measured in amperes (Pool) | T5A01, T5A03 | — | | C |
| tech.elec.voltage | Voltage | A difference in voltage causes electron flow (Pool T5A05, errata wording) | T5A05, T7D01 | — | | C |
| tech.elec.power | Power; watt | "the rate at which electrical energy is used"; measured in watts (Pool) | T5A02, T5A10 | current, voltage | | C |
| tech.elec.conductor-insulator | Conductors and insulators | Metals conduct because "They have many free electrons"; glass is a good insulator (Pool) | T5A07, T5A08 | current | | C |
| tech.elec.ac-dc | Alternating current | "Current that alternates between positive and negative directions" (Pool) | T5A09 | current | | C |
| tech.elec.frequency | Frequency; hertz | "the number of times per second that an alternating current makes a complete cycle"; unit hertz (Pool) | T5A04, T5A06 | AC | | C |
| tech.elec.resistance | Resistance opposes all current | Resistance opposes all the current types listed ("All these choices are correct") (Pool T5A11) | T5A11 | current | | C |
| tech.math.prefixes | Metric prefixes: milli, micro, pico, kilo, mega, giga | 1.5 A = 1500 mA; 1 kV = 1000 V; 1 µV = one-millionth of a volt; 500 mW = 0.5 W; 3000 mA = 3 A; 1,000,000 pF = 1 µF (Pool) | T5B01, T5B03, T5B04, T5B05, T5B06, T5B08 | units | | C |
| tech.math.freq-conversion | Converting Hz, kHz, MHz, GHz | 1,500,000 Hz = 1500 kHz; 3.525 MHz = 3525 kHz; 28400 kHz = 28.400 MHz; 2425 MHz = 2.425 GHz (Pool) | T5B02, T5B07, T5B12, T5B13 | prefixes, frequency | | C |
| tech.math.abbrev | kHz, MHz abbreviations | kilohertz = kHz; megahertz = MHz (Pool) | T5C06, T5C07 | prefixes | | C |
| tech.math.decibel | Decibels for power ratios | 5→10 W ≈ 3 dB; 12→3 W ≈ −6 dB; 20→200 W = 10 dB (Pool) | T5B09, T5B10, T5B11 | power | | C |
| tech.elec.capacitance | Capacitance; farad | "ability to store energy in an electric field"; unit farad (Pool) | T5C01, T5C02 | voltage | | C |
| tech.elec.inductance | Inductance; henry | "ability to store energy in a magnetic field"; unit henry (Pool) | T5C03, T5C04 | current | | C |
| tech.elec.impedance | Impedance; ohm | "The opposition to AC current flow"; unit ohm (Pool) | T5C12, T5C05 | AC, resistance | | C |

### Topic 2: Radio waves and the spectrum (T3B)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.wave.components | E and H fields at right angles | The two components of a radio wave are the electric and magnetic fields; "They are at right angles" (Pool) | T3B03, T3B01 | — | | C |
| tech.wave.polarization-def | Polarization is set by the E-field | "The orientation of the electric field" (Pool) | T3B02, T9A03 | E and H fields | | C |
| tech.wave.velocity | Speed of radio waves | Speed of light, ≈300,000,000 m/s; all radio frequencies travel at the same velocity in free space (Pool) | T3B04, T3B11, T3B12 | — | | C |
| tech.wave.wavelength | Wavelength vs frequency; 300/f | "Wavelength gets shorter as frequency increases"; "Wavelength in meters equals 300 divided by frequency in megahertz" (Pool) | T3B05, T3B06 | frequency, velocity | | C |
| tech.wave.band-names | Bands named by wavelength | Bands are also identified by "The approximate wavelength in meters" (Pool) | T3B07 | wavelength | | C |
| tech.wave.hf-vhf-uhf | HF, VHF, UHF ranges | HF 3–30 MHz, VHF 30–300 MHz, UHF 300–3000 MHz (Pool; 97.3(b)(4),(12),(13)) | T3B08, T3B09, T3B10 | frequency | | C |

### Topic 3: The service and licensing (T1A, T1C)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.rules.purpose | Basis and purpose | 97.1(c): "advancing skills in both the communication and technical phases of the art" (97.1; Pool) | T1A01 | — | | C |
| tech.rules.fcc | FCC regulates and enforces | "The FCC" (Pool T1A02) | T1A02 | — | | C |
| tech.rules.phonetics-rule | Phonetics encouraged for ID | "Use of a phonetic alphabet as an aid for correct station identification is encouraged" (97.119(b)(2)) | T1A03 | station ID | | C |
| tech.lic.notification | Licence notification by email | "Email from the FCC with a link to download the license grant" (Pool); 97.23 requires an email address | T1A04 | — | ✔ | C |
| tech.lic.uls | ULS proves the grant | "The license appears in the FCC ULS database" (Pool); 97.7(a) | T1A05, T1C10 | — | | C |
| tech.lic.classes | Classes issued now | New licences only for Technician, General, Amateur Extra (Pool T1C01, errata wording); 97.17(a): "No new license grant will be issued for a Novice or Advanced Class" | T1C01 | — | | C |
| tech.lic.vanity | Vanity call sign | Any licensed amateur may select one (Pool); 97.19 | T1C02 | call sign | | C |
| tech.lic.callsign-format | Group D call sign format | "KF1XXX" is a valid Group D format for Technician (Pool; no rule cited, FCC page not fetched) | T1C05 | call sign | ✔ | C |
| tech.lic.email | Consequence of an unreachable email address | "Revocation of the station license or suspension of the operator license" (97.23; Pool) | T1C04 | — | | C |
| tech.lic.vessels | Operating aboard a vessel | "You may operate from a US-documented vessel with the master's permission" (Pool; 97.5(a)(2), 97.11(a)) | T1C06 | — | | C |
| tech.lic.term | 10-year term | 97.25; Pool | T1C08 | — | | C |
| tech.lic.renewal-window | Renew up to 90 days before expiry | 1.949(a); Pool | T1C07 | term | | C |
| tech.lic.grace | 2-year grace period, no transmitting | 97.21(b); Pool | T1C09, T1C11 | term | | C |
| tech.lic.first-transmit | When a new licensee may transmit | When the grant appears in the database (Pool; 97.5(a)) | T1C10 | ULS | | C |
| tech.lic.international | International communications | "incidental to the purposes of the amateur service and to remarks of a personal character" (97.117) | T1C03 | — | | C |
| tech.lic.club | Club station licence | Club "must be composed of at least four persons" (97.5(b)(2)) | T1F11 | — | | C |
| tech.lic.places | Places regulated by the FCC | Appendix 1 to Part 97 lists them (syllabus names this; no pool question) | — | — | | E |
| tech.lic.space-station | Space station | "An amateur station located more than 50 km above the Earth's surface" (97.3(a)(41)) | T1A07 | — | | C |
| tech.lic.freq-coordinator | Frequency coordinator | Recommends channels for repeater and auxiliary stations; selected by local amateurs eligible to run such stations (97.3(a)(22); Pool) | T1A08, T1A09 | repeater | | C |
| tech.lic.races-control-op | RACES control operator | Needs a licence plus "Certification of current enrollment by a civil defense organization" (97.407(a)) | T1A10 | RACES | | C |
| tech.rules.malicious-interference | Willful interference prohibited | "No amateur operator shall willfully or maliciously interfere" (97.101(d)) | T1A11 | — | | C |
| tech.rules.beacons | Automatic HF beacons | 28.20–28.30 MHz (97.203(d)); beacon power not over 100 W (97.203(c)) | T1A06 | 10 m band | ✔ | C |

### Topic 4: Technician privileges: bands, modes and power (T1B, T1E06)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.priv.vhf-uhf-all | All amateur bands above 30 MHz | 97.301(a) lists 6 m through above 275 GHz for "Technician, General, Advanced, or Amateur Extra" | T1B03, T1B04, T1B12 | band names | ✔ | C |
| tech.priv.6m | 6 m band 50–54 MHz (Region 2) | 97.301(a); 52.525 MHz is in 6 m (Pool) | T1B03 | | ✔ | C |
| tech.priv.2m | 2 m band 144–148 MHz (Region 2) | 97.301(a); 146.52 MHz is in 2 m (Pool) | T1B04 | | ✔ | C |
| tech.priv.hf | Technician HF: 80, 40, 15 m CW; 10 m 28.0–28.5 MHz | 97.301(e): 3.525–3.600, 7.025–7.125, 21.025–21.200, 28.0–28.5 MHz; 97.307(f)(9): CW only on 80, 40 and 15 m | T1B05, T1B06 | band names | ✔ | C |
| tech.priv.10m-phone | 10 m phone 28.300–28.500 MHz, SSB only | Pool T1B01; 97.305(c) row "10 m 28.3-28.5 MHz Phone, image"; 97.307(f)(10): "CW … or phone emissions J3E and R3E" | T1B01, T1B06 | 10 m | ✔ | C |
| tech.priv.digital-ft8 | Bands where Technicians may use FT8 | "All these choices are correct" (Pool T1B05; 97.301, 97.305) | T1B05 | digital modes | ✔ | C |
| tech.priv.cw-only-vhf | CW-only 50.0–50.1 and 144.0–144.1 MHz | Pool T1B07; 97.305(a),(c): phone and data start at 50.1 and 144.1 | T1B07 | 6 m, 2 m | ✔ | C |
| tech.priv.ssb-above-50 | SSB above 50 MHz | Allowed "In at least some segment of all these bands" (Pool) | T1B10 | SSB | | C |
| tech.priv.secondary | Secondary allocations | Must avoid interfering with non-amateur stations (Pool; 97.303) | T1B08 | | | C |
| tech.priv.band-edge | Stay off the exact band edge | "All these choices are correct" (Pool; 97.101(a)); covers frequency drift, calibration error and sideband spread | T1B09 | bandwidth | | C |
| tech.priv.iss | Contacting the ISS | "Any amateur with a Technician class or higher license" (Pool; 97.301, 97.207(c)) | T1B02 | space station | | C |
| tech.priv.power-hf | 200 W PEP on Technician HF segments | 97.313(c)(2); Pool | T1B11 | PEP | ✔ | C |
| tech.priv.power-max | 1500 W PEP (1.5 kW) above 30 MHz | 97.313(b); Pool | T1B12 | PEP | ✔ | C |
| tech.priv.min-power | Minimum power necessary | "An amateur station must use the minimum transmitter power necessary" (97.313(a)) | — | | | E |
| tech.priv.pep | Peak envelope power | "The average power supplied to the antenna transmission line by a transmitter during one RF cycle at the crest of the modulation envelope" (97.3(b)(9)) | T1B11, T1B12 | power | | C |
| tech.priv.extra-segments | Technician may not operate in Extra segments | "At no time" (Pool T1E06) | T1E06 | privileges | | C |

### Topic 5: Control operator and station control (T1E)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.ctl.control-operator | Control operator | "An amateur operator designated by the licensee of a station to be responsible for the transmissions from that station" (97.3(a)(13)) | T1E11, T1E01 | | | C |
| tech.ctl.always-required | A control operator is always required | "Never" may a station transmit without one (Pool; 97.7) | T1E01 | | | C |
| tech.ctl.designate | The licensee designates the control operator | 97.103(b) | T1E03 | | | C |
| tech.ctl.privileges | The control operator's class sets privileges | 97.105(b); Pool T1E04 | T1E04 | | | C |
| tech.ctl.shared-responsibility | Licensee and control operator are both responsible | "both persons are equally responsible" (97.103(a)) | T1E07 | | | C |
| tech.ctl.control-point | Control point | "The location at which the control operator function is performed" (97.3(a)(14)) | T1E05 | | | C |
| tech.ctl.automatic | Automatic control | Compliance "without the control operator being present at a control point" (97.3(a)(6)); example: repeater operation (Pool) | T1E08 | repeater | | C |
| tech.ctl.remote | Remote control | Control operator "indirectly manipulates … through a control link" (97.3(a)(39)); example: over the internet (Pool); "Any station may be remotely controlled" (97.109(c)) | T1E09, T1E10 | | | C |
| tech.ctl.local | Local control | Control operator "directly manipulates the operating adjustments" (97.3(a)(31)) | — | | | E (contrast card) |
| tech.ctl.satellite-control-op | Control operator via a satellite | "Any amateur allowed to transmit on the satellite uplink frequency" (Pool; 97.207(c)) | T1E02 | | | C |

### Topic 6: What may and may not be sent; ID; third party; repeaters (T1D, T1F)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.tx.banned-countries | Countries that object | "whose administration has notified the ITU that it objects" (97.111(a)(1)) | T1D01 | | | C |
| tech.tx.broadcasting | Broadcasting prohibited; definition | "Transmissions intended for reception by the general public, either direct or relayed" (97.3(a)(10)); 97.113(b) | T1D02, T1D10 | | | C |
| tech.tx.one-way | Allowed one-way transmissions | 97.111(b) list (adjustments, telecommand, emergency, Morse practice, bulletins, telemetry) | T1D02 | | | E |
| tech.tx.encoded | Encoded messages | Only control commands to space stations or model craft (Pool; 97.113(a)(4), 97.211(b), 97.215(b)) | T1D03 | | | C |
| tech.tx.music | Music | Only "incidental to an authorized retransmission of manned spacecraft communications" (Pool; 97.113(c)) | T1D04 | | | C |
| tech.tx.sale | Equipment for sale | Allowed if not on a regular basis (97.113(a)(3)(ii)) | T1D05 | | | C |
| tech.tx.obscene | Obscene or indecent language | "Any such language is prohibited" (Pool; 97.113(a)(4)) | T1D06 | | | C |
| tech.tx.auxiliary | Auxiliary station | "transmitting communications point-to-point within a system of cooperating amateur stations" (97.3(a)(7)); example: repeater receiver link (Pool) | T1D07 | repeater | | C |
| tech.tx.compensation-teacher | Compensation when teaching | Classroom instruction exception (97.113(a)(3)(iii)) | T1D08 | | | C |
| tech.tx.news-gathering | Help for broadcasters | Only for immediate safety of life or protection of property (97.113(b)) | T1D09 | | | C |
| tech.tx.model-craft | Model craft control | No on-air ID needed if a label is on the transmitter; power ≤ 1 W (97.215) | T1D11, T1D03 | | | C |
| tech.tx.test-id | Test transmissions must identify | Pool T1D12; 97.119(a) | T1D12 | | | C |
| tech.id.interval | ID every 10 minutes and at the end | "at the end of each communication, and at least every 10 minutes during a communication" (97.119(a)) | T1F02, T1F03 | | | C |
| tech.id.tactical | Tactical call signs still need the FCC call sign | Pool T1F02 | T1F02 | | | C |
| tech.id.english-phone | Phone ID in English; CW or phone | 97.119(b)(1),(2); Pool | T1F04, T1F05 | | | C |
| tech.id.indicators | Self-assigned indicators | Separated by a slant mark or a suitable word (97.119(c)); Pool: "All these choices are correct" | T1F06 | | | C |
| tech.id.cw-speed | Automatic CW ID at most 20 wpm | 97.119(b)(1) | — | | | E |
| tech.3p.definition | Third-party communications | "A message from the control operator (first party) … to another amateur station control operator (second party) on behalf of another person (third party)" (97.3(a)(47)) | T1F08 | | | C |
| tech.3p.foreign | Third party to foreign stations | Requires a third-party agreement with that country (97.115(a)(2); Pool) | T1F07 | third party | | C |
| tech.rpt.definition | Repeater | "simultaneously retransmits the transmission of another amateur station on a different channel or channels" (97.3(a)(40)) | T1F09 | | | C |
| tech.rpt.accountability | Repeater retransmitting a violation | The originating station's control operator is accountable, not the repeater's (97.205(g); Pool) | T1F10 | repeater | | C |
| tech.rules.inspection | FCC inspection | "At any time upon request by an FCC representative" (Pool; 97.103(c)) | T1F01 | | | C |

### Topic 7: Operating practice (T2A, T2B)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.op.offset | Repeater offset | "The difference between a repeater's transmit and receive frequencies" (Pool) | T2A07 | repeater | | C |
| tech.op.offset-2m | 2 m offset ±600 kHz | Pool | T2A01 | offset | ✔ (band plan) | C |
| tech.op.offset-70cm | 70 cm offset ±5 MHz | Pool | T2A03 | offset | ✔ | C |
| tech.op.146520 | 146.520 MHz, 2 m FM simplex calling frequency | Pool | T2A02 | simplex | ✔ | C |
| tech.op.calling | Calling a known station on a repeater | Their call sign, then yours (Pool) | T2A04 | | | C |
| tech.op.cq | CQ means "calling any station"; answering a CQ; calling CQ | Pool | T2A05, T2A06, T2A08 | | | C |
| tech.op.listening | "…followed by the word 'listening'" | Pool | T2A09 | | | C |
| tech.op.band-plan | Band plan | "A voluntary guideline for using different modes or activities within an amateur band" (Pool) | T2A10 | | ✔ | C |
| tech.op.simplex | Simplex | Transmitting and receiving on the same frequency (Pool); simplex channels exist so stations can talk without tying up a repeater | T2A11, T2B09 | | | C |
| tech.op.reverse | Reverse function | "To listen on a repeater's input frequency" (Pool) | T2B01 | offset | | C |
| tech.op.ctcss | CTCSS | A sub-audible tone sent with voice to open a receiver's squelch (Pool) | T2B02 | squelch | | C |
| tech.op.dtmf | DTMF | Two simultaneous audio tones (Pool) | T2B06, T8C06 | | | C |
| tech.op.linked | Linked repeater network | Signals received by one repeater are transmitted by all (Pool) | T2B03 | repeater | | C |
| tech.op.no-access | Can hear a repeater but can't access it | "All these choices are correct" (Pool) | T2B04 | CTCSS | | C |
| tech.op.overdev-voice | FM audio drops out on voice peaks | "You are talking too loudly" (Pool) | T2B05 | | | C |
| tech.op.shared-freq | Two stations interfering on one frequency | "should negotiate continued use" (Pool; 97.101(b)) | T2B08 | | | C |
| tech.op.q-signals | QRM (interference), QSY (changing frequency) | Pool | T2B10, T2B11 | | | C |
| tech.op.squelch | Squelch | "Mute the receiver audio when a signal is not present" (Pool) | T2B13, T4B03 | | | C |
| tech.dmr.talkgroup | DMR talkgroup | "An identifier used by DMR to organize radio traffic" (Pool); join it by programming the group's ID or code | T2B14, T2B07, T4B09 | DMR | | C |
| tech.dmr.color-code | DMR color code | "An access code which must be programmed into a DMR transmitter to access a specific repeater" (Pool) | T2B12 | DMR | | C |

### Topic 8: Public service and emergencies (T2C)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.ps.rules-always | FCC rules always apply | Pool T2C01 | T2C01 | | | C |
| tech.ps.net-control | Net control station duties; transmit only when directed | Pool | T2C02, T2C07 | | | C |
| tech.ps.phonetics | Spell unusual words phonetically | Pool | T2C03 | | | C |
| tech.ps.races | RACES | "An FCC Part 97 amateur radio service for civil defense communications during national emergencies" (Pool); needs civil-defense certification (97.407) | T2C04, T2C12, T1A10 | | | C |
| tech.ps.ares | ARES | "A group of licensed amateurs who have voluntarily registered their qualifications and equipment for communications duty in the public service" (Pool) | T2C06 | | | C |
| tech.ps.traffic | Traffic; preamble; check | Traffic = "Formal messages exchanged by net stations"; the preamble tracks the message; check = "The number of words or word equivalents in the text" (Pool) | T2C05, T2C10, T2C11 | | | C |
| tech.ps.winlink | Winlink | Relays messages using email addresses based on call signs (Pool) | T2C08 | | | C |
| tech.ps.outside-privileges | Operating outside your privileges | "only in situations involving the immediate safety of human life or protection of property" (Pool; 97.403) | T2C09 | | | C |
| tech.ps.emergency-priority | Priority to emergency traffic | 97.101(c) | — | | | E |

### Topic 9: Ohm's law, power, series and parallel (T5C, T5D)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.ohm.formulas | I = E/R, E = I×R, R = E/I | Pool | T5D01, T5D02, T5D03 | V, I, R | | C |
| tech.ohm.calc-r | Solving for R | 90 V/3 A = 30 Ω; 12/1.5 = 8 Ω; 12/4 = 3 Ω (Pool) | T5D04, T5D05, T5D06 | formulas | | C |
| tech.ohm.calc-i | Solving for I | 120/80 = 1.5 A; 200/100 = 2 A; 240/24 = 10 A (Pool) | T5D07, T5D08, T5D09 | formulas | | C |
| tech.ohm.calc-e | Solving for E | 2 Ω × 0.5 A = 1 V; 10 × 1 = 10 V; 10 × 2 = 20 V (Pool) | T5D10, T5D11, T5D12 | formulas | | C |
| tech.pow.formula | P = I × E | Pool | T5C08 | power | | C |
| tech.pow.calc | Power calculations | 13.8 V × 10 A = 138 W; 12 × 2.5 = 30 W; 120 W / 12 V = 10 A (Pool) | T5C09, T5C10, T5C11 | P = IE | | C |
| tech.circ.series-parallel | Series: the same current; parallel: the same voltage | Pool | T5D13, T5D14 | | | C |

### Topic 10: Components and schematics (T6)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.comp.resistor | Resistor; potentiometer | A resistor opposes current in a DC circuit; a potentiometer is an adjustable volume control that controls resistance (Pool) | T6A01, T6A02, T6A03 | resistance | | C |
| tech.comp.capacitor | Capacitor | Stores energy in an electric field; conductive surfaces separated by an insulator (Pool) | T6A04, T6A05 | capacitance | | C |
| tech.comp.inductor | Inductor | Stores energy in a magnetic field; typically a coil of wire (Pool) | T6A06, T6A07 | inductance | | C |
| tech.comp.switches | SPDT and SPST switches | SPDT: "A single circuit is switched between one of two other circuits"; T-2 component 3 is SPST (Pool) | T6A08, T6A09 | | | C |
| tech.comp.batteries | Rechargeable vs non-rechargeable chemistries | Carbon-zinc is not rechargeable (Pool); the rechargeable ones are listed in T6A10's options | T6A10, T6A11 | | | C |
| tech.semi.diode | Diode; anode and cathode; stripe marks the cathode; forward voltage drop | Pool | T6B02, T6B09, T6B06, T6B01 | | | C |
| tech.semi.led | LED emits light with forward current; used as an indicator | Pool | T6B07, T6D07 | diode | | C |
| tech.semi.transistor | Transistor: switch; three semiconductor regions; power gain | Pool | T6B03, T6B04, T6B10 | | | C |
| tech.semi.bjt-fet | BJT electrodes (emitter, base, collector); FET (gate, drain, source) | Pool | T6B12, T6B05, T6B08 | transistor | | C |
| tech.semi.gain | Gain | "All these choices are correct" (Pool T6B11) | T6B11 | | | C |
| tech.sch.schematic | Schematic; shows component connections | Pool | T6C01, T6C12 | | | C |
| tech.sch.fig-t1 | Figure T-1 symbols | 1 resistor, 2 transistor, 3 lamp, 4 battery; component 2 controls current flow (Pool) | T6C02, T6C03, T6C04, T6C05, T6D10 | components | | C |
| tech.sch.fig-t2 | Figure T-2 symbols | 3 SPST switch, 4 transformer, 6 capacitor, 8 LED, 9 variable resistor (Pool) | T6A09, T6C06, T6C07, T6C08, T6C09 | components | | C |
| tech.sch.fig-t3 | Figure T-3 symbols | 3 variable inductor, 4 antenna (Pool) | T6C10, T6C11 | components | | C |
| tech.fn.rectifier | Rectifier turns AC into varying DC | Pool | T6D01 | diode | | C |
| tech.fn.relay | Relay | "An electrically-controlled switch" (Pool) | T6D02 | | | C |
| tech.fn.shielding | Shielded wire | Prevents coupling of unwanted signals (Pool) | T6D03 | | | C |
| tech.fn.meter | Meter | Displays an electrical quantity as a numeric value (Pool) | T6D04 | | | C |
| tech.fn.regulator | Regulator | Controls the voltage from a power supply (Pool) | T6D05 | | | C |
| tech.fn.transformer | Transformer | Changes 120 V AC to a lower AC voltage (Pool) | T6D06 | inductor | | C |
| tech.fn.resonant | Resonant circuit | An inductor and a capacitor in series or parallel (Pool) | T6D08, T6D11 | L, C | | C |
| tech.fn.ic | Integrated circuit | Several semiconductors and other components in one package (Pool) | T6D09 | | | C |

### Topic 11: Station equipment, controls and setup (T7A, T4A, T4B)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.rx.sensitivity-selectivity | Sensitivity vs selectivity | Sensitivity: the ability to detect a signal. Selectivity: the ability to discriminate between signals (Pool) | T7A01, T7A04 | | | C |
| tech.eq.transceiver | Transceiver | Combines a receiver and a transmitter (Pool) | T7A02 | | | C |
| tech.eq.mixer-osc | Mixer, oscillator, VFO | A mixer converts frequency; an oscillator generates a frequency; the VFO sets receive and transmit frequency (Pool) | T7A03, T7A05, T7A11 | | | C |
| tech.eq.transverter | Transverter | Converts a transceiver's RF input and output to another band (Pool) | T7A06 | mixer | | C |
| tech.eq.ptt | PTT input | Switches to transmit "when grounded" (Pool) | T7A07 | | | C |
| tech.eq.modulation | Modulation | "combining speech with an RF carrier signal" (Pool) | T7A08 | | | C |
| tech.eq.amplifier | RF power amplifier; SSB/CW-FM switch | An RF amplifier increases output power; the switch sets the amplifier for the mode (Pool, errata wording) | T7A10, T7A09 | | | C |
| tech.setup.power-supply | 13.8 V at 12 A for a 50 W mobile; short heavy wires; negative return to the battery chassis ground | Pool | T4A01, T4A03, T4A11 | Ohm's law | | C |
| tech.setup.battery-time | Battery run time = Ah ÷ average current | Pool | T4A09 | current | | C |
| tech.setup.meters | SWR meter choice; RF power meter in the feed line | Pool | T4A02, T4A05 | SWR | | C |
| tech.setup.digital | Computer–radio interface; FT8 audio; "line in" to speaker | Pool | T4A04, T4A06, T4A07 | | | C |
| tech.setup.bonding | Flat copper strap for RF bonding | Pool | T4A08 | | | C |
| tech.setup.hotspot | Digital hotspot | Communicates with a digital voice or data network (Pool) | T4A10 | | | C |
| tech.setup.keyer | Electronic keyer | Assists manual sending of Morse code (Pool) | T4A12 | CW | | C |
| tech.ctrl.mic-gain | Too much mic gain distorts SSB audio | Pool | T4B01 | | | C |
| tech.ctrl.tuning | Keypad or VFO knob | Pool | T4B02 | | | C |
| tech.ctrl.off-freq-fm | FM received slightly off frequency sounds distorted | Pool | T4B04 | | | C |
| tech.ctrl.scan | Scanning | Tunes through a range to check for activity (Pool) | T4B05 | | | C |
| tech.ctrl.rit | RIT or clarifier corrects the voice pitch of SSB | Pool | T4B06 | | | C |
| tech.ctrl.filters | Filter bandwidth matched to mode; 2400 Hz best for SSB | Pool | T4B08, T4B10 | bandwidth | | C |
| tech.dmr.codeplug | DMR code plug | "Configuration data loaded onto your radio to access repeaters and talkgroups" (Pool) | T4B07 | DMR | | C |
| tech.dstar.callsign | D-STAR: program your call sign before transmitting | Pool | T4B11 | | | C |
| tech.ctrl.agc-nb-memory | AGC, noise blanker, memory channels | In the syllabus only; no keyed answer | — | | | E |

### Topic 12: Test instruments and soldering (T7D)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.meas.voltmeter | Voltmeter measures potential, connected in parallel | Pool | T7D01, T7D02 | parallel | | C |
| tech.meas.ammeter | Ammeter measures current; a multimeter reading current goes in series | Pool | T7D04, T7D03 | series | | C |
| tech.meas.ohmmeter | Ohmmeter applies a small current and measures voltage; circuit unpowered; a discharged capacitor shows rising resistance | Pool | T7D05, T7D11, T7D10 | Ohm's law | | C |
| tech.meas.multimeter | Multimeter measures voltage and resistance; measuring voltage on the resistance setting can damage it | Pool | T7D07, T7D06 | | | C |
| tech.solder | Never acid-core solder; a cold joint looks rough or lumpy | Pool | T7D08, T7D09 | | | C |

### Topic 13: Signals, modes and activities (T8A–T8D)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.mod.ssb-am | SSB is a form of AM | Pool | T8A01 | modulation | | C |
| tech.mod.fm-uses | FM or PM for VHF packet and repeaters | Pool | T8A02, T8A04 | | | C |
| tech.mod.ssb-weak | SSB for weak-signal VHF/UHF; upper sideband on 10 m, VHF, UHF | Pool | T8A03, T8A06 | | | C |
| tech.mod.bandwidths | Bandwidths: CW 150 Hz (narrowest), SSB 3 kHz, FM 10–15 kHz, AM fast-scan TV about 6 MHz | Pool | T8A05, T8A11, T8A08, T8A09, T8A10, T8A07 | | | C |
| tech.mod.fm-disadvantage | FM: only one signal received at a time | Pool | T8A12 | | | C |
| tech.sat.beacon-telemetry | Satellite beacon and telemetry; anyone may receive telemetry | Pool | T8B01, T8B05, T8B11 | | | C |
| tech.sat.uplink-power | Excess power blocks other users; downlink ≈ beacon strength | Pool | T8B02, T8B12 | | | C |
| tech.sat.tracking | Tracking programs; Keplerian elements as input | Pool | T8B03, T8B06 | | | C |
| tech.sat.modes | Modes used by satellites; U/V = 70 cm up, 2 m down | Pool | T8B04, T8B08 | band names | | C |
| tech.sat.doppler | Doppler shift | "An observed change in signal frequency caused by relative motion between the satellite and Earth station" (Pool) | T8B07 | | | C |
| tech.sat.spin-fading | Spin fading | "Rotation of the satellite and its antennas" (Pool) | T8B09 | | | C |
| tech.sat.leo | LEO | "Low Earth Orbit, which has a period of around 100 minutes" (Pool) | T8B10 | | | C |
| tech.act.rdf | Radio direction finding; directional antenna for a transmitter hunt | Pool | T8C01, T8C02 | | | C |
| tech.act.contest | Contesting; send only the minimum exchange | Pool | T8C03, T8C04 | | | C |
| tech.act.grid | Grid locator | "A letter-number designator assigned to a geographic location" (Pool) | T8C05 | | | C |
| tech.act.voip | VoIP, IRLP (DTMF access), EchoLink (register with proof of licence), gateway | Pool | T8C06, T8C07, T8C08, T8C09, T8C10, T8C11 | DTMF | | C |
| tech.dig.modes | Digital modes; FT8 is a digital mode for low signal-to-noise operation; WSJT-X activities | Pool | T8D01, T8D02, T8D10 | | | C |
| tech.dig.aprs | APRS data; real-time tactical map | Pool | T8D03, T8D05 | | | C |
| tech.dig.ntsc | NTSC | "An analog fast-scan color TV signal" (Pool) | T8D04 | | | C |
| tech.dig.psk | PSK means Phase Shift Keying | Pool | T8D06 | | | C |
| tech.dig.dmr | DMR | "time-multiplexing two digital voice signals on a single 12.5 kHz repeater channel" (Pool) | T8D07 | | | C |
| tech.dig.packet | Packet radio contents | "All these choices are correct" (Pool) | T8D08 | | | C |
| tech.dig.cw | CW means Morse code transmission | Pool | T8D09 | | | C |
| tech.dig.arq | ARQ | Receiving station detects errors and requests retransmission (Pool) | T8D11 | | | C |
| tech.dig.mesh | Mesh network | "An amateur-radio data network using commercial Wi-Fi equipment with modified firmware" (Pool) | T8D12 | | | C |

### Topic 14: Propagation (T3A, T3C)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.prop.multipath | Multipath; picket fencing; higher data error rates; irregular ionospheric fading | Pool | T3A01, T3A06, T3A10, T3A08 | wave | | C |
| tech.prop.absorption | Vegetation absorbs UHF and microwave; precipitation cuts microwave range; fog or rain have little effect on 10 m and 6 m | Pool | T3A02, T3A07, T3A12 | | | C |
| tech.prop.polarization-use | Horizontal polarization for VHF/UHF CW and SSB; cross-polarization reduces signal; ionospheric signals are elliptically polarized | Pool | T3A03, T3A04, T3A09 | polarization | | C |
| tech.prop.reflection | Reflect around obstructions to reach a repeater | Pool | T3A05 | | | C |
| tech.prop.ionosphere | The ionosphere reflects HF; UHF is rarely ionospheric; long-distance ionospheric propagation is far more common on HF | Pool | T3A11, T3C01, T3C02 | | | C |
| tech.prop.modes | Auroral (raspy sound); sporadic E (10, 6, 2 m); knife-edge diffraction; tropospheric ducting (about 300 miles, temperature inversions); meteor scatter (6 m) | Pool | T3C03, T3C04, T3C05, T3C06, T3C08, T3C07 | | | C |
| tech.prop.f-region | 10 m F-region from dawn to shortly after sunset at high sunspot activity; 6 and 10 m at the sunspot peak | Pool | T3C09, T3C10 | ionosphere | | C |
| tech.prop.radio-horizon | Radio horizon lies beyond the visual horizon because of refraction | Pool | T3C11 | | | C |

### Topic 15: Antennas, feed lines and SWR (T9, T7C)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.ant.beam | Beam antenna concentrates signal in one direction; a Yagi has the most gain of the options | Pool | T9A01, T9A06 | gain | | C |
| tech.ant.gain | Antenna gain | "The increase in signal strength in a specified direction compared to a reference antenna" (Pool) | T9A11, T9A09 | | | C |
| tech.ant.loading | Loading: electrically lengthening with inductors | Pool | T9A02 | inductor | | C |
| tech.ant.dipole | Shortening raises resonant frequency; dipole strongest broadside | Pool | T9A05, T9A10 | wavelength | | C |
| tech.ant.handheld | Rubber duck has low efficiency; a car body shields; 19-inch ¼-wave on 2 m; 5/8-wave has more gain | Pool | T9A04, T9A07, T9A08, T9A09 | | | C |
| tech.fl.coax | Coax is 50 Ω and easy to use; loss rises with frequency; RG-213 loses less than RG-58; air hardline loses least; foam loses less than solid dielectric | Pool | T9B02, T9B03, T9B05, T9B08, T9B10, T9B11, T7C11 | | | C |
| tech.fl.connectors | Type N above 400 MHz; PL-259 at HF and VHF; tape outdoor connectors | Pool | T9B06, T9B07, T9B01 | | | C |
| tech.swr.def | SWR | "A measure of how well a load is matched to a transmission line" (Pool); 1:1 = perfect match; 4:1 = mismatch | T9B12, T7C04, T7C06 | impedance | | C |
| tech.swr.effects | High SWR lowers solid-state output to protect the RF amplifier; erratic SWR means a loose connection | Pool | T7C05, T7B04, T9B09 | SWR | | C |
| tech.swr.measure | Directional wattmeter; antenna analyzer | Pool | T7C08, T7C02 | | | C |
| tech.ant.tuner | Antenna tuner matches antenna-system impedance to the transceiver | Pool | T9B04 | impedance | | C |
| tech.fl.failure | Moisture causes coax failure; UV-resistant jacket; line loss becomes heat | Pool | T7C09, T7C10, T7C07 | | | C |
| tech.test.dummy-load | Dummy load: a 50 Ω non-inductive resistor on a heat sink, for testing off the air | Pool | T7C01, T7C03 | | | C |

### Topic 16: Interference and troubleshooting (T7B)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.rfi.overdeviation | Over-deviating: talk farther from the mic | Pool | T7B01 | FM | | C |
| tech.rfi.overload | Broadcast receiver can't reject strong signals; filter at the affected receiver; band-reject filter | Pool | T7B02, T7B05, T7B07 | | | C |
| tech.rfi.causes | Causes of RFI | "All these choices are correct" (Pool T7B03) | T7B03 | | | C |
| tech.rfi.neighbor | Check your own station first; neighbour-caused interference; cable TV connectors first | Pool | T7B06, T7B08, T7B09 | | | C |
| tech.rfi.distortion | Distorted repeater audio (several causes); ferrite choke on the mic cable for RF feedback | Pool | T7B10, T7B11 | | | C |

### Topic 17: Safety (T0)
| Concept ID | Concept | Def. (source) | Pool IDs | Pre | V | C/E |
|---|---|---|---|---|---|---|
| tech.safe.battery | Unprotected battery: a short causes burns, fire or explosion; rapid charging causes overheating or out-gassing | Pool | T0A01, T0A10 | | | C |
| tech.safe.shock | Current through the body; guarding against shock | Pool (both "All these choices are correct") | T0A02, T0A06 | | | C |
| tech.safe.wiring | Black = hot; fuse or breaker in series with hot only; the purpose of a fuse; never replace 5 A with 20 A | Pool | T0A03, T0A08, T0A04, T0A05 | series | ✔ (US wiring convention) | C |
| tech.safe.lightning | Lightning arrester on a grounded panel at feed-line entry; bond ground rods; short, direct ground wires; no sharp bends | Pool | T0A07, T0A09, T0B01, T0B10 | | | C |
| tech.safe.caps-hv | Filter capacitors hold charge; meters rated for the voltage | Pool | T0A11, T0A12 | capacitor | | C |
| tech.safe.tower | Climbing gear and training; never climb alone; overhead wires; turnbuckle safety wire; crank-up towers; 8-foot ground rod per leg; local electrical codes | Pool | T0B02, T0B03, T0B04, T0B05, T0B07, T0B08, T0B11 | | | C |
| tech.safe.powerline | 10-foot fall clearance from power lines; no antennas on utility poles | Pool | T0B06, T0B09 | | | C |
| tech.rfsafe.nonionizing | RF is non-ionizing; it cannot damage DNA | Pool | T0C01, T0C12 | | | C |
| tech.rfsafe.mpe | Lowest MPE at 50 MHz of the choices; limits vary with frequency because the body absorbs more at some frequencies | Pool; 1.1310 Table 1 (30–300 MHz has the lowest limits: 1.0 / 0.2 mW/cm²) | T0C02, T0C05 | frequency | ✔ | C |
| tech.rfsafe.duty-cycle | Duty cycle | "The percentage of time that a transmitter is transmitting"; going from 100% to 50% doubles the allowable power density; it affects average exposure | T0C11, T0C03, T0C10 | | | C |
| tech.rfsafe.evaluate | Exposure factors; evaluation methods; re-evaluate after changes; relocate antennas; RF burns; the licensee is responsible | Pool; 97.13(c) | T0C04, T0C06, T0C09, T0C08, T0C07, T0C13 | | ✔ | C |

**Count:** 238 concept rows across 17 topics. Of these, 231 are core and 7 are extra. The pool IDs listed cover all 409 questions; this was checked by script (the file `fcc-technician-pool.txt` holds the full text).

**For the concept registry:** any ID above may be split per question when cards are written. A simple rule is one concept per pool question, as `tech.q.T1B11`, plus the teaching concepts above.

---

## 5. Numbers and thresholds

| Figure | Conditions | Source line |
|---|---|---|
| 35 questions; pass = 26 correct | Element 2 | 97.503(a) |
| 409 pool questions; 35 groups; 10 subelements | 2026–2030 pool | Syllabus (S1) |
| Effective 7/01/2026 – 6/30/2030 | Current pool | Pool PDF header |
| 10-year licence term | | 97.25 |
| 2-year renewal grace period; no privileges during it | | 97.21(b); T1C09, T1C11 |
| Renew no sooner than 90 days before expiry | | 1.949(a); T1C07 |
| CSCE valid for 365 days | Element credit | 97.505(b) |
| $35 FCC fee | New, renewal, vanity | 1.1102(c) Table 2 |
| ≥ 3 VEs per exam session | | 97.509(a) |
| VE at least 18 years old; General or higher to give Technician exams | | 97.509(b)(2),(3)(i) |
| Every 10 minutes and at the end of a communication | Station ID | 97.119(a); T1F02, T1F03 |
| 20 wpm maximum | Automatic CW ID | 97.119(b)(1) |
| 200 W PEP | Technician on 3.525–3.60, 7.025–7.125, 21.025–21.20, 28.0–28.5 MHz | 97.313(c)(2); T1B11 |
| 1.5 kW (1500 W) PEP | Absolute maximum; the Technician limit above 30 MHz barring specific restrictions | 97.313(b); T1B12 |
| 50 W PEP | 70 cm in certain military areas; 33 cm near White Sands; 219–220 MHz | 97.313(f),(g),(h) (extra) |
| 100 W | Beacon transmitter power | 97.203(c) |
| 1 W | Model craft control transmitter | 97.215(c) |
| 3 minutes | Telecommand link-failure transmit limit | 97.213(b) (extra) |
| 50 km | Space station is more than 50 km above the Earth | 97.3(a)(41); T1A07 |
| 4 persons | Minimum club size | 97.5(b)(2); T1F11 |
| 1 hour/week; 72 h twice a year | RACES drills; employer-sponsored non-government drills | 97.407(d)(4); 97.113(a)(3)(i) (extra) |
| 1600 m (1 mile) | Protect FCC monitoring facilities | 97.13(b) (extra) |
| 200 ft (60.96 m) | Antenna structures needing FAA/FCC notice | 97.15(a) (extra) |
| Technician HF: 3.525–3.600, 7.025–7.125, 21.025–21.200, 28.0–28.5 MHz | CW only on 80/40/15 m; 10 m CW, RTTY/data 28.0–28.3, SSB phone 28.3–28.5 | 97.301(e), 97.305(c), 97.307(f)(9),(10) |
| 10 m phone 28.300–28.500 MHz | Technician | T1B01 |
| 6 m 50–54 MHz; 2 m 144–148; 1.25 m 222–225 (also 219–220); 70 cm 420–450; 33 cm 902–928; 23 cm 1240–1300 (Region 2) | Technician via 97.301(a) | 97.301(a) table |
| CW only 50.0–50.1 and 144.0–144.1 MHz | | T1B07; 97.305(c) |
| Beacons under automatic control on HF: 28.20–28.30 MHz | | 97.203(d); T1A06 |
| HF 3–30 MHz; VHF 30–300 MHz; UHF 300–3000 MHz | | 97.3(b); T3B08–T3B10 |
| λ (m) = 300 / f (MHz); c ≈ 300,000,000 m/s | | T3B06, T3B11 |
| ±600 kHz (2 m), ±5 MHz (70 cm) repeater offsets; 146.520 MHz simplex calling | Band plans (voluntary) | T2A01, T2A03, T2A02 |
| 3 dB = ×2; −6 dB = ÷4; 10 dB = ×10 | Power ratios | T5B09–T5B11 |
| 13.8 V at 12 A | Supply for a 50 W mobile FM rig | T4A01 |
| 2400 Hz | Best SSB receive filter | T4B10 |
| CW 150 Hz; SSB 3 kHz; FM 10–15 kHz; AM fast-scan TV about 6 MHz | Bandwidths | T8A11, T8A08, T8A09, T8A10 |
| 12.5 kHz | DMR channel carrying two time-multiplexed voice signals | T8D07 |
| ≈100 minutes | LEO period | T8B10 |
| ≈300 miles | Regular tropospheric ducting range | T3C06 |
| 19 inches | Quarter-wave vertical on 2 m | T9A08 |
| 50 Ω | Common coax impedance; dummy load | T9B02, T7C03 |
| 400 MHz | Type N preferred above it | T9B06 |
| 10 feet | Clearance from power lines if an antenna falls | T0B06 |
| 8 feet | Ground rod per tower leg | T0B08 |
| 5 A vs 20 A | Fuse replacement example | T0A05 |
| Duty cycle 100% → 50% doubles allowable power density | RF exposure | T0C03 |
| MPE, general population: 30–300 MHz 0.2 mW/cm² (30 min averaging); occupational 1.0 mW/cm² (6 min) | 1.1310 Table 1 (general limits: 0.3–1.34 MHz 100; 1.34–30 180/f²; 300–1500 f/1500; 1500–100,000 1.0) | 47 CFR 1.1310(e)(1) (extra, supports T0C02) |
| Household may be evaluated with occupational limits | Given appropriate training and information | 97.13(c)(1) (extra) |

---

## 6. Visuals

### Figures in the pool (content, tier A)

| Figure | File URL | What it shows (numbered components, as keyed by the pool) | Pool questions | Components not asked |
|---|---|---|---|---|
| T-1 | http://ncvec.org/downloads/TECH_2026/Technician%20Diagram%20T1.jpg (1800×1200 JPEG); also page 1 of http://ncvec.org/downloads/TECH_2026/2026-2030%20Technician%20Pool%203%20Diagrams.pdf, and embedded in the pool DOCX (word/media/image1–3.jpeg) | 1 resistor, 2 transistor (it controls the flow of current), 3 lamp, 4 battery | T6C02, T6C03, T6C04, T6C05, T6D10 | 5 |
| T-2 | …/Technician%20Diagram%20T2.jpg; diagrams PDF p.2 | 3 single-pole single-throw switch, 4 transformer, 6 capacitor, 8 light-emitting diode, 9 variable resistor | T6A09, T6C06, T6C07, T6C08, T6C09 | 1, 2, 5, 7, 10 |
| T-3 | …/Technician%20Diagram%20T3.jpg; diagrams PDF p.3 | 3 variable inductor, 4 antenna | T6C10, T6C11 | 1, 2 |

**Licence:** the figures are released with the pool into the public domain (§2, S1 and S3). They are copied locally as `T1.jpg`, `T2.jpg`, `T3.jpg` and `diagrams.pdf`.

**Card uses:** "In figure T-2, what is component 8?" and the reverse, symbol → name. Use the real pool questions T6C02–T6C11, T6A09 and T6D10. Crop each numbered symbol for single-symbol recognition cards.

**Do not label the unasked components** (T-1 #5; T-2 #1, 2, 5, 7, 10; T-3 #1, 2) on cards. The pool does not identify them, and I found no other source that does.

**Metadata note:** the EXIF data of T2.jpg and T3.jpg shows "2013:10:24". The artwork evidently predates this pool; that is an inference from the metadata only.

### Diagrams we can draw from sourced facts
1. **Technician band chart:** HF segments with their modes and 200 W PEP, plus all bands above 30 MHz (97.301(a),(e); 97.305(c); 97.307(f)(9),(10); 97.313). The chart must carry a version date, because it is volatile.
2. **Spectrum bar:** HF 3–30, VHF 30–300, UHF 300–3000 MHz, with the Technician bands placed on it (97.3(b)).
3. **Wavelength ↔ frequency:** a 300/f nomogram (T3B06).
4. **Ohm's law and power relations** (T5D01–T5D03, T5C08).
5. **Meter connections:** voltmeter in parallel, ammeter or multimeter in series (T7D02, T7D03).
6. **Series vs parallel:** same current vs same voltage (T5D13, T5D14).
7. **EM wave:** E and H at right angles; polarization follows E (T3B01, T3B02).
8. **Dipole pattern:** strongest broadside (T9A10).
9. **Repeater offset and reverse:** input and output frequencies (T2A07, T2B01, T2A01, T2A03).
10. **Satellite U/V mode:** uplink 70 cm, downlink 2 m (T8B08).
11. **Station layout:** transmitter → RF power meter or SWR meter in the feed line → antenna, with a lightning arrester at building entry (T4A05, T0A07).
12. **dB ladder:** 3 dB = ×2, 6 dB = ×4, 10 dB = ×10 (T5B09–T5B11).
13. **MPE vs frequency:** a step chart from the 1.1310 Table 1 general-population limits (supports T0C02, T0C05).

---

## 7. Confusions and traps

**1. The 2022–2026 pool still circulates.** It expired "6/30/2026". The NCVEC pools page still links to it as "Previous article: 2022-2026 Technician Question Pool Release". Older decks, including an archived Anki repo mentioned in an earlier survey (not re-checked here), are built on it. Comparing the parsed pools:
   - 321 of the 409 current stems appear in the old pool, after ignoring case and punctuation. Most kept their IDs; 3 moved (T1D12←T2A06, T5C06←T5C13, T8D02←T8D13).
   - 88 stems are new or reworded: T1A04 T1A06 T1A08 T1A10 T1A11 T1B02 T1B05 T1C01 T1C03 T1C05 T1C06 T1C07 T1D07 T1E06 T1E09 T1E11 T1F01 T1F04 T1F07 T2A03 T2A06 T2A07 T2A09 T2B01 T2B05 T2B06 T2B12 T2B14 T2C01 T2C08 T2C12 T3A02 T3A04 T3A11 T3A12 T3B12 T3C03 T4A04 T4A07 T4A10 T4B04 T4B07 T4B08 T4B09 T5A03 T5A04 T5A05 T5C08 T5D13 T5D14 T6A09 T6B11 T6C01 T7A09 T7A10 T7A11 T7B04 T7B05 T7B07 T7B11 T7C03 T7C11 T7D05 T8A05 T8A07 T8A09 T8B08 T8B10 T8B11 T8B12 T8C04 T8C06 T8D04 T8D11 T9A03 T9A04 T9A06 T9A07 T9A08 T9A09 T9B01 T9B06 T9B11 T0A01 T0A02 T0A03 T0A10 T0C02.
   - 14 more kept the stem but changed the keyed answer's wording. Examples: T1F02 is now "At least every 10 minutes during and at the end of a communication"; T1D03 now says "model craft" instead of "radio control craft".
   - Pool sizes differ: the old syllabus lists 67/36/34/24/52/47/44/48/24/36 per subelement; the new one 68/37/35/23/50/46/44/47/23/36.
   - **Any deck or answer key keyed to the old pool is wrong for exams from 1 July 2026.**
   - Parsing caveat: my old-pool parse got 410 questions; 2 of the syllabus's 412 were missed, and T7D05 was withdrawn in 2022. The 88 is an upper bound on "new" stems.

**2. Two versions of the current pool are online.** The 18 Dec 2025 PDF is still posted next to the 19 Feb 2026 errata version. Use only the Feb 19 file. The four changed stems:
   - T1C01: "Which amateur license classes are currently issued by the FCC?" became "For which classes of amateur radio licenses does the FCC currently issue new licenses?"
   - T5A05: "What is the electrical term for the force that causes electron flow?" became "A difference in which of the following causes electron flow?"
   - T7A09: "…on a VHF power amplifier?" became "…on some VHF power amplifiers?"
   - T0A10: "What hazard occurs…" became "What hazard exists…"

**3. Where the public-domain line is.** The line is on the NCVEC release page, not in the pool PDF; grep of the PDF text finds no "public domain". Cite the page URL as the licence source.

**4. PDF text layer.** The PDF text layer loses superscripts: "I2 x E" and "E2 / R" are I²/E² in T5C08, T5D01 and T5D02 (confirmed in the DOCX). A naive extraction would produce wrong distractors.

**5. Recent rule changes to Part 97.** 91 FR 1405 (14 Jan 2026, effective 13 Feb 2026) revised 60 m band entries in 97.301(b)–(d), 97.303(h), 97.305(c), 97.307(f)(14) and 97.313. These affect **General and above only**, not Technician privileges; don't let 60 m creep into Technician band cards. Earlier: 88 FR 85126 (7 Dec 2023, effective 8 Jan 2024) replaced HF baud-rate limits with a 2.8 kHz bandwidth limit (97.307(f)(3) now reads "The authorized bandwidth is 2.8 kHz…"). Band tables are volatile; cite 97.301, 97.305 and 97.313 with an as-of date.

**6. Technician HF.**
   - 80, 40 and 15 m are CW only (97.307(f)(9)).
   - 10 m phone is 28.3–28.5 MHz and SSB (J3E/R3E) only (97.307(f)(10)).
   - Power is 200 W PEP there, but 1500 W PEP above 30 MHz.
   - Common mix-ups: 28.300–28.500 (phone) vs 28.000–28.500 (all Technician 10 m), and 200 W vs 1500 W.

**7. Confusable pairs** (contrast cards, CARD-STANDARD rule 20):
   - sensitivity / selectivity (T7A01 / T7A04)
   - capacitor (electric field) / inductor (magnetic field) (T6A04 / T6A06; T5C01 / T5C03)
   - voltmeter in parallel / ammeter in series (T7D02 / T7D03)
   - series: same current / parallel: same voltage (T5D13 / T5D14)
   - CTCSS (sub-audible tone) / DTMF (two tones) (T2B02 / T2B06)
   - DMR color code (repeater access) / talkgroup (traffic organisation) (T2B12 / T2B14)
   - RACES (civil defence, certification required) / ARES (volunteer registration) (T2C04 / T2C06)
   - automatic / remote / local control (97.3(a)(6),(39),(31))
   - repeater / auxiliary station (T1F09 / T1D07)
   - VHF 30–300 / UHF 300–3000 / HF 3–30 MHz
   - 2 m offset 600 kHz / 70 cm offset 5 MHz
   - licence term 10 years / grace 2 years / renewal window 90 days / CSCE 365 days
   - ERP (vs half-wave dipole) / EIRP (vs isotropic), multiply or divide by 1.64 (97.3(b)(2),(3)) (extra)
   - U/V mode: uplink UHF, downlink VHF (T8B08)
   - ionizing / non-ionizing (T0C01, T0C12)
   - 3 dB = double / 10 dB = ×10
   - diode electrodes (anode/cathode) / BJT (emitter/base/collector) / FET (gate/drain/source)
   - IRLP (DTMF over the air) / EchoLink (can transmit without a radio; register with proof of licence)

**8. "All these choices are correct"** is the key in many questions: T1B05, T1B09, T2B04, T5A11, T6A10, T6B11, T7B03, T7B08, T7B10, T8B03, T8B04, T8D01, T8D03, T8D08, T8D10, T9B01, T9B08, T0A02, T0A06, T0B02, T0C04, T0C06. Cards that quote these need the listed options to make sense.

**9. Pool rule references with odd formatting.** T1D09 cites "[97.113(5)(b)]"; the rule is 97.113(b). T1C10 cites "[97.5a]". T1C07 cites 1.949, which is in Part 1, not Part 97. Cite the correct CFR paragraph on cards, and quote the pool reference as printed only if needed.

**10. Rules the exam asks without citing a CFR basis.** T1C05, the Group D call sign format, has no reference; the FCC call-sign page could not be fetched. The T2 band-plan numbers (offsets, 146.520) are voluntary practice, not rules.

**11. Old names still in Part 97.** Part 97 still names the Novice and Advanced classes and the "Technician Plus" renewal (97.9(a), 97.21(a)(3)), but new licences are issued only for Technician, General and Extra (97.17(a); T1C01).

**12. The pass mark is the same for General.** Element 3 is also 35 questions with 26 to pass (97.503(b)); Extra is 50 with 37 to pass. Keep element numbers straight.

---

## 8. Naming

- **Owner's terms.** The FCC's rules name the exam "Element 2", the licence the "Technician Class operator license" (97.501(c), 97.503(a)), and the pool the "Technician Class (Element 2) Question Pool" (NCVEC). The NCVEC calls itself "The National Conference of Volunteer Examiner Coordinators (NCVEC) is a not-for-profit voluntary association… The NCVEC is a private organization" (https://www.ncvec.org/).
- **Trademark guidance.** No trademark or naming guidance was found on the NCVEC pages fetched (home, pools, mission, QPC, release pages). fcc.gov returned HTTP 403 to every request, so no FCC seal or name-use policy could be read (§10). "ARRL" appears on ARRL pages under "All rights reserved"; I found no trademark notice text.
- **How CONTENT-POLICY.md §4 applies.** Use the general rule: plain text, our brand first, a true factual statement. Suggested title: "[Site name] deck for the FCC Amateur Radio Technician Class (Element 2) exam". No FCC seal or logo, and no "official", "approved" or "certified".
- **Footer notice.** The "Everyone else" row assumes a trademark owner. Because no FCC or NCVEC trademark claim was verified, adapt it to: "This deck is independent and is not affiliated with, sponsored, endorsed or approved by the FCC, the NCVEC or any VEC." Add: "Questions marked 'Pool' are from the 2026–2030 Technician question pool, released into the public domain by the NCVEC Question Pool Committee." Legal review of the wording per §8 of the policy.
- **"Real questions" wording.** The FCC Technician pool is public (tier A). §2.7 of the policy lets us say the cards use real pool questions. They are "pool questions", not "exam questions recalled from an exam".
- **Other bodies.** CONTENT-POLICY §5 lists no restricted body for this deck. Do not name ARRL products.

---

## 9. Languages

**Exam language: the rules set none.** Part 97 subpart F (97.501–97.527) contains no language requirement for the written exam. I searched the eCFR text for "language", "Spanish" and "translat". The only language rule in Part 97 concerns on-air identification: phone ID must be "By a phone emission in the English language" (97.119(b)(2)). The exam itself does not have to be in English.

**The pool is published in English only.** The NCVEC release page (https://www.ncvec.org/index.php/2026-2030-technician-question-pool) links only English PDF, DOCX and JPG files. No translation is listed there or on the NCVEC pools page.

**Spanish sessions exist.** One VEC arranges Spanish-language sessions. GLAARG's page "VEs for Spanish Exam Sessions" (https://glaarg.org/ves-for-spanish-exam-sessions-2/) reads: "Esta es la lista de Examinadores Voluntarios para las pruebas de español. Los números indican si el español es su idioma principal o secundario." That page is "Copyright © 1984-2026 Greater Los Angeles Amateur Radio Group VEC", so it is tier C. It does not say what text the Spanish exams use.

**No translation found.** I found no official or openly licensed translation of the pool or of Part 97.
- A search summary claimed the "NCVEC maintains Spanish-language question pools". I could not find any such file on ncvec.org, so treat the claim as unverified.
- An eHam article, "FCC Says 'No' to Petition Calling for Exams in Languages Other Than English" (https://www.eham.net/article/16088), returned HTTP 403 and was not read.
- **Deck implication:** English only, unless the NCVEC publishes a translation. A translated pool made by us would be a derivative of a public-domain work, which is allowed, but it could not be called an official pool.

**Pool revision check.** An ARRL news item (https://www.arrl.org/news/ncvec-question-pool-committee-issues-revision-to-2026-2030-technician-pool) confirms that the 19 Feb 2026 revision is the only one announced: "The revision includes minor wording clarifications to four questions in the pool. The revised questions are: T1C01 T5A05 T7A09 T0A10."

---

## 10. Not verified

1. **Exam time limit.** Not found in Part 97 (subpart F has none). ARRL's what-to-bring page and the W5YI manual greps ("time limit", "minutes") found no limit for the candidate. Check the VEC manuals (ARRL VE Manual PDF, Laurel, GLAARG) if needed.
2. **fcc.gov pages.** All returned 403 to curl, including the amateur service page, examinations, call sign systems and fee pages. Unverified as a result:
   - the FCC's own statement of Group D call-sign formats (T1C05 relies on the pool alone)
   - FCC name and seal usage policy
   - FCC licence statistics
3. **eCFR's own status wording.** Not fetched (whether it calls itself "authoritative but unofficial"). The public-domain basis used is 17 USC 105 plus the FCC being a US government agency. Material incorporated by reference into the CFR (e.g., OET Bulletin 65, IEEE C95.1) was not checked.
4. **Other VECs' retake and fee policies.** Only W5YI (retakes) and ARRL (fee "usually $15 or less") were read. Both are tier C and volatile.
5. **Definitions of the old-pool figures.** I did not diff the 2022 figures against the 2026 JPGs. The 2026 files are the ones to use.
6. **Old-pool parse.** 2 of the 412 syllabus-listed 2022 questions were not parsed, so the "88 new or reworded" count may be off by a few (§7.1).
7. **Figure components not asked** (T-1 #5; T-2 #1, 2, 5, 7, 10; T-3 #1, 2). No source identifies them; do not label them.
8. **ARRL withdrawn-questions status** was read on 2026-09-25 only; the NCVEC release page is the primary source for errata. Re-check both before release.

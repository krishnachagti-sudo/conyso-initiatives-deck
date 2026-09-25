# Research brief: FCC Amateur Radio Amateur Extra Class, Element 4 (slug `fcc-extra`)

Slug `fcc-extra`, family prefix `extra`. Researched 25 September 2026. Every fact below was read in a file fetched for this task, or in a prerequisite-deck file that this task re-read (NEETS modules and NOAA SWPC pages saved by the General research). Raw files and extracted text are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/fcc-extra/` (named below as `[file]`). Page numbers are PDF pages (form feeds in pdftotext output).

**Prerequisite deck.** `prerequisiteDecks: ["fcc-general"]` (which itself builds on `fcc-technician`). The term registry starts with all 526 terms of `fcc-general-terms.json` as topic 0: the General deck's 302 new terms plus the 224 Technician terms it carried. They keep their `gen.*` and `tech.*` concept IDs, all of which exist in `concepts/gen.json` or `concepts/tech.json` (checked by script). This deck teaches only what the Element 4 pool adds.

**The pool.** All 599 live questions of the 2024–2028 Extra pool (4th errata applied) are in `research/deck-briefs/fcc-extra-pool.txt`, in the same layout as `fcc-general-pool.txt`. Every concept in `fcc-extra-concepts.json` has a `"pool"` array. `python3 build/pool-skeleton.py research/deck-briefs/fcc-extra-pool.txt research/deck-briefs/fcc-extra-concepts.json research/deck-briefs/fcc-extra-skeleton` reports **"599 questions, 0 unmapped"**, and no ID appears in two concepts. The skeleton is written, so `node build/pool-cards.mjs fcc-extra` can run once deck.json has its `pool` block (below).

**Counts.** 50 groups in 10 subelements (the outline), mapped to 29 topics. 490 concepts (465 core, 25 extra), 872 registry terms (526 at topic 0, 346 new) and 1,364 budgeted cards.

## Exam facts

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Who sets the exam | The FCC, by rule. Extra needs Elements 2, 3 and 4 | "(a) Amateur Extra Class operator: Elements 2, 3, and 4;" 47 CFR 97.501(a), https://www.govinfo.gov/content/pkg/CFR-2025-title47-vol5/pdf/CFR-2025-title47-vol5-sec97-501.pdf `[part97_2025.txt]` | No |
| Questions and pass mark | 50 questions; 37 correct to pass (74%, our arithmetic) | "(c) Element 4: 50 questions concerning the privileges of an Amateur Extra Class operator license. The minimum passing score is 37 questions answered correctly." 97.503(c) | Rarely |
| How questions are drawn | One per group: E1 6, E2 5, E3 3, E4 5, E5 4, E6 6, E7 8, E8 4, E9 8, E0 1 | e.g. "SUBELEMENT E7 - PRACTICAL CIRCUITS [8 Exam Questions - 8 Groups]" (pool PDF #page=5–6) | With each pool |
| Who writes the pool | The VECs, through the NCVEC Question Pool Committee | 97.523: "All VECs must cooperate in maintaining one question pool for each written examination element. Each question pool must contain at least 10 times the number of questions required for a single examination." NCVEC: "The Question Pools are developed and maintained by the Question Pool Committee (QPC) of the NCVEC" (https://www.ncvec.org/index.php/amateur-question-pools `[ncvec_pools.txt]`) | No |
| Current pool | **2024–2028 Extra pool, effective 1 July 2024, valid to 30 June 2028** | Syllabus header: "2024-2028 Extra Class / FCC Element 4 Question Pool Syllabus / Effective July 1, 2024" (pool PDF #page=5). ARRL: "Valid from July 1, 2024 until June 30, 2028" (https://www.arrl.org/question-pools, tier C) | **Yes: expires in 21 months** |
| Release | Originally released 7 December 2023; the release page also says "Released January 31, 2024" beside the public-domain line | Errata sheets: "2024-2028 Extra Class Question Pool / Released December 7, 2023" (pool PDF #page=1–4); https://www.ncvec.org/index.php/2024-2028-extra-class-question-pool-release `[ncvec_extra.txt]` | — |
| Errata | Four: 31 Jan 2024 (E9-3 Smith chart rotated; E1D07, E1F03, E4D12, E4D13, E6A06 reworded; E9E10 withdrawn; E1E10, E1E11 citations changed), 8 Nov 2024 (E2A13 withdrawn), 25 Sep 2025 (E6D07 withdrawn), **4 Feb 2026 (E4D05 withdrawn)** | "4th Errata Issued February 4, 2026 / One Question Withdrawn From Use: / E4D05 – removed from use" (pool PDF #page=1) | Yes |
| Withdrawn | 4: E2A13, E4D05, E6D07, E9E10; groups not renumbered | ARRL: "Extra Element 4 Pool (valid from July 1, 2024 until June 30, 2028): E2A13 E4D05 E6D07 E9E10 The remaining questions in each subelement were not renumbered." (https://www.arrl.org/withdrawn-questions `[arrl_withdrawn-questions.txt]`) | Yes: re-check before release |
| Pool size | **599 live questions** (603 IDs, 4 withdrawn). The printed syllabus totals 602: the E2 (61), E4 (64) and E9 (94) headers still count their withdrawn question; E6 (68) was updated | Parsed from the PDF, every stem and option checked word for word against the .docx `[pool.json, docx.txt]` | With each errata |
| Format | Multiple choice, 4 options; the key and rule citation are not shown on the exam | "Each pool is released with the exact questions and 4 multiple choice answers and the correct answer for each question is designated in ( ) just after each question" `[ncvec_pools.txt]` | No |
| Figures | 10: E5-1, E6-1, E6-2, E6-3, E7-1, E7-2, E7-3, E9-1, E9-2, E9-3 | Pool PDF #page=118: "NOTE: The graphics required for certain questions in sections E5, E6, E7, and E9 are included on the following pages." (#page=119–121); also https://www.ncvec.org/downloads/Extra_Figures_2024-2028-1.pdf `[figures.pdf]` | With errata |
| Who administers | At least 3 VEs, each an Amateur Extra licensee | 97.509(a): "a team of at least 3 VEs"; (b)(3)(iii): "Amateur Extra Class in order to administer an Amateur Extra Class operator license examination." | No |
| Who prepares the question set | An Extra-class VE, from the pool | 97.507(a): "prepared by a VE holding an Amateur Extra Class operator license"; (b): "must utilize questions taken from the applicable question pool." | No |
| Prerequisite | General or Advanced, or pass Elements 2, 3 and 4 | ARRL: "General or Advanced licensees may upgrade to Extra Class by passing a 50-question multiple-choice examination. No Morse code test is required." (https://www.arrl.org/upgrading-to-an-extra-license, tier C) | No |
| Credit | Expired Extra licence: Elements 3 and 4. CSCE: 365 days | 97.505(a)(1) table: "Amateur Extra … Elements 3 and 4."; 97.505(b): "…passed within the previous 365 days." | No |
| Pending upgrade | Higher privileges on a CSCE; identify with "AE" | 97.9(b): "…authorized to exercise the rights and privileges of the higher operator class until final disposition…"; 97.119(f)(3): "…from Novice, Technician, General, or Advanced Class to Amateur Extra Class: AE." | No |
| Privileges | All amateur frequencies | ARRL: "Extra Class licensees are authorized to operate on all frequencies allocated to the Amateur Service." Rule: 97.301(b) | 60 m changed 2026 |
| Retakes | Same question set may not be re-used; the rest is VEC policy | 97.509(f): "The same question set may not be re-administered to the same examinee." | VEC policy |
| Time limit, fees | **Not verified** (see below) | — | Fees: yes |

**Next pool.** The NCVEC says each pool "is released to the public normally 6 months prior to becoming effective" and pools are "normally valid for 4 years" `[ncvec_pools.txt]`. ARRL: "No question pools will be updated or released in 2025 or 2029." No 2028–2032 Extra pool is posted as of 25 September 2026.

**Facts that change often:** the pool, its errata and withdrawn list; the 60 m rules (changed 13 February 2026); Part 97 sections removed on 10 February 2026; fees and VEC policies.

## Naming

- **Owner's terms.** The rules name the exam "Element 4" and the licence "Amateur Extra Class operator license" (97.501(a), 97.503(c)). The NCVEC calls the pool the "2024-2028 Element 4 Extra Class Question Pool" `[ncvec_extra.txt]`.
- **Trademark terms.** None found on the NCVEC pages fetched (release page, pools page). fcc.gov was not fetched in this task (the General research got HTTP 403), so no FCC name or seal policy was read. ARRL pages carry only a copyright line (quoted in the sources file).
- **CONTENT-POLICY §4.** The "Everyone else" pattern, adapted because no trademark claim was verified. Plain text, our brand first, a true statement, no FCC seal, no "official", "approved" or "certified". Suggested title, matching the series: "Amateur radio flashcards: for the FCC Amateur Extra exam (2024–2028 pool)". §5 lists no restricted body. The pool is tier A, so cards may say they use real pool questions.
- **Deck notice text:**

> Questions marked "Pool" are from the 2024–2028 Amateur Extra Class (Element 4) question pool, released into the public domain by the NCVEC Question Pool Committee. The deck also uses 47 CFR Parts 1 and 97, Federal Register rule documents, US Navy NEETS training modules and NOAA Space Weather Prediction Center pages, which are US Government works. This deck is independent and is not affiliated with, sponsored, endorsed or approved by the FCC, the NCVEC or any Volunteer Examiner Coordinator.

- **Suggested deck.json `pool` block** (as for General): `"skeleton": "research/deck-briefs/fcc-extra-skeleton"`, `"source": "NCVEC 2024–2028 Extra Pool, {id}"`, `"sourceURL"`: the pool PDF URL in the sources file, `"sourceLicence": "A · public domain"`, `"validAsOf": "2026-09-25 · 2024–2028 Extra pool, valid to 2028-06-30"`, and a `figures` entry for each of the ten figures. They are published as JPGs on the release page (Diagrams_Page_1, _2, _3_V2), as SVGs in `e4_2024-svgs.zip` and as PDF pages 119–121; none was downloaded as an image yet.

## Outline (owner's order, with weights and topics)

Weight = exam questions ÷ 50. Pool counts are live questions. The group titles are quoted from the syllabus (pool PDF #page=5–6).

**E1 Commission Rules: 6 questions (12%), 68 live**
- E1A Frequency privileges; signal frequency range; automatic message forwarding; stations aboard ships or aircraft; power restriction on 630- and 2200-meter bands (11) [T26]
- E1B Station restrictions and special operations: restrictions on station location; general operating restrictions; spurious emissions; antenna structure restrictions; RACES operations (11) [T27]
- E1C Automatic and remote control; band-specific regulations; operating in and communicating with foreign countries; spurious emission standards; HF modulation index limit; band-specific rules (12) [T26]
- E1D Amateur Space and Earth stations; telemetry and telecommand rules; identification of balloon transmissions; one-way communications (12) [T27]
- E1E Volunteer examiner program: definitions; qualifications; preparation and administration of exams; reimbursement; accreditation; question pools; documentation requirements (11) [T28]
- E1F Miscellaneous rules: external RF power amplifiers; prohibited communications; spread spectrum; auxiliary stations; Canadian amateurs operating in the US; special temporary authority (11) [T28]

**E2 Operating Procedures: 5 (10%), 60 live**
- E2A Amateur radio in space: amateur satellites; orbital mechanics; frequencies and modes; satellite hardware; satellite operations (12) [T23]
- E2B Television practices: fast-scan television standards and techniques; slow scan television standards and techniques (12) [T23]
- E2C Contest and DX operating; remote operation techniques; log data format; contact confirmation; RF network systems (12) [T24]
- E2D Operating methods: digital modes and procedures for VHF and UHF; APRS; EME procedures; meteor scatter procedures (11) [T25]
- E2E Operating methods: digital modes and procedures for HF (13) [T25]

**E3 Radio Wave Propagation: 3 (6%), 39 live**
- E3A Electromagnetic waves and specialized propagation: EME; meteor scatter; microwave tropospheric and scatter propagation; auroral propagation; daily variation of ionospheric propagation; circular polarization (14) [T17]
- E3B Transequatorial propagation; long-path propagation; ordinary and extraordinary waves; chordal hop; sporadic-E mechanisms; ground-wave propagation (13) [T17]
- E3C Propagation prediction and reporting: radio horizon; effects of space-weather phenomena (12) [T18]

**E4 Amateur Practices: 5 (10%), 63 live**
- E4A Test equipment: analog and digital instruments; spectrum analyzers; antenna analyzers; oscilloscopes; RF measurements (11) [T14]
- E4B Measurement technique and limitations: instrument accuracy and performance limitations; probes; techniques to minimize errors; measurement of Q; instrument calibration; S parameters; vector network analyzers; RF signals (11) [T14]
- E4C Receiver performance: phase noise, noise floor, image rejection, MDS, increasing signal-to-noise ratio and dynamic range, noise figure, reciprocal mixing; selectivity; SDR non-linearity; use of attenuators at low frequencies (14) [T15]
- E4D Receiver performance characteristics: dynamic range; intermodulation and cross-modulation interference; third-order intercept; desensitization; preselector; sensitivity; link margin (13) [T15]
- E4E Noise and interference: external RF interference; electrical and computer noise; line noise; DSP filtering and noise reduction; common-mode current; surge protectors; single point ground panel (14) [T16]

**E5 Electrical Principles: 4 (8%), 49 live**
- E5A Resonance and Q (13) [T1]
- E5B Time constants and phase relationships; admittance and susceptance (12) [T2]
- E5C Coordinate systems and phasors: rectangular and polar coordinates; phasors; logarithmic axes (12) [T3]
- E5D RF effects in components and circuits: skin effect; real and reactive power; electrical length of conductors (12) [T4]

**E6 Circuit Components: 6 (12%), 68 live**
- E6A Semiconductor materials and devices: BJTs; operation and types of FETs (12) [T5]
- E6B Diodes (11) [T5]
- E6C Digital ICs: families of digital ICs; gates; programmable logic devices (11) [T8]
- E6D Inductors and piezoelectricity: permeability, core material and configuration; transformers; piezoelectric devices (11) [T6]
- E6E Semiconductor materials and packages for RF use (12) [T6]
- E6F Electro-optical technology: photoconductivity; photovoltaic devices; optical sensors and encoders; optically isolated switching (11) [T7]

**E7 Practical Circuits: 8 (16%), 99 live**
- E7A Digital circuits: logic circuits; classes of logic elements; positive and negative logic; frequency dividers; truth tables (11) [T8]
- E7B Amplifiers: class of operation; tube and solid-state circuits; distortion and intermodulation; spurious and parasitic suppression; switching-type amplifiers (12) [T9]
- E7C Filters and matching networks (11) [T10]
- E7D Power supplies and voltage regulators; solar array charge controllers (15) [T7]
- E7E Modulation and demodulation: reactance, phase and balanced modulators; detectors; mixers (11) [T11]
- E7F Software defined radio fundamentals: DSP filtering, modulation and demodulation; analog-digital conversion; digital filters (14) [T12]
- E7G Operational amplifiers: characteristics and applications (12) [T9]
- E7H Oscillators and signal sources: synthesizers and PLLs; DDS; thermal drift; microphonics; high-accuracy oscillators (13) [T10]

**E8 Signals and Emissions: 4 (8%), 48 live**
- E8A Fourier analysis; RMS measurements; average power and PEP; analog/digital conversion (11) [T12]
- E8B Modulation methods; modulation index and deviation ratio; FDM and TDM; OFDM (11) [T11]
- E8C Digital signals: digital modes; information rate vs. bandwidth; error correction; constellation diagrams (15) [T13]
- E8D Keying defects and overmodulation of digital signals; digital codes; spread spectrum (11) [T13]

**E9 Antennas and Transmission Lines: 8 (16%), 93 live**
- E9A Basic antenna parameters: radiation resistance, gain, beamwidth, efficiency; ERP and EIRP (12) [T19]
- E9B Antenna patterns and designs: azimuth and elevation patterns; gain as a function of pattern; antenna modeling (11) [T19]
- E9C Practical wire antennas; folded dipoles; phased arrays; effects of ground near antennas (14) [T20]
- E9D Yagi antennas; parabolic reflectors; feed point impedance and loading of electrically short antennas; antenna Q; RF grounding (12) [T20]
- E9E Impedance matching: matching antennas to feed lines; phasing lines; power dividers (10) [T21]
- E9F Transmission lines: open and shorted lines; coax versus open wire; velocity factor; electrical length; coaxial cable dielectrics; microstrip (12) [T21]
- E9G The Smith chart (11) [T21]
- E9H Receiving antennas: RDF techniques; Beverage antennas; single- and multiple-turn loops (11) [T22]

**E0 Safety: 1 (2%), 12 live**
- E0A Safety: RF radiation hazards; hazardous materials; grounding (12) [T29]

## Topics and budget

Teaching order runs from electrical principles to circuits, signals, receivers, propagation, antennas, operating and rules, as the General deck did. Budget per the brief: one primer per new term, one fact per rule or number (and per set; per member for the two sets with more than 3 members), one pool card per live question (each is its concept's application card), one application card for each concept without a pool question, one contrast per contrast concept, then plus 10%.

| T | Topic | Groups | Concepts | Pool | Primers | Facts | Other | **Target** |
|---|---|---|---|---|---|---|---|---|
| 1 | Resonance and Q | E5A | 11 | 13 | 6 | 8 | 0 | **30** |
| 2 | Time constants, phase angle and admittance | E5B | 9 | 12 | 3 | 4 | 0 | **21** |
| 3 | Impedance coordinates and phasors | E5C | 7 | 12 | 5 | 3 | 0 | **22** |
| 4 | RF effects in components | E5D | 10 | 12 | 6 | 7 | 0 | **28** |
| 5 | Semiconductors, transistors and diodes | E6A, E6B | 22 | 23 | 16 | 12 | 1 | **57** |
| 6 | Inductors, cores, crystals, RF packages and MMICs | E6D, E6E | 18 | 23 | 14 | 13 | 1 | **56** |
| 7 | Electro-optics and power supplies | E6F, E7D | 22 | 26 | 17 | 8 | 0 | **56** |
| 8 | Digital logic | E6C, E7A | 19 | 22 | 18 | 6 | 0 | **51** |
| 9 | Amplifiers and op-amps | E7B, E7G | 19 | 24 | 15 | 11 | 0 | **55** |
| 10 | Filters, matching networks and oscillators | E7C, E7H | 22 | 24 | 21 | 16 | 0 | **67** |
| 11 | Modulation, mixing, detection and multiplexing | E7E, E8B | 17 | 22 | 11 | 6 | 0 | **43** |
| 12 | Sampling, ADC, DSP and SDR | E8A, E7F | 23 | 25 | 26 | 9 | 0 | **66** |
| 13 | Digital signals, codes and spread spectrum | E8C, E8D | 20 | 26 | 13 | 11 | 1 | **56** |
| 14 | Test equipment and measurement | E4A, E4B | 17 | 22 | 14 | 9 | 0 | **50** |
| 15 | Receiver performance | E4C, E4D | 24 | 27 | 17 | 9 | 0 | **58** |
| 16 | Noise and interference | E4E | 11 | 14 | 6 | 11 | 0 | **34** |
| 17 | Electromagnetic waves and specialised propagation | E3A, E3B | 18 | 27 | 13 | 12 | 0 | **57** |
| 18 | Space weather and propagation prediction | E3C | 11 | 12 | 9 | 8 | 0 | **32** |
| 19 | Antenna parameters and patterns | E9A, E9B | 16 | 23 | 14 | 6 | 0 | **47** |
| 20 | Wire antennas, arrays, Yagis and loading | E9C, E9D | 22 | 26 | 15 | 15 | 0 | **62** |
| 21 | Matching, transmission lines and the Smith chart | E9E, E9F, E9G | 23 | 33 | 16 | 9 | 2 | **66** |
| 22 | Receiving and direction-finding antennas | E9H | 9 | 11 | 5 | 6 | 0 | **24** |
| 23 | Satellites and amateur television | E2A, E2B | 18 | 24 | 18 | 9 | 0 | **56** |
| 24 | Contesting, DX, remote operation and mesh networks | E2C | 12 | 12 | 8 | 6 | 0 | **29** |
| 25 | Digital operating: VHF/UHF, APRS, EME and HF modes | E2D, E2E | 18 | 24 | 12 | 9 | 1 | **51** |
| 26 | Extra privileges, band edges and special bands | E1A, E1C | 18 | 23 | 8 | 13 | 0 | **48** |
| 27 | Station restrictions, RACES, space and telecommand stations | E1B, E1D | 19 | 23 | 8 | 20 | 0 | **56** |
| 28 | Volunteer examiners and miscellaneous rules | E1E, E1F | 24 | 22 | 7 | 21 | 2 | **57** |
| 29 | Safety | E0A | 11 | 12 | 6 | 9 | 0 | **30** |
| | **Total** | 50 groups | 490 | 599 | 346 | 322 | 8 | **1,364** |

"Other" is contrast cards plus application cards for the two concepts without a pool question (`extra.extra-exam-facts`, `extra.extra-ve-requirement`, both extra). For comparison, General shipped 1,054 cards for 423 questions.

**Concept sources.** Each concept cites the pool PDF page of its first question (`#page=N`), the Part 97 section as a govinfo PDF (for rules), FR 2026-00587 (for the 60 m rules), a NEETS module (where its text supports the concept) or a NOAA SWPC page. Figure concepts carry `"figure"`. Names avoid formulas that no fetched source states in text; the NEETS formulas are images (for example resonant frequency, NEETS Module 9 PDF p.18), so writers should read the PDF page.

## Traps

- **60 m changed on 13 February 2026, and govinfo's CFR is older.** FR 2026-00587 replaced the five channels with four channels (5332, 5348, 5373, 5405 kHz centres) plus the 5351.5–5366.5 kHz segment. It set 100 W ERP on the channels and 9.15 W ERP in the segment, and kept the 2.8 kHz limit and centre-frequency CW. The govinfo CFR edition "revised as of October 1, 2025" still shows the old rule with 5.3585 MHz. E1A06 still cites "97.303(h)(1)"; the CW rule is now in 97.303(h)(3). Its key (centre frequency) and E1C01's (2.8 kHz) still match the new text. Cite the FR document for 60 m. [T26]
- **Other Part 97 changes of 10 February 2026.** FR 2025-22633 removed 97.27, 97.29, 97.315(b)(2), 97.521(b) and Appendix 2 (VEC regions). The partial withdrawal (FR 2026-01884) touched only Parts 80 and 88. E1F03's key is 97.315(b)(1), which remains; E1E03 does not depend on 97.521(b). [T28]
- **"Utilities Technology Council" vs "Utilities Telecom Council".** The pool (E1C03, E1C07) says Technology; the 2025 CFR text of 97.303(g)(2) says "Utilities Telecom Council (UTC)". Keep the pool wording on pool cards and quote the rule verbatim on rule cards. [T26]
- **Withdrawn questions and stale printed counts.** E2A13, E4D05, E6D07 and E9E10 never appear on an exam. The syllabus headers for E2, E4 and E9 still count them. [T23, T15, T6, T21]
- **Superseded files still posted.** The release page still links the 3rd-errata PDF (which includes E4D05) and a "2020-2024 Extra Class Pool" article. Use only the 4th-errata file. [all]
- **January 2024 rewording.** E4D12 and E4D13 changed "100 W" to "10 W (+40 dBm)"; E1F03 option D and E6A06 option B were replaced. Older study material has the old wording. [T15, T28, T5]
- **Figure E9-3 was rotated** 90 degrees (errata of 31 January 2024: "infinity on the right"). Use the current image. On it, the outer circle is the "reactance axis" and the only straight line is the "resistance axis" (E9G06, E9G07). [T21]
- **Parallel-circuit Q.** E5A09 keys "Resistance divided by the reactance"; option A is the inverted form. Parallel RLC: impedance about R, input current minimum, circulating current maximum (E5A04, E5A06, E5A07). [T1]
- **Lead or lag in series RLC.** When XC > XL the voltage lags (E5B07, E5B08). When XL > XC it leads (E5B11). [T2]
- **Modulation index vs deviation ratio.** Index is deviation divided by the modulating frequency; deviation ratio is maximum deviation divided by the highest audio frequency (E8B01, E8B09). [T11]
- **ERP vs EIRP.** ERP uses dBd, EIRP uses dBi; 97.3 notes "Divide EIRP by 1.64 to convert to effective radiated power." E9A12: 6 dBi = 3.85 dBd. [T19]
- **Shorted vs open lines.** Shorted: ½λ very low, ¼λ very high, ⅛λ inductive. Open: ¼λ very low, ⅛λ capacitive (E9F04, E9F09–E9F12). [T21]
- **Q-section answer is 75 ohms** (E9E06): the pool keys 75, and offers no 70.7. [T21]
- **Beta/hairpin needs a short (capacitive) driven element**, and the element is insulated from the boom (E9E01, E9E05). [T21]
- **2200 m and 630 m limits** are EIRP (1 W; 5 W), with 1 W EIRP in Alaska within 800 km of Russia on 630 m (97.313(k), (l)). They need UTC notification and 30 days' wait (97.303(g)(2)). [T26]
- **Band-edge arithmetic.** USB extends up from the displayed carrier and LSB down, so 3.601 MHz LSB crosses the 3.600 MHz Extra phone edge (E1A04; 97.301(b), 97.305(c)). [T26]
- **Only Extra VEs give Element 4** (97.509(b)(3)(iii)). General exams also allow Advanced VEs. [T28]
- **Line A: 420–430 MHz** is barred north of Line A (97.303(m)(1) in the 2025 text; E1F05). [T28]
- **E0A09 date.** Hand-helds sold before 3 May 2021 are exempt (pool key). 1.1307 as fetched does not state that date; see Not verified. [T29]

## Languages

The pool is published in English only. The release page links English PDF and DOCX files and the figures, and no translation `[ncvec_extra.txt]`. Part 97 subpart F sets no exam language. The only language rule found is on-air identification: "By a phone emission in the English language" (97.119(b)(2)). No official or openly licensed translation of the pool or of Part 97 was found. Deck: English only.

## Not verified

1. **Exam time limit.** Part 97 subpart F sets none; no VEC page on timing was read.
2. **Exam fees.** The ARRL VEC fee page redirected (HTTP 302) and was not followed; fees were not checked.
3. **eCFR.** Not fetched, as instructed. The current rule text is the govinfo edition of 1 October 2025 plus the three FR documents above. A later amendment not found by the Federal Register API search (47 CFR Part 97 rules from 1 January 2024 onward; 6 results) would be missed.
4. **E0A09's "May 3, 2021" date** and E0A03's "30 - 300 MHz" are pool facts only. They do not appear in the 1.1307 text fetched; 1.1310 (the MPE table) was not fetched.
5. **Why E4D05, E6D07 and E2A13 were withdrawn.** Only E6D07's reason is published ("contained more than one correct answer").
6. **The next (2028–2032) Extra pool.** Not posted; its date is inferred only from the NCVEC's "normally 6 months prior".
7. **fcc.gov.** Not fetched, so no FCC name, seal or licensing statement was read.
8. **Band-plan, digital-mode and contest facts** (FT8 cycle and bandwidth, Q65, MSK144, APRS paths, ADIF, Cabrillo, LoTW, DVB-T, SSTV, VOACAP, 304A) come only from the pool keys. No WSJT-X, APRS or AMSAT document was fetched. The pool is tier A, so pool cards are safe; primers on these terms cite the pool.
9. **Formulas** (resonant frequency, half-power bandwidth, time constant, reactance, phase angle, ERP) are images in the NEETS PDFs, not text. The concept names therefore state the pool results, not formulas.
10. **Figure identification.** The figure PDF's text layer has labels (Point 1–8 on E5-1, numbered symbols on E6-1 to E6-3), but figure components were not checked against keys beyond the keyed answers.
11. **NCVEC page licence.** No licence was found for the page text; only the pool carries the public-domain release.

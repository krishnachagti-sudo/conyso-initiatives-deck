# fcc-technician audit, part A (topics 01–06)

Scope: `decks/fcc-technician/notes/01-units-and-quantities.json` to `06-permitted-transmissions.json`. I read all 346 cards in `order` (1002–6410): 79 + 42 + 88 + 61 + 25 + 51.
Audited 2026-09-25 against:
- `research/deck-briefs/fcc-technician-pool.txt` and `pool.json`;
- the saved `part97.txt` (eCFR 2026-09-22), `p1.949.txt`, `p2.1.txt` and `p2.201.txt`;
- the saved Wikipedia extracts (`rec/*.json`, `extra13/wp_*.txt`);
- the deck SVG labels.

For pass 2, the newcomer has studied only the cards before each card.

## Mechanical checks (all passed unless listed below)
- **Pool cards (114):** a script checked every card whose id ends in a pool ID. The groups are T1A, T1B, T1C, T1D, T1E, T1F, T3B, T5A and T5B complete, plus T5C01–07, T5C12, T7D01 and T9A03. For each card:
  - `front` is the pool stem, verbatim;
  - `choices` are the pool's four answers, verbatim and in order;
  - `back` is the keyed answer;
  - `source` names the ID.

  **The only failure is the back of T1F06** (see below). The remaining questions in T5C, T7D and T9A are in other topics.
- **Keys and wrong options:** every card has exactly one keyed answer. Every wrong option is explained, with three exceptions: T3B11 D and T1F04 A are explained wrongly, and T1F07 C's explanation undercuts the key (see below).
- **Rule text:** the following were checked against `part97.txt`:
  - 97.1;
  - 97.3(a)(4), (6), (7), (9), (10), (11), (13), (14), (15), (16), (22), (23), (25), (26), (31), (38), (39), (40), (41), (47) and (48);
  - 97.3(b)(4), (5), (9), (12) and (13);
  - 97.5, 97.7, 97.9, 97.11, 97.17, 97.19, 97.21, 97.23 and 97.25;
  - 97.101, 97.103, 97.105, 97.109, 97.111, 97.113, 97.115, 97.117 and 97.119;
  - 97.203, 97.205(d) and (g), 97.207(c), 97.211(b) and 97.215;
  - 97.301(a) and (e), 97.303 (including its note), 97.305, 97.307(b) and (f)(9)–(10), 97.313 and 97.407;
  - Appendix 1.

  1.949(a), 2.1 ("Emission", "Interference", "Radio waves", "Single-Sideband Emission") and 2.201(c) were also checked. Paraphrases are faithful except where listed below.
- **Arithmetic:** I recomputed every prefix, dB and wavelength distractor claim. All hold except T3B11 D. The renewal-date card (1 Feb → 1 June is 120 days; the window opens 3 March) is correct.
- **SVGs:**
  - `tech-privileges.svg` labels match 97.301(e), 97.305(c), 97.307(f)(9)–(10) and 97.313.
  - `spectrum-bar.svg` leaves out 13 cm (see below).
  - `db-ladder`, `em-wave` and `wavelength-scale` alt texts agree with the pool.
- **Wikipedia:** 14 cards cite it. Two restate facts that 47 CFR already states (Morse code, RF). Two carry Wikipedia text under a public-domain licence line (FM, FT8). Details are below.

## Problems

id | pass | severity | problem | source text or plainer wording
---|---|---|---|---
tech.waves.t3b11 | 1 | wrong | choicesExplained says "A, D: half the true speed". D (150,000,000 miles per hour) is about 67,000 km/s, roughly 0.22 × the speed of light, not half; D is wrong mainly because of the unit. | "A: half the true speed. C: right number, wrong unit (meters per second, not miles per hour). D: wrong number and wrong unit; 150,000,000 mph is less than a quarter of the speed of light."
tech.permitted-transmissions.t1f04 | 1 | wrong | "A: UN languages are not acceptable for identification". English is itself an official UN language, so the statement is false as written. | "A: being recognized by the UN does not make a language acceptable; phone identification must be in English (97.119(b)(2))."
tech.privileges.power-exceptions | 1 | wrong | The back gives only 97.313(f) (70 cm military areas) and (g) (33 cm near White Sands), and the explanation calls these "the 'specific restrictions'". That list is incomplete. 97.313(h) sets 50 W PEP on 219–220 MHz, a band this deck teaches as Technician (card 4110). 97.313(j) sets 10 W PEP for SS emissions. | 97.313(h): "No station may transmit with a transmitter power exceeding 50 W PEP on the 219-220 MHz segment of the 1.25 m band." Suggested back: "50 W PEP: on 70 cm in certain military areas, on 33 cm near White Sands, and on 219–220 MHz (1.25 m); also 10 W PEP for spread-spectrum." Or make the front "Name one place…".
tech.privileges.what-is-pep | 1 | wrong | "All amateur power limits are stated in watts PEP" overstates the rule. 97.313(i) states 60 m limits in W ERP, and (k), (l) and (m) use EIRP. | "Technician power limits (97.313(b), (c)(2)) are stated in watts PEP."
tech.permitted-transmissions.t1f06 | 1 | minor | The back is not the keyed text. It reads "All these choices are correct: “stroke”, “slant” and “slash” are all acceptable." The pool answer is "All these choices are correct". This is the only pool card whose back is not verbatim. | Back: "All these choices are correct". Move the gloss to the explanation (it is already there).
tech.permitted-transmissions.t1f07 | 1 | ambiguous | "C: identification is the station’s duty in any case" suggests that C is actually true, which weakens the single key. No rule says the licensed control operator must personally speak the identification. | "C: no rule requires the control operator personally to say the call sign; 97.119 requires the station to identify. The restriction on foreign third-party traffic is B (97.115(a)(2))."
tech.privileges.t1b10 | 1 | minor | "D: no 25-watt condition exists" is literally false: 97.313(d) sets 25 W PEP for Novices on 1.25 m. | "D: no rule makes SSB legal on any band just because power is kept to 25 watts."
tech.privileges.t1b12 | 1 | minor | "A: 50 W PEP is only a special limit in certain areas". 50 W also applies to the whole 219–220 MHz segment (97.313(h)), which is a band segment, not an area. | "A: 50 W PEP applies only in special cases (some areas, and 219–220 MHz), not generally."
tech.privileges.what-is-cw | 1 | minor | "CW is allowed on every frequency a control operator may use" drops the rule's qualifier. On 219–220 MHz only data is authorized (97.305(c)(4)(iv)). The same overstatement appears in `cw-only-vhf` ("CW is allowed everywhere") and `cw-vs-ssb-hf` ("Technicians may send CW everywhere they have privileges"). | 97.305(a): "Except as specified elsewhere in this part, an amateur station may transmit a CW emission on any frequency authorized to the control operator." Say "almost everywhere" or quote the "except" clause.
tech.units.what-is-rf | 1 | unsupported | The back gives "around 20 kHz to around 300 GHz" (Wikipedia), but the card also cites 47 CFR 2.1, which puts radio waves below 3,000 GHz. The two cited sources disagree on the top of the range, and the card does not say so. This fact is also sourced to Wikipedia although 47 CFR states it. | 2.1: "Radio Waves or Hertzian Waves. Electromagnetic waves of frequencies arbitrarily lower than 3,000 GHz". Either drop the 2.1 citation or say "definitions vary; the FCC's rules say radio waves are below 3000 GHz."
tech.licensing.what-is-morse-code | 1 | minor | The card is sourced to Wikipedia, but 47 CFR states the fact: 97.3(a)(28) and pool T8D09. | 97.3(a)(28): "International Morse code. A dot-dash code as defined in ITU-T Recommendation F.1". Cite 97.3(a)(28) and T8D09 as primary. Keep Wikipedia only for "dits and dahs".
tech.operating-practice.what-is-fm | 1 | minor | The card cites Wikipedia "Frequency modulation", but sourceURL is the NCVEC pool PDF and sourceLicence is "A · public domain". CC BY-SA text is carried under a public-domain label. The PM note is correctly supported by 2.201(c)(3). | Add the Wikipedia URL and licence, or reword the back from the pool (T8A04: "FM or PM") and 2.201(c)(3) alone.
tech.signals-modes.what-is-ft8 | 1 | minor | The explanation ("frequency-shift-keying mode released in 2017 … most-reported digital mode on spotting networks") comes only from Wikipedia. The card's sourceURL and licence are still the pool's ("A · public domain"). This is trivia a Technician candidate does not need, and "spotting networks" is not explained. | Replace with a pool-backed why: "FT8 lets two stations complete a contact when signals are too weak to hear by ear (T8D02)". Or add the Wikipedia URL and licence and explain "spotting networks".
tech.units.t5a08 | 1 | unsupported | "the pool keys these as conductors" is not true: the pool only keys glass as the insulator and says nothing about the others. | "A, C, D: sea water, stainless steel and graphite all conduct electricity; only glass is a good insulator."
tech.units.t5c12 | 1 | minor | "impedance is not the inverse of anything" overstates. Admittance is the inverse of impedance, and "reactance" is never explained. | "B, C: impedance is itself an opposition to current, not the inverse of resistance or of reactance (another kind of opposition to AC)."
tech.units.unit-of-power | 1 | minor | "Watt-hours measure an amount of energy, not a rate" is not in the pool (T5A02 only lists watt-hours as a wrong option), and no other source is cited. T5A02's choicesExplained has the same sentence. | The fact is right. Add a source, or say "watt-hours multiply power by time, so they are not a rate."
tech.units.t5a05 | 1 | minor | "an ampere-hour is an amount of current over time" is imprecise; an ampere-hour is an amount of charge. The claim is also unsourced. | "B: an ampere-hour counts how much charge flows (current × time), as in a battery rating; it is not a difference that drives electrons."
tech.units.what-are-prefixes | 1 | minor | "in steps of 1000" is too broad. Other metric prefixes (centi, deci, nano) exist, and the deck's own pico card jumps a factor of a million from micro. | "Word parts that multiply or divide a unit; the ones on this exam go in steps of 1000 (kilo × 1000, milli ÷ 1000), except pico, which is a millionth of micro."
tech.licensing.t1c07 | 1 | ambiguous | "A: too short" is not really wrong: renewal may be requested 30 days before expiry. The question means the earliest time. | "A: you may renew 30 days before expiry, but you may start as early as 90 days before, which is what the question asks."
tech.licensing.t1a04 | 1 | unsupported | "B: the FCC does not mail the licence" has no support in the cited sources. 97.23 requires an email address, and T1A04 keys email, but nothing states that mail is never used. T1C10's choicesExplained makes the same claim ("D: the FCC does not mail licences"). | "B: official notice comes by email with a download link (T1A04), not by post."
tech.licensing.beacon-hf-segment / what-is-a-beacon | 1 | minor | The what-is-a-beacon example says "If you can hear a distant beacon on 10 meters, that path is open for contacts". This overstates what 97.3(a)(9) says: hearing a beacon shows that propagation is open, not that a two-way contact will succeed. | "…signals from that area are getting through on 10 meters right now."
tech.licensing.what-is-station-id | 1 | minor | "so no signal is anonymous" is an overstatement. 97.119(a) exempts space and telecommand stations, and model craft are exempt under 97.215(a). | "so listeners can tell which station is transmitting."
tech.licensing.notification-email | 1 | minor | "That is why every licence grant must show an email address" states the rule's reason, but 97.23 gives no reason. | "Every licence grant must also show an email address where you can receive FCC correspondence (97.23)."
tech.waves.what-is-a-microwave | 1 | unsupported | "The pool uses the word for signals above UHF and at its top end" is the writer's inference and hard to parse. It also conflicts with the back, which starts microwaves at 300 MHz, the bottom of UHF. The pool contrasts "UHF and microwave" (T3A02). | "Radio engineers usually mean about 1 GHz and up. The pool speaks of 'UHF and microwave' signals, so read 'microwave' as the frequencies above most of UHF."
tech.waves.what-is-uhf | 1 | minor | "The rules' band table lists the 70 cm, 33 cm and 23 cm bands under UHF". The table also lists 13 cm (2300–2310 and 2390–2450 MHz) under UHF. `spectrum-bar.svg` also leaves 13 cm out of its UHF section, although 13 cm falls inside the drawn 300–3000 MHz range. Its note "higher bands not shown" does not cover it. | 97.301(a) UHF rows: 70 cm, 33 cm, 23 cm, 13 cm. Add 13 cm to the card and the bar.
tech.privileges.what-is-an-itu-region | 1 | minor | "the US is in Region 2" is not fully accurate: the note to 97.303 puts some US insular areas in Region 3. | "The 50 states are in Region 2 (some US Pacific islands, such as Guam, are in Region 3)."
tech.privileges.t1b01 | 1 | minor | The explanation cites 97.301(e) for "28.300 to 28.500 MHz, SSB only". 97.301(e) gives only 28.0–28.5 MHz; the phone segment and SSB-only rule are in 97.305(c) and 97.307(f)(10). | Cite 97.305(c) and 97.307(f)(10). The pool itself prints 97.301(e).
tech.signals-modes.what-is-am | 1 | minor | "the earliest way of sending sound by radio" widens Wikipedia's claim. | Wikipedia: "AM was the earliest modulation method used for transmitting audio in radio broadcasting." → "the earliest method used for radio broadcasting of sound".
tech.permitted-transmissions.obscene | 1 | minor | "There is no approved or banned word list" is inferred from the pool's wrong options and is not stated in 97.113(a)(4). | Keep, but attribute it: "(the pool rejects the idea of an FCC or ITU word list, T1D06)".
tech.permitted-transmissions.indicator-separator | 1 | minor | The words "stroke", "slant", "slash" come from pool T1F06, but the card cites only 97.119(c). | Add "NCVEC … Pool, T1F06" to source.
tech.units.what-is-a-magnetic-field | 2 | unclear | The example repeats the explanation ("Inductance stores energy in a magnetic field…") instead of giving an example. | "A compass needle swings when placed next to a wire carrying current, because the current makes a magnetic field."
tech.units.abbrev-khz / abbrev-mhz | 2 | minor | "KHz, khz and KHZ are keyed wrong in the pool" is odd wording ("keyed" means the right answer). | "…are the wrong options in the pool."
tech.units.t5a04 / t5c03 / t5c04 / t5c05 | 2 | minor | "not the pool's term" / "not the unit of inductance" restate the answer instead of saying what the distractor is. | "Wave number counts cycles per unit distance." "Admittance is the inverse of impedance." "The coulomb is the unit of electric charge."
tech.units.t5a07 | 2 | minor | "Young's modulus" is not explained. | "D: Young's modulus measures stiffness, not conductivity."
tech.waves.what-is-wavelength | 2 | unclear | "A wave's length in meters" is circular. | "The distance a wave travels during one complete cycle; in meters it is about 300 ÷ frequency in MHz."
tech.waves.hf-vhf-uhf | 2 | ambiguous | The front asks two things ("Put … in order with their ranges. Which one covers 30 to 300 MHz?"), and the back answers the second first. | Front: "Which of HF, VHF and UHF covers 30 to 300 MHz?" Keep the order in the back.
tech.waves.t3b03 / tech.units.t5c12 | 2 | minor | "reactance" and "ionizing" appear in the distractors with no gloss. | "Reactance is AC opposition from coils and capacitors; ionizing radiation (X-rays) is a kind of radiation, not a part of a wave."
tech.licensing.what-is-the-service | 2 | minor | The explanation quotes "without pecuniary interest", but the back says "not for money" and never links the two. | "…the rule's phrase 'without pecuniary interest' (no financial gain) is why business use is excluded."
tech.licensing.what-is-a-club-station | 2 | minor | "trustee" and "operator/primary licence" are used before either is taught. They next appear at 3350 and T1A05. | "…held for the club by a trustee (the member named on the club licence), who must hold an ordinary individual (operator/primary) licence."
tech.licensing.what-is-phonetic-alphabet | 2 | unclear | The example is abstract ("one agreed word for each letter"). | Give the letters, e.g. "K is said 'Kilo' and F 'Foxtrot', so KF1XXX cannot be heard as KS1XXX." (The ITU phonetic words are not in the saved sources; cite one if added.)
tech.licensing.what-is-a-repeater | 2 | minor | The example says the repeater "rebroadcasts". "Broadcasting" is a prohibited, defined term (97.3(a)(10)), taught at 6020. | "…which retransmits the voice on another frequency…"
tech.licensing.phonetics-encouraged | 2 | ambiguous | "Encouraged, not required, in every situation" can be read as "required in every situation" or "not required in all situations". | "It is never required: not in emergencies, not with foreign stations, not anywhere."
tech.licensing.places | 2 | minor | "ITU Region 2/3" is used at 3270, before the ITU Region card (4020). | Move after 4020, or add "(one of three world regions in the band tables)".
tech.licensing.t1a06 | 2 | minor | The options refer to "the Technician portion of 10 meters" and "HF Technician bands" before the Technician privilege cards (4140–4190). | The card is fine to keep but place it after 4190, or add "(Technicians have 28.0–28.5 MHz on 10 m)" to the explanation.
tech.licensing.t1c05 | 2 | minor | "B, C: the pool does not key these" restates the key without explaining why. No source for call-sign groups was fetched (brief §10), so the card cannot say more. | Acceptable given the sources; note in the explanation that the group formats come from the FCC's call-sign page, which was not verified.
tech.privileges.what-is-pep | 2 | unclear | "at the crest of the modulation envelope" is jargon a newcomer cannot parse. | Add: "in plain terms, the transmitter's power at the strongest moment of your voice or signal."
tech.privileges.what-is-secondary / 70cm / apply-secondary | 2 | minor | "radiolocation" is not explained. | "radiolocation (radar) stations".
tech.station-equipment.what-is-modulation | 2 | minor | "RF carrier signal" (the pool's own wording) is kept but "carrier" is not explained. | Add: "the carrier is the steady radio signal the transmitter produces before your voice is added."
tech.control-operator.station-licensee | 2 | minor | "registered keeper" is British usage for a deck about US rules. | "Like a car's registered owner: …"
tech.control-operator.t1e11 / t1e10 | 2 | minor | "third party" (T1E11 A) and "telecommand of a model" (T1E10 C) are used before they are taught (6030 and 6035). | "…someone else can speak under the control operator's supervision" / "…sending control signals to a model."
tech.permitted-transmissions.* (what-is-broadcasting, what-is-third-party, t1d02, classify-third-party) | 2 | minor | "ham" is used as a noun but is never defined and is not in the glossary. | Use "amateur" (or "amateur (ham)") on first use.
tech.permitted-transmissions.what-is-broadcasting | 2 | minor | The example is a sentence fragment ("Unlike a message to other hams, a programme aimed at anyone who tunes in, …"). | "A commercial FM station's programme, aimed at anyone who tunes in, is broadcasting; a message to other amateurs is not."
tech.permitted-transmissions.t1d07 | 2 | minor | "C: … a different system despite its name" does not say why C is wrong. | "C: MARS is a Defense Department programme linking to government stations; an auxiliary station links amateur stations within an amateur system (97.3(a)(7))."

## Counts
- Cards checked: 346, of which 114 are pool cards.
- Problem lines: 53 (some lines cover several cards).
- By severity:
  - wrong: 4
  - unsupported: 4
  - ambiguous: 4
  - unclear: 4
  - minor: 37

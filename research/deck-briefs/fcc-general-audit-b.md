# Audit B: fcc-general, topics 09 to 16

Checked 2026-09-25 against the brief (`fcc-general.md`), the skeletons in `fcc-general-skeleton/topic-09…16.json`, the 6th-errata pool text (`sources/fcc-general/pool_feb2026.txt`), 47 CFR Part 97 (eCFR issue 2026-09-22, `sources/fcc-technician/part97.txt` and `sources/fcc-general/p97_*.txt`), the NEETS glossaries and the SWPC pages.

Cards checked: 373 (09: 37, 10: 69, 11: 39, 12: 59, 13: 31, 14: 53, 15: 49, 16: 36). Terms from the Technician deck and from General topics 1 to 8 count as known.

## Skeleton match (all 155 pool cards in topics 09 to 16, compared by script)

- Every skeleton question has exactly one card, and no card is missing or extra.
- Every front matches its skeleton question, except the apostrophe differences listed below.
- Two cards are missing a choice, and in both cases it is the keyed answer (see the first two report lines).
- The keys match everywhere.
- Back format differs between files:
  - Topics 09 to 11 write the back as "C) answer text".
  - Topics 12 to 16 (and topics 01 to 08 and the Technician deck) write the answer text only.
  - The text matches the skeleton in both formats. The deck should use one format.
- Straight apostrophes stand where the pool and the skeleton have curly ones (’):
  - G8B08: choice B and back.
  - G8B11: front.
  - G2E04: choices A and B.
  - G2E10: choice D and back.

## Topic 11: privileges, band edges and power, checked against the Feb 2026 text

- 97.301(d), the General table, matches every General segment the cards state:
  - 160 m: 1.800–2.000 MHz.
  - 80 m: 3.525–3.600 MHz. 75 m: 3.800–4.000 MHz.
  - 60 m: 5.3515–5.3665 MHz.
  - 40 m: 7.025–7.125 and 7.175–7.300 MHz.
  - 20 m: 14.025–14.150 and 14.225–14.350 MHz.
  - 15 m: 21.025–21.200 and 21.275–21.450 MHz.
  - 30, 17, 12 and 10 m: the whole band.
- These cards are correct: 97.313(b) 1.5 kW PEP, 97.313(c)(1) 200 W PEP on 10.10–10.15 MHz, 97.305(a) CW anywhere, and 97.205(b) 10 m repeaters only above 29.5 MHz.
- 60 m:
  - `60m-channel` correctly teaches 5351.5–5366.5 kHz plus the four channels (97.303(h)(3)).
  - `60m-bandwidth-gain` correctly teaches 2.8 kHz (97.303(h)(3)) and the gain record (97.313(i)).
  - No card teaches "channels only" or "100 W ERP everywhere".
- Withdrawn questions:
  - G1A04 and G1C09 have no card and are not mentioned anywhere in topics 09 to 16.
  - G1C08, G1C10 and G1E09 are also absent.
  - This is how the brief says to handle them.
- One gap: the new 9.15 W ERP limit on 5351.5–5366.5 kHz (97.313(i)) is stated on no card (see the report).

## Report

id | pass | severity | problem | source text or plainer wording
---|---|---|---|---
gen.general-privileges.pool-g1a11 | 1 | wrong | `choices` omits option B, the keyed answer; the back says "B) The upper frequency portion" but B is not listed. | Skeleton: "B) The upper frequency portion" must sit between A and C.
gen.digital-modes.pool-g8c15 | 1 | wrong | `choices` omits option C, the keyed answer. | Skeleton: "C) The signal-to-noise ratio is equivalent to +3dB in a 2.5 kHz bandwidth".
gen.mixing-imd.pool-g8b13 | 1 | wrong | choicesExplained calls 5F1-3F2 and 3F1-F2 "higher-order odd products". They are even-order (order = 5+3 = 8 and 3+1 = 4), and that is why A, B and D are wrong. | "A, B: 5F1-3F2 (order 8) and 3F1-F2 (order 4) are even-order products; add the multipliers to get the order. D: so not all are odd-order."
gen.general-privileges.pool-g1a01 | 1 | wrong | CE for B says "only two of the four named bands actually have a gap"; of 160, 60, 15 and 12 m only 15 m has a gap (97.301(d)). | "B: 160, 60 and 12 m are full-band for General; only 15 m has a gap."
gen.general-privileges.voice-upper-portion | 1 | wrong | The explanation lists 17, 12 and 10 m as bands where the General voice segment "sits at the top". On those bands General has the whole phone segment (97.301(d) whole band; 97.305(c) phone 18.110–18.168, 24.93–24.99, 28.3–29.7). The cited 97.301(d) alone does not show phone segments. | "On 75, 40, 20 and 15 m the General phone segment is the upper part of the phone allocation (97.301(d) with 97.305(c)); on 160, 17, 12 and 10 m General has all of it."
gen.general-privileges.10m-facts | 1 | wrong | The explanation says repeaters are kept high "to avoid the CW and phone segments". The phone segment runs 28.3–29.7 MHz (97.305(c)), so 29.5–29.7 is inside it. The rule gives no reason. | 97.205(b): a repeater may not use "the 28.0-29.5 MHz" segment. Say "97.205(b) bars repeaters from 28.0–29.5 MHz, so only 29.5–29.7 MHz is left."
gen.general-privileges.pool-g1a10 | 1 | wrong | Same claim in the explanation ("keeps them clear of the CW and phone segments below"). The CE for B, C says the lower segments "are used for CW and phone", but 28.1–28.2 lies in the RTTY/data segment. | "B, C: 97.205(b) bars repeaters below 29.5 MHz on 10 m."
gen.station-rules.beacon-purpose | 1 | wrong | "That is the sole purpose in the rule text" — the definition adds a second purpose. | 97.3(a)(9): "for the purposes of observation of propagation and reception or other related experimental activities."
gen.station-rules.g1b03 | 1 | wrong | Explanation: "97.3(a)(9) names only propagation and reception observation" — same error. | As above; say "97.3(a)(9) names observation of propagation and reception (and related experiments); repeater ID and bulletins are not beacon purposes."
gen.station-rules.propagation-beacon-primer | 1 | unsupported | The back says a beacon "transmits automatically". The definition does not say so, and 97.203(d) allows automatic control only in listed segments; the deck's own `beacon-auto-hf` says elsewhere a beacon needs local or remote control. | "A station that transmits so others can observe propagation and reception (97.3(a)(9)); any Technician or higher may run one (97.203(a))."
gen.station-rules.repeater-10m-control | 1 | wrong | Cites 97.205(b), which only lists excluded frequency segments. The rule behind G1E02 is 97.205(a) (control operator "subject to the privileges of the class of operator license held") read with 97.301(e) (Technician 10 m is 28.0–28.5 MHz only). | Cite 97.205(a) and 97.301(d),(e).
gen.station-rules.good-practice-judge | 1 | unsupported | Cites 97.101(a), which requires good practice but names no judge; "The rule names no other body" implies the rule names the FCC. | Source is Pool G1B11 only; 97.101(a): "each amateur station must be operated in accordance with good engineering and good amateur practice."
gen.station-rules.g1b11 | 1 | unsupported | Explanation: "97.101(a) leaves the standard to the FCC" — the rule does not say that. | "The pool keys the FCC; 97.101(a) sets the standard but names no body."
gen.station-rules.good-practice-primer | 1 | minor | "the Commission itself is the judge of it" is attributed to 97.101(a), which does not say so. | Drop the clause or cite G1B11.
gen.ve-remote.remote-foreign-from-us | 1 | unsupported | Cites 97.7 for "only the rules of the foreign station's own country"; 97.7 only says who may be control operator of a US station. No Part 97 section is given for G1D12 (the brief, §7.5, notes the pool's 97.507 citation is wrong too). | Cite Pool G1D12 only; drop "not FCC rules" as a rule statement.
gen.ve-remote.g1d12 | 1 | unsupported | Explanation "97.7 leaves a foreign-licensed station under only that country's own regulations" — not in 97.7. | "The pool keys only the remote station's country's rules."
gen.station-rules.itu-region2-fact | 1 | unsupported | Explanation says 97.301's tables place the Americas in Region 2; the tables have Region columns but never say which continents are in which Region. | Cite Pool G1E06; "North and South America are ITU Region 2 (pool G1E06)."
gen.station-rules.g1e06 | 1 | unsupported | Same claim ("97.301's band tables place North and South America in ITU Region 2"). The CE's continent lists for Regions 1 and 3 have no cited source. | "B, D: the pool keys Region 2 for the Americas; Regions 1 and 3 cover other parts of the world."
gen.digital-modes.pool-g8c09 | 1 | ambiguous | CE says choice C "is a true statement about mesh networks in general but is not the keyed choice", which tells the learner the question has two defensible answers. | Give a reason C does not answer the question, or say only "C: not the keyed property; the pool tests re-routing around a failed node (B)".
gen.phone-cw.qrs-primer | 1 | ambiguous | Defines "QRS?" as "Shall I send more slowly?". The pool (G2C02) keys "Send slower" when a station sends "QRS?", so the primer contradicts the pool card that follows. The pool gives no source for the "Shall I…" meaning. | Follow the pool: "QRS means 'send slower'; if a station sends QRS?, slow down (G2C02)."
gen.general-privileges.mf | 1 | wrong | Cites 97.3(a)(8); MF is defined in 97.3(b)(8). | 97.3(b)(8): "MF (medium frequency). The frequency range 300-3000 kHz."
gen.general-privileges.image-emission | 1 | wrong | Cites 97.3(a)(3); image is 97.3(c)(3). | 97.3(c)(3): "Image. Facsimile and television emissions…"
gen.general-privileges.data-emission | 1 | wrong | Cites 97.3(a)(2); data is 97.3(c)(2). | 97.3(c)(2): "Data. Telemetry, telecommand and computer communications emissions…"
gen.digital-modes.rtty | 1 | wrong | Cites 97.3(a)(7); RTTY is 97.3(c)(7). The explanation also calls RTTY an "emission designator"; the rule defines it as an emission type covering several designators. | 97.3(c)(7): "RTTY. Narrow-band direct-printing telegraphy emissions…"; "The rules list RTTY as its own emission type."
gen.general-privileges.60m-channel | 1 | minor | The explanation states the 100 W ERP limit but cites only 97.303(h)(3); the limit is in 97.313(i). | Add 97.313(i).
gen.general-privileges.60m-bandwidth-gain | 1 | minor | Correct as far as it goes. No card in the topic states the new 9.15 W ERP limit on 5351.5–5366.5 kHz, so "60 m power limits are set in ERP" has no number, and a learner may assume 100 W applies across the band. | 97.313(i): "No station may transmit in the 5.3515-5.3665 MHz band with a radiated power exceeding 9.15 W ERP." Add it here or to `60m-channel` (brief concept gen.priv.60m-2026).
gen.general-privileges.pool-g1c04 | 1 | unsupported | CE for C: "third-party traffic records are a separate rule". No current Part 97 rule requires third-party traffic records. | "C: no rule requires a record of third-party traffic."
gen.general-privileges.pool-g1c03 | 1 | minor | CE for D, "3 kHz is close but not the keyed figure", gives no rule. | "B, C, D: the rule sets 2.8 kHz for all 60 m emissions (97.303(h)(3); 97.307(f)(14))."
gen.general-privileges.advanced-class | 1 | unsupported | "no longer issued to new applicants" is not in the cited 97.301(c). | 97.501 lists exam routes only to Extra, General and Technician; cite 97.501 or drop the clause.
gen.general-privileges.general-class | 1 | minor | "granted after passing Elements 2 and 3" is cited to 97.301(d); the elements are in 97.501(b). | Add 97.501(b).
gen.general-privileges.amateur-extra | 1 | minor | "The highest US amateur licence class" is not stated in 97.301(b). | "The licence class with the widest HF privileges (97.301(b))."
gen.general-privileges.30m-limits | 1 | minor | The explanation states a cause ("shared with other nations' fixed service, so its limits are tighter") that the cited 97.305(c) and 97.313(c)(1) do not give. The sharing itself is 97.303(j). | "30 m is shared with other nations' fixed service (97.303(j))"; drop "so".
gen.general-privileges.30m-vs-max-power | 1 | minor | The same causal inference is in the explanation. The card cites the pool syllabus for a rule fact. | Cite 97.313(b),(c)(1).
gen.general-privileges.10m-cw-vs-phone | 1 | minor | The reason "CW's simpler, narrower signal is allowed everywhere" is not in 97.305. | "97.305(a) allows CW on any frequency the control operator may use."
gen.general-privileges.hf-segments | 1 | minor | The front asks about HF/MF bands, but the full-band list leaves out 630 m (MF, 472–479 kHz, whole band for General per 97.301(d)). | Say "HF bands" in the front, or add 630 m (and 2200 m, which is LF).
gen.general-privileges.primary-service | 2 | unclear | The back sentence is inverted ("A service whose stations a secondary-service station must not interfere with…"). | "A service with first claim on a shared band: secondary stations must not cause it harmful interference and must accept interference from it."
gen.mixing-imd.pool-g8b04 | 1 | minor | CE for B says "a reactance modulator produces PM". G8B07 in the same topic describes a "reactance modulated oscillator" in an FM transmitter, so the claim is too broad. | "B: a reactance modulator shifts the phase or frequency of a signal; it does not generate harmonics."
gen.mixing-imd.odd-order | 1 | minor | "hardest to filter out" (explanation) and the echo analogy are not in the pool. | "Odd-order products such as 2F1-F2 fall closest to the original signals (G8B05)."
gen.mixing-imd.imd-products | 1 | minor | "the hardest interference to filter" is not sourced. | Drop it, or say "because they fall so close, a filter cannot easily separate them" as our inference.
gen.mixing-imd.intermodulation | 1 | minor | "commonly happens in an overdriven receiver front end" is not in the cited pool question. | Drop it or give a source.
gen.mixing-imd.heterodyning | 1 | minor | "how the earliest CW receivers made code audible" is a history claim with no source. NEETS Mod 12 supports only heterodyne detection of CW. | "It is also how a receiver makes CW audible (NEETS Mod 12: heterodyne detection)."
gen.mixing-imd.lo | 2 | minor | The explanation says "the RF amplifier and mixer stay locked". NEETS Mod 17 says the LO and the RF amplifier keep a fixed difference; the mixer is not tuned. The singer analogy is hard to follow. | "Retuning the LO, with the RF amplifier ganged to it, is how the receiver changes station."
gen.mixing-imd.modulating-frequency | 2 | unclear | The analogy compares the modulating frequency to a song's tempo, but the modulating frequency is the pitch of the audio. | "Like humming a 1 kHz tone into the microphone: 1 kHz is the modulating frequency."
gen.mixing-imd.image-vs-imd | 2 | unclear | In "fixed offset (2 x IF), fixed by front-end filtering", "fixed" means two different things. | "…cured by filtering before the mixer."
gen.mixing-imd.pool-g8b09 | 1 | minor | "receiver power consumption is unaffected by bandwidth choice" overstates. | "B: bandwidth matching is about noise, not power drain."
gen.digital-modes.pool-g8c08 | 1 | ambiguous | CE for C says "PSK31 has no built-in error correction", but topic 8 (G8A06) teaches that QPSK31 is error-correcting. | "C: the common BPSK form of PSK31 has no error correction (the QPSK variant does); in any case C is not what the pool keys."
gen.digital-modes.time-slot | 1 | unsupported | "fixed periods FT8 divides each minute into" is not in the pool. | "One of FT8's alternating transmit periods; stations answer in the other slot (G2E04)."
gen.digital-modes.system-fusion | 1 | unsupported | "It is Yaesu's digital voice system" has no cited source and names a brand. | Drop it: "One of the three digital voice systems the pool names with DMR and D-STAR (G8C16)."
gen.digital-modes.d-star | 1 | minor | "one of the earliest widely adopted amateur digital voice systems" is not sourced. | Drop it.
gen.digital-modes.jt65 | 1 | minor | "predates FT8 … including moonbounce" is not sourced. | Drop it or give a source.
gen.digital-modes.ft4 | 2 | unclear | "sent using AFSK on the standard sideband USB" reads awkwardly, and "faster cousin" is not sourced. | "Like FT8, JT65 and JT9, FT4 is sent on USB when AFSK is used (G2E05)."
gen.digital-modes.jt9 | 2 | minor | The same awkward "on the standard sideband USB". | As above.
gen.digital-modes.psk31 | 1 | minor | "needs very little bandwidth and power" is not sourced. | Drop it or cite a source.
gen.digital-modes.wspr | 1 | minor | "report them online, mapping which paths are open" is not in G8C02. | Drop it or source it.
gen.digital-modes.baud | 1 | unsupported | The unit definition ("A unit of signalling rate") is cited to the pool, which never defines baud. The back buries the definition behind a troubleshooting fact. | "Baud: symbols sent per second (cite a glossary, e.g. NEETS or 97.307(f)(3) usage)." Move the RTTY fault to the explanation.
gen.digital-modes.baudot-structure | 1 | minor | "Baudot itself carries no error checking" is not in 97.309(a)(1). | Drop it, or cite G8C04 (option B is a distractor, which implies this but does not state it).
gen.digital-modes.arq-vs-fec | 1 | minor | "which is why beacon-style modes rely on it" is not sourced. | Drop it.
gen.digital-modes.pool-g8c07 | 1 | minor | The CE's descriptions of MSK144 (meteor scatter), AMTOR ("older ARQ mode") and MFSK32 are not in any cited source. | "A, C, D: the pool keys FT8 as the mode built for very low SNR."
gen.digital-modes.pool-g2e07 | 1 | minor | "FT8 runs through an ordinary sound card" is not sourced. | "A: the pool keys only accurate time as required."
gen.digital-modes.pool-g2e01 | 2 | minor | Calls CW "a separate, unmodulated-tone mode", which a newcomer may misread. | "C: CW is on-off keyed Morse, not RTTY."
gen.digital-modes.ft8-practice | 2 | minor | The front asks what "the pool tests", which is a question about the exam, not about FT8. | "What three things does good FT8 practice need: clock accuracy, which slot to answer in, and which sideband?"
gen.digital-modes.pool-g8c16 | 2 | minor | The back and choices spell "SystemFusion" (the pool's spelling), while the primer and fact use "System Fusion". | Keep the pool text; add "(System Fusion)" in the explanation.
gen.station-rules.antenna-height-200ft | 1 | minor | "or any height near a public-use airport" overstates 97.15(a). | 97.15(a): "certain antenna structures … located near or at a public use airport."
gen.station-rules.antenna-structure-primer | 1 | unsupported | "The antenna, its mast or tower, and any guys or support wires" is not in 97.15. The back also packs in the 200 ft rule. | "The antenna and whatever holds it up, such as a mast or tower." Leave the 200 ft rule to the fact card.
gen.station-rules.g1b01 | 1 | minor | "matches FAA obstruction-marking rules" is not sourced. | "97.15(a) sets the threshold at more than 200 ft (60.96 m)."
gen.station-rules.one-way-transmission-primer | 1 | minor | "normally barred" is cited to 97.111(b); the ban is 97.113(b). | Add 97.113(b): "nor may an amateur station transmit one-way communications except as specifically provided."
gen.station-rules.third-party-remote | 1 | unsupported | Cites 97.115, which does not mention remote control. | Cite Pool G1E12.
gen.station-rules.third-party-agreement-primer | 1 | minor | "International third-party traffic is otherwise barred" leaves out the emergency and eligible-person exceptions. | 97.115(a)(2): emergency or disaster relief traffic is allowed to any country; a third party "eligible to be a control operator" is exempt.
gen.station-rules.beacon-power-vs-other-limits | 1 | minor | Says "Beacons: 100 W PEP", which contradicts `beacon-power`, where the deck notes that the rule says only 100 W. | "Beacons: 100 W (97.203(c))."
gen.station-rules.ss-power-fact | 1 | minor | The explanation compares SS with the "general HF ceiling". SS is authorised only on UHF and higher (97.305(c)), and 1.5 kW is the ceiling on every band. Its "reflecting the wide bandwidth" reason is our inference. | "10 W PEP, far below the 1.5 kW limit that applies elsewhere (97.313(b),(j))."
gen.station-rules.pool-g1e08 | 1 | minor | CE for D: "the general HF maximum" (1500 W is the maximum on all bands). | "D: 1500 W is the overall maximum (97.313(b)), not the SS limit."
gen.station-rules.spread-spectrum-primer | 1 | minor | The definition is cited to 97.313(j), which gives only the power limit. "lowers interference potential" is not sourced. | Cite 97.3(c)(8) ("bandwidth-expansion modulation emissions").
gen.ve-remote.expired-general-credit | 1 | ambiguous | The front does not say "beyond the grace period"; within the grace period the credit is Elements 2 and 3 (97.505(a)). The back repeats itself ("Element 3 credit, for elements represented…") and adds "if not revoked", which is not in 97.505. | "An expired General, Advanced, or pre-21-Mar-1987 Technician licence, past the grace period, earns Element 3 credit (97.505(a)(2))."
gen.ve-remote.expired-general-element2 | 2 | unclear | "an expired-and-grace-period-passed General licence" stacks too many words. | "…once a General licence is past its grace period, Element 2 credit is lost."
gen.ve-remote.pool-g1d01 | 2 | unclear | The CE for D, "narrower than what the rule table allows here", is hard to follow. | "D: an expired Technician (after 21 Mar 1987) or Technician Plus licence earns no credit (97.505(a)(3))."
gen.ve-remote.csce-validity | 1 | minor | Cites 97.9(b) for element credit; the credit rule is 97.505(b). | Cite 97.505(b): "credit … for each element the CSCE indicates the examinee passed within the previous 365 days."
gen.ve-remote.g1d09 | 1 | minor | Same: "97.9(b) sets the CSCE credit window". | Cite 97.505(b).
gen.ve-remote.ve-non-citizen | 1 | minor | Cites 97.509(b)(3), which says nothing about citizenship. The General-or-higher result follows because every VE needs an FCC licence of at least General (for Technician exams), but that is our inference. | Cite Pool G1D08 plus 97.509(b)(3)(i).
gen.ve-remote.ve-primer | 1 | minor | Cites 97.3, which only expands the abbreviation ("VE. Volunteer examiner."). | Cite 97.509(a),(b)(1).
gen.ve-remote.vec-primer | 1 | minor | Cites 97.3 (abbreviation only). The example names ARRL/VEC and W5YI VEC with no source in this topic, and the explanation says VECs provide "question sets" (97.507 gives that job to VEs). | Cite 97.509(a),(b)(1); drop the names or source them; drop "question sets".
gen.phone-cw.pool-g2a01 | 1 | minor | CE for B: "LSB is the convention below 14 MHz"; 60 m (5 MHz) uses USB (G1C03). | "B: LSB is the convention on 160, 75 and 40 m."
gen.phone-cw.pool-g2c11 | 1 | minor | CE for B: "QRN, not QRV, reports interference or static". QRN is static only (G2C10); man-made interference is a different Q signal. | "B: interference is not what QRV means; QRV = ready to receive."
gen.phone-cw.pool-g2a07 | 1 | minor | CE for A: "a transmitted carrier describes AM". A describes one sideband plus the carrier, which is not AM (AM has both sidebands). | "A: in SSB the carrier is suppressed too."
gen.phone-cw.pool-g2a12 | 1 | minor | Calls "RF clipping level" an "audio-processing control". | "A: clipping level is a processor setting, not the drive control that sets ALC."
gen.phone-cw.rst-primer | 1 | unsupported | The Readability/Strength/Tone expansion and "599" are cited to G2C07, which gives neither. | Give a source or keep to G2C07: "the CW signal report to which a C can be added".
gen.phone-cw.zero-beat-primer | 2 | unclear | The example is circular ("…sound the same pitch, then zero beating"). | "Tuning until your sidetone and the received tone match in pitch, so you transmit on the other station's frequency."
gen.phone-cw.qsk-primer | 2 | minor | The example says "gaps between your own key clicks"; key clicks are a transmitter fault (G2C07 D). | "…in the gaps between your own dots and dashes."
gen.phone-cw.kn-vs-ar | 1 | minor | "with no restriction on who may reply" is not sourced; AR ends a message and is not an invitation. | "AR marks the end of a formal message; it says nothing about who replies."
gen.phone-cw.ar-primer | 2 | minor | Calls AR "a clean handoff point", which it is not. | "It tells the receiving station the formal message is complete."
gen.op-practice-vm.pool-g2b09 | 1 | minor | CE for D: "RACES applies to emergency, not routine, operation". RACES also runs drills (97.407(d)(4)), and D is wrong because of licensing, not timing. | "D: 97.407(a) requires an FCC licence and civil-defence enrolment, whatever the state of normal communications."
gen.op-practice-vm.priority-exception | 1 | minor | Says 97.101(c) requires priority to emergency stations "at those times"; the rule says "At all times and on all frequencies". | Quote 97.101(c).
gen.op-practice-vm.volunteer-monitor-primer | 1 | minor | "extends the FCC's limited monitoring capacity" is not in G2D01. | Drop it.
gen.sun-geomag.xray-primer | 1 | ambiguous | Uses "D region", which topic 17 introduces. Says "the radio effect is essentially instant", which a newcomer will read as contradicting the 8-minute card (G3A03). | SWPC: effects occur "at the same time the event is observed". Say "X-rays travel at light speed, so the radio effect starts about 8 minutes after the flare, just as we see it"; use "the lowest layer of the ionosphere".
gen.sun-geomag.sid-lower-freq-harder | 2 | unclear | The explanation uses "D-region", which topic 17 introduces. | "Extra absorption in the lowest ionospheric layer hits lower HF hardest."
gen.sun-geomag.g3a02 | 2 | unclear | Same "D-region" before it is taught. | As above.
gen.sun-geomag.g3a05 | 2 | unclear | The CE for A says "that describes the MUF"; MUF is introduced in topic 17. | "A: that is the highest usable frequency between two points, a different measure."
gen.sun-geomag.g3a12 | 1 | wrong | CE for D: "solar radio flux at Boulder is … the solar flux index". SWPC says F10.7 is measured in Canada (Ottawa, then Penticton), not Boulder. | "D: solar radio flux is a measure of the Sun, not of Earth's field."
gen.sun-geomag.g3a13 | 1 | wrong | Same Boulder claim in the CE for D. | As above.
gen.sun-geomag.g3a03 | 2 | unclear | The CE for B is garbled ("far too fast a change is missed at that interval…"). | "B: 1 to 2 hours is too slow; the radiation travels at light speed and arrives in about 8 minutes."
gen.sun-geomag.k-index-primer | 1 | minor | The example "K-index of 6 or higher typically signals a significant geomagnetic storm" does not match SWPC, where Kp 5 is already a G1 storm. | "Kp 5 or more is a geomagnetic storm (NOAA G1)."
gen.sun-geomag.solar-flux-index-primer | 1 | minor | "easier to measure consistently than counting sunspots" is not on the SWPC page (which says F10.7 "correlates well with the sunspot number" and has been measured since 1947). | Use the SWPC wording.
gen.sun-geomag.a-index-primer | 1 | minor | "derived from the day's K-index values" is cited to the pool, which does not say it; the SWPC glossary does. | Cite the SWPC glossary.
gen.sun-geomag.sid-primer | 1 | minor | "a SID only affects the sunlit side" overstates. The SWPC glossary defines a SID as anomalies from "solar or geophysical events"; the flare page says the effect is on the sunlit side. | "A flare's SID affects the sunlit side of Earth."
gen.sun-geomag.cme-effect | 2 | minor | The card ID says CME, but the card is about coronal holes (G3A14). | Rename to `coronal-hole-effect`.
gen.sun-geomag.geomagnetic-storm-primer | 1 | minor | "for a day or more" in the example is not sourced. | Drop the duration.

## Counts

- wrong: 16
- unsupported: 15
- ambiguous: 5
- unclear: 11
- minor: 58

Total: 105 lines, one per card. The other 268 of the 373 cards passed.

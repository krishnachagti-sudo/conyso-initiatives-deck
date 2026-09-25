# fcc-technician audit, part C (topics 13–17)

Scope: `decks/fcc-technician/notes/13-signals-modes.json` to `17-safety.json`. I read all 366 cards in `order` (13020–17910): 100 + 66 + 79 + 30 + 91.
Audited 2026-09-25 against:
- `research/deck-briefs/fcc-technician-pool.txt`, parsed by script;
- the saved `part97.txt`, `p1.1310.xml` (the `.txt` extract of Table 1 is cut off after two rows, so I read the XML), `extra13/p2.1.txt` and `extra13/p2.201.txt`;
- the NOAA SWPC pages (`extra13/swpc_*.txt`);
- the saved Wikipedia extracts (`extra13/wp_*.txt`, `wiki/*.wiki`);
- the text labels of the three SVGs these topics use.

For pass 2, I assumed the reader had studied topics 1–12. I checked terms against the `introduces` lists and against the first card that uses each word.

## Mechanical checks (all passed unless listed below)

**Pool cards (150).** They cover all of T3A, T3C, T7B, T7C, T8, T9B and T9A except T9A03, which is in topic 2. Every pool ID in these groups has a card. A script compared each card with the pool:
- `front` matches the stem word for word.
- `choices` match the pool's four answers word for word, in the same order.
- `back` is the keyed answer.
- `source` names the pool ID.

Two cards differ from the pool text:
- **T7B06:** the back is cut short with "…" (see Findings).
- **Eight "All these choices are correct" cards** (T8B03, T8B04, T8D01, T8D03, T8D08, T8D10, T9B01, T9B08) add the list of options after the key. That still matches the key. Topics 16–17 don't add the list. Pick one style for the whole deck.

**Keys and wrong options.** Every card has exactly one keyed answer, and every wrong option is explained, often in groups ("A and C: …"). No wrong option is actually right. About 20 explanations only say "not the keyed answer" and don't say why; they are listed under pass 2.

**Numbers checked, no errors found:**
- Bandwidths: CW 150 Hz, SSB 3 kHz, FM 10–15 kHz, fast-scan TV 6 MHz. The 6 MHz ÷ 3 kHz ≈ 2,000 comparison is right.
- Satellites: LEO period about 100 min, which is about 14 orbits a day. The DMR channel is 12.5 kHz.
- Propagation: 300 miles for ducting. Meteor scatter reaches 2,250 km. Sporadic E forms at 95–120 km, the aurora at 80–500 km, and the ionosphere spans 80–600 km. The F region is at 150–800 km. Solar cycle 24 ran Dec 2008 to Dec 2019 and peaked in Apr 2014.
- Antennas: a quarter wave on 2 m is 300/146 ÷ 4 ≈ 0.51 m, about 19–20 in; a half wave is about 39 in. Harmonics of 146 MHz fall at 292 and 438 MHz.
- Safety:
  - Fuse ratings of 5 A and 20 A, and the 10 ft power-line clearance.
  - Duty cycle ×2, and a 50% duty cycle over a 30-minute window.
  - MPE from 1.1310 Table 1: 0.2 and 1.0 mW/cm² at 30–300 MHz, with averaging times of 30 and 6 min. The limits for the T0C02 answer options are 180/3.5² ≈ 14.7, 440/1500 ≈ 0.29 and 1296/1500 ≈ 0.86.
- Rules checked against 47 CFR: 97.3(a)(42), (43) and (46); 97.13(c)(1)–(2), including OET 65 Supplement B; 97.307(c); 2.1 "Spurious emission"; and 2.201(c)(2)–(3), including "Whenever frequency modulation 'F' is indicated, Phase modulation 'G' is also acceptable."

**Figures:**
- `tech-uv-mode.svg`: 70 cm up and 2 m down, with the band edges from 97.301(a).
- `tech-dipole-pattern.svg`: strongest broadside, almost nothing off the ends.
- `mpe-general-population.svg`: the step values and the four marked points agree with 1.1310 Table 1(ii).

The credits and licences are correct.

**Declared vocabulary.** Every term in every card's `uses` is taught earlier. The pass-2 problems below are words that are **not** declared in `uses`.

## Wikipedia-sourced cards (68 cite Wikipedia; 54 of them use it as `sourceURL`)

Key:
- **P** = a primary source states the Wikipedia-derived fact.
- **part** = a primary source states the core answer, but some of the card's added detail rests on Wikipedia alone.
- **W-only** = no pool, CFR or NOAA text states the fact. These are flagged.

Where a primary source that the card doesn't cite would do, I name it.

| Card | Wikipedia-derived content | Primary support | Flag |
|---|---|---|---|
| signals-modes.what-is-upper-sideband | USB/LSB definition; LSB below 10 MHz, USB at 10 MHz and above; 7.100 and 14.200 MHz examples | Pool T8A06 covers only "USB on 10 m, VHF, UHF". No primary source for the below-10 MHz LSB convention. | W-only (convention and examples) |
| signals-modes.what-is-wsjt-x | "weak-signal" program; meteor scatter and moonbounce made practical | T8D10 lists the activities; T8D02 says FT8 is a digital mode | part |
| signals-modes.what-is-packet-radio | Every AX.25 packet carries the call sign; digipeaters | T8A02 (FM/PM); T8D08 (header with call sign); 97.119(b)(3) (ID by data emission) | part: the card also overstates (see Findings) |
| signals-modes.what-is-aprs | Real-time local information; relayed by digipeaters and the internet | T8D03, T8D05 state the back | part |
| signals-modes.what-is-psk | Data carried by changing phase; frequency constant; WLAN/RFID/Bluetooth | T8D06 gives only the name | W-only (mechanism, example) |
| signals-modes.what-is-arq | Acknowledgement and timeout mechanism | T8D11 states the back | part |
| signals-modes.what-is-a-mesh-network | Rich interconnection; emergency focus; Broadband-Hamnet on 2.4 GHz | T8D12 states the back | part |
| signals-modes.what-is-an-amateur-satellite | "built and used by amateurs"; OSCAR/AMSAT; repeater, transponder and store-and-forward types | 47 CFR 2.1 "Amateur-Satellite Service" ("space stations on earth satellites for the same purposes as those of the amateur service") supports the back; T8B04 supports the modes | part: cite 2.1 |
| signals-modes.what-is-the-uplink | (cites Wikipedia) | T1E02 states it | P |
| signals-modes.what-is-the-downlink | Linear-transponder example | T8B08 (mode naming), T8B12 | P |
| signals-modes.what-is-a-linear-transponder | Real-time relay; "most since 1965" | T8B12 uses the term only | W-only |
| signals-modes.what-is-doppler-shift | Passing-vehicle analogy | T8B07 states the back | P |
| signals-modes.what-are-keplerian-elements | "Parameters that uniquely identify an orbit"; elements change over time | T8B06 (they are the program's input) | part |
| signals-modes.what-is-leo | "128 minutes or less"; most objects are in LEO | T8B10 states the back | part |
| signals-modes.what-is-uv-mode | Mode naming | T8B08; 97.207(c)(2) (144–146 and 435–438 MHz space segments) supports the 145/435 MHz example | P: cite 97.207(c)(2) |
| signals-modes.what-is-radio-direction-finding | Fox hunts | T8C01, T8C02; 47 CFR 2.1 "Radio Direction-Finding" | P (the fox-hunt example is W-only) |
| signals-modes.what-is-contesting | Rules, points, published results | T8C03 states the back | part |
| signals-modes.what-is-a-grid-locator | Maidenhead; robustness; FT8 exchange | T8C05 states the back | part: FT8 claim overstated (see Findings) |
| signals-modes.what-is-voip | (cites EchoLink) | T8C07 states the back | P |
| signals-modes.what-is-irlp | Node = computer + radio; users always on a radio | T8C08, T8C06; T8C09's key implies IRLP needs a radio | part |
| signals-modes.what-is-echolink | Computer-based VoIP linking | T8C09, T8C10 | P |
| signals-modes.what-is-a-gateway | IRLP node as gateway | T8C11 states the back | P |
| signals-modes.irlp-dtmf | "always from a radio, never a computer" | T8C06 | part |
| signals-modes.irlp-vs-echolink | IRLP radio-only | T8C09 (EchoLink needs no radio), T8C06, T8C10 | part |
| propagation.what-is-propagation | Definition | None; the pool uses the word undefined | W-only |
| propagation.what-is-line-of-sight | Straight path; above 30 MHz, obstructions block | T3C01, T3C11 imply it | part |
| propagation.what-is-refraction | Definition of refraction | T3C11 ("atmosphere refracts radio waves") only. The definition is not in the cited Sporadic E or Radio propagation text either. | W-only (and not in the cited page) |
| propagation.what-is-the-radio-horizon | (cites Line-of-sight) | T3C11 | P |
| propagation.what-is-multipath | Two or more paths; cancel or reinforce | T3A01, T3A08 | P |
| propagation.what-is-the-f-region | 150–800 km; highest electron concentration; dependable HF reflector | NOAA Ionosphere (80–600 km, "layer of electrons", reflects radio waves); T3C09, T3C10 | part |
| propagation.what-is-skip | Skywave definition; most 3–30 MHz long-distance traffic | T3A11, T3C02; 97.3(b) defines HF as 3–30 MHz | part |
| propagation.what-is-sporadic-e | 95–120 km; summer; "as clearly as local stations" | T3C04 (10/6/2 m, beyond the radio horizon) | part |
| propagation.what-is-the-troposphere | Lowest layer; weather; 13 km (8 mi) | None; `noaa_layers.txt` is a 403 page | W-only |
| propagation.what-is-tropospheric-ducting | High-pressure weather; air layers cooling at different rates | T3C06, T3C08; 47 CFR 2.1 "Tropospheric Scatter" is a different mode | part |
| propagation.what-is-meteor-scatter | Ionized meteor trails; up to 2,250 km | T3C07 (band only) | W-only |
| propagation.what-is-knife-edge-diffraction | Sharp obstacle such as a ridge | T3C05 | part |
| propagation.what-is-cross-polarization | "Polarizations at right angles" | T3A04 (effect only). The cited "Antenna (radio)" text says only that the receiving antenna should match. | W-only (and not in the cited page) |
| propagation.f-region-vs-e-region | F dependable; sporadic E patchy | T3C04, T3C09, T3C10 in part | part |
| antennas-feed-lines.what-is-coax | Construction; low loss at HF | T9B02, T9B03 | part |
| antennas-feed-lines.what-is-a-dielectric | Definition; foam ~15% less loss | T7C11 (foam has less loss per foot) | part |
| antennas-feed-lines.what-is-hardline | Copper-tube centre; foam, air or gas dielectric | T9B11 | part |
| antennas-feed-lines.what-is-a-directional-wattmeter | Measures forward and reflected power | T7C08 (determines SWR) | part |
| antennas-feed-lines.what-is-an-antenna-analyzer | Measures impedance; common tool | T7C02 (resonance) | part |
| antennas-feed-lines.what-is-a-dummy-load | — | T7C01, T7C03 | P |
| antennas-feed-lines.what-is-a-dipole | Two equal conductors fed between them | T9A10 names the half-wave dipole only | W-only (definition) |
| antennas-feed-lines.what-is-resonant-frequency | Set by length; guitar-string analogy | T9A05 (shorter → higher) | part |
| antennas-feed-lines.what-is-a-whip-antenna | Straight flexible rod; quarter-wave most common; 5/8 for directivity | T9A08, T9A09 | part |
| antennas-feed-lines.what-is-a-yagi | Driven element, reflector, directors; TV aerials | T9A06, T9A01 (a beam) | W-only (structure) |
| antennas-feed-lines.what-is-antenna-loading | Loading coil makes a short antenna resonant | T9A02 | P |
| interference.what-is-rfi | EMI/RFI definition | **47 CFR 2.1 "Interference"** ("unwanted energy … manifested by any performance degradation, misinterpretation, or loss of information") says the same | P: re-cite to 2.1 |
| interference.what-is-deviation | Definition; ±75 and ±5 kHz | T7B01 uses "over-deviating" only | W-only |
| interference.what-is-a-harmonic | Whole-number multiple of the fundamental | 47 CFR 2.1 lists harmonic emissions as spurious but does not define them; T7B03 | W-only (definition) |
| interference.what-is-a-band-reject-filter | Passes most frequencies, attenuates one range | T7B07 uses the term only | W-only |
| interference.what-is-a-ferrite-choke | Suppresses HF noise; cheap; clamp-on | T7B11 (clip-on ferrite choke on the microphone cable) | part |
| interference.contrast-deviation-vs-drift | Drift = unintended offset | T7B10 (off frequency vs speaking too loudly) | W-only (drift definition) |
| safety.what-is-ground | Reference ground; low-impedance fault path | T0A06, T0B08 use grounding | W-only (definition) |
| safety.what-is-bonding | Same electrical potential; shock protection | T0A09, T0B08 | part |
| safety.what-is-the-hot-conductor | Voltage to earth; black/white/green | T0A03 (black = hot), T0A08 | part: colour set W-only |
| safety.what-is-a-fuse | Melting element; must be replaced | T0A04, T0A05 | part |
| safety.what-is-a-circuit-breaker | Can be reset | T0A08 names it only | W-only (reset) |
| safety.what-is-a-lightning-arrester | Diverts the surge to earth | T0A07 (location only) | W-only (definition) |
| safety.what-is-a-filter-capacitor | Smooths rectifier output | T0A11 (stored charge) | part |
| safety.what-is-a-guy-line | Tensioned cable to an anchor | T0B05 uses the term only | W-only |
| safety.what-is-a-turnbuckle | Threaded tension device | T0B05 (vibration) | part |
| safety.what-is-ionizing-radiation | Enough energy to remove electrons | T0C12 ("ionizing radiation (radioactivity)"), T0C01 (gamma, alpha as ionizing) | part |
| safety.what-is-non-ionizing-radiation | Not enough energy per photon | T0C01, T0C12 | P |
| safety.contrast-ionizing-vs-non-ionizing | Gamma is ionizing | T0C01, T0C12, T0C07 | P |
| safety.contrast-fuse-vs-breaker | A breaker resets | T0A08 (both in series with hot) | part: reset W-only |

**Summary:** 15 cards are primary-covered (P). 35 are partly primary; their core answer is in the pool or 47 CFR. 18 rest on Wikipedia alone for the fact they teach (W-only):
- USB/LSB convention
- PSK mechanism
- linear transponder
- propagation
- refraction
- troposphere
- meteor scatter
- cross-polarization
- dipole
- Yagi structure
- deviation
- harmonic
- band-reject filter
- drift
- ground
- circuit-breaker reset
- lightning arrester
- guy line

In two of these (refraction and cross-polarization), the cited page doesn't state the definition either.

The W-only facts are all standard textbook definitions, and none is contradicted by a primary source. What they need is a better citation, not new wording. The easiest improvement is to re-cite RFI to 47 CFR 2.1.

## Findings

Format: `id | pass | severity | problem | source text or plainer wording`

### Topic 13: Signals, modes and activities

tech.signals-modes.what-is-a-grid-locator | 1 | unsupported | Example: "digital modes like FT8 exchange them in every contact". The source says only that FT8 "transmits Maidenhead locator square as part of standard messages"; many FT8 contacts (e.g. contest and short exchanges) omit it. | "FT8's standard messages carry a four-character grid square." (Wikipedia, "Maidenhead Locator System")
tech.signals-modes.what-is-packet-radio | 1 | minor | "every amateur packet carries the sender's call sign" generalises Wikipedia's "Every AX.25 packet includes the sender's amateur radio callsign". The FCC basis is not cited. | "Every AX.25 packet carries the sender's call sign, which meets FCC identification rules (97.119(b)(3))."
tech.signals-modes.telemetry-anyone | 1 | minor | "No licence, encryption key or permission is needed." T8B11 says only "Anyone"; 97.207(f) allows space telemetry to consist of "specially coded messages". | "Anyone may receive it; no licence or permission is needed."
tech.signals-modes.what-is-a-linear-transponder | 1 | minor | "most amateur satellites since 1965 carry one". The source says "Since 1965, most OSCARs carry a linear transponder"; the card widens OSCARs to all satellites and states a dated claim as current (FM-repeater LEOs are common: same page). | "Since 1965 most OSCAR satellites have carried one."
tech.signals-modes.what-is-uv-mode | 1 | minor | The example frequencies (435 and 145 MHz) are not in the cited sources. | Add 47 CFR 97.207(c)(2): space stations may use the "144-146 MHz, 435-438 MHz" segments.
tech.signals-modes.what-is-an-amateur-satellite | 1 | minor | Cited to Wikipedia only; a primary definition exists. | Add 47 CFR 2.1 "Amateur-Satellite Service. A radiocommunication service using space stations on earth satellites for the same purposes as those of the amateur service."
tech.signals-modes.aprs-data | 1 | minor | The explanation ("any information of immediate local value") is Wikipedia wording, but the source lists only the pool. | Add Wikipedia "Automatic Packet Reporting System" to `source`.
tech.signals-modes.satellite-modes | 1 | minor | The explanation (FM repeaters, SSB/CW linear transponders, digital relays) comes from Wikipedia "Amateur radio satellite", which is not cited. | Add the Wikipedia source.
tech.signals-modes.t8a03 | 1 | minor | The explanation "SSB uses transmitter power and bandwidth more efficiently than AM" is not in T8A03; it is uncited Wikipedia material. | Cite Wikipedia "Single-sideband modulation", or use "SSB is narrow (about 3 kHz, T8A08), so its power is concentrated, which helps weak signals."
tech.signals-modes.bw-fm | 1 | minor | "one reason SSB is preferred for weak signals" is an inference; no source says it. | Drop the clause, or cite T8A03 for the preference without the causal link.
tech.signals-modes.wsjt-activities | 1 | minor | "which is what WSJT-X's modes are designed to decode" comes from Wikipedia; the source lists only T8D10. | Add Wikipedia "WSJT (amateur radio software)".
tech.signals-modes.t8a07 | 1 | minor | Option D explanation: "SWR affects every mode equally" is an unsupported absolute. | "D: SWR depends on the antenna and feed line, not on the mode."
tech.signals-modes.what-is-a-mesh-network | 1 | minor | "amateur projects focus on emergency communication" widens what Wikipedia says of one project (Broadband-Hamnet: "a focus on emergency communication"). | "Broadband-Hamnet, for example, focuses on emergency communication."
tech.signals-modes.what-is-wsjt-x | 2 | unclear | "unusual propagation paths, such as meteor scatter and moonbounce": propagation is taught at 14010 and meteor scatter at 14075, after this card. | "…makes contacts over unusual paths practical, such as signals bounced off meteor trails (meteor scatter) or off the Moon (moonbounce)."
tech.signals-modes.wsjt-activities | 2 | minor | "Earth-Moon-Earth", "propagation beacons" and "meteor scatter" are unexplained here, before topic 14. | Gloss as above, or move WSJT-X cards after topic 14.
tech.signals-modes.what-is-an-amateur-satellite | 2 | minor | "linear transponders" and "store-and-forward digital relays" are used before the linear-transponder primer (13080). | Move the linear-transponder primer first, or gloss: "…as repeaters, as linear transponders (live relays of a whole band slice) or as store-and-forward relays (hold messages, send later)."
tech.signals-modes.what-is-the-downlink | 2 | minor | The example uses "linear transponder", which is taught on the next card (13080). | Swap the order of 13075 and 13080.
tech.signals-modes.what-is-a-satellite-tracking-program | 2 | unclear | "azimuth and elevation" are never explained, and T8B03 and T8C05 rely on them. | "…the time, compass direction (azimuth) and height above the horizon (elevation) of the start, highest point and end of a pass."
tech.signals-modes.what-is-the-uplink | 2 | minor | The explanation (who may be control operator) doesn't say why the uplink matters. | "You must transmit on the uplink and listen on the downlink; the satellite relays one to the other."
tech.signals-modes.what-is-psk | 2 | minor | Example: "wireless LANs, RFID" is jargon. | "Outside amateur radio, PSK is used in Wi-Fi and Bluetooth."
tech.signals-modes.what-is-a-mesh-network | 2 | minor | "modified firmware" is unexplained. | "…with modified firmware (the built-in software that runs the device)."
tech.signals-modes.what-is-ntsc | 2 | minor | "fast-scan" is never explained; T8A05 also uses "slow-scan TV". | "An analog fast-scan (full-motion) colour TV signal."
tech.signals-modes.uplink-too-much | 2 | minor | "effective radiated power" is not taught (it is also in T8B02). | "Using too much effective radiated power (transmitter power boosted by antenna gain) on the uplink…"
tech.signals-modes.t8a06 | 2 | minor | Option D explanation: "'inverted sideband' is not a sideband choice" doesn't say why. | "D: SSB is sent as upper or lower sideband; there is no 'inverted sideband' setting."
tech.signals-modes.t8d05 | 2 | minor | "PACTOR" is unexplained in the option B explanation. | "B: PACTOR is a separate HF data mode; counting its packets is not APRS."
tech.signals-modes.t8a04 | 2 | minor | The explanation restates the back. | "FM ignores weaker signals and noise on the channel (capture), which suits clear local repeater voice." (or cite 97.3/2.201 FM = PM)
tech.signals-modes.t8a08 | 2 | minor | The explanation restates the back. | "Speech needs only about 300–3000 Hz, and SSB sends one copy of it, so the signal is about 3 kHz wide." (cite a source for the audio range, or drop it)
tech.signals-modes.t8a09 | 2 | minor | The explanation restates the back. | "FM spreads the voice by swinging the carrier frequency, so it needs several times the width of SSB."
tech.signals-modes.t8a10 | 2 | minor | The explanation restates the back. | "Moving colour pictures carry far more information than a voice, so they need thousands of times the bandwidth." (as in bw-tv)
tech.signals-modes.t8b01 | 2 | minor | The explanation restates the back. | "Telemetry means measurements sent from a distance; for a satellite, that is how its systems are working."
tech.signals-modes.t8b04 | 2 | minor | The explanation restates the back. | "Different satellites carry FM repeaters, SSB/CW linear transponders or digital relays."
tech.signals-modes.t8b05 | 2 | minor | The explanation restates the back. | "Its steady signal reports the satellite's status and gives a reference strength on the downlink."
tech.signals-modes.t8b07 | 2 | minor | The explanation restates the back. | "A satellite coming towards you is heard higher in frequency, and lower as it moves away."
tech.signals-modes.t8b08 | 2 | minor | The explanation restates the back. | "Mode letters name the uplink band first, then the downlink: U = UHF (70 cm), V = VHF (2 m)."
tech.signals-modes.t8b09 | 2 | minor | The explanation restates the back. | "As the antennas turn, they point toward and away from you, so the signal rises and falls."
tech.signals-modes.t8b10 | 2 | minor | The explanation restates the back. | "Low orbits are fast: a pass over your station lasts only minutes."
tech.signals-modes.t8b11 | 2 | minor | The explanation restates the back. | "Telemetry is broadcast openly so that anyone can follow the satellite's health."
tech.signals-modes.t8b12 | 2 | minor | The explanation restates the back. | "The beacon is a steady reference; matching it means you are loud enough without taking more than your share."
tech.signals-modes.t8c03 | 2 | minor | The explanation restates the back. | "Contacts earn points, so speed and volume win."
tech.signals-modes.t8c04 | 2 | minor | The explanation restates the back. | "Short exchanges keep the frequency moving; your full call sign is still required."
tech.signals-modes.t8c05 | 2 | minor | The explanation restates the back. | "A short code like FN31 tells another station roughly where you are."
tech.signals-modes.t8c06 | 2 | minor | The explanation restates the back. | "A handheld has a keypad that sends DTMF tones; the node decodes them as a node number."
tech.signals-modes.t8c07 | 2 | minor | The explanation restates the back. | "IRLP and EchoLink both use VoIP to carry voice between distant repeaters."
tech.signals-modes.t8c08 | 2 | minor | The explanation restates the back. | "Each IRLP node joins a local radio to the internet, so a handheld can talk through a distant repeater."
tech.signals-modes.t8c11 | 2 | minor | The explanation restates the back. | "It bridges on-air users and an internet linking system."
tech.signals-modes.t8d01 | 2 | minor | The explanation restates the back. | "Each sends data as digital code rather than analog voice."
tech.signals-modes.t8d02 | 2 | minor | The explanation restates the back. | "Its narrow, slow, error-correcting signal can be decoded even when too weak to hear."
tech.signals-modes.t8d03 | 2 | minor | The explanation restates the back. | "APRS carries any locally useful data; positions are best known, shown on a live map."
tech.signals-modes.t8d04 | 2 | minor | The explanation restates the back. | "It is the analog colour TV standard used in North America, sent by amateurs as fast-scan TV." (needs a source for "North America")
tech.signals-modes.t8d06 | 2 | minor | The explanation restates the back. | "PSK shifts the phase of the carrier to send bits."
tech.signals-modes.t8d07 | 2 | minor | The explanation restates the back. | "Two users take turns in rapid time slots, so one repeater carries two conversations."
tech.signals-modes.t8d09 | 2 | minor | The explanation restates the back. | "CW (continuous wave) is a carrier keyed on and off in Morse code."
tech.signals-modes.t8d10 | 2 | minor | The explanation restates the back. | "All three involve very weak or very brief signals, which WSJT-X is built to decode."
tech.signals-modes.t8d11 | 2 | minor | The explanation restates the back. | "Like saying 'say again' automatically whenever data arrives garbled."
tech.signals-modes.t8d12 | 2 | minor | The explanation restates the back. | "Cheap Wi-Fi gear, reprogrammed, forms a self-healing data network for amateurs."

### Topic 14: Propagation

tech.propagation.what-is-refraction | 1 | unsupported | The cited pages (Wikipedia "Sporadic E propagation" and "Radio propagation") don't define refraction as "bending … as it passes through a medium whose properties change". | Cite pool T3C11 ("The atmosphere refracts radio waves slightly") plus a page that defines refraction.
tech.propagation.what-is-cross-polarization | 1 | unsupported | "Their polarizations are at right angles" is not in the cited "Antenna (radio)" text, which says only "It is best for the receiving antenna to match the polarization of the transmitted wave". T3A04 uses the term undefined. | Re-cite or drop the definition: "One antenna is vertical and the other horizontal."
tech.propagation.what-is-skip | 1 | minor | "it is how low-power amateurs make intercontinental contacts": "low-power" is not in the source ("used by amateur radio operators to communicate with operators in distant countries"). | "…it is how amateurs make contacts with distant countries."
tech.propagation.hf-long-distance | 1 | minor | "above 30 MHz, ionospheric effects are usually not significant" comes from Wikipedia "Line-of-sight propagation", which is not cited. | Add that source.
tech.propagation.aurora-raspy | 1 | minor | "a VHF mode toward the magnetic pole": T3C03 says nothing about direction. | Cite NOAA SWPC "Aurora": "the aurora forms two ovals approximately centered at the magnetic poles".
tech.propagation.sporadic-e-bands | 1 | minor | "Sporadic E patches reflect frequencies that the ionosphere normally lets through" is uncited Wikipedia material ("normally does not refract radio waves above about 15 MHz"). | Add Wikipedia "Sporadic E propagation".
tech.propagation.what-is-the-f-region | 1 | minor | "The ionosphere has D, E and F layers": the cited F-region page says only that F lies "directly above the E region"; D is not mentioned. | "The F region lies above the E region…", or cite a page that lists D, E and F.
tech.propagation.what-is-the-ionosphere | 2 | minor | "ionizes" is not yet taught (ionizing radiation comes at 17055). | "…where the Sun's radiation knocks electrons off atoms (ionizes them), creating a layer of free electrons."
tech.propagation.what-is-the-sunspot-cycle | 2 | unclear | "Solar EUV and X-ray output" is jargon, and the explanation never says why radio amateurs care. | "The Sun's extreme-ultraviolet and X-ray output rises nearly tenfold from minimum to maximum, so the ionosphere is denser and 10 m and 6 m open more often near solar maximum."
tech.propagation.what-is-cross-polarization | 2 | minor | The example uses "whip" and "beam antenna", taught at 15065 and 15075. | "A vertical antenna on a car trying to hear a horizontal antenna is cross-polarized."
tech.propagation.t3a05 | 2 | minor | "long path" is unexplained. | "C: the long path means the long way round the Earth, an HF idea; it does not get round nearby buildings."
tech.propagation.t3c06 | 2 | minor | "F2 region" is not taught; D appears only in passing. | "B and C: the D and F2 regions are parts of the ionosphere, not the regular 300-mile VHF/UHF mode."
tech.propagation.meteor-6m | 2 | unclear | The explanation restates ("6 m is the one keyed") and gives no reason. | "Meteor trails reflect best at low VHF, generally 30–50 MHz (Wikipedia, 'Meteor burst communications'); 6 m is the amateur band closest to that range."
tech.propagation.t3a07 | 2 | minor | Wrong-option explanation: "not the keyed causes" doesn't say why. | "A, B and D: wind, pressure and cold don't absorb microwaves; rain and snow do."
tech.propagation.t3a08 | 2 | minor | Wrong-option explanation says only "not the keyed cause". | "A: Faraday rotation changes polarization, not frequency. B: thunderstorms add static crashes. C: intermodulation is a receiver or transmitter fault, not a propagation effect."
tech.propagation.t3c02 | 2 | minor | Options B/D are explained as "the pool keys neither". | "B: HF bands are narrow, so they carry narrower signals. D: HF has more static, not less."
tech.propagation.t3c03 | 2 | minor | Option C explanation "the pool does not tie auroral propagation to winter nights" is weak. | "C: aurora can occur at any season, whenever geomagnetic activity is high." (NOAA SWPC "Aurora")
tech.propagation.t3c04 | 2 | minor | Options A/D are explained as "not the keyed cause". | "A: backscatter returns signals toward the sender and is weak. D: gray-line is an HF effect at dawn and dusk."
tech.propagation.t3c07 | 2 | minor | Options A/C/D are explained as "not the keyed best band". | "A, C and D: meteor trails reflect higher frequencies poorly; 2 m and above work far less often than 6 m."
tech.propagation.t3a02 | 2 | minor | The explanation restates the back. | "Leaves and trees soak up energy at these short wavelengths, so weak signals suffer most."
tech.propagation.t3a03 | 2 | minor | The explanation restates the back. | "Stations must match polarization to hear each other well, so weak-signal operators share the horizontal convention."
tech.propagation.t3a06 | 2 | minor | The explanation restates the back. | "As the vehicle moves, it passes rapidly through spots where the copies add and cancel."
tech.propagation.t3a07 | 2 | minor | The explanation restates the back. | "Rain and snow absorb and scatter microwave energy."
tech.propagation.t3a10 | 2 | minor | The explanation restates the back. | "Delayed copies overlap the direct signal and blur the data bits."
tech.propagation.t3a11 | 2 | minor | The explanation restates the back. | "Its free electrons bend HF waves back to Earth."
tech.propagation.t3a12 | 2 | minor | The explanation restates the back. | "Weather absorption matters at microwaves, not at these longer wavelengths."
tech.propagation.t3c01 | 2 | minor | The explanation largely restates the back. | "UHF passes straight through the ionosphere into space, so it relies on line of sight."
tech.propagation.t3c02 | 2 | minor | The explanation restates the back. | "The ionosphere bends HF back to Earth, while VHF and above usually pass through it."
tech.propagation.t3c03 | 2 | minor | The explanation restates the back. | "The moving, uneven aurora smears the reflected signal, which is why it sounds raspy."
tech.propagation.t3c04 | 2 | minor | The explanation restates the back. | "Dense patches in the E region briefly reflect frequencies the ionosphere normally lets through."
tech.propagation.t3c07 | 2 | minor | The explanation restates the back. | As for meteor-6m.
tech.propagation.t3c08 | 2 | minor | The explanation restates the back. | "An inversion is warm air above cool air; the boundary guides VHF and UHF signals."
tech.propagation.t3c09 | 2 | minor | The explanation restates the back. | "The F region is ionized by sunlight, so 10 m opens in daylight, most strongly near sunspot peaks."
tech.propagation.t3c10 | 2 | minor | The explanation restates the back. | "High solar activity ionizes the F region enough to return these higher frequencies."
tech.propagation.t3c11 | 2 | minor | The explanation restates the back. | "The bending carries signals a little over the curve of the Earth."

### Topic 15: Antennas, feed lines and SWR

tech.antennas-feed-lines.pl259-vs-type-n | 1 | unsupported | "Both need taping outdoors, since neither is watertight." The pool says PL-259s are not watertight (T9B07) and that all three types should be taped (T9B01). No source says Type N is not watertight. | "Both should be taped against the weather outdoors (T9B01)."
tech.antennas-feed-lines.what-is-an-antenna-tuner | 1 | minor | The example ("lets one antenna be used on a band where its SWR would otherwise be too high") implies the tuner removes the high SWR. T9B04 says only that it matches the antenna system to the transceiver; the SWR on the feed line is unchanged. | "…lets the transceiver see a match, and deliver full power, on a band where the antenna's SWR is high."
tech.antennas-feed-lines.what-is-hardline | 1 | minor | "used where loss must be lowest, such as broadcast and high-power amateur stations". The source says gas-filled hardline is used on "high-power RF transmitters such as television or radio broadcasting … and high-power amateur radio applications" (for moisture, dielectric stability and arcing), not because loss must be lowest. | "Hardline is used on high-power transmitters, such as broadcast and high-power amateur stations; air-insulated hardline has the lowest loss (T9B11)."
tech.antennas-feed-lines.what-is-a-yagi | 1 | minor | "Rooftop TV aerials are Yagis" overgeneralises "The largest and best-known use is as rooftop terrestrial television antennas". | "Many rooftop TV aerials are Yagis."
tech.antennas-feed-lines.what-is-a-whip-antenna | 1 | minor | "fed at its base" is not in the cited Wikipedia text. | Drop it, or cite a source.
tech.antennas-feed-lines.foam-dielectric | 1 | minor | The explanation quotes Wikipedia ("about 15% less attenuation"), but `source` lists only T7C11. | Add Wikipedia "Coaxial cable" to `source`.
tech.antennas-feed-lines.t7c11 | 1 | minor | Option D explanation "both are made for 50 ohms" is an overstatement; coax also comes in 75 ohms (see T9B11 D). | "D: the dielectric type doesn't improve the match; both kinds are made for 50 ohms."
tech.antennas-feed-lines.yagi-most-gain | 2 | minor | "isotropic antenna" and "J-pole" are never explained here or in T9A06. | "An isotropic antenna is an imaginary reference that radiates equally in all directions; a J-pole is a simple vertical."
tech.antennas-feed-lines.what-is-a-whip-antenna | 2 | minor | "directivity" is jargon. | "…longer 5/8-wave whips concentrate the signal more, giving gain."
tech.antennas-feed-lines.what-is-a-dummy-load | 2 | minor | "non-inductive resistor" and "heat sink" are used before the card that explains them (15175). | "…a 50-ohm resistor built not to act like a coil, on a metal heat sink that sheds the heat."
tech.antennas-feed-lines.t9a04 | 2 | minor | "receiver desensitization" is unexplained, and the option C explanation just says "not the keyed drawback". | "C: desensitization (a strong nearby signal deafening a receiver) is not caused by a short antenna."
tech.antennas-feed-lines.t9b05 | 2 | minor | "characteristic impedance" is unexplained, and the options A/C explanation just says "not the keyed". | "A and C: a cable's characteristic impedance (e.g. 50 ohms) is set by its construction and does not change with frequency."
tech.antennas-feed-lines.t9a06 | 2 | minor | Options A/C are explained as "not the keyed highest-gain antennas". | "A and C: the 5/8-wave vertical and J-pole are omnidirectional verticals with little gain; a Yagi concentrates power in one direction."
tech.antennas-feed-lines.t9a09 | 2 | minor | Option B explanation says only "not its advantage". | "B: a 5/8-wave whip radiates at a lower angle, not a higher one, which is why it gives gain toward the horizon." (needs a source)
tech.antennas-feed-lines.t9b02 | 2 | minor | Options A/C/D are explained as "not the common … impedance". | "A and D: 8 and 12 ohms are loudspeaker-type values. C: 600 ohms is typical of open-wire line, not coax." (needs a source)
tech.antennas-feed-lines.t9b10 | 2 | minor | Option D explanation is circular. | "D: RG-213 is the thicker cable and handles more power, not RG-58." (needs a source)
tech.antennas-feed-lines.t7c02 | 2 | minor | The explanation restates the back. | "It sweeps frequency and shows where the antenna's SWR is lowest, i.e. where it is resonant."
tech.antennas-feed-lines.t7c03 | 2 | minor | The explanation restates the back. | "50 ohms matches the transmitter; non-inductive keeps it a pure resistance at RF; the heat sink gets rid of the power."
tech.antennas-feed-lines.t7c04 | 2 | minor | The explanation restates the back. | "At 1:1, nothing is reflected back from the antenna."
tech.antennas-feed-lines.t7c06 | 2 | minor | The explanation restates the back. | "The higher the ratio above 1:1, the more power is reflected by the mismatch."
tech.antennas-feed-lines.t7c07 | 2 | minor | The explanation restates the back. | "The cable's resistance and dielectric absorb some power and warm up."
tech.antennas-feed-lines.t7c09 | 2 | minor | The explanation restates the back. | "Water that gets into coax raises its loss and corrodes it."
tech.antennas-feed-lines.t7c10 | 2 | minor | The explanation restates the back. | "Cracked jackets let water in, and water is what ruins coax (T7C09)."
tech.antennas-feed-lines.t7c11 | 2 | minor | The explanation restates the back. | "Foam holds a lot of air, and air loses less energy than solid plastic."
tech.antennas-feed-lines.t9a01 | 2 | minor | The explanation restates the back. | "Concentrating the signal gives gain toward the station you want."
tech.antennas-feed-lines.t9a02 | 2 | minor | The explanation restates the back. | "A coil makes a short antenna act electrically longer, so it resonates on a lower band."
tech.antennas-feed-lines.t9a04 | 2 | minor | The explanation restates the back. | "Shortening an antenna below its natural length costs efficiency."
tech.antennas-feed-lines.t9a05 | 2 | minor | The explanation restates the back. | "Shorter elements resonate at higher frequencies, like a shorter guitar string."
tech.antennas-feed-lines.t9a08 | 2 | minor | The explanation restates the back. | "300 ÷ 146 MHz ≈ 2 m; a quarter of that is about 0.5 m, roughly 19–20 inches."
tech.antennas-feed-lines.t9a09 | 2 | minor | The explanation restates the back. | "The longer whip concentrates more of the signal toward the horizon."
tech.antennas-feed-lines.t9a10 | 2 | minor | The explanation restates the back. | "Radiation falls to zero off the ends of the wire."
tech.antennas-feed-lines.t9a11 | 2 | minor | The explanation restates the back. | "An antenna can't add power; it only concentrates it in some directions."
tech.antennas-feed-lines.t9b01 | 2 | minor | The explanation restates the back. | "Water in any connector causes loss and cable failure."
tech.antennas-feed-lines.t9b02 | 2 | minor | The explanation restates the back. | "Radios, coax and dummy loads are all built around 50 ohms so they match."
tech.antennas-feed-lines.t9b04 | 2 | minor | The explanation restates the back. | "With a match, the transmitter can deliver full power instead of cutting back for high SWR."
tech.antennas-feed-lines.t9b05 | 2 | minor | The explanation restates the back. | "So a cable run that is fine on HF loses more at UHF."
tech.antennas-feed-lines.t9b06 | 2 | minor | The explanation restates the back. | "Type N keeps the 50-ohm match and low loss up into the microwave range."
tech.antennas-feed-lines.t9b07 | 2 | minor | The explanation restates the back. | "It is the everyday connector on HF and VHF radios."
tech.antennas-feed-lines.t9b08 | 2 | minor | The explanation restates the back. | "Keep connectors dry and few, and keep SWR low."
tech.antennas-feed-lines.t9b09 | 2 | minor | The explanation restates the back. | "An intermittent contact changes the load from moment to moment."
tech.antennas-feed-lines.t9b10 | 2 | minor | The explanation restates the back. | "RG-213 is thicker, with a larger centre conductor, so it loses less." (needs a source)
tech.antennas-feed-lines.t9b11 | 2 | minor | The explanation restates the back. | "Air is the lowest-loss dielectric."
tech.antennas-feed-lines.t9b12 | 2 | minor | The explanation restates the back, and "transmission line" is not glossed on the card. | "SWR shows how much power is reflected back along the feed line (transmission line) by a mismatch."

### Topic 16: Interference

tech.interference.t7b06 | 1 | minor | The back is cut short ("…to your own radio or television…"); the keyed answer ends "when it is tuned to the same channel". | Use the full keyed text of option A.
tech.interference.what-is-rfi | 1 | minor | Cited to Wikipedia, but a primary definition exists. | Re-cite to 47 CFR 2.1 "Interference. The effect of unwanted energy … manifested by any performance degradation, misinterpretation, or loss of information…"
tech.interference.three-causes-of-rfi | 2 | unclear | "Fundamental overload" is never explained, though it is one of the three keyed causes (also in T7B03). | "Fundamental overload: a nearby receiver is swamped by your signal on the frequency you are actually transmitting (the fundamental)."
tech.interference.what-is-a-spurious-emission | 2 | minor | "necessary bandwidth" is jargon. | "An emission outside the range of frequencies the signal needs, which could be cut without losing any information."
tech.interference.what-is-rfi | 2 | minor | The explanation describes the topic rather than saying why RFI matters. | "A strong nearby transmitter, or a noisy household device, can disturb radios, TVs and your own receiver."
tech.interference.t7b07 | 2 | minor | "bypass capacitors" and "RF preamplifier" are unexplained in the wrong-option explanations. | "C: bypass capacitors keep RF out of the microphone line when transmitting…"
tech.interference.neighbour-device-steps | 2 | minor | The explanation only says the key is "All these choices are correct", then restates. | "Most such interference comes from faulty consumer devices; the fix needs the neighbour's cooperation."
tech.interference.distorted-repeater-audio-causes | 2 | minor | The explanation only says the key is "All these choices are correct". | "Each distorts audio differently: off frequency sounds garbled, too loud over-deviates, a bad location is noisy."
tech.interference.t7b03 | 2 | minor | "fundamental overload" is unexplained (see three-causes-of-rfi). | As above.

### Topic 17: Safety

tech.safety.what-is-ionizing-radiation | 1 | minor | "It is the kind of radiation from radioactive material" is too narrow. The source: "Gamma rays, X-rays, and the higher energy ultraviolet part of the electromagnetic spectrum are ionizing radiation." | "Radioactive material gives it off, and so do X-ray machines."
tech.safety.black-is-hot | 1 | minor | The explanation (white neutral; bare or green ground) comes from Wikipedia, but `source` lists only T0A03. | Add Wikipedia "Electrical wiring in North America" to `source`, as `validAsOf` already implies.
tech.safety.t0a03 | 1 | minor | Same as black-is-hot: the colours of the neutral and ground come from Wikipedia, which is not cited. | Add the Wikipedia source.
tech.safety.t0c02 | 1 | minor | The explanation cites 47 CFR 1.1310 Table 1, but `source` lists only T0C02. | Add "47 CFR 1.1310(e)(1), Table 1" to `source`.
tech.safety.contrast-occupational-vs-general | 1 | minor | "everyone else gets the stricter general-population limits" ignores 97.13(c)(1): "amateur licensees may evaluate their operation with respect to members of his or her immediate household using the occupational/controlled exposure limits". | Add: "(97.13(c)(1) also lets a trained licensee use occupational limits for their own household.)"
tech.safety.what-is-non-ionizing-radiation | 2 | minor | "energy per photon" is not taught. | "Radiation without enough energy to knock electrons off atoms."
tech.safety.radio-is-non-ionizing | 2 | minor | "photon" and "alpha radiation" are unexplained. | "Radio signals don't have enough energy to knock electrons off atoms, unlike gamma rays or the alpha particles from radioactive material."
tech.safety.crank-up-tower | 2 | unclear | "crank-up tower" is never defined, and the explanation restates ("The pool keys this…"). | "A crank-up tower telescopes up and down on a winch cable; climbing it extended, unless it is locked, risks the sections sliding down."
tech.safety.grounding-rules-source | 2 | minor | "FAA" and "UL" are unexplained. | "Not FCC rules, aviation (FAA) lighting rules or a testing lab's (UL) practices…"
tech.safety.battery-short | 2 | minor | The explanation says only what the pool keys, not why. | "A short lets a huge current flow, which heats the wires and battery until they burn or the battery bursts."
tech.safety.battery-rapid-charge | 2 | minor | "The pool keys these two, not shock or ripple" is not a reason. | "Pushing current in or out fast heats the cells, and the chemistry can give off gas."
tech.safety.voltmeter-rating | 2 | minor | The explanation restates what is keyed. | "A meter or lead not rated for the voltage can arc or break down, putting that voltage on you."
tech.safety.never-climb-alone | 2 | minor | The explanation restates. | "If you fall or are hurt, a helper can call for help and lower tools safely."
tech.safety.body-current-harms | 2 | minor | The explanation only says the key is "All these choices are correct". | "Current heats tissue, upsets nerve and heart signals, and locks muscles so you can't let go."
tech.safety.guarding-against-shock | 2 | minor | The explanation only states the key. | "Each gives stray current a safe path or removes stored charge before you touch anything."
tech.safety.tower-climbing-requirements | 2 | minor | The explanation only states the key. | "Falls are the main tower hazard; training, tie-off and a harness each guard against one."
tech.safety.exposure-factors | 2 | minor | The explanation only states the key. | "More power, a closer person or a beam pointed at them all raise the RF they receive."
tech.safety.evaluation-methods | 2 | minor | The explanation only states the key. | "Any method that shows the fields stay below the limits is acceptable."
tech.safety.t0a08 | 2 | minor | Option B explanation says only "the pool keys the hot conductor only". | "B: if a fuse in the neutral blew, the equipment would still be connected to the live hot wire."
tech.safety.t0a11 | 2 | minor | Options A/B/C are explained as "none is the hazard the pool keys". | "A–C: these vanish when the supply is off; only capacitor charge remains."
tech.safety.t0a12 | 2 | minor | Options A/C/D are explained as "none … the pool keys". | "A: a low-impedance meter would load the circuit. C: never make the meter part of the ground path. D: a voltmeter has no frequency setting to protect you."
tech.safety.t0b08 | 2 | minor | Options A/B/C are explained as "not the keyed". | "A: one short rod gives a poor earth. B: an RF choke blocks, not grounds. C: water pipes may be plastic and are not a lightning ground."
tech.safety.t0c05 | 2 | minor | Options A/B/C are explained as "none is the reason the pool keys". | "A: lower frequencies carry less energy per photon, not more. B: they do penetrate the body. C: RF fields are not 'transient'."
tech.safety.t0a01 | 2 | minor | The explanation restates the back. | As for battery-short.
tech.safety.t0a12 | 2 | minor | The explanation restates the back. | As for voltmeter-rating.
tech.safety.t0b06 | 2 | minor | The explanation restates the back. | "Antennas fall in storms; if one touches a power line, anyone touching the antenna or its cable can be electrocuted."
tech.safety.t0b07 | 2 | minor | The explanation restates the back. | As for crank-up-tower.
tech.safety.t0b09 | 2 | minor | The explanation restates the back. | "Utility poles carry high-voltage lines; any contact while installing or later could be fatal."
tech.safety.t0b11 | 2 | minor | The explanation restates the back. | "Tower grounding is building electrical work, so the local electrical code governs it."
tech.safety.t0c07 | 2 | minor | The explanation restates the back. | "The RF current flows into your skin at the contact point and heats it."
tech.safety.t0c11 | 2 | minor | The explanation restates the back. | "Because limits are averaged over time, the share of time you transmit sets your average exposure."
tech.safety.t0c12 | 2 | minor | The explanation restates the back. | "That is why RF limits deal with heating, not with the cell damage caused by radioactivity."

## Counts

There are 174 finding lines across 156 cards (of 366): wrong 0, unsupported 4, ambiguous 0, unclear 6, minor 164.

About 100 of the minor lines are pass-2 "explanation restates the answer" or "wrong option explained only as not keyed". They are cheap to fix, and many can reuse the explanation from the matching fact card in the same topic.

Suggested plainer wordings marked "(needs a source)" go beyond the saved sources. Check them before use, or drop them.

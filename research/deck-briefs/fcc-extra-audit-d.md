# Audit D: fcc-extra, topics 22 to 29

Scope: `decks/fcc-extra/notes/22-receiving-and-direction-finding.json` to `29-safety.json`, 378 cards (25, 61, 29, 54, 54, 62, 62, 31). Pool cards: only the explanation and choicesExplained were checked, and whether the explanation says why the key is right.

**Rules checked against current Part 97 (and they pass):** the 60 m cards (four channels at 5332, 5348, 5373 and 5405 kHz plus 5351.5–5366.5 kHz; 100 W ERP and 9.15 W ERP; 2.8 kHz for all 60 m spectrum; CW carrier on the centre frequency), against FR 2026-00587, 97.303(h)(3), 97.313(i), effective 13 February 2026. E1A06's out-of-date pool citation (97.303(h)(1)) is already flagged in its explanation. E1C01's key (2.8 kHz) still holds. The FR 2025-22633 cards (97.521(b), Appendix 2 and 97.315(b)(2) removed, effective 10 February 2026) are correct, and E1F03's explanation rightly notes that 97.315(b)(1) remains. FR 2026-00587 also revised 97.313(f) (435–438 MHz Earth stations); no card in topics 22 to 29 depends on it. Other pool citations in E1 (97.113(c) on E1F08, already flagged) were checked against the 2025 text. The band edges, 2200 m and 630 m limits, UTC notice, quiet hours, RACES, space station segments, VE rules, amplifier standards and 1.1307 Table 1 all match their evidence.

Most findings are pool explanations that restate the key without saying why. Topics 25 and 29 are the worst affected.

Format: `id | severity | problem | evidence (source words, with page)`

## Topic 22: receiving and direction finding

extra.receiving-and-direction-finding.e9h10 | minor | Explanation restates the key ("more turns and more area give a larger voltage") without the reason (induced voltage). | E9H10 key: "By increasing the number of turns and/or the area enclosed by the loop"

## Topic 23: satellites and amateur television

extra.satellites-and-amateur-television.e2a01 | minor | Explanation does not say why "ascending" means south to north; the wrong-option reasons say only "not the direction". | E2A01 key: "From south to north"
extra.satellites-and-amateur-television.e2a07 | minor | Explanation restates "all these choices" without saying why a linear transponder passes any mode. | E2A07 key: "All these choices are correct"
extra.satellites-and-amateur-television.e2a10 | minor | Choice A's reason is only "HEO is not the type the pool says appears fixed". | E2A10 options A "HEO", B "Geostationary"
extra.satellites-and-amateur-television.e2a11 | unclear | Explanation never says why circular polarisation defeats Faraday rotation and spin modulation; every wrong-option reason is "not the pool's answer". | NEETS Mod 11 glossary: "The rotation of the plane of polarization …"; E2A11 key "A circularly polarized antenna"
extra.satellites-and-amateur-television.e2b07 | ambiguous | "DVB-T is digital television, and its modulations are the digital ones" implies FSK and on-off keying (options A and C) are not digital. | E2B07 options: "A. FM and FSK … C. AM and OOK"
extra.satellites-and-amateur-television.dvb-t-primer | ambiguous | Same implication: "Its modulations are digital ones, not the FM, FSK … or on-off keying". | E2B07 as above
extra.satellites-and-amateur-television.e2b09 | minor | Explanation restates the key without saying why an SSB receiver suits DRM; choice A reason is only "not the receiver the pool names". | E2B09 key: "SSB"
extra.satellites-and-amateur-television.e2b10 | minor | Explanation restates the key ("carries brightness in the frequency of its tones"). | E2B10 key: "Tone frequency"

## Topic 24: contesting, DX and remote operation

extra.contesting-dx-remote-operation.e2c01 | minor | Explanation restates the key; the reason is that 97.119 requires only the call sign and makes indicators optional. | 97.119(c): "One or more indicators may be included with the call sign."
extra.contesting-dx-remote-operation.e2c02 | minor | Explanation restates the key; wrong-option reasons say only "not it". | E2C02 key: "ADIF"
extra.contesting-dx-remote-operation.e2c03 | minor | Explanation restates the key; Part 97 shows why 30 m is kept clear (50 kHz wide, 200 W PEP, secondary to fixed service). | 97.301: "30 m | 10.100-10.150"; 97.313(c)(1): "200 W PEP … On the 10.10-10.15 MHz segment"; 97.303(j): "must accept interference from, stations by other nations in the fixed service"
extra.contesting-dx-remote-operation.e2c04 | unclear | Explanation talks about routers (E2C09) and never says why the key is right. | E2C04 key: "Frequencies shared with various unlicensed wireless data services"
extra.contesting-dx-remote-operation.e2c06 | minor | Explanation restates the key. | E2C06 key: "In the weak signal segment of the band, with most of the activity near the calling frequency"
extra.contesting-dx-remote-operation.e2c11 | minor | Explanation restates the key; wrong-option reasons say only "not the method". | E2C11 key: "Send your full call sign once or twice"
extra.contesting-dx-remote-operation.e2c12 | minor | Explanation says only "the pool's name for this delay is latency"; wrong-option reasons say only "not it". | E2C12 key: "Latency"

## Topic 25: digital operating, VHF and UHF

extra.digital-operating-vhf-uhf.e2d01 | minor | Explanation restates the key (why meteor scatter needs short, fast messages is missing). | E2D01 key: "MSK144"
extra.digital-operating-vhf-uhf.e2d03 | minor | Explanation restates the key. | E2D03 key: "Q65"; E2E07: "Multiple receive cycles are averaged"
extra.digital-operating-vhf-uhf.e2d04 | minor | Explanation is only "The pool names APRS". | E2D04 key: "APRS"
extra.digital-operating-vhf-uhf.e2d05 | minor | Explanation restates the key. | E2D05 key: "Decodes signals with a very low signal-to-noise ratio"
extra.digital-operating-vhf-uhf.e2d06 | minor | Explanation restates the key. | E2D06 key: "Time-synchronous transmissions alternating between stations"
extra.digital-operating-vhf-uhf.e2d07 | minor | Explanation is only "APRS runs on AX.25 packets". | E2D07 key: "AX.25"
extra.digital-operating-vhf-uhf.e2d08 | minor | Explanation restates the key; wrong-option reasons say only "not used". | E2D08 key: "Unnumbered Information"
extra.digital-operating-vhf-uhf.e2d09 | minor | Explanation restates the key. | E2D09 key: "Multitone AFSK"
extra.digital-operating-vhf-uhf.e2e01 | minor | Explanation is only "Data below 30 MHz is sent with FSK"; wrong-option reasons say only "not it". | 97.307(f)(3): "The authorized bandwidth is 2.8 kHz"; 97.305(c): SS first at "222-225 MHz"; pulse first at 33 cm
extra.digital-operating-vhf-uhf.e2e02 | minor | Explanation restates the key. | E2E02 key: "Synchronization of computer clocks"
extra.digital-operating-vhf-uhf.e2e05 | minor | Explanation restates the key. | E2E05 key: "WSPR"
extra.digital-operating-vhf-uhf.e2e06 | minor | Explanation restates the key. | E2E06 key: "15 seconds"
extra.digital-operating-vhf-uhf.e2e07 | minor | Explanation restates the key; it does not say why averaging helps. | E2E07 key: "Multiple receive cycles are averaged"
extra.digital-operating-vhf-uhf.e2e08 | minor | Explanation restates the key. | E2E08 key: "PACTOR"
extra.digital-operating-vhf-uhf.e2e10 | minor | Explanation restates the key and gives no bandwidths. | E2E10 key: "FT8"
extra.digital-operating-vhf-uhf.e2e13 | minor | Explanation links PACTOR IV to binary files but does not say why its throughput is highest. | E2E13 key: "PACTOR IV"

## Topic 26: Extra privileges and band edges

extra.extra-privileges-band-edges.e1c06 | minor | Explanation restates the key; why a copy of DA 16-1048 is needed is not in any cached source. NEEDS RESEARCH. | E1C06 key: "You must have a copy of FCC Public Notice DA 16-1048"

## Topic 27: station restrictions, RACES and space

extra.station-restrictions-races-space.e1b02 | minor | Explanation cites 97.307(f)(2) but never links it to 3 kHz (the width of a communications-quality SSB voice signal). | 97.307(f)(2): "No non-phone emission shall exceed the bandwidth of a communications quality phone emission of the same modulation type."
extra.station-restrictions-races-space.e1b04 | minor | Explanation states the sharing rule but not how it leads to "cease or mitigate". | 97.303(b): "must not cause harmful interference to … stations authorized by the United States Government in the radiolocation service"

## Topic 28: volunteer examiners and miscellaneous

extra.volunteer-examiners-and-miscellaneous.e1e11 | wrong | Says "the 4th errata corrected the pool's citation from (m) to (i)". It was the first errata, of 31 January 2024. | Pool PDF errata page: "2024-2028 Extra Class Pool Errata / Issued January 31, 2024 … E1E11 – update the rule citation's letter from "m" to "i""
extra.volunteer-examiners-and-miscellaneous.e1f06 | minor | Choice D's reason is only "the pool does not give an STA for this purpose"; 97.9(b) is the real reason. | 97.9(b): "who holds a CSCE … is authorized to exercise the rights and privileges of the higher operator class until final disposition of the application"

## Topic 29: safety

extra.safety.e0a01 | minor | Explanation restates the key; wrong-option reasons say only "the pool does not give any of these". | E0A01 key: "Lightning charge dissipation"
extra.safety.e0a03 | minor | Explanation restates the key; Table 1 of 1.1307 supports it (lowest, flat threshold across 30–300 MHz). | 1.1307 Table 1: "1.34-30 3,450 R 2 /f 2 . 30-300 3.83 R 2 . 300-1,500 0.0128 R 2 f."
extra.safety.e0a05 | minor | Explanation restates the key; wrong-option reasons say only "the pool keys antenna gain". | E0A05 key: "The high gain antennas commonly used can result in high exposure levels"
extra.safety.e0a07 | minor | Explanation restates the key. | E0A07 key: "At least one lanyard attached to the tower at all times"
extra.safety.e0a09 | minor | Explanation says only that the date is the pool's; the reason for 3 May 2021 is not in the cached 1.1307 (1.1310 and the FCC order not fetched). NEEDS RESEARCH. | fcc-extra.md, Not verified item 4
extra.safety.e0a10 | minor | Explanation restates the key; 1.1307(b)(1) gives the reason. | 1.1307(b)(1)(i): "must either: (A) Determine that they qualify for an exemption pursuant to § 1.1307(b)(3); (B) Prepare an evaluation …"
extra.safety.e0a11 | minor | Explanation restates the key; wrong-option reasons say only "the pool does not key these". | E0A11 key: "Tower legs"
extra.safety.e0a12 | minor | Explanation restates the key; wrong-option reasons say only "the pool does not key these". | E0A12 key: "Above the climber's head level"
extra.safety.table-1-30-300 | ambiguous | "Unlike the ranges either side, this threshold has no frequency term" can be read as all other ranges, but 0.3–1.34 MHz (1,920 R²) and 1,500–100,000 MHz (19.2 R²) have no frequency term either. | 1.1307 Table 1: "0.3-1.34 1,920 R 2 … 1,500-100,000 19.2R 2"

## Counts

46 findings: wrong 1, ambiguous 3, unclear 2, minor 40. 63 patch lines cover 44 findings, and 2 need research (e1c06, e0a09). `node build/apply-fixes.mjs fcc-extra research/deck-briefs/fcc-extra-fixes-d.jsonl --dry`: 65 lines applied, no checker breaks.

Note: mechanism sentences added to pool explanations in topics 23 to 25 and 29 (for example FT8's roughly 50 Hz bandwidth, PACTOR's ARQ, and why a lanyard goes above head level) are standard operating knowledge that no cached source states. They are in our own words, and a reviewer may want to cite a source for them.

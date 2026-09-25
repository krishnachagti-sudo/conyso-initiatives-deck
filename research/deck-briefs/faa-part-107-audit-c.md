# Audit C: faa-part-107, topics 12–17

Scope: decks/faa-part-107/notes/12…17, read in `order` (546 cards: T12 45, T13 126, T14 57, T15 128, T16 101, T17 89).
Pass 2 assumes the newcomer has studied topics 1–11 (their `introduces` list and the deck glossary).
Sources checked against the saved copies in the scratch `sources/faa-part-107/` folder: AC 107-2A, Study Guide FAA-G-8082-22 (SG), PHAK chapters 2, 14 and 17, AIM 2-1, 2-3, 4-2, 4-3 and 7-5, SAFO 09013, SAFO 15010, the 14 CFR part 107 text, and the AKTS figure 2 page (p.36, image matches).
Out of scope means beyond the ACS FAA-S-ACS-10B elements listed in the brief (IV.A, V.A–V.F).

Format: `id | pass | severity | problem | source text or plainer wording`

## Topic 12: Loading and performance

uas.loading-performance.cg-classify | 1 | ambiguous | More than one answer fits. On a drone, "drifts and is hard to control after mounting a new sensor" also points to compass or magnetic interference from the sensor, not only CG. | Make the symptom a CG symptom: "…the drone keeps tilting towards the side where the sensor hangs and needs constant stick to hold level. Which loading problem is most likely?"
uas.loading-performance.lift-weight | 1 | minor | The explanation "Lift is the only force that counteracts weight" is on SG p.32 ("Weight Control"), not the cited p.30. | Cite SG ch.4 pp.29–30 and 32, or drop the sentence.
uas.loading-performance.climb-altitude | 1 | minor | The explanation "just as a higher density altitude does" is the card's own inference; SG p.22 says only "An increase in altitude also increases the power required and decreases the power available." | Drop it, or mark it as a link back to topic 11 rather than as the source's words.
uas.loading-performance.pd-scenario | 1 | minor | "then confirm cautiously in your own flying" is not in AC ¶B.1. | Source: "use that data as a starting point." End the back there.
uas.loading-performance.weight-climb | 2 | unclear | "fly at a higher angle to hold altitude" loses the source's "angle of attack", so a reader may think of pitch or bank. "drag" and "reserve thrust" are not taught. | "Extra weight means the wing must meet the air at a steeper angle to hold height. That adds drag (air resistance), so less spare power is left for climbing."
uas.loading-performance.lf-60 | 2 | unclear | "coordinated turn" and "bank" are not taught before this card (also affects lf-rapid, steep-turn-scenario and lf-chart-60/30). | Add: "bank = how far the wings are tilted to turn; a coordinated turn is a smooth turn without slipping."
uas.loading-performance.in-flight-weight-change | 2 | unclear | The front asks two questions, and "jettisonable" is jargon. | Split the card, or ask: "How can a small UA's weight change during flight?" Back: "By using up or dropping something it carries, such as releasing a package (a 'jettisonable load')."
uas.loading-performance.follow-limits | 2 | minor | The back reads awkwardly ("Those set by the manufacturer or builder, closely."). | "The manufacturer's or builder's limits. Follow them closely."
uas.loading-performance.mgtow-not-always | 2 | minor | "maximum gross takeoff weight" is not explained. | "…at the maximum takeoff weight (the heaviest the maker allows at launch)?"

## Topic 13: Radio and airport operations

uas.radio-and-airport-operations.app-which-frequency | 1 | unsupported | choicesExplained C says "122.7 is also listed as a UNICOM frequency", but the cited SG ch.7 p.40 names only 122.8 and 122.9. | The support is PHAK Fig. 14-1: "published CTAF frequency (122.7, 122.8, 122.725, 122.975, or 123.0)". Add it as a source.
uas.radio-and-airport-operations.what-is-a-towered-airport | 1 | minor | The explanation "Manned pilots there must keep two-way radio contact with ATC" is not in the cited SG ch.11 p.65. | The support is PHAK ch.14 p.14-2: "required to maintain two-way radio communication with ATC". Cite that.
uas.radio-and-airport-operations.what-is-a-non-towered-airport | 1 | minor | "pilots are expected to monitor" overstates the source (also in non-towered-radio-not-required). | SG: "it is a good operating practice for pilots to monitor other aircraft on the specified frequency". Use "it is good practice for pilots to monitor…".
uas.radio-and-airport-operations.airport-name-twice | 1 | minor | The explanation "Several nearby airports may share a frequency" is inference; SG gives only "to allow others who are on the frequency to confirm where the aircraft is going." | Keep only the source's reason, or mark the added sentence as general knowledge.
uas.radio-and-airport-operations.app-pattern-height | 1 | minor | "aircraft descend through lower heights on base and final" is inference, not in AIM 4-3-3. | Either cite AIM 4-3-3 fig. notes ("Maintain pattern altitude until abeam approach end…") or soften to "and lower as they descend to land".
uas.radio-and-airport-operations.leg-departure | 2 | unclear, and minor: out of scope | "climbing to at least ½ mile beyond the runway end" reads as climbing to a distance. The ½-mile detail goes beyond ACS V.B.K4. | AIM: "continues until reaching a point at least 1/2 mile beyond the departure end of the runway and within 300 feet of the traffic pattern altitude." Plainer: "The straight climb out along the runway line after takeoff." Drop the ½ mile.
uas.radio-and-airport-operations.pattern-calls | 2 | unclear | Order problem: this card (13095), plus pattern-left-turns (13330, whose explanation uses "downwind leg") and pattern-entry-45 (13350, "downwind leg… midfield"), use the leg names before the leg definitions at 13355–13380. | Move the leg cards (leg-upwind … leg-final) to just after what-is-a-traffic-pattern (13040).
uas.radio-and-airport-operations.phraseology-directions | 2 | unclear | Topic 10 taught that METAR/TAF winds are true. This card says radio wind directions are magnetic, with no link back, so it reads as a contradiction. "heading", "course" and "bearing" are not taught. | Add: "Written reports (METAR, TAF) give wind from true north; winds spoken by ATC or ATIS are magnetic. Heading = the way the aircraft's nose points."
uas.radio-and-airport-operations.displaced-threshold | 2 | unclear | "threshold" is never defined (also affects relocated-threshold and contrast-displaced-relocated). | Add: "The threshold is the painted line where the usable landing part of the runway begins."
uas.radio-and-airport-operations.heavier-ga-call-sign | 2 | minor | "turboprop" is not explained. | "…such as a turboprop (a propeller turned by a jet engine) or a jet…"
uas.radio-and-airport-operations.phonetic-a (and phonetic-b … phonetic-z, phonetic-nine) | 2 | minor | 27 explanations restate the back ("The AIM lists X as the telephony word for Y…") instead of saying why. | Give a reason once, e.g. "Pilots use it to say registration letters so they cannot be misheard." Or drop the explanation.
uas.radio-and-airport-operations.vasi-glidepath | 1 | minor: out of scope | The glidepath angles (3°, and ¼° for the upper glidepath of a three-bar VASI) go beyond ACS V.B.K8, which asks to recognise airport lighting, not its geometry. | Consider cutting it or making it "extra".
uas.radio-and-airport-operations.what-is-a-papi | 1 | minor: out of scope | The explanation's visibility ranges (5 mi day, 20 mi night) are beyond ACS. | Explain what a PAPI tells a remote pilot instead: "red and white lights show approaching aircraft are on the slope down to the runway."

## Topic 14: Emergency procedures

uas.emergency-procedures.what-is-a-lithium-battery-hazard | 1 | minor | "Most small unmanned aircraft run on lithium batteries" is not in AC ¶B.5. | Drop it, or say "Many small UA run on lithium batteries" as general knowledge.
uas.emergency-procedures.contrast-emergency-report | 1 | minor | "accident report" uses the old §107.9 title. The rule is now "Safety event reporting" (see brief §7 item 3), and the deck taught the term "safety event report". | "Emergency deviation report versus safety event report: which is sent only if the FAA asks?"
uas.emergency-procedures.night-hazards-assessment | 2 | unclear | The front is hard to parse ("which hazard does the AC mention concerning unlit towers and buildings?"), and the back ("night vision adaptation") names a process, not a hazard. | Front: "Planning a night flight near unlit towers and buildings, what hazard does the AC tell you to consider?" Back: "Your eyes may not have adjusted to the dark (night vision adaptation), so unlit towers and buildings are hard to see."
uas.emergency-procedures.what-is-thermal-runaway | 2 | minor | "electrolyte" is not explained. | "…releases burning lithium or the flammable liquid inside the cell (the electrolyte)…"
uas.emergency-procedures.fight-fire-step-1 | 2 | minor | "Halon" is not explained (also in app-battery-smoking). | "A Halon (a gas fire extinguisher, as carried on airliners), Halon-replacement or water extinguisher."
uas.emergency-procedures.bands-wifi-interference | 2 | minor | The explanation restates the back. | Give the why: "Your link and the networks compete for the same frequencies, so the aircraft may not hear your commands."

## Topic 15: ADM, CRM and risk

uas.adm-crm-and-risk.class-pave-pilot | 1 | ambiguous | "You have not flown this model for three months" fits Aircraft as well as Pilot: SG p.55 lists "Am I familiar with and current in this aircraft?" under A = Aircraft. | Remove the model clue: "You have not flown any drone for three months and slept badly last night."
uas.adm-crm-and-risk.class-imsafe | 1 | ambiguous | "a new cold remedy" also implies a cold, so Illness is defensible too. | "You took a new hay-fever tablet this morning that warns against operating machinery."
uas.adm-crm-and-risk.app-care-reality | 1 | unsupported | The cited SG ch.10 p.58 only lists the CARE words; it never says what each covers, so matching "gusts stronger than forecast" to Reality is unsourced. | Cite PHAK ch.2 (CARE checklist): "if you find yourself saying that it will 'probably' be okay, it is definitely time for a solid reality check."
uas.adm-crm-and-risk.class-team-transfer (also class-team-eliminate, class-team-mitigate, class-team-accept, team-t/e/a/m) | 1 | minor | These cite SG p.58, which only lists the TEAM words. The meanings used are in PHAK ch.2. | PHAK: "Transfer—Should this risk decision be transferred to someone else…; Eliminate—Is there a way to eliminate the hazard?; Accept—Do the benefits of accepting risk outweigh the costs?; Mitigate—What can you do to mitigate the risk?" Add PHAK ch.2 as the source.
uas.adm-crm-and-risk.what-is-5p (also 5p-1, 5p-2, 5p-3, 5p-4, 5p-5, app-5p-when) | 1 | minor: out of scope | The 5P check (Plane, Passengers, Programming, FBO planning room) is PHAK manned-aircraft material. ACS V.D does not list it, and it does not fit a remote pilot. Seven cards. | Cut, or keep what-is-5p only as "extra".
uas.adm-crm-and-risk.human-factors-share | 1 | minor: out of scope | Accident statistics are not an ACS V.D element. SG also gives a different figure (">70 percent", p.56). | Cut, or fold it into the ADM primer's explanation.
uas.adm-crm-and-risk.adm-can-be-taught | 1 | minor: out of scope | The "10 to 50 percent fewer judgement errors" study statistic goes beyond ACS V.D. | Cut.
uas.adm-crm-and-risk.srm-includes | 1 and 2 | minor: out of scope; unclear | The list of SRM components goes beyond ACS. "automation management" and "task management" are unexplained on the card. | Cut, or keep only what-is-srm.
uas.adm-crm-and-risk.external-pressures-key | 2 | minor | The explanation's "Personal standard operating procedures" is unexplained. | "Having your own fixed rules (e.g. 'I never fly above 20 kt gusts') lets you say no to pressure."
uas.adm-crm-and-risk.class-adm-or-crm | 2 | minor | "CRM or a hazardous attitude?" is a false choice that gives the answer away. | "Which idea does this show: CRM, SRM or situational awareness?", with choices explained.
uas.adm-crm-and-risk.imsafe-i (also imsafe-m/s/a/f/e, pave-p/a/v/e, care-c/a/r/e, team-t/e/a/m, decide-step-1…6, rm-principle-1…4, 5p-1…5) | 2 | minor | The explanations restate the full acronym instead of saying why the letter matters. | E.g. imsafe-m: "Many everyday medicines cause drowsiness; ask whether anything you took could affect judgement." Do the same for each letter.

## Topic 16: Physiology

uas.physiology.what-is-hyperventilation | 1 | minor | "can distract or incapacitate a pilot" leans against the source. | SG p.45: "It seldom incapacitates completely, but it causes disturbing symptoms that can alarm the uninformed pilot." Use "rarely incapacitates, but its symptoms can alarm and distract a pilot."
uas.physiology.scotopic-acuity | 1 and 2 | unsupported; minor: out of scope | The explanation "You see only what you would normally see from ten times closer" is the card's own gloss and is confusing. "20/200" is not explained. The acuity figure goes beyond ACS V.E.K8. | Cut, or: "In very low light you see detail only about a tenth as sharply as in daylight, and no colour."
uas.physiology.contrast-autokinesis-false-horizon | 1 | minor | "Both are visual illusions that are worst at night" is not supported. PHAK lists daytime causes of a false horizon (sloping clouds, an obscured horizon, an aurora). | "Both fool the eyes; both are common at night."
uas.physiology.sunglasses-before-night | 1 | minor: out of scope | N-15 sunglasses are PHAK manned-aircraft advice and not an ACS V.E element. | Cut, or keep as "extra".
uas.physiology.altitude-night-vision | 1 | minor: out of scope | "4,000 feet pressure altitude without oxygen" is manned-flight material; ACS V.E has no hypoxia element. | Cut.
uas.physiology.vitamin-a | 1 | minor: out of scope | Beyond ACS V.E.K8. | Cut, or fold it into app-self-imposed.
uas.physiology.self-imposed-hypoglycemia | 2 | unclear | "hypoglycemia" is first explained at app-self-imposed (16475), about 120 order points later. | "…and hypoglycemia (low blood sugar from missed meals) and nutritional deficiency."
uas.physiology.chronic-stress-action | 2 | minor | "exercise their privileges" is jargon (also in what-is-chronic-stress and app-chronic-stress). | "Stop flying and see a doctor."

## Topic 17: Maintenance and inspection

uas.maintenance-and-inspection.cat4-who (also cat4-record-contents, app-cat4-records, app-cat4-who) | 1 | minor | The source title is wrong: §107.140 is "Category 4 operations.", not "Category 4 operations: Eligibility". The requirement is in §107.140(c). | "14 CFR 107.140(c) 'Category 4 operations' (maintenance requirements)".
uas.maintenance-and-inspection.app-cannot-repair | 1 | minor | "must be replaced" overstates the source. | AC ¶7.2.3.1: "the operator should replace the small UAS or component". Use "should".
uas.maintenance-and-inspection.app-crack-found | 1 | minor | "Unscheduled maintenance must be completed before flight" overstates the source (also in contrast-scheduled-unscheduled: "Both must be done before the next flight"). | AC ¶7.2.3.1: "All required maintenance should be completed before each flight"; ¶7.2.2: "flight operations should not occur until the issue is corrected."
uas.maintenance-and-inspection.app-compass | 2 | minor | "You drove 300 miles" suggests calibration is due because of the travel, but the AC says to calibrate "prior to any flight". | "Before today's flight, which navigation item on the AC's preflight list do you do every time?"
uas.maintenance-and-inspection.what-is-scheduled-maintenance | 2 | minor | "cycles" is not explained (also in time-in-service). | "…flight hours, cycles (e.g. number of flights or battery charges) or calendar days."
uas.maintenance-and-inspection.condition-delamination | 2 | minor | "delamination of bonded surfaces" is jargon. | "…if glued layers of the frame start to separate (delamination)?"
uas.maintenance-and-inspection.preflight-item-visual-condition (and all 23 preflight-item-* cards) | 2 | minor | Every explanation restates "This is item N of the 23…", which says nothing about why. Several use unexplained terms: servo, avionics, transceiver, flight termination system, ducted fan, powerplant. | Give each item a one-line reason, e.g. item 21: "A chipped or bent prop shows up as vibration when spun, before it fails in the air." Explain terms: "servo (small motor that moves a control surface)"; "flight termination system (a switch that deliberately ends the flight, e.g. cuts power or deploys a parachute)".
uas.maintenance-and-inspection.preflight-item-visual-condition, preflight-item-airframe, preflight-item-control-surfaces, preflight-item-servos, preflight-item-fuel, preflight-item-avionics, preflight-item-display, preflight-item-ground-support, preflight-item-cs-communication, preflight-item-control-movement, preflight-item-flight-termination, preflight-item-controller-heading-altitude, preflight-item-low-altitude-recheck | 1 | minor: out of scope | 13 cards drill single items of a 23-item list by number and position. ACS V.F.K2 tests the preflight inspection, not recall of the AC's list order. | Merge into two or three cards grouped by system (airframe and propulsion; link, GPS and power; lights and batteries), or keep them as "extra" and remove "item N" from the wording.

## Counts

Cards checked: 546.
Problem lines: 55 (several lines cover a group of related cards).

| Severity | Lines |
|---|---|
| wrong | 0 |
| unsupported | 3 |
| ambiguous | 3 |
| unclear | 9 |
| minor | 40 |

12 lines are marked "minor: out of scope", covering about 30 cards. Two lines carry two labels and are counted once, under the first label.

Most serious:
1. Ambiguous scenarios with two defensible answers: class-pave-pilot (model recency is under Aircraft in SG p.55), class-imsafe (a cold remedy implies Illness too), and cg-classify (the drift could be compass interference).
2. Unsourced mappings: app-care-reality and the TEAM classification cards rely on meanings that SG p.58 never gives; the support is in PHAK ch.2. The 122.7 UNICOM option in app-which-frequency comes from PHAK Fig. 14-1, not the cited SG.
3. Teaching order in T13: the traffic-pattern leg names are used (13095, 13330, 13350) before they are defined (13355–13380). In T13, the magnetic radio winds clash with the true METAR winds taught in T10, with no bridge.

# FAA Part 107 deck audit, part A (topics 01–06)

Auditor brief: research/deck-briefs/AUDIT.md. Scope: decks/faa-part-107/notes/01…06, read in `order`. That is 346 cards: 73 + 52 + 23 + 52 + 120 + 26. I checked every card against the saved sources in the scratch folder: part107/part3/part48/part89 eCFR text, §§ 1.1, 1.2, 61.56, 91.17, 91.19, 91.137–91.145, 91.203 and 99.7, AC 107-2A, FAA-S-ACS-10B, the Study Guide, the PHAK chapters, the Chart User's Guide and the "Become a Drone Pilot" page. I fetched only to check three unusual source URLs. All three returned 200.

Counts (one line per problem card): 61 lines. By severity: wrong 0, unsupported 3, ambiguous 4, unclear 15, minor 39.

## Checks against the current eCFR (brief §0.3, §7)

- **No card teaches a superseded rule.** Falsification is taught as § 3.403. The cards say § 107.5 is "[Reserved]" and point out that AC 107-2A is stale on this. § 107.9 is taught as "Safety event reporting", with the current wording: 10 calendar days, and the repair ≤ $500 **or** total-loss FMV ≤ $500 test. The cards do not use the AC's "whichever is lower" wording.
- **These all match the eCFR word for word or as a faithful paraphrase:** §§ 107.1–107.79, 107.110–107.145 as cited, 107.200/205 (ten waivable items), parts 48 and 89 (dates, message elements, 100/150/15 ft, 1.0 s, 1 msg/s, FRIA 48 months/120 days), § 3.303 (U.S. agent), § 91.17 (8 h, 0.04, 4 h) and §§ 91.137–91.145/99.7.
- **Course numbers match the FAA page as of 9 June 2026:** ALC-451 (initial, part 61), ALC-677 (recurrent). No card says "Notice to Air Missions". No card uses the ACS's stale "subpart D" label for waivers.
- **Metadata (not a card-content problem):** 56 `uses` entries in 05-operating-rules use lower-case tags that no card introduces: "remote pic", "small uas" and "ads-b out". Cards 01 and 04 introduce them as "remote PIC", "small UAS" and "ADS-B Out". Normalise the case, or the order checker will treat these terms as untaught.

## Findings

Format: `id | pass | severity | problem | source text or plainer wording`

### 01 Framework and definitions
- uas.framework.what-are-the-oop-categories | 1 | unsupported | Example: "A drone that its maker has labelled 'Category 2' is eligible". A label alone does not make a drone eligible. | § 107.115(a) needs all three: eligible under § 107.120(a), "listed on an FAA-accepted declaration of compliance", and labelled. Use: "A drone listed on an FAA-accepted declaration of compliance for Category 2, and labelled 'Category 2', may fly Category 2 operations over people."
- uas.framework.what-is-a-safety-event-report | 1 | ambiguous | Back: "property damage above $500". A newcomer will read this as "any damage over $500". | § 107.9(b): reportable "unless … cost of repair … does not exceed $500; or … fair market value … does not exceed $500 in the event of total loss". Use: "…or damage to other property, unless the repair costs $500 or less (or, if it is destroyed, it was worth $500 or less)."
- uas.framework.report-own-drone | 1 | unsupported | Explanation: "other people's property above the $500 threshold". The rule covers any property except the drone itself, including the pilot's own car. | § 107.9(b): "Damage to any property, other than the small unmanned aircraft". Use: "damage to any property other than the drone itself".
- uas.framework.what-does-airworthy-mean | 1+2 | minor | § 3.5(a) defines "airworthy" only "when used in this section" (statements in advertising or sales), so "In FAA rules" overgeneralises. "Type design" is not explained. | Use: "As 14 CFR § 3.5 defines it, …", and add "(the design the FAA approved for that model)".
- uas.framework.what-is-a-serious-injury | 1 | minor | Example: "needs hospital care". The AC says "requires hospitalization", which is stronger. | AC ¶4.4: "A person requires hospitalization, but the injury can fully heal". Use: "is admitted to hospital".
- uas.framework.serious-injury-classify | 1 | minor | Same as above: "needs hospital care". | Use: "is admitted to hospital for a cut that must be stitched".
- uas.framework.contrast-faa-ntsb | 1 | minor | "Narrower accident definition" and the example "a serious injury" are inferences. The NTSB uses its own "serious injury" definition (49 CFR 830.2), not AIS 3. | AC ¶4.4.2: "NTSB regulations contain specific definitions for 'serious injury' …". Use the example "a death".
- uas.framework.who-may-inspect | 2 | ambiguous | "Which three federal bodies…?" A federal law enforcement officer is also federal, so the question has more than one answer. | Use: "Besides law enforcement officers, which three bodies may ask to see your certificate?"
- uas.framework.what-is-a-community-based-organization | 1 | minor | The source does not define a CBO. The definition is inferred from the § 44809 footnote. | AC ch.4 fn 1: "a community-based organization's set of safety guidelines that are developed in coordination with the FAA". Present it as "the kind of organization whose safety guidelines…". Also, the card puts "49 U.S.C. 44809" before the 44809 card (1130).
- uas.framework.what-is-an-exemption | 1 | minor | The definition is inferred. The AC says only that "Title 14 CFR part 11 applies to petitions for exemption". | Acceptable paraphrase. Consider citing 14 CFR part 11 directly.
- uas.framework.applicability | 2 | unclear | "Civil" and "public aircraft operations" are not explained. | Add: "'Civil' means not government ('public') aircraft, such as police or military flights."
- uas.framework.excl-exemption | 2 | minor | "Section 333" is not explained. | Add: "(an older exemption law, now replaced by 49 U.S.C. 44807)", or drop "section 333 or".
- uas.framework.excl-part-91 | 2 | minor | "Part 91" and "airworthiness certificate" are not taught. | Add: "part 91 (the general flight rules for manned aircraft)…".

### 02 Certification
- uas.certification.what-is-iacra | 1 | minor | "Test results upload to it, so the application can go ahead without delay." The current FAA page qualifies this. | become_a_drone_pilot (9 June 2026): "it may take up to 48 hours from the test date for the knowledge test to appear in IACRA". Add that.
- uas.certification.who-may-be-pic | 1 | minor | "Only someone holding a remote pilot certificate…" leaves out the § 107.12(c) exception. | § 107.12(b) opens "Except as provided in paragraph (c)". That paragraph covers a foreign-registered aircraft flown with FAA authorisation. Add "normally".
- uas.certification.uncertificated-flying | 1 | minor | Same "Only" as above; § 107.12(a) is also subject to (c). | Add "Normally, only…".
- uas.certification.what-is-a-us-agent | 1 | minor | The explanation says the rule applies to anyone with "no U.S. physical address on file". § 3.301 requires both conditions. | § 3.301(a)–(b): "Do not have a U.S. physical address of record … ; Have a foreign address of record …". Use: "Individuals with a foreign address and no U.S. physical address on file…".
- uas.certification.cfi-no-temp | 2 | minor | Three unexplained job titles. | Use: "An FAA Flight Standards office, an FAA-designated pilot examiner, or an airman certification representative (at a pilot school) can issue one."
- uas.certification.what-is-a-flight-review | 2 | minor | "Endorses the logbook" and "authorised instructor" are jargon. | Use: "…and the instructor signs the pilot's logbook to record it."

### 03 Registration
- uas.registration.new-drone-scenario | 1 | minor | "Unique identifier" is the part 48 term. An aircraft registered under part 47 is marked under part 45 instead (§ 48.1(b)(2)). | Use: "Register it and mark it: under part 48, display its unique identifier on an external surface."

### 04 Remote ID
- uas.remote-id.research-exception | 1 | unsupported | Explanation: "the only named exception … besides general FAA authorisation". § 89.101(b) also excludes part 91 operations that transmit ADS-B Out under § 91.225. | Delete the sentence, or use: "This is the only exception in § 89.105 besides general FAA authorisation."
- uas.remote-id.perf-altitude | 1 | minor | Explanation: "so its altitude must be far more precise". The reason is inferred; § 89.310 gives none. | Present it as a memory aid, e.g. "One way to remember it: …".
- uas.remote-id.standard-serial-reg | 1 | minor | Explanation: "It must also be listed on an FAA-accepted declaration of compliance". § 89.110(b)(1) also accepts a part 21 design or production approval. | Add "…(or be covered by a part 21 design or production approval)".
- uas.remote-id.rid-old-drone | 1 | minor | Leaves out that the module's serial number must be on the aircraft's registration. | § 89.115(a)(1)(ii). Add: "…and list the module's serial number on the drone's registration."
- uas.remote-id.standard-msg-identity | 2 | unclear | "Session ID" is not explained. | Add: "(a temporary ID used in place of the serial number)". The regulation does not define it, so check wording against AC 89-2 before adding detail.
- uas.remote-id.standard-msg-ua | 2 | unclear | "Geometric altitude" is used on this card and three neighbours but never explained. | Add once, on the first card: "geometric altitude (height measured by satellite position, not by air pressure)". Verify against a source, because part 89 does not define it.
- uas.remote-id.what-is-gps | 2 | minor | The example uses "groundspeed" and "part 107's speed limit" before they are taught (card 5608). | Use an example that needs no later term, e.g. "A drone's GPS lets it hold its position in a hover."
- uas.remote-id.what-is-air-traffic-control | 2 | minor | The explanation uses "controlled airspace" before topic 08 teaches it. | Use: "…before a drone flies in the airspace around many airports (§ 107.41)."
- uas.remote-id.what-is-utc | 1 | minor | Defines UTC only as the time used in weather reports. That is a use, not a definition. | Use: "The worldwide standard time that aviation uses in place of local time, written with a 'Z' (e.g. 1845Z)."

### 05 Operating rules
- uas.operating-rules.what-does-107-25-allow | 1 | ambiguous | The explanation "The rule is about where the crew operates from, not what the aircraft flies over" contradicts the back and the rule. | § 107.25(b): "unless the small unmanned aircraft is flown over a sparsely populated area". Use: "The rule limits where you fly from and, from a moving car or boat, what the aircraft may fly over."
- uas.operating-rules.app-nta-wildfire | 1 | ambiguous | The front says only "a § 91.137 TFR covers a wildfire", but the back holds only for a (a)(1) TFR. Wildfire TFRs protecting firefighting aircraft fall under (a)(2), which has more exceptions in § 91.137(c). The deck's own TFR primer (what-is-a-tfr) describes the wildfire case that way. | Use: "A § 91.137(a)(1) TFR protects people and property from a wildfire…", or make the answer cover both paragraphs.
- uas.operating-rules.what-are-prohibited-restricted-areas | 1+2 | minor | The example presents R-4401 as "an artillery range". The Study Guide uses R-4401 only as a naming example. The definitions come from the SG, but only § 107.45 is cited. "Special use airspace" is not taught. | SG ch.2: "charted with an 'R' followed by a number (e.g., R-4401)". Use "a restricted area charted as R-4401". Cite SG ch.2 and add "(airspace set aside for special activities)".
- uas.operating-rules.what-is-in-flight-emergency-rule | 1 | minor | The definition in the explanation comes from AC ¶5.18, but only § 107.21 is cited. | AC ¶5.18: "an unexpected and unforeseen serious occurrence or situation that requires urgent, prompt action". Add the AC to the source.
- uas.operating-rules.what-is-night | 1 | minor | The example's 30 minutes comes from AC ¶5.7, but only § 1.1 is cited. § 1.1 refers to the Air Almanac. | Cite AC ¶5.7: "In the continental United States, evening civil twilight is the period of sunset until 30 minutes after sunset".
- uas.operating-rules.what-is-airport-vicinity-rule | 1 | minor | The explanation (approach corridors, taxiways, surface yield) is AC ¶5.10.1, but only § 107.43 is cited. | Add AC ¶5.10.1 to the source.
- uas.operating-rules.twi-night-training | 1 | minor | The explanation (night physiology and illusions) is AC ¶5.7.2.1, but only § 107.29 is cited. | Add AC ¶5.7.2.1.
- uas.operating-rules.acl-3-sm | 1 | minor | The explanation (manufacturer statements; the pilot stays responsible) is AC ¶5.7.2, but only § 107.29 is cited. | Add AC ¶5.7.2.
- uas.operating-rules.lim-clouds | 1 | minor | The explanation "may not fly above any cloud" is AC ¶5.12.3, not § 107.51, which is the only source cited. | Add AC ¶5.12.3.
- uas.operating-rules.pre-control-links | 1 | minor | The explanation says "The AC adds…", but the source cites only § 107.49. | Add AC ¶5.11.1 item 3.
- uas.operating-rules.pre-power | 1 | minor | Same: "The AC suggests…" with only § 107.49 cited. | Add AC ¶5.11.1 item 4.
- uas.operating-rules.app-xpd-adsb | 1 | minor | The answer covers transponders (§ 107.52), but only § 107.53 is cited. | Cite §§ 107.52 and 107.53.
- uas.operating-rules.what-is-over-human-beings-rule | 2 | unclear | "Without one, the other two exceptions must apply" reads as "both must apply". | Use: "Without a category, one of the other two exceptions must apply."
- uas.operating-rules.what-is-vlos | 2 | unclear | "Attitude" first appears in this topic (here and in vlos-aircraft-info) and is never explained. | Add: "attitude (which way the aircraft is tilted or pointing)".
- uas.operating-rules.app-vor-distant-vo | 2 | minor | "400 m" is metric in a deck that otherwise uses feet and miles. | Use "about 1,300 feet (400 m)".
- uas.operating-rules.nta-99-7 | 2 | minor | "Air Defense Identification Zone or Defense Area" is not explained. | Add: "(airspace where aircraft must be identifiable for national security)".
- uas.operating-rules.nta-91-144 | 2 | minor | "31 inches of mercury" is not explained, and the card comes before the weather topics. | Add: "(an unusually high air-pressure reading)".
- uas.operating-rules.nta-91-137-purposes | 2 | minor | "Shelter disaster relief aircraft" is a loose paraphrase. The back is also a long three-part list. | § 91.137(a)(2): "Provide a safe environment for the operation of disaster relief aircraft". Use "keep the air safe for disaster relief aircraft".
- uas.operating-rules.what-is-medical-condition-rule | 1 | minor | The back leaves out "or has reason to know". The explanation adds it, but the back reads as actual knowledge only. | Use: "…if they know, or have reason to know, of a condition…".
- uas.operating-rules.top-one-state | 1 | minor | The explanation "takes the operation outside part 107" is an inference. The AC says only that the transport "must occur wholly within the bounds of a single State". | Use: "Part 107 does not allow it; crossing a state line with property for hire needs other authority."

### 06 Waivers
- uas.waivers.ws-107-25 | 2 | unclear | The explanation restates the answer ("§ 107.205 lists ten…; § 107.25 is one of them") and says nothing about why. Ten near-identical cards teach one list item each. | Say what the waiver makes possible, e.g. "It can allow flying from a moving vehicle over a populated area (AC ¶5.14.1)". Or merge the ten cards into two or three list cards.
- uas.waivers.ws-107-29-lighting | 2 | unclear | Same restated explanation. | E.g. "Only the light can be waived; the night training in § 107.29(a)(1) cannot."
- uas.waivers.ws-107-31 | 2 | unclear | Same. | E.g. "This is the waiver that allows beyond-visual-line-of-sight flights, never for carrying property for hire."
- uas.waivers.ws-107-33 | 2 | unclear | Same. | Give a reason from the source, or merge.
- uas.waivers.ws-107-35 | 2 | unclear | Same. | E.g. "This is how one pilot could be allowed to fly several drones at once."
- uas.waivers.ws-107-37a | 2 | unclear | Same. | E.g. "Only (a) is listed; (b), creating a collision hazard, is not."
- uas.waivers.ws-107-39 | 2 | unclear | Same. | E.g. "It covers flight over people by a drone that fits no subpart D category."
- uas.waivers.ws-107-41 | 2 | unclear | Same. | E.g. "AC ¶5.10.2: a waiver is the route for pilots whose extra equipment (such as geofencing) is their safety case."
- uas.waivers.ws-107-51 | 2 | unclear | Same. | E.g. "It can allow flight above 400 ft or in lower visibility, on the waiver's conditions."
- uas.waivers.ws-107-145 | 2 | unclear | Same. | Give a reason from the source, or merge.
- uas.waivers.cow-application-contents | 1 | minor | The explanation "The AC adds…" is sourced to § 107.200 only. | Add AC ¶5.20.2.

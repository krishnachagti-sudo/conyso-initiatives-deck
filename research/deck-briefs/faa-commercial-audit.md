# faa-commercial audit: topics 01–07

Scope: decks/faa-commercial/notes/01-eligibility.json to 07-multiengine.json, 439 cards. I checked every card against its `evidence` first. For claims that go beyond the evidence, I grepped the cached sources in research/sources/faa-commercial/: 14 CFR parts 61 and 91 and §119.1 (eCFR), the Testing Matrix, the ACS knowledge test table, FAA-S-ACS-7B and 6C, AFH chapters 5, 7, 9, 10, 12 and 13, PHAK chapter 7, and AC 61-107B Change 1. I fetched nothing.

- **Rules.** I read every 14 CFR 61 and 119 rule against the cited section: §§61.1, 61.23, 61.31(f) and (g), 61.113(a), 61.123, 61.125, 61.129(a), (i) and (j), 61.131, 61.133, and 119.1(a), (b), (d) and (e). I also checked §§91.147, 91.211, 91.313, 91.315, 91.319, 91.327 and 91.409(b). All are correct except the findings below: the complex seaplane case and the §119.1(e) opening words.
- **Test time.** Cards give 2.5 hours, as the Testing Matrix (PDF p7) and the ACS Knowledge Test Table do ("CAX Commercial Pilot Airplane 100 16 2.5"). The 3.0 hours in the ACS appears only as the wrong figure. The authorization forms match the Matrix, p7.
- **Calculations.** I checked every one step by step:
  - Pivotal altitude: 100² ÷ 11.3 = 885 + 800 = 1,685 ft; 120² ÷ 15 = 960 + 500 = 1,460 ft.
  - Steep spiral: 1,000 + 1,500 + 3 × 600 = 4,300 ft.
  - Steep-turn bank: 42° is outside 50° ±5°.
  - Medical expiry: second class, March 2025, is 31 March 2026 for commercial, end of March 2030 for private (under 40) and end of March 2027 for private (45).
  - Checkride preparation: May test gives a March–April window.
  - Hours: sim credit 70 → 50; totals 230 < 250 and 80 < 100 powered.
  - TUC: 28,000 ft halved gives 1–1.5 min.

  All are correct except the long cross-country route, which is geometrically impossible.
- **Figures.** All five SVGs match their sources. The chandelle phases (bank constant then pitch constant, about 30°) match AFH ch10 p4–5. The lazy eight points (45° maximum pitch with about 15° bank; 90° about 30° bank, level pitch, 5–10 kt above stall; 135° lowest pitch) match AFH p7. The power-off 180 (downwind key abeam the spot, base key "not ... a fixed point on the ground", 200 ft beyond) matches AFH ch9 p27 and ACS IV.M S8. The TUC table matches AC 61-107B Figure 2-3 (p28) row for row. The engine failure decision matches AFH ch13 p11 and Figure 13-6. Credits and licences are right.
- **The one oddity kept.** AC 61-107B says "greater pressure differential means slower decompression" (p26). The card quotes it faithfully.

id | severity | problem | evidence (source words, with page)
--- | --- | --- | ---
cpl.eligibility.app-long-xc-240 | wrong | The route A–B–C–A with B 180 and C 240 nm from A cannot total 330 nm: the triangle alone is at least 480 nm. Patch: 520 nm, answer unchanged. | §61.129(a)(4)(i): "not less than 300 nautical miles total distance, with landings at a minimum of three points, one of which is a straight-line distance of at least 250 nautical miles"
cpl.performance.spiral-entry-app | unsupported | The answer rests on a 1,500 ft AGL floor. The cited ACS steep spiral task has no such floor; it is in the AFH. Patch: source, URL and evidence moved to AFH ch10 p3. | ACS CA.V.B.S2 (p44): "Select an altitude sufficient to continue through a series of at least three, 360° turns." AFH ch10 p3: "concludes no lower than 1,500 feet above ground level (AGL)"
cpl.complex.what-is-complex | unsupported | "All three features are needed" overstates: a seaplane is complex without retractable gear. | §61.1(b): "or, in the case of a seaplane, flaps and a controllable pitch propeller"
cpl.privileges.p119-air-tour-aircraft | unsupported | Says 20 seats and 6,000 lb "apply to the other exceptions". The opening words of §119.1(e) cover every item, air tours included, when common carriage is not involved. | §119.1(e): "Except for operations when common carriage is not involved conducted with any airplane or powered-lift having a passenger-seat configuration of 20 seats or more … this part does not apply to—"
cpl.performance.chandelle-rudder-app | unsupported | The explanation says a right roll-out's yaw "partly cancels" the left-turning tendencies. The handbook does not say this. | AFH ch10 p5: "especially when rolling out from a left chandelle due to left adverse yaw and left-turning tendencies, such as P-factor"
cpl.high-altitude.what-is-continuous-flow | unsupported | "Controlled automatically or by the user" is from AC 61-107B p37, not from the cited PHAK page. | PHAK ch7 p38: "Continuous-flow oxygen systems are usually provided for passengers … collects oxygen … during the time when the mask user is exhaling"
cpl.privileges.contrast-radius-seats | ambiguous | The front and back set the 20-seat and 6,000 lb figures against the "other" exceptions, as if air tours were outside that test. | §119.1(e) opening words (as above); (e)(2): "30 seats or fewer and a maximum payload capacity of 7,500 pounds or less"
cpl.complex.app-classify-hp | minor | "Fixed gear" rules out complex only for a landplane. The front now says landplane. | §61.1(b): "in the case of a seaplane, flaps and a controllable pitch propeller"
cpl.privileges.p119-balloon-glider | minor | "Falls under the air tour rules instead" overstates. Airplane sightseeing escapes part 119 only as a §119.1(e)(2) air tour. | §119.1(e)(5): "Sightseeing flights conducted in hot air balloons or gliders"
cpl.privileges.app-own-charter | minor | The reason for D ("turn an air carrier into a private operation") is hard to follow. | §61.133(a)(1)(i): "qualified … with the applicable parts of this chapter that apply to the operation"
cpl.eligibility.complex-taa-training | minor | "No longer demands" is a history claim the paragraph does not make. | §61.129(a)(3)(ii): "a complex airplane, a turbine-powered airplane, or a technically advanced airplane (TAA) … or any combination thereof"
cpl.eligibility.instrument-training | minor | "The other five hours may be in another aircraft" is not in the rule. | §61.129(a)(3)(i): "Five hours of the 10 hours required on instrument training must be in a single engine airplane"
cpl.performance.poa-safety-app | minor | "(or go around)" is not in the cited passages. | AFH ch9 p26: "It is always better to execute a good landing away from the spot than to make a poor landing precisely on or just past the spot."
cpl.accelerated-stalls.accel-dive-app | minor | The front describes a stall warning, but the back names a stall. | AFH ch5 p19: "the airplane can also stall at a higher indicated airspeed when … subject to an acceleration greater than +1G"
cpl.complex.app-horn-descent | minor | The reason for A does not say why a stall is the wrong reading. | AFH ch12 p12: "the horn is linked to the throttle or flap position and/or the airspeed indicator"

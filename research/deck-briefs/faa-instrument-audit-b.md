# faa-instrument audit, part b (topics 6 to 9)

Checked 295 cards: 06 attitude instrument flying (74), 07 navigation systems (64), 08 ATC clearances, departures and communications (98), 09 en route altitudes, airways and holding (59). This deck has no question pool, so all scenario fronts and choices were in scope.

Clearance, departure, en route altitude and holding rules were checked against AIM 4-4, 5-2, 5-3, 5-5 and 14 CFR 91.3, 91.123, 91.175, 91.177, 91.181 and 91.183. They agree, apart from the findings below. Arithmetic checks:
- app-gradient-to-fpm: 120 kt ÷ 60 = 2 NM per minute, and 2 × 200 ft/NM = 400 fpm, which is correct. For the distractors, 180 kt gives 3 NM/min × 200 = 600 fpm and 240 kt gives 4 × 200 = 800 fpm, both correct. The IPH (ch. 1, p. 18) says only that the TPP rate-of-climb table "relates specific climb gradients and typical groundspeeds". The sum is the writer's own, but it is right.
- bank-rule-scenario: 140/10 = 14, plus 7, gives 21°. Correct.
- intercept-scenario: 280 − 250 = 30, doubled to 60, and 280 + 60 gives 340°. The target radial lies to the right, so this is correct.
- app-triple-drift: 5° × 3 = 15° on the opposite side. Correct.
- app-vfr-on-top-altitude: 090° course takes odd thousands + 500 under 91.159, so 5,500 ft. Correct.
- dme-overhead-scenario: 6,000 ft is about 1 NM (6,076 ft). Correct.

id | severity | problem | evidence (source words, with page)
---|---|---|---
ifr.en-route-altitudes-airways-and-holding.app-higher-mea | wrong | choicesExplained says "5 NM before the fix is what an MCA would require". An MCA is a crossing altitude at the fix, not a point 5 NM before it where the climb must start. | IPH ch. 2, PDF p. 40: "An MCA is the lowest altitude at certain fixes at which the aircraft must cross when proceeding in the direction of a higher minimum en route IFR altitude"; 91.177(b): "shall be crossed at or above the applicable MCA"
ifr.attitude-instrument-flying.primary-power-scenario | ambiguous | "While you settle at the new speed" can be read as during the power change. While power is reduced, the power gauge is momentarily primary. The airspeed indicator becomes primary only as the new speed is reached. CE A ("the tachometer shows the power set") hides this. | IFH PDF p. 172: "the manifold pressure gauge is momentarily primary for power … As the airspeed approaches the desired airspeed … becomes the supporting power instrument. The ASI again becomes primary for power."
ifr.en-route-altitudes-airways-and-holding.app-airway-altitude | ambiguous | The front asks yes/no ("Is that a Victor airway?"), but the choices are four route systems. | AIM 5-3-4: "The jet route system consists of jet routes established from 18,000 feet MSL to FL 450 inclusive."
ifr.atc-clearances-departures-and-communications.app-void-time | minor | CE D states that "the old IFR code should not be used for a VFR departure" as if it were void-time guidance. The AIM gives the VFR-code advice only under hold for release. | AIM 5-2-7: "prior to takeoff the pilot should cancel the IFR flight plan and operate the transponder/ADS-B on the appropriate VFR code" (hold-for-release paragraph)
ifr.attitude-instrument-flying.ua-recognition-scenario | unclear | "Airspeed rising past the yellow arc" reads as beyond the never-exceed red line. | IFH PDF p. 188 (nose-low indications: airspeed increasing)
ifr.en-route-altitudes-airways-and-holding.what-is-an-mra | unclear | The back ("set at a fix where it is higher than the MEA") has to be read twice. | IPH ch. 2, PDF p. 35: "When the MRA at the fix is higher than the MEA, an MRA is established for the fix"

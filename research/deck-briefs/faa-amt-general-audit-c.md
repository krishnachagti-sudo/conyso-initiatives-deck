# faa-amt-general audit, part c: topics 6 and 7

Scope: `06-ground-operations.json` (161 cards) and `07-cleaning-corrosion-control-and-finishes.json` (188 cards), 349 cards in all.
Sources: FAA-H-8083-30B (saved text), AC 43.13-1B Chg 1, the Aviation Mechanic ACS, and 14 CFR part 45.
Figures checked: `amtg-avgas-colours.svg`, `amtg-taxi-light-signals.svg`, `amtg-signalman-position.svg` and `amtg-galvanic-series.svg`. Each one matches its source (Figure 1-31, Figure 1-22, the "Taxi Signals" text and Figure 8-6; all 35 metals in the same order), and the credits and licences are correct.
I checked the choicesExplained letters on all 86 scenario cards against their choices. Every wrong option is explained, and none of them explains the key.
The two concepts that rest only on the ACS, fuel additives and parts protections, claim nothing beyond the ACS listing and its order. The patches now say so.

id | severity | problem | evidence (source words, with page)
---|---|---|---
amtg.ground-operations.fuel-spill-extinguisher-scenario | wrong | choicesExplained says CO2 "is used on Class A, D and C fires" | "Carbon dioxide (CO2) extinguishers are used for Class A, B, and C fires … Never use CO2 on Class D fires." (FAA-H-8083-30B, PDF page 26)
amtg.ground-operations.fuel-additives-element | unclear | The back, explanation and example depend on the untaught codes AM.I.F.K10, K9 and K11 | "Subject F. Ground Operations and Servicing … Fuel additives commonly used in the field." (ACS PDF p. 14)
amtg.ground-operations.tool-accountability-element | unclear | The front asks for an element code, and the back and explanation give AM.I.F.K12, K13 and K14 | "Tool and hardware use and accountability. … Material handling. … Parts protections." (ACS PDF p. 14)
amtg.ground-operations.parts-protection-elements | unclear | The front, back and explanation are built on the codes K12 to K15, and the explanation uses the untaught PPE | "Material handling. … Parts protections. … Hazardous materials, Safety Data Sheets (SDS), and PPE." (ACS PDF p. 14)
amtg.ground-operations.aviators-breathing-oxygen | unclear | The back carries the specification number BB-0-925A, which is not needed and is flagged as untaught | "Only oxygen marked “Aviator’s Breathing Oxygen” that meets Federal Specification BB-0-925A, Grade A, or its equivalent" (PDF p. 45)
amtg.ground-operations.tyre-cage-guards | ambiguous | The front says cages are "always" used, yet a later card teaches that an installed tyre needs none, and this card does not mention the exception | "Tire cages are not required when adjusting pressure in tires installed on an aircraft." (PDF p. 23)
amtg.cleaning-corrosion.what-is-pitting-corrosion | unclear | The back says only how destructive pitting is and where it is common, not what it is | "first noticeable as a white or gray powdery deposit … tiny holes or pits can be seen in the surface" (PDF p. 330)

Claims checked beyond the evidence and found supported in the handbook text, so they are not findings:
- CO2 never on Class D.
- Bowline as an anti-slip knot.
- Approaching a helicopter in view of the pilot.
- Carburettor heat left in cold for starting.
- Aircraft brakes applied during towing only on a team member's emergency command.
- Indistinct taxi signals.
- Stretched GPU cable.
- Reverse rotation injecting liquid into the intake pipe.
- Stakes listed under land-plane tie-down.
- Filiform traces never crossing on steel.
- The ban on buffed finishes on anodised surfaces.
- The Deoxylyte step coming last in alodising.
- Window-cleaning sprays crazing plastic.
- Pencil marks listed as a corrosion factor (AC 43.13-1B para. 6-2a(11)).

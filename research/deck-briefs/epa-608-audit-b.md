# epa-608 audit, part B (topics 3–8)

Scope: 295 cards in `decks/epa-608/notes/03-*` to `08-*`, checked against the cached sources in `research/sources/epa-608/` (current 40 CFR Part 82 Subpart F text; EPA test topics and program pages).

Figure: `decks/epa-608/media/evacuation-levels-table.svg` matches §82.156 Table 1 row by row (very high 0/0; high under 200 lb 0/0; high 200 lb or more 4/10; medium under 200 lb 4/10; medium 200 lb or more 4/15; low 25 mm Hg absolute in both columns; column split "before" / "on or after" 15 Nov 1993; isolated components noted). The credit and alt text are correct. No finding.

Leak-repair cards (topic 7 and 8) follow the current §82.157 (20/30/10 percent, 10-day follow-up test, 50 lb or more, class I/II only since 10 April 2020). Where older EPA pages differ, the cards say so and follow the rule. Evacuation cards follow §82.156 Table 1 and (a)(1)–(2).

Primers written from the outline (superheat, hermetic compressor, accumulator, purge unit, centrifugal chiller, evaporator charging valve, ester, alkylbenzene, fractionation, DOT, SCBA, recovery/disposable cylinder, dehydration evacuation) mostly claim nothing beyond it. The exceptions are listed below.

id | severity | problem | evidence (source words, with page)
---|---|---|---
epa608.type-ii.evac-medium-200-scenario | ambiguous | "Is to be opened" with no major repair or disposal. A non-major opening not followed by evacuation to the atmosphere needs only 0 psig, so there are two defensible answers. The explanation also says "after 1993" where the table says "on or after 15 November 1993". | §82.156(a)(1): "if the maintenance, service, or repair is not major … (i) Be evacuated to a pressure no higher than 0 psig before it is opened if it is a medium-, high- or very high-pressure appliance"
epa608.type-ii.evac-medium-under-200-scenario | ambiguous | Same gap: opening for unstated work, so the 0 psig non-major exception competes with the 4-inch answer. | §82.156(a)(1)(i), as above
epa608.type-ii.repair-30-days-scenario | ambiguous | No refrigerant or charge given. §82.157 now covers only 50 lb or more of class I/II refrigerant, so a substitute-only chiller owes no repair. | §82.157(a): "As of April 10, 2020, this section applies only to appliances with a full charge of 50 or more pounds of any class I or class II refrigerant … do not apply to appliances containing solely substitute refrigerants."
epa608.type-ii.plan-scenario-replace | ambiguous | No refrigerant given, so "nothing" is defensible for an HFC chiller. | §82.157(a), as above
epa608.type-iii.chronic-yes-scenario | ambiguous | No refrigerant given. The §82.157(j) report falls within the §82.157(a) scope (class I/II only). | §82.157(a), as above; §82.157(j): "must submit a report to EPA … by March 1 of the subsequent year"
epa608.type-i.what-are-noncondensables | unclear | "Table of contaminant limits" hides what the table is: the levels that equipment sold as recycling equipment must reach. The newcomer learns little. | §82.158(k): "Equipment that is advertised or marketed as 'recycling equipment' must be capable of recycling … to the levels in the following table"
epa608.type-iii.nitrogen-r113-web | unclear | Read alone, the card suggests R-113 is the only case where nitrogen may be used. That clashes with the rule's boiling-point test on the neighbouring cards. | §82.156(a)(1)(ii): "refrigerants with boiling points above 85 degrees Fahrenheit … may use nitrogen to raise the internal pressure … from the level attainable through use of heat to atmospheric pressure"
epa608.substitutes-and-oils.what-is-a-drop-in-replacement | minor | The primer defines "drop-in" ("could go into existing equipment with no other change"), but the outline gives no definition, and the card does not say so. | Test topics, Core: "Absence of "drop-in" replacements"
epa608.type-i.what-is-a-solderless-access-fitting | minor | The primer's gloss ("used to reach the refrigerant during service") goes beyond the outline without saying so. | Test topics, Type 1: "Should remove solderless access fittings at conclusion of service"
epa608.safety-and-shipping.what-is-dot | minor | The primer adds "federal", and its example adds hazardous goods. Neither is in the outline. | Test topics, Core: "ensure former Department of Transportation (DOT) approved"; Shipping: "DOT classification tag"
epa608.type-ii.leak-test-before-charging-scenario | minor | The explanation calls a test-topic item "the rule". | Test topics, Type 2: "Need to leak test before charging or recharging equipment"
epa608.safety-and-shipping.empty-disposable | minor | choicesExplained calls a test-topic item "the rule". | Test topics, Core: "never refill latter"

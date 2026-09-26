# dot-hazmat audit, part C (topics 9–14)

Cards checked: 262 (09 Labelling 69, 10 Placarding 103, 11 Packagings 16, 12 Highway 23, 13 Security plans 39, 14 Incidents 12).

What I checked and found correct (no finding):
- Figures: all 43 label and placard images these topics use match the CFR figures (I compared them with rendered pages, e.g. p. 275) and their alt text. The POISON GAS label and placard really do print INHALATION HAZARD in the 2025 CFR.
- Label colours and classes against Table 1 to § 172.400(b), checked with pdftotext -layout on p. 265–266.
- Table 1 and Table 2 of § 172.504(e) (p. 285), including 6.2 NONE, 5.2 Type B, 6.1 PIH and Yellow-III only.
- Every § 177.848(d) cell a card uses (p. 20–21, read by column position): 2.1 with 2.3 Zone A is X; 3 with 5.1 is O; 3 with Class 8 liquids is blank; 4.2 with Class 8 liquids is X.
- Penalty amounts ($102,348, $238,809, $617): eCFR shows § 107.329 last amended on 2024-12-30, and the Federal Register lists no 2026 adjustment.
- Sections 171.15/16 and 172.400–450 had no 2026 amendments. The 2026 change to § 177.834 touches only paragraph (h), which no card uses.
- The choicesExplained letters on every scenario card match the wrong choices; 11 cards list them out of A–D order.

id | severity | problem | evidence (source words, with page)
---|---|---|---
hazmat.incidents.written-report-scenario | wrong | Two answers are defensible. The front (a small drip from a jerrican, no packing group given) fits the § 171.16(d)(2) small-release exception, so C could be right. CE C's "covers any unintentional release" ignores § 171.16(d). Patched: front made Packing Group II, 5 L from a drum; CE and explanation rewritten | "(2) An unintentional release of a hazardous material when: (i) The material is— … (B) A Packing Group III material in Class or Division 3 … (ii) … a package having a capacity of less than 20 liters" (Part 171, § 171.16(d), PDF p. 43)
hazmat.placarding.empty-bulk-stays-placarded | wrong | Out of date since 3 September 2026. Revised § 172.514(b) adds a fourth exception, empty IBCs, which the back leaves out | "(4) Is an empty IBC transported in accordance with § 173.29(d)." (91 FR 49340, FR Doc. 2026-15820, effective September 3, 2026)
hazmat.placarding.what-is-the-combustible-placard | wrong | The explanation says "A combustible liquid is not Class 3", but the § 173.2 class table groups them under Class 3 | "3 … FLAMMABLE AND COMBUSTIBLE LIQUID … 173.120" (Part 173, § 173.2 table, PDF p. 5–8, layout text)
hazmat.labelling.label-reduced | unsupported | The back drops the rule's condition: labels may be reduced only when the package's size requires it | "(i) If the size of the package so requires, the dimensions of the label and its features may be reduced proportionally" (Part 172, § 172.407(c)(1)(i), PDF p. 271–272)
hazmat.labelling.bulk-labelled | ambiguous | The front ("rather than relying on placards alone") clashes with "unless placarded". The back reads as if "under 18 m³" applied to the tanks, and the portable-tank item sits only in the explanation | "(2) A bulk packaging, other than a cargo tank, portable tank, or tank car, with a volumetric capacity of less than 18 m3 … unless placarded … (3) A portable tank of less than 3785 L" (§ 172.400(a), p. 265)
hazmat.placarding.placard-text-optional | ambiguous | The back leaves out the OXYGEN placard, whose text is required unless the ID number is shown | "Text may be omitted from the OXYGEN placard only if the specific identification number is displayed on the placard." (§ 172.519(b)(3), p. 290)
hazmat.security-plans.elements-scenario | ambiguous | Seals on loaded trailers also protect shipments en route, so D (en route security) is defensible. Front reworded to yard-only measures | "En route security. Measures to address the assessed security risks of shipments … en route" (§ 172.802(a)(3), p. 307)
hazmat.placarding.what-is-table-1 | unclear | "so nothing in Table 1 escapes it" says the opposite of what is meant | "when hazardous materials covered by table 2 of this section are transported by highway or rail, placards are not required" (§ 172.504(c), p. 284)
hazmat.placarding.dangerous-1000-kg-scenario | unclear | Choice B and the back ("must be applied for the Class 3, however the Class 8 is placarded") read as a broken sentence | "the placard specified in table 2 … for that category must be applied" (§ 172.504(b), p. 284)
hazmat.security-plans.list-division-4-3 | unclear | "any quantity requiring placards means any quantity by highway" needs two readings, and Table 1 is not limited to highway | "(9) A quantity of a Division 4.3 material requiring placarding" (§ 172.800(b)(9), p. 306)
hazmat.placarding.poison-placard-packing-group-iii | minor | "the text for Packing Group III" is vague; the rule names the text | "a POISON placard may be modified to display the text ''PG III'' below the mid line" (§ 172.504(f)(10), p. 286)
hazmat.placarding.what-is-the-radioactive-placard | minor | The example calls the CORROSIVE placard's white triangle "coloured" | "black in the lower portion with a white triangle in the upper portion" (§ 172.558, p. 300)
hazmat.incidents.what-is-the-nrc | minor | The example's "after the scene is handled" is not in the rule | "As soon as practical but no later than 12 hours" (§ 171.15(a), p. 42)
hazmat.placarding.empty-non-bulk-residue | minor | Since 3 September 2026 the paragraph is § 172.504(d)(1); the content is unchanged. No patch, because the card cites the 2025 edition correctly | "(d) Exceptions for empty packages. (1) Non-bulk." (91 FR 49339–40)
hazmat.labelling.one-can-by-truck | minor | choicesExplained order A, D, C | —
hazmat.labelling.diesel-drums | minor | choicesExplained order A, D, C | —
hazmat.labelling.label-on-base | minor | choicesExplained order B, C, A | —
hazmat.labelling.label-for-2-2 | minor | choicesExplained order B, C, A | —
hazmat.labelling.label-for-4-2 | minor | choicesExplained order A, C, B | —
hazmat.placarding.table-1-no-weight-scenario | minor | choicesExplained order D, B, C | —
hazmat.packagings.closure-scenario | minor | choicesExplained order B, C, A | —
hazmat.packagings.small-quantity-by-air | minor | choicesExplained order A, C, B | —
hazmat.highway.carrier-shipping-paper-scenario | minor | choicesExplained order D, B, C | —
hazmat.highway.segregation-o-scenario | minor | choicesExplained order D, B, C | —
hazmat.highway.cyanides-scenario | minor | choicesExplained order B, A, D | —

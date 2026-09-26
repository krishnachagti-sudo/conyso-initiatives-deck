# osha-construction audit, part A (topics 1–7)

Cards checked: 313 (topic 1: 65, 2: 38, 3: 29, 4: 67, 5: 41, 6: 32, 7: 41). Sources: the saved govinfo texts in `research/sources/osha-construction/` (tier B, CONTENT-POLICY.md §3). osha.gov was not used.

Checks with no finding:
- All numbers checked against the regulation text match: recordkeeping (7 days, 8 h / 24 h, 30 days, 1 Feb–30 Apr, 5 years, 10 employees); Subpart M (6 ft, 39 in, 42 ± 3 in, 21 in, 200/150 lb, 30 ft, 400 lb / 42 in, 5,000 lb, 6 ft / 3.5 ft / 1,800 lb, 2 ft, 6/10 ft, 50 ft, 3½ in); Subpart L (4x, 1 in, 18/12 in, 14/3/18 in, 6/12 in, 4:1, 2 ft, 10 ft, 38–45 in, the power-line table); Subpart X (19 in, 25 employees, 4 risers/30 in, 36/30 in, 3 ft, ¼ and ⅛, 3.3x, 10–14 in, 24/150/50 ft); Subpart K (120 V 15/20 A, 5 kW, 3/6 months, 50 V, 8 ft); Table A; OSH Act and Part 1903 penalties and days.
- Incorporated standards: no card quotes ANSI, MUTCD or other text incorporated by reference. The aerial-lift (§ 1926.453(a)(2)) and lighting (§ 1926.56(a)) cards quote OSHA's own wording, not ANSI A92.2 or A11.1.
- choicesExplained: on every scenario card in topics 1–7, the letters explained are exactly the three wrong options.
- Topic 5 was 41 cards against a budget of 33 (+24%). Five deletions bring it to 36 (+9%); the concepts move to cards that are kept.

id | severity | problem | evidence (source words, with page)
---|---|---|---
oshac.intro-to-osha.oshrc | unsupported | The back says "three-member ... appointed by the President", but the cited § 651(b)(3), p. 1, only creates the Commission "for carrying out adjudicatory functions". Membership is in § 661, p. 14. The back is rewritten to what p. 1 supports. | "by creating an Occupational Safety and Health Review Commission for carrying out adjudicatory functions under this chapter" (p. 1)
oshac.intro-to-osha.osha | minor | The explanation's claim that OSHA supplies the posted notice is not on the cited page (it is in § 1903.2, p. 2). | § 1903.22(d), p. 17, defines only the CSHO
oshac.intro-to-osha.scn-contest | minor | choicesExplained D says "state plans play no part in federal contests", which the source does not say. | § 659(a), p. 12
oshac.intro-to-osha.penalty-willful | minor | validAsOf names 29 CFR 1926, but the figures come from Part 1903. | "The adjusted civil penalties for penalties proposed after January 15, 2025" (§ 1903.15(d), p. 10)
oshac.intro-to-osha.penalty-serious | minor | Same validAsOf mislabel. | § 1903.15(d)(3), p. 10
oshac.intro-to-osha.penalty-failure-to-correct | minor | Same validAsOf mislabel. | § 1903.15(d)(5), p. 10
oshac.intro-to-osha.willful-vs-repeated | minor | Same validAsOf mislabel. | § 1903.15(d)(2), p. 10
oshac.recordkeeping.small-employer | ambiguous | "Which employers are partially exempt" has two answers: size (§ 1904.1) and listed industries (§ 1904.2). The front is narrowed to size. | "1904.2 Partial exemption for establishments in certain industries" (Part 1904 contents)
oshac.general-duties.competent-vs-qualified | minor | The back suggests that a degree or knowledge alone makes someone qualified. The definition requires them to have demonstrated the ability to solve problems. | "has successfully demonstrated his ability to solve or resolve problems" (§ 1926.32(m), p. 26)
oshac.fall-protection.guardrail-system | unsupported | The fall-protection card cites the Subpart L scaffold definition ("falling off a scaffold platform or walkway", § 1926.450(b), p. 250). Its back drops that limit, so it matches neither definition. It is re-sourced to Subpart M. | "Guardrail system means a barrier erected to prevent employees from falling to lower levels." (§ 1926.500(b), p. 289)
oshac.fall-protection.covers | ambiguous | The front asks for "three requirements", but there are two (secured; colour coded or marked), and the back lists two. | "All covers shall be secured ... (4) All covers shall be color coded or they shall be marked with the word 'HOLE' or 'COVER'" (§ 1926.502(i)(3)–(4), p. 299)
oshac.fall-protection.net-drop-test | unclear | "Dropped from the highest working surface, and from at least 42 inches above it" reads as two drops. The evidence also left out the 42-inch words. | "dropped into the net from the highest walking/working surface ... but not from less than 42 inches (1.1 m) above that level" (§ 1926.502(c)(4)(i), p. 294)
oshac.scaffolds.capacity | minor | Deleted (budget). It duplicates scn-capacity, which keeps oshac.scaffold-4x. | —
oshac.scaffolds.crossbraces | minor | Deleted (budget). It duplicates scn-access, which keeps oshac.scaffold-cross-braces. | —
oshac.scaffolds.power-lines-uninsulated | minor | Deleted (budget). It has the same 10-foot answer and concept as power-lines, whose explanation now covers uninsulated lines. | Table, § 1926.451(f)(6), p. 259
oshac.scaffolds.basket-floor | minor | Deleted (budget). scn-aerial already tests the basket-floor rule and keeps oshac.aerial-lift-harness. | —
oshac.scaffolds.scaffold-vs-subpart-m | minor | Deleted (budget). It duplicates fall-10ft and scn-10ft. oshac.fall-6-feet moves to scn-10ft. | —
oshac.scaffolds.power-lines | minor | The explanation is extended to cover the deleted uninsulated-line card. | "Uninsulated lines voltage ... Less than 50 kv ... 10 feet (3.1 m)" (p. 259)
oshac.scaffolds.scn-10ft | minor | conceptIDs gain oshac.fall-6-feet from the deleted contrast card. | —
oshac.electrical-safety.crane-20ft-trigger | ambiguous | The 20-foot trigger holds only up to 350 kV; above that, 50 feet is substituted. The front is narrowed to lines up to 350 kV. | "For power lines at or below 1000 kV, wherever the distance '20 feet' is specified, the distance '50 feet' must be substituted" (§ 1926.1409(a), p. 683)
oshac.electrical-safety.lines-presumed-energised | minor | It cites § 1926.1407(f), the assembly/disassembly rule, for "crane and derrick work". The same words for crane operations are in § 1926.1408(e). It is re-sourced. | "(e) Power lines presumed energized. The employer must assume that all power lines are energized" (§ 1926.1408(e), p. 682)

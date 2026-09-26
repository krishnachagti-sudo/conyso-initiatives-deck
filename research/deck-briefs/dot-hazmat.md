# Research brief: US DOT hazmat employee training (49 CFR 172.704): general awareness and function-specific topics

Slug: `dot-hazmat`. Concept family: `hazmat`. Researched 26 September 2026.
Everything below comes from documents fetched during this task. Saved copies and extracted
text are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/dot-hazmat/`
(file names are given as `[file]`).

**Main gaps first.**
1. **PHMSA's site could not be read.** Every request to `www.phmsa.dot.gov` returned
   **HTTP 403 "Access Denied"** from the CDN at 04:40 UTC on 26 September 2026. That included
   `/robots.txt`, the home page and the site-policies path. `www.transportation.gov` returned
   the same (`phmsa-robots.txt` holds the error page). Nothing was used to get round the block.
   So **PHMSA's site terms, its guidance pages, its training modules and the Emergency
   Response Guidebook (ERG) were not read.** None of them is a source for this deck (§6).
2. **The 1 October 2025 CFR edition is already out of date in places.** The eCFR Versioner
   API and the Federal Register API show that six 2026 final rules amend sections this deck
   teaches, including 172.704 itself. Those rules were fetched from govinfo and are used as
   sources (§4, Traps).

How sources were read:
- The CFR text is the govinfo annual edition. The running head reads
  "49 CFR Ch. I (10–1–25 Edition)". Each part PDF was extracted with `pdftotext`. `#page=N`
  is the PDF page (form-feed count), not the printed CFR page.
- `scratchpad/hazmat/data.py` holds each concept's search phrase. `build.py` found every
  phrase in the flattened page text and recorded the page. Tables in the PDFs (the
  § 172.101 Table, the precedence table, the placarding tables and the segregation table)
  extract as scrambled text. Where a concept rests on a table, read it in the PDF, not in
  the `.txt`.
- **Label and placard figures are images inside the CFR PDF itself.** `pdfimages -list` finds
  one to four images on most pages from p. 273 to p. 300 of the Part 172 PDF, which covers
  §§ 172.411–172.560. They are part of the US Government work, so the deck may show them
  under the govinfo notice (§2). Where a concept names a `figure`, it is that CFR image.

---

## 1. Exam facts

**There is no national exam, owner or certificate.** Training and testing are duties of
the hazmat employer. The facts that play the part of "exam facts" are these:

| Fact | Quote | Source | Changes often |
|---|---|---|---|
| Who trains | "A hazmat employer shall ensure that each of its hazmat employees is trained in accordance with the requirements prescribed in this subpart." (172.702(a)) | [`cfr172.txt`] p. 304 | no |
| Who provides it | "Training may be provided by the hazmat employer or other public or private sources." (172.702(c)) | p. 304 | no |
| Testing | "A hazmat employer shall ensure that each of its hazmat employees is tested by appropriate means on the training subjects covered in § 172.704." (172.702(d)) | p. 304 | no |
| Components | 172.704(a)(1)–(5): general awareness/familiarization; function-specific; safety; security awareness; in-depth security | pp. 304–305 | yes (see (e) below) |
| Deadline for new staff | "The training is completed within 90 days after employment or a change in job function" (172.704(c)(1)(ii)) | p. 305 | no |
| Security awareness, new staff | "New hazmat employees must receive the security awareness training required by this paragraph within 90 days after employment." | p. 305 | no |
| Recurrence ("validity") | "A hazmat employee must receive the training required by this subpart at least once every three years." (172.704(c)(2)) | p. 305 | no |
| Record | Keep a record "inclusive of the preceding three years … for as long as that employee is employed by that employer as a hazmat employee and for 90 days thereafter"; it includes "Certification that the hazmat employee has been trained and tested" (172.704(d)) | p. 306 | no |
| Exceptions | From 13 February 2026, 172.704(e)(1) reads: "A hazmat employee who manufactures, repairs, modifies, reconditions, or tests packagings, as qualified for use in the transportation of hazardous materials, and who does not perform any other function subject to the requirements of this subchapter, is not subject to the training requirements of paragraphs (a)(3) and (a)(4) of this section." | [`fr-2026-00578.txt`] p. 15; dates p. 1 | **yes** |
| Training penalty | "There is no minimum civil penalty, except for a minimum civil penalty of $617 for violations relating to training." (107.329(a)) | [`cfr107.txt`] p. 25 | **yes** (inflation-adjusted) |

- **No pass mark, question count, time limit, format or retake rule exists in the
  regulation.** The employer sets the test.
- **Changes often:** the annual CFR edition (this one is revised as of 1 October 2025), the
  penalty amounts in 107.329, and PHMSA final rules. The Federal Register API lists seven
  final rules amending Part 172 published between January and August 2026 [`fr-172.json`]. The eCFR versions list shows no change to
  107.329 after 2 October 2025 [`ecfr-versions-107.json`].

---

## 2. Naming

- **Owner's trademark terms:** not read, because PHMSA's and DOT's sites are blocked (§6). No
  trademark claim was found in the fetched sources. "PHMSA" and "DOT" are agency names. The
  regulations are the "Hazardous Materials Regulations (HMR; 49 CFR parts 171 through 180)"
  [`cfr171.txt` pp. 1–2].
- **CONTENT-POLICY.md §4** applies through the "Everyone else" pattern. It is adapted because
  there is no exam mark and no verified trademark statement. Name the requirement only to
  say what the deck covers, in plain text, with no DOT or PHMSA logo, and with our brand
  first. Never say "official", "approved", "certified", "compliant" or "meets 172.704".
  **Never imply that studying the deck is hazmat training under 172.704.** Only a hazmat
  employer can train, test and certify its employees (172.702, 172.704(d)).
- Title pattern: "[Site name] deck for US DOT hazmat employee training topics (49 CFR
  172.704)".
- **Deck notice:**

> This deck covers topics in the hazardous materials training that 49 CFR 172.704 requires
> employers to give their hazmat employees. It is built from the text of the Hazardous
> Materials Regulations (49 CFR parts 171 to 180) and Federal Register final rules, which
> are U.S. Government works. It is independent and is not affiliated with, sponsored,
> endorsed or approved by the U.S. Department of Transportation or the Pipeline and
> Hazardous Materials Safety Administration (PHMSA). Studying it is not hazmat training
> under 49 CFR 172.704. Only a hazmat employer can train, test and certify its hazmat
> employees. It is not legal advice. Always check the current regulation.

- **Public-domain status.** govinfo's notice quotes 17 U.S.C. 105 and adds: "However,
  Government publications may contain copyrighted material which was used with permission
  of the copyright owner" [`govinfo-policies.txt`]. The HMR incorporate third-party
  documents by reference in 171.7, including the ICAO Technical Instructions, the IMDG Code,
  the UN Recommendations, ASTM and OECD test methods and CGA pamphlets. **Cite the CFR rule.
  Never reproduce text or figures from an incorporated document.**

---

## 3. Topics (our labels)

| T | Topic | Regulatory source | Concepts |
|---|---|---|---|
| T1 | Scope, functions and key definitions | 171.1, 171.8 | 37 |
| T2 | Hazmat employee training | 172.700–172.704; 177.816; 107.329; 91 FR 1433 | 28 |
| T3 | Hazard classes and divisions | 173.2, 173.2a, 173.50–173.140, 173.403 | 39 |
| T4 | Packing groups and hazard zones | 171.8, 172.101(f), 173.121, 178.503(a)(3) | 9 |
| T5 | The Hazardous Materials Table | 172.101 and its Appendices A–B; 91 FR 49305 | 23 |
| T6 | Shipping papers | 172.200–172.205; 177.817 | 23 |
| T7 | Emergency response information | 172.600–172.606; 91 FR 49325 | 10 |
| T8 | Package and bulk marking | 172.300–172.338; 178.502–178.503; 91 FR 49332 | 22 |
| T9 | Labelling | 172.400–172.448 (CFR figures) | 26 |
| T10 | Placarding | 172.500–172.560 (CFR figures) | 31 |
| T11 | Packagings and quantity exceptions | 173.4, 173.4a, 173.22, 173.29; 91 FR 49335 | 7 |
| T12 | Highway carriage, loading and segregation | 177.817, 177.834, 177.848 | 10 |
| T13 | Security plans | 172.800–172.802; 91 FR 49329 | 8 |
| T14 | Incident reporting and penalties | 171.15, 171.16, 107.329 | 6 |

Budget: 734 cards (279 concepts, 77 registry terms), with 10% added per topic.

---

## 4. Outline

The only official outline is the regulation. It lists five training components in
172.704(a), administrative duties in 172.702 and 172.704(b)–(e), and the functions in
171.1(b) and (c) that function-specific training must match. They are given in the
regulation's order.

**A. Training components, 172.704(a)** [`cfr172.txt` pp. 304–305]
1. (a)(1) General awareness/familiarization: "familiarity with the requirements of this
   subchapter" and the ability "to recognize and identify hazardous materials consistent
   with the hazard communication standards". `[T1] [T3] [T4] [T5] [T6] [T8] [T9] [T10]`
2. (a)(2) Function-specific: requirements "specifically applicable to the functions the
   employee performs". The ICAO/IMDG alternative is in (a)(2)(ii). `[T2]`, then the topic for
   each function in C and D.
3. (a)(3)(i) Safety: emergency response information required by subpart G. `[T7]`
4. (a)(3)(ii) Safety: measures to protect the employee, "including specific measures the
   hazmat employer has implemented". This is employer-specific, so the deck teaches only the
   regulatory part. `[T2] [T7]`
5. (a)(3)(iii) Safety: "Methods and procedures for avoiding accidents". `[T12]`
6. (a)(4) Security awareness, including how to recognise and respond to threats. `[T2] [T13]`
7. (a)(5) In-depth security training for persons required to have a security plan. `[T2] [T13]`

**B. Training administration** [`cfr172.txt` pp. 304–306; `fr-2026-00578.txt` p. 15]
8. 172.702: employer duty, no function until instructed, providers, testing. `[T2]`
9. 172.704(b): OSHA, EPA and other training counts to the extent it covers (a). `[T2]`
10. 172.704(c): initial training (90 days, direct supervision), recurrent training (three
    years), previous-employer training, and the employer's responsibility. `[T2]`
11. 172.704(d): recordkeeping. `[T2]`
12. 172.704(e): exceptions, as amended from 13 February 2026. `[T2]`

**C. Pre-transportation functions, 171.1(b)(1)–(14)** [`cfr171.txt` p. 2]
13. Determining the hazard class `[T3] [T4]`
14. Selecting a hazardous materials packaging `[T5] [T11]`
15. Filling a packaging, including bulk `[T11]`
16. Securing a closure `[T11]`
17. Marking a package `[T8]`
18. Labelling a package `[T9]`
19. Preparing a shipping paper `[T6]`
20. Providing and maintaining emergency response information `[T7]`
21. Reviewing a shipping paper `[T6]`
22. Importers informing the shipper of the HMR requirements `[T1]`
23. Certifying proper condition for transportation `[T6]`
24. Loading, blocking and bracing in a freight container or transport vehicle `[T12]`
25. Segregating packages from incompatible cargo `[T12]`
26. Selecting, providing or affixing placards `[T10]`

**D. Transportation functions, 171.1(c)(1)–(4)** [`cfr171.txt` pp. 2–3]
27. Movement `[T12]`
28. Loading incidental to movement `[T12]`
29. Unloading incidental to movement `[T12]`
30. Storage incidental to movement. This is the warehouse case: see also 171.1(d) for
    storage that is not subject to the HMR. `[T1]`

Other items taught because the training scope requires them: security plans `[T13]`, and
incident reporting and penalties `[T14]`. The scope is 172.700(b): "knowledge of emergency
response information, self-protection measures and accident prevention methods".

---

## 5. Traps

- **172.704(e)(1) changed on 13 February 2026.** The 10-1-25 text excepts packaging
  employees only from (a)(3) safety training. The new text adds "manufactures" and also
  excepts them from (a)(4) security awareness training (91 FR 1433). The govinfo 2025 PDF
  still shows the old text. `[T2]`
- **Farmer security-plan exception.** The 10-1-25 text of 172.800(c) says "less than
  $500,000". From 3 September 2026 it is "less than $825,000 in 2025 dollars" (91 FR 49329).
  The rule says farmers exempt from the plan are also exempt from in-depth security
  training. `[T13]`
- **ERI may now be electronic.** From 3 September 2026, 172.602(b)(1) reads "Printed legibly
  in English (either in hard copy printed on paper or in electronic format)"
  (91 FR 49325). `[T7]`
- **Reduced limited quantity mark.** From 3 September 2026 a 25 mm mark is allowed on the
  package shipping label. It is not allowed for air, international vessel or radioactive
  shipments, and not on an overpack (91 FR 49332). The standard mark is still 100 mm,
  reducible to 50 mm. `[T8]`
- **The hazardous substances list is moving.** From 2 December 2026 the hazardous substance
  definition refers to 40 CFR 302.4 "as referenced in appendix A to § 172.101"
  (91 FR 49305). Until then, Appendix A lists substances and RQs. Date any RQ card. `[T5]`
- **Empty IBCs.** From 3 September 2026, residue-only IBCs may move without shipping papers,
  placards or UN ID numbers, under conditions adopted from special permit 21478
  (91 FR 49335). The conditions were not read in detail (§6). `[T11]`
- **Five components, not two.** 172.704(a) requires general awareness, function-specific,
  safety, security awareness and, where a security plan applies, in-depth security
  training. `[T2]`
- **The three "90 days" and the two "three years".** Initial training within 90 days, under
  direct supervision until then. Security awareness within 90 days of employment. In-depth
  retraining within 90 days of a revised plan. Recurrent training every three years.
  Records cover the preceding three years and are kept for 90 days after employment ends.
  `[T2]`
- **Packing group numbering runs backwards.** PG I is great danger and PG III is minor.
  Class 2, Class 7 and Division 6.2 have no packing group. Articles outside Class 1 have
  none either. `[T4]`
- **Flammable or combustible.** A flash point of not more than 60 °C is Class 3. Above 60 °C
  and below 93 °C is a combustible liquid, which takes no label (172.101(g)) and has its own
  COMBUSTIBLE placard. `[T3] [T9] [T10]`
- **Division 2.2 threshold.** The regulation says "a gauge pressure of 200 kPa (29.0
  psig/43.8 psia) or greater at 20 °C". Check any other figure against 173.115(b). `[T3]`
- **Table 1 and Table 2.** Table 1 materials are placarded in any quantity. Only Table 2
  gets the under-454 kg (1,001 lb) highway/rail exception, and never for bulk packagings.
  `[T10]`
- **DANGEROUS placard limit.** It may replace separate Table 2 placards, but not for a
  category with 1,000 kg or more loaded at one facility. `[T10]`
- **CLASS 9 placard.** It is not required in domestic transport, but a bulk packaging still
  needs its ID number displayed. `[T10]`
- **ID numbers are never displayed** on RADIOACTIVE, EXPLOSIVES, DANGEROUS or subsidiary
  placards (172.334(a)). `[T8] [T10]`
- **Label 100 mm, placard 250 mm.** Placards made before 1 January 2017 to the earlier rule
  may continue domestically (172.519(c)). The earlier size was not read. `[T9] [T10]`
- **Limited quantities.** They need no shipping paper unless going by air or vessel
  (172.200(b)(3)) and are not placarded (172.500(b)(2)). `[T6] [T10] [T11]`
- **Shipping paper retention.** Two years, or three years for hazardous waste (172.201(e)).
  `[T6]`
- **Poison and toxic.** "Poison" or "poisonous" may be used interchangeably with "toxic"
  only in domestic transportation (172.101(c)(3)). `[T5]`
- **A and W symbols** limit the HMR to air or to vessel, unless the material is a
  hazardous substance or hazardous waste. `[T5]`
- **Warehouse storage.** Storage at the offeror's facility before the carrier takes
  possession, and storage after delivery to the destination, are not subject to the HMR
  (171.1(d)). Storage incidental to movement is. `[T1]`
- **Self-employed drivers** are hazmat employees and hazmat employers (171.8). `[T1]`
- **ORM-D.** A text search of the 10-1-25 parts 171–173 finds no "ORM-D". Do not teach it
  as current. `[T3]`
- **Penalty figures** are inflation-adjusted. The deck should date them ($102,348 maximum,
  $238,809 if death or serious injury results, $617 training minimum, from the 10-1-25
  text). `[T14]`

---

## 6. Languages

The HMR require English for the shipping description (172.201(a)(2)), for markings
(172.304(a)(1)) and for emergency response information (172.602(b)(1)). No official or
openly licensed translation of 49 CFR was looked for or found. Whether PHMSA publishes
translations of the ERG or of its guidance could not be checked, because the site is
blocked.

---

## 7. Not verified

- **PHMSA site terms, robots.txt, guidance, training modules and the ERG.** Each returned 403
  (§ top). They are not used. Before any card cites PHMSA material, someone must read
  PHMSA's terms and check each item for third-party content. transportation.gov's web
  policies also returned 403.
- **Parts 174, 175, 176, 179 and 180 were not fetched.** Modal training in parts 174–176
  (172.700(c)) and the rail, air and vessel rules are not covered. The deck is scoped to
  highway carriage (Part 177) plus rules common to all modes. Add them if the deck must
  cover rail, air or vessel staff.
- **Tables read as scrambled text.** The class 3 packing-group table (173.121), the
  precedence table (173.2a), the placarding tables (172.504(e)) and the segregation table
  (177.848(d)) were read through scrambled `pdftotext` output. Writers must read each cell
  in the PDF before writing a card on it. Individual § 172.101 Table entries were not read.
- **Label and placard colours** are only verified where quoted: FLAMMABLE GAS label red,
  DANGEROUS WHEN WET label blue, CARGO AIRCRAFT ONLY black on orange. Read the others from
  each section.
- **172.313(a) and (b)** (the inhalation hazard marking) were only partly read. Only (b)'s
  POISON embossing and (c)'s vehicle ID rule were confirmed.
- **The full conditions** in the empty-IBC rule (91 FR 49335) and the text of 172.504 and
  172.514 as amended on 3 September 2026. These were not read beyond the summary.
- **Criminal penalties (107.333):** the wording was only partly extracted. There is no card
  on it.
- **Other 2026 rules** found by the Federal Register API but not read: aerosols (91 FR 49301),
  special permits 21379 and 21287, rail reporting (91 FR 49320), battery-powered equipment
  (91 FR 49345), special permits 12412/11646 for Part 177 (91 FR 49349), fireworks
  (91 FR 51098) and energetic materials (91 FR 32889). None of them changes a section
  listed in the concepts, except 177.834 (91 FR 49349), which was not checked.
- **The meaning of "hazmat employee" for warehouse staff** beyond 171.8 and 171.1(d). PHMSA
  interpretation letters were not reachable.

# Research brief: U.S. naturalization civics test, 2025 version (slug `us-civics`)

Researched 2026-09-25. Raw downloads and extracted text are in the scratch folder:
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/us-civics/`
(US Government primer sources are in its `gov/` subfolder).

Every fact below was read in a file fetched during this task. Section 10 lists what could not be checked.

**The official question list, with every accepted answer, is in `research/deck-briefs/us-civics-questions.txt`.**
It holds 128 questions, 20 marked for 65/20, and 410 listed answers, all in USCIS order. It is a US Government work (see §2).

**How the sources were read.** uscis.gov refuses direct downloads from this environment: curl gets an Akamai "Access Denied" (HTTP 403). So:
- **USCIS PDFs** were fetched with the WebFetch tool, which saved the raw PDF bytes. They were then extracted with `pdftotext` and grepped. These are raw reads.
- **USCIS HTML pages** (Policy Manual, 2025 Civics Test page, Check for Test Updates, website policies, Study for the Test) could only be read through WebFetch's model extraction. Facts from them are marked **(WebFetch)**. Every such fact that matters is also confirmed by a raw source: the Federal Register notice, the Policy Alert PDF, the 128-question PDF, or eCFR. Where no raw source confirms it, §10 says so.
- **The 2025 study guide** (M-1175, 40.8 MB) is too big for WebFetch. It was downloaded from a third-party mirror (printme1.com) and is **not** hash-checked against the USCIS file. Its PDF metadata matches the USCIS series: InDesign 20.5, created 2025-09-26, the same date as the 128-question PDF, and the cover reads "One Nation, One People: The USCIS 2025 Civics Test Study Guide (M-1175)". Cards must cite the USCIS URL. Before release, someone should confirm the page numbers against the USCIS copy (§10).
- **Other sources:** archives.gov, usa.gov, govinfo.gov, federalregister.gov, ecfr.gov, uscode.house.gov, history.state.gov, senate.gov, nps.gov, loc.gov and bensguide.gpo.gov were downloaded raw with curl.

**Key files in scratch:**
- **The question list:** `q128.pdf`, `.txt` and `.json` (the parsed list), plus `parse.py` and `write_q.py`.
- **Study guide:** `studyguide2025_mirror.pdf`, `sg.txt`, and one text file per page in `sgpages/`.
- **The rules:**
  - `fr_2025-18050.pdf` / `.txt`: Federal Register notice 90 FR 45047.
  - `policyalert_20251020.pdf` / `.txt`: Policy Alert PA-2025-24.
  - `ecfr_8_312.*` and `ecfr_8_335.*`: 8 CFR parts 312 and 335.
  - `usc8_1423.*`: INA 312.
  - `usc17_105.*`: 17 USC 105.
- **The 2008 list:** `q100_2008.pdf` / `.txt` (rev. 01/19).
- **`gov/`:**
  - Constitution, Declaration, Bill of Rights and Amendments 11–27 transcripts (NARA);
  - Ben's Guide glossary (GPO);
  - USA.gov branches, how laws are made, and government copyright;
  - NARA Electoral College and milestone documents;
  - Senate equal representation;
  - LOC Federalist Papers guide;
  - history.state.gov milestones;
  - 8 CFR 337.1 (the oath);
  - US Code: 4 USC 1, 2 and 4; 5 USC 6103; 36 USC 301 and 302; 50 USC 3802; 8 USC 1101;
  - NPS Civics 101 and disclaimer; NARA copyright notice.
- `concepts.py`: generates the concept inventory (§4) and the term registry (§8b).

---

## 1. Exam facts

| Fact | Value | Exact source words | Source | Changes often? |
|---|---|---|---|---|
| Owner / who tests | USCIS (DHS). An officer gives the test during the naturalization interview. | "The civics test is an oral test and the USCIS officer will ask you to answer up to 20 out of the 128 civics test questions." | M-1778 p.1, https://www.uscis.gov/sites/default/files/document/questions-and-answers/2025-Civics-Test-128-Questions-and-Answers.pdf | No |
| Legal basis | INA 312(a)(2), 8 USC 1423 | "(2) a knowledge and understanding of the fundamentals of the history, and of the principles and form of government, of the United States." | https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1423&num=0&edition=prelim | No |
| Current version | The "2025 Naturalization Civics Test". It re-implements the 2020 test, with one change to how it is administered. | "USCIS is reimplementing the 2020 Naturalization Civics Test, which was originally announced on November 13, 2020, with some modifications (henceforth '2025 Naturalization Civics Test')." | 90 FR 45047 (18 Sep 2025), https://www.govinfo.gov/content/pkg/FR-2025-09-18/pdf/2025-18050.pdf | Yes: 2008 → 2020 → 2008 (2021) → 2025 |
| Who takes which version, from when | The filing date of the N-400 decides it. Filed on or after **20 October 2025**: the 2025 test. Filed before then: the 2008 test. | "USCIS will administer the 2025 Naturalization Civics Test to aliens who file their naturalization applications on or after October 20, 2025." (90 FR 45047, DATES). "1. Aliens who have already filed a naturalization application, or who file a naturalization application less than 30 days after this notice is published in the Federal Register, will take the 2008 Naturalization Civics Test; 2. Aliens who file a naturalization application 30 days or more after this notice is published … will take the 2025 Naturalization Civics Test" (90 FR 45050). Policy Manual (WebFetch): "Aliens who filed a naturalization application before October 20, 2025, must take the 2008 Naturalization Civics Test." | 90 FR 45047/45050; PA-2025-24 p.2, https://www.uscis.gov/sites/default/files/document/policy-manual-updates/20251020-CivicsTest.pdf ; Policy Manual Vol. 12 Part E Ch. 2, https://www.uscis.gov/policy-manual/volume-12-part-e-chapter-2 | Yes |
| Question bank | 128 questions. The same bank as the 2020 test. | "Increases the general bank of civics test questions to 128 (from 100)" (PA-2025-24 p.2). "USCIS will resume administering 20-question tests using the same bank of 128 questions and answers that it used for the 2020 Naturalization Civics Test." (90 FR 45050) | PA-2025-24; 90 FR 45050 | With each version |
| Questions asked | Up to 20, chosen at random by a USCIS system | "the number of test questions for the exam to 20 (from 10)" (PA-2025-24). "…from which 20 test questions will be randomly selected for each individual test" (90 FR 45050). Policy Manual (WebFetch): "The 2025 Naturalization Civics Test contains a bank of 128 questions from which a USCIS system randomly selects the test questions, and an officer administers the test orally." | PA-2025-24 p.2; 90 FR 45050 | With each version |
| Pass mark | 12 correct out of 20 (60%) | "You must answer at least 12 questions correctly to pass the 2025 version of the civics test." (M-1778 p.1). "Retains the 60 percent passing score" (PA-2025-24 p.3) | M-1778; PA-2025-24 | Rarely |
| Stopping rule | The officer stops at 12 correct or 9 wrong. This is the only change from the 2020 test. | "officers stop the test when the alien correctly answers the minimum number of 12 questions required to pass the test, or answers nine questions incorrectly. This is the only modification in the administration of the test as compared to the 2020 Naturalization Civics Test." | PA-2025-24 p.2–3; 90 FR 45050 | Rarely |
| Format | Oral: the officer asks and the applicant answers aloud. Given in English, with exceptions (§9). | "The examination of an applicant's knowledge of the history and form of government of the United States must be given orally in English by a designated immigration officer, except: …" | 8 CFR 312.2(c)(1), https://www.ecfr.gov/current/title-8/chapter-I/subchapter-C/part-312 (eCFR, title 8 up to date as of 2026-09-23) | No |
| Accepted answers | The answers in the list. USCIS knows others may be correct but encourages the listed ones. | "Although USCIS is aware that there may be additional correct answers to the civics questions, applicants are encouraged to respond to the questions using the answers provided below." | M-1778 p.1 | With each version |
| Volatile answers | Officials' names change. Answer with the person serving at the interview. | "On the civics test, some answers may change because of elections or appointments. Visit uscis.gov/citizenship/testupdates … You must answer the question with the name of the official serving at the time of your naturalization interview." | M-1778 p.1 | **Yes** |
| 65/20 special consideration | Age 65 or older and 20+ years as an LPR, both at filing. 10 questions from the 20 asterisked ones; 6 correct to pass; any language. | "…you may study just the 20 questions that have been marked with an asterisk (*) … You may also take the civics test in the language of your choice. The USCIS officer will ask you to answer 10 out of the 20 civics test questions with an asterisk. You must answer at least 6 out of 10 questions (or 60%) correctly to pass" (M-1778 p.1). Policy Manual (WebFetch): "The age and time requirements must be met at the time of filing the naturalization application." | M-1778 p.1; INA 312(b)(3); PA-2025-24 p.3 | Rarely |
| 65/20 under either version | The 10-of-20 format applies whichever version the applicant takes. The question bank follows the filing date. | "…USCIS will continue to administer a test with 10 questions from a specially selected bank of 20 test questions from either the 2008 or 2025 Naturalization Civics Test. … Regardless of their filing date, these aliens will only need to answer six questions correctly to achieve a passing score." | 90 FR 45050 | Rarely |
| Retakes | Two chances per application. A failed first test is followed by a second test within 90 days. The Policy Manual says 60 to 90 days. | "An applicant for naturalization who fails the English literacy or history and government test at the first examination will be afforded a second opportunity to pass the test(s) within 90 days after the first examination during the pendency of the application." (8 CFR 312.5(a)). "Aliens have two opportunities to pass the related English and civics tests prior to denial of their application for naturalization." (PA-2025-24 p.1). Policy Manual (WebFetch): "…reschedules the alien to appear for a second examination between 60 and 90 days after the initial examination." A reexamination is not "earlier than 60 days after the first examination" (8 CFR 335.3(b)). | 8 CFR 312.5, 335.3(b); PA-2025-24 | Rarely |
| Time limit | **Not published** in any source read (§10) | — | — | — |
| Validity | Not applicable: the test is part of one naturalization application. No source states any carry-over (§10). | — | — | — |
| The 2008 test (still given to applicants who filed before 20 Oct 2025) | 100-question bank. Up to 10 asked; 6 correct to pass. The officer stops at 6 correct or 5 wrong. | 2008 list header: "the USCIS Officer will ask the applicant up to 10 of the 100 civics questions. An applicant must answer 6 out of 10 questions correctly to pass". Policy Manual (WebFetch): "The officer stops the test once the alien correctly answers the minimum number of six questions required to pass the test, or answers five questions incorrectly." | 100q.pdf (rev. 01/19), https://www.uscis.gov/sites/default/files/document/questions-and-answers/100q.pdf ; Policy Manual | Phasing out |
| English-test exemptions (context) | Over 50 with 20 years, or over 55 with 15 years, as an LPR: no English test. **Civics is still required.** | "A person who is exempt from the literacy requirement under § 312.1(b) (1) and (2) must still satisfy this requirement." | 8 CFR 312.1(b), 312.2(a) | No |

**Facts that change often:**
- the names on the test-updates page: President, Vice President, Speaker, Chief Justice, and each state's senators, representative and governor;
- which version applies (a policy decision: per 90 FR 45048–45049 it went 2008 → 2020 (from 1 Dec 2020) → back to 2008 (announced 22 Feb 2021) → 2025);
- the Policy Manual text. The WebFetch read gives it as "Current as of September 23, 2026".

---

## 2. Sources

| # | Title | URL | Publisher | Licence, as the source states it | Tier | Use in the deck |
|---|---|---|---|---|---|---|
| S1 | 128 Civics Questions and Answers (2025 version), M-1778 (09/25), 19 pp. | https://www.uscis.gov/sites/default/files/document/questions-and-answers/2025-Civics-Test-128-Questions-and-Answers.pdf | USCIS | No licence line in the PDF. US Government work: 17 USC 105, "Copyright protection under this title is not available for any work of the United States Government" (https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title17-section105). USCIS website policies (WebFetch): "Information presented on this WWW site is considered public information and may be distributed or copied." "Use of appropriate byline/photo/image credit is requested." | **A** (proposed): the real public question bank, public domain as a US Government work. See the note below the table. | Real questions and accepted answers on cards, cited by number ("M-1778 Q38"). The outline (§3). The 65/20 set. |
| S2 | One Nation, One People: The USCIS 2025 Civics Test Study Guide (M-1175), 88 pp. | https://www.uscis.gov/sites/default/files/document/brochures/USCIS-2025-Civics-Test-Study-Guide.pdf (read from the mirror https://www.printme1.com/one-nation-one-people/download) | USCIS | Text: US Government work (as S1). **Images are mixed.** Credits include the Library of Congress, National Archives, NPS, the U.S. Senate, NASA, and "Courtesy of the Associated Press, 1945" (p.75). One photo is "by Ace Armstrong. Courtesy of the Polling Place Photo Project" (p.35), and many photos carry no credit. USCIS's own policy: "Some of the images on USCIS.gov have been licensed for use by USCIS on a non-exclusive and non-transferable basis … They are not in the public domain" (WebFetch). | **B** for the text; images: see §6 | **The main teaching source.** Primers and explanations for every chapter, cited by page. |
| S3 | Notice of Implementation of 2025 Naturalization Civics Test, 90 FR 45047–45050 (18 Sep 2025) | https://www.federalregister.gov/documents/2025/09/18/2025-18050/notice-of-implementation-of-2025-naturalization-civics-test (PDF: https://www.govinfo.gov/content/pkg/FR-2025-09-18/pdf/2025-18050.pdf) | DHS / USCIS, Federal Register | US Government work (17 USC 105) | B | Version history, effective date, stopping rule, 65/20 |
| S4 | Policy Alert PA-2025-24, "Revising Guidance on Naturalization Civics Educational Requirement" (20 Oct 2025), 3 pp. | https://www.uscis.gov/sites/default/files/document/policy-manual-updates/20251020-CivicsTest.pdf | USCIS | As S1 | B | Numbers (128/20/12/9), 60%, 65/20 |
| S5 | USCIS Policy Manual, Vol. 12, Part E, Ch. 2 (English and Civics Testing) | https://www.uscis.gov/policy-manual/volume-12-part-e-chapter-2 | USCIS | As S1 | B | Filing-date rule, stopping rules, language, re-examination. **Read through WebFetch only.** |
| S6 | Check for Test Updates | https://www.uscis.gov/citizenship/find-study-materials-and-resources/check-for-test-updates | USCIS | As S1 | B | The current names for the volatile questions. **Read through WebFetch only**; the page says it was last reviewed/updated 09/18/2025. |
| S7 | 8 CFR Part 312 (educational requirements), §335.3, §337.1 (oath) | https://www.ecfr.gov/current/title-8/chapter-I/subchapter-C/part-312 ; …/section-335.3 ; …/section-337.1 | eCFR / DHS | US Government work (17 USC 105) | B | Oral test in English, exceptions, retake, interpreter, oath text |
| S8 | INA 312 (8 USC 1423); 8 USC 1101(a)(20), (23) | uscode.house.gov (URLs in §4) | Office of the Law Revision Counsel | US Government work | B | Legal requirement; definitions of LPR and naturalization |
| S9 | Constitution, Bill of Rights, Amendments 11–27, and Declaration of Independence transcripts | https://www.archives.gov/founding-docs/constitution-transcript ; …/bill-of-rights-transcript ; …/amendments-11-27 ; …/declaration-transcript | National Archives (NARA) | NARA: "Works of the U.S. Government that have been produced by the National Archives and Records Administration are in the public domain … available for worldwide use and reuse under the terms of the Creative Commons CC0 1.0 Universal license." (https://www.archives.gov/global-pages/privacy.html) The founding documents themselves (1776–1992) are public domain by age. | B | Exact wording of rights and amendments; definitions of terms such as "consent of the governed" |
| S10 | NARA Milestone Documents (Articles of Confederation, Emancipation Proclamation, 14th and 19th Amendments, Interstate Highways Act); NARA "About the Electoral College" | https://www.archives.gov/milestone-documents/… ; https://www.archives.gov/electoral-college/about | NARA | As S9 | B | Primers for extra items |
| S11 | USA.gov: Branches of the U.S. government; How laws are made; Electoral College | https://www.usa.gov/branches-of-government ; https://www.usa.gov/how-laws-are-made ; https://www.usa.gov/electoral-college | GSA (USAGov) | USA.gov "Copyrighted government works" page: "Government work is something created by a U.S. government officer or employee as part of their official duties." "Not everything that appears on a federal government website is a government work." (https://www.usa.gov/government-copyright, updated April 30, 2026) | B (text) | Branches and law-making primers |
| S12 | Ben's Guide to the U.S. Government, glossary | https://bensguide.gpo.gov/glossary | U.S. Government Publishing Office | Footer: "Copyright © 2010 - 2026 GPO". GPO is a federal agency, so 17 USC 105 should apply, but the page shows a copyright line. | **C** until confirmed (§10) | Definitions of republic, democracy, federalism, checks and balances, veto, ratify, citizen. Paraphrase only. |
| S13 | Senate.gov, "Equal State Representation" | https://www.senate.gov/about/origins-foundations/senate-and-constitution/equal-state-representation.htm | U.S. Senate | No licence line found | C (facts only) until checked | Great Compromise primer |
| S14 | Library of Congress, "Federalist Papers: Primary Documents in American History" | https://guides.loc.gov/federalist-papers | LOC | Not checked | C | Federalist Papers primer (85 essays, "Publius") |
| S15 | Office of the Historian milestones (Declaration, Treaty of Paris, War of 1812, Spanish-American War, WWI, Pearl Harbor, Kennan and Containment, Gulf War) | https://history.state.gov/milestones/… | U.S. Department of State | state.gov copyright page returned 403 (not read). US Government work under 17 USC 105. | B (probable; confirm) | Context for history primers |
| S16 | NPS "Civics 101: Principles of American Government" | https://www.nps.gov/articles/000/civics-101-principles-of-american-government.htm | National Park Service | NPS disclaimer: "material created by the National Park Service and presented on this website, unless otherwise indicated, is generally considered in the public domain." Photos on the page credit LOC and NARA. | B | Iroquois (Haudenosaunee) Great Law of Peace note |
| S17 | US Code: 4 USC 1, 2 and 4 (flag, stars, Pledge); 5 USC 6103 (holidays); 36 USC 301 (anthem); 36 USC 302 (motto); 50 USC 3802 (Selective Service) | uscode.house.gov | OLRC | US Government work | B | Symbols and holidays; Selective Service age range |
| S18 | Civics Questions for the Naturalization Test, 100 questions (2008 version), rev. 01/19 | https://www.uscis.gov/sites/default/files/document/questions-and-answers/100q.pdf | USCIS | As S1 | Not for cards | **Do not use for cards.** Used only for the traps in §7. The study page links a newer "V1" file (OoC_100_Questions_2008_Civics_Test_V1.pdf), which was not fetched. |

**Tier note for S1.** CONTENT-POLICY §3 defines tier A as "question pools the body itself releases into the public domain". USCIS publishes the full bank and tells applicants to study it. The Federal Register says the 20 test questions are drawn from it: "the bank of 128 possible civics test questions, from which 20 test questions will be randomly selected" (90 FR 45050). Its public-domain status comes from 17 USC 105, not from an express release statement. The owner should confirm that tier A fits before the deck is built.

**Not used and not to be used:** third-party prep sites. Search results for them made claims that the official list contradicts (see §7).

---

## 3. The exam outline (coverage checklist, in the owner's order)

The outline is the heading structure of M-1778, and it may be copied (US Government work). USCIS publishes no weights. The share of questions is our own count from the parsed list. Every numbered question is a checklist item: the full text of all 128, with answers, is in `us-civics-questions.txt`.

| Section | Subsection | Questions | Count | Of which 65/20 (*) |
|---|---|---|---|---|
| AMERICAN GOVERNMENT | A: Principles of American Government | Q1–15 | 15 | 3 (Q2, Q7, Q12) |
| | B: System of Government | Q16–62 | 47 | 8 (Q20, Q30, Q36, Q38, Q39, Q44, Q52, Q61) |
| | C: Rights and Responsibilities | Q63–72 | 10 | 1 (Q66) |
| AMERICAN HISTORY | A: Colonial Period and Independence | Q73–89 | 17 | 3 (Q74, Q78, Q86) |
| | B: 1800s | Q90–99 | 10 | 1 (Q94) |
| | C: Recent American History and Other Important Historical Information | Q100–118 | 19 | 2 (Q113, Q115) |
| SYMBOLS AND HOLIDAYS | A: Symbols | Q119–124 | 6 | 1 (Q121) |
| | B: Holidays | Q125–128 | 4 | 1 (Q126) |
| **Total** | | | **128** | **20** |

Shares: American Government 72/128 (56%), American History 46/128 (36%), Symbols and Holidays 10/128 (8%).

**Question-by-question checklist.** The full text is in the questions file. Our topic labels (§4) map to them as follows:

- **Topic 2** (Q1–15): form of government; supreme law; what the Constitution does; "We the People"; amendments; Bill of Rights; 27 amendments; the Declaration's importance; the founding document of independence; two ideas; "Life, Liberty…"; economic system; rule of law; documents that influenced the Constitution; why three branches.
- **Topic 3** (Q16–35): three branches; President's branch; who writes laws; two parts of Congress; powers of Congress; 100 senators; six-year term; your senator [volatile]; 435; two-year term; why shorter terms; two per state; why two; your representative [volatile]; Speaker [volatile]; who senators represent; who elects senators; who representatives represent; who elects them; why some states have more.
- **Topic 4** (Q36–49): four years; why two terms (22nd Amendment); President [volatile]; Vice President [volatile]; succession; powers of the President; Commander in Chief; signs bills; vetoes; appoints judges; parts of the executive; what the Cabinet does; Cabinet-level positions; Electoral College.
- **Topic 5** (Q50–57): parts of the judicial branch; what it does; highest court; 9 seats; 5 to decide; life tenure; why life tenure; Chief Justice [volatile].
- **Topic 6** (Q58–62): federal-only powers; state-only powers; 10th Amendment; governor [volatile]; state capital [varies].
- **Topic 7** (Q63–72): voting amendments; citizen-only rights; rights of everyone; Pledge; Oath promises; ways to become a citizen; civic participation; serving the country; federal taxes; Selective Service.
- **Topic 8** (Q73–89): why colonists came; who lived here first; who was enslaved; the war for independence; why independence was declared; who wrote the Declaration; when it was adopted; events of the Revolution; 13 original states (name five); document of 1787; Federalist writers; why they mattered; Franklin; Washington; Jefferson; Madison; Hamilton.
- **Topic 9** (Q90–99): Louisiana 1803; 1800s wars; North–South war; Civil War events; Lincoln; the Emancipation Proclamation; the war that ended slavery; 14th Amendment; when all men could vote; women's rights leaders.
- **Topic 10** (Q100–118): 1900s wars; why the U.S. entered WWI; when women could vote; the Great Depression; when it started; the President in the Depression and WWII; why the U.S. entered WWII; Eisenhower; the Cold War rival; the Cold War concern; Korea; Vietnam; the civil rights movement; MLK; the Gulf War; 9/11; conflicts after 9/11; American Indian tribes; American innovations.
- **Topic 11** (Q119–124): capital; Statue of Liberty; 13 stripes; 50 stars; anthem; E Pluribus Unum.
- **Topic 12** (Q125–128): Independence Day; national holidays (name three); Memorial Day; Veterans Day.

Topic 1 (the test itself) comes from S3–S7, not from the question list.

---

## 4. Concept inventory (teaching order)

- **Registry:** the same data is in `us-civics-terms.json` (§8b). "Teach first" names the prerequisite terms, all of which appear earlier in the list.
- **Core** means it is needed to answer a question in the 2025 list. **Extra** means context, or a term only a longer answer uses.
- **"Questions"** gives the M-1778 question numbers that the concept serves. Every question from 1 to 128 is mapped to at least one concept (checked by script).
- **Study-guide page numbers** are the printed page numbers, which match the PDF page numbers in this file.
- **Definitions** are close paraphrases of the source. Quotation marks mean an exact quote.

### Topic 1. The naturalization civics test itself

| Concept ID | Term | Plain definition (from source) | Source section | Teach first | Volatile | Core/extra | Questions |
|---|---|---|---|---|---|---|---|
| `civics.test.uscis` | United States Citizenship and Immigration Services (USCIS) | The agency that gives the test; it is part of the Department of Homeland Security. | Study guide p.25 | - | no | core | - |
| `civics.test.naturalization` | naturalization | "the conferring of nationality of a state upon a person after birth" (legal definition); in plain words, becoming a citizen after birth. | 8 USC 1101(a)(23); study guide p.36 | United States Citizenship and Immigration Services | no | core | - |
| `civics.test.lpr` | lawful permanent resident (LPR) | A person with the status of "having been lawfully accorded the privilege of residing permanently in the United States as an immigrant". | 8 USC 1101(a)(20) | naturalization | no | core | - |
| `civics.test.n400` | Form N-400 (N-400) | The application for naturalization; the filing date decides which civics test version applies. | Policy Manual 12 E.2 (WebFetch); 90 FR 45047 | naturalization | no | core | - |
| `civics.test.civics` | civics | Knowledge and understanding of U.S. history and of the principles and form of government of the United States. | PA-2025-24 p.1; INA 312(a)(2) | - | no | core | - |
| `civics.test.v2025` | 2025 Naturalization Civics Test | The current version: an oral test of up to 20 questions from a bank of 128; 12 correct passes. | PA-2025-24 p.2; M-1778 p.1 | civics; Form N-400 | yes (version) | core | - |
| `civics.test.v2008` | 2008 Naturalization Civics Test | The previous version: up to 10 questions from a bank of 100; 6 correct passes. Still given to applicants who filed before October 20, 2025. | Policy Manual 12 E.2 (WebFetch); 90 FR 45050 | 2025 Naturalization Civics Test | yes | core | - |
| `civics.test.oral` | oral test | The officer asks the questions aloud and the applicant answers aloud. | M-1778 p.1; 8 CFR 312.2(c)(1) | 2025 Naturalization Civics Test | no | core | - |
| `civics.test.stop` | stopping rule | The officer stops once the applicant has 12 correct answers or 9 wrong answers. | PA-2025-24 p.2-3 | 2025 Naturalization Civics Test | no | core | - |
| `civics.test.6520` | 65/20 special consideration | Applicants aged 65 or older with 20 or more years as a lawful permanent resident study 20 marked questions, are asked 10, need 6, and may test in their language of choice. | M-1778 p.1; INA 312(b)(3) | lawful permanent resident; 2025 Naturalization Civics Test | no | core | - |
| `civics.test.interpreter` | interpreter | A person who translates the examination when the applicant is allowed to take the civics test in another language. | 8 CFR 312.2(c)(1), 312.4 | 65/20 special consideration | no | extra | - |
| `civics.test.english_exempt` | English exemption (50/20 and 55/15) | Applicants over 50 with 20 years, or over 55 with 15 years, as permanent residents need not pass the English test but must still pass civics. | 8 CFR 312.1(b), 312.2(a) | lawful permanent resident | no | extra | - |
| `civics.test.reexam` | re-examination | An applicant who fails gets a second opportunity within 90 days (Policy Manual: 60 to 90 days after the first examination). | 8 CFR 312.5(a); Policy Manual 12 E.2 | oral test | no | core | - |
| `civics.test.n648` | disability exception (N-648) | Applicants with a qualifying medically determinable impairment can be excepted from the civics requirement using Form N-648. | 8 CFR 312.2(b) | civics | no | extra | - |
| `civics.test.updates` | test updates | USCIS page listing the current answers that change with elections or appointments; answer with the official serving at the time of the interview. | M-1778 p.1; Check for Test Updates | oral test | yes | core | - |

### Topic 2. The Constitution and founding principles (Q1-15)

| Concept ID | Term | Plain definition (from source) | Source section | Teach first | Volatile | Core/extra | Questions |
|---|---|---|---|---|---|---|---|
| `civics.const.constitution` | Constitution | The founding document written in 1787 that sets up the government and protects basic rights. | Study guide p.8; Q2, Q3, Q82 | - | no | core | 2,3,82 |
| `civics.const.founders` | Founders | The leaders who met at the Constitutional Convention and wrote the Constitution. | Study guide p.8 | Constitution | no | core | - |
| `civics.const.convention` | Constitutional Convention | The 1787 meeting in Philadelphia where leaders from the 13 states wrote the Constitution. | Study guide p.8, p.52 | Founders | no | core | 86 |
| `civics.const.supreme_law` | supreme law of the land | The Constitution is the highest law: everyone in the United States, and every government, must follow it. | Study guide p.15; Constitution Art. VI | Constitution | no | core | 2 |
| `civics.const.preamble` | Preamble | The beginning of the Constitution; it explains why the Founders wrote it. | Study guide p.9 | Constitution | no | core | - |
| `civics.const.we_the_people` | We the People | The first three words of the Constitution; they express the idea of self-government. | Constitution, Preamble; study guide p.9 | Preamble | no | core | 4 |
| `civics.const.self_government` | self-government | The people govern themselves, by electing representatives, instead of being ruled by a king or queen. | Study guide p.9 | We the People | no | core | 4,10,77 |
| `civics.const.consent` | consent of the governed | The Declaration's idea that governments derive "their just powers from the consent of the governed". | Declaration of Independence, para. 2 | self-government | no | core | 4 |
| `civics.const.popular_sovereignty` | popular sovereignty | Accepted answer to Q4; no U.S. Government definition was found (see section 10). Teach it only as the meaning of "We the People" given by USCIS. | M-1778 Q4 | We the People | no | core | 4 |
| `civics.const.social_contract` | social contract | Accepted answer to Q4 and Q10; no U.S. Government definition was found (see section 10). | M-1778 Q4, Q10 | consent of the governed | no | extra | 4,10 |
| `civics.const.amendment` | amendment | A change or addition to the Constitution. | Study guide p.8, p.15 | Constitution | no | core | 5 |
| `civics.const.amendment_process` | amendment process | An amendment must be ratified by three-fourths of the states (38 of 50). | Constitution Art. V; study guide p.15 | amendment | no | core | 5 |
| `civics.const.ratify` | ratify | To officially approve a document such as a constitution, treaty or amendment. | Ben's Guide glossary; study guide p.16 | amendment process | no | extra | - |
| `civics.const.bill_of_rights` | Bill of Rights | The first 10 amendments to the Constitution, added in 1791; they list basic rights of people living in the United States. | Study guide p.16, p.34 | amendment | no | core | 6 |
| `civics.const.27` | 27 amendments | The Constitution has 27 amendments. | Study guide p.15; Q7 | amendment | no | core | 7 |
| `civics.const.declaration` | Declaration of Independence | The statement, adopted July 4, 1776, that announced independence from Great Britain; written by Thomas Jefferson. | Study guide p.49 | - | no | core | 8,9,11,78,79 |
| `civics.const.natural_rights` | natural rights | Rights people have simply by being human; the Declaration calls them "unalienable Rights", among them "Life, Liberty and the pursuit of Happiness". | Declaration, para. 2 | Declaration of Independence | no | core | 8,10 |
| `civics.const.life_liberty` | Life, Liberty, and the pursuit of Happiness | The three rights the Declaration names as unalienable. | Declaration para. 2; study guide p.49 | natural rights | no | core | 11 |
| `civics.const.equality` | equality | The Declaration's statement "that all men are created equal". | Declaration para. 2; Q8, Q10 | Declaration of Independence | no | core | 8,10 |
| `civics.const.rule_of_law` | rule of law | No one is above the law; everyone, and every government, must follow the law. | Study guide p.15, p.24 | supreme law of the land | no | core | 13 |
| `civics.const.limited_government` | limited government | Accepted answer to Q10; the study guide's related idea is that government must follow the Constitution and the rule of law (p.15). No separate U.S. Government definition was fetched. | M-1778 Q10; study guide p.15 | rule of law | no | extra | 10 |
| `civics.const.republic` | republic | A nation in which power rests with the citizens entitled to vote and their elected representatives, with a President instead of a king. | Ben's Guide glossary | self-government | no | core | 1 |
| `civics.const.rep_democracy` | representative democracy | Government by all eligible people, through the representatives they elect. | Ben's Guide glossary (democracy); study guide p.9 | republic | no | core | 1 |
| `civics.const.federalism` | federalism | Power divided between a central (federal) government and the state governments. | Ben's Guide glossary; study guide p.13-14 | republic | no | core | 1,58,59 |
| `civics.const.capitalism` | capitalism | A market economy in which the government does not control the economy and people are free to start a business and make money. | Study guide p.63 | - | no | core | 12 |
| `civics.const.free_market` | free market economy | Another name USCIS accepts for the U.S. economic system (capitalism). | Study guide p.63; Q12 | capitalism | no | core | 12 |
| `civics.const.articles` | Articles of Confederation | The United States' first constitution, in force from 1781 until the Constitution took effect in 1789. | NARA Milestone Documents | Constitution | no | extra | 14 |
| `civics.const.federalist` | Federalist Papers | 85 essays by Madison, Hamilton and Jay, signed "Publius", that supported passing the Constitution. | Study guide p.33-34, p.52; LOC guide | Constitution | no | core | 14,83,84 |
| `civics.const.antifederalist` | Anti-Federalist Papers | Listed by USCIS as a document that influenced the Constitution; no U.S. Government definition was fetched. | M-1778 Q14 | Federalist Papers | no | extra | 14 |
| `civics.const.virginia_decl` | Virginia Declaration of Rights | Listed by USCIS as a document that influenced the Constitution. | M-1778 Q14 | - | no | extra | 14 |
| `civics.const.fundamental_orders` | Fundamental Orders of Connecticut | Listed by USCIS as a document that influenced the Constitution. | M-1778 Q14 | - | no | extra | 14 |
| `civics.const.mayflower` | Mayflower Compact | Listed by USCIS as a document that influenced the Constitution. | M-1778 Q14 | - | no | extra | 14 |
| `civics.const.iroquois` | Iroquois Great Law of Peace | Listed by USCIS as a document that influenced the Constitution; NPS calls it the constitution of the Haudenosaunee Confederacy. | M-1778 Q14; NPS Civics 101 | - | no | extra | 14 |
| `civics.const.branches` | branches of government | The three parts of the federal government: legislative, executive and judicial. | Study guide p.10 | Constitution | no | core | 15,16 |
| `civics.const.separation` | separation of powers | The Constitution gives each branch different powers so that no one person or group becomes too powerful. | Study guide p.12 | branches of government | no | core | 15 |
| `civics.const.checks` | checks and balances | Limits each branch places on the others (for example the veto, or Senate approval of judges). | Ben's Guide glossary; study guide p.29 | separation of powers | no | core | 15 |
| `civics.const.federal_government` | federal government | The U.S. government, as distinct from state governments. | Study guide p.10 | Constitution | no | core | - |

### Topic 3. Congress: the legislative branch (Q16-35)

| Concept ID | Term | Plain definition (from source) | Source section | Teach first | Volatile | Core/extra | Questions |
|---|---|---|---|---|---|---|---|
| `civics.cong.legislative` | legislative branch | The branch that makes federal laws; also called Congress. | Study guide p.12, p.18 | branches of government | no | core | 16,18 |
| `civics.cong.congress` | Congress | The legislative branch, made of the Senate and the House of Representatives. | Study guide p.10 | legislative branch | no | core | 18,19,20 |
| `civics.cong.senate` | Senate | The part of Congress with 100 senators, two from each state. | Study guide p.20 | Congress | no | core | 19,21,27 |
| `civics.cong.senator` | senator | A member of the Senate; represents all the people of a state; elected for six years. | Study guide p.20 | Senate | no | core | 21,22,23,31,32 |
| `civics.cong.house` | House of Representatives | The part of Congress with 435 voting members; states with more people have more representatives. | Study guide p.19 | Congress | no | core | 19,24,35 |
| `civics.cong.representative` | representative | A member of the House, elected by a congressional district every two years. | Study guide p.19-20 | House of Representatives | no | core | 25,26,29,33,34 |
| `civics.cong.district` | congressional district | An area of a state that elects one representative. | Study guide p.19 | representative | no | core | 33,34 |
| `civics.cong.great_compromise` | Great Compromise | The 1787 agreement, also called the Connecticut Compromise, giving equal representation in the Senate and representation by population in the House. | Senate.gov, Equal State Representation; study guide p.18 | Senate; House of Representatives | no | core | 28 |
| `civics.cong.speaker` | Speaker of the House | The leader of the House of Representatives; next in the line of succession after the Vice President. | Study guide p.20, p.27; test updates | House of Representatives | yes | core | 30 |
| `civics.cong.delegate` | nonvoting delegate | Territories may have a nonvoting Delegate or Resident Commissioner in the House instead of a voting representative. | M-1778 Q29 note | House of Representatives | no | extra | 29 |
| `civics.cong.bill` | bill | A proposal for a new law. | Study guide p.22; USA.gov how laws are made | Congress | no | core | 43,44 |
| `civics.cong.law` | law | A rule that people must follow; a federal law is a rule that everyone in the United States must follow. | Study guide p.22 | bill | no | core | 18,20 |
| `civics.cong.majority` | majority | More than half of those voting. | Study guide p.22, p.31 | bill | no | core | 54 |
| `civics.cong.budget` | federal budget | Making the federal budget is one power of Congress (USCIS answer). | M-1778 Q20; USA.gov branches ("Surveying the budget") | Congress | no | extra | 20 |
| `civics.cong.declare_war` | declare war | The Constitution gives Congress the power "To declare War". | Constitution Art. I, sec. 8; study guide p.13, p.64 | Congress | no | core | 20,58 |

### Topic 4. The President and the executive branch (Q36-49)

| Concept ID | Term | Plain definition (from source) | Source section | Teach first | Volatile | Core/extra | Questions |
|---|---|---|---|---|---|---|---|
| `civics.exec.executive` | executive branch | The branch that enforces federal laws; the President is in charge of it. | Study guide p.12, p.24 | branches of government | no | core | 17,46 |
| `civics.exec.president` | President | The head of the executive branch; elected for four years and can be elected only twice. | Study guide p.24, p.26 | executive branch | yes (name) | core | 36,37,38 |
| `civics.exec.22nd` | 22nd Amendment | "No person shall be elected to the office of the President more than twice"; added 1951. | Amendment XXII; study guide p.64 | President; amendment | no | core | 37 |
| `civics.exec.vp` | Vice President | Works for the President; is President of the Senate; becomes President if the President can no longer serve. | Study guide p.27 | President | yes (name) | core | 39,40 |
| `civics.exec.succession` | line of succession | The order of who becomes President: President, then Vice President, then Speaker of the House. | Study guide p.27 | Vice President; Speaker of the House | no | core | 40 |
| `civics.exec.sign` | sign a bill | When the President agrees with a bill passed by both houses, the President signs it into law. | Study guide p.22 | bill; President | no | core | 41,43 |
| `civics.exec.veto` | veto | The President refuses to sign a bill; it does not become law unless Congress overrides the veto. | Study guide p.22; Ben's Guide (two-thirds override) | sign a bill | no | core | 41,44 |
| `civics.exec.cinc` | Commander in Chief | The President is in charge of everyone serving in the U.S. military (Armed Forces). | Study guide p.26; Constitution Art. II sec. 2 | President | no | core | 41,42 |
| `civics.exec.diplomat` | chief diplomat | USCIS answer: one power of the President. (A diplomat represents the United States in other countries, study guide p.50.) | M-1778 Q41; study guide p.50 | President | no | extra | 41 |
| `civics.exec.judges` | federal judge | A judge on the Supreme Court or a lower federal court; nominated by the President and approved by the Senate. | Study guide p.29 | President; Senate | no | core | 41,45 |
| `civics.exec.cabinet` | Cabinet | A group of advisors; the President's Cabinet advises the President. | Study guide p.11, p.25 | President | no | core | 46,47 |
| `civics.exec.cabinet_positions` | Cabinet-level positions | The leaders of the executive departments (mostly called Secretaries) plus other officials the President chooses; USCIS lists 22. | Study guide p.25; M-1778 Q48 | Cabinet | no | core | 48 |
| `civics.exec.ag` | Attorney General | The leader of the Department of Justice (not called a Secretary). | Study guide p.25 | Cabinet-level positions | no | extra | 48 |
| `civics.exec.departments` | executive departments and agencies | Parts of the executive branch that help the President enforce laws, protect the country and serve the people. | Study guide p.24 | executive branch | no | core | 46 |
| `civics.exec.electoral_college` | Electoral College | The process that elects the President; a compromise between election by Congress and election by popular vote. | NARA Electoral College; M-1778 Q49 | President | no | core | 49 |
| `civics.exec.party` | political party | An organisation that nominates candidates; the two major parties are the Democratic Party and the Republican Party. | Study guide p.26 | President | no | extra | - |

### Topic 5. The courts: the judicial branch (Q50-57)

| Concept ID | Term | Plain definition (from source) | Source section | Teach first | Volatile | Core/extra | Questions |
|---|---|---|---|---|---|---|---|
| `civics.court.judicial` | judicial branch | The branch that reviews laws; it is the Supreme Court and the other federal courts. | Study guide p.12, p.29 | branches of government | no | core | 50,51 |
| `civics.court.supreme` | Supreme Court | The highest court in the United States; its decisions are final. | Study guide p.29, p.31 | judicial branch | no | core | 50,52 |
| `civics.court.lower` | lower federal courts | The federal courts below the Supreme Court: courts of appeals (13 circuits) and district courts (94 districts). | Study guide p.29-30 | Supreme Court | no | extra | 50 |
| `civics.court.justice` | justice | Another word for a judge on the Supreme Court; there are nine. | Study guide p.31 | Supreme Court | no | core | 53,54 |
| `civics.court.life` | lifetime appointment | Federal judges "shall hold their Offices during good Behaviour": they serve for life or until they retire. | Constitution Art. III sec. 1; study guide p.29 | federal judge | no | core | 55,56 |
| `civics.court.independence` | judicial independence | The Founders did not want judges to decide cases based on politics or elections; so judges are not elected. | Study guide p.29 | lifetime appointment | no | core | 56 |
| `civics.court.review` | judicial review | Courts can decide whether a law follows the Constitution, but only when a legal case is brought before them. | Study guide p.31 | Supreme Court; supreme law of the land | no | core | 51 |
| `civics.court.chief` | Chief Justice of the United States | The justice who leads the Supreme Court. | Study guide p.31; test updates | justice | yes (name) | core | 57 |

### Topic 6. Federal and state powers (Q58-62)

| Concept ID | Term | Plain definition (from source) | Source section | Teach first | Volatile | Core/extra | Questions |
|---|---|---|---|---|---|---|---|
| `civics.fed.federal_powers` | federal powers | Powers the Constitution gives only to the federal government, such as printing money, creating an army, declaring war and making treaties. | Study guide p.13 | federalism | no | core | 58 |
| `civics.fed.treaty` | treaty | An agreement between two or more countries. | Study guide p.13 | federal powers | no | core | 58 |
| `civics.fed.state_powers` | state powers | Powers kept by the states, such as police, fire departments and schooling. | Study guide p.14 | federalism | no | core | 59 |
| `civics.fed.10th` | 10th Amendment | Powers not delegated to the United States nor prohibited to the states "are reserved to the States respectively, or to the people". | Amendment X; study guide p.14 | state powers; Bill of Rights | no | core | 60 |
| `civics.fed.governor` | governor | The person in charge of a state's executive branch. | Study guide p.14 | state powers | yes (name) | core | 61 |
| `civics.fed.state_capital` | state capital | The capital city of a state. | Study guide p.41 | - | varies by state | core | 62 |
| `civics.fed.dc` | Washington, D.C. (D.C.) | The capital of the United States; the District of Columbia is not part of any state and is controlled by the federal government. | Study guide p.41 | - | no | core | 23,61,62,119 |
| `civics.fed.territory` | U.S. territory | An area that is part of the United States but is not a state; there are five. | Study guide p.38 | - | no | extra | 23,29,62 |

### Topic 7. Rights and responsibilities (Q63-72)

| Concept ID | Term | Plain definition (from source) | Source section | Teach first | Volatile | Core/extra | Questions |
|---|---|---|---|---|---|---|---|
| `civics.rights.citizen` | citizen | A native or naturalized member of a nation who owes it allegiance and is entitled to its protection. | Ben's Guide glossary | naturalization | no | core | 64 |
| `civics.rights.first` | First Amendment | Lists five freedoms: speech, religion, assembly, the press, and petitioning the government. | Study guide p.34; Amendment I | Bill of Rights | no | core | 65 |
| `civics.rights.speech` | freedom of speech | The right to say or write what you want without fear of going to jail. | Study guide p.34 | First Amendment | no | core | 65 |
| `civics.rights.religion` | freedom of religion | The right to practise any religion, or no religion. | Study guide p.34 | First Amendment | no | core | 65 |
| `civics.rights.assembly` | freedom of assembly | The right to gather. | Study guide p.34 | First Amendment | no | core | 65 |
| `civics.rights.petition` | freedom to petition the government | The right to write to the government (ask it for a change). | Study guide p.34, p.72 | First Amendment | no | core | 65 |
| `civics.rights.expression` | freedom of expression | USCIS accepts it as a right of everyone (Q65); no separate definition in the study guide. | M-1778 Q65 | freedom of speech | no | extra | 65 |
| `civics.rights.arms` | right to bear arms | The Second Amendment right "of the people to keep and bear Arms". | Amendment II | Bill of Rights | no | core | 65 |
| `civics.rights.15th` | 15th Amendment | The right to vote cannot be denied "on account of race, color, or previous condition of servitude" (1870). | Amendment XV; study guide p.35 | amendment | no | core | 63,98 |
| `civics.rights.19th` | 19th Amendment | The right to vote cannot be denied "on account of sex" (1920). | Amendment XIX; study guide p.35 | amendment | no | core | 63,102 |
| `civics.rights.poll_tax` | poll tax | A tax paid in order to vote; the 24th Amendment bans it in federal elections. | Amendment XXIV | amendment | no | core | 63 |
| `civics.rights.24th` | 24th Amendment | No poll tax (or other tax) can be required to vote in federal elections (1964). | Amendment XXIV; study guide p.35 | poll tax | no | core | 63 |
| `civics.rights.26th` | 26th Amendment | Citizens "eighteen years of age or older" cannot be denied the vote on account of age (1971). | Amendment XXVI; study guide p.35 | amendment | no | core | 63 |
| `civics.rights.citizen_only` | citizen-only rights | Only citizens can vote in federal elections, run for federal office and serve on a jury. | Study guide p.20, p.35; Q64 | citizen | no | core | 64 |
| `civics.rights.jury` | jury | A group of people who decide whether an accused person is innocent or guilty. | Study guide p.34 (Sixth Amendment) | citizen | no | core | 64 |
| `civics.rights.pledge` | Pledge of Allegiance | The pledge of loyalty "to the Flag of the United States of America, and to the Republic for which it stands". | 4 USC 4; study guide p.71 | - | no | core | 66 |
| `civics.rights.oath` | Oath of Allegiance | The oath new citizens take: give up other allegiances, support and defend the Constitution and laws, bear arms or serve when the law requires. | 8 CFR 337.1(a); study guide p.36 | naturalization | no | core | 67 |
| `civics.rights.derive` | derive citizenship | Becoming a citizen through a parent, under conditions set by Congress. | Study guide p.36; Q68 | citizen | no | extra | 68 |
| `civics.rights.14th` | 14th Amendment | "All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens". | Amendment XIV; study guide p.36 | amendment; citizen | no | core | 68,97 |
| `civics.rights.participation` | civic participation | Taking part in democracy, for example voting, joining a party or writing to a newspaper. | Study guide p.34; Q69 | citizen | no | core | 69,70 |
| `civics.rights.tax` | federal income tax | Everyone must pay income taxes; the 16th Amendment lets Congress tax incomes. | Study guide p.35; Amendment XVI | rule of law | no | core | 71 |
| `civics.rights.16th` | 16th Amendment | "The Congress shall have power to lay and collect taxes on incomes". | Amendment XVI | federal income tax | no | extra | 71 |
| `civics.rights.selective_service` | Selective Service | The registration system for a possible military draft; men must register between ages 18 and 26 (USCIS Q72 says "18 through 25"). | 50 USC 3802(a); study guide p.35; Q72 | - | no | core | 72 |
| `civics.rights.draft` | draft | USCIS answer: registering "makes the draft fair, if needed". No separate definition fetched. | M-1778 Q72 | Selective Service | no | extra | 72 |

### Topic 8. Colonial period and independence (Q73-89)

| Concept ID | Term | Plain definition (from source) | Source section | Teach first | Volatile | Core/extra | Questions |
|---|---|---|---|---|---|---|---|
| `civics.hist.colony` | colony | A settlement ruled by a European country; England created 13 colonies in North America. | Study guide p.44, p.46 | - | no | core | 73,121 |
| `civics.hist.colonial_period` | Colonial Period | 1607 (Jamestown) to independence; England created 13 colonies. | Study guide p.44 | colony | no | extra | - |
| `civics.hist.native` | American Indians | The people who lived in the Americas before Europeans arrived; also called Native Americans. | Study guide p.43, p.55 | - | no | core | 74,117 |
| `civics.hist.enslaved` | enslaved person | Someone forced to work with no freedom; millions of Africans were taken to the Americas and sold as slaves. | Study guide p.45 | colony | no | core | 75 |
| `civics.hist.taxation` | taxation without representation | Britain raised colonists' taxes without letting their representatives vote on them. | Study guide p.47-48 | colony | no | core | 77 |
| `civics.hist.revolution` | American Revolution | The war (1775-1783) in which the colonies won independence from Great Britain; also the Revolutionary War. | Study guide p.47 | taxation without representation | no | core | 76,80 |
| `civics.hist.continental_army` | Continental Army | The colonists' army; George Washington was its general. | Study guide p.48; Q86 | American Revolution | no | extra | 86 |
| `civics.hist.yorktown` | Battle of Yorktown | Where the British Army surrendered in 1781; the treaty ending the war came in 1783. | Study guide p.50 | American Revolution | no | extra | 80 |
| `civics.hist.13_states` | 13 original states | The 13 colonies became the 13 original states when the Declaration was adopted. | Study guide p.49 | colony; Declaration of Independence | no | core | 81 |
| `civics.hist.jefferson` | Thomas Jefferson | Wrote the Declaration of Independence; third President. | Study guide p.49; Q87 | Declaration of Independence | no | core | 78,87 |
| `civics.hist.washington` | George Washington | General of the army in the Revolution and first President (1789-1797); the "Father of Our Country". | Study guide p.48, p.53 | American Revolution | no | core | 86 |
| `civics.hist.franklin` | Benjamin Franklin | Founder famous as a diplomat who negotiated the 1783 treaty, and as first Postmaster General. | Study guide p.50; Q85 | - | no | core | 85 |
| `civics.hist.madison` | James Madison | "Father of the Constitution", fourth President, a writer of the Federalist Papers. | M-1778 Q88; study guide p.52 | Federalist Papers | no | core | 83,88 |
| `civics.hist.hamilton` | Alexander Hamilton | First Secretary of the Treasury and a writer of the Federalist Papers. | M-1778 Q89; study guide p.52 | Federalist Papers | no | core | 83,89 |
| `civics.hist.jay` | John Jay | A writer of the Federalist Papers. | Study guide p.33, p.52 | Federalist Papers | no | extra | 83 |
| `civics.hist.publius` | Publius | The name the Federalist Papers' writers signed. | Study guide p.34 | Federalist Papers | no | extra | 83 |

### Topic 9. The 1800s (Q90-99)

| Concept ID | Term | Plain definition (from source) | Source section | Teach first | Volatile | Core/extra | Questions |
|---|---|---|---|---|---|---|---|
| `civics.hist.louisiana` | Louisiana Territory | Land between the Mississippi River and the Rocky Mountains bought from France in 1803. | Study guide p.54 | - | no | core | 87,90 |
| `civics.hist.war1812` | War of 1812 | A war the U.S. fought in the 1800s; the national anthem was written about a battle in it. | Study guide p.56, p.72 | - | no | core | 88,91 |
| `civics.hist.mexican_war` | Mexican-American War | The 1846-1848 war with Mexico over Texas and the Southwest. | Study guide p.56 | - | no | core | 91 |
| `civics.hist.spanish_war` | Spanish-American War | A war the U.S. fought in the 1800s (listed by USCIS). | Study guide p.56; Q91 | - | no | extra | 91 |
| `civics.hist.civil_war` | Civil War | The 1861-1865 war between the North and the South; slavery was one problem that led to it; it ended slavery. | Study guide p.57, p.59, p.61 | enslaved person | no | core | 91,92,93,96 |
| `civics.hist.confederacy` | Confederacy | The 11 Southern states that left the Union called themselves the Confederate States of America. | Study guide p.59 | Civil War | no | core | 95 |
| `civics.hist.union` | the Union | The United States during the Civil War (Lincoln "saved (or preserved) the Union"). | M-1778 Q94; study guide p.59 | Civil War | no | core | 94 |
| `civics.hist.lincoln` | Abraham Lincoln | 16th President (1861-1865); led the U.S. in the Civil War; signed the Emancipation Proclamation; assassinated in 1865. | Study guide p.60 | Civil War | no | core | 93,94 |
| `civics.hist.emancipation` | Emancipation Proclamation | Lincoln's announcement that enslaved people in most Southern (Confederate) states were free. | Study guide p.60; NARA | Abraham Lincoln; Confederacy | no | core | 93,95 |
| `civics.hist.13th` | 13th Amendment | "Neither slavery nor involuntary servitude ... shall exist within the United States" (added December 6, 1865). | Amendment XIII; study guide p.61 | amendment; Civil War | no | core | 96 |
| `civics.hist.reconstruction` | Reconstruction | USCIS answer: all men got the right to vote after the Civil War, during Reconstruction (Q98). No separate definition fetched. | M-1778 Q98 | Civil War | no | extra | 98 |
| `civics.hist.womens_rights` | women's rights movement | The 1800s campaign for women's equal treatment and right to vote; Susan B. Anthony is one leader. | Study guide p.59; Q99 | - | no | core | 99 |
| `civics.hist.anthony` | Susan B. Anthony | Fought against slavery and for women's rights, including the vote. | Study guide p.59 | women's rights movement | no | core | 99 |

### Topic 10. 1900s to today (Q100-118)

| Concept ID | Term | Plain definition (from source) | Source section | Teach first | Volatile | Core/extra | Questions |
|---|---|---|---|---|---|---|---|
| `civics.hist.wwi` | World War I (WWI) | The 1914-1918 war; the U.S. fought 1917-1918; it ended November 11, 1918. | Study guide p.63 | - | no | core | 100,101 |
| `civics.hist.allies` | Allied Powers | The side the U.S. supported in both World Wars (England, France and Russia, plus Italy in WWI). | M-1778 Q101, Q106 | World War I | no | core | 101,106 |
| `civics.hist.central` | Central Powers | Germany, Austria-Hungary, the Ottoman Empire and Bulgaria in World War I. | M-1778 Q101 | World War I | no | extra | 101 |
| `civics.hist.depression` | Great Depression | The worst time for the U.S. economy; banks and businesses closed and many people lost jobs and homes. It started with the stock market crash of 1929. | Study guide p.63; Q103, Q104 | capitalism | no | core | 103,104,105 |
| `civics.hist.fdr` | Franklin Roosevelt | 32nd President (1933-1945), elected four times; President in the Great Depression and World War II. | Study guide p.64 | Great Depression | no | core | 105 |
| `civics.hist.wwii` | World War II (WWII) | The 1939-1945 war; the U.S. fought 1941-1945 after Japan attacked Pearl Harbor on December 7, 1941. | Study guide p.64 | World War I | no | core | 100,105,106 |
| `civics.hist.pearl` | Pearl Harbor | The U.S. naval base in Hawaii that Japan attacked on December 7, 1941. | Study guide p.64 | World War II | no | core | 106 |
| `civics.hist.axis` | Axis Powers | Germany, Italy and Japan in World War II. | M-1778 Q106; study guide p.64 | World War II | no | core | 106 |
| `civics.hist.eisenhower` | Dwight Eisenhower | World War II general; 34th President (1953-1961). | Study guide p.65; Q107 | World War II | no | core | 107 |
| `civics.hist.highways` | Federal-Aid Highway Act of 1956 | The law Eisenhower signed that created the Interstate highway system. | M-1778 Q107; NARA Milestone Documents | Dwight Eisenhower | no | extra | 107 |
| `civics.hist.cold_war` | Cold War | The post-1945 rivalry between the U.S. and the Soviet Union, fought with diplomats, spies and threats rather than battles; it ended in 1991. | Study guide p.65 | World War II | no | core | 108,109 |
| `civics.hist.ussr` | Soviet Union (USSR) | Russia and the countries it controlled; the main U.S. rival in the Cold War. | Study guide p.65 | Cold War | no | core | 108 |
| `civics.hist.communism` | communism | A type of government in which the government plans the economy and controls most resources, usually under one party. | Study guide p.65 | capitalism | no | core | 109,110,111 |
| `civics.hist.korea` | Korean War | A war the U.S. fought in the 1900s, entered to stop the spread of communism. | M-1778 Q100, Q110; study guide p.63 | communism | no | core | 100,110 |
| `civics.hist.vietnam` | Vietnam War | A war the U.S. fought in the 1900s, entered to stop the spread of communism. | M-1778 Q100, Q111 | communism | no | core | 100,111 |
| `civics.hist.civil_rights` | civil rights movement | The movement, begun soon after World War II, to end racial discrimination. | Study guide p.66 | - | no | core | 112 |
| `civics.hist.discrimination` | racial discrimination | Laws and treatment that separated or disadvantaged people because of their race. | Study guide p.66 | - | no | core | 112 |
| `civics.hist.mlk` | Martin Luther King, Jr. | A civil rights leader who organised peaceful protests; gave the "I Have a Dream" speech in 1963. | Study guide p.66, p.72 | civil rights movement | no | core | 113 |
| `civics.hist.gulf` | Persian Gulf War | The war in which the U.S. forced the Iraqi military out of Kuwait. | M-1778 Q114; history.state.gov | - | no | core | 100,114 |
| `civics.hist.sept11` | September 11, 2001 (9/11) | The day terrorists hijacked four planes and attacked the United States; almost 3,000 people died. | Study guide p.67 | - | no | core | 115 |
| `civics.hist.war_on_terror` | War on Terror | U.S. military conflicts after September 11, 2001 (also the wars in Afghanistan and Iraq). | M-1778 Q116 | September 11, 2001 | no | core | 116 |
| `civics.hist.tribe` | American Indian tribe | There are over 500 American Indian tribes in the United States; USCIS lists 25 accepted names. | Study guide p.55; Q117 | American Indians | no | core | 117 |
| `civics.hist.innovation` | American innovation | An invention or achievement from the U.S. (USCIS lists 7, e.g. the light bulb, the airplane, landing on the moon). | M-1778 Q118 | - | no | extra | 118 |

### Topic 11. Symbols (Q119-124)

| Concept ID | Term | Plain definition (from source) | Source section | Teach first | Volatile | Core/extra | Questions |
|---|---|---|---|---|---|---|---|
| `civics.sym.liberty` | Statue of Liberty | A statue France gave the U.S. in 1886, a symbol of freedom; it is in New York Harbor on Liberty Island. | Study guide p.69 | - | no | core | 120 |
| `civics.sym.flag` | American flag | Red, white and blue; 13 stripes for the 13 original colonies and 50 stars, one for each state. | Study guide p.71; 4 USC 1-2 | 13 original states | no | core | 121,122 |
| `civics.sym.anthem` | national anthem | "The Star-Spangled Banner", written by Francis Scott Key about a battle in the War of 1812. | 36 USC 301; study guide p.72 | War of 1812 | no | core | 123 |
| `civics.sym.epluribus` | E Pluribus Unum | "Out of many, one": the Nation's first motto (USCIS). The current national motto is "In God we trust" (36 USC 302). | M-1778 Q124; 36 USC 302 | - | no | core | 124 |

### Topic 12. Holidays (Q125-128)

| Concept ID | Term | Plain definition (from source) | Source section | Teach first | Volatile | Core/extra | Questions |
|---|---|---|---|---|---|---|---|
| `civics.hol.national` | national holiday | A federal holiday, set by a law passed by Congress and signed by the President; there are 11. | Study guide p.72-73; 5 USC 6103 | law | no | core | 126 |
| `civics.hol.independence` | Independence Day | July 4: celebrates the Declaration of Independence, the country's birthday. | Study guide p.74 | Declaration of Independence | no | core | 125 |
| `civics.hol.memorial` | Memorial Day | The last Monday in May: honours those who died in military service. | Study guide p.73 | national holiday | no | core | 127 |
| `civics.hol.veterans` | Veterans Day | November 11: honours people who served in the U.S. military; first called Armistice Day. | Study guide p.75 | national holiday; World War I | no | core | 128 |
| `civics.hol.juneteenth` | Juneteenth | June 19: marks the end of slavery; in 1865 enslaved people in Galveston, Texas, were the last to learn they were free. | Study guide p.61, p.74 | 13th Amendment | no | core | 126 |

---

## 5. Numbers and thresholds

| Figure | Units and conditions | Source line |
|---|---|---|
| 128 | questions in the 2025 bank | PA-2025-24 p.2: "Increases the general bank of civics test questions to 128 (from 100)" |
| 20 | questions asked at most (standard test) | M-1778 p.1: "up to 20 out of the 128" |
| 12 | correct answers needed to pass (standard test) | M-1778 p.1 |
| 9 | wrong answers at which the officer stops (a fail) | PA-2025-24 p.2 |
| 60% | pass rate, the same for 2008, 2020 and 2025 | PA-2025-24 p.3 |
| 20 October 2025 | N-400 filing date from which the 2025 test applies | 90 FR 45047 DATES |
| 30 days | delay after the notice (18 Sep 2025) before the 2025 test applies | 90 FR 45050 |
| 65 years / 20 years | age and years as an LPR for special consideration, both at filing | M-1778 p.1; INA 312(b)(3) ("over sixty-five years of age … at least twenty years") |
| 20 / 10 / 6 | 65/20: asterisked questions / questions asked / correct to pass | M-1778 p.1 |
| 100 / 10 / 6 / 5 | 2008 test: bank / asked / correct to pass / wrong at which the officer stops | 100q.pdf p.1; Policy Manual (WebFetch) |
| 90 days | the second test comes within 90 days of the first | 8 CFR 312.5(a) |
| 60 days | earliest date for a reexamination after the first examination | 8 CFR 335.3(b) |
| 120 days | USCIS decides within 120 days of the initial examination | 8 CFR 335.3(a) |
| 50/20 and 55/15 | age and years as an LPR that exempt from English (not civics) | 8 CFR 312.1(b)(1)–(2) |
| 27 | amendments to the Constitution (Q7*) | M-1778 Q7; study guide p.15 |
| 10 | amendments in the Bill of Rights, added 1791 | study guide p.16, p.34 |
| 3/4 = 38 of 50 | states needed to approve an amendment | study guide p.15; Constitution Art. V ("three fourths of the several States") |
| 9 of 13 | states needed to approve the Constitution | study guide p.16 |
| 1787 | year the Constitution was written (Q82) | M-1778 Q82; study guide p.8 |
| 100 | U.S. senators (Q21) | M-1778 Q21 |
| 2 | senators per state (Q27) | M-1778 Q27 |
| 6 years | senator's term (Q22) | M-1778 Q22 |
| 435 | voting members of the House (Q24) | M-1778 Q24 |
| 2 years | representative's term (Q25) | M-1778 Q25 |
| 25 / 30 | minimum age for the House / the Senate (extra) | study guide p.20 |
| 218 / 51 | votes for a majority in the House / the Senate, "or the majority of those voting and present" (extra) | study guide p.22 |
| 52 / 1 | voting members for California / Wyoming (example; extra) | study guide p.19. **Volatile with each census apportionment** (our inference; not stated in the source). |
| 4 years | presidential term (Q36*) | M-1778 Q36 |
| 2 | the most times a person can be elected President (Q37; 22nd Amendment, 1951) | Amendment XXII; study guide p.64 |
| 22 | Cabinet-level positions listed | M-1778 Q48 (count of listed answers) |
| 9 | Supreme Court seats (Q53) | M-1778 Q53 |
| 5 | justices usually needed to decide a case (Q54) | M-1778 Q54; study guide p.31 |
| 1 / 13 / 94 | Supreme Court / circuits of the courts of appeals / district courts (extra) | study guide p.30 |
| 18 | voting age (Q63, 26th Amendment) | M-1778 Q63; Amendment XXVI |
| 15th (1870), 19th (1920), 24th (1964), 26th (1971) | the four voting amendments and their years | study guide p.35, "Voting Rights Timeline" |
| 18 through 25 | age range for Selective Service in the USCIS question (Q72). The statute says "between the ages of eighteen and twenty-six", and the study guide p.35 says "between the age of 18 and 26". | M-1778 Q72; 50 USC 3802(a) |
| 1607 / 1619 / 1620 | Jamestown / first enslaved Africans at Jamestown / the Pilgrims found Massachusetts (extra) | study guide p.44–46 |
| 1775–1783 | American Revolutionary War; the British surrender at Yorktown was in 1781 | study guide p.47, p.50 |
| July 4, 1776 | Declaration adopted (Q79) | M-1778 Q79 |
| 13 | original states (Q81 asks for five) | M-1778 Q81 |
| 85 | Federalist essays, October 1787 to May 1788 | study guide p.33–34; LOC guide ("eighty-five essays") |
| 1789–1797 | Washington's presidency | study guide p.53 |
| 1803 | Louisiana Territory bought from France (Q90) | M-1778 Q90 |
| 1846–1848 | Mexican-American War | study guide p.56 |
| 1861–1865 | Civil War; Lincoln's presidency | study guide p.59–60 |
| June 19, 1865 / December 6, 1865 | Juneteenth / 13th Amendment added | study guide p.61 |
| 1870 | all men get the vote (Q98, 15th Amendment) | M-1778 Q98 |
| 1920 | all women get the vote (Q102, 19th Amendment) | M-1778 Q102 |
| 1914–1918; U.S. 1917–1918; 11 Nov 1918 | World War I | study guide p.63 |
| 1929 | the stock market crash that started the Great Depression (Q104) | M-1778 Q104 |
| 1933–1945 | Franklin Roosevelt's presidency (elected four times) | study guide p.64 |
| 1939–1945; U.S. 1941–1945; 7 Dec 1941 | World War II; Pearl Harbor | study guide p.64 |
| 1953–1961 | Eisenhower's presidency (34th President) | study guide p.65 |
| 1956 | Federal-Aid Highway Act (Q107) | M-1778 Q107 |
| 1991 | end of the Cold War | study guide p.65 |
| 1964 / 1965 | Civil Rights Act / Voting Rights Act | study guide p.66 |
| September 11, 2001; almost 3,000 dead; 4 planes | the 9/11 attacks | M-1778 Q115; study guide p.67 |
| 500+ | American Indian tribes in the U.S.; USCIS lists 25 names in Q117 | study guide p.55; M-1778 Q117 |
| 1886 | France gave the Statue of Liberty | study guide p.69 |
| 13 / 50 | flag stripes (the original colonies) / stars (the states) | M-1778 Q121–122; 4 USC 1–2 |
| 11 | legal public holidays (Q126 asks for three) | 5 USC 6103(a); M-1778 Q126 |
| Holiday dates | New Year's Day, January 1. MLK Day, third Monday in January. Washington's Birthday, third Monday in February. Memorial Day, last Monday in May. Juneteenth, June 19. Independence Day, July 4. Labor Day, first Monday in September. Columbus Day, second Monday in October. Veterans Day, November 11. Thanksgiving, fourth Thursday in November. Christmas Day, December 25. | 5 USC 6103(a); study guide p.73 |

---

## 6. Visuals

**What is content here:**
- **Maps:** where the 13 original states, D.C. and the territories are; the Louisiana Territory.
- **Structure diagrams:** the branches, the two houses of Congress, the line of succession, and the federal courts.

None of the questions needs an image to be answered. Visuals are aids, not tested content.

**Study-guide figures (S2, printed page = PDF page):**

| Page | Figure | What a card could ask | Licence status |
|---|---|---|---|
| p.10 | "U.S. Government" chart (three branches) and "Two Parts of Congress" | Which branch is Congress? What are the two parts of Congress? | The authorship of the diagrams is not stated. They are probably USCIS-made, like the text, but this is **unconfirmed**. Redraw them rather than copy. |
| p.12 | "3 Branches of Government": Constitution → Legislative (makes), Executive (enforces), Judicial (reviews) federal laws, and the members of each | Which branch enforces laws? | As above: redraw |
| p.16 | Map of the 13 original states with ratification dates | Name five of the 13 original states (Q81) | As above: redraw |
| p.19 | House of Representatives: Wyoming 1 vs California 52 | Why do some states have more representatives? (Q35) | As above: redraw |
| p.21 | Congress comparison (435 vs 100; district vs state; 2 vs 6 years) | Contrast card: senator vs representative | As above: redraw |
| p.27 | "Line of Succession": President → Vice President → Speaker | Q40 | As above: redraw |
| p.30 | "Federal Court System": 1 Supreme Court / 13 circuits / 94 districts | Q50 (extra) | As above: redraw |
| p.35 | "Voting Rights Timeline" sidebar: amendments and years | Q63 | As above: redraw. **Note:** the sidebar says "from Q48 in the text", which is the 2008 numbering (see §7). |
| p.38–41 | Maps: 50 states, D.C. and 5 territories; borders; rivers and mountains; state capitals | Q62 (your state capital), Q119 | Geography (Ch. 6) is **not** in the 2025 question list; it is a remnant of the 2008 test. Optional extra. |
| p.45 | Routes map: Europe and Africa to the Americas | Q75 context | Redraw |
| p.54–56, p.59, p.65 | Louisiana Territory (1803); the U.S. in the 1850s; the Trail of Tears; after the Mexican-American War; the U.S. in 1861; the U.S. and the Soviet Union | Q90, Q91, Q92, Q108 context | Redraw |
| Photos throughout | Credited to LOC, NARA, NPS, the U.S. Senate, NASA, the JFK Library, White House; one to AP (p.75, Iwo Jima); one to the Polling Place Photo Project (p.35); many uncredited | Decorative (CARD-STANDARD rule 15): **do not use** | Mixed. USCIS says some of its images are licensed and "not in the public domain". |

**Other sources:** none of the NARA transcripts, the US Code or the CFR has figures. The 128-question PDF has no images.

**Diagrams we can draw ourselves from sourced facts:**
1. Three branches: who makes, enforces and reviews laws (study guide p.12), with the members of each.
2. Congress side by side: 100/435, state/district, 6/2 years, 30/25 minimum age (p.20–21).
3. Bill to law: the bill passes the House and Senate by majority, then the President signs it or vetoes it, then Congress may override (p.22; Ben's Guide: override "by a two-thirds vote in each House").
4. Line of succession, 3 boxes (p.27).
5. Federal courts pyramid, 1/13/94 (p.30).
6. Voting-rights timeline: 1870 (15th), 1920 (19th), 1964 (24th), 1971 (26th) (p.35).
7. A map of the 13 original states. Draw it from public-domain outline data; do not trace the USCIS map.
8. A timeline of U.S. wars named in Q91 and Q100, with the reasons for entry (Q101, Q106, Q110, Q111, Q114).
9. The 11 legal holidays on a calendar strip (5 USC 6103).
10. Test flow: filing date → 2008 or 2025 version → 20 questions, stopping at 12 right or 9 wrong → second attempt in 60–90 days. With a 65/20 branch: 10 of 20 asterisked questions, 6 to pass, any language.

---

## 7. Confusions and traps

1. **Two versions are live.** Applicants who filed before 20 Oct 2025 still take the 2008 test: 100 questions, 10 asked, 6 to pass, stop at 5 wrong. Everyone filing later takes the 2025 test: 128 questions, 20 asked, 12 to pass, stop at 9 wrong. The two lists **number questions differently**. For example, "What is the name of the President now?" is Q28 in 2008 and Q38 in 2025. The deck must say "2025 version" on every card, and never mix numbering.
2. **2025 = the 2020 bank.** The "2020 version" of the 128 questions (administered 1 Dec 2020 – 30 Apr 2021, 90 FR 45049) still circulates, e.g. M-1778 "(2020 version) (revised Feb. 2021)" cited at 90 FR 45049 n.22. The FR says 2025 uses "the same bank of 128 questions and answers". Whether any answer wording differs between the 2020 PDF and the 09/25 PDF was **not checked** (§10). Build only from M-1778 (09/25).
3. **The stopping rule changed.** In 2020 officers asked all 20 questions. In 2025 they stop at 12 correct or 9 wrong (the "only difference", 90 FR 45050).
4. **Third-party misinformation.** A web search surfaced a claim that a "December 2025 revision added 28 new questions covering the 28th Amendment". The official list (PDF modified 2025-10-14) has 128 questions and answers "Twenty-seven (27)" to Q7. **Ignore prep sites.**
5. **Selective Service ages.** Q72 says "all men age 18 through 25". The statute (50 USC 3802(a)) and study guide p.35 say "between … eighteen and twenty-six". The 2008 answer was "at age eighteen (18)" / "between eighteen (18) and twenty-six (26)". Cards should quote Q72 and explain on the back.
6. **Volatile answers:**
   - Q30 Speaker, Q38 President, Q39 Vice President and Q57 Chief Justice change with elections and appointments. As of the test-updates page (last updated 09/18/2025; WebFetch): Mike Johnson; Donald J. Trump; JD Vance; John Roberts.
   - Q23 (senators), Q29 (representative) and Q61 (governor) vary by state and change with elections.
   - Q62 (state capital) varies by state.
   - D.C. and territory residents have special answers (in the questions file).
   - These need `ValidAsOf` and a re-check before every release.
   - The 2008 list also has "political party of the President now" (2008 Q46: "Republican (Party)" per the updates page). That question is **not** in the 2025 list.
7. **Declaration vs Constitution.** Declaration: 1776, independence, Jefferson, "Life, Liberty…". Constitution: 1787, "We the People", supreme law, sets up the government. Q10 asks for ideas common to both.
8. **"All men" (1870, 15th) vs "all women" (1920, 19th).** Q98 and Q102.
9. **Emancipation Proclamation vs 13th Amendment.** The Proclamation freed slaves "in most Southern states" (study guide p.60). Slavery ended in law with the 13th Amendment (1865, p.61). Q96's answer is "The Civil War", not the amendment.
10. **13 stripes = original colonies; 50 stars = states** (Q121–122). The US Code trap: 4 USC 1 still reads "forty-eight stars", and 4 USC 2 adds a star for each new state. Cite the study guide or 4 USC 2, not 4 USC 1 alone.
11. **Motto.** Q124 calls "E Pluribus Unum" "the Nation's first motto". The current national motto is "In God we trust" (36 USC 302). A contrast card helps.
12. **Memorial Day vs Veterans Day.** Memorial Day honours those "who died in military service" (Q127). Veterans Day honours all who served (Q128), and was first called Armistice Day (p.75).
13. **Three branches.** "Separation of powers" and "checks and balances" are both accepted for Q15, but they are different ideas (study guide p.12; Ben's Guide).
14. **Q48 names a renamed office.** "Secretary of War (Defense)" is the listed answer. The Vice President is listed as a Cabinet-level position.
15. **Study-guide leftovers from 2008:**
    - Chapter 6 (geography: borders, rivers, oceans, territories) is not examinable in 2025.
    - p.35's voting sidebar points to "Q48" (the 2008 numbering; it is Q63 in 2025).
    - p.50 lists Franklin answers ("Oldest member of the Constitutional Convention", "Writer of Poor Richard's Almanac") that are **not** in 2025 Q85.
    - p.55 lists tribes (e.g. "Arawak", "Iroquois", "Inuit") that differ from the 25 names in Q117.
    - p.57 lists "economic reasons" and "states' rights" as "other answer choices" for a question about the Civil War's causes. That question is not in the 2025 list.
    - Card answers must come from M-1778, not from the study guide's sidebars.
16. **Study-guide internal inconsistency:** p.44 says the Colonial Period "lasted from 1607 – 1775", while the chapter header (p.43) says "(1607 – 1776)". Avoid stating an end year.
17. **Senators vs representatives:**
    - senators: 100, 6 years, represent the whole state, elected by citizens of the state;
    - representatives: 435 voting members, 2 years, a district.
    - Why the shorter term: "To more closely follow public opinion" (Q26).
    - Why two senators: "Equal representation (for small states)" / "The Great Compromise" (Q28).
18. **Who becomes President.** If the President cannot serve: the Vice President (Q40). If both cannot: the Speaker (study guide p.27; that is 2008 Q31, not a 2025 question).
19. **Rights of everyone vs citizens only:**
    - Q65 (everyone): expression, speech, assembly, petition, religion, bear arms.
    - Q64 (citizens only): vote in federal elections, run for federal office, serve on a jury.
20. **Wars and reasons.** Korea and Vietnam: "To stop the spread of communism". Gulf War: "To force the Iraqi military from Kuwait". WWI: German attacks on U.S. ships, and support for the Allied Powers. WWII: Pearl Harbor, support for the Allies, opposition to the Axis. Contrast cards help here.

---

## 8. Naming

- **Owner:** U.S. Citizenship and Immigration Services, a federal agency. "Naturalization civics test" and "civics test" are descriptive programme names, not marks. No USCIS trademark or naming guidance was found. The USCIS website-policies page (WebFetch) covers reuse and licensed images only.
- **Federal rule on endorsement and logos (USA.gov, fetched raw):** "You cannot use government materials in a way that implies endorsement by a government agency, official, or employee." And: "You also cannot use federal government trademarks or federal government agency logos without permission." (https://www.usa.gov/government-copyright, last updated April 30, 2026)
- **How CONTENT-POLICY §4 applies:**
  - plain text only; no USCIS seal or DHS logo; never "official" or "USCIS-approved";
  - our brand leads, e.g. "[Site name] deck for the U.S. naturalization civics test (2025 version)";
  - a URL path such as `/decks/us-citizenship/civics-2025/` is fine.
- **The notice.** The "Everyone else" row does not fit, because there is no trademark to acknowledge. Suggested footer, for review: "This deck is independent and is not affiliated with, sponsored, endorsed or approved by U.S. Citizenship and Immigration Services (USCIS) or any U.S. government agency. The civics questions and answers are from USCIS publication M-1778 (09/25), a U.S. Government work."
- **Not legal advice; accuracy.** The deck teaches the civics test only. It says nothing about eligibility, fees or legal advice on naturalization. Point to uscis.gov for those. Naturalization carries consequences, so a qualified reviewer should check the §1 facts (CARD-STANDARD §6 step 6 makes expert review mandatory for legal content).

## 8b. Term registry

Written to `research/deck-briefs/us-civics-terms.json`:
- 184 entries, one per concept in §4, in teaching order;
- fields `term`, `abbr`, `topic` (1–12, as in §4), `concept` (IDs `civics.<area>.<name>`) and `source` (the URL of the defining passage; study-guide URLs carry `#page=N`).

The primary sources that define basic terms are saved in the scratch folder, so writers never need Wikipedia:
- the study guide (text and per-page files);
- the NARA transcripts;
- the Ben's Guide glossary;
- 8 USC 1101 and the US Code sections;
- USA.gov and Senate pages;
- history.state.gov milestones.

**Four registry terms have no U.S. Government definition in anything fetched:** "popular sovereignty", "social contract", "limited government" and "Anti-Federalist Papers". The same goes for the minor Q14 documents, which have no primer source beyond their names. See §10. For these, writers may teach only what USCIS itself says (the answer in context) and what the Declaration and Preamble say, or the missing definitions must be researched first.

## 8c. Card budget

**The method, as BRIEF §8c asks:**
- **Primers:** one per term in §4, including extras (tagged `priority::extra`).
- **Facts:**
  - one per question: every question gets its own card, because the pool is public (tier A);
  - plus one per complete-set member where the question asks for more than one item or the set is a fixed list: Q10 (6), Q48 (22, extra), Q63 (4), Q65 (6), Q67 (6), Q69 (10), Q81 (13), Q126 (11);
  - plus number facts from §5 that no question states.
- **Applications:** one per core concept.
- **Contrasts:** from §7.

There are no official weights. Question share is reflected through the per-question fact cards.

| Topic | Terms (primers) | Questions | Set-member facts | Extra number facts | Application (core concepts) | Contrast | **Target** |
|---|---|---|---|---|---|---|---|
| 1 The test itself | 15 | 0 | 0 | 12 | 12 | 2 (2008 vs 2025; standard vs 65/20) | **41** |
| 2 Constitution and principles | 37 | 15 | 6 | 3 (38 states; 9 of 13; 1791) | 28 | 2 (Declaration vs Constitution; separation vs checks) | **91** |
| 3 Congress | 15 | 20 | 0 | 3 (218/51; ages 25/30; CA/WY) | 13 | 1 (senator vs representative) | **52** |
| 4 Executive | 16 | 14 | 22 (Q48, extra) | 1 (22nd Amendment 1951) | 13 | 1 (sign vs veto) | **67** |
| 5 Courts | 8 | 8 | 0 | 1 (1/13/94) | 7 | 1 (Supreme vs lower courts) | **25** |
| 6 Federal and state powers | 8 | 5 | 0 | 0 | 7 | 1 (federal vs state powers) | **21** |
| 7 Rights and responsibilities | 24 | 10 | 26 (Q63, 65, 67, 69) | 5 (amendment years; SSS 18–26 statute) | 20 | 2 (Pledge vs Oath; everyone vs citizens only) | **87** |
| 8 Colonial period and independence | 16 | 17 | 13 (Q81) | 2 (1775–1783; 1781) | 11 | 0 | **59** |
| 9 1800s | 13 | 10 | 0 | 2 (1846–48; Dec 1865) | 11 | 1 (Emancipation vs 13th) | **37** |
| 10 1900s to today | 23 | 19 | 0 | 4 (1917; 1941; 1991; 1964/65) | 20 | 2 (Allied vs Axis/Central; reasons for each war) | **68** |
| 11 Symbols | 4 | 6 | 0 | 1 (1886) | 4 | 1 (first motto vs national motto) | **16** |
| 12 Holidays | 5 | 4 | 11 (Q126) | 0 | 5 | 1 (Memorial vs Veterans Day) | **26** |
| **Total** | **184** | **128** | **78** | **34** | **151** | **15** | **590** |

- **Core subset:** about 530 cards. That drops the 33 extra primers, the 22 Q48 members, and the application cards of extra concepts.
- **Application share:** about 26%, a little under CARD-STANDARD's "about a third" target. Writers can convert some question cards into scenario form, e.g. "A bill passed both houses; the President refuses to sign. What is this called?"
- **Minimum for 65/20 learners:** the 20 asterisked question cards plus their primers. Tag them `set::65-20`.

## 9. Languages

- **The standard test is in English:** "must be given orally in English by a designated immigration officer" (8 CFR 312.2(c)(1)).
- **Native-language exceptions:**
  - applicants exempt from English (50/20, 55/15) may take civics "in the applicant's native language with the assistance of an interpreter … but only if the applicant's command of spoken English is insufficient" (8 CFR 312.2(c)(1)(i));
  - an interpreter may also be used for "technical or complex issues" (312.2(c)(1)(ii)).
- **65/20:** "You may also take the civics test in the language of your choice" (M-1778 p.1). Policy Manual (WebFetch): "The alien may take the civics test in his or her language of choice with the use of an interpreter."
- **Official translations.** The USCIS Study for the Test page (WebFetch) lists translations **only for the 2008 list**: Arabic (`/sites/default/files/document/questions-and-answers/100q_Arabic.pdf`) and Haitian Creole (`/sites/default/files/document/guides/100%20Questions%20Haitian%20Creole_FINAL.pdf`). No translation of the 2025 list or of the 2025 study guide was listed. Licence: as S1 (US Government work).
- **No openly licensed translation** of the 2025 materials was found.

## 10. Not verified

1. **USCIS HTML pages were not read raw.** uscis.gov returned Akamai 403 to curl with generic and browser user agents. These facts rest on WebFetch's model extraction:
   - the Policy Manual quotes (filing-date rule, 2008 stopping rule "five questions incorrectly", 60–90-day re-examination, "language of choice with the use of an interpreter", "Current as of September 23, 2026");
   - the test-updates names and date (09/18/2025);
   - the website-policies licence quote;
   - the 2025 Civics Test page;
   - the Study for the Test listing, including the translations.

   The core rules are confirmed raw in 90 FR 45047–45050, PA-2025-24, M-1778 and 8 CFR 312/335. **The current officials' names are not confirmed raw.** Before release, re-read the test-updates page (and ideally speaker.gov, whitehouse.gov and supremecourt.gov) from a network that can reach uscis.gov.
2. **The study guide was read from a third-party mirror** (printme1.com), not from uscis.gov: WebFetch refused it at over 10 MB. Its metadata is consistent with USCIS, but the file was not compared byte for byte. Confirm the page numbers and wording against the USCIS copy.
3. **No U.S. Government definition was found for** popular sovereignty, social contract, limited government, the Anti-Federalist Papers, the Virginia Declaration of Rights, the Fundamental Orders of Connecticut, the Mayflower Compact, Reconstruction, the draft, "freedom of expression" or "chief diplomat".
   - Tried: the study guide full text; the NARA founding documents; the Ben's Guide glossary; the NPS Civics 101 article (it lists but does not define).
   - Blocked: constitution.congress.gov and congress.gov/constitution-annotated returned 403; the USCIS "Quick Civics Lessons" M-638 PDF returned 403.
   - Still to try: other NARA or LOC pages (e.g. a LOC exhibit on the Mayflower Compact).
4. **Time limit:** none is stated in M-1778, PA-2025-24, 90 FR 45047 or 8 CFR 312. Not found.
5. **Validity or carry-over** of a passed civics test (e.g. after a denied or withdrawn application): not stated in anything read.
6. **Whether the 2025 list's answers differ from the 2020 list** (M_1778TXT.txt, "2020 version") was not checked. The file is on uscis.gov and could not be downloaded raw.
7. **The newer 2008 list** (OoC_100_Questions_2008_Civics_Test_V1.pdf, "revised Aug. 2021" per 90 FR n.24) was not fetched; the rev. 01/19 file was used for §7 only.
8. **Licences needing confirmation:**
   - Ben's Guide (the page footer says "Copyright © 2010 - 2026 GPO");
   - senate.gov and the LOC research guide (no licence statement read);
   - history.state.gov (state.gov's copyright page returned 403);
   - who drew the study-guide diagrams and maps (no credit line).
9. **Fees:** out of scope and not read. There is a Federal Register document "Naturalization Application Fee Adjustments" (91 FR 37500, 23 June 2026) whose content was not read.
10. **"Over 500 tribes" and similar counts** in the study guide are USCIS statements; they were not checked against the BIA list (bia.gov was reachable but not read).
11. **Any post-October 2025 change to the civics test** (e.g. further "multi-step" changes the 17 Sep 2025 USCIS news release said would come; WebFetch): searched federalregister.gov for "civics" notices from USCIS since June 2025. The only civics-test notice found was 90 FR 45047. The USCIS newsroom was not reachable raw. The Policy Manual (WebFetch, current as of 23 Sep 2026) still gives the 128/20/12 rules.

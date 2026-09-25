# Audit: us-civics (US citizenship civics, 2025 test)

Audited 2026-09-25 against AUDIT.md. Every card in decks/us-civics/notes/ was read: 590 cards in 12 topic files. Sources: the saved scratch folder (q128.json/.txt, the study guide split into one file per page, the gov/ transcripts and US Code, eCFR, the Federal Register notice, the Policy Alert). Nothing new was fetched. Mechanical checker rules are not reported.

## Summary

- 265 findings on 231 cards: 11 wrong, 23 unsupported, 31 ambiguous, 23 unclear, 177 minor. 136 are pass 1 and 129 are pass 2.
- **Coverage.** All 128 USCIS questions have a question card.
  - Every front matches M-1778 word for word, except that 27 fronts end in "?" where USCIS uses a full stop.
  - Of the 410 listed answers, all are on their question card except these (details below):
    - Q48: 19 missing;
    - Q69: 9 missing;
    - Q81: 12 missing;
    - Q126: 10 missing;
    - Q29: one missing territory answer;
    - small wording losses in Q63, Q67, Q68, Q70, Q71 and Q80.
- **65/20 track.** Exactly the 20 asterisked questions carry a 65/20 note: Q2, 7, 12, 20, 30, 36, 38, 39, 44, 52, 61, 66, 74, 78, 86, 94, 113, 115, 121 and 126. All 20 are priority core, and no unstarred card is marked. Three problems remain (see the deck-wide notes):
  - the tag exists only as prose;
  - 11 cards describe the track wrongly;
  - 3 cards lack the "(65/20)" token.
- **Volatile answers.** Q23, 29, 30, 38, 39, 57, 61, 62 and the updates primer are marked volatile and dated. However:
  - the four named officials rest on an unconfirmed WebFetch read of a page last updated 09/18/2025, yet carry the date 2026-09-25;
  - the glossary entry "JD ... JD Vance" in deck.json is volatile and undated;
  - the version-rule cards and the CA/WY seat card should also be marked volatile.

## Deck-wide notes (read these first)

1. **Officials' names are not verified as of the date they carry.**
   - Cards: q030 (Mike Johnson), q038 (Donald J. Trump), q039 (JD Vance), q057 (John Roberts).
   - Each has validAsOf "2026-09-25 · verify at uscis.gov (as of USCIS's 09/18/2025 update)".
   - The only source is the USCIS test-updates page, read through WebFetch's model extraction. uscis.gov refused raw downloads (brief §10.1). Nothing was checked as of 2026-09-25.
   - The same applies to the deck.json glossary line "JD: the initials the Vice President, JD Vance, uses".
   - Fix: before release, re-read uscis.gov/citizenship/testupdates from a network that can reach it (and speaker.gov, whitehouse.gov and supremecourt.gov). Set validAsOf to the date of that read, and date or remove the glossary entry.
2. **"Name two / three / five" cards show fewer answers than the question asks for.**
   - Cards: Q10 (two), Q48 (two), Q65 (three), Q67 (two), Q69 (two), Q81 (five), Q126 (three).
   - Each back gives ONE answer. A learner who recites the back would fail these questions at the interview.
   - Q16 ("Name the three branches") and Q19 are done correctly.
3. **Accepted answers missing from question cards.**
   - Q48, Q69, Q81 and Q126 send the learner to "the cards that follow" instead of listing the other answers.
   - This breaks the writers' rule: "a line 'Other accepted answers: …' listing every other accepted answer verbatim".
   - It is worst for Q48: the 22 set cards are priority extra, so a core-only learner never sees 19 accepted answers.
4. **The 65/20 tag is prose, not a tag.**
   - The brief (§8c) asked for `set::65-20`. The cards carry the note only in the explanation text, in three different forms:
     - "(65/20)" on 17 cards;
     - "marked 65/20 in the source" on q002;
     - "65/20 applicants" with no token on q007 and q012.
   - 11 cards say "One of the 20 asked of 65/20 applicants". That is wrong: these applicants study the 20 and are asked 10 of them.
   - Fix: add a real tag field, and use one sentence everywhere: "One of the 20 questions for 65/20 applicants."
5. **Q118 is priority extra.** It is a real test question and must be core.
6. **Plain English for limited-English readers.**
   - **Business analogies.** 40 primer examples in topics 2 to 6 explain civics through business life ("company charter", "board", "chief executive", "franchise", "head office", "shareholders", "bylaw", "merger"). For many immigrants these words are harder than the civics term they explain. The cards affected:
     - constitution, supreme-law, we-the-people, ratify, life-liberty, rep-democracy, federalism, articles, federalist, branches, federal-government;
     - legislative, great-compromise, law, budget, declare-war;
     - all executive primers except ag;
     - judicial;
     - all topic-6 primers.
   - Replace them with concrete US examples (a named state, a real law, a real year).
   - **British spellings.** 36 of them on 32 cards: organised, practise, honour, favour, labour, recognised, travelled, neighbour, symbolising, criticising, authorised. Some sit next to USCIS's own US spelling, for example "honor" on q127 and q128.
   - **USCIS's optional words in parentheses stay on the backs,** for example "(Because there were) 13 original colonies" and "(U.S.) Congress". The list uses parentheses for optional words, but a reader with limited English cannot tell what to say. Show the plainest full sentence on the back, and move the parentheses to "Other accepted answers".
   - **Research notes on learner cards.** Examples: "no separate US Government definition was found", "in the sources read for this deck", "USCIS's plainest example". They appear on popular-sovereignty, social-contract, antifederalist, virginia-decl, fundamental-orders, mayflower, colonial-period, spanish-war, reconstruction and anthony. Delete them from learner text, and teach a sourced plain meaning or nothing.
7. **Set-card design.**
   - The 22 Q48 set cards share one front but expect 22 different backs, so they cannot be graded.
   - The 13 Q81 set cards are "Is X one of the 13 original states?" and the answer is always "Yes".
   - Neither set tests recall.
8. **Wrong facts to fix first.**
   - holidays.juneteenth: says the 13th Amendment came before June 19, 1865.
   - rights.derive: the example describes acquiring citizenship at birth, not deriving it.
   - rights.draft: says the draft is "fair ... rather than at random".
   - rights.participation vs q069: they contradict each other on voting.
   - rights.petition: the newspaper example is really about speech.
   - rights.26th: "first time" for 18-year-olds is false.
   - rights.q063-race: says the 19th Amendment "extended" the 15th.
   - test.num-6520format: wrong proportions.
   - const.federalist-primer: says the essays influenced the drafting.
   - modern.gulf: says four 1900s wars; the test lists five.
   - modern.q118: set to extra.

## Findings, one line per problem

Format: `id | pass | severity | problem | source text or plainer wording`

### Question-card checks across all topics (front wording, 65/20 wording)

civics.const.q003-constitution-does | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name one thing the U.S. Constitution does."
civics.const.q010-two-ideas | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name two important ideas from the Declaration of Independence and the U.S. Constitution."
civics.const.q014-docs-influenced | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Many documents influenced the U.S. Constitution. Name one."
civics.cong.q016-three-branches | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name the three branches of government."
civics.cong.q020-power-of-congress | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name one power of the U.S. Congress."
civics.cong.q029-your-rep | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name your U.S. representative."
civics.exec.q041-power-of-president | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name one power of the president."
civics.exec.q046-exec-branch-parts | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "The executive branch has many parts. Name one."
civics.fed.q058-federal-only-power | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name one power that is only for the federal government."
civics.fed.q059-state-only-power | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name one power that is only for the states."
civics.rights.q063 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "There are four amendments to the U.S. Constitution about who can vote. Describe one of them."
civics.rights.q067 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name two promises that new citizens make in the Oath of Allegiance."
civics.rights.q072 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "It is important for all men age 18 through 25 to register for the Selective Service. Name one reason why."
civics.colonial.q073 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "The colonists came to America for many reasons. Name one."
civics.colonial.q077 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name one reason why the Americans declared independence from Britain."
civics.colonial.q080 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "The American Revolution had many important events. Name one."
civics.colonial.q081 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "There were 13 original states. Name five."
civics.colonial.q083 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers."
civics.colonial.q085 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Benjamin Franklin is famous for many things. Name one."
civics.colonial.q086 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "George Washington is famous for many things. Name one."
civics.colonial.q087 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Thomas Jefferson is famous for many things. Name one."
civics.colonial.q088 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "James Madison is famous for many things. Name one."
civics.colonial.q089 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Alexander Hamilton is famous for many things. Name one."
civics.c19.q091 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name one war fought by the United States in the 1800s."
civics.c19.q092 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name the U.S. war between the North and the South."
civics.c19.q093 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "The Civil War had many important events. Name one."
civics.c19.q094 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Abraham Lincoln is famous for many things. Name one."
civics.c19.q099 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name one leader of the women’s rights movement in the 1800s."
civics.modern.q100 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name one war fought by the United States in the 1900s."
civics.modern.q107 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Dwight Eisenhower is famous for many things. Name one."
civics.modern.q113 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Martin Luther King, Jr. is famous for many things. Name one."
civics.modern.q116 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name one U.S. military conflict after the September 11, 2001 attacks."
civics.modern.q117 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name one American Indian tribe in the United States."
civics.modern.q118 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name one example of an American innovation."
civics.holidays.q126 | 1 | minor | The front is not word for word: the USCIS question ends with a full stop (an instruction), the card with "?". | USCIS: "Name three national U.S. holidays."
civics.const.q002-supreme-law | 1 | minor | "One of the 20 asked of 65/20 applicants" is inaccurate: 65/20 applicants STUDY these 20 and are ASKED 10 of them (M-1778 p.1). | "One of the 20 questions for 65/20 applicants."
civics.const.q007-num-amendments | 1 | minor | "One of the 20 asked of 65/20 applicants" is inaccurate: 65/20 applicants STUDY these 20 and are ASKED 10 of them (M-1778 p.1). | "One of the 20 questions for 65/20 applicants."
civics.const.q012-econ-system | 1 | minor | "One of the 20 asked of 65/20 applicants" is inaccurate: 65/20 applicants STUDY these 20 and are ASKED 10 of them (M-1778 p.1). | "One of the 20 questions for 65/20 applicants."
civics.cong.q020-power-of-congress | 1 | minor | "One of the 20 asked of 65/20 applicants" is inaccurate: 65/20 applicants STUDY these 20 and are ASKED 10 of them (M-1778 p.1). | "One of the 20 questions for 65/20 applicants."
civics.cong.q030-speaker-name | 1 | minor | "One of the 20 asked of 65/20 applicants" is inaccurate: 65/20 applicants STUDY these 20 and are ASKED 10 of them (M-1778 p.1). | "One of the 20 questions for 65/20 applicants."
civics.exec.q036-term-years | 1 | minor | "One of the 20 asked of 65/20 applicants" is inaccurate: 65/20 applicants STUDY these 20 and are ASKED 10 of them (M-1778 p.1). | "One of the 20 questions for 65/20 applicants."
civics.exec.q038-president-name | 1 | minor | "One of the 20 asked of 65/20 applicants" is inaccurate: 65/20 applicants STUDY these 20 and are ASKED 10 of them (M-1778 p.1). | "One of the 20 questions for 65/20 applicants."
civics.exec.q039-vp-name | 1 | minor | "One of the 20 asked of 65/20 applicants" is inaccurate: 65/20 applicants STUDY these 20 and are ASKED 10 of them (M-1778 p.1). | "One of the 20 questions for 65/20 applicants."
civics.exec.q044-vetoes-who | 1 | minor | "One of the 20 asked of 65/20 applicants" is inaccurate: 65/20 applicants STUDY these 20 and are ASKED 10 of them (M-1778 p.1). | "One of the 20 questions for 65/20 applicants."
civics.court.q052-highest-court | 1 | minor | "One of the 20 asked of 65/20 applicants" is inaccurate: 65/20 applicants STUDY these 20 and are ASKED 10 of them (M-1778 p.1). | "One of the 20 questions for 65/20 applicants."
civics.fed.q061-governor-name | 1 | minor | "One of the 20 asked of 65/20 applicants" is inaccurate: 65/20 applicants STUDY these 20 and are ASKED 10 of them (M-1778 p.1). | "One of the 20 questions for 65/20 applicants."
civics.const.q002-supreme-law | 1 | minor | The 65/20 mark is prose only; the "(65/20)" token that the other 17 starred cards carry is missing, so a script that filters on it will miss this card. | Add "(65/20)" (better: a real tag, see the deck-wide notes).
civics.const.q007-num-amendments | 1 | minor | The 65/20 mark is prose only; the "(65/20)" token that the other 17 starred cards carry is missing, so a script that filters on it will miss this card. | Add "(65/20)" (better: a real tag, see the deck-wide notes).
civics.const.q012-econ-system | 1 | minor | The 65/20 mark is prose only; the "(65/20)" token that the other 17 starred cards carry is missing, so a script that filters on it will miss this card. | Add "(65/20)" (better: a real tag, see the deck-wide notes).

### Topic 1: The test itself

civics.test.uscis-primer | 1 | minor | Explanation "every rule below comes from USCIS" overstates: the rules also come from Congress (INA 312) and DHS regulations (8 CFR 312, 335), which later cards cite. | "USCIS gives the test, so its officer asks the questions and checks your answers."
civics.test.naturalization-primer | 2 | minor | Example restates the back and stays abstract ("a resident of one country moving in"). | "Example: Maria was born in Mexico, got a Green Card, and later became a US citizen. That is naturalization."
civics.test.lpr-primer | 1 | unsupported | "holds a Green Card" is not in 8 USC 1101(a)(20); explanation "Only LPRs can apply to naturalize" is an overstatement (some military applicants can naturalize without LPR status) and contradicts app-lpr, which says "most applicants". | Source: "lawfully accorded the privilege of residing permanently in the United States as an immigrant". Say "Most people must be LPRs before they can apply."
civics.test.civics-primer | 1 | minor | Back drops "fundamentals of" from INA 312(a)(2) while the explanation calls it "the legal definition Congress wrote"; INA 312 does not use the word "civics". | Source: "a knowledge and understanding of the fundamentals of the history, and of the principles and form of government, of the United States". Say "Congress wrote this requirement into the law."
civics.test.v2025-primer | 2 | unclear | "reimplements the 2020 test bank" is above plain English for the audience. | "It uses the same 128 questions as the 2020 test. Only one thing changed: when the officer stops."
civics.test.oral-primer | 1 | minor | "Nothing is written down by the applicant" is an inference not stated in M-1778 or 8 CFR 312.2(c)(1); the same interview includes an English writing test, so it can confuse. | "For the civics part, you do not write. You only speak."
civics.test.stop-primer | 2 | minor | Example "a best-of-20 quiz" is sports jargon and misleads (it is not best-of). | "Example: you get 12 right after 14 questions. The officer stops. You passed."
civics.test.6520-primer | 2 | unclear | Back packs four conditions into one line with "65+" and "20+" symbols; hard for limited-English readers. | "You are 65 or older and have been a permanent resident for 20 years or more when you apply. You study 20 questions. The officer asks 10. You need 6 right. You can use your own language."
civics.test.english-exempt-primer | 2 | minor | Example restates the back. | "Example: Ahmed is 56 and has had a Green Card for 16 years. He does not take the English test, but he must still take the civics test."
civics.test.reexam-primer | 1 | minor | Example "a resit exam scheduled a few weeks after" contradicts the 60 to 90 days on the back ("resit" is also British jargon). | "Example: you fail in March. Your second test is in May or June."
civics.test.n648-primer | 2 | unclear | "qualifying medically determinable impairment" and "excepted" are legal jargon. | "If a doctor certifies that a disability stops you from learning civics, Form N-648 can excuse you from the civics test."
civics.test.num-6520format | 1 | wrong | Explanation says the proportions "match the standard test's 128/20/12, scaled down". They do not: 10 of 20 asked is 50% of the list, 20 of 128 is about 16%. Only the pass rate (6/10 = 12/20 = 60%) matches. | "The pass rate is the same as the standard test: 60%."
civics.test.num-2008format | 2 | unclear | Front "How many questions did the 2008 test bank, ask, and need correct" uses "bank" as a verb and past tense for a test still given; a reader must read it twice. | "The 2008 test: how many questions are in the list, how many are asked, how many must be right, and when does the officer stop?"
civics.test.num-9stop | 2 | minor | "makes 12 correct out of the remaining questions impossible" is hard to follow. | "With 9 wrong, you can get at most 11 right out of 20, so you cannot reach 12."
civics.test.num-60to90 | 1 | minor | "bars scheduling the retest earlier than 60 days" overstates 8 CFR 335.3(b). | Source: "The applicant shall not be required to appear for a reexamination earlier than 60 days after the first examination."
civics.test.app-civics | 1 | minor | Explanation says INA 312 defines "civics"; the statute never uses the word. | "These are the words of the law (INA section 312) that the civics test checks."
civics.test.contrast-2008-2025 | 1 | minor | "only the totals differ" overstates: the questions and their numbering also differ (brief §7 trap 1). | "The pass rate (60%) and the spoken format are the same. The numbers and the questions are different."
civics.test.contrast-standard-6520 | 1 | unsupported | "English required" for the standard test is too absolute: 50/20 and 55/15 applicants may take civics in their own language with an interpreter (8 CFR 312.2(c)(1)(i)). | "Standard: usually in English."
civics.test.v2025-primer | 1 | minor | The brief (§4, civics.test.v2025) marks the version rule as volatile, but the card has no volatile flag or validAsOf. The version has changed three times since 2008 (90 FR 45048-49). | Add volatile: true, validAsOf "2026-09-25 · 90 FR 45047; verify at uscis.gov". The same applies to v2008-primer, num-cutoffdate, app-n400, app-v2008 and contrast-2008-2025.
civics.test.v2008-primer | 1 | minor | Marked volatile in the brief (§4) but not on the card: it stays true only while applicants who filed before 20 October 2025 are still being tested. | Add volatile and validAsOf.

### Topic 2: Constitution and founding principles

civics.const.supreme-law-primer | 2 | minor | Explanation "which is why later amendments matter so much" does not follow from the back. | "No state law and no other federal law can go against it."
civics.const.we-the-people-primer | 2 | minor | Example "a charter that opens by naming the members themselves as its source of authority" is abstract and uses hard words. | "Example: the Constitution begins 'We the People of the United States...'. The people, not a king, make the government."
civics.const.self-government-primer | 2 | unclear | Explanation "It is the idea 'We the People' is USCIS's own answer for" is not grammatical; a reader must read it twice. | "USCIS accepts 'self-government' as the meaning of 'We the People'."
civics.const.popular-sovereignty-primer | 1 | unsupported | Back gives a definition ("political authority belongs to the people") that the brief says no fetched US Government source gives (§10.3). Explanation "No separate US Government definition beyond this exists" turns "not found" into "does not exist". The research note should not be on a learner card. | Back: "One of the USCIS answers for what 'We the People' means: the people hold the power." Drop the "no definition exists" line.
civics.const.social-contract-primer | 1 | unsupported | Back says "no separate US Government definition exists" (the brief only says none was found) and defines nothing. The example then gives an outside definition, which contradicts the explanation ("not with an outside definition"). | Give one sourced plain meaning, or say only "USCIS accepts it as an answer to questions 4 and 10." Drop the meta note.
civics.const.social-contract-primer | 2 | unclear | A primer whose back does not say what the term means does not teach the newcomer anything. | See above.
civics.const.amendment-process-primer | 1 | minor | Front asks how the whole process works; the back gives only the ratification step (Art. V also needs a proposal by two-thirds of both houses or a convention). | "Congress (two-thirds of each house) proposes it. Then three-fourths of the states (38 of 50) must approve it."
civics.const.27-primer | 2 | minor | Example "27th tracked change" is office-software jargon. | "Example: the newest change, the 27th Amendment, was added in 1992."
civics.const.declaration-primer | 2 | minor | Example "a formal notice ending a relationship" is abstract. | "Example: on July 4, 1776, the 13 colonies told Britain they were now free."
civics.const.equality-primer | 1 | unsupported | Back "no person is born with a rightful claim to rule another" is an interpretation, not the Declaration's words or a cited USCIS paraphrase. | Declaration: "that all men are created equal". Plainer: "Every person has the same basic rights."
civics.const.rule-of-law-primer | 2 | minor | Explanation "It extends 'supreme law of the land' to officials personally, not just to other laws" is abstract. | "Even the President must obey the law."
civics.const.federalist-primer | 1 | wrong | Explanation says the essays influenced the Constitution's "drafting". They were written after the Convention (October 1787 to May 1788, study guide p.33-34) to support ratification. | "They were written after the Constitution to convince people to approve it."
civics.const.antifederalist-primer | 2 | unclear | The back teaches nothing ("Listed by USCIS...; no separate US Government definition was found"). A research note is shown to learners. The example gives the real meaning without a source. | Source a plain meaning (for example, essays against ratifying the Constitution), or keep only "one of the documents USCIS says influenced the Constitution". Drop the meta note.
civics.const.virginia-decl-primer | 2 | unclear | The back only restates that USCIS lists it; nothing is explained, and the explanation is a research note, not a reason. | Source one plain sentence (for example, Virginia's 1776 list of rights) or merge into the Q14 card.
civics.const.fundamental-orders-primer | 2 | unclear | Same as virginia-decl-primer: the back explains nothing and the explanation is a research note. | Source one plain sentence, or merge into the Q14 card.
civics.const.mayflower-primer | 2 | unclear | Same as virginia-decl-primer: the back explains nothing and the explanation is a research note. | Source one plain sentence (the Pilgrims' 1620 agreement to govern themselves), or merge into the Q14 card.
civics.const.capitalism-primer | 2 | minor | Example "open a stall ... run by a state office" is fine, but the back could be shorter for limited-English readers. | "People own businesses and can make money. The government does not control the economy."
civics.const.q002-supreme-law | 2 | minor | Explanation only says it is a 65/20 question; it gives no reason. | "It is the highest law. Every law and every government must follow it. (65/20)"
civics.const.q006-bor-protects | 2 | minor | Back keeps USCIS's optional "(The basic)" in parentheses; for this audience the plainest back is without it. Explanation calls "since the Bill of Rights is not limited to citizens" a reason, but that is an inference not on the list. | Back: "The rights of Americans."
civics.const.q008-decl-important | 1 | minor | Typo in the "Other accepted answers" line: "individual freedoms.." (double full stop). | "It identifies individual freedoms."
civics.const.q010-two-ideas | 2 | ambiguous | The question asks for TWO ideas but the back gives one ("Equality."). A learner who copies the back would answer only one and get the question wrong. | Back: "Equality and liberty."
civics.const.q013-rule-of-law | 1 | minor | Typo in the "Other accepted answers" line: "No one is above the law.." (double full stop). | Fix the punctuation.
civics.const.q010-set-equality | 1 | unsupported | Classification cards claim each Q10 idea is from "both" documents. Q10 asks for ideas from "the Declaration of Independence and the U.S. Constitution" together; it does not say that each idea appears in each document. This is an inference presented as the source's statement. | Recast the set as "Is X an accepted answer to question 10?" or cite the text where each idea appears.
civics.const.q010-set-liberty | 1 | unsupported | Same as q010-set-equality. | Same as above.
civics.const.q010-set-social-contract | 1 | unsupported | Same as q010-set-equality; neither document uses the words "social contract", and the explanation gives no source for "both". | Same as above.
civics.const.q010-set-natural-rights | 1 | unsupported | Same as q010-set-equality; the explanation cites only the Declaration, then answers "both". | Same as above.
civics.const.q010-set-limited-govt | 1 | unsupported | Same as q010-set-equality; the explanation cites only the Constitution, then answers "both". | Same as above.
civics.const.q010-set-self-govt | 1 | unsupported | Same as q010-set-equality. | Same as above.
civics.const.app-consent | 2 | minor | Front asks "Why" but the back answers "From where" ("From the consent of the governed"); "legitimate" is a hard word. | "Where does a government get its power, says the Declaration?"
civics.const.app-equality | 1 | unsupported | Explanation repeats the unsourced reading "no person is born with a rightful claim to rule another". | "Every person has the same basic rights."
civics.const.app-capitalism | 2 | ambiguous | Front "who mainly decides who can start a business: the government or the market?" does not match the source (people are free to start a business). "The market" deciding who can start a business is not what p.63 says. | Source p.63: "In a market economy, the government does not control the economy. Also, people are free to start a business and make money." Front: "Who can start a business in the US: only the government, or any person?"
civics.const.contrast-decl-const | 2 | minor | The contrast field starts in lower case ("question 10 asks..."). | "Question 10 asks..."

### Topic 3: Congress

civics.cong.congress-primer | 2 | minor | Example "a two-chamber parliament" uses words ("chamber", "parliament") the deck has not taught. | "Example: Congress has two groups, the Senate and the House. Together they make laws."
civics.cong.great-compromise-primer | 2 | minor | Example "a merger deal giving each partner firm equal votes..." is business jargon. | "Small states wanted equal seats; big states wanted seats by population. They agreed: equal seats in the Senate, seats by population in the House."
civics.cong.speaker-primer | 2 | minor | Example "a chamber's presiding officer ... if higher offices are vacated" uses hard words. | "If the President and Vice President both cannot serve, the Speaker becomes President."
civics.cong.delegate-primer | 1 | minor | Explanation "without a vote on final passage" adds a detail the cited Q29 note does not give. | Q29 note: "nonvoting Delegates or Resident Commissioners". Say "they can speak in the House but cannot vote on laws" and cite a House source, or drop the detail.
civics.cong.declare-war-primer | 2 | minor | Example "declare the company at war with a rival" is odd and abstract. | "Example: in 1941 Congress voted to declare war on Japan."
civics.cong.q019-two-parts | 2 | minor | Explanation "This is Congress's only listed accepted answer" is awkward and gives no reason. | "Congress has two parts, and you must name both."
civics.cong.q023-your-senator | 2 | unclear | Back "Answers will vary." gives the learner nothing to do. The writers' notes require "Answers vary by state; find yours at ..." with a link. | "Answers vary by state. Find your two senators at senate.gov before your interview."
civics.cong.q023-your-senator | 1 | minor | The validAsOf note points to uscis.gov, but the test-updates page does not list senators. | "Answers vary by state; check senate.gov."
civics.cong.q024-house-voting-members | 1 | minor | Explanation "fixed by law and does not grow with population" is not in the cited Q24 source (2 USC 2a is saved in gov/ but not cited). | Cite 2 USC 2a, or say "The number stays 435; each state's share changes with population."
civics.cong.q029-your-rep | 1 | unsupported | One accepted answer is missing: "Also acceptable is any statement that the territory has no (voting) representatives in Congress." The back is only "Answers will vary." with no way to find the answer. | Add the missing answer, plus "Find yours at house.gov (enter your ZIP code)."
civics.cong.q030-speaker-name | 1 | unsupported | Volatile name dated "2026-09-25", but the only source is the test-updates page (last updated 09/18/2025), read through WebFetch and never confirmed from a raw copy (brief §10.1). The date suggests a check that was not made. | Re-read uscis.gov/citizenship/testupdates (and speaker.gov) from a network that can reach it before release; set validAsOf to the date of that read.
civics.cong.num-min-ages | 1 | minor | Explanation "The Senate's higher minimum age matches its longer, six-year term" is our inference, not the study guide's. | Study guide p.20 gives only the ages. Drop the reason, or say "Senators must be older."
civics.cong.num-ca-wy-seats | 1 | minor | "they change with each census" is our inference (brief §5 says so); the study guide does not state it. | Cite a source for reapportionment, or say "these numbers can change".
civics.cong.app-bill | 2 | minor | The front is circular: "Before it can become law, what must a new law start out as?" | "A new law starts as an idea written down for Congress to vote on. What is it called?"
civics.cong.app-majority | 2 | minor | British spelling "favour" in a US deck (also "organised" and similar elsewhere). | "favor"
civics.cong.num-ca-wy-seats | 1 | minor | The card says the seat counts change with each census but is not flagged volatile and has no validAsOf. | Add volatile: true, validAsOf "2026-09-25 · 2020 census apportionment".

### Topic 4: President and executive branch

civics.exec.22nd-primer | 2 | minor | Example "a bylaw capping a chief executive at two elected terms" is business jargon. | "Example: Franklin Roosevelt was elected four times. After that, the 22nd Amendment (1951) set a limit of two."
civics.exec.vp-primer | 2 | minor | Example "deputy chief executive who also chairs one board meeting" is jargon and garbles "President of the Senate". | "Example: if the President dies, the Vice President becomes President."
civics.exec.veto-primer | 2 | minor | Example "overrule by a large enough vote" is vague; the source says two-thirds. | "Congress can still make it law if two-thirds of the House and two-thirds of the Senate vote yes."
civics.exec.electoral-college-primer | 2 | minor | Example "shareholders voting through regional blocs rather than one company-wide headcount" is business jargon. | "Each state has electors. The electors choose the President."
civics.exec.party-primer | 2 | minor | Example "two rival slates that each field their own candidate" uses hard words ("slates", "field"). | "Example: in a presidential election, the Democratic Party picks one person and the Republican Party picks another."
civics.exec.q036-term-years | 2 | minor | Explanation is only the 65/20 note; it gives no reason or link. | "A President is elected every four years, for example in 2024 and 2028. (65/20)"
civics.exec.q038-president-name | 1 | unsupported | Volatile name dated "2026-09-25", but the only source is the test-updates page updated 09/18/2025, read through WebFetch and never confirmed raw (brief §10.1). | Re-read uscis.gov/citizenship/testupdates (and whitehouse.gov) before release; set validAsOf to that read date.
civics.exec.q039-vp-name | 1 | unsupported | Same as q038: the dated check was not made from a raw source. The glossary entry for "JD" is also volatile, but the deck glossary has no date. | Re-verify before release; date the glossary entry or remove it.
civics.exec.q044-vetoes-who | 2 | minor | Explanation is only the 65/20 note; it gives no reason. | "Only the President can veto (say no to) a bill. (65/20)"
civics.exec.q048-cabinet-positions-two | 2 | ambiguous | The question asks for TWO positions; the back gives one ("Attorney General."). | Back: "Secretary of State and Secretary of the Treasury."
civics.exec.q048-cabinet-positions-two | 1 | unsupported | Of the 22 accepted answers, only 3 appear on the question card ("and 19 more (see following cards)"). The 22 set cards are priority extra, so a learner studying core cards never sees 19 accepted answers. The writers' notes require every other accepted answer, word for word, on the question card. | List all 22 on the card (split between the explanation and the example if needed), or make the set cards core.
civics.exec.q049-electoral-college-why | 1 | minor | Typo: "congressional selection.." (double full stop). | Fix the punctuation.
civics.exec.app-22nd | 1 | minor | Front asks "Can they run for a third term?"; the 22nd Amendment limits being "elected" more than twice, not running. | "Can they be elected a third time?"
civics.exec.q048-set-attorney-general | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-agriculture | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-commerce | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-education | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-energy | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-hhs | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-dhs | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-hud | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-interior | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-labor | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-state | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-transportation | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-treasury | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-va | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-war | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-vp-cabinet | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-epa | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-sba | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-cia | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-omb | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-dni | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"
civics.exec.q048-set-ustr | 2 | ambiguous | All 22 set cards share the same front ("Name one of the 22 Cabinet-level positions USCIS lists (question 48)?") but each expects a different back, so any of 22 answers is correct and the card cannot be graded. | Give each card a distinct cue, for example "Which Cabinet-level officer leads the Department of Justice?" or "Is the ... a Cabinet-level position (Q48)?"

### Topic 5: Courts

civics.court.lower-primer | 2 | minor | Example "regional and local review panels that most disputes never rise above" is abstract. | "Most federal cases start in one of the 94 district courts."
civics.court.justice-primer | 1 | minor | Explanation "'Justice' is reserved for the Supreme Court's own nine judges" overstates: study guide p.31 says only that "justice" is "another word for 'judge'"; many state high-court judges are also called justices. | "On the US Supreme Court, the judges are called justices."
civics.court.life-primer | 2 | minor | The quoted 18th-century "shall hold their Offices during good Behaviour" is hard English for this audience; the plain meaning comes after it. | Lead with "Federal judges can serve for the rest of their lives." Put the quote in the explanation.
civics.court.q053-scotus-seats | 1 | minor | Explanation "not set by the Constitution itself but by federal law" is not in the cited source (Q53). | Cite 28 USC 1, or drop the clause: "There are nine justices."
civics.court.q057-chief-justice-name | 1 | unsupported | Volatile name dated "2026-09-25"; the only source is the test-updates page (09/18/2025), read through WebFetch and never confirmed raw (brief §10.1). | Re-verify at uscis.gov/citizenship/testupdates and supremecourt.gov before release.
civics.court.num-1-13-94 | 2 | minor | Front "How many Supreme Courts, courts of appeals circuits, and federal district courts" stacks nouns, and the plural "Supreme Courts" is odd. | "How many federal courts are there at each level: top, middle and bottom?"
civics.court.app-supreme | 2 | ambiguous | Front "A case is decided and no further appeal is possible. Which court decided it?" has more than one defensible answer: a lower-court ruling is also final once no appeal is allowed or taken. | "Which court's decisions cannot be appealed to any higher court?"
civics.court.app-justice | 1 | minor | Explanation "used only for Supreme Court judges" is the same overstatement as justice-primer. | "On the US Supreme Court, the judges are called justices."

### Topic 6: Federal and state powers

civics.fed.federal-powers-primer | 2 | unclear | Uses "Washington, D.C." to mean the federal government (also in app-federal-powers and contrast-federal-state-powers). dc-primer teaches D.C. as a city, so limited-English readers will take it literally. The franchise example is business jargon. | "Only the national government can do these things." Example: "Only the national government prints dollar bills."
civics.fed.treaty-primer | 2 | minor | Example "a formal contract only the head office, not a local branch, is authorised to sign" is jargon. | "Example: the United States and Mexico sign an agreement about trade."
civics.fed.state-powers-primer | 2 | minor | Franchise example ("local staffing and day-to-day service") is jargon. | "Example: your state gives you your driver's license."
civics.fed.10th-primer | 2 | unclear | The back quotes the 18th-century text ("not delegated ... reserved to the States respectively") with no plain version; the franchise "default clause" example is jargon. | "Powers the Constitution does not give to the national government belong to the states or the people."
civics.fed.governor-primer | 2 | minor | Franchise-manager example is jargon. | "Example: the governor of California leads the California state government."
civics.fed.state-capital-primer | 2 | unclear | Circular: "What is a state capital?" is answered with "The capital city of a state." | "The city where a state's government works. Example: Sacramento is the capital of California."
civics.fed.dc-primer | 2 | minor | Franchise "head office campus" example is jargon. | "Example: the White House and Congress are in Washington, D.C."
civics.fed.territory-primer | 2 | minor | "there are five" but the five are not named, and the franchise example is jargon. | Study guide p.38 names them: "Puerto Rico, Guam, the U.S. Virgin Islands, American Samoa and the Northern Mariana Islands."
civics.fed.q061-governor-name | 2 | unclear | Back "Answers will vary." gives no way to find the answer. The study guide (p.14) gives the link, and the writers' notes require "find yours at ...". validAsOf says "verify locally" without saying where. | "Answers vary by state. Find your governor at usa.gov/state-governor. (65/20)"
civics.fed.q062-state-capital-q | 2 | minor | Back "Answers will vary." gives no action. | "Answers vary by state. Example: Austin (Texas)."
civics.fed.app-federal-powers | 2 | unclear | Front "Only Washington, D.C., not any state, can create an army" uses the city name for the national government. | "Only the national government, not any state, can create an army. What kind of power is this?"
civics.fed.app-state-capital | 1 | minor | Explanation "distinct from its largest or best-known city" is too absolute: some capitals are the largest city (for example Phoenix, Boston). | "It is not always the biggest city."
civics.fed.contrast-federal-state-powers | 2 | minor | Uses "Washington, D.C." and "Washington" for the federal government; the contrast field starts in lower case ("question 58"). | "Federal: only the national government..." / "Question 58 and question 59..."

### Topic 7: Rights and responsibilities

civics.rights.citizen | 2 | unclear | Back "A native or naturalized member of a nation who owes it allegiance and receives its protection" uses words above plain English ("native", "owes it allegiance"). | "A person who belongs to a country by birth or by naturalization. The country protects them, and they are loyal to it."
civics.rights.petition | 1 | wrong | Explanation says the study guide gives writing to a newspaper as an example of petitioning. Study guide p.34 gives it as an example of using freedom of SPEECH. Writing to a newspaper is not petitioning the government. | Source p.34: "People can use their Freedom of Speech to participate in American democracy. For example, ... by writing to a newspaper". Use: "Example: signing a letter that asks the city to fix a road."
civics.rights.expression | 2 | minor | Example "it is the exact word M-1778 itself uses" is not an example and uses the form number. | "Example: wearing a T-shirt with a political message."
civics.rights.arms | 2 | unclear | The explanation is only an 18th-century quote ("A well regulated Militia... shall not be infringed") with no reason in plain words. | "It is in the Second Amendment, not the First, so it is separate from the five First Amendment freedoms."
civics.rights.15th | 1 | minor | Explanation "expanded who may vote in federal elections": the 15th Amendment covers all elections, not only federal ones. | "the first of four amendments about who can vote."
civics.rights.19th | 1 | unsupported | Explanation "let women vote in federal elections" is too narrow (the amendment covers all elections). Example "Before 1920, most states did not let women vote for President" is not in the cited source and is doubtful: many states already let women vote for President by 1919. | "It says no citizen can be kept from voting because she is a woman." Drop the example or source it.
civics.rights.poll-tax | 1 | minor | Explanation "used, especially in the South, to keep poorer citizens from voting" is not in the cited source (24th Amendment text). | Cite a source (for example the NARA 24th Amendment page) or drop it.
civics.rights.24th | 1 | minor | Example "several states still charged a poll tax" is not in the cited source. | Cite a source or drop it.
civics.rights.26th | 1 | wrong | Example "It let 18-year-olds vote in federal elections for the first time" is false as stated: Georgia (from 1943) and Kentucky (from 1955) already let 18-year-olds vote, including in federal elections. | "It made 18 the voting age in every state."
civics.rights.pledge | 1 | minor | Explanation "recited at naturalization ceremonies" is not in 4 USC 4. | Cite the study guide or drop the clause.
civics.rights.derive | 1 | wrong | Example "A child born abroad to a US-citizen parent" describes ACQUIRING citizenship at birth, not DERIVING it; USCIS uses "derive" for a child who becomes a citizen after birth through a parent. The explanation is also garbled: "one of three routes to citizenship besides naturalization" then lists two routes. | "Example: a child with a Green Card becomes a citizen when her mother naturalizes." Explanation: "It is one of the three ways in question 68: be born here, naturalize, or derive."
civics.rights.participation | 1 | wrong | Back defines civic participation as taking part "beyond voting", but USCIS lists "Vote" as an accepted Q69 answer, and q069's back is "Vote." The two cards contradict each other. | "Taking part in your community and government, for example voting, joining a political party or writing to a newspaper."
civics.rights.selective-service | 1 | minor | Explanation "call up soldiers fairly, in order" adds "in order", which is not in the source. | Q72: "Makes the draft fair, if needed."
civics.rights.draft | 1 | wrong | Explanation "carried out fairly rather than at random" is wrong: a draft call-up uses a random lottery, and the card's own example says "lottery-style call-up". | "Registration means everyone of the right age is on the list, so a draft is fair."
civics.rights.q063 | 1 | minor | Explanation says the four amendments "expanded who may vote in federal elections"; three of them (15th, 19th, 26th) apply to all elections. The paraphrase drops USCIS's "(Women and men can vote.)". | "four amendments about who can vote"
civics.rights.q063-race | 1 | wrong | Explanation "it was later extended to women by the 19th Amendment" is wrong: the 19th Amendment is a separate ban on sex discrimination; it did not extend the 15th. | "Women got the vote later, through the 19th Amendment (1920)."
civics.rights.q065 | 2 | ambiguous | The question asks for THREE rights; the back gives one ("Freedom of speech."). | Back: "Freedom of speech, freedom of religion, freedom of assembly."
civics.rights.q065-religion | 2 | minor | British spelling "practise" in a US deck (also in the religion primer and app-religion). | "practice"
civics.rights.q067 | 2 | ambiguous | The question asks for TWO promises; the back gives one. | Back: "Obey the laws of the United States, and be loyal to the United States."
civics.rights.q067 | 1 | minor | The "Other accepted answers" line merges two separate USCIS answers ("Serve in the military (if needed)" and "Serve (help, do important work for) the nation (if needed)") into "serve in the military or the nation if needed". | List both, word for word.
civics.rights.q068 | 1 | minor | "be born in the United States, under the 14th Amendment" drops USCIS's "under the conditions set by the 14th Amendment". The explanation is only the answer list, with no reason. | Keep "under the conditions set by the 14th Amendment"; add a one-line why.
civics.rights.q069 | 2 | ambiguous | The question asks for TWO examples; the back gives one ("Vote."). | Back: "Vote, and join a political party."
civics.rights.q069 | 1 | unsupported | The card lists none of the other 9 accepted answers ("Other accepted answers listed on the following cards"). The writers' notes require them all, word for word, on the question card. | Add: Run for office; Join a political party; Help with a campaign; Join a civic group; Join a community group; Give an elected official your opinion (on an issue); Contact elected officials; Support or oppose an issue or policy; Write to a newspaper.
civics.rights.q069-party | 2 | minor | British spelling "organised" in the front. | "organized"
civics.rights.q070 | 1 | minor | "work for government" narrows USCIS's "Work for local, state, or federal government". The explanation is only the answer list. | Use the USCIS wording.
civics.rights.sss-age-trap | 1 | minor | The front starts in lower case ("question 72"). Explanation "register before turning 26" can read as "any time before 26 is fine"; the statute and the study guide expect registration at 18. | "Men must register at 18. The law's range ends at 26."
civics.rights.app-19th | 2 | minor | Front "A woman is turned away from voting in 1919" is not a clean case: in 1919 many states already let women vote. | "Before 1920, a state could refuse to let women vote. Which amendment ended this?"
civics.rights.contrast-pledge-oath | 2 | minor | "symbolic recitation" and "binding legal act" are above plain English. | "The Pledge is words of loyalty. The Oath is the promise that makes you a citizen."
civics.rights.contrast-everyone-citizen | 2 | minor | "vote federally" and "govern political power" are hard to read. | "Citizens only: vote for President and Congress, run for federal office, serve on a jury."

### Topic 8: Colonial period and independence

civics.colonial.colonial-period | 2 | minor | The explanation is a research note ("The study guide gives inconsistent end years... no exact end date is safe to test"), not a reason. | "It is the time when England ruled the 13 colonies."
civics.colonial.enslaved | 1 | minor | Explanation "as colonists needed more farm labour" gives a cause that study guide p.45 does not state; "labour" is British spelling. | Source p.45: "Enslaved Africans were forced to work on farms in terrible conditions."
civics.colonial.continental-army | 1 | minor | Example "Colonial militias from all 13 colonies joined together" is not in the cited page, and "militias" is not taught. | "Example: Washington's soldiers spent the winter of 1777 at Valley Forge."
civics.colonial.franklin | 1 | minor | Example "travelled to France to help secure support" is not in the cited p.50; "travelled" is British spelling. | Use a Q85 fact: "He started the first free public libraries."
civics.colonial.jay | 1 | minor | Example "later became the first Chief Justice" is not in the cited p.52. | Cite a source (for example supremecourt.gov) or drop it.
civics.colonial.publius | 1 | minor | Explanation "let the essays argue on their ideas, not the writers' reputations" and the example "A reader in 1787 could not tell which of the three writers wrote a given essay" are our inferences, not the source's. The source label says "Chapter 5 'Rights and Responsibilities'" for a Federalist Papers fact. | Study guide p.34: "All of the writers of the Federalist Papers signed the essays with the name 'Publius'." Drop the inferences.
civics.colonial.q073 | 2 | minor | The explanation restates the list and gives no reason. | "Many people came for freedom, for example to practice their religion."
civics.colonial.q077 | 1 | minor | Explanation "the deepest grievance" is an overstatement not in the source; "grievance" is a hard word. | "Many colonists said it was not fair to pay taxes when they had no vote." (study guide p.48)
civics.colonial.q080 | 1 | minor | The answer list drops USCIS's "(British surrender at Yorktown)" from the Yorktown answer. | "(Battle of) Yorktown (British surrender at Yorktown)"
civics.colonial.q081 | 2 | ambiguous | The question asks for FIVE states; the back gives one ("New Hampshire"). A learner who copies the back fails the question. | Back: "New Hampshire, Massachusetts, New York, Virginia, Georgia."
civics.colonial.q081 | 1 | unsupported | None of the other 12 accepted answers is on the card ("named individually on the cards that follow"). The writers' notes require all of them on the question card. | Add: Massachusetts; Rhode Island; Connecticut; New York; New Jersey; Pennsylvania; Delaware; Maryland; Virginia; North Carolina; South Carolina; Georgia.
civics.colonial.q085 | 2 | minor | Explanation "Franklin had many achievements" says nothing. | "He started libraries anyone could use for free."
civics.colonial.q087 | 2 | minor | Explanation "Jefferson had several achievements" says nothing. | "He wrote the words 'all men are created equal'."
civics.colonial.q088 | 2 | minor | Explanation "Madison had several achievements" says nothing. | "He planned much of the Constitution."
civics.colonial.q089 | 2 | minor | Explanation "Hamilton had several achievements" says nothing. | "He set up the new country's money system."
civics.colonial.app-revolution | 2 | minor | British spelling "recognised" (also "travelled" in app-franklin). | "recognized", "traveled"
civics.colonial.q081-new-hampshire | 2 | minor | Yes/no card whose answer is always "Yes": all 13 set cards say yes, so the learner can answer without knowing the list, and nothing tests recall. | Use recall ("Name the 13 original states from north to south" with a cloze per state), or mix in "No" items such as Vermont and Maine.
civics.colonial.q081-massachusetts | 2 | minor | Yes/no card whose answer is always "Yes": all 13 set cards say yes, so the learner can answer without knowing the list, and nothing tests recall. | Use recall ("Name the 13 original states from north to south" with a cloze per state), or mix in "No" items such as Vermont and Maine.
civics.colonial.q081-rhode-island | 2 | minor | Yes/no card whose answer is always "Yes": all 13 set cards say yes, so the learner can answer without knowing the list, and nothing tests recall. | Use recall ("Name the 13 original states from north to south" with a cloze per state), or mix in "No" items such as Vermont and Maine.
civics.colonial.q081-connecticut | 2 | minor | Yes/no card whose answer is always "Yes": all 13 set cards say yes, so the learner can answer without knowing the list, and nothing tests recall. | Use recall ("Name the 13 original states from north to south" with a cloze per state), or mix in "No" items such as Vermont and Maine.
civics.colonial.q081-new-york | 2 | minor | Yes/no card whose answer is always "Yes": all 13 set cards say yes, so the learner can answer without knowing the list, and nothing tests recall. | Use recall ("Name the 13 original states from north to south" with a cloze per state), or mix in "No" items such as Vermont and Maine.
civics.colonial.q081-new-jersey | 2 | minor | Yes/no card whose answer is always "Yes": all 13 set cards say yes, so the learner can answer without knowing the list, and nothing tests recall. | Use recall ("Name the 13 original states from north to south" with a cloze per state), or mix in "No" items such as Vermont and Maine.
civics.colonial.q081-pennsylvania | 2 | minor | Yes/no card whose answer is always "Yes": all 13 set cards say yes, so the learner can answer without knowing the list, and nothing tests recall. | Use recall ("Name the 13 original states from north to south" with a cloze per state), or mix in "No" items such as Vermont and Maine.
civics.colonial.q081-delaware | 2 | minor | Yes/no card whose answer is always "Yes": all 13 set cards say yes, so the learner can answer without knowing the list, and nothing tests recall. | Use recall ("Name the 13 original states from north to south" with a cloze per state), or mix in "No" items such as Vermont and Maine.
civics.colonial.q081-maryland | 2 | minor | Yes/no card whose answer is always "Yes": all 13 set cards say yes, so the learner can answer without knowing the list, and nothing tests recall. | Use recall ("Name the 13 original states from north to south" with a cloze per state), or mix in "No" items such as Vermont and Maine.
civics.colonial.q081-virginia | 2 | minor | Yes/no card whose answer is always "Yes": all 13 set cards say yes, so the learner can answer without knowing the list, and nothing tests recall. | Use recall ("Name the 13 original states from north to south" with a cloze per state), or mix in "No" items such as Vermont and Maine.
civics.colonial.q081-north-carolina | 2 | minor | Yes/no card whose answer is always "Yes": all 13 set cards say yes, so the learner can answer without knowing the list, and nothing tests recall. | Use recall ("Name the 13 original states from north to south" with a cloze per state), or mix in "No" items such as Vermont and Maine.
civics.colonial.q081-south-carolina | 2 | minor | Yes/no card whose answer is always "Yes": all 13 set cards say yes, so the learner can answer without knowing the list, and nothing tests recall. | Use recall ("Name the 13 original states from north to south" with a cloze per state), or mix in "No" items such as Vermont and Maine.
civics.colonial.q081-georgia | 2 | minor | Yes/no card whose answer is always "Yes": all 13 set cards say yes, so the learner can answer without knowing the list, and nothing tests recall. | Use recall ("Name the 13 original states from north to south" with a cloze per state), or mix in "No" items such as Vermont and Maine.

### Topic 9: The 1800s

civics.c19.spanish-war | 2 | unclear | The back only says it is a war USCIS lists; the explanation is a research note ("without further detail in the sources read"). A source is already saved: gov/hs_cuba1898.txt (Office of the Historian, "The Spanish-American War, 1898"). | "The 1898 war between the United States and Spain. It ended Spain's colonial empire in the Western Hemisphere." (history.state.gov)
civics.c19.civil-war | 1 | minor | Example "Fought mainly in the South" is not in the cited page, and the example repeats the dates from the back. | "Example: the war began at Fort Sumter in 1861."
civics.c19.reconstruction | 2 | unclear | The back ("when, per USCIS, all men got the right to vote") and the explanation (a research note) do not explain the term. "per USCIS" is meta wording. | Source a plain definition (for example: "the years after the Civil War, when the country rebuilt the South and added the 13th, 14th and 15th Amendments"), or keep only "the time right after the Civil War".
civics.c19.anthony | 2 | minor | Explanation "USCIS's plainest example of a women's rights leader" is meta wording and gives no reason (also in app-anthony). | "She is famous because she worked all her life for women's right to vote."
civics.c19.q094 | 2 | minor | Explanation "Lincoln had several achievements" says nothing. | "He was President during the Civil War. (65/20)"
civics.c19.q097 | 2 | unclear | The front must keep USCIS's wording ("subject to the jurisdiction thereof"), but the explanation only repeats it and never gives the plain meaning. | "In plain words: almost everyone born in the US, and everyone who naturalizes, is a citizen."
civics.c19.app-war1812 | 2 | minor | "bombardment" is a hard word. | "...after a night of attacks by British ships."
civics.c19.app-union | 2 | minor | "seceding" has not been taught. | "...as opposed to the Southern states that left..."
civics.c19.contrast-emancipation-13th | 2 | minor | "binding, nationwide change in law" and "limited reach" are abstract. | "The Proclamation was Lincoln's order during the war. The 13th Amendment is part of the Constitution and ended slavery in every state."

### Topic 10: 1900s to today

civics.modern.eisenhower | 1 | minor | Example "commanded Allied forces in Europe" is not in the cited p.65, which says only that he "was a general in World War II". | "Before he was President, he was a general in World War II."
civics.modern.cold-war | 1 | minor | Back "fought with diplomats and spies, not open battles" overstates p.65: the Korean and Vietnam Wars were real battles in the Cold War. The example "built large armies" is not in the source. | "The US and the Soviet Union were rivals. They did not fight each other directly; they used diplomats and spies." (p.65)
civics.modern.mlk | 1 | minor | Example "at the Lincoln Memorial" is not in the cited p.66. The explanation "led much of the movement that convinced Congress" overstates the source. "organised" is British spelling. | Source p.66: he "organized peaceful protests against racial discrimination".
civics.modern.gulf | 1 | wrong | Explanation says it is "the most recent of the four named wars USCIS lists for the 1900s". Q100 lists five 1900s wars, and the wwi primer says "five". | "It is the last of the five 1900s wars on the test."
civics.modern.war-on-terror | 2 | minor | "USCIS's umbrella term" is an idiom and an inference: USCIS lists "(Global) War on Terror" as one answer, not as a heading for the others. | "A name for the fight against terrorist groups after 9/11."
civics.modern.tribe | 2 | unclear | Circular: "What is an American Indian tribe?" is answered with "One of over 500 American Indian tribes". | "A group of American Indians with its own history and government. Today there are over 500 tribes in the US." (p.55)
civics.modern.q103 | 1 | minor | Explanation "lasted through much of the 1930s" is not in the cited source. "recession" (the exam's own word) is never explained. | "A recession is a time when many businesses close and many people lose jobs."
civics.modern.q105 | 2 | minor | The explanation repeats the question. | "He was elected four times, from 1932 to 1944."
civics.modern.q112 | 2 | minor | Explanation "This is the movement's goal, as USCIS states it" gives no reason. | "Example: it worked to end laws that made Black and white children go to separate schools."
civics.modern.q114 | 1 | minor | Explanation "the US led a coalition to reverse it" is not in the cited Q114 (gov/hs_gulfwar.txt is saved but not cited); "coalition" is a hard word. | "Iraq's army had taken over Kuwait in 1990."
civics.modern.q118 | 1 | wrong | This official test question (Q118) has priority "extra", so a learner studying only core cards never sees it. Every one of the 128 questions can be asked. | Set priority to core.
civics.modern.app-tribe | 1 | unsupported | Explanation "USCIS accepts any tribe on its list of 25 names" and a back that lists only the 25 imply that other tribes are wrong. The USCIS list adds "For a complete list of tribes, please visit bia.gov." | "Any of the 25 tribes USCIS lists, such as Cherokee or Navajo. The full list of tribes is at bia.gov."
civics.modern.app-gulf | 2 | minor | "coalition" is a hard word; "neighbouring" is British spelling. | "the US and other countries force Iraq's army out of a nearby country"
civics.modern.contrast-war-reasons | 2 | unclear | "ideology", "ideological" and "territorial" are above plain English. | "Korea and Vietnam: to stop communism from spreading. Gulf War: to push Iraq's army out of Kuwait."

### Topic 11: Symbols

civics.symbols.liberty | 1 | minor | Back calls the statue "a symbol of freedom" (p.69: France gave it "as a symbol of friendship"; it is "a famous symbol of the United States"). Explanation "a common first sight for immigrants arriving by sea" is not in the source. | Source p.69: "In 1886, France gave the statue to the United States as a symbol of friendship."
civics.symbols.flag | 1 | minor | Example "A new star is added on the July 4 after a new state joins" is supported by 4 USC 2, not by the cited study-guide p.71. | Cite 4 USC 2 (saved in gov/).
civics.symbols.anthem | 1 | minor | Example "'Spangled' describes the stars on the flag looking like they shine at night" is an unsourced, loose gloss. | "'Spangled' means covered with small shiny things. Here it means the stars on the flag."
civics.symbols.epluribus | 1 | minor | Example "It appears on US coins alongside the newer motto" is not in the cited Q124 or 36 USC 302. | Cite a source or drop it.
civics.symbols.app-anthem | 2 | minor | "bombardment" and "official song" are harder than needed. | "...a song about the flag still flying after a night of attacks..."
civics.symbols.app-liberty | 1 | minor | Explanation "symbolising freedom" is the same unsupported claim as the liberty primer (and British spelling). | "a gift from France in 1886, as a symbol of friendship"

### Topic 12: Holidays

civics.holidays.juneteenth | 1 | wrong | Explanation "It happened in 1865, after the 13th Amendment had already made slavery illegal nationwide" is false: June 19, 1865 came BEFORE the 13th Amendment was added on December 6, 1865 (study guide p.61; the deck's own card civics.c19.13th-date). The example "became a national holiday only in 2021" is not in the cited p.74. | "It happened on June 19, 1865, after the Civil War ended. The 13th Amendment ended slavery in law later that year."
civics.holidays.q126 | 2 | ambiguous | The question asks for THREE holidays; the back gives one ("New Year's Day."). | Back: "New Year's Day, Independence Day, Thanksgiving Day."
civics.holidays.q126 | 1 | unsupported | None of the other 10 accepted answers is on the card ("The other 10 are named on the cards that follow"). The set cards that follow ask for dates, not names, so the USCIS wording "Presidents Day (Washington's Birthday)" and "Juneteenth" is never shown as a Q126 answer. | Add: Martin Luther King, Jr. Day; Presidents Day (Washington's Birthday); Memorial Day; Juneteenth; Independence Day; Labor Day; Columbus Day; Veterans Day; Thanksgiving Day; Christmas Day. (65/20)
civics.holidays.memorial | 2 | minor | British spelling "honouring" (also "honour/honours" in veterans, q127, q128, app-veterans and contrast-memorial-veterans), while the USCIS answers on the same cards say "honor". | "honoring"
civics.holidays.q128 | 1 | minor | Explanation "honours everyone who served, alive or deceased" is not in Q128; "deceased" is a hard word. | "It thanks everyone who served in the military."

# Card standard, one page (for writers and fixers)

The full rules are in CARD-STANDARD.md; this page is what you need to write.

**The one rule.** Never write a fact you did not read in a source you fetched or
that is saved. Paraphrase in plain British English; quote verbatim only when the
words matter. Unsure → leave it out and report it.

**Privacy.** No email, name or personal detail in any request. Generic User-Agent.

**Shape** (see decks/kanban-guide/notes/*.json for real examples): id
`<family>.<topic-slug>.<card-slug>`; type basic | cloze (one `{{c1::…}}`) |
scenario (with choices); kind primer | fact | application | classification |
contrast; priority core | extra; order (unique, in your range, gaps of 5–10);
front (a question, or a cloze sentence); back (≤ 25 words, lists ≤ 3 items);
explanation (1–2 sentences saying WHY, never repeating the answer); source
(title, section, page); sourceURL (exact page or anchor); sourceLicence ("A ·
public domain", "B · CC BY 4.0", "B · public domain (US Government work)", …);
uses (every term the card relies on, spelled exactly as the registry does);
conceptIDs. Primers also: introduces (exactly one term, the registry spelling)
and example (concrete, "like X, but…"). Volatile facts: volatile + validAsOf.
Scenario choices: choicesExplained says why each wrong option is wrong.

**Teaching order.** Each topic opens with primers for its registry terms, then
facts, then application and classification (every core fact concept needs one),
then contrasts. Use only terms from earlier topics (registry) and your own
earlier primers. Abbreviations: teach them (primer) or add them to the deck
glossary list in your report. Complete sets: one card per member.

**Sources.** Primary sources first (the owner's documents, law, government
handbooks). Wikipedia only co-cites; alone it needs `"sourceFallback": true` and a
line in your report. Figures only where the figure is the content, with alt text
that describes without giving the answer, a credit and a licence.

**Budget.** Stay within 15% of your topics' card budget in the brief. Anything
beyond the exam's scope is priority "extra".

**Before you reply**, from /home/user/conyso-initiatives-deck:
`node build/check.mjs --registry=research/deck-briefs/<slug>-terms.json` (your
files must be clean) and `node build/sources.mjs --only=<slug>` (your deck's links must answer).
Never run git. Never edit another writer's files.

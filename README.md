# Certification flashcard decks

Free, standardised, sourced flashcard decks for professional certification
exams, published on a conyso.com subpath: Anki packages, CSV and Markdown, and
a readable page for every deck. This repository holds the research, the
standards, and (next) the build.

The research was first saved on the Law Tome's working branch
(`krishnachagti-sudo/law-tome`, ``) and moved here on
24 September 2026. The reference-site playbook skill in
`.claude/skills/reference-site-playbook/` carries the Law Tome and Bias Atlas
engine, page skeletons, search work and research protocol that this project
forks from.

Researched 23 and 24 September 2026 by parallel agents under the no-invented-facts rules
(`.claude/skills/reference-site-playbook/references/research-protocol.md`).
Every claim in the reports carries its source URL. Anything the researcher
could not read is marked "not verified".

## The decision so far

- **Product:** free, standardised, sourced flashcard decks for professional
  certification exams. They import into Anki, with CSV and Markdown for other
  apps, and each deck has a readable web page.
- **Scope:** certifications only, for now. Languages and general subjects are
  out.
- **Why:** nobody offers free, sourced, versioned, standardised decks across
  many certifications. No deck found cites official documentation or
  publishes a version history. The free decks on AnkiWeb are fragmented and
  stale.
- **Main constraints:**
  - Candidate agreements ban exam content, so cards may only use public
    sources, written in their own words.
  - Documentation licences vary: Kubernetes/CNCF, Microsoft and Google are
    open; AWS and Cisco allow personal use only.
  - CompTIA, CFA Institute and PMI restrict third-party material, so they are
    partnership-first.
  - CompTIA objects to AI-generated study material.
- **Distribution:** through instructors, associations and each exam's own
  community.
- **Learning science:** `LEARNING-SCIENCE.md` synthesises six sourced reports in `learning-science/`.
- **Card standard:** `CARD-STANDARD.md`, covering how every card is written, structured,
  checked and released.
- **Content policy:** `CONTENT-POLICY.md`, covering allowed sources, how exams are named,
  the bodies we don't name yet, and how AI is used.
- **Hosting:** a conyso.com subpath (decided 24 September 2026).
- **Master list:** `MASTER-LIST.md` and `master-list.csv` rank every scored exam from both passes (first pass in `candidates/`, long tail in `candidates-longtail/`). `CANDIDATES.md` is the first-pass ranking, kept for its reasoning.

## Building

Requirements: Node 22 or later; Python 3 with genanki for the `.apkg` export;
Chromium for the PDF export (`CHROME_BIN`, or the preinstalled
`/opt/pw-browsers/chromium`).

```
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt
npm run check                 # the card checker: a failure blocks release
npm run build                 # every deck in decks/ → dist/decks/<slug>/, every format
npm test                      # the test suite
node build/build.mjs --fixtures --only=csv,json   # the fictional test deck, some formats
```

The layout:
- `decks/<slug>/deck.json` and `decks/<slug>/notes/*.json` (one file per topic);
- `concepts/<family>.json` (the concept registry);
- the frozen card shape in `src/schema.mjs`, pinned by `src/schema.lock.json`;
- the exporters in `src/exporters/`, one per format.

## Roadmap

1. **The engine.** A fork of the Law Tome's build: note types, the card
   checker, the deck page, and exports in every popular format from one
   source. That covers Anki `.apkg` and Anki text, CSV and TSV for Brainscape,
   Mochi, Mnemosyne, Knowt and spreadsheets, Markdown for Obsidian, Logseq and
   Mochi, JSON, printable PDF cards and a study sheet, and a web study mode.
   The product is format-neutral, not another AnkiHub (`CARD-STANDARD.md`
   §10). In progress on branch `claude/deck-engine`.
2. **The first family: Scrum and Kanban.** Built on the open guides.
3. **The Tier A and B families** from `MASTER-LIST.md`, family by family.
4. **Sibling: a practice-question index.** Thousands of original, sourced
   questions per exam. Every question explains every wrong option and links
   to its concept's cards and page through the shared `ConceptIDs`. Three
   things make it harder than the decks:
   - A multi-exam question site looks exactly like the dump sites
     certifying bodies hunt. CompTIA flags sites that "only" provide
     questions and answers, and sites covering "a wide variety of exams".
     So it must be visibly the opposite: sourced, explained and linked to
     teaching.
   - Good distractors are expensive to write, and bad ones plant false
     knowledge.
   - Thousands of near-identical question pages read as mass-generated
     pages to search engines.

   Before building it, research item-writing and the question-bank market.

## About the raw evidence

Each report cites a source URL or DOI for every claim. The raw pages the
researchers downloaded (about 220 MB, referred to in the reports as
`scratchpad/...` or `raw-*/`) were kept only in the research session's
temporary scratchpad and are not in this repository. Anything needed again
is re-fetched from the cited source.

## Reports

| File | What it covers |
|---|---|
| `flashcards-general/tech.md` | Anki formats, stable IDs for updates, other apps' import formats, FSRS |
| `flashcards-general/market.md` | Deck makers, quality complaints, AnkiHub, the gap |
| `flashcards-general/demand.md` | Which subjects people want decks for, who ranks, what people pay |
| `flashcards-general/legal-design.md` | The Anki trademark, licences, copyright, audio, card-design principles and evidence |
| `certification-market/size-demand.md` | Exam volumes, number of certifications, exam churn, flashcard category growth |
| `certification-market/competitors.md` | Every flashcard and Anki offering for certifications found |
| `certification-market/distribution.md` | Search results, communities, instructors, vendor programmes |
| `certification-market/rules-risks.md` | Candidate agreements, trademarks, documentation licences, curricula, court cases |

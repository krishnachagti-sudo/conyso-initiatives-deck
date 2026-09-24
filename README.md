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

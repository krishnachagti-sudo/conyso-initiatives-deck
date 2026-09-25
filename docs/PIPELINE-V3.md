# Pipeline v3: the plan

Written 25 September 2026, after wave 2. Wave 2 used 3,033 agent tokens a
card; wave 1 used about 2,700. This plan lists every problem found in the
flow, with its evidence, the fix and the order of work. The target is about
1,800 tokens a card, research included, with no loss of accuracy.

## 1. Problems

### A. The tools themselves

| # | Problem | Evidence | Fix |
|---|---|---|---|
| A1 | The checker, preflight, the link check and the build end with `process.exit()`, which can drop output still waiting in a pipe. | A test printing 5,000 lines then exiting lost 217 of them in one run out of three. Every `check.mjs \| grep` count this project used could have been low. The pass/fail verdict was never affected, because it uses the internal count. | Set `process.exitCode` instead. |
| A2 | Agents and the main session count problems by hand-parsing the checker's text with grep and awk. | I misread civics output that way and told you the checker had "stopped" at the first error. It had not. | `check.mjs --only=<slug> --summary` prints counts by rule and by abbreviation; `--json` gives machine output. |
| A3 | Merge steps are one-off scripts written in scratch for each deck (civfix, femamerge, genabbr, kcsagloss). They are untested and get lost with the container. | Four such scripts in wave 2, and one broke on an apostrophe. | `build/merge.mjs <slug>`, tested. It merges concept files, splits "Term (ABBR)" entries, attaches registry abbreviations to primers, fixes the house ID format, copies the prerequisite deck's glossary entries, and reports cards per topic against budget and pool coverage. |

### B. Research

| # | Problem | Evidence | Fix |
|---|---|---|---|
| B1 | The research brief is a half-written deck. Its concept table carries a plain definition for every term. Writers must not copy it, so they re-read the sources: the work is paid for twice. | Briefs of 15,000 to 30,000 words; FEMA ICS research used 302k tokens. The Law Tome and Bias Atlas had no separate research stage: one agent researched and wrote each entry from a 540-word brief. | Research produces structured files only: exam facts (under one page), sources (URL, licence quote, tier, saved path), outline mapped to topics, term registry, concept list (ID, name, kind, priority, topic, source page, no prose), budget, and trap bullets. It writes no definitions. Target: 5,000 words and 150k tokens a deck. |
| B2 | Whole websites are mirrored. | 1.1 GB of raw downloads (KCSA 341 MB, FAA 459 MB), of which 26 MB of extracted text is ever read. | Fetch only the pages the outline needs, and keep text extracts. |
| B3 | Everything is fetched twice. | The FEMA brief: "every exam fact below was present in both fetches". | The research protocol asks for a second look only for a figure that matters: exam facts (pass mark, question count, dates) and licence terms. |
| B4 | The saved sources live only in this session's scratch folder. | Future audits, fixes and version updates will fetch everything again. | Keep a source manifest in the repository (URL, date, SHA-256, extract path). Decision D2 is where the extracts themselves live. |
| B5 | Related decks research shared ground again. | FCC General re-saved Technician sources; KCSA re-saved KCNA. | The research agent is given the prerequisite deck's manifest and registry and researches only what is new. |

### C. Writing

| # | Problem | Evidence | Fix |
|---|---|---|---|
| C1 | Writers type verbatim question-pool cards by hand. | These cards are 40% of each FCC deck: 423 of 1,054 in General, 409 of 1,012 in Technician. Two cards lost their keyed option; 28 drifted from the house format. | `build/pool-cards.mjs` generates each pool card's ID, front, choices, back, source and validAsOf from the skeleton. Writers add only the explanation and choicesExplained. |
| C2 | Parallel writers repeat each other's mistakes, because nothing is reviewed until all of them finish. | Shared-front set cards appeared in every FEMA ICS writer's files, "Term (ABBR)" in several, and underscores and the wrong prefix in two decks. | Pilot: one writer writes one topic first. The main session runs the checker and reads 15 cards, the writer notes are corrected, then the other writers start. |
| C3 | Writers read WRITER.md, DIGEST.md, the deck notes and the brief sections, which overlap. | DIGEST was meant to replace WRITER.md, but prompts still named both. | Writers read DIGEST (with the formats below) and a topic slice printed by `build/topic-slice.mjs <slug> <topics>`: that topic's terms, concepts, budget, traps and source paths. They do not read the brief. |
| C4 | A writer's own check has a category of expected errors, which teaches agents to ignore errors. | "Concept errors are expected until merge" appears in every writer report. | `check.mjs --concepts-extra=<file>` loads the writer's own concept file, so a writer's check can be fully clean. |
| C5 | Formats were implied, not stated: IDs, concept prefix, abbreviations, pool cards. | 0.76M tokens of clean-up at merge. | DIGEST states each format exactly, with one example per format. merge.mjs normalises anything that is still off. |
| C6 | Figures are optional, so they are skipped. | FEMA ICS writers added none. The later figure pass drew 12, and four were wrong until the main session looked. | The research concept list marks the concepts a figure should carry. Figure cards are part of the budget. The main session renders every figure and checks it against the source before commit. |
| C7 | The budget formula makes large decks: one card per term, per rule and per set member, plus one application card per core concept. | FEMA ICS: 1,075 cards for four introductory courses. | Decision D1. |

### D. Audit and fix

| # | Problem | Evidence | Fix |
|---|---|---|---|
| D1 | Auditors on the strong model spend time on mechanical faults. | About 120 wrong page links, 28 pool cards in the wrong format, about 70 shared fronts, and wrong licence labels. | Checker rules, written before writing starts: pool cards verbatim against the skeleton (question, choices, key, ID, source format); licence label against the source host (`src/licences.json`); a "name two" card must give two answers; `#page=` within the PDF's page count (in sources.mjs). The shared-front rule is already in. |
| D2 | Audit reports are free text, so fixers re-read whole files and re-check sources. | Fixers used 2.88M tokens against the auditors' 2.40M. | Auditors write a patch file (`<slug>-fixes.jsonl`: card ID, field, new value, reason) for every finding whose fix they know. `build/apply-fixes.mjs` applies them and runs the checker. Fixer agents get only the findings marked "needs research". |
| D3 | Minor findings are about half of all findings, and all were fixed at full agent cost. | Civics: 177 of 265 findings were minor. | A minor finding without a patch is logged and skipped. |
| D4 | Fixes are never checked. | Wrong-answer cards were rewritten by the smaller model and never re-read (for example the new FEMA ICS "Type 4" scenario). | A verify pass on the strong model, covering only the cards whose finding was "wrong": about 100 a wave. |
| D5 | Prompts paraphrased policy and got it wrong. | I told the KCSA auditors to allow only tier A and B sources; the policy allows tier C. | Prompts cite the policy section instead of restating it. |
| D6 | Systematic problems are found only after all writing is done. | Copied course scenarios, found in audit across several FEMA ICS writers. | Audit the pilot topic (C2) before the other writers start. |

### E. Orchestration and records

| # | Problem | Evidence | Fix |
|---|---|---|---|
| E1 | Token accounting is done by hand from notifications. Research run before the limit was lost, and the main session's own cost is not counted. | The wave 2 table in the lessons doc leaves out three research runs. | `research/ledger.csv`: one row per agent (wave, deck, stage, model, tokens, cards), appended when the agent reports. |
| E2 | Agent reports are long, 300 to 500 words each, and all of them land in the main session's context. | Every notification in wave 2. | Reports are capped at five lines, as in the Tome and Atlas briefs; detail goes in files. |
| E3 | Release blockers live only in chat and in notes. | Civics officials' names, the KCSA outline check, fema.gov and uscis.gov links to open by hand. | A `releaseBlockers` list in deck.json, shown on the deck page. The checker refuses `status: released` while the list is non-empty. |
| E4 | Decks changed after they were pushed, with no version or changelog entry. | The FAA duplicate was removed and a civics front reworded, both still at 0.1.0. | merge.mjs and apply-fixes.mjs add a changelog line and bump the patch version when a pushed deck's cards change. |
| E5 | Resuming after the API limit is improvised each time. | Wave 2 resume prompts were written by hand. | Writers save each topic file as soon as it is complete. `build/status.mjs` lists, per deck, which topic files exist, are clean, and meet budget. The resume prompt is generated from that. |

## 2. Target cost per card

| Stage | Wave 2 | Target | Main lever |
|---|---|---|---|
| Research | about 280 (FEMA ICS: 302k for 1,075 cards) | 140 (150k a deck) | B1–B5 |
| Writing | 1,324 | 900 | C1, C3, C5 |
| Merge clean-up | 199 | 20 | C5, A3 |
| Audit | 629 | 450 | D1 |
| Fixing | 755 | 250 | D2, D3 |
| Verifying fixes | 0 | 40 | D4 |
| **Total** | **about 3,240 with research** | **about 1,800** | |

## 3. Order of work

1. **Tools**:
   - A1, A2, A3 (exit codes, summary output, merge script);
   - C1 (pool card generator);
   - C4 (`--concepts-extra`);
   - D1 (checker rules);
   - D2 (apply-fixes script);
   - E1, E3, E4, E5.

   Each comes with a test. Then run all nine decks under the new rules and fix what they find.
2. **Briefs**: rewrite BRIEF.md (B1–B5), DIGEST.md (C3, C5, C6), AUDIT.md (D2, D3, D5) and the writer-notes template. Add `build/topic-slice.mjs`.
3. **Wave 3 with the new pipeline**:
   - research, then a pilot topic;
   - review the pilot and audit it;
   - fan out to the other writers;
   - merge, audit, apply patches, fix, verify and commit;
   - record every agent in the ledger, and compare against the targets in section 2.

## 4. Decisions (made 25 September 2026)

- **D1, deck scope: comprehensive.** Every concept, extras included, as in wave 2.
- **D2, source extracts: committed.** The text extracts of tier A and B sources
  go into `research/sources/<slug>/` with a manifest. Tier C text is never
  committed; its manifest row records only the URL, the date and the checksum.
- **D3, one deck at a time.** Each deck runs the whole pipeline and ends
  with a short review. The next deck starts only after the process has been
  corrected. First: the Prometheus Certified Associate (small, open docs,
  builds on KCNA).

## 5. Runbook: one deck

| Step | Who | What |
|---|---|---|
| 1. Research | one agent, strong model | Follows research/deck-briefs/BRIEF.md. Writes `<slug>.md`, `-sources.json`, `-terms.json`, `-concepts.json` and `-budget.json`. |
| 2. Set up | main session | Writes deck.json (with `pool` if the exam has one) and `<slug>-writers.md` from WRITERS-TEMPLATE.md. Runs `node build/pool-cards.mjs <slug>` if there is a pool. |
| 3. Pilot | one writer, smaller model | Writes one topic, following DIGEST.md. The main session runs `node build/status.mjs <slug> --registry` and reads 15 cards. Then one auditor audits that topic, and its patches are applied. The findings correct `<slug>-writers.md`. |
| 4. Fan out | writers, smaller model | The remaining topics, in groups of 4 to 6. |
| 5. Merge | main session | `node build/merge.mjs <slug>`. Topics more than 15% off budget go back to the same writer. Then `node build/check.mjs --only=<slug> --summary` must be clean. |
| 6. Audit | auditors, strong model | Follow AUDIT.md: one per 400 to 600 cards, each writing a report and a patch file. |
| 7. Patch | main session | `node build/apply-fixes.mjs <slug> <fixes.jsonl>`, then the checker. |
| 8. Fix | fixer, smaller model | Only findings marked `"needs": "research"`, following DIGEST.md. |
| 9. Verify | one agent, strong model | Follows VERIFY.md, for the cards whose finding was "wrong". Its patches are applied. |
| 10. Figures | main session | Renders every figure and checks it against its source. |
| 11. Sources | main session | `node build/cache-sources.mjs --only=<slug> --saved=<scratch sources>` and `node build/sources.mjs --only=<slug>`. |
| 12. Record | main session | `checks` and `releaseBlockers` in deck.json; one ledger row per agent in research/ledger.csv. |
| 13. Ship | main session | Build, preflight and the tests in a clean worktree, then commit and push. |
| 14. Review | main session | A short note in docs/: what cost the most, what broke, what to change before the next deck. |

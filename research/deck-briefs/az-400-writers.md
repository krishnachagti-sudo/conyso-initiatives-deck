# AZ-400: notes for every writer (read after DIGEST.md)

- **Slug:** `az-400`. **Family prefix:** `az400` (card ids `az400.<topic-slug>.<card-slug>`, concept ids `az400.<concept-slug>`). Use the concept ids in `az-400-concepts.json`; add new ones only when a card needs them.
- **Builds on:** `az-104`, `github-foundations`. Their registry terms (topic 0) count as taught: never re-introduce them.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - learn.microsoft.com → tier C ("© Microsoft 2026" (page footer))
  - www.microsoft.com → tier C (Microsoft legal page; no open licence)
  - cdn-dynmedia-1.microsoft.com → tier C (Microsoft trademark list; no open licence)
  - docs.github.com → tier B ("Creative Commons Attribution 4.0 - for documentation and content in the assets,)
  - github.com → tier B (LICENSE: "Attribution 4.0 International" (Creative Commons Attribution 4.0 legal)
  - git-scm.com → tier C (No licence statement on the page read; src/licences.json classes git-scm.com as )
  - semver.org → tier B ("Creative Commons ― CC BY 3.0" (semver.org, License section))
  - calver.org → tier B ("© 2020" followed by a link to https://creativecommons.org/licenses/by-sa/4.0/ ()
- **Evidence is required.** The texts are in `research/sources/az-400/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-26 · documentation as published"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

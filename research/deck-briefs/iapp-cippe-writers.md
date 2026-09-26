# CIPP/E: notes for every writer (read after DIGEST.md)

- **Slug:** `iapp-cippe`. **Family prefix:** `cippe` (card ids `cippe.<topic-slug>.<card-slug>`, concept ids `cippe.<concept-slug>`). Use the concept ids in `iapp-cippe-concepts.json`; add new ones only when a card needs them.
- **Builds on:** nothing. Every term gets its primer.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - iapp.org → tier C ("The contents of the Site are intended for your personal (professional), noncomm)
  - assets.contentstack.io → tier C (No licence statement in the PDF; IAPP site terms apply: "The contents of the Sit)
  - publications.europa.eu → tier B (No licence read for this text: the EUR-Lex legal notice (https://eur-lex.europa.)
  - european-union.europa.eu → tier B ("Unless otherwise indicated (e.g. in individual copyright notices), content owne)
  - commission.europa.eu → tier B ("Unless otherwise indicated (e.g. in individual copyright notices), content owne)
  - op.europa.eu → tier B ("The editorial content of this website, which is owned by the EU, is licensed un)
  - www.edpb.europa.eu → tier B ("The reuse of any information of this website is authorized for commercial and n)
  - curia.europa.eu → tier B ("Editorial content and the case-law can be reproduced provided the source is ack)
- **Evidence is required.** The texts are in `research/sources/iapp-cippe/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-25 · CIPP/E body of knowledge 1.3.3"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

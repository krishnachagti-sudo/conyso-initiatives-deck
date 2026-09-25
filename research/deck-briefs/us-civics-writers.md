# US civics: notes for every writer (read after WRITER.md and DIGEST.md)

- Deck slug us-civics; card ids civics.<topic-slug>.<card-slug>; question cards use
  q<NN> as the slug (civics.congress.q016). ConceptIDs: the brief's (civics.*).
- Terms: EXACTLY as in research/deck-briefs/us-civics-terms.json.
- Every one of the 128 official questions (research/deck-briefs/us-civics-questions.txt)
  becomes ONE basic card: front = the question verbatim; back = one accepted answer
  (the plainest), explanation = why, and a line "Other accepted answers: …" listing
  every other accepted answer verbatim (split the list over the explanation if the
  back limit bites). source "USCIS 2025 civics test, question N" with the list URL
  from the brief; sourceLicence "B · public domain (US Government work)". Mark the
  20 questions for applicants 65/20 with priority core and tag note "65/20" in
  explanation. Answers that change (officials, state-specific): volatile: true,
  validAsOf "2026-09-25 · verify at uscis.gov"; state-specific ones say "Answers vary
  by state; find yours at …" (the source the brief gives).
- Primers first in each topic: explain each registry term plainly from US Government
  sources (USCIS study materials, the Constitution at archives.gov/constitution.gov,
  USA.gov), with a concrete example, so the answer makes sense.
- Figures: none needed. Do not copy study-guide images.
- Order ranges: topic N uses N×1000 to N×1000+999.
- Concepts file: research/deck-briefs/us-civics-concepts-<letter>.json.
- Your check: node build/check.mjs --registry=research/deck-briefs/us-civics-terms.json

// The frozen shape of every card (CARD-STANDARD.md §2 and §3).
//
// Everything in this file is part of the public contract with learners who
// have already imported a deck. Anki updates a note in place only while its
// note type keeps the same fields in the same order ("updating is generally
// not possible if the note type is changed (e.g. … add an extra field)",
// docs.ankiweb.net/importing/packaged-decks.html). So after the first release:
//   - never rename, reorder or remove a field;
//   - never change a note type ID;
//   - add a field only in a new major version, announced on the deck page.
// test/schema.test.mjs pins this file against schema.lock.json so a change
// cannot slip through unnoticed.

/** Field names in their permanent order. `ID` must stay first: Anki matches
 * text imports on a note's first field. */
export const FIELDS = [
  'ID',
  'Front',
  'Back',
  'Choices',
  'ChoicesExplained',
  'Explanation',
  'Example',
  'Contrast',
  'Links',
  'Source',
  'SourceURL',
  'SourceLicence',
  'ValidAsOf',
  'Topic',
  'ExamRefs',
  'Priority',
  'Kind',
  'Introduces',
  'Uses',
  'Order',
  'MyNote',
  'PageURL',
  'ReportURL',
  'ConceptIDs',
  'NotePrompt',
];

/** Note types and their permanent Anki model IDs. The IDs were chosen once
 * (24 September 2026) and must never change. */
export const NOTE_TYPES = {
  basic: { name: 'Cert Decks · Basic', id: 1901826411, cloze: false },
  cloze: { name: 'Cert Decks · Cloze', id: 1901826412, cloze: true },
  scenario: { name: 'Cert Decks · Scenario', id: 1901826413, cloze: false },
};

/** Card kinds (CARD-STANDARD.md §1, §2a). */
export const KINDS = ['primer', 'fact', 'application', 'classification', 'contrast'];

/** Kinds that must not appear before their topic's primers. */
export const AFTER_PRIMERS = ['fact', 'application', 'classification', 'contrast'];

/** Kinds that carry the paraphrase prompt (CARD-STANDARD.md principle 25). */
export const PROMPTED_KINDS = ['primer', 'classification'];

export const NOTE_PROMPT = 'Write the meaning in your own words in “My note”, then review.';

export const PRIORITIES = ['core', 'extra'];

/** Source tiers from CONTENT-POLICY.md §3. Tier D is never allowed. */
export const LICENCE_TIERS = {
  A: 'public-domain question pool',
  B: 'open licence',
  C: 'facts only',
};

/** House limits (CARD-STANDARD.md §5, all marked [H]). */
export const LIMITS = {
  backWords: 25,
  listItems: 3,
  primerNewTerms: 1,
};

/** The JSON key on a note for each Anki field. Keys are camelCase in the
 * source files; the Anki field names are the frozen FIELDS above. */
export const FIELD_KEYS = {
  ID: 'id',
  Front: 'front',
  Back: 'back',
  Choices: 'choices',
  ChoicesExplained: 'choicesExplained',
  Explanation: 'explanation',
  Example: 'example',
  Contrast: 'contrast',
  Links: 'links',
  Source: 'source',
  SourceURL: 'sourceURL',
  SourceLicence: 'sourceLicence',
  ValidAsOf: 'validAsOf',
  Topic: 'topic',
  ExamRefs: 'examRefs',
  Priority: 'priority',
  Kind: 'kind',
  Introduces: 'introduces',
  Uses: 'uses',
  Order: 'order',
  MyNote: 'myNote',
  PageURL: 'pageURL',
  ReportURL: 'reportURL',
  ConceptIDs: 'conceptIDs',
  NotePrompt: 'notePrompt',
};

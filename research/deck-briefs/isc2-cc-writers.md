# ISC2 CC: notes for every writer (read after DIGEST.md)

- **Slug:** `isc2-cc`. **Family prefix:** `cc` (card ids `cc.<topic-slug>.<card-slug>`, concept ids `cc.<concept-slug>`). Use the concept ids in `isc2-cc-concepts.json`; add new ones only when a card needs them.
- **Builds on:** nothing. Every term gets its primer.
- **Sources, their tiers and licence labels.** The label must match src/licences.json for the host. Tier A or B: "B · <licence>", with evidence. Tier C: "C · facts only, in our own words", with no evidence.
  - nvlpubs.nist.gov → tier B ("Works authored by NIST employees are not subject to Copyright protection within)
  - edge.sitecorecloud.io → tier C ("All contents of this site constitute the property of ISC2, Inc. and may not be )
  - publications.europa.eu → tier B (No licence read for this text (iapp-cippe research: EUR-Lex legal notice returne)
  - www.govinfo.gov → tier B (No licence statement read on the file; a US federal regulation (CONTENT-POLICY §)
  - www.isc2.org → tier C ("All contents of this site constitute the property of ISC2, Inc. and may not be )
  - www.itu.int → tier C ("All rights reserved. No part of this publication may be reproduced or utilized )
  - www.rfc-editor.org → tier C ("Distribution of this memo is unlimited." (no reuse licence read; IETF Trust leg)
  - attack.mitre.org → tier B ("The MITRE Corporation (MITRE) hereby grants you a non-exclusive, royalty-free l)
  - csrc.nist.gov → tier C (Definition quoted from CNSSI 4009 (as the page cites). Facts only)
  - genai.owasp.org → tier B ("Unless otherwise specified, all content on the site is Creative Commons Attribu)
  - www.nist.gov → tier B ("Works authored by NIST employees are not subject to Copyright protection within)
- **Evidence is required.** The texts are in `research/sources/isc2-cc/`; the slice prints a passage under each concept.
- **Volatile facts:** `volatile: true`, `validAsOf: "2026-09-26 · CC outline effective 1 September 2026"`.
- **Scenarios:** your own. Never reuse a source's worked examples or exercises.
- **Deck notice:** already in deck.json.

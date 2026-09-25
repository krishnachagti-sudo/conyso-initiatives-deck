# KCSA: notes for every writer (read after WRITER.md)

- Deck slug: kcsa. Card ids: k8ssec.<topic-slug>.<card-slug>. ConceptIDs:
  k8ssec.<concept-slug> (reuse KCNA k8s.* IDs for KCNA concepts) from the brief's concept names. Terms in introduces/uses: the
  brief's concept names, lowercased (Kubernetes object kinds keep their casing:
  "Pod", "Deployment", "Service").
- Licences: kubernetes.io and the CNCF curriculum "B · CC BY 4.0"; Prometheus and
  Helm docs "B · Apache 2.0" (CONTENT-POLICY.md now lists these as tier B). Cite
  the exact docs page (and anchor) for each card.
- Teach for the exam's level: concepts, purposes and differences, not command
  syntax, except where the brief says a competency needs it.
- Where a Kubernetes behaviour depends on version, mark the card volatile with
  validAsOf "2026-09-25 · Kubernetes docs as of that date".
- Figures: use the brief's kubernetes.io figures (CC BY 4.0, credit
  "Kubernetes documentation, <page>") where the diagram is the content, e.g. the
  cluster components diagram; save to decks/kcsa/media/. Draw simple SVGs for the
  brief's drawable diagrams (credit "Drawn for this deck from <page>", licence
  "B · CC BY-SA 4.0").
- Order ranges: topic N uses N×1000 to N×1000+999 (gaps of 5 to 10).
- Concept file: research/deck-briefs/kcsa-concepts-<letter>.json.
- Terms: EXACTLY as in research/deck-briefs/kcsa-terms.json. Topic 0 terms are
  taught by the KCNA deck (prerequisiteDecks): use freely, never re-introduce.
- NIST publications (e.g. SP 800-190): "B · public domain (US Government work)".
- Your check: node build/check.mjs --registry=research/deck-briefs/kcsa-terms.json
- The deck notice (for the main session): the Linux Foundation trademark wording in
  the brief's naming section.

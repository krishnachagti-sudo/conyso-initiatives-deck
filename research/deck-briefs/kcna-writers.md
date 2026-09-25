# KCNA: notes for every writer (read after WRITER.md)

- Deck slug: kcna. Card ids: k8s.<topic-slug>.<card-slug>. ConceptIDs:
  k8s.<concept-slug> from the brief's concept names. Terms in introduces/uses: the
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
  cluster components diagram; save to decks/kcna/media/. Draw simple SVGs for the
  brief's drawable diagrams (credit "Drawn for this deck from <page>", licence
  "B · CC BY-SA 4.0").
- Order ranges: topic N uses N×1000 to N×1000+999 (gaps of 5 to 10).
- Concept file: research/deck-briefs/kcna-concepts-<letter>.json.

# Prometheus (PCA): notes for every writer (read after DIGEST.md)

- **Slug:** `prometheus-pca`. **Family prefix:** `prom`. Example card id:
  `prom.promql.rate-vs-irate`; example concept id: `prom.rate`. Use the
  concept ids in `prometheus-pca-concepts.json` exactly. Add a new one only
  if a card needs it, and list it in your concept file.
- **Builds on:** `kcna`. KCNA's terms (topic 0 in the registry: Pod, Service,
  kubelet, and so on) count as taught, so never re-introduce them. Reuse a
  KCNA concept id only if it is in `concepts/k8s.json`.
- **Sources and licence labels:**
  - `prometheus.io/docs/...` → `"B · Apache 2.0"`;
  - `opentelemetry.io/...` → `"B · CC BY 4.0"`;
  - the CNCF curriculum on github.com/cncf/curriculum → `"B · CC BY 4.0"`;
  - `training.linuxfoundation.org`, `docs.linuxfoundation.org`,
    `sre.google` → `"C · facts only, in our own words"`.

  Prefer the prometheus.io page over the GitHub source of the same page.
- **Saved text:** the scratch folder
  `/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/prometheus-pca/`
  (`md/` holds the docs as Markdown). The paths are in
  `prometheus-pca-sources.json`.
- **Volatile facts:** anything version-dependent, such as defaults, feature
  flags, or native histograms (experimental → stable). Use `validAsOf`
  `"2026-09-25 · Prometheus docs as of that date"`.
- **Pool:** none (the exam has no public question pool).
- **Figures:** the Prometheus architecture diagram (Apache 2.0, saved as
  `architecture.svg`) goes on `prom.architecture` with the credit
  "Prometheus Authors, Prometheus documentation, Overview". Also draw plain
  SVGs, from the docs, for:
  - the alert states inactive → pending → firing (topic 6);
  - cumulative histogram buckets with `le` (the histogram topic);
  - the Alertmanager path: grouping, inhibition, silencing, routing (topic 6).
- **Scenarios:** your own. The curriculum has no exercises to avoid, but
  never reuse examples from the docs word for word.
- **PromQL:** write queries in code form exactly as the docs do, and check
  every function name and argument order against the functions page.
- **Deck notice:** already in deck.json.

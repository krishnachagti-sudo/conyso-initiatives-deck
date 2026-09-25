# Research brief: Prometheus Certified Associate (PCA)

Slug: `prometheus-pca`. Family prefix: `prom`. Researched 25 September 2026.
Every fact below was read in a source fetched during this task. Saved copies
and extracted text are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/prometheus-pca/`
(file names are given as `[file]`). Prometheus docs were read as Markdown from
`raw.githubusercontent.com` (branch `main`) in `md/`. Six live prometheus.io
pages were fetched as well, and every anchor used in the concept list for them
was confirmed present.

**Prerequisite deck.** `prerequisiteDecks: ["kcna"]`. Topic 0 is the KCNA
deck. Note: `research/deck-briefs/kcna-terms.json` **does not exist**. The
KCNA topic-0 entries were copied from `kcsa-terms.json`, where the KCNA primer
terms are already registered at topic 0. The KCNA source manifest
(`research/sources/kcna/manifest.json`) already holds the Prometheus overview and
metric-types pages, the OpenTelemetry signals page, the CNCF glossary
"observability" entry and the kubernetes.io kube-state-metrics and resource
metrics pipeline pages. They are reused here. KCNA terms this deck deepens,
with no new primer: observability, three pillars, Prometheus, metric types,
OpenTelemetry, OTLP, logging architectures, event, service discovery, SRE,
label, selector, kube-state-metrics, cAdvisor, metrics server.

## Topics

| Topic | Name | Curriculum domain |
|---|---|---|
| T1 | Observability concepts | Observability Concepts (18%) |
| T2 | Prometheus fundamentals | Prometheus Fundamentals (20%) |
| T3 | PromQL: selectors, rates and time | PromQL (28%), part 1 |
| T4 | PromQL: aggregation, operators and histograms | PromQL (28%), part 2 |
| T5 | Instrumentation and exporters | Instrumentation and Exporters (16%) |
| T6 | Alerting and dashboarding | Alerting & Dashboarding (18%) |

PromQL is split in two because it is the largest domain.

## Exam facts

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | The Linux Foundation (Training & Certification). The curriculum is a CNCF publication. | Curriculum cover: "A Cloud Native Computing Foundation (CNCF) Publication" `[PCA_Curriculum.txt]`. The exam is sold on training.linuxfoundation.org, which is headed "© 2026 Linux Foundation - Education" `[lf-pca.txt]` | No |
| What it is | Foundational observability and Prometheus skills | "The Prometheus Certified Associate (PCA) exam demonstrates an engineers foundational knowledge of observability and skills using Prometheus, the open source systems monitoring and alerting toolkit." https://training.linuxfoundation.org/certification/prometheus-certified-associate/ | No |
| Level | Beginner, pre-professional | "Experience Level: Beginner"; "The PCA is a pre-professional certification designed for an engineer or application developer with special interests in observability and monitoring." (same page) | Rarely |
| Prerequisites | None | "There are no pre-requisites for this exam." (same page). The same page suggests KCNA, CKA or CKAD: "Ideal candidates may have achieved Kubernetes certifications such as KCNA, CKA, or CKAD…" | Rarely |
| Format | Online, remotely proctored, multiple choice | "This exam is an online, proctored, multiple-choice exam." (product page); "The exam is proctored remotely via streaming audio, video, and screen-sharing feeds." https://docs.linuxfoundation.org/tc-docs/certification/important-instructions-mc | Rarely |
| Question count | 60 (this is the generic multiple-choice figure; the only exception listed is CNPA) | "The multiple-choice exam is delivered online and consists of 60* multiple-choice questions. * CNPA exam consists of 85 multiple-choice questions." (important-instructions-mc) | Sometimes |
| Time | 90 minutes | Product page: "Duration of Exam 90 minutes". FAQ: "Candidates are allowed 90 minutes to complete Multiple Choice Exams, with the exception of CNPA." https://docs.linuxfoundation.org/tc-docs/certification/faq-mc | Sometimes |
| Pass mark | 75% (generic for LF multiple-choice exams) | "A score of 75% or above must be earned to pass the Multiple Choice Exam." (faq-mc) | Sometimes |
| Results | Within 24 hours | "Results will be emailed within 24 hours from the time that the exam is completed." (important-instructions-mc) | Rarely |
| Retake | One retake included | Product page: "One Retake" | Sometimes |
| Eligibility window | 12 months | Product page: "12 Month Exam Eligibility" | Sometimes |
| Validity | 2 years; renew by passing again | Product page: "Certification Valid for 2 Years". FAQ: "Certifications are valid for 2 years." and "Candidates have the option to retake and pass the exam to renew their certification." The FAQ's CARE auto-renewal list names only KCNA and KCSA, not PCA. | Sometimes |
| Price | $250 exam only; bundles $299 (with LFS241) and $495 (with THRIVE-ONE) | Product page: "1. Certification exam only – $250" … "3. Certification exam + Monitoring Systems and Services with Prometheus (LFS241) course – $299" | **Often** (the site was running a "35% Off" banner when fetched) |
| Curriculum version and date | None printed | The PCA PDF shows no version number or date `[PCA_Curriculum.txt]`. The repo README's versioning rule ("major and minor version … match the version of Kubernetes") is written for the Kubernetes curricula. | See "Not verified" |
| Prometheus version in the docs | Main branch `VERSION` file reads `3.14.0` | https://raw.githubusercontent.com/prometheus/prometheus/main/VERSION | **Often** |

## Naming

- **Marks, from the owner's own list.** The Linux Foundation lists as
  registered trademarks: "Prometheus®", "Prometheus Certified Associate®",
  "PromQL®" and "PromCon®" (https://www.linuxfoundation.org/legal/trademarks,
  under "The Linux Foundation has the following registered trademarks in the
  United States and/or other countries").
- **Usage terms.** From https://www.linuxfoundation.org/trademark-usage/: "You
  may make fair use of word marks to make true factual statements. But fair use
  does not permit you to state or imply that the owner of a mark produces,
  endorses, or supports your company, products, or services. Even when making
  fair use of a trademark, you should acknowledge the owner of the trademark
  with a trademark notice…". Also: "a ™ should not be changed to an ® in a
  trademark notice by anyone other than the owner", and "Do not refer to a
  product or service as being certified under any of The Linux Foundation's
  marks unless…".
- **How CONTENT-POLICY.md §4 applies.** The Linux Foundation is in §4's list, so
  the general rule and the "Everyone else" notice apply. Our brand leads, the
  exam name is plain text, there is no logo, and the page footer carries the
  notice. Title: `[Site name] deck for the Prometheus Certified Associate (PCA)
  exam`. Never "PCA Flashcards" and never "official". PromQL and Prometheus are
  themselves registered marks, so topic names that use them ("PromQL: …") state
  facts about content, and the notice covers them. Do not call the deck
  "Prometheus-certified".
- **Deck notice text:**
  > Prometheus Certified Associate (PCA), Prometheus and PromQL are registered
  > trademarks of The Linux Foundation. This deck is independent and is not
  > affiliated with, sponsored, endorsed or approved by The Linux Foundation or
  > the Cloud Native Computing Foundation.
- **Attribution for tier-B text.** Prometheus docs: © Prometheus Authors,
  Apache License 2.0 (keep the licence notice with the attribution, per §3).
  CNCF curriculum: CC BY 4.0. OpenTelemetry docs: CC BY 4.0.

## Outline

The domain order is the one on the LF product page, which matches the order of
the PDF's columns. The PDF is laid out in two columns, so its text extraction
interleaves them (`[PCA_Curriculum.txt]`, `#page=2`). Weights appear in both.
Objectives are quoted exactly.

**1. Observability Concepts: 18%** (#page=2)
- Metrics [T1]
- Understand logs and events [T1]
- Tracing and Spans [T1]
- Push vs Pull [T1]
- Service Discovery [T1] (configuration side in [T2])
- Basics of SLOs, SLAs, and SLIs [T1]

**2. Prometheus Fundamentals: 20%**
- System Architecture [T2]
- Configuration and Scraping [T2]
- Understanding Prometheus Limitations [T2]
- Data Model and Labels [T2]
- Exposition Format [T2]

**3. PromQL: 28%**
- Selecting Data [T3]
- Rates and Derivatives [T3]
- Aggregating over time [T3]
- Aggregating over dimensions [T4]
- Binary operators [T4]
- Histograms [T4]
- Timestamp Metrics [T3]

**4. Instrumentation and Exporters: 16%**
- Client Libraries [T5]
- Instrumentation [T5]
- Exporters [T5]
- Structuring and naming metrics [T5]

**5. Alerting & Dashboarding: 18%**
- Dashboarding basics [T6]
- Configuring Alerting rules [T6]
- Understand and Use Alertmanager [T6]
- Alerting basics (when, what, and why) [T6]

Counts: 5 domains and 26 objectives, 31 outline items in all. Every objective
maps to concepts in `prometheus-pca-concepts.json`. Main mappings:
"Understanding Prometheus Limitations" maps to `prom.not-for-billing`,
`prom.storage-single-node`, `prom.ha-pairs`, `prom.no-logs-in-prometheus` and
`prom.cardinality`. "Timestamp Metrics" maps to `prom.time-fn`,
`prom.timestamp-fn`, `prom.timestamps-not-time-since` and
`prom.time-since-query`. "Dashboarding basics" maps to `prom.expression-browser`,
`prom.grafana`, `prom.grafana-datasource` and `prom.dashboard-design`.

**Figure.** The Prometheus architecture diagram is at
https://prometheus.io/assets/docs/architecture.svg `[architecture.svg]`. It is
embedded in the Overview page, section "Architecture". The prometheus/docs
repository, which builds prometheus.io, is Apache 2.0 ("Apache License 2.0, see
LICENSE", repo README), and the site footer says "All components are available
under the Apache 2 License on GitHub." Usable as a tier-B figure with
attribution to the Prometheus Authors and the licence notice. It is attached to
`prom.architecture`.

## Traps

- [T1] Prometheus is not a log store: the FAQ answers "How to feed logs into Prometheus?" with "Short answer: Don't!".
- [T1] "Events" is ambiguous. In OpenTelemetry it means span events. KCNA taught Kubernetes Events (topic 0). Keep them apart.
- [T1] SLI, SLO and SLA get confused. The SRE book's test: if missing the objective has no explicit consequence, "you are almost certainly looking at an SLO". That source is CC BY-NC-ND (tier C), so paraphrase it.
- [T1] Pull is the default. The Pushgateway is for "capturing the outcome of a service-level batch job", not a general way to push. `practices/pushing` lists its pitfalls.
- [T2] Local storage "is not clustered or replicated". HA means running identical servers, and long-term storage goes through remote write. Candidates wrongly assume a clustered TSDB.
- [T2] Defaults: `scrape_interval` 1m, `scrape_timeout` 10s, `evaluation_interval` 1m, `metrics_path` `/metrics` (configuration reference).
- [T2] `relabel_configs` runs before the scrape, on targets. `metric_relabel_configs` runs after it, on samples.
- [T2] Metric and label names "MAY use any UTF-8 characters", but "SHOULD match the regex `[a-zA-Z_:][a-zA-Z0-9_:]*`". UTF-8 support "was added relatively recently in Prometheus v3.0.0" (data model). Older material gives the regex as a hard rule.
- [T3] `rate` vs `irate`: `irate` is "based on the last two data points". Both, and `increase`, are for counters. Use `delta`/`deriv` for gauges.
- [T3] "always take a `rate()` first, then aggregate". Otherwise counter resets cannot be detected.
- [T3] The 5-minute lookback (staleness) explains why vanished series linger in instant queries.
- [T3] `holt_winters` was renamed `double_exponential_smoothing` and now needs the experimental-functions feature flag. Older course material uses the old name.
- [T3] Regex matchers are fully anchored.
- [T4] `by` keeps the listed labels and `without` drops them. `on` and `ignoring` do the same job in vector matching.
- [T4] Comparison operators filter unless `bool` is given.
- [T4] Summary quantiles cannot be aggregated across instances. Histograms can, through `histogram_quantile` over `sum by (le) (rate(..._bucket[5m]))`.
- [T4] Classic histogram buckets are cumulative (`le`). Native histograms are now what `practices/histograms` recommends. Older material covers only classic ones.
- [T5] Counters end in `_total`. Use base units: seconds, not milliseconds; bytes even where bits are usual; ratio 0–1, not percent.
- [T5] High-cardinality labels (user IDs, emails) are the classic mistake: "Do not overuse labels".
- [T5] Exporters should apply target labels at scrape time, not static labels in the exposition.
- [T6] An alert is `pending` until the `for` duration passes, then `firing`. `keep_firing_for` is optional, and older material may not mention it.
- [T6] Inhibition (a rule: one alert mutes others) vs silence (a time-bound mute set by hand).
- [T6] Alertmanager's `source_match`/`target_match` are deprecated in favour of `source_matchers`/`target_matchers`.
- [T6] Timer defaults: `group_wait` 30s, `group_interval` 5m, `repeat_interval` 4h, `resolve_timeout` 5m.
- [T6] From Prometheus 3.0, console templates are no longer bundled. Grafana is the usual dashboard tool, and the built-in expression browser is at `/query`.
- [T6] Alert on symptoms (user pain), not causes, and alert on latency and errors "as high up in the stack as possible".

## Languages

The LF handbook's language grid ticks only the English column for
"Prometheus Certified Associate (PCA)"
(https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2/language).
The PCA exam is therefore offered in English only. The main sources
(prometheus.io, the CNCF curriculum) were read in English. I found no official
translation of the Prometheus docs. The LF site's menu links to a Japanese
version, which I did not open. I did not check for translations of the
OpenTelemetry pages.

## Not verified

- **Curriculum version and date.** The PCA PDF has no version or date. The repo
  README's versioning rule covers the Kubernetes curricula. Tried: the PDF text,
  the repo README. I did not check the repo's commit history for when
  `PCA_Curriculum.pdf` last changed: github.com HTML and the API were refused
  through the proxy (403 and "could not be canonicalized").
- **The latest released Prometheus version.** Only the main-branch `VERSION`
  file (3.14.0) was read. The github.com releases page returned 403.
- **Question count and pass mark specific to PCA.** Both come from the generic
  LF multiple-choice pages. Neither the PCA page nor the curriculum states them.
- **Which Prometheus version the exam targets.** No source states it. Writers
  should teach the current docs and flag 2.x-to-3.x changes (traps above).
- **Where architecture.svg lives in the prometheus/docs repo.** The file was
  fetched from its prometheus.io URL. The licence rests on the repo README and
  the site footer, not on a file-level notice.
- **Retake rules beyond "One Retake"**, such as waiting periods: not found on
  the pages fetched.
- **SLA source.** The only SLA definition found is in the Google SRE book, which
  is CC BY-NC-ND 4.0: facts only, in our own words (tier C). The OpenTelemetry
  primer defines SLI and SLO but not SLA.

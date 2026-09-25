# Research brief: OpenTelemetry Certified Associate (OTCA)

Slug: `otel-otca`. Family prefix: `otel`. Researched 25 September 2026.
Every fact below was read in a source fetched during this task. Saved copies
and extracted text are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/otel-otca/`
(opentelemetry.io pages are in `web/`, with `.html` and `.txt` for each). File
names are given as `[file]`. Every anchor in `otel-otca-concepts.json` was
checked against the `id` attributes in the saved HTML, and all of them are
present.

**Prerequisite decks.** `prerequisiteDecks: ["kcna", "prometheus-pca"]`. Topic 0
is those two decks. `kcna-terms.json` exists now, so the note in the PCA brief
saying it is missing is out of date. The terms registry starts with 36 topic-0
entries, copied with their concept ids and sources. They are observability,
three pillars, OpenTelemetry, OTLP, span, distributed trace, span event, span
attributes, span context, context propagation, SLI, SLO, pull and push model,
exemplar, cardinality, counter, gauge, histogram, summary, Prometheus exporter,
remote write, gRPC, Pod, DaemonSet, sidecar and Deployment, plus a few more.
The OpenTelemetry pages that the prerequisite decks cite are the observability
primer, signals, traces, logs and what-is-opentelemetry. This deck reuses the
first four; I re-fetched them to get their anchors. The OTel concepts go deeper
than topic 0 and do not repeat those primers: span kind and span status go
beyond span, for example, and the OTLP ports and encodings go beyond OTLP.

## Topics

| Topic | Name | Curriculum domain |
|---|---|---|
| T1 | Observability fundamentals | Fundamentals of Observability (18%) |
| T2 | API, SDK, data model and configuration | The OpenTelemetry API and SDK (46%), part 1 |
| T3 | Signals: traces, metrics, logs and baggage | The OpenTelemetry API and SDK (46%), part 2 |
| T4 | SDK pipelines, sampling, propagation and agents | The OpenTelemetry API and SDK (46%), part 3 |
| T5 | The OpenTelemetry Collector | The OpenTelemetry Collector (26%) |
| T6 | Maintaining and debugging pipelines | Maintaining and Debugging Observability Pipelines (10%) |

The API and SDK domain is split three ways because it carries 46%.

## Exam facts

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | The Linux Foundation (Training & Certification). The curriculum is a CNCF publication. | Curriculum cover: "A Cloud Native Computing Foundation (CNCF) Publication" `[OTCA_Curriculum.txt]`. Product page footer: "© 2026 Linux Foundation - Education." `[lf-otca.txt]` | No |
| What it tests | Observability concepts and the main OTel components | "A OTCA understands the basic concepts of observability, and how the OpenTelmetry project enables these concepts. They understand the fundamentals of the major components of OpenTelemetry, how they are used, and the best practices for instrumenting cloud-native applications for observability with OpenTelemetry." (the typos are on the page) https://training.linuxfoundation.org/certification/opentelemetry-certified-associate-otca/ | Rarely |
| Level | Beginner | "Experience Level:  Beginner" (product page) | Rarely |
| Prerequisites | None | "There are no pre-requisites for this exam." (product page) | Rarely |
| Format | Online, remotely proctored, multiple choice | "This exam is an online, proctored, multiple-choice exam." (product page). "The exam is proctored remotely via streaming audio, video, and screen-sharing feeds." https://docs.linuxfoundation.org/tc-docs/certification/important-instructions-mc | Rarely |
| Question count | 60 (the generic LF multiple-choice figure; only CNPA is listed as an exception) | "The multiple-choice exam is delivered online and consists of 60* multiple-choice questions." "* CNPA exam consists of  85 multiple-choice questions." (important-instructions-mc) | Sometimes |
| Time | 90 minutes | Product page: "Duration of Exam 90 minutes". FAQ: "Candidates are allowed 90 minutes to complete Multiple Choice Exams, with the exception of CNPA." https://docs.linuxfoundation.org/tc-docs/certification/faq-mc | Sometimes |
| Pass mark | 75% (the generic LF multiple-choice figure) | "A score of 75% or above must be earned to pass the Multiple Choice Exam." (faq-mc) | Sometimes |
| Results | Within 24 hours | "Results will be emailed within 24 hours from the time that the exam is completed." (important-instructions-mc) | Rarely |
| Retake | One retake, which makes two attempts | Product page: "One Retake" and "✔ Two exam attempts" | Sometimes |
| Eligibility window | 12 months | Product page: "12 Month Exam Eligibility" and "✔ 12-months to schedule & take the exam" | Sometimes |
| Validity | 2 years; renew by passing again | Product page: "Certification Valid for 2 Years". FAQ: "Certifications are valid for 2 years." and "Candidates have the option to retake and pass the exam to renew their certification." The FAQ's CARE auto-renewal list names only KCNA and KCSA, not OTCA. | Sometimes |
| Price | $250 for the exam only; $495 bundled with a THRIVE-ONE annual subscription | Product page: "$250 Exam only" and "Save 40% on OTCA with the  THRIVE-ONE Annual Subscription  Bundle $495" | **Often**. The LF trademarks page was showing a "35% Off Training & Certification" banner when I fetched it. |
| Curriculum version and date | No version printed. The PDF metadata gives a creation date of 28 Nov 2024. | `pdfinfo`: "CreationDate: Thu Nov 28 14:14:19 2024 UTC" `[OTCA_Curriculum.pdf]`. The PDF text has no version or date. | See "Not verified" |
| Target OTel version | None stated | Neither the product page nor the curriculum names a spec, SDK or Collector version. | **Often** (the docs move fast; see the traps) |

## Naming

- **Marks, from the owner's own list.** https://www.linuxfoundation.org/legal/trademarks
  lists "OpenTelemetry®" under "The Linux Foundation has the following
  registered trademarks in the United States and/or other countries". It also
  lists the logo "OpenTelemetry and Design (black and white)". The
  **certification name "OpenTelemetry Certified Associate" does not appear**,
  either in the registered list or in the "registrations pending or trademarks
  in use" (™) list. Compare "Prometheus Certified Associate®", which is in the
  registered list.
- **Usage terms.** From https://www.linuxfoundation.org/legal/trademark-usage:
  "You may make fair use of word marks to make true factual statements. But
  fair use does not permit you to state or imply that the owner of a mark
  produces, endorses, or supports your company, products, or services." Also:
  "a ™ should not be changed to an ® in a trademark notice by anyone other than
  the owner", and "Do not refer to a product or service as being certified
  under any of The Linux Foundation's marks unless your company has
  successfully undergone the requisite compliance testing and has explicit
  authorization…".
- **The project's own guidelines.**
  https://opentelemetry.io/community/marketing-guidelines/ tells users to "Use
  project collateral such as logo and name in line with the Linux Foundation's
  branding and trademark usage guidelines". It also tells them not to "Imply
  that a single provider is responsible for OTel itself".
- **How CONTENT-POLICY.md §4 applies.** The Linux Foundation is on §4's list, so
  the general rule and the "Everyone else" notice apply. Our brand leads, the
  exam name is plain text, there is no logo, and the page footer carries the
  notice. Title: `[Site name] deck for the OpenTelemetry Certified Associate
  (OTCA) exam`. Never "OTCA Flashcards", never "official", and never call the
  deck "OpenTelemetry-certified". The site name must not contain
  "OpenTelemetry" or "OTel". The certification name is not listed as a mark, so
  it gets no ® or ™. Only OpenTelemetry takes ®.
- **Deck notice text:**
  > OpenTelemetry is a registered trademark of The Linux Foundation. This deck
  > is independent and is not affiliated with, sponsored, endorsed or approved
  > by The Linux Foundation, the Cloud Native Computing Foundation or the
  > OpenTelemetry project.
- **Attribution for tier-B text.** For opentelemetry.io pages, credit the
  OpenTelemetry Authors under CC BY 4.0. The footer on every page fetched,
  including the `/docs/specs/` pages, reads "© 2019–present OpenTelemetry
  Authors | Docs CC BY 4.0". The spec and semantic-conventions source
  repositories are Apache 2.0 (see the sources file). For the CNCF curriculum,
  credit CNCF under CC BY 4.0.

## Outline

The domain order below is the order on the LF product page ("Domains &
Competencies"). The PDF has two columns: the left one holds the 18%, 46% and
26% domains, and the right one holds the 10% domain (`#page=2`). Objectives are
quoted exactly. Curriculum:
https://github.com/cncf/curriculum/blob/master/OTCA_Curriculum.pdf#page=2

**1. Fundamentals of Observability: 18%**
- Telemetry Data [T1]: signals, resource, instrumentation scope, backend
- Semantic Conventions [T1] (schema side in [T6])
- Instrumentation [T1] (code-based, zero-code, libraries; agents in [T4])
- Analysis and Outcomes [T1] (log correlation; SLI/SLO and exemplars are topic 0)

**2. The OpenTelemetry API and SDK: 46%**
- Data Model [T2] (attributes, OTLP) and [T3] (metric points, log record fields)
- Composability and Extension [T2] (API/SDK split, distributions, pluggable SDK components)
- Configuration [T2] (env vars, declarative config, OTLP exporter settings)
- Signals (Tracing, Metric, Log) [T3]
- SDK Pipelines [T4] (span processors, exporters, MetricReader in [T3], samplers)
- Context Propagation [T4] (propagators, inject/extract, W3C Trace Context)
- Agents [T4] (Java agent, Kubernetes Operator, eBPF)

**3. The OpenTelemetry Collector: 26%**
- Configuration [T5]
- Deployment [T5] (agent, gateway, no-Collector, agent-to-gateway)
- Scaling [T5]
- Pipelines [T5]
- Transforming Data [T5] (filter, attributes, transform, OTTL)

**4. Maintaining and Debugging Observability Pipelines: 10%**
- Context Propagation [T6] (trust at service boundaries)
- Debugging Pipelines [T6] (debug exporter, zPages, internal telemetry)
- Error Handling [T6] (sending queue, retry, persistent queue, API never throws)
- Schema Management [T6] (telemetry schemas, schema URL)

Counts: 4 domains and 20 objectives, 24 outline items in all. "Context
Propagation" appears twice in the owner's outline, once in domain 2 and once in
domain 4. Every objective maps to at least one concept in
`otel-otca-concepts.json`.

**Figure.** The spec overview (`specs/otel/overview/#opentelemetry-client-architecture`)
carries the client architecture diagram (API, SDK and packages). It is attached
to `otel.client-architecture`. It is CC BY 4.0 on the site.

## Traps

- [T1] OTel metric naming says "do not use `_total`" (semconv attribute-naming, `#do-not-use-total`). The Prometheus deck teaches `_total` for counters (topic 0). Keep the two conventions apart.
- [T1] The signals page lists Traces, Metrics, Logs and **Baggage** as supported. Events ("a specific type of log") and Profiles are "under development or at the proposal stage". The old "three pillars" (topic 0) leaves out baggage.
- [T1] Semantic conventions are "sometimes called Semantic attributes".
- [T2] Without an installed SDK, the API is a "no-op" API (trace API spec). Instrumentation libraries depend on the API only.
- [T2] The default OTLP ports are gRPC 4317 and HTTP 4318. OTLP/HTTP adds per-signal paths such as `/v1/traces`. The default `OTEL_EXPORTER_OTLP_PROTOCOL` is "SDK-dependent, but will typically be either http/protobuf or grpc".
- [T2] SDK defaults: `OTEL_SERVICE_NAME` is `unknown_service`, `OTEL_TRACES_SAMPLER` is `parentbased_always_on`, `OTEL_PROPAGATORS` is `tracecontext,baggage`, and the traces, metrics and logs exporters are `otlp`. The OTLP timeout is 10000 ms.
- [T2] In the signal lifecycle, "The API MUST become stable before the other components", and signals "MUST NOT be marked as deprecated unless the replacement is stable".
- [T3] Span status: the default is **Unset**, and "Unset represents a span that completed without an error". Ok is set explicitly. Candidates think Ok is the default.
- [T3] Span kind: "If not provided, the span kind is assumed to be internal." The parent of a consumer span is "always a producer".
- [T3] There are seven instrument kinds. "Gauges are synchronous" now, and the asynchronous Gauge is a separate kind. UpDownCounter is for values that go down, such as queue length.
- [T3] Default aggregation: Counter and UpDownCounter (sync and async) use Sum, Gauges use Last Value, and Histogram uses Explicit Bucket Histogram.
- [T3] Cardinality limit: the default is 2000 per metric stream. Excess data goes into one overflow point with `otel.metric.overflow=true`. With cumulative temporality it keeps overflowing "until the process restarts".
- [T3] Baggage "is unassociated with attributes on spans, metrics, or logs without explicitly adding them". Never put credentials or PII in baggage.
- [T3] "The Logs Bridge API should not be called by you directly". It is for authors of logging libraries and appenders.
- [T4] `TraceIdRatioBased` "is deprecated in favor of the composable ProbabilitySampler". This is a recent change: older material, and the `traceidratio` env-var value, still use the old name.
- [T4] Head sampling cannot guarantee that every trace with an error is kept. Tail sampling can, but it is stateful and hard to operate, and "almost always necessary" for large systems.
- [T4] Batching span processor defaults: maxQueueSize 2048, scheduledDelayMillis 5000, exportTimeoutMillis 30000, maxExportBatchSize 512.
- [T4] The Operator can inject zero-code instrumentation for .NET, Java, Node.js, Python and Go. The Java agent works with "any Java 8+ application".
- [T5] "Configuring a receiver does not enable it." The same holds for processors, exporters, connectors and extensions: each must appear in `service` (pipelines or extensions).
- [T5] "The order of the processors in a pipeline determines the order of the processing operations."
- [T5] A connector "acts as both exporter and receiver". Extensions "don't require direct access to telemetry data".
- [T5] Component IDs use `type[/name]` (e.g. `otlp/2`). The same receiver can feed several pipelines (fan-out).
- [T5] Agent pattern: easy to start, but limited scalability. Gateway pattern: central credentials and policy, but more to maintain, added latency and higher cost.
- [T5] Stateless components scale behind any load balancer. The tail sampling processor is stateful and "cannot be easily scaled". To scale scrapers such as the Prometheus receiver, shard their targets: give each Collector its own configuration, or use the Target Allocator, which ships with the Operator.
- [T6] Ports: zPages 55679 (`/debug/tracez`), pprof 1777, and internal metrics at `http://127.0.0.1:8888/metrics`. Internal logs go to stderr. Metric verbosity is none, basic, normal (the default) or detailed.
- [T6] The retry default is "up to 5 minutes" (`max_elapsed_time` 300s). The queue size default is "often 1000". A full queue drops data. With an in-memory queue only, "Data in memory is lost" on a crash, so the persistent queue (`file_storage`, WAL) is needed.
- [T6] The OpenTelemetry API "does not fail on invalid arguments, never throws, and swallows exceptions". Test your instrumentation, because failures are silent.
- [T6] Validate a Collector config with `otelcol validate --config=…`.

## Languages

The LF handbook's language grid ticks only the English column for
"OpenTelemetry Certified Associate (OTCA)"
(https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2/language).
The exam is therefore English only. opentelemetry.io offers localized docs in
বাংলা, Español, Français, 日本語, 한국어, Polski, Português, Română, Українська
and 中文 (the site's language menu). They sit on the same CC BY 4.0 site, but I
did not check how complete they are. No translation of the curriculum was found.

## Not verified

- **OTCA-specific question count and pass mark.** Both come from the generic LF
  multiple-choice pages. The product page and the curriculum state neither.
- **Curriculum version and date.** The PDF has no printed version. The 28 Nov
  2024 date is PDF metadata only. The github.com commit history was not
  checked: the GitHub API for cncf/curriculum was refused in this session.
- **Trademark status of "OpenTelemetry Certified Associate".** It is absent
  from both LF lists fetched. It may be pending or unlisted. Treat it as a
  plain factual name, and have the lawyer review required by §8 confirm this.
- **Which spec, SDK or Collector version the exam targets.** No source says.
  Writers should teach the current docs and flag recent changes, such as the
  TraceIdRatioBased deprecation and synchronous Gauge.
- **Retake rules beyond "One Retake"**, such as waiting periods: not found on
  the pages fetched.
- **"Logging exporter renamed to debug exporter".** This is often repeated, but
  the troubleshooting page fetched only names the debug exporter, so no card
  should claim the rename.
- **Spec pages' licence.** The opentelemetry.io footer says CC BY 4.0 on
  `/docs/specs/` pages, while the upstream repos are Apache 2.0. Both are
  tier B, but cards should cite the opentelemetry.io URL and CC BY 4.0.

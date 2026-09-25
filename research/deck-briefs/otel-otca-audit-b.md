# otel-otca audit, part b (topics 4–6)

Cards checked: 233 (04-sdk-pipelines 81, 05-collector 91, 06-debugging 61).
Evidence for every card was read against its back and explanation; claims
beyond the evidence were checked in `research/sources/otel-otca/`. Sources
are tier B (opentelemetry.io docs and spec, CC BY 4.0; CONTENT-POLICY.md §3,
tier B).

id | severity | problem | evidence (source words, with page)
---|---|---|---
otel.debugging.debug-exporter-scenario | unsupported | choicesExplained says "extensions do not access telemetry data". The source says only that they "don’t require direct access", and the zPages extension (card otel.debugging.zpages) inspects live data, so the reason given for C is false. | configuration/#basics: "Extensions don’t require direct access to telemetry data"; troubleshooting/#zpages: "The zPages extension … can be used to inspect live data from the Collector’s receivers and exporters."
otel.sdk-pipelines.noop-scenario | ambiguous | "no propagators configured anywhere" does not rule out an SDK. An SDK configured through environment variables defaults to tracecontext,baggage (see otel.sdk-pipelines.default-propagator and api-sdk-config.env-propagators-default), which would make B defensible. The front should say that only the API is present. | api-propagators/#global-propagators: "The OpenTelemetry API MUST use no-op propagators unless explicitly configured otherwise."; sdk-configuration/general/#otel_propagators: "Default value: tracecontext,baggage"
otel.sdk-pipelines.faas-scenario | ambiguous | "a cloud function service" is generic, but the answer (Lambda layers) fits only AWS Lambda. On another vendor's service the key would be wrong. | components/#function-as-a-service-assets: "pre-built Lambda layers able to auto-instrument your application"
otel.sdk-pipelines.parentbased | unclear | The back reads as "root spans versus all spans with a parent" and hides that ParentBased picks a delegate sampler for each case. | trace/sdk/#parentbased: "ParentBased helps distinguish between the following cases: - No parent (root span). - Remote parent … with SampledFlag set"; "remoteParentSampled(Sampler) (default: AlwaysOn)"
otel.collector.attributes-not-name | unclear | The back names "the span processor". Topic 4 has just taught the SDK span processor, so a newcomer will take this to mean the same thing. Here it is a Collector processor, and the explanation should say so. | collector/troubleshooting/#collector-is-not-processing-data: "The attributes processor works only for “tags” on spans. The span name is handled by the span processor."
otel.collector.batch-processor | unclear | The front asks what the Batch Processor is, but the back gives only its distributions and stability, and the cited list says nothing about what it does. The front should ask the question the back answers. | collector/components/processor/: "Batch Processorcontrib, core, K8sbetabetabeta"
otel.debugging.health-check | unclear | The back gives the config name and how to enable the extension, but not what it does. Its job is only in the explanation. | configuration/#extensions: "you can add extensions for Collector health monitoring"; configuration/#service-extensions: "extensions: [health_check, pprof, zpages]"
otel.collector.connector-scenario | minor | choicesExplained says "extensions do not touch telemetry data", which overstates the source. The real reason B is wrong is that extensions do not join pipelines. | configuration/#basics: "Extensions don’t require direct access to telemetry data"; configuration/#connectors: "Connectors join two pipelines"
otel.collector.two-backends-scenario | minor | The reason given for B ("duplicates work the fan-out already does") is not the source's point. B is wrong because the task asks for one pipeline, and one pipeline can hold both exporters. | collector/architecture/#exporters: "The configuration allows for multiple exporters of the same type, even in the same pipeline."
otel.sdk-pipelines.library-deps-scenario | minor | Duplicate of otel.fundamentals.code-based-dependencies (the same library scenario with the same answer, "the API only"). | concepts/instrumentation/code-based/: "you would only take a dependency on the API"
otel.sdk-pipelines.propagators-scenario | minor | Duplicate of otel.api-sdk-config.env-propagators-scenario (an old system needs B3, so add it to OTEL_PROPAGATORS). | sdk-configuration/general/#otel_propagators: "Specifies Propagators to be used in a comma-separated list."
otel.sdk-pipelines.tracer-naming | minor | Repeats otel.fundamentals.scope-for-a-library: name a library's tracer after the library. | code-based/#configure-the-opentelemetry-api: "you should name it after your library (for example com.example.myLibrary)"

Checked and not reported: otel.sdk-pipelines.span-processor ("built-in ones
batch": trace/sdk "Built-in span processors are responsible for batching …");
the "yaml:" provider in otel.collector.config-providers; the Getter's
first-value rule; the three tail-sampling downsides; the hashing in
otel.collector.stateful-fix-scenario; `otelcol components`; the `$$`
escaping; the service subsections. All are in the sources.

The primers otel.collector.collector, otel.sdk-pipelines.k8s-operator and
otel.sdk-pipelines.faas-assets overlap topic 2's "which component…"
classification cards. They are kept because they are the cards that
introduce those terms.

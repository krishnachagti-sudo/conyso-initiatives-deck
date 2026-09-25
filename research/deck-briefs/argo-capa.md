# Research brief: Certified Argo Project Associate (CAPA)

Slug: `argo-capa`. Family prefix: `argo`. Researched 25 September 2026.
Every fact below was read in a source fetched during this task, unless it is
marked as reused from the KCNA deck. Saved copies and extracted text are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/argo-capa/`
(file names are given as `[file]`). The Argo docs were read as Markdown from
`raw.githubusercontent.com` and saved in `md/`: `wf-*` for argo-workflows
(branch `main`), and `cd-*`, `ro-*` and `ev-*` for argo-cd, argo-rollouts and
argo-events (branch `master`). Each concept's `source` is the page on the
published docs site. All 78 page and figure URLs returned 200, and every
`#anchor` in the concept list was confirmed present in the live page's HTML.

**Prerequisite deck.** `prerequisiteDecks: ["kcna"]`, and topic 0 is the KCNA
deck. I read `research/sources/kcna/manifest.json` and
`research/deck-briefs/kcna-terms.json`. The KCNA manifest already holds the
OpenGitOps `PRINCIPLES.md` and `GLOSSARY.md` (CC BY 4.0) and the CNCF glossary
GitOps entry. They are reused here and were not fetched again. The registry
holds 43 KCNA terms at topic 0, and this deck builds on them without a new
primer: GitOps, GitOps principles, drift, desired state, declarative vs
imperative, controller / control loop, CustomResourceDefinition, operator
pattern, Deployment, ReplicaSet, rolling update / Recreate, rollback,
blue-green / canary deployment, Helm chart, Kustomize, kubectl apply, Job,
CronJob, Service, Ingress, service mesh, HorizontalPodAutoscaler, CI,
continuous delivery and continuous deployment, event-driven architecture,
Prometheus, and others.

## Topics

| Topic | Name | Curriculum domain |
|---|---|---|
| T1 | Argo Workflows fundamentals and spec | Argo Workflows (36%), part 1 |
| T2 | Argo Workflows: templates, DAGs, artifacts and data | Argo Workflows (36%), part 2 |
| T3 | Argo CD fundamentals and architecture | Argo CD (34%), part 1 |
| T4 | Argo CD: syncing and the Application | Argo CD (34%), part 2 |
| T5 | Argo CD: Helm, Kustomize and reconciliation patterns | Argo CD (34%), part 3 |
| T6 | Argo Rollouts | Argo Rollouts (18%) |
| T7 | Argo Events | Argo Events (12%) |

The two largest domains are split so that each topic stays a reasonable size.

## Exam facts

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | The Linux Foundation (Training & Certification). The curriculum is a CNCF publication. | Curriculum cover: "A Cloud Native Computing Foundation (CNCF) Publication" `[CAPA_Curriculum.ocr.txt]`. The exam is sold on training.linuxfoundation.org, under "© 2026 Linux Foundation - Education" `[lf-capa.txt]` | No |
| What it is | The Argo ecosystem, and when and why to use each tool | "The Certified Argo Project Associate (CAPA) exam demonstrates a user's ability to navigate the Argo Project ecosystem, including when and why to use each tool." https://training.linuxfoundation.org/certification/certified-argo-project-associate-capa/ | No |
| Level | Associate; beginner | "The CAPA is an associate-level certification designed for engineers, data scientists and others interested in demonstrating their understanding of the Argo Project ecosystem." and "Experience Level: Beginner" (same page) | Rarely |
| Scope beyond the tools | DevOps, GitOps and platform engineering context | "…best practices for each tool and how it relates to common DevOps, GitOps, Platform Engineering, and related practices." (same page) | Rarely |
| Prerequisites | None | "There are no pre-requisites for this exam." (same page) | Rarely |
| Format | Online, remotely proctored, multiple choice | Product page: "This exam is an online, proctored, multiple-choice exam." Also: "The exam is proctored remotely via streaming audio, video, and screen-sharing feeds." https://docs.linuxfoundation.org/tc-docs/certification/important-instructions-mc | Rarely |
| Question count | 60. This is the generic LF multiple-choice figure; the only exception listed is CNPA. | "The multiple-choice exam is delivered online and consists of 60* multiple-choice questions. * CNPA exam consists of 85 multiple-choice questions." (important-instructions-mc) | Sometimes |
| Time | 90 minutes | Product page: "Duration of Exam 90 minutes". FAQ: "Candidates are allowed 90 minutes to complete Multiple Choice Exams, with the exception of CNPA." https://docs.linuxfoundation.org/tc-docs/certification/faq-mc | Sometimes |
| Pass mark | 75% (generic LF multiple-choice figure) | "A score of 75% or above must be earned to pass the Multiple Choice Exam." (faq-mc) | Sometimes |
| Results | Within 24 hours | "Results will be emailed within 24 hours from the time that the exam is completed." (important-instructions-mc) | Rarely |
| Retake | One retake included | Product page: "One Retake" | Sometimes |
| Eligibility window | 12 months | Product page: "12 Month Exam Eligibility" | Sometimes |
| Validity | 2 years; renew by passing again | Product page: "Certification Valid for 2 Years". FAQ: "Certifications are valid for 2 years." and "Candidates have the option to retake and pass the exam to renew their certification." The FAQ's CARE auto-renewal list names only KCNA and KCSA, not CAPA. | Sometimes |
| Price | $250 for the exam alone; $299 with the LFS256 course; $495 with THRIVE-ONE | Product page: "1. Certification exam only – $250" … "3. Certification exam + DevOps and Workflow Management with Argo (LFS256) course – $299" | **Often** |
| Curriculum version and date | No version is printed. The PDF metadata gives the title `CAPA_Curriculum_100724` and a creation date of 7 October 2024. | `pdfinfo CAPA_Curriculum.pdf`: "Title: CAPA_Curriculum_100724", "CreationDate: Mon Oct 7 14:08:17 2024 UTC" | See "Not verified" |
| Argo CD version in the docs | The master-branch `VERSION` file reads `3.7.0`. The docs nav carries upgrade guides up to "3.5-3.6". | https://raw.githubusercontent.com/argoproj/argo-cd/master/VERSION; `[md/argo-cd-mkdocs.yml]` | **Often** |

**Extracting the curriculum text.** The PDF's text is drawn as outlines, so
`pdftotext` returns only bullets. I rendered the pages at 300 dpi, ran OCR with
tesseract (`[CAPA_Curriculum.ocr.txt]`, where form feeds separate the pages),
and checked the result against the rendered page 2 image. The outline is on
`#page=2`. The LF product page lists the same domains, objectives and weights in
the same order, as plain HTML text.

## Naming

- **Marks, from the owner's own list.** Under "The Linux Foundation has the
  following registered trademarks in the United States and/or other
  countries", https://www.linuxfoundation.org/legal/trademarks lists
  "Argo®", "ArgoCon®" and "Certified Argo Project Associate®". "Argo CD",
  "Argo Workflows", "Argo Rollouts" and "Argo Events" are not listed
  separately. They contain the registered word mark "Argo".
- **Usage terms.** From https://www.linuxfoundation.org/trademark-usage/: "You
  may make fair use of word marks to make true factual statements. But fair use
  does not permit you to state or imply that the owner of a mark produces,
  endorses, or supports your company, products, or services. Even when making
  fair use of a trademark, you should acknowledge the owner of the trademark
  with a trademark notice…". Also: "a ™ should not be changed to an ® in a
  trademark notice by anyone other than the owner". The page also says that
  an open source licence gives no trademark right: "A copyright license, even
  an open source copyright license, does not include an implied right or
  license to use a trademark…".
- **How CONTENT-POLICY.md §4 applies.** The Linux Foundation is in §4's list,
  so the general rule and the "Everyone else" notice apply. Our brand leads,
  the exam name is plain text, there is no logo (the curriculum cover carries
  the Argo logo, which must not be reused), and the page footer carries the
  notice. Title: `[Site name] deck for the Certified Argo Project Associate
  (CAPA) exam`. Never "CAPA Flashcards", never "official", and never
  "Argo-certified". Topic names such as "Argo CD: …" state facts about content,
  and the notice covers them.
- **Deck notice text:**
  > Certified Argo Project Associate (CAPA) and Argo are registered trademarks
  > of The Linux Foundation. This deck is independent and is not affiliated
  > with, sponsored, endorsed or approved by The Linux Foundation or the Cloud
  > Native Computing Foundation.
- **Attribution for tier-B text.** Argo Workflows, Argo CD and Argo Rollouts
  docs: "Copyright 2017-2018 The Argo Authors", Apache License 2.0. Argo Events
  docs: "Copyright 2018 The Argoproj Authors.", Apache License 2.0. Keep the
  licence notice with the attribution (§3). CNCF curriculum: CC BY 4.0.
  OpenGitOps (reused from KCNA): CC BY 4.0.

## Outline

The domain order is the one on the LF product page, which matches the
curriculum PDF (`#page=2`): Workflows, CD and Rollouts in the left column,
Events in the right. Objectives are quoted exactly. The PDF spells the CD
domain "ARGO CD".

**1. Argo Workflows: 36%**
- Understand Argo Workflow Fundamentals [T1]
- Generating and Consuming Artifacts [T2]
- Understand Argo Workflow Templates [T2] (template types in [T1])
- Understand the Argo Workflow Spec [T1]
- Work with DAG (Directed-Acyclic Graphs) [T2]
- Run Data Processing Jobs with Argo Workflows [T2]

**2. Argo CD: 34%**
- Understand Argo CD Fundamentals [T3]
- Synchronize Applications Using Argo CD [T4]
- Use Argo CD Application [T4] (core terms in [T3])
- Configure Argo CD with Helm and Kustomize [T5]
- Identify Common Reconciliation Patterns [T5] (auto-sync, self-heal and prune in [T4])

**3. Argo Rollouts: 18%**
- Understand Argo Rollouts Fundamentals [T6]
- Use Common Progressive Rollout Strategies [T6]
- Describe Analysis Template and AnalysisRun [T6]

**4. Argo Events: 12%**
- Understand Argo Events Fundamentals [T7]
- Understand Argo Event Components and Architecture [T7]

Counts: 4 domains and 16 objectives, 20 outline items in all. Every objective
maps to concepts in `argo-capa-concepts.json`. The main mappings for the less
obvious ones:
- **"Run Data Processing Jobs"** maps to `argo.data-template`,
  `argo.data-source-transformations`, `argo.fan-out-withparam`,
  `argo.loop-aggregate`, `argo.loops`, `argo.parallelism` and the artifact
  concepts. The Workflows README lists "Data and batch processing" as a use
  case.
- **"Identify Common Reconciliation Patterns"** maps to `argo.app-of-apps`,
  `argo.applicationset`, `argo.appset-generators`,
  `argo.appset-vs-app-of-apps`, `argo.ignore-differences`,
  `argo.reconcile-optimization`, `argo.orphaned-resources` and
  `argo.ignore-extraneous`. The T4 concepts `argo.self-heal`, `argo.auto-prune`
  and `argo.reconciliation-timeout` also belong here. The curriculum does not
  define "reconciliation patterns", so this mapping is my reading of it.
- **"Use Common Progressive Rollout Strategies"** maps to `argo.blue-green`,
  `argo.canary`, `argo.bg-vs-canary`, the canary step concepts and
  `argo.traffic-routing`.

**Figures** (all Apache 2.0, from the docs sites; all returned 200):
- Argo CD architecture, https://argo-cd.readthedocs.io/en/stable/assets/argocd_architecture.png, on `argo.api-server`. It is embedded under "Architecture" on the Argo CD overview page.
- Argo Rollouts architecture, https://argo-rollouts.readthedocs.io/en/stable/architecture-assets/argo-rollout-architecture.png, on `argo.rollouts-controller`.
- Argo Workflows architecture, https://argo-workflows.readthedocs.io/en/latest/assets/diagram.png, on `argo.workflow-controller`.
- For Argo Events, the overview page embeds
  `https://github.com/argoproj/argo-events/blob/master/docs/assets/argo-events-top-level.png`.
  I did not fetch it, so it is not attached to any concept.

## Traps

- [T1] `retryPolicy` defaults to `OnFailure`, not `Always`. "Always" retries on both errors and failures, and `OnTransientError` exists only "after v3.0.0-rc2".
- [T1] Steps are a "list of lists": the outer lists run in sequence and the inner lists run in parallel.
- [T1] There are "9 types of templates" in two categories: definitions (container, script, resource, suspend, plugin, container set, HTTP) and invocators (steps, DAG). The WorkflowTemplate page still lists only six ("container, script, dag, steps, resource, or suspend").
- [T1] Each step or DAG task runs in its own Pod, with `init`, `main` and `wait` containers. The docs also describe an opt-in "init-less" beta layout.
- [T2] `template` (a task inside a Workflow) vs `WorkflowTemplate` (a Workflow definition stored in the cluster). The docs themselves call it "an unfortunate naming collision".
- [T2] To reference a `ClusterWorkflowTemplate` from a `templateRef`, you need `clusterScope: true`.
- [T2] DAGs fail fast by default. `failFast: false` lets all branches run to completion.
- [T2] `depends` (enhanced logic, with task results such as `.Succeeded` and `.Omitted`) vs the older `dependencies` list. A task is `.Skipped` when its `when` is false and `.Omitted` when its `depends` is false.
- [T2] "Artifacts are packaged as Tarballs and gzipped by default." Key-only artifacts apply to "v3.0 and after".
- [T2] CronWorkflow `concurrencyPolicy` defaults to `Allow`, and `timezone` defaults to the machine's timezone.
- [T3] Sync status (Synced/OutOfSync against Git) vs health (Healthy, Progressing, Degraded, Suspended, Missing, Unknown). An app with a Missing and a Degraded resource is Degraded.
- [T3] Refresh compares Git with the live state. Sync applies the changes.
- [T3] The `default` project "permits deployments from any source repo, to any cluster, and all resource Kinds". It can be modified but not deleted.
- [T3] In declarative setup, `Application` and `AppProject` specs "have to be installed in the Argo CD namespace (by default `argocd`)". An "Applications in any namespace" feature also exists (nav: `app-any-namespace.md`, not read).
- [T4] Automated sync does not prune by default, and live-cluster changes do not trigger a sync unless `selfHeal` is true.
- [T4] Automated sync runs only when the app is OutOfSync, and it tries once per commit SHA and parameters. `timeout.reconciliation` defaults to `120s`, plus jitter of up to `60s`. The self-heal timeout is 5 seconds by default.
- [T4] Hook types are `PreSync`, `Sync`, `Skip`, `PostSync` and `SyncFail`, plus `PreDelete`/`PostDelete`. When no delete policy is set, `BeforeHookCreation` applies. Hooks do not run during a selective sync.
- [T4] Waves default to 0 and may be negative. Order is phase, then wave, then kind, then name. Pruning runs the waves in reverse.
- [T4] The old "Resource Hooks" page now only says "This page has moved": hooks live on the Sync Phases and Waves page. Older links and courses cite the old page.
- [T4] With the `resources-finalizer.argocd.argoproj.io` finalizer set, deleting an Application also deletes its resources (a cascading delete). The finalizer is what makes deletes cascade in app of apps. Foreground is the default propagation, and `…/background` is the alternative.
- [T5] Argo CD uses Helm only through `helm template`, so `helm ls` does not show the app. Value precedence: `parameters > valuesObject > values > valueFiles > helm repository values.yaml`.
- [T5] Tool detection: an explicit tool comes first, then `Chart.yaml` means Helm, `kustomization.yaml` (or `.yml`, or `Kustomization`) means Kustomize, and anything else is a directory app.
- [T5] Cluster bootstrapping lists "Application Sets and cluster labels (recommended)" and "App Of Apps Pattern (Alternative)". Older material presents app of apps as the standard way.
- [T6] Argo Rollouts "only supports Blue-Green and Canary". RollingUpdate and Recreate are Deployment strategies. Blue-green is "sometimes referred to as a Red-Black".
- [T6] The Rollouts controller ignores ordinary Deployments. You must migrate to a `Rollout` or reference the Deployment with `workloadRef`.
- [T6] `autoPromotionEnabled` defaults to true and `scaleDownDelaySeconds` defaults to 30. A canary `pause` with no duration waits until someone promotes it.
- [T6] Without traffic routing, `setWeight` is approximated by replica counts ("best effort").
- [T6] `AnalysisTemplate` (what to measure) vs `AnalysisRun` (the instance attached to a Rollout). A run ends Successful, Failed or Inconclusive. Background analysis vs inline analysis (an analysis step).
- [T7] The four components are EventSource, EventBus, Sensor and Trigger. EventSources turn events into CloudEvents. The Sensor resolves dependencies, and the Trigger is what it executes.
- [T7] EventBus implementations: NATS (Streaming), marked "(deprecated)", then JetStream and Kafka. Older material shows NATS Streaming as the default.
- [T0/T3] GitOps itself is not an objective, but the product page ties CAPA to "DevOps, GitOps, Platform Engineering". The OpenGitOps principles are taught in topic 0.
- [all] The curriculum was built in October 2024 (PDF metadata). Since then Argo CD has shipped 3.x releases (upgrade guides "2.14-3.0" to "3.5-3.6"), so courses written for 2.x may be out of date.

## Languages

The LF handbook's language grid shows a single tick for "Certified Argo
Project Associate (CAPA)"
(https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2/language),
as it does for PCA and the other single-language associate exams. I read the
exam as English only. The grid's columns are hard to align in the extracted
text, so this reading rests on the pattern and should be checked visually. The
main sources (the Argo docs sites and the CNCF curriculum) were read in
English. I did not look for translations of the Argo docs, and I know of no
official or openly licensed one.

## Not verified

- **CAPA-specific question count and pass mark.** Both come from the generic
  LF multiple-choice pages. Neither the CAPA product page nor the curriculum
  states them.
- **Curriculum revision history.** The PDF prints no version. Its metadata
  says 7 October 2024. I did not check the repo history (the brief forbids git,
  and the PCA run found the github.com HTML and API refused through the proxy).
- **Which Argo versions the exam targets.** No source says. Concepts cite the
  published docs: `stable` for Argo CD and Rollouts, `latest` for Workflows, and
  the single argoproj.github.io site for Events. The Argo Rollouts
  master-branch `VERSION` file reads `1.2.0`, which looks stale, so I did not
  use it. I did not read the released versions (the GitHub releases pages were
  not fetched).
- **Doc-level licence.** Apache 2.0 rests on each repository's root `LICENSE`,
  which covers the `docs/` folders the sites are built from. I found no
  separate licence notice on the docs sites themselves.
- **Language grid column.** See Languages.
- **Retake rules beyond "One Retake"**, such as waiting periods: not on the
  pages fetched.
- **Anchors differ between branches.** Anchors were checked against the live
  `stable`/`latest` pages, but notes were read from `master`/`main` Markdown.
  One heading ("Controller settings via `valuesObject`") exists only on
  master. Its concept was moved to `#values`. Writers should cite the live
  page they read.
- **OpenGitOps documents** were not fetched again. Their licence (CC BY 4.0) is
  as recorded in the KCNA manifest.
- **Argo Events overview figure**: not fetched. See Outline.

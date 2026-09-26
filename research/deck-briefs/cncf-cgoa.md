# Research brief: Certified GitOps Associate (CGOA)

Slug: `cncf-cgoa`. Family prefix: `cgoa`. Researched 26 September 2026.
Every fact below was read in a source fetched during this task, unless it is
marked as reused from the KCNA or CAPA deck. Saved copies and extracted text
are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/cncf-cgoa/`
(file names are given as `[file]`; raw HTML is in `html/`, Markdown and
licence files in `md/`). Extracted text marks each heading's anchor as
`{#anchor}`. Every `#anchor` in `cncf-cgoa-concepts.json` was checked against
the live page's HTML, except the two OpenGitOps files on github.com, which
refuse this environment (HTTP 403); their anchors follow GitHub's heading
rules and match the ones the KCNA deck already cites.

**Prerequisite decks.** `prerequisiteDecks: ["kcna", "argo-capa"]`. I read
`kcna-terms.json`, the four `kcna-concepts-*.json` files, `argo-capa-terms.json`,
`argo-capa-concepts.json`, both manifests and the KCNA notes for topic 13. The
registry lists 64 of their terms at topic 0, among them GitOps, GitOps
principles, drift, desired state, declarative vs imperative, version control,
controller / control loop, infrastructure as code, policy as code, DevOps,
DevSecOps / shift left, CI, continuous delivery, continuous deployment,
rollback, blue-green / canary deployment, Helm chart, Kustomize, Secret, RBAC,
Prometheus, and from CAPA: Argo CD, Application, sync, refresh, health, the
three Argo CD components, automated sync policy, app of apps pattern,
ApplicationSet, Argo Rollouts, Rollout, progressive delivery, blue-green and
canary strategies, traffic routing and analysis. Do not write primers for them.

**What KCNA already carries.** KCNA topic 13 has a primer on the OpenGitOps
principles, one fact card per principle, "why pull", "what triggers
reconciliation", a push-vs-pull contrast and four principle scenarios
(`decks/kcna/notes/13-application-delivery.json`). This deck goes deeper: the
glossary entries in full, how each principle constrains tooling, and patterns
and tools. Its principle cards should be new scenarios and contrasts, not
restatements of KCNA's.

**Reused sources.** The OpenGitOps `PRINCIPLES.md` and `GLOSSARY.md` were
fetched again: they are byte-identical to the copies in
`research/sources/kcna/`. The Argo CD pages cached under
`research/sources/argo-capa/` back the topic-0 terms. The Argo CD pages this
deck cites directly were fetched again from the live `stable` site.

## Topics

| Topic | Name | Curriculum domain |
|---|---|---|
| T1 | GitOps terminology | GitOps Terminology (20%) |
| T2 | GitOps principles | GitOps Principles (30%) |
| T3 | Related practices | Related Practices (16%) |
| T4 | GitOps patterns | GitOps Patterns (20%) |
| T5 | Tooling | Tooling (14%) |

## Exam facts

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | The Linux Foundation (Training & Certification). The curriculum is a CNCF publication. | Curriculum cover: "A Cloud Native Computing Foundation (CNCF) Publication" `[CGOA_Curriculum.ocr.txt]`. Product page footer: "© 2026 Linux Foundation - Education" `[lf-cgoa.txt]` | No |
| What it is | GitOps principles, terminology, practices | "The Certified GitOps Associate (CGOA) exam allows candidates to demonstrate their understanding of GitOps principles, terminology, and best practices in setting up a GitOps managed software system in addition to related practices such as Configuration as Code, Infrastructure as Code, DevOps & DevSecOps, and CI & CD and how to map them to GitOps." https://training.linuxfoundation.org/certification/certified-gitops-associate-cgoa/ | Rarely |
| What it demonstrates | Patterns and tooling precautions | "A CGOA can comprehend GitOps patterns including when and why to use them. They also understand the precautions to take around tooling for manifest format and packaging, state store systems, and reconciliation engines to adhere to and extend GitOps principles." (same page) | Rarely |
| Level | Beginner | "Experience Level: Beginner" (same page) | Rarely |
| Prerequisites | None | "There are no pre-requisites for this exam." (same page) | Rarely |
| Format | Online, proctored, multiple choice | "This 90-minute CGOA certification exam is an online, proctored, multiple-choice test." (same page). "The exam is proctored remotely via streaming audio, video, and screen-sharing feeds." https://docs.linuxfoundation.org/tc-docs/certification/important-instructions-mc | Rarely |
| Question count | 60. Generic LF figure; only CNPA is listed as an exception. | "The multiple-choice exam is delivered online and consists of 60\* multiple-choice questions. \* CNPA exam consists of 85 multiple-choice questions." (important-instructions-mc) | Sometimes |
| Time | 90 minutes | Product page: "Duration of Exam 90 Minutes". Instructions: "Candidates have 90\* minutes to complete the multiple-choice exam. \* CNPA candidates have 120 minutes". | Sometimes |
| Pass mark | 75% (generic LF figure) | "A score of 75% or above must be earned to pass the Multiple Choice Exam." https://docs.linuxfoundation.org/tc-docs/certification/faq-mc | Sometimes |
| Results | Within 24 hours | "Results will be emailed within 24 hours from the time that the exam is completed." (important-instructions-mc) | Rarely |
| Attempts | Two attempts: the first plus one retake | Product page: "✔ Two exam attempts" and, in the "Includes" list, "One Retake" | Sometimes |
| Eligibility window | 12 months | "✔ 12-months to schedule & take the exam"; "12 Month Exam Eligibility" (product page) | Sometimes |
| Validity | 2 years; renew by passing again | Product page: "Certification Valid for 2 Years". FAQ: "Certifications are valid for 2 years." and "Candidates have the option to retake and pass the exam to renew their certification." The FAQ's CARE auto-renewal list names only KCNA and KCSA. | Sometimes |
| Price | $250 exam only; $495 with THRIVE-ONE | "$250 Exam only"; "$495 Exam + Full Access Subscription" (product page) | **Often** |
| Credential | PDF certificate and badge | "PDF Certificate and Digital Badge" (product page) | Rarely |
| Curriculum version and date | No version is printed. PDF metadata: title `CGOA_Curriculum_111824`, created 18 November 2024. | `pdfinfo CGOA_Curriculum.pdf`: "Title: CGOA_Curriculum_111824", "CreationDate: Mon Nov 18 16:26:41 2024 UTC" | See "Not verified" |
| GitOps principles version | v1.0.0 | opengitops.dev shows "Principles v1.0.0" `[opengitops-home.txt]`; the documents README's citation snippet says "Release version: 1.0.0" and "year = {2021}" `[md/open-gitops-README.md]` | Rarely |

**Extracting the curriculum.** As with CAPA, `pdftotext` returns only bullets
because the text is drawn as outlines. I rendered the three pages at 300 dpi
and ran tesseract (`[CGOA_Curriculum.ocr.txt]`, where form feeds separate the
pages). The outline is on `#page=2`, in two columns. The LF product page lists
the same domains, items and weights in the same order, as plain HTML text.

**Exam terms (read first).** The Global Certification and Confidentiality
Agreement forbids disclosing "any exam and any related information including,
without limitation, questions, answers…", and lists as misconduct
"Disseminating actual exam content by any means, including… study guides" and
"using recollections of others… a.k.a. braindump material". Its AI clause is
about the exam itself: "Giving, Receiving or obtaining assistance by improper
means (e.g. using AI or ChatGPT) during the examination". Neither the LF
Terms of Use nor the LF Education terms bar using the sites' content with AI
tools. The LF Terms of Use say: "Except as otherwise provided, Content on
this site… is licensed under a Creative Commons Attribution 3.0 License".
The LF Education terms say "course materials and exams are protected by
copyright". So the exam owner is not tier D. The deck uses documentation, the
openly licensed curriculum and no exam content, per CONTENT-POLICY.md §2.
`robots.txt`: docs.linuxfoundation.org publishes `Content-Signal: ai-train=yes,
search=yes, ai-input=yes`. opengitops.dev's robots.txt carries only the
content-signal preamble with no signal set, which by its own text "neither
grants nor restricts permission". fluxcd.io, glossary.cncf.io and
argo-cd.readthedocs.io allow all. No host in `src/no-fetch.json` was requested.

## Naming

- **Marks, from the owner's own list.** Under "The Linux Foundation has the
  following registered trademarks in the United States and/or other
  countries", https://www.linuxfoundation.org/legal/trademarks lists
  "Certified GitOps Associate®", "OpenGitOps®", "GitOps Summit®",
  "GitOpsCon ®", "Argo®", "Cloud Native Computing Foundation®" and "CNCF®".
  Under "The Linux Foundation has registrations pending or trademarks in use
  for the following marks", it lists "Flux™". "GitOps" and "Argo CD" are not
  listed on their own.
- **Usage terms.** https://www.linuxfoundation.org/legal/trademark-usage:
  "You may make fair use of word marks to make true factual statements. But
  fair use does not permit you to state or imply that the owner of a mark
  produces, endorses, or supports your company, products, or services. Even
  when making fair use of a trademark, you should acknowledge the owner of the
  trademark with a trademark notice…". Also: "a ™ should not be changed to
  an ® in a trademark notice by anyone other than the owner", and "A copyright
  license, even an open source copyright license, does not include an implied
  right or license to use a trademark…".
- **How CONTENT-POLICY.md §4 applies.** The Linux Foundation is in §4's list,
  so the general rule and the "Everyone else" notice apply: our brand leads,
  the exam name is plain text, no logos (the curriculum cover carries the CNCF
  logo), and the notice goes in the page footer. Title: `[Site name] deck for
  the Certified GitOps Associate (CGOA) exam`. Never "CGOA Flashcards",
  never "official", never "OpenGitOps-approved". Flux takes ™, not ®.
- **Deck notice text:**

> **Deck notice.** Certified GitOps Associate (CGOA) and OpenGitOps are
> registered trademarks of The Linux Foundation. Argo is a registered
> trademark, and Flux™ a trademark, of The Linux Foundation. This deck is
> independent and is not affiliated with, sponsored, endorsed or approved by
> The Linux Foundation or the Cloud Native Computing Foundation.

- **Attribution for tier-B text.** OpenGitOps principles and glossary:
  CC BY 4.0 ("Except as otherwise noted, the content of this repo is licensed
  under the Creative Commons Attribution 4.0 License", open-gitops/documents
  `LICENSE.md`). The repo README asks citers to give the release version
  (1.0.0) and an access date. CNCF curriculum: "The Curriculum is available
  under the [CC-BY 4.0+ License]" (cncf/curriculum README; the repo has no
  root `LICENSE` file: `raw…/LICENSE` returned 404). CNCF Glossary and
  kubernetes.io: "Documentation Distributed under CC BY 4.0". Argo CD docs:
  Apache License 2.0, "Copyright 2017-2018 The Argo Authors". Flux and Flagger
  docs: Apache License 2.0 in the fluxcd/website, fluxcd/flagger and six
  controller repositories; see "Not verified" for the site footer.

## Outline

Domain order is the LF product page's, which matches the curriculum PDF
(`#page=2`: four domains in the left column, Tooling on the right). Items are
quoted exactly from the product page.

**1. GitOps Terminology: 20%**
- Continuous [T1] (`cgoa.continuous`)
- Declarative Description [T1] (`cgoa.declarative-description`, `…-separates-config`)
- Desired State [T1] (topic-0 term; `cgoa.desired-state-recreate`, `…-excludes-data`)
- State Drift [T1] (topic-0 term drift; `cgoa.state-drift`, `…divergence-sources`, `…drift-vs-new-version`)
- State Reconciliation [T1] (`cgoa.reconciliation`, `…reconciliation-uses-feedback`)
- GitOps Managed Software System [T1] (`cgoa.software-system`, `…-parts`)
- State Store [T1] (`cgoa.state-store`, `…-access-audit`, `…git-canonical-state-store`, `…gitops-source-of-truth-alternatives`)
- Feedback Loop [T1] (`cgoa.feedback-loop`, `…feedback-actions`)
- Rollback [T1] (topic-0 term; `cgoa.rollback-previous-commit`, `…argocd-app-rollback`, `…argocd-no-rollback-autosync`, `…helm-upgrade-remediation`)

**2. GitOps Principles: 30%**
- Declarative [T2] (`cgoa.principle-declarative`, `…declarative-vs-versioned`)
- Versioned and Immutable [T2] (`cgoa.principle-versioned-immutable`, `…pin-remote-bases`)
- Pulled Automatically [T2] (`cgoa.principle-pulled-automatically`, `…pull`, `…pulled-vs-reconciled`)
- Continuously Reconciled [T2] (`cgoa.principle-continuously-reconciled`, `…kubectl-edits-reverted`, `…field-manager-exception`)

**3. Related Practices: 16%**
- Configuration as Code (CaC) [T3] (`cgoa.configuration-as-code`, `…never-apply-from-desktop`, `…yaml-over-json`)
- Infrastructure as Code (IaC) [T3] (topic-0 term; `cgoa.gitops-apps-and-infra`)
- DevOps and DevSecOps [T3] (topic-0 terms; `cgoa.gitops-unified-process`, the secrets concepts, `…flux-impersonation`, `…policy-validation`)
- CI and CD [T3] (topic-0 terms; `cgoa.gitops-vs-imperative-pipelines`, `…ci-to-gitops-workflow`, `…ci-sync-step-optional`)

**4. GitOps Patterns: 20%**
- Deployment and Release Patterns [T4] (`cgoa.flagger-strategies`, `…ab-testing`, `…blue-green-mirroring`, `…l7-for-canary-ab`, `…environment-promotion`, `…trunk-based-delivery`, `…prod-approval-branch`)
- Progressive Delivery Patterns [T4] (topic-0 term; `cgoa.flagger`, `…flagger-automates`, `…progressive-delivery-techniques`, `…progressive-builds-on-cd`)
- Pull vs. Event-driven [T4] (`cgoa.flux-pull-based`, `…pull-vs-event-driven`, `…argocd-polls-3-minutes`, `…flux-receiver`, webhook details)
- Architecture patterns (in-cluster and external reconciler, state store management, etc.) [T4] (`cgoa.in-cluster-vs-external-reconciler`, cluster concepts, the four repository structures, `…separate-config-repo`, `…leave-room-imperative`, `…flux-bootstrap`)

**5. Tooling: 14%**
- Manifest Format and Packaging [T5] (topic-0 Helm, Kustomize, directory app; `cgoa.oci-config-artifacts`, `…oci-vs-git`, `…two-kustomization-types`, `…flux-helmrelease`)
- State Store Systems (Git and alternatives) [T5] (`cgoa.flux-source-kinds`, `…bucket-s3`, `…gitless-gitops`, `…argocd-oci-source`)
- Reconciliation Engines (ArgoCD, Flux, and alternatives) [T5] (`cgoa.reconciliation-engines`, `…flux`, `…flux-controllers`, Kustomization fields; Argo CD at topic 0)
- Interoperability with Notifications, Observability, and Continuous Integration Tools [T5] (`cgoa.flux-provider-alert`, `…commit-status-updates`, `…argocd-notifications`, metrics and events, `…image-update-automation`)

Counts: 5 domains and 25 items, 30 outline items in all. All map to concepts.
Two mappings are my reading, not the owner's:
- **"Rollback"** is an outline term, but the OpenGitOps glossary has no entry
  for it. The concepts rest on kubernetes.io ("you can instantly roll back to
  a previous commit"), the CNCF glossary ("rollback, revert, and self-healing
  attributes") and tool behaviour.
- **"In-cluster and external reconciler"** is not defined in any source I
  found. The contrast concept rests on tool facts: Flux "can use one
  Kubernetes cluster to manage apps in either the same or other clusters";
  a Flux Kustomization "can apply and manage resources on a remote cluster"
  through `.spec.kubeConfig`; `argocd cluster add` connects Argo CD to another
  cluster; and in Argo CD's AppProject example `https://kubernetes.default.svc`
  is "the same cluster". Writers must not invent a definition beyond that.

**Budget note.** T2 carries 30% of the exam but only 29 budgeted cards,
because KCNA already teaches the principles. Writers should spend them on
new scenarios (which principle a set-up breaks, how a tool meets each
principle) rather than definitions.

**Figures.** None attached. KCNA's `media/gitops-reconcile-loop.svg` (drawn
from OpenGitOps) can be reused on `cgoa.feedback-loop` if wanted.

## Traps

- [T1] "Continuous" does not mean instantaneous: "reconciliation continues to happen, not that it must be instantaneous".
- [T1] Desired state "generally does not include persistent application data, eg. database contents", but "often does include credentials for accessing that data".
- [T1] Drift covers a system that "has moved or is in the process of moving away" from desired state. Reconciliation is triggered by any divergence: unintended drift or an intentional new version.
- [T1] Git is "the canonical example" of a state store, not a requirement: "any other system that meets these criteria may be used". The CNCF glossary adds "a Kubernetes Operator or Artifact Storage".
- [T1] A GitOps managed software system has three parts: runtime environments with their resources, the management agents within each runtime, and the policies for access and management. Candidates forget the policies.
- [T1] Argo CD: "Rollback cannot be performed against an application with automated sync enabled." `argocd app rollback` without an ID goes to the previous version.
- [T1] Flux HelmRelease upgrade remediation defaults to the `rollback` strategy, but `retries` "Defaults to 0".
- [T2] The four principles describe the **desired state** ("The desired state of a GitOps managed system must be:"). They are not four steps of a pipeline.
- [T2] A CI job that runs `kubectl apply` is push-based and fails Pulled Automatically, even when the YAML lives in Git.
- [T2] A kustomization with a remote base at `HEAD` can "change meaning… even without any changes to your own Git repository". Pin to a tag or commit SHA to keep revisions immutable.
- [T2] Flux reverts `kubectl edit/patch/delete` changes at the next reconciliation. Fields added through the `flux-client-side-apply` field manager survive, but "fields specified in Git will always be overridden".
- [T3] Plain or base64 Secrets in Git "is unsafe, regardless of the visibility or access restrictions of the repository". Flux's only supported decryption provider is SOPS.
- [T3] Argo CD "strongly recommend[s]" populating secrets on the destination cluster rather than during manifest generation.
- [T3] In GitOps, CI builds and pushes the image and commits the manifest change. It does not need to deploy: with automated sync the `argocd app sync` step "is unnecessary".
- [T4] Canary and A/B testing need Layer 7 traffic management (a service mesh or ingress controller). "For Blue/Green deployments no service mesh or ingress controller is required." When an A/B match condition exists, Flagger ignores `maxWeight` and `stepWeight`.
- [T4] Webhooks do not make GitOps push-based: "Flux is by design pull-based", and webhook receivers "make pull-based pipelines as responsive as push-based pipelines".
- [T4] Argo CD polls repositories "every three minutes" (`timeout.reconciliation` 120s plus up to 60s jitter, from CAPA). Flux Kustomizations reconcile "every five minutes by default".
- [T4] Monorepo: environments share one branch (e.g. `main`), not a branch per environment. Repo per environment lets you restrict who can read production config.
- [T4] A separate config repo avoids "an infinite loop of build jobs and Git commit triggers" when CI pushes manifest changes.
- [T4] Leave HPA-managed fields such as `replicas` out of Git, or reconciliation fights the autoscaler.
- [T5] Two "Kustomization" types: the Flux custom resource (`kustomize.toolkit.fluxcd.io`) and Kustomize's `kustomization.yaml` (`kustomize.config.k8s.io`).
- [T5] Flux `.spec.prune` is a **required** boolean. Argo CD's automated sync does not prune by default (CAPA).
- [T5] Gitless GitOps keeps Git as the user interface. The Git server stops being a production dependency and the OCI registry becomes the source of truth.
- [T5] Flux Provider = "how events are encoded and where to send them". Alert = which events, "filtered by severity and involved object". Receiver = incoming webhooks.
- [T5] The outline writes "ArgoCD"; the project writes "Argo CD". Use "Argo CD".
- [all] The product page's purpose paragraph says "Configuration of Code"; the outline says "Configuration as Code (CaC)". Use the outline's wording.

## Languages

The LF handbook's language grid marks "Certified GitOps Associate (CGOA)"
with a tick for English only (the German, Japanese and Simplified Chinese
cells are empty in the page's Markdown source,
https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2/language).
The open-gitops/documents README says "Please find translations of the
principles as well as the glossary in the [i18n](./i18n/) folder". I did not
open that folder, so which languages exist is unknown. The CNCF Glossary
offers Bengali, Spanish, Vietnamese and other languages (site menu). All
sources were read in English.

## Not verified

- **CGOA-specific question count and pass mark.** Both come from the generic
  LF multiple-choice pages. Neither the CGOA page nor the curriculum states
  them.
- **Curriculum revision history.** No version is printed. The metadata says
  18 November 2024. I did not check the repository history (no git, and
  github.com returns 403 here).
- **Flux docs licence.** The source repositories (fluxcd/website,
  fluxcd/flagger, and the source, kustomize, helm, notification,
  image-automation and image-reflector controllers) are Apache License 2.0.
  The rendered fluxcd.io footer reads "© 2026 The Flux authors All Rights
  Reserved". I recorded them as tier B, as the CAPA brief did for the Argo
  docs, because the published text is built from the Apache-licensed
  Markdown. A human should confirm before release. If they disagree, treat
  Flux as tier C (facts only, own words).
- **opengitops.dev** is "© 2026 The Linux Foundation. All rights reserved."
  It is used only for the version number (tier C). All OpenGitOps wording
  comes from the CC BY 4.0 GitHub repository.
- **Configuration as Code.** No openly licensed definition was found. The
  CNCF Glossary has no entry, and a web search found only vendor blogs. The
  concept rests on kubernetes.io's "Store configuration in version control"
  practice. A primer must stay within that text.
- **"Alternatives" to Argo CD and Flux**, and to Git as a state store beyond
  OCI registries, Buckets and Helm repositories: the outline names none, and I
  researched none.
- **OpenGitOps anchors** could not be fetched from github.com (403). The raw
  Markdown was read, and the anchors follow GitHub's heading slugs.
- **Retake waiting periods and renewal rules beyond those quoted**: not on
  the pages fetched.
- **Which Argo CD and Flux versions the exam assumes**: no source says.
  Concepts cite the current docs (`stable` for Argo CD, the live fluxcd.io).

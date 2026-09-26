# Research brief: Google Cloud Professional Cloud Architect (gcp-pca)

Slug: `gcp-pca`. Family prefix: `gpca`. No prerequisite deck: this repo has
no Google Cloud deck and no `research/sources/` folder for one. Researched
26 September 2026. Every fact below was read in a source fetched during this
task. Saved copies are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/gcp-pca/`:
exam, legal and case-study files in `raw/` and `txt/`, documentation pages in
`docs/` (HTML and extracted text, with `{#anchor}` after each heading), and
`list.txt` logs every documentation URL and where it redirected.

**Where the docs live now.** Every `cloud.google.com/<product>/docs/…` URL
fetched redirected to `docs.cloud.google.com/…`, and several product paths
redirected to renamed products (see Traps). Concepts cite the final
`docs.cloud.google.com` URL. `src/licences.json` has no rule for either host
yet. The card checker will not check these labels until one is added:
`^https://docs\.cloud\.google\.com/` → `^B · CC BY 4\.0`. Do not add a
blanket rule for `cloud.google.com/`, because its marketing and compliance
pages carry no licence (tier C, below).

## Terms read first

- **Exam owner's terms** (https://cloud.google.com/certification/terms,
  `txt/cert-terms.txt`). Exam content is "Google's confidential information".
  "You may not use Exam content for any other purpose, including publishing,
  copying, selling, posting, downloading or transmitting any Exam content, in
  whole or in part, by any means for any purpose." The only AI clause bars
  candidates from using AI while sitting the exam: "Use any artificial
  intelligence software, program or application in any way during the Exam".
  **Nothing forbids using Google's public documentation with AI tools.**
- **Google Terms of Service** (https://policies.google.com/terms, "Effective
  July 30, 2026", `txt/gtos.txt`). They bar "using automated means to access
  content from any of our services in violation of the machine-readable
  instructions on our web pages (for example, robots.txt files that disallow
  crawling, training, or other activities)", and "using AI-generated content
  from our services to develop machine learning models". They also bar
  "misleading others into thinking that generative AI content was created by a
  human", which CONTENT-POLICY.md §6 already meets by disclosing AI drafting.
  There is no general ban on using the content with AI. **Not tier D.**
- **robots.txt.** `docs.cloud.google.com` disallows only `/console?*getstarted=*`,
  `/walkthroughs/`, `/log?*` and some language reference paths, then
  `Allow: /`. `services.google.com` (exam guide and case-study PDFs) says
  `Allow: *.pdf`. `developers.google.com` disallows only `/youtube/partner/`.
  `about.google` says `Allow: /`. `cloud.google.com/robots.txt` returned 404
  on HEAD (no robots file served). No page fetched was disallowed.
- **Documentation licence** (Site Policies,
  https://developers.google.com/terms/site-policies, "Last updated
  2025-08-06"). Footer: "Except as otherwise noted, the content of this page
  is licensed under the Creative Commons Attribution 4.0 License, and code
  samples are licensed under the Apache 2.0 License." Exclusions: "Google's
  trademarks and other brand features are not included in this license", and
  images, audio or video "is not covered by the license, unless specifically
  noted." Attribution for modified text: "Portions of this page are
  modifications based on work created and shared by Google and used according
  to terms described in the Creative Commons 4.0 Attribution License", with a
  link back to the page. **Every one of the 174 `docs.cloud.google.com` pages
  used carries that exact footer** (checked in each saved file): tier B.
  Diagrams on those pages are not covered, so writers must not copy them.
- **Tier C pages** (no Creative Commons notice; facts in our own words only):
  the certification page, the exam terms, both exam guide PDFs, the four case
  studies, and the `cloud.google.com/security/compliance/…` pages for SOC 2,
  HIPAA and COPPA and Compliance Reports Manager.
- **Case studies.** The four PDFs have no copyright or licence line. They are
  exam material, so treat them as tier C at the strictest: **never quote,
  never paraphrase, never reuse their company names, facts or requirements.**
  Scenario cards use our own fictitious businesses. The files were fetched
  only to check their licence.

## Topics

| Topic | Name | Exam-guide areas (our labels) |
|---|---|---|
| T1 | Well-Architected Framework | 1.2 framework; 6.1 operational excellence |
| T2 | Business requirements and cost | 1.1, 1.5, 4.2 |
| T3 | Reliability, backup and disaster recovery | 1.2, 2.2, 4.1, 4.2, 6.6 |
| T4 | Compute | 1.3, 2.3 |
| T5 | Storage | 1.3, 2.2 |
| T6 | Databases | 1.3, 2.2 |
| T7 | Data processing and transfer | 1.1, 1.3, 2.2 |
| T8 | VPC networking and load balancing | 1.3, 2.1 |
| T9 | Hybrid and multicloud connectivity | 1.3, 2.1 |
| T10 | Migration | 1.4, 5.1 |
| T11 | AI and machine learning | 1.2, 1.3, 2.4, 2.5, 3.1, 5.1 |
| T12 | Identity, access and resource hierarchy | 3.1 |
| T13 | Security controls | 3.1, 3.2 |
| T14 | Compliance | 3.2 |
| T15 | Delivery, infrastructure as code and tooling | 4.1, 5.1, 5.2, 6.3 |
| T16 | Observability and operations | 1.1, 4.1, 6.2–6.6 |

## Exam facts

Sources: certification page
(https://cloud.google.com/learn/certification/cloud-architect, `txt/pca-cert.txt`),
exam guide PDF
(https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf,
7 pages, `txt/pca-guide.txt`), renewal exam guide PDF
(https://services.google.com/fh/files/misc/professional_cloud_architect_renewal_exam_guide_eng.pdf,
`txt/pca-renewal-guide.txt`), exam terms (`txt/cert-terms.txt`). All read in
the raw text.

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | Google Cloud (Google LLC) | Terms: entered into "between the individual agreeing to these terms ("you") and Google, LLC" | Rarely |
| Current version | Undated; recently rebranded | Cert page banner: "This exam was updated to reflect recent branding changes. Refer to the exam guide to review product names used on the exam." The guide PDF has no date or version. Case-study file names begin `v6.1_pca_` (a file name only, not a stated version) | **Yes** |
| Length | 2 hours | Cert page: "Length: 2 hours" | Sometimes |
| Questions | 50–60 | "Exam format: 50-60 multiple choice and multiple select questions" | Sometimes |
| Format | Multiple choice and multiple select | As above | Rarely |
| Case studies | 2 per exam, 20–30% of questions, 4 published | "Each exam includes 2 case studies. Case study questions make up 20-30% of the exam"; "You can view the case studies on a split screen during the exam." Guide lists Altostrat Media, Cymbal Retail, EHR Healthcare and KnightMotives Automotive | **Yes** |
| Pass mark | Not published | No pass mark on the cert page, guide or terms | – |
| Fee | US$200 plus tax | "Registration fee: $200 (plus tax where applicable)" | Yes |
| Languages | English, Japanese | "Languages: English, Japanese" | Sometimes |
| Delivery | Online-proctored or test centre | "Take the online-proctored exam from a remote location" or "the onsite-proctored exam at a testing center" | Rarely |
| Prerequisites | None; 3+ years' experience recommended | "Prerequisites: None"; "3+ years of industry experience including 1+ years designing and managing solutions using Google Cloud" | Rarely |
| Age | 18 or over | Terms 2.a: "You must be 18 years of age or older" | Rarely |
| Validity | 2 years | Cert page: "Validity period: 2 years". Terms 1.c: "A Professional Certification is valid for two years from the date of issue" | Rarely |
| Renewal window | From 60 days before expiry | Terms 1.d: "Professional Certifications: you may begin 60 days before your Certification expiration date." Passing extends validity "for two years from the date of passing" | Sometimes |
| Renewal exam | 1 hour, US$100, 25 questions, 1 generative-AI case study (90–100%) | Cert page, "Renewal exam information". Its guide lists Cymbal Retail and Altostrat Media and weights ~30 / ~40 / ~20 / ~10% over four sections | **Yes** |
| Renewal via Google Skills | Courses or skill badges; 1-year validity | "Validity period: 1 year"; courses or badges must be completed "within the last year of the certification's active date" | **Yes** |
| Retakes | 14 days, then 60, then 365; max 4 attempts in 2 years | Terms: "Associate and Professional certification exams: You have a maximum of four attempts in a two year period. If you don't pass the exam, you can take it again after 14 days. If you don't pass the second time, you must wait 60 days… If you don't pass the third time, you must wait 365 days". "Payment is required each time you take an exam." | Sometimes |
| No-shows | Fee forfeited | "If you do not show up for your exam, your exam fee is forfeited" | Rarely |
| Content changes | At any time | Terms 1.e: "Google may update or modify the content of an Exam at any time" | – |

## Naming

**Google's rules.** The certification terms say certifications may be used
"only in accordance with the then-current Google Brand Feature Guidelines"
(https://www.google.com/permissions/guidelines.html). That address, via
about.google/brand-resource-center/rules/, now redirects to "Trademark
guidelines for proper usage" on partnermarketinghub.withgoogle.com
(`txt/brand-rules.txt`). Its rules include: "Don't display any Google Brand
Features as the most prominent element in your content"; "Don't display Google
Brand Features in any manner that implies a relationship with, affiliation
with, sponsorship by, or endorsement by Google"; "Don't incorporate Google
Brand Features into your own product names"; "Don't register Google trademarks
as second- or third-level domain names"; "Use the trademark only as an
adjective – never as a noun or verb, and never in the plural or possessive
form"; and "Spell and capitalize the trademark exactly as shown in the Google
trademarks list". The trademark list (https://about.google/brand-resource-center/trademark-list/)
includes Google Cloud™, BigQuery, Apigee, Gemini™ and Google Cloud Hyperdisk™.
The Site Policies exclude trademarks from the CC BY licence.

**How CONTENT-POLICY.md §4 applies.** Google is not in §5, so a named deck is
allowed. Title: "[Site name] deck for the Google Cloud Professional Cloud
Architect exam". Our brand leads and "Google" is never the most prominent
element. No logo or badge, no "Google Cloud Certified" branding, no mark in the
domain (`/decks/google-cloud/gcp-pca/` is fine). Use marks as adjectives
("BigQuery data warehouse" style) where it reads naturally. The Google Cloud
notice uses §4's "Everyone else" row plus Google's own CC BY attribution
sentence.

**Deck notice text:**

> Professional Cloud Architect and Google Cloud are trademarks of Google LLC.
> This deck is independent and is not affiliated with, sponsored, endorsed or
> approved by Google. BigQuery, Apigee and Gemini are trademarks of Google
> LLC; all other trademarks are the property of their respective owners.
> Portions of this deck are modifications based on work created and shared by
> Google and used according to terms described in the Creative Commons 4.0
> Attribution License (https://creativecommons.org/licenses/by/4.0/); each card
> links to its source page on docs.cloud.google.com. No card uses exam
> content or the exam's case studies.

## Outline

The exam guide's six sections, in order, with Google's approximate weights.
Objectives are labelled in our own words, because the guide is tier C: link to
it and do not copy it. `[Tn]` gives the covering topic. Every item maps to at
least one concept in `gcp-pca-concepts.json`. The PDF pages (form-feed count)
are: section 1 on pages 1–3, section 2 on pages 3–4, section 3 on pages 4–5,
section 4 on pages 5–6, section 5 on page 6 and section 6 on page 7.

**1. Designing and planning a cloud solution architecture (~25%)**
- 1.1 Business requirements: use cases and strategy [T2]; functional and
  non-functional requirements [T2]; business continuity [T3]; cost
  optimisation [T2]; supporting application design [T4]; integration with
  external systems [T15]; data movement [T7]; trade-offs [T1]; build, buy,
  modify or deprecate [T2]; KPIs, ROI and metrics [T2]; security and
  compliance [T13]; observability [T16]
- 1.2 Technical requirements: Well-Architected Framework [T1]; HA and failover
  [T3]; flexible resources [T4]; scaling for growth [T4]; performance and
  latency [T8]; Gemini Cloud Assist [T11]; backup and recovery [T3]
- 1.3 Network, storage and compute: on-premises and multicloud integration
  [T9]; Google AI and ML offerings (Gemini models, Agent Builder, Model Garden,
  AI Hypercomputer) [T11]; cloud-native networking (VPC, peering, firewalls,
  load balancers, routes, container networking, Shared VPC, Private Service
  Connect) [T8]; data processing choices [T7]; storage types (object, file,
  databases) [T5, T6]; compute platform mapping (GKE, Cloud Run, Cloud Run
  functions) [T4]; compute resource choice (Spot VMs, custom machine types,
  specialised workloads) [T4]
- 1.4 Migration plan: integrating with existing systems [T10]; assessing and
  migrating systems and data, including Migration Center [T10, T7]; migration
  methods, testing, network and dependency planning [T10]; licensing and
  financial impact [T10]
- 1.5 Future improvements: cloud and technology change, evolving business
  needs, cloud-first design [T1, T2]

**2. Managing and provisioning a cloud solution infrastructure (~17.5%)**
- 2.1 Network topologies: hybrid networking [T9]; multicloud and
  Google Cloud-to-Google Cloud links [T9]; intrusion protection, access control
  and firewalls [T8]; VPC design and load balancing [T8]
- 2.2 Storage systems: allocation [T5]; processing and compute provisioning
  [T7]; security and access [T5]; transfer and latency [T7]; retention and
  lifecycle [T5]; growth planning [T5]; backup and recovery [T3, T5]
- 2.3 Compute systems: provisioning [T4]; Spot versus standard [T4];
  networking for Compute Engine, GKE, serverless and VMware Engine [T4, T8];
  orchestration, configuration and patching [T4, T15]; container
  orchestration [T4]; serverless [T4]
- 2.4 End-to-end ML on Gemini Enterprise Agent Platform: pipelines [T11]; data
  integration [T11]; AI Hypercomputer, GPUs and TPUs, consumption models,
  large-scale training [T11]
- 2.5 Prebuilt AI: Google AI APIs (search, conversation, vision, image, video,
  audio) [T11]; Gemini Enterprise features (agents, NotebookLM) [T11]; Model
  Garden models [T11]

**3. Designing for security and compliance (~17.5%)**
- 3.1 Security: IAM [T12]; resource hierarchy [T12]; keys, encryption and
  secrets [T13]; separation of duties [T12]; auditing, VPC Service Controls,
  context-aware access, organisation policy, hierarchical firewall policy [T13,
  T8]; CMEK with Cloud KMS [T13]; secure remote access (IAP, service account
  impersonation, Chrome Enterprise Premium, Workload Identity Federation) [T13,
  T12]; software supply chain [T13]; securing AI (Model Armor, Sensitive Data
  Protection, secure model deployment) [T11, T13]
- 3.2 Compliance: legislation (health records, children's privacy, data
  privacy, ownership, sovereignty) [T14]; commercial (card data, PII) [T14];
  industry certifications such as SOC 2 [T14]; audits and logs [T13, T14]

**4. Analysing and optimising technical and business processes (~15%)**
- 4.1 Technical processes: SDLC [T15]; CI/CD [T15]; troubleshooting and root
  cause [T16]; testing and validation [T15]; service catalogue and
  provisioning [T15]; disaster recovery [T3]
- 4.2 Business processes: stakeholders, change management, team readiness,
  decision-making, customer success [T2]; cost and resource optimisation
  (CapEx/OpEx) [T2]; business continuity [T3]

**5. Managing implementation (~12.5%)**
- 5.1 Advising teams: application and infrastructure deployment [T15]; API
  management with Apigee [T15]; load, unit and integration testing [T15];
  data and system migration tooling [T10]; Gemini Cloud Assist [T11]
- 5.2 Programmatic access: Cloud Shell Editor, Cloud Code, Cloud Shell [T15];
  SDKs (gcloud, gsutil, bq) [T15]; emulators (Bigtable, Spanner, Pub/Sub,
  Firestore) [T15]; infrastructure as code and Terraform [T15]; API access
  practice [T15]; client libraries [T15]

**6. Ensuring solution and operations excellence (~12.5%)**
- 6.1 Operational excellence pillar [T1]
- 6.2 Observability: monitoring and logging [T16]; profiling and
  benchmarking [T16]; alerting [T16]
- 6.3 Deployment and release management [T15]
- 6.4 Supporting deployed solutions [T16]
- 6.5 Quality control [T15, T16]
- 6.6 Production reliability: chaos engineering, penetration testing, load
  testing [T3, T16]

**Soft-skill items.** Stakeholder management, change management, team
readiness, decision-making and customer success (4.2) have no Google
documentation page. They map to `gpca.functional-vs-nonfunctional`,
`gpca.kpi-roi` and the cost-pillar concepts. Writers should keep these to
scenario cards built from the Well-Architected Framework pages, and not add
facts about them from general knowledge.

## Traps

- **Renamed products (the branding banner).** [T11] `cloud.google.com/vertex-ai/docs`
  now redirects to "Gemini Enterprise Agent Platform", and the guide says
  "Agent Platform Pipelines" and "Agent Platform". Prep material that says
  "Vertex AI" is out of date, although "Vertex AI" is still on Google's
  trademark list. Use the current product names.
- [T7] "'Managed Service for Apache Spark' is the new name for the product
  formerly known as 'Dataproc on Compute Engine' (cluster deployment) and
  'Google Cloud Serverless for Apache Spark' (serverless deployment)."
- [T7] "Cloud Composer is evolving to become Managed Service for Apache
  Airflow."
- [T4] "Cloud Run functions (1st gen), formerly known as Cloud Functions (1st
  gen)". The guide says "Cloud Run functions".
- [T11] The NotebookLM Enterprise page is now titled "What is Gemini Notebook
  Enterprise?", but the exam guide still says "NotebookLM".
- [T15] The guide lists gsutil, but the gsutil page says: "The gsutil tool is
  a legacy Cloud Storage CLI and minimally maintained", so use `gcloud storage`.
  A card must say both.
- [T4] Spot VMs "don't have a minimum or maximum runtime unless you
  specifically limit the runtime". Don't carry over rules for older
  preemptible VMs.
- [T4] Cloud Run has four resource types ("service, job, worker pool, or
  instance"), not just services and jobs.
- [T8] "VPC Network Peering does not provide transitive routing". Candidates
  confuse it with Shared VPC and with NCC.
- [T8] Cloud Load Balancing "offers two types of load balancers: Application
  Load Balancers and Network Load Balancers". The proxy and passthrough split
  sits inside Network Load Balancers.
- [T3] RTO is the maximum acceptable time offline, and RPO is the maximum
  acceptable period of data loss (DR planning guide). Candidates swap them.
- [T5] The minimum storage durations are 30 days for Nearline, 90 for
  Coldline and 365 for Archive, and all three have retrieval fees. A newer
  "Rapid storage" class also appears in the table.
- [T6] A Cloud SQL HA standby ("regional instance") is not a read replica:
  the "standby instance cannot be used for read queries". Cross-region read
  replicas "Provide additional disaster recovery capability to guard against a
  regional failure."
- [T9] "HA VPN can provide an SLA of 99.99% or 99.9%" depending on topology.
  Interconnect's SLA is 99.99% for critical production and 99.9% for
  non-critical.
- [T12] Basic roles: "In production environments, do not grant basic roles
  unless there is no alternative."
- [T13] "Identity and Access Management focuses on who… Organization Policy
  focuses on what". VPC Service Controls is "independent of" IAM and gives
  "context-based perimeter security"; Google recommends "using both … for
  defense in depth".
- [T2] There are three quota types (allocation, rate, concurrent), not two.
- [T1] The framework's pillars are six, and security is named "Security,
  privacy, and compliance". Performance and cost are separate pillars.
- **Case studies.** [all] Only the four in the current guide apply to the
  standard exam, and the renewal exam uses two of them. Prep sites that name
  other case studies are out of date. We never use any case study's content.
- **Weights differ by exam.** [all] Standard: ~25 / 17.5 / 17.5 / 15 / 12.5 /
  12.5 over six sections. Renewal: ~30 / 40 / 20 / 10 over four sections.
- **Retakes and validity.** [all] Professional exams follow a 14-, 60-
  and 365-day retake ladder. Foundational exams allow 10 attempts a year.
  Validity is 2 years (Professional) against 3 (Associate). Renewal through
  Google Skills lasts only 1 year.

## Languages

The exam is offered in English and Japanese (cert page), and the renewal exam
in the same two. The documentation pages have a language selector, but this
task fetched and checked only the English versions. Whether each translated
page carries the same CC BY footer was **not checked**. No openly licensed
translation of the exam guide was found (none was searched for beyond the cert
page, which links only the English PDFs).

## Not verified

- **Pass mark.** Not on the cert page, the guide or the terms. No other
  Google page was searched for it (the certification FAQ was not fetched).
- **Exam-guide version and date.** The PDF has no date or version number. The
  case-study file names begin `v6.1_`, but Google does not state that this is
  the guide's version.
- **Vertex AI rename.** The rename is shown only by the redirect and the new
  product name. No fetched page states "formerly Vertex AI". Writers may say
  "Gemini Enterprise Agent Platform", but not the date or wording of the
  change.
- **Choosing a database.** `docs.cloud.google.com/docs/databases/choose-database`
  and `…/architecture/choose-database` returned 404. `gpca.database-choice`
  cites the storage-strategy page, and writers build the comparison from each
  database's own page.
- **Licensing implications.** The BYOL page
  (`compute/docs/instances/bring-your-own-license`) returned 404.
  `gpca.sole-tenant-licensing` cites the sole-tenancy page, which discusses
  licensing.
- **CapEx/OpEx, KPIs and ROI, and build/buy/modify/deprecate** are exam-guide
  terms with no Google documentation page fetched. Their concepts cite the
  guide (tier C). Teach them in our own words, and add no figures.
- **Penetration testing** (6.6) has no Google page fetched, so it has no
  concept. Chaos and load testing cover 6.6.
- **Sample questions** are hosted on Google Forms (linked from the cert page)
  and were not fetched. They are Google's practice content and not part of our
  source base.
- **Translations** of the documentation were not checked (see Languages).
- **Set sizes** in `gcp-pca-concepts.json` were counted from each page's
  headings or lists on 26 September 2026. These pages update often (most say
  "Last updated 2026-09-18" to "2026-09-25"), so recount at write time.

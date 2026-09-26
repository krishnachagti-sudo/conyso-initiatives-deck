# Research brief: Google Cloud Cloud Digital Leader

Slug: `gcp-cdl`. Family prefix: `gcdl`. No prerequisite deck. Researched on
26 September 2026. Every fact below comes from a page fetched during this task.
Saved copies are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/gcp-cdl/`:
- exam, certification, help-centre and legal pages as `*.txt` at the top level, with raw HTML and PDFs in `raw/`;
- documentation pages as text in `docs/` (raw HTML in `raw/docs/`), listed with their canonical URLs in `canon.tsv`;
- the exam guide and study guide split by PDF page in `eg-paged.txt` and `study-paged.txt`;
- the concept generator `build.py`, which checks every `#anchor` against the `id` attributes in the saved HTML and every `#page=N` against a phrase on that PDF page.

**How sources are cited.**
- **Tier B:** documentation pages on `docs.cloud.google.com` (and one on `developers.google.com`). Each one fetched carries the footer "Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License." All 94 were checked in the raw text.
- **Tier C:** the exam guide, the study guide, the certification pages, and the `cloud.google.com/learn/...`, `/discover/...` and `/security/...` marketing pages. None of these carries a Creative Commons notice.
- **Mix:** 141 of the 310 concepts cite tier B and 169 cite tier C. The study guide supplies most of the tier-C citations (154), because it is the only source that defines many of the business terms the outline names.

## Topics

One topic per exam-guide objective, in the guide's order.

| Topic | Name | Exam-guide objective (section weight) |
|---|---|---|
| T1 | Cloud and digital transformation | 1.1 (Section 1, ~18%) |
| T2 | Cloud models, networks and service models | 1.2 (Section 1) |
| T3 | Data and its value | 2.1 (Section 2, ~18%) |
| T4 | Data management products | 2.2 (Section 2) |
| T5 | Analytics, BI and streaming | 2.3 (Section 2) |
| T6 | AI and ML fundamentals | 3.1 (Section 3, ~18%) |
| T7 | Google Cloud AI offerings | 3.2 (Section 3) |
| T8 | Migration and compute terms | 4.1 (Section 4, ~18%) |
| T9 | Infrastructure and application products | 4.2 (Section 4) |
| T10 | APIs and Apigee | 4.3 (Section 4) |
| T11 | Security fundamentals | 5.1 (Section 5, ~18%) |
| T12 | Google Cloud security and trust | 5.2 (Section 5) |
| T13 | Cost control and resource hierarchy | 6.1 (Section 6, ~10%) |
| T14 | Operations and reliability | 6.2 (Section 6) |

## Terms of use checked first

Google's terms do **not** forbid AI use of this content, so the deck can go ahead.
- **Developers Site Policies** (https://developers.google.com/terms/site-policies, `[site-policies.txt]`). These are the policies the docs footer points to. They say: "We are pleased to license much of the documentation on Google Developers under terms that explicitly encourage people to take, modify, reuse, re-purpose, and remix our work as they see fit." A page with the CC BY notice may be used freely: "you are free to use nearly everything on the page in your own creations".
- **What the licence excludes:** "Google's trademarks and other brand features are not included in this license." Also excluded: "images, audio or video material, or a link to content on a different webpage… This content is not covered by the license, unless specifically noted."
- **Attribution:** for modified text the policies ask for "Portions of this page are modifications based on work created and shared by Google and used according to terms described in the Creative Commons 4.0 Attribution License", with a link back to the source page.
- **Google Terms of Service** (effective July 30, 2026, `[gtos.txt]`). These govern cloud.google.com, whose footer links "Site terms". They contain no ban on using content with AI. The relevant restrictions are these:
  - no "using automated means to access content from any of our services in violation of the machine-readable instructions on our web pages (for example, robots.txt files that disallow crawling, training, or other activities)";
  - no "using AI-generated content from our services to develop machine learning models or related AI technology". This concerns output of Google's AI services, not documentation.
- **robots.txt.** Every host fetched was checked first.
  - `docs.cloud.google.com` disallows only `/console?*getstarted=*`, `/walkthroughs/`, `/log?*` and the per-language reference trees.
  - `services.google.com` has `Disallow: /` but `Allow: *.pdf`, so the two guide PDFs are allowed.
  - `developers.google.com` disallows only `/youtube/partner/`, and `about.google` allows everything.
  - `partnermarketinghub.withgoogle.com` disallows only `/search/`.
  - `cloud.google.com/robots.txt` and `policies.google.com/robots.txt` return no robots file (an HTML page and a 404).
  - The `support.google.com` robots file starts `User-Agent: *`, and no rule matched `/cloud-certification/`.
- **Exam terms** (`[cert-terms.txt]`, §3). "The content of the Exam, including questions, answers, or any communication, oral or written, regarding or related to the Exam is Google's confidential information". Candidates "may not use Exam content for any other purpose, including publishing, copying, selling, posting…". No exam content, sample-question content or recalled questions may be used (CONTENT-POLICY.md §2). The sample-question form (a Google Form) was not opened.

## Exam facts

Sources:
- **Certification page:** https://cloud.google.com/learn/certification/cloud-digital-leader, `[cdl-cert.txt]`.
- **Exam guide:** the PDF linked from that page, `[cloud_digital_leader_exam_guide_english.txt]`.
- **Exam terms:** `[cert-terms.txt]`.
- **Help centre:** answers 9907853 (renewal), 9438208 (FAQs), 9749448 (retakes), 16803278 (delivery provider) and 9907749 (languages), saved as `[faq-*.txt]`.

All were read in the raw text.

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | Google Cloud (Google LLC) | Exam terms: agreement "between the individual agreeing to these terms ("you") and Google, LLC" | Rarely |
| Certification | Cloud Digital Leader | Cert page heading "Cloud Digital Leader"; guide title "Cloud Digital Leader Certification exam guide" | Rarely |
| Level | Foundational | Certification overview (`[cert-overview.txt]`) lists it under "Foundational certification", with "No technical prerequisites" | Rarely |
| Current version | Exam guide launched 12 August 2026 | Guide footer: "Cloud Digital Leader exam guide - launched on August 12, 2026". Cert page: "As of August 12, the new version of the exam is now live." | **Yes** |
| Scope | Standard and renewal exams | Guide: "This exam guide outlines the topics that may appear on both the standard and renewal exams." | Rarely |
| Length | 90 minutes | Cert page: "Length: 90 minutes" | Sometimes |
| Questions | 50–60 | "Exam format: 50-60 multiple choice and multiple select questions" | Sometimes |
| Pass mark | Not published; pass/fail only | FAQ 9438208: "Google Cloud exams are designed to determine only whether or not an individual meets a minimum passing standard, so only pass/fail results are provided." A provisional result appears on screen; "Please allow 7-10 days for Google Cloud to confirm your exam results." | Rarely |
| Fee | US$99 | "Registration fee: $99 (plus tax where applicable)" | **Yes** |
| Languages | English, Japanese, Spanish, Portuguese, French | Cert page, standard exam | **Yes** |
| Delivery | Online-proctored or at a test centre | "Online-proctored exam from a remote location" / "onsite-proctored exam at a testing center" | Sometimes |
| Provider | Pearson since March 2026 | FAQ 16803278: "the Google Cloud certification program is partnering with Pearson as our new test delivery provider". Last Kryterion date: February 22, 2026. First Pearson test date: March 2, 2026. | **Changed this year** |
| Reschedule or cancel | At least 24 hours ahead | FAQ 16803278: appointments must "be rescheduled or cancelled a minimum of 24 hours prior to the appointment" | Sometimes |
| Prerequisites | None | "Prerequisites: None"; "Recommended experience: Experience collaborating with technical professionals" | Rarely |
| Eligibility | 18 or older | Exam terms §2a: "You must be 18 years of age or older" | Rarely |
| Retakes | At most 10 attempts a year, 14 days apart | Retake policy: "Foundational certification exams: You have a maximum of ten attempts within a one year period and must wait at least 14 days between each failed attempt." Attempts in any language count; "Payment is required each time you take an exam." | Sometimes |
| Validity | 3 years | Cert page: "Validity period: 3 years". Terms §1c: Foundational certifications "are valid for three years from the date of issue" | Sometimes |
| Renewal exam | 45 min, US$60, English and Japanese, 20 questions | Cert page, renewal exam block. "Content: Same as the standard exam." | **Yes** |
| Renewal by exam | Window opens 180 days before the inactive date; adds 3 years | FAQ 9907853 table, Cloud Digital Leader row | Sometimes |
| Renewal by courses | Window opens 365 days before; adds 1 year | FAQ 9907853, "Renew with Continuing Education in Google Skills": "Adds 1 year of validity to inactive date" | **New** |
| Renewal path lock | Cannot switch after the first renewal attempt | FAQ 9907853: for Cloud Digital Leader and others, "you cannot switch after your first renewal attempt" | Sometimes |
| Renewal discount | 50% | FAQ 9907853: "You will receive a 50% off renewal discount code when you initially certify." | Sometimes |

## Naming

**What Google's own pages say.**
- **Trademark guidelines for proper usage** (`[brand-rules.txt]`). `about.google/brand-resource-center/rules/` now redirects to Google's Partner Marketing Hub. "Brand Feature" means "Google trademarks, logos, web pages, screenshots, or other distinctive features."
- **The guidelines' Don'ts.** They include:
  - "Don't display any Google Brand Features as the most prominent element in your content."
  - "Don't display Google Brand Features in any manner that implies a relationship with, affiliation with, sponsorship by, or endorsement by Google."
  - "Don't display Google Brand Features in any manner that can be reasonably interpreted to suggest that editorial content has been authored by or represents the views or opinions of Google".
  - "Don't incorporate Google Brand Features into your own product names…" and "Don't register Google trademarks as second- or third-level domain names."
  - "Don't use the registered trademark symbol (®) in countries where our marks have not been registered."
- **The guidelines' Dos.** "Spell and capitalize the trademark exactly as shown in the Google trademarks list", and use it "only as an adjective – never as a noun or verb".
- **Google trademarks list** (`[tm-list.txt]`). It includes Google Cloud™, Google Compute Engine™, BigQuery™, BigQuery Omni™, Cloud Spanner™, Bigtable™, Firestore™, GKE™, Looker™, Apigee™, Gemini™, Mandiant™, Vertex AI™, Cloud TPU™, Anthos™ and Google Workspace™.
- **Not on the list.** "Cloud Digital Leader" and "Google Cloud Certified" do not appear on it.
- **Exam terms §4.** A certification may be used only "in accordance with the then-current Google Brand Feature Guidelines".

**How CONTENT-POLICY.md §4 applies.** Google is not in §5, so the deck may name
the exam.
- **Title pattern:** "[Site name] deck for the Cloud Digital Leader exam (Google Cloud)". "Google Cloud" should appear in plain text, as an adjective, and never as the first or most prominent words. Use no logo, badge or product icon, and never say "official".
- **URL:** a path such as `/decks/google-cloud/cloud-digital-leader/` is fine. Never put a Google mark in a domain name.
- **Exam content:** cards must not use exam content (terms §3) or sample questions.
- **Tier-C sources:** the exam guide, the study guide and the marketing pages are tier C. Writers state their facts in their own words and never copy their wording. The outline below paraphrases the guide, and cards carry our own topic labels.
- **Lawyer check:** CONTENT-POLICY.md §8 still applies. Google publishes no prescribed disclaimer wording, so the §4 "Everyone else" notice is used.

**Deck notice text:**

> Cloud Digital Leader is a certification of Google LLC. Google Cloud, BigQuery,
> Bigtable, Cloud Spanner, Firestore, GKE, Google Compute Engine, Looker, Apigee,
> Gemini, Mandiant and Google Workspace are trademarks of Google LLC. This deck is
> independent and is not affiliated with, sponsored, endorsed or approved by
> Google. All other trademarks are the property of their respective owners.
> Portions of this deck are modifications based on work created and shared by
> Google and used according to terms described in the Creative Commons 4.0
> Attribution License (https://creativecommons.org/licenses/by/4.0/); each card
> links to its source page on docs.cloud.google.com.

"Kubernetes" is not on Google's list and is not attributed to Google here. Its
owner was not checked in this task.

## Outline

The guide's six sections, fourteen objectives and 69 bullets, in its order and
with its weights. It is paraphrased because the guide is tier C: link to it and
do not reproduce it. Each bullet maps to at least one concept.

**Section 1: Digital transformation with Google Cloud (~18%)**
- 1.1 Why and how the cloud is changing business
  - Define cloud, agentic AI, infrastructure, digital transformation, open source and open standard [T1]
  - Benefits of cloud for digital transformation (scalability, cost-effectiveness, agility, speed, flexibility, security, global reach and high availability, data-driven insights, strategic value) [T1]
  - Drivers of transformation, hurdles, and risks of not adopting cloud [T1]
  - Google Cloud's differentiators (AI, openness, AI Hypercomputer, AI-ready data platform, security, global network) [T1]
- 1.2 Fundamental cloud concepts
  - Use cases and benefits of private, hybrid and multicloud [T2]
  - Networking basics: IP address, DNS, latency, bandwidth; how the global network helps [T2]
  - Regions, zones and edge locations [T2]
  - IaaS, PaaS and SaaS: benefits and trade-offs [T2]

**Section 2: Exploring data transformation with Google Cloud (~18%)**
- 2.1 The role of data in digital transformation
  - Why data is valuable [T3]
  - Databases, data warehouses and data lakes [T3]
  - First-, second- and third-party data; structured, unstructured and semi-structured data [T3]
  - The data supply chain (genesis, collection, processing, storage, analysis, activation) [T3]
  - Data governance and why it matters [T3]
  - Openness and interoperability to remove silos and avoid lock-in [T3]
- 2.2 Choosing Google Cloud data management products
  - Cloud Storage, Spanner, Cloud SQL, AlloyDB, Bigtable, BigQuery and Firestore by use case [T4]
  - Relational, non-relational, object storage, SQL and NoSQL [T4]
  - Storage classes: Standard, Nearline, Coldline, Archive and Autoclass [T4]
  - Migrating or modernising a database [T4]
- 2.3 Smart analytics, BI and streaming
  - How Looker democratises data [T5]
  - Looker on BigQuery for real-time reports, dashboards and workflows [T5]
  - Why real-time streaming matters [T5]
  - Pub/Sub, Dataflow and Managed Service for Apache Spark [T5]

**Section 3: Innovating with Google Cloud AI (~18%)**
- 3.1 AI and ML concepts and business value
  - Define AI, ML, gen AI, data analytics and business intelligence [T6]
  - How agentic AI is reshaping industries and work [T6]
  - Key benefits of Google Cloud's AI offerings [T6]
  - Business problems ML solves [T6]
  - Data quality and its dimensions [T6]
  - Explainable and responsible AI [T6]
- 3.2 Google Cloud AI offerings
  - Strategic considerations when choosing an AI solution [T7]
  - Gemini Enterprise Agent Platform and its use cases [T7]
  - Matching pre-trained APIs and models (Agent Platform API, Vision API, Cloud Translation API, Speech-to-Text API, Gemini) to use cases [T7]
  - Custom models on your own data (Agent Studio, AutoML on Agent Platform) [T7]
  - AI Hypercomputer (GPUs and TPUs, open software, flexible consumption) [T7]
  - BigQuery ML [T7]

**Section 4: Modernising infrastructure and applications (~18%)**
- 4.1 Transitioning to the cloud
  - Migration terms: workload, discovery and assessment, retire, retain, rehost, replatform, refactor, reimagine [T8]
  - Compute terms: VMs, containers, applications and microservices, serverless, Spot VMs, Kubernetes, autoscaling and load balancing, managed services [T8]
- 4.2 Infrastructure offerings
  - Compute Engine [T9]
  - Business value of modern application development [T9]
  - GKE [T9]
  - Serverless: Cloud Run and Cloud Run functions [T9]
  - Hybrid and multicloud products (AlloyDB Omni, BigQuery Omni, GKE Enterprise, Cloud SQL, Looker) [T9]
- 4.3 APIs
  - Define API [T10]
  - New business from exposing and monetising public APIs [T10]
  - Apigee API Management [T10]

**Section 5: Trust and security with Google Cloud (~18%)**
- 5.1 Cloud security concepts
  - Threats: DDoS, ransomware, cryptomining, malware, viruses, phishing, misconfiguration, unsecured third-party systems, physical damage, LLM attacks [T11]
  - Cloud security versus on-premises security [T11]
  - Control, compliance, confidentiality, integrity and availability [T11]
  - DLP, privileged access, least privilege, zero trust, security by default, posture, cyber resilience, firewall, encryption and decryption [T11]
  - Encryption in use, in transit and at rest [T11]
  - Authentication, authorisation and auditing (MFA, 2SV, IAM) [T11, T12]
  - SecOps terms: posture, threat intelligence, threat response [T11]
- 5.2 Google as part of the security team
  - Securing every layer of the AI stack [T12]
  - Google Threat Intelligence and its sources [T12]
  - Security Command Center [T12]
  - Google Security Operations [T12]
  - Secure-by-design platform [T12]
  - Gemini in Google Security Operations, AI Protection, Model Armor [T12]
  - Cloud VPC, Cloud VPN, Cloud Interconnect, firewalls, Cloud Armor, Cloud Logging, IAM, Sensitive Data Protection, Confidential Computing, Certificate Manager, Identity-Aware Proxy [T12, T14]
  - Customer trust: transparency reports, third-party audits, digital sovereignty, data residency, compliance resource manager [T12]

**Section 6: Scaling with Google Cloud operations (~10%)**
- 6.1 Controlling cloud costs
  - CapEx to OpEx, and TCO [T13]
  - Cloud financial governance [T13]
  - People, process and technology [T13]
  - Resource hierarchy and its benefits [T13]
  - Consumption controls: quota policies, budget thresholds, Cloud Billing reports, Dynamic Workload Scheduler, Spot VMs [T13]
- 6.2 Operations, reliability and resilience
  - Google Cloud Observability (Monitoring, Logging, Trace, Profiler, Error Reporting) [T14]
  - Operational excellence, reliability and high availability [T14]
  - Resilient design: redundancy, replication, scalable infrastructure, backups [T14]
  - Golden signals: latency, traffic, saturation, errors [T14]
  - DevOps and SRE: SLIs, SLOs and SLAs [T14]

**Total:** 6 sections, 14 objectives and 69 bullets, covered by 310 concepts
(248 core, 62 extra) and 213 terms. The budget is 741 cards, including the
10% uplift.

## Traps

- [T7] **Vertex AI has been renamed.** The Agent Platform overview calls Gemini Enterprise Agent Platform "an evolution of Vertex AI". The name-changes page maps:
  - "Vertex AI Platform" to "Gemini Enterprise Agent Platform";
  - "Vertex AI Studio" to "Agent Studio on Gemini Enterprise Agent Platform";
  - "Vertex AI API" to "Gemini Enterprise Agent Platform API";
  - "Vertex AI Model Garden" to "Gemini Enterprise Agent Platform Model Garden".

  Older prep material says Vertex AI throughout. The Vertex Explainable AI page carries a heading that Vertex AI documentation "is no longer being updated".
- [T5] **Dataproc has been renamed.** "Managed Service for Apache Spark" is the new name for "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- [T3] **Dataplex has been renamed.** "As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog."
- [T9] **GKE Enterprise no longer exists as an edition.** The guide still lists it under hybrid and multicloud. The GKE Enterprise release-notes page says its features "have become part of the standard Google Kubernetes Engine (GKE) offering" and that "GKE is a single offering, without different editions or tiers."
- [T9] **Cloud Functions is now Cloud Run functions.** The docs say "Cloud Run functions (1st gen), formerly known as Cloud Functions (1st gen)". The guide uses "Cloud Run functions".
- [T8] **The migration nicknames conflict.**
  - The exam guide and study guide pair replatform with "move and improve".
  - The Architecture Center's migration guide uses "Replatform: lift and optimize" and "Refactor: move and improve".
  - Its six types are rehost, replatform, refactor, re-architect, rebuild and repurchase. The guide's list is retire, retain, rehost, replatform, refactor and reimagine.

  Cards should teach the guide's pairing and flag the difference.
- [T6] **The data-quality dimensions differ.** The guide and study guide list six: completeness, uniqueness, timeliness, validity, accuracy and consistency. Knowledge Catalog's auto data quality lists seven: freshness, volume, completeness, validity, consistency, accuracy and uniqueness, with no "timeliness". Teach the six and cite the study guide.
- [T12] **The guides give different sources for Google Threat Intelligence.** The exam guide names Google's global visibility, Mandiant and VirusTotal. The study guide names five: frontline intelligence, crowdsourced threat intelligence, OSINT, human-curated threat intelligence and Google insights.
- [T12] **Sovereignty terms differ.** The guide says "digital sovereignty"; the study guide defines "Data sovereignty" (laws of the country where data resides) against "Data residency" (the physical location).
- [T4] **Storage-class minimums.** Nearline 30 days, Coldline 90 days, Archive 365 days; Standard has none and no retrieval fees. The docs also list a zonal "Rapid storage" class, which the guide doesn't mention.
- [T4] **Spanner's name varies.** The study guide says "Cloud Spanner" and the trademark list has "Cloud Spanner™", but the docs and exam guide say "Spanner". Legacy Datastore apps use "Firestore with Datastore compatibility" (`firestore/native/docs/overview#datastore`).
- [T8] **Spot VMs.** They "are the latest version of preemptible VMs"; discounts are "up to 91%" for many machine types; they "don't have a minimum or maximum runtime" and can be preempted "at any time". The study guide calls them "preemptible virtual machines".
- [T13] **Budgets don't cap spending.** "Setting an alerts-only budget doesn't automatically cap Google Cloud … usage or spending." A separate "spend cap budget (preview)" exists for supported services on a project. Quotas limit consumption; budgets alert.
- [T13] **Hierarchy names.** The guide's "organization node" is the docs' "organization resource", which "serves as the root node". The order is organisation, folders, projects, resources, and policies "flow down the hierarchy".
- [T13] **Committed use discounts are study-guide only.** They appear in the study guide's consumption controls but not in the exam guide's list (quotas, budget thresholds, Billing reports, Dynamic Workload Scheduler, Spot VMs).
- [T2] **Hybrid is not multicloud.** Hybrid combines public and private (or on-premises); multicloud uses more than one public provider.
- [T11] **Shared responsibility is not shared fate.** The Architecture Center page contrasts the two. Authentication, authorisation and auditing are the "three As".
- [T14] **SLO is not SLA.** An SLI measures; an SLO is the target; an SLA is the binding contract with penalties. The golden signals are latency, traffic, saturation and errors.
- [T14] **"Operations suite" is the old name.** The guide says "Google Cloud's Observability (e.g., operations suite…)"; the docs call it "Google Cloud Observability".
- [T1] **The framework's name has changed.** The Architecture Center now titles it the "Google Cloud Well-Architected Framework", with six pillars including Sustainability. Your lead called it the "Architecture Framework".
- [All] **The exam was updated in August 2026.** It went live on 12 August 2026 and names items such as agentic AI, AI Hypercomputer, Model Armor and LLM attacks. The previous guide was not fetched, so what changed is not verified. Check that prep material postdates it.
- [All] **The delivery provider changed in 2026.** Delivery moved from Kryterion to Pearson, so older guides describing Kryterion booking are out of date.
- [All] **No time extension for second-language candidates.** "Time extensions are not applicable when English is an individual's second language" (FAQ 9907749).

## Languages

The standard exam is offered in English, Japanese, Spanish, Portuguese and French.
The renewal exam is offered in English and Japanese. Online-proctored support is
"available in English, Japanese, and Spanish". The certification page links
language versions (de, es, es-419, fr, id, it, ja, ko, pt-br, zh-cn, zh-tw).
Only the English exam guide and study guide PDFs (`_english` filenames) were
fetched. Whether translated guide PDFs exist was not checked. The docs pages
fetched are English. Translated docs pages would carry the same site licence
only where their footer shows it, and none was checked.

## Not verified

- **Pass mark:** not published. The FAQ says only pass/fail results are given.
- **Price outside the US:** only "$99 (plus tax where applicable)" was read.
- **"Google Cloud Certified — Cloud Digital Leader":** this wording (your lead) appears on no page fetched. The pages say "Cloud Digital Leader". Whether "Cloud Digital Leader" is a registered mark was not found; it is not on Google's trademark list.
- **Year of the cert-page banner:** the page says only "As of August 12". The year 2026 comes from the exam-guide footer.
- **Multi-factor authentication:** no fetched page defines MFA. The study guide defines 2SV. `gcdl.mfa` cites the exam guide only, and writers need an openly licensed definition.
- **Missing source text:** the fetched sources have no text for "unsecured third-party systems", "physical damage", "risks of not adopting cloud" or "monetising public APIs". These concepts cite the exam guide page (`gcdl.cyber-threats`, `gcdl.risk-of-not-adopting`, `gcdl.api-business-opportunity`). The Apigee overview was searched for "monetiz" with no match.
- **Compliance resource manager:** the guide's "compliance resource manager" is taken to be the "Compliance Reports Manager" page (tier C). That match is an inference.
- **Missing learn pages:** there are no Google "learn" pages for private cloud, open source, APIs, DNS, CapEx versus OpEx, SQL, MFA or DLP. Those URLs returned "Sorry, we can't find that page" and were deleted. The terms are cited to the study guide instead.
- **Spanner and Firestore product docs:** `spanner/docs/overview` and `firestore/docs/overview` redirected to marketing pages. Spanner is cited to the study guide. Firestore uses `firestore/native/docs/overview` (tier B).
- **No Spanner docs page:** no tier-B definition page for Spanner was found; the docs landing page is only a link list.
- **Brand disclaimer:** Google prescribes no disclaimer wording on the pages read. The deck notice follows CONTENT-POLICY.md §4.
- **Sample questions:** these are a Google Form and were not opened, by design.

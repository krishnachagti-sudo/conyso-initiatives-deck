# Research brief: AWS Certified Cloud Practitioner (slug `aws-ccp`, exam CLF-C02)

Slug: `aws-ccp`. Family prefix: `awsccp`. No prerequisite deck. Researched
26 September 2026. Every fact below was read in a source fetched during this
task or in the Site Terms saved earlier today. Saved copies are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/aws-ccp/`:
the Site Terms as `site-terms.txt` (raw HTML in `raw/`), the exam guide and
all other pages as Markdown in `md/` (guide pages `guide-*.md`, the Overview
of Amazon Web Services whitepaper `wp-*.md`, other docs pages in `md/d/`).
`build.py` generates the three JSON files; `fetch.sh` is the fetcher (it
refuses any host other than docs.aws.amazon.com and the robots.txt
`Disallow` paths).

**Only docs.aws.amazon.com was fetched.** aws.amazon.com is in
`src/no-fetch.json` and its Site Terms forbid "any derivative use of the AWS
Site or its contents" and "any use of data mining, robots, or similar data
gathering and extraction tools". Nothing on aws.amazon.com was requested or is
cited (tier D). Many docs pages link out to aws.amazon.com; those links were
not followed.

## Topics

| Topic | Name | Guide task statements (domain weight) |
|---|---|---|
| T1 | Cloud value and economics | 1.1, 1.4 (D1, 24%) |
| T2 | AWS Well-Architected Framework | 1.2 (D1) |
| T3 | Cloud adoption and migration | 1.3 (D1) |
| T4 | Shared responsibility, governance and compliance | 2.1, 2.2 (D2, 30%) |
| T5 | Identity and access management | 2.3 (D2) |
| T6 | Security services and resources | 2.2 skills, 2.4 (D2) |
| T7 | Deployment, access and global infrastructure | 3.1, 3.2 (D3, 34%) |
| T8 | Compute | 3.3 (D3) |
| T9 | Databases | 3.4 (D3) |
| T10 | Networking and content delivery | 3.5 (D3) |
| T11 | Storage | 3.6 (D3) |
| T12 | AI, ML and analytics | 3.7 (D3) |
| T13 | Other in-scope service categories | 3.8 (D3) |
| T14 | Pricing models | 4.1 (D4, 12%) |
| T15 | Billing, budgets and cost management | 4.2 (D4) |
| T16 | Support and technical resources | 4.3 (D4) |

Counts: 4 domains, 19 task statements, 308 concepts (291 core, 17 extra),
235 terms, 773 budgeted cards.

## Terms of use checked first

- **AWS Site Terms** ("Last Updated: June 4, 2025"), saved as
  `site-terms.txt`. The licence paragraph: "AWS grants you a limited license
  to access and make personal use of the AWS Site … This license does not
  include … any derivative use of the AWS Site or its contents; … or any use of
  data mining, robots, or similar data gathering and extraction tools. …
  The materials hosted on docs.aws.amazon.com are licensed as follows:
  documentation (e.g., user guides, developer guides, other publications) is
  licensed under CC-BY-SA-4.0, while any code therein is licensed under
  MIT-0."
- **Reading used here:** docs.aws.amazon.com documentation is **tier B,
  CC BY-SA 4.0**; everything else on the AWS Site is tier D. This differs from
  CONTENT-POLICY.md §3, which lists "AWS docs" under tier C, and from
  `certification-market/rules-risks.md`, whose quotation of the same Site
  Terms (same "Last Updated" date) elides the docs sentence. See Not verified.
- **robots.txt of docs.aws.amazon.com** (saved `raw/robots-docs.txt`):
  `User-agent: *`, `Crawl-delay: 5`, and `Disallow` lines for old API
  versions plus `/forms/`, `/en_pv/`, `/search/`, `/ask-docs/`,
  `/help-panel/`, `/awsaccountbilling/latest/about/` and others. No fetched
  path is disallowed (billing pages used are under `/aboutv2/`). Every request
  waited 5 seconds and used the User-Agent "Mozilla/5.0 (compatible;
  research)".
- **Per-document notices that pull the other way.** Some whitepapers carry
  their own Notices page: How AWS Pricing Works "© 2023 Amazon Web Services,
  Inc. or its affiliates. All rights reserved."; AWS CAF overview "© 2021 …
  All rights reserved."; Well-Architected Framework "Copyright © 2024 Amazon
  Web Services, Inc. or its affiliates." The Overview of Amazon Web Services
  whitepaper has no Notices page in its table of contents. These are recorded
  in each source's `licence` field.
- **The exam guide is on docs.aws.amazon.com**, at
  `https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html`
  (canonical link in the saved HTML), with sub-pages for each domain and the
  service lists. It carries no copyright line of its own (grep of the saved
  HTML found none), so the Site Terms statement applies. It is used as the
  outline, tier B.

## Exam facts

All from the exam guide landing page (`guide-cloud-practitioner-02.md`),
https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html

- **Owner and name:** "AWS Certified Cloud Practitioner (CLF-C02)". The exam
  "is intended for individuals who can effectively demonstrate overall
  knowledge of the AWS Cloud, independent of a specific job role."
- **Target candidate:** "up to 6 months of exposure to AWS Cloud design,
  implementation, and/or operations."
- **Out-of-scope job tasks:** "Coding", "Designing cloud architecture",
  "Troubleshooting", "Implementation", "Load and performance testing".
- **Question types:** "Multiple choice: Has one correct response and three
  incorrect responses (distractors)"; "Multiple response: Has two or more
  correct responses out of five or more response options".
- **Guessing:** "Unanswered questions are scored as incorrect; there is no
  penalty for guessing."
- **Question count:** "The exam includes 50 questions that affect your score."
  and "The exam includes 15 unscored questions that do not affect your score."
  (65 in all is arithmetic, not a quoted figure.)
- **Scoring:** "reported as a scaled score of 100–1,000. The minimum passing
  score is 700." "The exam uses a compensatory scoring model, which means that
  you do not need to achieve a passing score in each section."
- **Weights:** "Content Domain 1: Cloud Concepts (24% of scored content)";
  "Content Domain 2: Security and Compliance (30% …)"; "Content Domain 3:
  Cloud Technology and Services (34% …)"; "Content Domain 4: Billing,
  Pricing, and Support (12% …)".
- **Not on docs.aws.amazon.com:** exam duration, price, delivery method,
  retake policy, validity period, exam languages and the version's launch or
  retirement dates. These live on aws.amazon.com (tier D) and were not
  fetched. See Not verified.
- **Changes often:** the in-scope and out-of-scope service lists ("This list
  is non-exhaustive and is subject to change") and anything about AWS Support
  plans (see Traps). The scoring facts are stable across the guide.

## Naming

- **Owner's trademark terms** (Site Terms, "TRADEMARKS"): "“Amazon Web
  Services” and all related marks, including logos, graphic designs, and
  service names, are trademarks or trade dress of AWS in the U.S. and other
  countries. AWS's trademarks and trade dress may not be used in connection
  with any product or service that is not AWS's, in any manner that is likely
  to cause confusion among customers, or in any manner that disparages or
  discredits AWS."
- **AWS Trademark Guidelines** are on aws.amazon.com and were not fetched in
  this task. CONTENT-POLICY.md §4 already records them (from
  `certification-market/rules-risks.md`): fair use "in plain text only (no
  logos)", "to make true factual statements", in the form "[Your Brand]
  [relational phrase] [AWS Mark]", marks allowed in a URL path but never a
  domain.
- **How §4 applies:** AWS is not in §5, so the deck may name the exam.
  Title pattern: "[Site name] deck for the AWS Certified Cloud Practitioner
  (CLF-C02) exam". Never "AWS Cloud Practitioner Flashcards", never
  "official". Path such as `/decks/aws/cloud-practitioner/` is acceptable.
  No AWS logos or service icons (the whitepaper pages embed category icons;
  do not reuse them). AWS prescribes no disclaimer wording on the pages read,
  so the §4 "Everyone else" notice is used, plus the CC BY-SA attribution the
  licence needs.

**Deck notice text:**

> AWS Certified Cloud Practitioner is a certification of Amazon Web Services,
> Inc. or its affiliates ("AWS"). Amazon Web Services, AWS and the names of
> AWS services are trademarks of AWS. This deck is independent and is not
> affiliated with, sponsored, endorsed or approved by AWS. All other
> trademarks are the property of their respective owners. Portions of this
> deck are adapted from AWS documentation at docs.aws.amazon.com, licensed
> under the Creative Commons Attribution-ShareAlike 4.0 International licence
> (CC BY-SA 4.0); this deck is released under the same licence.

(The entity name "Amazon Web Services, Inc. or its affiliates" is taken from
the whitepaper Notices pages; the Site Terms say only "AWS".)

## Outline

Owner's order, from `guide-cloud-practitioner-02-domain1.md` to `-domain4.md`.
Each task statement's knowledge and skills are listed in the guide; the tags
show where they are taught. Concept ids are in `aws-ccp-concepts.json`.

### Domain 1: Cloud Concepts (24%)

- **1.1 Define the benefits of the AWS Cloud.** Value proposition [T1];
  benefits of global infrastructure (speed of deployment, global reach) [T1]
  [T7]; high availability, elasticity, agility [T1] [T8].
- **1.2 Identify design principles of the AWS Cloud.** Well-Architected
  Framework; the six pillars and their differences [T2].
- **1.3 Understand the benefits of and strategies for migration to the AWS
  Cloud.** Cloud adoption strategies; migration resources; AWS CAF components
  (reduced business risk, ESG performance, increased revenue, operational
  efficiency); migration strategies such as database replication [T3] [T9].
- **1.4 Understand concepts of cloud economics.** Fixed compared with variable
  costs; on-premises costs; licensing (BYOL compared with included licences);
  rightsizing; benefits of automation; economies of scale [T1].

### Domain 2: Security and Compliance (30%)

- **2.1 Understand the AWS shared responsibility model.** Components;
  customer, AWS and shared responsibilities; how they shift by service (Amazon
  RDS, AWS Lambda, Amazon EC2) [T4].
- **2.2 Understand AWS Cloud security, governance, and compliance
  concepts.** Compliance information (AWS Artifact); compliance by geography
  or industry; securing resources (Amazon Inspector, AWS Security Hub, Amazon
  GuardDuty, AWS Shield) [T6]; encryption in transit and at rest; governance
  services (CloudWatch, CloudTrail, Config, access reports); requirements
  varying by service [T4].
- **2.3 Identify AWS access management capabilities.** IAM; protecting the
  root user; least privilege; IAM Identity Center; access keys, password
  policies, credential storage (Secrets Manager, Systems Manager); MFA,
  Identity Center, cross-account roles; groups, users, custom and managed
  policies; root-only tasks; federation [T5].
- **2.4 Identify components and resources for security.** AWS WAF, Firewall
  Manager, Shield, GuardDuty; third-party products in AWS Marketplace; AWS
  Knowledge Center, Security Center, Security Blog; Trusted Advisor [T6].

### Domain 3: Cloud Technology and Services (34%)

- **3.1 Define methods of deploying and operating in the AWS Cloud.** APIs,
  SDKs, CLI, Management Console, infrastructure as code; one-time compared
  with repeatable processes; cloud, hybrid and on-premises deployment models
  [T7].
- **3.2 Define the AWS global infrastructure.** Regions, Availability Zones,
  edge locations; high availability with multiple AZs; AZs share no single
  points of failure; when to use multiple Regions [T7].
- **3.3 Identify AWS compute services.** EC2 instance types; ECS and EKS;
  Fargate and Lambda; auto scaling for elasticity; load balancers [T8].
- **3.4 Identify AWS database services.** EC2-hosted compared with managed
  databases; RDS, Aurora; DynamoDB; ElastiCache; AWS DMS and AWS SCT [T9].
- **3.5 Identify AWS network services.** VPC components (subnets, gateways);
  network ACLs, security groups, Amazon Inspector; Route 53; AWS VPN and
  Direct Connect [T10].
- **3.6 Identify AWS storage services.** Object storage; S3 storage classes;
  EBS and instance store; EFS and FSx; Storage Gateway; lifecycle policies;
  AWS Backup [T11].
- **3.7 Identify AWS AI/ML services and analytics services.** SageMaker AI,
  Lex; Athena, Kinesis, Glue, Quick Sight [T12].
- **3.8 Identify services from other in-scope AWS service categories.**
  EventBridge, SNS, SQS; Amazon Connect, SES; AWS Support [T16]; CodeBuild,
  CodePipeline, X-Ray; AppStream 2.0, WorkSpaces, WorkSpaces Secure Browser;
  Amplify; IoT Core [T13].

### Domain 4: Billing, Pricing, and Support (12%)

- **4.1 Compare AWS pricing models.** On-Demand, Reserved, Spot, Savings
  Plans, Dedicated Hosts, Dedicated Instances, Capacity Reservations; RI
  flexibility; RI behaviour in AWS Organizations; inbound and outbound data
  transfer costs; storage tier pricing [T14].
- **4.2 Understand resources for billing, budget, and cost management.**
  AWS Budgets, Cost Explorer, Pricing Calculator; Organizations consolidated
  billing; cost allocation tags and the Cost and Usage Report [T15].
- **4.3 Identify AWS technical resources and AWS Support options.**
  Whitepapers, blogs, documentation; Prescriptive Guidance, Knowledge Center,
  re:Post; Basic Support, Business Support+, Enterprise Support, Unified
  Operations; Trusted Advisor, Health Dashboard, Health API; Trust and Safety
  team; AWS Partners, ISVs, system integrators, partner benefits; AWS
  Marketplace; Professional Services and solutions architects [T16].

### Service lists

The guide's "In-Scope AWS Services" page (`guide-clf-02-in-scope-services.md`)
lists services in 19 categories. Every listed service has a concept, taught
in the topic its task statement points to (for example, Snow Family and
DataSync are *not* in the list and are `extra`). Service definitions cite the
matching anchor of the Overview of Amazon Web Services whitepaper, or the
service's own user guide where one was fetched. The "Out-of-Scope AWS
Services" page is a source for Traps only. The "Technologies and Concepts"
page adds nothing beyond the task statements except AWS Professional Services
and AWS solutions architects [T16].

## Traps

- [T16] **Support plans changed.** The guide lists "Basic Support, AWS
  Business Support+, AWS Enterprise Support, AWS Unified Operations". The
  AWS Support user guide says Developer Support and Business Support "will be
  discontinued January 1, 2027" and "On January 1, 2027, AWS will discontinue
  Enterprise On-Ramp". Older prep material teaches Developer, Business and
  Enterprise On-Ramp as current. Prices on that page ("$29/month minimum",
  "$5,000 minimum (reduced from $15,000)") change; teach them only if the
  deck owner wants numbers, dated.
- [T16] **Trusted Advisor on Basic Support:** "all checks in the Service
  Limits category and selected checks in the Security and Fault tolerance
  categories" — not every check.
- [T12] **Quick Sight naming.** The guide writes "Amazon Quick Sight"; the
  Overview whitepaper heading is now "Quick" while its text still says
  "QuickSight". Use the guide's spelling and note the others.
- [T13] **Renamed services.** The guide's names differ from current docs
  titles: Amazon AppStream 2.0 (overview: "Amazon WorkSpaces Applications");
  Amazon WorkSpaces Secure Browser (overview tab: "Amazon Workspaces Web");
  Amazon Connect (overview: "Connect Customer").
- [T3] AWS Application Migration Service is titled "AWS Transform MGN" in the
  overview whitepaper.
- [T6] AWS Security Hub is now documented as "AWS Security Hub CSPM".
- [T12] Amazon SageMaker is "Amazon SageMaker AI" in both the guide and the
  overview; older material drops "AI".
- [T11] **Amazon FSx is in scope; "Amazon FSx for Lustre" is on the
  out-of-scope list.**
- [T7] AWS Wavelength is out of scope, although Wavelength Zones appear on the
  EC2 Regions and Zones page next to Local Zones and Outposts.
- [T13] AWS CodeDeploy, AWS CloudShell and AWS CodeArtifact are out of scope;
  CodeBuild, CodePipeline and X-Ray are in.
- [T6] AWS Network Firewall is out of scope; AWS WAF and Firewall Manager are
  in.
- [T16] AWS Managed Services (AMS) is out of scope; AWS Professional Services
  is in the Technologies and Concepts list.
- [T3] AWS Snow Family and AWS DataSync are not on the in-scope list; the
  overview whitepaper still describes them.
- [T10] Security groups compared with network ACLs: the VPC user guide has a
  comparison table (`#VPC_Security_Comparison`). A favourite confusion.
- [T14] Capacity Reservations compared with Reserved Instances and Savings
  Plans: the EC2 page has its own section
  (`#capacity-reservations-differences`).
- [T14] Dedicated Hosts compared with Dedicated Instances: the purchasing
  options page says Dedicated Hosts let you "bring your existing per-socket,
  per-core, or per-VM software licenses"; Dedicated Instances "run on
  single-tenant hardware".
- [T14] RIs and Savings Plans in Organizations: "When you use billing
  transfer, Reserved Instances and Savings Plans apply only to the AWS
  Organizations where they're purchased … You can't purchase or share
  Reserved Instances and Savings Plans across multiple AWS Organizations."
- [T14] **Data transfer.** "In most cases, there is no charge for inbound data
  transfer or for data transfer between other AWS services within the same
  Region." The source is a whitepaper marked "for historical reference only";
  keep the hedge "in most cases".
- [T15] Cost allocation tags: "You must activate both types of tags
  separately before they can appear in Cost Explorer or on a cost allocation
  report."
- [T4] Shared responsibility for managed services differs by architecture:
  the Security Pillar gives separate patching splits for single-tenant
  services (ElastiCache, RDS, OpenSearch Service) and multi-tenant ones
  (ElastiCache Serverless, DynamoDB, S3).
- [T4] **Historical sources.** "Amazon Web Services: Risk and Compliance" and
  "How AWS Pricing Works" carry the banner "This whitepaper is for historical
  reference only." Prefer the Well-Architected Security Pillar for the shared
  responsibility model; use the pricing whitepaper only where no current page
  was found.
- [T1] Scoring: multiple-response questions exist, and unanswered questions
  score as wrong with "no penalty for guessing". Writers must not build cards
  from exam content; the guide itself is the ceiling.

## Languages

The exam guide page offers language versions under `de_de`, `es_es`,
`fr_fr`, `id_id`, `it_it`, `ja_jp`, `ko_kr`, `pt_br`, `zh_cn` and `zh_tw`
(links in the saved HTML). They are hosted on docs.aws.amazon.com, so the same
CC BY-SA 4.0 statement would cover them; they were not fetched. The languages
in which the exam itself is delivered are stated only on aws.amazon.com and
are not verified.

## Not verified

- **A person must confirm the Site Terms reading and the share-alike
  obligation before release.** This brief treats docs.aws.amazon.com
  documentation as tier B, CC BY-SA 4.0, on the strength of one sentence in
  the Site Terms. Three things need a human decision: (1) CONTENT-POLICY.md §3
  still lists AWS docs as tier C and `rules-risks.md` quotes the same Site
  Terms without that sentence; the policy should be updated or this brief
  downgraded. (2) Several whitepapers carry their own "All rights reserved"
  notices (How AWS Pricing Works, AWS CAF overview); whether the site-wide
  CC BY-SA statement overrides them is a legal question. If it does not, the
  concepts citing those two whitepapers fall back to tier C (facts only, own
  words). (3) Share-alike: adapted cards must be released under CC BY-SA 4.0
  with attribution and a note of changes; the deck licence (CONTENT-POLICY §1)
  already is, but the attribution form was not checked with a lawyer.
- **Exam duration, price, retake rules, validity, exam languages, launch
  date of CLF-C02 and any retirement date.** Tried: the guide pages and the
  exam guides index (`/aws-certification/latest/examguides/index.md`
  returned 404). The facts are on aws.amazon.com, which is tier D and was not
  fetched.
- **AWS Trademark Guidelines** were not re-read in this task (aws.amazon.com).
  The Naming section relies on CONTENT-POLICY.md §4 and the Site Terms.
- **Trust and Safety team** [T16]: no docs page describing it could be
  fetched. The Security Pillar abuse page and the Security Incident Response
  page both redirected to their guide's index. The concept cites the exam
  guide only.
- **AWS Knowledge Center, Security Center, Security Blog, re:Post,
  Prescriptive Guidance** as resources, and **ISV/SI roles** and **partner
  benefits**: sourced to the exam guide wording only; no descriptive docs page
  was fetched (Knowledge Center and re:Post are on repost.aws, not checked).
- **Service Quotas** has no description in any fetched page; cited to the
  in-scope list.
- **Elasticity** and "**Availability Zones do not share single points of
  failure**" are stated in the guide but in no fetched docs page; cited to
  the guide.
- **AWS Lambda shared responsibility:** the Lambda security page was not
  retrieved (`lambda-security.md` 404; the `.html` saved but not parsed).
  Concept cites the guide.
- **Root user tasks:** the IAM page lists 17 bullets, some nested; the set
  size in the concept file (17) must be checked when writing.
- The leads in the prompt were correct: the Site Terms sentence is present,
  the guide is on docs.aws.amazon.com, and robots.txt permits the paths
  used. One inherited lead was wrong: CONTENT-POLICY.md's tier C
  classification of AWS docs does not reflect the current Site Terms text.

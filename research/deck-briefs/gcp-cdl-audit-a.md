# gcp-cdl audit A: topics 01–04

**Scope.** I checked 229 cards in decks/gcp-cdl/notes/01-transformation.json to 04-data-products.json (58 + 62 + 47 + 62), including 59 scenario cards. None are pool cards. I checked each card against its `evidence` first, then against the cached sources for any claim beyond it.

**Sources.** Tier B means the docs.cloud.google.com pages in research/sources/gcp-cdl/, which carry the CC BY 4.0 footer (CONTENT-POLICY.md §3, tier B). The study guide and exam guide are tier C. I read them in the research copy split by PDF page (study-paged.txt and eg-paged.txt, named in gcp-cdl.md). Every `#page=` on the cards matches the page that holds the fact: study guide pp. 1–5 and 13, exam guide pp. 1–2. The two tier-C marketing pages that no cache holds (learn/paas-vs-iaas-vs-saas and learn/what-is-data-governance) I fetched once each to check facts, with a generic User-Agent and no personal details. I did not add them to the repository. No card copies wording from a tier-C source.

**Areas the assignment named.**
- **Digital transformation.** The definition, the four drivers, the ten benefits and the six strengths all match study guide pp. 1–2. The exam-guide comparisons in the cloze explanations match exam guide p. 1, for example "strategic value and focus", "enhanced security" and "AI-ready data platform".
- **Cloud models.** On-premises, private and public cloud match study guide p. 1. Hybrid and multicloud match the Architecture Center's definitions, which agree with the study guide. The IaaS, PaaS and SaaS definitions and examples match p. 2, including Gemini Enterprise Agent Platform as the study guide's PaaS example (marked volatile). The responsibility and pros-and-cons cards match Google's comparison page.
- **Data value.** The types of data, the ways to store data, the supply chain and data governance match study guide pp. 3 and 5. The value of data and openness match exam guide objective 2.1.
- **Data products.**
  - The storage classes, minimum durations, retrieval fees, Autoclass and Rapid storage match the storage-classes and Autoclass pages.
  - Cloud SQL, AlloyDB, Bigtable, Firestore, BigQuery and Database Migration Service match their overviews. "No new writes" during a one-time migration and "in sync gives you minimal downtime" are both in the DMS overview.
  - The Knowledge Catalog rename (from Dataplex Universal Catalog, 10 April 2026) is marked volatile.
  - Product-name cards that can change (Spanner, Firestore, BigQuery, DMS, Datastream, Knowledge Catalog, Rapid storage, the service-model examples) already carry `volatile`.
  - **Looker** has no card in topics 1–4. It appears only in 05-analytics-streaming and 09-infrastructure-apps, which are outside this part.
- **choicesExplained letters.** In all 59 scenario cards, every letter's explanation describes that letter's choice, and every wrong letter is covered. In 19 cards the explanations are out of order (for example C, B, D). Each gets a minor patch that sorts them into letter order without changing any wording.

## Findings

gcdl.transformation.dt-apply, .strengths-classify, .waf-apply; gcdl.models.hybrid-apply, .static-ip-apply, .bandwidth-apply, .zone-apply, .edge-apply, .iaas-apply; gcdl.data-value.first-party-apply, .third-party-apply, .unstructured-apply, .knowledge-catalog-apply; gcdl.data-products.class-apply-coldline, .class-apply-archive, .cloud-sql-apply, .alloydb-apply, .bigtable-apply, .bigquery-apply | minor | choicesExplained is correct letter by letter but out of order, so a reader can't scan it against A–D | —
gcdl.data-products.firestore-apply | unsupported | The back uses the study guide's description ("flexible, scalable NoSQL document database for mobile, web and server development"), and the explanation credits the study guide, but the card cites only the Firestore overview | Firestore overview: "enterprise-grade, fully-managed document database", "How do I set up an enterprise-grade serverless document database?", "Firestore is a highly available NoSQL database", "auto scales to match your load"
gcdl.data-value.governance-risks | ambiguous | The front says "initiatives" in general; the page lists these as risks to AI initiatives | learn/what-is-data-governance, "Why modern data governance is critical for AI": "Without robust governance, AI initiatives face several risks"
gcdl.data-products.bigtable | unclear | "What is Bigtable?" is answered with a table size and never says it is a database | Bigtable overview: "Bigtable stores data in massively scalable tables, each of which is a sorted key-value map"
gcdl.data-products.sql-open-standard | unclear | "A language covered in this topic" depends on where the card sits in the deck, and review shuffles cards | study guide p. 2: open standards "(for example, TCP/IP and SQL)"
gcdl.models.iaas-responsibility | minor | "The operating system and everything above it" puts virtual machines above the operating system; the source simply lists the items | learn/paas-vs-iaas-vs-saas, "IaaS": customers "are responsible for the operating system, middleware, virtual machines, and any apps or data"
gcdl.data-value.data-silo | minor | The explanation says silos block "a unified data store across the organisation"; the page says a unified data lakehouse, as a risk to AI initiatives | learn/what-is-data-governance: "Information trapped in isolated systems prevents the creation of a unified data lakehouse"
gcdl.transformation.cloud-resources | minor | "Other computing resources" is offered as one of two answers, but it names no kind of resource | study guide p. 1: "computing power, database storage, apps, and other IT resources"
gcdl.data-products.class-apply-standard | minor | "And with no retrieval fees" hints at the answer, and Rapid storage also has no retrieval fees | storage-classes table: "Rapid storage RAPID None None … Standard storage STANDARD None None"

No finding is wrong. Nothing needs more research.

# az-305 audit B: topics 05–09

Scope: decks/az-305/notes/05-relational-data.json to 09-high-availability.json. That is 351 cards (67 + 113 + 43 + 74 + 54), and none of them are pool cards. I checked every card against its `evidence` first. Where a claim went beyond the evidence, I grepped research/sources/az-305/. The sources I used were: SQL IaaS vs PaaS, the vCore, DTU, Hyperscale and serverless pages, elastic pools, elastic scale, read scale-out, TDE, dynamic data masking, storage redundancy, access tiers, object replication, the Data Factory integration runtime, pipeline orchestration, the Cosmos DB overview, active geo-replication, SQL high availability, availability sets and VM availability.

Tier B text comes from the MicrosoftDocs GitHub repositories (CONTENT-POLICY.md §3, tier B). The cards without evidence cite tier C learn.microsoft.com pages, and their manifest path is null. Those pages are the Cosmos DB overview, partitioning, consistency levels, global distribution and backup pages, plus PostgreSQL overview, Well-Architected reliability metrics and Azure Managed Redis. I fetched each one once to check facts, with a generic User-Agent and no personal details. I did not save them to the repository. Every one of their claims is supported, including:
- the three continuous backup tiers "7-day, 30-day, and 35-day";
- periodic backup: "maximum retention period extends to a month", "minimum backup interval can be one hour";
- "you can't switch it back to periodic mode";
- "Each logical partition can store up to 20 GB";
- "up to a three-level hierarchy";
- "Session consistency is the most widely used consistency level";
- multiple write regions "can't use strong consistency";
- Postgres "remains stopped for seven days unless you restart it sooner";
- "Microsoft publishes RTO and RPO guarantees only for some products, like Azure SQL Database";
- Redis "Disabling high availability lowers the price but results in data loss and downtime. Only disable high availability for dev/test scenarios."

Where the training units and the docs differ, I followed the docs. No card in these topics gives a fixed number of zones per region. The ZRS and GZRS cards say "three or more" zones, as the docs do, and the zones overview says "a region might provide four availability zones". Only one card carried a training-unit number the docs no longer give: "three" LRS copies.

id | severity | problem | evidence (source words, with page)
---|---|---|---
az305.semi-structured-unstructured-data.what-is-grs | unsupported | The example sends the GRS copy to "a branch office in another country". The docs say only that the secondary is far away, and region pairs almost always sit in the same geography. The example teaches the opposite of the residency point made later in the deck. | "copies your data asynchronously to a secondary region that is hundreds of miles away from the primary region" (storage redundancy, "Geo-redundant storage"); "almost all regions reside within the same geography as their pair" (regions-paired, "Paired regions")
az305.semi-structured-unstructured-data.what-is-lrs | unsupported | The example says LRS keeps "three photocopies". The current page gives no number of LRS copies. The figure comes from older training material, and the docs win. | "Locally redundant storage (LRS) replicates the data within your storage accounts to a single physical datacenter in the primary region of your choice." (storage redundancy, "Locally redundant storage"; no copy count anywhere on the page)
az305.semi-structured-unstructured-data.what-is-gzrs | minor | The example says the distant city holds "one more copy". The secondary region keeps LRS copies, which is more than one. | "Within the secondary region, data is always replicated synchronously by using LRS." (storage redundancy, "Redundancy in a secondary region")
az305.relational-data.what-is-general-purpose | unclear | The explanation says "'Default' marks it as the baseline vCore tier; Business Critical and Hyperscale are the alternatives on the same page". It refers to a page the learner cannot see and does not say when you would leave General Purpose. | "applications that require low-latency responses from the underlying SSD storage (1-2 ms in average)" (vCore, "Business Critical"); "Compute and storage resources in Hyperscale substantially exceed the resources available in the General Purpose and Business Critical tiers" (vCore, "Hyperscale")
az305.relational-data.choose-managed-instance | unclear | The line on option C only praises Managed Instance and does not say why single databases fit worse. The reason is instance-level compatibility. | "near 100% compatibility with the latest Enterprise Edition SQL Server Database Engine" (SQL Managed Instance overview, "Overview")
az305.relational-data.sixty-terabyte-database | minor | The explanation of the wrong options presents "32 GB to 4 TB" as the page's size range for single databases. The source gives it only "for example". | "For example, you can get 1 to 128 vCores, or 32 GB to 4 TB. The Hyperscale service tier enables you to scale up to 128 TB" (SQL Database overview, "Scalable performance and pools")
az305.high-availability.az-guidance | unclear | The front asks what "the guidance" recommends without saying which guidance. Reviewed alone, the card has two possible readings. | "Production workloads should be configured to use multiple availability zones if the region they are in supports availability zones." (availability zones overview, "Availability zone architectural guidance")

## Patches

There are 7 findings, and each one has a patch in az-305-fixes-b.jsonl (7 lines). `node build/apply-fixes.mjs az-305 research/deck-briefs/az-305-fixes-b.jsonl --dry` reports "7 fix(es) applied" and no card that breaks a rule.

I did not log some things I considered:
- The explanation on az305.data-integration.self-hosted-byo-driver says "one of them MySQL" instead of naming both stores. The other store is SAP HANA, and the abbreviation checker would reject it, so the current wording is the better choice.
- The explanation on az305.relational-data.tde-versus-masking takes its TDE half from the TDE page, not the masking page it cites. The claim is true and is covered by az305.relational-data.what-is-tde.

No finding needs more research.

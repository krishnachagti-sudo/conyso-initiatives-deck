# dp-900 audit A: topics 01–07

**Scope.** I checked 356 cards in decks/dp-900/notes/01-data-formats.json to 07-open-source-databases.json (61 + 41 + 53 + 28 + 92 + 44 + 37). None of them are pool cards. I checked each card against its `evidence` first, then against the source text for any claim the evidence does not cover.

**Sources.** Tier B is the MicrosoftDocs GitHub text in research/sources/dp-900/ (CONTENT-POLICY.md §3, tier B). The Learn training units, the Power BI star-schema guidance and the MySQL and PostgreSQL overviews are tier C and have no cached text (their manifest path is null). I fetched the 16 cited tier C pages once each to check facts, plus the DMA overview, using a generic User-Agent and no personal details. I did not save them to the repository. No card cites Databricks' own documentation.

**Main problem: the option letters are scrambled.** Nineteen scenario cards in topics 1–4 explain the wrong options under the wrong letters. Most of them call the right answer's letter "wrong". The cause is build/spread-answers.mjs. `swapLabels` only relabels a letter that is followed by `) : , ; .`, by "and/or X", or by the end of the text. So when the right answer was moved, labels such as "B is wrong", "A concerns" and "C builds" kept their old letters. Topics 5–7 use the "A:" style and are unaffected. Each broken card is patched to match its current choices. The tool itself is out of scope for this audit.

**AZ-900 overlap.** Five topic-2 fact cards teach AZ-900 terms again: Blob Storage, Files, Table Storage, Queue Storage and the storage account. These are topic 0 in dp-900-terms.json and are taught in az-900's 07-storage. I have deleted all five. Their concepts are still covered by blob-containers, tables-fast and the choose-* cards. Cards that only *use* IaaS, PaaS, lift-and-shift or pay-as-you-go are fine. None of them re-introduces a topic-0 term.

**Checked with care and found sound:**
- The three data categories, the file formats (CSV, TSV, fixed-width, JSON, XML, BLOB, Parquet, Avro and Delta Lake), OLTP and ACID, OLAP and ELT, and the four data roles.
- The normalisation rules and the SQL statement groups: DDL CREATE/ALTER/DROP/RENAME, DCL GRANT/DENY/REVOKE, and DML SELECT/INSERT/UPDATE/DELETE.
- The Azure SQL comparison (IaaS/PaaS; 99.99/99.99/99.995%) and the MySQL/PostgreSQL facts, including backup retention of 1–35 days with a 7-day default.
- Where the training lags the docs, the cards follow the docs: Hyperscale at 128 TB, and paid high availability (HA) on MySQL flexible server. The training's line "high availability at no additional cost" is not repeated.

## Findings

dp900.data-formats.classify-payroll | wrong | choicesExplained calls B and C wrong, but C (Structured) is the answer and A is never explained | choices: A) Unstructured B) Semi-structured C) Structured
dp900.data-formats.classify-listings | wrong | "B is wrong", but B (Semi-structured) is the answer; C is never explained | choices A) Structured B) Semi-structured C) Unstructured
dp900.data-formats.classify-calls | wrong | "C is wrong because there is no schema of rows and columns", but C (Unstructured) is the answer; that reason applies to B (Structured) | choices A) Semi-structured B) Structured C) Unstructured
dp900.data-formats.classify-scans | wrong | "C is wrong", but C (Unstructured) is the answer; A is never explained | same choices as classify-calls
dp900.data-formats.choose-csv | wrong | "A and B are optimised binary formats", but B is CSV (the answer); Parquet is D | choices A) Avro B) CSV C) JSON D) Parquet
dp900.data-formats.choose-avro | wrong | "A and C are human-readable text", but C is Avro (the answer); CSV is B | choices A) XML B) CSV C) Avro D) Parquet
dp900.data-formats.choose-xml | wrong | "A uses braces and brackets, not tags", but A is XML (the answer); JSON is D | choices A) XML B) CSV C) Parquet D) JSON
dp900.data-formats.xml | unsupported | explanation "older than most formats here" is not in the training (CSV is older) | Learn "Explore file storage": "XML is a human-readable data format that was popular in the 1990s and 2000s. It's largely been superseded by the less verbose JSON format"
dp900.data-stores.classify-column-family | wrong | "B stores key and value pairs", but B is the answer (column-family); key-value is D | choices A) Document B) Column-family C) Graph D) Key-value
dp900.data-stores.choose-blob | wrong | "A is key-value storage", but A is Blob Storage (the answer); Table Storage is C | choices A) Blob B) Files C) Table D) Queue
dp900.data-stores.choose-files | wrong | "B stores binary objects", but B is Azure Files (the answer); Blob is A | same choices
dp900.data-stores.choose-tables | wrong | "A is a network file share", but A is Table Storage (the answer); Files is B | choices A) Table B) Files C) Blob D) Queue
dp900.data-stores.choose-relational | wrong | "D is a nonrelational type", but D is Azure Database for PostgreSQL (the answer); the graph database is C | choices A) Blob B) Table C) A graph database D) Azure Database for PostgreSQL
dp900.data-stores.azure-blobs | minor | re-teaches the AZ-900 term Azure Blob Storage (terms topic 0); deleted | az-900 07-storage "What is Azure Blob Storage?"
dp900.data-stores.azure-files | minor | re-teaches the AZ-900 term Azure Files; deleted | az-900 07-storage "What is Azure Files?"
dp900.data-stores.azure-tables | minor | re-teaches the AZ-900 term Azure Table Storage; deleted | az-900 07-storage "What is Azure Table Storage?"
dp900.data-stores.azure-queues | minor | re-teaches Azure Queue Storage (az-900), and queues are not in the DP-900 training's Azure Storage list; deleted | Learn "Identify data services": "Blob containers … File shares … Tables"
dp900.data-stores.storage-account-access | minor | re-teaches the AZ-900 term storage account; deleted | az-900 07-storage "What is an Azure storage account?"
dp900.workloads.acid-durability | wrong | "B all-or-nothing units", but B is Durability (the answer); Atomicity is D | choices A) Isolation B) Durability C) Consistency D) Atomicity
dp900.workloads.choose-elt | wrong | "A transforms data before loading it", but A is ELT (the answer); ETL is D | choices A) ELT B) OLAP C) CRUD D) ETL
dp900.workloads.snapshots | unclear | the front "In time, what can analytics be based on?" reads oddly | Learn "Explore analytical data processing": "Analytics can be based on a snapshot of the data at a given point in time, or a series of snapshots."
dp900.data-roles.task-restore | wrong | "C builds and runs pipelines", but C is the database administrator (the answer); the data engineer is D | choices A) Data analyst B) AI engineer C) Database administrator D) Data engineer
dp900.data-roles.task-pipeline | wrong | "B analyses the data", but B is the data engineer (the answer); the data analyst is C | choices A) DBA B) Data engineer C) Data analyst D) AI engineer
dp900.data-roles.task-report | wrong | "C builds features powered by AI", but C is the data analyst (the answer); the AI engineer is D | choices A) Data engineer B) DBA C) Data analyst D) AI engineer
dp900.data-roles.task-chat | wrong | "A manages databases", but A is the AI engineer (the answer); the DBA is C | choices A) AI engineer B) Data analyst C) DBA D) Data engineer
dp900.data-roles.service-open-source | wrong | "B may report on the data", but B is the DBA (the answer); the data analyst is A | choices A) Data analyst B) DBA C) AI engineer D) Data engineer
dp900.azure-sql.dma | ambiguous | teaches Data Migration Assistant as a current tool; it is retired | learn.microsoft.com/sql/dma/dma-overview: "Data Migration Assistant (DMA) is retired from July 16, 2025."
dp900.azure-sql.sql-vm | unclear | the example "renting a furnished flat and installing your own furniture too" contradicts itself | —
dp900.azure-sql.hyperscale-size | minor | the training says "up to 100 TB" and the card says 128 TB without saying why | sql-docs service-tier-hyperscale.md: "up to 128 TB of database or 100 TB elastic pool size"; Learn "Describe Azure SQL services": "very large databases—up to 100 TB"
dp900.open-source-databases.pg-scenario | unsupported | choicesExplained says geometric data is "not a MySQL" feature; the training says nothing about MySQL here | Learn "Describe Azure services for open-source databases": "Another key feature is the ability to store and manipulate geometric data, such as lines, circles, and polygons." (PostgreSQL paragraph only)

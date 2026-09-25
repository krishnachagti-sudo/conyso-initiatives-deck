# Deck research brief (given to every research agent)

You are researching ONE certification so that a flashcard deck can be written for it
to the standard in CARD-STANDARD.md and the rules in CONTENT-POLICY.md (read both
first, in /home/user/conyso-initiatives-deck). You do not write cards. You produce
the brief that card writers will work from, so it must be complete and correct.

## Privacy (absolute)
Never put any email address, name or other personal detail in a request: not in a
User-Agent, header, query string or body. If a site asks for contact details in the
User-Agent, use a generic one such as "Mozilla/5.0 (compatible; research)" or skip
that site.

## The one rule
Never write a fact you have not read in a source you fetched during this task. No
figures, dates, question counts, pass marks, URLs, section numbers or licence terms
from memory. If you cannot verify something, write it under "Not verified" and say
what you tried. An incomplete brief beats an invented fact. The leads below were
written from memory: they are not evidence, and some may be wrong.

## How to work
- Download each source once to your scratch folder (given below), extract text
  (pdftotext for PDFs), and grep it. Do not rely on summarising fetch tools for
  figures: confirm every number in the raw text.
- Quote the exact words that establish each licence, each exam fact and each
  outline item, with the URL and the section or page.
- Never run git. Never edit files outside your brief and your scratch folder.
- Use the network through the configured proxy; never disable TLS checks.

## The brief (write it to research/deck-briefs/<slug>.md)
1. Exam facts: owner, current version and its effective dates, number of
   questions, time, pass mark, format, retake rules, validity. Each with a quote
   and URL. Say which facts change often.
2. Sources, one row each: title, URL, publisher, licence as quoted from the source
   itself, content-policy tier (A/B/C/D), and what the deck can use it for.
3. The exam outline: every domain, subdomain and objective, in the owner's order,
   with weights if published. This is the coverage checklist: the deck must leave
   nothing out.
4. Concept inventory, grouped into topics in teaching order: every term, rule,
   number and procedure the exam requires. For each: a one-line plain definition
   taken from a source, the source section, what must be taught first
   (prerequisite terms), and whether it is a volatile fact. Mark core versus
   extra. Be exhaustive: this list is how we make sure nothing is left behind.
5. Numbers and thresholds: every figure a candidate must know, with units,
   conditions and the source line.
6. Visuals: every figure, chart, diagram or table in the sources that IS content
   (a schematic, a chart symbol, a sectional chart extract, an architecture
   diagram), with its file URL, figure number, licence, and what a card would ask
   about it. Also list diagrams we could draw ourselves from sourced facts.
7. Confusions and traps: things candidates mix up, outdated versions still
   circulating, differences between editions, and rules that recently changed.
8. Naming: the owner's trademark or naming terms, fetched from its own site, and
   how CONTENT-POLICY.md §4 applies.
8b. Term registry: also write research/deck-briefs/<slug>-terms.json, an array of
   {"term": "<exact spelling writers must use>", "abbr": "<abbreviation or empty>",
   "topic": <number of the topic whose primer introduces it>, "concept":
   "<conceptID>", "source": "<URL of the defining passage>"}. One entry per term,
   covering every term in the concept inventory, in teaching order. Save the
   primary sources that define basic terms (so writers never need Wikipedia).
8c. Card budget: for each topic, a target card count derived from the outline's
   weights and the number of concepts (roughly: one primer per term, one fact per
   rule or number, one application per core concept). State the deck total.
9. Languages: every language the exam is offered in, and every official or
   openly licensed translation of the main sources (with its licence), each with
   a quote and URL. One short section; do not research further than that.
10. Not verified: everything you could not confirm, and what you tried.

## Your reply
At most 200 words: the brief's path, how many outline items and concepts it
lists, how many visuals, and the most important thing you could not verify.

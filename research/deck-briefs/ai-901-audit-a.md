# ai-901 audit A: topics 01–03

Scope: decks/ai-901/notes/01-responsible-ai.json to 03-ai-workloads-and-text-analysis.json, 263 cards (69 + 118 + 76). For the pool cards (scenario type with choices) I checked only the explanation and choicesExplained. I checked every card against its `evidence` first. Claims beyond the evidence were checked by grepping research/sources/ai-901/: concept-responsible-ai, content-filter, responsible-use-of-ai-overview, the Content Safety overview, foundry-models-overview-1, model-benchmarks-1, the deployment-types includes 1, 2 and 6, and the Azure Language overviews (language, key phrase extraction, sentiment, summarisation, PII).

Tier B text comes from the MicrosoftDocs/azure-ai-docs repository (CONTENT-POLICY.md §3, tier B). Five learn.microsoft.com pages are tier C (CONTENT-POLICY.md §3, tier C), and the manifest keeps no text for them (path null):
- fundamentals-generative-ai units 1, 3 and 7;
- get-started-ai-fundamentals unit 7;
- the AI-901 study guide.

I fetched each page once, with a generic User-Agent and no personal details, to check facts. I kept the text in my scratchpad only. Apart from the findings below, it supports every tier C claim, including vocabulary size, sub-words, masked attention, cosine similarity, the three elements of an agent, multi-agent communication through prompts, and the six workloads in the outline. The worked examples are our own, not the unit's reworded: "the fox saw the hen", "re" in "redo"/"rewrite" and "Please pass the salt and". The unit uses "I heard a dog bark loudly at a cat" and "un".

Other claims I checked and found supported:
- the error analysis "cohorts" (concept-responsible-ai line 42);
- the hate-category attributes and eating disorders under self-harm;
- HTTP 200 for scenarios 2 and 6;
- the leaderboard inclusion criteria and the quality index as an average;
- the catalogue filters and model card quick facts;
- the virtual machine quota for managed compute;
- the latency variation of Global Standard at high, consistent volume;
- the 31 March 2029 retirement of key phrase extraction.

## Findings

id | severity | problem | evidence (source words, with page)
---|---|---|---
ai901.responsible-ai.dpg-order | ambiguous | Front asks what comes before protection; the source has two prior steps and the back gives only one, so "measuring the risks" would be marked wrong. | responsible-use-of-ai-overview-content: "we first discover and assess the potential risks … we evaluate their prevalence within the AI system through systematic measurement … We then apply appropriate protection"
ai901.ai-workloads-and-text-analysis.what-is-an-ai-agent | unclear | "act on its context" is hard to parse; a newcomer would read it twice. | Learn fundamentals-generative-ai/7-agents (tier C): agents "respond to contextual conditions to take appropriate action"
ai901.responsible-ai.what-is-inclusiveness | unclear | Explanation is a note on how two Microsoft pages group the principles, not why the principle matters. | Learn get-started-ai-fundamentals/7-understand-responsible-ai (tier C): potential of AI "should be open to everyone"; solutions shouldn't "exclude some users"; concept-responsible-ai heading "Fairness and inclusiveness"
ai901.responsible-ai.what-is-reliability-and-safety | minor | Explanation talks about the source ("The source presents this as…") rather than the idea. | concept-responsible-ai#reliability-and-safety: "To build trust, AI systems must operate reliably, safely, and consistently … respond safely to unexpected conditions"
ai901.responsible-ai.what-is-content-safety | minor | Example is ungrammatical ("except automated, and also checking"). | n/a (wording)
ai901.responsible-ai.finish-reason | minor | Explanation "returns no content" leaves out the source's qualifier. | content-filter#content-filtering-scenarios: "In rare cases with longer responses, a partial result can be returned."
ai901.generative-ai-models.what-is-a-vector | minor | "Several numbers" suggests a handful; real vectors have thousands of elements. | Learn fundamentals-generative-ai/3-language-models (tier C): "In reality, the vectors have thousands of elements."
ai901.generative-ai-models.embeddings-similar-direction | minor | Explanation says "near each other", but the back and source speak of direction. | Learn 3-language-models (tier C): tokens used in similar contexts "result in vectors with similar directions"
ai901.generative-ai-models.eu-zone-norway | minor | "Microsoft's European data boundary" doesn't match the source's name for it. | concepts-deployment-types-content-6#data-zone-deployments: "The EU Data Zone follows the Azure EU Data Boundary, which can include European Free Trade Association (EFTA) countries"
ai901.generative-ai-models.apply-batch | minor | choicesExplained says Global Provisioned is "at higher cost"; the source makes no cost comparison. | concepts-deployment-types-content-6#global-provisioned: "reserved model processing capacity for predictable throughput"
ai901.generative-ai-models.apply-developer | minor | choicesExplained says provisioned "costs more than a short test needs" and calls Data Zone Standard "production" use. Neither is in the source. | concepts-deployment-types-content-6#developer-for-fine-tuned-models: "designed for fine-tuned model evaluation only"

## Not raised

- ai901.ai-workloads-and-text-analysis.what-is-agentic-ai: the unit gives no formal definition, only "Agentic AI is set to be the next advance in how we use technology to find information and get work done". The back is a fair summary of the agents and multi-agent sections, so it is left as it is.
- ai901.responsible-ai.scenario-reliability: the warehouse-robot front echoes the unit's computer-vision robot example, but the situation differs (a lighting change, not confidence thresholds). Fronts are also checked against the skeleton.
- Sentiment analysis, opinion mining and summarisation also retire on 31 March 2029 (source files overview-b9b325 and overview-b84ea6). No card claims otherwise, so this is a coverage note, not a finding.

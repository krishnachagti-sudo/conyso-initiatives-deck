# github-copilot audit, part A (topics 1–4)

Cards checked: 324 (T1 72, T2 83, T3 67, T4 102). Sources: research/sources/github-copilot/
(GitHub Docs, tier B) and the saved Microsoft Learn units (tier C, facts in our own words).
All scenario cards' choicesExplained letters were checked by hand against their choices
and backs, and none were mismatched. No card re-teaches a github-foundations term: no
`introduces` overlaps the 109 Foundations terms, and the agent mode, cloud agent and plan
cards go deeper than the Foundations primers.

id | severity | problem | evidence (source words, with page)
---|---|---|---
ghcp.copilot-in-the-ide.slash-new | unsupported | Evidence quotes the GitHub website row, which contradicts the back ("creates a new project") | chat-cheat-sheet, Visual Studio Code "Slash commands": "`/new` \| Create a new project." (website row: "Start a new conversation")
ghcp.copilot-in-the-ide.slash-clear | unsupported | Evidence quotes the website row ("Clear conversation"), not the VS Code row the front paraphrases | chat-cheat-sheet, VS Code table: "`/clear` \| Start a new chat session."
ghcp.copilot-cli.script-scenario | ambiguous | Front says "The task needs no tools", but reading src/app.js is tool use | run-cli-programmatically#tips: "Use `-s` (silent) when capturing output"; "Always give minimal permissions"
ghcp.agents.edits-apply | ambiguous | Choice B (plan mode "edits files once the plan is approved") is half true; the explanation does not say why it is still wrong | chat-in-ide#using-the-plan-agent: "Click Start Implementation to switch Copilot Chat to agent mode"
ghcp.responsible-ai.prompt-injection | unclear | Back "Hiding messages in input the agent reads" does not say the messages are aimed at the agent | risks-and-mitigations: "Users can include hidden messages in issues assigned to Copilot cloud agent or comments left for Copilot cloud agent as a form of prompt injection"
ghcp.agents.spark | unclear | Primer never says what GitHub Spark is; it tests the plans-page layout. No saved source defines Spark (needs research) | plans: "GitHub Spark (public preview)" (table row only)
ghcp.agents.chat-limitations | minor | Duplicate of ghcp.copilot-in-the-ide.chat-responsibility (same question, answer and passage); delete it and move its concept to the T2 card | chat#limitations: "you remain responsible for reviewing and validating the code it generates"
ghcp.agents.no-licence-policies | minor | Back paraphrases the policy name the learner must recognise | code-review: "**AI credits paid usage**. Enable this policy first."
ghcp.agents.path-apply | minor | choicesExplained "C is unnecessary" gives no reason | response-customization: "avoid overloading your repository-wide instructions"
ghcp.responsible-ai.review-contributing | minor | Explanation is ungrammatical ("Keeping improving your workflow includes") | review-ai-generated-code#8-keep-improving-your-workflow
ghcp.agents.auto-review-users, mcp-policy-scope, mcp-policy-default, mcp-policy-apply, spaces-who, spaces-who-apply, type-organization, org-instructions, no-licence-policies | minor | Plan- or policy-dependent facts carry no `volatile`/`validAsOf`, unlike the deck's other plan cards | code-review: "available on the Copilot Pro, Copilot Pro+, and Copilot Max plans"; mcp: "The policy is disabled by default"; spaces: "including Copilot Free"
ghcp.responsible-ai.inaccurate-code, oversight-causes, automated-checks, review-automate; ghcp.copilot-in-the-ide.chat-tasks, chat-environments, inline-best-for, chat-best-for, agent-mode-suits, plan-agent-does, model-availability; ghcp.copilot-cli.session-contents, instruction-files | minor | Front is "Name two…?", not a question; AUDIT.md asks for "What are two…?" | n/a (wording)

Noted, no patch: ghcp.agents.edit-mode-editors says edit mode is in VS Code, while
vscode-modes and edits-apply say the VS Code dropdown shows only Agent, Plan and Ask. The
docs page says both things ("Edit mode is only available in Visual Studio Code and JetBrains
IDEs" appears on the JetBrains tab), and the card's explanation already points this out.
Re-read it at the next release.

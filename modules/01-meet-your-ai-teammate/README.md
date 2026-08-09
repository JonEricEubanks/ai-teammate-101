# 01 · Meet Your AI Teammate

**Time: ~15 minutes** · No hands-on yet — this module gives you the mental model the rest of the workshop builds on.

**Objectives.** By the end of this module you will be able to:

- Place the Coding Agent on the "autonomy spectrum" of Copilot features
- Describe the four phases of an agent run
- Decide which tasks are good delegation candidates — and which aren't

---

## The autonomy spectrum

"GitHub Copilot" is really several different working relationships with an AI, and they differ in one dimension that matters: **who's driving.**

<p align="center">
  <img src="/ai-teammate-101/assets/diagram-spectrum.svg" alt="The autonomy spectrum from autocomplete to the Coding Agent" width="860" />
</p>

| Mode | Where it lives | You're… | Best for |
|---|---|---|---|
| Autocomplete | Your editor | Typing | The line you're already writing |
| Chat / Ask | Editor, GitHub.com | Conversing | Questions, explanations, small snippets |
| Agent mode | VS Code | Supervising each step | Multi-file changes you want to watch closely |
| **Coding Agent** | **GitHub.com** | **Delegating the whole task** | **Well-specified work you'd hand to a teammate** |

The Coding Agent is different in kind, not just degree: you stop supervising keystrokes and start managing **outcomes**. That's why this workshop frames it as a tech-lead skill — because it is one.

## What a run looks like

When you assign an issue to `@copilot`, four things happen:

1. **Activation.** Copilot reacts  on the issue, spins up an isolated GitHub Actions runner, and opens a draft PR on a `copilot/` branch.
2. **Exploration & planning.** It reads your codebase (using retrieval over the repo, not just the files you mentioned), forms a plan, and writes it into the PR description as a checklist.
3. **Implementation & self-verification.** It commits incrementally, runs your tests and linters, writes new tests, and iterates when checks fail.
4. **Review loop.** It marks the PR ready, requests your review, and — crucially — **responds to review comments**, resuming the session to address them.

Everything is visible in the **session log**: every file read, every command run, every test result. Nothing happens off-stage.

## What it's good at (and what it isn't)

**Delegate freely:**

-  Well-scoped features ("add X to page Y")
-  Bug fixes with a clear repro
-  Test coverage, docs, dependency bumps
-  Mechanical refactors, tech-debt paydown

**Keep a human in the loop:**

-  Architecture decisions ("how should auth work?")
-  Vague asks ("make it faster", "improve UX")
-  Anything touching secrets, infra, or production data
-  Work where you couldn't review the output — *if you can't tell whether the PR is right, you can't safely delegate the task*

That last rule is the one that matters most. **Delegation shifts your job from writing code to specifying and reviewing it.** Modules 02 and 03 train exactly those two skills.

##  Quick check

For each task, decide: *delegate to the Coding Agent, or keep it human?* (Answers at the bottom — no peeking.)

1. "Add a confirmation dialog before deleting a task."
2. "Should TaskMango move from localStorage to a real backend?"
3. "The delete button removes the wrong task when a filter is active. Repro: …"
4. "Make the app feel more polished."
5. "Write unit tests for `TaskFilter.tsx` to reach 80% coverage."

##  Checkpoint

- [ ] You can explain the difference between Agent mode (IDE) and the Coding Agent (GitHub.com) to a colleague in one sentence
- [ ] You can name the four phases of a run
- [ ] You scored at least 4/5 on the quick check

---

**Next ** [Module 02: Delegate Your First Task](../02-delegate-a-task/README.md)

<details><summary>Quick-check answers</summary>

1. **Delegate** — well-scoped, visible, testable.
2. **Human** — that's an architecture call. (You might ask Copilot *chat* for input, but you decide.)
3. **Delegate** — a clear bug with a repro is an ideal agent task. (It's also in your seeded backlog.)
4. **Human first** — too vague. Decompose it into specific tasks, *then* delegate those.
5. **Delegate** — the single best first real-world use of a coding agent.

</details>

# 02 · Delegate Your First Task

**Time: ~30 minutes** *(~10 min of your effort; the agent works while you watch)*

This is the heart of the workshop. You'll run the complete autonomous development loop once, end to end:

<p align="center">
  <img src="/ai-teammate-101/assets/diagram-loop.svg" alt="The delegation loop from issue to merged PR" width="780" />
</p>

**Objectives.** By the end of this module you will be able to:

- Write an issue with enough context for an autonomous agent to succeed
- Assign an issue to Copilot and recognize the signals that it's working
- Read session logs to understand *how* the agent approached your task
- Review the resulting pull request and merge it

---

##  The task

The four phases of an agent run, at a glance:

<p align="center">
  <img src="/ai-teammate-101/assets/diagram-phases.svg" alt="Assignment, autonomous development, quality check, then PR and review" width="820" />
</p>

TaskMango's filter bar (`All / Active / Completed`) tells you *which* filter you're on, but not *how many tasks* are behind each one. Your users (okay, you) want counts:

> `All (5) · Active (3) · Completed (2)`

Small. Visible. Well-defined. Perfect first delegation.

> **🆓 Free plan path:** instead of the GitHub.com steps below, open your copy of the repo in VS Code, open Copilot Chat in **Agent mode**, and paste the same issue text. The rest of this module — reviewing the diff, checking tests — applies the same way. The GitHub.com flow is worth returning to once you have access.

---

## Lab 2.1 — Write an issue an agent can execute

An autonomous agent can't ask you clarifying questions mid-flight (well — it *can*, but the round-trip costs you the whole point of delegating). Your issue body is the spec. Put the care in up front.

1. In **your copy** of the repo, open the **Issues** tab  **New issue**.
2. Title: `Show task counts in the filter bar`
3. Body — copy this, then read it critically before submitting:

````markdown
## User story

As a TaskMango user, I want each filter tab to show how many tasks it
contains, so I can see my workload at a glance.

## Acceptance criteria

- [ ] The filter bar shows counts for all three filters:
      `All (n) · Active (n) · Completed (n)`
- [ ] Counts update immediately when a task is added, completed, or deleted
- [ ] Counts are computed from the full task list, not the currently
      visible (filtered) list
- [ ] A unit test covers the count logic

## Context

- The filter bar lives in `taskmango/src/components/TaskFilter.tsx`
- Task state lives in `taskmango/src/App.tsx` — you'll likely need to
  pass counts down as props
- Run tests with `npm test` from the `taskmango/` folder
````

Notice what this spec does, because you'll do it forever after this workshop:

| Element | Why the agent needs it |
|---|---|
| **User story** | The *why* — helps it make judgment calls you didn't specify |
| **Acceptance criteria** | A testable definition of done — this is what it will self-check against |
| **Pointers into the codebase** | Saves the agent exploration time and prevents it from guessing file layout |
| **How to verify** | `npm test` tells it how to prove its own work |

>  **Anti-pattern to avoid:** "make the filters better." An agent given a vague task will produce *a* change — just probably not the one you wanted. Ambiguity in, entropy out.

## Lab 2.2 — Hand it off

1. On the new issue, open the **Assignees** section in the right sidebar.
2. Select **Copilot**.
3. In the assignment dialog, confirm the repository and base branch (`main`) are correct, then confirm.
4. Within a few seconds, Copilot adds a ** reaction** to the issue. That emoji is your "ticket acknowledged."

Behind the scenes, Copilot spins up a sandboxed GitHub Actions environment with your repo checked out, and starts working. You never touch this environment — you observe it.

## Lab 2.3 — Watch it think (session logs)

1. Copilot opens a **draft pull request** linked from the issue's sidebar (Development section) and timeline. If the link isn't there yet, wait ~30 seconds and refresh.
2. Open the PR. Note that it's a **draft** — work in progress — and that Copilot wrote the PR description itself, including a task checklist it will tick off as it goes.
3. In the PR timeline, click **View session**.

This is the part most people skip and shouldn't. The session log is the agent's lab notebook. As you scroll, look for:

- [ ] **Exploration** — which files did it read first? Did it find `TaskFilter.tsx` quickly, or wander?
- [ ] **Planning** — did its stated plan match your acceptance criteria *before* it wrote code?
- [ ] **Verification** — did it actually run `npm test`? Did the tests pass? Did it write the new test you asked for?
- [ ] **Recovery** — if it hit an error (a failing test, a type error), how did it respond? This is where you learn whether to trust it with bigger tasks.

>  **Why this matters:** trusting an agent isn't faith, it's evidence. Session logs are the evidence. Get fluent at reading them now, on a tiny task, so you can skim them later on big ones.

Copilot typically takes 3–10 minutes for a task this size. While it works, you could preview [Module 03](../03-become-the-tech-lead/README.md) — or just watch. First time, watching is half the fun.

## Lab 2.4 — Review like it came from a teammate

When Copilot finishes, it marks the PR **ready for review** and requests your review. Now do the job you hired it to do.

Open the **Files changed** tab and work through this rubric (you'll get a fuller version in Module 03):

| Check | Question to ask | For this PR, specifically |
|---|---|---|
| **Correctness** | Does it do what the issue said? | Counts show for all three filters? Computed from the *full* list? |
| **Fit** | Does it match how the codebase already does things? | Did it follow the existing prop-passing style, or invent a parallel pattern? |
| **Tests** | Is the new behavior covered? | Is there a real assertion on the counts, or a test that passes vacuously? |
| **Scope** | Did it touch only what the task required? | Any drive-by refactors or reformatted files you didn't ask for? |

Then leave a review — even if it's an approval:

- **If it's right:** approve, then **Merge pull request  Confirm merge**. You just shipped code you didn't write, through the same process you'd use for a human teammate.
- **If it's close but wrong:** leave a review comment **mentioning `@copilot`** describing what's off (e.g. "counts don't update when a task is deleted — check the delete path in App.tsx"). Copilot picks the comment up, resumes the session, and pushes new commits. Watch it happen in the timeline.

>  **Try it on purpose:** even if the PR looks fine, leave one small piece of feedback — ask for a style tweak or an extra edge-case test. Watching the agent iterate on review feedback is the single most instructive part of this module.

##  Checkpoint

You're done with Module 02 when:

- [ ] Your issue got a  from Copilot
- [ ] A `copilot/…` branch PR appeared, moved from draft to ready-for-review
- [ ] You read the session log and found the moment it ran the tests
- [ ] You left at least one piece of review feedback and saw the agent respond
- [ ] The filter bar in your merged `main` shows live counts

## 🆘 Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Copilot doesn't appear in Assignees | Plan doesn't include coding agent, or org policy blocks it | Check [setup](../..//setup/00-environment.md); org repos need the policy enabled by an admin |
| No  after several minutes | Agent capacity/queue delay | Wait, or unassign/reassign; check githubstatus.com |
| PR exists but session seems stuck | The agent is rate-limited mid-session | It usually resumes on its own; check the session log's last entry |
| The change looks wrong in a way feedback didn't fix | Spec ambiguity | Close the PR, rewrite the issue with tighter acceptance criteria, reassign. Rewriting the spec is a legitimate, cheap iteration strategy |

##  Reflection

1. What did you put in the issue that the agent clearly *used*? What did it ignore?
2. Reading the session log, where did the agent's approach differ from how *you* would have done it? Was its way worse, or just different?
3. How long did the whole loop take — and how much of that was *your* time versus waiting time? What would you do with the waiting time in a real project?

---

**Next ** [Module 03: Be the Tech Lead](../03-become-the-tech-lead/README.md) — now do three of these at once, and learn to review at speed.

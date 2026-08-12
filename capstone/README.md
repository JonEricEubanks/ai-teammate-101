# 🏆 Capstone: Run the Loop Solo

**Time: ~45 minutes**

No more guided steps. You're the tech lead of TaskMango now, and the sprint ends in 45 minutes.

## The assignment

Ship **two** improvements to TaskMango, end to end, delegated to Copilot:

1. **One from the backlog** — pick from [`taskmango/docs/seeded-issues.md`](../taskmango/docs/seeded-issues.md) (#4 "Clear completed" button and #6 dark mode are good choices).
2. **One you invent** — any improvement you'd actually want. You write the entire spec from scratch.

## The rules

- **You may not edit application code directly.** Issues, review comments, and merge buttons only. (Docs and issue text are fine.)
- **At least one PR must go through a real review round** — leave `@copilot` feedback and make it iterate, even if the first draft was mergeable.
- **Use the rubric** from Module 03 on both PRs, in writing, in the PR thread.
- **Everything merges green.** Tests passing, no open CodeQL alerts you introduced.

## The deliverable: a retro

When both PRs are merged, open a file called `RETRO.md` in your repo root (yes, you may write this one file yourself) and answer:

```markdown
# TaskMango retro

## What I delegated
- Task 1: <link to PR> — merged after <n> review rounds
- Task 2: <link to PR> — merged after <n> review rounds

## Spec quality
What did my best issue have that my worst issue didn't?

## Review findings
What did the agent get wrong that I caught? What did it get right
that I wouldn't have thought of?

## My delegation policy going forward
For my real projects, I will delegate ______ but never ______.
```

## How to use this artifact

This capstone is deliberately portfolio-shaped. Your copy of the repo — with its PR threads, review comments, session logs, and retro — is something you can link from a resume, a blog post, or a talk proposal. "I managed an AI teammate through a full sprint" is a better story than "I completed a tutorial."

Hit 6/6 and the progress bot generates a personalized, downloadable certificate right into your repo (`CERTIFICATE.svg`) and embeds it in your scorecard issue:

<details class="shot"><summary>What you'll earn — the certificate the bot generates at 6/6</summary>
<img class="shot" src="/ai-teammate-101/assets/shots/certificate-sample.png" alt="A personalized AI Teammate 101 certificate of completion with the learner's name, repo, and date" />
</details>

Want to see a finished run end-to-end before you start? Here's a complete example: the [scorecard at 6/6](https://github.com/JonEricEubanks/ai-teammate-test-run/issues/1), the [generated certificate](https://github.com/JonEricEubanks/ai-teammate-test-run/blob/main/CERTIFICATE.svg), and the [retro](https://github.com/JonEricEubanks/ai-teammate-test-run/blob/main/RETRO.md) — all in one repo.

> 📣 **Facilitators:** the retro + two merged PRs are the completion evidence if you're running this as a graded workshop.

---

## 🎉 You're done

You've done the full loop: spec → delegate → observe → review → iterate → merge → reflect. Most working developers haven't. Take TaskMango's remaining backlog issues if you want reps — or better, point everything you learned at a project you actually care about.

**Where next:**

- Wire a custom agent to an MCP server (the natural "Module 06")
- Try the same loop on your own repository with real bugs
- Share your retro — the community learns from real delegation stories

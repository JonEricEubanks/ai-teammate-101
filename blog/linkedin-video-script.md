# 🎬 LinkedIn Video Demo Script — "Watch an AI Pass Its Own Code Review"

**Target length:** 2:30–3:00 · **Format:** screen recording + voiceover (or on-camera intro/outro bookending screen capture)
**Recording prep:** fresh template copy created ahead of time, Module 02 task pre-dispatched so the PR already exists (don't record the waiting), all tabs staged.

---

## Cold open (0:00–0:15) — on camera or title card

> "I just built a workshop where the homework is done by an AI agent, the grading is done by *another* automation, and the only thing the student actually does is the one skill that matters: **making decisions**. Let me show you."

**B-roll:** fast montage — issue assigned → 👀 appears → draft PR opens itself.

## Beat 1 — The problem (0:15–0:35)

> "Everyone's learning Copilot autocomplete. But the real shift is *agentic* development — handing an AI a whole task and reviewing its pull request like it's a teammate. The problem? Nobody teaches that skill. So I built **AI Teammate 101**."

**Show:** the repo README — scroll past the badges, the module map. Land on the "What makes this different" section.

## Beat 2 — The magic trick (0:35–1:15)

> "You click 'Use this template,' and you get your own copy of TaskMango — a real app with real bugs and a real security vulnerability planted inside. Then you do something weird: you file an issue… and assign it to Copilot."

**Show (live or recorded):**
1. The seeded issue body (5s)
2. Assigning Copilot → the 👀 reaction (this is the dopamine moment — linger on it)
3. The draft PR appearing on a `copilot/` branch
4. Quick scrub through the **session log** — "you can watch it read files, run the tests, and argue with itself."

## Beat 3 — The part nobody else has (1:15–1:50)

> "Here's my favorite part. The workshop *grades itself*. A GitHub Action watches your repo — when your first AI-authored PR merges, ✅. When you make Copilot iterate on your code review, ✅. When CodeQL catches the planted XSS and Copilot Autofix kills it, ✅."

**Show:** the **🏆 My AI Teammate 101 Progress** issue — the checklist ticking to 6/6, then the certificate badge rendering.

> "Hit six out of six, and the bot awards you a certificate *inside your own repo*. Every milestone is backed by a real pull request. That's not a participation trophy — it's an audit trail."

## Beat 4 — The serious cred (1:50–2:20)

> "And because I built this to actually mean something: every module maps to a domain of Microsoft's new **GH-600 Agentic AI Developer certification**. Module 06 teaches you to govern the agents — plan gates, CODEOWNERS, least-privilege tokens. You don't just use the agent; you learn to be its boss."

**Show:** GH600-MAP.md table, briefly. Then the plan-gate blocking an empty PR.

## Beat 5 — The close (2:20–2:45) — back on camera

> "It's free, it's open source, it takes one evening, and it runs on your own Copilot license — students get Pro free. Link below. Try Module 02 tonight and tell me: what's the first task *you'd* delegate?"

**End card:** repo URL + `#AITeammate101`

---

## Production checklist

- [ ] Record at 1080p; GitHub UI at 110% zoom (mobile LinkedIn viewers)
- [ ] Pre-run everything; edit out waits (the 👀 and the PR-appears moments are the only waits worth keeping — they're suspense)
- [ ] The 👀 reaction and the certificate render are your two "rewatch" moments — don't rush them
- [ ] Post natively to LinkedIn (uploaded video >> YouTube link for reach)
- [ ] Caption text: hook line + 3 bullets + repo link + `#GitHubCopilot #AI #AITeammate101`

## Companion text post (paste-ready)

> I built a free, open-source workshop that teaches the skill nobody's teaching: how to *delegate* to AI coding agents like a tech lead.
>
> 🥭 You get a real app with planted bugs (and a real XSS vuln)
> 🤖 You assign GitHub issues to Copilot — it ships PRs
> 🏆 An examiner bot grades your repo and awards a certificate
> 🗺️ Every module maps to the GH-600 Agentic AI Developer cert
>
> One evening. Your own Copilot license. Certificate included.
> 👉 github.com/JonEricEubanks/ai-teammate-101

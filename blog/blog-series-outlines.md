# Blog Series: "I Stopped Coding and Started Delegating"

Three posts derived from the workshop. Each stands alone, each links the repo, each maps to a separately reportable MVP activity. Target: dev.to + personal blog (canonical link). Cross-post to LinkedIn as summaries.

**Series-wide voice rules:**
- First-person, practitioner, zero marketing speak. "Here's what I did, here's what surprised me."
- Every post opens with a concrete moment, not a definition.
- Every post ends with the same CTA: *"Run the workshop yourself: [repo link] — it takes one evening and uses your own Copilot license."*
- Screenshots are your own, from your own workshop run (also reuse them in the repo).

---

## Post 1 — "I delegated a GitHub issue to an AI and reviewed it like a PR from a junior dev"

**Maps to:** Modules 01–02 · **Target length:** 1,200–1,500 words

**Hook:** A screenshot of the 👀 emoji on the issue. "Three seconds after I clicked *assign*, an AI acknowledged my ticket. Twenty minutes later I was reviewing its pull request. Here's the part nobody tells you about how that actually feels."

**Outline:**
1. The moment: issue → 👀 → draft PR appears (the autonomy spectrum in one paragraph — autocomplete → chat → agent → *this*)
2. What I wrote in the issue and why (the user-story + acceptance-criteria pattern; quote the actual issue)
3. Watching the session log: the three things I looked for (exploration, plan match, *did it run the tests?*)
4. The review: what it got right, the one thing I sent back, watching it iterate on my comment
5. Honest takeaways: where my time actually went (spec: 5 min, wait: 8 min, review: 6 min), the "ambiguity in, entropy out" lesson
6. CTA + teaser for post 2 ("one task is a demo; three in parallel is a job description change")

**Screenshot wishlist:** issue with assignee, session log mid-run, PR checklist ticking, review comment + agent's response commit.

---

## Post 2 — "I ran three AI agents in parallel and became the bottleneck (a tech lead story)"

**Maps to:** Module 03 · **Target length:** 1,200–1,500 words

**Hook:** "I dispatched two tasks to AI agents, went to make coffee, and came back to two pull requests waiting on *me*. That's when I understood what this technology actually changes: not how code gets written, but whose time is scarce."

**Outline:**
1. The experiment: two parallel issues on my deliberately-buggy teaching app
2. The inversion: my job became specify → dispatch → review. Quote the review rubric
3. The conflict story: both agents touched nearby code; what the second PR's merge conflict taught me about task partitioning
4. AI reviewing AI: I added Copilot as a reviewer on Copilot's PR. What it caught, what it missed, and why I won't skip human review on anything I couldn't verify myself
5. The delegation hit-rate: how many PRs merged with ≤1 feedback round, and what the failures had in common (my specs, not the agent)
6. CTA + teaser for post 3

**Screenshot wishlist:** two in-flight PRs side by side, a filled-in rubric comment, the conflict resolution.

---

## Post 3 — "I planted an XSS vulnerability on purpose, then made AI find and fix it"

**Maps to:** Modules 04–05 · **Target length:** 1,300–1,600 words

**Hook:** "My teaching app ships with a real cross-site scripting bug. I put it there. This is the story of the most satisfying bug fix I've never written."

**Outline:**
1. Why I built a teaching app with a planted vulnerability (deterministic labs beat hopeful ones)
2. Enabling CodeQL: five clicks, free on public repos, first scan in minutes
3. Reading the alert properly: the data-flow path from `localStorage` to `dangerouslySetInnerHTML` — include the path screenshot
4. Autofix: what it proposed (React's default escaping — the *correct* fix, not a workaround), what I checked before merging, the alert closing itself on merge
5. The zoom-out: security campaigns, PR-time scanning — AI generating candidate fixes at scale while humans approve
6. Bonus section: the specialist custom agent (`.github/agents/test-engineer.md`) — "my AI teammate has a job description now, and it's in version control"
7. CTA + series wrap: what I'd tell someone starting tonight

**Screenshot wishlist:** the CodeQL alert with data-flow path, the Autofix diff, the custom-agent file + its PR containing only test files.

---

## Distribution checklist (per post)

- [ ] Publish on dev.to (tags: githubcopilot, ai, github, tutorial) + personal blog with canonical URL
- [ ] LinkedIn summary post with the strongest screenshot
- [ ] Link the specific workshop module, not just the repo root
- [ ] Record view counts + repo traffic (Insights → Traffic) weekly for MVP evidence

export type Post = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readTimeMinutes: number;
  tags: string[];
  content: string[];
};

const posts: Post[] = [
  {
    slug: "github-daily-2026-02-18-series-3",
    title: "GitHub Daily Series #3: Rust Automaton Sprint on February 18",
    summary:
      "As of 2026-02-18 21:50 JST: 4 active repositories, 10 commits, and a heavy Rust-focused build sprint.",
    publishedAt: "2026-02-18",
    readTimeMinutes: 6,
    tags: ["github", "daily-log", "series", "rust"],
    content: [
      "This is episode 3 of the GitHub daily series, covering work on February 18, 2026 (JST), with data captured at 21:50 JST.",
      "Today snapshot so far: 4 repositories updated, 10 commits, +54380 / -4 lines changed, with no new issues, pull requests, or review events.",
      "malinin focused on a full Conway Automaton rewrite from TypeScript to Rust, followed by a README pass. Repo: https://github.com/nktkt/malinin",
      "zagitova progressed as a Rust-based Conway Automaton runtime with an initial implementation and two README updates in the same session. Repo: https://github.com/nktkt/zagitova",
      "wednesday was started as another Rust Conway Automaton line with an initial commit and README setup, creating a parallel experimental branch for the same problem space. Repo: https://github.com/nktkt/wednesday",
      "nktkt (profile repository) received three maintenance commits to reorder current projects, add the latest note link, and reflect newly created automaton projects. Repo: https://github.com/nktkt/nktkt",
      "Representative commit flow today: rewrite first, document immediately, then normalize public-facing project navigation.",
      "The key lesson from this sprint is that repeated re-implementation across multiple repos can be useful when each repo has a distinct runtime or presentation objective.",
    ],
  },
  {
    slug: "github-daily-2026-02-17-series-2",
    title: "GitHub Daily Series #2: Security Tools, Profile Repo, and Refactors",
    summary:
      "Second wave on February 17, 2026 (JST): 8 active repositories and 24 total commits by the end of the day.",
    publishedAt: "2026-02-17",
    readTimeMinutes: 7,
    tags: ["github", "daily-log", "series", "go", "security"],
    content: [
      "This is episode 2 of the same day. After the first sprint, development expanded into a second wave focused on security tooling, repository restructuring, and profile updates.",
      "End-of-day snapshot for February 17, 2026 (JST): 8 repositories updated, 24 commits, +24563 / -2416 lines changed, and no new issues, pull requests, or review events.",
      "skynet-cli-go moved from prototype to restructured form with three additional commits: multi-provider history CLI features, repository documentation and Makefile updates, and a cleanup commit that removed codex-history components to keep the repo scope clear.",
      "codex-history-cli also advanced with a dedicated commit adding a multi-provider history manager and dashboard mode, turning the project into a broader analysis workflow instead of a single-provider utility.",
      "Three more repositories were introduced in this second wave: tor-app (Tor .onion static HTML server CLI), goscan (network scanner with an nmap-compatible CLI and TUI dashboard), and venom (security framework with a full README usage guide and module reference).",
      "I also created and updated nktkt, the profile repository, then iterated on README presentation and current-project notes. This made the public-facing project map match the day’s actual output.",
      "Repository links: https://github.com/nktkt/skynet-cli-go https://github.com/nktkt/codex-history-cli https://github.com/nktkt/tor-app https://github.com/nktkt/goscan https://github.com/nktkt/venom https://github.com/nktkt/nktkt",
      "The practical lesson from episode 2 is to split capability by repository boundaries early, then tighten each repo’s mission with follow-up refactors on the same day.",
    ],
  },
  {
    slug: "github-daily-2026-02-17-series-1",
    title: "GitHub Daily Series #1: Four New Repos in One Day",
    summary:
      "A serialized development log for February 17, 2026: 4 repos, 12 commits, and production deployment.",
    publishedAt: "2026-02-17",
    readTimeMinutes: 6,
    tags: ["github", "daily-log", "series"],
    content: [
      "This is episode 1 of my GitHub daily series. On February 17, 2026 (JST), I created and updated four repositories in a short sprint, then shipped this site update to production.",
      "Day summary: 4 repositories, 12 commits, +4614 / -70 lines changed. Activity was commit-focused with zero new issues, pull requests, or review events.",
      "Episode 1: skynet-cli-go. I created the base CLI, added internal package tracking, then implemented wargame simulation with JSON output and mission analytics reporting. Repo: https://github.com/nktkt/skynet-cli-go",
      "Episode 2: codex-history-cli. I built a Go CLI to capture Codex session history, then added stats/session summaries and export formats (Markdown, CSV, JSONL). Repo: https://github.com/nktkt/codex-history-cli",
      "Episode 3: Oracle. I started a forecasting app, added holdout validation with JSON/CSV outputs, and finished the day with model save/load support. Repo: https://github.com/nktkt/Oracle",
      "Episode 4: kinematicsphys. I built a CLI for uniformly accelerated motion (SUVAT) equations and followed with a README containing usage examples and equation references. Repo: https://github.com/nktkt/kinematicsphys",
      "The key pattern today was simple: initialize quickly, add practical outputs, and close with usability improvements. I will continue this series with cross-repo integration and workflow automation in the next entry.",
    ],
  },
  {
    slug: "build-quietly-ship-often",
    title: "Build Quietly, Ship Often",
    summary:
      "A practical rhythm for shipping meaningful work without burning attention on noise.",
    publishedAt: "2026-02-10",
    readTimeMinutes: 4,
    tags: ["process", "shipping"],
    content: [
      "Most products fail from drift, not from one dramatic mistake. Drift happens when teams spend weeks discussing options, then launch too late to learn anything useful.",
      "I now treat shipping as a weekly habit. Every week should include one small user-facing improvement. It can be a UI fix, a copy edit, or a faster onboarding flow. The key is cadence.",
      "Small releases lower emotional risk. You stop waiting for the perfect rewrite and start collecting real feedback in production. That short loop compounds faster than any planning ritual.",
      "If you need one rule: make decisions reversible by default, and make irreversible decisions rare. That keeps momentum high and anxiety low.",
    ],
  },
  {
    slug: "cyber-contest-2026",
    title: "Ministry of Defense Cyber Contest 2026: Perfect Score and 7th Place",
    summary:
      "I finished with 590/590 across all categories, placing 7th in the general division and 23rd overall.",
    publishedAt: "2026-02-08",
    readTimeMinutes: 5,
    tags: ["security", "ctf", "contest"],
    content: [
      "I joined the Ministry of Defense Cyber Contest 2026 in the general individual division as Team_NaokiTakata. The result was a full score: 590 out of 590, with all 30 problems solved.",
      "In the general division, there were 584 individual entries and 127 team entries. I finished 7th in that division. Across the full event, the final standing was 23rd out of 1,358 participants (988 individual/team entries).",
      "The contest covered seven categories: Crypto, Forensics, Misc., Network, Programming, Pwn, and Web. I completed every category at 100 percent: Crypto 80/80, Forensics 90/90, Misc. 60/60, Network 80/80, Programming 80/80, Pwn 100/100, and Web 90/90.",
      "The category averages make the difficulty clear. Pwn was the toughest section overall, with an average score rate of 13.1 percent, while the others ranged roughly from the high teens to the high twenties.",
      "A small note from the timeline: Programming was the first category I started working on, and the opening solve there came early in the session. That gave me momentum for the rest of the day.",
      "For reference, I have attached the official score report PDF (成績票_Team_NaokiTakata.pdf) to this blog post.",
      "Download the score report: https://nktkt.com/%E6%88%90%E7%B8%BE%E7%A5%A8_Team_NaokiTakata.pdf",
      "If you want the official event details, see the Ministry of Defense page: https://www.mod.go.jp/j/approach/defense/cyber/c_contest/index.html",
    ],
  },
];

export function getAllPosts(): Post[] {
  return posts
    .slice()
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

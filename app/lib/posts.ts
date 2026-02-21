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
    slug: "github-daily-2026-02-21-series-6",
    title: "GitHub Daily Series #6: TON Productization Sprint on February 21",
    summary:
      "As of 2026-02-21 23:04 JST: 4 active repositories, 8 commits, and 37,308 added lines across TON apps and contracts.",
    publishedAt: "2026-02-21",
    readTimeMinutes: 6,
    tags: ["github", "daily-log", "series", "ton", "web3", "frontend"],
    content: [
      "This is episode 6 of the GitHub daily series, covering work on February 21, 2026 (JST), with data captured at 23:04 JST.",
      "Today snapshot so far: 4 repositories updated, 8 commits, +37308 / -46 lines changed, with no new issues, pull requests, or review events.",
      "FreedomWall moved from initial release to production hardening in four commits: base launch, manifest fixes, frontend production fixes (including Buffer polyfill and network safety), and declaration-flow reliability improvements. Repo: https://github.com/nktkt/FreedomWall",
      "ton-pay launched with an initial implementation of a TON Pay Telegram Mini App, establishing a separate payment-oriented product line. Repo: https://github.com/nktkt/ton-pay",
      "ton-voting-contract was created with an initial TON voting smart contract and accompanying web frontend, adding governance tooling to today's TON stack. Repo: https://github.com/nktkt/ton-voting-contract",
      "nktkt (profile repository) received two commits to publish Series #5 and update the README with newly launched TON projects so public navigation stayed synchronized. Repo: https://github.com/nktkt/nktkt",
      "Repository links: https://github.com/nktkt/FreedomWall https://github.com/nktkt/ton-pay https://github.com/nktkt/ton-voting-contract https://github.com/nktkt/nktkt",
      "The key lesson from this sprint is to pair new repo launches with same-day production hardening and profile updates, so experiments become usable products without losing discoverability.",
    ],
  },
  {
    slug: "github-daily-2026-02-20-series-5",
    title: "GitHub Daily Series #5: Sovereign AI and Resilience Sprint on February 20",
    summary:
      "As of 2026-02-20 23:55 JST: 4 active repositories, 5 commits, and 22,899 added lines across new AI and resilience tooling.",
    publishedAt: "2026-02-20",
    readTimeMinutes: 6,
    tags: ["github", "daily-log", "series", "ai", "security", "ops"],
    content: [
      "This is episode 5 of the GitHub daily series, covering work on February 20, 2026 (JST), with data captured at 23:55 JST.",
      "Today snapshot so far: 4 repositories updated, 5 commits, +22899 / -186 lines changed, with no new issues, pull requests, or review events.",
      "privatova was launched as a sovereign private AI agent project with an initial commit defining the baseline architecture and scope. Repo: https://github.com/nktkt/privatova",
      "epicshelter started with a v2.1.0 foundation for distributed global backup and disaster recovery, then followed with a critical bug-fix and production test-suite pass in the same day. Repo: https://github.com/nktkt/epicshelter",
      "heartbeat-readboard was created as a Heartbeat Readboard v1.3 release spanning CLI, TUI, and web interfaces with OSINT integration. Repo: https://github.com/nktkt/heartbeat-readboard",
      "nktkt (profile repository) was updated to reflect the latest projects and to add the Series #4 note so public navigation stayed synchronized with current output. Repo: https://github.com/nktkt/nktkt",
      "Repository links: https://github.com/nktkt/privatova https://github.com/nktkt/epicshelter https://github.com/nktkt/heartbeat-readboard https://github.com/nktkt/nktkt",
      "The key lesson from this sprint is to pair greenfield launches with immediate hardening and visibility updates so new repos become usable and discoverable on day one.",
    ],
  },
  {
    slug: "github-daily-2026-02-19-series-4",
    title: "GitHub Daily Series #4: Web3 and LLM Build Sprint on February 19",
    summary:
      "As of 2026-02-19 22:54 JST: 6 active repositories, 9 commits, and rapid delivery across Web3 and LLM tooling.",
    publishedAt: "2026-02-19",
    readTimeMinutes: 6,
    tags: ["github", "daily-log", "series", "web3", "llm", "rust"],
    content: [
      "This is episode 4 of the GitHub daily series, covering work on February 19, 2026 (JST), with data captured at 22:54 JST.",
      "Today snapshot so far: 6 repositories updated, 9 commits, +86126 / -66 lines changed, with no new issues, pull requests, or review events.",
      "erc20-dapp advanced through three commits: initial DApp setup, README documentation, and a security hardening pass with Ownable2Step, supply cap, and input validation. Repo: https://github.com/nktkt/erc20-dapp",
      "erc20-cli was added as a security-focused Rust CLI for ERC-20 workflows. Repo: https://github.com/nktkt/erc20-cli",
      "solana-token-manager was launched and then documented in English, moving from initial release to practical onboarding in one short iteration. Repo: https://github.com/nktkt/solana-token-manager",
      "Two LLM repos were created in parallel: nanochat-rs (Rust port) and nanochat_asm (AArch64 assembly rewrite). Together they contributed more than 37k added lines in the same day. Repos: https://github.com/nktkt/nanochat-rs https://github.com/nktkt/nanochat_asm",
      "nktkt (profile repository) was updated to reflect the latest projects and notes so public navigation stayed synchronized with actual output. Repo: https://github.com/nktkt/nktkt",
      "Repository links: https://github.com/nktkt/erc20-dapp https://github.com/nktkt/erc20-cli https://github.com/nktkt/solana-token-manager https://github.com/nktkt/nanochat-rs https://github.com/nktkt/nanochat_asm https://github.com/nktkt/nktkt",
      "The key lesson from this sprint is to ship end-to-end slices quickly: implementation, security pass, and documentation in the same execution window.",
    ],
  },
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
      "Repository links: https://github.com/nktkt/malinin https://github.com/nktkt/zagitova https://github.com/nktkt/wednesday https://github.com/nktkt/nktkt",
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

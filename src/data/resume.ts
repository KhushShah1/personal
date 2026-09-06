export type ResumeSubEntry = {
  title: string;
  bullets: string[];
};

export type ResumeEntry = {
  title: string;
  organization: string;
  dates?: string;
  bullets: string[];
  subEntries?: ResumeSubEntry[];
};

export type ResumeSection = {
  id: string;
  title: string;
  entries: ResumeEntry[];
};

export const resumeSections: ResumeSection[] = [
  {
    id: "education",
    title: "Education",
    entries: [
      {
        title: "B.S. in Computer Science & Mathematics",
        organization: "Carnegie Mellon University",
        dates: "Expected May 2029",
        bullets: [
          "Relevant classes: Deep Learning (Graduate Level), Machine Learning, Data Structures & Algorithms, Competition Programming, Computer Systems, Linear Algebra, Multivariable Calculus, Differential Equations.",
        ],
      },
    ],
  },
  {
    id: "experience",
    title: "Experience",
    entries: [
      {
        title: "Software Engineer",
        organization: "Maximor",
        dates: "June 2026 - Present",
        bullets: [
          "Joined as a Software Engineer Intern (June - August 2026); now working part-time during the school year.",
          "Designed and deployed the company's first multi-agent system on Claude Managed Agents: a coordinator agent delegating to subagents via cross-thread tool-call routing, replacing separate Temporal workflows.",
          "Revised the production fleet of Claude Managed Agents, rewriting system prompts, tightening tool schemas, reworking input framing, and debugging live agent runs to improve reliability and output quality.",
          "Designed the human-in-the-loop clarification system used across all agents: an answer/skip/rewind question lifecycle, durable persistence of agent runs and sessions, and a reviewer-facing UI.",
          "Wrote the generic managed-agent runtime powering it: pausing live agent sessions at clarification tool calls, resuming them via Temporal, and staging session files to balance context delivery with performance.",
          "Currently designing the company's agent evaluation harness: regression evals gating the migration of live customer workloads to newer models, plus orchestration tooling to run agents reproducibly.",
          "Served as a forward-deployed engineer, shipping customer-requested features and bug fixes across the product.",
        ],
      },
      {
        title: "Carnegie AI Safety Initiative",
        organization: "CASI",
        dates: "September 2025 - Present",
        bullets: [
          "Studied transformers in depth through a technical AI safety reading group, covering mechanistic interpretability, RLHF, alignment techniques, and the fundamentals of modern ML research on LLM internals.",
          "Co-leading a 3-person research project on AI safety alignment robustness, producing empirical research.",
        ],
      },
      {
        title: "CMU Courses Backend",
        organization: "ScottyLabs Tech Team",
        dates: "September 2025 - June 2026",
        bullets: [
          "Built automated Rust system to query CMU APIs and recursively discover related course resources.",
          "Wrote Python ETL to normalize course data into Postgres and expose it via JSON and CSV endpoints.",
          "Rebuilt the web app in TypeScript and React using TanStack Router; platform used by 1000s of CMU students.",
        ],
      },
    ],
  },
  {
    id: "research",
    title: "Research",
    entries: [
      {
        title: "Geometric Framework for Predicting Fragility of LLM Safety Training Methods",
        organization: "Carnegie AI Safety Initiative",
        dates: "April 2026 - Present",
        bullets: [
          "Using RepE-extracted concept vectors and Hessian eigenvector analysis to show safety concepts occupy lower-rank, higher-curvature subspaces than capability directions.",
          "Showing that benign fine-tuning updates preferentially project onto fragile safety directions, with representational rank and layer depth as independent fragility predictors.",
          "Building a framework that predicts DPO- versus PPO-trained models' alignment robustness from geometric properties, validating on HarmBench across Llama, Mistral, and Qwen; targeting ICLR 2027 workshops.",
        ],
      },
    ],
  },
  {
    id: "leadership",
    title: "Leadership",
    entries: [
      {
        title: "Organizer & Sponsorship Lead",
        organization: "Los Altos Hacks",
        dates: "2021 - 2025",
        bullets: [
          "Organized the world's largest high-school hackathon; personally raised $20,000+ in sponsorships.",
          "Gave speeches to 1000+ students and mentored many new members.",
        ],
      },
      {
        title: "Senior VP",
        organization: "Computer Engineers of the Next Generation (CENG)",
        dates: "2022 - 2025",
        bullets: [
          "Managed 100+ volunteers teaching 24+ coding classes in Python, Java, and JavaScript to underserved schools; created over $1M of impact.",
          "Earned the Presidential Volunteer Service Award for 200+ service hours in a single year.",
        ],
      },
    ],
  },
  {
    id: "technical-skills",
    title: "Technical Skills",
    entries: [
      {
        title: "Machine Learning & Agents",
        organization: "ML",
        bullets: [
          "Claude Managed Agents, LLM APIs, MCP.",
          "Implemented transformers from scratch; completed ARENA, a technical AI safety curriculum covering reinforcement learning, evaluations, interpretability, and alignment.",
          "Working knowledge of LLM internals, attention, RLHF, and alignment techniques.",
        ],
      },
      {
        title: "Programming Languages",
        organization: "Languages",
        bullets: [
          "Python, Java, C++, C, C#, JavaScript, TypeScript, Rust, SQL, CSS, Standard ML, LaTeX.",
        ],
      },
      {
        title: "Tools & Platforms",
        organization: "Tools",
        bullets: [
          "Git, Linux, Docker, PostgreSQL, Snowflake, Temporal, Firebase, MongoDB, GCP, AWS.",
        ],
      },
      {
        title: "Libraries & Frameworks",
        organization: "Frameworks",
        bullets: [
          "React, Node.js, FastAPI, PyTorch, TensorFlow, NumPy, pandas, scikit-learn.",
        ],
      },
    ],
  },
];

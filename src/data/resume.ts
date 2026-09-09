export type ResumeSubEntry = {
  title: string;
  dates?: string;
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
        organization: "Carnegie Mellon University, Pittsburgh, PA",
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
        title: "Maximor",
        organization: "Software Engineer",
        dates: "June 2026 - Present",
        bullets: [
          "Joined as a Software Engineer Intern for summer 2026 and continued part-time during the school year, building the infrastructure behind production AI agents that automate accounting and finance workflows.",
        ],
        subEntries: [
          {
            title: "Software Engineer Intern",
            dates: "June 2026 - August 2026",
            bullets: [
              "Designed and deployed the company's first multi-agent system on Claude Managed Agents: a coordinator agent that delegates to subagents via cross-thread tool-call routing, replacing what had been separate Temporal workflows.",
              "Built the human-in-the-loop clarification system for agents in production: an answer/skip/rewind question lifecycle, durable persistence of agent runs and sessions, and a reviewer-facing UI.",
              "Wrote the managed-agent runtime behind it, which pauses live agent sessions at clarification tool calls, resumes them via Temporal, and stages session files to balance context delivery with performance.",
              "Served as a forward-deployed engineer on a ~8-person team for a $1M client, shipping customer-requested features and bug fixes across the product.",
            ],
          },
          {
            title: "Software Engineer (Part-Time)",
            dates: "August 2026 - Present",
            bullets: [
              "Revising and extending the production fleet of Claude Managed Agents, continuing work begun during the internship: rewriting system prompts, tightening tool schemas, reworking input framing, and debugging live agent runs to improve reliability and output quality.",
              "Designing the company's agent evaluation harness: regression evals that gate the migration of live customer workloads to newer models, plus orchestration tooling to run agents reproducibly.",
            ],
          },
        ],
      },
      {
        title: "Carnegie AI Safety Initiative (CASI)",
        organization: "Core Member & Researcher",
        dates: "September 2025 - Present",
        bullets: [
          "Studied transformers in depth through a technical AI safety reading group, covering mechanistic interpretability, RLHF, alignment techniques, and the fundamentals of modern ML research on LLM internals.",
          "Co-leading a 3-person research project on AI safety alignment robustness, producing empirical research; detailed under Research below.",
          "Help run club activities, and have attended AI safety and EA workshops through CASI.",
        ],
      },
      {
        title: "CMU Courses Backend",
        organization: "ScottyLabs Tech Team",
        dates: "September 2025 - June 2026",
        bullets: [
          "Built an automated Rust system that queries CMU APIs and recursively discovers related course resources.",
          "Wrote Python ETL pipelines to parse and normalize course data into Postgres and expose it through JSON and CSV endpoints.",
          "Rebuilt the web app in TypeScript and React using TanStack Router; the platform is used by thousands of CMU students.",
          "Worked directly with three other developers on my team to run CMU Courses, and collaborated with dozens of other SWEs at ScottyLabs to keep our products integrated and consistent.",
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
          "Working with a team of three CMU graduate and undergraduate students on how the loss-landscape geometry of aligned LLMs explains the catastrophic forgetting of safety under benign fine-tuning.",
          "Using RepE-extracted concept vectors and Hessian eigenvector analysis to show that safety concepts occupy lower-rank, higher-curvature subspaces than capability directions.",
          "Showing that benign fine-tuning updates preferentially project onto fragile safety directions, with representational rank and layer depth as independent fragility predictors.",
          "Building a framework that predicts DPO- versus PPO-trained models' alignment robustness from geometric properties, validated on HarmBench across Llama, Mistral, and Qwen; targeting ICLR 2027 workshops.",
        ],
      },
    ],
  },
  {
    id: "leadership",
    title: "Leadership Experience",
    entries: [
      {
        title: "Organizer & Sponsorship Lead",
        organization: "Los Altos Hacks",
        dates: "2021 - 2025",
        bullets: [
          "Organized the world's largest high-school hackathon from 2021 to 2025; personally raised $20,000+ in sponsorships by working closely with professionals across dozens of companies.",
          "Gave the opening and closing ceremony speeches to 1000+ attendees and mentored many new members of the organizing team.",
        ],
      },
      {
        title: "Senior VP",
        organization: "Computer Engineers of the Next Generation (CENG)",
        dates: "2022 - 2025",
        bullets: [
          "Managed 100+ volunteers teaching 24+ coding classes in Python, Java, and JavaScript to underserved schools, creating over $1M of impact.",
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

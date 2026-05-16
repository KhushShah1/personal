export type ResumeEntry = {
  title: string;
  organization: string;
  dates?: string;
  bullets: string[];
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
        dates: "Expected May 2028",
        bullets: [
          "Relevant classes: Machine Learning, Data Structures & Algorithms, Competition Programming, Computer Systems, Linear Algebra, Multivariable Calculus, Differential Equations.",
          "Focus areas: Machine Learning, Artificial Intelligence, Backend Systems, Data Structures & Algorithms.",
        ],
      },
      {
        title: "High School Diploma",
        organization: "Los Altos High School",
        bullets: [],
      },
    ],
  },
  {
    id: "technical-skills",
    title: "Technical Skills",
    entries: [
      {
        title: "Programming Languages",
        organization: "Languages",
        bullets: ["Python, Java, C++, C, C#, JavaScript, TypeScript, Rust."],
      },
      {
        title: "Developer Toolkit",
        organization: "Tools & Frameworks",
        bullets: [
          "PyTorch, NumPy, Pandas, React, Node.js, Flask, Express, Postgres, ORM, Unity, Git/GitHub.",
        ],
      },
      {
        title: "Machine Learning",
        organization: "ML",
        bullets: [
          "Implemented transformers from scratch; completed ARENA, a technical AI safety curriculum covering reinforcement learning, evaluations, interpretability, and alignment.",
          "Built working knowledge of LLM internals, attention, RLHF, and alignment techniques.",
        ],
      },
    ],
  },
  {
    id: "projects-research",
    title: "Projects & Research",
    entries: [
      {
        title: "Carnegie AI Safety Initiative",
        organization: "CASI",
        dates: "2025 - Present",
        bullets: [
          "Participated in a technical AI safety research reading group, studying fundamentals of ML papers and alignment techniques including transformers, mechanistic interpretability, and RLHF.",
          "Co-leading a 3-person research project on AI safety alignment robustness, producing empirical research.",
          "Used LAT-extracted RepE vectors and Hessian eigenvector analysis to show safety concepts occupy lower-rank, higher-curvature subspaces than capability directions.",
          "Showed benign fine-tuning preferentially aligns with fragile safety directions, with representational rank and layer depth as independent fragility predictors.",
          "Built a predictive framework ranking DPO versus PPO-RLHF alignment robustness by geometric properties, validated on HarmBench across LLaMA, Mistral, and Qwen.",
        ],
      },
      {
        title: "CMU Courses Backend",
        organization: "ScottyLabs Tech Team",
        dates: "2025 - Present",
        bullets: [
          "Built an automated Rust system to query CMU APIs and recursively discover related course resources.",
          "Wrote Python ETL to parse and normalize data while maintaining Postgres schema and records.",
          "Exposed processed datasets to the frontend through structured JSON and CSV endpoints.",
          "Rebuilt the web app in TypeScript and React using TanStack Router; the platform is used by hundreds of CMU students.",
        ],
      },
      {
        title: "Stock Price Forecasting Model",
        organization: "UC Davis COSMOS",
        dates: "July 2024",
        bullets: [
          "Implemented ML models from scratch in Python using only NumPy, deriving forward and backpropagation manually from calculus and linear algebra primitives.",
          "Led a 5-person team supervised-fine-tuning sentiment-analysis models for stock-price forecasting; outperformed baselines and presented results at the COSMOS Showcase.",
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
        bullets: [
          "Organized the world's largest high-school hackathon and raised $15K+ in sponsorships.",
          "Gave speeches to 1,000+ students and mentored many new members.",
        ],
      },
      {
        title: "Senior VP",
        organization: "Computer Engineers of the Next Generation (CENG)",
        bullets: [
          "Managed 100+ volunteers teaching 24+ coding classes in Python, Java, and JavaScript to underserved schools.",
          "Earned the Presidential Volunteer Service Award for 200+ service hours in a single year.",
        ],
      },
    ],
  },
];

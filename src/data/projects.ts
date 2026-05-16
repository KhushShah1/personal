export type ProjectSize = "wide" | "tall" | "small";

export type ProjectMotif = "orbit" | "mesh" | "terminal" | "blocks" | "chart";

export type Project = {
  organization: string;
  name: string;
  role: string;
  dates: string;
  href: string;
  subCaption: string;
  longDescription: string[];
  size: ProjectSize;
  motif: ProjectMotif;
};

export const projects: Project[] = [
  {
    organization: "CASI",
    name: "Carnegie AI Safety Initiative",
    role: "Core Member",
    dates: "September 2025 - present",
    href: "https://cmuaisafety.com",
    subCaption:
      "Core member and researcher at CMU's largest AI research club, helping raise awareness about AI safety and improve AI literacy.",
    longDescription: [
      "I participated in a technical AI safety research reading group studying transformers, mechanistic interpretability, and all the basics needed to understand the frontier of AI Safety research.",
      "I co-lead a 3-person research project on AI safety alignment robustness, producing empirical research.",
      "I also help run club activities, and through CASI I have attended AI safety and EA workshops.",
    ],
    size: "wide",
    motif: "orbit",
  },
  {
    organization: "Research Paper",
    name: "Geometric Framework for LLM Safety Fragility",
    role: "Researcher",
    dates: "March 2026 - present",
    href: "https://cmuaisafety.com",
    subCaption:
      "Preparing a paper on why safety-training techniques vary in robustness, targeting ICLR 2027.",
    longDescription: [
      "This project uses LAT-extracted RepE vectors and Hessian eigenvector analysis to show that safety concepts occupy lower-rank, higher-curvature subspaces than capability directions. It builds a predictive framework ranking DPO versus PPO-RLHF alignment robustness and validates the framework on HarmBench across LLaMA, Mistral, and Qwen.",
    ],
    size: "wide",
    motif: "mesh",
  },
  {
    organization: "ScottyLabs",
    name: "CMU Courses",
    role: "Full-Stack Engineer",
    dates: "September 2025 - present",
    href: "https://courses.scottylabs.org",
    subCaption:
      "Working with dozens of SWEs in a large tech org, focused on one major product with three teammates on my direct team.",
    longDescription: [
      "I built an automated Rust system to query CMU APIs and recursively discover related course resources. I wrote Python ETL to parse and normalize data into Postgres, then rebuilt the web app in TypeScript and React with TanStack Router for a platform used by hundreds of CMU students.",
    ],
    size: "tall",
    motif: "terminal",
  },
  {
    organization: "ARENA",
    name: "Technical AI Safety Curriculum",
    role: "Student",
    dates: "February 2026",
    href: "https://arena.education",
    subCaption:
      "Studied transformer and LLM fundamentals in depth, gaining an even deeper understanding of transformer models through hands-on work.",
    longDescription: [
      "I completed ARENA, a technical AI safety curriculum covering reinforcement learning, evaluations, interpretability, and alignment.",
      "I implemented transformers from scratch and built a working knowledge of LLM internals, attention, RLHF, and alignment techniques.",
    ],
    size: "small",
    motif: "blocks",
  },
  {
    organization: "UC Davis COSMOS",
    name: "Stock Price Forecasting Model",
    role: "Team Leader",
    dates: "July 2024 - August 2024",
    href: "https://cosmos-ucop.ucdavis.edu",
    subCaption:
      "Took an intro ML class and fine-tuned LLaMA-3-8B for news sentiment analysis as a stock-price forecasting model.",
    longDescription: [
      "I learnt the fundamentals of machine learning through many hands-on projects alongside lectures in an introduction to ML course.",
      "I implemented various ml models from scratch in Python using only NumPy, deriving forward/backprop manually from calculus and linear algebra primitives. I also worked on models of various different algorithm types, learning paradigms, and architectures, gaining a lot of experience through many hands-on projects.",
      "I led a 5-person team in supervised-fine-tuning LLMs on sentiment-analysis for stock-price forecasting, outperforming baselines and presenting at the end of summer COSMOS Showcase.",
    ],
    size: "wide",
    motif: "chart",
  },
];

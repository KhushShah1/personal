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
    organization: "Maximor",
    name: "Agentic AI Infrastructure",
    role: "Software Engineer",
    dates: "June 2026 - present",
    href: "https://maximor.ai",
    subCaption:
      "Building the infrastructure behind production AI agents that automate accounting and finance workflows for enterprise finance teams.",
    longDescription: [
      "I designed and deployed the company's first multi-agent system on Claude Managed Agents, with a coordinator agent delegating to subagents via cross-thread tool-call routing.",
      "I built the human-in-the-loop clarification system and the generic managed-agent runtime powering all of our production agents - pausing live sessions at clarification tool calls, resuming them via Temporal, and durably persisting agent runs and sessions.",
      "I'm now focused on designing our agent evaluation harness: regression evals gating the migration of live customer workloads to newer models, plus orchestration tooling to run agents reproducibly. Earlier on, I also shipped customer-requested features and fixes as a forward-deployed engineer.",
    ],
    size: "wide",
    motif: "terminal",
  },
  {
    organization: "CASI",
    name: "Carnegie AI Safety Initiative",
    role: "Core Member",
    dates: "September 2025 - present",
    href: "https://cmuaisafety.com",
    subCaption:
      "Core member and researcher at CMU's largest AI research club, helping raise awareness about AI safety and improve AI literacy.",
    longDescription: [
      "I studied transformers in depth through a technical AI safety reading group, covering mechanistic interpretability, RLHF, alignment techniques, and the fundamentals of modern ML research on LLM internals.",
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
    dates: "April 2026 - present",
    href: "https://cmuaisafety.com",
    subCaption:
      "Writing a paper on why LLM safety-alignment is geometrically fragile under benign fine tuning. Targeting ICLR 2027 workshops.",
    longDescription: [
      "I'm working with a team of 3 CMU graduate and undergraduate students on a research project exploring how the loss-landscape geometry of aligned LLMs explains the catastrophic forgetting of safety under benign fine-tuning.",
      "We use RepE-extracted concept vectors and Hessian eigenvector analysis to show that safety concepts occupy lower-rank, higher-curvature subspaces than capability directions. We plan to show that benign fine-tuning updates preferentially project onto these fragile safety directions, which is the reason why extreme catastrophic forgetting of safety training occurs.",
      "This project will build a framework that predicts DPO- versus PPO-trained models' alignment robustness from geometric properties, validated on HarmBench across various models (Llama, Mistral, and Qwen).",
    ],
    size: "tall",
    motif: "mesh",
  },
  {
    organization: "ScottyLabs",
    name: "CMU Courses",
    role: "Full-Stack Engineer",
    dates: "September 2025 - June 2026",
    href: "https://courses.scottylabs.org",
    subCaption:
      "Worked with dozens of SWEs in a large tech org, focused on one major product with three teammates on my direct team.",
    longDescription: [
      "I was one of the main developers on CMU Courses, a website used by thousands of CMU students.",
      "I built an automated Rust system to query CMU APIs and recursively discover related course resources, wrote Python ETL to parse and normalize data into Postgres, and then rebuilt the web app in TypeScript and React with TanStack Router.",
      "I worked directly with three other developers on my team to collectively run CMU Courses, and also collaborated with dozens of other SWEs at ScottyLabs to ensure all our products were well-integrated and consistent with one another.",
    ],
    size: "tall",
    motif: "terminal",
  },
  {
    organization: "UC Davis COSMOS",
    name: "Stock Price Forecasting Model",
    role: "Team Leader",
    dates: "July 2024 - August 2024",
    href: "https://cosmos-ucop.ucdavis.edu",
    subCaption:
      "Took an intro ML class and fine-tuned Llama-3-8B for news sentiment analysis as a stock-price forecasting model.",
    longDescription: [
      "I learnt the fundamentals of machine learning through many hands-on projects alongside lectures in an introduction to ML course.",
      "I implemented various ml models from scratch in Python using only NumPy, deriving forward/backprop manually from calculus and linear algebra primitives. I also worked on models of various different algorithm types, learning paradigms, and architectures, gaining a lot of experience through many hands-on projects.",
      "I led a 5-person team in supervised-fine-tuning LLMs on sentiment-analysis for stock-price forecasting, outperforming baselines and presenting at the end of summer COSMOS Showcase.",
    ],
    size: "small",
    motif: "chart",
  },
];

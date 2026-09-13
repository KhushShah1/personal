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
      "Completed the full ARENA (Alignment Research Engineer Accelerator) curriculum, implementing transformers, interpretability tooling, RL algorithms, and LLM evals from scratch.",
    longDescription: [
      "I completed ARENA, a technical AI safety course spanning fundamentals, transformer interpretability, reinforcement learning, LLM evaluations, and alignment science.",
      "I built a GPT-style transformer from scratch with autoregressive sampling, then used TransformerLens to locate induction heads and trace circuits in GPT-2, and worked through superposition, sparse autoencoders, and steering vectors.",
      "On the RL side I implemented DQN and PPO agents and then RLHF on a transformer. For evals I designed model-written multiple-choice benchmarks, ran them with Inspect, and built and elicited LLM agents, before finishing with the alignment science chapter on emergent misalignment and LLM psychology.",
    ],
    size: "small",
    motif: "blocks",
  },
  {
    organization: "Maximor",
    name: "Agentic AI Infrastructure @ Maximor",
    role: "Software Engineer",
    dates: "June 2026 - present",
    href: "https://maximor.ai",
    subCaption:
      "Building the infrastructure behind production AI agents that automate accounting and finance workflows for enterprise finance teams.",
    longDescription: [
      "Maximor builds AI agents that automate accounting and finance work for enterprise finance teams. I joined the revenue module as a Software Engineer Intern in June 2026 and stayed part-time through the school year.",
      "I designed and deployed the company's first multi-agent system on Claude Managed Agents: a coordinator delegating to subagents, on a multi-threaded runtime that routes each tool call back to the instance that issued it, replacing separate Temporal workflows.",
      "I built the human-in-the-loop clarification system our production agents use: questions are schema-validated with Pydantic and shown in a reviewer UI with answer, skip, and rewind. The API can't rewind, so I built it by spawning a fresh session and rebuilding context. Runs persist durably and resume via Temporal.",
      "I was also a forward-deployed engineer on a 6-person team that generated $2M in revenue, shipping features and fixes such as a Salesforce integration for our contract parser, an invoicing-schedule dashboard, and more features.",
      "Now I'm rebuilding how our agents work: customer policies lived in deterministic Temporal workflows rewritten per customer, which didn't scale or catch edge cases. Instead, the harness we're building lets the agent do the accounting work itself. Each run is seeded with a tree of the contract's orders, arrangements, schedules, and source documents, as well as accounting policy in multiple layers, instead of just raw text sent alongside a frozen system prompt.",
      "The agent drafts the revenue setup as schema-validated JSON in its sandbox, runs the same verifier the server runs, and submits in one transaction, all with one human reviewer at the end. I'm also working to build evals for our whole system so we can compare different models and know when moving live customers to newer models is actually proven to help.",
    ],
    size: "wide",
    motif: "terminal",
  },
  {
    organization: "CASI",
    name: "Research @ Carnegie AI Safety Initiative",
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
      "I built an automated Rust system to query CMU APIs and recursively discover related course resources, wrote Python ETL to parse and normalize data into Postgres and expose it via JSON and CSV endpoints, and then rebuilt the web app in TypeScript and React with TanStack Router.",
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

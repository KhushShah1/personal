export type ResumeItem = {
  category: string;
  organization: string;
  name: string;
  description: string;
};

export const resumeItems: ResumeItem[] = [
  {
    category: "Intro",
    organization: "LinkedIn",
    name: "Khush Shah",
    description:
      "CS + Math @ CMU. Based in the United States. 211 connections. U.S. Citizen, fully work authorized.",
  },
  {
    category: "Education",
    organization: "Carnegie Mellon University",
    name: "B.S. in Computer Science & Mathematics",
    description:
      "Expected May 2028. Relevant classes: Machine Learning, Data Structures & Algorithms, Competition Programming, Computer Systems, Linear Algebra, Multivariable Calculus, Differential Equations. Focus: ML, AI, Backend Systems, DSA.",
  },
  {
    category: "Education",
    organization: "Los Altos High School",
    name: "High School Diploma",
    description: "Graduated June 2025.",
  },
  {
    category: "Skills",
    organization: "Languages",
    name: "Programming Languages",
    description: "Python, Java, C++, C, C#, JavaScript, TypeScript, Rust.",
  },
  {
    category: "Skills",
    organization: "Tools & Frameworks",
    name: "Developer Toolkit",
    description:
      "PyTorch, NumPy, Pandas, React, Node.js, Flask, Express, Postgres, ORM, Unity, Git/GitHub.",
  },
  {
    category: "Skills",
    organization: "Machine Learning",
    name: "ML Expertise",
    description:
      "Implemented transformers from scratch; completed ARENA (technical AI Safety curriculum covering RL, evals, interpretability, and alignment); working knowledge of LLM internals, attention, RLHF, and alignment techniques.",
  },
  {
    category: "Experience",
    organization: "Carnegie AI Safety Initiative (CASI)",
    name: "Research Member",
    description:
      "2025–Present. Participated in a technical AI safety research reading group studying fundamentals of ML papers and alignment techniques (transformers in depth, mechanistic interpretability, RLHF, etc.). Co-leading a 3-person research project on AI safety alignment robustness, producing empirical research.",
  },
  {
    category: "Research",
    organization: "CASI",
    name: "Geometric Framework for Predicting Fragility of LLM Safety Training Methods",
    description:
      "Used LAT-extracted RepE vectors and Hessian eigenvector analysis to show safety concepts occupy lower-rank, higher-curvature subspaces than capability directions. Showed benign fine-tuning preferentially aligns with fragile safety directions. Built a predictive framework ranking DPO vs PPO-RLHF alignment robustness by geometric properties, validated on HarmBench across LLaMA, Mistral, and Qwen.",
  },
  {
    category: "Experience",
    organization: "ScottyLabs Tech Team",
    name: "CMU Courses Backend",
    description:
      "2025–Present. Built an automated Rust system to query CMU APIs and recursively discover related course resources. Wrote Python ETL to parse/normalize data and maintain Postgres schema + records. Exposed processed datasets to the frontend through structured JSON and CSV endpoints. Rebuilt the web app in TypeScript + React using TanStack Router; platform used by 100s of CMU students.",
  },
  {
    category: "Experience",
    organization: "UC Davis COSMOS",
    name: "Stock Price Forecasting Model (Team Lead)",
    description:
      "July 2024. Implemented neural networks from scratch in Python using only NumPy, deriving forward/backprop manually from calculus and linear algebra primitives. Led a 5-person team supervised-fine-tuning sentiment-analysis models for stock-price forecasting; outperformed baselines and presented results at the COSMOS Showcase.",
  },
  {
    category: "Leadership",
    organization: "Los Altos Hacks",
    name: "Organizer & Sponsorship Lead",
    description:
      "2021–2025. Organized the world's largest high-school hackathon. Raised $15K+ in sponsorships. Gave speeches to 1000+ students and mentored many new members.",
  },
  {
    category: "Leadership",
    organization: "Computer Engineers of the Next Generation (CENG)",
    name: "Senior Vice President",
    description:
      "2022–2025. Managed 100+ volunteers teaching 24+ coding classes (Python, Java, JS) to underserved schools.",
  },
  {
    category: "Volunteer",
    organization: "Teen Tutoring",
    name: "Tutor",
    description:
      "Tutored local students across math, coding, and science fundamentals, building curriculum and running 1-on-1 sessions.",
  },
  {
    category: "Experience",
    organization: "T²",
    name: "Work Experience",
    description:
      "Worked at T² gaining hands-on engineering and operations experience, contributing alongside a small team.",
  },
  {
    category: "Honors",
    organization: "Points of Light",
    name: "Presidential Volunteer Service Award",
    description:
      "Earned the Presidential Volunteer Service Award for 200+ service hours in a single year through CENG.",
  },
];

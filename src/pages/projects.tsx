import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import InformationCard from "@/components/InformationCard";

const projects = [
  {
    organization: "CASI",
    name: "Carnegie AI Safety Initiative",
    description:
      "Technical AI safety research reading group studying transformers, mechanistic interpretability, and RLHF. Co-leading a 3-person research project on AI safety alignment robustness, producing empirical research.",
    large: true,
  },
  {
    organization: "Research Paper",
    name: "Geometric Framework for LLM Safety Fragility",
    description:
      "Uses LAT-extracted RepE vectors and Hessian eigenvector analysis to show safety concepts occupy lower-rank, higher-curvature subspaces than capability directions. Builds a predictive framework ranking DPO vs PPO-RLHF alignment robustness, validated on HarmBench across LLaMA, Mistral, and Qwen.",
    large: true,
  },
  {
    organization: "ScottyLabs",
    name: "CMU Courses",
    description:
      "Built an automated Rust system to query CMU APIs and recursively discover related course resources. Wrote Python ETL to parse/normalize data into Postgres and rebuilt the web app in TypeScript + React with TanStack Router. Used by 100s of CMU students.",
    large: true,
  },
  {
    organization: "ARENA",
    name: "Technical AI Safety Curriculum",
    description:
      "Completed ARENA, a technical AI Safety curriculum covering RL, evals, interpretability, and alignment. Implemented transformers from scratch and built working knowledge of LLM internals, attention, RLHF, and alignment techniques.",
    large: false,
  },
  {
    organization: "UC Davis COSMOS",
    name: "Stock Price Forecasting Model",
    description:
      "Led a 5-person team supervised-fine-tuning sentiment-analysis models for stock-price forecasting, outperforming baselines and presenting at the COSMOS Showcase. Implemented neural networks from scratch in NumPy, deriving forward/backprop manually.",
    large: false,
  },
  {
    organization: "Toolkit",
    name: "Skills",
    description:
      "Languages: Python, Java, C++, C, C#, JavaScript, TypeScript, Rust. Tools & Frameworks: PyTorch, NumPy, Pandas, React, Node.js, Flask, Express, Postgres, ORM, Unity, Git/GitHub. Focus areas: Machine Learning, AI, Backend Systems, DSA.",
    large: false,
  },
];

export default function Projects() {
  return (
    <Layout>
      <PageHeader
        title="projects"
        description="I love building things, and I have a lot of projects. Here are some of the ones I'm most proud of, spanning research, software development, and more."
      />
      <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, i) => (
          <InformationCard
            key={project.name}
            organization={project.organization}
            name={project.name}
            description={project.description}
            large={project.large}
            delay={i * 50}
          />
        ))}
      </div>
    </Layout>
  );
}

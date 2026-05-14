import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import InformationCard from "@/components/InformationCard";
import CardGrid from "@/components/CardGrid";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Layout>
      <PageHeader
        title="projects"
        description="I love building things, and I have a lot of projects. Here are some of the ones I'm most proud of, spanning research, software development, and more."
      />
      <CardGrid>
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
      </CardGrid>
    </Layout>
  );
}

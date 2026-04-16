import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import InformationCard from "@/components/InformationCard";

const projects = [
  { organization: "Organization A", name: "Project Alpha", large: true },
  { organization: "Organization B", name: "Project Beta", large: true },
  { organization: "Organization C", name: "Project Charlie", large: true },
  { organization: "Organization D", name: "Project Delta", large: false },
  { organization: "Organization E", name: "Project Echo", large: false },
  { organization: "Organization F", name: "Project Foxtrot", large: false },
  { organization: "Organization G", name: "Project Golf", large: true },
  { organization: "Organization H", name: "Project Hotel", large: false },
  { organization: "Organization I", name: "Project India", large: false },
  { organization: "Organization J", name: "Project Juliet", large: false },
  { organization: "Organization K", name: "Project Kilo", large: true },
  { organization: "Organization L", name: "Project Lima", large: false },
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
            large={project.large}
            hasLink={project.name !== "Project Kappa"}
            delay={i * 50}
          />
        ))}
      </div>
    </Layout>
  );
}

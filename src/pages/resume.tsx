import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import InformationCard from "@/components/InformationCard";
import CardGrid from "@/components/CardGrid";
import { resumeItems } from "@/data/resume";

export default function Resume() {
  return (
    <Layout>
      <PageHeader
        title="resume"
        description="An online version of my Resume: A detailed overview of my academic and extracurricular activities, including research, projects, leadership roles, and more."
      />
      <CardGrid>
        {resumeItems.map((item, i) => (
          <InformationCard
            key={item.name}
            organization={item.organization}
            name={item.name}
            description={item.description}
            category={item.category}
            delay={i * 50}
          />
        ))}
      </CardGrid>
    </Layout>
  );
}

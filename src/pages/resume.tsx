import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import InformationCard from "@/components/InformationCard";
import { resumeItems } from "@/data/resume";

export default function Resume() {
  return (
    <Layout>
      <PageHeader
        title="resume"
        description="An online version of my Resume: A detailed overview of my academic and extracurricular activities, including research, projects, leadership roles, and more."
      />
      <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      </div>
    </Layout>
  );
}

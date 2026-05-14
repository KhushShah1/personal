import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import InformationCard from "@/components/InformationCard";
import CardGrid from "@/components/CardGrid";
import { leadership } from "@/data/leadership";

export default function Leadership() {
  return (
    <Layout>
      <PageHeader
        title="leadership"
        description="A showcase of my leadership roles and experiences, highlighting the impact I've made in various organizations and initiatives."
      />
      <CardGrid>
        {leadership.map((post, i) => (
          <InformationCard
            key={post.name}
            organization={post.organization}
            name={post.name}
            description={post.description}
            category="Leadership"
            delay={i * 50}
          />
        ))}
      </CardGrid>
    </Layout>
  );
}

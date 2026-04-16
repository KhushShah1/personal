import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import InformationCard from "@/components/InformationCard";

const posts = [
  { organization: "Organization A", name: "Position A", description: "What I did A." },
  { organization: "Organization B", name: "Position B", description: "What I did B." },
  { organization: "Organization C", name: "Position C", description: "What I did C." },
  { organization: "Organization D", name: "Position D", description: "What I did D." },
  { organization: "Organization E", name: "Position E", description: "What I did E." },
  { organization: "Organization F", name: "Position F", description: "What I did F." },
  { organization: "Organization G", name: "Position G", description: "What I did G." },
  { organization: "Organization H", name: "Position H", description: "What I did H." },
  { organization: "Organization I", name: "Position I", description: "What I did I." },
  { organization: "Organization J", name: "Position J", description: "What I did J." },
  { organization: "Organization K", name: "Position K", description: "What I did K." },
];

export default function Leadership() {
  return (
    <Layout>
      <PageHeader
        title="leadership"
        description="A showcase of my leadership roles and experiences, highlighting the impact I've made in various organizations and initiatives."
      />
      <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post, i) => (
          <InformationCard
            key={post.name}
            organization={post.organization}
            name={post.name}
            description={post.description}
            category="Leadership"
            delay={i * 50}
          />
        ))}
      </div>
    </Layout>
  );
}

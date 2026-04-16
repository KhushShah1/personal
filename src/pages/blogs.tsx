import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import InformationCard from "@/components/InformationCard";

const items = [
  { organization: "Topic A", name: "Blog Title A", description: "Blog A." },
  { organization: "Topic B", name: "Blog Title B", description: "Blog B." },
  { organization: "Topic C", name: "Blog Title C", description: "Blog C." },
  { organization: "Topic D", name: "Blog Title D", description: "Blog D." },
  { organization: "Topic E", name: "Blog Title E", description: "Blog E." },
  { organization: "Topic F", name: "Blog Title F", description: "Blog F." },
  { organization: "Topic G", name: "Blog Title G", description: "Blog G." },
  { organization: "Topic H", name: "Blog Title H", description: "Blog H." },
  { organization: "Topic I", name: "Blog Title I", description: "Blog I." },
  { organization: "Topic J", name: "Blog Title J", description: "Blog J." },
  { organization: "Topic K", name: "Blog Title K", description: "Blog K." },
];

export default function Blogs() {
  return (
    <Layout>
      <PageHeader
        title="blogs"
        description="My thoughts on AI, research, and other cool stuff. A mix of technical deep-dives, personal reflections, and everything in between."
      />
      <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item, i) => (
          <InformationCard
            key={`${item.name}-${i}`}
            organization={item.organization}
            name={item.name}
            description={item.description}
            category="Blogs"
            delay={i * 50}
          />
        ))}
      </div>
    </Layout>
  );
}

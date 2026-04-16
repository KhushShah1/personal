import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import InformationCard from "@/components/InformationCard";

const items = [
  { organization: "Organization A", name: "Activity A", description: "Description A." },
  { organization: "Organization B", name: "Activity B", description: "Description B." },
  { organization: "Organization C", name: "Activity C", description: "Description C." },
  { organization: "Organization D", name: "Activity D", description: "Description D." },
  { organization: "Organization E", name: "Activity E", description: "Description E." },
  { organization: "Organization F", name: "Activity F", description: "Description F." },
  { organization: "Organization G", name: "Activity G", description: "Description G." },
  { organization: "Organization H", name: "Activity H", description: "Description H." },
  { organization: "Organization I", name: "Activity I", description: "Description I." },
  { organization: "Organization J", name: "Activity J", description: "Description J." },
  { organization: "Organization K", name: "Activity K", description: "Description K." },
  { organization: "Organization L", name: "Activity L", description: "Description L." },
  { organization: "Organization M", name: "Activity M", description: "Description M." },
  { organization: "Organization N", name: "Activity N", description: "Description N." },
  { organization: "Organization O", name: "Activity O", description: "Description O." },
  { organization: "Organization P", name: "Activity P", description: "Description P." },
  { organization: "Organization Q", name: "Activity Q", description: "Description Q." },
  { organization: "Organization R", name: "Activity R", description: "Description R." },
  { organization: "Organization S", name: "Activity S", description: "Description S." },
  { organization: "Organization T", name: "Activity T", description: "Description T." },
  { organization: "Organization U", name: "Activity U", description: "Description U." },
  { organization: "Organization V", name: "Activity V", description: "Description V." },
];

export default function Resume() {
  return (
    <Layout>
      <PageHeader
        title="resume"
        description="An online version of my Resume: A detailed overview of my academic and extracurricular activities, including research, projects, leadership roles, and more."
      />
      <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item, i) => (
          <InformationCard
            key={item.name}
            organization={item.organization}
            name={item.name}
            description={item.description}
            category="Resume"
            delay={i * 50}
          />
        ))}
      </div>
    </Layout>
  );
}

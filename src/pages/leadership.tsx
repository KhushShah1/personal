import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import InformationCard from "@/components/InformationCard";

const posts = [
  {
    organization: "Los Altos Hacks",
    name: "Organizer & Sponsorship Lead",
    description:
      "Organized the world's largest high-school hackathon from 2021–2025. Raised $15K+ in sponsorships, gave speeches to 1000+ students, and mentored many new members.",
  },
  {
    organization: "CENG",
    name: "Senior Vice President",
    description:
      "Senior VP of Computer Engineers of the Next Generation (2022–2025). Managed 100+ volunteers teaching 24+ coding classes (Python, Java, JS) to underserved schools.",
  },
  {
    organization: "Teen Tutoring",
    name: "Tutor",
    description:
      "Tutored local students across math, coding, and science fundamentals, building curriculum and running 1-on-1 sessions to help them level up.",
  },
  {
    organization: "T²",
    name: "Work Experience",
    description:
      "Worked at T² gaining hands-on engineering and operations experience, contributing to day-to-day execution alongside a small team.",
  },
  {
    organization: "Presidential Service",
    name: "Presidential Volunteer Service Award",
    description:
      "Earned the Presidential Volunteer Service Award for logging 200+ hours of community service in a single year.",
  },
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

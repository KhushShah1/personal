import { useState, useEffect, useRef, useCallback } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import CarouselButton from "@/components/CarouselButton";
import InlineLink from "@/components/InlineLink";
import { leadership } from "@/data/leadership";
import { projects } from "@/data/projects";
import { resumeSections } from "@/data/resume";

const CYCLE_MS = 5_000;
const FADE_MS = 400;

const educationSection = resumeSections.find((section) => section.id === "education");
const technicalSkillsSection = resumeSections.find(
  (section) => section.id === "technical-skills",
);
const cmuEducation = educationSection?.entries.find(
  (entry) => entry.organization === "Carnegie Mellon University",
);
const otherEducation = educationSection?.entries.filter(
  (entry) => entry.organization !== "Carnegie Mellon University",
);

const items = [
  {
    category: "Resume",
    organization: "Education",
    name: "Carnegie Mellon University",
    description: [
      [cmuEducation?.title, cmuEducation?.dates]
        .filter(Boolean)
        .join(". "),
      ...(cmuEducation?.bullets ?? []),
      ...(otherEducation?.map((entry) =>
        [entry.organization, entry.title, entry.dates, ...entry.bullets]
          .filter(Boolean)
          .join(". "),
      ) ?? []),
    ],
    href: "/resume",
  },
  {
    category: "Resume",
    organization: "Technical Skills",
    name: "Languages, tools, and ML",
    description:
      technicalSkillsSection?.entries
        .map((entry) => [entry.organization, ...entry.bullets].join(": ")) ?? [],
    href: "/resume",
  },
  ...projects.map((project) => ({
    category: "Project",
    organization: project.organization,
    name: project.name,
    description: project.longDescription,
    href: "/projects",
  })),
  ...leadership.map((post) => ({
    category: "Leadership",
    organization: post.organization,
    name: post.name,
    description: post.longDescription,
    href: "/leadership",
  })),
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const fadingRef = useRef(false);

  const goTo = useCallback((direction: number) => {
    if (fadingRef.current) return;
    fadingRef.current = true;
    setFading(true);
    setTimeout(() => {
      setIndex((i) => (i + direction + items.length) % items.length);
      setFading(false);
      fadingRef.current = false;
    }, FADE_MS);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => goTo(1), CYCLE_MS);
    return () => clearTimeout(timer);
  }, [index, goTo]);

  const current = items[index];

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="px-1 pb-2 animate-card">
          <div className="h-full w-full px-4 pt-6 sm:px-8 sm:pt-6">
            <h1 className="font-serif-variation font-serif text-2xl font-light !leading-tight text-warm-600 sm:text-3xl lg:text-4xl">
              ✰ 𝙝𝙚𝙡𝙡𝙤<span className="font-medium">!</span> ✰ I&apos;m{" "}
              <span className="text-warm-900">Khush</span>, and this is my{" "}
              <span className="text-warm-900">personal website 👾</span>
              <br />
              <br />
              I&apos;m a <span className="text-warm-900">CS and Math</span>{" "}
              student from the bay 🌉 studying at{" "}
              <span className="text-warm-900">Carnegie Mellon</span>, and
              I&apos;m super into{" "}
              <span className="text-warm-900">ML research</span> and building
              cool things.
              <br />
              <br />
              Alongside some other stuff, I love fiddling around with technical{" "}
              <span className="text-warm-900">AI Safety research</span> 📝 and
              I&apos;m currently working to publish some stuff at{" "}
              <InlineLink href="https://cmuaisafety.com" color="sky" external>
                CASI
              </InlineLink>
              . I also help run{" "}
              <InlineLink href="https://cmucourses.com" color="orange" external>
                CMU Courses
              </InlineLink>{" "}
              at{" "}
              <InlineLink href="https://scottylabs.org" color="purple" external>
                ScottyLabs
              </InlineLink>
              , and try to get up to a bunch more{" "}
              <InlineLink href="/projects" color="lime">
                cool stuff
              </InlineLink>
              .
            </h1>
          </div>
        </div>

        <div className="px-4 pt-2 pb-10 sm:pb-[10px]">
          <div className="relative aspect-square sm:aspect-auto sm:h-[calc(100vh-130px)]">
            <CarouselButton direction="prev" onClick={() => goTo(-1)} />
            <CarouselButton direction="next" onClick={() => goTo(1)} />
            <Card
              category={current.category}
              organization={current.organization}
              name={current.name}
              description={current.description}
              href={current.href}
              fading={fading}
              headerSize="base"
              delay={50}
              footer={
                <div
                  key={index}
                  style={{ animationDuration: `${CYCLE_MS}ms` }}
                  className="h-0.5 bg-warm-800 animate-progress"
                />
              }
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

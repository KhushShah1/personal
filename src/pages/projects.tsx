import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Project, projects } from "@/data/projects";

const sizeClass: Record<Project["size"], string> = {
  hero: "md:col-span-2 md:row-span-2 min-h-[24rem]",
  wide: "md:col-span-2 min-h-[18rem]",
  tall: "md:row-span-2 min-h-[24rem]",
  small: "min-h-[18rem]",
};

function ProjectMotif({ motif }: { motif: Project["motif"] }) {
  if (motif === "orbit") {
    return (
      <svg viewBox="0 0 260 220" className="absolute right-[-20%] bottom-[-12%] h-64 w-72 text-sky-300/40">
        <circle cx="130" cy="110" r="68" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="130" cy="110" r="104" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="192" cy="82" r="11" fill="currentColor" />
        <path d="M48 150C96 92 160 70 228 86" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  if (motif === "mesh") {
    return (
      <svg viewBox="0 0 260 220" className="absolute right-[-18%] bottom-[-8%] h-64 w-72 text-sky-300/40">
        <path d="M34 168 92 54l74 42 58-36-24 118-94-28z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="92" cy="54" r="7" fill="currentColor" />
        <circle cx="166" cy="96" r="7" fill="currentColor" />
        <circle cx="224" cy="60" r="7" fill="currentColor" />
        <circle cx="200" cy="178" r="7" fill="currentColor" />
        <circle cx="106" cy="150" r="7" fill="currentColor" />
        <circle cx="34" cy="168" r="7" fill="currentColor" />
      </svg>
    );
  }

  if (motif === "terminal") {
    return (
      <svg viewBox="0 0 260 220" className="absolute right-[-20%] bottom-[-10%] h-64 w-72 text-sky-300/40">
        <rect x="34" y="42" width="192" height="136" rx="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M34 76h192M70 116l28 22-28 22M116 158h64" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="58" cy="59" r="5" fill="currentColor" />
        <circle cx="78" cy="59" r="5" fill="currentColor" />
        <circle cx="98" cy="59" r="5" fill="currentColor" />
      </svg>
    );
  }

  if (motif === "blocks") {
    return (
      <svg viewBox="0 0 260 220" className="absolute right-[-18%] bottom-[-12%] h-64 w-72 text-sky-300/40">
        <rect x="56" y="58" width="54" height="54" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="124" y="58" width="54" height="54" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="90" y="126" width="54" height="54" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="158" y="126" width="54" height="54" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 260 220" className="absolute right-[-18%] bottom-[-10%] h-64 w-72 text-sky-300/40">
      <path d="M44 168h176M68 146l34-42 42 24 48-70" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="58" y="128" width="20" height="40" rx="5" fill="currentColor" />
      <rect x="102" y="102" width="20" height="66" rx="5" fill="currentColor" />
      <rect x="146" y="116" width="20" height="52" rx="5" fill="currentColor" />
      <rect x="190" y="72" width="20" height="96" rx="5" fill="currentColor" />
    </svg>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProject]);

  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <PageHeader
        title="projects"
        kicker="a record of building things"
        accentClass="text-sky-700"
        accentLineClass="bg-sky-500"
        description="Research, software, and technical experiments that turned into real systems, papers, and working products."
      />
      <section className="grid auto-rows-[minmax(18rem,auto)] grid-cols-1 gap-3 pb-16 md:grid-cols-3">
        {projects.map((project, i) => (
          <button
            key={project.name}
            type="button"
            onClick={() => setActiveProject(project)}
            style={{ animationDelay: `${i * 55}ms` }}
            className={`group relative isolate flex overflow-hidden rounded-lg border border-sky-950/10 bg-warm-100 p-6 text-left shadow-skeuo transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 animate-card ${sizeClass[project.size]}`}
          >
            <ProjectMotif motif={project.motif} />
            <div className="relative z-10 flex h-full min-h-0 w-full flex-col justify-between">
              <div className="flex items-start justify-between gap-4 text-sm tracking-tight text-warm-600">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-800">
                  {project.organization}
                </span>
                <span className="text-right">{project.dates}</span>
              </div>
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-sky-700">
                  {project.role}
                </p>
                <h2 className="font-serif-variation font-serif text-3xl font-light leading-tight text-warm-900 md:text-4xl">
                  {project.name}
                </h2>
                <p className="mt-5 max-w-xl translate-y-4 text-base leading-relaxed tracking-tight text-warm-700 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  {project.subCaption}
                </p>
              </div>
            </div>
          </button>
        ))}
      </section>
      {activeProject && (
        <div className="fixed inset-0 z-40">
          <button
            type="button"
            aria-label="Close project details"
            onClick={() => setActiveProject(null)}
            className="absolute inset-0 bg-warm-900/30 backdrop-blur-sm"
          />
          <aside className="absolute top-0 right-0 flex h-full w-full max-w-xl animate-[drawerIn_260ms_ease_forwards] flex-col overflow-y-auto border-l border-sky-950/10 bg-warm-50 p-8 shadow-2xl sm:p-10">
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="mb-10 w-fit rounded-full border border-sky-200 px-4 py-2 text-sm tracking-tight text-sky-800 transition hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
            >
              Close
            </button>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-sky-700">
              {activeProject.organization}
            </p>
            <h2 className="mt-3 font-serif-variation font-serif text-4xl font-light leading-tight text-warm-900 sm:text-5xl">
              {activeProject.name}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3 text-sm tracking-tight text-warm-600">
              <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-800">
                {activeProject.role}
              </span>
              <span className="rounded-full bg-warm-100 px-3 py-1">
                {activeProject.dates}
              </span>
            </div>
            <div className="mt-8 space-y-5 text-lg leading-relaxed tracking-tight text-warm-700">
              {activeProject.longDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={activeProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-sky-700 px-5 py-3 text-sm font-medium tracking-tight text-white transition hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
              >
                Visit project
              </a>
            </div>
          </aside>
        </div>
      )}
    </Layout>
  );
}

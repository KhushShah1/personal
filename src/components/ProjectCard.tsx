import type { Project } from "@/data/projects";
import ProjectMotif from "./ProjectMotif";

const sizeClass: Record<Project["size"], string> = {
  hero: "col-span-2 row-span-2",
  wide: "col-span-2 row-span-1",
  tall: "col-span-2 row-span-1 lg:col-span-1 lg:row-span-2",
  small: "col-span-1 row-span-1",
};

interface ProjectCardProps {
  project: Project;
  delay?: number;
  onOpen: () => void;
}

export default function ProjectCard({ project, delay = 0, onOpen }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      style={{ animationDelay: `${delay}ms` }}
      className={`group relative flex h-full w-full cursor-pointer flex-col justify-between gap-3 overflow-hidden rounded-lg bg-warm-200 p-5 text-left transition-colors animate-card hover:bg-warm-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 ${sizeClass[project.size]}`}
    >
      <div className="pointer-events-none absolute -right-5 -top-5 h-28 w-28 text-sky-300 opacity-60 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100">
        <ProjectMotif name={project.motif} className="h-full w-full" />
      </div>
      <p className="relative text-xs font-medium uppercase tracking-[0.15em] text-sky-600">
        {project.organization}
      </p>
      <div className="relative flex flex-col gap-2">
        <h3 className="font-serif-variation font-serif text-2xl font-light leading-tight text-warm-900 lg:text-3xl">
          {project.name}
        </h3>
        <p className="text-sm tracking-tight text-warm-600">
          {project.role} &middot; {project.dates}
        </p>
        <p className="max-h-0 overflow-hidden text-sm leading-relaxed tracking-tight text-warm-500 opacity-0 transition-all duration-300 group-hover:max-h-32 group-hover:opacity-100">
          {project.subCaption}
        </p>
      </div>
    </button>
  );
}

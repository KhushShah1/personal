import { useEffect } from "react";
import type { Project } from "@/data/projects";
import ProjectMotif from "./ProjectMotif";

interface ProjectDrawerProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectDrawer({ project, open, onClose }: ProjectDrawerProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-warm-900/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project?.name}
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col overflow-y-auto bg-warm-50 shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {project && (
          <div className="flex flex-col gap-6 p-8">
            <div className="flex items-start justify-between">
              <div className="h-16 w-16 text-sky-400">
                <ProjectMotif name={project.motif} className="h-full w-full" />
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded p-1 text-warm-500 transition-colors hover:text-warm-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-sky-600">
                {project.organization}
              </p>
              <h2 className="font-serif-variation font-serif text-3xl font-light text-warm-900">
                {project.name}
              </h2>
              <p className="text-sm tracking-tight text-warm-600">
                {project.role} &middot; {project.dates}
              </p>
            </div>
            <div className="space-y-4 text-sm leading-relaxed tracking-tight text-warm-700">
              {project.longDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg bg-warm-200 px-4 py-3 text-sm tracking-tight text-warm-900 transition-colors hover:bg-warm-300"
            >
              <span>{project.href.replace(/^https?:\/\//, "")}</span>
              <span
                aria-hidden
                className="text-sky-600 transition-transform group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

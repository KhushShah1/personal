import type { ProjectMotif as ProjectMotifName } from "@/data/projects";

const motifs: Record<ProjectMotifName, React.ReactNode> = {
  orbit: (
    <>
      <circle cx="50" cy="50" r="8" />
      <ellipse cx="50" cy="50" rx="38" ry="15" />
      <ellipse cx="50" cy="50" rx="15" ry="38" />
      <circle cx="88" cy="50" r="3.5" />
    </>
  ),
  mesh: (
    <>
      <path d="M20 32 L56 18 L82 42 L62 74 L26 66 Z" />
      <path d="M20 32 L62 74" />
      <path d="M56 18 L62 74" />
      <path d="M56 18 L26 66" />
      <path d="M82 42 L26 66" />
    </>
  ),
  terminal: (
    <>
      <rect x="18" y="24" width="64" height="52" rx="6" />
      <line x1="18" y1="38" x2="82" y2="38" />
      <path d="M30 52 L38 58 L30 64" />
      <line x1="44" y1="64" x2="62" y2="64" />
    </>
  ),
  blocks: (
    <>
      <rect x="22" y="24" width="56" height="14" rx="3" />
      <rect x="22" y="43" width="56" height="14" rx="3" />
      <rect x="22" y="62" width="56" height="14" rx="3" />
    </>
  ),
  chart: (
    <>
      <rect x="22" y="50" width="11" height="26" rx="2" />
      <rect x="41" y="38" width="11" height="38" rx="2" />
      <rect x="60" y="28" width="11" height="48" rx="2" />
      <rect x="79" y="46" width="11" height="30" rx="2" />
    </>
  ),
};

interface ProjectMotifProps {
  name: ProjectMotifName;
  className?: string;
}

export default function ProjectMotif({ name, className = "" }: ProjectMotifProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {motifs[name]}
    </svg>
  );
}

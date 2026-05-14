import Link from "next/link";

type Color = "sky" | "orange" | "purple" | "lime";

const colorClass: Record<Color, string> = {
  sky: "hover:decoration-sky-400",
  orange: "hover:decoration-orange-400",
  purple: "hover:decoration-purple-400",
  lime: "hover:decoration-lime-400",
};

interface InlineLinkProps {
  href: string;
  color: Color;
  external?: boolean;
  children: React.ReactNode;
}

export default function InlineLink({ href, color, external, children }: InlineLinkProps) {
  const base = "rounded text-warm-900 underline decoration-warm-900 decoration-1 underline-offset-4 hover:decoration-2 focus-visible:ring-4 focus-visible:ring-blue-200";
  const extra = external ? "cursor-alias hover:decoration-wavy " : "";
  const className = `${base} ${extra}${colorClass[color]}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

import ArrowIcon from "./ArrowIcon";

interface CardProps {
  category: string;
  organization: string;
  name: string;
  description?: string | string[];
  href?: string;
  delay?: number;
  fading?: boolean;
  footer?: React.ReactNode;
  headerSize?: "sm" | "base";
  clamp?: boolean;
}

export default function Card({
  category,
  organization,
  name,
  description,
  href,
  delay = 0,
  fading = false,
  footer,
  headerSize = "sm",
  clamp = false,
}: CardProps) {
  const fadeClass = `transition-opacity duration-400 ${fading ? "opacity-0" : "opacity-100"}`;
  const headerSizeClass = headerSize === "base" ? "text-base" : "text-sm";
  const containerClass = `group flex h-full min-h-[inherit] w-full flex-col overflow-hidden rounded-lg bg-warm-200 transition-colors focus-within:bg-warm-300 hover:bg-warm-300 animate-card${href ? " cursor-alias focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200" : ""}`;
  const containerStyle = { animationDelay: `${delay}ms` };

  const inner = (
    <div className="relative isolate flex h-full min-h-[inherit] w-full flex-col">
      <div
        className={`flex items-center justify-between rounded-t-lg bg-warm-300 pl-4 pr-2 pt-2 ${headerSizeClass} tracking-tight text-warm-700`}
      >
        <span className="py-1.5">
          {category} &middot;{" "}
          <span className={`inline-block ${fadeClass}`}>{organization}</span>
        </span>
        {href && (
          <div
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-full transition-colors group-hover:bg-warm-50 group-hover:text-warm-900 group-hover:shadow-skeuo group-focus-within:bg-warm-50 group-focus-within:text-warm-900 group-focus-within:shadow-skeuo"
          >
            <ArrowIcon />
          </div>
        )}
      </div>
      <div className="grow overflow-hidden">
        <div className={`px-5 pt-4 pb-8 ${fadeClass}`}>
          <h3 className="font-serif-variation font-serif text-2xl font-light text-warm-900">
            {name}
          </h3>
          {description && (
            <div
              className={`mt-3 space-y-3 text-sm leading-relaxed tracking-tight text-warm-600 ${clamp ? "line-clamp-6" : ""}`}
            >
              {Array.isArray(description) ? (
                description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
              ) : (
                <p>{description}</p>
              )}
            </div>
          )}
        </div>
      </div>
      {footer}
    </div>
  );

  if (href) {
    return (
      <a href={href} className={containerClass} style={containerStyle}>
        {inner}
      </a>
    );
  }

  return (
    <div className={containerClass} style={containerStyle}>
      {inner}
    </div>
  );
}

import ArrowIcon from "./ArrowIcon";

interface InformationCardProps {
  organization: string;
  name: string;
  description?: string;
  large?: boolean;
  hasLink?: boolean;
  category?: string;
  delay?: number;
}

export default function InformationCard({
  organization,
  name,
  description,
  large = false,
  hasLink = true,
  category = "Projects",
  delay = 0,
}: InformationCardProps) {
  return (
    <div
      className={`${large ? "aspect-[2] sm:col-span-2" : "aspect-square"} px-1 pb-2`}
    >
      <div
        className="group h-full w-full overflow-hidden rounded-lg bg-warm-200 transition-colors focus-within:bg-warm-300 hover:bg-warm-300 animate-card"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="flex h-full w-full flex-col">
          <div className="flex items-center justify-between rounded-t-lg bg-warm-300 pl-4 pr-2 pt-2 text-sm tracking-tight text-warm-700">
            <span className="py-1.5">
              {category} &middot; {organization}
            </span>
            {hasLink && (
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 group-focus-within:bg-warm-50 group-focus-within:text-warm-900 group-focus-within:shadow-skeuo cursor-alias group-hover:bg-warm-50 group-hover:text-warm-900 group-hover:shadow-skeuo"
              >
                <ArrowIcon />
              </a>
            )}
          </div>
          <a href="#" className="block grow cursor-alias overflow-hidden px-5 pt-4">
            <h3 className="font-serif-variation font-serif text-2xl font-light text-warm-900">
              {name}
            </h3>
            {description && (
              <p className="mt-3 text-sm leading-relaxed tracking-tight text-warm-600 line-clamp-6">
                {description}
              </p>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}

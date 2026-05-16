interface PageHeaderProps {
  title: string;
  description: string;
  kicker?: string;
  accentClass?: string;
  accentLineClass?: string;
}

export default function PageHeader({
  title,
  description,
  kicker,
  accentClass = "text-warm-500",
  accentLineClass = "bg-warm-500",
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 px-2 pt-4 pb-8 md:gap-6">
      {kicker && (
        <p className={`font-serif text-lg italic ${accentClass}`}>{kicker}</p>
      )}
      <div>
        <h1 className="font-serif-variation font-serif text-6xl font-extralight text-warm-900 md:text-8xl">
          {title}.
        </h1>
        <div className={`mt-3 h-1 w-16 rounded-full ${accentLineClass}`} />
      </div>
      <p className="max-w-prose tracking-tight text-warm-500">{description}</p>
    </div>
  );
}

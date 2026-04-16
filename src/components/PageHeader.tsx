interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 px-2 pt-4 pb-8 md:gap-8">
      <h1 className="font-serif-variation font-serif text-6xl font-extralight text-warm-900 md:text-8xl">
        {title}.
      </h1>
      <p className="max-w-prose tracking-tight text-warm-500">
        {description}
      </p>
    </div>
  );
}

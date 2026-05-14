import Card from "./Card";

interface InformationCardProps {
  organization: string;
  name: string;
  description?: string;
  large?: boolean;
  category?: string;
  delay?: number;
}

export default function InformationCard({
  organization,
  name,
  description,
  large = false,
  category = "Projects",
  delay = 0,
}: InformationCardProps) {
  return (
    <div className={`${large ? "aspect-[2] sm:col-span-2" : "aspect-square"} px-1 pb-2`}>
      <Card
        category={category}
        organization={organization}
        name={name}
        description={description}
        delay={delay}
        clamp
      />
    </div>
  );
}

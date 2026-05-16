interface ParagraphListProps {
  paragraphs: string | string[];
  className: string;
}

export default function ParagraphList({ paragraphs, className }: ParagraphListProps) {
  const items = Array.isArray(paragraphs) ? paragraphs : [paragraphs];

  return (
    <div className={className}>
      {items.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

import type { BlogPostMeta } from "@/lib/blogs";

type BlogMetaProps = {
  post: Pick<BlogPostMeta, "type" | "tags" | "readingMinutes">;
  showReadingTime?: boolean;
  tagClassName?: string;
};

export default function BlogMeta({
  post,
  showReadingTime = false,
  tagClassName = "rounded-full border border-warm-300 px-3 py-1 text-xs tracking-tight text-warm-600",
}: BlogMetaProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="rounded-full bg-warm-200 px-3 py-1 text-sm tracking-tight text-warm-700">
        {post.type}
      </span>
      {showReadingTime && (
        <span className="rounded-full bg-warm-100 px-3 py-1 text-sm tracking-tight text-warm-600">
          {post.readingMinutes}
        </span>
      )}
      {post.tags.map((tag) => (
        <span key={tag} className={tagClassName}>
          {tag}
        </span>
      ))}
    </div>
  );
}

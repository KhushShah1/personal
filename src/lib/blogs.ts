import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "src/content/blogs");
const DEFAULT_TAGS = [
  "AI Safety",
  "ML",
  "Math",
  "CMU",
  "Personal",
  "SWE",
  "High School",
  "Hackathons",
  "Research",
];

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  tags: string[];
  summary: string;
  type: "Essay" | "Note";
  readingMinutes: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

export type BlogIndexData = {
  posts: BlogPostMeta[];
  tags: string[];
  noteCount: number;
  essayCount: number;
};

type Frontmatter = {
  title?: unknown;
  date?: unknown;
  tags?: unknown;
  summary?: unknown;
  type?: unknown;
};

function getMdxFiles() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .sort();
}

function normalizeDate(value: unknown) {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "string" && value.trim()) {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
    return value;
  }

  return "";
}

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function normalizeTags(value: unknown) {
  if (!Array.isArray(value)) return [];

  return value.filter((tag): tag is string => typeof tag === "string" && tag.trim().length > 0);
}

function normalizeType(value: unknown, content: string): BlogPostMeta["type"] {
  if (value === "Essay" || value === "Note") return value;

  const wordCount = content.split(/\s+/).filter(Boolean).length;
  return wordCount >= 500 ? "Essay" : "Note";
}

export function getBlogSlugs() {
  return getMdxFiles().map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogPost(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(file);
  const frontmatter = data as Frontmatter;
  const date = normalizeDate(frontmatter.date);
  const title = typeof frontmatter.title === "string" ? frontmatter.title : slug;
  const summary = typeof frontmatter.summary === "string" ? frontmatter.summary : "";

  return {
    slug,
    title,
    date,
    displayDate: date ? formatDate(date) : "",
    tags: normalizeTags(frontmatter.tags),
    summary,
    type: normalizeType(frontmatter.type, content),
    readingMinutes: readingTime(content).text,
    content,
  };
}

export function getBlogPostMeta(post: BlogPost): BlogPostMeta {
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    displayDate: post.displayDate,
    tags: post.tags,
    summary: post.summary,
    type: post.type,
    readingMinutes: post.readingMinutes,
  };
}

export function getAllBlogPosts() {
  return getBlogSlugs()
    .map(getBlogPost)
    .sort((a, b) => {
      const aTime = a.date ? new Date(a.date).getTime() : 0;
      const bTime = b.date ? new Date(b.date).getTime() : 0;
      return bTime - aTime;
    });
}

export function getBlogIndexData(): BlogIndexData {
  const posts = getAllBlogPosts();

  return {
    posts,
    tags: Array.from(new Set([...DEFAULT_TAGS, ...posts.flatMap((post) => post.tags)])).sort(),
    noteCount: posts.filter((post) => post.type === "Note").length,
    essayCount: posts.filter((post) => post.type === "Essay").length,
  };
}

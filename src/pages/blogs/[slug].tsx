import Head from "next/head";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import BlogMeta from "@/components/BlogMeta";
import Layout from "@/components/Layout";
import { getBlogPost, getBlogPostMeta, getBlogSlugs } from "@/lib/blogs";
import type { BlogPostMeta } from "@/lib/blogs";

type BlogPostProps = {
  post: BlogPostMeta;
  source: MDXRemoteSerializeResult;
};

export function getStaticPaths() {
  return {
    paths: getBlogSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  const source = await serialize(post.content);

  return {
    props: {
      post: getBlogPostMeta(post),
      source,
    },
  };
}

export default function BlogPost({ post, source }: BlogPostProps) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.summary} />
      </Head>
      <article className="mx-auto max-w-3xl pb-20">
        <Link
          href="/blogs"
          className="mb-8 inline-block rounded-md px-2 py-1 text-sm tracking-tight text-warm-600 transition hover:bg-warm-100 hover:text-warm-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-warm-300"
        >
          Back to blogs
        </Link>
        <header className="border-b border-warm-300 pb-8">
          <BlogMeta post={post} showReadingTime />
          <h1 className="mt-8 font-serif-variation font-serif text-5xl font-light leading-none text-warm-900 sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed tracking-tight text-warm-600">
            {post.summary}
          </p>
          <p className="mt-5 text-sm tracking-tight text-warm-500">
            {post.displayDate}
          </p>
        </header>
        <div className="blog-content mt-10">
          <MDXRemote {...source} />
        </div>
      </article>
    </Layout>
  );
}

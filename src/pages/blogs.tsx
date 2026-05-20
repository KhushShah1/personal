import Head from "next/head";
import Link from "next/link";
import BlogMeta from "@/components/BlogMeta";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { getBlogIndexData } from "@/lib/blogs";
import type { BlogIndexData } from "@/lib/blogs";

export function getStaticProps() {
  return {
    props: getBlogIndexData(),
  };
}

export default function Blogs({ posts, tags, noteCount, essayCount }: BlogIndexData) {
  const featuredPost = posts[0];

  return (
    <Layout>
      <Head>
        <title>Blogs</title>
      </Head>
      <PageHeader
        title="blogs"
        kicker="thinking out loud"
        accentClass="text-warm-700"
        accentLineClass="bg-warm-700"
        description="Notes and essays on AI, research, college, software, math, and the occasional personal tangent."
      />
      <section className="grid gap-4 pb-16 lg:grid-cols-[1.25fr_0.75fr]">
        <article className="relative overflow-hidden rounded-lg border border-warm-300 bg-warm-100 p-7 shadow-skeuo sm:p-9">
          <div className="absolute top-0 right-0 h-full w-1/2 opacity-25">
            <div className="h-full w-full bg-[radial-gradient(circle_at_35%_30%,var(--color-warm-300),transparent_28%),linear-gradient(135deg,transparent_0_44%,var(--color-warm-300)_44%_45%,transparent_45%)]" />
          </div>
          <div className="relative">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-warm-700">
              Featured
            </p>
            {featuredPost ? (
              <>
                <h2 className="mt-12 max-w-xl font-serif-variation font-serif text-5xl font-light leading-none text-warm-900 sm:text-6xl">
                  <Link href={`/blogs/${featuredPost.slug}`} className="transition hover:text-warm-700">
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed tracking-tight text-warm-600">
                  {featuredPost.summary}
                </p>
                <p className="mt-6 text-sm tracking-tight text-warm-500">
                  {featuredPost.displayDate} · {featuredPost.readingMinutes}
                </p>
              </>
            ) : (
              <>
                <h2 className="mt-12 max-w-xl font-serif-variation font-serif text-5xl font-light leading-none text-warm-900 sm:text-6xl">
                  Haven’t put out stuff yet D:
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed tracking-tight text-warm-600">
                  I haven’t finalized what I’m writing yet, but I’m typing up stuff right now!!
                </p>
              </>
            )}
          </div>
        </article>
        <aside className="rounded-lg border border-warm-300 bg-[#fffaf4] p-6 shadow-skeuo">
          <h2 className="font-serif text-3xl font-light text-warm-900">
            Tags
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-warm-300 bg-warm-50 px-3 py-1 text-sm tracking-tight text-warm-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-lg border border-warm-300 text-center">
            <div className="bg-warm-100 p-4">
              <p className="font-serif text-4xl font-light text-warm-900">{noteCount}</p>
              <p className="text-sm tracking-tight text-warm-600">Notes</p>
            </div>
            <div className="border-l border-warm-300 bg-warm-50 p-4">
              <p className="font-serif text-4xl font-light text-warm-900">{essayCount}</p>
              <p className="text-sm tracking-tight text-warm-600">Essays</p>
            </div>
          </div>
        </aside>
        <section className="lg:col-span-2">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="font-serif-variation font-serif text-4xl font-light text-warm-900">
              All posts
            </h2>
          </div>
          {posts.length > 0 ? (
            <div className="grid gap-3 md:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="min-h-[18rem] rounded-lg border border-warm-300 bg-warm-100 p-6 shadow-skeuo transition duration-300 hover:-translate-y-1 hover:border-warm-500 hover:bg-[#fffaf4] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-warm-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-warm-200 px-3 py-1 text-sm tracking-tight text-warm-700">
                      {post.type}
                    </span>
                    <span className="text-right text-sm tracking-tight text-warm-500">
                      {post.displayDate}
                    </span>
                  </div>
                  <h3 className="mt-10 font-serif text-3xl font-light leading-tight text-warm-900">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed tracking-tight text-warm-600">
                    {post.summary}
                  </p>
                  <div className="mt-6">
                    <BlogMeta post={post} />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <article className="rounded-lg border border-dashed border-warm-300 bg-warm-100/60 p-6 shadow-skeuo">
              <h3 className="font-serif text-3xl font-light leading-tight text-warm-900">
                Haven’t put out stuff yet D:
              </h3>
              <p className="mt-4 text-sm leading-relaxed tracking-tight text-warm-600">
                I haven’t finalized what I’m writing yet, but I’m typing up stuff right now!!
              </p>
            </article>
          )}
        </section>
      </section>
    </Layout>
  );
}

import Head from "next/head";
import { useState } from "react";
import DetailDrawer from "@/components/DetailDrawer";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ParagraphList from "@/components/ParagraphList";
import { LeadershipPost, leadership, leadershipStats } from "@/data/leadership";

export default function Leadership() {
  const [activePost, setActivePost] = useState<LeadershipPost | null>(null);

  return (
    <Layout>
      <Head>
        <title>Leadership</title>
      </Head>
      <PageHeader
        title="leadership"
        kicker="a record of leading them"
        accentClass="text-orange-700"
        accentLineClass="bg-orange-500"
        description="Organizations, teams, classes, events, and service work where I was responsible for moving people toward something real."
      />
      <section className="mb-4 grid grid-cols-1 overflow-hidden rounded-lg border border-orange-950/10 bg-orange-50 shadow-skeuo sm:grid-cols-2 lg:grid-cols-5">
        {leadershipStats.map((stat) => {
          return (
            <div key={stat.label} className="border-b border-orange-950/10 p-5 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
              <p className="font-serif-variation font-serif text-4xl font-light leading-none text-orange-700">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-tight tracking-tight text-warm-700">
                {stat.label}
              </p>
            </div>
          );
        })}
      </section>
      <section className="grid grid-cols-1 gap-3 pb-16 md:grid-cols-2 xl:grid-cols-5">
        {leadership.map((post, i) => {
          return (
            <button
              key={post.organization}
              type="button"
              onClick={() => setActivePost(post)}
              style={{ animationDelay: `${i * 55}ms` }}
              className="group flex min-h-[22rem] flex-col justify-between rounded-lg border border-orange-950/10 bg-warm-100 p-6 text-left shadow-skeuo transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 animate-card"
            >
              <div>
                <p className="text-sm tracking-tight text-orange-700">
                  {post.organization}
                </p>
                <h2 className="mt-2 font-serif-variation font-serif text-3xl font-light leading-tight text-warm-900">
                  {post.name}
                </h2>
                <p className="mt-5 text-sm leading-relaxed tracking-tight text-warm-600">
                  {post.description}
                </p>
              </div>
            </button>
          );
        })}
      </section>
      <DetailDrawer
        open={activePost !== null}
        ariaLabel={activePost?.name ?? "Leadership details"}
        accent="orange"
        closeLabel="Close leadership details"
        onClose={() => setActivePost(null)}
      >
        {activePost && (
          <>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-orange-700">
              {activePost.organization}
            </p>
            <h2 className="mt-3 font-serif-variation font-serif text-4xl font-light leading-tight text-warm-900 sm:text-5xl">
              {activePost.name}
            </h2>
            <ParagraphList
              paragraphs={activePost.longDescription}
              className="mt-8 space-y-5 text-lg leading-relaxed tracking-tight text-warm-700"
            />
            {activePost.href && (
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={activePost.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-orange-700 px-5 py-3 text-sm font-medium tracking-tight text-white transition hover:bg-orange-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
                >
                  Visit Organization Page
                </a>
              </div>
            )}
          </>
        )}
      </DetailDrawer>
    </Layout>
  );
}

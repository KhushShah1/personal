import Head from "next/head";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { leadership, leadershipStats } from "@/data/leadership";

export default function Leadership() {
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
          const inner = (
            <>
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
            </>
          );
          const className =
            "group flex min-h-[22rem] flex-col justify-between rounded-lg border border-orange-950/10 bg-warm-100 p-6 shadow-skeuo transition duration-300 animate-card";
          const interactiveClass =
            "hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 cursor-alias";

          if (post.href) {
            return (
              <a
                key={post.organization}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${i * 55}ms` }}
                className={`${className} ${interactiveClass}`}
              >
                {inner}
              </a>
            );
          }

          return (
            <article
              key={post.organization}
              style={{ animationDelay: `${i * 55}ms` }}
              className={className}
            >
              {inner}
            </article>
          );
        })}
      </section>
    </Layout>
  );
}

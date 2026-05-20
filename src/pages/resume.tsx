import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { resumeSections } from "@/data/resume";

const resumePdfHref = "/khush-shah-resume.pdf";

export default function Resume() {
  const [activeSection, setActiveSection] = useState(resumeSections[0].id);

  useEffect(() => {
    const updateActiveSection = () => {
      const isAtBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4;

      if (isAtBottom) {
        setActiveSection(resumeSections[resumeSections.length - 1].id);
        return;
      }

      const marker = window.scrollY + 180;
      const current = resumeSections.reduce((active, section) => {
        const element = document.getElementById(section.id);
        if (!element) return active;
        return element.offsetTop <= marker ? section.id : active;
      }, resumeSections[0].id);

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>Resume</title>
      </Head>
      <PageHeader
        title="resume"
        kicker="the whole picture"
        accentClass="text-purple-700"
        accentLineClass="bg-purple-500"
        description="A web-native version of my resume."
      />
      <div className="pb-16 lg:grid lg:grid-cols-[13rem_1fr] lg:gap-8">
        <aside className="sticky top-20 z-10 mb-4 rounded-lg border border-purple-950/10 bg-warm-50/85 p-3 shadow-skeuo backdrop-blur lg:self-start">
          <a
            href={resumePdfHref}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 block rounded-md bg-purple-700 px-4 py-3 text-center text-sm font-medium tracking-tight text-white transition hover:bg-purple-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-200"
          >
            Download PDF
          </a>
          <nav className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
            {resumeSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`shrink-0 rounded-md px-3 py-2 text-sm tracking-tight transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-200 ${
                  activeSection === section.id
                    ? "bg-purple-100 text-purple-800"
                    : "text-warm-600 hover:bg-warm-100 hover:text-warm-900"
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>
        <article className="rounded-lg border border-warm-300 bg-[#fffaf4] p-5 shadow-skeuo sm:p-8 lg:p-10">
          <header className="border-b border-warm-300 pb-6 text-center">
            <h2 className="font-serif-variation font-serif text-4xl font-light tracking-tight text-warm-900">
              Khush Shah
            </h2>
            <p className="mt-2 text-sm tracking-tight text-warm-600">
              Carnegie Mellon University | B.S. in Computer Science & Mathematics | Expected May 2028
            </p>
            <p className="mt-2 text-sm tracking-tight text-warm-600">
              khushs@cmu.edu | khush.site | linkedin.com/in/khush--shah | github.com/khushshah1
            </p>
            <p className="mt-2 text-sm tracking-tight text-warm-600">
              Fully work authorized | U.S. Citizen
            </p>
          </header>
          <div className="divide-y divide-warm-300">
            {resumeSections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 py-8">
                <h2 className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-purple-700">
                  <span className="h-2 w-2 rounded-full bg-purple-500" />
                  {section.title}
                </h2>
                <div className="space-y-7">
                  {section.entries.map((entry) => (
                    <div key={`${section.id}-${entry.title}`}>
                      <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-start">
                        <div>
                          <h3 className="font-serif text-xl font-light leading-tight text-warm-900">
                            {entry.title}
                          </h3>
                          <p className="text-sm tracking-tight text-warm-600">
                            {entry.organization}
                          </p>
                        </div>
                        <p className="min-h-5 text-sm tracking-tight text-warm-500 sm:text-right">
                          {entry.dates ?? ""}
                        </p>
                      </div>
                      {entry.bullets.length > 0 && (
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed tracking-tight text-warm-700">
                          {entry.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </Layout>
  );
}

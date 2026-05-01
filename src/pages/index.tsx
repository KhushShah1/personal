import { useState, useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import ArrowIcon from "@/components/ArrowIcon";
import { resumeItems as items } from "@/data/resume";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const fadingRef = useRef(false);

  const goTo = (direction: number) => {
    if (fadingRef.current) return;
    fadingRef.current = true;
    setFading(true);
    setTimeout(() => {
      setIndex((i) => (i + direction + items.length) % items.length);
      setFading(false);
      fadingRef.current = false;
    }, 400);
  };

  useEffect(() => {
    const timer = setTimeout(() => goTo(1), 10000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Hero intro */}
        <div className="px-1 pb-2 animate-card">
          <div className="h-full w-full px-4 pt-6 sm:px-8 sm:pt-6">
            <h1 className="font-serif-variation font-serif text-2xl font-light !leading-tight text-warm-600 sm:text-3xl lg:text-4xl">
              ✰ 𝙝𝙚𝙡𝙡𝙤<span className="font-heavy">!</span> ✰ I&apos;m{" "}
              <span className="text-warm-900">Khush</span>, and this is
              my{" "}
              <span className="text-warm-900">personal website 👾</span>
              <br />
              <br />
              I&apos;m a{" "}
              <span className="text-warm-900">CS and Math</span> student
              from the bay 🌉 studying at{" "}
              <span className="text-warm-900">Carnegie Mellon</span>, and I&apos;m
              super into{" "}
              <span className="text-warm-900">ML research</span> and
              building cool things.
              <br />
              <br />
              Alongside some other stuff, I love fiddling around with
              technical{" "}
              <span className="text-warm-900">AI Safety research</span> 📝
              and I&apos;m currently working to publish some stuff at{" "}
              <a
                href="https://cmuaisafety.com"
                target="_blank"
                className="cursor-alias rounded text-warm-900 underline decoration-warm-900 decoration-1 underline-offset-4 hover:decoration-wavy hover:decoration-sky-400 hover:decoration-2 focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                CASI
              </a>
              . I also help run{" "}
              <a
                href="https://cmucourses.com"
                target="_blank"
                className="cursor-alias rounded text-warm-900 underline decoration-warm-900 decoration-1 underline-offset-4 hover:decoration-wavy hover:decoration-orange-400 hover:decoration-2 focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                CMU Courses
              </a>{" "}
              at{" "}
              <a
                href="https://scottylabs.org"
                target="_blank"
                className="cursor-alias rounded text-warm-900 underline decoration-warm-900 decoration-1 underline-offset-4 hover:decoration-wavy hover:decoration-purple-400 hover:decoration-2 focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                ScottyLabs
              </a>
              , and try to get up to a bunch more{" "}
              <a
                className="rounded text-warm-900 underline decoration-warm-900 decoration-1 underline-offset-4 hover:decoration-lime-400 hover:decoration-2 focus-visible:ring-4 focus-visible:ring-blue-200"
                href="/projects"
              >
                cool stuff
              </a>
              .
            </h1>
          </div>
        </div>

        <div className="px-4 pt-2 pb-10 sm:pb-[10px]">
          <div className="relative aspect-square sm:aspect-auto sm:h-[calc(100vh-130px)]">
            <button
              type="button"
              onClick={() => goTo(-1)}
              aria-label="Previous item"
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded text-warm-900/25 transition-colors hover:text-warm-900/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
            >
              <svg
                className="h-10 w-10 sm:h-14 sm:w-14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18 9 12l6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(1)}
              aria-label="Next item"
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded text-warm-900/25 transition-colors hover:text-warm-900/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
            >
              <svg
                className="h-10 w-10 sm:h-14 sm:w-14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
            <div className="group h-full w-full overflow-hidden rounded-lg bg-warm-200 transition-colors hover:bg-warm-300 animate-card" style={{ animationDelay: "50ms" }}>
              <div className="relative isolate flex h-full w-full flex-col">
                <div className="flex items-center justify-between rounded-t-lg bg-warm-300 pl-4 pr-2 pt-2 text-base tracking-tight text-warm-700">
                  <span className="py-1.5">
                    {items[index].category} &middot;{" "}
                    <span className={`inline-block transition-opacity duration-400 ${fading ? "opacity-0" : "opacity-100"}`}>
                      {items[index].organization}
                    </span>
                  </span>
                  <a
                    href="/projects"
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 group-hover:bg-warm-50 group-hover:text-warm-900 group-hover:shadow-skeuo"
                  >
                    <ArrowIcon />
                  </a>
                </div>
                <a href="/projects" className="block grow cursor-alias overflow-hidden">
                  <div className={`px-6 pt-4 transition-opacity duration-400 ${fading ? "opacity-0" : "opacity-100"}`}>
                    <h3 className="font-serif-variation font-serif text-2xl font-light text-warm-900">
                      {items[index].name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed tracking-tight text-warm-600">
                      {items[index].description}
                    </p>
                  </div>
                </a>
                <div key={index} className="h-0.5 bg-warm-800 animate-progress" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

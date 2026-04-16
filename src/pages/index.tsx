import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import ArrowIcon from "@/components/ArrowIcon";

const items = Array.from({ length: 10 }, (_, i) => ({
  organization: `Organization ${i + 1}`,
  name: `Project Alpha ${i + 1}`,
  description: `Project Alpha ${i + 1} Description`,
  category: i % 2 === 0 ? "Projects" : "Leadership",
}));

export default function Home() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setFading(false);
      }, 400);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Hero intro */}
        <div className="px-1 pb-2 animate-card">
          <div className="h-full w-full px-4 pt-6 sm:px-8 sm:pt-6">
            <h1 className="font-serif-variation font-serif text-2xl font-light !leading-tight text-warm-600 sm:text-3xl lg:text-4xl">
              Hey there, I&apos;m{" "}
              <span className="text-warm-900">Khush</span> 👋 Welcome to
              my{" "}
              <span className="text-warm-900">personal website</span>{" "}
              🌐 I&apos;m a{" "}
              <span className="text-warm-900">CS and Math</span> student
              from the bay 🌉 studying at{" "}
              <span className="text-warm-900">CMU</span>, and I&apos;m
              super into{" "}
              <span className="text-warm-900">ML research</span> and
              building cool things.
              <br />
              <br />
              Alongside some other stuff, I love fiddling around with
              technical{" "}
              <span className="text-warm-900">AI Safety research</span>,
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
              , and try to get up a bunch more{" "}
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
          <div className="aspect-square sm:aspect-auto sm:h-[calc(100vh-130px)]">
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

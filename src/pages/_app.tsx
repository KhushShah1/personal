import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import Head from "next/head";
import { Inter, Fraunces } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const SITE_URL = "https://khush.site";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}${router.pathname === "/" ? "" : router.pathname}`;

  return (
    <>
      <Head>
        <title>Khush</title>
        <meta name="description" content="Who I am, what I've done, things I've built, and things I'm thinking about." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Khush Shah" />
        <meta property="og:description" content="Who I am, what I've done, things I've built, and things I'm thinking about." />
        <meta property="og:image" content={`${SITE_URL}/icon.png`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Khush Shah" />
        <meta name="twitter:description" content="Who I am, what I've done, things I've built, and things I'm thinking about." />
        <meta name="twitter:image" content={`${SITE_URL}/icon.png`} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={`${inter.variable} ${fraunces.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
      </div>
    </>
  );
}

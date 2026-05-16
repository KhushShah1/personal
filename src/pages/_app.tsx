import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter, Fraunces } from "next/font/google";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Khush</title>
        <meta name="description" content="Khush's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Khush Shah" />
        <meta property="og:description" content="CS + Math at Carnegie Mellon. ML research, AI safety, software, and notes." />
        <meta property="og:image" content="/og-card.svg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Khush Shah" />
        <meta name="twitter:description" content="CS + Math at Carnegie Mellon. ML research, AI safety, software, and notes." />
        <meta name="twitter:image" content="/og-card.svg" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={`${inter.variable} ${fraunces.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

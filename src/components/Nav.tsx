import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/resume", label: "Resume" },
  { href: "/blogs", label: "Blogs" },
];

const socialLinks = [
  { href: "https://github.com/KhushShah1", label: "Github" },
  { href: "mailto:khushs@cmu.edu", label: "Email" },
  { href: "https://linkedin.com/in/khush--shah/", label: "LinkedIn" },
  { href: "https://instagram.com/khush.shah_/", label: "Instagram" },
  { href: "/resume", label: "Resume" },
  { href: "https://www.rd.com/wp-content/uploads/2024/06/50-Photos-of-Cute-Kittens-That-Will-Make-You-Melt_GettyImages-187144066_SSedit_FT.jpg", label: "Surprise!" },
];

export default function Nav() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [animDone, setAnimDone] = useState(false);

  useEffect(() => {
    // Wait for entrance animation to finish (0.6s + 0.3s delay)
    const t = setTimeout(() => setAnimDone(true), 1000);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className="pointer-events-none sticky top-0 isolate z-10 flex items-center justify-center py-4 px-1 md:justify-between">
      <div className="pointer-events-auto relative flex rounded-lg border border-warm-300 bg-warm-50/70 p-1 shadow-md backdrop-blur-md animate-nav">
        <div className="absolute left-0 -z-10 h-7 rounded bg-warm-300 backdrop-blur transition-[width,transform,opacity]"></div>
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? router.pathname === "/"
              : router.pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded py-1 px-2 text-base tracking-tight transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-warm-900 hover:text-warm-900 ${
                isActive ? "text-warm-900" : "text-warm-500"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <div
        className={`hidden md:flex transition-opacity duration-300 ${animDone ? "" : "animate-social-in"}`}
        style={{ opacity: scrolled && animDone ? 0 : animDone ? 1 : undefined, pointerEvents: scrolled && animDone ? "none" : "auto" }}
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            className="rounded py-1 px-2 text-base tracking-tight text-warm-500 decoration-wavy underline-offset-4 focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-warm-900 cursor-alias transition-colors hover:text-warm-900 hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const KITTEN_URL =
  "https://www.rd.com/wp-content/uploads/2024/06/50-Photos-of-Cute-Kittens-That-Will-Make-You-Melt_GettyImages-187144066_SSedit_FT.jpg";

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
  { href: KITTEN_URL, label: "Surprise!" },
];

const SOCIAL_LINK_CLASS =
  "rounded py-1 px-2 text-base tracking-tight text-warm-500 decoration-wavy underline-offset-4 focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-warm-900 cursor-alias transition-colors hover:text-warm-900 hover:underline";

const NAV_ANIMATION_MS = 1000;

export default function Nav() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [animDone, setAnimDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimDone(true), NAV_ANIMATION_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socialHidden = scrolled && animDone;
  const socialStyle: React.CSSProperties = {
    pointerEvents: socialHidden ? "none" : "auto",
  };
  if (animDone) socialStyle.opacity = socialHidden ? 0 : 1;

  return (
    <nav className="pointer-events-none sticky top-0 isolate z-10 mx-auto flex w-full max-w-screen-sm items-center justify-center px-9 py-4 md:max-w-screen-md md:justify-between lg:max-w-screen-lg xl:max-w-screen-2xl">
      <div className="pointer-events-auto relative flex rounded-lg border border-warm-300 bg-warm-50/70 p-1 shadow-md backdrop-blur-md animate-nav">
        {navLinks.map((link) => {
          const isActive = router.pathname === link.href;
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
        style={socialStyle}
      >
        {socialLinks.map((link) => {
          if (link.href.startsWith("/")) {
            return (
              <Link key={link.label} href={link.href} className={SOCIAL_LINK_CLASS}>
                {link.label}
              </Link>
            );
          }
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={SOCIAL_LINK_CLASS}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

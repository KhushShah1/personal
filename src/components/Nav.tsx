import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const surpriseUrls = [
  "https://wallpapers.com/images/high/kitten-pictures-akpm5ao9786ijsvw.webp",
  "https://wallpapers.com/images/high/cute-kitten-pictures-t701qv2pzyd8zqa1.webp",
  "https://wallpapers.com/images/high/cute-kitten-pictures-86idd8w0eu4vx40r.webp",
  "https://wallpapers.com/images/high/cute-kitten-pictures-mbvn2lw36yqa4zbl.webp",
  "https://wallpapers.com/images/high/cute-kittens-pictures-2560-x-1709-7tumhiqthchg7pkl.webp",
  "https://wallpapers.com/images/high/cute-kittens-pictures-3000-x-3000-e3qp7jxc96nayin9.webp",
  "https://wallpapers.com/images/high/cute-kittens-pictures-1080-x-1080-qosbno0ni62vb5p4.webp",
  "https://getwallpapers.com/wallpaper/full/6/d/a/1060072-download-cute-kitten-pictures-wallpaper-2560x1600-hd.jpg",
  "https://getwallpapers.com/wallpaper/full/d/7/c/1060082-cute-kitten-pictures-wallpaper-1920x1080-high-resolution.jpg",
  "https://getwallpapers.com/wallpaper/full/6/8/7/1060157-cute-kitten-pictures-wallpaper-1920x1080-samsung.jpg",
  "https://getwallpapers.com/wallpaper/full/7/3/7/1060182-cute-kitten-pictures-wallpaper-3840x2160-for-4k.jpg",
  "https://getwallpapers.com/wallpaper/full/1/3/f/1060141-cute-kitten-pictures-wallpaper-1920x1200-mobile.jpg",
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/resume", label: "Resume" },
  { href: "/blogs", label: "Blogs" },
];

type SocialLink = { href: string; label: string; download?: boolean; randomHrefs?: string[] };

const socialLinks: SocialLink[] = [
  { href: "https://github.com/KhushShah1", label: "Github" },
  { href: "mailto:khushs@cmu.edu", label: "Email" },
  { href: "https://linkedin.com/in/khush--shah/", label: "LinkedIn" },
  { href: "https://instagram.com/khush.shah_/", label: "Instagram" },
  { href: "/khush-shah-resume.pdf", label: "Resume", download: true },
  { href: surpriseUrls[0], label: "Surprise!", randomHrefs: surpriseUrls },
];

const SOCIAL_LINK_CLASS =
  "rounded py-1 px-2 text-base tracking-tight text-warm-500 decoration-wavy underline-offset-4 focus-visible:ring-4 focus-visible:ring-blue-200 focus:text-warm-900 cursor-alias transition-colors hover:text-warm-900 hover:underline";

const NAV_ANIMATION_MS = 1000;

function openRandomHref(event: React.MouseEvent<HTMLAnchorElement>, hrefs: string[]) {
  event.preventDefault();
  const href = hrefs[Math.floor(Math.random() * hrefs.length)];
  window.open(href, "_blank", "noopener,noreferrer");
}

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
          if (link.randomHrefs) {
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => openRandomHref(event, link.randomHrefs ?? [])}
                className={SOCIAL_LINK_CLASS}
              >
                {link.label}
              </a>
            );
          }
          if (link.download) {
            return (
              <a
                key={link.label}
                href={link.href}
                download
                target="_blank"
                rel="noopener noreferrer"
                className={SOCIAL_LINK_CLASS}
              >
                {link.label}
              </a>
            );
          }
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

import { Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/SocialIcons";
import { PERSON, NAV_LINKS } from "@/lib/constants";

// ── Marquee content ────────────────────────────────────────────────────────
// Duplicated so translateX(-50%) creates a seamless infinite loop:
// when the first copy scrolls off-left, the second copy fills in.
const TECH = [
  "React.js", "Node.js", "MySQL", "PHP", "TailwindCSS", "REST APIs",
  "PostgreSQL", "JavaScript", "TypeScript", "Next.js", "Laravel",
  "Git", "Figma", "JWT Auth", "Multi-Tenancy", "SaaS", "Postman",
];
const MARQUEE = [...TECH, ...TECH];

// ── Footer ─────────────────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black">

      {/* ── Main content row ── */}
      <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-16 pb-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand — two-line Anton stacked name */}
          <div className="flex-none">
            <p
              className="font-display leading-[0.82] text-white tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
            >
              AKSHAY
            </p>
            <p
              className="font-display leading-[0.82] text-white tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
            >
              KOTHEKAR
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-white/25">
              Full Stack Developer
            </p>
          </div>

          {/* Social icon cluster */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSON.email}`}
              aria-label="Send email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/35 transition-all hover:border-[#8B5CF6] hover:text-[#8B5CF6]"
            >
              <Mail size={15} />
            </a>
            <a
              href={PERSON.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/35 transition-all hover:border-[#8B5CF6] hover:text-[#8B5CF6]"
            >
              <LinkedInIcon size={15} />
            </a>
            <a
              href={PERSON.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/35 transition-all hover:border-[#8B5CF6] hover:text-[#8B5CF6]"
            >
              <GitHubIcon size={15} />
            </a>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-7 gap-y-2.5"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Scrolling tech marquee ── */}
      {/*
        Container: overflow-hidden clips the scrolling content.
        Inner div has double the items; animate-marquee shifts it -50%
        (= exactly one copy's width), which loops seamlessly.
      */}
      <div className="border-t border-b border-white/[0.05] overflow-hidden py-4">
        <div className="flex whitespace-nowrap animate-marquee">
          {MARQUEE.map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] text-white/18"
            >
              {tech}
              <span className="mx-5 text-[#8B5CF6]/25">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Bottom copyright strip ── */}
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-5 flex flex-col items-center justify-between gap-1.5 sm:flex-row">
        <p className="text-[11px] text-white/20">
          © {year} Akshay Kothekar · Built with Next.js
        </p>
        <p className="text-[10px] text-white/10">
          Amravati, Maharashtra, India
        </p>
      </div>

    </footer>
  );
}

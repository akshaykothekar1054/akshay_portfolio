"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/SocialIcons";
import { PERSON, NAV_LINKS } from "@/lib/constants";

const TECH = [
  "React.js", "Node.js", "TypeScript", "MySQL", "PHP", "TailwindCSS",
  "REST APIs", "PostgreSQL", "JavaScript", "Next.js", "JWT Auth",
  "Multi-Tenancy", "SaaS", "Figma", "Git", "Postman",
];
const MARQUEE_ITEMS = [...TECH, ...TECH];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#000", borderTop: "1px solid rgba(255,255,255,0.06)" }}>

      {/* ── Big name hero ── */}
      <div style={{ padding: "clamp(56px, 8vh, 96px) clamp(24px, 6vw, 80px) 0" }}>
        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "clamp(24px, 4vw, 40px)",
        }}>
          {/* Giant stacked name — solid + outline */}
          <p style={{
            fontFamily: '"Anton", sans-serif',
            fontSize: "clamp(3.5rem, 11vw, 10rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            margin: 0,
            userSelect: "none",
          }}>
            <span style={{ color: "#fff", display: "block" }}>AKSHAY</span>
            <span style={{
              display: "block",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.18)",
              color: "transparent",
            }}>
              KOTHEKAR
            </span>
          </p>

          {/* Right: available badge + email */}
          <div style={{
            paddingBottom: "clamp(8px, 1.5vh, 20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "clamp(14px, 2vh, 20px)",
          }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "5px 14px",
              borderRadius: 100,
              border: "1px solid rgba(139, 92, 246, 0.35)",
              backgroundColor: "rgba(139, 92, 246, 0.07)",
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "#8B5CF6",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              textTransform: "uppercase",
            }}>
              <span style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                backgroundColor: "#8B5CF6",
                animation: "pulse-dot 2s ease-in-out infinite",
                flexShrink: 0,
              }} />
              Available for work
            </span>

            <a
              href={`mailto:${PERSON.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(0.8rem, 0.95vw, 0.95rem)",
                color: "rgba(255,255,255,0.38)",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.8)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)")}
            >
              <Mail size={13} strokeWidth={1.75} />
              {PERSON.email}
              <ArrowUpRight size={12} strokeWidth={1.75} style={{ opacity: 0.5 }} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Thin divider ── */}
      <div style={{ maxWidth: 1280, margin: "clamp(28px, 4vh, 44px) auto 0", padding: "0 clamp(24px, 6vw, 80px)" }}>
        <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.06)" }} />
      </div>

      {/* ── Bottom strip: copyright · nav · socials ── */}
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "clamp(20px, 3vh, 30px) clamp(24px, 6vw, 80px)",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "clamp(14px, 2vw, 24px)",
      }}>
        {/* Copyright */}
        <p style={{
          fontSize: 11,
          color: "rgba(255,255,255,0.2)",
          fontFamily: "Inter, sans-serif",
          letterSpacing: "0.04em",
          margin: 0,
        }}>
          © {year} Akshay Kothekar · Built with Next.js
        </p>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "clamp(16px, 2.2vw, 28px)", listStyle: "none", margin: 0, padding: 0 }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                    textDecoration: "none",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.25)")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <div style={{ display: "flex", gap: 8 }}>
          {([
            { href: `mailto:${PERSON.email}`, icon: <Mail size={14} strokeWidth={1.75} />, label: "Email", cursor: "mail" },
            { href: PERSON.linkedin, icon: <LinkedInIcon size={14} />, label: "LinkedIn", cursor: "connect" },
            { href: PERSON.github, icon: <GitHubIcon size={14} />, label: "GitHub", cursor: "git" },
          ] as const).map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              data-cursor={s.cursor}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.09)",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(139, 92, 246, 0.55)";
                el.style.color = "#8B5CF6";
                el.style.backgroundColor = "rgba(139, 92, 246, 0.07)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(255,255,255,0.09)";
                el.style.color = "rgba(255,255,255,0.3)";
                el.style.backgroundColor = "transparent";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Tech marquee strip ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", overflow: "hidden", padding: "13px 0" }}>
        <div
          className="animate-marquee"
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {MARQUEE_ITEMS.map((tech, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.12)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {tech}
              <span style={{ margin: "0 clamp(14px, 1.8vw, 22px)", color: "rgba(139, 92, 246, 0.25)" }}>·</span>
            </span>
          ))}
        </div>
      </div>

    </footer>
  );
}

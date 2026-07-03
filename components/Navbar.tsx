"use client";

import { Download } from "lucide-react";

const LINKS = [
  { label: "ABOUT",    href: "/#about"    },
  { label: "PROJECTS", href: "/#projects" },
  { label: "SKILLS",   href: "/#skills"   },
  { label: "JOURNEY",  href: "/journey"   },
  { label: "CONTACT",  href: "/#contact"  },
];

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div
        className="nav-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "14px clamp(16px, 4vw, 48px)",
        }}
      >
        {/* ── Logo ── */}
        <a
          href="/#hero"
          className="nav-logo"
          style={{
            justifySelf: "start",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textDecoration: "none",
            color: "#fff",
            userSelect: "none",
          }}
        >
          AK<span style={{ color: "#8B5CF6" }}>.</span>
        </a>

        {/* ── Centered links ── */}
        <ul
          className="nav-list"
          style={{
            justifySelf: "center",
            display: "flex",
            alignItems: "center",
            gap: "clamp(16px, 3.5vw, 48px)",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link"
                style={{
                  color: link.label === "JOURNEY" ? "#8B5CF6" : "rgba(255,255,255,0.5)",
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: link.label === "JOURNEY" ? 600 : 500,
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "color 0.2s ease",
                  padding: "4px 0",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color =
                  link.label === "JOURNEY" ? "#8B5CF6" : "rgba(255,255,255,0.5)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Resume button ── */}
        <a
          href="/resume.pdf"
          download
          className="nav-resume-btn"
          style={{
            justifySelf: "end",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.18)",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "background-color 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "rgba(255,255,255,0.06)";
            el.style.borderColor = "rgba(255,255,255,0.4)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "transparent";
            el.style.borderColor = "rgba(255,255,255,0.18)";
          }}
        >
          <Download size={13} />
          <span className="nav-resume-label">Resume</span>
        </a>
      </div>
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";

const LINKS = [
  { label: "ABOUT",    href: "/#about",    sectionId: "about"    },
   { label: "SKILLS",   href: "/#skills",   sectionId: "skills"   },
  { label: "PROJECTS", href: "/#projects", sectionId: "projects" },
  { label: "JOURNEY",  href: "/journey",   sectionId: null       },
  { label: "CONTACT",  href: "/#contact",  sectionId: "contact"  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const pathname = usePathname();

  /* Scroll-spy: highlight the nav link for whichever section is currently in view */
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = LINKS
      .map((l) => l.sectionId)
      .filter((id): id is string => id !== null)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveSectionId(topMost.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (link: (typeof LINKS)[number]) =>
    pathname === "/journey" ? link.sectionId === null : link.sectionId === activeSectionId;

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
            gridColumn: 1,
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

        {/* ── Centered links (desktop only) ── */}
        <ul
          className="nav-list nav-desktop-only"
          style={{
            gridColumn: 2,
            justifySelf: "center",
            alignItems: "center",
            gap: "clamp(16px, 3.5vw, 48px)",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {LINKS.map((link) => {
            const active = isActive(link);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link"
                  style={{
                    color: active ? "#8B5CF6" : "rgba(255,255,255,0.5)",
                    fontSize: "11px",
                    letterSpacing: "0.22em",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: active ? 600 : 500,
                    textDecoration: "none",
                    textTransform: "uppercase",
                    transition: "color 0.2s ease",
                    padding: "4px 0",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color =
                    active ? "#8B5CF6" : "rgba(255,255,255,0.5)")}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ── Right side: resume button (desktop) / hamburger toggle (mobile) ── */}
        <div style={{ gridColumn: 3, justifySelf: "end", display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            href="/Akshay_Kothekar_Resume.pdf"
            download
            data-cursor="download"
            className="nav-resume-btn nav-desktop-only"
            style={{
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
            <span>Resume</span>
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="nav-mobile-toggle"
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "transparent",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown panel ── */}
      {open && (
        <div
          className="nav-mobile-panel"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            padding: "8px clamp(16px, 4vw, 48px) 20px",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
            {LINKS.map((link) => {
              const active = isActive(link);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      padding: "14px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      color: active ? "#8B5CF6" : "rgba(255,255,255,0.7)",
                      fontSize: "13px",
                      letterSpacing: "0.18em",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: active ? 600 : 500,
                      textDecoration: "none",
                      textTransform: "uppercase",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="/Akshay_Kothekar_Resume.pdf"
            download
            data-cursor="download"
            onClick={() => setOpen(false)}
            style={{
              marginTop: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}

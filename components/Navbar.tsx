"use client";

const LINKS = [
  { label: "ABOUT",      href: "#about"        },
  { label: "PROJECTS",   href: "#projects"      },
  { label: "SKILLS",     href: "#skills"        },
  { label: "CONTACT",    href: "#contact"       },
];

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <ul
        className="nav-list"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "clamp(20px, 4vw, 52px)",
          listStyle: "none",
          margin: 0,
          padding: "14px clamp(16px, 4vw, 48px)",
        }}
      >
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="nav-link"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "11px",
                letterSpacing: "0.22em",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s ease",
                padding: "4px 0",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

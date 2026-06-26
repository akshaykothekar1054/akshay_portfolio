"use client";

const LINKS = [
  { label: "ABOUT",     href: "#about" },
  { label: "CUSTOMERS", href: "#testimonials" },
  { label: "PROJECTS",  href: "#projects" },
  { label: "CONTACT",   href: "#contact" },
];

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
    >
      {/* nav-list class lets globals.css tighten padding + spacing on mobile */}
      <ul className="nav-list" style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        listStyle: "none",
        margin: 0,
        padding: "13px 40px",
      }}>
        {LINKS.map((link) => (
          <li key={link.href}>
            {/* nav-link class lets globals.css reduce font/tracking on mobile */}
            <a
              href={link.href}
              className="nav-link"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "11px",
                letterSpacing: "0.25em",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                textDecoration: "none",
                textTransform: "uppercase" as const,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

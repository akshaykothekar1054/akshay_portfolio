"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "digital-content",
    num: "01",
    client: "Promax Scientific",
    title: "DIGITAL CONTENT CREATION PLATFORM",
    desc: "End-to-end platform with Canva-like drag-and-drop editor. Handles 100+ concurrent display devices.",
    tags: ["React.js", "Node.js", "MySQL", "HTML Canvas", "ImageKit"],
    link: "#contact",
    accent: "#8B5CF6",
    cardBg: "#111111",
    thumb: "linear-gradient(135deg, #1a0533 0%, #6d28d9 60%, #8B5CF6 100%)",
  },
  {
    id: "agendamaker",
    num: "02",
    client: "AgendaMaker",
    title: "EVENT AGENDA MANAGEMENT SYSTEM",
    desc: "RESTful API system for managing event agendas, sessions and speakers with conflict-prevention scheduling.",
    tags: ["Node.js", "MySQL", "Express.js", "REST APIs"],
    link: "#contact",
    accent: "#06b6d4",
    cardBg: "#0f0f0f",
    thumb: "linear-gradient(135deg, #0c2340 0%, #0369a1 60%, #0ea5e9 100%)",
  },
  {
    id: "hrm",
    num: "03",
    client: "Internal Product",
    title: "HUMAN RESOURCE MANAGEMENT SYSTEM",
    desc: "Modular HRM covering onboarding, attendance tracking and reimbursements with role-based access control.",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript"],
    link: "#contact",
    accent: "#22c55e",
    cardBg: "#121212",
    thumb: "linear-gradient(135deg, #052e16 0%, #15803d 60%, #22c55e 100%)",
  },
  {
    id: "gym-saas",
    num: "04",
    client: "SaaS Product",
    title: "GYM MANAGEMENT SAAS PLATFORM",
    desc: "Multi-tenant SaaS for gyms — member management, attendance and payments with real-time updates.",
    tags: ["React.js", "Node.js", "Supabase", "PostgreSQL"],
    link: "#contact",
    accent: "#EC4899",
    cardBg: "#0e0e0e",
    thumb: "linear-gradient(135deg, #3b0764 0%, #9333ea 60%, #a855f7 100%)",
  },
] as const;

const CARD_RADIUS = "clamp(14px, 1.8vw, 20px)";
const DEFAULT_BORDER = "1px solid rgba(255,255,255,0.14)";

export default function Projects() {
  return (
    <section id="projects" style={{ backgroundColor: "#000", padding: "clamp(64px, 10vh, 120px) 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 5vw, 52px)" }}>

        {/* ── Header ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 10,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#8B5CF6",
            marginBottom: 12,
          }}
        >
          Portfolio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.07, duration: 0.5, ease: "easeOut" }}
          style={{
            fontFamily: '"Anton", sans-serif',
            fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)",
            color: "#fff",
            lineHeight: 0.9,
            marginBottom: "clamp(32px, 5vh, 56px)",
          }}
        >
          PROJECTS
        </motion.h2>

        {/* ── Card grid — 3 per row on desktop, 2 on tablet, 1 on mobile ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "clamp(20px, 2.4vw, 32px)" }}
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: project.cardBg,
                borderRadius: CARD_RADIUS,
                border: DEFAULT_BORDER,
                overflow: "hidden",
                transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.boxShadow = "0 20px 48px -12px rgba(255,255,255,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Thumbnail */}
              <div style={{ position: "relative", height: "clamp(140px, 18vw, 190px)", flexShrink: 0, background: project.thumb }}>
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)," +
                      "linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 16,
                    fontFamily: '"Anton", sans-serif',
                    fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)",
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "0.05em",
                    textShadow: "0 2px 12px rgba(0,0,0,0.4)",
                  }}
                >
                  {project.num}
                </span>
              </div>

              {/* Body */}
              <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "clamp(18px, 2vw, 26px)" }}>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(9px, 0.85vw, 11px)",
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {project.client}
                </span>
                <h3
                  style={{
                    fontFamily: '"Anton", sans-serif',
                    fontSize: "clamp(1.1rem, 1.7vw, 1.5rem)",
                    color: "#fff",
                    lineHeight: 1.05,
                    letterSpacing: "-0.01em",
                    marginBottom: 10,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(0.8rem, 0.9vw, 0.875rem)",
                    color: "rgba(255,255,255,0.42)",
                    lineHeight: 1.65,
                    marginBottom: 16,
                  }}
                >
                  {project.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "clamp(9px, 0.75vw, 10.5px)",
                        color: project.accent,
                        border: `1px solid ${project.accent}59`,
                        borderRadius: 999,
                        padding: "3px 11px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  style={{
                    marginTop: "auto",
                    alignSelf: "flex-start",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(10px, 0.8vw, 11.5px)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "9px 18px",
                    borderRadius: 999,
                    border: "1.5px solid rgba(255,255,255,0.18)",
                    transition: "background 0.28s ease, border-color 0.28s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = project.accent;
                    e.currentTarget.style.borderColor = project.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                  }}
                >
                  LIVE PROJECT &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

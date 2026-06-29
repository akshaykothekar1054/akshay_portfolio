"use client";

import { useEffect, useRef, useState } from "react";
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
    thumbs: [
      "linear-gradient(135deg, #1a0533 0%, #6d28d9 60%, #8B5CF6 100%)",
      "linear-gradient(135deg, #0f1f3d 0%, #2563eb 60%, #3b82f6 100%)",
      "linear-gradient(135deg, #1e1b4b 0%, #4338ca 60%, #6366f1 100%)",
    ],
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
    thumbs: [
      "linear-gradient(135deg, #0c2340 0%, #0369a1 60%, #0ea5e9 100%)",
      "linear-gradient(135deg, #0e1a2d 0%, #0891b2 60%, #06b6d4 100%)",
      "linear-gradient(135deg, #042f2e 0%, #0f766e 60%, #14b8a6 100%)",
    ],
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
    thumbs: [
      "linear-gradient(135deg, #052e16 0%, #15803d 60%, #22c55e 100%)",
      "linear-gradient(135deg, #042f2e 0%, #0f766e 60%, #14b8a6 100%)",
      "linear-gradient(135deg, #1a2e05 0%, #4d7c0f 60%, #65a30d 100%)",
    ],
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
    thumbs: [
      "linear-gradient(135deg, #3b0764 0%, #9333ea 60%, #a855f7 100%)",
      "linear-gradient(135deg, #500724 0%, #be185d 60%, #ec4899 100%)",
      "linear-gradient(135deg, #1e1b4b 0%, #7c3aed 60%, #8B5CF6 100%)",
    ],
  },
] as const;

type Project = (typeof PROJECTS)[number];

const TAB_H = 30; // px — height of peeking tab strip per card

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  /* Default to 140 until ResizeObserver measures; avoids layout jump */
  const [headerH, setHeaderH] = useState(140);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new ResizeObserver(([entry]) => {
      setHeaderH(Math.round(entry.contentRect.height));
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" style={{ backgroundColor: "#000" }}>

      {/* ── Sticky header — stays visible while cards stack below ── */}
      <div
        ref={headerRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: PROJECTS.length + 10,
          backgroundColor: "#000",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(28px, 4.5vh, 52px) clamp(16px, 5vw, 52px) clamp(18px, 3vh, 36px)",
        }}>
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
            }}
          >
            PROJECTS
          </motion.h2>
        </div>
      </div>

      {/*
        Each card:
          position sticky, top = headerH + index * TAB_H
          height = 100vh - headerH - index * TAB_H
        → card 1 pins just below the header
        → card 2 pins 30px lower, leaving card 1's tab strip visible
        → card 3 pins another 30px lower, and so on
        paddingBottom gives the last card dwell time before the next section
      */}
      <div style={{ paddingBottom: "20vh" }}>
        {PROJECTS.map((project, index) => {
          const stickyTop = headerH + index * TAB_H;
          const cardHeight = `calc(100vh - ${stickyTop}px)`;

          const OUTLINE = `linear-gradient(${project.cardBg},${project.cardBg}) padding-box, linear-gradient(to right, ${project.accent}, #EC4899) border-box`;
          const FILLED  = `linear-gradient(to right, ${project.accent}, #EC4899) padding-box, linear-gradient(to right, ${project.accent}, #EC4899) border-box`;

          return (
            <div
              key={project.id}
              style={{
                position: "sticky",
                top: stickyTop,
                height: cardHeight,
                zIndex: index + 1,
                backgroundColor: "#000",
              }}
            >
              {/* Centered container — same max-width / padding as Services */}
              <div style={{
                maxWidth: 1200,
                margin: "0 auto",
                padding: "0 clamp(16px, 5vw, 52px)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}>

                {/* Tab strip — this 30px strip peeks out when next card overlaps */}
                <div style={{
                  height: TAB_H,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: `linear-gradient(to right, ${project.accent}1a, transparent 70%)`,
                  borderBottom: `1px solid ${project.accent}25`,
                  padding: "0 clamp(14px, 2vw, 24px)",
                }}>
                  <span style={{
                    fontFamily: '"Anton", sans-serif',
                    fontSize: 11,
                    color: project.accent,
                    letterSpacing: "0.2em",
                    flexShrink: 0,
                  }}>
                    {project.num}
                  </span>
                  <span style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.32)",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                    {project.title}
                  </span>
                </div>

                {/* Card body — rounded top, extends below viewport */}
                <div style={{
                  flex: 1,
                  backgroundColor: project.cardBg,
                  borderRadius: "clamp(12px, 1.6vw, 18px) clamp(12px, 1.6vw, 18px) 0 0",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderBottom: "none",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  padding: "clamp(18px, 2.8vw, 40px)",
                  position: "relative",
                }}>

                  {/* Accent glow */}
                  <div aria-hidden="true" style={{
                    position: "absolute",
                    top: -60,
                    left: "20%",
                    width: "60%",
                    height: 180,
                    background: `radial-gradient(ellipse, ${project.accent}10 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }} />

                  {/* Top row: large num + client  /  live button */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "clamp(8px, 1.5vh, 18px)",
                  }}>
                    <div>
                      <span style={{
                        fontFamily: '"Anton", sans-serif',
                        fontSize: "clamp(2.2rem, 4.5vw, 5.5rem)",
                        color: `${project.accent}1a`,
                        lineHeight: 1,
                        display: "block",
                        userSelect: "none",
                      }}>
                        {project.num}
                      </span>
                      <span style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "clamp(9px, 0.85vw, 11px)",
                        color: "rgba(255,255,255,0.28)",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                      }}>
                        {project.client}
                      </span>
                    </div>

                    <a
                      href={project.link}
                      style={{
                        display: "inline-block",
                        padding: "clamp(7px, 1vh, 10px) clamp(12px, 1.6vw, 22px)",
                        borderRadius: 999,
                        background: OUTLINE,
                        border: "1.5px solid transparent",
                        color: "#fff",
                        fontSize: "clamp(9px, 0.75vw, 11px)",
                        fontFamily: "Inter, sans-serif",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        transition: "background 0.28s ease",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = FILLED)}
                      onMouseLeave={(e) => (e.currentTarget.style.background = OUTLINE)}
                    >
                      LIVE PROJECT &rarr;
                    </a>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: '"Anton", sans-serif',
                    fontSize: "clamp(1.5rem, 3.5vw, 4.2rem)",
                    color: "#fff",
                    lineHeight: 0.95,
                    letterSpacing: "-0.01em",
                    marginBottom: "clamp(8px, 1.4vh, 16px)",
                    maxWidth: "78%",
                  }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(0.75rem, 0.92vw, 0.9rem)",
                    color: "rgba(255,255,255,0.38)",
                    lineHeight: 1.7,
                    maxWidth: 500,
                    marginBottom: "clamp(8px, 1.4vh, 14px)",
                  }}>
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", gap: "clamp(5px, 0.7vw, 9px)", flexWrap: "wrap" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "clamp(9px, 0.75vw, 11px)",
                        color: project.accent,
                        border: `1px solid ${project.accent}30`,
                        borderRadius: 999,
                        padding: "3px clamp(9px, 1vw, 13px)",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Thumbnail strips — pushed to bottom */}
                  <div style={{
                    marginTop: "auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "clamp(6px, 1vw, 14px)",
                    height: "clamp(70px, 18vh, 160px)",
                  }}>
                    {project.thumbs.map((thumb, ti) => (
                      <div
                        key={ti}
                        aria-hidden="true"
                        style={{
                          background: thumb,
                          borderRadius: "clamp(6px, 0.8vw, 10px)",
                          overflow: "hidden",
                        }}
                      >
                        <div style={{
                          width: "100%", height: "100%",
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)," +
                            "linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
                          backgroundSize: "18px 18px",
                        }} />
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

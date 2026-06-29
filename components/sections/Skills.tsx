"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "FRONTEND DEVELOPMENT",
    desc: "Pixel-perfect, responsive UIs with React.js, Next.js, TailwindCSS and modern animation libraries.",
    logos: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",           alt: "React",    glow: "rgba(97,218,251,0.7)"  },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",          alt: "Next.js",  glow: "rgba(255,255,255,0.5)" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",            alt: "HTML5",    glow: "rgba(227,79,38,0.7)"   },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",              alt: "CSS3",     glow: "rgba(21,114,182,0.7)"  },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",alt: "Tailwind", glow: "rgba(6,182,212,0.7)"   },
    ],
  },
  {
    num: "02",
    title: "BACKEND DEVELOPMENT",
    desc: "Scalable REST APIs and server-side systems built with Node.js, Express, PHP and Laravel.",
    logos: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",   alt: "Node.js", glow: "rgba(51,153,51,0.7)"    },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express", glow: "rgba(255,255,255,0.45)"  },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",         alt: "PHP",     glow: "rgba(119,123,180,0.7)"   },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", alt: "Laravel", glow: "rgba(255,45,32,0.7)"     },
    ],
  },
  {
    num: "03",
    title: "DATABASE DESIGN",
    desc: "Efficient schema design, query optimisation and data modelling with MySQL and PostgreSQL.",
    logos: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",           alt: "MySQL",      glow: "rgba(0,117,143,0.7)"  },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL", glow: "rgba(51,103,145,0.7)" },
    ],
  },
  {
    num: "04",
    title: "SYSTEM ARCHITECTURE",
    desc: "Multi-tenant SaaS design, modular component systems and scalable API patterns.",
    logos: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker",     glow: "rgba(13,183,237,0.7)"  },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",       alt: "Git",        glow: "rgba(240,80,50,0.7)"   },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",   alt: "Linux",      glow: "rgba(255,210,0,0.6)"   },
    ],
  },
  {
    num: "05",
    title: "TOOLS & WORKFLOW",
    desc: "Agile / Scrum workflows using Git, Postman, Figma, Jira and cPanel.",
    logos: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",    alt: "Git",     glow: "rgba(240,80,50,0.7)"   },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma",   glow: "rgba(162,89,255,0.7)"  },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",   alt: "Jira",    glow: "rgba(38,132,255,0.7)"  },
    ],
  },
  {
    num: "06",
    title: "API INTEGRATION",
    desc: "Third-party API integration, real-time systems, ImageKit CDN and JSON data pipelines.",
    logos: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", glow: "rgba(247,223,30,0.7)"  },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",        alt: "Postman",    glow: "rgba(255,108,55,0.7)"  },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",          alt: "Node.js",    glow: "rgba(51,153,51,0.6)"   },
    ],
  },
] as const;

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="skills"
      style={{
        backgroundColor: "#0D0D0D",
        padding: "clamp(48px, 8vh, 96px) 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 5vw, 48px)" }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{ marginBottom: "clamp(28px, 5vh, 56px)" }}
        >
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 10,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#8B5CF6",
            marginBottom: 14,
          }}>
            What I Do
          </p>
          <h2 style={{
            fontFamily: '"Anton", sans-serif',
            fontSize: "clamp(3rem, 8vw, 7rem)",
            color: "#fff",
            lineHeight: 0.9,
            letterSpacing: "-0.01em",
          }}>
            SERVICES
          </h2>
        </motion.div>

        {/* ── Service rows ── */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {SERVICES.map((s, idx) => {
            const on = active === s.num;
            return (
              <motion.div
                key={s.num}
                onMouseEnter={() => setActive(s.num)}
                onMouseLeave={() => setActive(null)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: idx * 0.07, duration: 0.5, ease: "easeOut" }}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "clamp(10px, 2vw, 28px)",
                  padding: "clamp(18px, 2.8vh, 28px) clamp(10px, 1.5vw, 20px) clamp(18px, 2.8vh, 28px) clamp(16px, 2vw, 24px)",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  background: on ? "rgba(139,92,246,0.045)" : "transparent",
                  transition: "background 0.3s ease",
                  cursor: "default",
                  overflow: "hidden",
                }}
              >
                {/* Left gradient accent bar */}
                <motion.div
                  animate={{ scaleY: on ? 1 : 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  style={{
                    position: "absolute", left: 0, top: 0, bottom: 0,
                    width: 3,
                    background: "linear-gradient(to bottom, #8B5CF6, #EC4899)",
                    transformOrigin: "top",
                    borderRadius: "0 2px 2px 0",
                  }}
                />

                {/* Number */}
                <span
                  style={{
                    fontFamily: '"Anton", sans-serif',
                    fontSize: "clamp(2.2rem, 4vw, 4.5rem)",
                    lineHeight: 1,
                    color: on ? "#8B5CF6" : "rgba(255,255,255,0.09)",
                    transition: "color 0.3s ease",
                    flexShrink: 0,
                    minWidth: "clamp(52px, 7vw, 90px)",
                  }}
                >
                  {s.num}
                </span>

                {/* Title + desc */}
                <div style={{ flex: 1, minWidth: "clamp(180px, 30vw, 280px)" }}>
                  <p style={{
                    fontFamily: '"Anton", sans-serif',
                    fontSize: "clamp(1rem, 1.9vw, 1.75rem)",
                    color: on ? "#ffffff" : "rgba(255,255,255,0.82)",
                    letterSpacing: "0.04em",
                    lineHeight: 1.1,
                    transition: "color 0.3s ease",
                    margin: 0,
                  }}>
                    {s.title}
                  </p>
                  <p style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(0.72rem, 1vw, 0.88rem)",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: 6,
                    lineHeight: 1.65,
                    margin: "6px 0 0",
                  }}>
                    {s.desc}
                  </p>
                </div>

                {/* Tech logos */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(6px, 1.1vw, 14px)",
                  flexShrink: 0,
                  marginLeft: "auto",
                }}>
                  {s.logos.map((logo, li) => (
                    <motion.img
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      width={34}
                      height={34}
                      draggable={false}
                      animate={{
                        scale:   on ? 1.12 : 0.82,
                        opacity: on ? 1    : 0.22,
                      }}
                      transition={{
                        delay:    on ? li * 0.055 : 0,
                        duration: 0.22,
                        ease:     "easeOut",
                      }}
                      style={{
                        display: "block",
                        userSelect: "none",
                        filter: on
                          ? `drop-shadow(0 0 10px ${logo.glow})`
                          : "none",
                        transition: "filter 0.3s ease",
                      }}
                    />
                  ))}
                </div>

                {/* Arrow indicator */}
                <motion.span
                  animate={{ x: on ? 0 : -10, opacity: on ? 0.55 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  aria-hidden="true"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1.1rem",
                    color: "#8B5CF6",
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  →
                </motion.span>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            marginTop: "clamp(28px, 4vh, 48px)",
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(0.7rem, 1vw, 0.8rem)",
            fontWeight: 300,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.18)",
          }}
        >
          Always learning — currently exploring AI integrations &amp; edge deployment.
        </motion.p>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

/* ── Data ─────────────────────────────────────────────────────── */
const EDUCATION = [
  {
    period: "2019 – 2023",
    degree: "B.E. Computer Science",
    institution: "Sipna College of Engineering & Technology",
    location: "Amravati, MH",
    cgpa: "7.5 / 10.0",
  },
] as const;

const EXPERIENCE = [
  {
    period: "Dec 2022 – May 2023",
    role: "Web Developer Intern",
    company: "Ctronics Infotech Pvt. Ltd.",
    location: "Amravati",
    current: false,
    highlights: [
      "Developed dynamic web applications using HTML, CSS, JavaScript, and PHP.",
      "Built backend functionalities with PHP and MySQL for data-driven features; implemented responsive, cross-browser compatible UI designs.",
    ],
  },
  {
    period: "Aug 2023 – Present",
    role: "Software Engineer",
    company: "Promax Scientific Developers",
    location: "Nagpur",
    current: true,
    highlights: [
      "Developed and maintained scalable full stack applications using Node.js, PHP, MySQL, and JavaScript across multiple production modules.",
      "Built responsive, high-performance UIs with React.js, improving usability across devices.",
      "Designed and optimized database schemas and complex queries for high-volume data operations.",
      "Developed and integrated RESTful APIs enabling efficient frontend-backend communication.",
      "Implemented modular, reusable components to improve maintainability and reduce development time.",
      "Collaborated in Agile teams from requirement gathering through deployment; performed API testing and validation using Postman.",
    ],
  },
] as const;

/* ── Shared styles ────────────────────────────────────────────── */
const LABEL_STYLE: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 10,
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  color: "#8B5CF6",
  fontWeight: 600,
  marginBottom: 6,
};

const PERIOD_STYLE: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: "clamp(11px, 0.82vw, 13px)",
  color: "#8B5CF6",
  fontWeight: 500,
  letterSpacing: "0.06em",
  whiteSpace: "nowrap",
};

/* ── Timeline dot ─────────────────────────────────────────────── */
function Dot({ current = false }: { current?: boolean }) {
  return (
    <span
      style={{
        position: "absolute",
        left: -5,
        top: "clamp(10px, 1.2vh, 14px)",
        width: 9,
        height: 9,
        borderRadius: "50%",
        backgroundColor: current ? "#22c55e" : "#8B5CF6",
        boxShadow: current
          ? "0 0 0 3px rgba(34,197,94,0.18), 0 0 14px rgba(34,197,94,0.5)"
          : "0 0 0 3px rgba(139,92,246,0.18), 0 0 14px rgba(139,92,246,0.55)",
        flexShrink: 0,
      }}
    />
  );
}

/* ── Education card ────────────────────────────────────────────── */
function EduCard({ item }: { item: (typeof EDUCATION)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        paddingLeft: "clamp(28px, 4vw, 44px)",
        paddingBottom: "clamp(36px, 5vh, 56px)",
        borderLeft: "1px solid rgba(139,92,246,0.2)",
      }}
    >
      <Dot />

      {/* Period */}
      <p style={PERIOD_STYLE}>{item.period}</p>

      {/* Card */}
      <div
        style={{
          marginTop: "clamp(10px, 1.5vh, 16px)",
          backgroundColor: "#0d0d0f",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "clamp(12px, 1.2vw, 16px)",
          padding: "clamp(20px, 2.5vw, 32px)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "clamp(12px, 2vw, 24px)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(139,92,246,0.4)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(139,92,246,0.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        }}
      >
        <div>
          <p style={LABEL_STYLE}>Education</p>
          <h3
            style={{
              fontFamily: '"Anton", sans-serif',
              fontSize: "clamp(1.4rem, 2.4vw, 2.4rem)",
              color: "#fff",
              lineHeight: 1,
              letterSpacing: "-0.01em",
              margin: "0 0 6px",
            }}
          >
            {item.degree}
          </h3>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(13px, 1vw, 15px)",
              color: "rgba(255,255,255,0.55)",
              margin: 0,
            }}
          >
            {item.institution}
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(11px, 0.85vw, 13px)",
              color: "rgba(255,255,255,0.3)",
              margin: "4px 0 0",
            }}
          >
            {item.location}
          </p>
        </div>

        {/* CGPA badge */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 88,
            padding: "12px 20px",
            borderRadius: 12,
            background: "rgba(139,92,246,0.1)",
            border: "1px solid rgba(139,92,246,0.25)",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontFamily: '"Anton", sans-serif',
              fontSize: "clamp(1.4rem, 2vw, 2rem)",
              color: "#8B5CF6",
              lineHeight: 1,
            }}
          >
            {item.cgpa.split(" / ")[0]}
          </span>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 9,
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              marginTop: 4,
            }}
          >
            CGPA / 10
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Experience card ───────────────────────────────────────────── */
function ExpCard({ item, index }: { item: (typeof EXPERIENCE)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        paddingLeft: "clamp(28px, 4vw, 44px)",
        paddingBottom: "clamp(36px, 5vh, 56px)",
        borderLeft: "1px solid rgba(139,92,246,0.2)",
      }}
    >
      <Dot current={item.current} />

      {/* Period + current badge */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <p style={PERIOD_STYLE}>{item.period}</p>
        {item.current && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              padding: "2px 10px",
              borderRadius: 100,
              backgroundColor: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.3)",
              fontSize: 9,
              letterSpacing: "0.15em",
              color: "#22c55e",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#22c55e", animation: "pulse-dot 2s ease-in-out infinite" }} />
            Current
          </span>
        )}
      </div>

      {/* Card */}
      <div
        style={{
          marginTop: "clamp(10px, 1.5vh, 16px)",
          backgroundColor: "#0d0d0f",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "clamp(12px, 1.2vw, 16px)",
          padding: "clamp(20px, 2.5vw, 32px)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(139,92,246,0.4)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(139,92,246,0.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        }}
      >
        <p style={LABEL_STYLE}>Work Experience</p>
        <h3
          style={{
            fontFamily: '"Anton", sans-serif',
            fontSize: "clamp(1.4rem, 2.4vw, 2.4rem)",
            color: "#fff",
            lineHeight: 1,
            letterSpacing: "-0.01em",
            margin: "0 0 6px",
          }}
        >
          {item.role}
        </h3>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(13px, 1vw, 15px)",
            color: "rgba(255,255,255,0.5)",
            margin: "0 0 clamp(16px, 2.2vh, 24px)",
          }}
        >
          {item.company} · {item.location}
        </p>

        {/* Highlights */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "clamp(8px, 1.2vh, 12px)" }}>
          {item.highlights.map((h, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "clamp(10px, 1.2vw, 14px)",
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(12px, 0.88vw, 14px)",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.72,
              }}
            >
              <span
                style={{
                  color: "#8B5CF6",
                  fontWeight: 700,
                  flexShrink: 0,
                  marginTop: 1,
                  fontSize: 14,
                }}
              >
                —
              </span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ── Section label ─────────────────────────────────────────────── */
function SectionDivider({ num, label }: { num: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "clamp(12px, 2vw, 20px)",
        marginBottom: "clamp(28px, 4vh, 44px)",
        paddingBottom: "clamp(16px, 2.2vh, 24px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <span
        style={{
          fontFamily: '"Anton", sans-serif',
          fontSize: "clamp(2.5rem, 5vw, 5rem)",
          color: "rgba(139,92,246,0.15)",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        {num}
      </span>
      <h2
        style={{
          fontFamily: '"Anton", sans-serif',
          fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)",
          color: "#fff",
          lineHeight: 1,
          letterSpacing: "-0.01em",
          margin: 0,
        }}
      >
        {label}
      </h2>
    </motion.div>
  );
}

/* ── Main export ───────────────────────────────────────────────── */
export default function Journey() {
  return (
    <>
      {/* ── Page hero ── */}
      <section
        style={{
          backgroundColor: "#060608",
          position: "relative",
          overflow: "hidden",
          paddingTop: "clamp(100px, 14vh, 160px)",
          paddingBottom: "clamp(40px, 6vh, 72px)",
        }}
      >
        {/* Liquid blobs */}
        <div aria-hidden="true" style={{
          position: "absolute", top: "-20%", right: "-10%",
          width: "clamp(300px, 50vw, 700px)", height: "clamp(300px, 50vw, 700px)",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.32) 0%, rgba(99,57,220,0.12) 50%, transparent 75%)",
          filter: "blur(72px)",
          animation: "liquid-blob-1 11s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div aria-hidden="true" style={{
          position: "absolute", bottom: "-15%", left: "-8%",
          width: "clamp(250px, 40vw, 600px)", height: "clamp(250px, 40vw, 600px)",
          background: "radial-gradient(ellipse, rgba(236,72,153,0.18) 0%, rgba(139,92,246,0.1) 50%, transparent 75%)",
          filter: "blur(80px)",
          animation: "liquid-blob-2 14s ease-in-out infinite",
          animationDelay: "2s",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(24px, 7vw, 100px)", position: "relative", zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.35em", color: "#8B5CF6", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}
          >
            Career Path
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: '"Anton", sans-serif',
              fontSize: "clamp(3rem, 9vw, 9rem)",
              color: "#fff",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              margin: "0 0 clamp(16px, 2.5vh, 28px)",
            }}
          >
            MY<br />JOURNEY
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(13px, 1vw, 15px)",
              color: "rgba(255,255,255,0.45)",
              maxWidth: 480,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            From campus to production — a timeline of education, growth, and the projects I've shipped along the way.
          </motion.p>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section
        style={{
          backgroundColor: "#060608",
          paddingBottom: "clamp(60px, 10vh, 120px)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(24px, 7vw, 100px)" }}>

          {/* Education */}
          <div style={{ marginBottom: "clamp(44px, 7vh, 72px)" }}>
            <SectionDivider num="01" label="Education" />
            {EDUCATION.map((item) => (
              <EduCard key={item.institution} item={item} />
            ))}
          </div>

          {/* Experience */}
          <div>
            <SectionDivider num="02" label="Experience" />
            {EXPERIENCE.map((item, i) => (
              <ExpCard key={item.company} item={item} index={i} />
            ))}
            {/* Timeline end cap */}
            <div style={{
              paddingLeft: "clamp(28px, 4vw, 44px)",
              borderLeft: "1px solid rgba(139,92,246,0.2)",
              position: "relative",
            }}>
              <span style={{
                position: "absolute",
                left: -5,
                top: 0,
                width: 9, height: 9,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                boxShadow: "0 0 14px rgba(139,92,246,0.6)",
              }} />
              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 10,
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.2)",
                textTransform: "uppercase",
                margin: 0,
                paddingTop: 2,
              }}>
                The story continues…
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

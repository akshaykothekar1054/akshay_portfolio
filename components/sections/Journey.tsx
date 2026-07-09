"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

/* ── Data ──────────────────────────────────────────────────────── */
const EDUCATION = [
  {
    period: "2019 – 2023",
    degree: "B.E. Information Technology",
    institution: "Sipna College of Engineering & Technology",
    location: "Amravati, MH",
    cgpa: "7.5",
    tags: ["Data Structures", "Algorithms", "DBMS", "OS", "Networks", "OOP"],
  },
] as const;

const EXPERIENCE = [
  {
    period: "Mar 2022 – Jun 2022",
    role: "Web Developer Intern",
    company: "Nimbja Security Solutions Pvt. Ltd.",
    location: "Pune",
    current: false,
    tags: ["PHP", "MySQL", "HTML", "CSS", "React", "JavaScript"],
    highlights: [
      "Completed a full-stack development internship focused on PHP, MySQL, HTML, CSS, React, JavaScript, and responsive web development.",
      "Assisted in developing and maintaining web application modules under the guidance of senior developers.",
      "Built reusable UI components, implemented frontend pages, and gained practical experience with backend development.",
      "Participated in debugging, testing, database operations, and feature implementation while learning industry-standard practices.",
      "Successfully transitioned to a full-time Web Developer role based on internship performance.",
    ],
  },
  {
    period: "Jul 2022 – Jul 2023",
    role: "Web Developer",
    company: "Nimbja Security Solutions Pvt. Ltd.",
    location: "Pune",
    current: false,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL", "REST APIs"],
    highlights: [
      "Joined as a full-time Web Developer after completing the internship, taking ownership of feature development and client deliverables.",
      "Worked on the Book My Parcel logistics platform, developing responsive frontend interfaces using HTML, CSS, JavaScript, and Bootstrap.",
      "Integrated REST APIs with the frontend to display real-time shipment, booking, and customer data.",
      "Developed backend modules using PHP and MySQL for business workflows and data management.",
      "Fixed production issues, enhanced existing features, and collaborated with senior developers to deliver stable releases.",
      "Ensured responsive, cross-browser compatible applications while maintaining code quality and performance.",
    ],
  },
  {
    period: "Aug 2023 – May 2026",
    role: "Junior Software Engineer",
    company: "Promax Scientific Developers",
    location: "Nagpur",
    current: false,
    tags: ["React.js", "Node.js", "PHP", "MySQL", "REST APIs", "Agile"],
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

/* ── Animated timeline line ─────────────────────────────────────── */
function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <div ref={ref} style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1 }}>
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(139,92,246,0.1)" }} />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, #8B5CF6, #EC4899, rgba(236,72,153,0))",
          transformOrigin: "top",
        }}
      />
    </div>
  );
}

/* ── Timeline dot ─────────────────────────────────────────────── */
function Dot({ current = false, delay = 0 }: { current?: boolean; delay?: number }) {
  return (
    <motion.span
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
      style={{
        position: "absolute",
        left: -7,
        top: 18,
        width: 13,
        height: 13,
        borderRadius: "50%",
        backgroundColor: current ? "#22c55e" : "#8B5CF6",
        boxShadow: current
          ? "0 0 0 4px rgba(34,197,94,0.15), 0 0 20px rgba(34,197,94,0.6)"
          : "0 0 0 4px rgba(139,92,246,0.15), 0 0 20px rgba(139,92,246,0.7)",
        zIndex: 2,
      }}
    />
  );
}

/* ── Tag chip ─────────────────────────────────────────────────── */
function Tag({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: 100,
        fontSize: 10,
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        border: `1px solid ${hovered ? "rgba(139,92,246,0.55)" : "rgba(139,92,246,0.22)"}`,
        backgroundColor: hovered ? "rgba(139,92,246,0.14)" : "rgba(139,92,246,0.06)",
        color: hovered ? "#a78bfa" : "rgba(255,255,255,0.45)",
        transition: "all 0.2s ease",
        cursor: "default",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

/* ── Highlight bullet ─────────────────────────────────────────── */
function Bullet({ text, delay }: { text: string; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        fontFamily: "Inter, sans-serif",
        fontSize: "clamp(12px, 0.9vw, 14px)",
        color: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.55)",
        lineHeight: 1.75,
        padding: "clamp(6px, 1vh, 10px) clamp(10px, 1.5vw, 16px)",
        borderRadius: 10,
        backgroundColor: hovered ? "rgba(139,92,246,0.07)" : "transparent",
        borderLeft: `2px solid ${hovered ? "#8B5CF6" : "transparent"}`,
        transition: "all 0.22s ease",
        cursor: "default",
        listStyle: "none",
        marginLeft: -10,
        paddingLeft: 8,
      }}
    >
      <span style={{ color: "#8B5CF6", fontWeight: 700, flexShrink: 0, lineHeight: 1.75, fontSize: 12 }}>▸</span>
      {text}
    </motion.li>
  );
}

/* ── Education card ────────────────────────────────────────────── */
function EduCard({ item }: { item: (typeof EDUCATION)[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        paddingLeft: "clamp(32px, 5vw, 56px)",
        paddingBottom: "clamp(44px, 7vh, 72px)",
      }}
    >
      <Dot delay={0.2} />

      {/* Year pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.4 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 14px",
          borderRadius: 100,
          backgroundColor: "rgba(139,92,246,0.1)",
          border: "1px solid rgba(139,92,246,0.25)",
          marginBottom: "clamp(12px, 2vh, 18px)",
        }}
      >
        <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#8B5CF6" }} />
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.18em", color: "#a78bfa", fontWeight: 600, textTransform: "uppercase" }}>
          {item.period}
        </span>
      </motion.div>

      {/* Card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: hovered ? "#101014" : "#0c0c0f",
          border: `1px solid ${hovered ? "rgba(139,92,246,0.45)" : "rgba(255,255,255,0.06)"}`,
          borderRadius: "clamp(16px, 1.8vw, 22px)",
          padding: "clamp(24px, 3vw, 40px)",
          boxShadow: hovered ? "0 16px 60px rgba(139,92,246,0.15), 0 0 0 1px rgba(139,92,246,0.12)" : "none",
          transition: "all 0.35s ease",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 20, marginBottom: "clamp(20px, 3vh, 28px)" }}>
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 9, letterSpacing: "0.38em", color: "#8B5CF6", fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }}>
              Education
            </p>
            <h3 style={{ fontFamily: '"Anton", sans-serif', fontSize: "clamp(1.6rem, 3vw, 2.8rem)", color: "#fff", lineHeight: 0.95, letterSpacing: "-0.01em", margin: "0 0 8px" }}>
              {item.degree}
            </h3>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(13px, 1vw, 15px)", color: "rgba(255,255,255,0.5)", margin: 0 }}>
              {item.institution}
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(11px, 0.85vw, 12px)", color: "rgba(255,255,255,0.25)", margin: "4px 0 0", letterSpacing: "0.05em" }}>
              {item.location}
            </p>
          </div>

          {/* CGPA ring */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{
              position: "relative", width: 88, height: 88,
              background: "conic-gradient(#8B5CF6 270deg, rgba(139,92,246,0.15) 270deg)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{ position: "absolute", inset: 6, borderRadius: "50%", backgroundColor: hovered ? "#101014" : "#0c0c0f", transition: "background-color 0.35s ease" }} />
              <div style={{ position: "relative", textAlign: "center" }}>
                <span style={{ fontFamily: '"Anton", sans-serif', fontSize: "1.55rem", color: "#8B5CF6", lineHeight: 1, display: "block" }}>{item.cgpa}</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 8, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>CGPA</span>
              </div>
            </div>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>out of 10.0</span>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {item.tags.map((t) => <Tag key={t} label={t} />)}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Experience card ───────────────────────────────────────────── */
function ExpCard({ item, index }: { item: (typeof EXPERIENCE)[number]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        paddingLeft: "clamp(32px, 5vw, 56px)",
        paddingBottom: "clamp(44px, 7vh, 72px)",
      }}
    >
      <Dot current={item.current} delay={index * 0.12 + 0.2} />

      {/* Period row */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(12px, 2vh, 18px)", flexWrap: "wrap" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.15, duration: 0.4 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 14px",
            borderRadius: 100,
            backgroundColor: item.current ? "rgba(34,197,94,0.08)" : "rgba(139,92,246,0.1)",
            border: `1px solid ${item.current ? "rgba(34,197,94,0.28)" : "rgba(139,92,246,0.25)"}`,
          }}
        >
          <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: item.current ? "#22c55e" : "#8B5CF6", animation: item.current ? "pulse-dot 2s ease-in-out infinite" : "none" }} />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "0.18em", color: item.current ? "#4ade80" : "#a78bfa", fontWeight: 600, textTransform: "uppercase" }}>
            {item.period}
          </span>
        </motion.div>
        {item.current && (
          <span style={{
            padding: "3px 10px", borderRadius: 100,
            backgroundColor: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)",
            fontSize: 9, letterSpacing: "0.2em", color: "#22c55e",
            fontFamily: "Inter, sans-serif", fontWeight: 600, textTransform: "uppercase",
          }}>
            Current
          </span>
        )}
      </div>

      {/* Card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: hovered ? "#101014" : "#0c0c0f",
          border: `1px solid ${hovered ? (item.current ? "rgba(34,197,94,0.35)" : "rgba(139,92,246,0.45)") : "rgba(255,255,255,0.06)"}`,
          borderRadius: "clamp(16px, 1.8vw, 22px)",
          padding: "clamp(24px, 3vw, 40px)",
          boxShadow: hovered
            ? item.current
              ? "0 16px 60px rgba(34,197,94,0.08), 0 0 0 1px rgba(34,197,94,0.08)"
              : "0 16px 60px rgba(139,92,246,0.15), 0 0 0 1px rgba(139,92,246,0.12)"
            : "none",
          transition: "all 0.35s ease",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
        }}
      >
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: "clamp(16px, 2.5vh, 24px)" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 9, letterSpacing: "0.38em", color: item.current ? "#22c55e" : "#8B5CF6", fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }}>
              Work Experience
            </p>
            <h3 style={{ fontFamily: '"Anton", sans-serif', fontSize: "clamp(1.6rem, 3vw, 2.8rem)", color: "#fff", lineHeight: 0.95, letterSpacing: "-0.01em", margin: "0 0 8px" }}>
              {item.role}
            </h3>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(13px, 1vw, 15px)", color: "rgba(255,255,255,0.45)", margin: 0 }}>
              {item.company}
              <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 8px" }}>·</span>
              <span style={{ color: "rgba(255,255,255,0.28)" }}>{item.location}</span>
            </p>
          </div>

          {/* Collapse toggle */}
          <button
            onClick={() => setOpen((p) => !p)}
            aria-label={open ? "Collapse" : "Expand"}
            style={{
              width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
              border: "1px solid rgba(255,255,255,0.1)",
              backgroundColor: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", fontSize: 14, transition: "all 0.2s ease",
              transform: open ? "rotate(0deg)" : "rotate(-90deg)",
              marginTop: 4,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(139,92,246,0.15)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(139,92,246,0.35)";
              (e.currentTarget as HTMLButtonElement).style.color = "#a78bfa";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.04)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.4)";
            }}
          >
            ▾
          </button>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: open ? "clamp(20px, 3vh, 28px)" : 0, transition: "margin 0.3s ease" }}>
          {item.tags.map((t) => <Tag key={t} label={t} />)}
        </div>

        {/* Highlights — collapsible */}
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              listStyle: "none", padding: 0, margin: 0,
              display: "flex", flexDirection: "column", gap: 2,
              paddingTop: "clamp(12px, 1.8vh, 18px)",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {item.highlights.map((h, i) => (
              <Bullet key={i} text={h} delay={i * 0.06} />
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  );
}

/* ── Section header ─────────────────────────────────────────────── */
function SectionHeader({ num, label }: { num: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      style={{
        display: "flex", alignItems: "center", gap: "clamp(14px, 2.5vw, 28px)",
        marginBottom: "clamp(32px, 5vh, 52px)",
        paddingBottom: "clamp(18px, 2.5vh, 28px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <span style={{ fontFamily: '"Anton", sans-serif', fontSize: "clamp(3rem, 6vw, 6rem)", color: "rgba(139,92,246,0.12)", lineHeight: 1, userSelect: "none", letterSpacing: "-0.02em" }}>
        {num}
      </span>
      <div>
        <h2 style={{ fontFamily: '"Anton", sans-serif', fontSize: "clamp(2rem, 4vw, 4rem)", color: "#fff", lineHeight: 1, letterSpacing: "-0.01em", margin: 0 }}>
          {label}
        </h2>
      </div>
    </motion.div>
  );
}

/* ── Stats bar ──────────────────────────────────────────────────── */
const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "2", label: "Companies" },
  { value: "7.5", label: "CGPA" },
  { value: "∞", label: "Curiosity" },
];

function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      style={{
        display: "flex", flexWrap: "wrap", gap: "clamp(1px, 0.2vw, 2px)",
        marginTop: "clamp(40px, 6vh, 64px)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "clamp(12px, 1.5vw, 18px)",
        overflow: "hidden",
        backgroundColor: "rgba(255,255,255,0.02)",
      }}
    >
      {STATS.map((s, i) => (
        <div
          key={i}
          style={{
            flex: "1 1 120px",
            padding: "clamp(16px, 2.5vh, 24px) clamp(16px, 2.5vw, 28px)",
            borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            textAlign: "center",
          }}
        >
          <div style={{ fontFamily: '"Anton", sans-serif', fontSize: "clamp(1.6rem, 3vw, 2.6rem)", color: "#8B5CF6", lineHeight: 1, letterSpacing: "-0.01em" }}>
            {s.value}
          </div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(9px, 0.72vw, 11px)", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.16em", marginTop: 6 }}>
            {s.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

/* ── Main export ───────────────────────────────────────────────── */
export default function Journey() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ backgroundColor: "#060608", position: "relative", overflow: "hidden", paddingTop: "clamp(100px, 14vh, 160px)", paddingBottom: "clamp(40px, 6vh, 72px)" }}>
        {/* Blobs */}
        <div aria-hidden="true" style={{ position: "absolute", top: "-15%", right: "-8%", width: "clamp(320px, 52vw, 720px)", height: "clamp(320px, 52vw, 720px)", background: "radial-gradient(ellipse, rgba(139,92,246,0.28) 0%, transparent 70%)", filter: "blur(80px)", animation: "liquid-blob-1 12s ease-in-out infinite", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-10%", left: "-6%", width: "clamp(260px, 42vw, 620px)", height: "clamp(260px, 42vw, 620px)", background: "radial-gradient(ellipse, rgba(236,72,153,0.16) 0%, rgba(139,92,246,0.08) 50%, transparent 75%)", filter: "blur(90px)", animation: "liquid-blob-2 15s ease-in-out infinite", animationDelay: "2.5s", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(24px, 7vw, 100px)", position: "relative", zIndex: 1 }}>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.45 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: 9, letterSpacing: "0.42em", color: "#8B5CF6", textTransform: "uppercase", fontWeight: 700, marginBottom: 18 }}>
            Career Path
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: '"Anton", sans-serif', fontSize: "clamp(3.5rem, 10vw, 10rem)", color: "#fff", lineHeight: 0.86, letterSpacing: "-0.025em", margin: "0 0 clamp(20px, 3vh, 32px)" }}>
            MY<br />
            <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.35)", color: "transparent" }}>JOURNEY</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34, duration: 0.5 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(13px, 1vw, 15px)", color: "rgba(255,255,255,0.4)", maxWidth: 480, lineHeight: 1.8, margin: 0 }}>
            From campus to production — a timeline of education, growth, and the systems I've built along the way.
          </motion.p>

          <StatsBar />
        </div>
      </section>

      {/* ── Divider ── */}
      <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(139,92,246,0.3), transparent)", backgroundColor: "#060608" }} />

      {/* ── Timeline ── */}
      <section style={{ backgroundColor: "#060608", paddingTop: "clamp(56px, 8vh, 96px)", paddingBottom: "clamp(80px, 12vh, 140px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(24px, 7vw, 100px)" }}>

          {/* Education */}
          <div style={{ marginBottom: "clamp(56px, 9vh, 96px)" }}>
            <SectionHeader num="01" label="Education" />
            <div style={{ position: "relative" }}>
              <TimelineLine />
              {EDUCATION.map((item) => <EduCard key={item.institution} item={item} />)}
            </div>
          </div>

          {/* Experience */}
          <div>
            <SectionHeader num="02" label="Experience" />
            <div style={{ position: "relative" }}>
              <TimelineLine />
              {EXPERIENCE.map((item, i) => <ExpCard key={`${item.company}-${item.period}`} item={item} index={i} />)}

              {/* End cap */}
              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                style={{ paddingLeft: "clamp(32px, 5vw, 56px)", position: "relative", paddingBottom: 8 }}
              >
                <span style={{ position: "absolute", left: -9, top: 2, width: 17, height: 17, borderRadius: "50%", background: "linear-gradient(135deg, #8B5CF6, #EC4899)", boxShadow: "0 0 20px rgba(139,92,246,0.7), 0 0 40px rgba(236,72,153,0.3)", zIndex: 2 }} />
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 9, letterSpacing: "0.28em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", margin: 0, paddingTop: 4 }}>
                  The story continues…
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

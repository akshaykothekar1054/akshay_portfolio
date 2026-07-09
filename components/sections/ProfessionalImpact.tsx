"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

/* ── Data — edit stats here ───────────────────────────────────── */
type Stat = {
  label: string;
  value: string;
  numeric?: { to: number; suffix?: string };
};

const STATS: Stat[] = [
  { label: "Production Applications", value: "5+", numeric: { to: 5, suffix: "+" } },
  { label: "Features Delivered", value: "20+", numeric: { to: 20, suffix: "+" } },
  { label: "REST APIs Developed", value: "200+", numeric: { to: 200, suffix: "+" } },
  { label: "UI Components Built", value: "100+", numeric: { to: 100, suffix: "+" } },
  { label: "Years of Professional Experience", value: "4", numeric: { to: 4 } },
  { label: "Development Methodology", value: "Agile" },
  { label: "Version Control & Deployment", value: "Git & CI/CD" },
  { label: "Schema & Query Optimization", value: "Database Design" },
];

const ease = "easeOut" as const;

/* ── Count-up counter (numeric stats only) ───────────────────────
   Skips the animation entirely under prefers-reduced-motion. */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      motionValue.set(to);
      return;
    }
    const controls = animate(motionValue, to, { duration: 1.7, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [inView, to, motionValue]);

  useEffect(() => rounded.on("change", (v) => setDisplay(v)), [rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ── Stat cell ────────────────────────────────────────────────── */
function StatCell({ stat, index }: { stat: Stat; index: number }) {
  const fullValue = stat.numeric ? `${stat.numeric.to}${stat.numeric.suffix ?? ""}` : stat.value;

  return (
    <motion.div
      className="impact-cell"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease }}
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "clamp(30px, 4vw, 44px) clamp(16px, 2.2vw, 28px)",
      }}
    >
      {/* top accent bar — animates in on cell hover via CSS */}
      <span
        className="impact-bar"
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(to right, #8B5CF6, #EC4899)",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.35s ease",
        }}
      />

      <dt
        className="impact-label"
        style={{
          margin: "clamp(12px, 1.6vh, 16px) 0 0",
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(10px, 0.85vw, 11.5px)",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#71717a",
          transition: "color 0.3s ease",
        }}
      >
        {stat.label}
      </dt>

      <dd
        style={{
          margin: 0,
          fontFamily: '"Anton", sans-serif',
          fontSize: stat.numeric ? "clamp(2.3rem, 4.2vw, 3.4rem)" : "clamp(1.25rem, 2.1vw, 1.7rem)",
          lineHeight: 1,
          letterSpacing: "-0.01em",
          color: "#8B5CF6",
        }}
      >
        <span aria-hidden="true">
          {stat.numeric ? <Counter to={stat.numeric.to} suffix={stat.numeric.suffix} /> : stat.value}
        </span>
        <span
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            margin: -1,
            padding: 0,
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        >
          {fullValue}
        </span>
      </dd>
    </motion.div>
  );
}

/* ── Section ──────────────────────────────────────────────────── */
export default function ProfessionalImpact() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#fff",
        padding: "clamp(64px, 9vh, 120px) 0",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-14%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(420px, 60vw, 820px)",
          height: "clamp(280px, 36vw, 460px)",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, rgba(236,72,153,0.03) 55%, transparent 75%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "0 clamp(16px, 5vw, 48px)" }}>
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "clamp(48px, 7vh, 80px)" }}>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 10,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#8B5CF6",
              fontWeight: 600,
              marginBottom: 14,
            }}
          >
            By The Numbers
          </motion.p>

          <motion.h2
            id="impact-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.6, ease }}
            style={{
              fontFamily: '"Anton", sans-serif',
              fontSize: "clamp(2.6rem, 6.4vw, 5.5rem)",
              color: "#000",
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            PROFESSIONAL IMPACT
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18, duration: 0.5, ease }}
            style={{
              width: 56,
              height: 2,
              borderRadius: 2,
              margin: "clamp(20px, 3vh, 28px) auto 0",
              background: "linear-gradient(to right, #8B5CF6, #EC4899)",
              transformOrigin: "center",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24, duration: 0.5, ease }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(0.85rem, 1vw, 0.95rem)",
              color: "#71717a",
              maxWidth: 440,
              margin: "clamp(16px, 2.4vh, 22px) auto 0",
              lineHeight: 1.75,
            }}
          >
            Numbers that reflect real, shipped work — not just claims.
          </motion.p>
        </div>

        {/* ── Stat table ── */}
        <dl className="impact-grid">
          {STATS.map((stat, i) => (
            <StatCell key={stat.label} stat={stat} index={i} />
          ))}
        </dl>
      </div>

      <style>{`
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          margin: 0;
          background-color: rgba(0,0,0,0.07);
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: clamp(16px, 1.6vw, 22px);
          overflow: hidden;
        }
        .impact-cell {
          background-color: #fff;
        }
        .impact-cell:hover .impact-bar {
          transform: scaleX(1);
        }
        .impact-cell:hover .impact-label {
          color: #3f3f46;
        }
        @media (max-width: 860px) {
          .impact-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .impact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

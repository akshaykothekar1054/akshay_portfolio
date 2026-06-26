"use client";

import { motion } from "framer-motion";

// ── Placeholder data ───────────────────────────────────────────────────────
// Replace with real client feedback before going live.
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Akshay delivered a robust REST API system ahead of schedule. His backend architecture is clean, well-documented, and a pleasure to build on top of.",
    name: "Ravi M.",
    role: "Tech Lead",
    initials: "RM",
  },
  {
    id: 2,
    quote:
      "His React.js skills transformed our admin dashboard. The UI is fast, intuitive, and our team adopted it immediately with zero training needed.",
    name: "Priya S.",
    role: "Product Manager",
    initials: "PS",
  },
  {
    id: 3,
    quote:
      "The database schema he designed handles our 10k daily records effortlessly. Query performance improved by 60% after his optimizations.",
    name: "Suresh K.",
    role: "CTO",
    initials: "SK",
  },
  {
    id: 4,
    quote:
      "Incredibly collaborative and writes clean, maintainable code. Sprint reviews are always smooth when Akshay is on the task.",
    name: "Neha P.",
    role: "Scrum Master",
    initials: "NP",
  },
  {
    id: 5,
    quote:
      "Akshay's multi-tenant architecture was exactly what we needed to scale. He understood our requirements from day one and executed flawlessly.",
    name: "Amit D.",
    role: "Startup Founder",
    initials: "AD",
  },
  {
    id: 6,
    quote:
      "Fast turnaround, great communication, and consistently high quality output. Would absolutely work with Akshay again on future projects.",
    name: "Divya R.",
    role: "HR Manager",
    initials: "DR",
  },
] as const;

// ── Component ──────────────────────────────────────────────────────────────
export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#111111] py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="mb-16 lg:mb-20 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-[#F59E0B]"
          >
            Testimonials
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display leading-none text-white"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            KIND WORDS
          </motion.h2>
        </div>

        {/* ── 3-column card grid ── */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                delay: i * 0.08,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col rounded-2xl bg-black border border-[#222222] overflow-hidden transition-all duration-300 hover:border-[#F59E0B]/30"
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 8px 40px rgba(245,158,11,0.12)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "none")
              }
            >
              {/* Golden accent strip */}
              <div
                className="h-[3px] w-full flex-none"
                style={{
                  background:
                    "linear-gradient(to right, #F59E0B, #FBBF24, #F59E0B)",
                }}
                aria-hidden="true"
              />

              {/* Card content */}
              <div className="flex flex-1 flex-col p-6">

                {/* Opening quote mark */}
                <span
                  className="mb-4 block font-display leading-none text-[#F59E0B]/25 select-none"
                  style={{ fontSize: "4rem", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  "
                </span>

                {/* Quote */}
                <p className="flex-1 text-sm italic leading-relaxed text-white/60 mb-6">
                  {t.quote}
                </p>

                {/* Author row */}
                <div className="flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  {/* Initials avatar */}
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#F59E0B]/10 text-[11px] font-bold tracking-wide text-[#F59E0B] border border-[#F59E0B]/20">
                    {t.initials}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="mt-0.5 text-[11px] text-white/35">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Placeholder disclaimer ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 text-center text-[11px] text-white/20 tracking-[0.15em]"
        >
          — Testimonials will be updated with real client feedback
        </motion.p>

      </div>
    </section>
  );
}

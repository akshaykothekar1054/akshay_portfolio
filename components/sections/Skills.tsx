"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "FRONTEND DEVELOPMENT",
    desc: "React.js, HTML5, CSS3, TailwindCSS, Responsive Design",
  },
  {
    num: "02",
    title: "BACKEND DEVELOPMENT",
    desc: "Node.js, REST APIs, PHP, Laravel, JWT Authentication",
  },
  {
    num: "03",
    title: "DATABASE DESIGN",
    desc: "MySQL, PostgreSQL, Schema Optimization, Query Performance",
  },
  {
    num: "04",
    title: "SYSTEM ARCHITECTURE",
    desc: "Multi-Tenancy, Scalable APIs, Modular Components",
  },
  {
    num: "05",
    title: "TOOLS & WORKFLOW",
    desc: "Git, Postman, Figma, Agile/Scrum, cPanel, Jira",
  },
  {
    num: "06",
    title: "INTEGRATION",
    desc: "API Integration, JSON Processing, ImageKit CDN, Real-time Systems",
  },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0D0D0D] py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-[#8B5CF6]"
          >
            What I Do
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display leading-none tracking-tight text-white"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            SERVICES
          </motion.h2>
        </div>

        {/* ── Numbered rows ── */}
        <div className="border-t border-white/[0.07] divide-y divide-white/[0.07]">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: i * 0.09,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={[
                "group flex items-baseline gap-5 lg:gap-10",
                "py-6 lg:py-8 cursor-default",
                "hover:bg-[#8B5CF6]/[0.06] transition-colors duration-150",
                "-mx-6 lg:-mx-10 px-6 lg:px-10",
              ].join(" ")}
            >
              {/* Number */}
              <span
                aria-hidden="true"
                className="font-display leading-none tabular-nums select-none flex-none w-16 lg:w-24 text-white/15 group-hover:text-[#8B5CF6] transition-colors duration-150"
                style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
              >
                {s.num}
              </span>

              {/* Title */}
              <span
                className="font-display leading-tight tracking-widest text-white flex-none lg:w-[340px]"
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)" }}
              >
                {s.title}
              </span>

              {/* Description */}
              <span className="hidden md:block ml-auto text-[0.83rem] font-light leading-relaxed text-white/35">
                {s.desc}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 text-[0.8rem] font-light uppercase tracking-[0.2em] text-white/20"
        >
          Always learning — currently exploring AI integrations &amp; edge deployment.
        </motion.p>

      </div>
    </section>
  );
}

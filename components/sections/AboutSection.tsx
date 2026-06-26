"use client";

import { motion } from "framer-motion";
import { PERSON, EXPERIENCE, EDUCATION } from "@/lib/constants";

const FLOATERS = [
  { emoji: "⭐", top: "8%",  left: "4%",  delay: 0,    dur: 3.4 },
  { emoji: "💜", top: "14%", left: "90%", delay: 0.6,  dur: 3.8 },
  { emoji: "🚀", top: "72%", left: "3%",  delay: 1.1,  dur: 4.0 },
  { emoji: "✨", top: "68%", left: "91%", delay: 1.7,  dur: 3.2 },
  { emoji: "⚡", top: "3%",  left: "50%", delay: 0.9,  dur: 3.6 },
  { emoji: "💻", top: "85%", left: "50%", delay: 0.3,  dur: 4.2 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 bg-[#111111] overflow-hidden">

      {/* Floating emojis */}
      {FLOATERS.map(({ emoji, top, left, delay, dur }) => (
        <motion.span
          key={emoji}
          className="absolute text-2xl select-none pointer-events-none opacity-60"
          style={{ top, left }}
          animate={{ y: [0, -16, 0] }}
          transition={{ delay, duration: dur, repeat: Infinity, ease: "easeInOut" }}
        >
          {emoji}
        </motion.span>
      ))}

      {/* Soft glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/[0.06] blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: visual card + education ── */}
        <div className="space-y-5">
          {/* Photo placeholder card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[20px] p-px bg-gradient-to-br from-[#8B5CF6]/40 to-[#EC4899]/30"
          >
            <div className="rounded-[19px] bg-[#0C0C0C] aspect-[4/3] flex flex-col items-center justify-center gap-3">
              <div className="text-8xl">👨‍💻</div>
              <p className="text-white/30 text-xs tracking-widest uppercase">Akshay Kothekar</p>
              <p className="text-white/20 text-[11px]">{PERSON.location}</p>
            </div>
          </motion.div>

          {/* Education card */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[16px] border border-white/[0.08] bg-white/[0.03] p-5"
          >
            <p className="text-[#8B5CF6] font-mono text-[10px] tracking-[0.3em] uppercase mb-3">
              Education
            </p>
            {EDUCATION.map((ed) => (
              <div key={ed.institution}>
                <p className="text-white font-medium text-sm">
                  {ed.degree} — {ed.field}
                </p>
                <p className="text-white/45 text-xs mt-0.5">{ed.institution}</p>
                <p className="text-white/35 text-xs">{ed.period}</p>
                <span className="mt-3 inline-block px-3 py-1 rounded-full text-[11px] font-medium bg-gradient-to-r from-[#8B5CF6]/20 to-[#EC4899]/20 text-[#8B5CF6] border border-[#8B5CF6]/20">
                  CGPA {ed.cgpa}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Bio + experience timeline ── */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#8B5CF6] mb-4"
          >
            About Me
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-display leading-none text-white mb-6"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
          >
            CRAFTING DIGITAL
            <br />
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
              EXPERIENCES
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-white/55 leading-relaxed mb-10 text-[15px]"
          >
            {PERSON.summary}
          </motion.p>

          {/* Experience timeline */}
          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                variants={fadeUp}
                custom={i + 3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex gap-5 group"
              >
                {/* Dot + line */}
                <div className="flex flex-col items-center flex-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] mt-1 ring-4 ring-[#8B5CF6]/15" />
                  {i < EXPERIENCE.length - 1 && (
                    <div className="flex-1 w-px bg-white/[0.07] mt-2" />
                  )}
                </div>

                {/* Info */}
                <div className="pb-4">
                  <div className="flex flex-wrap items-baseline gap-3 mb-0.5">
                    <span className="text-white font-medium text-sm">{exp.company}</span>
                    <span className="text-[10px] font-mono text-white/35 bg-white/[0.05] px-2 py-0.5 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[#8B5CF6] text-sm mb-2">{exp.role}</p>
                  <p className="text-white/40 text-xs">{exp.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

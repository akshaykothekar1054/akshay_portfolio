"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/constants";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#8B5CF6] mb-4"
          >
            What I Work With
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display leading-none text-black"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            MY EXPERTISE
          </motion.h2>
        </div>

        {/* Numbered list */}
        <div>
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-t border-black/10 last:border-b first:border-t py-6 px-2 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-black/[0.025] transition-colors rounded-sm cursor-default"
            >
              {/* Hover accent line */}
              <span className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[#8B5CF6] to-[#EC4899] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              {/* Number */}
              <span className="font-mono text-xs text-black/30 w-10 flex-none tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Category name */}
              <span className="font-display text-black leading-tight flex-none w-44 group-hover:text-[#8B5CF6] transition-colors"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                {cat.label.toUpperCase()}
              </span>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 sm:ml-auto">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 rounded-full text-sm border border-black/12 text-black/65 hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Arrow on hover */}
              <span className="hidden sm:block text-black/20 group-hover:text-[#8B5CF6] transition-colors ml-4 flex-none text-lg">
                →
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-black/40 text-sm max-w-sm">
            Always learning — currently exploring AI/ML integrations and edge deployment patterns.
          </p>
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:opacity-80 transition-opacity"
          >
            See my work →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

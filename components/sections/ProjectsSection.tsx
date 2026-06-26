"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 bg-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#8B5CF6] mb-4"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display leading-none text-white"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              PROJECTS
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#contact"
            className="self-start sm:self-auto flex items-center gap-1.5 text-white/40 hover:text-white text-sm transition-colors"
          >
            Start a project <ArrowUpRight size={13} />
          </motion.a>
        </div>

        {/* 2×2 card grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-[16px] bg-[#111111] border border-white/[0.06] p-7 hover:border-[#8B5CF6]/40 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#8B5CF6]/[0.06] to-[#EC4899]/[0.04]" />

              {/* Project number */}
              <p className="font-mono text-[11px] text-[#8B5CF6]/50 mb-5 tracking-widest">
                {String(i + 1).padStart(2, "0")} /{" "}
                {project.featured && (
                  <span className="text-[#8B5CF6]/40">Featured</span>
                )}
              </p>

              {/* Title + arrow */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3
                  className="font-display text-white leading-tight group-hover:text-[#a78bfa] transition-colors"
                  style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)" }}
                >
                  {project.title.toUpperCase()}
                </h3>
                <div className="flex-none w-9 h-9 rounded-full border border-white/[0.1] group-hover:border-[#8B5CF6] group-hover:bg-[#8B5CF6] flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight
                    size={15}
                    className="text-white/40 group-hover:text-white transition-colors"
                  />
                </div>
              </div>

              {/* Tagline */}
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                {project.tagline}
              </p>

              {/* Key highlight */}
              <p className="text-white/25 text-xs leading-relaxed mb-6 border-l-2 border-[#8B5CF6]/30 pl-3">
                {project.highlights[0]}
              </p>

              {/* Stack badges */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-white/45 border border-white/[0.07] group-hover:border-[#8B5CF6]/25 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

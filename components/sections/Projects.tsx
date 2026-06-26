"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "digital-content",
    num: "01",
    client: "Promax Scientific",
    title: "Digital Content Creation Platform",
    desc: "End-to-end platform with Canva-like drag-and-drop editor. Handles 100+ concurrent display devices.",
    tags: ["React.js", "Node.js", "MySQL", "HTML Canvas", "ImageKit"],
    // gradient strips used as placeholder preview thumbnails
    thumbs: [
      "linear-gradient(135deg,#8B5CF6,#3B82F6)",
      "linear-gradient(135deg,#3B82F6,#06B6D4)",
      "linear-gradient(135deg,#6D28D9,#8B5CF6)",
    ],
    link: "#contact",
  },
  {
    id: "agendamaker",
    num: "02",
    client: "AgendaMaker",
    title: "Event Agenda Management System",
    desc: "RESTful API system for managing event agendas, sessions and speakers with conflict-prevention scheduling logic.",
    tags: ["Node.js", "MySQL", "REST APIs"],
    thumbs: [
      "linear-gradient(135deg,#3B82F6,#06B6D4)",
      "linear-gradient(135deg,#0EA5E9,#3B82F6)",
      "linear-gradient(135deg,#06B6D4,#10B981)",
    ],
    link: "#contact",
  },
  {
    id: "hrm",
    num: "03",
    client: "Internal Product",
    title: "Human Resource Management System",
    desc: "Modular HRM covering onboarding, attendance tracking and reimbursements with role-based auth.",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript"],
    thumbs: [
      "linear-gradient(135deg,#10B981,#14B8A6)",
      "linear-gradient(135deg,#059669,#10B981)",
      "linear-gradient(135deg,#14B8A6,#0EA5E9)",
    ],
    link: "#contact",
  },
  {
    id: "gym-saas",
    num: "04",
    client: "SaaS Product",
    title: "Gym Management SaaS Platform",
    desc: "Multi-tenant SaaS for gyms — member management, attendance and payments with real-time updates.",
    tags: ["React.js", "Supabase", "PostgreSQL", "Node.js"],
    thumbs: [
      "linear-gradient(135deg,#EC4899,#8B5CF6)",
      "linear-gradient(135deg,#8B5CF6,#6D28D9)",
      "linear-gradient(135deg,#DB2777,#EC4899)",
    ],
    link: "#contact",
  },
] as const;

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-28 lg:py-36">
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
            Portfolio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display leading-none text-white"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            PROJECTS
          </motion.h2>
        </div>

        {/* ── Project rows ── */}
        <div className="divide-y divide-white/[0.07] border-t border-white/[0.07]">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group py-8 lg:py-10"
            >
              {/* Row layout — stacked on mobile, horizontal on desktop */}
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">

                {/* Left: number + client + title */}
                <div className="flex items-start gap-6 lg:gap-8 flex-1 min-w-0">
                  {/* Number */}
                  <span
                    aria-hidden="true"
                    className="font-display leading-none tabular-nums select-none flex-none text-white/15 group-hover:text-[#8B5CF6] transition-colors duration-200"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                  >
                    {project.num}
                  </span>

                  {/* Info */}
                  <div className="min-w-0 pt-1">
                    <p className="mb-0.5 text-[10px] uppercase tracking-[0.25em] text-white/30">
                      Client
                    </p>
                    <p className="mb-2 text-sm font-medium text-white/55">
                      {project.client}
                    </p>
                    <h3
                      className="font-display leading-tight text-white group-hover:text-[#a78bfa] transition-colors duration-200"
                      style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)" }}
                    >
                      {project.title}
                    </h3>
                    {/* Tags — visible on mobile only */}
                    <div className="mt-3 flex flex-wrap gap-2 lg:hidden">
                      {project.tags.map((tag) => (
                        <span key={tag}
                          className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-0.5 text-[10px] text-white/45"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Centre: thumbnail strip — desktop only */}
                <div className="hidden lg:flex items-center gap-2 flex-none">
                  {project.thumbs.map((grad, ti) => (
                    <div
                      key={ti}
                      className="h-[68px] w-[106px] rounded-xl overflow-hidden opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                      style={{ background: grad }}
                      aria-hidden="true"
                    >
                      {/* placeholder: subtle grid lines mimic a screenshot */}
                      <div className="h-full w-full"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px)," +
                            "linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)",
                          backgroundSize: "18px 18px",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Right: Live Project button */}
                <div className="flex-none">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] text-white/55 transition-all duration-200 hover:border-[#8B5CF6] hover:text-white group-hover:border-[#8B5CF6]/60"
                  >
                    Live Project
                    <span aria-hidden="true" className="text-[#8B5CF6]">↗</span>
                  </a>
                </div>
              </div>

              {/* Desc + tags — desktop only, below the row */}
              <div className="mt-4 hidden lg:flex items-start gap-8 pl-[calc(clamp(2rem,4vw,3.5rem)+2rem)]">
                <p className="text-[0.82rem] leading-relaxed text-white/35 max-w-md">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 ml-auto">
                  {project.tags.map((tag) => (
                    <span key={tag}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10px] text-white/35"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

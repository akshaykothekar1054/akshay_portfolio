"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

// R3F Canvas must be client-only
const AvatarScene = dynamic(
  () => import("@/components/hero/AvatarScene"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black flex items-center overflow-hidden"
    >
      {/* ── Ambient glow blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-0 w-[700px] h-[700px] rounded-full bg-[#8B5CF6]/[0.07] blur-[130px]" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-[#EC4899]/[0.06] blur-[110px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-20 pb-16">

        {/* ── Left: Text block ── */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="font-mono text-xs tracking-[0.35em] uppercase text-[#8B5CF6] mb-5"
          >
            Full Stack Developer · 3+ Years
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display leading-none tracking-tight mb-6"
            style={{ fontSize: "clamp(3.8rem, 9vw, 7.5rem)" }}
          >
            <span className="block text-white">HI, I'M</span>
            <span className="block bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
              AKSHAY
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.5 }}
            className="text-white/55 text-lg leading-relaxed max-w-[420px] mb-10"
          >
            I build scalable web apps that actually ship — from multi-tenant SaaS
            platforms to real-time dashboards.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <a
              href="#projects"
              className="group relative px-7 py-3.5 rounded-full font-medium text-white bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] hover:opacity-90 transition-opacity text-sm"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full font-medium text-white text-sm border border-white/20 hover:border-white/45 hover:bg-white/[0.04] transition-all"
            >
              Get In Touch
            </a>
            <a
              href="/Akshay-Kothekar_29-June-2026.pdf"
              className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
              download
            >
              <Download size={14} />
              Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.62 }}
            className="flex gap-10"
          >
            {[
              { v: "3+", label: "Years Exp." },
              { v: "4+", label: "Products Shipped" },
              { v: "10+", label: "Clients Served" },
            ].map(({ v, label }) => (
              <div key={label}>
                <p className="font-display text-2xl text-white">{v}</p>
                <p className="text-[10px] text-white/35 mt-0.5 tracking-wider uppercase">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: 3D Avatar ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 relative h-[340px] md:h-[480px] lg:h-[600px] w-full"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#8B5CF6]/25 to-[#EC4899]/15 blur-3xl" />
          </div>
          <AvatarScene />
        </motion.div>
      </div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}

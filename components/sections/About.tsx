"use client";

import { motion } from "framer-motion";

const BIO = [
  "I'm a Full Stack Developer with 3+ years of experience building scalable, production-ready web applications using React.js, Node.js, TypeScript, and modern web technologies. I enjoy turning complex ideas into intuitive, high-performance digital products that combine clean architecture with exceptional user experiences.",

  "My passion lies in building end-to-end solutions—from responsive frontend interfaces and secure backend APIs to database design and cloud deployment. I believe great software is built through thoughtful engineering, attention to detail, and a deep understanding of user needs.",

  "I'm continuously exploring AI-powered applications, SaaS architecture, cloud technologies, and modern development workflows to create reliable, scalable, and future-ready products. I'm always excited to collaborate on meaningful projects, solve challenging problems, and build technology that makes a real impact.",
];

// ── 3-D blue metallic asterisk (top-left) ─────────────────────────────────
function Asterisk3D() {
  return (
    <svg width="140" height="140" viewBox="0 0 100 100" fill="none" aria-hidden="true"
      style={{
        transform: "perspective(400px) rotateX(12deg) rotateY(18deg)",
        filter: "drop-shadow(0 0 22px rgba(59,130,246,0.55))",
      }}
    >
      <defs>
        <radialGradient id="ag1" cx="32%" cy="22%" r="70%">
          <stop offset="0%"   stopColor="#C8EEFF" />
          <stop offset="45%"  stopColor="#3B9EF5" />
          <stop offset="100%" stopColor="#1044A0" />
        </radialGradient>
      </defs>
      <rect x="44" y="8"  width="12" height="84" rx="6" fill="url(#ag1)" />
      <rect x="44" y="8"  width="12" height="84" rx="6" fill="url(#ag1)" transform="rotate(60 50 50)" />
      <rect x="44" y="8"  width="12" height="84" rx="6" fill="url(#ag1)" transform="rotate(120 50 50)" />
      <circle cx="50" cy="50" r="11" fill="#7DCEFF" />
      <circle cx="44" cy="43" r="5"  fill="white" opacity="0.45" />
    </svg>
  );
}

// ── 3-D blue crystal / gem (top-right) ────────────────────────────────────
function Crystal3D() {
  return (
    <svg width="120" height="140" viewBox="0 0 80 100" fill="none" aria-hidden="true"
      style={{
        transform: "perspective(400px) rotateX(10deg) rotateY(-18deg)",
        filter: "drop-shadow(0 0 22px rgba(59,130,246,0.50))",
      }}
    >
      <defs>
        <radialGradient id="dg1" cx="38%" cy="22%" r="68%">
          <stop offset="0%"   stopColor="#D0EEFF" />
          <stop offset="50%"  stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#0e2a68" />
        </radialGradient>
      </defs>
      {/* upper facets */}
      <polygon points="40,4 74,34 40,46 6,34"  fill="url(#dg1)" />
      {/* lower facets */}
      <polygon points="40,46 74,34 40,96"       fill="#1d4ed8" opacity="0.9" />
      <polygon points="40,46  6,34 40,96"       fill="#2563eb" opacity="0.85" />
      {/* facet edge lines */}
      <line x1="40" y1="4"  x2="40" y2="96" stroke="white" strokeOpacity="0.12" strokeWidth="0.6" />
      <line x1="6"  y1="34" x2="74" y2="34" stroke="white" strokeOpacity="0.12" strokeWidth="0.6" />
      {/* shine */}
      <ellipse cx="29" cy="20" rx="11" ry="6" fill="white" opacity="0.38" transform="rotate(-22 29 20)" />
      <circle  cx="21" cy="15" r="4"           fill="white" opacity="0.20" />
    </svg>
  );
}

// ── 3-D red heart (bottom-left) ───────────────────────────────────────────
function Heart3D() {
  return (
    <svg width="130" height="120" viewBox="0 0 100 92" fill="none" aria-hidden="true"
      style={{
        transform: "perspective(380px) rotateX(-10deg) rotateY(14deg)",
        filter: "drop-shadow(0 0 22px rgba(255,22,84,0.52))",
      }}
    >
      <defs>
        <radialGradient id="hg1" cx="36%" cy="26%" r="66%">
          <stop offset="0%"   stopColor="#FF9BB5" />
          <stop offset="40%"  stopColor="#E8003D" />
          <stop offset="100%" stopColor="#700018" />
        </radialGradient>
      </defs>
      <path d="M50 86 C48 84 6 58 6 30 C6 16 16 6 28 6 C38 6 46 12 50 20 C54 12 62 6 72 6 C84 6 94 16 94 30 C94 58 52 84 50 86 Z"
        fill="url(#hg1)" />
      <ellipse cx="33" cy="22" rx="15" ry="9"  fill="white" opacity="0.34" transform="rotate(-22 33 22)" />
      <circle  cx="24" cy="16" r="5"           fill="white" opacity="0.18" />
    </svg>
  );
}

// ── 3-D purple flower (bottom-right) ──────────────────────────────────────
function Flower3D() {
  return (
    <svg width="130" height="130" viewBox="0 0 100 100" fill="none" aria-hidden="true"
      style={{
        transform: "perspective(380px) rotateX(-10deg) rotateY(-14deg)",
        filter: "drop-shadow(0 0 22px rgba(168,85,247,0.55))",
      }}
    >
      <defs>
        <radialGradient id="fg1" cx="30%" cy="25%" r="70%">
          <stop offset="0%"   stopColor="#F0C8FF" />
          <stop offset="45%"  stopColor="#A855F7" />
          <stop offset="100%" stopColor="#4A0080" />
        </radialGradient>
        <radialGradient id="cg1" cx="38%" cy="28%" r="62%">
          <stop offset="0%"   stopColor="#FFF0A0" />
          <stop offset="100%" stopColor="#D97706" />
        </radialGradient>
      </defs>
      {/* 6 petals at 60° intervals */}
      <ellipse cx="50" cy="20" rx="12" ry="22" fill="url(#fg1)" />
      <ellipse cx="50" cy="20" rx="12" ry="22" fill="url(#fg1)" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="20" rx="12" ry="22" fill="url(#fg1)" transform="rotate(120 50 50)" />
      <ellipse cx="50" cy="20" rx="12" ry="22" fill="url(#fg1)" transform="rotate(180 50 50)" />
      <ellipse cx="50" cy="20" rx="12" ry="22" fill="url(#fg1)" transform="rotate(240 50 50)" />
      <ellipse cx="50" cy="20" rx="12" ry="22" fill="url(#fg1)" transform="rotate(300 50 50)" />
      {/* center */}
      <circle cx="50" cy="50" r="15" fill="url(#cg1)" />
      <circle cx="43" cy="43" r="5"  fill="white" opacity="0.42" />
    </svg>
  );
}

// ── Gradient-border CTA ────────────────────────────────────────────────────
function ContactBtn() {
  return (
    <a href="#contact"
      className="group inline-flex rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] p-[2px]"
    >
      <span className="inline-flex items-center whitespace-nowrap rounded-full bg-black px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors duration-300 group-hover:bg-transparent">
        Contact Me →
      </span>
    </a>
  );
}

const ease = "easeOut" as const;

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-black py-36 lg:py-44">

      {/* Ambient glow */}
      <div aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[580px] w-[580px] rounded-full bg-[#8B5CF6]/[0.07] blur-[130px]" />
      </div>

      {/* ── Corner floaters ── */}
      {/* Top-left: blue asterisk */}
      <motion.div aria-hidden="true"
        className="pointer-events-none absolute left-[3%] top-[8%] hidden lg:block xl:left-[6%]"
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Asterisk3D />
      </motion.div>

      {/* Top-right: blue crystal */}
      <motion.div aria-hidden="true"
        className="pointer-events-none absolute right-[3%] top-[6%] hidden lg:block xl:right-[6%]"
        animate={{ y: [0, -24, 0], rotate: [-8, 8, -8] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <Crystal3D />
      </motion.div>

      {/* Bottom-left: red heart */}
      <motion.div aria-hidden="true"
        className="pointer-events-none absolute bottom-[8%] left-[3%] hidden lg:block xl:left-[6%]"
        animate={{ y: [0, -22, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
      >
        <Heart3D />
      </motion.div>

      {/* Bottom-right: purple flower */}
      <motion.div aria-hidden="true"
        className="pointer-events-none absolute bottom-[6%] right-[3%] hidden lg:block xl:right-[6%]"
        animate={{ y: [0, -26, 0], rotate: [5, -5, 5] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
      >
        <Flower3D />
      </motion.div>

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-2xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease }}
          className="mb-5 font-mono text-[11px] uppercase tracking-[0.35em] text-[#8B5CF6]"
        >
          Who I Am
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.08, duration: 0.65, ease }}
          className="mb-8 font-display leading-none text-white"
          style={{ fontSize: "clamp(3.2rem, 8vw, 7rem)" }}
        >
          ABOUT ME
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.18, duration: 0.55, ease }}
          className="mx-auto mb-12 h-[2px] w-14 origin-center rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]"
        />

        {BIO.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.22 + i * 0.13, duration: 0.55, ease }}
            className="mb-5 text-[1.05rem] leading-[1.9] text-white/60 last:mb-0"
          >
            {para}
          </motion.p>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.62, duration: 0.5, ease }}
          className="mt-14"
        >
          <ContactBtn />
        </motion.div>
      </div>
    </section>
  );
}

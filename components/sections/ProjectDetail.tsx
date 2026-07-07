"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  Home,
  Users,
  CreditCard,
  CalendarCheck,
  Building2,
  UserCog,
  BarChart3,
  Sparkles,
  LogIn,
  LayoutGrid,
  PanelLeft,
  Dumbbell,
  ShoppingCart,
  Newspaper,
  Leaf,
  Heart,
  Star,
  Search,
  type LucideIcon,
} from "lucide-react";
import type { ProjectDetail as ProjectDetailData } from "@/lib/projectDetails";

const FEATURE_ICONS: Record<string, LucideIcon> = {
  "Member Lifecycle": Users,
  "Plans & Payments": CreditCard,
  "Attendance Tracking": CalendarCheck,
  "Multi-Branch Support": Building2,
  "Staff & Leads": UserCog,
  "Reports & Inventory": BarChart3,
  "Login & Auth UI": LogIn,
  "UI Component Library": LayoutGrid,
  "Productivity Modules": PanelLeft,
  "Responsive Sidebar Navigation": PanelLeft,
  "Data Visualization": BarChart3,
  "Hero & Brand Intro": Dumbbell,
  "Classes & Trainers": Users,
  "Membership Pricing": CreditCard,
  "Integrated Shop": ShoppingCart,
  "Blog & Contact": Newspaper,
  "Organic Produce Hero": Leaf,
  "Category-Filtered Catalog": LayoutGrid,
  "Wishlist & Cart": Heart,
  "Customer Reviews": Star,
  Search: Search,
};

/** Home / Projects / Current — with icon leaf, chevron separators and an
 *  accent-colored, truncating current-page crumb. */
function Breadcrumb({ title, accent }: { title: string; accent: string }) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/#projects" },
  ];

  const linkStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontFamily: "Inter, sans-serif",
    fontSize: 12.5,
    fontWeight: 500,
    color: "rgba(255,255,255,0.45)",
    textDecoration: "none",
    transition: "color 0.2s ease",
  };

  return (
    <motion.nav
      aria-label="Breadcrumb"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: "clamp(28px, 4vh, 44px)" }}
    >
      <ol
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 6,
          listStyle: "none",
          margin: 0,
          padding: "8px 14px 8px 10px",
          borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(6px)",
          width: "fit-content",
          maxWidth: "100%",
        }}
      >
        {crumbs.map((crumb, i) => (
          <li key={crumb.href} style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
            <a
              href={crumb.href}
              data-cursor="link"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
            >
              {i === 0 && <Home size={13} strokeWidth={2} />}
              {crumb.label}
            </a>
            <ChevronRight size={13} strokeWidth={2} color="rgba(255,255,255,0.25)" style={{ flexShrink: 0 }} />
          </li>
        ))}
        <li
          aria-current="page"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 12.5,
            fontWeight: 600,
            color: accent,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "min(260px, 40vw)",
          }}
        >
          {title}
        </li>
      </ol>
    </motion.nav>
  );
}

/** Section eyebrow: small accent dot + uppercase label + trailing gradient line. */
function Eyebrow({ children, accent }: { children: string; accent: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "clamp(18px, 2.5vh, 28px)" }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: accent, flexShrink: 0, boxShadow: `0 0 12px 2px ${accent}80` }} />
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 11,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: accent,
          flexShrink: 0,
        }}
      >
        {children}
      </span>
      <span style={{ height: 1, flex: 1, background: `linear-gradient(to right, ${accent}55, transparent)` }} />
    </div>
  );
}

/** macOS-style browser chrome wrapping a product screenshot. */
function BrowserFrame({ src, caption, accent }: { src: string; caption: string; accent: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      style={{ margin: 0 }}
    >
      <div
        style={{
          borderRadius: "clamp(14px, 1.8vw, 20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          overflow: "hidden",
          backgroundColor: "#0a0a0c",
          boxShadow: `0 32px 70px -28px ${accent}45, 0 8px 24px -12px rgba(0,0,0,0.6)`,
          transition: "transform 0.4s ease, border-color 0.4s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px) scale(1.008)";
          e.currentTarget.style.borderColor = `${accent}60`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
        }}
      >
        {/* Window chrome bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "11px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "#111114",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
          <span
            style={{
              marginLeft: 10,
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              color: "rgba(255,255,255,0.28)",
              letterSpacing: "0.02em",
            }}
          >
            {caption}
          </span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={caption} style={{ width: "100%", display: "block" }} />
      </div>
    </motion.figure>
  );
}

export default function ProjectDetail({ project }: { project: ProjectDetailData }) {
  return (
    <div style={{ backgroundColor: "#000" }}>
      {/* ── Hero ── */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Decorative liquid blobs — same visual language as the About panel */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "clamp(400px, 55vw, 800px)",
            height: "clamp(400px, 55vw, 800px)",
            top: "-25%",
            right: "-15%",
            background: `radial-gradient(ellipse at center, ${project.accent}30 0%, rgba(139,92,246,0.14) 45%, transparent 75%)`,
            filter: "blur(80px)",
            animation: "liquid-blob-1 12s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "clamp(320px, 42vw, 620px)",
            height: "clamp(320px, 42vw, 620px)",
            bottom: "-15%",
            left: "-12%",
            background: "radial-gradient(ellipse at center, rgba(139,92,246,0.2) 0%, transparent 72%)",
            filter: "blur(80px)",
            animation: "liquid-blob-2 15s ease-in-out infinite",
            animationDelay: "1.5s",
            pointerEvents: "none",
          }}
        />

        {/* Cover screenshot, faded into the background */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${project.cover})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            opacity: 0.22,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, #000 88%)",
          }}
        />
        {/* Fine grid texture for depth */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px)," +
              "linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "clamp(120px, 20vh, 220px) clamp(16px, 5vw, 52px) clamp(56px, 8vh, 90px)",
          }}
        >
          <Breadcrumb title={project.title} accent={project.accent} />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}
          >
            <Sparkles size={14} color={project.accent} strokeWidth={2} />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: project.accent,
              }}
            >
              {project.client}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55, ease: "easeOut" }}
            style={{
              fontFamily: '"Anton", sans-serif',
              fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)",
              color: "#fff",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              marginBottom: 18,
              maxWidth: 900,
            }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.5 }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(1.05rem, 1.7vw, 1.4rem)",
              background: `linear-gradient(to right, #fff, ${project.accent})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: 500,
              maxWidth: 640,
              marginBottom: "clamp(32px, 5vh, 48px)",
            }}
          >
            {project.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
            style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "clamp(14px, 2.5vw, 22px)" }}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="click"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "0 28px",
                borderRadius: 999,
                background: `linear-gradient(to right, ${project.accent}, #8B5CF6)`,
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow: `0 16px 40px -12px ${project.accent}70`,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 20px 48px -12px ${project.accent}90`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 16px 40px -12px ${project.accent}70`;
              }}
            >
              Visit Live Site
              <ArrowUpRight size={16} strokeWidth={2.25} />
            </a>

            <div
              style={{
                display: "flex",
                gap: 0,
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "clamp(12px, 1.6vw, 16px)",
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.02)",
              }}
            >
              {project.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    padding: "12px clamp(16px, 2.2vw, 26px)",
                    borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: '"Anton", sans-serif',
                      fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
                      color: "#fff",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      marginTop: 4,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(16px, 5vw, 52px) clamp(72px, 11vh, 130px)",
        }}
      >
        {/* ── Overview ── */}
        <section style={{ marginBottom: "clamp(56px, 8vh, 96px)" }}>
          <Eyebrow accent={project.accent}>Overview</Eyebrow>

          <div
            className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr]"
            style={{ gap: "clamp(28px, 4vw, 56px)", alignItems: "start" }}
          >
            <div>
              {project.overview.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.85,
                    marginBottom: i < project.overview.length - 1 ? 20 : 0,
                    paddingLeft: 18,
                    borderLeft: i === 0 ? `2px solid ${project.accent}50` : "2px solid transparent",
                  }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                padding: "clamp(20px, 2.4vw, 28px)",
                borderRadius: "clamp(14px, 1.6vw, 18px)",
                border: "1px solid rgba(255,255,255,0.1)",
                background: `linear-gradient(160deg, ${project.accent}14, transparent 60%)`,
              }}
            >
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 14,
                }}
              >
                Built With
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#fff",
                      border: `1px solid ${project.accent}45`,
                      background: `${project.accent}12`,
                      borderRadius: 999,
                      padding: "6px 14px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Features ── */}
        <section style={{ marginBottom: "clamp(56px, 8vh, 96px)" }}>
          <Eyebrow accent={project.accent}>Key Features</Eyebrow>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "clamp(16px, 2vw, 24px)",
            }}
          >
            {project.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[feature.title] ?? Sparkles;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  style={{
                    position: "relative",
                    padding: "clamp(20px, 2.2vw, 26px)",
                    borderRadius: "clamp(14px, 1.6vw, 18px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "#0a0a0c",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px) scale(1.015)";
                    e.currentTarget.style.borderColor = `${project.accent}55`;
                    e.currentTarget.style.boxShadow = `0 20px 48px -18px ${project.accent}55`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: -18,
                      right: -6,
                      fontFamily: '"Anton", sans-serif',
                      fontSize: "3.4rem",
                      color: "rgba(255,255,255,0.035)",
                      userSelect: "none",
                      lineHeight: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 11,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `${project.accent}18`,
                      border: `1px solid ${project.accent}35`,
                      marginBottom: 16,
                    }}
                  >
                    <Icon size={19} color={project.accent} strokeWidth={2} />
                  </div>

                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: 8,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.48)",
                      lineHeight: 1.7,
                    }}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Gallery ── */}
        <section style={{ marginBottom: "clamp(56px, 8vh, 96px)" }}>
          <Eyebrow accent={project.accent}>Inside the Product</Eyebrow>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(32px, 4.5vh, 48px)" }}>
            {project.gallery.map((item) => (
              <BrowserFrame key={item.src} src={item.src} caption={item.caption} accent={project.accent} />
            ))}
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            position: "relative",
            padding: "clamp(36px, 5.5vh, 56px) clamp(24px, 4vw, 48px)",
            borderRadius: "clamp(16px, 2vw, 22px)",
            border: "1px solid rgba(255,255,255,0.1)",
            background: `linear-gradient(135deg, ${project.accent}18, rgba(139,92,246,0.1) 60%, transparent)`,
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <h2
            style={{
              fontFamily: '"Anton", sans-serif',
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              color: "#fff",
              marginBottom: 12,
            }}
          >
            HAVE A SIMILAR PROJECT IN MIND?
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              color: "rgba(255,255,255,0.55)",
              marginBottom: 28,
              maxWidth: 480,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Let&apos;s talk about what you&apos;re building and how it could come together.
          </p>
          <a
            href="/#contact"
            data-cursor="send"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "13px 30px",
              borderRadius: 999,
              background: "linear-gradient(to right, #8B5CF6, #EC4899)",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Get in Touch
            <ArrowUpRight size={16} strokeWidth={2.25} />
          </a>
        </motion.section>
      </div>
    </div>
  );
}

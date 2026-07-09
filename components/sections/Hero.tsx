"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BIO =
  "I'm Akshay Kothekar, a Full Stack Software Engineer with over 4+ years of experience " +
  "building production-ready web applications and digital products. I enjoy turning complex " +
  "ideas into intuitive, reliable, and scalable solutions that solve real-world problems. " +
  "My focus is on creating products that not only work seamlessly but also deliver " +
  "exceptional user experiences and long-term value.";

// ── Gradient-border ↔ gradient-fill CTA ──────────────────────────────────
function ContactBtn() {
  const OUTLINE =
    "linear-gradient(#000,#000) padding-box, linear-gradient(to right,#8B5CF6,#EC4899) border-box";
  const FILLED =
    "linear-gradient(to right,#8B5CF6,#EC4899) padding-box, linear-gradient(to right,#8B5CF6,#EC4899) border-box";

  return (
    <a
      href="#contact"
      style={{
        display: "inline-block",
        padding: "12px 28px",
        borderRadius: 999,
        background: OUTLINE,
        border: "2px solid transparent",
        color: "#fff",
        fontSize: 13,
        fontFamily: "Inter, sans-serif",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        textDecoration: "none",
        transition: "background 0.3s ease",
        whiteSpace: "nowrap" as const,
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = FILLED)}
      onMouseLeave={(e) => (e.currentTarget.style.background = OUTLINE)}
    >
      CONTACT ME
    </a>
  );
}

// ── 3-D spring tilt + floating bob ────────────────────────────────────────
function TiltAvatar() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 55, damping: 18 });
  const springY = useSpring(rawY, { stiffness: 55, damping: 18 });
  const rotateY = useTransform(springX, [-1, 1], [-14, 14]);
  const rotateX = useTransform(springY, [-1, 1], [10, -10]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth) * 2 - 1);
      rawY.set(-((e.clientY / window.innerHeight) * 2 - 1));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    <div style={{ perspective: "900px", width: "100%", height: "100%" }}>
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
        }}
        animate={{ y: [0, -14, 0] }}
        transition={{ y: { duration: 3.4, repeat: Infinity, ease: "easeInOut" } }}
      >
        {/* Purple ambient glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: "70%",
              height: "70%",
              borderRadius: "50%",
              background: "rgba(139,92,246,0.18)",
              filter: "blur(52px)",
            }}
          />
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/avtar-akshay2.png"
          alt="Akshay Kothekar"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            userSelect: "none",
            filter: "drop-shadow(0 28px 56px rgba(139,92,246,0.32))",
          }}
          draggable={false}
        />
      </motion.div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────
export default function Hero() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  // GSAP scroll scrub — skip on mobile (layout is stacked, not parallax)
  useEffect(() => {
    if (window.innerWidth <= 768) return;
    gsap.registerPlugin(ScrollTrigger);
    if (!headlineRef.current || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(headlineRef.current, {
        x: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      {/*
        ONE layout — flex column — that works on every screen size.
        No duplicate blocks. Responsive behaviour is handled by:
          • clamp() on font-size, width, height
          • .hero-avatar-wrapper margin-top (CSS media query in globals.css)
          • .hero-cta-mobile / .hero-cta-desktop visibility toggle
      */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "clamp(7vh, 10vh, 13vh)",
        }}
      >
        {/* ── Headline ── */}
        <h1
          ref={headlineRef}
          style={{
            fontFamily: '"Anton", sans-serif',
            fontSize: "clamp(2.8rem, 14vw, 13rem)",
            color: "#fff",
            textAlign: "center",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            zIndex: 1,
            position: "relative",
            userSelect: "none",
            pointerEvents: "none",
            margin: 0,
            width: "100%",
          }}
        >
          HI, I&apos;M AKSHAY
        </h1>

        {/* ── Avatar — overlaps headline via negative margin ── */}
        {/* Margin-top value changes in globals.css: -80px desktop / -22px mobile */}
        <div
          className="hero-avatar-wrapper"
          style={{
            width: "clamp(320px, 44vw, 640px)",
            height: "clamp(380px, 62vh, 720px)",
            flexShrink: 0,
            zIndex: 10,
            position: "relative",
          }}
        >
          <TiltAvatar />
        </div>

        {/* ── Bio description ── */}
        <p
          style={{
            maxWidth: "min(580px, 84vw)",
            textAlign: "center",
            color: "#ffffff",
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(0.72rem, 1.1vw, 0.88rem)",
            lineHeight: 1.85,
            marginTop: "clamp(10px, 1.5vh, 20px)",
            padding: "0 12px",
            zIndex: 5,
            position: "relative",
          }}
        >
          {BIO}
        </p>

        {/* ── CTA — shown below bio on mobile only ── */}
        <div className="hero-cta-mobile" style={{ marginTop: 22 }}>
          <ContactBtn />
        </div>
      </div>

      {/* ── CTA — absolute right, desktop only ── */}
      <div
        className="hero-cta-desktop"
        style={{
          position: "absolute",
          right: "clamp(20px, 3.5vw, 55px)",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 15,
        }}
      >
        <ContactBtn />
      </div>
    </section>
  );
}

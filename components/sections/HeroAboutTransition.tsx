"use client";

import { forwardRef, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ── Copy ─────────────────────────────────────────────────────── */
const HERO_BIO =
  "I'm Akshay Kothekar, a Full Stack Software Engineer with over 4 years of experience " +
  "building production-ready web applications and digital products. I enjoy turning complex " +
  "ideas into intuitive, reliable, and scalable solutions that solve real-world problems.";

const ABOUT_BIO = [
  "I'm a Full Stack Developer with 4+ years of experience building scalable, production-ready web applications using React.js, Node.js, TypeScript, and modern web technologies. I enjoy turning complex ideas into intuitive, high-performance digital products that combine clean architecture with exceptional user experiences.",

  "My passion lies in building end-to-end solutions—from responsive frontend interfaces and secure backend APIs to database design and cloud deployment. I believe great software is built through thoughtful engineering, attention to detail, and a deep understanding of user needs.",

  "I'm continuously exploring AI-powered applications, SaaS architecture, cloud technologies, and modern development workflows to create reliable, scalable, and future-ready products. I'm always excited to collaborate on meaningful projects, solve challenging problems, and build technology that makes a real impact.",
];

/* ── Gradient-border CTA (hero panel) ─────────────────────────── */
function ContactBtn() {
  const OUTLINE =
    "linear-gradient(#000,#000) padding-box, linear-gradient(to right,#8B5CF6,#EC4899) border-box";
  const FILLED =
    "linear-gradient(to right,#8B5CF6,#EC4899) padding-box, linear-gradient(to right,#8B5CF6,#EC4899) border-box";
  return (
    <a
      href="/#contact"
      data-cursor="send"
      style={{
        display: "inline-block",
        padding: "13px 32px",
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

/* ── My Journey CTA (about panel) ─────────────────────────────── */
function JourneyBtn() {
  return (
    <a
      href="/journey"
      data-cursor="click"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "13px 32px",
        borderRadius: 999,
        background: "linear-gradient(to right, #8B5CF6, #EC4899)",
        color: "#fff",
        fontSize: 13,
        fontFamily: "Inter, sans-serif",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        textDecoration: "none",
        whiteSpace: "nowrap" as const,
        cursor: "pointer",
        transition: "opacity 0.25s ease, transform 0.25s ease",
        fontWeight: 500,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.opacity = "0.88";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }}
    >
      MY JOURNEY
      <span aria-hidden="true" style={{ fontSize: 16, lineHeight: 1 }}>→</span>
    </a>
  );
}

/* ── Per-letter animated & hoverable name ─────────────────────── */
function AnimatedName({ text, baseDelay = 0 }: { text: string; baseDelay?: number }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: baseDelay + i * 0.055,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLSpanElement;
            el.style.color = "#a78bfa";
            el.style.transform = "translateY(-8px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLSpanElement;
            el.style.color = "#fff";
            el.style.transform = "translateY(0)";
          }}
          style={{
            display: "inline-block",
            cursor: "default",
            transition: "color 0.2s ease, transform 0.28s cubic-bezier(0.34,1.56,0.64,1)",
            color: "#fff",
          }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}

/* ── 3-D spring tilt + floating bob avatar ─────────────────────── */
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
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", width: "100%", height: "100%" }}
        animate={{ y: [0, -14, 0] }}
        transition={{ y: { duration: 3.4, repeat: Infinity, ease: "easeInOut" } }}
      >
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          pointerEvents: "none",
        }}>
          <div style={{
            width: "70%", height: "70%", borderRadius: "50%",
            background: "rgba(139,92,246,0.18)", filter: "blur(52px)",
          }} />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/avtar-akshay2.png"
          alt="Akshay Kothekar"
          style={{
            position: "relative", width: "100%", height: "100%",
            objectFit: "contain", userSelect: "none",
            filter: "drop-shadow(0 32px 64px rgba(139,92,246,0.38))",
          }}
          draggable={false}
        />
      </motion.div>
    </div>
  );
}

/* ── Floating tech logo decorator ──────────────────────────────── */
type LogoProps = {
  src: string;
  alt: string;
  size: number;
  glowColor: string;
  delay: number;
  spin?: boolean;
  side?: "left" | "right";
  className?: string;
  style: React.CSSProperties;
};

/* Inner float/spin loop, shared by both logo variants below */
function LogoFloat({ src, alt, size, glowColor, delay, spin = false }: Omit<LogoProps, "side" | "className" | "style">) {
  return (
    <motion.div
      animate={spin ? { y: [0, -12, 0], rotate: [0, 360] } : { y: [0, -12, 0] }}
      transition={
        spin
          ? {
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
              rotate: { duration: 8, repeat: Infinity, ease: "linear", repeatType: "loop" },
            }
          : { duration: 3, repeat: Infinity, ease: "easeInOut", delay }
      }
      whileTap={{ scale: 1.25 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        style={{ display: "block", filter: `drop-shadow(0 0 15px ${glowColor})`, userSelect: "none" }}
        draggable={false}
      />
    </motion.div>
  );
}

/* Mobile: normal document flow, so Framer's own whileInView is reliable here */
function TechLogo({ src, alt, size, glowColor, delay, spin = false, side = "left", className = "about-logo-decorator", style }: LogoProps) {
  const fromX = side === "left" ? -160 : 160;
  return (
    <motion.div
      className={className}
      aria-hidden="true"
      style={{ position: "absolute", pointerEvents: "none", ...style }}
      initial={{ opacity: 0, x: fromX, scale: 0.6 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <LogoFloat src={src} alt={alt} size={size} glowColor={glowColor} delay={delay + 0.9} spin={spin} />
    </motion.div>
  );
}

/*
  Desktop: the about panel's reveal is driven by a scrubbed GSAP timeline
  (inline transform set outside React), not by real scrolling of this element
  into the document flow. Framer's `whileInView` watches an IntersectionObserver
  that doesn't reliably fire for children of a `position:sticky` + `overflow:hidden`
  ancestor whose transform is being scrubbed — only the first logo would appear.
  So on desktop the entrance (opacity/x/scale) is driven directly off the same
  GSAP timeline as the panel itself; see the `logoRefs` wiring below.
*/
const DesktopTechLogo = forwardRef<HTMLDivElement, LogoProps>(function DesktopTechLogo(
  { src, alt, size, glowColor, delay, spin = false, className = "about-logo-decorator", style },
  ref
) {
  return (
    <div ref={ref} className={className} aria-hidden="true" style={{ position: "absolute", pointerEvents: "none", ...style }}>
      <LogoFloat src={src} alt={alt} size={size} glowColor={glowColor} delay={delay} spin={spin} />
    </div>
  );
});

/* ══════════════════════════════════════════════════════════════════
   Main export
══════════════════════════════════════════════════════════════════ */
export default function HeroAboutTransition() {
  const outerRef      = useRef<HTMLDivElement>(null);
  const heroPanelRef  = useRef<HTMLDivElement>(null);
  const aboutPanelRef = useRef<HTMLDivElement>(null);

  const reactLogoRef = useRef<HTMLDivElement>(null);
  const nodeLogoRef  = useRef<HTMLDivElement>(null);
  const cssLogoRef   = useRef<HTMLDivElement>(null);
  const htmlLogoRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;
    gsap.registerPlugin(ScrollTrigger);

    const outer      = outerRef.current;
    const heroPanel  = heroPanelRef.current;
    const aboutPanel = aboutPanelRef.current;
    if (!outer || !heroPanel || !aboutPanel) return;

    const ctx = gsap.context(() => {
      gsap.set(aboutPanel, { yPercent: 100 });

      const leftLogos  = [reactLogoRef.current, htmlLogoRef.current].filter(Boolean) as HTMLDivElement[];
      const rightLogos = [nodeLogoRef.current, cssLogoRef.current].filter(Boolean) as HTMLDivElement[];
      gsap.set(leftLogos,  { opacity: 0, x: -160, scale: 0.6 });
      gsap.set(rightLogos, { opacity: 0, x: 160, scale: 0.6 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outer,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tl.to({}, { duration: 1 })
        .to(aboutPanel, { yPercent: 0, ease: "none", duration: 2 }, 1)
        .to(heroPanel,  { scale: 0.93, ease: "none", duration: 2 }, 1)
        .to(leftLogos,  { opacity: 1, x: 0, scale: 1, ease: "power2.out", stagger: 0.15, duration: 1 }, 1.1)
        .to(rightLogos, { opacity: 1, x: 0, scale: 1, ease: "power2.out", stagger: 0.15, duration: 1 }, 1.1);
    }, outer);

    return () => ctx.revert();
  }, []);

  /* Tech logos — desktop about panel (entrance driven by the GSAP timeline above) */
  const logos = (
    <>
      <DesktopTechLogo
        ref={reactLogoRef}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React" size={140} glowColor="rgba(97,218,251,0.6)"
        delay={0} spin style={{ top: "6%", left: "3%" }}
      />
      <DesktopTechLogo
        ref={nodeLogoRef}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js" size={140} glowColor="rgba(51,153,51,0.6)"
        delay={0.9} style={{ top: "4%", right: "4%" }}
      />
      <DesktopTechLogo
        ref={cssLogoRef}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS3" size={125} glowColor="rgba(21,114,182,0.6)"
        delay={1.8} style={{ top: "40%", right: "2%" }}
      />
      <DesktopTechLogo
        ref={htmlLogoRef}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML5" size={125} glowColor="rgba(227,79,38,0.6)"
        delay={2.7} style={{ bottom: "22%", left: "3%" }}
      />
    </>
  );

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          DESKTOP — 300vh outer / sticky 100vh inner
      ═══════════════════════════════════════════════════════ */}
      <div
        id="hero"
        className="desktop-split-view"
        ref={outerRef}
        style={{ position: "relative", height: "300vh" }}
      >
        <div style={{
          position: "sticky", top: 0,
          height: "100vh", overflow: "hidden",
          backgroundColor: "#000",
        }}>

          {/* ── Hero panel ── */}
          <div ref={heroPanelRef} style={{
            position: "absolute", inset: 0,
            backgroundColor: "#000", overflow: "hidden",
            display: "flex", flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "56px",
            paddingBottom: "20px",
            zIndex: 10,
          }}>

            {/* H1 — "HI, I'M" fades in, "AKSHAY" letter by letter */}
            <h1 style={{
              fontFamily: '"Anton", sans-serif',
              fontSize: "clamp(3rem, 7.5vw, 9rem)",
              color: "#fff",
              textAlign: "center",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              zIndex: 1,
              position: "relative",
              userSelect: "none",
              margin: 0,
            }}>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "inline" }}
              >
                HI, I&apos;M{" "}
              </motion.span>
              <AnimatedName text="AKSHAY" baseDelay={0.38} />
            </h1>

            {/* Avatar */}
            <div style={{
              width: "clamp(280px, 34vw, 500px)",
              height: "clamp(340px, 50vh, 580px)",
              marginTop: "clamp(-40px, -5vh, -60px)",
              flexShrink: 0,
              zIndex: 10,
              position: "relative",
            }}>
              <TiltAvatar />
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
              style={{
                maxWidth: "min(520px, 82vw)",
                textAlign: "center",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(0.7rem, 0.88vw, 0.88rem)",
                lineHeight: 1.85,
                marginTop: "clamp(8px, 1.2vh, 16px)",
                padding: "0 16px",
                zIndex: 5,
                position: "relative",
              }}
            >
              {HERO_BIO}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
              style={{ marginTop: "clamp(14px, 2vh, 22px)" }}
            >
              <ContactBtn />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 28,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{
                fontSize: 9,
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.18)",
                fontFamily: "Inter, sans-serif",
                textTransform: "uppercase",
              }}>
                SCROLL
              </span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                style={{
                  width: 1,
                  height: 30,
                  background: "linear-gradient(to bottom, rgba(139,92,246,0.6), transparent)",
                }}
              />
            </motion.div>
          </div>

          {/* ── About panel (slides up from below on scroll) ── */}
          <div id="about" ref={aboutPanelRef} style={{
            position: "absolute", inset: 0,
            backgroundColor: "#060608", overflow: "hidden",
            zIndex: 15,
          }}>

            {/* ── Liquid / Apple water blobs ── */}
            {/* Blob 1 — large, top-right, violet */}
            <div aria-hidden="true" style={{
              position: "absolute",
              width: "clamp(400px, 55vw, 800px)",
              height: "clamp(400px, 55vw, 800px)",
              top: "-20%", right: "-12%",
              background: "radial-gradient(ellipse at center, rgba(139,92,246,0.38) 0%, rgba(99,57,220,0.18) 45%, transparent 75%)",
              filter: "blur(72px)",
              animation: "liquid-blob-1 11s ease-in-out infinite",
              pointerEvents: "none",
            }} />

            {/* Blob 2 — large, bottom-left, pink-violet */}
            <div aria-hidden="true" style={{
              position: "absolute",
              width: "clamp(350px, 48vw, 700px)",
              height: "clamp(350px, 48vw, 700px)",
              bottom: "-18%", left: "-10%",
              background: "radial-gradient(ellipse at center, rgba(236,72,153,0.22) 0%, rgba(139,92,246,0.14) 50%, transparent 75%)",
              filter: "blur(80px)",
              animation: "liquid-blob-2 14s ease-in-out infinite",
              animationDelay: "2s",
              pointerEvents: "none",
            }} />

            {/* Blob 3 — small, center accent */}
            <div aria-hidden="true" style={{
              position: "absolute",
              width: "clamp(180px, 22vw, 340px)",
              height: "clamp(180px, 22vw, 340px)",
              top: "38%", left: "42%",
              background: "radial-gradient(ellipse at center, rgba(139,92,246,0.18) 0%, transparent 70%)",
              filter: "blur(50px)",
              animation: "liquid-blob-3 9s ease-in-out infinite",
              animationDelay: "1s",
              pointerEvents: "none",
            }} />

            {/* Top-edge feather so the slide-up feels seamless */}
            <div aria-hidden="true" style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: 100, pointerEvents: "none", zIndex: 2,
              background: "linear-gradient(to bottom, #060608 0%, transparent 100%)",
            }} />

            {/* Floating tech logos */}
            {logos}

            {/* ── Content ── */}
            <div style={{
              position: "relative", zIndex: 10,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              height: "100%",
              padding: "clamp(56px, 8vh, 80px) clamp(40px, 7vw, 100px) clamp(36px, 5vh, 56px)",
            }}>

              {/* Heading */}
              <h2 style={{
                fontFamily: '"Anton", sans-serif',
                fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
                color: "#fff",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                marginBottom: "clamp(28px, 4vh, 44px)",
                textAlign: "center",
              }}>
                ABOUT ME
              </h2>

              {/* 2-column row: para 1 + para 2 */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(20px, 4vw, 48px)",
                width: "100%",
                maxWidth: 1040,
                marginBottom: "clamp(16px, 2.5vh, 28px)",
              }}>
                {[ABOUT_BIO[0], ABOUT_BIO[1]].map((para, i) => (
                  <p key={i} style={{
                    color: "rgba(255,255,255,0.72)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(12px, 0.88vw, 14px)",
                    lineHeight: 1.85,
                    margin: 0,
                    textAlign: "left",
                  }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Full-width third paragraph */}
              <p style={{
                width: "100%",
                maxWidth: 1040,
                color: "rgba(255,255,255,0.55)",
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(11px, 0.82vw, 13px)",
                lineHeight: 1.85,
                textAlign: "left",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                paddingTop: "clamp(14px, 2vh, 22px)",
                marginBottom: "clamp(24px, 4vh, 40px)",
              }}>
                {ABOUT_BIO[2]}
              </p>

              <JourneyBtn />
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          MOBILE — normal stacked sections (≤ 768px)
      ═══════════════════════════════════════════════════════ */}
      <div className="mobile-stack-view">

        {/* ── Mobile Hero ── */}
        <section style={{
          minHeight: "100svh",
          backgroundColor: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "72px 20px 40px",
          overflow: "hidden",
          position: "relative",
          gap: 0,
        }}>
          {/* Ambient glow */}
          <div aria-hidden="true" style={{
            position: "absolute",
            top: "20%", left: "50%",
            transform: "translateX(-50%)",
            width: "80vw", height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <h1 style={{
            fontFamily: '"Anton", sans-serif',
            fontSize: "clamp(1.7rem, 8.5vw, 3.5rem)",
            color: "#fff",
            textAlign: "center",
            lineHeight: 1,
            letterSpacing: "-0.01em",
            userSelect: "none",
            whiteSpace: "nowrap",
            margin: 0,
            flexShrink: 0,
            position: "relative",
            zIndex: 1,
          }}>
            HI, I&apos;M AKSHAY
          </h1>

          {/* Avatar — much bigger on mobile */}
          <div style={{
            width: "min(80vw, 310px)",
            height: "clamp(270px, 46vh, 370px)",
            marginTop: "clamp(-24px, -3vh, -14px)",
            flexShrink: 0,
            zIndex: 10,
            position: "relative",
          }}>
            <TiltAvatar />
          </div>

          <p style={{
            maxWidth: "88vw",
            textAlign: "center",
            color: "rgba(255,255,255,0.65)",
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(0.76rem, 3.4vw, 0.88rem)",
            lineHeight: 1.78,
            marginTop: "clamp(8px, 1.5vh, 16px)",
            padding: "0 8px",
            flexShrink: 0,
            position: "relative",
            zIndex: 1,
          }}>
            {HERO_BIO}
          </p>

          <div style={{
            marginTop: "clamp(16px, 2.5vh, 24px)",
            flexShrink: 0,
            position: "relative",
            zIndex: 1,
          }}>
            <ContactBtn />
          </div>
        </section>

        {/* ── Mobile About ── */}
        <section id="about" style={{
          backgroundColor: "#060608",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "72px 20px 56px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Liquid blobs — mobile scale */}
          <div aria-hidden="true" style={{
            position: "absolute", top: "-10%", right: "-20%",
            width: "70vw", height: "70vw",
            background: "radial-gradient(ellipse, rgba(139,92,246,0.3) 0%, transparent 70%)",
            filter: "blur(50px)",
            animation: "liquid-blob-1 11s ease-in-out infinite",
            pointerEvents: "none",
          }} />
          <div aria-hidden="true" style={{
            position: "absolute", bottom: "-10%", left: "-20%",
            width: "60vw", height: "60vw",
            background: "radial-gradient(ellipse, rgba(236,72,153,0.18) 0%, rgba(139,92,246,0.1) 50%, transparent 70%)",
            filter: "blur(50px)",
            animation: "liquid-blob-2 14s ease-in-out infinite",
            animationDelay: "2s",
            pointerEvents: "none",
          }} />

          {/* Mobile tech logos */}
          <TechLogo
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React" size={58} glowColor="rgba(97,218,251,0.55)"
            delay={0} spin side="left" className=""
            style={{ top: 12, left: "3%" }}
          />
          <TechLogo
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js" size={58} glowColor="rgba(51,153,51,0.55)"
            delay={0.15} side="right" className=""
            style={{ top: 12, right: "3%" }}
          />
          <TechLogo
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3" size={50} glowColor="rgba(21,114,182,0.55)"
            delay={0.3} side="right" className=""
            style={{ bottom: 12, right: "3%" }}
          />
          <TechLogo
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5" size={50} glowColor="rgba(227,79,38,0.55)"
            delay={0.45} side="left" className=""
            style={{ bottom: 12, left: "3%" }}
          />

          <h2 style={{
            position: "relative", zIndex: 1,
            fontFamily: '"Anton", sans-serif',
            fontSize: "clamp(2.2rem, 10vw, 3rem)",
            color: "#fff",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}>
            ABOUT ME
          </h2>

          <div style={{ position: "relative", zIndex: 1, maxWidth: "84vw", marginBottom: 28 }}>
            {ABOUT_BIO.map((para, i) => (
              <p key={i} style={{
                color: "rgba(255,255,255,0.78)",
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(12px, 3vw, 14px)",
                lineHeight: 1.8,
                marginBottom: i < ABOUT_BIO.length - 1 ? "clamp(10px, 1.6vh, 14px)" : 0,
                textAlign: "center",
              }}>
                {para}
              </p>
            ))}
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <JourneyBtn />
          </div>
        </section>

      </div>
    </>
  );
}

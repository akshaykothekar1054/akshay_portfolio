"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ── Copy ──────────────────────────────────────────────────────── */
const HERO_BIO =
  "I'm Akshay Kothekar, a Full Stack Software Engineer with over 3 years of experience " +
  "building production-ready web applications and digital products. I enjoy turning complex " +
  "ideas into intuitive, reliable, and scalable solutions that solve real-world problems.";

const ABOUT_BIO =
  "With 3+ years of experience in full stack development, I specialize in React.js, " +
  "Node.js, and scalable backend systems. I love collaborating on products that solve " +
  "real problems and showcase clean engineering. Let's build something great together!";

/* ── Gradient-border CTA ───────────────────────────────────────── */
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
            filter: "drop-shadow(0 28px 56px rgba(139,92,246,0.32))",
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
  style: React.CSSProperties;
};

function TechLogo({ src, alt, size, glowColor, delay, spin = false, style }: LogoProps) {
  return (
    <motion.div
      className="about-logo-decorator"
      aria-hidden="true"
      style={{ position: "absolute", pointerEvents: "none", ...style }}
      animate={spin ? { y: [0, -12, 0], rotate: [0, 360] } : { y: [0, -12, 0] }}
      transition={
        spin
          ? {
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
              rotate: { duration: 8, repeat: Infinity, ease: "linear", repeatType: "loop" },
            }
          : { duration: 3, repeat: Infinity, ease: "easeInOut", delay }
      }
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

/* ══════════════════════════════════════════════════════════════════
   Main export
══════════════════════════════════════════════════════════════════ */
export default function HeroAboutTransition() {
  const outerRef      = useRef<HTMLDivElement>(null);
  const heroPanelRef  = useRef<HTMLDivElement>(null);
  const aboutPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;
    gsap.registerPlugin(ScrollTrigger);

    const outer      = outerRef.current;
    const heroPanel  = heroPanelRef.current;
    const aboutPanel = aboutPanelRef.current;
    if (!outer || !heroPanel || !aboutPanel) return;

    const ctx = gsap.context(() => {
      // About panel starts BELOW the viewport (vertical slide-up)
      gsap.set(aboutPanel, { yPercent: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outer,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // 1 unit idle → 2 units: about slides up, hero recedes slightly
      tl.to({}, { duration: 1 })
        .to(aboutPanel, { yPercent: 0, ease: "none", duration: 2 }, 1)
        .to(heroPanel,  { scale: 0.93, ease: "none", duration: 2 }, 1);
    }, outer);

    return () => ctx.revert();
  }, []);

  /* Tech logo set — shared across desktop about panel */
  const logos = (
    <>
      {/* TOP LEFT — React (spin + float) */}
      <TechLogo
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        size={80}
        glowColor="rgba(97,218,251,0.6)"
        delay={0}
        spin
        style={{ top: "8%", left: "4%" }}
      />
      {/* TOP RIGHT — Node.js */}
      <TechLogo
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
        size={80}
        glowColor="rgba(51,153,51,0.6)"
        delay={0.8}
        style={{ top: "6%", right: "5%" }}
      />
      {/* MIDDLE RIGHT — CSS3 */}
      <TechLogo
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS3"
        size={75}
        glowColor="rgba(21,114,182,0.6)"
        delay={1.4}
        style={{ top: "42%", right: "3%" }}
      />
      {/* BOTTOM LEFT — HTML5 */}
      <TechLogo
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML5"
        size={75}
        glowColor="rgba(227,79,38,0.6)"
        delay={2}
        style={{ bottom: "25%", left: "4%" }}
      />
    </>
  );

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          DESKTOP — 300vh outer / sticky 100vh inner
          About panel slides UP over the hero (vertical scrub)
          Hidden on ≤ 768px via .desktop-split-view
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

          {/* ── Hero panel (full screen, sits behind) ── */}
          <div ref={heroPanelRef} style={{
            position: "absolute", inset: 0,
            backgroundColor: "#000", overflow: "hidden",
            display: "flex", flexDirection: "column",
            alignItems: "center", paddingTop: "8vh",
            zIndex: 10,
          }}>
            <h1 style={{
              fontFamily: '"Anton", sans-serif',
              fontSize: "clamp(3rem, 8vw, 10rem)",
              color: "#fff",
              textAlign: "center",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              zIndex: 1, position: "relative",
              userSelect: "none", pointerEvents: "none",
              margin: 0, width: "100%",
            }}>
              HI, I&apos;M AKSHAY
            </h1>

            <div style={{
              width: "clamp(220px, 28vw, 420px)",
              height: "clamp(260px, 40vh, 500px)",
              marginTop: "-60px",
              flexShrink: 0, zIndex: 10, position: "relative",
            }}>
              <TiltAvatar />
            </div>

            <p style={{
              maxWidth: "min(520px, 84vw)",
              textAlign: "center", color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(0.7rem, 1vw, 0.88rem)",
              lineHeight: 1.85,
              marginTop: "clamp(8px, 1.2vh, 18px)",
              padding: "0 16px",
              zIndex: 5, position: "relative",
            }}>
              {HERO_BIO}
            </p>

            <div style={{ marginTop: 20 }}>
              <ContactBtn />
            </div>
          </div>

          {/* ── About panel (full screen, slides up from below) ── */}
          <div ref={aboutPanelRef} style={{
            position: "absolute", inset: 0,
            backgroundColor: "#000", overflow: "hidden",
            zIndex: 15,
          }}>
            {/* Soft top-edge gradient so the slide-up feels seamless */}
            <div aria-hidden="true" style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: 80, pointerEvents: "none", zIndex: 2,
              background: "linear-gradient(to bottom, #000 0%, transparent 100%)",
            }} />

            {/* Ambient purple glow */}
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{
                width: "50%", height: "50%", borderRadius: "50%",
                background: "rgba(139,92,246,0.07)", filter: "blur(100px)",
              }} />
            </div>

            {/* Tech logo decorators */}
            {logos}

            {/* Centered content */}
            <div style={{
              position: "relative", zIndex: 10,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              height: "100%",
              padding: "0 clamp(24px, 8vw, 120px)",
              textAlign: "center",
            }}>
              <h2 style={{
                fontFamily: '"Anton", sans-serif',
                fontSize: "clamp(3.5rem, 8vw, 6rem)",
                color: "#fff",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                marginBottom: 32,
              }}>
                ABOUT ME
              </h2>

              <p style={{
                maxWidth: 480,
                color: "rgba(255,255,255,0.85)",
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                lineHeight: 1.9,
                marginBottom: 44,
              }}>
                {ABOUT_BIO}
              </p>

              <ContactBtn />
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          MOBILE — normal stacked sections (≤ 768px)
          Shown via .mobile-stack-view, no GSAP
      ═══════════════════════════════════════════════════════ */}
      <div className="mobile-stack-view">

        {/* Mobile Hero */}
        <section style={{
          minHeight: "100svh",
          backgroundColor: "#000",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "flex-start",
          paddingTop: "52px",   /* clears fixed navbar */
          paddingBottom: "16px",
          overflow: "hidden", position: "relative",
        }}>
          <h1 style={{
            fontFamily: '"Anton", sans-serif',
            fontSize: "clamp(2.2rem, 11vw, 3.5rem)",
            color: "#fff", textAlign: "center",
            lineHeight: 0.9, letterSpacing: "-0.02em",
            zIndex: 1, position: "relative",
            userSelect: "none", pointerEvents: "none",
            margin: 0, padding: "0 10px",
          }}>
            HI, I&apos;M AKSHAY
          </h1>

          <div style={{
            width: "min(56vw, 230px)",
            height: "clamp(180px, 33vh, 260px)",
            marginTop: "-10px", flexShrink: 0,
            zIndex: 10, position: "relative",
          }}>
            <TiltAvatar />
          </div>

          <p style={{
            maxWidth: "88vw",
            textAlign: "center", color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(0.68rem, 3vw, 0.8rem)",
            lineHeight: 1.75,
            marginTop: 8, padding: "0 14px",
            zIndex: 5, position: "relative",
          }}>
            {HERO_BIO}
          </p>

          <div style={{ marginTop: 16 }}>
            <ContactBtn />
          </div>
        </section>

        {/* Mobile About */}
        <section id="about" style={{
          backgroundColor: "#000",
          minHeight: "100svh",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "48px 20px 40px",
          textAlign: "center",
          position: "relative", overflow: "hidden",
        }}>
          {/* Ambient glow */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: "80%", height: "50%", borderRadius: "50%",
              background: "rgba(139,92,246,0.06)", filter: "blur(80px)",
            }} />
          </div>

          <h2 style={{
            position: "relative", zIndex: 1,
            fontFamily: '"Anton", sans-serif',
            fontSize: "clamp(2.6rem, 12vw, 3.8rem)",
            color: "#fff", lineHeight: 0.9,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}>
            ABOUT ME
          </h2>

          <p style={{
            position: "relative", zIndex: 1,
            maxWidth: "88vw",
            color: "rgba(255,255,255,0.85)",
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(13px, 3.4vw, 15px)",
            lineHeight: 1.85,
            marginBottom: 28,
          }}>
            {ABOUT_BIO}
          </p>

          <div style={{ position: "relative", zIndex: 1 }}>
            <ContactBtn />
          </div>
        </section>

      </div>
    </>
  );
}

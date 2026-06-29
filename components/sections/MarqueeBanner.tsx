"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* Words that make up one cycle of the marquee */
const WORDS = [
  { text: "FULL STACK DEVELOPER", isBullet: false },
  { text: "•",                    isBullet: true  },
  { text: "REACT.JS",             isBullet: false },
  { text: "•",                    isBullet: true  },
  { text: "NODE.JS",              isBullet: false },
  { text: "•",                    isBullet: true  },
  { text: "MYSQL",                isBullet: false },
  { text: "•",                    isBullet: true  },
  { text: "SCALABLE SYSTEMS",     isBullet: false },
  { text: "•",                    isBullet: true  },
  { text: "WEB APPLICATIONS",     isBullet: false },
  { text: "•",                    isBullet: true  },
  { text: "DIGITAL PRODUCTS",     isBullet: false },
  { text: "•",                    isBullet: true  },
];

/* Stroke colour when idle */
const IDLE_STROKE  = "1.5px rgba(255,255,255,0.22)";
const HOVER_STROKE = "1.5px #ffffff";

function WordSpan({ text, isBullet }: { text: string; isBullet: boolean }) {
  if (isBullet) {
    return (
      <span
        aria-hidden="true"
        style={{
          color: "rgba(255,255,255,0.2)",
          margin: "0 clamp(12px, 1.8vw, 28px)",
          fontFamily: '"Anton", sans-serif',
          fontSize: "clamp(3rem, 7vw, 8rem)",
          lineHeight: 1,
          userSelect: "none",
          flexShrink: 0,
        }}
      >
        {text}
      </span>
    );
  }

  return (
    <span
      style={{
        fontFamily: '"Anton", sans-serif',
        fontSize: "clamp(3rem, 7vw, 8rem)",
        lineHeight: 1,
        letterSpacing: "0.03em",
        color: "transparent",
        /* hollow outline — default state */
        WebkitTextStroke: IDLE_STROKE,
        transition: "color 0.25s ease, -webkit-text-stroke 0.25s ease",
        cursor: "default",
        userSelect: "none",
        flexShrink: 0,
        display: "inline-block",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#ffffff";
        (e.currentTarget.style as CSSStyleDeclaration & { webkitTextStroke: string }).webkitTextStroke = HOVER_STROKE;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "transparent";
        (e.currentTarget.style as CSSStyleDeclaration & { webkitTextStroke: string }).webkitTextStroke = IDLE_STROKE;
      }}
    >
      {text}
    </span>
  );
}

export default function MarqueeBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      /* As the section scrolls through the viewport, shift track left */
      gsap.fromTo(
        track,
        { x: "4%" },
        {
          x: "-28%",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",   /* when banner top enters viewport */
            end: "bottom top",     /* when banner bottom leaves viewport */
            scrub: 1.2,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  /* Render 3 copies so the track always fills even at wide viewports */
  const copies = [0, 1, 2];

  return (
    <section
      ref={sectionRef}
      aria-label="Skills marquee"
      style={{
        backgroundColor: "#0a0a0a",
        overflow: "hidden",
        padding: "clamp(28px, 5vh, 56px) 0",
        /* thin gradient borders top & bottom for visual separation */
        borderTop:    "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          width: "max-content",
          willChange: "transform",
        }}
      >
        {copies.map((ci) => (
          <span key={ci} style={{ display: "inline-flex", alignItems: "center" }}>
            {WORDS.map((w, wi) => (
              <WordSpan key={`${ci}-${wi}`} text={w.text} isBullet={w.isBullet} />
            ))}
          </span>
        ))}
      </div>
    </section>
  );
}

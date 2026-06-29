"use client";

import { useRef } from "react";

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

const IDLE_STROKE  = "1.5px rgba(255,255,255,0.22)";
const HOVER_STROKE = "1.5px #ffffff";

type StyleDecl = CSSStyleDeclaration & { webkitTextStroke: string };

function WordSpan({ text, isBullet }: { text: string; isBullet: boolean }) {
  const FONT: React.CSSProperties = {
    fontFamily: '"Anton", sans-serif',
    fontSize:   "clamp(2.8rem, 6.5vw, 8rem)",
    lineHeight: 1,
    flexShrink: 0,
    userSelect: "none",
  };

  if (isBullet) {
    return (
      <span
        aria-hidden="true"
        style={{
          ...FONT,
          color:  "rgba(255,255,255,0.18)",
          margin: "0 clamp(10px, 1.6vw, 26px)",
        }}
      >
        {text}
      </span>
    );
  }

  return (
    <span
      style={{
        ...FONT,
        display:          "inline-block",
        letterSpacing:    "0.03em",
        color:            "transparent",
        WebkitTextStroke: IDLE_STROKE,
        transition:       "color 0.25s ease, -webkit-text-stroke 0.25s ease",
        cursor:           "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#ffffff";
        (e.currentTarget.style as StyleDecl).webkitTextStroke = HOVER_STROKE;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "transparent";
        (e.currentTarget.style as StyleDecl).webkitTextStroke = IDLE_STROKE;
      }}
    >
      {text}
    </span>
  );
}

export default function MarqueeBanner() {
  const trackRef = useRef<HTMLDivElement>(null);

  const pause  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "paused";  };
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "running"; };

  return (
    <section
      aria-label="Skills marquee"
      onMouseEnter={pause}
      onMouseLeave={resume}
      style={{
        backgroundColor: "#0a0a0a",
        overflow:        "hidden",
        padding:         "clamp(24px, 4.5vh, 52px) 0",
        borderTop:       "1px solid rgba(255,255,255,0.05)",
        borderBottom:    "3px solid #F5F5F5",
      }}
    >
      {/*
        Two identical copies of WORDS side by side.
        CSS animates translateX(0 → -50%) which is exactly one copy width,
        creating a perfectly seamless infinite loop.
        Speed: 35s per loop — slow, smooth, automatic.
      */}
      <div
        ref={trackRef}
        style={{
          display:     "flex",
          alignItems:  "center",
          whiteSpace:  "nowrap",
          width:       "max-content",
          willChange:  "transform",
          animation:   "marquee-left 35s linear infinite",
        }}
      >
        {[0, 1].map((copy) => (
          <span key={copy} style={{ display: "inline-flex", alignItems: "center" }}>
            {WORDS.map((w, i) => (
              <WordSpan key={`${copy}-${i}`} text={w.text} isBullet={w.isBullet} />
            ))}
          </span>
        ))}
      </div>
    </section>
  );
}

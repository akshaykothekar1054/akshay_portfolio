"use client";

import { useRef } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Akshay delivered a robust REST API system ahead of schedule. His backend architecture is clean, well-documented, and a pleasure to build on top of.",
    name: "Ravi M.",
    role: "Tech Lead",
    initials: "RM",
  },
  {
    id: 2,
    quote:
      "His React.js skills transformed our admin dashboard. The UI is fast, intuitive, and our team adopted it immediately with zero training needed.",
    name: "Priya S.",
    role: "Product Manager",
    initials: "PS",
  },
  {
    id: 3,
    quote:
      "The database schema he designed handles our 10k daily records effortlessly. Query performance improved by 60% after his optimizations.",
    name: "Suresh K.",
    role: "CTO",
    initials: "SK",
  },
  {
    id: 4,
    quote:
      "Incredibly collaborative and writes clean, maintainable code. Sprint reviews are always smooth when Akshay is on the task.",
    name: "Neha P.",
    role: "Scrum Master",
    initials: "NP",
  },
  {
    id: 5,
    quote:
      "Akshay's multi-tenant architecture was exactly what we needed to scale. He understood our requirements from day one and executed flawlessly.",
    name: "Amit D.",
    role: "Startup Founder",
    initials: "AD",
  },
  {
    id: 6,
    quote:
      "Fast turnaround, great communication, and consistently high quality output. Would absolutely work with Akshay again on future projects.",
    name: "Divya R.",
    role: "HR Manager",
    initials: "DR",
  },
] as const;

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const pause  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "paused";  };
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "running"; };

  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: "#fff",
        padding: "clamp(52px, 7vh, 100px) 0",
        overflow: "hidden",
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          textAlign: "center",
          padding: "0 clamp(16px, 5vw, 52px)",
          maxWidth: 1200,
          margin: "0 auto clamp(50px, 7vh, 80px) auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(12px, 2vw, 16px)",
            marginBottom: "clamp(16px, 2vh, 24px)",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(10px, 0.8vw, 12px)",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#8B5CF6",
              fontWeight: 600,
            }}
          >
            TESTIMONIALS
          </span>
        </div>

        <h2
          style={{
            fontFamily: '"Anton", sans-serif',
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            color: "#000",
            lineHeight: 1,
            margin: 0,
          }}
        >
          WHAT CLIENTS ARE SAYING
        </h2>
      </div>

      {/* ── Full-screen Marquee Container ── */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          padding: "clamp(16px, 2vh, 32px) 0",
        }}
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "clamp(16px, 2vw, 24px)",
            alignItems: "flex-start",
            whiteSpace: "nowrap",
            width: "max-content",
            willChange: "transform",
            animation: "testimonials-marquee 30s linear infinite",
            padding: "clamp(16px, 2vh, 24px) clamp(16px, 5vw, 52px)",
          }}
        >
          <style>{`
            @keyframes testimonials-marquee {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>

          {[0, 1].map((copy) => (
            <span
              key={copy}
              style={{
                display: "inline-flex",
                gap: "clamp(16px, 2vw, 24px)",
                alignItems: "flex-start",
              }}
            >
              {TESTIMONIALS.map((t) => (
                <div
                  key={`${copy}-${t.id}`}
                  style={{
                    flex: "0 0 clamp(280px, 22vw, 320px)",
                    minWidth: "clamp(280px, 22vw, 320px)",
                    backgroundColor: "#fafafa",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "clamp(12px, 1.2vw, 16px)",
                    padding: "clamp(18px, 2.2vw, 24px)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    cursor: "default",
                    overflow: "hidden",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "rgba(139, 92, 246, 0.5)";
                    el.style.boxShadow = "0 16px 48px rgba(139, 92, 246, 0.14)";
                    el.style.transform = "translateY(-6px) scale(1.015)";
                    el.style.backgroundColor = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "rgba(0,0,0,0.1)";
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0) scale(1)";
                    el.style.backgroundColor = "#fafafa";
                  }}
                >
                  {/* Quote mark */}
                  <span style={{
                    fontFamily: '"Anton", sans-serif',
                    fontSize: "2.5rem",
                    lineHeight: 1,
                    color: "#8B5CF6",
                    opacity: 0.3,
                    display: "block",
                    marginBottom: 4,
                    userSelect: "none",
                  }}>
                    "
                  </span>

                  {/* Quote */}
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(0.8rem, 0.85vw, 0.9rem)",
                      color: "#333",
                      lineHeight: 1.7,
                      fontWeight: 400,
                      flex: 1,
                      margin: 0,
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                    }}
                  >
                    {t.quote}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      background: "rgba(0,0,0,0.1)",
                      margin: "clamp(12px, 1.5vh, 16px) 0",
                    }}
                  />

                  {/* Author */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "clamp(10px, 1.2vw, 12px)",
                    }}
                  >
                    {/* Avatar */}
                    <div
                      style={{
                        flex: "0 0 auto",
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #8B5CF6, #6d28d9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#fff",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {t.initials}
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "clamp(10px, 0.85vw, 12px)",
                          color: "#000",
                          fontWeight: 600,
                          margin: 0,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t.name}
                      </p>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "clamp(8px, 0.7vw, 10px)",
                          color: "#777",
                          margin: "2px 0 0 0",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

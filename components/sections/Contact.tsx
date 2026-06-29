"use client";

import { PERSON } from "@/lib/constants";

// ── Component ──────────────────────────────────────────────────────────────
export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string).trim();
    const email = (fd.get("email") as string).trim();
    const message = (fd.get("message") as string).trim();
    const sub = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${PERSON.email}?subject=${sub}&body=${body}`;
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#000",
        padding: "clamp(52px, 8vh, 100px) clamp(16px, 5vw, 52px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative accent circle */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-200px",
          left: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="contact-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Left: Heading & Email ── */}
        <div>
          <h2
            style={{
              fontFamily: '"Anton", sans-serif',
              fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)",
              color: "#fff",
              lineHeight: 1,
              marginBottom: "clamp(24px, 4vh, 40px)",
              letterSpacing: "-0.02em",
            }}
          >
            LET'S<br />GET IN<br />TOUCH
          </h2>

          <a
            href={`mailto:${PERSON.email}`}
            style={{
              display: "inline-block",
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(0.95rem, 1.1vw, 1.2rem)",
              color: "#8B5CF6",
              textDecoration: "none",
              fontWeight: 500,
              transition: "all 0.3s ease",
              borderBottom: "1px solid rgba(139, 92, 246, 0.3)",
              paddingBottom: "4px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#a78bfa";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(139, 92, 246, 0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#8B5CF6";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(139, 92, 246, 0.3)";
            }}
          >
            {PERSON.email}
          </a>
        </div>

        {/* ── Right: Contact Form ── */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(16px, 2vh, 20px)",
          }}
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              style={{
                display: "block",
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(10px, 0.75vw, 11px)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.35)",
                marginBottom: "clamp(8px, 1vh, 10px)",
                fontWeight: 500,
              }}
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "clamp(8px, 1vw, 12px)",
                padding: "clamp(10px, 1.2vh, 14px) clamp(12px, 1.5vw, 16px)",
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(0.9rem, 1vw, 1rem)",
                color: "#fff",
                outline: "none",
                transition: "all 0.3s ease",
                boxSizing: "border-box",
              }}
              onFocus={(e) => {
                (e.target as HTMLInputElement).style.borderColor = "rgba(139, 92, 246, 0.6)";
                (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(139, 92, 246, 0.1)";
              }}
              onBlur={(e) => {
                (e.target as HTMLInputElement).style.borderColor = "rgba(255, 255, 255, 0.15)";
                (e.target as HTMLInputElement).style.boxShadow = "none";
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(10px, 0.75vw, 11px)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.35)",
                marginBottom: "clamp(8px, 1vh, 10px)",
                fontWeight: 500,
              }}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "clamp(8px, 1vw, 12px)",
                padding: "clamp(10px, 1.2vh, 14px) clamp(12px, 1.5vw, 16px)",
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(0.9rem, 1vw, 1rem)",
                color: "#fff",
                outline: "none",
                transition: "all 0.3s ease",
                boxSizing: "border-box",
              }}
              onFocus={(e) => {
                (e.target as HTMLInputElement).style.borderColor = "rgba(139, 92, 246, 0.6)";
                (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(139, 92, 246, 0.1)";
              }}
              onBlur={(e) => {
                (e.target as HTMLInputElement).style.borderColor = "rgba(255, 255, 255, 0.15)";
                (e.target as HTMLInputElement).style.boxShadow = "none";
              }}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              style={{
                display: "block",
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(10px, 0.75vw, 11px)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.35)",
                marginBottom: "clamp(8px, 1vh, 10px)",
                fontWeight: 500,
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell me about your project..."
              rows={4}
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "clamp(8px, 1vw, 12px)",
                padding: "clamp(10px, 1.2vh, 14px) clamp(12px, 1.5vw, 16px)",
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(0.9rem, 1vw, 1rem)",
                color: "#fff",
                outline: "none",
                transition: "all 0.3s ease",
                boxSizing: "border-box",
                resize: "vertical",
                minHeight: "120px",
              }}
              onFocus={(e) => {
                (e.target as HTMLTextAreaElement).style.borderColor = "rgba(139, 92, 246, 0.6)";
                (e.target as HTMLTextAreaElement).style.boxShadow = "0 0 0 3px rgba(139, 92, 246, 0.1)";
              }}
              onBlur={(e) => {
                (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255, 255, 255, 0.15)";
                (e.target as HTMLTextAreaElement).style.boxShadow = "none";
              }}
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            style={{
              marginTop: "clamp(8px, 1.5vh, 16px)",
              width: "100%",
              padding: "clamp(12px, 1.5vh, 16px) clamp(24px, 3vw, 32px)",
              backgroundColor: "#8B5CF6",
              border: "1.5px solid #8B5CF6",
              borderRadius: "clamp(8px, 1vw, 12px)",
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(11px, 0.85vw, 12px)",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#a78bfa";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#a78bfa";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(139, 92, 246, 0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#8B5CF6";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#8B5CF6";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  );
}

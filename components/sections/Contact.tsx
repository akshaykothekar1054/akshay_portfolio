"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/SocialIcons";
import { PERSON } from "@/lib/constants";

// ── Floating decoration ────────────────────────────────────────────────────
// Purple-glowing hand emoji, top-left corner, visible on desktop only.
// Outer motion.div drives the float; inner span holds the static CSS 3D tilt.
function HandDecoration() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none select-none absolute left-6 top-12 hidden lg:block lg:left-14 lg:top-16"
      animate={{ y: [0, -20, 0], rotate: [-6, 6, -6] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span
        className="block text-7xl"
        style={{
          filter: "drop-shadow(0 0 28px rgba(139,92,246,0.75))",
          transform: "perspective(350px) rotateX(12deg) rotateY(-16deg)",
        }}
      >
        🫵
      </span>
    </motion.div>
  );
}

// ── Shared input / textarea classes ───────────────────────────────────────
const FIELD =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm " +
  "text-black placeholder:text-black/25 transition-colors " +
  "focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/15";

const LABEL =
  "mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-black/45";

// ── Component ──────────────────────────────────────────────────────────────
export default function Contact() {
  // On submit, opens the user's email client with form data pre-filled.
  // No backend required — replace with Resend / EmailJS when ready.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd      = new FormData(e.currentTarget);
    const name    = (fd.get("name")    as string).trim();
    const email   = (fd.get("email")   as string).trim();
    const message = (fd.get("message") as string).trim();
    const sub  = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${PERSON.email}?subject=${sub}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-x-hidden bg-[#F5F5F5] py-28 lg:py-36"
    >
      <HandDecoration />

      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

          {/* ── Left: heading + contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-[#8B5CF6]">
              Let's Talk
            </p>

            <h2
              className="mb-8 font-display leading-[0.88] text-black"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            >
              GET IN<br />TOUCH
            </h2>

            <p className="mb-10 max-w-xs text-sm leading-relaxed text-black/50">
              Have a project in mind or want to discuss an opportunity? I'm always
              open to interesting work — reach out and let's build something great.
            </p>

            {/* Contact links */}
            <div className="space-y-5">

              <a href={`mailto:${PERSON.email}`} className="group flex items-center gap-4">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#EC4899]">
                  <Mail size={16} className="text-white" />
                </div>
                <div>
                  <p className="mb-0.5 text-[10px] uppercase tracking-widest text-black/35">Email</p>
                  <p className="break-all text-sm font-medium text-black transition-colors group-hover:text-[#8B5CF6]">
                    {PERSON.email}
                  </p>
                </div>
              </a>

              <a href={`tel:${PERSON.phone}`} className="group flex items-center gap-4">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-black/[0.07]">
                  <Phone size={16} className="text-black/50" />
                </div>
                <div>
                  <p className="mb-0.5 text-[10px] uppercase tracking-widest text-black/35">Phone</p>
                  <p className="text-sm font-medium text-black transition-colors group-hover:text-[#8B5CF6]">
                    {PERSON.phone}
                  </p>
                </div>
              </a>

              <a
                href={PERSON.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-black/[0.07] text-black/50">
                  <LinkedInIcon size={16} />
                </div>
                <div>
                  <p className="mb-0.5 text-[10px] uppercase tracking-widest text-black/35">LinkedIn</p>
                  <p className="text-sm font-medium text-black transition-colors group-hover:text-[#8B5CF6]">
                    linkedin.com/in/akshay-kothekar
                  </p>
                </div>
              </a>

            </div>
          </motion.div>

          {/* ── Right: contact form ── */}
          <motion.form
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* Name */}
            <div>
              <label htmlFor="cf-name" className={LABEL}>Name</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={FIELD}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="cf-email" className={LABEL}>Email</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className={FIELD}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="cf-message" className={LABEL}>Message</label>
              <textarea
                id="cf-message"
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className={`${FIELD} resize-none`}
              />
            </div>

            {/* Submit — pill shape, gradient fill */}
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] py-4 text-sm font-medium uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90"
            >
              Send Message →
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}

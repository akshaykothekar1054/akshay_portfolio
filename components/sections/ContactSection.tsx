"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/SocialIcons";
import { PERSON } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#8B5CF6] mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display leading-none text-black"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
          >
            LET'S TALK
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-black/55 leading-relaxed mb-10">
              Have a project in mind or want to discuss an opportunity? I'm always
              open to interesting work. Reach out and let's build something great together.
            </p>

            <div className="space-y-5">
              <a
                href={`mailto:${PERSON.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center flex-none">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-black/40 mb-0.5 uppercase tracking-wider">Email</p>
                  <p className="text-black text-sm font-medium group-hover:text-[#8B5CF6] transition-colors">
                    {PERSON.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${PERSON.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-black/[0.07] flex items-center justify-center flex-none">
                  <Phone size={18} className="text-black/50" />
                </div>
                <div>
                  <p className="text-[10px] text-black/40 mb-0.5 uppercase tracking-wider">Phone</p>
                  <p className="text-black text-sm font-medium group-hover:text-[#8B5CF6] transition-colors">
                    {PERSON.phone}
                  </p>
                </div>
              </a>

              <a
                href={PERSON.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-black/[0.07] flex items-center justify-center flex-none text-black/50">
                  <LinkedInIcon size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-black/40 mb-0.5 uppercase tracking-wider">LinkedIn</p>
                  <p className="text-black text-sm font-medium group-hover:text-[#8B5CF6] transition-colors">
                    linkedin.com/in/akshay-kothekar
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-medium text-black/50 mb-1.5 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-black placeholder:text-black/25 text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium text-black/50 mb-1.5 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-black placeholder:text-black/25 text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-medium text-black/50 mb-1.5 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-black placeholder:text-black/25 text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-medium text-black/50 mb-1.5 uppercase tracking-wider">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-black placeholder:text-black/25 text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-medium text-white text-sm bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] hover:opacity-90 transition-opacity"
            >
              Send Message →
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

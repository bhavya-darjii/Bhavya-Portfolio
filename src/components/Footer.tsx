"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal, navLinks } from "@/data/portfolio";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { Mail, Globe, Code2 } from "lucide-react";

export function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const year = new Date().getFullYear();

  return (
    <footer ref={ref} className="relative border-t border-white/5 px-4 py-16 md:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Large name display */}
        <div className="mb-12 overflow-hidden rounded-3xl bg-black px-6 py-16 md:px-12 md:py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 space-y-2 text-center"
          >
            <p className="font-display text-lg text-zinc-600 md:text-xl">WhatsApp</p>
            <p className="font-display text-lg text-zinc-600 md:text-xl">LinkedIn Account</p>
            <a
              href={personal.social.email}
              className="block font-display text-lg text-zinc-600 transition-colors hover:text-teal-400 md:text-xl"
            >
              {personal.email}
            </a>
          </motion.div>

          <h2
            className="text-center font-display text-[clamp(3rem,12vw,10rem)] font-extrabold uppercase leading-[0.9] tracking-tighter text-zinc-800"
            aria-label={personal.name}
          >
            <span className="block">BHAVYA</span>
            <span className="block">DARJI</span>
          </h2>

          {inView && (
            <div className="mt-12 flex flex-col items-center gap-6 md:flex-row md:justify-between">
              <TypewriterText
                text={personal.email.toUpperCase()}
                className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-600"
                delay={200}
                speed={30}
              />

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {navLinks.slice(1, 5).map((link, i) => (
                  <a key={link.href} href={link.href}>
                    <TypewriterText
                      text={link.label.toUpperCase()}
                      className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-teal-400"
                      delay={400 + i * 300}
                      speed={25}
                    />
                  </a>
                ))}
              </div>

              <TypewriterText
                text="CRAFTED WITH PASSION"
                className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-600"
                delay={1600}
                speed={25}
              />
            </div>
          )}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href={personal.social.email}
              aria-label="Email"
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-teal-400"
            >
              <Mail size={18} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-teal-400"
            >
              <Globe size={18} />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-teal-400"
            >
              <Code2 size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

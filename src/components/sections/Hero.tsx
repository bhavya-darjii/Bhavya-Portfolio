"use client";

import { motion } from "framer-motion";
import { heroNavLinks, personal } from "@/data/portfolio";
import { ProfileImage } from "@/components/ui/ProfileImage";

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen">
      <div className="w-full h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="hero-gradient-bg relative overflow-hidden shadow-2xl shadow-teal-900/20 w-full min-h-screen"
        >
          <div className="relative flex min-h-screen flex-col">

            {/* Large background typography — behind photo */}
            <div
              className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none z-0"
              aria-hidden
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-display text-[clamp(4rem,18vw,14rem)] font-extrabold leading-[0.85] tracking-tighter text-slate-900/90"
              >
                BHAVYA
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.45 }}
                className="font-display text-[clamp(4rem,18vw,14rem)] font-extrabold leading-[0.85] tracking-tighter text-slate-900/90"
              >
                DARJI
              </motion.span>
            </div>

            {/* Hero navigation */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="relative z-20 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 pt-8 md:gap-x-10"
            >
              {heroNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-800/70 transition-colors hover:text-slate-900 md:text-xs"
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>

            {/* Profile image — centered, touching the bottom, behind footer row but above bg text */}
            <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl"
                style={{ height: "92vh", marginLeft: "-100px" /* ← adjust this to shift image left/right */ }}
              >
                <ProfileImage />
              </motion.div>
            </div>

            {/* Footer meta row — pinned to bottom, above image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between px-6 pb-8"
            >
              {/* Left */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-800/60">
                  {personal.origin}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-800/60">
                  {personal.workingWith}
                </p>
              </div>

              {/* Right */}
              <div className="text-right">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-800/60">
                  {personal.techStack}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-800/60">
                  {personal.animations}
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

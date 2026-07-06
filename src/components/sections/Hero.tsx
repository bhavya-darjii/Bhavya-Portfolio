"use client";

import { motion } from "framer-motion";
import { heroNavLinks, personal } from "@/data/portfolio";
import { ProfileImage } from "@/components/ui/ProfileImage";

export function Hero() {
  return (
    <section id="home" className="relative px-4 pt-24 pb-8 md:px-6 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="hero-gradient-bg relative overflow-hidden rounded-3xl shadow-2xl shadow-teal-900/20"
        >
          <div className="relative flex min-h-[85vh] flex-col">
            {/* Large background typography */}
            <div
              className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none"
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

            {/* Profile image — centered, overlapping text */}
            <div className="relative z-10 mx-auto mt-4 flex flex-1 items-end justify-center md:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[55vh] w-full max-w-lg md:h-[65vh] md:max-w-xl"
              >
                <div className="relative h-full w-full">
                  <ProfileImage className="h-full w-full [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]" />
                </div>
              </motion.div>
            </div>

            {/* Footer meta row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="relative z-20 grid grid-cols-1 gap-4 px-6 pb-8 md:grid-cols-3 md:items-end md:gap-0"
            >
              <div className="text-center md:text-left">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-800/60">
                  {personal.origin}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-800/60">
                  {personal.workingWith}
                </p>
              </div>
              <p className="text-center text-[10px] font-medium uppercase tracking-[0.2em] text-slate-800/50 md:text-xs">
                {personal.heroSubtitle}
              </p>
              <div className="text-center md:text-right">
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

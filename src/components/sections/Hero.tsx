"use client";

import { motion } from "framer-motion";
import { heroNavLinks, personal } from "@/data/portfolio";
import { ProfileImage } from "@/components/ui/ProfileImage";

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[115svh] md:min-h-screen">
      <div className="w-full h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="hero-gradient-bg relative overflow-hidden shadow-2xl shadow-teal-900/20 w-full min-h-[115svh] md:min-h-screen"
        >
          <div className="relative flex min-h-[115svh] md:min-h-screen flex-col">

            {/* Large background typography — behind photo */}
            <div
              className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none z-0"
              aria-hidden
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-display text-[clamp(4rem,18vw,14rem)] font-extrabold leading-[0.85] text-slate-900/90"
              >
                BHA<span style={{ marginLeft: "-0.28em" }}>V</span><span style={{ marginLeft: "0.03em" }}>Y</span><span style={{ marginLeft: "-0.29em" }}>A</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.45 }}
                className="font-display text-[clamp(4rem,18vw,14rem)] font-extrabold leading-[0.85] text-slate-900/90"
              >
                DARJI
              </motion.div>
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

            {/* MOBILE ONLY: redesigned info block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="relative z-20 px-6 pt-18 pb-6 md:hidden"
            >
              {/* Big role title */}
              <p
                className="font-sans text-lg font-bold uppercase tracking-[0.2em] leading-none text-center"
                style={{ color: "rgba(0,0,0,0.85)" }}
              >
                {personal.techStack}
              </p>
              <p
                className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-center"
                style={{ color: "rgba(0,0,0,0.5)" }}
              >
                {personal.animations}
              </p>



              {/* Two info cards */}
              <div className="flex justify-center gap-3 mt-6 pr-6">
                {/* Left card */}
                <div className="w-[48%] pl-4 flex gap-1.5">
                  <div className="shrink-0 pt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(0,0,0,0.7)" }}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.15em] mb-1" style={{ color: "rgba(0,0,0,0.8)" }}>
                      {personal.origin}
                    </span>
                    <p className="text-[9px] font-medium uppercase tracking-[0.12em] leading-relaxed" style={{ color: "rgba(0,0,0,0.45)" }}>
                      Working with<br />India & beyond
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px bg-black/10" />

                {/* Right card */}
                <div className="flex-1 pl-3 flex gap-1.5">
                  <div className="shrink-0 pt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(0,0,0,0.7)" }}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.15em] mb-1" style={{ color: "rgba(0,0,0,0.8)" }}>
                      Global Mindset
                    </span>
                    <p className="text-[9px] font-medium uppercase tracking-[0.12em] leading-relaxed whitespace-nowrap" style={{ color: "rgba(0,0,0,0.45)" }}>
                      Building solutions<br />that create impact
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile image — centered, touching the bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: "160%",
                  height: "75svh",
                  marginLeft: "8%",
                }}
                className="md:hidden"
              >
                <ProfileImage scale={2.2} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: "100%",
                  height: "75vh",
                  maxWidth: "896px",
                  marginLeft: "0",
                }}
                className="hidden md:block"
              >
                <ProfileImage scale={1.2} />
              </motion.div>
            </div>

            {/* DESKTOP ONLY: meta row pinned to bottom, above image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute bottom-0 left-0 right-0 z-20 hidden md:flex items-end justify-between px-6 pb-8"
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

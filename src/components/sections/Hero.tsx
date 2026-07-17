"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { heroNavLinks, personal } from "@/data/portfolio";
import { ProfileImage } from "@/components/ui/ProfileImage";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress through the hero spacer section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Smooth physics on scroll progress
  const spring = useSpring(scrollYProgress, { stiffness: 60, damping: 18 });

  // Text: fades out + drifts up over first 35% of scroll
  const textOpacity = useTransform(spring, [0, 0.35], [1, 0]);
  const textY = useTransform(spring, [0, 0.35], [0, -24]);

  // Image: scale up slightly, fade + blur — never fully disappears (min 0.14 opacity)
  const imageOpacity = useTransform(spring, [0.2, 0.88], [1, 0.14]);
  const imageScale = useTransform(spring, [0, 0.65], [1, 1.07]);
  const imageBlurValue = useTransform(spring, [0.2, 0.88], [0, 16]);
  const imageFilter = useTransform(imageBlurValue, (v) => `blur(${v}px)`);

  return (
    // Spacer: takes up scroll space in the document so sections below appear after scrolling
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-screen z-0"
    >
      {/* Fixed visual layer — stays on screen while user scrolls through the spacer */}
      <div className="fixed top-0 left-0 w-screen min-h-[115svh] md:h-screen z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="hero-gradient-bg relative overflow-hidden shadow-2xl shadow-teal-900/20 w-full min-h-[115svh] md:h-screen pointer-events-auto"
        >
          {/* Animated shimmer glow overlay */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            animate={{
              background: [
                "radial-gradient(ellipse 70% 50% at 20% 30%, rgba(20,184,166,0.13) 0%, transparent 70%)",
                "radial-gradient(ellipse 70% 50% at 80% 70%, rgba(20,184,166,0.13) 0%, transparent 70%)",
                "radial-gradient(ellipse 70% 50% at 20% 30%, rgba(20,184,166,0.13) 0%, transparent 70%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex min-h-[115svh] md:h-screen flex-col">

            {/* ── ALL TEXT — fades + drifts up on scroll ── */}
            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className="absolute inset-0 flex flex-col min-h-[115svh] md:h-screen z-20"
            >
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
                {heroNavLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.07 }}
                    whileHover={{ scale: 1.1, color: "rgba(0,0,0,0.9)" }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-800/70 md:text-xs"
                    style={{ display: "inline-block" }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>

              {/* MOBILE ONLY: redesigned info block */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="relative z-20 px-6 pt-18 pb-6 md:hidden"
              >
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
                  <motion.div
                    whileHover={{ y: -3, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-[48%] pl-4 flex gap-1.5 cursor-default"
                  >
                    <div className="shrink-0 pt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(0,0,0,0.7)" }}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.15em] mb-1" style={{ color: "rgba(0,0,0,0.8)" }}>
                        {personal.origin}
                      </span>
                      <p className="text-[9px] font-medium uppercase tracking-[0.12em] leading-relaxed" style={{ color: "rgba(0,0,0,0.45)" }}>
                        Working with<br />India &amp; beyond
                      </p>
                    </div>
                  </motion.div>

                  {/* Divider */}
                  <div className="w-px bg-black/10" />

                  {/* Right card */}
                  <motion.div
                    whileHover={{ y: -3, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex-1 pl-3 flex gap-1.5 cursor-default"
                  >
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
                  </motion.div>
                </div>
              </motion.div>

              {/* DESKTOP ONLY: meta row pinned to bottom, above image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-0 left-0 right-0 z-20 hidden md:flex items-end justify-between px-6 pb-8"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="cursor-default"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-800/60">
                    {personal.origin}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-800/60">
                    {personal.workingWith}
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-right cursor-default"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-800/60">
                    {personal.techStack}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-800/60">
                    {personal.animations}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ── PROFILE IMAGE — scroll: scale + fade + blur, entry: slides from right ── */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 z-10 flex justify-center"
              style={{
                opacity: imageOpacity,
                scale: imageScale,
                filter: imageFilter,
              }}
            >
              {/* Mobile image */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: "160%", height: "75svh", marginLeft: "8%" }}
                className="md:hidden"
              >
                <ProfileImage scale={2.2} />
              </motion.div>

              {/* Desktop image */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: "100%", height: "75vh", maxWidth: "896px", marginLeft: "0" }}
                className="hidden md:block"
              >
                <ProfileImage scale={1.2} />
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

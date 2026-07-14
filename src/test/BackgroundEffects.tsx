"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#030308]" />

      <motion.div
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 20%, rgba(14,165,233,0.18) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 30%, rgba(20,184,166,0.2) 0%, transparent 50%)",
            "radial-gradient(ellipse at 40% 60%, rgba(6,182,212,0.18) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 20%, rgba(14,165,233,0.18) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-teal-500/15 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 80, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/12 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[100px]"
      />

      <motion.div
        animate={{
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030308]/80" />
    </div>
  );
}

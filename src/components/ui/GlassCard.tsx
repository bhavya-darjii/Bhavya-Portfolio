"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

// Keyframe paths — blobs wander the full card surface
const tealBlob = {
  x: ["10%", "55%", "30%", "70%", "15%", "60%", "10%"],
  y: ["15%", "60%", "80%", "20%", "70%", "35%", "15%"],
};

const cyanBlob = {
  x: ["70%", "20%", "65%", "10%", "80%", "40%", "70%"],
  y: ["70%", "25%", "60%", "80%", "15%", "55%", "70%"],
};

const accentBlob = {
  x: ["40%", "75%", "15%", "50%", "85%", "25%", "40%"],
  y: ["40%", "10%", "65%", "85%", "45%", "20%", "40%"],
};

export function GlassCard({
  children,
  className,
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.25 } } : undefined}
      className={cn(
        "glass-card group relative overflow-hidden rounded-2xl p-6 md:p-8",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        {/* Teal blob — roams the full card */}
        <motion.div
          animate={{ left: tealBlob.x, top: tealBlob.y }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
          className="absolute h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/55 blur-2xl"
        />
        {/* Cyan blob — counter-roam */}
        <motion.div
          animate={{ left: cyanBlob.x, top: cyanBlob.y }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
            delay: 3,
          }}
          className="absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/50 blur-2xl"
        />
        {/* Soft accent blob */}
        <motion.div
          animate={{ left: accentBlob.x, top: accentBlob.y }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
            delay: 6,
          }}
          className="absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300/40 blur-xl"
        />
      </div>
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.div>
  );
}

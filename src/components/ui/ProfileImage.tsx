"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";

export function ProfileImage({
  className = "",
  scale = 1,
  offsetX = "0%",
  loaded = true,
}: {
  className?: string;
  scale?: number;
  offsetX?: string;
  loaded?: boolean;
}) {
  return (
    <motion.img
      src={personal.profileImage}
      alt={personal.name}
      initial={{ opacity: 1, x: 10, scale: scale }}
      animate={{ opacity: 1, x: loaded ? 0 : 10, scale: scale }}
      transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
      className={`object-contain object-bottom w-full h-full ${className}`}
      style={{
        mixBlendMode: "multiply",
        transformOrigin: "bottom center",
      }}
    />
  );
}

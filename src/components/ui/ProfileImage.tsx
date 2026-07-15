"use client";

import { personal } from "@/data/portfolio";

export function ProfileImage({
  className = "",
  scale = 1,
  offsetX = "0%",
}: {
  className?: string;
  scale?: number;
  offsetX?: string;
}) {
  return (
    <img
      src={personal.profileImage}
      alt={personal.name}
      className={`object-contain object-bottom w-full h-full ${className}`}
      style={{
        mixBlendMode: "multiply",
        transform: `translateX(${offsetX}) scale(${scale})`,
        transformOrigin: "bottom center",
      }}
    />
  );
}

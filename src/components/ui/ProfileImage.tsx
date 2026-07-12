"use client";

import { personal } from "@/data/portfolio";

export function ProfileImage({ className = "" }: { className?: string }) {
  return (
    <img
      src={personal.profileImage}
      alt={personal.name}
      className={`object-contain object-bottom w-full h-full ${className}`}
      style={{ mixBlendMode: "multiply" }}
    />
  );
}

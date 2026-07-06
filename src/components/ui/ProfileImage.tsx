"use client";

import { useState } from "react";
import Image from "next/image";
import { personal } from "@/data/portfolio";

export function ProfileImage({ className = "" }: { className?: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-teal-400/30 to-cyan-400/20 ${className}`}
      >
        <span className="font-display text-6xl font-bold text-slate-800/40 md:text-8xl">
          BD
        </span>
      </div>
    );
  }

  return (
    <Image
      src={personal.profileImage}
      alt={personal.name}
      fill
      priority
      className="object-cover object-top"
      onError={() => setHasError(true)}
    />
  );
}

"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/sections/About";
import { leadershipExperience } from "@/data/portfolio";

export function Leadership() {
  return (
    <section id="leadership" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Beyond Code"
          title="Leadership & Community"
          description="Initiatives in product ownership, peer mentoring, environmental advocacy, and the Mumbai developer ecosystem."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {leadershipExperience.map((item, idx) => (
            <GlassCard key={item.title} delay={idx * 0.08} className="flex flex-col">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                    {item.tag}
                  </p>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-0.5 text-xs text-zinc-500">{item.organization}</p>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-zinc-400">
                  {item.period}
                </span>
              </div>

              <p className="flex-1 text-sm leading-relaxed text-zinc-300">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

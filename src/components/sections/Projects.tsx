"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/sections/About";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const accentMap: Record<string, string> = {
  violet: "from-violet-500/20 to-violet-600/5 border-violet-500/20 text-violet-300",
  cyan: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/20 text-cyan-300",
  rose: "from-rose-500/20 to-rose-600/5 border-rose-500/20 text-rose-300",
  amber: "from-amber-500/20 to-amber-600/5 border-amber-500/20 text-amber-300",
  emerald: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20 text-emerald-300",
  sky: "from-sky-500/20 to-sky-600/5 border-sky-500/20 text-sky-300",
};

export function Projects() {
  return (
    <section id="projects" className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Selected work & ventures"
          description="Websites, apps, and products — each built with intent and attention to detail."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <GlassCard
              key={project.title}
              delay={i * 0.08}
              className={cn(
                "flex flex-col",
                i < 2 && "md:col-span-1 lg:row-span-1"
              )}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {project.category}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded-full border bg-gradient-to-r px-3 py-1 text-xs font-medium",
                    accentMap[project.accent]
                  )}
                >
                  {project.status}
                </span>
              </div>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400 md:text-base">
                {project.description}
              </p>

              <ul className="mb-6 space-y-2">
                {project.highlights.map((item) => (
                  <li
                    key={item.slice(0, 30)}
                    className="flex gap-2 text-sm text-zinc-500"
                  >
                    <ArrowUpRight size={14} className="mt-0.5 shrink-0 text-violet-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/8 bg-white/5 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

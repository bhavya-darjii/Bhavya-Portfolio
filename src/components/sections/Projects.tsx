"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/sections/About";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const statusColorMap: Record<string, string> = {
  "Live Product": "from-sky-500/20 to-sky-600/5 border-sky-500/20 text-sky-300",
  "In Development": "from-purple-500/20 to-purple-600/5 border-purple-500/20 text-purple-300",
  "Completed": "from-cyan-500/20 to-cyan-600/5 border-cyan-500/20 text-cyan-300",
  "Delivered": "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20 text-emerald-300",
};

export function Projects() {
  return (
    <section id="projects" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Featured Work & Ventures"
          description="A curated collection of impactful applications, demonstrating expertise in product design and robust engineering."
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
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded-full border bg-gradient-to-r px-3 py-1 text-xs font-medium",
                    statusColorMap[project.status] || "from-white/20 to-white/5 border-white/20 text-white"
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
                    <ArrowUpRight size={14} className="mt-0.5 shrink-0 text-teal-400" />
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

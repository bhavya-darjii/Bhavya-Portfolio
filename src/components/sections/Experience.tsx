"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/sections/About";
import { experience } from "@/data/portfolio";
import { Briefcase, CheckCircle2, ArrowUpRight } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="A track record of building robust applications and delivering scalable software solutions across diverse environments."
        />

        <div className="relative space-y-6">
          <div className="absolute left-[23px] top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-teal-500/50 via-cyan-500/30 to-transparent md:block" />

          {experience.map((job, i) => (
            <GlassCard key={`${job.company}-${job.role}`} delay={i * 0.1} className="md:ml-12">
              <div className="absolute -left-[3.25rem] top-8 hidden h-4 w-4 rounded-full border-2 border-teal-500 bg-[#0a0a12] shadow-lg shadow-teal-500/30 md:block" />

              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20">
                    <Briefcase size={18} className="text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="text-teal-300">{job.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                    {job.period}
                  </span>
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                    {job.type}
                  </span>
                </div>
              </div>

              <ul className="space-y-2">
                {job.highlights.map((point) => (
                  <li
                    key={point.slice(0, 40)}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-400 md:text-base"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-400" />
                    {point}
                  </li>
                ))}
              </ul>

              {"letterLabel" in job && job.letterLabel && (
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={"letterUrl" in job && typeof job.letterUrl === "string" ? job.letterUrl : "#testimonials"}
                    target={"letterUrl" in job && typeof job.letterUrl === "string" ? "_blank" : undefined}
                    rel={"letterUrl" in job && typeof job.letterUrl === "string" ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors group/link"
                  >
                    <CheckCircle2 size={13} className="text-teal-400" />
                    <span>{job.letterLabel}</span>
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

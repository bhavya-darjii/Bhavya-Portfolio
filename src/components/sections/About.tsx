"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { personal, education } from "@/data/portfolio";
import { GraduationCap, MapPin } from "lucide-react";

export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
        {label}
      </p>
      <h2 className="text-3xl font-black text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About Me"
          title="Where design meets engineering"
          description="A developer who cares as much about how things feel as how they work."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <GlassCard className="lg:col-span-3" delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg font-medium leading-relaxed text-zinc-100 md:text-xl md:leading-relaxed">
                {personal.summary}
              </p>

              <div className="h-px w-full bg-gradient-to-r from-teal-500/30 via-white/10 to-transparent" />

              <p className="text-base leading-[1.8] text-zinc-400 md:text-lg">
                {personal.profileSummary}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 border-t border-white/5 pt-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                <MapPin size={14} className="text-cyan-400" />
                {personal.location}
              </span>
              <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm text-teal-300">
                Web & Mobile Developer
              </span>
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                Freelancer
              </span>
            </div>
          </GlassCard>

          <GlassCard className="lg:col-span-2" delay={0.2}>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20">
                <GraduationCap size={20} className="text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Education
              </h3>
            </div>
            <ul className="space-y-5">
              {education.map((item, i) => (
                <li key={item.school} className="relative pl-4">
                  {i < education.length - 1 && (
                    <span className="absolute left-[5px] top-6 h-full w-px bg-white/10" />
                  )}
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-teal-500 bg-[#0a0a12]" />
                  <p className="text-sm font-medium text-white">{item.degree}</p>
                  <p className="text-sm text-zinc-400">{item.school}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{item.period}</p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

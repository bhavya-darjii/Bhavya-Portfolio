"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/sections/About";
import { primarySkills, secondarySkills, languages } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          description="A two-tier view of my skillset: core production technologies I use daily, backed by auxiliary tools and frameworks."
        />

        {/* PRIMARY STACK — full-width card */}
        <GlassCard delay={0.1} className="mb-6">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">Primary Production Stack</h3>
              <p className="mt-1 text-sm text-zinc-400">
                Core technologies I can defend under a 20-minute technical interview
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {primarySkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-white/20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">{skill.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Also Worked With */}
          <div className="mt-6 border-t border-white/8 pt-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Also Worked With
            </p>
            <div className="flex flex-wrap gap-2">
              {secondarySkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/8 bg-white/5 px-3 py-1 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* LANGUAGES — full-width card, 2-col on mobile / 4-col on large */}
        <GlassCard delay={0.2}>
          <h3 className="mb-6 text-xl font-semibold text-white">Languages</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="mb-1">
                  <span className="block text-base font-semibold text-white">{lang.name}</span>
                  <span className="block text-sm text-zinc-500">{lang.level}</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width:
                        lang.level === "Native"
                          ? "100%"
                          : lang.level === "Fluent"
                            ? "85%"
                            : lang.level === "Intermediate"
                              ? "65%"
                              : "40%",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

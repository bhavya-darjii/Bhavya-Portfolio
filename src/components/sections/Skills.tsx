"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/sections/About";
import { technicalSkills, softSkills, languages } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Tools I wield daily"
          description="A blend of technical depth and the soft skills that make collaboration actually work."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <GlassCard className="lg:col-span-2" delay={0.1}>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Technical Stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="cursor-default rounded-xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 px-4 py-2.5 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-shadow hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/10"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </GlassCard>

          <GlassCard delay={0.2}>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Languages
            </h3>
            <ul className="space-y-4">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="text-white">{lang.name}</span>
                    <span className="text-zinc-500">{lang.level}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width:
                          lang.level === "Fluent"
                            ? "100%"
                            : lang.level === "Intermediate"
                              ? "65%"
                              : "40%",
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="lg:col-span-3" delay={0.3}>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Beyond the Code
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
                >
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
                  <span className="text-sm text-zinc-300">{skill}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

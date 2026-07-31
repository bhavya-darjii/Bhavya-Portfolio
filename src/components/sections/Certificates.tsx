"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/sections/About";
import { certificates } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Award } from "lucide-react";

export function Certificates() {
  return (
    <section id="certificates" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Certificates"
          title="Licenses & Certifications"
          description="A collection of professional certifications and courses demonstrating my commitment to continuous learning."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, i) => (
            <GlassCard
              key={cert.title}
              delay={i * 0.1}
              className="flex flex-col h-full group"
            >
              <div className="mb-4">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400">
                  <Award size={20} />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-zinc-400">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                <span className="text-xs text-zinc-500">{cert.date}</span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors"
                >
                  View Certificate
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://drive.google.com/drive/folders/1C2jKkIMd9VzdOcTK0h4PvtKaFI5KArag?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-6 py-3 text-sm font-medium text-teal-400 transition-all hover:bg-teal-500/20 hover:text-teal-300"
          >
            Show More on Google Drive
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

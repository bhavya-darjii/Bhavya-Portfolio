"use client";

import { useState, useEffect } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/sections/About";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const statusColorMap: Record<string, string> = {
  "In Development · Live Demo": "from-white/10 to-white/5 border-white/20 text-zinc-300",
  "Shut Down · 180+ users": "from-white/10 to-white/5 border-white/20 text-zinc-300",
  "In Launch Phase": "from-white/10 to-white/5 border-white/20 text-zinc-300",
  "Delivered": "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20 text-emerald-300",
  "Completed": "from-cyan-500/20 to-cyan-600/5 border-cyan-500/20 text-cyan-300",
};

export function Projects() {
  const [platform, setPlatform] = useState<"ios" | "android" | "other">("other");
  const [activeFreelanceTab, setActiveFreelanceTab] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ua = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || "";
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(ua);
    if (isIOS) setPlatform("ios");
    else if (isAndroid) setPlatform("android");
  }, []);

  return (
    <section id="projects" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Featured Work & Ventures"
          description="A curated collection of impactful applications, demonstrating expertise in product design and robust engineering."
        />

        {/* Row 1: Velaar — full width */}
        {projects.slice(0, 1).map((project, i) => {
          const caseStudy = (project as any).caseStudy;
          return (
            <div key={project.title} className="mb-6">
              <GlassCard delay={i * 0.08} className="flex flex-col">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <span
                    className={cn(
                      "shrink-0 rounded-full border bg-gradient-to-r px-3 py-1 text-xs font-medium",
                      statusColorMap[project.status] || "from-white/10 to-white/5 border-white/20 text-zinc-300"
                    )}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mb-5 text-base leading-relaxed text-zinc-300">{project.description}</p>

                {caseStudy && (
                  <div className="mb-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-400">The Problem</p>
                      <p className="text-sm leading-relaxed text-zinc-300">{caseStudy.problem}</p>
                    </div>
                    <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-400">Why RAG + Gemini</p>
                      <p className="text-sm leading-relaxed text-zinc-300">{caseStudy.whyRagAndGemini}</p>
                    </div>
                    <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-400">What&apos;s Built</p>
                      <ul className="space-y-2">
                        {caseStudy.whatIsBuilt?.map((item: string) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                            <ArrowUpRight size={14} className="mt-0.5 shrink-0 text-teal-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-400">What&apos;s Next</p>
                      <ul className="space-y-2">
                        {caseStudy.whatIsNext?.map((item: string) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="mt-auto flex items-end justify-between gap-2 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/8 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {(project as any).websiteLink || project.link ? (
                    <a
                      href={(project as any).websiteLink || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-zinc-400 transition-colors hover:text-teal-300"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight size={22} />
                    </a>
                  ) : null}
                </div>
              </GlassCard>
            </div>
          );
        })}

        {/* Row 2 & 3: remaining projects in 2-col grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(1).map((project, i) => {
            const isPastVenture = (project as any).isPastVenture;
            const isFreelanceGroup = (project as any).isFreelanceGroup;
            const reflection = (project as any).founderReflection;
            const clients = (project as any).clientProjects || [];

            const projectItem = project as typeof project & {
              websiteLink?: string;
              androidLink?: string;
              iosLink?: string;
            };

            const activeLink =
              (platform === "android" && projectItem.androidLink ? projectItem.androidLink : null) ||
              (platform === "ios" && projectItem.iosLink ? projectItem.iosLink : null) ||
              projectItem.websiteLink ||
              projectItem.link ||
              projectItem.androidLink ||
              projectItem.iosLink ||
              "";

            const activeClient = clients[activeFreelanceTab] || clients[0];

            return (
              <GlassCard key={project.title} delay={(i + 1) * 0.08} className="flex flex-col">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <span
                    className={cn(
                      "shrink-0 rounded-full border bg-gradient-to-r px-3 py-1 text-xs font-medium",
                      statusColorMap[project.status] || "from-white/10 to-white/5 border-white/20 text-zinc-300"
                    )}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mb-5 text-base leading-relaxed text-zinc-300">{project.description}</p>

                {/* Handwrite: Founder Reflection */}
                {isPastVenture && reflection && (
                  <div className="mb-5 rounded-xl border border-white/8 bg-white/[0.03] p-4 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Founder Reflection</p>
                    <p className="text-sm leading-relaxed text-zinc-300">
                      <span className="font-semibold text-zinc-200">What worked: </span>
                      {reflection.whatWorked}
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-300">
                      <span className="font-semibold text-zinc-200">Why shut down: </span>
                      {reflection.whyShutDown}
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-300">
                      <span className="font-semibold text-zinc-200">Key takeaway: </span>
                      {reflection.whatLearned}
                    </p>
                  </div>
                )}

                {/* Freelance: Client Tabs — no bottom-right arrow */}
                {isFreelanceGroup && clients.length > 0 && (
                  <div className="mb-5">
                    <div className="mb-3 flex gap-1.5 rounded-xl border border-white/8 bg-white/[0.02] p-1">
                      {clients.map((c: any, idx: number) => (
                        <button
                          key={c.name}
                          onClick={() => setActiveFreelanceTab(idx)}
                          className={cn(
                            "flex-1 rounded-lg px-2 py-1.5 text-sm font-medium transition-colors",
                            activeFreelanceTab === idx
                              ? "bg-white/10 text-white"
                              : "text-zinc-500 hover:text-zinc-300"
                          )}
                        >
                          {c.name}
                        </button>
                      ))}
                    </div>
                    {activeClient && (
                      <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <p className="text-base font-semibold text-white">{activeClient.name}</p>
                          {activeClient.url && (
                            <a
                              href={activeClient.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-zinc-400 hover:text-teal-300 transition-colors"
                            >
                              Live Site <ArrowUpRight size={13} />
                            </a>
                          )}
                        </div>
                        <p className="text-sm text-zinc-500 mb-2">{activeClient.type}</p>
                        <p className="text-sm leading-relaxed text-zinc-300">{activeClient.details}</p>
                        <p className="mt-2 text-sm text-zinc-400">
                          <span className="text-zinc-300 font-medium">Impact: </span>
                          {activeClient.metrics}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Standard highlights (non-flagship, non-freelance) */}
                {!isFreelanceGroup && !isPastVenture && (
                  <ul className="mb-6 space-y-2">
                    {project.highlights.map((item) => (
                      <li key={item.slice(0, 30)} className="flex gap-2 text-sm text-zinc-300">
                        <ArrowUpRight size={14} className="mt-0.5 shrink-0 text-teal-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Footer: tags + link (no link for freelance group) */}
                <div className="mt-auto flex items-end justify-between gap-2 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/8 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {!isFreelanceGroup && activeLink && (
                    <a
                      href={activeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-zinc-400 transition-colors hover:text-teal-300"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight size={22} />
                    </a>
                  )}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
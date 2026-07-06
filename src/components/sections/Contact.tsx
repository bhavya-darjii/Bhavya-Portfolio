"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/sections/About";
import { personal } from "@/data/portfolio";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's build something remarkable"
          description="Have a project in mind or just want to connect? I'd love to hear from you."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <GlassCard className="lg:col-span-2" delay={0.1}>
            <h3 className="mb-6 font-display text-xl font-semibold text-white">
              Reach Out
            </h3>
            <ul className="space-y-5">
              <li>
                <a
                  href={personal.social.email}
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-violet-500/30 hover:bg-violet-500/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/20 transition-colors group-hover:bg-violet-500/30">
                    <Mail size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Email</p>
                    <p className="text-sm text-white">{personal.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={personal.social.phone}
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/20 transition-colors group-hover:bg-cyan-500/30">
                    <Phone size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Phone</p>
                    <p className="text-sm text-white">{personal.phone}</p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/20">
                  <MapPin size={18} className="text-rose-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Location</p>
                  <p className="text-sm text-white">{personal.location}</p>
                </div>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="lg:col-span-3" delay={0.2}>
            <h3 className="mb-6 font-display text-xl font-semibold text-white">
              Send a Message
            </h3>
            <form
              action={`mailto:${personal.email}`}
              method="GET"
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs text-zinc-500">
                    Name
                  </label>
                  <input
                    id="name"
                    name="subject"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs text-zinc-500">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs text-zinc-500">
                  Message
                </label>
                <textarea
                  id="message"
                  name="body"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-shadow hover:shadow-violet-500/40"
              >
                <Send size={16} />
                Send Message
              </motion.button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

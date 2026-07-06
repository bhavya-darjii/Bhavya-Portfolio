"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personal } from "@/data/portfolio";

const topics = ["Collaboration", "Potential Project", "Networking"] as const;

export function Contact() {
  const [selectedTopic, setSelectedTopic] = useState<string>(topics[0]);
  const [contactMethod, setContactMethod] = useState<"email" | "social">("email");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const country = (form.elements.namedItem("country") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(
      `${selectedTopic} — ${name} from ${country}`
    );
    const body = encodeURIComponent(
      `Hi Bhavya,\n\nMy name is ${name} from ${country}.\n\nLet's connect about: ${selectedTopic}\n\n${message}\n\nReach me at: ${email}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hero-gradient-bg overflow-hidden rounded-3xl p-8 shadow-2xl shadow-teal-900/20 md:p-12 lg:p-16"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <p className="font-display text-xl leading-relaxed text-slate-900 md:text-2xl lg:text-3xl">
              Hey,{" "}
              <span className="font-bold">{personal.name.toUpperCase()}!</span>{" "}
              My name is{" "}
              <input
                name="name"
                required
                placeholder="Your Name"
                className="inline-block min-w-[8rem] border-b-2 border-slate-900/30 bg-transparent px-1 font-medium outline-none placeholder:text-slate-600/50 focus:border-teal-600 md:min-w-[12rem]"
              />{" "}
              and I am from{" "}
              <input
                name="country"
                required
                placeholder="Country"
                className="inline-block min-w-[6rem] border-b-2 border-slate-900/30 bg-transparent px-1 font-medium outline-none placeholder:text-slate-600/50 focus:border-teal-600 md:min-w-[10rem]"
              />
            </p>

            <div>
              <p className="mb-4 font-display text-xl text-slate-900 md:text-2xl">
                Let&apos;s connect about
              </p>
              <div className="flex flex-wrap gap-3">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition-all md:text-base ${
                      selectedTopic === topic
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-900/30 text-slate-800 hover:border-slate-900/60"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <p className="font-display text-xl leading-relaxed text-slate-900 md:text-2xl">
              We can talk in more detail at{" "}
              <input
                name="email"
                type="email"
                required
                placeholder="name@website.com"
                className="inline-block min-w-[10rem] border-b-2 border-slate-900/30 bg-transparent px-1 font-medium outline-none placeholder:text-slate-600/50 focus:border-teal-600 md:min-w-[16rem]"
              />
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setContactMethod("social")}
                className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition-all ${
                  contactMethod === "social"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-900/30 text-slate-800"
                }`}
              >
                WhatsApp / LinkedIn
              </button>
              <button
                type="button"
                onClick={() => setContactMethod("email")}
                className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition-all ${
                  contactMethod === "email"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-900/30 text-slate-800"
                }`}
              >
                Email
              </button>
            </div>

            <p className="font-display text-xl text-slate-900 md:text-2xl">
              In short,{" "}
              <textarea
                name="message"
                required
                rows={2}
                placeholder="Type your message"
                className="mt-2 w-full resize-none border-b-2 border-slate-900/30 bg-transparent px-1 font-medium outline-none placeholder:text-slate-600/50 focus:border-teal-600"
              />
            </p>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 font-display text-3xl font-bold text-slate-900 transition-colors hover:text-teal-700 md:text-5xl"
            >
              Send a form
              <ArrowUpRight
                size={40}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { personal } from "@/data/portfolio";

const topics = ["Collaboration", "Potential Project", "Networking"] as const;

export function Contact() {
  const [selectedTopic, setSelectedTopic] = useState<string>(topics[0]);
  const [contactMethod, setContactMethod] = useState<"email" | "whatsapp">("email");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const country = (form.elements.namedItem("country") as HTMLInputElement).value;
    const contactInfo = (form.elements.namedItem("contact") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: name,
          Country: country,
          Topic: selectedTopic,
          "Contact Method": contactMethod,
          "Contact Info": contactInfo,
          Message: message,
          _subject: `New Portfolio Message: ${selectedTopic} from ${name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("FormSubmit Error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isEmail = contactMethod === "email";

  return (
    <section id="contact" className="px-4 pt-12 pb-24 md:px-6 md:pt-16 md:pb-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hero-gradient-bg overflow-hidden rounded-3xl p-8 shadow-2xl shadow-teal-900/20 md:p-12 lg:p-16"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <p className="text-xl leading-relaxed text-slate-900 md:text-2xl lg:text-3xl">
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
              <p className="mb-4 text-xl text-slate-900 md:text-2xl">
                Let&apos;s connect about
              </p>
              <div className="flex flex-wrap gap-3">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition-all md:text-base ${selectedTopic === topic
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-900/30 text-slate-800 hover:border-slate-900/60"
                      }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xl leading-relaxed text-slate-900 md:text-2xl">
              We can talk in more detail at{" "}
              {isEmail ? (
                <input
                  name="contact"
                  type="email"
                  required
                  placeholder="name@website.com"
                  className="inline-block min-w-[10rem] border-b-2 border-slate-900/30 bg-transparent px-1 font-medium outline-none placeholder:text-slate-600/50 focus:border-teal-600 md:min-w-[16rem]"
                />
              ) : (
                <input
                  name="contact"
                  type="tel"
                  required
                  pattern="[0-9+\-\s]+"
                  title="Please enter a valid phone number (numbers, spaces, +, -)"
                  placeholder="Phone Number"
                  className="inline-block min-w-[10rem] border-b-2 border-slate-900/30 bg-transparent px-1 font-medium outline-none placeholder:text-slate-600/50 focus:border-teal-600 md:min-w-[16rem]"
                />
              )}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setContactMethod("whatsapp")}
                className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition-all ${contactMethod === "whatsapp"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-900/30 text-slate-800"
                  }`}
              >
                WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setContactMethod("email")}
                className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition-all ${contactMethod === "email"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-900/30 text-slate-800"
                  }`}
              >
                Email
              </button>
            </div>

            <p className="text-xl text-slate-900 md:text-2xl">
              In short,{" "}
              <textarea
                name="message"
                required
                rows={2}
                placeholder="Type your message"
                className="mt-2 w-full resize-none border-b-2 border-slate-900/30 bg-transparent px-1 font-medium outline-none placeholder:text-slate-600/50 focus:border-teal-600"
              />
            </p>

            <div className="flex h-16 items-center md:h-20">
              {submitStatus === "success" ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold text-teal-700 md:text-4xl whitespace-nowrap"
                >
                  Sent! I&apos;ll be in touch soon ✓
                </motion.p>
              ) : submitStatus === "error" ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl font-bold text-red-600 md:text-3xl whitespace-nowrap"
                >
                  Oops! Something went wrong.
                </motion.p>
              ) : (
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={isSubmitting ? {} : { scale: 1.02 }}
                  whileTap={isSubmitting ? {} : { scale: 0.98 }}
                  className="group flex items-center gap-3 text-3xl font-bold text-slate-900 transition-colors hover:text-teal-700 md:text-5xl disabled:opacity-50 disabled:hover:text-slate-900"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 size={40} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send a form
                      <ArrowUpRight
                        size={40}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </>
                  )}
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

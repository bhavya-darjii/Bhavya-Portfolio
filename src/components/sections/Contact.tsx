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
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="text-lg leading-relaxed text-slate-900 sm:text-xl md:text-2xl lg:text-3xl">
              <div>
                <span className="block md:inline">
                  Hey,{" "}
                  <span className="font-bold">{personal.name.toUpperCase()}!</span>
                </span>{" "}
                {/* Row 1: My name is [Your Name] */}
                <span className="mt-2.5 flex max-w-[19.5rem] items-baseline sm:mt-3 sm:max-w-[22rem] md:mt-0 md:inline-flex md:max-w-none">
                  <span className="shrink-0 whitespace-nowrap">My name is&nbsp;</span>
                  <input
                    name="name"
                    required
                    placeholder="Your Name"
                    className="flex-1 min-w-0 border-b-2 border-slate-900/30 bg-transparent px-1 font-medium outline-none placeholder:text-slate-600/50 focus:border-teal-600 md:w-[19.5rem] md:flex-none lg:w-[23.5rem]"
                  />
                </span>
              </div>

              {/* Row 2: and I am from [Country] */}
              <div className="mt-2 flex max-w-[19.5rem] items-baseline sm:mt-2.5 sm:max-w-[22rem] md:mt-1.5 md:inline-flex md:max-w-none lg:mt-2">
                <span className="shrink-0 whitespace-nowrap">and I am from&nbsp;</span>
                <input
                  name="country"
                  required
                  placeholder="Country"
                  className="flex-1 min-w-0 border-b-2 border-slate-900/30 bg-transparent px-1 font-medium outline-none placeholder:text-slate-600/50 focus:border-teal-600 md:w-[18rem] md:flex-none lg:w-[21.5rem]"
                />
              </div>
            </div>

            <div>
              <p className="mb-3 text-lg text-slate-900 sm:mb-4 sm:text-xl md:text-2xl">
                Let&apos;s connect about
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`rounded-full border-2 px-4 py-1.5 text-xs font-semibold transition-all sm:px-5 sm:py-2 sm:text-sm md:text-base ${selectedTopic === topic
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-900/30 text-slate-800 hover:border-slate-900/60"
                      }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-lg leading-relaxed text-slate-900 sm:text-xl md:text-2xl">
              <span className="inline-block">We can talk in more detail at</span>{" "}
              {isEmail ? (
                <input
                  name="contact"
                  type="email"
                  required
                  placeholder="name@website.com"
                  className="inline-block min-w-[10rem] max-w-full border-b-2 border-slate-900/30 bg-transparent px-1 font-medium outline-none placeholder:text-slate-600/50 focus:border-teal-600 sm:min-w-[13rem] md:min-w-[16rem]"
                />
              ) : (
                <input
                  name="contact"
                  type="tel"
                  required
                  pattern="[0-9+\-\s]+"
                  title="Please enter a valid phone number (numbers, spaces, +, -)"
                  placeholder="Phone Number"
                  className="inline-block min-w-[10rem] max-w-full border-b-2 border-slate-900/30 bg-transparent px-1 font-medium outline-none placeholder:text-slate-600/50 focus:border-teal-600 sm:min-w-[13rem] md:min-w-[16rem]"
                />
              )}
            </p>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => setContactMethod("whatsapp")}
                className={`rounded-full border-2 px-4 py-1.5 text-xs font-semibold transition-all sm:px-5 sm:py-2 sm:text-sm ${contactMethod === "whatsapp"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-900/30 text-slate-800"
                  }`}
              >
                WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setContactMethod("email")}
                className={`rounded-full border-2 px-4 py-1.5 text-xs font-semibold transition-all sm:px-5 sm:py-2 sm:text-sm ${contactMethod === "email"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-900/30 text-slate-800"
                  }`}
              >
                Email
              </button>
            </div>

            <div className="text-lg text-slate-900 sm:text-xl md:text-2xl">
              <span>In short,</span>
              <textarea
                name="message"
                required
                rows={1}
                placeholder="Type your message"
                className="mt-1 w-full resize-none border-b-2 border-slate-900/30 bg-transparent px-1 py-1 font-medium outline-none placeholder:text-slate-600/50 focus:border-teal-600 md:mt-2"
              />
            </div>

            <div className="flex min-h-[3.5rem] items-center sm:min-h-[4rem] md:h-20">
              {submitStatus === "success" ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl font-bold text-teal-700 sm:text-2xl md:text-4xl"
                >
                  Sent! I&apos;ll be in touch soon ✓
                </motion.p>
              ) : submitStatus === "error" ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg font-bold text-red-600 sm:text-xl md:text-3xl"
                >
                  Oops! Something went wrong.
                </motion.p>
              ) : (
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={isSubmitting ? {} : { scale: 1.02 }}
                  whileTap={isSubmitting ? {} : { scale: 0.98 }}
                  className="group flex items-center gap-2 text-2xl font-bold text-slate-900 transition-colors hover:text-teal-700 sm:gap-3 sm:text-3xl md:text-5xl disabled:opacity-50 disabled:hover:text-slate-900"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 className="h-6 w-6 animate-spin sm:h-8 sm:w-8 md:h-10 md:w-10" />
                    </>
                  ) : (
                    <>
                      Send a form
                      <ArrowUpRight
                        className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-8 sm:w-8 md:h-10 md:w-10"
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

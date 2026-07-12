"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/data/portfolio";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { Mail, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

export function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const year = new Date().getFullYear();

  return (
    <footer ref={ref} className="relative border-t border-white/5 w-full min-h-screen flex flex-col bg-black">
      <div className="w-full flex-1 flex flex-col justify-center">
        {/* Large name display */}
        <div className="flex-1 overflow-hidden bg-black px-6 py-16 md:px-12 md:py-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center gap-6"
          >
            <a
              href={personal.social.email}
              aria-label="Email"
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-teal-400"
            >
              <Mail size={24} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-teal-400"
            >
              <FaLinkedinIn size={24} aria-hidden />
            </a>
            <a
              href={personal.social.phone}
              aria-label="Call"
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-teal-400"
            >
              <Phone size={24} />
            </a>
          </motion.div>

          <h2
            className="text-center font-display text-[clamp(3rem,12vw,10rem)] font-extrabold uppercase leading-[0.9] tracking-tighter text-zinc-800"
            aria-label={personal.name}
          >
            <span className="block">BHAVYA</span>
            <span className="block">DARJI</span>
          </h2>

          {inView && (
            <div className="mt-12 flex flex-col items-center justify-center">
              <TypewriterText
                text={`© ${year} ${personal.name.toUpperCase()}. ALL RIGHTS RESERVED.`}
                className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-600"
                delay={200}
                speed={30}
              />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

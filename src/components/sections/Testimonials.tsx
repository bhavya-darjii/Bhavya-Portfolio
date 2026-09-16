"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/sections/About";
import { testimonials } from "@/data/portfolio";
import { Quote } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const total = testimonials.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Auto-advance every 8 seconds, resets whenever slide changes (including on manual dot click)
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex, total]);

  const active = testimonials[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <section id="testimonials" className="relative px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Endorsements"
          title="Recommendations"
          description="Hear it from the amazing founders I've worked with."
        />

        {/* Minimal Text Slide Container */}
        <div className="mx-auto max-w-4xl relative min-h-[190px] md:min-h-[170px] flex flex-col justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full flex flex-col items-center text-center"
            >
              <Quote
                size={28}
                className="mb-4 text-teal-400/40 shrink-0"
              />

              {/* Pure Quote Text */}
              <blockquote className="text-base sm:text-lg md:text-xl font-light text-zinc-200 leading-relaxed italic max-w-3xl">
                &ldquo;{active.quote}&rdquo;
              </blockquote>

              {/* Pure Person Attribution - Plain Text Only */}
              <div className="mt-6 flex flex-col items-center gap-1">
                <p className="text-base font-semibold text-white tracking-wide">
                  {active.author}
                </p>
                <p className="text-sm text-zinc-400">
                  {active.role},{" "}
                  <span className="text-teal-300">{active.company}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Navigation Dots Only */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex
                  ? "w-7 bg-teal-400"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

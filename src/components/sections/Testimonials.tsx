"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/sections/About";
import { testimonials } from "@/data/portfolio";
import { Quote } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const total = testimonials.length;

  const resetTimer = useCallback(() => {
    setTimerKey((k) => k + 1);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      resetTimer();
    },
    [currentIndex, resetTimer]
  );

  const lastTransitionTimeRef = useRef(0);

  const nextSlide = useCallback(() => {
    const now = Date.now();
    if (now - lastTransitionTimeRef.current < 500) return;
    lastTransitionTimeRef.current = now;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
    resetTimer();
  }, [total, resetTimer]);

  const prevSlide = useCallback(() => {
    const now = Date.now();
    if (now - lastTransitionTimeRef.current < 500) return;
    lastTransitionTimeRef.current = now;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    resetTimer();
  }, [total, resetTimer]);

  // Laptop Trackpad Horizontal Scrolling (Wheel Events)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let accumulatedDeltaX = 0;
    let isWheelLocked = false;
    let minLockUntil = 0;
    let wheelEndTimeout: NodeJS.Timeout | null = null;

    const onWheel = (e: WheelEvent) => {
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      // Trigger only when predominantly horizontal scroll
      if (absX > absY && absX > 3) {
        // Prevent browser horizontal history swipe navigation
        e.preventDefault();

        // Keep extending the unlock timer as long as momentum wheel events are still arriving.
        // We only unlock when wheel events have completely stopped for at least 180ms
        // AND the minimum transition time (550ms) has passed.
        if (wheelEndTimeout) {
          clearTimeout(wheelEndTimeout);
        }
        const remainingLock = Math.max(180, minLockUntil - Date.now());
        wheelEndTimeout = setTimeout(() => {
          isWheelLocked = false;
          accumulatedDeltaX = 0;
        }, remainingLock);

        // If locked for the current gesture/momentum stream, do not process further deltas
        if (isWheelLocked) {
          return;
        }

        accumulatedDeltaX += e.deltaX;

        const threshold = 25;
        if (Math.abs(accumulatedDeltaX) >= threshold) {
          // Lock immediately for this entire gesture so fast flicks never skip cards
          isWheelLocked = true;
          minLockUntil = Date.now() + 550;

          if (accumulatedDeltaX > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
          accumulatedDeltaX = 0;
          resetTimer();
        }
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      if (wheelEndTimeout) {
        clearTimeout(wheelEndTimeout);
      }
    };
  }, [nextSlide, prevSlide, resetTimer]);

  // Auto-advance every 10 seconds, resets whenever slide changes or user interacts
  useEffect(() => {
    if (isHovered || isDragging) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex, total, isHovered, isDragging, timerKey]);

  const active = testimonials[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        filter: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      filter: "blur(4px)",
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        filter: { duration: 0.2 },
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
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mx-auto max-w-4xl relative min-h-[190px] md:min-h-[170px] flex flex-col justify-center overflow-hidden touch-pan-y"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragStart={() => {
                setIsDragging(true);
                resetTimer();
              }}
              onDragEnd={(_, info) => {
                setIsDragging(false);
                resetTimer();
                const swipeThreshold = 35;
                const velocityThreshold = 200;
                if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
                  nextSlide();
                } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
                  prevSlide();
                }
              }}
              className="w-full flex flex-col items-center text-center cursor-grab active:cursor-grabbing touch-pan-y select-none"
            >
              <Quote
                size={28}
                className="mb-4 text-teal-400/40 shrink-0 pointer-events-none"
              />

              {/* Pure Quote Text */}
              <blockquote className="text-base sm:text-lg md:text-xl font-light text-zinc-200 leading-relaxed italic max-w-3xl pointer-events-none">
                &ldquo;{active.quote}&rdquo;
              </blockquote>

              {/* Pure Person Attribution - Plain Text Only */}
              <div className="mt-6 flex flex-col items-center gap-1 pointer-events-none">
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

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  showCursor?: boolean;
}

export function TypewriterText({
  text,
  className = "",
  delay = 0,
  speed = 45,
  showCursor = false,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    setDisplayed("");
    setDone(false);

    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && !done && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="ml-0.5 inline-block"
        >
          |
        </motion.span>
      )}
    </span>
  );
}

interface TypewriterGroupProps {
  items: string[];
  className?: string;
  itemClassName?: string;
  baseDelay?: number;
  stagger?: number;
}

export function TypewriterGroup({
  items,
  className = "",
  itemClassName = "",
  baseDelay = 300,
  stagger = 400,
}: TypewriterGroupProps) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = items.map((_, i) =>
      setTimeout(() => setVisibleCount((c) => Math.max(c, i + 1)), baseDelay + i * stagger)
    );
    return () => timers.forEach(clearTimeout);
  }, [items, baseDelay, stagger]);

  return (
    <div className={className}>
      {items.map((item, i) => (
        <span key={item}>
          {i < visibleCount ? (
            <TypewriterText
              text={item}
              className={itemClassName}
              delay={0}
              speed={35}
            />
          ) : (
            <span className={`${itemClassName} opacity-0`} aria-hidden>
              {item}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Lock scroll to prevent iOS Safari rubber-banding and address bar shifting
    document.body.style.overflow = "hidden";
    
    const steps = [0, 25, 50, 75, 100];
    let stepIndex = 0;

    const interval = setInterval(() => {
      stepIndex++;
      if (stepIndex >= steps.length) {
        clearInterval(interval);
        setTimeout(() => {
          setVisible(false);
          setTimeout(() => {
            document.body.style.overflow = "";
            onComplete();
          }, 600);
        }, 400);
      } else {
        setProgress(steps[stepIndex]);
      }
    }, 800);
    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 w-screen h-[120vh] z-[100] overflow-hidden"
          style={{ background: "linear-gradient(to bottom, #07101a 65%, #0d4a44 100%)" }}
        >
          {/* Top-left gradient (Red) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 0, 1], opacity: [0, 0, 1] }}
            transition={{ duration: 3.5, times: [0, 0.4, 1], ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[200vmax] h-[200vmax] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen"
            style={{
              background: "radial-gradient(circle at center, rgba(220,38,38,0.8) 0%, rgba(220,38,38,0.2) 40%, transparent 65%)"
            }}
          />

          {/* Bottom-right gradient (Turquoise) - Anchored to 120vh bottom to bleed beautifully into Safari gap */}
          <motion.div
            initial={{ scale: 0.8, opacity: 1 }}
            animate={{ scale: [0.8, 1.5, 1], opacity: [1, 1, 1] }}
            transition={{ duration: 3.5, times: [0, 0.4, 1], ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-[200vmax] h-[200vmax] translate-x-1/2 translate-y-1/2 pointer-events-none mix-blend-screen"
            style={{
              background: "radial-gradient(circle at center, rgba(64,224,208,0.8) 0%, rgba(64,224,208,0.2) 40%, transparent 65%)"
            }}
          />

          {/* Text Container: Locked exactly to the visible screen size (100dvh) so text doesn't fall off screen */}
          <div className="absolute top-0 left-0 w-full h-[100dvh] flex items-center justify-center px-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-medium tracking-wide text-white md:text-4xl"
            >
              You Design — I Develop
            </motion.p>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 right-8 text-[clamp(3rem,12vw,8rem)] font-bold leading-none text-white"
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

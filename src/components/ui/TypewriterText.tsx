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
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 12 + 4, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 600);
          }, 400);
        }
        return next;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030308]"
        >
          <div className="relative mx-4 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/5">
            <motion.div
              animate={{
                background: [
                  "linear-gradient(135deg, #0c4a6e 0%, #134e4a 50%, #164e63 100%)",
                  "linear-gradient(135deg, #134e4a 0%, #0c4a6e 50%, #155e75 100%)",
                  "linear-gradient(135deg, #164e63 0%, #134e4a 50%, #0c4a6e 100%)",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex min-h-[50vh] items-center justify-center px-8 py-24"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-2xl font-medium tracking-wide text-white md:text-4xl"
              >
                You Design — I Develop
              </motion.p>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 right-8 font-display text-[clamp(3rem,12vw,8rem)] font-bold leading-none text-white/10"
              >
                {Math.min(Math.round(progress), 100)}%
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

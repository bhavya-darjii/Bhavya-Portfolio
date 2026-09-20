"use client";

import { useEffect } from "react";

const PRELOAD_DOCS = [
  "/Bhavya%20Darji%20%E2%80%94%20Resume.pdf",
  "/resume.pdf",
  "/letters/bhavya-optisoft-vision-recommendation-letter.pdf",
  "/letters/bhavya-vinayak-soft-solutions-recommendation-letter.pdf",
  "/letters/bhavya-webgyor-technologies-recommendation-letter.pdf",
  "/letters/bhavya-ayika-offer-letter.pdf",
  "/certificates/claude-ai-fluency.pdf",
  "/certificates/claude-ai-fluency-students.pdf",
  "/certificates/claude-small-businesses.pdf",
  "/certificates/ai-ml-course.pdf",
];

export function PdfPreloader() {
  useEffect(() => {
    // Only prefetch after main page has completed loading and idle
    const prefetch = () => {
      PRELOAD_DOCS.forEach((url) => {
        fetch(url, { priority: "low" as any }).catch(() => {});
      });
    };

    if ("requestIdleCallback" in window) {
      (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(prefetch);
    } else {
      setTimeout(prefetch, 1200);
    }
  }, []);

  return null;
}

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { footerTags } from "@/data/portfolio";
import { TypewriterGroup } from "@/components/ui/TypewriterText";

export function TaglineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="w-full overflow-hidden bg-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="px-6 py-16 md:px-12 md:py-24 w-full flex flex-col items-center justify-center"
        >
          <h2 className="text-center font-display text-[clamp(2.5rem,8vw,6rem)] font-extralight uppercase tracking-[0.08em] text-white">
            Simply About It
          </h2>

          {inView && (
            <TypewriterGroup
              items={footerTags}
              className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-16"
              itemClassName="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500 md:text-xs"
              baseDelay={600}
              stagger={500}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}

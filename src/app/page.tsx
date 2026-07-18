"use client";

import { useState } from "react";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { MiddleBackground } from "@/components/MiddleBackground";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/ui/TypewriterText";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <BackgroundEffects />
      <main>
        {/* Hero: pure black background */}
        <Hero />

        {/* Middle sections: teal background scoped here only */}
        <div className="relative">
          <MiddleBackground />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>

      {/* Footer: pure black, rubber-band overscroll stays black */}
      <Footer />
    </>
  );
}

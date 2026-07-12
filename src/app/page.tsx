"use client";

import { useState } from "react";
import { BackgroundEffects } from "@/components/BackgroundEffects";
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
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

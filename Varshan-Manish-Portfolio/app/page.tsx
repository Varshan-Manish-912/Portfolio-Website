"use client";
import { useEffect } from "react";
import Projects from "@/components/main/Projects";
import Hero from "@/components/main/Hero";
import AboutMe from "@/components/main/AboutMe";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience"
function scrollToHash(retries = 10) {
  if (typeof window === "undefined" || !window.location.hash) return;
  const id = window.location.hash.substring(1);
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else if (retries > 0) {
    setTimeout(() => scrollToHash(retries - 1), 200);
  }
}
export default function Home() {
  useEffect(() => {
    requestAnimationFrame(() => scrollToHash());
  }, []);
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-0">
        <Hero />
        <Experience />
        <Skills />
        <AboutMe />
        <Projects />
      </div>
    </main>
  );
}

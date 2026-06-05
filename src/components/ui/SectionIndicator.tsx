"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { allSectionIds } from "@/data/sections";

const sectionLabels: Record<string, string> = {
  "it-mengenal": "IT Solutions",
  "it-proker": "Program Kerja",
  "it-workflow": "Workflow",
  hero: "Context",
  background: "Background",
  problem: "Problem",
  solution: "Solution",
  personas: "Personas",
  features: "Features",
  overview: "Overview",
  news: "News",
  "event-request": "Event Request",
  "admin-portal": "Admin Portal",
  "tech-stack": "Tech Stack",
  "live-demo": "Live Demo",
  impact: "Impact",
  closing: "Closing",
};

export function SectionIndicator() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Show indicator after a short delay so it doesn't flash on initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Track the active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          const idx = allSectionIds.indexOf(visible.target.id);
          if (idx !== -1) setCurrentSection(idx);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.1, 0.3, 0.6] },
    );

    allSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navigateToSection = (index: number) => {
    const id = allSectionIds[index];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => el.focus({ preventScroll: true }), 400);
      setCurrentSection(index);
    }
  };

  if (!isVisible) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Section progress indicator"
      className="fixed right-3 top-1/2 z-[60] hidden -translate-y-1/2 flex-col items-end gap-1.5 lg:flex"
    >
      {allSectionIds.map((id, idx) => {
        const isActive = idx === currentSection;
        return (
          <button
            key={id}
            onClick={() => navigateToSection(idx)}
            className="group flex items-center gap-2 py-0.5 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#57D4DD] rounded"
            aria-label={`Go to ${sectionLabels[id] ?? id}`}
            aria-current={isActive ? "true" : undefined}
          >
            {/* Label — visible on active or hover */}
            <span
              className={`whitespace-nowrap text-[10px] font-semibold tracking-wide transition-all duration-300 ${
                isActive
                  ? "translate-x-0 text-[#57D4DD] opacity-100"
                  : "translate-x-2 text-transparent opacity-0 group-hover:translate-x-0 group-hover:text-white/60 group-hover:opacity-100"
              }`}
            >
              {sectionLabels[id] ?? id}
            </span>

            {/* Dot */}
            <span
              className={`block shrink-0 rounded-full transition-all duration-300 ${
                isActive
                  ? "h-2.5 w-2.5 bg-[#57D4DD] shadow-[0_0_8px_rgba(87,212,221,0.5)]"
                  : "h-1.5 w-1.5 bg-white/25 group-hover:bg-white/50"
              }`}
            />
          </button>
        );
      })}

      {/* Section counter */}
      <div className="mt-2 rounded-full border border-white/10 bg-[rgba(57,61,63,0.70)] px-2.5 py-1 text-center backdrop-blur-md">
        <span className="text-[10px] font-bold tabular-nums text-[#57D4DD]">
          {currentSection + 1}
        </span>
        <span className="text-[10px] text-white/40"> / {allSectionIds.length}</span>
      </div>
    </motion.nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { allSectionIds, sectionLabels } from "@/data/sections";

export function SectionIndicator() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Show indicator after a short delay so it doesn't flash on initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Track the active section using distance-based detection for reliability
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Instead of relying solely on intersectionRatio, find the section
        // whose center is closest to the viewport center for more reliable
        // detection of shorter sections like NewsShowcase.
        const viewportCenter = window.innerHeight / 2;
        let closestIdx = currentSection;
        let closestDist = Infinity;

        allSectionIds.forEach((id, idx) => {
          const el = document.getElementById(id);
          if (!el) return;
          const rect = el.getBoundingClientRect();
          // Only consider sections at least partially visible
          if (rect.bottom < 0 || rect.top > window.innerHeight) return;
          const sectionCenter = rect.top + rect.height / 2;
          const dist = Math.abs(sectionCenter - viewportCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = idx;
          }
        });

        if (closestIdx !== currentSection) {
          setCurrentSection(closestIdx);
        }
      },
      // Wider rootMargin so shorter sections aren't missed
      { rootMargin: "-10% 0px -10% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );

    allSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentSection]);

  // Also track on scroll for sections that might not trigger IntersectionObserver
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight / 2;
        let closestIdx = 0;
        let closestDist = Infinity;

        allSectionIds.forEach((id, idx) => {
          const el = document.getElementById(id);
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const dist = Math.abs(sectionCenter - viewportCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = idx;
          }
        });

        setCurrentSection(closestIdx);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateToSection = (index: number) => {
    const id = allSectionIds[index];
    const el = document.getElementById(id);
    if (el) {
      // Temporarily disable scroll-snap to prevent fighting with scrollIntoView
      const htmlEl = document.documentElement;
      htmlEl.style.scrollSnapType = "none";

      el.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        htmlEl.style.scrollSnapType = "";
        el.focus({ preventScroll: true });
      }, 700);

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

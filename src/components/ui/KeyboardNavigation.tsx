"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import { allSectionIds } from "@/data/sections";

/**
 * Finds the index of the section currently closest to viewport center.
 * Uses distance-based detection instead of a fixed threshold for reliability.
 */
function findClosestSectionIndex(): number {
  const viewportCenter = window.innerHeight / 2;
  let closestIndex = 0;
  let closestDistance = Infinity;

  allSectionIds.forEach((id, idx) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const sectionCenter = rect.top + rect.height / 2;
    const distance = Math.abs(sectionCenter - viewportCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = idx;
    }
  });

  return closestIndex;
}

export function KeyboardNavigation() {
  const [showHint, setShowHint] = useState(false);
  const [hintDismissed, setHintDismissed] = useState(false);

  // Show the onboarding hint after initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 2000);

    const autoDismiss = setTimeout(() => {
      setShowHint(false);
      setHintDismissed(true);
    }, 7000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoDismiss);
    };
  }, []);

  const navigateToSection = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, allSectionIds.length - 1));
    const targetId = allSectionIds[clamped];
    const el = document.getElementById(targetId);

    if (el) {
      // Temporarily disable scroll-snap to prevent it from fighting with
      // scrollIntoView. Mandatory snap causes a "double correction" jump
      // when the smooth scroll position triggers snap recalculation.
      document.documentElement.style.setProperty("scroll-snap-type", "none");

      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // Re-enable snap after scroll settles, then focus for accessibility
      setTimeout(() => {
        document.documentElement.style.removeProperty("scroll-snap-type");
        el.focus({ preventScroll: true });
      }, 700);
    }
  }, []);

  // Keyboard handler
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      // Only handle arrow keys
      if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(event.key)) {
        return;
      }

      // Don't interfere with form inputs
      const active = document.activeElement;
      if (
        active instanceof HTMLInputElement ||
        active instanceof HTMLTextAreaElement ||
        active instanceof HTMLSelectElement
      ) {
        return;
      }

      // Always prevent default for arrow keys to avoid native scroll fighting
      event.preventDefault();

      // Dismiss hint on first key press
      if (!hintDismissed) {
        setShowHint(false);
        setHintDismissed(true);
      }

      const current = findClosestSectionIndex();
      const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = current + direction;

      // Skip sections whose DOM element doesn't exist (safety net for ghost IDs)
      let target = nextIndex;
      while (
        target >= 0 &&
        target < allSectionIds.length &&
        !document.getElementById(allSectionIds[target])
      ) {
        target += direction;
      }

      if (target >= 0 && target < allSectionIds.length) {
        navigateToSection(target);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hintDismissed, navigateToSection]);

  return (
    <>
      {/* Onboarding hint toast */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 pointer-events-auto"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-[rgba(87,212,221,0.20)] bg-[rgba(57,61,63,0.92)] px-5 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="flex items-center gap-1.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[rgba(87,212,221,0.14)] text-[#57D4DD]">
                  <ChevronUp className="h-3.5 w-3.5" />
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[rgba(87,212,221,0.14)] text-[#57D4DD]">
                  <ChevronDown className="h-3.5 w-3.5" />
                </span>
              </div>
              <span className="text-xs font-medium text-white/80">
                Use arrow keys to navigate sections
              </span>
              <button
                onClick={() => {
                  setShowHint(false);
                  setHintDismissed(true);
                }}
                className="ml-1 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/50 transition hover:bg-white/10 hover:text-white/80"
              >
                Got it
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

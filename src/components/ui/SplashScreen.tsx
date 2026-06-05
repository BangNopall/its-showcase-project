"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "bem-filkom-showcase-splash-v1";

const loadingSteps = [
  "Initializing...",
  "Loading...",
  "Preparing...",
  "Launching...",
];

export function SplashScreen() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [sgeLogoReady, setSgeLogoReady] = useState(true);

  const duration = prefersReducedMotion ? 0 : 2500;
  const stepDuration = useMemo(
    () => Math.max(420, Math.floor((duration || 1) / loadingSteps.length)),
    [duration],
  );

  useEffect(() => {
    if (prefersReducedMotion) return;

    const enterTimer = window.setTimeout(() => setVisible(true), 0);
    const exitTimer = window.setTimeout(() => setVisible(false), duration);

    return () => {
      window.clearTimeout(enterTimer);
      window.clearTimeout(exitTimer);
    };
  }, [duration, prefersReducedMotion]);

  useEffect(() => {
    if (!visible) return;

    const stepTimer = window.setInterval(() => {
      setStepIndex((current) => Math.min(current + 1, loadingSteps.length - 1));
    }, stepDuration);

    return () => window.clearInterval(stepTimer);
  }, [stepDuration, visible]);

  function skipSplash() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "shown");
    } catch {
      // No-op: the overlay can still close without persisted state.
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="splash-screen"
          className="fixed inset-0 z-[120] flex min-h-svh items-center justify-center overflow-hidden bg-[#393D3F] px-5 py-8 text-[#FDFDFF]"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: -28,
            transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
          }}
          role="status"
          aria-live="polite"
          aria-label="Launching Website BEM FILKOM UB Showcase"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.09] [background-image:url('/assets/patterns/pattern-teal.png')] [background-size:440px]"
          />
          <motion.div
            aria-hidden="true"
            className="absolute h-[62vmin] w-[62vmin] rounded-full bg-[radial-gradient(circle,rgba(87,212,221,0.34),rgba(58,140,154,0.13)_42%,transparent_70%)] blur-2xl"
            initial={{ scale: 0.72, opacity: 0.35 }}
            animate={{ scale: 1.18, opacity: 0.8 }}
            transition={{ duration: 2.35, ease: "easeOut" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#57D4DD]/35 to-transparent"
          />

          <motion.button
            type="button"
            onClick={skipSplash}
            className="absolute bottom-5 right-5 z-20 rounded-full border border-white/14 bg-white/[0.07] px-4 py-2 text-xs font-semibold text-white/72 backdrop-blur-xl transition hover:border-[#F2B705]/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#57D4DD]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.35 }}
          >
            Skip
          </motion.button>

          <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <motion.div
              className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/12 bg-white/[0.06] shadow-[0_28px_90px_rgba(87,212,221,0.28)] backdrop-blur-2xl sm:h-32 sm:w-32"
              initial={{ opacity: 0, scale: 0.82, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="absolute inset-3 rounded-[1.55rem] border border-[#57D4DD]/20" />
              {sgeLogoReady ? (
                <Image
                  src="/assets/logos/sge-logo-symbol-cream.png"
                  alt="SGE FILKOM UB logo"
                  width={96}
                  height={96}
                  priority
                  className="relative h-20 w-20 object-contain sm:h-24 sm:w-24"
                  onError={() => setSgeLogoReady(false)}
                />
              ) : (
                <span className="relative font-heading text-3xl font-medium text-[#FFEFD3]">
                  SGE
                </span>
              )}
            </motion.div>
            <motion.div
              className="mt-9 w-full max-w-xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="mb-3 flex items-center justify-between gap-4 text-left">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={loadingSteps[stepIndex]}
                    className="text-sm font-medium text-white/72 sm:text-base"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {loadingSteps[stepIndex]}
                  </motion.p>
                </AnimatePresence>
                <span className="shrink-0 text-xs font-bold text-[#F2B705]">
                  Initializing Digital Ecosystem...
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10 shadow-[0_0_24px_rgba(87,212,221,0.18)]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#F2B705] via-[#57D4DD] to-[#3A8C9A]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.35, ease: [0.65, 0, 0.35, 1] }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

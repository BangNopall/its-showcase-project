"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Monitor } from "lucide-react";
import { useEffect, useState } from "react";

const DESKTOP_MIN_WIDTH = 1024;

export function DeviceGate({ children }: { children: React.ReactNode }) {
  // Start as null (unknown) to avoid hydration mismatch
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [logoReady, setLogoReady] = useState(true);

  useEffect(() => {
    function check() {
      setIsDesktop(window.innerWidth >= DESKTOP_MIN_WIDTH);
    }

    // Initial check
    check();

    // Real-time resize detection
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // SSR / first render: render nothing to avoid flash
  if (isDesktop === null) {
    return null;
  }

  // Desktop: render the app normally
  if (isDesktop) {
    return <>{children}</>;
  }

  // Mobile / Tablet: render blocker
  return (
    <AnimatePresence>
      <motion.div
        key="device-gate"
        className="fixed inset-0 z-[200] flex min-h-dvh items-center justify-center overflow-hidden bg-[#393D3F] px-6 py-10 text-[#FDFDFF]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        role="alert"
        aria-live="assertive"
      >
        {/* Pattern overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07] [background-image:url('/assets/patterns/pattern-teal.png')] [background-size:440px]"
        />

        {/* Ambient glow */}
        <motion.div
          aria-hidden="true"
          className="absolute h-[70vmin] w-[70vmin] rounded-full bg-[radial-gradient(circle,rgba(87,212,221,0.28),rgba(58,140,154,0.10)_45%,transparent_72%)] blur-3xl"
          initial={{ scale: 0.8, opacity: 0.3 }}
          animate={{ scale: 1.1, opacity: 0.65 }}
          transition={{ duration: 3, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Horizontal accent line */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#57D4DD]/25 to-transparent"
        />

        {/* Content */}
        <motion.div
          className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo container — glassmorphism */}
          <motion.div
            className="relative flex h-24 w-24 items-center justify-center rounded-[1.6rem] border border-white/12 bg-white/[0.06] shadow-[0_24px_72px_rgba(87,212,221,0.22)] backdrop-blur-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute inset-2.5 rounded-[1.2rem] border border-[#57D4DD]/18" />
            {logoReady ? (
              <Image
                src="/assets/logos/sge-logo-symbol-cream.png"
                alt="SGE FILKOM UB logo"
                width={72}
                height={72}
                priority
                className="relative h-16 w-16 object-contain"
                onError={() => setLogoReady(false)}
              />
            ) : (
              <span className="relative font-heading text-2xl font-medium text-[#FFEFD3]">
                SGE
              </span>
            )}
          </motion.div>

          {/* Monitor icon */}
          <motion.div
            className="mt-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#57D4DD]/20 bg-[#57D4DD]/[0.08]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Monitor className="h-7 w-7 text-[#57D4DD]" strokeWidth={1.8} />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="mt-6 font-heading text-2xl font-medium tracking-tight text-[#FFEFD3]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.5 }}
          >
            Desktop Only
          </motion.h1>

          {/* Divider */}
          <motion.div
            className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#F2B705]/50 to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          />

          {/* Message */}
          <motion.p
            className="mt-4 text-base leading-relaxed text-white/70"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.6 }}
          >
            This website is optimized for desktop viewing only.
          </motion.p>

          {/* Sub-message */}
          <motion.p
            className="mt-2 text-sm leading-relaxed text-white/45"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.7 }}
          >
            Please open this website on a laptop or desktop computer with a screen width of at least 1024px.
          </motion.p>

          {/* Badge */}
          <motion.div
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-white/50 backdrop-blur-xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#F2B705] shadow-[0_0_6px_rgba(242,183,5,0.5)]" />
            IT Solutions Bureau — SGE FILKOM UB
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

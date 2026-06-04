"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  BadgeCheck,
  CalendarPlus,
  Newspaper,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { screenshotPaths } from "@/lib/utils";

const featureNodes = [
  {
    label: "News Publication",
    value: "Search, filter, share",
    icon: Newspaper,
    className: "left-3 top-8 md:left-0 md:top-16",
    delay: 0,
  },
  {
    label: "Event Request",
    value: "Preview before submit",
    icon: CalendarPlus,
    className: "right-2 top-28 md:right-0 md:top-28",
    delay: 0.5,
  },
  {
    label: "Approval Flow",
    value: "Status and feedback",
    icon: BadgeCheck,
    className: "bottom-20 left-1 md:bottom-24 md:left-8",
    delay: 1,
  },
  {
    label: "Participants",
    value: "Filter and export",
    icon: Users,
    className: "bottom-8 right-5 md:bottom-12 md:right-12",
    delay: 1.5,
  },
];

export function Framer3DShowcase() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 18 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-13, 13]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [9, -9]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  return (
    <motion.div
      className="relative min-h-[500px] overflow-hidden rounded-[36px] border border-white/14 bg-white/7 p-4 shadow-2xl shadow-black/20 backdrop-blur-md md:min-h-[620px] md:p-8"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(87,212,221,0.34),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(242,183,5,0.22),transparent_30%)]" />
      <div className="absolute inset-0 opacity-18 [background-image:url('/assets/patterns/pattern-teal.png')] [background-size:420px]" />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#57D4DD]/16"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F2B705]/12"
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-x-8 bottom-8 h-28 rounded-[100%] bg-[#57D4DD]/18 blur-3xl" />

      <motion.div
        className="relative z-10 mx-auto mt-16 max-w-[730px] md:mt-24"
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
          perspective: "1400px",
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute -right-8 -top-10 z-0 hidden w-[62%] rotate-6 rounded-[28px] border border-white/12 bg-[#393D3F]/80 shadow-2xl shadow-black/20 md:block">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#57D4DD]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F2B705]" />
            <span className="ml-3 h-5 flex-1 rounded-full bg-white/8" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-b-[28px] bg-[#FDFDFF] opacity-80">
            <Image
              src={screenshotPaths.adminDetail}
              alt="Admin portal screenshot as a secondary 3D layer"
              fill
              sizes="430px"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="relative z-10 rounded-[30px] border border-white/20 bg-[#393D3F] shadow-2xl shadow-[#57D4DD]/18">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff6868]" />
            <span className="h-3 w-3 rounded-full bg-[#F2B705]" />
            <span className="h-3 w-3 rounded-full bg-[#57D4DD]" />
            <span className="ml-3 h-6 flex-1 rounded-full bg-white/8" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-b-[30px] bg-[#FDFDFF]">
            <Image
              src={screenshotPaths.landing}
              alt="Homepage screenshot inside a Framer Motion 3D showcase"
              fill
              sizes="(max-width: 768px) 92vw, 730px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1F6778]/12 via-transparent to-[#57D4DD]/10" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-6 top-6 z-20 hidden items-center gap-3 rounded-2xl border border-white/14 bg-[#393D3F]/76 px-4 py-3 text-[#FDFDFF] shadow-xl shadow-black/16 backdrop-blur-xl md:flex"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F2B705]/16 text-[#F2B705]">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold">Interactive Showcase</span>
      </motion.div>

      {featureNodes.map((node) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            className={`absolute z-20 hidden w-[210px] rounded-2xl border border-white/14 bg-[#393D3F]/78 p-4 text-[#FDFDFF] shadow-xl shadow-black/16 backdrop-blur-xl md:block ${node.className}`}
            animate={{ y: [0, node.delay % 1 ? 9 : -9, 0], rotate: [0, node.delay % 1 ? -1.5 : 1.5, 0] }}
            transition={{
              duration: 5.5 + node.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay,
            }}
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#57D4DD]/14 text-[#57D4DD]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold leading-5">{node.label}</span>
                <span className="mt-1 block text-xs leading-5 text-white/54">{node.value}</span>
              </span>
            </div>
          </motion.div>
        );
      })}

      <motion.div
        className="absolute bottom-5 left-5 z-20 flex items-center gap-3 rounded-2xl border border-white/14 bg-white/8 px-4 py-3 text-sm font-semibold text-[#FFEFD3] backdrop-blur-xl md:hidden"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ShieldCheck className="h-4 w-4 text-[#57D4DD]" aria-hidden="true" />
        Framer-powered product preview
      </motion.div>
    </motion.div>
  );
}

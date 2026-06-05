"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function AnimatedSection({
  id,
  children,
  className,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={cn(
        "relative min-h-screen w-full overflow-hidden px-5 py-20 md:px-8 md:py-28 flex flex-col justify-center scroll-mt-0 snap-start snap-always",
        className
      )}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Framer3DShowcase } from "@/components/ui/Framer3DShowcase";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[var(--neutral-900)] px-5 pb-20 pt-32 text-[var(--color-white)] md:px-8 md:pb-24 md:pt-36 flex flex-col justify-center snap-start snap-always"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(87,212,221,0.22),transparent_34%),radial-gradient(circle_at_88%_78%,rgba(242,183,5,0.18),transparent_32%)]" />
      <div className="absolute inset-0 opacity-12 [background-image:url('/assets/patterns/pattern-teal.png')] [background-size:520px]" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-3xl">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <Image
              src="/assets/logos/sge-logotype-cream.png"
              alt="SGE FILKOM UB"
              width={160}
              height={54}
              className="h-auto w-36 md:w-44"
              priority
            />
            <span className="h-8 w-px bg-[rgba(255,255,255,0.12)]" />
            <Image
              src="/assets/logos/its-logo.png"
              alt="IT Solutions Bureau"
              width={74}
              height={74}
              className="h-12 w-12 rounded-2xl object-contain"
              priority
            />
          </div>
          <h1 className="font-heading text-5xl font-medium leading-[1.04] md:text-7xl">
            Website BEM FILKOM UB
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-white/76 md:text-2xl">
            Digital Information Hub & Event Management Platform
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/58">
            Developed by IT Solutions Bureau — SGE/BEM FILKOM UB for a premium project session and live product demo experience.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#background" variant="accent">
              Start Showcase
            </Button>
            <Button href="https://bemfilkom.ub.ac.id" variant="ghost" external>
              Launch Demo
            </Button>
          </div>
        </div>
        <Framer3DShowcase />
      </div>
    </section>
  );
}

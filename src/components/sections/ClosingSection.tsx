import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function ClosingSection() {
  return (
    <section
      id="closing"
      tabIndex={-1}
      aria-label="closing"
      className="relative min-h-screen w-full overflow-hidden bg-[#393D3F] px-5 py-24 text-[#FDFDFF] md:px-8 md:py-32 flex flex-col justify-center snap-start snap-always"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(87,212,221,0.22),transparent_34%),radial-gradient(circle_at_86%_84%,rgba(242,183,5,0.18),transparent_32%)]" />
      <div className="absolute inset-0 opacity-12 [background-image:url('/assets/patterns/pattern-teal.png')] [background-size:520px]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-9 flex items-center justify-center gap-5">
          <Image
            src="/assets/logos/sge-logo-symbol-primary.svg"
            alt="SGE FILKOM UB"
            width={72}
            height={72}
          />
          <Image
            src="/assets/logos/its-logo.png"
            alt="IT Solutions Bureau"
            width={72}
            height={72}
            className="rounded-3xl object-contain"
          />
        </div>
        <h2 className="font-heading text-3xl font-medium leading-[1.18] md:text-5xl">
          Website BEM FILKOM UB bukan hanya sebuah media informasi.
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-white/74 md:text-xl">
          Website BEM FILKOM UB bukan hanya sebuah media informasi, tetapi juga bentuk komitmen IT Solutions Bureau dalam membangun ekosistem digital organisasi yang lebih profesional, terstruktur, transparan, dan berkelanjutan.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="#itsolutions" variant="accent">
            Back to Start
          </Button>
        </div>
      </div>
    </section>
  );
}

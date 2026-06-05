import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#393D3F] px-5 py-10 text-[#FDFDFF]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/logos/sge-logo-symbol-primary.svg"
            alt="SGE FILKOM UB"
            width={48}
            height={48}
          />
          <div>
            <p className="font-heading text-lg font-medium">Website BEM FILKOM UB Showcase</p>
            <p className="text-sm text-white/58">Built by IT Solutions Bureau — SGE FILKOM UB 2026.</p>
          </div>
        </div>
        <p className="max-w-xl text-sm leading-6 text-white/58">
          A presentation-ready digital product showcase for project sessions, live demos, and future deployment.
        </p>
      </div>
    </footer>
  );
}
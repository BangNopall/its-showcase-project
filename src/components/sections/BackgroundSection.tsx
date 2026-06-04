import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function BackgroundSection() {
  return (
    <AnimatedSection id="background" className="bg-[#FDFDFF]">
      <div className="absolute inset-0 opacity-35 [background-image:url('/assets/patterns/pattern-cream.png')] [background-size:520px]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader
          eyebrow="Background"
          title="Why We Built This Platform"
          description="Website BEM Fakultas dibutuhkan sebagai pusat informasi dan sistem terintegrasi untuk mendukung kegiatan organisasi, khususnya dalam pengelolaan event dan komunikasi kepada mahasiswa."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Centralized Information", "Satu pintu informasi resmi untuk kegiatan, berita, dan identitas organisasi."],
            ["Event Management", "Pengajuan event dibuat lebih rapi, terdokumentasi, dan mudah dipantau."],
            ["Communication Flow", "Mahasiswa dan organisasi mendapat akses informasi yang lebih responsif."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-[26px] border border-[#1F6778]/14 bg-white/80 p-6 shadow-xl shadow-[#1F6778]/8 backdrop-blur-md">
              <h3 className="font-heading text-2xl font-medium leading-tight text-[#1F6778]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#393D3F]/70">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

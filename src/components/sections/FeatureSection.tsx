import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { features } from "@/data/features";

export function FeatureSection() {
  return (
    <AnimatedSection id="features" data-cinematic-section className="bg-[#FDFDFF]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,239,211,0.72),rgba(253,253,255,1))]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Feature Highlight"
          title="A Showcase of Public, Admin, and Workflow Capabilities"
          description="Setiap fitur terintegrasi dalam satu ekosistem digital yang mencakup publikasi informasi, pengajuan kegiatan, verifikasi kesesuaian SOP, manajemen berita, registrasi peserta, serta pengelolaan hak akses pengguna."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

import { DemoStepCard } from "@/components/ui/DemoStepCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { demoFlow, demoLinks } from "@/data/demoFlow";

export function LiveDemoSection() {
  return (
    <AnimatedSection id="live-demo" className="bg-[#1F6778] text-[#FDFDFF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(87,212,221,0.24),transparent_30%),radial-gradient(circle_at_84%_82%,rgba(242,183,5,0.16),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionHeader
              eyebrow="Live Demo Flow"
              title="Live Demo Flow Showcasing User Journey and Admin Management"
              description="Demo dimulai dari akses informasi publik oleh pengguna, dilanjutkan dengan eksplorasi fitur utama, serta diakhiri dengan pengelolaan sistem dan konten melalui dashboard admin."
              theme="dark"
            />
            <div className="mt-8 grid gap-3">
              {demoLinks.map((link) => (
                <Button key={link.url} href={link.url} variant="accent" external className="justify-between">
                  {link.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {demoFlow.map((step, index) => (
              <DemoStepCard key={step.title} index={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

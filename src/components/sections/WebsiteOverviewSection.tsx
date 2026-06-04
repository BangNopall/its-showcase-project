import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { screenshotPaths } from "@/lib/utils";

export function WebsiteOverviewSection() {
  return (
    <AnimatedSection id="overview" className="bg-[#FFEFD3]">
      <div className="absolute inset-0 opacity-30 [background-image:url('/assets/patterns/pattern-cream.png')] [background-size:540px]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Website Overview"
          title="Homepage as the Main Information Hub"
          description="Landing page menjadi pintu masuk untuk identitas organisasi, latest events, latest news, navigasi utama, dan akses arsip informasi."
          align="center"
        />
        <div className="mt-12">
          <BrowserMockup
            src={screenshotPaths.landing}
            alt="Landing page screenshot of Website BEM FILKOM UB"
            title="Landing Page"
            description="Main showcase for organization identity, navigation, latest events, and latest news."
            priority
            className="mx-auto max-w-5xl"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

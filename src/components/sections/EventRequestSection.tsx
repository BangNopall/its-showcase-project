import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ScreenshotShowcase } from "@/components/ui/ScreenshotShowcase";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { screenshotPaths } from "@/lib/utils";

export function EventRequestSection() {
  return (
    <AnimatedSection id="event-request" className="bg-[#FFEFD3]">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Event Request"
          title="Preview Before Submit Makes Event Flow Easier to Trust"
          description="Admin dapat melihat tampilan event sebelum submit, sehingga deskripsi, division needs, timeline, countdown, dan registration flow bisa dicek lebih awal."
        />
        <div className="mt-12">
          <ScreenshotShowcase
            reverse
            screenshots={[
              {
                src: screenshotPaths.eventPreview,
                alt: "Admin event preview screenshot",
                title: "Admin Preview Event",
                description: "Preview page for event details, division needs, countdown, timeline, and registration flow.",
              },
            ]}
            points={[
              "Preview mengurangi risiko kesalahan input sebelum event masuk ke approval.",
              "Division needs dan timeline membantu reviewer memahami kebutuhan event.",
              "Countdown dan registration flow memberi gambaran pengalaman mahasiswa.",
              "Flow ini menghubungkan submission, review, feedback, dan status tracking.",
            ]}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

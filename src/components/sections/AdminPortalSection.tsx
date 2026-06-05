import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ScreenshotShowcase } from "@/components/ui/ScreenshotShowcase";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { screenshotPaths } from "@/lib/utils";

export function AdminPortalSection() {
  return (
    <AnimatedSection id="admin-portal" className="bg-[#FDFDFF] section-bg-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Admin Portal"
          title="Participant Management and Operational Control"
          description="Dashboard admin menampilkan ringkasan peserta, pencarian, filter divisi, export Excel, status, dan action detail untuk membantu operasional event."
        />
        <div className="mt-12">
          <ScreenshotShowcase
            screenshots={[
              {
                src: screenshotPaths.adminDetail,
                alt: "Admin detail event dashboard screenshot",
                title: "Admin Detail Event",
                description: "Participant management, summary cards, search, filter, export Excel, status, and detail action.",
              },
            ]}
            points={[
              "Summary cards membantu admin membaca kondisi event dengan cepat.",
              "Search dan filter divisi mempercepat pengelolaan peserta.",
              "Export Excel mendukung kebutuhan administrasi dan rekap.",
              "Action detail dan status peserta menjaga proses tetap terdokumentasi.",
            ]}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

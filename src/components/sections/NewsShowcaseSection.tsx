import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ScreenshotShowcase } from "@/components/ui/ScreenshotShowcase";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { screenshotPaths } from "@/lib/utils";

export function NewsShowcaseSection() {
  return (
    <AnimatedSection id="news" className="bg-[#FDFDFF]">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="News Publication"
          title="Structured Publication for Organization Updates"
          description="News flow supports discovery, detail reading, sharing, and content management needs without making the public experience feel administrative."
        />
        <div className="mt-12">
          <ScreenshotShowcase
            screenshots={[
              {
                src: screenshotPaths.news,
                alt: "News list page screenshot",
                title: "News List",
                description: "Search, category filter, highlight news, latest news, and pagination.",
              },
              {
                src: screenshotPaths.detailNews,
                alt: "Detail news page screenshot",
                title: "Detail News",
                description: "Article metadata, image, share, and other news recommendation.",
              },
            ]}
            points={[
              "Search dan filter membantu mahasiswa menemukan berita yang relevan.",
              "Detail berita menjaga struktur metadata, gambar utama, isi artikel, dan share button.",
              "Latest news dan pagination membuat publikasi organisasi lebih mudah ditelusuri.",
              "Fitur draft, schedule, pinned, dan summary dashboard disiapkan untuk kebutuhan admin.",
            ]}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

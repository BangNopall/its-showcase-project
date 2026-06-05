import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ScreenshotShowcase } from "@/components/ui/ScreenshotShowcase";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { screenshotPaths } from "@/lib/utils";

export function NewsShowcaseSection() {
  return (
    <AnimatedSection id="news" data-cinematic-section className="bg-[#FDFDFF] section-bg-2">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="News Publication"
          title="Structured Publication for Organization Updates"
          description="Alur berita dirancang untuk memudahkan pengguna menemukan, membaca, dan membagikan informasi, sekaligus mendukung pengelolaan konten secara efektif oleh administrator."
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
              "Halaman berita menyajikan informasi secara lengkap melalui metadata, gambar utama, isi artikel, dan fitur berbagi.",
              "Latest news serta kategori dan tag berita memudahkan pengguna menjelajahi informasi organisasi.",
              "Fitur draft, schedule, pinned, dan summary dashboard disiapkan untuk kebutuhan admin.",
            ]}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

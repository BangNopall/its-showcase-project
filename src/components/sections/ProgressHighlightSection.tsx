import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { progressHighlights } from "@/data/progress";

export function ProgressHighlightSection() {
  return (
    <AnimatedSection id="progress" className="bg-[#FDFDFF]">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeader
          eyebrow="Progress Highlight"
          title="Completed Features and Integration Progress"
          description="The showcase avoids unverified metrics and focuses on concrete product capabilities already represented in the project flow."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {progressHighlights.map((item) => (
            <div key={item} className="rounded-2xl border border-[#1F6778]/14 bg-white/82 px-4 py-3 text-sm font-medium leading-6 text-[#393D3F]/76 shadow-lg shadow-[#1F6778]/5">
              {item}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

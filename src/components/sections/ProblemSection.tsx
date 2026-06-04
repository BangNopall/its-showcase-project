import { AlertTriangle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { problemPoints } from "@/data/features";

export function ProblemSection() {
  return (
    <AnimatedSection id="problem" className="bg-[#FFEFD3]">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Problem"
          title="The Workflow Needed a Clearer Digital Backbone"
          description="Sebelum platform ini, beberapa proses penting masih tersebar dan belum cukup transparan untuk kebutuhan organisasi yang bergerak cepat."
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problemPoints.map((point) => (
            <article key={point} className="flex gap-4 rounded-[24px] border border-[#1F6778]/14 bg-[#FDFDFF]/82 p-5 shadow-xl shadow-[#1F6778]/7">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F2B705]/18 text-[#1F6778]">
                <AlertTriangle className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-sm leading-7 text-[#393D3F]/74">{point}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

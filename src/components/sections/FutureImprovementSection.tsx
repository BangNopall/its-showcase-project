import { Rocket } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { futureImprovements } from "@/data/features";

export function FutureImprovementSection() {
  return (
    <AnimatedSection id="future" className="bg-[#FFEFD3]">
      <div className="absolute inset-0 opacity-30 [background-image:url('/assets/patterns/pattern-cream.png')] [background-size:520px]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Future Improvement"
          title="Prepared for the Next Product Iterations"
          description="The roadmap focuses on better notification, analytics, performance, participant management, and ecosystem integration."
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {futureImprovements.map((item) => (
            <article key={item} className="rounded-[22px] border border-[#1F6778]/14 bg-[#FDFDFF]/84 p-5 shadow-xl shadow-[#1F6778]/7">
              <Rocket className="h-5 w-5 text-[#1F6778]" aria-hidden="true" />
              <p className="mt-4 text-sm font-medium leading-6 text-[#393D3F]/76">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

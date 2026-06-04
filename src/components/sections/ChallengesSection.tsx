import { Wrench } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { challengePoints } from "@/data/features";

export function ChallengesSection() {
  return (
    <AnimatedSection id="challenges" className="bg-[#FDFDFF]">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          eyebrow="Challenges"
          title="The Hard Parts Were Product Clarity and System Integration"
          description="The project needed to balance multiple roles, complete event flows, responsive UI, validation, and frontend-backend integration."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {challengePoints.map((point) => (
            <article key={point} className="flex gap-4 rounded-[22px] border border-[#1F6778]/14 bg-white/82 p-5 shadow-lg shadow-[#1F6778]/6">
              <Wrench className="mt-1 h-5 w-5 shrink-0 text-[#1F6778]" aria-hidden="true" />
              <p className="text-sm leading-7 text-[#393D3F]/72">{point}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

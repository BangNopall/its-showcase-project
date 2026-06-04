import { Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { impactPoints } from "@/data/features";

export function ImpactSection() {
  return (
    <AnimatedSection id="impact" className="bg-[#393D3F] text-[#FDFDFF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(87,212,221,0.2),transparent_30%),radial-gradient(circle_at_78%_82%,rgba(242,183,5,0.14),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Impact"
          title="What the Product Changes for the Organization"
          description="The value is practical: clearer information, more structured requests, more transparent approvals, and a stronger portfolio for IT Solutions Bureau."
          theme="dark"
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {impactPoints.map((point) => (
            <article key={point} className="rounded-[24px] border border-white/12 bg-white/7 p-6 shadow-xl shadow-black/10 backdrop-blur-md">
              <Sparkles className="h-6 w-6 text-[#F2B705]" aria-hidden="true" />
              <p className="mt-4 text-sm leading-7 text-white/70">{point}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

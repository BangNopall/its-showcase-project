import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { milestones } from "@/data/progress";

export function DevelopmentProcessSection() {
  return (
    <AnimatedSection id="development" className="bg-[#393D3F] text-[#FDFDFF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(87,212,221,0.18),transparent_32%),radial-gradient(circle_at_82%_80%,rgba(242,183,5,0.14),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Development Process"
          title="Sprint-Based Development With Two Clear Milestones"
          description="The project is framed as iterative product work: establish the system foundation first, then complete the core workflow and API integration."
          theme="dark"
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {milestones.map((milestone) => (
            <article key={milestone.title} className="rounded-[30px] border border-white/12 bg-white/7 p-7 shadow-2xl shadow-black/12 backdrop-blur-md">
              <p className="font-heading text-sm font-medium text-[#F2B705]">{milestone.title}</p>
              <h3 className="mt-2 font-heading text-3xl font-medium text-[#FDFDFF]">{milestone.subtitle}</h3>
              <ul className="mt-6 grid gap-4">
                {milestone.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-white/68">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#57D4DD]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

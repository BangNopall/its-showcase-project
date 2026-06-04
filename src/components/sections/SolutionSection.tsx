import { ArrowRight, Network } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SolutionSection() {
  const flow = ["Public Information", "Event Request", "Approval", "News", "Registration"];

  return (
    <AnimatedSection id="solution" className="bg-[#1F6778] text-[#FDFDFF]">
      <div className="absolute inset-0 opacity-14 [background-image:url('/assets/patterns/pattern-teal.png')] [background-size:500px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <SectionHeader
          eyebrow="Solution"
          title="An Integrated Digital Platform for Organization Workflows"
          description="Website BEM FILKOM UB menghubungkan informasi publik, pengajuan event, approval, berita, dan registrasi dalam satu platform yang mudah dipresentasikan dan dikembangkan."
          theme="dark"
        />
        <div className="rounded-[32px] border border-white/14 bg-white/8 p-6 shadow-2xl shadow-black/12 backdrop-blur-md">
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#57D4DD]/14 text-[#57D4DD]">
              <Network className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="font-heading text-2xl font-medium">Connected Product Flow</h3>
          </div>
          <div className="grid gap-3">
            {flow.map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-4">
                <span className="font-heading text-sm font-medium text-[#F2B705]">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-sm font-semibold">{item}</span>
                <ArrowRight className="h-4 w-4 text-[#57D4DD]" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

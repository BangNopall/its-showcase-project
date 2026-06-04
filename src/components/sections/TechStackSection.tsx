import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechStackCard } from "@/components/ui/TechStackCard";
import { techStack } from "@/data/techStack";

export function TechStackSection() {
  return (
    <AnimatedSection id="tech-stack" className="bg-[#393D3F]">
      <div className="absolute inset-0 opacity-12 [background-image:url('/assets/patterns/pattern-teal.png')] [background-size:520px]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Tech Stack"
          title="A Modern Web Foundation for Product Showcase and Deployment"
          description="The stack is chosen for maintainable presentation UI, future Vercel deployment, and realistic integration with backend services."
          theme="dark"
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {techStack.map((item) => (
            <TechStackCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

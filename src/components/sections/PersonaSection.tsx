import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personas } from "@/data/personas";

export function PersonaSection() {
  return (
    <AnimatedSection id="personas" className="bg-[#FDFDFF]">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Target Users"
          title="Built Around the Roles That Actually Use It"
          description="The product supports public users, administrative submitters, and IT Solutions reviewers without flattening their needs into one generic flow."
          align="center"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {personas.map((persona) => {
            const Icon = persona.icon;
            return (
              <article key={persona.role} className="rounded-[28px] border border-[#1F6778]/14 bg-white/82 p-6 shadow-xl shadow-[#1F6778]/8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F6778]/10 text-[#1F6778]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-2xl font-medium text-[#393D3F]">{persona.role}</h3>
                <dl className="mt-5 grid gap-4 text-sm leading-7 text-[#393D3F]/72">
                  <div>
                    <dt className="font-semibold text-[#1F6778]">Goal</dt>
                    <dd>{persona.goal}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#1F6778]">Pain Point</dt>
                    <dd>{persona.pain}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#1F6778]">Needs</dt>
                    <dd>{persona.needs}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

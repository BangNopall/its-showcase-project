import type { LucideIcon } from "lucide-react";

type DemoStepCardProps = {
  index: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function DemoStepCard({
  index,
  title,
  description,
  icon: Icon,
}: DemoStepCardProps) {
  return (
    <article data-cinematic-card className="relative rounded-[24px] border border-white/12 bg-white/7 p-5 shadow-xl shadow-black/10 backdrop-blur-md">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="font-heading text-sm font-medium text-[#F2B705]">
          Step {String(index + 1).padStart(2, "0")}
        </span>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#57D4DD]/12 text-[#57D4DD]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <h3 className="font-heading text-xl font-medium text-[#FDFDFF]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/64">{description}</p>
    </article>
  );
}

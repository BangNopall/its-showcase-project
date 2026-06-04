import type { LucideIcon } from "lucide-react";

type TechStackCardProps = {
  name: string;
  detail: string;
  icon: LucideIcon;
};

export function TechStackCard({ name, detail, icon: Icon }: TechStackCardProps) {
  return (
    <article className="rounded-[24px] border border-white/12 bg-white/7 p-5 shadow-xl shadow-black/10 backdrop-blur-md transition hover:-translate-y-1 hover:border-[#57D4DD]/34">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#57D4DD]/12 text-[#57D4DD]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-xl font-medium text-[#FDFDFF]">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-white/64">{detail}</p>
    </article>
  );
}

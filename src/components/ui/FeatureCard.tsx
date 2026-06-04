import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  theme?: "light" | "dark";
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  theme = "light",
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group rounded-[24px] border p-6 transition duration-300 hover:-translate-y-1",
        theme === "light" &&
          "border-[#1F6778]/14 bg-white/78 shadow-xl shadow-[#1F6778]/6 backdrop-blur-md hover:border-[#57D4DD]/45 hover:shadow-[#1F6778]/12",
        theme === "dark" &&
          "border-white/12 bg-white/7 shadow-xl shadow-black/10 backdrop-blur-md hover:border-[#57D4DD]/34",
      )}
    >
      <div
        className={cn(
          "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition group-hover:scale-105",
          theme === "light"
            ? "bg-[#1F6778]/10 text-[#1F6778]"
            : "bg-[#57D4DD]/12 text-[#57D4DD]",
        )}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3
        className={cn(
          "font-heading text-xl font-medium leading-tight",
          theme === "light" ? "text-[#393D3F]" : "text-[#FDFDFF]",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-3 text-sm leading-7",
          theme === "light" ? "text-[#393D3F]/68" : "text-white/66",
        )}
      >
        {description}
      </p>
    </article>
  );
}

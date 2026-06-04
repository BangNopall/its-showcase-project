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
          "card-surface card-light border-[var(--card-border)] shadow-xl shadow-[rgba(var(--primary-900-rgb),0.06)] backdrop-blur-md hover:border-[rgba(var(--primary-900-rgb),0.45)] hover:shadow-[rgba(var(--primary-900-rgb),0.12)]",
        theme === "dark" &&
          "card-surface card-dark border-[rgba(255,255,255,0.12)] shadow-xl shadow-black/10 backdrop-blur-md hover:border-[rgba(var(--primary-900-rgb),0.34)]",
      )}
    >
      <div
        className={cn(
          "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition group-hover:scale-105",
          theme === "light"
            ? "bg-[rgba(var(--primary-900-rgb),0.08)] text-[var(--primary-900)]"
            : "bg-[rgba(var(--primary-900-rgb),0.12)] text-[var(--primary-200)]",
        )}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3
        className={cn(
          "font-heading text-xl font-medium leading-tight",
          theme === "light" ? "text-[var(--text-default)]" : "text-[var(--color-white)]",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-3 text-sm leading-7",
          theme === "light" ? "text-[var(--text-muted)]" : "text-white/66",
        )}
      >
        {description}
      </p>
    </article>
  );
}

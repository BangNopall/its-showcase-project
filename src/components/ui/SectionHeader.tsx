import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-3xl flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left" && "mx-0",
        className,
      )}
    >
      {eyebrow ? <Badge tone={theme === "dark" ? "dark" : "light"}>{eyebrow}</Badge> : null}
      <h2
        className={cn(
          "font-heading text-3xl font-medium leading-[1.15] md:text-5xl",
          theme === "dark" ? "text-[#FDFDFF]" : "text-[#393D3F]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base leading-8 md:text-lg",
            theme === "dark" ? "text-white/72" : "text-[#393D3F]/72",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

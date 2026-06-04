import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "light" | "dark" | "yellow";
  className?: string;
};

export function Badge({ children, tone = "light", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold leading-none",
        tone === "light" &&
          "border-[#1F6778]/20 bg-[#1F6778]/8 text-[#1F6778]",
        tone === "dark" &&
          "border-white/15 bg-white/8 text-[#FFEFD3] backdrop-blur-md",
        tone === "yellow" &&
          "border-[#F2B705]/30 bg-[#F2B705]/15 text-[#FFEFD3]",
        className,
      )}
    >
      {children}
    </span>
  );
}

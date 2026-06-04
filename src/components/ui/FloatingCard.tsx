import { cn } from "@/lib/utils";

type FloatingCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function FloatingCard({ children, className }: FloatingCardProps) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-white/14 bg-white/8 p-5 shadow-xl shadow-black/10 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}

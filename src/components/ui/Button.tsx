import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "accent";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
    variant === "primary" &&
      "bg-[#1F6778] text-[#FDFDFF] shadow-lg shadow-[#1F6778]/25 hover:-translate-y-0.5 hover:bg-[#185766] focus-visible:outline-[#57D4DD]",
    variant === "accent" &&
      "bg-[#F2B705] text-[#393D3F] shadow-lg shadow-[#F2B705]/25 hover:-translate-y-0.5 hover:bg-[#ffd050] focus-visible:outline-[#F2B705]",
    variant === "secondary" &&
      "border border-[#1F6778]/20 bg-white/75 text-[#1F6778] backdrop-blur-md hover:-translate-y-0.5 hover:border-[#1F6778]/40 hover:bg-white focus-visible:outline-[#1F6778]",
    variant === "ghost" &&
      "border border-white/15 bg-white/8 text-[#FDFDFF] backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/14 focus-visible:outline-[#57D4DD]",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition group-hover:translate-x-0.5"
      />
    </>
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}

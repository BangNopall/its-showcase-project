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
      "btn-primary hover:-translate-y-0.5 focus-visible:outline-[var(--focus-ring)]",
    variant === "accent" &&
      "btn-accent hover:-translate-y-0.5 focus-visible:outline-[var(--focus-ring)]",
    variant === "secondary" &&
      "border border-[rgba(var(--primary-900-rgb),0.14)] bg-[var(--bg-surface)] text-[var(--primary-900)] backdrop-blur-md hover:-translate-y-0.5 hover:border-[rgba(var(--primary-900-rgb),0.24)] hover:bg-[var(--neutral-50)] focus-visible:outline-[var(--focus-ring)]",
    variant === "ghost" &&
      "border border-[rgba(255,255,255,0.12)] bg-[rgba(var(--neutral-900-rgb),0.06)] text-[var(--text-on-primary)] backdrop-blur-md hover:-translate-y-0.5 hover:bg-[rgba(var(--neutral-900-rgb),0.10)] focus-visible:outline-[var(--focus-ring)]",
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

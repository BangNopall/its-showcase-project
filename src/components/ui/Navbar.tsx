"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { sectionNav } from "@/data/sections";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const isContextActive = active === "hero";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-32% 0px -55% 0px", threshold: [0.1, 0.4, 0.7] },
    );

    sectionNav.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 shadow-2xl shadow-black/15 backdrop-blur-2xl nav-surface",
          isContextActive && "nav-context",
        )}
      >
          <Link href="#hero" className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)]">
            <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full bg-[var(--color-cream)]">
            <Image
              src="/assets/logos/sge-logo-symbol-teal.png"
              alt="SGE FILKOM UB symbol"
              fill
              sizes="36px"
              className="object-contain p-1.5"
              priority
            />
          </span>
          <span className="hidden text-left sm:block">
            <span className="block font-heading text-sm font-medium leading-none text-[var(--text-default)]">
              Website BEM FILKOM UB
            </span>
            <span className="block text-xs leading-none text-[var(--text-muted)]">IT Solutions Showcase</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
            {sectionNav.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                  "rounded-full px-3 py-2 text-xs font-semibold text-[var(--text-muted)] transition hover:bg-[rgba(var(--neutral-900-rgb),0.06)] hover:text-[var(--text-on-primary)]",
                  active === item.id && item.id === "hero" && "nav-link-active",
                )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://bemfilkom.ub.ac.id"
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-10 items-center gap-2 rounded-full px-4 text-xs font-bold shadow-lg transition md:inline-flex bg-[rgba(var(--accent-500-rgb),0.10)] border border-[var(--card-border)] text-[var(--neutral-900)] hover:bg-[rgba(var(--accent-500-rgb),0.14)]"
          >
            Launch Demo
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-[rgba(var(--neutral-900-rgb),0.06)] text-[var(--text-on-primary)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          className={cn(
            "mx-auto mt-3 grid max-w-7xl gap-2 rounded-3xl p-3 shadow-2xl shadow-black/20 backdrop-blur-2xl lg:hidden nav-surface",
            isContextActive && "nav-context",
          )}
        >
          {sectionNav.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text-muted)] transition hover:bg-[rgba(var(--neutral-900-rgb),0.06)] hover:text-[var(--text-on-primary)]",
                active === item.id && item.id === "hero" && "nav-link-active",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}

"use client";

import { useEffect } from "react";

export function CinematicScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let cleanup = () => {};

    async function setupCinematicScroll() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        ScrollTrigger.matchMedia({
          "(min-width: 900px)": () => {
            gsap.utils.toArray<HTMLElement>("[data-cinematic-section]").forEach((section) => {
              const visual = section.querySelector<HTMLElement>("[data-cinematic-visual]");
              const mockups = gsap.utils.toArray<HTMLElement>(
                section.querySelectorAll("[data-cinematic-mockup]"),
              );
              const cards = gsap.utils.toArray<HTMLElement>(
                section.querySelectorAll("[data-cinematic-card]"),
              );
              const floats = gsap.utils.toArray<HTMLElement>(
                section.querySelectorAll("[data-cinematic-float]"),
              );

              if (visual) {
                gsap.to(visual, {
                  yPercent: -8,
                  scale: 0.96,
                  rotateX: 0,
                  rotateY: 0,
                  ease: "none",
                  scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.7,
                  },
                });
              }

              if (mockups.length > 0) {
                mockups.forEach((mockup, index) => {
                  gsap.fromTo(
                    mockup,
                    {
                      y: index % 2 === 0 ? 48 : 24,
                      rotateX: index % 2 === 0 ? 5 : 2,
                      scale: 0.96,
                    },
                    {
                      y: index % 2 === 0 ? -18 : -8,
                      rotateX: 0,
                      scale: 1,
                      ease: "none",
                      scrollTrigger: {
                        trigger: section,
                        start: "top 78%",
                        end: "bottom 22%",
                        scrub: 0.8,
                      },
                    },
                  );
                });
              }

              if (cards.length > 0) {
                gsap.fromTo(
                  cards,
                  { autoAlpha: 0.58, y: 28, scale: 0.98 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.08,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: section,
                      start: "top 72%",
                      once: true,
                    },
                  },
                );
              }

              if (floats.length > 0) {
                floats.forEach((item, index) => {
                  gsap.to(item, {
                    yPercent: index % 2 === 0 ? -18 : 14,
                    xPercent: index % 2 === 0 ? 5 : -5,
                    ease: "none",
                    scrollTrigger: {
                      trigger: section,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 1,
                    },
                  });
                });
              }
            });

            gsap.utils.toArray<HTMLElement>("[data-cinematic-pin='soft']").forEach((section) => {
              ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "+=38%",
                pin: true,
                pinSpacing: false,
                anticipatePin: 1,
              });
            });
          },
        });
      });

      cleanup = () => {
        context.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    setupCinematicScroll();

    return () => cleanup();
  }, []);

  return null;
}

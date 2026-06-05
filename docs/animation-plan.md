# Cinematic Animation Plan

This project uses a hybrid animation architecture:

- Framer Motion handles component-level animation: section reveal, staggered cards, hover states, buttons, floating UI, and lightweight transitions.
- GSAP ScrollTrigger handles cinematic scroll effects only on key showcase scenes: hero visual scrub, screenshot parallax, feature/demo card sequencing, and a short soft hero pin.

GSAP is isolated in `src/components/ui/CinematicScroll.tsx`. Sections opt in with `data-cinematic-section`; important animated elements use `data-cinematic-visual`, `data-cinematic-mockup`, `data-cinematic-card`, or `data-cinematic-float`.

## Global Rules

- Do not pin every section.
- Keep all text readable while scrolling.
- Disable GSAP cinematic effects for `prefers-reduced-motion`.
- Run GSAP only inside a client component and dynamic imports to avoid Next.js hydration issues.
- Use desktop-only ScrollTrigger match media for heavier transforms.
- Keep mobile behavior as normal stacked reveal.
- Animate transforms and opacity only; avoid layout-affecting properties.

## Section Plan

| Section | Concept | Library | Scroll Behavior | Animated Elements | Mobile Fallback | Performance Notes |
|---|---|---|---|---|---|---|
| Hero | Opening scene for the product showcase | Framer + GSAP | Short soft pin and scrub | Title/CTA reveal, 3D visual, floating feature cards | Normal reveal; heavy parallax disabled | Dynamic GSAP import, transform-only motion |
| Background | Clean context explanation | Framer | Normal reveal | Text blocks and supporting content | Same reveal | No pinning |
| Problem | Pain points appear clearly | Framer | Stagger reveal | Problem cards and icons | Stacked cards | Hover-only micro motion |
| Solution | Integrated platform answer | Framer | Normal reveal | Solution cards/content groups | Stacked layout | No GSAP unless a flow diagram is added later |
| Target Users / Persona | Three users as clear product audiences | Framer | Stagger reveal | Persona cards | Stacked cards | Minimal transforms |
| Feature Highlight | Dynamic feature inventory | Framer + GSAP | Scroll-triggered card sequence | Feature cards | Normal stagger/reveal | No pin to avoid long scroll trap |
| Website Overview | Main product visual reveal | Framer + GSAP | Scrubbed parallax | Browser mockup | Static/reveal | Mockup transforms only |
| News Publication | List/detail story | Framer + GSAP | Scrubbed mockup depth | News and detail screenshots, point card | Stacked reveal | Uses existing optimized screenshots |
| Event Request | Preview-before-submit journey | Framer + GSAP | Scrubbed mockup depth | Preview screenshot, point card | Stacked reveal | No horizontal pin on mobile |
| Admin Portal | Operational control scene | Framer + GSAP | Scrubbed mockup depth | Admin dashboard screenshot, point card | Stacked reveal | Transform-only mockup movement |
| Development Process | Milestone explanation | Framer | Normal reveal | Milestone cards | Stacked cards | No GSAP |
| Progress Highlight | Completed work overview | Framer | Normal reveal | Progress cards/metrics | Stacked cards | No GSAP |
| Tech Stack | Technology foundation | Framer | Normal reveal | Tech stack cards | Grid stacks | No GSAP |
| Live Demo Flow | Presenter path through the product | Framer + GSAP | Scroll-triggered card sequence | Demo step cards | Normal reveal | No pin to keep presenter control |
| Impact | Value and outcomes | Framer | Normal reveal | Impact cards/text | Stacked cards | No GSAP |
| Challenges | Honest delivery constraints | Framer | Normal reveal | Challenge cards | Stacked cards | No GSAP |
| Future Improvement | Roadmap scene | Framer | Normal reveal | Future cards | Stacked cards | No GSAP |
| Closing | Final message and reset action | Framer | Normal reveal | Logos, closing statement, CTA | Same reveal | No pin; anchor returns to hero |

## Current Implementation

- `CinematicScroll` registers ScrollTrigger after hydration.
- Cinematic effects are desktop-only via GSAP match media.
- Hero uses `data-cinematic-pin="soft"` for a brief opening-scene hold.
- Showcase sections use `data-cinematic-mockup` for scroll-based depth.
- Feature and demo cards use `data-cinematic-card` for sequenced reveal.
- Hero floating cards use `data-cinematic-float` for subtle parallax.

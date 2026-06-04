# Website BEM FILKOM UB Showcase

Interactive website presentation for **Website BEM FILKOM UB**, built for the Project Session Studi Banding with President University by **IT Solutions Bureau — SGE/BEM FILKOM UB**.

The site presents Website BEM FILKOM UB as a digital product: a centralized information hub, news publication system, event request workflow, approval flow, registration support, and admin portal showcase.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- next/image

## Folder Structure

```txt
src/
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    sections/
    ui/
  data/
  lib/
public/
  assets/
    logos/
    patterns/
    screenshots/
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit Content

Update repeated content in:

- `src/data/features.ts`
- `src/data/personas.ts`
- `src/data/progress.ts`
- `src/data/techStack.ts`
- `src/data/demoFlow.ts`
- `src/data/sections.ts`

Section layout lives in `src/components/sections`.

## Replace Screenshots

Put screenshots in `public/assets/screenshots` and update `src/lib/utils.ts` if filenames change.

Current paths:

- `public/assets/screenshots/landing-page.png`
- `public/assets/screenshots/user-news.png`
- `public/assets/screenshots/user-detail-news.png`
- `public/assets/screenshots/admin-preview-event.png`
- `public/assets/screenshots/admin-detail-event.png`

## Replace Logo and Pattern Assets

Branding assets live in:

- `public/assets/logos`
- `public/assets/patterns`

The navbar, hero, footer, and closing section use SGE and IT Solutions assets through `next/image`.

## Customize the Framer 3D Hero

The hero uses a Framer Motion powered 3D-style product showcase in:

```txt
src/components/ui/Framer3DShowcase.tsx
```

You can adjust:

- Main screenshot: `screenshotPaths.landing`
- Secondary screenshot: `screenshotPaths.adminDetail`
- Floating feature nodes: `featureNodes`
- Motion timing: `duration`, `delay`, and `ease` values
- Depth and tilt: `rotateX`, `rotateY`, `translateX`, and `translateY`

No Spline scene is required. This keeps the hero lightweight, easier to maintain, and safer for projector presentation.

## Deploy to Vercel

```bash
npm run build
```

Then deploy the repository to Vercel. No server or secret keys are required for the current static presentation.

## Presentation Checklist

- Main interactive page opens correctly.
- Navbar links scroll to key sections.
- Arrow keys navigate between sections.
- Scroll progress indicator works.
- Hero uses SGE and IT Solutions branding.
- Pattern backgrounds are subtle and readable.
- Screenshots render inside CSS browser mockups.
- Live demo links are reviewed before presenting.
- Admin portal is only shown with safe data.
- `npm run lint` passes.
- `npm run build` passes.

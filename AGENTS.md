<!-- BEGIN:nextjs-agent-rules -->
# AGENT.md — Codex Instructions for SGE FILKOM UB Showcase

This file contains the working instructions for Codex or any AI coding agent that will build the **Website BEM FILKOM UB Showcase** interactive presentation website.

The project is a web-based product showcase for the **Project Session Studi Banding with President University**. The presentation is built for **IT Solutions Bureau — SGE/BEM FILKOM UB** to present the features, process, and impact of the Website BEM FILKOM UB.

---

## 1. Project Goal

Build a full interactive website presentation that showcases **Website BEM FILKOM UB** as a digital product.

The website should feel like a **premium digital product showcase**, not a normal static slide deck.

The final website must be suitable for:
- Project Session presentation
- Live demo support
- Projector display
- Laptop display
- Backup presentation mode
- Future deployment to Vercel or similar platform

---

## 2. Main Tech Stack

Use the following stack:

```txt
Next.js App Router
TypeScript
Tailwind CSS
Framer Motion
lucide-react
next/image
```

Optional / prepared for future:

```txt
@splinetool/react-spline
```

Do not force real Spline integration if no Spline scene URL is available. Use a CSS 3D placeholder instead.

---

## 3. Important Reference Files

Before coding, read these files carefully:

```txt
CONTENT.md
DESIGN_SYSTEM.md
ASSETS_GUIDE.md
SCREENSHOTS_GUIDE.md
DEMO_LINKS.md
DEMO_FLOW.md
SPLINE_GUIDE.md
```

Each file has a specific purpose:

| File | Purpose |
|---|---|
| `CONTENT.md` | Main presentation content and section material |
| `DESIGN_SYSTEM.md` | Colors, typography, spacing, component style, animation direction |
| `ASSETS_GUIDE.md` | Logo, pattern, and screenshot asset mapping |
| `SCREENSHOTS_GUIDE.md` | Screenshot usage guide |
| `DEMO_LINKS.md` | Live demo URLs and backup links |
| `DEMO_FLOW.md` | Presenter demo flow, script, and backup flow |
| `SPLINE_GUIDE.md` | 3D/Spline direction and fallback strategy |

If any file is missing, continue using the available files and create a reasonable placeholder, but do not remove required sections.

---

## 4. Expected Project Structure

Use or create this structure:

```txt
src/
  app/
    page.tsx
    layout.tsx
    globals.css

  components/
    sections/
      HeroSection.tsx
      BackgroundSection.tsx
      ProblemSection.tsx
      SolutionSection.tsx
      PersonaSection.tsx
      FeatureSection.tsx
      WebsiteOverviewSection.tsx
      NewsShowcaseSection.tsx
      EventRequestSection.tsx
      AdminPortalSection.tsx
      DevelopmentProcessSection.tsx
      ProgressHighlightSection.tsx
      TechStackSection.tsx
      LiveDemoSection.tsx
      ImpactSection.tsx
      ChallengesSection.tsx
      FutureImprovementSection.tsx
      ClosingSection.tsx

    ui/
      Navbar.tsx
      Footer.tsx
      ScrollProgress.tsx
      SectionHeader.tsx
      Badge.tsx
      Button.tsx
      FeatureCard.tsx
      BrowserMockup.tsx
      ScreenshotShowcase.tsx
      SplineScenePlaceholder.tsx
      TechStackCard.tsx
      DemoStepCard.tsx
      FloatingCard.tsx

  data/
    features.ts
    techStack.ts
    demoFlow.ts
    personas.ts
    progress.ts
    sections.ts

  lib/
    utils.ts
```

Keep the code modular, readable, and maintainable.

---

## 5. Asset Locations

Use assets from:

```txt
public/assets/logos/
public/assets/patterns/
public/assets/screenshots/
```

Expected screenshots:

```txt
public/assets/screenshots/Landing-Page.png
public/assets/screenshots/user-News.png
public/assets/screenshots/user-Detail-news.png
public/assets/screenshots/admin-Preview-event.png
public/assets/screenshots/admin-Detail-Event.png
```

If an asset is missing, show a polished fallback UI instead of breaking the layout.

Use `next/image` for screenshots and logos whenever possible.

---

## 6. Branding Direction

Follow the SGE FILKOM UB visual identity.

The design should feel:

```txt
modern
clean
premium
professional
student-friendly
digital-product oriented
slightly futuristic
presentation-ready
```

Use colors from `DESIGN_SYSTEM.md`:

```txt
Charcoal: #393D3F
Deep Teal: #1F6778
Steady Teal: #3A8C9A
Aqua: #57D4DD
Yellow Accent: #F2B705
Cream: #FFEFD3
White: #FDFDFF
```

Use:
- teal and cream as main identity colors
- charcoal for premium dark sections
- yellow as accent / CTA
- aqua for glow and futuristic highlights

---

## 7. Typography

Use:

```txt
Space Grotesk for headings
Inter for body text
```

Typography scale from `DESIGN_SYSTEM.md`:

```txt
H1: 40px, medium, 120%
H2: 32px, medium, 120%
H3: 28px, medium, 120%
H4: 24px, medium, 120%
H5: 20px, medium, 120%
Body: 16px, regular, 150%
Small: 14px, regular, 150%
Extra Small: 12px, regular, 150%
```

For presentation view, make hero and major section titles larger responsively.

---

## 8. Page Sections

Build these sections in order:

1. **Hero**
   - Title: `Website BEM FILKOM UB Showcase`
   - Subtitle: `Digital Information Hub & Event Management Platform`
   - Identity: `Developed by IT Solutions Bureau — SGE/BEM FILKOM UB`
   - CTA buttons:
     - `Start Showcase`
     - `Launch Demo`
   - Use logo, pattern, and 3D-style placeholder.

2. **Background**
   - Explain why the website is needed.
   - Mention centralized information, event management, and communication needs.

3. **Problem**
   - Information scattered.
   - Event submission still manual.
   - Approval not transparent enough.
   - Publication needs better structure.
   - Students need simple and responsive access.

4. **Solution**
   - Website BEM FILKOM UB as an integrated digital platform.
   - Connect public information, event request, approval, news, and registration.

5. **Target Users / Persona**
   - Admin / Ministry & Bureau
   - Super Admin / IT Solutions
   - General User / Mahasiswa

6. **Feature Highlight**
   - Landing Page
   - Event Request Management
   - Preview Before Submit
   - Approval Workflow
   - Admin & Super Admin Dashboard
   - Open Recruitment / Registration
   - News Publication
   - Role-Based Access Control
   - Responsive Website

7. **Website Overview / Screenshot Showcase**
   - Use `Landing-Page.png`.
   - Display inside browser/laptop-style CSS mockup.

8. **News Publication Showcase**
   - Use `user-News.png`.
   - Use `user-Detail-news.png`.
   - Explain search, filter, category, detail news, share, and latest news.

9. **Event Request Showcase**
   - Use `admin-Preview-event.png`.
   - Explain event preview, division needs, countdown, timeline, and registration flow.

10. **Admin Portal Showcase**
    - Use `admin-Detail-Event.png`.
    - Explain participant management, summary cards, search, filter, export Excel, and action detail.

11. **Development Process**
    - Sprint-based development.
    - Milestone 1: UI/UX, dashboard, authentication, RBAC.
    - Milestone 2: Event request, approval flow, open recruitment, news management, API integration.

12. **Progress Highlight**
    - Completed features.
    - News features.
    - Event request features.
    - Dashboard and API progress.
    - Improvement items.

13. **Tech Stack**
    - Next.js
    - React
    - Tailwind CSS
    - Framer Motion
    - REST API
    - Database
    - GitHub
    - Deployment

14. **Live Demo Flow**
    - Follow `DEMO_FLOW.md`.
    - Include step-by-step flow:
      - Homepage
      - News page
      - Detail news
      - Event preview
      - Admin dashboard
      - Status/participant management
      - Closing impact

15. **Impact**
    - Centralized organization information.
    - More structured event request.
    - More transparent approval.
    - More professional publication.
    - Easier student access.
    - Portfolio for IT Solutions Bureau.

16. **Challenges**
    - Multi-role needs.
    - Complete but simple event request flow.
    - Frontend-backend integration.
    - Responsive UI.
    - Validation and content management.
    - Performance optimization.

17. **Future Improvement**
    - Notification system.
    - Advanced participant management.
    - Multi-level admin roles.
    - Analytics dashboard.
    - SEO optimization.
    - Image auto-compression.
    - Convert image uploads to WebP.
    - Skeleton loading.
    - BEM Apps integration.
    - Staging environment.

18. **Closing**
    - Final message:
      `Website BEM FILKOM UB bukan hanya sebuah media informasi, tetapi juga bentuk komitmen IT Solutions Bureau dalam membangun ekosistem digital organisasi yang lebih profesional, terstruktur, transparan, dan berkelanjutan.`

---

## 9. Design Requirements

The website must use:

```txt
Premium dark and light mixed theme
Teal, cream, charcoal, aqua, and yellow accent
Glassmorphism cards
Soft shadows and subtle glow
Pattern background overlays
Floating screenshot mockups
Smooth animation
Clear section hierarchy
Readable layout for projector
Responsive layout
```

Avoid:
- too much text in one section
- excessive animations
- low contrast text
- crowded layout
- random icon styles
- heavy 3D that slows down the page

---

## 10. Animation Requirements

Use Framer Motion for:

```txt
section reveal
card stagger animation
floating screenshot animation
hover animation
CTA button motion
scroll progress
```

Animation should be smooth and subtle.

Recommended:
- section reveal: opacity + y
- card hover: slight y movement and glow
- screenshot: slow floating motion
- background orbs: subtle movement

Do not use distracting or overly fast animation.

---

## 11. Spline / 3D Requirements

The final Spline scene is not required yet.

Follow `SPLINE_GUIDE.md`.

Current approach:
- create a CSS-based 3D placeholder
- use `Landing-Page.png`
- add floating browser mockup
- add feature cards around it
- add gradient glow
- use Framer Motion for floating animation

Create a component:

```txt
SplineScenePlaceholder.tsx
```

The component should:
- work without a real Spline URL
- look like a premium 3D product showcase
- have fallback for mobile
- be easy to replace with a real Spline URL later

If using `@splinetool/react-spline`, load it dynamically and disable SSR.

---

## 12. Icon Requirements

Do not require custom icon assets.

Use `lucide-react` only.

Recommended icon mapping:

```txt
Landing Page: LayoutDashboard
News Publication: Newspaper
Detail News: FileText
Event Request: CalendarPlus
Event Preview: Eye
Approval Workflow: BadgeCheck
Admin Dashboard: MonitorCog
Open Recruitment: UserPlus
Participant Management: Users
RBAC: ShieldCheck
Responsive Website: Smartphone
Tech Stack: Boxes
Impact: Sparkles
Future Improvement: Rocket
```

Do not mix multiple icon libraries.

---

## 13. Screenshot Mockup Requirements

Create screenshot display using CSS frames, not external mockup images.

Component:

```txt
BrowserMockup.tsx
```

Requirements:
- browser-style top bar
- rounded corners
- soft shadow
- optional 3D tilt
- responsive
- uses `next/image`
- supports caption/title/description
- fallback if image is missing

Use screenshots in feature sections and live demo backup.

---

## 14. Navigation Requirements

Create a sticky or floating navigation.

Recommended:
- logo on the left
- section links
- `Launch Demo` button
- glassmorphism effect
- responsive mobile menu if necessary

Add:
- scroll progress indicator
- smooth scroll to sections
- active section indicator if possible
- keyboard navigation with arrow keys if possible

If keyboard navigation is complicated, it can be added after the build passes.

---

## 15. Live Demo Requirements

Follow `DEMO_FLOW.md`.

The Live Demo section should include:
- demo objective
- demo steps
- buttons for live demo links
- backup screenshot mode
- presenter-friendly flow

Use data from `DEMO_LINKS.md`.

If demo links are empty or placeholders, show clear placeholder buttons but do not break the build.

---

## 16. Responsiveness Requirements

The website must work well on:

```txt
Laptop
Projector
Tablet
Mobile
```

Projector readability is important.

Rules:
- use large headings
- avoid tiny text
- keep section layout clean
- stack cards on mobile
- simplify 3D placeholder on mobile
- avoid heavy hover-only interactions for mobile

---

## 17. Performance Requirements

Keep performance stable.

Requirements:
- use `next/image`
- avoid unnecessary large animations
- keep CSS 3D lightweight
- avoid loading Spline if no scene URL
- avoid overusing blur effects
- avoid massive image sizes if possible
- lazy load non-critical images
- make build pass

---

## 18. Accessibility Requirements

Ensure:
- sufficient color contrast
- meaningful image alt text
- semantic section headings
- accessible buttons and links
- focus states for interactive elements
- readable text over patterned backgrounds

Avoid putting text directly over busy images without overlay.

---

## 19. Build Requirements

Before finishing, run:

```bash
npm run lint
npm run build
```

Fix all errors.

The final implementation must build successfully.

Do not leave TypeScript errors.

Do not leave missing import errors.

Do not use unavailable assets without fallback.

---

## 20. Coding Style

Use:
- TypeScript
- functional React components
- clean props
- reusable components
- data arrays for repeated content
- Tailwind utility classes
- `clsx` / `tailwind-merge` helper if needed

Avoid:
- huge single `page.tsx`
- hardcoded repeated cards everywhere
- unused imports
- unnecessary dependencies
- complex state unless needed

---

## 21. Recommended Data Files

Create these if useful:

```txt
src/data/features.ts
src/data/techStack.ts
src/data/demoFlow.ts
src/data/personas.ts
src/data/progress.ts
src/data/futureImprovements.ts
```

Example feature object:

```ts
export const features = [
  {
    title: "News Publication",
    description: "Publikasi informasi dan dokumentasi kegiatan BEM FILKOM UB secara terstruktur.",
    icon: "Newspaper",
    screenshot: "/assets/screenshots/user-News.png",
  },
];
```

If using lucide-react icons in data is difficult, map icons in the component.

---

## 22. Required Components

At minimum, create:

```txt
Navbar
Footer
ScrollProgress
SectionHeader
FeatureCard
BrowserMockup
ScreenshotShowcase
SplineScenePlaceholder
TechStackCard
DemoStepCard
```

Optional:
```txt
FloatingCard
AnimatedBackground
GradientOrb
SectionBadge
TimelineItem
MetricCard
```

---

## 23. Suggested Section IDs

Use these IDs for navigation:

```txt
hero
background
problem
solution
personas
features
overview
news
event-request
admin-portal
development
progress
tech-stack
live-demo
impact
challenges
future
closing
```

---

## 24. README Requirement

Create or update `README.md` with:

```txt
Project description
Tech stack
Folder structure
How to run locally
How to edit content
How to replace screenshots
How to replace logo/pattern assets
How to add Spline URL later
How to deploy to Vercel
Presentation checklist
```

---

## 25. Backup Presentation Mode

If time allows, add a backup route:

```txt
/backup
```

Purpose:
- simpler static version
- reduced animation
- easier to export/print as PDF
- useful if main interactive page has issue

If time is limited, skip this and focus on main page build quality.

---

## 26. Deployment Notes

The project should be deployable to Vercel.

No special server is required unless future backend/API integration is added.

Make sure:
- public asset paths work in production
- `npm run build` passes
- no local-only paths are used
- no secret keys are needed

---

## 27. Final Quality Checklist

Before final response, verify:

```txt
[ ] All main sections exist
[ ] Navbar works
[ ] Scroll progress works
[ ] Logo appears
[ ] Pattern background appears
[ ] Screenshots appear
[ ] Browser mockup looks polished
[ ] Hero looks premium
[ ] Live demo section is clear
[ ] Responsive layout works
[ ] Mobile layout does not break
[ ] Animation is smooth
[ ] Text is readable on projector
[ ] npm run lint passes
[ ] npm run build passes
[ ] README.md exists
```

---

## 28. Important Content Tone

Use a tone that is:
- professional
- confident
- student organization friendly
- not too stiff
- not too casual
- suitable for presentation with President University

Avoid:
- overclaiming
- saying unverified metrics as achieved
- saying features are live if only screenshots exist
- exposing internal/private dashboard data
- showing secrets or sensitive data

---

## 29. Sensitive Information

Do not include:
- passwords
- tokens
- API keys
- private credentials
- internal admin access URLs if not provided
- real participant data if not intended for public demo

If screenshots contain dummy data, use them as visual references only.

---

## 30. Final Product Principle

The final website should communicate:

> IT Solutions Bureau does not only build a website; it builds a structured digital ecosystem for information, event management, and organizational communication.

The audience should understand:
- what problem the project solves
- what features were built
- how the demo flows
- what impact it brings
- what will be improved next

The website should feel memorable, polished, and suitable for a Project Session showcase.
<!-- END:nextjs-agent-rules -->

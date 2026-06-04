# Design System — SGE FILKOM UB Showcase

Dokumen ini digunakan sebagai acuan visual untuk membangun website presentation interaktif **Website BEM FILKOM UB Showcase** menggunakan Next.js, Tailwind CSS, Framer Motion, dan placeholder 3D/Spline.

Design system ini disusun berdasarkan file Figma yang berisi color palette, color match, dan typography.

---

## 1. Brand Direction

### Brand Identity
Website presentation harus mengikuti identitas visual **SGE FILKOM UB — Bumi Cakrawala** dengan karakter:

- modern
- clean
- professional
- youthful
- digital/technology-oriented
- premium but still friendly
- suitable for project showcase and live demo presentation

### Visual Keywords

Gunakan arahan visual berikut:

```txt
Modern student government
Digital product showcase
Clean technology interface
Cream and teal identity
Subtle futuristic pattern
Glassmorphism
Floating cards
Smooth motion
Professional but energetic
```

---

## 2. Color Palette

### Primary Colors

| Token | Hex | Usage |
|---|---:|---|
| `charcoal` | `#393D3F` | Dark background, footer, dark text, high emphasis text |
| `deep-teal` | `#1F6778` | Primary brand color, buttons, active states, heading accent |
| `steady-teal` | `#3A8C9A` | Secondary teal, card accent, icon background, hover state |
| `aqua` | `#57D4DD` | Highlight, glow, gradient accent, decorative element |
| `sun-yellow` | `#F2B705` | CTA accent, highlight, small emphasis, important label |
| `cream` | `#FFEFD3` | Warm light background, card background, soft section surface |
| `white` | `#FDFDFF` | Main light background, text on dark backgrounds, clean section surface |

---

## 3. Color Usage Guide

### Light Theme Section

Use this combination for sections with warm and clean backgrounds:

```txt
Background: #FDFDFF or #FFEFD3
Primary Text: #393D3F
Heading Accent: #1F6778
Card Border: rgba(31, 103, 120, 0.16)
Primary Button: #1F6778
Primary Button Text: #FDFDFF
Accent Button / Highlight: #F2B705
```

Recommended sections:
- Background
- Problem
- Solution
- Feature overview
- Screenshot showcase
- Demo flow

### Dark Theme Section

Use this combination for premium and futuristic sections:

```txt
Background: #393D3F
Primary Text: #FDFDFF
Secondary Text: rgba(253, 253, 255, 0.72)
Accent: #57D4DD
CTA Accent: #F2B705
Card Background: rgba(253, 253, 255, 0.06)
Card Border: rgba(253, 253, 255, 0.12)
```

Recommended sections:
- Hero
- Tech stack
- Live demo
- Impact
- Closing

### Teal Theme Section

Use this for strong branded areas:

```txt
Background: #1F6778
Primary Text: #FDFDFF
Secondary Text: rgba(253, 253, 255, 0.76)
Accent: #F2B705
Soft Accent: #57D4DD
```

Recommended sections:
- Brand showcase
- Team identity
- CTA / launch demo
- Footer highlight

---

## 4. Tailwind Color Tokens

Add these colors to `tailwind.config.ts`.

```ts
theme: {
  extend: {
    colors: {
      sge: {
        charcoal: "#393D3F",
        "deep-teal": "#1F6778",
        "steady-teal": "#3A8C9A",
        aqua: "#57D4DD",
        yellow: "#F2B705",
        cream: "#FFEFD3",
        white: "#FDFDFF",
      },
    },
  },
}
```

Recommended CSS variables:

```css
:root {
  --color-charcoal: #393D3F;
  --color-deep-teal: #1F6778;
  --color-steady-teal: #3A8C9A;
  --color-aqua: #57D4DD;
  --color-yellow: #F2B705;
  --color-cream: #FFEFD3;
  --color-white: #FDFDFF;
}
```

---

## 5. Gradient Direction

Use gradients to make the website presentation feel more premium and suitable for a project showcase.

### Primary Gradient

```css
background: linear-gradient(135deg, #1F6778 0%, #3A8C9A 48%, #57D4DD 100%);
```

Usage:
- hero visual
- glowing orb
- highlight background
- active card accent

### Accent Gradient

```css
background: linear-gradient(135deg, #F2B705 0%, #FFEFD3 100%);
```

Usage:
- CTA button
- small decorative line
- highlighted badge
- metric emphasis

### Dark Futuristic Gradient

```css
background:
  radial-gradient(circle at top left, rgba(87, 212, 221, 0.22), transparent 36%),
  radial-gradient(circle at bottom right, rgba(242, 183, 5, 0.16), transparent 32%),
  #393D3F;
```

Usage:
- hero
- tech stack
- closing section

---

## 6. Typography

The Figma typography uses two primary typefaces:

1. **Inter**
2. **Space Grotesk**

### Recommended Usage

| Font | Usage |
|---|---|
| Inter | Body text, paragraph, caption, table, supporting information |
| Space Grotesk | Hero title, section heading, feature title, large display text |

### Font Import Recommendation

Use Google Fonts through Next.js font optimization.

```ts
import { Inter, Space_Grotesk } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
```

Recommended global usage:

```css
body {
  font-family: var(--font-inter), sans-serif;
}

.heading-font {
  font-family: var(--font-space-grotesk), sans-serif;
}
```

---

## 7. Typography Scale

Based on the Figma typography system.

### Heading Scale

| Token | Typeface | Weight | Size | Line Height | Letter Spacing | Usage |
|---|---|---:|---:|---:|---:|---|
| `h1` | Space Grotesk / Inter | Medium | 40px | 120% | 0 | Hero title, main section title |
| `h2` | Space Grotesk / Inter | Medium | 32px | 120% | 0 | Section heading |
| `h3` | Space Grotesk / Inter | Medium | 28px | 120% | 0 | Feature group heading |
| `h4` | Space Grotesk / Inter | Medium | 24px | 120% | 0 | Card heading, subsection title |
| `h5` | Space Grotesk / Inter | Medium | 20px | 120% | 0 | Small heading, feature title |

### Body Scale

| Token | Typeface | Weight | Size | Line Height | Letter Spacing | Usage |
|---|---|---:|---:|---:|---:|---|
| `body` | Inter | Regular | 16px | 150% | 0 | Paragraph, long content |
| `small` | Inter | Regular | 14px | 150% | 0 | Supporting text, metadata |
| `extra-small` | Inter | Regular | 12px | 150% | 0 | Caption, labels, badges |

---

## 8. Tailwind Typography Tokens

Add these font sizes to `tailwind.config.ts`.

```ts
theme: {
  extend: {
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
      display: ["var(--font-space-grotesk)", "sans-serif"],
    },
    fontSize: {
      "sge-h1": ["40px", { lineHeight: "120%", letterSpacing: "0em", fontWeight: "500" }],
      "sge-h2": ["32px", { lineHeight: "120%", letterSpacing: "0em", fontWeight: "500" }],
      "sge-h3": ["28px", { lineHeight: "120%", letterSpacing: "0em", fontWeight: "500" }],
      "sge-h4": ["24px", { lineHeight: "120%", letterSpacing: "0em", fontWeight: "500" }],
      "sge-h5": ["20px", { lineHeight: "120%", letterSpacing: "0em", fontWeight: "500" }],
      "sge-body": ["16px", { lineHeight: "150%", letterSpacing: "0em", fontWeight: "400" }],
      "sge-small": ["14px", { lineHeight: "150%", letterSpacing: "0em", fontWeight: "400" }],
      "sge-xs": ["12px", { lineHeight: "150%", letterSpacing: "0em", fontWeight: "400" }],
    },
  },
}
```

---

## 9. Responsive Typography Recommendation

For the website presentation, use responsive scaling so the design looks good on laptop and projector.

### Hero Title

```txt
Mobile: 40px
Tablet: 56px
Desktop: 72px
Large Projector: 80px
Line Height: 100% - 110%
Font: Space Grotesk
Weight: Medium/Semibold
```

### Section Title

```txt
Mobile: 32px
Tablet: 40px
Desktop: 56px
Line Height: 110% - 120%
Font: Space Grotesk
Weight: Medium
```

### Body

```txt
Mobile: 14px - 16px
Desktop: 16px - 18px
Line Height: 150%
Font: Inter
```

---

## 10. Layout & Spacing

Use consistent spacing based on an 8px grid.

| Token | Value | Usage |
|---|---:|---|
| `space-1` | 4px | Micro spacing |
| `space-2` | 8px | Small gap |
| `space-3` | 12px | Badge padding |
| `space-4` | 16px | Card inner gap |
| `space-6` | 24px | Component gap |
| `space-8` | 32px | Section content gap |
| `space-12` | 48px | Large gap |
| `space-16` | 64px | Section spacing |
| `space-24` | 96px | Large section padding |

### Section Padding

```txt
Mobile: 64px 20px
Tablet: 80px 32px
Desktop: 112px 64px
```

### Max Width

```txt
Content max width: 1200px
Wide showcase max width: 1400px
Text max width: 720px
```

---

## 11. Border Radius

Recommended radius system:

| Token | Value | Usage |
|---|---:|---|
| `sm` | 8px | Small buttons, badges |
| `md` | 12px | Form fields |
| `lg` | 16px | Cards |
| `xl` | 24px | Big cards, mockup frames |
| `2xl` | 32px | Hero visual container |
| `full` | 999px | Pills, rounded CTA |

Tailwind config:

```ts
borderRadius: {
  "sge-sm": "8px",
  "sge-md": "12px",
  "sge-lg": "16px",
  "sge-xl": "24px",
  "sge-2xl": "32px",
}
```

---

## 12. Shadow & Glow

Use soft shadow and subtle glow. Avoid harsh shadows.

### Card Shadow

```css
box-shadow: 0 18px 60px rgba(57, 61, 63, 0.12);
```

### Dark Section Glow

```css
box-shadow: 0 0 80px rgba(87, 212, 221, 0.18);
```

### Teal Card Glow

```css
box-shadow: 0 20px 80px rgba(31, 103, 120, 0.18);
```

### Yellow Accent Glow

```css
box-shadow: 0 14px 48px rgba(242, 183, 5, 0.24);
```

---

## 13. Component Style Guide

### Navbar

```txt
Background: rgba(253, 253, 255, 0.72) or rgba(57, 61, 63, 0.72)
Backdrop blur: 16px
Border: 1px solid rgba(31, 103, 120, 0.12)
Radius: 999px or 24px
Logo: SGE horizontal logo
Navigation text: Inter 14px / 16px
Active state: deep teal or yellow accent
```

### Button Primary

```txt
Background: #1F6778
Text: #FDFDFF
Hover: #3A8C9A
Radius: 999px
Padding: 14px 24px
Font: Inter Medium 14px/16px
```

### Button Accent

```txt
Background: #F2B705
Text: #393D3F
Hover: #FFEFD3
Radius: 999px
Padding: 14px 24px
Font: Inter Medium 14px/16px
```

### Button Ghost

```txt
Background: transparent
Border: 1px solid rgba(31, 103, 120, 0.28)
Text: #1F6778
Hover background: rgba(31, 103, 120, 0.08)
Radius: 999px
```

### Glass Card

```txt
Background: rgba(253, 253, 255, 0.08)
Border: 1px solid rgba(253, 253, 255, 0.16)
Backdrop blur: 20px
Radius: 24px
Shadow: subtle teal glow
```

### Light Card

```txt
Background: rgba(253, 253, 255, 0.88)
Border: 1px solid rgba(31, 103, 120, 0.12)
Radius: 24px
Shadow: soft card shadow
```

### Feature Card

```txt
Background: white/cream glass
Icon: lucide-react, deep teal or aqua
Title: Space Grotesk 20px
Body: Inter 14px/16px
Hover: slight translateY(-6px), subtle glow
```

### Badge

```txt
Background: rgba(87, 212, 221, 0.12)
Text: #1F6778
Border: 1px solid rgba(87, 212, 221, 0.24)
Radius: 999px
Font: Inter 12px/14px
```

---

## 14. Screenshot Mockup Style

Screenshots should be displayed in premium mockup frames using CSS, not separate mockup images.

### Browser Mockup

```txt
Frame background: rgba(253, 253, 255, 0.9)
Frame radius: 24px
Browser bar height: 44px
Browser dots: red/yellow/green or neutral teal/cream
Image radius: 0 0 20px 20px
Shadow: 0 24px 90px rgba(57, 61, 63, 0.18)
```

### 3D Floating Mockup

Use CSS perspective and Framer Motion.

```txt
transform: perspective(1200px) rotateX(6deg) rotateY(-8deg)
hover: rotateX(0deg) rotateY(0deg) scale(1.02)
animation: floating up/down 4s infinite ease-in-out
```

---

## 15. Background Pattern Usage

Use the provided SGE pattern assets carefully.

### Pattern Teal

```txt
Use on dark/teal sections.
Opacity: 8% - 16%
Position: top / bottom decorative overlay
Do not make it too dominant.
```

### Pattern Cream

```txt
Use on light sections.
Opacity: 16% - 28%
Position: repeated background or large decorative overlay
Keep text readability high.
```

Recommended CSS:

```css
.pattern-bg {
  background-image: url("/assets/patterns/pattern-cream.png");
  background-size: 720px auto;
  background-repeat: repeat;
  background-position: top center;
}
```

For dark section:

```css
.dark-pattern-bg {
  background-image: url("/assets/patterns/pattern-teal.png");
  background-size: 720px auto;
  background-repeat: repeat;
  background-position: top center;
  opacity: 0.12;
}
```

---

## 16. Animation Direction

Use smooth and subtle animations. The purpose is to make the presentation feel alive, not distracting.

### Recommended Framer Motion Patterns

#### Section Reveal

```txt
Initial: opacity 0, y 32
Animate: opacity 1, y 0
Duration: 0.6s
Ease: easeOut
```

#### Card Stagger

```txt
Container staggerChildren: 0.08
Card initial: opacity 0, y 20
Card animate: opacity 1, y 0
```

#### Floating Object

```txt
Animate y: [0, -12, 0]
Duration: 4s
Repeat: infinite
Ease: easeInOut
```

#### Hover Card

```txt
Hover: y -6, scale 1.02
Transition: spring, stiffness 240, damping 20
```

### Avoid

- overly fast animation
- too many bouncing objects
- distracting 3D movement
- excessive glow
- hard-to-read text over pattern

---

## 17. Icon Direction

No custom feature icons are provided.

Use `lucide-react` for consistent and modern icon style.

Recommended icon mapping:

| Feature | Icon |
|---|---|
| Landing Page | `LayoutDashboard` |
| News Publication | `Newspaper` |
| Detail News | `FileText` |
| Event Request | `CalendarPlus` |
| Event Preview | `Eye` |
| Approval Workflow | `BadgeCheck` |
| Admin Dashboard | `MonitorCog` |
| Open Recruitment | `UserPlus` |
| Participant Management | `Users` |
| Role-Based Access Control | `ShieldCheck` |
| Responsive Website | `Smartphone` |
| Tech Stack | `Boxes` |
| Impact | `Sparkles` |
| Future Improvement | `Rocket` |

---

## 18. Section-by-Section Visual Direction

### Hero Section

```txt
Theme: dark futuristic / teal premium
Background: charcoal + teal glow + pattern overlay
Main visual: 3D placeholder / floating screenshot mockup
Logo: SGE logo + IT Solutions identity
CTA: Start Showcase, Launch Demo
```

### Background & Problem Section

```txt
Theme: light cream
Background: #FDFDFF or #FFEFD3 with pattern
Visual: problem cards
Accent: deep teal and yellow
```

### Solution Section

```txt
Theme: teal/white combination
Visual: integrated platform diagram or floating cards
Accent: aqua glow
```

### Feature Highlight Section

```txt
Theme: clean light section
Visual: feature cards using lucide-react icons
Include screenshot mockup carousel/grid
```

### News Publication Section

```txt
Use screenshots:
- user-News.png
- user-Detail-news.png

Visual: browser mockup side by side or stacked
Accent: deep teal
```

### Event Request Section

```txt
Use screenshot:
- admin-Preview-event.png

Visual: large browser mockup
Accent: yellow CTA and teal badges
```

### Admin Portal Section

```txt
Use screenshot:
- admin-Detail-Event.png

Visual: dashboard showcase
Theme: dark card with light screenshot frame
```

### Tech Stack Section

```txt
Theme: dark futuristic
Visual: stack cards / orbit layout
Colors: charcoal, teal, aqua, yellow
```

### Live Demo Section

```txt
Theme: strong CTA
Visual: large launch button
Accent: yellow
Include demo steps and backup screenshot mode
```

### Impact Section

```txt
Theme: premium light/dark split
Visual: metric cards and benefit cards
Accent: teal and aqua
```

### Closing Section

```txt
Theme: dark branded
Visual: SGE and ITS logo, pattern, subtle glow
Message: digital ecosystem for a better organization
```

---

## 19. Accessibility & Readability

Make sure the presentation is readable on projector.

### Requirements

- Minimum body text size: 16px on desktop
- Avoid low contrast text on patterned background
- Use overlays when text appears over images
- Keep section content concise
- Do not put long paragraphs in small cards
- Use large headings and clear visual hierarchy
- Ensure buttons have accessible contrast

---

## 20. Implementation Notes for Codex

When implementing the website presentation:

1. Use this design system as the main visual reference.
2. Implement colors as Tailwind tokens.
3. Use Inter for body text.
4. Use Space Grotesk for headings and hero text.
5. Use SGE logo and pattern assets from `public/assets`.
6. Use `lucide-react` for icons.
7. Use Framer Motion for smooth animation.
8. Use CSS mockup frames for screenshots.
9. Keep the design clean, premium, and presentation-friendly.
10. Ensure `npm run build` passes.

---

## 21. Suggested File Usage

Recommended files in the project:

```txt
CONTENT.md
DESIGN_SYSTEM.md
ASSETS_GUIDE.md
SCREENSHOTS_GUIDE.md
DEMO_LINKS.md
DEMO_FLOW.md
SPLINE_GUIDE.md
```

Recommended source structure:

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
```

---

## 22. Final Design Principle

The final website should feel like:

> A premium digital product showcase for SGE FILKOM UB, built with a clean student organization identity, modern web interaction, and professional project presentation flow.

The goal is not only to show the website, but to make the audience feel that IT Solutions Bureau builds digital products with structure, identity, and impact.

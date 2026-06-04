# Assets Guide

Panduan ini menjelaskan asset yang digunakan untuk website presentation interaktif **Website BEM FILKOM UB Showcase**.

## Folder Structure

```txt
public/
  assets/
    logos/
    patterns/
    screenshots/
```

---

## Logos

### SGE Logo Horizontal Primary
File: `public/assets/logos/sge-logo-horizontal-primary.png`  
Usage: Logo utama untuk navbar, hero section, footer, dan section opening.

### SGE Logo Vertical Primary
File: `public/assets/logos/sge-logo-vertical-primary.png`  
Usage: Logo alternatif untuk layout compact, mobile section, atau decorative branding card.

### SGE Symbol Primary
File: `public/assets/logos/sge-logo-symbol-primary.svg`  
Usage: Symbol utama untuk decorative element, floating brand mark, favicon-style accent, dan section divider.

### SGE Symbol Primary Outline
File: `public/assets/logos/sge-logo-symbol-primary-outline.png`  
Usage: Symbol dengan outline/glow untuk hero decoration atau visual highlight.

### SGE Symbol Charcoal
File: `public/assets/logos/sge-logo-symbol-charcoal.png`  
Usage: Symbol untuk background terang atau light section.

### SGE Symbol Cream
File: `public/assets/logos/sge-logo-symbol-cream.png`  
Usage: Symbol untuk background gelap atau teal section.

### SGE Symbol Light
File: `public/assets/logos/sge-logo-symbol-light.png`  
Usage: Symbol putih untuk dark background.

### SGE Symbol Teal
File: `public/assets/logos/sge-logo-symbol-teal.png`  
Usage: Symbol teal untuk light background atau decorative accent.

### SGE Logotype Dark
File: `public/assets/logos/sge-logotype-dark.png`  
Usage: Text-only logo untuk light background.

### SGE Logotype Cream
File: `public/assets/logos/sge-logotype-cream.png`  
Usage: Text-only logo berwarna cream untuk dark/teal background.

### SGE Logotype Light
File: `public/assets/logos/sge-logotype-light.png`  
Usage: Text-only logo putih untuk dark background.

### SGE Logotype Teal
File: `public/assets/logos/sge-logotype-teal.png`  
Usage: Text-only logo teal untuk light background.

### IT Solutions Logo
File: `public/assets/logos/its-logo.png`  
Usage: Logo IT Solutions Bureau untuk section developer/team identity, closing section, dan footer.

---

## Patterns

### Teal Pattern
File: `public/assets/patterns/pattern-teal.png`  
Usage: Decorative background untuk hero section, dark futuristic section, atau overlay visual.

### Cream Pattern
File: `public/assets/patterns/pattern-cream.png`  
Usage: Decorative background untuk light section, screenshot showcase, dan content area.

Recommended usage:
- Gunakan pattern sebagai background dengan opacity rendah.
- Hindari pattern terlalu dominan agar teks tetap mudah dibaca.
- Cocok digabungkan dengan gradient overlay dan blur effect.

---

## Screenshots

### Landing Page
File: `public/assets/screenshots/Landing-Page.png`  
Usage: Hero section dan website overview.  
Description: Menampilkan homepage Website BEM FILKOM UB dengan navbar, hero SGE FILKOM UB 2026, latest events, dan latest news.

### User News Page
File: `public/assets/screenshots/user-news.png`  
Usage: News Publication feature section.  
Description: Menampilkan halaman daftar berita dengan search bar, kategori berita, highlight news, latest news, dan pagination.

### User Detail News
File: `public/assets/screenshots/user-detail-news.png`  
Usage: Detail News feature section.  
Description: Menampilkan halaman detail berita dengan judul, author, tanggal, kategori, gambar utama, isi artikel, share button, dan other news.

### Admin Preview Event
File: `public/assets/screenshots/admin-preview-event.png`  
Usage: Event Request Preview section.  
Description: Menampilkan halaman preview event sebelum submit, termasuk deskripsi event, division needs, countdown registration, timeline, dan registration flow.

### Admin Detail Event
File: `public/assets/screenshots/admin-detail-event.png`  
Usage: Admin Portal dan Participant Management section.  
Description: Menampilkan dashboard admin untuk event Open Recruitment Staff WE CUP 2026, summary cards, search participant, filter division, export Excel, status peserta, check, dan detail action.

---

## Icon Usage

Tidak ada custom icon fitur yang disediakan.  
Gunakan `lucide-react` untuk icon fitur, navigasi, tech stack, dan visual accents.

Recommended icon mapping:

| Feature | Recommended Lucide Icon |
|---|---|
| Landing Page | `LayoutDashboard` |
| News Publication | `Newspaper` |
| Detail News | `FileText` |
| Event Request | `CalendarPlus` |
| Preview Before Submit | `Eye` |
| Approval Workflow | `BadgeCheck` |
| Admin Dashboard | `MonitorCog` |
| Participant Management | `Users` |
| Open Recruitment | `UserPlus` |
| Role-Based Access Control | `ShieldCheck` |
| Responsive Website | `Smartphone` |
| Tech Stack | `Boxes` |
| Impact | `Sparkles` |
| Future Improvement | `Rocket` |

---

## Recommended Asset Usage in Website Presentation

### Hero Section
- Use `sge-logo-horizontal-primary.png` as main brand logo.
- Use `pattern-teal.png` or `pattern-cream.png` as decorative background.
- Use `Landing-Page.png` inside a browser/laptop-style mockup frame.

### Website Overview Section
- Use `Landing-Page.png` as main screenshot.
- Add floating labels for Home, Latest Events, and Latest News.

### News Publication Section
- Use `user-News.png` for news list and search/filter feature.
- Use `user-Detail-news.png` for detail news, tag, and share feature.

### Event Request Section
- Use `admin-Preview-event.png` for preview before submit.
- Highlight division needs, timeline, registration flow, and submit flow.

### Admin Portal Section
- Use `admin-Detail-Event.png` for admin portal, participant status, export, and detail action.

### Closing Section
- Use `its-logo.png` and `sge-logo-horizontal-primary.png` together.
- Add statement: “Built by IT Solutions Bureau — SGE FILKOM UB 2026.”

---

## Codex Prompt

```txt
I have added the essential branding assets into the repository:
- SGE logos in public/assets/logos
- IT Solutions logo in public/assets/logos
- Background patterns in public/assets/patterns
- Website screenshots in public/assets/screenshots

Please integrate these assets into the interactive website presentation.

Important:
- Do not require custom icon assets.
- Use lucide-react for all feature icons.
- Use SGE logo in navbar, hero, and footer.
- Use IT Solutions logo in team/developer identity and closing section.
- Use pattern assets as subtle decorative backgrounds.
- Use screenshots inside browser/laptop-style mockup frames created with CSS.
- Add subtle 3D tilt, hover animation, glow, and glassmorphism effect.
- Use next/image for image optimization.
- Keep the design consistent with SGE FILKOM UB visual identity.
- Make the website look premium, modern, and suitable for a Project Session showcase.
- Ensure the layout is responsive and suitable for projector presentation.
```

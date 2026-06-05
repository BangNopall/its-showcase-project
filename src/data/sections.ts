export const sections = [
  { id: "it-mengenal", label: "IT Solutions Bureau" },
  { id: "it-proker", label: "Program Kerja IT" },
  { id: "it-workflow", label: "Workflow Pengembangan" },
  { id: "hero", label: "Website Showcase" },
  { id: "background", label: "Latar Belakang" },
  { id: "problem", label: "Masalah Utama" },
  { id: "solution", label: "Solusi Platform" },
  { id: "personas", label: "Target Pengguna" },
  { id: "features", label: "Fitur Produk" },
  { id: "overview", label: "Homepage Overview" },
  { id: "news", label: "News Publication" },
  { id: "event-request", label: "Event Request" },
  { id: "admin-portal", label: "Admin Portal" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "live-demo", label: "Live Demo Flow" },
  { id: "impact", label: "Impact" },
  { id: "closing", label: "Closing Statement" },
] as const;

export const sectionLabels = Object.fromEntries(
  sections.map((section) => [section.id, section.label]),
) as Record<string, string>;

export const allSectionIds = sections.map((section) => section.id) as string[];

export const sectionNav = [
  { id: "it-mengenal", label: "IT Solutions" },
  { id: "hero", label: "Showcase" },
  { id: "problem", label: "Problem" },
  { id: "features", label: "Fitur" },
  { id: "overview", label: "Homepage" },
  { id: "live-demo", label: "Demo" },
  { id: "impact", label: "Impact" },
];

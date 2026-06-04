import {
  BadgeCheck,
  CalendarPlus,
  Eye,
  FileText,
  LayoutDashboard,
  MonitorCog,
  Newspaper,
  ShieldCheck,
  Smartphone,
  UserPlus,
} from "lucide-react";

export const features = [
  {
    title: "Landing Page",
    description:
      "Pintu masuk utama untuk identitas BEM FILKOM UB, highlight informasi, latest events, dan latest news.",
    icon: LayoutDashboard,
  },
  {
    title: "Event Request Management",
    description:
      "Structured submission form untuk Ministry/Bureau agar pengajuan event lebih rapi dan mudah ditelusuri.",
    icon: CalendarPlus,
  },
  {
    title: "Preview Before Submit",
    description:
      "Admin dapat memeriksa tampilan event sebelum submit untuk mengurangi kesalahan input dan revisi.",
    icon: Eye,
  },
  {
    title: "Approval Workflow",
    description:
      "Review event dengan status Approved, Rejected, atau Need Revision disertai feedback yang jelas.",
    icon: BadgeCheck,
  },
  {
    title: "Admin Dashboard",
    description:
      "Ruang kerja untuk mengelola request, status pengajuan, monitoring, dan feedback event.",
    icon: MonitorCog,
  },
  {
    title: "Open Recruitment",
    description:
      "Mahasiswa dapat mengakses detail kegiatan dan melakukan pendaftaran melalui flow yang responsif.",
    icon: UserPlus,
  },
  {
    title: "News Publication",
    description:
      "Publikasi berita dengan list, detail, search, filter, tag, share, pinned, draft, schedule, dan pagination.",
    icon: Newspaper,
  },
  {
    title: "Role-Based Access Control",
    description:
      "Hak akses Super Admin, Admin, dan General User dibedakan agar fitur dan data tetap sesuai peran.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive Website",
    description:
      "Tampilan dirancang nyaman untuk desktop, projector, tablet, dan mobile.",
    icon: Smartphone,
  },
  {
    title: "Detail News",
    description:
      "Halaman artikel lengkap dengan metadata, gambar utama, konten, share button, dan rekomendasi berita lain.",
    icon: FileText,
  },
];

export const problemPoints = [
  "Informasi organisasi belum terpusat.",
  "Pengajuan event masih manual.",
  "Approval event membutuhkan alur yang lebih jelas.",
  "Status pengajuan belum transparan.",
  "Publikasi berita dan event perlu sistem yang lebih mudah dikelola.",
  "Mahasiswa membutuhkan akses informasi yang cepat dan responsif.",
];

export const impactPoints = [
  "Informasi organisasi lebih terpusat.",
  "Pengajuan event lebih terstruktur.",
  "Approval event lebih transparan.",
  "Publikasi berita dan event lebih profesional.",
  "Mahasiswa lebih mudah mengakses informasi.",
  "Website menjadi portofolio nyata kemampuan teknis internal organisasi.",
];

export const challengePoints = [
  "Menyesuaikan kebutuhan berbagai role.",
  "Membuat alur event request yang lengkap tetapi tetap mudah digunakan.",
  "Mengintegrasikan frontend dan backend.",
  "Menjaga responsivitas tampilan.",
  "Menjaga validasi data dan content management.",
  "Mengoptimalkan performa website.",
];

export const futureImprovements = [
  "Notification system via email or WhatsApp.",
  "Advanced participant management.",
  "Multi-level admin roles.",
  "Analytics dashboard.",
  "SEO optimization.",
  "Image auto-compression.",
  "Convert image uploads to WebP.",
  "Skeleton loading.",
  "BEM Apps integration.",
  "Staging environment.",
];

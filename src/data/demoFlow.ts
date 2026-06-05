import {
  BarChart3,
  CalendarCheck,
  ExternalLink,
  FileText,
  Home,
  Newspaper,
  Search,
  ShieldCheck,
} from "lucide-react";

export const demoLinks = [
  {
    label: "Website BEM FILKOM UB",
    url: "https://bemfilkom.ub.ac.id",
    note: "Homepage, news, detail news, and public features.",
  },
  {
    label: "Event",
    url: "https://bemfilkom.ub.ac.id/event",
    note: "Use only when safe dummy data is available.",
  },
  {
    label: "News",
    url: "https://bemfilkom.ub.ac.id/news",
    note: "Use only when safe dummy data is available.",
  },
];

export const demoFlow = [
  {
    title: "Homepage",
    description:
      "Mulai dari halaman utama yang menampilkan profil organisasi, event terbaru, berita terkini, dan navigasi utama menuju seluruh fitur website.",
    icon: Home,
  },
  {
    title: "Management Event",
    description:
      "Menampilkan proses pengelolaan event mulai dari pembuatan, pengaturan informasi kegiatan, hingga pemantauan status event dalam satu dashboard terpusat.",
    icon: CalendarCheck,
  },
  {
    title: "Management News",
    description:
      "Menampilkan proses pengelolaan berita mulai dari pembuatan, penyuntingan, hingga publikasi informasi dalam satu dashboard terpusat.",
    icon: FileText,
  },
  {
    title: "Open Recruitment",
    description:
      "Menampilkan fitur open recruitment yang memungkinkan pengguna melihat informasi rekrutmen, persyaratan, jadwal, dan proses pendaftaran secara terpusat.",
    icon: Search,
  },
  {
    title: "Super Admin Dashboard",
    description:
      "Menampilkan dashboard super admin untuk mengelola pengguna, berita, event, open recruitment, serta pengaturan sistem dan hak akses.",
    icon: BarChart3,
  },
  // {
  //   title: "Status Management",
  //   description:
  //     "Explain approval workflow, feedback, participant status, and transparent tracking.",
  //   icon: ShieldCheck,
  // },
  // {
  //   title: "Closing Impact",
  //   description:
  //     "Return to the value: centralization, transparent workflow, professional publication, and sustainability.",
  //   icon: Search,
  // },
];

export const liveDemoCta = {
  label: "Launch Demo",
  url: "https://bemfilkom.ub.ac.id",
  icon: ExternalLink,
};

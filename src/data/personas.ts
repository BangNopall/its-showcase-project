import { Crown, Settings2, UsersRound } from "lucide-react";

export const personas = [
  {
    role: "Admin / Ministry & Bureau",
    goal: "Mengajukan event dengan cepat dan jelas.",
    pain: "Proses manual ribet dan revisi bolak-balik.",
    needs: "Form submission, preview, tracking status, dan feedback.",
    icon: UsersRound,
  },
  {
    role: "Super Admin / IT Solutions",
    goal: "Review event dengan efisien.",
    pain: "Banyak request dan sulit tracking status.",
    needs: "Dashboard management, approval workflow, dan monitoring.",
    icon: Settings2,
  },
  {
    role: "General User / Mahasiswa",
    goal: "Mencari informasi event, berita, dan daftar open recruitment.",
    pain: "Informasi tersebar dan sulit diakses.",
    needs: "Website yang cepat, simpel, dan mobile-friendly.",
    icon: Crown,
  },
];

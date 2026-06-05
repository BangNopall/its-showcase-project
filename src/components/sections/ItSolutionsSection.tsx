"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Laptop,
  Palette,
  Cpu,
  Code,
  BarChart3,
  Lightbulb,
  Users,
  Target,
  Globe,
  Smartphone,
  Ticket,
  Handshake,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Award,
  ClipboardList,
  Layout,
  Send,
  Wrench,
  Activity,
  Check,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

// Custom Counter component to animate statistics and key results
function Counter({
  value,
  suffix = "",
  duration = 1.5,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    if (end <= 0) {
      return;
    }
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 16);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-heading font-bold">
      {count}
      {suffix}
    </span>
  );
}

// ==========================================
// DATA DEFINITIONS (Shared across sections)
// ==========================================

const divisionCards = [
  {
    icon: Palette,
    name: "UI/UX Designer",
    desc: "Merancang desain antarmuka pengguna yang intuitif, estetis, dan user-friendly.",
  },
  {
    icon: Cpu,
    name: "Backend Developer",
    desc: "Mengembangkan arsitektur server, keamanan basis data, dan API yang stabil.",
  },
  {
    icon: Code,
    name: "Frontend Developer",
    desc: "Mengimplementasikan hasil desain menjadi antarmuka web interaktif yang dinamis.",
  },
  {
    icon: BarChart3,
    name: "Project Manager",
    desc: "Mengelola timeline, alokasi tugas, koordinasi tim, dan jaminan kualitas rilis.",
  },
];

const stats = [
  { value: 9, label: "Staff Aktif", icon: Users, color: "text-aqua" },
  { value: 2, label: "Backend Dev", icon: Cpu, color: "text-yellow" },
  { value: 3, label: "Frontend Dev", icon: Code, color: "text-aqua" },
  { value: 2, label: "UI/UX Designer", icon: Palette, color: "text-yellow" },
  { value: 2, label: "Project Manager", icon: BarChart3, color: "text-aqua" },
];

const keyResults = [
  {
    value: 90,
    suffix: "%",
    label: "Project Selesai Tepat Waktu",
    desc: "Komitmen ketat pada timeline pengembangan demi keandalan organisasi.",
  },
  {
    value: 2,
    suffix: "+",
    label: "Solusi Digital Baru",
    desc: "Produk aplikasi pendukung yang dikembangkan khusus bagi mahasiswa.",
  },
  {
    value: 1,
    suffix: "",
    label: "Proyek Eksternal Selesai",
    desc: "Kemitraan strategis pembuatan website yang sukses dituntaskan.",
  },
];

const programs = [
  {
    id: "maintenance",
    title: "Website BEM",
    icon: Globe,
    desc: "Mengembangkan dan memelihara website utama SGE FILKOM sebagai pusat informasi organisasi.",
    features: [
      "Homepage Preview",
      "News Management",
      "Event Management",
      "Organization Profile",
    ],
    goals: [
      "Menyampaikan informasi SGE FILKOM secara resmi",
      "Menyediakan informasi kegiatan terkini",
      "Menjadi pusat layanan informasi terpadu mahasiswa",
    ],
  },
  {
    id: "bem-apps",
    title: "BEM APPS",
    icon: Smartphone,
    desc: "Ekosistem aplikasi digital SGE FILKOM untuk mendukung pelayanan mahasiswa secara terintegrasi.",
    apps: [
      { name: "SIPERAT", detail: "Sistem Pengajuan Surat Online" },
      {
        name: "SJW FILKOM",
        detail: "Platform konseling serta pelaporan kekerasan seksual",
      },
      { name: "ADVOSIAGA", detail: "Portal Layanan Advokasi Mahasiswa" },
      { name: "MOTION", detail: "Sistem Monitoring & Evaluasi Anggota" },
      { name: "FILAFEST", detail: "Platform Voting & Awarding" },
      { name: "MAWAPRES", detail: "Sistem Pendaftaran & Penilaian Pilmapres" },
    ],
    flow: [
      { label: "User", icon: Users },
      { label: "Application", icon: Smartphone },
      { label: "Process", icon: Cpu },
      { label: "Result", icon: Award },
    ],
  },
  {
    id: "event-request",
    title: "Web Event Request",
    icon: Ticket,
    desc: "Layanan pembuatan website event dan open recruitment untuk seluruh kementerian dan biro BEM.",
    workflow: [
      "Request Submission",
      "Admin Review",
      "Pengecekan SOP",
      "Review & Feedback",
      "Approval",
      "Open Recuitment",
    ],
    examples: [
      "Website Open Recruitment",
      "Website Event Registration",
      "Landing Page Event",
    ],
  },
  {
    id: "partnership",
    title: "IT Partnership",
    icon: Handshake,
    desc: "Program kerja sama pengembangan website dengan lembaga internal maupun eksternal kampus.",
    benefits: ["Website Development", "Custom System Development"],
    goals: [
      "Menjalin kemitraan teknologi strategis",
      "Membantu kebutuhan IT institusi mitra",
      "Menghimpun dana mandiri organisasi",
    ],
  },
];

const waterfallSteps = [
  {
    step: "01",
    title: "Requirement Analysis",
    icon: ClipboardList,
    desc: "Mengumpulkan dan menganalisis seluruh kebutuhan teknis dan fungsional proyek.",
  },
  {
    step: "02",
    title: "System Design",
    icon: Layout,
    desc: "Merancang arsitektur sistem, skema basis data, workflow sistem, dan visual UI/UX.",
  },
  {
    step: "03",
    title: "Development",
    icon: Code,
    desc: "Proses pengkodean frontend dan backend secara modular sesuai dengan hasil rancangan.",
  },
  {
    step: "04",
    title: "Testing",
    icon: CheckCircle2,
    desc: "Pengujian kualitas aplikasi secara menyeluruh untuk memastikan bebas dari bug.",
  },
  {
    step: "05",
    title: "Deployment",
    icon: Send,
    desc: "Peluncuran produk digital ke server staging dan server produksi agar dapat diakses publik.",
  },
  {
    step: "06",
    title: "Maintenance",
    icon: Wrench,
    desc: "Pemeliharaan berkelanjutan, pemantauan performa server, dan perbaikan berkala.",
  },
];

// ==========================================
// 1. MENGENAL IT SOLUTION SECTION
// ==========================================
export function ItMengenalSection() {
  return (
    <>
      <AnimatedSection
        id="it-mengenal"
        className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 text-[#FDFDFF] md:px-8 md:pb-24 md:pt-36 scroll-mt-20 flex flex-col justify-center section-bg-1"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(31,103,120,0.08),transparent_34%),radial-gradient(circle_at_88%_78%,rgba(242,183,5,0.06),transparent_32%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-12 [background-image:url('/assets/patterns/pattern-teal.png')] [background-size:520px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="grid gap-12 items-center lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left Column: Branding, Title, Description, Stats */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="font-heading text-5xl font-medium leading-[1.04] md:text-7xl">
                  IT Solutions Bureau
                </h2>
                <p className="text-xl leading-9 text-white/76 md:text-2xl mt-4 max-w-2xl">
                  Pawang Teknologi Informasi SGE FILKOM UB
                </p>
                <p className="text-sm md:text-base leading-8 text-white/60 max-w-xl">
                  Biro teknologi yang bertanggung jawab penuh dalam menyediakan
                  solusi digital, ekosistem aplikasi terintegrasi, dan
                  memelihara seluruh infrastruktur teknologi informasi untuk
                  mendukung kelancaran program kerja BEM FILKOM.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="rounded-xl card-surface card-dark p-3 flex flex-col justify-between shadow-md backdrop-blur-md transition-all duration-300 border-white/12 bg-white/6"
                    >
                      <div
                        className={cn(
                          "mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10",
                          stat.color === "text-yellow"
                            ? "text-[var(--accent-500)]"
                            : "text-[var(--primary-200)]",
                        )}
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="font-heading text-2xl font-bold text-[#FDFDFF]">
                          <Counter value={stat.value} />
                        </div>
                        <p className="text-[10px] text-white/64 font-medium leading-tight mt-0.5">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column: Floating Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="flex items-center justify-center relative"
            >
              {/* Glow effect background */}
              <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-[rgba(var(--primary-900-rgb),0.06)] rounded-full blur-[80px] pointer-events-none animate-pulse" />

              {/* Glassmorphic border glow ring */}
              <div className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full border border-[rgba(var(--primary-900-rgb),0.14)] animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-dashed border-[rgba(var(--primary-900-rgb),0.14)] animate-[spin_60s_linear_infinite_reverse]" />

              {/* Floating Image Wrapper */}
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4.5,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex items-center justify-center p-8 md:p-12 rounded-[36px] card-surface card-dark backdrop-blur-md shadow-lg border-white/12 bg-white/6"
              >
                <Image
                  src="/assets/logos/its-logo.png"
                  alt="IT Solutions Bureau Logo"
                  width={260}
                  height={260}
                  className="h-44 w-44 md:h-60 md:w-60 object-contain filter drop-shadow-[0_0_20px_rgba(87,212,221,0.35)]"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom: Specialized Specialization Cards (6 Bidang Keahlian) */}
          <div className="mt-24 border-t border-white/12 pt-16">
            <div className="mb-12 text-center space-y-2">
              <span className="text-xs font-bold tracking-wider text-[var(--primary-200)] uppercase">
                Technical Specialties
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-medium text-[#FDFDFF]">
                4 Bidang Keahlian Biro
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {divisionCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.name}
                    className="group rounded-2xl card-surface card-dark p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 border-white/10 bg-white/5 hover:border-[rgba(var(--primary-900-rgb),0.22)]"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[var(--primary-200)] transition-colors duration-300 group-hover:bg-white/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="font-heading text-base font-semibold text-[#FDFDFF] group-hover:text-[var(--primary-200)] transition-colors">
                          {card.name}
                        </h4>
                        <p className="text-xs leading-5 text-white/64">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

// ==========================================
// 3. PROGRAM KERJA (PROKER) SECTION
// ==========================================
export function ItProkerSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Handle program slider scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  const scrollSlider = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const isMobile = window.innerWidth < 768;
      // Scroll by 2 cards at once on desktop (container width), 1 card on mobile
      const amount = isMobile ? clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - amount : scrollLeft + amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatedSection
      id="it-proker"
      className="bg-[var(--bg-surface)] text-[var(--text-default)] section-bg-3"
    >
      <div className="absolute inset-0 opacity-8 [background-image:url('/assets/patterns/pattern-teal.png')] [background-size:500px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(31,103,120,0.06),transparent_40%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-wider text-[var(--primary-900)] uppercase">
              03 // Rencana Kerja Strategis
            </span>
            <h3 className="font-heading text-3xl font-medium text-[var(--text-default)]">
              Program Kerja IT Solutions
            </h3>
            <p className="text-sm text-[var(--text-muted)] max-w-xl">
              Daftar program kerja taktis untuk menghadirkan ekosistem layanan
              digital SGE FILKOM UB secara andal dan komprehensif.
            </p>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex gap-2 self-start md:self-auto">
            <button
              onClick={() => scrollSlider("left")}
              disabled={!canScrollLeft}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border bg-[var(--bg-surface)] text-[var(--text-default)] transition-all border-[rgba(var(--primary-900-rgb),0.16)]",
                canScrollLeft
                  ? "hover:bg-[var(--bg-card)] active:scale-95"
                  : "opacity-40 cursor-not-allowed",
              )}
              aria-label="Previous programs"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollSlider("right")}
              disabled={!canScrollRight}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border bg-[var(--bg-surface)] text-[var(--text-default)] transition-all border-[rgba(var(--primary-900-rgb),0.16)]",
                canScrollRight
                  ? "hover:bg-[var(--bg-card)] active:scale-95"
                  : "opacity-40 cursor-not-allowed",
              )}
              aria-label="Next programs"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container (Displays exactly 2 cards on desktop/tablet) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-none pointer-events-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {programs.map((prog) => {
            const ProgramIcon = prog.icon;
            return (
              <div
                key={prog.id}
                className="w-full md:w-[calc(50%-12px)] shrink-0 snap-start rounded-[28px] card-surface p-6 md:p-8 flex flex-col justify-between shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[rgba(var(--primary-900-rgb),0.24)] border-[var(--card-border)] bg-[var(--bg-card)]"
              >
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(var(--primary-900-rgb),0.06)] text-[var(--primary-900)]">
                      <ProgramIcon className="h-6 w-6" />
                    </span>
                    <h4 className="font-heading text-xl font-semibold text-[var(--text-default)]">
                      {prog.title}
                    </h4>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {prog.desc}
                  </p>
                </div>

                {/* Middle Dynamic Showcase Content */}
                <div className="my-6 border-t border-b border-[var(--card-border)] py-5 space-y-4 flex-1">
                  {/* Program 1 Details */}
                  {prog.id === "maintenance" && prog.features && prog.goals && (
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-[var(--accent-500)] block mb-2 uppercase">
                          Fitur Visual
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {prog.features.map((f) => (
                            <span
                              key={f}
                              className="text-xs bg-[var(--bg-card)] border-[var(--card-border)] px-3 py-1.5 rounded-full font-medium text-[var(--text-muted)]"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[var(--primary-900)] block mb-2 uppercase">
                          Tujuan
                        </span>
                        <ul className="grid gap-2">
                          {prog.goals.map((g) => (
                            <li
                              key={g}
                              className="flex gap-2 text-xs text-[var(--text-muted)] leading-normal items-start"
                            >
                              <Check className="h-4 w-4 text-[var(--primary-900)] shrink-0 mt-0.5" />
                              <span>{g}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Program 2 Details (BEM APPS Showcase & Flow) */}
                  {prog.id === "bem-apps" && prog.apps && prog.flow && (
                    <div className="space-y-5">
                      <div>
                        <span className="text-xs font-bold text-[var(--accent-500)] block mb-2 uppercase">
                          Showcase Ekosistem
                        </span>
                        <div className="grid grid-cols-2 gap-2">
                          {prog.apps.map((app) => (
                            <div
                              key={app.name}
                              className="p-2.5 rounded-xl border-[rgba(var(--primary-900-rgb),0.10)] bg-[var(--bg-card)]"
                            >
                              <span className="block text-xs font-bold text-[var(--primary-900)]">
                                {app.name}
                              </span>
                              <span className="block text-[10px] text-[var(--text-muted)] mt-0.5 leading-tight">
                                {app.detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Animated flow visual: User -> App -> Process -> Result */}
                      <div>
                        <span className="text-xs font-bold text-[var(--primary-900)] block mb-3 uppercase">
                          Aliran Data Aplikasi
                        </span>
                        <div className="relative flex justify-between items-center rounded-2xl bg-[var(--bg-card)] border-[var(--card-border)] p-3">
                          {prog.flow.map((step) => {
                            const FlowIcon = step.icon;
                            return (
                              <div
                                key={step.label}
                                className="flex flex-col items-center z-10"
                              >
                                <div className="h-9 w-9 rounded-xl bg-[var(--bg-surface)] border-[var(--card-border)] flex items-center justify-center text-[var(--primary-900)] shadow-sm">
                                  <FlowIcon className="h-4.5 w-4.5" />
                                </div>
                                <span className="text-[10px] text-[var(--text-muted)] mt-1.5 font-medium">
                                  {step.label}
                                </span>
                              </div>
                            );
                          })}
                          {/* Horizontal pulsing flow connector line */}
                          <div className="absolute top-[31px] left-[15%] right-[15%] h-[2px] bg-[rgba(0,0,0,0.04)] z-0">
                            <motion.div
                              className="h-full rounded-full shadow-[0_0_10px_rgba(87,212,221,0.12)]"
                              initial={{ left: "0%", width: "0%" }}
                              animate={{
                                left: ["0%", "0%", "40%", "100%"],
                                width: ["0%", "40%", "40%", "0%"],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              style={{
                                position: "absolute",
                                background:
                                  "linear-gradient(90deg,var(--primary-200),var(--primary-500))",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Program 3 Details (Web Event Request Workflow) */}
                  {prog.id === "event-request" &&
                    prog.workflow &&
                    prog.examples && (
                      <div className="space-y-4">
                        <div>
                          <span className="text-xs font-bold text-[var(--accent-500)] block mb-2 uppercase">
                            Workflow Pembuatan
                          </span>
                          <div className="grid grid-cols-2 gap-2">
                            {prog.workflow.map((w, idx) => (
                              <div
                                key={w}
                                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border-[var(--card-border)] bg-[var(--bg-card)]"
                              >
                                <span className="text-[10px] font-bold h-4 w-4 bg-[rgba(var(--primary-900-rgb),0.06)] text-[var(--primary-900)] rounded-full flex items-center justify-center shrink-0">
                                  {idx + 1}
                                </span>
                                <span className="text-[11px] font-medium text-[var(--text-muted)]">
                                  {w}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[var(--primary-900)] block mb-2 uppercase">
                            Contoh Layanan
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {prog.examples.map((ex) => (
                              <span
                                key={ex}
                                className="text-[11px] bg-[rgba(var(--primary-900-rgb),0.06)] border-[rgba(var(--primary-900-rgb),0.12)] px-2.5 py-1 rounded-full text-[var(--text-muted)]"
                              >
                                {ex}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  {/* Program 4 Details (IT Partnership) */}
                  {prog.id === "partnership" && prog.benefits && prog.goals && (
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-[var(--accent-500)] block mb-2 uppercase">
                          Layanan Kemitraan
                        </span>
                        <div className="grid grid-cols-2 gap-2">
                          {prog.benefits.map((b) => (
                            <div
                              key={b}
                              className="flex items-center gap-2 px-2.5 py-2 rounded-xl border-[var(--card-border)] bg-[var(--bg-card)]"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary-900)]" />
                              <span className="text-[11px] font-bold text-[var(--text-muted)] leading-tight">
                                {b}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[var(--primary-900)] block mb-2 uppercase">
                          Tujuan Program
                        </span>
                        <ul className="grid gap-2">
                          {prog.goals.map((g) => (
                            <li
                              key={g}
                              className="flex gap-2 text-xs text-[var(--text-muted)] leading-normal items-start"
                            >
                              <Check className="h-4 w-4 text-[var(--primary-900)] shrink-0 mt-0.5" />
                              <span>{g}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer / Status indicator */}
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-[var(--card-border)]">
                  <span className="text-[11px] text-[var(--text-muted)] font-medium">
                    SGE FILKOM UB
                  </span>
                  <span className="text-[11px] text-[var(--primary-900)] font-semibold tracking-wide uppercase">
                    Active Program
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

// ==========================================
// 4. WORKFLOW PENGEMBANGAN SECTION
// ==========================================
export function ItWorkflowSection() {
  return (
    <AnimatedSection
      id="it-workflow"
      className="bg-[var(--bg-surface)] text-[var(--text-default)] section-bg-4"
    >
      <div className="absolute inset-0 opacity-10 [background-image:url('/assets/patterns/pattern-teal.png')] [background-size:500px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(87,212,221,0.12),transparent_40%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Workflow"
          title="Workflow Pengembangan"
          description="Metodologi pengembangan aplikasi website yang diterapkan oleh IT Solutions SGE FILKOM UB."
          theme="light"
          align="center"
        />

        <div className="mt-16 space-y-12">
          {/* Cascading Waterfall Process Layout */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 relative">
            {waterfallSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative rounded-2xl border border-[var(--card-border)] bg-[var(--bg-surface)] p-5 flex flex-col justify-between shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[rgba(var(--primary-900-rgb),0.20)]"
                >
                  {/* Header */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-heading text-xs font-bold text-[var(--primary-900)]">
                        {step.step}
                      </span>
                      <div className="h-8 w-8 rounded-lg bg-[rgba(var(--primary-900-rgb),0.06)] text-[var(--primary-900)] flex items-center justify-center">
                        <StepIcon className="h-4.5 w-4.5" />
                      </div>
                    </div>
                    <h4 className="font-heading text-base font-semibold text-[var(--text-default)] group-hover:text-[var(--primary-900)] transition-colors leading-tight mb-2">
                      {step.title}
                    </h4>
                    <p className="text-[11px] leading-5 text-[var(--text-muted)]">
                      {step.desc}
                    </p>
                  </div>

                  {/* Connective arrows for desktop layout */}
                  {idx < 5 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 items-center justify-center text-[rgba(var(--primary-900-rgb),0.30)]">
                      <ArrowRight className="h-4.5 w-4.5 group-hover:text-[var(--primary-900)] group-hover:translate-x-0.5 transition-all" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Method Disclaimer callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[rgba(var(--primary-900-rgb),0.12)] bg-[rgba(var(--primary-900-rgb),0.06)] p-6 backdrop-blur-md"
          >
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-2xl bg-[rgba(var(--primary-900-rgb),0.06)] flex items-center justify-center text-[var(--primary-900)] shrink-0">
                <Activity className="h-5 w-5 animate-pulse" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-heading text-base font-medium text-[var(--text-default)]">
                  Waterfall Development Methodology
                </h4>
                <p className="text-xs leading-6 text-[var(--text-muted)]">
                  Seluruh proyek IT Solutions dikembangkan menggunakan metode
                  **Waterfall Development**. Metodologi terstruktur ini
                  memastikan analisis kebutuhan terdokumentasi lengkap,
                  arsitektur sistem matang sebelum kode ditulis, dan jaminan
                  testing berkualitas tinggi guna memberikan stabilitas
                  operasional pada seluruh ekosistem digital SGE FILKOM.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// ==========================================
// COMPOSITE WRAPPER (Backward Compatibility)
// ==========================================
export function ItSolutionsSection() {
  return (
    <>
      <ItMengenalSection />
      <ItProkerSection />
      <ItWorkflowSection />
    </>
  );
}

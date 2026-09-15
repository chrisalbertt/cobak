import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Github,
  Globe,
  ArrowUpRight,
  Shield,
  RefreshCw,
  Vote,
  GraduationCap,
  Pill,
  Smartphone,
  MapPin,
  Users,
  Download,
  CheckCircle2,
  Sparkles,
  Radio,
  ExternalLink,
  Lock,
} from 'lucide-react'

const FEATURED_PROJECTS = [
  {
    id: 'anita',
    title: 'ANITA (Absensi Terintegrasi Takalar)',
    webLink: 'https://anitaku.gasabsence.com/login',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.gascapitol.anita&hl=id',
    link: 'https://anitaku.gasabsence.com/login',
    buttonText: 'Kunjungi Portal Web ANITA',
    description:
      'ANITA (Absensi Terintegrasi Takalar) adalah aplikasi dan sistem absensi digital berbasis penelusuran lokasi real-time yang diluncurkan oleh Pemerintah Kabupaten Takalar untuk memantau kehadiran serta kinerja Aparatur Sipil Negara (ASN). Dilengkapi validasi presisi lokasi (GPS), shift kerja fleksibel, riwayat kehadiran akurat, dan dashboard pemantauan terpadu yang telah diunduh oleh lebih dari 7.500 ASN di Kabupaten Takalar.',
    stack: ['Laravel', 'Flutter', 'Dart', 'PHP', 'MySQL', 'REST API', 'Real-Time Geolocation'],
    theme: {
      accent: '#06B6D4',
      cardBg:
        'linear-gradient(155deg, rgba(8, 48, 68, 0.55) 0%, rgba(10, 28, 44, 0.92) 50%, rgba(6, 11, 20, 0.98) 100%)',
      cardBorder: 'border-cyan-500/35 hover:border-cyan-400/65',
      cardInnerGlow:
        'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(6, 182, 212, 0.22) 0%, transparent 70%)',
      topLine: 'linear-gradient(90deg, #06B6D4 0%, #38BDF8 45%, #10B981 85%, transparent 100%)',
      topLineGlow: '0 0 16px rgba(6, 182, 212, 0.8)',
      skillBg:
        'bg-cyan-950/40 text-cyan-100 border-cyan-500/30 hover:border-cyan-400/55 hover:bg-cyan-500/20',
      btnBg: 'linear-gradient(135deg, #06B6D4 0%, #0284C7 50%, #0369A1 100%)',
      btnGlow: '0 0 22px rgba(6, 182, 212, 0.45)',
      btnHoverGlow: '0 0 32px rgba(6, 182, 212, 0.7)',
    },
    type: 'anita-showcase',
  },
  {
    id: 'hiyoko',
    title: 'Hiyoko.id',
    link: 'https://hiyoko.id/',
    buttonText: 'Kunjungi Website Hiyoko.id',
    description:
      'Platform simulasi ujian bahasa Jepang (CBT) untuk persiapan tes JFT-Basic dan Tes SIM Jepang yang menyerupai ujian aslinya. Dilengkapi sistem pembayaran otomatis QRIS 24/7 dan modul bank soal interaktif.',
    stack: [
      'Laravel',
      'PHP',
      'MySQL',
      'JavaScript',
      'Tailwind CSS',
      'QRIS Payment Gateway',
      'CBT Engine',
      'REST API',
    ],
    theme: {
      accent: '#F59E0B',
      cardBg:
        'linear-gradient(155deg, rgba(60, 30, 8, 0.5) 0%, rgba(28, 18, 10, 0.9) 50%, rgba(10, 13, 22, 0.98) 100%)',
      cardBorder: 'border-amber-500/30 hover:border-amber-400/60',
      cardInnerGlow:
        'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(245, 158, 11, 0.2) 0%, transparent 70%)',
      topLine: 'linear-gradient(90deg, #F59E0B 0%, #FDE047 50%, #FB923C 80%, transparent 100%)',
      topLineGlow: '0 0 16px rgba(245, 158, 11, 0.8)',
      skillBg:
        'bg-amber-950/40 text-amber-100 border-amber-500/30 hover:border-amber-400/55 hover:bg-amber-500/20',
      btnBg: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #EA580C 100%)',
      btnGlow: '0 0 20px rgba(245, 158, 11, 0.4)',
      btnHoverGlow: '0 0 30px rgba(245, 158, 11, 0.6)',
    },
    type: 'web-showcase',
  },
]

const GITHUB_PROJECTS = [
  {
    title: 'Sistem E-Voting',
    category: 'Final Project',
    link: 'https://github.com/chrisalbertt/skripsi_evoting',
    icon: Vote,
    theme: {
      accentText: 'text-purple-400',
      badgeBg: 'bg-purple-500/20',
      badgeText: 'text-purple-200 font-bold',
      badgeBorder: 'border-purple-400/40',
      iconColor: '#D8B4FE',
      iconBg: 'bg-purple-500/20',
      iconBorder: 'border-purple-400/35',
      topLine: 'linear-gradient(90deg, #A855F7 0%, #D946EF 70%, transparent 100%)',
      topLineGlow: '0 0 14px rgba(168, 85, 247, 0.7)',
      cardBg:
        'linear-gradient(155deg, rgba(55, 20, 75, 0.45) 0%, rgba(24, 12, 34, 0.9) 55%, rgba(10, 12, 22, 0.98) 100%)',
      cardHoverBorder: 'hover:border-purple-400/60 border-purple-500/25',
      cardInnerGlow:
        'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(168, 85, 247, 0.18) 0%, transparent 70%)',
      btnHover: 'hover:bg-purple-500/25 hover:border-purple-400/50 hover:text-purple-100',
      skillBg: 'bg-purple-950/40 text-purple-100 border-purple-500/25 hover:border-purple-400/50',
    },
    description:
      'Sistem pemungutan suara elektronik (E-Voting) berbasis web yang aman, terstruktur, dan transparan guna mendukung proses pemilihan digital terintegrasi.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Security'],
  },
  {
    title: 'Sistem Pembayaran Sekolah',
    category: 'Rekayasa Perangkat Lunak',
    link: 'https://github.com/chrisalbertt/Project-Rekayasa-Perangkat-Lunak',
    icon: GraduationCap,
    theme: {
      accentText: 'text-sky-400',
      badgeBg: 'bg-sky-500/20',
      badgeText: 'text-sky-200 font-bold',
      badgeBorder: 'border-sky-400/40',
      iconColor: '#7DD3FC',
      iconBg: 'bg-sky-500/20',
      iconBorder: 'border-sky-400/35',
      topLine: 'linear-gradient(90deg, #0EA5E9 0%, #38BDF8 70%, transparent 100%)',
      topLineGlow: '0 0 14px rgba(168, 85, 247, 0.7)',
      cardBg:
        'linear-gradient(155deg, rgba(12, 45, 75, 0.45) 0%, rgba(12, 24, 38, 0.9) 55%, rgba(10, 12, 22, 0.98) 100%)',
      cardHoverBorder: 'hover:border-sky-400/60 border-sky-500/25',
      cardInnerGlow:
        'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(14, 165, 233, 0.18) 0%, transparent 70%)',
      btnHover: 'hover:bg-sky-500/25 hover:border-sky-400/50 hover:text-sky-100',
      skillBg: 'bg-sky-950/40 text-sky-100 border-sky-500/25 hover:border-sky-400/50',
    },
    description:
      'Aplikasi manajemen administrasi keuangan dan pembayaran tagihan SPP sekolah untuk mempermudah pencatatan transaksi kasir, tracking tagihan, dan rekonsiliasi data siswa.',
    stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Sistem Informasi Apotek Sehat Sentosa',
    category: 'Information System',
    link: 'https://github.com/yohanesdewantara/apotek_sehat_sentosa',
    icon: Pill,
    theme: {
      accentText: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/20',
      badgeText: 'text-emerald-200 font-bold',
      badgeBorder: 'border-emerald-400/40',
      iconColor: '#6EE7B7',
      iconBg: 'bg-emerald-500/20',
      iconBorder: 'border-emerald-400/35',
      topLine: 'linear-gradient(90deg, #10B981 0%, #34D399 70%, transparent 100%)',
      topLineGlow: '0 0 14px rgba(16, 185, 129, 0.7)',
      cardBg:
        'linear-gradient(155deg, rgba(8, 55, 38, 0.45) 0%, rgba(12, 28, 20, 0.9) 55%, rgba(8, 14, 12, 0.98) 100%)',
      cardHoverBorder: 'hover:border-emerald-400/60 border-emerald-500/25',
      cardInnerGlow:
        'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16, 185, 129, 0.18) 0%, transparent 70%)',
      btnHover: 'hover:bg-emerald-500/25 hover:border-emerald-400/50 hover:text-emerald-100',
      skillBg: 'bg-emerald-950/40 text-emerald-100 border-emerald-500/25 hover:border-emerald-400/50',
    },
    description:
      'Sistem informasi manajemen apotek untuk pengelolaan inventaris obat, pencatatan resep dokter, transaksi penjualan kasir (POS), dan rekapitulasi laporan berkala.',
    stack: ['Laravel', 'PHP', 'MySQL', 'REST API'],
  },
]

/* ── Interactive Browser Preview Frame with Reliable Hover Overlay ── */
function BrowserPreviewFrame({ proj }) {
  const [isHovered, setIsHovered] = useState(false)
  const isAnita = proj.id === 'anita'

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full rounded-2xl border ${isAnita ? 'border-cyan-500/35 bg-[#0A101D]' : 'border-amber-500/35 bg-[#07090F]'
        } shadow-2xl overflow-hidden transition-all duration-300`}
    >
      {/* Browser macOS Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D121F] border-b border-white/[0.08] select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>

        <div
          className={`flex items-center gap-2 px-3 py-1 rounded-md ${isAnita
            ? 'bg-cyan-500/10 border border-cyan-500/25 text-cyan-200'
            : 'bg-amber-500/10 border border-amber-500/25 text-amber-200'
            } font-mono text-[11px] max-w-[210px] sm:max-w-[270px] truncate`}
        >
          <Globe size={11} className={isAnita ? 'text-cyan-400' : 'text-amber-400'} />
          <span className="truncate font-semibold">
            {isAnita ? 'https://anitaku.gasabsence.com/login' : 'https://hiyoko.id'}
          </span>
        </div>

        <div className={isAnita ? 'text-cyan-400/80' : 'text-amber-400/70'}>
          <RefreshCw size={11} />
        </div>
      </div>

      {/* Frame Visual Content */}
      <div className="relative w-full h-[260px] sm:h-[320px] md:h-[340px] bg-[#090D14] overflow-hidden">
        {isAnita ? (
          /* ANITA Web Portal Interface (Split Screen Representation) */
          <div className="p-3.5 sm:p-4 bg-[#080D18] h-full flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 rounded-xl overflow-hidden border border-white/[0.1] shadow-xl text-left w-full h-full">
              {/* Left Blue Hero Banner */}
              <div className="bg-[#0D63F3] p-4 sm:p-5 text-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1 shadow-sm overflow-hidden">
                      <img
                        src="/anita-logo.png"
                        alt="GASABSENCE Logo"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    </div>
                    <span className="font-bold text-xs tracking-wider uppercase font-mono text-white">
                      GASABSENCE
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-xs sm:text-sm text-white leading-snug mb-1.5">
                    Kelola absensi lebih mudah, real-time.
                  </h4>
                  <p className="text-[10px] text-blue-100/85 leading-tight mb-3">
                    Pantau kehadiran ASN, lembur, dan izin terpusat Pemkab Takalar.
                  </p>

                  <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-blue-400/30 text-[9px]">
                    <div className="bg-blue-600/60 p-1.5 rounded-lg border border-blue-400/20">
                      <div className="text-blue-200 text-[8px]">Keakuratan Data</div>
                      <div className="font-bold text-white">99,9% GPS</div>
                    </div>
                    <div className="bg-blue-600/60 p-1.5 rounded-lg border border-blue-400/20">
                      <div className="text-blue-200 text-[8px]">Pengguna ASN</div>
                      <div className="font-bold text-white">7.500+ User</div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2 text-[8px] text-blue-200/80 flex items-center justify-between font-mono">
                  <span>© 2026 GASCAPITOL</span>
                  <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-[8px]">
                    v1.0 One Stop
                  </span>
                </div>
              </div>

              {/* Right White Login Card */}
              <div className="bg-white p-4 sm:p-5 text-slate-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 mb-0.5">
                    Selamat datang kembali 👋
                  </div>
                  <div className="text-[10px] text-slate-500 mb-3">
                    Masuk ke dashboard presensi ASN
                  </div>

                  <div className="space-y-2">
                    <div>
                      <label className="block text-[9px] font-semibold text-slate-700 mb-0.5">
                        Alamat Email
                      </label>
                      <div className="w-full text-[10px] font-mono bg-slate-50 border border-slate-300 rounded-full px-2.5 py-1 text-slate-600 truncate">
                        asn@takalarkab.go.id
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] font-semibold text-slate-700 mb-0.5">
                        Kata Sandi
                      </label>
                      <div className="w-full text-[10px] bg-slate-50 border border-slate-300 rounded-full px-2.5 py-1 text-slate-400 flex items-center justify-between">
                        <span>••••••••••••</span>
                        <Lock size={10} className="text-slate-400" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[8px] text-slate-500 pt-0.5">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded bg-blue-600 inline-block" />
                        Ingat saya
                      </span>
                      <span className="text-blue-600 font-medium">Lupa sandi?</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="w-full py-1.5 rounded-full bg-[#2563eb] text-white text-[10px] font-bold text-center shadow-md">
                    Masuk ke Dashboard
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Hiyoko.id Live Web Frame */
          <iframe
            src="https://hiyoko.id/"
            title="Hiyoko.id Preview"
            loading="lazy"
            className="w-full h-full border-0 pointer-events-none scale-100 origin-top"
            sandbox="allow-scripts allow-same-origin"
          />
        )}

        {/* ── Guaranteed Hover Blur Overlay with Radiant Button ── */}
        <a
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center transition-all duration-300 z-30"
          style={{
            backgroundColor: isHovered ? 'rgba(5, 8, 15, 0.72)' : 'rgba(5, 8, 15, 0)',
            backdropFilter: isHovered ? 'blur(5px)' : 'blur(0px)',
            WebkitBackdropFilter: isHovered ? 'blur(5px)' : 'blur(0px)',
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? 'auto' : 'none',
          }}
        >
          <span
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wide transition-all duration-200"
            style={{
              background: isAnita
                ? 'linear-gradient(135deg, #06B6D4 0%, #38BDF8 50%, #0284C7 100%)'
                : 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #EA580C 100%)',
              color: '#06090E',
              boxShadow: isAnita
                ? '0 0 30px rgba(6, 182, 212, 0.8), 0 4px 15px rgba(0,0,0,0.5)'
                : '0 0 30px rgba(245, 158, 11, 0.8), 0 4px 15px rgba(0,0,0,0.5)',
              transform: isHovered ? 'scale(1)' : 'scale(0.88)',
            }}
          >
            {isAnita ? (
              <ExternalLink size={16} strokeWidth={2.8} className="text-[#06090E]" />
            ) : (
              <Globe size={16} strokeWidth={2.8} className="text-[#06090E]" />
            )}
            <span className="text-[#06090E] font-bold">
              {isAnita ? 'Kunjungi Portal Web ANITA' : 'Kunjungi Website Hiyoko.id'}
            </span>
            <ArrowUpRight size={16} strokeWidth={2.8} className="text-[#06090E]" />
          </span>
        </a>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section
      id="project"
      className="relative min-h-screen flex items-center justify-center py-28 px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #07090E 0%, #0C111E 35%, #0F1626 65%, #06080E 100%)',
      }}
    >
      {/* ── 1. Top Seamless Transition from Experience ── */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-64 z-0"
        style={{
          background:
            'linear-gradient(180deg, #07090E 0%, rgba(7, 9, 14, 0.85) 35%, rgba(12, 17, 30, 0.4) 70%, transparent 100%)',
        }}
      />

      {/* ── 2. Dynamic Luminous Background Effects ── */}
      {/* Electric Cyan Aurora top-left */}
      <motion.div
        className="pointer-events-none absolute top-20 -left-32 w-[750px] h-[750px] rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle, rgba(6, 182, 212, 0.32) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Warm Amber Aurora center-right */}
      <motion.div
        className="pointer-events-none absolute top-1/3 -right-32 w-[750px] h-[750px] rounded-full"
        animate={{ scale: [1, 1.22, 1], opacity: [0.22, 0.4, 0.22] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          background:
            'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, rgba(217, 119, 6, 0.08) 50%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Violet Aurora bottom-left */}
      <motion.div
        className="pointer-events-none absolute -bottom-28 -left-28 w-[720px] h-[720px] rounded-full"
        animate={{ scale: [1, 1.22, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{
          background:
            'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
          filter: 'blur(95px)',
        }}
      />

      {/* Dot Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Subtle Geometric Background Lines */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="20%" x2="35%" y2="0" stroke="rgba(6, 182, 212, 0.16)" strokeWidth="1.2" />
        <line x1="100%" y1="80%" x2="65%" y2="100%" stroke="rgba(168, 85, 247, 0.16)" strokeWidth="1.2" />
        <circle cx="85%" cy="22%" r="95" stroke="rgba(245, 158, 11, 0.14)" strokeWidth="1.2" fill="none" />
        <circle cx="15%" cy="78%" r="80" stroke="rgba(6, 182, 212, 0.14)" strokeWidth="1.2" fill="none" />
      </svg>

      {/* Floating Stardust Particles */}
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            width: i % 3 === 0 ? 3.5 : 2,
            height: i % 3 === 0 ? 3.5 : 2,
            background:
              i % 3 === 0
                ? 'rgba(6,182,212,0.95)'
                : i % 3 === 1
                  ? 'rgba(253,224,71,0.95)'
                  : 'rgba(192,132,252,0.95)',
            left: `${6 + ((i * 11) % 88)}%`,
            top: `${8 + ((i * 13) % 84)}%`,
          }}
          animate={{ y: [0, -24, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3.5 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-paper tracking-tight">
            Projects
          </h2>
        </motion.div>

        {/* ── 1. Featured Top Showcase Projects (ANITA & Hiyoko.id) ── */}
        <div className="space-y-12 mb-16">
          {FEATURED_PROJECTS.map((proj, idx) => {
            const t = proj.theme

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  style={{ background: t.cardBg }}
                  className={`relative rounded-3xl p-6 sm:p-8 md:p-10 border shadow-2xl overflow-hidden backdrop-blur-2xl transition-all duration-300 group ${t.cardBorder} hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
                >
                  {/* Top Radiant Glowing Accent Line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: t.topLine,
                      boxShadow: t.topLineGlow,
                    }}
                  />

                  {/* Inner Glow */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: t.cardInnerGlow }}
                  />

                  <div className="relative z-10 grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
                    {/* Left Column: Information & Action Buttons */}
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        {/* Title */}
                        <h3 className="font-display font-bold text-3xl sm:text-4xl text-paper tracking-tight mb-4">
                          {proj.title}
                        </h3>

                        {/* Description */}
                        <p className="text-paper/85 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                          {proj.description}
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {proj.stack.map((s) => (
                            <span
                              key={s}
                              className={`font-mono text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors duration-200 cursor-default ${t.skillBg}`}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: t.btnBg,
                            boxShadow: t.btnGlow,
                          }}
                          className={`inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-mono text-sm font-bold tracking-wide ${proj.id === 'anita' ? 'text-white' : 'text-slate-950'
                            } hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200`}
                        >
                          <Globe size={17} strokeWidth={2.5} />
                          <span>{proj.buttonText}</span>
                          <ArrowUpRight size={17} strokeWidth={2.5} />
                        </a>

                        {proj.playStoreLink && (
                          <a
                            href={proj.playStoreLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold tracking-wide text-cyan-200 bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all duration-200"
                          >
                            <Download size={15} />
                            <span>Unduh APK (Play Store)</span>
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Visual Frame with Reliable Interactive Hover Blur */}
                    <BrowserPreviewFrame proj={proj} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── 2. Other Projects & Repositories Grid ── */}
        <div className="mb-8">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-paper tracking-tight mb-2">
            Other Projects
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {GITHUB_PROJECTS.map((p, i) => {
            const Icon = p.icon
            const t = p.theme

            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: t.cardBg }}
                className={`relative rounded-3xl p-7 border shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-xl transition-all duration-300 group ${t.cardHoverBorder} hover:-translate-y-1.5`}
              >
                {/* Top Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2.5px] opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: t.topLine,
                    boxShadow: t.topLineGlow,
                  }}
                />

                {/* Inner Glow on Hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: t.cardInnerGlow }}
                />

                <div className="relative z-10">
                  {/* Card Top: GitHub Repo Link */}
                  <div className="flex items-center justify-start mb-4">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[11px] font-semibold transition-all duration-200 bg-white/[0.05] text-paper border border-white/[0.1] ${t.btnHover} group/btn`}
                    >
                      <Github size={12} className="opacity-80 group-hover/btn:opacity-100" />
                      <span>GitHub</span>
                      <ArrowUpRight
                        size={11}
                        className="opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  </div>

                  {/* Icon + Title Header */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center border shadow-inner transition-transform duration-300 group-hover:scale-105 ${t.iconBg} ${t.iconBorder}`}
                      style={{ color: t.iconColor }}
                    >
                      <Icon size={18} />
                    </div>

                    <h3 className="font-display font-bold text-xl text-paper tracking-tight group-hover:text-white transition-colors duration-200 mt-1">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline decoration-white/30 decoration-1 underline-offset-4"
                      >
                        {p.title}
                      </a>
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-paper/85 text-sm leading-relaxed mb-6 font-normal">
                    {p.description}
                  </p>
                </div>

                {/* Tech Stack Chips */}
                <div className="relative z-10 pt-5 border-t border-white/[0.09]">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className={`font-mono text-[11px] font-medium px-2.5 py-1 rounded-md border transition-colors duration-200 cursor-default ${t.skillBg}`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      {/* ── 3. Seamless Bottom Gradient Blend into Contact Section ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 z-0"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(6, 8, 14, 0.7) 50%, #06080E 100%)',
        }}
      />
    </section>
  )
}

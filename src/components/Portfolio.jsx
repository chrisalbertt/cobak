import { motion } from 'framer-motion'
import { Github, Globe, ArrowUpRight, Shield, RefreshCw, Vote, GraduationCap, Pill } from 'lucide-react'

const FEATURED_PROJECT = {
  title: 'Hiyoko.id',
  tagline: 'Live Production Website & Digital Platform',
  link: 'https://hiyoko.id/',
  description:
    'Platform website modern terintegrasi dengan antarmuka responsif, arsitektur performa tinggi, dan pengalaman pengguna yang mulus untuk kebutuhan layanan digital.',
  stack: ['React', 'Next.js', 'Tailwind CSS', 'REST API', 'Vercel'],
  theme: {
    accent: '#F59E0B',
    badgeBg: 'bg-amber-500/20',
    badgeText: 'text-amber-200 font-bold',
    badgeBorder: 'border-amber-400/45',
    cardBg: 'linear-gradient(155deg, rgba(60, 30, 8, 0.5) 0%, rgba(28, 18, 10, 0.9) 50%, rgba(10, 13, 22, 0.98) 100%)',
    cardBorder: 'border-amber-500/30 hover:border-amber-400/60',
    cardInnerGlow: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(245, 158, 11, 0.2) 0%, transparent 70%)',
    topLine: 'linear-gradient(90deg, #F59E0B 0%, #FDE047 50%, #FB923C 80%, transparent 100%)',
    topLineGlow: '0 0 16px rgba(245, 158, 11, 0.8)',
    skillBg: 'bg-amber-950/40 text-amber-100 border-amber-500/30 hover:border-amber-400/55 hover:bg-amber-500/20',
  },
}

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
      cardBg: 'linear-gradient(155deg, rgba(55, 20, 75, 0.45) 0%, rgba(24, 12, 34, 0.9) 55%, rgba(10, 12, 22, 0.98) 100%)',
      cardHoverBorder: 'hover:border-purple-400/60 border-purple-500/25',
      cardInnerGlow: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(168, 85, 247, 0.18) 0%, transparent 70%)',
      btnHover: 'hover:bg-purple-500/25 hover:border-purple-400/50 hover:text-purple-100',
      skillBg: 'bg-purple-950/40 text-purple-100 border-purple-500/25 hover:border-purple-400/50',
    },
    description:
      'Sistem pemungutan suara elektronik (E-Voting) berbasis web yang aman, terstruktur, dan transparan guna mendukung proses pemilihan digital terintegrasi.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Security'],
  },
  {
    title: 'Sistem Pembayaran Sekolah (RPL)',
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
      topLineGlow: '0 0 14px rgba(14, 165, 233, 0.7)',
      cardBg: 'linear-gradient(155deg, rgba(12, 45, 75, 0.45) 0%, rgba(12, 24, 38, 0.9) 55%, rgba(10, 12, 22, 0.98) 100%)',
      cardHoverBorder: 'hover:border-sky-400/60 border-sky-500/25',
      cardInnerGlow: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(14, 165, 233, 0.18) 0%, transparent 70%)',
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
      topLineGlow: '0 0 14px rgba(168, 85, 247, 0.7)',
      cardBg: 'linear-gradient(155deg, rgba(8, 55, 38, 0.45) 0%, rgba(12, 28, 20, 0.9) 55%, rgba(8, 14, 12, 0.98) 100%)',
      cardHoverBorder: 'hover:border-emerald-400/60 border-emerald-500/25',
      cardInnerGlow: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16, 185, 129, 0.18) 0%, transparent 70%)',
      btnHover: 'hover:bg-emerald-500/25 hover:border-emerald-400/50 hover:text-emerald-100',
      skillBg: 'bg-emerald-950/40 text-emerald-100 border-emerald-500/25 hover:border-emerald-400/50',
    },
    description:
      'Sistem informasi manajemen apotek untuk pengelolaan inventaris obat, pencatatan resep dokter, transaksi penjualan kasir (POS), dan rekapitulasi laporan berkala.',
    stack: ['Laravel', 'PHP', 'MySQL', 'REST API'],
  },
]

export default function Portfolio() {
  const fTheme = FEATURED_PROJECT.theme

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
        className="pointer-events-none absolute top-0 left-0 right-0 h-44 z-0"
        style={{
          background: 'linear-gradient(180deg, #07090E 0%, rgba(12, 17, 30, 0.7) 50%, transparent 100%)',
        }}
      />

      {/* ── 2. Dynamic Luminous Background Effects ── */}
      {/* Warm Amber Aurora top-right */}
      <motion.div
        className="pointer-events-none absolute -top-32 -right-32 w-[750px] h-[750px] rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.28, 0.45, 0.28] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.38) 0%, rgba(217, 119, 6, 0.1) 50%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Violet Aurora bottom-left */}
      <motion.div
        className="pointer-events-none absolute -bottom-28 -left-28 w-[720px] h-[720px] rounded-full"
        animate={{ scale: [1, 1.22, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
          filter: 'blur(95px)',
        }}
      />

      {/* Emerald Center Ambient Glow */}
      <motion.div
        className="pointer-events-none absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full"
        animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
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
      <svg className="pointer-events-none absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <line x1="0" y1="20%" x2="35%" y2="0" stroke="rgba(245, 158, 11, 0.16)" strokeWidth="1.2" />
        <line x1="100%" y1="80%" x2="65%" y2="100%" stroke="rgba(168, 85, 247, 0.16)" strokeWidth="1.2" />
        <circle cx="85%" cy="22%" r="95" stroke="rgba(245, 158, 11, 0.14)" strokeWidth="1.2" fill="none" />
        <circle cx="15%" cy="78%" r="80" stroke="rgba(168, 85, 247, 0.14)" strokeWidth="1.2" fill="none" />
      </svg>

      {/* Floating Stardust Particles */}
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            width: i % 3 === 0 ? 3.5 : 2,
            height: i % 3 === 0 ? 3.5 : 2,
            background: i % 3 === 0 ? 'rgba(253,224,71,0.95)' : i % 3 === 1 ? 'rgba(192,132,252,0.95)' : 'rgba(110,231,183,0.95)',
            left: `${6 + (i * 11) % 88}%`,
            top: `${8 + (i * 13) % 84}%`,
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

        {/* ── 1. Featured Top Showcase: Hiyoko.id (Rich Radiant Amber Gold) ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div
            style={{ background: fTheme.cardBg }}
            className={`relative rounded-3xl p-6 sm:p-8 md:p-10 border shadow-2xl overflow-hidden backdrop-blur-2xl transition-all duration-300 group ${fTheme.cardBorder} hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
          >
            {/* Top Radiant Glowing Accent Line */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: fTheme.topLine,
                boxShadow: fTheme.topLineGlow,
              }}
            />

            {/* Inner Glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: fTheme.cardInnerGlow }}
            />

            <div className="relative z-10 grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-center">
              {/* Left Column: Information & Visit Button */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wider border shadow-sm ${fTheme.badgeBg} ${fTheme.badgeText} ${fTheme.badgeBorder}`}>
                      <Globe size={13} className="text-amber-400" />
                      <span>Live Production Website</span>
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-3xl sm:text-4xl text-paper tracking-tight mb-3">
                    {FEATURED_PROJECT.title}
                  </h3>

                  <p className="text-paper/85 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {FEATURED_PROJECT.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {FEATURED_PROJECT.stack.map((s) => (
                      <span
                        key={s}
                        className={`font-mono text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors duration-200 cursor-default ${fTheme.skillBg}`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Big Radiant Visit Button (High Contrast & Visible) */}
                <div>
                  <a
                    href={FEATURED_PROJECT.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #EA580C 100%)',
                      boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)',
                    }}
                    className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-xl font-mono text-sm font-bold tracking-wide text-slate-950 hover:brightness-110 hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span className="text-slate-950 font-bold">Kunjungi Website Hiyoko.id</span>
                    <ArrowUpRight size={17} className="text-slate-950" strokeWidth={2.5} />
                  </a>
                </div>
              </div>

              {/* Right Column: Live Web Browser Window Frame */}
              <div className="relative w-full rounded-2xl border border-amber-500/30 bg-[#07090F] shadow-2xl overflow-hidden group/frame">
                {/* Browser macOS Top Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D121F] border-b border-white/[0.08] select-none">
                  {/* Traffic Light Dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>

                  {/* Browser URL Search Bar */}
                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-200 font-mono text-[11px] max-w-[200px] sm:max-w-[260px] truncate">
                    <Globe size={11} className="text-amber-400 flex-shrink-0" />
                    <span className="truncate text-amber-200/90 font-semibold">https://hiyoko.id</span>
                  </div>

                  {/* Right Reload Icon */}
                  <div className="text-amber-400/70">
                    <RefreshCw size={11} />
                  </div>
                </div>

                {/* Web Window Content */}
                <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] bg-[#090D14] overflow-hidden">
                  <iframe
                    src="https://hiyoko.id/"
                    title="Hiyoko.id Preview"
                    loading="lazy"
                    className="w-full h-full border-0 pointer-events-none scale-100 origin-top"
                    sandbox="allow-scripts allow-same-origin"
                  />

                  {/* Hover visit overlay button */}
                  <a
                    href="https://hiyoko.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-slate-950/40 opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]"
                  >
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-amber-400 text-slate-950 shadow-xl hover:scale-105 transition-transform">
                      <span>Buka Hiyoko.id</span>
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 2. GitHub Repositories Grid (3 Projects with Distinct Color Schemes) ── */}
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
                  {/* Card Top: Themed Icon + Category & GitHub Repo Link */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full font-mono text-[11px] tracking-wider border shadow-sm ${t.badgeBg} ${t.badgeText} ${t.badgeBorder}`}
                    >
                      {p.category}
                    </span>

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[11px] font-semibold transition-all duration-200 bg-white/[0.05] text-paper border border-white/[0.1] ${t.btnHover} group/btn`}
                    >
                      <Github size={12} className="opacity-80 group-hover/btn:opacity-100" />
                      <span>GitHub</span>
                      <ArrowUpRight size={11} className="opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
                  <p className="text-paper/80 text-sm leading-relaxed mb-6 font-normal">
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
          background: 'linear-gradient(to bottom, transparent 0%, rgba(6, 8, 14, 0.7) 50%, #06080E 100%)',
        }}
      />
    </section>
  )
}

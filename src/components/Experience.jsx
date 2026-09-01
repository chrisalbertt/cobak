import { motion } from 'framer-motion'
import { Briefcase, Shield, Calendar, MapPin, Terminal, Lock } from 'lucide-react'

const EXPERIENCES = [
  {
    type: 'magang',
    badge: 'Magang',
    company: 'PT Sekuriti Siber Indonesia',
    location: 'Yogyakarta, Indonesia',
    role: 'SOC Analyst L1',
    period: 'Agustus 2025 – Februari 2026',
    icon: Shield,
    subIcon: Lock,
    // Cyber Ruby Crimson / Neon Rose Security Theme (Non-Blue, Non-Green)
    theme: {
      accentText: 'text-rose-400 font-semibold',
      badgeBg: 'bg-rose-500/20',
      badgeText: 'text-rose-200 font-bold',
      badgeBorder: 'border-rose-400/40',
      iconBg: 'bg-rose-500/20',
      iconBorder: 'border-rose-400/35',
      iconColor: '#FDA4AF',
      cardBg: 'linear-gradient(155deg, rgba(88, 28, 48, 0.45) 0%, rgba(28, 14, 20, 0.9) 55%, rgba(14, 8, 12, 0.98) 100%)',
      cardBorder: 'border-rose-500/25 hover:border-rose-400/60',
      cardInnerGlow: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244, 63, 94, 0.22) 0%, transparent 70%)',
      topLine: 'linear-gradient(90deg, #F43F5E 0%, #FB7185 50%, #E11D48 80%, transparent 100%)',
      topLineGlow: '0 0 16px rgba(244, 63, 94, 0.7)',
      skillBg: 'bg-rose-950/40 text-rose-100 border-rose-500/25 hover:border-rose-400/50 hover:bg-rose-500/20',
    },
    description:
      'Melakukan pemantauan dan analisis keamanan secara berkelanjutan menggunakan SIEM Wazuh guna mendeteksi potensi insiden keamanan siber. Menganalisis security alerts, memvalidasi false positive vs true positive dengan threat intelligence feeds, serta melakukan eskalasi insiden dan pelaporan SOP harian.',
    skills: ['SIEM Wazuh', 'Threat Intelligence', 'Incident Analysis', 'Log Analysis', 'Security SOP'],
  },
  {
    type: 'kerja',
    badge: 'Kerja',
    company: 'PT Global Aplikasi Siber',
    location: 'Work From Home / Remote',
    role: 'Fullstack Developer',
    period: 'Februari 2026 – Sekarang',
    icon: Briefcase,
    subIcon: Terminal,
    // Warm Orange Radiant Theme
    theme: {
      accentText: 'text-orange-400 font-semibold',
      badgeBg: 'bg-orange-500/20',
      badgeText: 'text-orange-200 font-bold',
      badgeBorder: 'border-orange-400/40',
      iconBg: 'bg-orange-500/20',
      iconBorder: 'border-orange-400/35',
      iconColor: '#FB923C',
      cardBg: 'linear-gradient(155deg, rgba(90, 35, 5, 0.45) 0%, rgba(30, 18, 8, 0.9) 55%, rgba(10, 14, 26, 0.98) 100%)',
      cardBorder: 'border-orange-500/25 hover:border-orange-400/60',
      cardInnerGlow: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249, 115, 22, 0.22) 0%, transparent 70%)',
      topLine: 'linear-gradient(90deg, #F97316 0%, #FB923C 50%, #EA580C 80%, transparent 100%)',
      topLineGlow: '0 0 16px rgba(249, 115, 22, 0.7)',
      skillBg: 'bg-orange-950/40 text-orange-100 border-orange-500/25 hover:border-orange-400/50 hover:bg-orange-500/20',
    },
    description:
      'Mengembangkan aplikasi ANITA berbasis web (PHP Laravel) dan mobile (Flutter/Dart) yang digunakan oleh 7.500+ pengguna aktif. Bertanggung jawab atas modul absensi digital, dashboard monitoring ASN Pemerintah Kabupaten Takalar, perancangan RESTful API terintegrasi, serta optimasi performa dan skalabilitas sistem.',
    skills: ['Laravel', 'Flutter', 'PHP', 'JavaScript', 'MySQL', 'REST API', 'Git'],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center py-28 px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #07090D 0%, #0D1018 35%, #14101A 65%, #07090E 100%)',
      }}
    >
      {/* ── 1. Top Seamless Transition from About ── */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-44 z-0"
        style={{
          background: 'linear-gradient(180deg, #07090D 0%, rgba(13, 16, 24, 0.7) 50%, transparent 100%)',
        }}
      />

      {/* ── 2. Vivid Luminous Background Effects ── */}
      {/* Vibrant Rose / Crimson Aurora top-left */}
      <motion.div
        className="pointer-events-none absolute top-4 -left-20 w-[750px] h-[750px] rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(circle, rgba(244, 63, 94, 0.38) 0%, rgba(190, 18, 60, 0.1) 45%, transparent 70%)',
          filter: 'blur(85px)',
        }}
      />

      {/* Vibrant Amber Aurora bottom-right */}
      <motion.div
        className="pointer-events-none absolute -bottom-28 -right-24 w-[780px] h-[780px] rounded-full"
        animate={{ scale: [1, 1.22, 1], opacity: [0.32, 0.5, 0.32] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(217, 119, 6, 0.12) 45%, transparent 70%)',
          filter: 'blur(85px)',
        }}
      />

      {/* Center Subtle Violet Glow */}
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full"
        animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%)',
          filter: 'blur(75px)',
        }}
      />

      {/* Dot Matrix Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Subtle Geometric Background Lines */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <line x1="0" y1="22%" x2="38%" y2="0" stroke="rgba(244, 63, 94, 0.2)" strokeWidth="1.2" />
        <line x1="100%" y1="78%" x2="62%" y2="100%" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="1.2" />
        <circle cx="88%" cy="20%" r="95" stroke="rgba(245, 158, 11, 0.16)" strokeWidth="1.2" fill="none" />
        <circle cx="12%" cy="80%" r="80" stroke="rgba(244, 63, 94, 0.16)" strokeWidth="1.2" fill="none" />
      </svg>

      {/* Floating Stardust Particles */}
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            width: i % 3 === 0 ? 3.5 : 2,
            height: i % 3 === 0 ? 3.5 : 2,
            background: i % 2 === 0 ? 'rgba(253,164,175,0.95)' : 'rgba(253,224,71,0.95)',
            left: `${6 + (i * 11) % 88}%`,
            top: `${8 + (i * 13) % 84}%`,
          }}
          animate={{ y: [0, -24, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3.5 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}

      {/* ── Main Content Container ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-paper tracking-tight">
            Experience
          </h2>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 items-stretch">
          {EXPERIENCES.map((exp, i) => {
            const Icon = exp.icon
            const t = exp.theme

            return (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: t.cardBg }}
                className={`relative rounded-3xl p-8 md:p-10 border shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-2xl transition-all duration-300 group ${t.cardBorder} hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
              >
                {/* Top Radiant Glowing Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-85 group-hover:opacity-100 transition-opacity duration-300"
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
                  {/* Top Bar: Vibrant Themed Badge & Period */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <span
                      className={`inline-flex items-center px-4 py-1.5 rounded-full font-mono text-xs tracking-wider border shadow-sm ${t.badgeBg} ${t.badgeText} ${t.badgeBorder}`}
                    >
                      {exp.badge}
                    </span>

                    <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-paper/80">
                      <Calendar size={14} className={t.accentText} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Company & Role Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className={`w-13 h-13 p-3 rounded-2xl flex-shrink-0 flex items-center justify-center border shadow-md transition-transform duration-300 group-hover:scale-105 ${t.iconBg} ${t.iconBorder}`}
                      style={{ color: t.iconColor }}
                    >
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-paper tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-sm sm:text-base text-paper/90 font-medium">
                        <span className={t.accentText}>{exp.company}</span>
                        <span className="text-muted/60">•</span>
                        <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-paper/85 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                    {exp.description}
                  </p>
                </div>

                {/* Tech Skills Chips */}
                <div className="relative z-10 pt-6 border-t border-white/[0.1]">
                  <div className="flex flex-wrap gap-2.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`font-mono text-xs sm:text-[13px] font-medium px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-default ${t.skillBg}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      {/* ── 3. Seamless Bottom Gradient Blend into Project Section ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 z-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(7, 9, 14, 0.4) 30%, rgba(7, 9, 14, 0.85) 70%, #07090E 100%)',
        }}
      />
    </section>
  )
}

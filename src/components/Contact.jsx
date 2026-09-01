import { motion } from 'framer-motion'
import { Mail, Instagram, Github, Linkedin, ArrowUpRight } from 'lucide-react'

// Contact links
const EMAIL = 'christopheralbert957@gmail.com'

const links = [
  {
    label: 'Email',
    href: `mailto:${EMAIL}`,
    icon: Mail,
    value: 'christopheralbert957@gmail.com',
    theme: {
      border: 'hover:border-amber-500/40',
      iconColor: 'text-amber-400',
      iconBg: 'bg-amber-500/10 border-amber-500/20',
      topLine: 'linear-gradient(90deg, #F59E0B 0%, transparent 100%)',
    },
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/christopheralbertsantoso',
    icon: Linkedin,
    value: 'Christopher Albert Santoso',
    theme: {
      border: 'hover:border-sky-500/40',
      iconColor: 'text-sky-400',
      iconBg: 'bg-sky-500/10 border-sky-500/20',
      topLine: 'linear-gradient(90deg, #0EA5E9 0%, transparent 100%)',
    },
  },
  {
    label: 'GitHub',
    href: 'https://github.com/chrisalbertt',
    icon: Github,
    value: 'github.com/chrisalbertt',
    theme: {
      border: 'hover:border-purple-500/40',
      iconColor: 'text-purple-400',
      iconBg: 'bg-purple-500/10 border-purple-500/20',
      topLine: 'linear-gradient(90deg, #A855F7 0%, transparent 100%)',
    },
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/chrisalbertt_/',
    icon: Instagram,
    value: '@chrisalbertt_',
    theme: {
      border: 'hover:border-rose-500/40',
      iconColor: 'text-rose-400',
      iconBg: 'bg-rose-500/10 border-rose-500/20',
      topLine: 'linear-gradient(90deg, #F43F5E 0%, transparent 100%)',
    },
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #06080E 0%, #0A0E18 45%, #06080E 100%)',
      }}
    >
      {/* ── 1. Top Seamless Transition from Projects ── */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-44 z-0"
        style={{
          background: 'linear-gradient(180deg, #06080E 0%, rgba(10, 14, 24, 0.6) 50%, transparent 100%)',
        }}
      />

      {/* ── 2. Ambient Background Glow Orbs ── */}
      {/* Amber Glowing Aurora bottom-right */}
      <motion.div
        className="pointer-events-none absolute -bottom-32 -right-32 w-[650px] h-[650px] rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(circle, rgba(217, 165, 68, 0.25) 0%, rgba(245, 158, 11, 0.06) 50%, transparent 70%)',
          filter: 'blur(95px)',
        }}
      />

      {/* Cyan Glowing Aurora top-left */}
      <motion.div
        className="pointer-events-none absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full"
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(6, 182, 212, 0.06) 50%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Dot Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── 3. Main Center Content Container ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center py-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-paper tracking-tight">
            Contact
          </h2>
        </motion.div>

        {/* Direct Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {links.map(({ label, href, icon: Icon, value, theme }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`relative p-7 sm:p-8 rounded-3xl bg-[#0D111A]/90 border border-white/[0.09] shadow-2xl backdrop-blur-2xl transition-all duration-300 group/link flex flex-col justify-between overflow-hidden ${theme.border} hover:-translate-y-1.5`}
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover/link:opacity-100 transition-opacity duration-300"
                style={{ background: theme.topLine }}
              />

              <div className="flex items-center justify-between gap-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-inner transition-transform duration-300 group-hover/link:scale-105 ${theme.iconBg} ${theme.iconColor}`}>
                  <Icon size={22} />
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/[0.08] text-muted group-hover/link:text-paper group-hover/link:bg-white/[0.1] transition-all">
                  <ArrowUpRight size={15} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              <div>
                <span className="font-mono text-xs font-semibold uppercase text-muted tracking-widest block mb-1.5">
                  {label}
                </span>
                <span className="font-mono text-sm sm:text-base text-paper font-medium truncate block group-hover/link:text-white transition-colors">
                  {value}
                </span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── 4. Centered Bottom Footer ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto pt-14 border-t border-white/[0.06] text-center">
        <p className="font-mono text-xs text-muted/75 tracking-wider">
          © {new Date().getFullYear()} Portofolio. All rights reserved.
        </p>
      </div>
    </section>
  )
}

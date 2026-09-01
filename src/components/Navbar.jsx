import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Instagram, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Project', href: '#project' },
  { name: 'Contact', href: '#contact' },
]

const SOCIAL_LINKS = [
  {
    name: 'Email',
    href: 'mailto:christopheralbert957@gmail.com',
    icon: Mail,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/chrisalbertt_/',
    icon: Instagram,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/chrisalbertt',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/christopheralbertsantoso',
    icon: Linkedin,
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section spy — iterate bottom-up so last section wins near the bottom
      const sections = ['home', 'about', 'experience', 'project', 'contact']
      const scrollMid = window.scrollY + window.innerHeight / 2

      // Special case: if we're at (or near) the bottom of the page, force contact active
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80
      if (atBottom) {
        setActiveSection('contact')
        return
      }

      let found = 'home'
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el && el.offsetTop <= scrollMid) {
          found = section
        }
      }
      setActiveSection(found)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // run once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0D10]/90 backdrop-blur-md border-b border-hairline/40 py-3.5 shadow-xl shadow-black/30'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12 flex items-center justify-between">
        {/* ── Left: Navigation Links (Larger Size & Bold Typography) ── */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          {NAV_LINKS.map((link) => {
            const isActive =
              activeSection === link.href.replace('#', '') ||
              (activeSection === 'work' && link.href === '#project')

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  const target = document.querySelector(link.href)
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className={`relative px-4 py-2 rounded-lg font-mono text-base lg:text-lg font-semibold tracking-tight transition-all duration-200 ${
                  isActive
                    ? 'text-amber'
                    : 'text-muted hover:text-paper hover:bg-white/[0.05]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-amber rounded-full shadow-[0_0_10px_rgba(217,165,68,0.75)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* ── Right: Social Icons (Pushed Far Right Away from Center Web, Larger Size) ── */}
        <div className="hidden md:flex items-center gap-4">
          {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              title={name}
              className="p-2.5 rounded-xl text-muted hover:text-paper hover:bg-white/[0.08] border border-transparent hover:border-hairline/60 transition-all duration-200 group flex items-center justify-center"
            >
              <Icon
                size={22}
                className="transition-transform duration-200 group-hover:scale-115 group-hover:text-amber"
              />
            </a>
          ))}
        </div>

        {/* ── Mobile View: Menu Toggle Only ── */}
        <div className="flex md:hidden items-center justify-end w-full">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-muted hover:text-paper hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Dropdown ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0e1117]/95 backdrop-blur-xl border-b border-hairline/40 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-3 font-mono text-base">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setMobileMenuOpen(false)
                    const target = document.querySelector(link.href)
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="py-2.5 px-3.5 rounded-lg text-muted hover:text-amber hover:bg-white/[0.04] transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

import { motion } from 'framer-motion'
import { useRef, useState, useEffect, useMemo } from 'react'

/* Responsive photo size based on viewport width */
function usePhotoSize() {
  const [size, setSize] = useState(() => {
    if (typeof window === 'undefined') return { w: 350, h: 460 }
    if (window.innerWidth < 480) return { w: 240, h: 320 }
    if (window.innerWidth < 768) return { w: 280, h: 370 }
    return { w: 350, h: 460 }
  })

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 480) setSize({ w: 240, h: 320 })
      else if (window.innerWidth < 768) setSize({ w: 280, h: 370 })
      else setSize({ w: 350, h: 460 })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}

const PHOTO_W = 350
const PHOTO_H = 460

/* ── Helper: get x/y/angle on rectangular perimeter at distance d ── */
function posOnRect(d, W, H) {
  const perim = 2 * (W + H)
  const dd = ((d % perim) + perim) % perim
  if (dd <= W) return { x: dd, y: 0, angle: 0 }
  if (dd <= W + H) return { x: W, y: dd - W, angle: 90 }
  if (dd <= 2 * W + H) return { x: W - (dd - W - H), y: H, angle: 180 }
  return { x: 0, y: H - (dd - 2 * W - H), angle: 270 }
}

/* 5 Variasi Pola Posisi Titik Kuning (hanya di Kanan, Bawah, dan Kiri — Atas bersih) */
const LAP_PATTERNS = [
  // Putaran 1: 3 titik di Kanan + 4 titik di Bawah
  [
    { side: 'right', ratios: [0.35, 0.52, 0.70] },
    { side: 'bottom', ratios: [0.30, 0.45, 0.60, 0.75] },
  ],
  // Putaran 2: 4 titik di Bawah + 3 titik di Kiri
  [
    { side: 'bottom', ratios: [0.25, 0.45, 0.65, 0.85] },
    { side: 'left', ratios: [0.35, 0.52, 0.70] },
  ],
  // Putaran 3: 3 titik di Kanan + 3 titik di Kiri
  [
    { side: 'right', ratios: [0.30, 0.50, 0.70] },
    { side: 'left', ratios: [0.30, 0.50, 0.70] },
  ],
  // Putaran 4: 4 titik di Kanan + 3 titik di Bawah
  [
    { side: 'right', ratios: [0.25, 0.45, 0.65, 0.85] },
    { side: 'bottom', ratios: [0.35, 0.52, 0.70] },
  ],
  // Putaran 5: 2 titik di Kanan + 3 titik di Bawah + 2 titik di Kiri
  [
    { side: 'right', ratios: [0.35, 0.65] },
    { side: 'bottom', ratios: [0.35, 0.52, 0.70] },
    { side: 'left', ratios: [0.35, 0.65] },
  ],
]

function getDotsForLap(lapIdx, W, H) {
  const pattern = LAP_PATTERNS[lapIdx % LAP_PATTERNS.length]
  const dots = []
  pattern.forEach(({ side, ratios }) => {
    ratios.forEach(ratio => {
      let d = 0
      if (side === 'top') d = ratio * W
      else if (side === 'right') d = W + ratio * H
      else if (side === 'bottom') d = W + H + (1 - ratio) * W
      else if (side === 'left') d = 2 * W + H + (1 - ratio) * H
      dots.push({ ...posOnRect(d, W, H), d })
    })
  })
  return dots
}

/* ─────────────────────────────────────────────────────────────
   Pac-Man that eats dots along the rectangular photo border
   Red ghost chases Pac-Man just behind
───────────────────────────────────────────────────────────── */
function PacmanBorderWalker({ photoW = PHOTO_W, photoH = PHOTO_H }) {
  const perim = 2 * (photoW + photoH)
  const [lap, setLap] = useState(0)

  /* Calculate dot positions for the current lap (changes every round) */
  const dotData = useMemo(() => getDotsForLap(lap, photoW, photoH), [lap, photoW, photoH])

  const pacRef = useRef(null)
  const ghostRef = useRef(null)
  const dotRefs = useRef([])
  const eatenRef = useRef(new Set())
  const pacDistRef = useRef(0)

  // Reset eaten dots when lap changes
  useEffect(() => {
    eatenRef.current.clear()
    dotRefs.current.forEach(el => {
      if (el) { el.style.opacity = '1'; el.style.transform = 'scale(1)' }
    })
  }, [lap])

  useEffect(() => {
    const SPEED = perim / 13   // px per second
    const GHOST_LAG = 58           // px behind pac-man
    let mouth = 5            // degrees open
    let mouthDir = 1
    let lastTime = performance.now()
    let frame

    function tick(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05)
      lastTime = now
      pacDistRef.current += SPEED * dt

      /* Mouth chomp */
      mouth += mouthDir * 210 * dt
      if (mouth > 44) { mouth = 44; mouthDir = -1 }
      if (mouth < 3) { mouth = 3; mouthDir = 1 }

      /* Lap finished → switch to next lap pattern */
      if (pacDistRef.current >= perim) {
        pacDistRef.current %= perim
        setLap(prev => (prev + 1) % 5)
      }

      const pacDist = pacDistRef.current
      const pac = posOnRect(pacDist, photoW, photoH)
      const ghost = posOnRect(pacDist - GHOST_LAG, photoW, photoH)

      /* Eat dots that Pac-Man touches */
      dotData.forEach(({ x, y }, i) => {
        if (eatenRef.current.has(i)) return
        const dx = pac.x - x, dy = pac.y - y
        if (dx * dx + dy * dy < 144) {
          eatenRef.current.add(i)
          const el = dotRefs.current[i]
          if (el) { el.style.opacity = '0'; el.style.transform = 'scale(0)' }
        }
      })

      /* Update Pac-Man DOM */
      if (pacRef.current) {
        pacRef.current.style.left = `${pac.x - 16}px`
        pacRef.current.style.top = `${pac.y - 16}px`
        pacRef.current.style.transform = `rotate(${pac.angle}deg)`

        const pathEl = pacRef.current.querySelector('.pac-mouth')
        if (pathEl) {
          const R = 15, cx = 16, cy = 16
          const rad = (mouth * Math.PI) / 180
          const x1 = cx + R * Math.cos(rad)
          const y1 = cy - R * Math.sin(rad)
          const x2 = cx + R * Math.cos(-rad)
          const y2 = cy + R * Math.sin(rad)
          pathEl.setAttribute('d', `M ${cx} ${cy} L ${x1} ${y1} A ${R} ${R} 0 1 0 ${x2} ${y2} Z`)
        }
      }

      /* Update Ghost DOM */
      if (ghostRef.current) {
        ghostRef.current.style.left = `${ghost.x - 13}px`
        ghostRef.current.style.top = `${ghost.y - 15}px`
        ghostRef.current.style.transform = `rotate(${ghost.angle}deg)`
      }

      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [photoW, photoH, perim, dotData])

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {/* ── Yellow dots along the border ── */}
      {dotData.map((dot, i) => (
        <div
          key={i}
          ref={el => { dotRefs.current[i] = el }}
          className="absolute rounded-full"
          style={{
            width: 6, height: 6,
            left: dot.x - 3, top: dot.y - 3,
            background: '#FDE047',
            transition: 'opacity 0.12s, transform 0.12s',
          }}
        />
      ))}

      {/* ── Pac-Man ── */}
      <div ref={pacRef} className="absolute" style={{ width: 32, height: 32 }}>
        <svg width="32" height="32" viewBox="0 0 32 32">
          {/* Body */}
          <path
            className="pac-mouth"
            d={`M 16 16 L 31 11 A 15 15 0 1 0 31 21 Z`}
            fill="#FDE047"
            stroke="#CA8A04"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
          {/* Eye */}
          <circle cx="20" cy="9" r="2" fill="#1a1a2e" />
        </svg>
      </div>

      {/* ── Red Ghost ── */}
      <div ref={ghostRef} className="absolute" style={{ width: 26, height: 30 }}>
        <svg width="26" height="30" viewBox="0 0 26 30">
          {/* Ghost body with wavy bottom */}
          <path
            d="M 1 30 L 1 11 A 12 12 0 0 1 25 11 L 25 30 L 21.5 26.5 L 18 30 L 14.5 26.5 L 11 30 L 7.5 26.5 L 4 30 Z"
            fill="#EF4444"
          />
          {/* Eyes */}
          <ellipse cx="9" cy="13.5" rx="4" ry="4.5" fill="white" />
          <ellipse cx="17" cy="13.5" rx="4" ry="4.5" fill="white" />
          {/* Pupils */}
          <circle cx="10" cy="15" r="2.2" fill="#1E40AF" />
          <circle cx="18" cy="15" r="2.2" fill="#1E40AF" />
        </svg>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Photo card — 3-D tilt + drag
───────────────────────────────────────────────────────────── */
function PhotoCard() {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handleMove(e) {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setTilt({ x: py * -10, y: px * 10 })
  }
  function reset() { setTilt({ x: 0, y: 0 }) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      drag
      dragElastic={0.12}
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      style={{ rotateX: tilt.x, rotateY: tilt.y, transformPerspective: 900 }}
      className="group relative w-full h-full cursor-grab active:cursor-grabbing overflow-hidden rounded-2xl bg-elevated shadow-2xl"
    >
      {/* Simple border */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none z-10 border border-white/10" />
      {/* Hover glare */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.09) 0%, transparent 60%)' }}
      />
      <img
        src="/about-photo.jpg"
        alt="Christopher Albert Santoso"
        draggable={false}
        className="w-full h-full object-cover select-none pointer-events-none"
        style={{
          objectPosition: '50% 78%',
          transform: 'scale(1.18)',
          transformOrigin: '50% 78%',
          filter: 'brightness(1.08) contrast(1.03) saturate(1.03)',
        }}
      />
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────
   About section
───────────────────────────────────────────────────────────── */
export default function About() {
  const { w: photoW, h: photoH } = usePhotoSize()
  const WRAP = { w: photoW + 44, h: photoH + 44 }

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-24 px-5 sm:px-8 md:px-16 lg:px-28 overflow-hidden bg-[#07090D]"
    >
      {/* ── Rich background ambient orbs for About ── */}
      <motion.div
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
        animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.25) 0%, transparent 70%)', filter: 'blur(70px)' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 -left-24 w-[550px] h-[550px] rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.24, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 75%)', filter: 'blur(80px)' }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full"
        animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{ background: 'radial-gradient(circle, rgba(217,165,68,0.25) 0%, transparent 70%)', filter: 'blur(75px)' }}
      />

      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      {/* Decorative geometric accent lines */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <line x1="0" y1="25%" x2="35%" y2="0" stroke="rgba(217,165,68,0.08)" strokeWidth="1" />
        <line x1="100%" y1="75%" x2="65%" y2="100%" stroke="rgba(20,184,166,0.08)" strokeWidth="1" />
        <line x1="0" y1="75%" x2="25%" y2="100%" stroke="rgba(139,92,246,0.07)" strokeWidth="1" />
        <circle cx="84%" cy="18%" r="90" stroke="rgba(217,165,68,0.07)" strokeWidth="1" fill="none" />
        <circle cx="16%" cy="82%" r="65" stroke="rgba(20,184,166,0.07)" strokeWidth="1" fill="none" />
      </svg>

      {/* ── 6. Floating Micro-particles ── */}
      {[...Array(12)].map((_, i) => (
        <motion.div key={i} className="pointer-events-none absolute rounded-full"
          style={{
            width: i % 3 === 0 ? 3.5 : 2, height: i % 3 === 0 ? 3.5 : 2,
            background: i % 2 === 0 ? 'rgba(217,165,68,0.7)' : 'rgba(20,184,166,0.65)',
            left: `${8 + (i * 11) % 84}%`, top: `${10 + (i * 13) % 80}%`,
          }}
          animate={{ y: [0, -22, 0], opacity: [0.35, 0.95, 0.35] }}
          transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
        />
      ))}

      <div className="relative z-10 w-full max-w-5xl mx-auto grid md:grid-cols-[380px_1fr] lg:grid-cols-[400px_1fr] gap-10 md:gap-14 items-center justify-items-center md:justify-items-start">

        {/* ── Photo column ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          {/* Wrapper — extra space for Pac-Man to walk outside photo */}
          <div className="relative flex items-center justify-center"
            style={{ width: WRAP.w, height: WRAP.h }}>

            {/* Photo */}
            <div className="absolute z-10" style={{ top: 22, left: 22, width: photoW, height: photoH }}>
              <PhotoCard />
            </div>

            {/* Pac-Man + ghost + dots */}
            <div className="absolute z-20" style={{ top: 22, left: 22, width: photoW, height: photoH }}>
              <PacmanBorderWalker photoW={photoW} photoH={photoH} />
            </div>
          </div>
        </motion.div>

        {/* ── Text column ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-paper tracking-tight text-left">
              About Me
            </h2>
          </motion.div>

          <div className="space-y-4 max-w-2xl text-left">
            {[
              <>Lulusan <span className="text-paper font-semibold">Sistem Informasi Universitas Kristen Duta Wacana Yogyakarta</span> yang terbiasa mengembangkan aplikasi web menggunakan <span className="text-amber font-semibold">Laravel (PHP)</span> serta pengembangan aplikasi mobile menggunakan <span className="text-amber font-semibold">Flutter</span>.</>,
              <>Berpengalaman dalam menganalisis kebutuhan pengguna, membangun fitur aplikasi web maupun mobile, serta melakukan debugging dan pengujian untuk memastikan sistem berjalan optimal sesuai kebutuhan.</>,
              <>Memiliki kemampuan problem solving, mampu bekerja sama dalam tim, serta memiliki motivasi tinggi untuk terus belajar dan berkembang di bidang pengembangan sistem dan teknologi informasi.</>,
            ].map((txt, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="text-base sm:text-lg md:text-xl text-paper/88 leading-relaxed text-left"
              >
                {txt}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      {/* Seamless bottom fade from About into Experience */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 z-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(7,9,13,0.35) 35%, rgba(7,9,13,0.8) 70%, #07090D 100%)',
        }}
      />
    </section>
  )
}

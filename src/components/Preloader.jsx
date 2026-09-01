import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const [direction, setDirection] = useState(1) // 1 = facing right (maju), -1 = facing left (mundur)

  useEffect(() => {
    const TOTAL_DURATION_MS = 5000
    const startTime = Date.now()

    // Smooth Maju-Mundur keyframe milestones over 5 seconds:
    // [0s: 0%] -> [1.1s: 46%] -> [1.9s: 26%] -> [3.0s: 82%] -> [3.7s: 60%] -> [4.7s: 100%]
    const milestones = [
      { t: 0.0, p: 0 },
      { t: 0.22, p: 46 },
      { t: 0.38, p: 26 },
      { t: 0.60, p: 82 },
      { t: 0.74, p: 60 },
      { t: 0.94, p: 100 },
      { t: 1.0, p: 100 },
    ]

    let prevVal = 0

    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / TOTAL_DURATION_MS
      const clampedT = Math.min(1, Math.max(0, elapsed))

      // Find current milestone segment
      let currentVal = 0
      for (let i = 0; i < milestones.length - 1; i++) {
        const m1 = milestones[i]
        const m2 = milestones[i + 1]
        if (clampedT >= m1.t && clampedT <= m2.t) {
          const ratio = (clampedT - m1.t) / (m2.t - m1.t)
          // Smooth sinusoidal interpolation
          const ease = 0.5 - Math.cos(ratio * Math.PI) / 2
          currentVal = Math.round(m1.p + (m2.p - m1.p) * ease)
          break
        }
      }

      if (currentVal > prevVal) {
        setDirection(1) // Maju -> Menghadap ke kanan
      } else if (currentVal < prevVal) {
        setDirection(-1) // Mundur -> Menghadap ke kiri
      }
      prevVal = currentVal

      setProgress(currentVal)

      if (clampedT >= 1) {
        clearInterval(interval)
        setTimeout(() => {
          setIsDone(true)
          setTimeout(() => {
            if (onComplete) onComplete()
          }, 400)
        }, 300)
      }
    }, 25)

    // Safety fallback: if anything stalls, force complete after 5.5 seconds
    const fallbackTimer = setTimeout(() => {
      setIsDone(true)
      if (onComplete) onComplete()
    }, TOTAL_DURATION_MS + 500)

    return () => {
      clearInterval(interval)
      clearTimeout(fallbackTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07090D] text-paper select-none overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(217, 165, 68, 0.12) 0%, rgba(56, 189, 248, 0.06) 45%, transparent 70%)',
              filter: 'blur(90px)',
            }}
          />

          {/* Dot Matrix Grid */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-md">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-paper mb-1"
            >
              Albert
            </motion.h1>

            {/* Subtitle & Loading Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 font-mono text-xs sm:text-sm text-muted mb-10 tracking-widest uppercase"
            >
              <span>Portfolio Loading</span>
              <span className="inline-flex">
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, times: [0, 0.3, 1] }}
                >
                  .
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, times: [0, 0.6, 1], delay: 0.2 }}
                >
                  .
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, times: [0, 0.9, 1], delay: 0.4 }}
                >
                  .
                </motion.span>
              </span>
            </motion.div>

            {/* Maju-Mundur Running Track & Running Person */}
            <div className="relative w-64 sm:w-80 mb-3 pt-12">
              {/* Running Person positioned exactly on progress head */}
              <div
                className="absolute top-0 transition-all duration-75 pointer-events-none"
                style={{
                  left: `${progress}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                <RunningPerson direction={direction} isComplete={progress >= 100} />
              </div>

              {/* Progress Bar Track */}
              <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber/70 via-amber to-sky-400 rounded-full shadow-[0_0_14px_rgba(217,165,68,0.75)] transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Percentage Number */}
            <span className="font-mono text-xs text-amber font-semibold tracking-wider">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─────────────────────────────────────────────────────────────
   Animated Running Person
   - Ayunan tangan dan kaki berlari kencang
   - Berbalik badan otomatis (scaleX: 1 / -1) saat maju/mundur
   - Lompat gembira saat mencapai 100%
───────────────────────────────────────────────────────────── */
function RunningPerson({ direction, isComplete }) {
  return (
    <div
      className="origin-center"
      style={{
        transform: `scaleX(${direction})`,
        transition: 'transform 0.18s ease-out',
      }}
    >
      <motion.div
        className="relative flex flex-col items-center origin-center"
        animate={
          isComplete
            ? { y: [0, -26, 0], rotate: [0, -10, 10, 0] }
            : { y: [0, -4, 0, -3, 0] }
        }
        transition={
          isComplete
            ? { duration: 0.6, ease: 'easeOut' }
            : { duration: 0.3, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        {/* Running Human Vector */}
        <svg width="38" height="42" viewBox="0 0 38 42" fill="none" className="overflow-visible">
          {/* Head */}
          <circle cx="19" cy="8" r="5.5" fill="#D9A544" stroke="#0B0D10" strokeWidth="1" />

        {/* Headphone */}
        <path d="M 13.5 8 A 5.5 5.5 0 0 1 24.5 8" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
        <circle cx="13.5" cy="8" r="1.5" fill="#38BDF8" />
        <circle cx="24.5" cy="8" r="1.5" fill="#38BDF8" />

        {/* Torso / Sport Jacket */}
        <path
          d="M 14 14 L 24 14 L 22 25 L 16 25 Z"
          fill="#1E293B"
          stroke="#D9A544"
          strokeWidth="1"
        />

        {/* Running Left Arm */}
        <motion.g
          style={{ originX: '15px', originY: '16px' }}
          animate={{ rotate: [-28, 32, -28] }}
          transition={{ duration: 0.28, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M 15 16 L 9 21 L 6 18"
            stroke="#D9A544"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Running Right Arm */}
        <motion.g
          style={{ originX: '23px', originY: '16px' }}
          animate={{ rotate: [32, -28, 32] }}
          transition={{ duration: 0.28, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M 23 16 L 27 21 L 30 18"
            stroke="#D9A544"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Running Left Leg */}
        <motion.g
          style={{ originX: '17px', originY: '25px' }}
          animate={{ rotate: [35, -35, 35] }}
          transition={{ duration: 0.28, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M 17 25 L 11 32 L 7 38"
            stroke="#38BDF8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Running Right Leg */}
        <motion.g
          style={{ originX: '21px', originY: '25px' }}
          animate={{ rotate: [-35, 35, -35] }}
          transition={{ duration: 0.28, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M 21 25 L 26 31 L 29 38"
            stroke="#38BDF8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
      </svg>

      {/* Dust particles */}
      <motion.div
        className="absolute -bottom-1 -left-2 flex gap-1 pointer-events-none"
        animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 0.2, repeat: Infinity }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber/50" />
        <span className="w-1 h-1 rounded-full bg-white/40" />
      </motion.div>
    </motion.div>
    </div>
  )
}

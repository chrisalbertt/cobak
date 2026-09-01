import { useEffect, useState, useRef } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  useSpring,
} from 'framer-motion'

const ROLE = 'Fullstack Developer'

// Smooth mathematical easing functions for organic physical motion
function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2
}

/* ─────────────────────────────────────────────────────────────
   Peeking Half-Body Mascot ("Hi, I'm")
   - Teks murni bersih tanpa dinding
   - Karakter lucu melongok setengah badan keluar dari balik tulisan "Hi, I'm",
     melambaikan tangan dengan balon "HI! ✨", lalu menunduk sembunyi lagi
───────────────────────────────────────────────────────────── */
function PeekingTextMascot() {
  const [active, setActive] = useState(false)

  // Periodic surprise peek every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(true)
      setTimeout(() => {
        setActive(false)
      }, 2800)
    }, 7000)

    // Initial greeting - ditunda 3.5 detik setelah halaman dimuat, tampil selama 4 detik
    const initialTimer = setTimeout(() => {
      setActive(true)
      setTimeout(() => {
        setActive(false)
      }, 4000)
    }, 3500)

    return () => {
      clearInterval(interval)
      clearTimeout(initialTimer)
    }
  }, [])

  return (
    <div
      className="relative inline-block select-none cursor-pointer"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => {
        setTimeout(() => setActive(false), 1800)
      }}
    >
      {/* ── 1. Half-Body Mascot Peeking from Behind Text ── */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ y: 35, opacity: 0, scale: 0.6 }}
            animate={{ y: -32, opacity: 1, scale: 1 }}
            exit={{ y: 35, opacity: 0, scale: 0.6 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -top-6 left-6 z-0 pointer-events-none origin-bottom flex flex-col items-center"
          >
            {/* Speech Bubble "Hi..." with White Background and Black Text */}
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 6 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 6 }}
              transition={{ delay: 0.35, type: 'spring', stiffness: 260, damping: 22 }}
              className="mb-1.5 px-3 py-0.5 rounded-full font-mono text-xs font-bold text-[#0B0D10] flex items-center justify-center shadow-lg border border-black/10"
              style={{
                background: '#FFFFFF',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)',
              }}
            >
              <span className="text-[#0B0D10]">Hi!👋 </span>
            </motion.div>

            {/* Half-Body Vector Mascot (Head + Torso + Both Hands) */}
            <div className="relative w-14 h-11 flex items-center justify-center">
              <svg width="56" height="44" viewBox="0 0 56 44" fill="none">
                {/* Mascot Torso (Setengah Badan) */}
                <path
                  d="M 16 32 Q 14 44 14 44 L 42 44 Q 42 44 40 32 Z"
                  fill="#181C26"
                  stroke="#D9A544"
                  strokeWidth="1.3"
                />

                {/* Torso Center Cyber Stripe */}
                <line x1="28" y1="34" x2="28" y2="44" stroke="#D9A544" strokeWidth="1.5" />

                {/* Mascot Head */}
                <rect x="9" y="8" width="38" height="26" rx="13" fill="#1C212D" stroke="#D9A544" strokeWidth="1.5" />

                {/* Cute Ears */}
                <path d="M 13 10 L 10 3 L 18 7 Z" fill="#D9A544" />
                <path d="M 43 10 L 46 3 L 38 7 Z" fill="#D9A544" />

                {/* Left Big Shiny Eye */}
                <ellipse cx="20" cy="20" rx="4.5" ry="6" fill="#0A0C0F" />
                <ellipse cx="20" cy="20" rx="3.5" ry="5" fill="#38BDF8" />
                <circle cx="18.5" cy="18" r="1.5" fill="#FFFFFF" />
                <circle cx="21.5" cy="22" r="0.8" fill="#FFFFFF" />

                {/* Right Big Shiny Eye */}
                <ellipse cx="36" cy="20" rx="4.5" ry="6" fill="#0A0C0F" />
                <ellipse cx="36" cy="20" rx="3.5" ry="5" fill="#38BDF8" />
                <circle cx="34.5" cy="18" r="1.5" fill="#FFFFFF" />
                <circle cx="37.5" cy="22" r="0.8" fill="#FFFFFF" />

                {/* Rosy Blush Cheeks */}
                <circle cx="13" cy="24" r="2.2" fill="#F43F5E" opacity="0.8" />
                <circle cx="43" cy="24" r="2.2" fill="#F43F5E" opacity="0.8" />

                {/* Cute Smile */}
                <path d="M 25 24 Q 28 26.5 31 24" stroke="#D9A544" strokeWidth="1.4" strokeLinecap="round" />

                {/* Left Paw Resting on Top of the Letters */}
                <rect x="9" y="30" width="8" height="6" rx="3" fill="#D9A544" stroke="#0B0D10" strokeWidth="0.8" />
              </svg>

              {/* Animated Waving Right Hand */}
              <motion.div
                className="absolute top-2 -right-1 origin-bottom-left"
                animate={{
                  rotate: [0, 35, -20, 35, -12, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <circle cx="7.5" cy="7.5" r="5.5" fill="#D9A544" stroke="#0B0D10" strokeWidth="1" />
                  <circle cx="5" cy="5" r="1.5" fill="#FFFFFF" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 2. Clean Solid Text "Hi, I'm" ── */}
      <span className="relative z-10 font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.2rem] text-paper leading-[0.96] tracking-[-0.02em]">
        Hi, I&apos;m
      </span>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Premium Natural Hero Background
   - Rich multi-layer organic gradient base (deep navy → midnight blue)
   - SVG grain/noise texture overlay for depth & warmth
   - Flowing animated aurora blobs (amber, cyan, violet)
   - Diagonal light ray accents
   - Animated shimmer ring pulses
   - Subtle floating stardust nodes
───────────────────────────────────────────────────────────── */
function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">

      {/* ── 1. Rich Deep Navy Base (multi-stop luminous studio gradient) ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 130% 90% at 20% 10%, #222b40 0%, transparent 60%),
            radial-gradient(ellipse 110% 80% at 80% 0%, #17243c 0%, transparent 58%),
            radial-gradient(ellipse 90% 70% at 50% 100%, #12192b 0%, transparent 65%),
            linear-gradient(160deg, #13192a 0%, #0d1220 45%, #090d16 100%)
          `,
        }}
      />

      {/* ── 2. SVG Grain / Noise Texture Overlay (Organic Natural Texture) ── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* ── 3. Dot Matrix Grid (Amber warm dots, fading from center) ── */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(rgba(217, 165, 68, 0.25) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 35%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 35%, transparent 80%)',
        }}
      />

      {/* ── 4. Diagonal Light Ray Accents ── */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 80px,
              rgba(255, 255, 255, 0.15) 80px,
              rgba(255, 255, 255, 0.15) 81px
            )
          `,
        }}
      />

      {/* ── 5. Left Warm Amber Aurora (Breathing, Drifting) ── */}
      <motion.div
        className="absolute -top-20 -left-24 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(217,165,68,0.28) 0%, rgba(245,158,11,0.15) 40%, transparent 68%)',
          filter: 'blur(90px)',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7], x: [0, 35, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── 6. Right Sapphire/Teal Aurora (Behind Card) ── */}
      <motion.div
        className="absolute top-0 -right-20 w-[750px] h-[750px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.22) 0%, rgba(59,130,246,0.18) 45%, transparent 72%)',
          filter: 'blur(100px)',
        }}
        animate={{ scale: [1, 1.28, 1], opacity: [0.75, 1, 0.75], x: [0, -30, 0], y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* ── 7. Bottom-Center Violet Bloom ── */}
      <motion.div
        className="absolute -bottom-32 left-1/3 w-[650px] h-[650px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(99,102,241,0.12) 50%, transparent 75%)',
          filter: 'blur(110px)',
        }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
      />

      {/* ── 8. Mid Warm Rose/Coral Accent (Subtle Center Warmth) ── */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251,113,133,0.08) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* ── 9. Animated Shimmer Ring Pulses (Natural Depth Rings) ── */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            left: '50%',
            top: '45%',
            width: `${340 + i * 160}px`,
            height: `${340 + i * 160}px`,
            marginLeft: `-${(340 + i * 160) / 2}px`,
            marginTop: `-${(340 + i * 160) / 2}px`,
            borderColor: `rgba(217, 165, 68, ${0.06 - i * 0.015})`,
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5 + i * 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 }}
        />
      ))}

      {/* ── 10. Constellation SVG Web ── */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(217,165,68,0.5)" />
            <stop offset="50%" stopColor="rgba(56,189,248,0.25)" />
            <stop offset="100%" stopColor="rgba(168,85,247,0.35)" />
          </linearGradient>
        </defs>
        <polyline points="60,160 160,240 255,195 350,310" fill="none" stroke="url(#cg)" strokeWidth="0.7" strokeDasharray="5,5" />
        <polyline points="820,100 930,195 1060,150 1180,270" fill="none" stroke="url(#cg)" strokeWidth="0.7" strokeDasharray="5,5" />
        <polyline points="400,80 480,140 560,100 640,180" fill="none" stroke="url(#cg)" strokeWidth="0.6" strokeDasharray="3,6" />
        <circle cx="60" cy="160" r="2.5" fill="#D9A544" opacity="0.8" />
        <circle cx="160" cy="240" r="2" fill="#38BDF8" opacity="0.7" />
        <circle cx="255" cy="195" r="2.5" fill="#D9A544" opacity="0.8" />
        <circle cx="350" cy="310" r="2" fill="#A855F7" opacity="0.7" />
        <circle cx="820" cy="100" r="2.5" fill="#38BDF8" opacity="0.8" />
        <circle cx="930" cy="195" r="2" fill="#D9A544" opacity="0.7" />
        <circle cx="1060" cy="150" r="2.5" fill="#A855F7" opacity="0.8" />
        <circle cx="480" cy="140" r="2" fill="#D9A544" opacity="0.6" />
        <circle cx="560" cy="100" r="2" fill="#38BDF8" opacity="0.6" />
      </svg>

      {/* ── 11. Floating Stardust Particles ── */}
      {[
        { x: '10%', y: '20%', size: 2.5, delay: 0, color: 'rgba(217,165,68,0.8)' },
        { x: '88%', y: '15%', size: 3, delay: 1.5, color: 'rgba(56,189,248,0.8)' },
        { x: '22%', y: '72%', size: 2, delay: 3.5, color: 'rgba(217,165,68,0.7)' },
        { x: '75%', y: '66%', size: 3.5, delay: 0.8, color: 'rgba(168,85,247,0.75)' },
        { x: '48%', y: '10%', size: 2, delay: 2.5, color: 'rgba(255,255,255,0.9)' },
        { x: '62%', y: '84%', size: 2.5, delay: 4.5, color: 'rgba(56,189,248,0.7)' },
        { x: '35%', y: '35%', size: 1.5, delay: 6, color: 'rgba(255,255,255,0.6)' },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
          animate={{
            y: [0, -32, 0],
            x: [0, i % 2 === 0 ? 16 : -16, 0],
            opacity: [0.25, 1, 0.25],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + i * 1.1,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}

      {/* ── 12. Top Studio Rim Light (Cahaya dari Atas seperti Studio Professional) ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent 5%, rgba(217,165,68,0.35) 30%, rgba(255,255,255,0.2) 50%, rgba(56,189,248,0.3) 70%, transparent 95%)',
          boxShadow: '0 0 60px 8px rgba(217,165,68,0.12)',
        }}
      />

      {/* ── 13. Slow Color-Breath Gradient Overlay (Bernapas Perlahan, tidak alay) ── */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 90% 50% at 50% 0%, rgba(217,165,68,0.04) 0%, transparent 60%)',
            'radial-gradient(ellipse 90% 50% at 50% 0%, rgba(56,189,248,0.04) 0%, transparent 60%)',
            'radial-gradient(ellipse 90% 50% at 50% 0%, rgba(139,92,246,0.04) 0%, transparent 60%)',
            'radial-gradient(ellipse 90% 50% at 50% 0%, rgba(217,165,68,0.04) 0%, transparent 60%)',
          ],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── 14. Bottom Seamless Gradient Blend (Transisi Halus ke #07090D) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(7,9,13,0.3) 35%, rgba(7,9,13,0.75) 70%, #07090D 100%)',
        }}
      />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Roller Typewriter Component (Hanya Menutup yang Digulung)
   - Mengetik: Teks & kotak kuning muncul diketik langsung huruf per huruf.
   - Menutup: Digulung rapi dan halus ke arah kiri oleh silinder 3D emas.
   - Tidak ada unrolling ganda (No double animation).
───────────────────────────────────────────────────────────── */
function RollerTypewriterBadge() {
  const [phase, setPhase] = useState('typing') // 'typing' | 'holding' | 'rolling' | 'pause'
  const [displayText, setDisplayText] = useState('')
  const [rollProgress, setRollProgress] = useState(1) // 1.0 = fully open, 0.0 = fully rolled up
  const fullText = ROLE

  // 1. Typing Logic
  useEffect(() => {
    let timer

    if (phase === 'typing') {
      if (displayText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1))
        }, 90) // Relaxed, readable typing pace
      } else {
        // Hold for reading (3.8 seconds so it is easy to read)
        timer = setTimeout(() => {
          setPhase('holding')
        }, 3800)
      }
    } else if (phase === 'holding') {
      // Start roll-up animation
      setRollProgress(1)
      setPhase('rolling')
    } else if (phase === 'pause') {
      // Clean reset: start typing fresh
      timer = setTimeout(() => {
        setDisplayText('')
        setRollProgress(1)
        setPhase('typing')
      }, 500)
    }

    return () => clearTimeout(timer)
  }, [displayText, phase, fullText])

  // 2. Slow & Smooth Roll-Up Animation (Right to Left: 1.0 -> 0.0, 3.2s duration)
  useEffect(() => {
    if (phase !== 'rolling') return

    let startTime = performance.now()
    const duration = 3200 // Slower, very smooth and natural roll-up (3.2 seconds)

    let frameId
    const step = (now) => {
      const elapsed = Math.min(now - startTime, duration)
      const linear = elapsed / duration
      // Smooth cubic easing for natural momentum
      const smoothP = 1 - easeInOutCubic(linear)

      setRollProgress(smoothP)

      if (elapsed < duration) {
        frameId = requestAnimationFrame(step)
      } else {
        setRollProgress(0)
        setTimeout(() => {
          setPhase('pause')
        }, 300)
      }
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [phase])

  // Precise sub-pixel clip mask during rolling
  const clipInset =
    phase === 'pause'
      ? 100
      : phase === 'rolling'
        ? Math.max(0, Math.min(100, (1 - rollProgress) * 100))
        : 0

  // 3D cylinder continuous rolling rotation
  const rollRotation = -(1 - rollProgress) * 1440

  return (
    <div className="relative inline-flex items-center min-h-[44px] select-none py-1 overflow-visible">
      {/* ── 1. The Main Golden Ribbon Badge ── */}
      <div
        className="relative overflow-hidden rounded-lg flex items-center px-4 py-2 font-mono text-base sm:text-lg md:text-xl font-bold text-[#0B0D11] whitespace-nowrap"
        style={{
          clipPath: `inset(0 ${clipInset.toFixed(2)}% 0 0 round 8px)`,
          WebkitClipPath: `inset(0 ${clipInset.toFixed(2)}% 0 0 round 8px)`,
          background: 'linear-gradient(135deg, #D9A544 0%, #F5C767 50%, #D9A544 100%)',
          boxShadow:
            phase !== 'pause' && (phase !== 'rolling' || rollProgress > 0.05)
              ? '0 4px 20px rgba(217, 165, 68, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
              : 'none',
          border: '1px solid rgba(255, 235, 170, 0.6)',
        }}
      >
        {/* progressive typed characters during typing, full text during holding/rolling */}
        {phase === 'typing' ? displayText : fullText}

        {phase === 'typing' && (
          <span
            aria-hidden="true"
            className="inline-block w-[3px] h-[1.15em] bg-[#0B0D11] ml-1.5 align-middle rounded-full"
            style={{
              animation: 'cursorPulse 1.2s ease-in-out infinite',
            }}
          />
        )}
      </div>

      {/* ── 2. 3D Rolling Gold Cylinder (Hanya Muncul Saat Digulung / Menutup Perlahan) ── */}
      {phase === 'rolling' && rollProgress > 0.01 && (
        <div
          className="absolute top-1/2 pointer-events-none z-30 flex items-center justify-center"
          style={{
            left: `calc(${rollProgress * 100}% - 7px)`,
            transform: 'translateY(-50%)',
            height: '42px',
            width: '15px',
          }}
        >
          {/* Ambient Drop Shadow on the surface */}
          <div className="absolute inset-0 -left-1.5 bg-black/50 blur-[4px] rounded-full scale-y-105" />

          {/* 3D Cylindrical Roll Body */}
          <div
            className="relative w-full h-full rounded-[3px] overflow-hidden flex flex-col justify-between"
            style={{
              background:
                'linear-gradient(90deg, #ffe599 0%, #D9A544 32%, #9e7018 70%, #4f3306 100%)',
              boxShadow: '-2px 0 6px rgba(0,0,0,0.5), inset 1px 0 2px rgba(255,255,255,0.7)',
              border: '1px solid rgba(255, 235, 170, 0.6)',
            }}
          >
            {/* Top Spiral Rolled Cap */}
            <div
              className="w-full h-2 rounded-t-full bg-gradient-to-b from-[#ffe599] to-[#d9a544] flex items-center justify-center"
              style={{
                transform: `rotate(${rollRotation}deg)`,
              }}
            >
              <div className="w-1.5 h-1 rounded-full border border-[#8c6418]/80 bg-[#3d2703]" />
            </div>

            {/* Specular Light Streak along Cylinder Spine */}
            <div className="w-0.5 h-full bg-white/60 absolute left-1.5 top-0" />

            {/* Bottom Spiral Rolled Cap */}
            <div
              className="w-full h-2 rounded-b-full bg-gradient-to-t from-[#8c6418] to-[#d9a544] flex items-center justify-center"
              style={{
                transform: `rotate(${rollRotation}deg)`,
              }}
            >
              <div className="w-1.5 h-1 rounded-full border border-[#8c6418]/80 bg-[#3d2703]" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Realistic Luxury Flat Ribbon Lanyard & Swivel Snap Hook Connector
───────────────────────────────────────────────────────────── */
function LanyardAnchor() {
  return (
    <div className="absolute -top-80 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
      {/* Sleek Flush Metallic Ceiling Slot (Scaled to 40px strap) */}
      <div className="w-16 h-3 bg-gradient-to-b from-[#1E232E] to-[#0A0C10] rounded-b-md shadow-lg border-b border-white/20" />
    </div>
  )
}

const LANYARD_REST_HEIGHT = 126 // Exact distance from ceiling to top of leather sleeve
const STRAP_HALF_W = 20 // 40px wide custom luxury ribbon strap

function DynamicLanyard({ x, y, rotateZ }) {
  // Dynamic curved Bezier ribbon path with trigonometric rotation matching the card's tilt
  const strapPath = useTransform([x, y, rotateZ], ([cx, cy, rz]) => {
    const rad = ((rz || 0) * Math.PI) / 180
    // Origin of card motion.div is at (cx, cy + 343) for marginTop: 55px (longer lanyard)
    // We anchor 8px inside the sleeve (local offset -56px) so the ribbon inserts seamlessly under the collar.
    const sleeveX = cx + 56 * Math.sin(rad)
    const sleeveY = cy + 343 - 56 * Math.cos(rad)

    // Tangent vectors along the rotated leather sleeve top edge
    const cosR = Math.cos(rad)
    const sinR = Math.sin(rad)

    // Left and Right bottom anchor points of the strap
    const xL = sleeveX - STRAP_HALF_W * cosR
    const yL = sleeveY - STRAP_HALF_W * sinR
    const xR = sleeveX + STRAP_HALF_W * cosR
    const yR = sleeveY + STRAP_HALF_W * sinR

    // Smooth Bezier control points from ceiling (0, 0)
    const cpX = sleeveX * 0.45
    const cpY = sleeveY * 0.52

    return [
      `M ${-STRAP_HALF_W},0`,
      `Q ${cpX - STRAP_HALF_W},${cpY} ${xL},${yL}`,
      `L ${xR},${yR}`,
      `Q ${cpX + STRAP_HALF_W},${cpY} ${STRAP_HALF_W},0`,
      `Z`,
    ].join(' ')
  })

  // Center subtle woven sheen highlight
  const sheenPath = useTransform([x, y, rotateZ], ([cx, cy, rz]) => {
    const rad = ((rz || 0) * Math.PI) / 180
    const sleeveX = cx + 56 * Math.sin(rad)
    const sleeveY = cy + 343 - 56 * Math.cos(rad)
    const cosR = Math.cos(rad)
    const sinR = Math.sin(rad)
    const hw = 7

    const xL = sleeveX - hw * cosR
    const yL = sleeveY - hw * sinR
    const xR = sleeveX + hw * cosR
    const yR = sleeveY + hw * sinR

    const cpX = sleeveX * 0.45
    const cpY = sleeveY * 0.52

    return [
      `M ${-hw},0`,
      `Q ${cpX - hw},${cpY} ${xL},${yL}`,
      `L ${xR},${yR}`,
      `Q ${cpX + hw},${cpY} ${hw},0`,
      `Z`,
    ].join(' ')
  })

  return (
    <svg
      className="absolute -top-80 left-1/2 -translate-x-1/2 overflow-visible pointer-events-none z-10"
      width="400"
      height="650"
      viewBox="-200 0 400 650"
    >
      <defs>
        {/* Drop shadow for 3D depth */}
        <filter id="lanyardDropShadow" x="-50%" y="-30%" width="200%" height="160%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#000000" floodOpacity="0.75" />
        </filter>

        {/* Natural Dark Charcoal Grey / Obsidian Woven Fabric Gradient */}
        <linearGradient id="nylonStrapGrad" gradientUnits="userSpaceOnUse" x1={-STRAP_HALF_W} y1="0" x2={STRAP_HALF_W} y2="0">
          <stop offset="0%" stopColor="#101318" />
          <stop offset="12%" stopColor="#1A1F28" />
          <stop offset="50%" stopColor="#252C39" />
          <stop offset="88%" stopColor="#1A1F28" />
          <stop offset="100%" stopColor="#101318" />
        </linearGradient>

        {/* Soft Natural Satin Sheen */}
        <linearGradient id="strapSheenGrad" gradientUnits="userSpaceOnUse" x1="-8" y1="0" x2="8" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* ── Clean Natural Dark Grey / Black Flat Ribbon Strap ── */}
      <g filter="url(#lanyardDropShadow)">
        {/* Solid Natural Woven Dark Grey Ribbon */}
        <motion.path
          d={strapPath}
          fill="url(#nylonStrapGrad)"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.8"
        />

        {/* Soft Ambient Satin Reflection */}
        <motion.path d={sheenPath} fill="url(#strapSheenGrad)" />
      </g>
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────
   Swivel Snap Hook Hardware Assembly (Mounted Directly onto Card)
───────────────────────────────────────────────────────────── */
function CardSwivelHardware() {
  return (
    <div className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none z-30 flex flex-col items-center">
      <svg width="60" height="75" viewBox="-30 0 60 75" fill="none" className="overflow-visible">
        <defs>
          {/* Leather Sleeve Gradient */}
          <linearGradient id="hwLeatherGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0B0D10" />
            <stop offset="25%" stopColor="#1A1D25" />
            <stop offset="75%" stopColor="#222732" />
            <stop offset="100%" stopColor="#0B0D10" />
          </linearGradient>

          {/* Gunmetal / Stainless Steel Hook Gradient */}
          <linearGradient id="hwGunmetalGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#353A45" />
            <stop offset="25%" stopColor="#8A92A0" />
            <stop offset="50%" stopColor="#E2E6EE" />
            <stop offset="75%" stopColor="#8A92A0" />
            <stop offset="100%" stopColor="#282C34" />
          </linearGradient>

          <linearGradient id="hwDarkMetalGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#181B20" />
            <stop offset="40%" stopColor="#4A5260" />
            <stop offset="100%" stopColor="#181B20" />
          </linearGradient>
        </defs>

        {/* ── A. Black Stitched Leather Sleeve (Wraps bottom of strap) ── */}
        <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.9))">
          {/* Leather Body */}
          <rect
            x="-22"
            y="0"
            width="44"
            height="21"
            rx="3.5"
            fill="url(#hwLeatherGrad)"
            stroke="#080A0D"
            strokeWidth="0.9"
          />

          {/* Leather Crease & Side Stitches */}
          <line x1="-18.5" y1="3" x2="-18.5" y2="18" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8" strokeDasharray="2,1.5" />
          <line x1="18.5" y1="3" x2="18.5" y2="18" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8" strokeDasharray="2,1.5" />

          {/* Center Fold Crease */}
          <line x1="-19" y1="15" x2="19" y2="15" stroke="rgba(0,0,0,0.75)" strokeWidth="1" />
          <line x1="-19" y1="16" x2="19" y2="16" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        </g>

        {/* ── B. Metal Loop Ring Connecting Leather to Swivel ── */}
        <g filter="drop-shadow(0 2px 3px rgba(0,0,0,0.8))">
          {/* Chrome Swivel O-Ring */}
          <ellipse cx="0" cy="22" rx="5.5" ry="4" stroke="url(#hwGunmetalGrad)" strokeWidth="2.4" fill="none" />
        </g>

        {/* ── C. Swivel Collar / Neck ── */}
        <g filter="drop-shadow(0 2px 3px rgba(0,0,0,0.7))">
          <rect x="-3.5" y="25" width="7" height="4.5" rx="1.2" fill="url(#hwGunmetalGrad)" stroke="#1A1D24" strokeWidth="0.5" />
          <ellipse cx="0" cy="25" rx="3.5" ry="1" fill="#FFFFFF" opacity={0.6} />
        </g>

        {/* ── D. Square Block Housing with Engraved Logo (Blok Kotak Logam) ── */}
        <g filter="drop-shadow(0 3px 5px rgba(0,0,0,0.85))">
          {/* Main Brushed Steel Square Block */}
          <rect
            x="-8"
            y="28.5"
            width="16"
            height="11.5"
            rx="1.5"
            fill="url(#hwGunmetalGrad)"
            stroke="#15181E"
            strokeWidth="0.8"
          />
          {/* Top bevel highlight */}
          <line x1="-7" y1="29.3" x2="7" y2="29.3" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
          {/* Left bevel highlight */}
          <line x1="-7.3" y1="29.5" x2="-7.3" y2="38.5" stroke="rgba(255,255,255,0.5)" strokeWidth="0.7" />

          {/* Micro Engraved Logo Badge ("CAS" Style Block Inset) */}
          <rect x="-5" y="31.5" width="10" height="5.5" rx="0.8" fill="#181B22" stroke="#2D3340" strokeWidth="0.5" />
          <text
            x="0"
            y="35.6"
            fill="#E2E6EE"
            fontSize="3.4"
            fontFamily="monospace"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="0.4"
          >
            CAS
          </text>
        </g>

        {/* ── E. Dual Vertical Shackle Stems & Spring Lever (Batang Pengait Vertikal) ── */}
        <g filter="drop-shadow(0 3px 6px rgba(0,0,0,0.9))">
          {/* Right Solid Chrome Spine Rod */}
          <rect
            x="3.5"
            y="39"
            width="3.4"
            height="19"
            rx="1.5"
            fill="url(#hwGunmetalGrad)"
            stroke="#15181E"
            strokeWidth="0.6"
          />
          {/* Spine Chrome Light Specular Streak */}
          <line x1="4.5" y1="40" x2="4.5" y2="57" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" opacity={0.8} />

          {/* Left Spring-Loaded Sliding Gate Rod */}
          <rect
            x="-6.8"
            y="39"
            width="3.2"
            height="14"
            rx="1.2"
            fill="url(#hwDarkMetalGrad)"
            stroke="#15181E"
            strokeWidth="0.6"
          />
          {/* Gate Sliding Collar Notch */}
          <rect x="-7.4" y="43" width="4.4" height="3" rx="0.6" fill="url(#hwGunmetalGrad)" stroke="#111" strokeWidth="0.4" />
        </g>

        {/* ── F. Lower Arch / Saddle Clamp (Permanently Locked into Card Slot) ── */}
        <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.95))">
          {/* Curved Saddle Bracket Sitting Over Slot Bezel */}
          <path
            d="M -9.5 61 C -9.5 56 -4 54 0 54 C 4 54 9.5 56 9.5 61 L 7 61 C 7 57.5 3.5 56.2 0 56.2 C -3.5 56.2 -7 57.5 -7 61 Z"
            fill="url(#hwGunmetalGrad)"
            stroke="#15181E"
            strokeWidth="0.7"
          />

          {/* Main Loop Passing Down Into the Card Slot */}
          <path
            d="M -3.5 52 C -3.5 60 -3 64 0 64 C 3 64 3.5 60 3.5 52"
            fill="none"
            stroke="url(#hwGunmetalGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Inner Loop Shadow */}
          <path
            d="M -2 53 C -2 59 -1.5 62 0 62 C 1.5 62 2 59 2 53"
            fill="none"
            stroke="#080A0D"
            strokeWidth="1.2"
          />

          {/* Chrome Specular Highlights */}
          <path
            d="M 3.8 54 C 3.8 59 3.2 62.5 0 62.5"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.8"
            opacity={0.75}
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  )
}



/* ─────────────────────────────────────────────────────────────
   Hanging 3D Interactive ID Card (Real-Time Physics + Pure Spring Recoil)
───────────────────────────────────────────────────────────── */
function HangingIDCard() {
  const isDragging = useRef(false)
  const [isFlipped, setIsFlipped] = useState(false)

  // Pure Motion Values for instantaneous zero-lag drag
  const cardX = useMotionValue(0)
  const cardY = useMotionValue(0)

  // Real-time 3D transforms directly linked to drag coordinates (Natural pendulum swing)
  const rotateZ = useTransform(cardX, [-300, 0, 300], [-25, 0, 25])

  // Natural subtle 3D perspective tilt on drag (Clicking still flips the card 180°)
  const dragTiltY = useTransform(cardX, [-300, 0, 300], [-16, 0, 16])
  const baseFlip = isFlipped ? 180 : 0
  const flipSpring = useSpring(baseFlip, { stiffness: 160, damping: 14 })

  useEffect(() => {
    flipSpring.set(isFlipped ? 180 : 0)
  }, [isFlipped, flipSpring])

  const rotateY = useTransform([flipSpring, dragTiltY], ([f, d]) => f + d)
  const rotateX = useTransform(cardY, [-180, 0, 180], [16, 0, -16])

  // Dynamic Specular Light Glare
  const glareX = useTransform([cardX, rotateY], ([cx, ry]) => -140 + cx * 1.2 + ry * 1.5)
  const glareOpacity = useTransform([cardX, cardY, rotateY], ([cx, cy, ry]) => {
    const activity = Math.sqrt(cx * cx + cy * cy) * 0.022 + Math.abs(ry) * 0.01 + 0.18
    return Math.min(0.95, Math.max(0.15, activity))
  })
  const backGlareOpacity = useTransform(glareOpacity, (o) => o * 0.35)

  // Scale during drag
  const [scale, setScale] = useState(1)

  // Idle natural floating & realistic pendulum swinging motion (when not touched)
  useEffect(() => {
    let frameId
    let startTime = Date.now()

    const animateIdle = () => {
      if (!isDragging.current) {
        const elapsed = (Date.now() - startTime) / 1000
        // Natural multi-frequency pendulum swing (X)
        const swayX = Math.sin(elapsed * 1.4) * 18 + Math.sin(elapsed * 2.2) * 6
        // Organic vertical floating & breathing (Y)
        const floatY = Math.cos(elapsed * 1.1) * 8 + Math.sin(elapsed * 2.2) * 3
        cardX.set(swayX)
        cardY.set(floatY)
      }
      frameId = requestAnimationFrame(animateIdle)
    }

    const timer = setTimeout(() => {
      frameId = requestAnimationFrame(animateIdle)
    }, 400)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(frameId)
    }
  }, [cardX, cardY])

  return (
    <div
      className="relative flex flex-col items-center select-none"
      style={{
        perspective: '1400px',
      }}
    >
      {/* ── 1. Metal Swivel Clip Anchor at Top ── */}
      <LanyardAnchor />

      {/* ── 2. Fabric Lanyard Cord (follows card motion & tilt) ── */}
      <DynamicLanyard x={cardX} y={cardY} rotateZ={rotateZ} />

      {/* ── 3. Interactive Draggable 3D Card Assembly ── */}
      <motion.div
        className="relative cursor-grab active:cursor-grabbing origin-top z-20"
        style={{
          x: cardX,
          y: cardY,
          rotateZ,
          rotateY,
          rotateX,
          scale,
          marginTop: '55px',
          transformStyle: 'preserve-3d',
        }}
        drag
        dragMomentum={true}
        dragConstraints={{ top: -180, bottom: 340, left: -300, right: 300 }}
        dragElastic={0.12}
        dragTransition={{
          power: 0.18,
          timeConstant: 320,
          modifyTarget: (target) => target,
        }}
        onDragStart={() => {
          isDragging.current = true
          setScale(1.04)
        }}
        onDragEnd={(event, info) => {
          isDragging.current = false
          setScale(1)

          // BRUTAL bounce: very low damping ratio (~0.07) = many oscillations before stopping
          animate(cardX, 0, {
            type: 'spring',
            velocity: info.velocity.x * 1.8,
            stiffness: 180,
            damping: 3,
            mass: 2.5,
            restDelta: 0.01,
          })

          animate(cardY, 0, {
            type: 'spring',
            velocity: info.velocity.y * 1.8,
            stiffness: 180,
            damping: 3,
            mass: 2.5,
            restDelta: 0.01,
          })
        }}
        whileHover={{ scale: 1.02 }}
      >
        {/* ── Metal Swivel Hook & Leather Sleeve Connector (Permanently locked into Card Slot) ── */}
        <CardSwivelHardware />

        {/* ── 3D DOUBLE-SIDED CARD FLIP CONTAINER ── */}
        <div
          className="relative w-64 sm:w-72 md:w-80 rounded-2xl cursor-pointer"
          style={{
            transformStyle: 'preserve-3d',
          }}
          onClick={() => setIsFlipped(!isFlipped)}
          title="Klik untuk membalik kartu (Flip Card)"
        >
          {/* ════════════════ FRONT SIDE ════════════════ */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(155deg, #181d2a 0%, #121622 45%, #0c0f16 100%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 24px 50px rgba(0, 0, 0, 0.65), 0 4px 12px rgba(0, 0, 0, 0.4)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            {/* Top Natural Badge Slot */}
            <div className="pt-2.5 pb-2 px-4 flex justify-center items-center">
              <div
                className="w-10 h-3 rounded-full bg-[#08090C] border border-[#2B2F38]"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.08)',
                }}
              />
            </div>

            {/* Photo Container */}
            <div className="px-3 pb-3">
              <div
                className="relative h-[21rem] sm:h-[23rem] md:h-[26rem] rounded-xl overflow-hidden bg-[#0A0C0F]"
                style={{
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
                }}
              >
                {/* Rich Natural Color Portrait */}
                <img
                  src="/profile-photo.jpg?v=2"
                  alt="Christopher Albert Santoso"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  style={{
                    objectPosition: '72% 48%',
                    transform: 'scale(1.42)',
                    transformOrigin: '72% 48%',
                    filter: 'contrast(1.04) saturate(1.06) brightness(1.02)',
                  }}
                  draggable={false}
                />

                {/* Subtle Edge Vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 35%, transparent 55%, rgba(10, 12, 15, 0.65) 100%)',
                  }}
                />

                {/* Smooth Bottom Shadow for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1014] via-[#0E1014]/60 to-transparent opacity-85 pointer-events-none" />

                {/* ── Realistic Crystal Glass Specular Glare ── */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    x: glareX,
                    opacity: glareOpacity,
                    background:
                      'linear-gradient(115deg, transparent 38%, rgba(255, 255, 255, 0.22) 46%, rgba(255, 255, 255, 0.92) 50%, rgba(255, 235, 170, 0.75) 52%, rgba(255, 255, 255, 0.22) 55%, transparent 63%)',
                    mixBlendMode: 'screen',
                  }}
                />

                {/* Clean Natural Card Front Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <p className="font-display font-bold text-xl sm:text-2xl text-paper tracking-wide leading-snug">
                    Christopher Albert Santoso
                  </p>

                  <p className="font-mono text-xs sm:text-sm text-paper/80 mt-1 tracking-wider font-medium">
                    Fullstack Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ════════════════ BACK SIDE ════════════════ */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(145deg, #13161c 0%, #090a0d 100%)',
              border: '1px solid rgba(217, 165, 68, 0.3)',
              boxShadow: '0 24px 50px rgba(0, 0, 0, 0.6)',
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            {/* Top Badge Slot */}
            <div className="flex justify-center items-center">
              <div
                className="w-10 h-3 rounded-full bg-[#08090C] border border-[#2B2F38]"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.08)',
                }}
              />
            </div>

            {/* Magnetic Stripe */}
            <div className="w-full h-9 bg-[#050608] border-y border-hairline/30 flex items-center px-4 -mx-4 my-2">
              <div className="w-full h-1 bg-gradient-to-r from-blue-400/40 via-amber/40 to-blue-400/40" />
            </div>

            {/* Dynamic Glossy Sheen for Back (Very Subtle & Soft) */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                x: glareX,
                opacity: backGlareOpacity,
                background:
                  'linear-gradient(115deg, transparent 44%, rgba(255, 255, 255, 0.05) 48%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 235, 170, 0.18) 52%, rgba(255, 255, 255, 0.05) 54%, transparent 58%)',
                mixBlendMode: 'screen',
              }}
            />

            {/* Back Information & EMV Chip Simulation */}
            <div className="space-y-4 px-2">
              <div className="flex items-center justify-between">
                {/* Gold EMV Chip */}
                <div className="w-10 h-8 rounded bg-gradient-to-br from-[#E2B755] via-[#A8802C] to-[#6E5118] border border-[#F5D580]/50 relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 border border-black/30 grid grid-cols-2 grid-rows-2" />
                </div>
                <div className="text-right font-mono text-[9px] text-muted">
                  <p>AUTH LEVEL: 01</p>
                  <p className="text-amber">ROOT ACCESS</p>
                </div>
              </div>

              {/* Stack Details */}
              <div className="bg-[#0b0d12] p-3 rounded-lg border border-hairline/40 font-mono text-xs space-y-1.5">
                <p className="text-paper font-semibold">CORE CAPABILITIES</p>
                <div className="text-[11px] text-muted space-y-0.5">
                  <p>• Web: React, Next.js, HTML5, CSS3</p>
                  <p>• Backend: Laravel, Node.js, REST API</p>
                  <p>• Mobile & DB: Flutter, Dart, MySQL</p>
                </div>
              </div>

              {/* Signature Strip */}
              <div className="bg-[#1a1d24] p-2 rounded border border-hairline/30 flex items-center justify-between">
                <span className="font-mono text-[9px] text-muted/60">AUTHORIZED SIGNATURE</span>
                <span className="font-serif italic text-amber text-sm font-bold tracking-wider">
                  Albert
                </span>
              </div>
            </div>

            {/* Simulated Barcode */}
            <div className="pt-2 border-t border-hairline/30 flex flex-col items-center">
              <div className="h-7 w-4/5 flex justify-between items-stretch bg-paper/90 px-2 py-1 rounded-sm">
                {[4, 2, 6, 1, 5, 3, 7, 2, 4, 1, 6, 3, 5, 2, 4, 1, 5, 2].map((w, i) => (
                  <div key={i} className="bg-ink" style={{ width: `${w}px` }} />
                ))}
              </div>
              <p className="font-mono text-[8px] text-muted/60 mt-1">ID: 123-DEV-2025</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/* ── Smooth Cinematic Entrance Animations ── */
const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
}

const textItem = {
  hidden: { opacity: 0, y: 35, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}

/* ── Main Hero ── */
export default function Hero({ isLoaded = false }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden pt-20 pb-12"
    >
      {/* ── 1. Dynamic Ambient Background System ── */}
      <HeroBackground />

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-20 py-8 sm:py-12 relative z-10">
        {/* Left — Text Information */}
        <motion.div
          className="flex-1 min-w-0 z-10"
          variants={textContainer}
          initial="hidden"
          {...(isLoaded
            ? {
              whileInView: 'visible',
              viewport: { once: false, amount: 0.15 },
            }
            : { animate: 'visible' })}
        >
          {/* ── "Hi, I'm" with Half-Body Peeking Mascot Animation ── */}
          <motion.div variants={textItem} className="mb-1">
            <PeekingTextMascot />
          </motion.div>

          {/* ── Clean Solid Bold Name ── */}
          <motion.h1
            variants={textItem}
            className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.6rem] leading-[0.96] tracking-[-0.02em] text-paper mt-1"
          >
            Christopher
            <br />
            Albert Santoso
          </motion.h1>

          <motion.div variants={textItem} className="mt-5">
            <RollerTypewriterBadge />
          </motion.div>

          {/* Full Color Modern Tech Stack Badges */}
          <motion.div variants={textItem} className="mt-6 flex flex-wrap gap-2.5 max-w-lg">
            {[
              { name: 'HTML5', bg: '#C2410C', text: '#FFFFFF', shadow: 'rgba(194, 65, 12, 0.35)' },
              { name: 'CSS3', bg: '#1D4ED8', text: '#FFFFFF', shadow: 'rgba(29, 78, 216, 0.35)' },
              { name: 'JavaScript', bg: '#3D3D3D', text: '#FFFFFF', shadow: 'rgba(255, 255, 255, 0.1)' },
              { name: 'React', bg: '#0284C7', text: '#FFFFFF', shadow: 'rgba(2, 132, 199, 0.35)' },
              { name: 'Next.js', bg: '#27272A', text: '#FAFAFA', shadow: 'rgba(255, 255, 255, 0.15)' },
              { name: 'Laravel', bg: '#DC2626', text: '#FFFFFF', shadow: 'rgba(220, 38, 38, 0.35)' },
              { name: 'Flutter', bg: '#0369A1', text: '#FFFFFF', shadow: 'rgba(3, 105, 161, 0.35)' },
              { name: 'MySQL', bg: '#0F766E', text: '#FFFFFF', shadow: 'rgba(15, 118, 110, 0.35)' },
            ].map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold tracking-tight transition-all duration-300 select-none hover:-translate-y-1 hover:brightness-110 cursor-default"
                style={{
                  backgroundColor: tech.bg,
                  color: tech.text,
                  boxShadow: `0 4px 14px ${tech.shadow}, inset 0 1px 0 rgba(255,255,255,0.2)`,
                }}
              >
                {tech.name}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — 3D Hanging ID Card */}
        <motion.div
          className="flex-shrink-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          {...(isLoaded
            ? {
              whileInView: { opacity: 1, scale: 1, y: 0 },
              viewport: { once: false, amount: 0.15 },
            }
            : { animate: { opacity: 1, scale: 1, y: 0 } })}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <HangingIDCard />
        </motion.div>
      </div>
    </section>
  )
}
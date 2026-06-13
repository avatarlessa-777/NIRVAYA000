"use client"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mux-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'playback-id'?: string
        autoplay?: string | boolean
        loop?: boolean
        muted?: boolean
        playsinline?: boolean
      }
    }
  }
}

import { motion } from "framer-motion"
import { useMemo, useState } from "react"

function generateParticles(count: number) {
  const particles = []
  for (let i = 0; i < count; i++) {
    const seed = i * 1.618033988749
    particles.push({
      id: i,
      left: `${(seed * 100) % 100}%`,
      size: 1 + ((seed * 3) % 2),
      opacity: 0.2 + ((seed * 0.4) % 0.4),
      duration: 8 + ((seed * 12) % 12),
      delay: (seed * 5) % 5,
      drift: -20 + ((seed * 40) % 40),
    })
  }
  return particles
}

const playbackIds = [
  "3hEqcxKdaxSuq6Mc028CgKeCofrvvSN1xr00zMtB1VHGk",
]

export function Hero() {
  const particles = useMemo(() => generateParticles(50), [])
  const [current, setCurrent] = useState(0)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0E1A]">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[80%] opacity-[0.12]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(27, 107, 138, 0.5), rgba(200, 148, 62, 0.2) 50%, transparent 80%)'
          }}
        />
      </div>

      <div className="relative w-[90%] max-w-6xl mx-auto z-[5]" style={{ aspectRatio: '16/9' }}>
        <div className="relative w-full h-full">
          <div
            className="absolute inset-0 bg-[#0D1118] overflow-hidden"
            style={{
              borderRadius: '12px',
              border: '1px solid rgba(200, 148, 62, 0.15)',
            }}
          >
            <mux-player
              playback-id="3hEqcxKdaxSuq6Mc028CgKeCofrvvSN1xr00zMtB1VHGk"
              autoplay="muted"
              loop
              muted
              playsinline
              min-resolution="720p"
              rendition-order="desc"
              style={{ width: '100%', height: '100%', border: 'none', '--controls': 'none' } as React.CSSProperties}
            />
          </div>

          <div
            className="absolute inset-y-0 left-0 w-1/4 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to right, #0A0E1A, transparent)',
              borderRadius: '12px 0 0 12px',
            }}
          />
          <div
            className="absolute inset-x-0 top-0 h-1/4 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to bottom, #0A0E1A, transparent)',
              borderRadius: '12px 12px 0 0',
            }}
          />
          <div
            className="absolute inset-y-0 right-0 w-1/4 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to left, #0A0E1A, transparent)',
              borderRadius: '0 12px 12px 0',
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to top, #0A0E1A, transparent)',
              borderRadius: '0 0 12px 12px',
            }}
          />
        </div>
      </div>



      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[15]">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gold animate-float-up"
            style={{
              left: particle.left,
              bottom: '-10px',
              width: particle.size,
              height: particle.size,
              '--particle-opacity': particle.opacity,
              '--particle-duration': `${particle.duration}s`,
              '--particle-delay': `${particle.delay}s`,
              '--particle-drift': `${particle.drift}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="relative z-20 mt-4 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-gold text-gold font-medium text-sm tracking-wide hover:bg-gold hover:text-[#0A0E1A] transition-all duration-300 rounded-sm"
          >
            Смотреть работы
          </a>
          <a
            href="#contacts"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-saffron text-foreground font-medium text-sm tracking-wide transition-all duration-300 saffron-glow rounded-sm"
          >
            Обсудить проект
          </a>
        </motion.div>
      </div>

      <div className="h-[100px]" />

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(200,148,62,0.08), transparent)'
        }}
      />
    </section>
  )
}

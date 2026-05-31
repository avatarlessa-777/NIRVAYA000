"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

// Stats with custom icons
const stats = [
  { 
    number: 50, 
    suffix: "+", 
    label: "проектов реализовано",
    icon: "triangle"
  },
  { 
    number: 0, 
    suffix: "", 
    label: "Воплотим любую идею",
    icon: "infinity",
    isSymbol: false,
    symbol: null
  },
  { 
    number: 0, 
    suffix: "", 
    label: "Не считаем правки — считаем качество",
    icon: "diamond",
    isSymbol: true,
    symbol: "◆"
  },
  { 
    number: 360, 
    suffix: "°", 
    label: "Полный цикл — от идеи до экрана",
    icon: "cycle"
  },
]

// Paragraph content
const paragraphs = [
  "Воображение — ваша территория. Воплощение — наша. Мы работаем с людьми, у которых есть видение, и превращаем его в кино. А если видения пока нет — достаточно искры. Одной идеи, ощущения, настроения. Мы раздуем из неё пламя и покажем то, что вы чувствовали, но не могли сформулировать.",
  "NIRVAYA STUDIO — первая продакшн-студия, разделённая на три самостоятельных отдела: дизайн, AI-генерация и монтаж. Это не просто команда — это пайплайн, отлаженный до секунды. Каждый этап проходит чётко, без задержек, без потерь качества. В каждом отделе — мастер своего дела, и с каждым из них у вас будет прямая связь.",
  "Максимум внимания. Максимум качества. Максимум включённости. Мы всегда рядом, всегда на связи, всегда говорим на одном языке. Вы для нас — не задача в списке, а человек, с которым мы делаем общее дело. Мы творим вместе, потому что лучшее рождается там, где есть доверие, открытость и общая цель."
]

// Custom SVG icons for stats
function StatIcon({ type }: { type: string }) {
  switch (type) {
    case "triangle":
      return (
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
          <path d="M12 2L22 20H2L12 2Z" stroke="#C8943E" strokeWidth="1.5" fill="none" />
          <circle cx="12" cy="14" r="1.5" fill="#C8943E" />
        </svg>
      )
    case "infinity":
      return null
    case "empty":
      return null
    case "diamond":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="#C8943E" strokeWidth="1.5" fill="none" />
        </svg>
      )
    case "cycle":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10" stroke="#C8943E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M22 2v6h-6" stroke="#C8943E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M22 8l-3.5-3.5" stroke="#C8943E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      )
    default:
      return null
  }
}

function AnimatedNumber({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)
  const animationRef = useRef<number | null>(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current || value === 0) return

    hasAnimatedRef.current = true
    const startTime = performance.now()
    const duration = 2000

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(easeOut * value)
      
      setDisplayValue(currentValue)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isInView, value])

  return (
    <span>
      {displayValue}{suffix}
    </span>
  )
}

export function About() {
  const ref = useRef(null)
  const statsRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 })
  const [showLines, setShowLines] = useState(false)

  // Show stat lines after count-up animation completes
  useEffect(() => {
    if (statsInView) {
      const timer = setTimeout(() => {
        setShowLines(true)
      }, 2200) // After 2s count-up + 200ms buffer
      return () => clearTimeout(timer)
    }
  }, [statsInView])

  return (
    <section id="about" className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Circuit board background pattern */}
      <div className="absolute inset-0 circuit-pattern" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Badge above glass container */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-heading font-normal text-sm tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8"
            style={{
              border: "1px solid rgba(200,148,62,0.3)",
              background: "rgba(200,148,62,0.05)",
              color: "rgba(200,148,62,0.8)",
              boxShadow: "0 0 15px rgba(200,148,62,0.1), 0 0 30px rgba(200,148,62,0.05)",
              animation: "pulse 3s ease-in-out infinite"
            }}
          >
            О Nirvaya Studio
          </motion.span>
        </div>

        {/* Glass container with text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-[750px] mx-auto mb-16"
          style={{
            background: "rgba(14,18,37,0.5)",
            border: "1px solid rgba(200,148,62,0.08)",
            backdropFilter: "blur(8px)",
            borderRadius: "16px",
            padding: "40px 32px"
          }}
        >
          {/* Breathing vertical line on the left */}
          <div 
            className="absolute left-0 top-[10%] h-[80%] w-px animate-breathing-opacity"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(200,148,62,0.4), transparent)"
            }}
          />

          {/* Paragraphs with staggered reveal */}
          <div className="pl-6">
            {paragraphs.map((text, index) => (
              <div key={index}>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className="text-foreground/70 text-lg md:text-xl"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', Georgia, serif", 
                    fontWeight: 400, 
                    fontSize: "18px",
                    lineHeight: "1.9", 
                    wordSpacing: "2px" 
                  }}
                >
                  {text}
                </motion.p>
                
                {/* Divider line between paragraphs (not after last) */}
                {index < paragraphs.length - 1 && (
                  <div 
                    className="my-6 mx-auto w-[60px] h-px animate-breathing-opacity"
                    style={{ 
                      background: "linear-gradient(to right, transparent, rgba(200,148,62,0.4), transparent)" 
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-16 border-t border-gold/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center flex flex-col items-center rounded-xl p-6 md:p-5 transition-all duration-300 hover:border-gold/25"
                style={{
                  border: '1px solid rgba(200,148,62,0.1)',
                  background: 'rgba(14,18,37,0.5)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                {/* Custom icon */}
                <div className="mb-4 h-6 flex items-center justify-center">
                  <StatIcon type={stat.icon} />
                </div>
                
                {/* Number or symbol or NO LIMITS text */}
                <div className="font-heading font-semibold text-3xl md:text-4xl text-gold mb-2">
                  {stat.icon === "infinity" ? (
                    <span className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-[0.15em] text-gold">NO LIMITS</span>
                  ) : stat.isSymbol ? (
                    <span className="text-4xl md:text-5xl leading-none text-gold" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 200 }}>{stat.symbol}</span>
                  ) : (
                    <AnimatedNumber value={stat.number} suffix={stat.suffix} isInView={statsInView} />
                  )}
                </div>
                
                {/* Thin gold line below number */}
                <div 
                  className={`h-px bg-gold mb-3 transition-all duration-500 ${showLines ? 'w-10 opacity-100' : 'w-0 opacity-0'}`}
                />
                
                {/* Label */}
                <p className="text-foreground-muted text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

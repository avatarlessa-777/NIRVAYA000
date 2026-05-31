"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function FaceTransfer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 md:py-32 bg-[#0A0E1A] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header with decorative corners */}
        <div className="relative px-6 py-8 md:px-10 md:py-10 mb-14">
          {/* Decorative corner lines */}
          <div className="absolute top-0 left-0 w-8 h-8">
            <div className="absolute top-0 left-0 w-full h-px" style={{ background: "rgba(200,148,62,0.3)" }}></div>
            <div className="absolute top-0 left-0 h-full w-px" style={{ background: "rgba(200,148,62,0.3)" }}></div>
          </div>
          <div className="absolute top-0 right-0 w-8 h-8">
            <div className="absolute top-0 right-0 w-full h-px" style={{ background: "rgba(200,148,62,0.3)" }}></div>
            <div className="absolute top-0 right-0 h-full w-px" style={{ background: "rgba(200,148,62,0.3)" }}></div>
          </div>
          <div className="absolute bottom-0 left-0 w-8 h-8">
            <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: "rgba(200,148,62,0.3)" }}></div>
            <div className="absolute bottom-0 left-0 h-full w-px" style={{ background: "rgba(200,148,62,0.3)" }}></div>
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8">
            <div className="absolute bottom-0 right-0 w-full h-px" style={{ background: "rgba(200,148,62,0.3)" }}></div>
            <div className="absolute bottom-0 right-0 h-full w-px" style={{ background: "rgba(200,148,62,0.3)" }}></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="inline-block font-heading font-normal text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4 animate-pulse"
              style={{ 
                border: "1px solid rgba(200,148,62,0.3)", 
                background: "rgba(200,148,62,0.05)", 
                color: "rgba(200,148,62,0.8)",
                boxShadow: "0 0 20px rgba(200,148,62,0.1)",
                animationDuration: "3s"
              }}
            >
              Технология сохранения внешности
            </span>
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 
                className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.12em] leading-tight mb-6"
                style={{
                  textShadow: "0 0 30px rgba(200,148,62,0.3), 0 0 60px rgba(200,148,62,0.15), 0 0 90px rgba(200,148,62,0.05)"
                }}
              >
                Внешность под контролем
              </h2>
            </motion.div>
            <p 
              className="text-base md:text-lg text-foreground/70 max-w-3xl"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif", 
                fontWeight: 400, 
                wordSpacing: "3px", 
                lineHeight: "1.8" 
              }}
            >
              Мы сохраняем внешность реального человека в AI-видео с точностью до мельчайших черт. 
              Технология, которая переносит вас в любой сценарий — без грима, без дублёров, без съёмок.
            </p>
          </motion.div>
        </div>

        {/* Row 1: Video 16:9 + Photo 1:1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center mb-6"
        >
          {/* Video placeholder 16:9 */}
          <div
            className="relative aspect-video rounded-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(200,148,62,0.15)]"
            style={{
              border: "1px solid rgba(200,148,62,0.15)",
              background: "rgba(14,18,37,0.6)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[8px] border-l-gold/60 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>

          {/* Photo placeholder 1:1 */}
          <div
            className="relative w-full md:w-[280px] lg:w-[320px] aspect-square rounded-sm overflow-hidden flex-shrink-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(200,148,62,0.15)]"
            style={{
              border: "1px solid rgba(200,148,62,0.15)",
              background: "rgba(14,18,37,0.6)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-gold/30">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Row 2: Video 16:9 + Photo 1:1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center"
        >
          {/* Video placeholder 16:9 */}
          <div
            className="relative aspect-video rounded-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(200,148,62,0.15)]"
            style={{
              border: "1px solid rgba(200,148,62,0.15)",
              background: "rgba(14,18,37,0.6)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[8px] border-l-gold/60 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>

          {/* Photo placeholder 1:1 */}
          <div
            className="relative w-full md:w-[280px] lg:w-[320px] aspect-square rounded-sm overflow-hidden flex-shrink-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(200,148,62,0.15)]"
            style={{
              border: "1px solid rgba(200,148,62,0.15)",
              background: "rgba(14,18,37,0.6)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-gold/30">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

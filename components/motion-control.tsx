"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function MotionControl() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 circuit-pattern" />
      
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/3 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Cloud description block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 flex justify-center"
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl px-8 py-8 md:px-12 md:py-10 text-center"
            style={{
              background: "rgba(14,18,37,0.7)",
              border: "1px solid rgba(200,148,62,0.12)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 60px rgba(27,107,138,0.08), 0 0 120px rgba(200,148,62,0.04)",
            }}
          >
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/20 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/20 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/20 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/20 rounded-br-2xl" />

            <span 
              className="inline-block font-heading font-normal text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ 
                border: "1px solid rgba(200,148,62,0.3)", 
                background: "rgba(200,148,62,0.05)", 
                color: "rgba(200,148,62,0.8)" 
              }}
            >
              Motion Control
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-heading font-semibold text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.1em] leading-tight mb-5"
            >
              Двигаемся так, как вы скажете
            </motion.h2>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              Нужен конкретный танец? Определённый жест? Точная пластика? 
              Мы переносим любые движения в AI-видео — персонаж делает именно то, что вы задумали.
            </p>
          </div>
        </motion.div>

        {/* Videos: two 9:16 left + one 16:9 right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-[200px_200px_1fr] gap-4 items-start">
            {/* Video 9:16 #1 */}
            <div className="relative aspect-[9/16] rounded-sm overflow-hidden" style={{ border: "1px solid rgba(200,148,62,0.15)", background: "rgba(14,18,37,0.6)" }}>
              <mux-player
                playback-id="FHmxOJHp01hhH2M5FKLiFPMy5GtFxOqQQyKAqCZoZNyY"
                muted
                playsinline
                preload="auto"
                style={{ "--media-object-fit": "cover", "--media-object-position": "center", width: "100%", height: "100%", position: "absolute", inset: "0" } as any}
              />
            </div>

            {/* Video 9:16 #2 */}
            <div className="relative aspect-[9/16] rounded-sm overflow-hidden" style={{ border: "1px solid rgba(200,148,62,0.15)", background: "rgba(14,18,37,0.6)" }}>
              <mux-player
                playback-id="02O2KB8lrLQ7yU9sOSVUECFQGCe6vq1rpI8Krd00sqd2c"
                muted
                playsinline
                preload="auto"
                style={{ "--media-object-fit": "cover", "--media-object-position": "center", width: "100%", height: "100%", position: "absolute", inset: "0" } as any}
              />
            </div>

            {/* Video 16:9 */}
            <div className="relative col-span-2 md:col-span-1 aspect-video md:aspect-auto md:h-full rounded-sm overflow-hidden" style={{ border: "1px solid rgba(200,148,62,0.15)", background: "rgba(14,18,37,0.6)" }}>
              <mux-player
                playback-id="DTLDScb801jLdl1o6J12AyhekVBiqRCF6D02j00gB4TvIY"
                muted
                playsinline
                preload="auto"
                style={{ "--media-object-fit": "cover", "--media-object-position": "center", width: "100%", height: "100%", position: "absolute", inset: "0" } as any}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

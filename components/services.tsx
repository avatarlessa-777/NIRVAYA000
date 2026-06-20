"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/lib/useLanguage"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mux-player": any
    }
  }
}

// Playback IDs keyed by card index (order matches translations)
const servicePlaybackIds = [
  "1Aj00CmAc87EV6VJkmwBcFUA6Hmxr9VXEKJJV52wTiCE", // Commercials
  "EuFoWgbebfKudcfyfa1KjCQIlIaKSTKrAUDnFPCIvmA", // Marketplace Promos
  "1Xb00owVniaQvFv4lKY6DOWkXbF5dxv3Vvy60101ziufZY", // Social Media & Reels
  "hDM1Oi02UMRgCJu3U02YwvVRwtcKH2XAIj01501oLmLLQ02A", // Animation Content
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const t = useLanguage((s) => s.t)
  const services = t.services.cards

  return (
    <section id="services" className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Circuit board background pattern */}
      <div className="absolute inset-0 circuit-pattern" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Heading with blur fade-in and text-stroke */}
          <div className="mb-6">
            <motion.h2
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-heading font-semibold text-3xl md:text-5xl uppercase tracking-[0.12em] transition-all duration-500 hover:text-gold group"
              style={{
                WebkitTextStroke: "1px rgba(200,148,62,0.4)",
                WebkitTextFillColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.WebkitTextFillColor = "#C8943E"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.WebkitTextFillColor = "transparent"
              }}
            >
              {t.services.heading}
            </motion.h2>
          </div>
          
          <p className="font-heading font-normal text-foreground-muted text-lg md:text-xl max-w-2xl mx-auto mb-4">
            {t.services.subtitle}
          </p>
          
          {/* Gold gradient breathing line below subtitle */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-[120px] h-px mx-auto animate-breathe-gold-line"
            style={{ 
              background: 'linear-gradient(to right, transparent, #C8943E, transparent)'
            }}
          />
        </motion.div>

        {/* Horizontal scrollable cards */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-6 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible md:gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] md:w-auto snap-start group"
              >
                <div 
                  className="relative h-[380px] md:h-[440px] bg-placeholder-bg rounded-sm overflow-hidden cursor-pointer transition-all duration-500 group service-card"
                  style={{
                    border: '1px solid transparent',
                    backgroundImage: `linear-gradient(var(--placeholder-bg), var(--placeholder-bg)), linear-gradient(135deg, rgba(200, 148, 62, 0.3), rgba(27, 107, 138, 0.3))`,
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                  }}
                >
                  {/* Hover rings */}
                  <div className="hover-ring-1" />
                  <div className="hover-ring-2" />
                  
                  {/* Background video keyed by card index */}
                  {servicePlaybackIds[index] ? (
                    <div className="absolute inset-0 overflow-hidden">
                      <mux-player
                        playback-id={servicePlaybackIds[index]}
                        autoplay="muted"
                        loop
                        muted
                        playsinline
                        style={{ "--media-object-fit": "cover", "--media-object-position": "center", "--controls": "none", "--media-background-color": "transparent", width: "100%", height: "100%", position: "absolute", inset: "0", aspectRatio: "unset" } as any}
                      />
                    </div>
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0E1A]/90" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading font-semibold text-lg uppercase tracking-wider mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-foreground-muted text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mux-player": any
    }
  }
}

const styles = [
  {
    title: "Аниме",
    description: "Дух японской анимации в новом прочтении",
  },
  {
    title: "Пластилин",
    description: "Тактильный мир, оживший на экране",
  },
  {
    title: "Pixar",
    description: "Мировой стандарт анимации — без студии в Калифорнии",
  },
  {
    title: "Палех",
    description: "Вековые традиции в цифровом формате",
  },
]

function StyleCard({
  style,
  index,
  isInView,
}: {
  style: { title: string; description: string }
  index: number
  isInView: boolean
}) {
  const playerRef = useRef<HTMLElement>(null)

  const playbackId =
    style.title === "Аниме"
      ? "ruEc7RibKqYuEgHZOCr02neU023n2NapHQURUhmmAiMXs"
      : style.title === "Пластилин"
        ? "01L3006COFbi91OPfx00j2pvvrbgqrj01GVBV7R3gYEDhhI"
        : style.title === "Pixar"
          ? "bLr2WJ4bPA01IiKZHdWQzjj244ucRE5972JdqCWGdpFk"
          : style.title === "Палех"
            ? "MNzC02eJ7sIJqlgGjDO8lJ02PBsBe6d9A92OqJz7XkmXo"
            : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
      className="group cursor-pointer"
      onMouseEnter={() => {
        const el = playerRef.current as any
        if (el) {
          el.muted = true
          el.play?.()
        }
      }}
      onMouseLeave={() => {
        const el = playerRef.current as any
        if (el) {
          el.pause?.()
        }
      }}
    >
      <div
        className="relative aspect-video rounded-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(200,148,62,0.15)]"
        style={{ border: "1px solid rgba(200,148,62,0.15)", background: "rgba(14,18,37,0.6)" }}
      >
        {playbackId && (
          <mux-player
            ref={playerRef}
            playback-id={playbackId}
            muted
            playsinline
            preload="auto"
            thumbnail-time="2"
            style={
              {
                "--media-object-fit": "cover",
                "--media-object-position": "center",
                "--controls": "none",
                "--media-background-color": "transparent",
                width: "100%",
                height: "100%",
                position: "absolute",
                inset: "0",
              } as any
            }
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h4 className="font-heading font-semibold text-base md:text-lg uppercase tracking-wider text-gold mb-2">
            {style.title}
          </h4>
          <p className="text-foreground-muted text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {style.description}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  )
}

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const stylesRef = useRef(null)
  const stylesInView = useInView(stylesRef, { once: true, amount: 0.3 })

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0A0E1A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ background: "linear-gradient(180deg, var(--teal) 0%, transparent 50%)" }} />
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="mb-16 text-center">
          <motion.h2 initial={{ opacity: 0, filter: "blur(20px)" }} animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}} transition={{ duration: 1.2, ease: "easeOut" }} className="font-heading font-semibold text-4xl md:text-6xl uppercase tracking-[0.2em]">DEMO REEL</motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.8, delay: 0.8 }} className="w-[80px] h-px mx-auto mt-4" style={{ background: "linear-gradient(to right, transparent, #C8943E, transparent)" }} />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Музыкальные клипы */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <div
              className="relative aspect-video rounded-sm overflow-hidden"
              style={{ border: "1px solid rgba(200,148,62,0.15)", background: "rgba(14,18,37,0.6)" }}
            >
              <mux-player
                playback-id="vchY00QS56bLhrU1mfUilgwFOBogxXi35hx01cllp2wZs"
                playsinline
                preload="auto"
                thumbnail-time="5"
                accent-color="#C8943E"
                style={{
                  "--media-object-fit": "cover",
                  "--media-object-position": "center",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  inset: "0",
                } as any}
              />
            </div>
            <div className="mt-4 flex justify-center">
              <div className="px-6 py-3 rounded-lg text-center" style={{ background: "rgba(14,18,37,0.7)", border: "1px solid rgba(200,148,62,0.15)", backdropFilter: "blur(12px)" }}>
                <h3 className="font-heading font-semibold text-lg md:text-xl uppercase tracking-[0.15em] text-gold">Музыкальные клипы</h3>
              </div>
            </div>
          </motion.div>

          {/* Рекламные ролики */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="relative aspect-video rounded-sm overflow-hidden"
              style={{ border: "1px solid rgba(200,148,62,0.15)", background: "rgba(14,18,37,0.6)" }}
            >
              <mux-player
                playback-id="00mwZl6zWVACkDXTTRfZLe02uB01hJH01Jtl502hr2PQt9Xs"
                playsinline
                preload="auto"
                thumbnail-time="5"
                accent-color="#C8943E"
                style={{
                  "--media-object-fit": "cover",
                  "--media-object-position": "center",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  inset: "0",
                } as any}
              />
            </div>
            <div className="mt-4 flex justify-center">
              <div className="px-6 py-3 rounded-lg text-center" style={{ background: "rgba(14,18,37,0.7)", border: "1px solid rgba(200,148,62,0.15)", backdropFilter: "blur(12px)" }}>
                <h3 className="font-heading font-semibold text-lg md:text-xl uppercase tracking-[0.15em] text-gold">Рекламные ролики</h3>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative px-6 py-10 md:px-12 md:py-14">
          <div className="absolute top-0 left-0 w-8 h-8"><div className="absolute top-0 left-0 w-full h-px" style={{ background: "rgba(200,148,62,0.3)" }}></div><div className="absolute top-0 left-0 h-full w-px" style={{ background: "rgba(200,148,62,0.3)" }}></div></div>
          <div className="absolute top-0 right-0 w-8 h-8"><div className="absolute top-0 right-0 w-full h-px" style={{ background: "rgba(200,148,62,0.3)" }}></div><div className="absolute top-0 right-0 h-full w-px" style={{ background: "rgba(200,148,62,0.3)" }}></div></div>
          <div className="absolute bottom-0 left-0 w-8 h-8"><div className="absolute bottom-0 left-0 w-full h-px" style={{ background: "rgba(200,148,62,0.3)" }}></div><div className="absolute bottom-0 left-0 h-full w-px" style={{ background: "rgba(200,148,62,0.3)" }}></div></div>
          <div className="absolute bottom-0 right-0 w-8 h-8"><div className="absolute bottom-0 right-0 w-full h-px" style={{ background: "rgba(200,148,62,0.3)" }}></div><div className="absolute bottom-0 right-0 h-full w-px" style={{ background: "rgba(200,148,62,0.3)" }}></div></div>

          <div ref={stylesRef} className="text-center mb-10">
            <motion.div initial={{ opacity: 0, filter: "blur(12px)" }} animate={stylesInView ? { opacity: 1, filter: "blur(0px)" } : {}} transition={{ duration: 1 }}>
              <h3 className="font-heading font-semibold text-2xl md:text-4xl uppercase tracking-[0.15em] styles-gradient-text">Стили</h3>
              <p className="text-foreground/50 text-sm md:text-base mt-3 max-w-md mx-auto">Каждый стиль — это отдельная вселенная. Выбирайте эстетику, а мы воплотим.</p>
            </motion.div>
            <div className="flex justify-center mt-5 mb-10">
              <div className="px-5 py-2.5 rounded-full" style={{ background: "rgba(14,18,37,0.7)", border: "1px solid rgba(200,148,62,0.12)", backdropFilter: "blur(10px)" }}>
                <p style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }} className="text-foreground/60 text-sm md:text-base">4 примера из бесконечности вариантов</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {styles.map((style, index) => (
              <StyleCard key={style.title} style={style} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

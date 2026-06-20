"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/useLanguage"

export function Marquee() {
  const t = useLanguage((s) => s.t)
  const content = t.marquee.join(" — ")
  
  return (
    <section className="py-8 border-y border-gold/10 overflow-hidden bg-[#0A0E1A]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex"
      >
        <div className="animate-marquee flex whitespace-nowrap">
          <span className="font-heading text-2xl md:text-4xl uppercase text-gold/40 tracking-[0.15em] mx-4">
            {content} — {content} —
          </span>
          <span className="font-heading text-2xl md:text-4xl uppercase text-gold/40 tracking-[0.15em] mx-4">
            {content} — {content} —
          </span>
        </div>
      </motion.div>
    </section>
  )
}

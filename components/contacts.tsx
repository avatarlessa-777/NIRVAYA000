"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Send } from "lucide-react"
import { useLanguage } from "@/lib/useLanguage"

const socialLinks = [
  { name: "YouTube", href: "#" },
  { name: "VK", href: "#" },
]

export function Contacts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const t = useLanguage((s) => s.t)

  return (
    <section id="contacts" className="py-24 md:py-32 bg-[#0E1225] relative overflow-hidden">
      {/* Diamond grid background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, var(--gold) 1px, transparent 1px),
            linear-gradient(-45deg, var(--gold) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Large triangle watermark in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          width="300"
          height="260"
          viewBox="0 0 300 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-[0.03]"
        >
          <path
            d="M150 10L290 250H10L150 10Z"
            stroke="var(--gold)"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="150"
            cy="170"
            r="8"
            fill="var(--gold)"
            className="animate-breathe-dot origin-center"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-gold/5 blur-3xl rounded-full pointer-events-none" />
          
          <div className="flex items-center justify-center gap-4 mb-6 relative">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px hidden md:block bg-gold"
            />
            <h2 className="font-heading font-semibold text-3xl md:text-5xl uppercase tracking-[0.12em] text-balance">
              {t.contacts.heading}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px hidden md:block bg-gold"
            />
          </div>
          
          <p className="font-heading font-normal text-foreground-muted text-lg md:text-xl mb-4">
            {t.contacts.subtitle}
          </p>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-[120px] h-px mx-auto mb-12 animate-breathe-gold-line"
            style={{ 
              background: 'linear-gradient(to right, transparent, #C8943E, transparent)'
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          <a
            href="mailto:nirvaya.visual.studio@gmail.com"
            className="group flex items-center gap-3 text-gold text-2xl md:text-3xl font-bold hover:text-gold/80 transition-colors"
          >
            <Mail className="w-7 h-7" />
            <span className="relative">
              nirvaya.visual.studio@gmail.com
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </span>
          </a>

          <a
            href="https://t.me/nirvayastudio"
            className="group flex items-center gap-3 text-foreground text-xl md:text-2xl font-semibold hover:text-teal transition-colors"
          >
            <Send className="w-6 h-6" />
            <span>@nirvayastudio</span>
          </a>

          <div className="flex items-center gap-6 mt-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="text-foreground-muted hover:text-gold transition-colors text-sm tracking-wide"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/useLanguage"

export function Footer() {
  const t = useLanguage((s) => s.t)

  const footerLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#about", label: t.nav.about },
    { href: "#contacts", label: t.nav.contacts },
  ]

  return (
    <footer className="bg-[#0A0E1A] relative">
      {/* Golden divider line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground-muted text-sm"
          >
            © 2026 NIRVAYA STUDIO
          </motion.p>

          {/* Navigation links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground-muted text-sm hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Tagline - Rajdhani 400 italic */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-heading font-normal italic text-foreground-muted text-sm"
          >
            {t.footer.tagline}
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

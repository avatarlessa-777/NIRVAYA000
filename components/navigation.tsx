"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { TriangleIcon } from "./triangle-divider"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/lib/useLanguage"
import type { Language } from "@/lib/translations"

export function Navigation({ forcedLang }: { forcedLang?: Language }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = useLanguage((s) => s.t)
  const init = useLanguage((s) => s.init)

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#about", label: t.nav.about },
    { href: "#contacts", label: t.nav.contacts },
  ]

  useEffect(() => {
    init(forcedLang)
  }, [init, forcedLang])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A0E1A]/80 backdrop-blur-xl border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo - Triangle icon + NIRVAYA ◆ STUDIO with glitch effect */}
          <a 
            href="#" 
            className="flex items-center gap-3 glitch-hover"
          >
            <TriangleIcon className="text-gold w-5 h-[18px]" />
            <div className="flex items-center gap-2 glitch-text">
              <span className="font-heading text-gold text-lg md:text-xl font-bold uppercase tracking-[0.08em]">
                NIRVAYA
              </span>
              <span className="text-gold text-xs">◆</span>
              <span className="font-heading text-gold text-sm md:text-base font-light uppercase tracking-[0.12em]">
                STUDIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-foreground/80 hover:text-foreground transition-colors text-sm tracking-wide group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Language Switcher + CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href="#contacts"
              className="bg-saffron text-foreground px-5 py-2.5 text-sm font-medium rounded-sm transition-all duration-300 saffron-glow"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gold p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0E1A]/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground text-2xl font-heading uppercase tracking-widest hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <LanguageSwitcher />
              </motion.div>
              <motion.a
                href="#contacts"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 bg-saffron text-foreground px-8 py-3 text-lg font-medium rounded-sm"
              >
                {t.nav.cta}
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

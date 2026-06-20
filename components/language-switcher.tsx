"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/useLanguage"
import type { Language } from "@/lib/translations"

const options: { value: Language; label: string }[] = [
  { value: "ru", label: "RU" },
  { value: "en", label: "EN" },
]

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const lang = useLanguage((s) => s.lang)
  const setLang = useLanguage((s) => s.setLang)

  return (
    <div
      className={`relative inline-flex items-center rounded-full p-1 ${className}`}
      style={{
        border: "1px solid rgba(200,148,62,0.3)",
        background: "rgba(14,18,37,0.7)",
        backdropFilter: "blur(10px)",
      }}
      role="group"
      aria-label="Language switcher"
    >
      {options.map((option) => {
        const isActive = lang === option.value
        return (
          <button
            key={option.value}
            onClick={() => setLang(option.value)}
            className="relative z-10 px-3 py-1 text-xs font-heading font-semibold uppercase tracking-[0.15em] transition-colors duration-300 rounded-full"
            style={{ color: isActive ? "#0A0E1A" : "rgba(200,148,62,0.7)" }}
            aria-pressed={isActive}
          >
            {isActive && (
              <motion.span
                layoutId="lang-highlight"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute inset-0 -z-10 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #E0B055, #C8943E)",
                  boxShadow: "0 0 12px rgba(200,148,62,0.5)",
                }}
              />
            )}
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

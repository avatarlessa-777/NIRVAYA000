"use client"

import { create } from "zustand"
import { translations, type Language, type Translations } from "./translations"

const STORAGE_KEY = "nirvaya-lang"

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "en"

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === "ru" || stored === "en") return stored

  const browserLang = window.navigator.language || (window.navigator as any).userLanguage || ""
  return browserLang.toLowerCase().startsWith("ru") ? "ru" : "en"
}

interface LanguageState {
  lang: Language
  t: Translations
  setLang: (lang: Language) => void
  init: (forced?: Language) => void
}

export const useLanguage = create<LanguageState>((set) => ({
  lang: "en",
  t: translations.en,
  setLang: (lang) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang)
    }
    set({ lang, t: translations[lang] })
  },
  init: (forced) => {
    // A forced language (e.g. from the /en route) overrides detection
    // and persists so the choice is remembered on later visits.
    if (forced === "ru" || forced === "en") {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, forced)
      }
      set({ lang: forced, t: translations[forced] })
      return
    }
    const lang = detectInitialLanguage()
    set({ lang, t: translations[lang] })
  },
}))

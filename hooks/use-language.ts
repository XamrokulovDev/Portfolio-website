"use client"

import { useState, useEffect } from "react"
import { type Language, translations } from "@/lib/i18n"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && savedLanguage in translations) {
      setLanguage(savedLanguage)
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith("ru")) {
        setLanguage("ru")
      } else if (browserLang.startsWith("uz")) {
        setLanguage("uz")
      } else {
        setLanguage("en")
      }
    }
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return { language, changeLanguage, t }
}

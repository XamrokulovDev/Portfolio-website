"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { languages, type Language } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{languages[currentLanguage]}</span>
        <span className="sm:hidden">{currentLanguage.toUpperCase()}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-2 z-50 min-w-[120px] rounded-md border bg-popover p-1 shadow-lg"
            >
              {Object.entries(languages).map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => {
                    onLanguageChange(code as Language)
                    setIsOpen(false)
                  }}
                  className={`w-full rounded-sm px-3 py-2 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                    currentLanguage === code ? "bg-accent text-accent-foreground" : ""
                  }`}
                >
                  {name}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

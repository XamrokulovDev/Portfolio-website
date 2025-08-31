"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Instagram, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/hooks/use-language"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { language, changeLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t("home"), href: "#home" },
    { name: t("about"), href: "#about" },
    { name: t("projects"), href: "#projects" },
    { name: t("contact"), href: "#contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/ulfatjon", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/ulfatjon_cyber", label: "Instagram" },
    { icon: Send, href: "https://t.me/ulfatjon_cyber", label: "Telegram" },
  ]

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border/50" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button
                onClick={() => handleNavClick("#home")}
                className="text-xl font-bold text-primary hover:text-accent transition-colors"
              >
                Ulfatjon<span className="text-accent">Dev</span>
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "")
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                        isActive ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 w-1 h-1 bg-primary rounded-full"
                          layoutId="activeIndicator"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          style={{ x: "-50%" }}
                        />
                      )}
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher currentLanguage={language} onLanguageChange={changeLanguage} />

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative z-[60]"
                >
                  <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[55] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background overlay */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="absolute right-0 top-0 w-[80%] h-full bg-background/95 backdrop-blur-md border-l border-border/50 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Menu header with logo and close button */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <motion.div
                  className="text-xl font-bold text-primary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  Ulfatjon<span className="text-accent">Dev</span>
                </motion.div>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Menu content */}
              <div className="flex flex-col h-full pt-8 px-8">
                {/* Navigation items */}
                <div className="flex-1 space-y-8">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.replace("#", "")
                    return (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className={`block w-full text-left text-2xl font-semibold transition-all duration-300 relative group ${
                          isActive ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <span className="relative">
                          {item.name}
                          {isActive && (
                            <motion.div
                              className="absolute -left-6 top-1/2 w-3 h-3 bg-primary rounded-full"
                              layoutId="mobileActiveIndicator"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              style={{ y: "-50%" }}
                            />
                          )}
                        </span>
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-primary origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ width: "100%" }}
                        />
                      </motion.button>
                    )
                  })}
                </div>

                {/* Social icons */}
                <div className="pb-8">
                  <div className="flex space-x-6">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon size={24} />
                        <span className="sr-only">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Background circles */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-32 h-32 border border-primary/10 rounded-full"
                      style={{
                        right: `${-10 + i * 15}%`,
                        top: `${10 + i * 20}%`,
                      }}
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: { duration: 20 + i * 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        scale: { duration: 4 + i, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

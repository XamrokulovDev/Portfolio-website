"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Instagram, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/XamrokulovDev", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/ulfatjon_xamrokulov", label: "Instagram" },
    { icon: Send, href: "https://t.me/ulfatjons_channel", label: "Telegram" },
  ]

  const particleVariants = {
    animate: {
      x: [0, 150, -100, 0],
      y: [0, -150, 100, 0],
      opacity: [0, 1, 0.5, 0],
      scale: [0, 1.2, 0.8, 0],
      rotate: [0, 180, 360],
    },
  }

  const orbVariants = {
    animate: {
      rotate: 360,
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.8, 0.3],
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-blue-500/30 rounded-full shadow-lg shadow-blue-500/20"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            variants={particleVariants}
            animate="animate"
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 8,
            }}
          />
        ))}

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-6 h-6 border-2 border-blue-400/40 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${15 + i * 8}%`,
            }}
            variants={orbVariants}
            animate="animate"
            transition={{
              rotate: { duration: 12 + i * 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 4 + i, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              opacity: { duration: 3 + i * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
        ))}

        <motion.div
          className="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-primary/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 0.8, 1],
            borderColor: ["rgba(59, 130, 246, 0.2)", "rgba(59, 130, 246, 0.6)", "rgba(59, 130, 246, 0.2)"],
          }}
          transition={{
            rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            borderColor: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-32 border-2 border-accent/20 rotate-45"
          animate={{
            rotate: [45, 225, 405],
            y: [0, -30, 15, 0],
            x: [0, 15, -15, 0],
            borderColor: ["rgba(59, 130, 246, 0.2)", "rgba(59, 130, 246, 0.5)", "rgba(59, 130, 246, 0.2)"],
          }}
          transition={{
            rotate: { duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            x: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            borderColor: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/6 w-4 h-4 bg-blue-500/40 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            opacity: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/6 w-6 h-6 border border-blue-400/50 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.5, 1, 0.5],
            rotate: 360,
          }}
          transition={{
            scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            opacity: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            title="Hi, I'm Ulfatjon Full-Stack Developer"
            className="text-3xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Ulfatjon<br />
            <motion.span
              className="text-accent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Full-Stack Developer
            </motion.span>
          </motion.h1>

          <motion.p
            title="Frontend React/Next.js and Backend Node.js developer specializing in modern web applications and Telegram bot development. Creating innovative digital solutions from Uzbekistan for clients worldwide."
            className="text-sm sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Frontend React/Next.js and Backend Node.js developer specializing in modern web applications and Telegram bot development. Creating innovative digital solutions from Uzbekistan for clients worldwide.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="text-md sm:text-lg px-8 py-3" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="text-md sm:text-lg px-8 py-3 bg-transparent" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <social.icon size={24} />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="text-muted-foreground hover:text-primary transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              whileHover={{ scale: 1.1 }}
            >
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

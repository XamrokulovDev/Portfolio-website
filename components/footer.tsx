"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Send, Heart } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ulfatjon", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/ulfatjon_cyber", label: "Instagram" },
    { icon: Send, href: "https://t.me/ulfatjon_cyber", label: "Telegram" },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ulfatjon<span className="text-primary">Dev</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Frontend and backend developer specializing in React, Next.js, Node.js, and Telegram bot development.
            </p>
            <div className="flex space-x-4">
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
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={20} />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>xamrokulovulfatjon2005@gmail.com</p>
              <p>+998 90 123 45 67</p>
              <p>Samarkand, Uzbekistan</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">© 2024 Ulfatjon Dev. All rights reserved.</p>
          <p className="text-muted-foreground text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart size={16} className="mx-1 text-red-400" /> in Uzbekistan
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

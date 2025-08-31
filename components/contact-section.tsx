"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Instagram, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/hooks/use-language"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: t("email"),
      value: "xamrokulovulfatjon2005@gmail.com",
      href: "mailto:xamrokulovulfatjon2005@gmail.com",
    },
    {
      icon: Phone,
      title: t("phone"),
      value: "+998 90 123 45 67",
      href: "tel:+998901234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Samarkand, Uzbekistan",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "@ulfatjon",
      href: "https://github.com/ulfatjon",
      color: "hover:text-gray-900",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@ulfatjon_cyber",
      href: "https://instagram.com/ulfatjon_cyber",
      color: "hover:text-pink-500",
    },
    {
      icon: Send,
      title: "Telegram",
      value: "@ulfatjon_cyber",
      href: "https://t.me/ulfatjon_cyber",
      color: "hover:text-blue-500",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-500/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              x: [0, 80, -60, 0],
              y: [0, -80, 60, 0],
              opacity: [0, 0.6, 0.3, 0],
              scale: [0, 1, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 25 + 30,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 15,
            }}
          />
        ))}

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`contact-circle-${i}`}
            className="absolute w-3 h-3 border border-emerald-400/25 rounded-full"
            style={{
              left: `${20 + i * 18}%`,
              top: `${25 + i * 15}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              rotate: { duration: 18 + i * 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 6 + i, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              opacity: { duration: 5 + i * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
        ))}

        <motion.div
          className="absolute top-1/5 right-1/4 w-28 h-28 border border-emerald-500/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            rotate: { duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute bottom-1/5 left-1/5 w-3 h-3 bg-emerald-400/30 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            opacity: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("contactTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">{t("contactDescription")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Let's Start a Conversation</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you need frontend development with React/Next.js, backend solutions with Node.js, or custom
                  Telegram bots, I'm here to help. Reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground mb-4">{t("contactInfo")}</h4>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <info.icon className="text-primary" size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{info.title}</h4>
                            {info.href ? (
                              <a
                                href={info.href}
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">{t("followMe")}</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.title}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <social.icon size={20} />
                      <span className="sr-only">{social.title}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-sm font-medium">
                          {t("name")} *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          {t("phone")}
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+998 90 123 45 67"
                          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-medium">
                        {t("email")} *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        {t("subject")} *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-sm font-medium">
                        {t("message")} *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or question..."
                        rows={5}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <motion.div className="flex items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          {t("sending")}
                        </motion.div>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          {t("sendMessage")}
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

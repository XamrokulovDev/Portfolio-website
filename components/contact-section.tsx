"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Instagram, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: "Name",
      value: "xamrokulovulfatjon2005@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=xamrokulovulfatjon2005@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+998 90 030 24 23",
      href: "tel:+998900302423",
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
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setFormData({ name: "", phone: "", message: "" })
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="pointer-events-none fixed left-0 right-0 top-10 z-50 flex justify-center px-4">
        <AnimatePresence>
          {showAlert && (
            <motion.div
              role="alert"
              aria-live="polite"
              initial={{ y: -20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="pointer-events-auto rounded-xl border border-emerald-500/25 bg-emerald-50/90 text-emerald-900 shadow-md backdrop-blur flex items-center justify-center px-4 py-2"
            >
              <div className="flex items-center gap-3">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <p className="max-sm:text-[12px]">Message sent successfully</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 -z-10 pointer-events-none">
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 
            title="Get In Touch"
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance"
          >
            Get In Touch
          </h2>
          <p
            title="Ready to bring your ideas to life? Let's discuss your next project and create something amazing together." 
            className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="flex max-lg:flex-col items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="space-y-8">
              <div className="space-y-4">
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
                            <h4 title={info.title} className="font-semibold text-foreground">
                              {info.title}
                            </h4>
                            {info.href ? (
                              <a
                                href={info.href}
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p title={info.value} className="text-muted-foreground">
                                {info.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Card className="shadow-lg">
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name <span className="text-red-400 ml-1">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name ?? ""}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone <span className="text-red-400 ml-1">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="text"
                      value={formData.phone ?? ""}
                      onChange={handleInputChange}
                      placeholder="+998 90 000 00 00"
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-red-400 ml-1">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message ?? ""}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or question..."
                      rows={5}
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full cursor-pointer" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <motion.div className="flex items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </motion.div>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
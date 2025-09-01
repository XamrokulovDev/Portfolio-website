"use client"

import { motion } from "framer-motion"
import { Code, Server, Bot } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS - Building modern, responsive user interfaces",
      color: "text-blue-500",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Express, API development, database design and server-side architecture",
      color: "text-green-500",
    },
    {
      icon: Bot,
      title: "Telegram Bot Development",
      description: "Custom Telegram bots with advanced features, payment integration, and automation",
      color: "text-purple-500",
    }
  ]

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "40+", label: "Projects Completed" },
    { number: "15+", label: "Telegram Bots" },
    { number: "100%", label: "Client Satisfaction" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-500/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              x: [0, 100, -80, 0],
              y: [0, -100, 80, 0],
              opacity: [0, 0.8, 0.3, 0],
              scale: [0, 1, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 25,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 10,
            }}
          />
        ))}

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute w-4 h-4 border border-emerald-400/30 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              rotate: { duration: 15 + i * 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 5 + i, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              opacity: { duration: 4 + i * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
        ))}

        <motion.div
          className="absolute top-1/3 right-1/5 w-24 h-24 border border-emerald-500/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/6 w-3 h-3 bg-emerald-400/40 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.6, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            opacity: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
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
          <h2 
            title="About Ulfatjon" 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance"
          >
            About Ulfatjon
          </h2>
          <p 
            title="Passionate full-stack developer specializing in modern web technologies and Telegram bot development, creating innovative digital solutions for businesses worldwide."
            className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            Passionate full-stack developer specializing in modern web technologies and Telegram bot development, creating innovative digital solutions for businesses worldwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-72 h-72 rounded-xl bg-muted flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary">U</span>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Code className="text-white" size={24} />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <Bot className="text-white" size={16} />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 
              title="Building the Digital Future"
              className="text-2xl font-bold text-foreground mb-6"
            >
              Building the Digital Future
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p
                title="With over 2 years of experience in full-stack development, I specialize in creating modern web applications using React, Next.js, TypeScript, and Node.js. My passion lies in building user-friendly interfaces and robust backend systems."
              >
                With over 2 years of experience in full-stack development, I specialize in creating modern web applications using React, Next.js, TypeScript, and Node.js. My passion lies in building user-friendly interfaces and robust backend systems.
              </p>
              <p
                title="Based in Uzbekistan, I work with clients globally to develop custom web applications and Telegram bots. From e-commerce platforms to automation tools, I bring ideas to life with clean, efficient code and modern development practices."
              >
                Based in Uzbekistan, I work with clients globally to develop custom web applications and Telegram bots. From e-commerce platforms to automation tools, I bring ideas to life with clean, efficient code and modern development practices.
              </p>
              <p
                title="I'm particularly skilled in Telegram bot development, having created over 5 bots with features ranging from payment processing to complex business automation. I believe in continuous learning and staying up-to-date with the latest web technologies."
              >
                I'm particularly skilled in Telegram bot development, having created over 5 bots with features ranging from payment processing to complex business automation. I believe in continuous learning and staying up-to-date with the latest web technologies.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h2 
                    title={stat.number}
                    className="text-2xl font-bold text-primary"
                  >
                    {stat.number}
                  </h2>
                  <h4
                    title={stat.label}
                   className="text-sm text-muted-foreground">{stat.label}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3
            title="Core Expertise" 
            className="text-2xl font-bold text-center text-foreground mb-8">
              Core Expertise
            </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg bg-muted ${skill.color}`}>
                        <skill.icon size={24} />
                      </div>
                      <h4
                        title={skill.title} 
                        className="text-lg font-semibold text-foreground ml-3">
                          {skill.title}
                        </h4>
                    </div>
                    <p
                      title={skill.description} 
                      className="text-muted-foreground text-sm"
                    >
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
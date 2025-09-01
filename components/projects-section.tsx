"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Shield, Globe, Database, Smartphone, Lock, Code } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "SecureBank Web Application",
      description:
        "Complete banking application with advanced security features including multi-factor authentication, encrypted transactions, and real-time fraud detection.",
      image: "/modern-banking-application-dashboard-with-security.png",
      technologies: ["React", "Node.js", "PostgreSQL", "JWT", "Encryption"],
      category: "Web Security",
      icon: Shield,
      github: "https://github.com/ulfatjon/securebank",
      demo: "https://securebank-demo.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "Network Security Monitor",
      description:
        "Real-time network monitoring system that detects suspicious activities, analyzes traffic patterns, and provides automated threat response.",
      image: "/network-security-monitoring-dashboard-with-graphs-.png",
      technologies: ["Python", "Django", "Redis", "WebSocket", "Docker"],
      category: "Network Security",
      icon: Globe,
      github: "https://github.com/ulfatjon/network-monitor",
      demo: "https://netmon-demo.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: "E-Commerce Security Audit",
      description:
        "Comprehensive security assessment and penetration testing for a major e-commerce platform, identifying and fixing critical vulnerabilities.",
      image: "/e-commerce-security-audit-report-with-vulnerabilit.png",
      technologies: ["Burp Suite", "OWASP", "SQL Injection", "XSS", "Security Testing"],
      category: "Security Audit",
      icon: Lock,
      github: null,
      demo: null,
      featured: false,
    },
    {
      id: 4,
      title: "Crypto Portfolio Tracker",
      description:
        "Secure cryptocurrency portfolio management application with real-time price tracking, advanced analytics, and portfolio optimization.",
      image: "/cryptocurrency-portfolio-dashboard-with-charts-and.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "TailwindCSS", "API Integration"],
      category: "Web Development",
      icon: Database,
      github: "https://github.com/ulfatjon/crypto-tracker",
      demo: "https://crypto-tracker-demo.vercel.app",
      featured: false,
    },
    {
      id: 5,
      title: "Mobile Security Scanner",
      description:
        "Android application that scans installed apps for security vulnerabilities, malware detection, and privacy risk assessment.",
      image: "/mobile-security-scanner-app-interface-with-vulnera.png",
      technologies: ["Java", "Android SDK", "SQLite", "Security APIs", "Machine Learning"],
      category: "Mobile Security",
      icon: Smartphone,
      github: "https://github.com/ulfatjon/mobile-scanner",
      demo: null,
      featured: false,
    },
    {
      id: 6,
      title: "DevSecOps Pipeline",
      description:
        "Automated CI/CD pipeline with integrated security testing, vulnerability scanning, and compliance checking for enterprise applications.",
      image: "/devops-pipeline-dashboard-with-security-integratio.png",
      technologies: ["Jenkins", "Docker", "Kubernetes", "SonarQube", "SAST", "DAST"],
      category: "DevSecOps",
      icon: Code,
      github: "https://github.com/ulfatjon/devsecops-pipeline",
      demo: null,
      featured: false,
    },
  ]

  const categories = [
    "All",
    "Web Security",
    "Network Security",
    "Security Audit",
    "Web Development",
    "Mobile Security",
    "DevSecOps",
  ]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2.5 h-2.5 bg-emerald-500/25 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              x: [0, 120, -90, 0],
              y: [0, -120, 90, 0],
              opacity: [0, 0.7, 0.4, 0],
              scale: [0, 1.1, 0.7, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 18 + 22,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 12,
            }}
          />
        ))}

        {[...Array(7)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-5 h-5 border-2 border-emerald-400/35 rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.5, 1],
              opacity: [0.25, 0.7, 0.25],
            }}
            transition={{
              rotate: { duration: 14 + i * 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 6 + i, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              opacity: { duration: 4 + i * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
        ))}

        <motion.div
          className="absolute top-1/4 right-1/3 w-32 h-32 border border-emerald-500/25 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            rotate: { duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-20 h-20 border-2 border-emerald-400/20 rotate-45"
          animate={{
            rotate: [45, 225, 405],
            y: [0, -25, 10, 0],
            x: [0, 10, -10, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            x: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <p
            title="Explore my portfolio of web applications, Telegram bots, and full-stack solutions that demonstrate expertise in modern development technologies and best practices." 
            className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty"
            >
              Explore my portfolio of web applications, Telegram bots, and full-stack solutions that demonstrate expertise in modern development technologies and best practices.
            </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 
            title="Highlighted Work" 
            className="text-2xl font-bold text-foreground mb-8"
          >
            Highlighted Work
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        <project.icon size={14} className="mr-1" />
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={16} className="mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground text-xs">
                      <project.icon size={12} className="mr-1" />
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm mb-3 flex-1 line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.github && (
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={14} className="mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} className="mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {!project.github && !project.demo && (
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent" disabled>
                        Private Project
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

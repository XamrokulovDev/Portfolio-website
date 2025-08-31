"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Main cursor glow */}
      <motion.div
        className="absolute h-64 w-64 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 blur-3xl"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          x: { type: "spring", damping: 30, stiffness: 200, mass: 0.5 },
          y: { type: "spring", damping: 30, stiffness: 200, mass: 0.5 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        }}
      />

      {/* Secondary trailing glow */}
      <motion.div
        className="absolute h-32 w-32 rounded-full bg-emerald-500/30 blur-2xl"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
          scale: isClicking ? 1.2 : 1,
        }}
        transition={{
          x: { type: "spring", damping: 40, stiffness: 150, mass: 0.8 },
          y: { type: "spring", damping: 40, stiffness: 150, mass: 0.8 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        }}
      />
    </motion.div>
  )
}

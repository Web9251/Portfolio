"use client"

import { motion } from "framer-motion"
import { type ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}

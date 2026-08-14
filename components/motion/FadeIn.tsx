"use client"

import { motion } from "framer-motion"
import { type ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

// Wrap any section:
// ...

// Fires once when ~15% scrolled into view, never replays.
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

// Optional: for staggered grids (e.g. project cards), wrap each child
// with an incrementing delay instead of animating the whole grid at once.
export function FadeInStagger({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <FadeIn key={i} delay={i * staggerDelay}>
          {child}
        </FadeIn>
      ))}
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"

const roles = [
  "full-stack apps",
  "fast UIs with React",
  "scalable APIs",
  "things people love",
]

export function useTypingEffect(
  words: string[],
  speed: number = 80,
  pause: number = 1800,
) {
  const [displayed, setDisplayed] = useState("")
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const delay = deleting ? speed / 2 : speed

    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplayed(current.slice(0, charIdx + 1))
        setCharIdx((c) => c + 1)
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), pause)
      } else if (deleting && charIdx > 0) {
        setDisplayed(current.slice(0, charIdx - 1))
        setCharIdx((c) => c - 1)
      } else {
        setDeleting(false)
        setWordIdx((i) => (i + 1) % words.length)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [charIdx, deleting, wordIdx])

  return displayed
}

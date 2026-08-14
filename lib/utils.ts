import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function downloadCV() {
  const link = document.createElement("a")
  link.href = "assets/cv.pdf"
  link.download = "Ibrahim-Kemal-CV.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

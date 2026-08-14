"use client"

import { ParticlesProvider } from "@tsparticles/react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { ISourceOptions, Engine } from "@tsparticles/engine"
import { useTheme } from "next-themes"
import { useMemo } from "react"

// defined once, outside the component — stable reference across renders
const initParticles = async (engine: Engine) => {
  await loadSlim(engine)
}

export function ParticlesBackground() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const options: ISourceOptions = useMemo(() => {
    const particleColor = isDark ? "#B4B2A9" : "#2C2C2A"
    return {
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,
      particles: {
        number: { value: 60, density: { enable: true } },
        paint: { color: { value: particleColor } },
        links: {
          enable: true,
          color: particleColor,
          distance: 130,
          opacity: isDark ? 0.25 : 0.4,
        },
        move: { enable: true, speed: 0.6, outModes: "out" },
        opacity: { value: isDark ? 0.4 : 0.7 },
        size: { value: isDark ? 2 : 2.5 },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 90, duration: 0.4 } },
      },
      detectRetina: true,
    }
  }, [isDark])

  if (!resolvedTheme) return null

  return (
    <ParticlesProvider init={initParticles}>
      <Particles
        id='hero-particles'
        options={options}
        className='absolute inset-0 -z-10'
      />
    </ParticlesProvider>
  )
}

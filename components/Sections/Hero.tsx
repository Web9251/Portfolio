"use client"

import { AvatarContainer } from "@/components/home/AvatarContainer"
import { useTypingEffect } from "@/hooks/useTypingEffect"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/home/Particles"
import { downloadCV } from "@/lib/utils"
import { Download } from "lucide-react"

const roles = [
  "full-stack apps",
  "fast UIs with React",
  "scalable APIs",
  "things people love",
]

function Hero() {
  const typed = useTypingEffect(roles, 80, 1800)

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id='home'
      className='relative min-h-screen overflow-hidden scroll-mt-20'
    >
      <ParticlesBackground />
      <div
        className='flex flex-col items-center justify-center
                min-h-screen px-4 text-center gap-6 '
      >
        <AvatarContainer
          name='Ibrahim Kemal'
          imageSrc='/images/Avatar.jpg'
          available
        />

        <div>
          <h1 className='text-4xl font-medium tracking-tight'>Ibrahim Kemal</h1>
          <p className='text-muted-foreground mt-2 text-lg'>
            I build <span className='text-foreground font-medium'>{typed}</span>
            <span
              className='inline-block w-0.5 h-5 bg-foreground
                         ml-0.5 align-middle animate-pulse'
            />
          </p>
        </div>

        <div className='flex gap-3'>
          <Button onClick={() => scrollToSection("projects")}>
            View projects
          </Button>
          <Button variant='outline' asChild>
            <a href='assets/cv.pdf' download='Ibrahim-Kemal-CV.pdf'>
              <Download className='w-4 h-4 mr-1' onClick={downloadCV} />{" "}
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero

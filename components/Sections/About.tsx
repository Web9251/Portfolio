"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { downloadCV } from "@/lib/utils"
import { Download, Mail } from "lucide-react"

function About() {
  return (
    <section id='about' className='py-24 px-4 max-w-4xl mx-auto scroll-mt-3'>
      <p className='text-xs uppercase tracking-widest text-muted-foreground mb-1'>
        About me
      </p>
      <h2 className='text-3xl font-medium mb-4'>
        Crafting code that <span className='text-primary'>people love</span>
      </h2>
      <p className='text-muted-foreground leading-relaxed mb-3'>
        I&apos;m a self-taught full-stack developer passionate about building
        fast, accessible, and user-friendly web applications. I enjoy turning
        ideas into real products and constantly learning along the way.
      </p>
      <p className='text-muted-foreground leading-relaxed'>
        When I&apos;m not coding, you&apos;ll find me watching movies, watching
        or playing football.
      </p>

      <Separator className='my-8' />

      <div className='flex gap-3'>
        <Button variant='outline' asChild>
          <a href='assets/cv.pdf' download='Ibrahim-Kemal-CV.pdf'>
            <Download className='w-4 h-4 mr-1' onClick={downloadCV} /> Download
            CV
          </a>
        </Button>
        <Button variant='outline'>
          <a href='mailto:ibrak251@gmail.com' className='flex items-center'>
            <Mail className='w-4 h-4 mr-2' /> Get in touch
          </a>
        </Button>
      </div>
    </section>
  )
}

export default About

"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Download, MapPin, Clock } from "lucide-react"
import ContactForm from "../form/ContactForm"
import { downloadCV } from "@/lib/utils"

function Contact() {
  return (
    <section id='contact' className='py-20 px-4 scroll-mt-8'>
      <div className='max-w-lg mx-auto text-center'>
        <p className='text-xs uppercase tracking-widest text-muted-foreground mb-1'>
          Get in touch
        </p>
        <h2 className='text-3xl font-medium mb-3'>
          Let`s build something together
        </h2>
        <p className='text-muted-foreground mb-6'>
          Open to freelance projects, full-time roles, and the occasional good
          idea over coffee.
        </p>

        <Badge
          variant='outline'
          className='text-emerald-700 border-border mb-6'
        >
          <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2' />
          Available for new projects
        </Badge>

        <div className='flex gap-3 justify-center flex-wrap mb-6'>
          <Button asChild>
            <a href='mailto:ibrak251@gmail.com'>
              <Mail className='w-4 h-4 mr-2' /> ibrak251@gmail.com
            </a>
          </Button>
          <Button variant='outline' asChild>
            <a href='assets/cv.pdf' download='Ibrahim-Kemal-CV.pdf'>
              <Download className='w-4 h-4 mr-2' onClick={downloadCV} />{" "}
              Download CV
            </a>
          </Button>
        </div>

        <Separator className='mb-8' />

        <ContactForm />
        <div className='flex justify-center gap-5 mt-8 flex-wrap'>
          <div className='flex items-center gap-1.5 text-xs text-muted-foreground'>
            <MapPin className='w-3.5 h-3.5' /> Addis Ababa, Ethiopia
          </div>
          <div className='flex items-center gap-1.5 text-xs text-muted-foreground'>
            <Clock className='w-3.5 h-3.5' /> Usually replies within 24h
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

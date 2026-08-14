"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ProjectCard } from "@/components/ProjectCard"
import { FadeIn } from "../motion/FadeIn"
import { projects } from "@/constants"

function Projects() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
      setCount(api.scrollSnapList().length)
    }

    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api])

  return (
    <section id='projects' className='py-24 px-4 max-w-5xl mx-auto scroll-mt-4'>
      <p className='text-xs uppercase tracking-widest text-muted-foreground mb-1'>
        Projects
      </p>
      <h2 className='text-3xl font-medium mb-8'>Things I`ve built</h2>

      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: false }}
        className='w-full'
      >
        <CarouselContent>
          {projects.map((p, i) => (
            <CarouselItem key={p.title} className='md:basis-1/2 lg:basis-1/3'>
              <FadeIn delay={i * 0.1}>
                <ProjectCard {...p} />
              </FadeIn>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className='flex items-center justify-between mt-6'>
        <div className='flex gap-1.5'>
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === current ? "w-5 bg-foreground" : "w-1.5 bg-border",
              )}
            />
          ))}
        </div>

        <div className='flex gap-2'>
          <Button
            variant='outline'
            size='icon'
            className='w-8 h-8'
            onClick={() => api?.scrollPrev()}
            disabled={!api?.canScrollPrev()}
          >
            <ChevronLeft className='w-4 h-4' />
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='w-8 h-8'
            onClick={() => api?.scrollNext()}
            disabled={!api?.canScrollNext()}
          >
            <ChevronRight className='w-4 h-4' />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects

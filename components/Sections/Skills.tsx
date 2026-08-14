"use client"

import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Lightbulb } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"

const categories = [
  {
    title: "Stacks",
    icon: Code2,
    color: "violet",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "PostgreSQL", level: 80 },
    ],
  },

  {
    title: "Soft skills",
    icon: Lightbulb,
    color: "rose",
    skills: [
      { name: "Problem solving", level: 95 },
      { name: "Communication", level: 88 },
      { name: "Self-learning", level: 98 },
    ],
  },
]

function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  })
  return (
    <section
      id='skills'
      ref={ref}
      className='py-24 px-4 max-w-5xl mx-auto scroll-mt-3'
    >
      <p className='text-xs uppercase tracking-widest text-muted-foreground mb-1'>
        Skills
      </p>
      <h2 className='text-3xl font-medium mb-8'>What I bring to the table</h2>

      <div className='grid sm:grid-cols-2 gap-4'>
        {categories.map(({ title, icon: Icon, skills }) => (
          <Card key={title} className='bg-background'>
            <CardHeader className='flex-row items-center gap-3 space-y-0 pb-3'>
              <div
                className='w-8 h-8 rounded-lg bg-primary/10 text-primary
                            flex items-center justify-center shrink-0'
              >
                <Icon className='w-4 h-4' />
              </div>
              <CardTitle className='text-sm font-medium'>{title}</CardTitle>
            </CardHeader>
            <CardContent className='space-y-3'>
              {skills.map(({ name, level }) => (
                <div key={name}>
                  <div className='flex justify-between text-xs mb-1.5'>
                    <span>{name}</span>
                    <span className='text-muted-foreground'>{level}%</span>
                  </div>
                  <Progress value={isInView ? level : 0} className='h-1.5' />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Skills

import { Badge } from "@/components/ui/badge"
import { Check, Zap } from "lucide-react"

const milestones = [
  {
    title: "Full-Stack Web Development",
    platform: "freeCodeCamp + CodingAddict",
    date: "2025 — 2026",
    badge: "Self-taught",
    done: true,
  },
  {
    title: "Currently building more projects",
    platform: "Self-study",
    date: "2026 — ongoing",
    badge: "In progress",
    done: false,
  },
]

function Education() {
  return (
    <section id='education' className='py-24 px-4 max-w-3xl mx-auto'>
      <p className='text-xs uppercase tracking-widest text-muted-foreground mb-1'>
        Education
      </p>
      <h2 className='text-3xl font-medium mb-8'>Self-taught journey</h2>

      <div
        className='relative pl-7 before:absolute before:left-2 before:top-1.5
                    before:bottom-1.5 before:w-px before:bg-border'
      >
        {milestones.map(({ title, platform, date, badge, done }) => (
          <div key={title} className='relative pb-6 last:pb-0'>
            <div
              className={`absolute -left-7 top-0.5 w-4.5 h-4.5 rounded-full
                          bg-background border-2 flex items-center justify-center
                          ${done ? "border-primary text-primary" : "border-emerald-500 text-emerald-500"}`}
            >
              {done ? (
                <Check className='w-2.5 h-2.5' />
              ) : (
                <Zap className='w-2.5 h-2.5' />
              )}
            </div>
            <div className='bg-background border rounded-lg p-4'>
              <div className='flex justify-between items-start gap-2 mb-1'>
                <p className='text-sm font-medium'>{title}</p>
                <Badge variant='secondary' className='text-[10px] shrink-0'>
                  {badge}
                </Badge>
              </div>
              <p className='text-xs text-muted-foreground mb-1'>{platform}</p>
              <p className='text-[11px] text-muted-foreground/70'>{date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education

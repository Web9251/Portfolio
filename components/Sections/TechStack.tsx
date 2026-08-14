import { Marquee } from "@/components/marquee"
import {
  siCss,
  siExpress,
  siJavascript,
  SimpleIcon,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons"

const row1 = [
  { name: "React", Icon: siReact },
  { name: "Next.js", Icon: siNextdotjs },
  { name: "TypeScript", Icon: siTypescript },
  { name: "Node.js", Icon: siNodedotjs },
  { name: "PostgreSQL", Icon: siPostgresql },
  { name: "Tailwind", Icon: siTailwindcss },
  { name: "Javascript", Icon: siJavascript },
  { name: "CSS3", Icon: siCss },
  { name: "Express", Icon: siExpress },
  { name: "Prisma", Icon: siPrisma },
]

function BrandIcon({ icon, size = 32 }: { icon: SimpleIcon; size: number }) {
  // Simple Icons gives some brands a pure black/white hex (Next.js, Express, GitHub, Vercel...)
  // which breaks on opposite-theme backgrounds. Override those specifically.
  const monochrome = ["000000", "ffffff"]
  const fillColor = monochrome.includes(icon.hex.toLowerCase())
    ? "currentColor" // inherits text color, which you control via dark mode
    : `#${icon.hex}`

  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill={fillColor}>
      <path d={icon.path} />
    </svg>
  )
}

function TechCard({ name, Icon }: (typeof row1)[number]) {
  return (
    <div
      className='flex flex-col items-center gap-2.5 rounded-xl border 
                    px-4 py-3 min-w-37.5 hover:border-foreground/20 transition-colors'
    >
      <BrandIcon icon={Icon} size={32} />
      <span className='text-sm font-medium whitespace-nowrap'>{name}</span>
    </div>
  )
}

function TechStack() {
  return (
    <section id='skills' className='py-20 rounded-2xl overflow-hidden'>
      <p
        className='text-center text-xs uppercase tracking-widest
                    text-muted-foreground mb-1'
      >
        Tech stack
      </p>
      <h2 className='text-center text-3xl font-medium mb-10'>
        Tools I work with
      </h2>

      <div className='relative'>
        <Marquee pauseOnHover className='[--duration:28s]'>
          {row1.map((t) => (
            <TechCard key={t.name} {...t} />
          ))}
        </Marquee>

        {/* Fade edges */}
        <div
          className='pointer-events-none absolute inset-y-0 left-0 w-16
                      bg-linear-to-r from-background/50'
        />
        <div
          className='pointer-events-none absolute inset-y-0 right-0 w-16
                      bg-linear-to-l from-background/50'
        />
      </div>
    </section>
  )
}

export default TechStack

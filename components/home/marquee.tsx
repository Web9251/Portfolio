import { cn } from "@/lib/utils"

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:30s] [--gap:1rem]",
        { "flex-row": !vertical, "flex-col": vertical },
        className,
      )}
      style={{ gap: "var(--gap)" }}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn("flex shrink-0", {
            "animate-marquee flex-row": !vertical,
            "animate-marquee-vertical flex-col": vertical,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse,
          })}
          style={{ gap: "var(--gap)" }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}

import Hero from "@/components/Sections/Hero"
import About from "@/components/Sections/About"
import Skills from "@/components/Sections/Skills"
import Education from "@/components/Sections/Education"
import TechStack from "@/components/Sections/TechStack"
import Projects from "@/components/Sections/Projects"
import Contact from "@/components/Sections/Contact"
import { FadeIn } from "@/components/motion/FadeIn"

export default function HomePage() {
  const sections = [
    Hero,
    About,
    Skills,
    Education,
    TechStack,
    Projects,
    Contact,
  ]

  return (
    <main className=''>
      {sections.map((Section, i) => {
        return (
          <FadeIn key={i}>
            <Section />
          </FadeIn>
        )
      })}
    </main>
  )
}

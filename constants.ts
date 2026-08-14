import { NavigationSection } from "./types"
import img1 from "@/public/images/img1.jpg"
import resumer from "@/public/images/resumer.jpg"
import coverLetter from "@/public/images/coverLetter.jpg"

export const navigationData: NavigationSection[] = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },

  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },

  {
    title: "Contact",
    href: "#contact",
  },
]

export const projects = [
  {
    title: "Mercato — E-commerce Platform",
    description: `Full-stack store with PayPal checkout, real-time inventory,
      and an admin dashboard for order management.`,
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    category: "Web app",
    image: img1,
    liveUrl: "https://mercato-sigma.vercel.app/",
    codeUrl: "https://github.com/Web9251/Mercato",
  },
  {
    title: "Resume — AI Powered resume generator",
    description: `Drag-and-drop kanban board with real-time sync across devices
      using websockets and optimistic UI updates.`,
    tags: ["React", "Node.js", "Socket.io", "Redis"],
    category: "Productivity",
    image: coverLetter,
    liveUrl: "https://resumer-ivory.vercel.app",
    codeUrl: "https://github.com/Web9251/Resumer",
  },
]

import { NavigationSection } from "./types"
import img1 from "@/public/images/img1.jpg"
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
    category: "E-commerce",
    image: img1,
    liveUrl: "https://mercato-sigma.vercel.app/",
    codeUrl: "https://github.com/Web9251/Mercato",
  },
  {
    title: "Resume — AI Powered resume generator",
    description: `AI-powered cover letter generator, paste your resume and job 
description to get a professional cover letter in seconds.`,
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    category: "AI / Machine Learning",
    image: coverLetter,
    liveUrl: "https://resumer-ivory.vercel.app",
    codeUrl: "https://github.com/Web9251/Resumer",
  },
]

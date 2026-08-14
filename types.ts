import z from "zod"
import { contactSchema } from "./schemas"

export type NavigationSection = {
  title: string
  href: string
}

export type ContactFields = z.infer<typeof contactSchema>

"use server"

import { Resend } from "resend"
import { contactSchema, type ContactFields } from "@/schemas"

const resend = new Resend(process.env.RESEND_API_KEY)

type SendContactEmailResult =
  | { success: true }
  | { success: false; error: string }

export async function sendContactEmail(
  formData: ContactFields,
): Promise<SendContactEmailResult> {
  const parsed = contactSchema.safeParse(formData)

  if (!parsed.success) {
    return {
      success: false,
      error: "Invalid form data. Please check your inputs.",
    }
  }

  const { name, email, message } = parsed.data

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "me@mydomain.com",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        success: false,
        error: "Failed to send message. Please try again.",
      }
    }

    return { success: true }
  } catch (err) {
    console.error("Unexpected error sending email:", err)
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    }
  }
}

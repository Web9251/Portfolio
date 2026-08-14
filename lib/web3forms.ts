import { type ContactFields } from "@/schemas"

type SubmitResult = { success: true } | { success: false; error: string }

export async function submitContactForm(
  formData: ContactFields,
): Promise<SubmitResult> {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        ...formData,
      }),
    })

    const result = await response.json()
    console.log("🚀 ~ submitContactForm ~ result:", result)

    if (result.success) {
      return { success: true }
    }

    return {
      success: false,
      error: result.message ?? "Failed to send message.",
    }
  } catch (err) {
    console.error("Web3Forms submission error:", err)
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    }
  }
}

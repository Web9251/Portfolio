"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import TextInput from "@/components/form/TextInput"
import TextareaInput from "@/components/form/TextareaInput"
import { Button } from "../ui/button"
import { Spinner } from "../ui/spinner"
import { contactSchema, type ContactFields } from "@/schemas"
import { submitContactForm } from "@/lib/web3forms"

function ContactForm() {
  const {
    formState: { isSubmitting },
    control,
    handleSubmit,
    reset,
  } = useForm<ContactFields>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const submitHandler = async (formData: ContactFields) => {
    const result = await submitContactForm(formData)
    console.log("🚀 ~ submitHandler ~ result:", result)

    if (result.success) {
      toast.success("Message sent! I'll get back to you soon.")
      reset()
    } else {
      toast.error(result.error)
    }
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <TextInput name='name' control={control} placeholder='Your name' />
      <TextInput
        name='email'
        type='email'
        control={control}
        placeholder='you@example.com'
      />
      <TextareaInput
        name='message'
        control={control}
        placeholder='Tell me about your project...'
      />
      <Button type='submit' className='w-full mt-4' disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  )
}
export default ContactForm

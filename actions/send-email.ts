"use server"

import { Resend } from "resend"
import { z } from "zod"
import { ContactFormEmail } from "@/emails/contact-form-email"
import { AdminNotificationEmail } from "@/emails/admin-notification-email"

const resend = new Resend(process.env.RESEND_API_KEY)

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

type FormData = z.infer<typeof formSchema>

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedFields = formSchema.safeParse(formData)

    if (!validatedFields.success) {
      return {
        success: false,
        error: "Invalid form data. Please check your inputs.",
      }
    }

    const { name, email, subject, message } = validatedFields.data

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Shaon <contact-confirmation@cscsylhet.com>",
      to: email,
      subject: "Thank you for contacting me",
      react: ContactFormEmail({ name }),
    })

    // Send notification email to admin
    await resend.emails.send({
      from: "Shaon <admin-notification@cscsylhet.com>",
      to: "arifulislamshaon028@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      react: AdminNotificationEmail({ name, email, subject, message }),
    })

    return {
      success: true,
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    }
  }
}

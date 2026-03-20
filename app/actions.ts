"use server"

import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactFormSchema = z.object({
  name: z.string().min(2, "Il nome deve avere almeno 2 caratteri"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  reason: z.string().min(1, "Seleziona una motivazione"),
  message: z.string().min(10, "Il messaggio deve avere almeno 10 caratteri"),
})

export async function sendEmail(formData: z.infer<typeof contactFormSchema>) {
  // Validazione lato server
  const validatedFields = contactFormSchema.safeParse(formData)

  if (!validatedFields.success) {
    return { error: "Dati non validi." }
  }

  const { name, email, reason, message } = validatedFields.data

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Cambia con il tuo dominio verificato su Resend
      to: ["tommasosviluppo@gmail.com"],
      subject: `Nuovo contatto da ${name}: ${reason}`,
      replyTo: email,
      html: `
        <h1>Nuovo Messaggio dal Portfolio</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Motivazione:</strong> ${reason}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      console.error("Resend Error:", error)
      return { error: "Errore durante l'invio dell'email." }
    }

    return { success: true }
  } catch (error) {
    console.error("Server Action Error:", error)
    return { error: "Si è verificato un errore inaspettato." }
  }
}

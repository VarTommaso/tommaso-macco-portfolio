"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { cn } from "@/lib/utils"
import { Blob } from "@/components/blob"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import { Send, Mail, Instagram, Loader2, Sparkles } from "lucide-react"
import { sendEmail } from "@/app/actions"

const reasons = [
  { value: "Nuovo Progetto E-commerce", label: "Nuovo Progetto E-commerce" },
  { value: "Sviluppo Web / App", label: "Sviluppo Web / App" },
  {
    value: "Collaborazione IA / Digital Design",
    label: "Collaborazione IA / Digital Design",
  },
  { value: "Consulenza Tecnica", label: "Consulenza Tecnica" },
  { value: "Altro / Saluto generale", label: "Altro / Saluto generale" },
]

const contactFormSchema = z.object({
  name: z.string().min(2, "Il nome deve avere almeno 2 caratteri"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  reason: z.string().min(1, "Scegli una motivazione per procedere"),
  message: z.string().min(10, "Il messaggio deve avere almeno 10 caratteri"),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

const Contact = () => {
  const [isPending, setIsPending] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsPending(true)
    const result = await sendEmail(data)
    setIsPending(false)

    if (result?.success) {
      toast.success("Messaggio inviato!", {
        description: "Ti risponderò il prima possibile.",
      })
      reset()
    } else {
      toast.error("Errore durante l'invio", {
        description: result?.error || "Si è verificato un errore inaspettato.",
      })
    }
  }

  return (
    <section id="contatti" className="relative overflow-hidden py-32 md:py-60">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2 lg:gap-32">
          {/* Colonna Sinistra */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-6">
              <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-secondary" />
              <h2 className="text-xs font-bold tracking-[0.5em] text-primary uppercase">
                Get in touch
              </h2>
              <h3 className="font-display text-6xl leading-tight font-bold tracking-tight text-foreground md:text-8xl">
                Lavoriamo <br />
                <span className="text-muted-foreground">Insieme.</span>
              </h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
                Hai un'idea ambiziosa o un progetto che necessita di un tocco
                digitale d'eccellenza? Scrivimi e trasformiamolo in realtà.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="group flex items-center gap-6">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-white/5 bg-card text-primary shadow-lg shadow-primary/5 transition-transform duration-500 group-hover:scale-110">
                  <Mail className="size-6" />
                </div>
                <div>
                  <div className="mb-1 text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    Email
                  </div>
                  <a
                    href="mailto:macco.sviluppo@gmail.com"
                    className="font-display text-lg font-bold transition-colors hover:text-primary"
                  >
                    macco.sviluppo@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-white/5 bg-card text-secondary shadow-lg shadow-secondary/5 transition-transform duration-500 group-hover:scale-110">
                  <Instagram className="size-6" />
                </div>
                <div>
                  <div className="mb-1 text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    Social
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="font-display font-bold transition-colors hover:text-secondary"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="font-display font-bold transition-colors hover:text-secondary"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Colonna Destra: Form Luxury */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 -z-10 rounded-[3rem] border border-white/5 bg-white/[0.02] shadow-2xl backdrop-blur-3xl" />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-8"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <Label
                    htmlFor="name"
                    className="ml-1 text-xs font-bold tracking-widest text-muted-foreground uppercase"
                  >
                    Nome Completo
                  </Label>
                  <Input
                    {...register("name")}
                    id="name"
                    placeholder="Il tuo nome"
                    className={cn(
                      "h-14 rounded-2xl border-white/10 bg-white/5 px-6 transition-all placeholder:text-muted-foreground/30 focus:border-primary/50 focus:ring-primary/20",
                      errors.name &&
                        "border-destructive/50 focus:border-destructive"
                    )}
                  />
                  {errors.name && (
                    <span className="text-destructive ml-1 text-xs font-bold">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  <Label
                    htmlFor="email"
                    className="ml-1 text-xs font-bold tracking-widest text-muted-foreground uppercase"
                  >
                    Email
                  </Label>
                  <Input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="la-tua@email.com"
                    className={cn(
                      "h-14 rounded-2xl border-white/10 bg-white/5 px-6 transition-all placeholder:text-muted-foreground/30 focus:border-primary/50 focus:ring-primary/20",
                      errors.email &&
                        "border-destructive/50 focus:border-destructive"
                    )}
                  />
                  {errors.email && (
                    <span className="text-destructive ml-1 text-xs font-bold">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Label
                  htmlFor="reason"
                  className="ml-1 text-xs font-bold tracking-widest text-muted-foreground uppercase"
                >
                  Motivazione
                </Label>
                <Select onValueChange={(value) => setValue("reason", value)}>
                  <SelectTrigger
                    className={cn(
                      "h-14 rounded-2xl border-white/10 bg-white/5 px-6 text-muted-foreground transition-all focus:border-primary/50 focus:ring-primary/20",
                      "data-[state=open]:border-primary data-[state=open]:ring-4 data-[state=open]:ring-primary/10",
                      errors.reason &&
                        "border-destructive/50 focus:border-destructive"
                    )}
                  >
                    <SelectValue placeholder="Seleziona il motivo" />
                  </SelectTrigger>
                  <SelectContent className="overflow-hidden rounded-2xl border-white/10 bg-background/95 p-2 shadow-2xl backdrop-blur-2xl">
                    {reasons.map((r) => (
                      <SelectItem
                        key={r.value}
                        value={r.value}
                        className="my-1 cursor-pointer rounded-xl px-4 py-3 transition-colors focus:bg-primary focus:text-primary-foreground"
                      >
                        <span className="text-sm font-medium tracking-wide">
                          {r.label}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.reason && (
                  <span className="text-destructive ml-1 text-xs font-bold">
                    Seleziona una motivazione per procedere
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <Label
                  htmlFor="message"
                  className="ml-1 text-xs font-bold tracking-widest text-muted-foreground uppercase"
                >
                  Messaggio
                </Label>
                <Textarea
                  {...register("message")}
                  id="message"
                  placeholder="Descrivi brevemente la tua richiesta..."
                  className={cn(
                    "min-h-[180px] resize-none rounded-2xl border-white/10 bg-white/5 p-6 transition-all placeholder:text-muted-foreground/30 focus:border-primary/50 focus:ring-primary/20 md:min-h-[300px]",
                    errors.message &&
                      "border-destructive/50 focus:border-destructive"
                  )}
                />
                {errors.message && (
                  <span className="text-destructive ml-1 text-xs font-bold">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <Button
                disabled={isPending}
                type="submit"
                className="h-16 rounded-full bg-primary font-display text-xs font-bold tracking-widest text-primary-foreground uppercase shadow-xl shadow-primary/10 transition-all hover:scale-[1.02] hover:shadow-primary/20 active:scale-[0.98] disabled:opacity-50"
              >
                {isPending ? (
                  <span className="flex items-center gap-2">
                    Invio in corso <Loader2 className="size-4 animate-spin" />
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Invia Messaggio <Send className="size-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <Blob color="primary" className="top-1/2 left-[-10%] h-[40%] w-[40%]" />
      <Blob
        color="secondary"
        className="right-[-10%] bottom-[-10%] h-[40%] w-[40%]"
      />
    </section>
  )
}

export default Contact

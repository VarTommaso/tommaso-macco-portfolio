"use client"

import React, { useRef, useState, useEffect } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion"
import Image from "next/image"
import { useLenis } from "lenis/react"
import * as Portal from "@radix-ui/react-portal"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Zap, ArrowRight, Globe, X } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: "street-legacy",
    title: "STREET LEGACY",
    category: "Clothing E-Commerce",
    badge: "FULL-STACK NEXT.JS 15",
    link: "https://www.street-legacy.it",
    description:
      "Store di abbigliamento completo con gestione complessa di taglie, varianti prodotto e dashboard per il controllo totale delle vendite.",
    image: "/desktop-street-legacy.webp",
    color: "primary",
    gridSpan: "md:col-span-6",
    aspect: "aspect-[16/10]",
    problem:
      "Il brand necessitava di un sistema affidabile per gestire la complessità intrinseca di un negozio di abbigliamento, dove ogni prodotto richiede una gestione precisa di molteplici taglie, disponibilità d'inventario e flussi d'ordine senza errori.",
    solution:
      "Sviluppo di una piattaforma full-stack unificata con Next.js 15. Ho realizzato un ecosistema integrato che combina un'interfaccia utente fluida a un potente sistema di gestione (CMS) proprietario. Grazie all'integrazione profonda con le API di Stripe, il sistema gestisce in tempo reale la creazione di prodotti, prezzi e varianti, offrendo un controllo totale su ogni aspetto del business da un'unica dashboard.",
    tech: [
      "Next.js 15",
      "Supabase",
      "Stripe",
      "Tailwind CSS",
      "Server Actions",
      "Shadcn/UI",
      "SEO Strategy",
    ],
  },
  {
    id: "iosno",
    title: "IOSNO",
    category: "Digital Experience & LMS",
    badge: "PREMIUM VIDEO PLATFORM",
    link: "https://www.iosno.com",
    description:
      "Piattaforma immersiva per la meditazione con video-corsi esclusivi, streaming protetto e animazioni all'avanguardia.",
    image: "/desktop-iosno.webp",
    color: "secondary",
    gridSpan: "md:col-span-6",
    aspect: "aspect-[16/10]",
    problem:
      "Un noto personaggio pubblico del mondo della meditazione cercava un modo per vendere i propri corsi online garantendo la massima protezione dei contenuti e un'esperienza utente calma e coinvolgente.",
    solution:
      "Ho creato una piattaforma 'High-End' che fonde un sito vetrina ultra-animato con un sistema di e-learning protetto. L'integrazione con Bunny.net assicura che lo streaming sia accessibile solo agli acquirenti, mentre il dashboard dedicato permette al cliente di gestire i contenuti in totale autonomia.",
    tech: [
      "Next.js 15",
      "Framer Motion",
      "Bunny.net",
      "Tailwind CSS",
      "Stripe",
      "supabase",
      "SEO Strategy",
    ],
  },
]

const ProjectOverlay = ({
  project,
  onClose,
}: {
  project: (typeof projects)[0]
  onClose: () => void
}) => {
  const lenis = useLenis()

  useEffect(() => {
    lenis?.stop()
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"

    return () => {
      lenis?.start()
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }
  }, [lenis])

  return (
    <Portal.Root>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        data-lenis-prevent
        className="fixed inset-0 z-[9999] overflow-y-auto bg-background/95 backdrop-blur-xl"
        style={{ touchAction: "pan-y" }}
      >
        <button
          onClick={onClose}
          className="group fixed top-6 right-6 z-[10000] flex size-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:bg-white/10 md:top-10 md:right-10"
        >
          <X className="size-6 text-foreground transition-transform duration-300 group-hover:rotate-90" />
        </button>

        <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-12 p-6 pt-32 pb-20 md:p-20 md:pt-40">
          {/* Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/5 bg-card shadow-2xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>

          {/* Content Info */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="flex flex-col gap-8 lg:col-span-7">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-primary" />
                  <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">
                    {project.category}
                  </span>
                </div>
                <h2 className="font-display text-5xl leading-tight font-bold tracking-tighter md:text-7xl">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-12 py-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="size-5 text-primary" />
                    <span className="text-xs font-bold tracking-[0.3em] text-foreground uppercase">
                      La Sfida
                    </span>
                  </div>
                  <p className="font-body text-lg leading-relaxed text-muted-foreground">
                    {project.problem}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Zap className="size-5 text-secondary" />
                    <span className="text-xs font-bold tracking-[0.3em] text-foreground uppercase">
                      La Soluzione
                    </span>
                  </div>
                  <p className="font-body text-lg leading-relaxed text-muted-foreground">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end lg:col-span-5">
              <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm md:p-12">
                <p className="mb-8 font-body text-xl leading-relaxed text-foreground/80">
                  {project.description}
                </p>

                <Button
                  asChild
                  variant="default"
                  className="h-20 w-full rounded-2xl bg-primary font-display text-xs font-bold tracking-[0.2em] text-primary-foreground uppercase shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VISITA IL SITO LIVE <ArrowRight className="ml-4 size-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Portal.Root>
  )
}

const ProjectCard = ({
  project,
  onOpen,
}: {
  project: (typeof projects)[0]
  onOpen: () => void
}) => {
  return (
    <motion.div
      onClick={onOpen}
      whileHover="hover"
      className={cn(
        "group relative flex cursor-pointer flex-col gap-6",
        project.gridSpan
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl border border-white/5 bg-card transition-all duration-700 group-hover:border-primary/40",
          project.aspect
        )}
      >
        <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-90 transition-all duration-700 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div className="flex size-14 translate-y-4 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_rgba(var(--primary),0.5)] transition-all duration-500 group-hover:translate-y-0">
            <ArrowRight className="size-6" />
          </div>
        </div>

        <div className="absolute top-4 right-4 z-20">
          <span
            className={cn(
              "rounded-lg border bg-black/60 px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase backdrop-blur-md",
              project.color === "primary"
                ? "border-primary/30 text-primary"
                : "border-secondary/30 text-secondary"
            )}
          >
            {project.badge}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1 px-2">
        <span className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase transition-colors duration-300 group-hover:text-primary">
          {project.category}
        </span>
        <h3 className="font-display text-3xl font-bold tracking-tight text-foreground transition-colors duration-500 group-hover:text-primary md:text-4xl">
          {project.title}
        </h3>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })
  const y = useTransform(smoothProgress, [0, 1], [0, -80])

  return (
    <section
      id="progetti"
      ref={containerRef}
      className="relative overflow-hidden py-32 md:py-60"
    >
      <div className="relative z-10 container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 flex max-w-3xl flex-col gap-8 md:mb-32"
        >
          <div className="h-1.5 w-24 rounded-full bg-primary" />
          <h2 className="text-xs font-bold tracking-[0.6em] text-primary uppercase">
            Portfolio
          </h2>
          <h3 className="font-display text-6xl leading-[1.1] font-bold tracking-tight text-foreground md:text-8xl">
            Progetti <br />{" "}
            <span className="text-muted-foreground">in mostra.</span>
          </h3>
        </motion.div>
        <motion.div
          style={{ y }}
          className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-10"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 flex justify-center"
        >
          <Button
            variant="ghost"
            className="group h-auto py-4 text-[10px] font-bold tracking-[0.5em] text-muted-foreground uppercase transition-all hover:text-primary"
          >
            Esplora tutti i progetti{" "}
            <ArrowRight className="ml-4 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div> */}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectOverlay
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
      <div className="absolute top-1/4 left-[-15%] -z-10 h-[50%] w-[50%] animate-pulse rounded-full bg-primary/5 blur-[180px]" />
      <div className="absolute right-[-15%] bottom-[-15%] -z-10 h-[50%] w-[50%] rounded-full bg-secondary/5 blur-[180px]" />
    </section>
  )
}

export default Projects

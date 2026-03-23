"use client"

import React, { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Laptop,
  Code2,
  GraduationCap,
  Briefcase,
  Rocket,
  Wand2,
} from "lucide-react"
import { Blob } from "@/components/blob"

const experiences = [
  {
    year: "Anni 16",
    title: "Passione Hardware",
    company: "Assemblaggio PC",
    description:
      "I primi passi nel mondo della tecnologia partendo dall'hardware. Studio approfondito dell'architettura dei sistemi e assemblaggio di workstation ad alte prestazioni.",
    icon: Laptop,
    color: "secondary",
  },
  {
    year: "2019",
    title: "Mentorship Senior",
    company: "Percorso Autodidatta",
    description:
      "Approccio strutturato alla programmazione sotto la guida di un mentore senior, focalizzandomi sulle basi dell'ingegneria del software e del problem solving.",
    icon: Rocket,
    color: "primary",
  },
  {
    year: "2020 - 2021",
    title: "Formazione Avanzata",
    company: "BOOLEAN",
    description:
      "Percorso intensivo full-stack dedicato alle tecnologie web più moderne, con un focus verticale su JavaScript, React e la gestione di architetture dati complesse.",
    icon: GraduationCap,
    color: "secondary",
  },
  {
    year: "2022 - 2023",
    title: "Sviluppatore Junior",
    company: "Studio Senior Dev",
    description:
      "Collaborazione attiva su progetti reali di livello enterprise, contribuendo allo sviluppo di calcolatori fiscali e interfacce utente dinamiche per il settore business.",
    icon: Code2,
    color: "primary",
  },
  {
    year: "2024 - 2025",
    title: "Architetto Software",
    company: "DICOTEC Srls",
    description:
      "Responsabile della progettazione e dello sviluppo di sistemi gestionali logistici avanzati, ottimizzando i processi aziendali attraverso webapp scalabili e sicure.",
    icon: Briefcase,
    color: "secondary",
  },
  {
    year: "2026 - Presente",
    title: "Sviluppatore Freelance",
    company: "Libera Professione",
    description:
      "Consulenza tecnologica e sviluppo di soluzioni digitali su misura. Creo siti web ed e-commerce d'élite per aziende che puntano all'eccellenza e alla massima performance.",
    icon: Wand2,
    color: "primary",
  },
]

const ExperienceItem = ({ exp, index }: { exp: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative flex flex-row items-start gap-8 pb-20 text-left last:pb-0 md:gap-20"
    >
      {/* Circle Indicator - Sempre a sinistra */}
      <div className="relative z-10 flex shrink-0 flex-col items-center">
        <div
          className={cn(
            "flex size-10 items-center justify-center rounded-full border bg-background shadow-xl transition-all duration-500 md:size-12",
            exp.color === "primary"
              ? "border-primary text-primary"
              : "border-secondary text-secondary"
          )}
        >
          <exp.icon className="size-4 md:size-5" />
        </div>
      </div>

      {/* Content - Sempre a destra dell'indicatore */}
      <div className="flex-1 pt-0.5">
        <div
          className={cn(
            "mb-2 text-[9px] font-bold tracking-[0.5em] uppercase md:text-[10px]",
            exp.color === "primary" ? "text-primary" : "text-secondary"
          )}
        >
          {exp.year}
        </div>

        <h4 className="mb-1 font-display text-xl leading-tight font-bold tracking-tight text-foreground md:text-3xl">
          {exp.title}
        </h4>

        <div className="mb-4 text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase md:text-xs">
          {exp.company}
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {exp.description}
        </p>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // rimosso useSpring, uso diretto di scrollYProgress (ammorbidito da Lenis)
  const scaleY = scrollYProgress

  return (
    <section 
      id="esperienza"
      ref={containerRef}
      className="relative overflow-hidden py-32 md:py-60"
    >
      <div className="relative container">
        {/* Header Sezione */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex max-w-3xl flex-col items-start gap-6 text-left"
        >
          <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-primary to-secondary" />
          <h2 className="text-xs font-bold tracking-[0.5em] text-primary uppercase">
            Esperienza
          </h2>
          <h3 className="font-display text-5xl leading-[1.1] font-bold tracking-tight md:text-8xl">
            Il mio percorso <br />
            <span className="text-muted-foreground">evolutivo.</span>
          </h3>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          {/* Base Gray Line - Sempre a sinistra (allineata con cerchio size-10/12) */}
          <div className="absolute top-0 bottom-0 left-5 w-[1px] -translate-x-1/2 bg-white/5 md:left-6" />

          {/* Active Progress Line with Fixed Gradient */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute top-0 bottom-0 left-5 z-0 w-[1px] -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-transparent md:left-6"
          />

          <div className="flex flex-col">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>

      <Blob color="primary" className="top-1/4 right-[-10%] h-[40%] w-[40%]" />
      <Blob
        color="secondary"
        className="bottom-0 left-[-10%] h-[40%] w-[40%]"
      />
    </section>
  )
}

export default Experience

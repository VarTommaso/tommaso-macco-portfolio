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
  Wand2
} from "lucide-react"

const experiences = [
  {
    year: "2026 - Presente",
    title: "Freelance Developer",
    company: "Freelance",
    description: "Inizio del percorso indipendente. Progetti innovativi con massima libertà creativa.",
    icon: Wand2,
    color: "primary",
  },
  {
    year: "2024 - 2025",
    title: "Software Architect",
    company: "DICOTEC Srls",
    description: "Sviluppo gestionali logistici complessi e webapp aziendali ad alte prestazioni.",
    icon: Briefcase,
    color: "secondary",
  },
  {
    year: "2022 - 2023",
    title: "Junior Developer",
    company: "Studio Senior Dev",
    description: "Collaborazione diretta su progetti reali, calcolatori fiscali e UI dinamiche.",
    icon: Code2,
    color: "primary",
  },
  {
    year: "2020 - 2021",
    title: "Advanced Education",
    company: "BOOLEAN",
    description: "Percorso intensivo su JavaScript, React e architetture web moderne.",
    icon: GraduationCap,
    color: "secondary",
  },
  {
    year: "2019",
    title: "Mentorship",
    company: "Self-Taught",
    description: "Primi passi nel codice sotto la guida di un mentore senior.",
    icon: Rocket,
    color: "primary",
  },
  {
    year: "Anni 16",
    title: "Hardware Passion",
    company: "PC Builder",
    description: "Montaggio del primo PC e studio approfondito dell'architettura hardware.",
    icon: Laptop,
    color: "secondary",
  }
]

const ExperienceItem = ({ exp, index }: { exp: any, index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative flex flex-row gap-8 md:gap-20 pb-20 last:pb-0 items-start text-left"
    >
      {/* Circle Indicator - Sempre a sinistra */}
      <div className="relative z-10 flex flex-col items-center shrink-0">
        <div className={cn(
          "size-10 md:size-12 rounded-full bg-background border flex items-center justify-center transition-all duration-500 shadow-xl",
          exp.color === "primary" ? "border-primary text-primary" : "border-secondary text-secondary"
        )}>
          <exp.icon className="size-4 md:size-5" />
        </div>
      </div>

      {/* Content - Sempre a destra dell'indicatore */}
      <div className="flex-1 pt-0.5">
        <div className={cn(
          "text-[9px] md:text-[10px] tracking-[0.5em] font-bold uppercase mb-2",
          exp.color === "primary" ? "text-primary" : "text-secondary"
        )}>
          {exp.year}
        </div>
        
        <h4 className="text-xl md:text-4xl font-display font-bold text-foreground mb-1 tracking-tight leading-tight">
          {exp.title}
        </h4>
        
        <div className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4">
          {exp.company}
        </div>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
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

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section 
      id="esperienza"
      ref={containerRef}
      className="relative py-32 md:py-60 overflow-hidden"
    >
      <div className="container relative">
        {/* Header Sezione */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 mb-24 max-w-3xl items-start text-left"
        >
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <h2 className="text-primary text-xs tracking-[0.5em] font-bold uppercase">Experience</h2>
          <h3 className="text-5xl md:text-8xl font-display font-bold leading-[1.1] tracking-tight">
            Il mio percorso <br />
            <span className="text-muted-foreground">evolutivo.</span>
          </h3>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Base Gray Line - Sempre a sinistra (allineata con cerchio size-10/12) */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2" />
          
          {/* Active Progress Line with Fixed Gradient */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-5 md:left-6 top-0 bottom-0 w-[1px] -translate-x-1/2 z-0 bg-gradient-to-b from-primary via-secondary to-transparent"
          />

          <div className="flex flex-col">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[150px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[150px] -z-10 rounded-full" />
    </section>
  )
}

export default Experience

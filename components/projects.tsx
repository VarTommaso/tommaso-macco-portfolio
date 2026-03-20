"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import { useLenis } from "lenis/react"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Layers, Zap, ShieldCheck, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: "luxury-ecommerce",
    title: "Aura Luxury Store",
    category: "E-Commerce Premium",
    badge: "HEADLESS NEXT.JS",
    description: "Piattaforma e-commerce per brand di alta moda con focus su micro-interazioni e velocità estrema.",
    desktopImage: "/desktop-street-legacy.webp",
    mobileImage: "/mobile-street-legacy.webp",
    color: "primary",
    gridSpan: "md:col-span-9",
    aspect: "aspect-video",
    problem: "Il cliente necessitava di un'esperienza utente che riflettesse l'esclusività del brand senza sacrificare le performance SEO.",
    solution: "Ho implementato una strategia di caching avanzata con Next.js e un sistema di animazioni lightweight con Framer Motion.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Stripe", "Sanity CMS"],
    tasks: ["Design dell'architettura headless", "Ottimizzazione delle immagini", "Integrazione pagamenti"]
  },
  {
    id: "tech-marketplace",
    title: "Nova Tech Marketplace",
    category: "Marketplace Multi-Vendor",
    badge: "FULL-STACK MARKET",
    description: "Un marketplace complesso per componenti hardware con gestione dinamica di migliaia di SKU.",
    desktopImage: "/desktop-street-legacy.webp",
    mobileImage: "/mobile-street-legacy.webp",
    color: "secondary",
    gridSpan: "md:col-span-3",
    aspect: "aspect-[9/16]",
    problem: "La gestione di filtri complessi su migliaia di prodotti causava lag significativi nella navigazione.",
    solution: "Sviluppo di un sistema di filtraggio lato server ottimizzato e implementazione di algoritmi di ricerca istantanea.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "ElasticSearch"],
    tasks: ["Sviluppo del sistema di filtri", "Ottimizzazione database", "Dashboard venditori"]
  }
]

const ProjectTrigger = ({ project }: { project: typeof projects[0] }) => {
  const isHorizontal = project.gridSpan === "md:col-span-9"

  return (
    <DialogTrigger asChild>
      <motion.div 
        whileHover="hover"
        className={cn(
          "group relative cursor-pointer flex flex-col gap-8",
          project.gridSpan
        )}
      >
        <div className={cn(
          "relative rounded-2xl overflow-hidden bg-card border border-white/5 transition-all duration-700 group-hover:border-primary/20 w-full",
          project.aspect
        )}>
          
          <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
            <Image 
              src={isHorizontal ? project.desktopImage : project.mobileImage} 
              alt={project.title}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="md:hidden absolute bottom-0 right-[5%] w-[35%] aspect-[9/19] rounded-t-xl overflow-hidden border-x-4 border-t-4 border-background shadow-2xl z-20">
            <Image 
              src={project.mobileImage} 
              alt={`${project.title} Mobile`}
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
             <div className="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
               <ArrowUpRight className="size-8" />
             </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-3xl font-display font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-500">
              {project.title}
            </h3>
            
            <span className={cn(
              "w-fit px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border bg-black/40 backdrop-blur-sm",
              project.color === 'primary' 
                ? "text-primary border-primary/20" 
                : "text-secondary border-secondary/20"
            )}>
              {project.badge}
            </span>
          </div>
          
          <p className="text-muted-foreground text-base leading-relaxed line-clamp-2 max-w-3xl">
            {project.description}
          </p>
        </div>
      </motion.div>
    </DialogTrigger>
  )
}

const ProjectDialogContent = ({ project }: { project: typeof projects[0] }) => {
  return (
    <DialogContent className="max-w-[95vw] md:max-w-[85vw] lg:max-w-[1250px] bg-background/98 backdrop-blur-3xl border-border p-0 overflow-hidden rounded-[2.5rem] shadow-2xl max-h-[92vh] flex flex-col md:flex-row border-white/5">
      <div className="md:w-[45%] bg-card relative min-h-[400px] md:min-h-full overflow-hidden border-b md:border-b-0 md:border-r border-border">
        <Image 
          src={project.desktopImage} 
          alt={project.title}
          fill
          className="object-cover opacity-70 transition-all duration-1000"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] aspect-[9/19] rounded-[2rem] overflow-hidden border-8 border-background shadow-2xl z-10 hidden md:block">
           <Image src={project.mobileImage} alt="Mobile View" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90 z-20" />
        <div className="absolute inset-0 p-12 flex flex-col justify-end z-30">
          <span className="text-primary text-[10px] tracking-[0.4em] font-bold uppercase mb-4">{project.category}</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 leading-none">{project.title}</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="md:w-[55%] p-10 md:p-16 flex flex-col gap-12 overflow-y-auto custom-scrollbar bg-background">
        <DialogHeader className="text-left">
          <DialogTitle className="text-xs tracking-[0.5em] text-primary uppercase font-bold mb-4 flex items-center gap-4">
             <div className="h-px w-12 bg-primary/30" />
             OVERVIEW
          </DialogTitle>
          <DialogDescription className="text-foreground text-xl md:text-2xl leading-tight font-display font-bold">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-12">
          <div className="group/section">
            <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
              <ShieldCheck className="size-4" /> LA SFIDA
            </div>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed border-l-2 border-primary/20 pl-6">
              {project.problem}
            </p>
          </div>
          <div className="group/section">
            <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
              <Zap className="size-4" /> LA SOLUZIONE
            </div>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed border-l-2 border-primary/20 pl-6">
              {project.solution}
            </p>
          </div>
          <div className="group/section">
            <div className="flex items-center gap-3 mb-6 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
              <Layers className="size-4" /> IMPLEMENTAZIONE
            </div>
            <div className="grid grid-cols-1 gap-4">
              {project.tasks.map((task, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/2 border border-white/5">
                  <div className="mt-1 size-1.5 rounded-full bg-primary" />
                  <span className="text-sm md:text-base text-foreground/80 font-medium">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-12 mt-auto border-t border-border flex flex-col sm:flex-row gap-6">
           <Button className="flex-1 rounded-full py-8 font-display uppercase text-xs tracking-[0.2em] font-bold shadow-xl shadow-primary/10">
             VISITA IL SITO <ExternalLink className="ml-3 size-4" />
           </Button>
           <Button variant="outline" className="flex-1 rounded-full py-8 font-display uppercase text-xs tracking-[0.2em] font-bold border-white/10">
             REPO GITHUB <Github className="ml-3 size-4" />
           </Button>
        </div>
      </div>
    </DialogContent>
  )
}

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const lenis = useLenis()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const y = useTransform(smoothProgress, [0, 1], [0, -100])
  const handleDialogOpenChange = (open: boolean) => {
    if (open) lenis?.stop()
    else lenis?.start()
  }

  return (
    <section id="progetti" ref={containerRef} className="relative py-32 md:py-60 overflow-hidden">
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 mb-24 md:mb-32 max-w-3xl"
        >
          <div className="h-1.5 w-24 bg-primary rounded-full" />
          <h2 className="text-primary text-xs tracking-[0.6em] font-bold uppercase">Portfolio</h2>
          <h3 className="text-6xl md:text-8xl font-display font-bold leading-[1.1] tracking-tight">
            Progetti <br /> <span className="text-muted-foreground">di Eccellenza.</span>
          </h3>
        </motion.div>
        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {projects.map((project) => (
            <Dialog key={project.id} onOpenChange={handleDialogOpenChange}>
              <ProjectTrigger project={project} />
              <ProjectDialogContent project={project} />
            </Dialog>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-40 flex justify-center">
           <Button variant="ghost" className="group h-auto py-4 text-muted-foreground hover:text-primary transition-all text-[10px] tracking-[0.5em] font-bold uppercase">
             Esplora tutti i progetti <ExternalLink className="ml-4 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
           </Button>
        </motion.div>
      </div>
      <div className="absolute top-1/4 left-[-15%] w-[50%] h-[50%] bg-primary/5 blur-[180px] -z-10 rounded-full animate-pulse" />
      <div className="absolute bottom-[-15%] right-[-15%] w-[50%] h-[50%] bg-secondary/5 blur-[180px] -z-10 rounded-full" />
    </section>
  )
}

export default Projects

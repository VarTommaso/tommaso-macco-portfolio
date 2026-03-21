"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { BlobContainer } from "@/components/blob-container"

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Tracciamo lo scroll specifico di questa sezione
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Effetti di "evaporazione" premium allo scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(20px)"]
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden"
    >
      <BlobContainer />

      <motion.div
        style={{ y, opacity, scale, filter }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 container flex flex-col items-center text-center"
      >
        <motion.span
          variants={itemVariants}
          className="mb-6 text-[10px] font-bold tracking-[0.4em] text-primary uppercase"
        >
          Sviluppatore Web Freelance · Savona · Liguria
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="mb-8 max-w-6xl font-display text-5xl leading-[1.1] font-bold tracking-tight md:text-7xl lg:text-9xl"
        >
          Porto il tuo business <br />
          <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
            al livello superiore.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-12 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          Realizzo siti web ed e-commerce ad alte prestazioni che uniscono design d'avanguardia e strategie SEO efficaci. Il partner tecnologico per la tua crescita digitale a Savona e in tutta la Liguria.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-row gap-6">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary px-10 py-7 font-display text-xs tracking-widest text-primary-foreground uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <a href="#progetti">I Miei Lavori</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-white/10 px-10 py-7 font-display text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white/5"
          >
            <a href="#contatti">Contattami</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - sparisce subito per pulizia */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground uppercase">
          Esplora
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

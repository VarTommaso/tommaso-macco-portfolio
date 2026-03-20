"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { BlobContainer } from "@/components/blob-container"

const Hero = () => {
  // Varianti per l'animazione degli elementi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Sistema Avanzato di Blob in Background */}
      <BlobContainer />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom flex flex-col items-center text-center z-10"
      >
        {/* Subtitle / Badge */}
        <motion.span
          variants={itemVariants}
          className="text-primary text-[10px] tracking-[0.4em] font-bold uppercase mb-6"
        >
          Creative Developer & Digital Architect
        </motion.span>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight max-w-5xl mb-8"
        >
          Ciao, sono Tommaso, creo <br />
          <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
            esperienze digitali
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-sm md:text-base max-w-xl leading-relaxed mb-12"
        >
          Progetto e sviluppo interfacce ad alte prestazioni con un'estetica ricercata. 
          Specializzato in React, Next.js e animazioni fluide per brand che vogliono distinguersi.
        </motion.p>

        {/* Actions */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 py-7 text-xs tracking-widest uppercase font-display bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            <a href="#progetti">I Miei Lavori</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-10 py-7 text-xs tracking-widest uppercase font-display border-white/10 hover:bg-white/5 transition-all duration-300"
          >
            <a href="#contatti">Contattami</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase font-medium">
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

"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallasse differenziato per profondità (senza useSpring, affidato a Lenis)
  const yImage = useTransform(scrollYProgress, [0, 1], [150, -150])
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100])
  const rotateImage = useTransform(scrollYProgress, [0, 1], [5, -5])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1])

  return (
    <section
      id="chi-sono"
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-40 md:py-60"
    >
      {/* Elemento decorativo di sfondo */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.03]) }}
        className="pointer-events-none absolute top-1/2 left-1/2 -z-20 -translate-x-1/2 -translate-y-1/2 font-display text-[25vw] font-bold whitespace-nowrap text-primary select-none"
      >
        ABOUT ME
      </motion.div>

      <div className="container grid grid-cols-1 items-center gap-16 md:gap-24 lg:grid-cols-12">
        {/* Immagine con Parallasse 3D Soft */}
        <motion.div
          style={{ y: yImage, opacity, rotate: rotateImage, scale }}
          className="group perspective-1000 relative mx-auto aspect-[4/5] w-full max-w-lg lg:col-span-5 lg:mx-0"
        >
          {/* Frames decorativi */}
          <div className="absolute -inset-6 -z-10 rounded-3xl border border-primary/10 transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute -inset-12 -z-20 rounded-3xl border border-secondary/5 transition-transform duration-1000 group-hover:scale-110" />

          <div className="relative h-full w-full overflow-hidden rounded-3xl bg-card shadow-2xl transition-transform duration-500 group-hover:translate-z-10">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

            <Image
              src="/aboutme.webp"
              alt="Tommaso Macco"
              fill
              className="-scale-x-100 object-cover grayscale transition-all duration-700 group-hover:-scale-x-110 group-hover:scale-y-110 group-hover:grayscale-0"
              priority
            />

            <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-10 mix-blend-overlay" />
          </div>

          {/* Badge fluttuante */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -right-6 -bottom-6 z-10 hidden rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl md:block"
          >
            <div className="font-display text-4xl font-bold tracking-tighter text-foreground">
              FULL-STACK
            </div>
          </motion.div>
        </motion.div>

        {/* Contenuto Testuale */}
        <motion.div
          style={{ y: yText, opacity }}
          className="flex flex-col gap-12 lg:col-span-6 lg:col-start-7"
        >
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              className="h-1.5 rounded-full bg-primary"
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-xs font-bold tracking-[0.5em] text-primary uppercase">
                Tommaso Macco · Web Developer
              </h2>
              <h3 className="font-display text-5xl leading-[1.1] font-bold tracking-tight md:text-8xl">
                Innovazione a Savona, <br />
                <span className="text-muted-foreground">visione globale.</span>
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-10 font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>
              Sono uno sviluppatore web freelance basato a Savona, con la
              flessibilità di seguire progetti in tutta la Liguria e nel resto
              d'Italia. Non mi piacciono le soluzioni predefinite: preferisco
              costruire siti web e applicazioni su misura, curando ogni riga di
              codice per garantire velocità, sicurezza e facilità d'uso.
            </p>
            <p>
              Dalla realizzazione di e-commerce complessi con Next.js
              all'ottimizzazione SEO strategica, il mio approccio è concreto e
              orientato alla risoluzione dei problemi. Il mio obiettivo è
              aiutare aziende e professionisti a navigare il digitale con
              strumenti moderni, solidi e pensati per durare nel tempo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16 border-t border-white/5 pt-12">
            <div className="flex flex-col gap-3">
              <div className="font-display text-4xl font-bold text-foreground">
                5+
              </div>
              <div className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
                Anni di Esperienza
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-display text-4xl font-bold text-foreground">
                20+
              </div>
              <div className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
                Progetti
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe

"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Spring per movimenti più fluidi
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Parallasse differenziato per profondità
  const yImage = useTransform(smoothProgress, [0, 1], [150, -150])
  const yText = useTransform(smoothProgress, [0, 1], [100, -100])
  const rotateImage = useTransform(smoothProgress, [0, 1], [5, -5])
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(smoothProgress, [0, 0.3], [0.95, 1])

  return (
    <section
      id="chi-sono"
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-32"
    >
      {/* Elemento decorativo di sfondo */}
      <motion.div
        style={{ opacity: useTransform(smoothProgress, [0, 0.5], [0, 0.05]) }}
        className="pointer-events-none absolute top-1/2 left-1/2 -z-20 -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] font-bold whitespace-nowrap text-primary select-none"
      >
        ABOUT ME
      </motion.div>

      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        {/* Immagine con Parallasse 3D Soft */}
        <motion.div
          style={{ y: yImage, opacity, rotate: rotateImage, scale }}
          className="group perspective-1000 relative mx-auto aspect-[4/5] w-full max-w-md lg:mx-0"
        >
          {/* Frames decorativi */}
          <div className="absolute -inset-4 -z-10 rounded-2xl border border-primary/20 transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute -inset-8 -z-20 rounded-2xl border border-secondary/10 transition-transform duration-1000 group-hover:scale-110" />

          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-card shadow-2xl transition-transform duration-500 group-hover:translate-z-10">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-background">
              <span className="rotate-[-15deg] font-display text-8xl font-bold tracking-tighter text-primary/10 uppercase select-none">
                Macco
              </span>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-10 mix-blend-overlay" />
          </div>

          {/* Badge fluttuante */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -right-8 -bottom-8 z-10 hidden rounded-2xl bg-primary p-8 font-display font-bold text-primary-foreground shadow-2xl md:block"
          >
            <div className="mb-1 text-[10px] tracking-[0.2em] uppercase opacity-80">
              Esperienza
            </div>
            <div className="text-4xl tracking-tighter">5+ ANNI</div>
          </motion.div>
        </motion.div>

        {/* Contenuto Testuale */}
        <motion.div
          style={{ y: yText, opacity }}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              className="h-1 rounded-full bg-primary"
            />
            <h2 className="text-xs font-bold tracking-[0.5em] text-primary uppercase">
              Tommaso Macco
            </h2>
            <h3 className="font-display text-5xl leading-[1.1] font-bold tracking-tight md:text-7xl">
              Design che parla, <br />
              <span className="text-muted-foreground">codice che respira.</span>
            </h3>
          </div>

          <div className="flex max-w-xl flex-col gap-8 font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>
              Trasformo visioni complesse in interfacce digitali intuitive e
              coinvolgenti. La mia filosofia si basa sull'equilibrio perfetto
              tra estetica minimalista e ingegneria software di alto livello.
            </p>
            <p>
              Ogni progetto è un'opportunità per spingere i confini del
              possibile sul web, utilizzando le ultime tecnologie per creare
              performance che lasciano il segno.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 border-t border-white/5 pt-10">
            <div className="flex flex-col gap-2">
              <div className="font-display text-3xl font-bold text-foreground">
                30+
              </div>
              <div className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">
                PROGETTI
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-display text-3xl font-bold text-foreground">
                100%
              </div>
              <div className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">
                QUALITÀ
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe

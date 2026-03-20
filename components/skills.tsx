"use client"

import React, { useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Code2,
  Layers,
  Cpu,
  Database,
  Terminal,
  Globe,
  Zap,
  Box,
  BrainCircuit,
  Sparkles,
  Search,
  Bot,
} from "lucide-react"

const frontendSkills = [
  {
    name: "Next.js 15",
    level: "Core",
    icon: Globe,
    description: "App Router, SSR, ISR",
  },
  {
    name: "TypeScript",
    level: "Expert",
    icon: Code2,
    description: "Type-safe development",
  },
  {
    name: "Tailwind CSS",
    level: "Styling",
    icon: Layers,
    description: "Modern UI Architecture",
  },
  {
    name: "Three.js",
    level: "3D",
    icon: Box,
    description: "Immersive Experiences",
  },
  {
    name: "Framer Motion",
    level: "Motion",
    icon: Zap,
    description: "Luxury Animations",
  },
]

const backendSkills = [
  {
    name: "Node.js",
    level: "Runtime",
    icon: Terminal,
    description: "Scalable Server Logic",
  },
  {
    name: "PostgreSQL",
    level: "Database",
    icon: Database,
    description: "Relational Data Architect",
  },
  {
    name: "Supabase",
    level: "BaaS",
    icon: Cpu,
    description: "Realtime DB & Auth",
  },
  {
    name: "PHP & Laravel",
    level: "Framework",
    icon: Code2,
    description: "Robust Backend Solutions",
  },
  {
    name: "Rest / GraphQL",
    level: "API",
    icon: Globe,
    description: "Modern Communication",
  },
]

const aiSkills = [
  {
    name: "Gemini CLI",
    level: "Expert",
    icon: Bot,
    description: "Advanced AI Assistant for Dev",
  },
  {
    name: "Stitch",
    level: "Design AI",
    icon: Sparkles,
    description: "AI-Powered UI/UX Design",
  },
  {
    name: "AI Coding",
    level: "Workflow",
    icon: Code2,
    description: "Prompt Engineering for Logic",
  },
  {
    name: "RAG Systems",
    level: "Learning",
    icon: Search,
    description: "Retrieval-Augmented Generation",
    wip: true,
  },
]

// Varianti ottimizzate per lo staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Stagger veloce e leggero
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const SkillCard = ({
  skill,
  color,
}: {
  skill: any
  color: "primary" | "secondary" | "accent"
}) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative will-change-transform"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-card p-6 transition-colors duration-300 group-hover:border-white/10">
        {/* Glow effect ottimizzato (solo opacità, no filtri dinamici pesanti) */}
        <div
          className={cn(
            "absolute -inset-px -z-10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-10",
            color === "primary"
              ? "bg-primary"
              : color === "secondary"
                ? "bg-secondary"
                : "bg-white"
          )}
        />

        <div className="flex items-start gap-5">
          <div
            className={cn(
              "rounded-xl border border-white/5 bg-background p-3 transition-colors duration-300",
              color === "primary"
                ? "group-hover:text-primary"
                : color === "secondary"
                  ? "group-hover:text-secondary"
                  : "group-hover:text-white"
            )}
          >
            <skill.icon
              className={cn("size-6", skill.wip && "animate-pulse")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h4 className="font-display text-lg font-bold text-foreground">
                {skill.name}
              </h4>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[8px] font-bold tracking-[0.2em] uppercase",
                  skill.wip
                    ? "animate-pulse bg-primary/20 text-primary"
                    : "bg-white/5 text-muted-foreground"
                )}
              >
                {skill.level}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {skill.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="abilita" className="relative overflow-hidden py-32 md:py-48">
      {/* Background Decorative Text staticizzato (meno lag rispetto allo scroll progress) */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 font-display text-[25vw] font-bold whitespace-nowrap text-white/[0.01] will-change-transform select-none">
        EXPERTISE
      </div>

      <div className="relative z-10 container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 flex max-w-2xl flex-col gap-6"
        >
          <div className="h-1.5 w-24 rounded-full bg-primary" />
          <h2 className="text-xs font-bold tracking-[0.5em] text-primary uppercase">
            Technical Stack
          </h2>
          <h3 className="font-display text-5xl leading-tight font-bold tracking-tight md:text-7xl">
            Strumenti per <br />
            <span className="text-muted-foreground">il futuro digitale.</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-32">
          {/* Frontend Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-12"
          >
            <div className="flex items-center gap-6">
              <h4 className="font-display text-2xl font-bold tracking-tight text-primary">
                FRONTEND
              </h4>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {frontendSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} color="primary" />
              ))}
            </div>
          </motion.div>

          {/* Backend Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-12"
          >
            <div className="flex items-center gap-6">
              <h4 className="font-display text-2xl font-bold tracking-tight text-secondary">
                BACKEND
              </h4>
              <div className="h-px flex-1 bg-gradient-to-r from-secondary/30 to-transparent" />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {backendSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} color="secondary" />
              ))}
            </div>
          </motion.div>
        </div>

        {/* AI Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-32 flex flex-col gap-12"
        >
          <div className="flex items-center gap-6">
            <h4 className="font-display text-2xl font-bold tracking-tight text-foreground">
              ARTIFICIAL INTELLIGENCE
            </h4>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aiSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} color="accent" />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/4 left-[-10%] -z-20 h-[40%] w-[40%] rounded-full bg-primary/5 blur-[150px]" />
      <div className="absolute right-[-10%] bottom-1/4 -z-20 h-[40%] w-[40%] rounded-full bg-secondary/5 blur-[150px]" />
    </section>
  )
}

export default Skills

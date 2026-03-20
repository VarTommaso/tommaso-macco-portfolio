"use client"

import React, { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Header = () => {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Rilevamento dello scroll per lo stato dell'header
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Observer per rilevare la sezione attiva
  useEffect(() => {
    const sections = ["progetti", "abilita", "esperienza", "contatti"]
    const observers = sections.map((id) => {
      const element = document.getElementById(id)
      if (!element) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        { threshold: 0.5 }
      )

      observer.observe(element)
      return observer
    })

    return () => {
      observers.forEach((obs) => obs?.disconnect())
    }
  }, [])

  const navLinks = [
    { name: "PROGETTI", href: "#progetti" },
    { name: "ABILITÀ", href: "#abilita" },
    { name: "ESPERIENZA", href: "#esperienza" },
  ]

  // Varianti per l'animazione di entrata "Luxury"
  const containerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      {/* Background Layer con Shadow standard e Backdrop Blur */}
      <div
        className={cn(
          "absolute inset-0 -z-10 transition-all duration-500",
          isScrolled
            ? "border-b border-border bg-background/80 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      />

      <div className="container flex items-center justify-between">
        {/* Logo Luxury: T (White) M (Cyan) */}
        <motion.a
          variants={itemVariants}
          href="/"
          className="group relative flex cursor-pointer items-center"
        >
          <span className="font-display text-3xl font-bold tracking-tighter text-foreground">
            T
          </span>
          <span className="relative font-display text-3xl font-bold tracking-tighter text-primary">
            M
            <span className="absolute -inset-2 rounded-full bg-primary/10 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
          </span>
        </motion.a>

        {/* Navigation - Minimal & Spaced */}
        <nav className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <motion.a
                key={link.name}
                variants={itemVariants}
                href={link.href}
                className={cn(
                  "relative text-xs font-medium tracking-widest transition-colors duration-300",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
                {/* Underline animata quando attivo o su hover */}
                <motion.span
                  className="absolute right-0 -bottom-2 left-0 h-px origin-left bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </motion.a>
            )
          })}
        </nav>

        {/* Action Button - Semplificato usando varianti standard */}
        <motion.div variants={itemVariants}>
          <Button
            asChild
            variant="default"
            size="lg"
            className="px-6 font-display text-xs tracking-widest uppercase"
          >
            <a href="#contatti">LAVORIAMO INSIEME</a>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header

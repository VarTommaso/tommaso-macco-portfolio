"use client"

import React, { useState, useEffect } from "react"
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const Header = () => {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Rilevamento dello scroll per lo stato dell'header
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolled) {
      setTimeout(() => setIsScrolled(true), 2000)
    }
  })

  // Blocca lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

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
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  // Varianti per il menu Mobile
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
        when: "afterChildren",
      },
    },
    opened: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const mobileLinkVariants = {
    closed: { x: 50, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  }

  return (
    <>
      <motion.header
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          isScrolled ? "py-4" : "py-6 md:py-8"
        )}
      >
        {/* Background Layer */}
        <div
          className={cn(
            "absolute inset-0 -z-10 transition-all duration-500",
            isScrolled || isMobileMenuOpen
              ? "border-b border-border bg-white/2 shadow-sm backdrop-blur-md"
              : "border-b border-transparent bg-transparent"
          )}
        />

        <div className="container flex items-center justify-between">
          {/* Logo */}
          <motion.a
            variants={itemVariants}
            href="/"
            className="group relative z-50 flex cursor-pointer items-center"
          >
            <span className="font-display text-2xl font-bold tracking-tighter text-foreground md:text-3xl">
              T
            </span>
            <span className="relative font-display text-2xl font-bold tracking-tighter text-primary md:text-3xl">
              M
              <span className="absolute -inset-2 rounded-full bg-primary/10 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            </span>
          </motion.a>

          {/* Desktop Navigation */}
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

          {/* Desktop Action Button / Mobile Trigger */}
          <div className="flex items-center gap-4">
            <motion.div variants={itemVariants} className="hidden md:block">
              <Button
                asChild
                variant="default"
                size="lg"
                className="rounded-full px-8 font-display text-xs tracking-widest uppercase"
              >
                <a href="#contatti">LAVORIAMO INSIEME</a>
              </Button>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button
              variants={itemVariants}
              className="z-50 p-2 text-foreground md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="size-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="size-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 z-40 flex flex-col justify-center bg-background px-8 md:hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

            <nav className="flex flex-col gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <motion.a
                    key={link.name}
                    variants={mobileLinkVariants}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "font-display text-4xl font-bold tracking-tighter transition-colors",
                      isActive ? "text-primary" : "text-foreground/60"
                    )}
                  >
                    {link.name}
                  </motion.a>
                )
              })}

              <motion.div variants={mobileLinkVariants} className="pt-8">
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="w-full rounded-full py-8 font-display text-sm tracking-widest uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <a href="#contatti">LAVORIAMO INSIEME</a>
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Footer Info */}
            <motion.div
              variants={mobileLinkVariants}
              className="absolute right-8 bottom-12 left-8 flex items-end justify-between border-t border-border pt-8"
            >
              <div className="text-[10px] tracking-widest text-muted-foreground uppercase">
                Tommaso Macco <br /> Portfolio © 2026
              </div>
              <div className="flex gap-4">
                {/* Placeholder per social se necessario */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header

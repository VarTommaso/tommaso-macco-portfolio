"use client"

import React, { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

interface BlobProps {
  className?: string
  color?: "primary" | "secondary"
  delay?: number
  size?: "sm" | "md" | "lg" | "xl"
}

const Blob = ({
  className,
  color = "primary",
  delay = 0,
  size = "md",
}: BlobProps) => {
  const sizeClasses = {
    sm: "w-48 h-48 blur-2xl",
    md: "w-72 h-72 blur-3xl",
    lg: "w-96 h-96 blur-[100px]",
    xl: "w-[500px] h-[500px] blur-[140px]",
  }

  const colorClasses = {
    primary: "bg-primary/20",
    secondary: "bg-secondary/15",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.4, 0.6, 0.4],
        scale: [1, 1.1, 1],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 10 + Math.random() * 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      className={cn(
        "pointer-events-none absolute z-10 rounded-full",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    />
  )
}

export const BlobContainer = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring per un movimento fluido che segue il mouse
  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calcoliamo lo spostamento rispetto al centro
      const { clientX, clientY } = e
      const moveX = (clientX - window.innerWidth / 2) / 25
      const moveY = (clientY - window.innerHeight / 2) / 25
      mouseX.set(moveX)
      mouseY.set(moveY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {/* Overlay di grana/noise per un look premium */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.03] mix-blend-overlay" />

      <motion.div style={{ x, y }} className="relative h-full w-full">
        {/* Blob Cyan (Primary) - Top Left */}
        <Blob
          color="primary"
          size="xl"
          className="top-[-10%] left-[-5%]"
          delay={0}
        />
        <Blob
          color="secondary"
          size="xl"
          className="top-[-20%] left-[30%]"
          delay={0}
        />

        {/* Blob Purple (Secondary) - Bottom Right */}
        <Blob
          color="secondary"
          size="xl"
          className="right-[-10%] bottom-[10%]"
          delay={2}
        />

        {/* Blob centrale soft per profondità */}
        <Blob
          color="primary"
          size="lg"
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
          delay={1}
        />

        {/* Piccoli accenti sparsi */}
        <Blob
          color="secondary"
          size="sm"
          className="top-[20%] right-[15%]"
          delay={4}
        />
      </motion.div>
    </div>
  )
}

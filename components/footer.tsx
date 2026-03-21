"use client"

import React from "react"
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/tommasomacco",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/tommasomacco",
      icon: Linkedin,
    },
  ]

  const navLinks = [
    { name: "Progetti", href: "#progetti" },
    { name: "Esperienza", href: "#esperienza" },
    { name: "Chi Sono", href: "#chi-sono" },
    { name: "Contatti", href: "#contatti" },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-background pt-20 pb-10">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-8 md:col-span-5">
            <div className="flex flex-col gap-6">
              <a
                href="/"
                className="group relative flex w-fit cursor-pointer items-center"
              >
                <span className="font-display text-3xl font-bold tracking-tighter text-foreground md:text-4xl">
                  T
                </span>
                <span className="relative font-display text-3xl font-bold tracking-tighter text-primary md:text-4xl">
                  M
                  <span className="absolute -inset-4 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                </span>
              </a>
              <div className="flex flex-col gap-2">
                <h2 className="font-display text-2xl font-bold tracking-tighter text-foreground">
                  Tommaso Macco
                </h2>
                <p className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">
                  Web Developer Freelance
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Realizzo ecosistemi digitali ad alte prestazioni con sede a
              Savona, Liguria. Trasformo visioni in realtà attraverso il codice.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 md:col-span-3">
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-foreground uppercase">
              Navigazione
            </h4>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                    <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-6 md:col-span-4">
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-foreground uppercase">
              Social & Network
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-4 transition-all hover:border-primary/20 hover:bg-primary/5"
                >
                  <social.icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase transition-colors group-hover:text-foreground">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 md:flex-row">
          <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
            © {currentYear} Tommaso Macco · Tutti i diritti riservati.
          </p>
          <div className="flex gap-8">
            <a
              href="https://www.iubenda.com/privacy-policy/94187301"
              className="iubenda-black iubenda-noiframe iubenda-embed text-[10px] font-bold tracking-widest text-muted-foreground uppercase transition-colors hover:text-primary"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/94187301/cookie-policy"
              className="iubenda-black iubenda-noiframe iubenda-embed text-[10px] font-bold tracking-widest text-muted-foreground uppercase transition-colors hover:text-primary"
              title="Cookie Policy"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-[-10%] left-[-10%] -z-10 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute right-[-5%] bottom-[-5%] -z-10 h-64 w-64 rounded-full bg-secondary/5 blur-[100px]" />
    </footer>
  )
}

export default Footer

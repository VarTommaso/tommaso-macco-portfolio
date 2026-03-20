import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center container-custom">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Tommaso Macco</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Digital Architect & Creative Developer. Costruisco esperienze digitali d'avanguardia con un focus sul design e le performance.
          </p>
        </div>
      </section>

      {/* Placeholder Sections to allow scrolling */}
      <section id="progetti" className="min-h-screen flex items-center justify-center bg-card/50">
        <h2 className="text-4xl font-display uppercase tracking-widest">Progetti</h2>
      </section>

      <section id="abilita" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-display uppercase tracking-widest">Abilità</h2>
      </section>

      <section id="esperienza" className="min-h-screen flex items-center justify-center bg-card/50">
        <h2 className="text-4xl font-display uppercase tracking-widest">Esperienza</h2>
      </section>

      <section id="contatti" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-display uppercase tracking-widest text-primary">Contatti</h2>
      </section>
    </div>
  )
}

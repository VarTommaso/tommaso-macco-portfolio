import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import Projects from "@/components/projects"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutMe />
      <Projects />

      {/* Placeholder Sections to allow scrolling and testing header active state */}
      <section id="abilita" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-display uppercase tracking-widest">Abilità</h2>
      </section>

      <section id="esperienza" className="min-h-screen flex items-center justify-center bg-card/30">
        <h2 className="text-4xl font-display uppercase tracking-widest">Esperienza</h2>
      </section>

      <section id="contatti" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-display uppercase tracking-widest text-primary">Contatti</h2>
      </section>
    </div>
  )
}

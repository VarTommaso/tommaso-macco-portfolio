import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import Projects from "@/components/projects"
import Skills from "@/components/skills"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />

      {/* Placeholder Sections to allow scrolling and testing header active state */}
      <section
        id="esperienza"
        className="flex min-h-screen items-center justify-center bg-card/30"
      >
        <h2 className="font-display text-4xl tracking-widest uppercase">
          Esperienza
        </h2>
      </section>

      <section
        id="contatti"
        className="flex min-h-screen items-center justify-center"
      >
        <h2 className="font-display text-4xl tracking-widest text-primary uppercase">
          Contatti
        </h2>
      </section>
    </div>
  )
}

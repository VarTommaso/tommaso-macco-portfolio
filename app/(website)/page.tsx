import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}

import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"

export default function LandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tommaso Macco - Sviluppatore Web Savona",
    "image": "https://tommasomacco.it/work-1.png",
    "@id": "https://tommasomacco.it",
    "url": "https://tommasomacco.it",
    "telephone": "", // Aggiungi se vuoi
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Savona",
      "postalCode": "17100",
      "addressRegion": "Liguria",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.307,
      "longitude": 8.481
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://github.com/tommasomacco",
      "https://www.linkedin.com/in/tommaso-macco/"
    ],
    "description": "Sviluppatore web freelance a Savona. Realizzazione siti web, e-commerce e soluzioni IA personalizzate."
  }

  return (
    <div className="flex flex-col">
      {/* Schema.org JSON-LD per Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}

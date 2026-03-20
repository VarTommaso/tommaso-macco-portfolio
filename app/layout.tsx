import { Manrope, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { Metadata } from "next"

const fontBody = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
})

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: {
    default: "Tommaso Macco | Sviluppatore Web Savona & Liguria",
    template: "%s | Tommaso Macco"
  },
  description: "Sviluppatore web freelance a Savona specializzato in Next.js, E-commerce e IA. Realizzazione siti web ad alte prestazioni in tutta la Liguria.",
  keywords: ["Sviluppatore Web Savona", "Realizzazione Siti Web Savona", "Freelance Developer Liguria", "Next.js Developer Italia", "Tommaso Macco", "Web Design Savona"],
  authors: [{ name: "Tommaso Macco" }],
  creator: "Tommaso Macco",
  metadataBase: new URL("https://tommasomacco.it"), // Cambia con il tuo dominio finale
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://tommasomacco.it",
    title: "Tommaso Macco | Digital Architect & Sviluppatore Web Savona",
    description: "Creazione di esperienze digitali d'avanguardia. Sviluppatore web a Savona specializzato in performance e design luxury.",
    siteName: "Tommaso Macco Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="it"
      suppressHydrationWarning
      className={cn(
        "min-h-screen bg-background antialiased",
        fontBody.variable,
        fontDisplay.variable
      )}
    >
      <body className="font-body">
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}

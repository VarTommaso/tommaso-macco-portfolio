import { Manrope, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"

const fontBody = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
})

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
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

// import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"
import Header from "@/components/header"
import SmoothScroll from "@/components/smoothScroll"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SmoothScroll>
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default layout

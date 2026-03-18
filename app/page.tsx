import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Portfolio } from "@/components/portfolio"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import WebHead from "./_partials/Head"

export default function Home() {
  return (
    <main className="min-h-screen">
      <WebHead />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

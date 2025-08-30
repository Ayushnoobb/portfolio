import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  )
}

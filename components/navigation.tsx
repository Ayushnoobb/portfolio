"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ["home", "about", "skills", "portfolio", "contact"]
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const links = ["Home", "About", "Skills", "Experience", "Portfolio", "Contact"]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-[0_4px_24px_rgba(0,0,0,0.4)] border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="font-bold text-xl gradient-text tracking-tight"
          >
            AK<span className="text-primary">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((item) => {
              const id = item.toLowerCase()
              const isActive = active === id
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full shadow-[0_0_8px_oklch(0.78_0.18_142)]" />
                  )}
                </button>
              )
            })}
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-4 px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg shadow-[0_0_20px_oklch(0.78_0.18_142/0.35)] hover:shadow-[0_0_28px_oklch(0.78_0.18_142/0.55)] hover:scale-105 transition-all duration-200"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden glass border border-border/40 rounded-2xl mb-4 overflow-hidden">
            <div className="px-4 py-3 space-y-1">
              {links.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

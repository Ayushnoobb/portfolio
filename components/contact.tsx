"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    try {
      const response = await fetch("https://formspree.io/f/xblaolny", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const contactItems = [
    { icon: Mail, label: "Email", value: "ayushwilltry@gmail.com", href: "mailto:ayushwilltry@gmail.com" },
    { icon: Phone, label: "Phone", value: "+977 9745719068", href: "tel:9745719068" },
    { icon: MapPin, label: "Location", value: "Kathmandu, Nepal", href: null },
  ]

  return (
    <section id="contact" className="py-28 relative overflow-hidden grid-bg">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Let's Talk</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 section-heading">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: contact info */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8 border border-border/40">
              <h3 className="text-2xl font-bold mb-2">Let's <span className="gradient-text">Connect</span></h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to exciting opportunities and collaborations. Whether you have a question, an idea,
                or just want to say hello — my inbox is always open.
              </p>

              <div className="space-y-5">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 group">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <Link href={href} className="text-sm font-medium hover:text-primary transition-colors">
                          {value}
                        </Link>
                      ) : (
                        <p className="text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-6 border border-border/40">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/Ayushnoobb", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/ayush-khatri-67074a253/", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:ayushwilltry@gmail.com", icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    aria-label={label}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 text-sm"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="glass rounded-2xl border border-border/40 p-8">
            <h3 className="text-xl font-bold mb-1">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-6">I'll get back to you within 24 hours.</p>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-xl flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-sm text-primary">Message sent! I'll be in touch soon.</p>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                <p className="text-sm text-destructive-foreground">Something went wrong. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting}
                    className="bg-muted/50 border-border/50 focus:border-primary/50 rounded-xl" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting}
                    className="bg-muted/50 border-border/50 focus:border-primary/50 rounded-xl" />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="subject" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Subject</Label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required disabled={isSubmitting}
                  className="bg-muted/50 border-border/50 focus:border-primary/50 rounded-xl" />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Message</Label>
                <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required disabled={isSubmitting}
                  className="bg-muted/50 border-border/50 focus:border-primary/50 rounded-xl resize-none" />
              </div>

              <Button
                type="submit"
                className="w-full rounded-xl py-3 font-semibold shadow-[0_0_20px_oklch(0.78_0.18_142/0.3)] hover:shadow-[0_0_30px_oklch(0.78_0.18_142/0.5)] transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />Sending...</>
                ) : (
                  <><Send className="h-4 w-4 mr-2" />Send Message</>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client";
import Link from "next/link";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
];

const socials = [
    { icon: Github, href: "https://github.com/Ayushnoobb", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ayush-khatri-67074a253/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ayushwilltry@gmail.com", label: "Email" },
];

export function Footer() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="relative border-t border-border/30 overflow-hidden">
            {/* Top glow line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            {/* Ambient orb */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] rounded-full pointer-events-none"
                style={{ background: "oklch(0.80 0.19 142 / 0.04)", filter: "blur(60px)" }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main footer content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="text-2xl font-extrabold gradient-text tracking-tight">
                            AK<span className="text-primary">.</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            Senior Software Engineer specializing in scalable full-stack systems,
                            fintech, healthcare platforms, and AI-powered applications.
                        </p>
                        {/* Social icons */}
                        <div className="flex gap-3 pt-1">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    aria-label={label}
                                    className="p-2.5 glass border border-border/40 rounded-xl text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_14px_oklch(0.80_0.19_142/0.25)] transition-all duration-300"
                                >
                                    <Icon className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-5">Navigation</p>
                        <ul className="space-y-3">
                            {navLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="h-px w-0 bg-primary group-hover:w-4 transition-all duration-300 rounded-full" />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Status + CV */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-5">Status</p>
                            <div className="glass rounded-2xl border border-border/40 p-5 space-y-3">
                                <div className="flex items-center gap-2.5">
                                    <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                                    </span>
                                    <span className="text-sm font-medium">Available for opportunities</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Open to senior roles, freelance projects, and exciting collaborations.
                                </p>
                                <a
                                    href="/ayush_khatri_fullstack_developer_cv.pdf"
                                    download="Ayush_Khatri_CV.pdf"
                                    className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline underline-offset-4 transition-all"
                                >
                                    ↓ Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-border/20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                        © {new Date().getFullYear()} Ayush Khatri · Built with
                        <Heart className="h-3 w-3 text-primary fill-primary" />
                        using Next.js
                    </p>
                    <button
                        onClick={scrollTop}
                        className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                        aria-label="Back to top"
                    >
                        Back to top
                        <span className="p-1.5 glass border border-border/40 rounded-lg group-hover:border-primary/40 group-hover:shadow-[0_0_10px_oklch(0.80_0.19_142/0.2)] transition-all">
                            <ArrowUp className="h-3 w-3" />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}

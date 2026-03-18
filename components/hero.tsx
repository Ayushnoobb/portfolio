"use client";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
    const scrollToPortfolio = () => {
        document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg"
        >
            {/* Ambient orbs */}
            <div
                className="orb absolute top-1/4 -left-32 w-96 h-96 opacity-20"
                style={{ background: "oklch(0.78 0.18 142)", animationDuration: "12s" }}
            />
            <div
                className="orb absolute bottom-1/4 -right-32 w-80 h-80 opacity-15"
                style={{ background: "oklch(0.65 0.15 160)", animationDuration: "9s", animationDelay: "3s" }}
            />
            <div
                className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5"
                style={{ background: "oklch(0.78 0.18 142)", animationDuration: "15s", animationDelay: "1s" }}
            />

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-background/60" />

            <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    {/* Status pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-sm text-primary font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                        </span>
                        Available for new opportunities
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-balance">
                            Hi, I'm{" "}
                            <span className="gradient-text">Ayush Khatri</span>
                        </h1>
                        <h2 className="text-lg sm:text-2xl text-muted-foreground font-light tracking-wide">
                            Software Engineer · Full-Stack Developer · AI Enthusiast
                        </h2>
                    </div>

                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                        I craft digital experiences through clean code and innovative solutions.
                        Passionate about building scalable applications and <span className="text-primary font-medium">AI-powered products</span> that make a real difference.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                        <button
                            onClick={scrollToPortfolio}
                            className="group flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl shadow-[0_0_28px_oklch(0.78_0.18_142/0.4)] hover:shadow-[0_0_40px_oklch(0.78_0.18_142/0.6)] hover:scale-105 transition-all duration-300"
                        >
                            <Sparkles className="h-4 w-4" />
                            View My Work
                            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                        </button>

                        <a
                            href="/ayush_khatri_fullstack_developer_cv.pdf"
                            download="Ayush_Khatri_CV.pdf"
                            className="group flex items-center gap-2 px-8 py-3.5 glass border border-primary/30 text-primary font-semibold rounded-xl hover:border-primary/60 hover:shadow-[0_0_20px_oklch(0.78_0.18_142/0.25)] hover:scale-105 transition-all duration-300"
                        >
                            <Download className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                            Download CV
                        </a>

                        <button
                            onClick={scrollToContact}
                            className="px-8 py-3.5 glass border border-border/40 text-muted-foreground font-semibold rounded-xl hover:border-primary/30 hover:text-foreground transition-all duration-300"
                        >
                            Get in Touch
                        </button>
                    </div>

                    {/* Social links */}
                    <div className="flex gap-4 justify-center">
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
                                className="p-3 glass border border-border/40 rounded-xl text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_16px_oklch(0.78_0.18_142/0.3)] transition-all duration-300"
                            >
                                <Icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground animate-bounce">
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <ArrowDown className="h-4 w-4" />
            </div>
        </section>
    );
}

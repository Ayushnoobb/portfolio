"use client";

import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        title: "Calculate Alpha",
        subtitle: "Stock Intrinsic Value Platform",
        description: "Financial SaaS for real-time stock valuation with multi-tenant architecture, Stripe subscriptions, and WebSocket-powered live updates.",
        images: ["/calalpha-1.png", "/calalpha-2.png", "/calalpha-3.png", "/calalpha-4.png"],
        technologies: ["Next.js", "Node.js", "Puppeteer", "WebSockets", "Stripe"],
        category: "FinTech",
    },
    {
        title: "HIPAA Campaign Platform",
        subtitle: "Secure Medical Visual Sharing",
        description: "HIPAA-compliant platform for certified artists to share DRM-protected medical visuals with patients, with zero-downtime APIs.",
        images: ["/sketchnosis-1.png", "/sketchnosis-2.png", "/sketchnosis-3.png", "/sketchnosis-4.png"],
        technologies: ["Next.js", "Node.js", "DRM", "PostgreSQL", "Tailwind CSS"],
        category: "Healthcare",
    },
    {
        title: "Patient Symptom + AI Chatbot",
        subtitle: "Healthcare Visualization System",
        description: "Large-scale healthcare visualization with D3.js interactive charts and an AI-powered chatbot providing instant health advice.",
        images: ["/gensight-1.png", "/gensight-2.png", "/gensight-3.png", "/gensight-4.png"],
        technologies: ["D3.js", "Node.js", "Next.js", "Express", "MongoDB"],
        category: "AI / Healthcare",
    },
    {
        title: "Secure Proctoring App",
        subtitle: "AI-Powered Exam Integrity",
        description: "AI proctoring system with live monitoring, body/eye tracking, and tab-switch detection to ensure exam integrity.",
        images: ["/proctoring-1.png", "/proctoring-2.png", "/proctoring-3.png", "/proctoring-4.png"],
        technologies: ["Next.js", "Laravel", "WebRTC", "MySQL", "Tailwind CSS"],
        category: "EdTech / AI",
    },
    {
        title: "Enterprise Suite",
        subtitle: "LMS · HRMS · CRM · Training",
        description: "Suite of enterprise-grade apps with centralized auth, analytics dashboards, and automated workflows across HR, training, and CRM.",
        images: ["/management-1.png", "/management-2.png", "/management-3.png", "/management-4.png"],
        technologies: ["Laravel", "Next.js", "MySQL", "Redis", "Bootstrap"],
        category: "Enterprise",
    },
    {
        title: "FDAPP Voting Platform",
        subtitle: "Real-Time Online Voting",
        description: "Scalable Stripe-integrated voting platform for beauty contests and public polls with real-time leaderboards and fraud prevention.",
        images: ["/fdapp-1.png", "/fdapp-2.png"],
        technologies: ["Next.js", "Node.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
        category: "Platform",
    },
];

export function Portfolio() {
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

    const nextImage = (i: number, total: number) =>
        setCurrentImageIndex((prev) => ({ ...prev, [i]: ((prev[i] || 0) + 1) % total }));

    const prevImage = (i: number, total: number) =>
        setCurrentImageIndex((prev) => ({ ...prev, [i]: ((prev[i] || 0) - 1 + total) % total }));

    return (
        <section id="portfolio" className="py-28 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-20">
                    <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">My Work</p>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 section-heading">Featured Projects</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A showcase of real-world work across different domains and tech stacks
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {projects.map((project, index) => {
                        const imgIdx = currentImageIndex[index] || 0;
                        return (
                            <div
                                key={index}
                                className="glass rounded-2xl border border-border/40 hover:border-primary/30 overflow-hidden glow-hover group transition-all duration-300 flex flex-col"
                            >
                                {/* Image carousel */}
                                <div className="aspect-video overflow-hidden relative">
                                    <img
                                        src={project.images[imgIdx] || "/placeholder.svg"}
                                        alt={`${project.title} screenshot ${imgIdx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Category pill */}
                                    <div className="absolute top-3 left-3">
                                        <span className="px-2.5 py-1 text-xs font-semibold glass border border-primary/20 text-primary rounded-full">
                                            {project.category}
                                        </span>
                                    </div>

                                    {project.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={() => prevImage(index, project.images.length)}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 glass border border-white/10 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                                                aria-label="Previous"
                                            >
                                                <ChevronLeft className="h-3.5 w-3.5" />
                                            </button>
                                            <button
                                                onClick={() => nextImage(index, project.images.length)}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 glass border border-white/10 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                                                aria-label="Next"
                                            >
                                                <ChevronRight className="h-3.5 w-3.5" />
                                            </button>
                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                                {project.images.map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`h-1 rounded-full transition-all duration-300 ${i === imgIdx ? "w-4 bg-primary" : "w-1.5 bg-white/40"}`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="mb-4">
                                        <h3 className="font-bold text-lg leading-tight">{project.title}</h3>
                                        <p className="text-primary text-xs font-medium mt-0.5">{project.subtitle}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className="text-xs border-primary/20 text-primary/70 hover:border-primary/50 transition-colors"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
}

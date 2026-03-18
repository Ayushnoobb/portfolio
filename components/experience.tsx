"use client";

import { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
    {
        role: "Senior Software Engineer",
        company: "Fusion Exis",
        location: "Kathmandu",
        period: "Nov 2024 – Present",
        duration: "4 months",
        type: "Full-time",
        current: true,
        summary:
            "Joined Fusion Exis as Senior Software Engineer, leading architecture decisions and full-stack development of modern web products. Driving technical excellence and mentoring junior engineers.",
        highlights: [
            "Leading full-stack development as Senior Software Engineer",
            "Architecting scalable solutions and setting engineering best practices",
            "Mentoring junior developers and conducting code reviews",
            "Driving performance optimization and system reliability improvements",
        ],
        tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
        color: "from-emerald-500/20 to-primary/5",
        dot: "bg-primary shadow-[0_0_14px_oklch(0.78_0.18_142)]",
        iconColor: "text-primary",
    },
    {
        role: "Software Engineer",
        company: "Assabet Technologies",
        location: "Kathmandu",
        period: "Jan 2024 – Dec 2024",
        duration: "1 year",
        type: "Full-time",
        current: false,
        summary:
            "Leading full-stack development of fintech and healthcare SaaS platforms. Built and scaled multi-tenant architectures serving concurrent financial analysis tools and HIPAA-compliant patient data systems.",
        highlights: [
            "Built Calculate Alpha stock intrinsic value calculator, increasing analysis speed by 20%",
            "Automated 100% of subscription payments via Stripe, eliminating manual processing",
            "Designed multi-tenant SaaS architecture supporting 50+ concurrent financial tools",
            "Developed HIPAA-compliant Sketchnosis platform increasing patient-campaign engagement by 40%",
            "Built AI chatbot (Gensight) delivering real-time health guidance for 100+ FAQs, cutting staff response time by 60%",
            "Deployed diagnostics system used by 50+ healthcare professionals for real-time education",
        ],
        tech: ["Next.js", "Node.js", "TypeScript", "Stripe", "D3.js", "AWS", "HIPAA", "AI Chatbot"],
        color: "from-emerald-500/20 to-primary/5",
        dot: "bg-primary shadow-[0_0_14px_oklch(0.78_0.18_142)]",
        iconColor: "text-primary",
    },
    {
        role: "Software Engineer",
        company: "Pace Infosys",
        location: "Kathmandu",
        period: "Jul 2024 – Feb 2025",
        duration: "8 months",
        type: "Full-time",
        current: false,
        summary:
            "Developed enterprise-grade systems including a secure AI-powered proctoring app, Training Management System, and HRMS — focused on security, automation, and real-time analytics.",
        highlights: [
            "Built secure proctoring system with body/eye tracking and tab-switch detection, reducing cheating by 90%+",
            "Implemented Laravel backend with full audit logging for secure exam monitoring",
            "Built Training Management System increasing training participation by 40%",
            "Automated HR workflows reducing manual work by 50% and errors by 60%",
            "Created real-time dashboards for workforce insights and ROI tracking",
        ],
        tech: ["Next.js", "Laravel", "WebRTC", "MySQL", "Tailwind CSS", "PHP"],
        color: "from-blue-500/15 to-transparent",
        dot: "bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.6)]",
        iconColor: "text-blue-400",
    },
    {
        role: "Software Engineer",
        company: "Arcode Studeo",
        location: "Kathmandu",
        period: "Oct 2023 – Jul 2024",
        duration: "9 months",
        type: "Full-time",
        current: false,
        summary:
            "Delivered a suite of enterprise software products — CRM, LMS, and a real-time voting platform — improving operational efficiency and data quality across client businesses.",
        highlights: [
            "Centralized customer data in CRM, reducing duplicate entries by 70% and improving lead conversion by 25%",
            "Automated content delivery in LMS, increasing course completion rates by 35%",
            "Built real-time voting platform with Stripe handling 1000+ votes/day with 0% downtime",
            "Integrated dashboards reducing manual tracking by 50%",
        ],
        tech: ["Laravel", "Next.js", "MySQL", "Redis", "Bootstrap", "Stripe"],
        color: "from-purple-500/15 to-transparent",
        dot: "bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.6)]",
        iconColor: "text-purple-400",
    },
    {
        role: "Frontend Developer",
        company: "Parijat Infotech",
        location: "Kathmandu",
        period: "May 2022 – Oct 2023",
        duration: "1.5 years",
        type: "Full-time",
        current: false,
        summary:
            "Started professional career building responsive, high-performance frontend experiences. Specialized in WordPress, React, and performance optimization for SME clients.",
        highlights: [
            "Built custom WordPress plugins reducing site configuration time by 30–40%",
            "Optimized frontend performance decreasing load times by 20–35%",
            "Implemented responsive designs improving user engagement and retention",
            "Delivered 10+ client projects with consistent pixel-perfect quality",
        ],
        tech: ["React", "WordPress", "JavaScript", "HTML/CSS", "PHP", "Figma"],
        color: "from-orange-500/15 to-transparent",
        dot: "bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.6)]",
        iconColor: "text-orange-400",
    },
];

export function Experience() {
    const [expanded, setExpanded] = useState<number | null>(0);

    return (
        <section id="experience" className="py-28 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-20">
                    <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Career Path</p>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 section-heading">Experience</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        4+ years of building impactful products in fintech, healthcare, and enterprise software
                    </p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-16">
                    {[
                        { value: "4+", label: "Years Experience" },
                        { value: "20+", label: "Projects Shipped" },
                        { value: "5", label: "Companies" },
                    ].map(({ value, label }) => (
                        <div
                            key={label}
                            className="glass rounded-2xl border border-border/40 p-6 text-center hover:border-primary/30 transition-colors"
                        >
                            <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">{value}</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
                        </div>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

                    <div className="space-y-5">
                        {experiences.map((exp, index) => {
                            const isOpen = expanded === index;
                            return (
                                <div key={index} className="relative pl-16">
                                    {/* Timeline dot */}
                                    <div
                                        className={`absolute left-[18px] top-7 w-4 h-4 rounded-full border-2 border-background ${exp.dot} transition-all duration-300 ${isOpen ? "scale-125" : ""}`}
                                    />

                                    {/* Card */}
                                    <div
                                        className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${
                                            isOpen
                                                ? "border-primary/30 shadow-[0_0_30px_oklch(0.78_0.18_142/0.1)]"
                                                : "border-border/40 hover:border-primary/20"
                                        }`}
                                    >
                                        {/* Header */}
                                        <button
                                            onClick={() => setExpanded(isOpen ? null : index)}
                                            className="w-full text-left p-6 flex items-start gap-4 group"
                                        >
                                            <div
                                                className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} border border-border/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                                            >
                                                <Briefcase className={`h-5 w-5 ${exp.iconColor}`} />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-start justify-between gap-2">
                                                    <div>
                                                        <h3 className="font-bold text-lg leading-tight">{exp.role}</h3>
                                                        <p className={`font-semibold text-sm mt-0.5 ${exp.iconColor}`}>
                                                            {exp.company}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 flex-shrink-0">
                                                        {exp.current && (
                                                            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                                                                <span className="relative flex h-1.5 w-1.5">
                                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                                                                </span>
                                                                Current
                                                            </span>
                                                        )}
                                                        {isOpen ? (
                                                            <ChevronUp className="h-5 w-5 text-muted-foreground" />
                                                        ) : (
                                                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="h-3 w-3" />
                                                        {exp.period} · {exp.duration}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="h-3 w-3" />
                                                        {exp.location}
                                                    </span>
                                                    <span className="px-2 py-0.5 rounded-full bg-muted border border-border/50">
                                                        {exp.type}
                                                    </span>
                                                </div>
                                            </div>
                                        </button>

                                        {/* Expandable content */}
                                        <div
                                            className={`transition-all duration-500 ease-in-out ${
                                                isOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
                                            } overflow-hidden`}
                                        >
                                            <div className="px-6 pb-6 space-y-5 border-t border-border/30 pt-5">
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {exp.summary}
                                                </p>

                                                <div>
                                                    <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                                                        Key Highlights
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {exp.highlights.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                                                <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${exp.dot.split(" ")[0]}`} />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                                                        Tech Stack
                                                    </h4>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {exp.tech.map((t) => (
                                                            <Badge
                                                                key={t}
                                                                variant="outline"
                                                                className="text-xs border-primary/20 text-primary/80 hover:border-primary/50 transition-colors"
                                                            >
                                                                {t}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
}

"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function Portfolio() {
    const projects = [
        {
            title: "Calculate Alpha – Stock Intrinsic Value Platform",
            description:
                "A financial SaaS platform for real-time stock intrinsic value calculation, supporting multi-tenant architecture and subscription-based access. Optimized for high performance and seamless financial data analysis.",
            images: [
                "/calalpha-1.png",
                "/calalpha-2.png",
                "/calalpha-3.png",
                "/calalpha-4.png",
            ],
            technologies: [
                "Next.js",
                "Node.js",
                "Puppeteer",
                "WebSockets",
                "Stripe",
            ],
            technicalDetails:
                "Implements server-side rendering for performance, Puppeteer for financial data scraping, and WebSockets for live valuation updates. Multi-tenant SaaS design with role-based access control and secure Stripe integration for recurring payments.",
            functionalFeatures:
                "Real-time stock valuation, user subscriptions, multi-tenant management, financial data visualization, admin panel for tool configuration, and secure payment handling.",
        },
        {
            title: "HIPAA-Compliant Healthcare Campaign Platform",
            description:
                "A secure medical campaign platform designed for certified artists to share DRM-protected medical visuals with patients, ensuring HIPAA compliance and zero downtime backend APIs.",
            images: [
                "/sketchnosis-1.png",
                "/sketchnosis-2.png",
                "/sketchnosis-3.png",
                "/sketchnosis-4.png",
            ],
            technologies: [
                "Next.js",
                "Node.js",
                "DRM",
                "PostgreSQL",
                "Tailwind CSS",
            ],
            technicalDetails:
                "Implements HIPAA-compliant data handling, DRM-protected image sharing, secure REST APIs, and backend encryption for patient confidentiality.",
            functionalFeatures:
                "Campaign creation, patient assignment, secure medical image sharing, artist-patient collaboration, and admin controls with compliance monitoring.",
        },
        {
            title: "Patient Symptom Visualization + AI Chatbot",
            description:
                "A large-scale healthcare visualization system for analyzing patient symptoms with interactive charts and an AI-powered chatbot providing instant health advice.",
            images: [
                "/gensight-1.png",
                "/gensight-2.png",
                "/gensight-3.png",
                "/gensight-4.png",
            ],
            technologies: ["D3.js", "Node.js", "Next.js", "Express", "MongoDB"],
            technicalDetails:
                "Built with D3.js for interactive visualization, FAQ-based chatbot powered by curated datasets, and REST APIs for healthcare data aggregation.",
            functionalFeatures:
                "Patient symptom dashboards, chatbot for instant FAQ-based health advice, internal diagnostic system for staff, and historical health data insights.",
        },
        {
            title: "Secure Proctoring Web App",
            description:
                "An AI-powered proctoring system with live monitoring, body/eye tracking, and tab-switch detection to ensure exam integrity and prevent cheating.",
            images: [
                "/proctoring-1.png",
                "/proctoring-2.png",
                "/proctoring-3.png",
                "/proctoring-4.png",
            ],
            technologies: [
                "Next.js",
                "Laravel",
                "WebRTC",
                "MySQL",
                "Tailwind CSS",
            ],
            technicalDetails:
                "Implements AI-based body and eye tracking, tab-switch detection, and live feed monitoring. Backend built in Laravel for secure communication and audit logging.",
            functionalFeatures:
                "Exam session monitoring, cheating detection, live video feed, audit logs, admin review panel, and candidate behavior analytics.",
        },
        {
            title: "Enterprise Systems – LMS, HRMS, CRM, Training Management",
            description:
                "A suite of enterprise-grade applications including learning management, HR management, CRM, and training systems. Designed for efficiency, data centralization, and scalability.",
            images: [
                "/management-1.png",
                "/management-2.png",
                "/management-3.png",
                "/management-4.png",
            ],
            technologies: ["Laravel", "Next.js", "MySQL", "Redis", "Bootstrap"],
            technicalDetails:
                "Built with Laravel backend and Next.js frontend for scalability. Features include centralized authentication, analytics dashboards, and automated workflows across HR, training, and client management.",
            functionalFeatures:
                "Course assignment/tracking (LMS), employee management (HRMS), client tracking & lead conversion (CRM), training scheduling, analytics dashboards, and reporting tools.",
        },
        {
            title: "FDAPP Online Voting Platform",
            description:
                "A scalable, Stripe-integrated voting platform supporting beauty contests and public polls, with real-time vote counting and live results dashboards.",
            images: [
                "/fdapp-1.png",
                "/fdapp-2.png",
            ],
            technologies: [
                "Next.js",
                "Node.js",
                "Stripe",
                "PostgreSQL",
                "Tailwind CSS",
            ],
            technicalDetails:
                "Implements secure Stripe payments, real-time vote updates, and optimized backend for high traffic loads. Built with SSR for performance and reliability.",
            functionalFeatures:
                "User registration, Stripe-based paid voting, real-time vote counting, live leaderboard, admin campaign management, and fraud-prevention mechanisms.",
        },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState<{
        [key: number]: number;
    }>({});

    const nextImage = (projectIndex: number, totalImages: number) => {
        setCurrentImageIndex((prev) => ({
            ...prev,
            [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages,
        }));
    };

    const prevImage = (projectIndex: number, totalImages: number) => {
        setCurrentImageIndex((prev) => ({
            ...prev,
            [projectIndex]:
                ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages,
        }));
    };

    return (
        <section id="portfolio" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                        A showcase of my recent work and technical expertise
                        across different domains
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={
                                        project.images[
                                            currentImageIndex[index] || 0
                                        ] || "/placeholder.svg"
                                    }
                                    alt={`${project.title} - Image ${
                                        (currentImageIndex[index] || 0) + 1
                                    }`}
                                    className="w-full h-full object-cover transition-all duration-300"
                                />
                                {project.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() =>
                                                prevImage(
                                                    index,
                                                    project.images.length
                                                )
                                            }
                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                            aria-label="Previous image"
                                        >
                                            <ChevronLeft className="h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() =>
                                                nextImage(
                                                    index,
                                                    project.images.length
                                                )
                                            }
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                            aria-label="Next image"
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                        </button>
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                            {project.images.map(
                                                (_, imgIndex) => (
                                                    <div
                                                        key={imgIndex}
                                                        className={`w-2 h-2 rounded-full transition-colors ${
                                                            imgIndex ===
                                                            (currentImageIndex[
                                                                index
                                                            ] || 0)
                                                                ? "bg-white"
                                                                : "bg-white/50"
                                                        }`}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="text-sm leading-relaxed">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2 text-primary">
                                            Technical Implementation
                                        </h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {project.technicalDetails}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2 text-primary">
                                            Key Features
                                        </h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {project.functionalFeatures}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

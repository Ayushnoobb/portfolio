"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export function Hero() {
    // useEffect(() => {
    //   window.addEventListener(() => {

    //   })
    // },[])

    const scrollToPortfolio = () => {
        document
            .getElementById("portfolio")
            ?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-muted opacity-50" />
            <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern-tech-background.png')] bg-cover bg-center opacity-10" />

            <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">
                            Hi, I'm{" "}
                            <span className="text-primary">Ayush Khatri</span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
                            Software Engineer & Full-Stack Developer
                        </h2>
                    </div>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                        I craft digital experiences through clean code and
                        innovative solutions. Passionate about building scalable
                        applications that make a difference.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            onClick={scrollToPortfolio}
                            className="text-lg px-8 py-3"
                        >
                            View My Work
                            <ArrowDown className="ml-2 h-5 w-5" />
                        </Button>

                        <div className="flex gap-4">
                            <Link href={"https://github.com/Ayushnoobb"} target="_blank">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-12 w-12 bg-transparent"
                                >
                                    <Github className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href={"https://www.linkedin.com/in/ayush-khatri-67074a253/"} target="_blank">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-12 w-12 bg-transparent"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href={"mailto:ayushwilltry@gmail.com"} target="_blank">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-12 w-12 bg-transparent"
                                >
                                    <Mail className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </div>
        </section>
    );
}

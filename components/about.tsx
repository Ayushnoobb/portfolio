import { Badge } from "@/components/ui/badge";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";

const traits = [
    { icon: Code2, label: "Clean Code", desc: "Readable, maintainable, and well-structured" },
    { icon: Zap, label: "Performance", desc: "Optimized for speed and scalability" },
    { icon: Lightbulb, label: "Problem Solver", desc: "Creative solutions to complex challenges" },
    { icon: Users, label: "Team Player", desc: "Collaborative and an effective communicator" },
];

const softSkills = ["Agile / Scrum", "Code Review", "Mentoring", "System Design", "Team Collaboration"];

export function About() {
    return (
        <section id="about" className="py-28 relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-20">
                    <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Who I Am</p>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 section-heading">About Me</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Passionate software engineer with{" "}
                        <span className="text-primary font-semibold">4+ years</span> of experience building modern web applications
                    in fintech &amp; healthcare</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: story + traits */}
                    <div className="space-y-8">
                        <div className="glass rounded-2xl p-8 glow-hover border border-border/40">
                            <h3 className="text-2xl font-bold mb-5 gradient-text">My Journey</h3>
                            <p className="text-muted-foreground leading-relaxed mb-5">
                                I started my journey in software development with a Computer Science background and have
                                since worked with startups and established companies, building everything from responsive
                                web applications to scalable backend systems and AI-integrated products.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                I'm passionate about clean code, exceptional user experiences, and staying on the cutting
                                edge — from LLM-powered tooling to cloud-native architectures. When I'm not coding, you'll
                                find me exploring open source or experimenting with new AI frameworks.
                            </p>
                        </div>

                        {/* Trait grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {traits.map(({ icon: Icon, label, desc }) => (
                                <div
                                    key={label}
                                    className="glass rounded-xl p-5 border border-border/40 hover:border-primary/30 transition-all duration-300 group"
                                >
                                    <div className="p-2 rounded-lg bg-primary/10 w-fit mb-3 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <p className="font-semibold text-sm mb-1">{label}</p>
                                    <p className="text-xs text-muted-foreground">{desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Soft skills */}
                        <div className="flex flex-wrap gap-2">
                            {softSkills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="outline"
                                    className="px-3 py-1 border-primary/20 text-primary/80 hover:border-primary/50 transition-colors text-xs"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Right: profile image */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Glow halo */}
                        <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-3xl scale-90 opacity-60" />

                        <div className="relative w-full max-w-md">
                            <div className="aspect-square rounded-2xl overflow-hidden ring-1 ring-primary/30 shadow-[0_0_60px_oklch(0.78_0.18_142/0.2)] p-1 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent">
                                <img
                                    src="/ayush-khatri.png"
                                    alt="Ayush Khatri - Software Engineer"
                                    className="w-full h-full object-cover rounded-xl object-top brightness-105 contrast-105"
                                />
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -bottom-5 -right-5 glass border border-primary/30 p-4 rounded-2xl shadow-[0_0_24px_oklch(0.78_0.18_142/0.3)]">
                                <div className="text-3xl font-extrabold text-primary leading-none">4+</div>
                                <div className="text-xs text-muted-foreground mt-0.5">Years Exp.</div>
                            </div>

                            <div className="absolute -top-5 -left-5 glass border border-primary/20 px-4 py-3 rounded-2xl shadow-lg">
                                <div className="text-2xl font-extrabold text-primary leading-none">20+</div>
                                <div className="text-xs text-muted-foreground mt-0.5">Projects</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
}

import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Globe, Smartphone } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        icon: Globe,
        color: "text-blue-400",
        glow: "rgba(96,165,250,0.15)",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5", "CSS3"],
    },
    {
        title: "Backend",
        icon: Code,
        color: "text-emerald-400",
        glow: "rgba(52,211,153,0.15)",
        skills: ["Node.js", "Python", "Express.js", "FastAPI", "REST APIs", "GraphQL", "Microservices"],
    },
    {
        title: "Database & Cloud",
        icon: Database,
        color: "text-purple-400",
        glow: "rgba(192,132,252,0.15)",
        skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
        title: "AI & ML",
        icon: Brain,
        color: "text-pink-400",
        glow: "rgba(244,114,182,0.15)",
        skills: ["OpenAI API", "LangChain", "TensorFlow", "PyTorch", "Hugging Face", "Prompt Engineering", "RAG", "Vector DBs"],
    },
    {
        title: "Mobile & Tools",
        icon: Smartphone,
        color: "text-orange-400",
        glow: "rgba(251,146,60,0.15)",
        skills: ["React Native", "Git", "Jest", "Cypress", "Figma", "Linux"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-28 relative overflow-hidden grid-bg">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-20">
                    <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">What I Know</p>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 section-heading">Technical Skills</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern, scalable, and AI-driven applications
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl p-6 border border-border/40 hover:border-primary/30 glow-hover group transition-all duration-300"
                            style={{ boxShadow: `0 0 0 0 ${category.glow}` }}
                        >
                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                                style={{ background: category.glow }}
                            >
                                <category.icon className={`h-6 w-6 ${category.color}`} />
                            </div>

                            <h3 className="font-bold text-base mb-4">{category.title}</h3>

                            <div className="flex flex-wrap gap-1.5">
                                {category.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="outline"
                                        className="text-xs px-2 py-0.5 border-border/50 text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
}

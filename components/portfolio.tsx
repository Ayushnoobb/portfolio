import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Data visualization platform for weather patterns with interactive charts and predictive analytics.",
      image: "/weather-analytics-dashboard-charts.png",
      technologies: ["Vue.js", "Python", "FastAPI", "Chart.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media API",
      description:
        "RESTful API for social media platform with authentication, posts, comments, and real-time notifications.",
      image: "/api-documentation-interface.png",
      technologies: ["Node.js", "Express", "JWT", "Redis", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
      image: "/mobile-fitness-app-interface.png",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Content Generator",
      description: "Web application that uses AI to generate content for blogs, social media, and marketing materials.",
      image: "/ai-content-generator-interface.png",
      technologies: ["Next.js", "OpenAI API", "Prisma", "Supabase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work and technical expertise across different domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5", "CSS3"],
      color: "text-blue-600",
    },
    {
      title: "Backend Development",
      icon: Code,
      skills: ["Node.js", "Python", "Express.js", "FastAPI", "REST APIs", "GraphQL", "Microservices"],
      color: "text-green-600",
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes", "CI/CD"],
      color: "text-purple-600",
    },
    {
      title: "Mobile & Tools",
      icon: Smartphone,
      skills: ["React Native", "Git", "Jest", "Cypress", "Figma", "Linux", "Agile"],
      color: "text-orange-600",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-3 rounded-full bg-muted ${category.color}`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate software engineer with 3+ years of experience building modern web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I started my journey in software development with a Computer Science degree and have since worked with
                  startups and established companies, building everything from responsive web applications to scalable
                  backend systems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about clean code, user experience, and staying up-to-date with the latest technologies.
                  When I'm not coding, you'll find me contributing to open source projects or exploring new frameworks.
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-2">
              {["Problem Solving", "Team Collaboration", "Agile Development", "Code Review", "Mentoring"].map(
                (skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ),
              )}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
              <img
                src="/ayush-khatri.jpg"
                alt="Ayush Khatri - Software Engineer"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">3+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

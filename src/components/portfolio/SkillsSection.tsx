import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Server, Smartphone, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "HTML/CSS", "SQL"]
    },
    {
      icon: Globe,
      title: "Frontend Development",
      skills: ["React", "Next.js", "Tailwind CSS", "Material-UI", "Vite", "Responsive Design", "Redux"]
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express", "FastAPI", "Spring Boot", "Nest.js", "REST APIs", "JWT"]
    },
    {
      icon: Database,
      title: "Databases & Cloud",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Room DB", "AWS", "Docker"]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: ["GitHub", "VS Code", "Postman", "Figma", "Android Studio", "Jira"]
    },
    {
      icon: Smartphone,
      title: "Other Skills",
      skills: ["Problem Solving", "Team Collaboration", "UI/UX Design", "Agile", "AI Integration", "API Integration", "State Management"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit built through hands-on experience and continuous learning.
              I'm always exploring new technologies to stay current with industry trends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <category.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-card-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-secondary/50 hover:bg-secondary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience Level Indicators */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Experience Level</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  3+
                </div>
                <h4 className="font-semibold text-foreground mb-2">Years Coding</h4>
                <p className="text-muted-foreground text-sm">Continuous learning and building</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  10+
                </div>
                <h4 className="font-semibold text-foreground mb-2">Projects Built</h4>
                <p className="text-muted-foreground text-sm">Personal and collaborative projects</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  10+
                </div>
                <h4 className="font-semibold text-foreground mb-2">Technologies</h4>
                <p className="text-muted-foreground text-sm">Frameworks and languages mastered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
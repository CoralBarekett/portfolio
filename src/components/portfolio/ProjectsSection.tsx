import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration, and progress tracking.",
      technologies: ["TypeScript", "React", "Firebase", "Material-UI"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Data visualization dashboard for weather patterns using REST APIs and interactive charts.",
      technologies: ["Python", "FastAPI", "React", "Chart.js", "PostgreSQL"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Social Media API",
      description: "RESTful API for social media platform with authentication, posts, and user management.",
      technologies: ["Java", "Spring Boot", "MySQL", "JWT", "Docker"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here are some of the projects I've built that showcase my skills in full-stack 
              development, problem-solving, and creating impactful solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-card ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-border bg-background/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
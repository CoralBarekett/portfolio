import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Target, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Building end-to-end solutions with modern technologies and best practices."
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solver",
      description: "Turning complex challenges into elegant, user-friendly solutions."
    },
    {
      icon: Target,
      title: "Detail Oriented",
      description: "Focused on writing clean, maintainable code and delivering quality results."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with strong communication and leadership skills."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate Computer Science student and software developer who loves creating
              digital experiences that make a difference. My journey combines technical expertise
              with creative problem-solving to build innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My interest in technology started from curiosity — wanting to understand how things work and how to make them better.
                  Over time, that curiosity grew into a more serious path. I'm currently studying Computer Science and building my way through it,
                  project by project.
                </p>
                <p>
                  Through hands-on experience in full-stack development, I've worked on projects that combine practical tech with real-world value —
                  like an AI-based stock prediction platform, a pet adoption system, and more. I enjoy taking an idea and turning it into something that works and helps.
                </p>
                <p>
                  I keep learning as I go, whether it’s a new framework, backend challenge, or just improving what I already know.
                  I like building things that are clear, useful, and make sense — both in code and in purpose.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-fade-in">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300 border-border bg-card">
                  <CardContent className="p-0">
                    <highlight.icon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-2 text-card-foreground">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
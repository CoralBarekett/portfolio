import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm a
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Software Developer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions and building exceptional digital experiences
              with modern technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                variant="secondary"
                className="group transition-all duration-300 hover:scale-105 shadow-elegant"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default HeroSection;
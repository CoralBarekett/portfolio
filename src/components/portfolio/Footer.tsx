import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4">Coral Bareket - Software Developer</h3>
              <p className="text-background/80 leading-relaxed">
                Building the future, one line of code at a time. 
                Let's create something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-background transition-colors">Projects</a></li>
                <li><a href="#skills" className="hover:text-background transition-colors">Skills</a></li>
                <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-3 mb-4">
                <Button variant="outline" size="icon" className="bg-background/10 border-background/20 hover:bg-background/20 text-background">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-background/10 border-background/20 hover:bg-background/20 text-background">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-background/10 border-background/20 hover:bg-background/20 text-background">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-background/80 text-sm">
                Always open to interesting conversations and opportunities.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-background/80 text-sm">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span>using React & Tailwind CSS</span>
            </div>
            <div>
                © 2025 Coral Bareket. All rights reserved. Proudly crafted with ❤️
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
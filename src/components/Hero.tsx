import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpeg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card opacity-50" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold">
              Abhinandan <span className="gradient-text">Pise</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              Senior Data Scientist
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Masters from College of Engineering, Pune
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              8+ years of expertise in leveraging Python, Machine Learning, Deep Learning, and GenAI 
              to drive business insights and develop innovative AI-powered solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              >
                Get In Touch
              </Button>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="icon"
                  asChild
                  className="border-border hover:border-primary hover:bg-primary/10"
                >
                  <a href="https://github.com/abhipise2704" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="icon"
                  asChild
                  className="border-border hover:border-primary hover:bg-primary/10"
                >
                  <a href="https://www.linkedin.com/in/abhinandan-pise/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30" />
              <img 
                src={profileImage}
                alt="Abhinandan Pise"
                className="relative rounded-2xl w-full shadow-2xl border-2 border-border"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;

import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 81800 18303",
      href: "tel:+918180018303"
    },
    {
      icon: Mail,
      label: "Email",
      value: "abhipise5321@gmail.com",
      href: "mailto:abhipise5321@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abhinandan-pise/"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/abhipise2704"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Let's discuss how we can work together on innovative AI solutions
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border card-glow text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{item.label}</h3>
                {item.href ? (
                  <a 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                )}
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-card border-border text-center">
          <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
          <p className="text-muted-foreground mb-6">
            Follow my work and connect on social platforms
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-border hover:border-primary hover:bg-primary/10"
                >
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </a>
                </Button>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;

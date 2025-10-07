import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 card-glow bg-card border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Current Role</h3>
            </div>
            <p className="text-muted-foreground">
              Senior Data Scientist at <span className="text-foreground">Aays Advisory Private Limited</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">October 2024 - Present</p>
          </Card>

          <Card className="p-6 card-glow bg-card border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Education</h3>
            </div>
            <p className="text-muted-foreground">
              Masters from <span className="text-foreground">College of Engineering, Pune</span>
            </p>
          </Card>

          <Card className="p-6 card-glow bg-card border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Location</h3>
            </div>
            <p className="text-muted-foreground">
              <span className="text-foreground">Pune, India</span>
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-card border-border">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A result-oriented professional with <span className="text-primary font-semibold">8+ years of industrial experience</span> and 
            <span className="text-primary font-semibold"> 7+ years of expertise</span> in leveraging Python, Data Analytics, Machine Learning, 
            and Deep Learning to drive business insights and enhance decision-making processes. Proven track record of delivering impactful 
            data-driven, NLP solutions and extensive experience in developing innovative products using agile methodologies.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Specialized knowledge in <span className="text-accent font-semibold">Large Language Models (LLM)</span> and 
            <span className="text-accent font-semibold"> Generative AI (GenAI)</span>, contributing to robust product development. 
            Experienced in leading a team, ensuring effective collaboration and project success.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;

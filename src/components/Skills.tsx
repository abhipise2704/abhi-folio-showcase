import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "AI & Machine Learning",
      skills: ["Python", "Machine Learning", "Deep Learning", "NLP", "LLM", "Generative AI", "RAG"]
    },
    {
      category: "Cloud & Tools",
      skills: ["Azure OpenAI", "Azure Databricks", "Azure AI Search", "Azure Document Intelligence", "LangChain", "Llama-Index"]
    },
    {
      category: "Data & Analytics",
      skills: ["Data Analytics", "Data Processing", "Geospatial Analysis", "SQL", "PySpark"]
    },
    {
      category: "Development",
      skills: ["Agile Methodologies", "Team Leadership", "Product Development", "API Integration"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border card-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, Lightbulb, TrendingUp, Map, AudioLines, Image } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: "GenAI-Powered Competitor Analytics & Insights Tool",
      description: "Designed and deployed an AI-powered competitor intelligence platform analyzing financial reports from 16 global companies using Azure OpenAI GPT-4o/GPT-4.1 with RAG.",
      highlights: [
        "Reduced manual analysis efforts by 90%",
        "Real-time summarization and contextual Q&A",
        "Automated ingestion workflows"
      ],
      tech: ["Azure OpenAI", "RAG", "Azure AI Search", "LangChain", "Python"]
    },
    {
      icon: Database,
      title: "Ingestion-AI Powered Data Ingestion Product",
      description: "Developed optimized NLP-based solution for data ingestion pipeline using Llama-Index and Azure OpenAI for automated extraction and classification of text data.",
      highlights: [
        "Accurate entity identification",
        "Automated text classification",
        "Unstructured data processing"
      ],
      tech: ["Llama-Index", "Azure OpenAI", "NLP", "Python"]
    },
    {
      icon: Lightbulb,
      title: "Knowledge Bridge AI KT Agent",
      description: "Created an AI agent to conduct exit interviews, capture critical project knowledge, and ensure seamless continuity during team transitions.",
      highlights: [
        "Automated knowledge capture",
        "Exit interview processing",
        "Project continuity assurance"
      ],
      tech: ["GenAI", "Azure OpenAI", "LangChain"]
    },
    {
      icon: TrendingUp,
      title: "Underwriting Excellence Project",
      description: "Developed a data-driven solution highlighting natural disaster risks on insurance policies, enabling underwriters to identify potential loss risks of $0.85M.",
      highlights: [
        "Risk assessment automation",
        "Financial impact analysis",
        "Data-driven insights"
      ],
      tech: ["Python", "Azure Databricks", "Machine Learning"]
    },
    {
      icon: Map,
      title: "GeoScope - Geospatial Hazard Analysis",
      description: "Engineered scalable Python solutions in Azure Databricks, harnessing Geospatial data for comprehensive hazard analysis and insights.",
      highlights: [
        "Geospatial data processing",
        "Scalable cloud solutions",
        "Hazard risk mapping"
      ],
      tech: ["Azure Databricks", "Geospatial Analysis", "PySpark"]
    },
    {
      icon: AudioLines,
      title: "Audio Intelligence",
      description: "Developed Speech to Text solution with Deep Learning algorithms for Sentiment Analysis achieving 0.88 accuracy.",
      highlights: [
        "Speech-to-text conversion",
        "Sentiment analysis",
        "88% accuracy rate"
      ],
      tech: ["Deep Learning", "NLP", "Python"]
    },
    {
      icon: Image,
      title: "Image Similarity Search Engine",
      description: "Developed image similarity search engine using GCP Vision API to enhance eCommerce image searches, increasing user engagement and conversion rate by 15%.",
      highlights: [
        "Enhanced image search",
        "15% conversion rate increase",
        "Visual similarity matching"
      ],
      tech: ["GCP Vision API", "Machine Learning", "Python"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border card-glow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <p className="text-sm text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="border-primary/30 text-primary text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

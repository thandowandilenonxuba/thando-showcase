import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Flame, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Code,
      title: "IT Portfolio Website",
      description: "Designed and built a personal portfolio website to showcase qualifications, experience, and certifications.",
      tools: "HTML, CSS, JavaScript, React",
      outcome: "Improved online presence and professional visibility."
    },
    {
      icon: Flame,
      title: "Fire Safety Awareness Campaign",
      description: "Participated in community outreach during seasonal firefighting service to educate residents on fire prevention.",
      tools: "Printed materials, presentations, community engagement",
      outcome: "Enhanced public awareness and reduced fire risks."
    },
    {
      icon: TrendingUp,
      title: "Call Centre Efficiency Tracker (Concept)",
      description: "Proposed a system to monitor call centre performance metrics and customer satisfaction.",
      tools: "Excel, PowerPoint, basic scripting",
      outcome: "Conceptual framework for improving service delivery."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index} 
                  className="border-0 shadow-md hover:shadow-professional transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Tools Used:</p>
                      <p className="text-sm text-muted-foreground">{project.tools}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Outcome:</p>
                      <p className="text-sm text-muted-foreground">{project.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

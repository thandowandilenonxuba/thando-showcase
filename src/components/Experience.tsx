import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    { year: "2024–2025", role: "Customer Service Call Centre Agent", company: "Shoprite Checkers Sixty60" },
    { year: "2024", role: "Seasonal Firefighter", company: "Epping Fire Station" },
    { year: "2023", role: "Call Centre Agent Learnership", company: "Ver-tex Solutions" },
    { year: "2022", role: "Admin Clerk", company: "Godidi S.P.S" },
    { year: "2021–2022", role: "Educator Assistant", company: "Godidi S.P.S" },
    { year: "2021", role: "SGB Teacher", company: "Godidi S.P.S" },
    { year: "2018", role: "Cashier", company: "Nomalinge Store" },
    { year: "2015", role: "Class Representative", company: "Walter Sisulu University" },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent"></div>

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg"></div>

                  {/* Spacer for timeline alignment */}
                  <div className="hidden md:block flex-1"></div>

                  {/* Content Card */}
                  <Card className="flex-1 shadow-md hover:shadow-professional transition-all duration-300 border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                          <Briefcase className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-primary mb-2">{exp.year}</div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

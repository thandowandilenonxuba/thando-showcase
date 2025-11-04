import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { toast } from "sonner";

const CVSection = () => {
  const handleDownload = () => {
    // Placeholder - user will need to add their actual CV file
    toast.info("Please upload your CV PDF to enable downloads");
    // When CV is uploaded, this would link to: /cv/thando-nonxuba-cv.pdf
  };

  return (
    <section id="cv" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Curriculum Vitae
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>

          <Card className="border-0 shadow-professional">
            <CardContent className="p-12 text-center space-y-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
                <FileText className="h-12 w-12 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Download My CV</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Get a comprehensive overview of my qualifications, experience, and certifications in PDF format.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-lg"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV (PDF)
              </Button>

              <p className="text-sm text-muted-foreground">
                Last updated: January 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CVSection;

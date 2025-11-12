import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, X } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CVSection = () => {
  const cvPath = "/cv/thando-nonxuba-cv.pdf";
  const [showIframeViewer, setShowIframeViewer] = useState(false);
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Thando-Nonxuba-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    try {
      const newWindow = window.open(cvPath, '_blank', 'noopener,noreferrer');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        toast.info("Opening CV viewer...");
        setShowIframeViewer(true);
      } else {
        toast.success("Opening CV in new tab");
      }
    } catch (error) {
      console.error("Error opening CV:", error);
      toast.info("Opening CV viewer...");
      setShowIframeViewer(true);
    }
  };

  return (
    <>
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

                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-lg"
                    onClick={handleView}
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    View CV
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2"
                    onClick={handleDownload}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  Last updated: January 2025
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Dialog open={showIframeViewer} onOpenChange={setShowIframeViewer}>
        <DialogContent className="max-w-6xl h-[90vh] p-0">
          <DialogHeader className="px-6 pt-6 pb-4 border-b">
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Curriculum Vitae - Thando Nonxuba
            </DialogTitle>
          </DialogHeader>
          <div className="h-full overflow-hidden">
            <iframe
              src={cvPath}
              className="w-full h-full border-0"
              title="CV Viewer"
              aria-label="PDF viewer showing Thando Nonxuba's curriculum vitae"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CVSection;

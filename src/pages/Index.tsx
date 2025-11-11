import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import CVSection from "@/components/CVSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const animations = [
    "animate-bounce-in",
    "animate-fall-in",
    "animate-slide-bounce-left",
    "animate-slide-bounce-right",
    "animate-elastic-in",
    "animate-bounce-in",
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <section
        id="about"
        ref={(el) => (sectionsRef.current[0] = el)}
        className={`opacity-0 transition-opacity duration-300 ${animations[0]}`}
      >
        <About />
      </section>
      <section
        id="experience"
        ref={(el) => (sectionsRef.current[1] = el)}
        className={`opacity-0 transition-opacity duration-300 ${animations[1]}`}
      >
        <Experience />
      </section>
      <section
        id="projects"
        ref={(el) => (sectionsRef.current[2] = el)}
        className={`opacity-0 transition-opacity duration-300 ${animations[2]}`}
      >
        <Projects />
      </section>
      <section
        id="skills"
        ref={(el) => (sectionsRef.current[3] = el)}
        className={`opacity-0 transition-opacity duration-300 ${animations[3]}`}
      >
        <Skills />
      </section>
      <section
        id="certificates"
        ref={(el) => (sectionsRef.current[4] = el)}
        className={`opacity-0 transition-opacity duration-300 ${animations[4]}`}
      >
        <Certificates />
      </section>
      <section
        id="contact"
        ref={(el) => (sectionsRef.current[5] = el)}
        className={`opacity-0 transition-opacity duration-300 ${animations[5]}`}
      >
        <Contact />
      </section>
      <CVSection />
      <Footer />
      <Chatbot />
    </main>
  );
};

export default Index;

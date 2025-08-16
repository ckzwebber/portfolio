import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function Portfolio() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Carlos Miguel Webber | Backend Developer";
    document.head.querySelector('meta[name="description"]')?.setAttribute("content", 
      "Portfolio de Carlos Miguel Webber Model - Desenvolvedor Backend especializado em Node.js, TypeScript, React e tecnologias modernas."
    );
  }, []);

  return (
    <div className="bg-background dark:bg-dark-bg text-foreground font-sans overflow-x-hidden">
      {/* Floating Background Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="floating-shape w-64 h-64 -top-32 -left-32" style={{ animationDelay: '0s' }}></div>
        <div className="floating-shape w-48 h-48 top-1/4 -right-24" style={{ animationDelay: '2s' }}></div>
        <div className="floating-shape w-32 h-32 bottom-1/4 left-1/4" style={{ animationDelay: '4s' }}></div>
        <div className="floating-shape w-56 h-56 -bottom-28 -right-28" style={{ animationDelay: '6s' }}></div>
      </div>

      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

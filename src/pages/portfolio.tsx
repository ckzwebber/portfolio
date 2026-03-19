import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
import { useAnimationMode } from "@/components/animation-mode-provider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Portfolio() {
  const { mode } = useAnimationMode();

  useScrollReveal();
  useSmoothScroll();

  useEffect(() => {
    document.title = "Carlos Miguel Webber | Backend Developer";
    document.head.querySelector('meta[name="description"]')?.setAttribute("content", "Portfolio de Carlos Miguel Webber Model - Desenvolvedor Backend especializado em Node.js, TypeScript, React e tecnologias modernas.");
  }, []);

  return (
    <div className="bg-background dark:bg-dark-bg text-foreground font-sans overflow-x-hidden relative">
      {mode === "full" && <CustomCursor />}

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="ambient-grid" />
        <div className="ambient-noise" />
        <div className="floating-shape w-80 h-80 -top-40 -left-40" style={{ animationDelay: "0s" }} />
        <div className="floating-shape w-56 h-56 top-[20%] -right-20" style={{ animationDelay: "2.4s" }} />
        <div className="floating-shape w-40 h-40 bottom-[22%] left-[16%]" style={{ animationDelay: "3.2s" }} />
        <div className="floating-shape w-64 h-64 -bottom-36 right-[6%]" style={{ animationDelay: "4.6s" }} />
        <div className="ambient-orb ambient-orb--one" />
        <div className="ambient-orb ambient-orb--two" />
        <div className="ambient-beam" />
        <div className="absolute inset-y-0 left-[14%] w-px bg-white/10" />
        <div className="absolute inset-y-0 right-[8%] w-px bg-white/10" />
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

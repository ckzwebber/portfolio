import { Github, Linkedin, Globe, Code, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { personalInfo } from "@/lib/constants";
import profileImage from "../assets/Perfil.jpg";

export default function HeroSection() {
  const typingText = useTypingAnimation(["Backend Developer", "Full Stack Developer", "Node.js Specialist", "TypeScript Enthusiast", "Problem Solver"]);

  const handleSmoothScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="glass rounded-3xl p-8 md:p-12 reveal">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-blue-400 p-1">
            <img src={profileImage} alt="Carlos Miguel Webber professional headshot" className="w-full h-full rounded-full object-cover" data-testid="profile-image" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="hero-title">
            Olá, eu sou{" "}
            <span className="gradient-text">
              {personalInfo.name.split(" ")[0]} {personalInfo.name.split(" ")[1]}
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-text-light mb-8 min-h-[2rem]" data-testid="typing-animation">
            <span className="typing-cursor">{typingText}</span>
          </div>

          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
            Desenvolvedor Backend especializado em <strong className="text-primary">Node.js</strong>,<strong className="text-primary"> TypeScript</strong> e tecnologias modernas. Estudante de Ciência da Computação na
            UNESC, apaixonado por criar soluções eficientes e escaláveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => handleSmoothScroll("#projects")}
              className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 animate-glow"
              data-testid="view-projects-btn">
              <Code className="mr-2 h-4 w-4" />
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              onClick={() => handleSmoothScroll("#contact")}
              className="inline-flex items-center px-8 py-3 glass-light hover:bg-primary hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              data-testid="contact-btn">
              <Mail className="mr-2 h-4 w-4" />
              Entre em Contato
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-2xl text-text-light hover:text-primary transition-all duration-300 transform hover:scale-110" data-testid="github-link">
              <Github className="h-6 w-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-text-light hover:text-primary transition-all duration-300 transform hover:scale-110"
              data-testid="linkedin-link">
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={personalInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-text-light hover:text-primary transition-all duration-300 transform hover:scale-110"
              data-testid="portfolio-link">
              <Globe className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

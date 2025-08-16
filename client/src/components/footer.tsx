import { Github, Linkedin, Globe } from "lucide-react";
import { personalInfo } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-dark-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CM</span>
            </div>
            <span className="text-xl font-bold" data-testid="footer-name">Carlos Miguel Webber</span>
          </div>
          
          <p className="text-text-light mb-6 max-w-2xl mx-auto" data-testid="footer-description">
            Desenvolvedor Backend apaixonado por criar soluções inovadoras e escaláveis. 
            Sempre em busca de novos desafios e oportunidades de crescimento.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-text-light hover:text-primary transition-all duration-300 transform hover:scale-110"
              data-testid="footer-github"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-text-light hover:text-primary transition-all duration-300 transform hover:scale-110"
              data-testid="footer-linkedin"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href={personalInfo.portfolio} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-text-light hover:text-primary transition-all duration-300 transform hover:scale-110"
              data-testid="footer-portfolio"
            >
              <Globe className="h-6 w-6" />
            </a>
          </div>
          
          <div className="text-text-light text-sm">
            <p data-testid="footer-copyright">&copy; 2025 Carlos Miguel Webber. Todos os direitos reservados.</p>
            <p className="mt-2" data-testid="footer-made-with">Feito com ❤️ e muito ☕ em Criciúma, SC</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

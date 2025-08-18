import { Github, Linkedin, Globe } from "lucide-react";
import { personalInfo } from "@/lib/constants";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-12 px-6 border-t border-dark-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">{t("footer-initials")}</span>
            </div>
            <span className="text-xl font-bold" data-testid="footer-name">
              {t("footer-name")}
            </span>
          </div>

          <p className="text-text-light mb-6 max-w-2xl mx-auto" data-testid="footer-description">
            {t("footer-description")}
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              title={t("footer-github-label")}
              aria-label={t("footer-github-label")}
              className="text-2xl text-text-light hover:text-primary transition-all duration-300 transform hover:scale-110"
              data-testid="footer-github">
              <Github className="h-6 w-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title={t("footer-linkedin-label")}
              aria-label={t("footer-linkedin-label")}
              className="text-2xl text-text-light hover:text-primary transition-all duration-300 transform hover:scale-110"
              data-testid="footer-linkedin">
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={personalInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              title={t("footer-portfolio-label")}
              aria-label={t("footer-portfolio-label")}
              className="text-2xl text-text-light hover:text-primary transition-all duration-300 transform hover:scale-110"
              data-testid="footer-portfolio">
              <Globe className="h-6 w-6" />
            </a>
          </div>

          <div className="text-text-light text-sm">
            <p data-testid="footer-copyright">{t("footer-copyright")}</p>
            <p className="mt-2" data-testid="footer-made-with">
              {t("footer-made-with")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

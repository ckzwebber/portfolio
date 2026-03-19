import { Github, Linkedin, Globe } from "lucide-react";
import { personalInfo } from "@/lib/constants";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-12 md:py-14 px-4 md:px-8 border-t border-dark-border relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 border border-primary bg-primary/20 flex items-center justify-center">
                <span className="text-white font-bold text-sm font-mono">{t("footer-initials")}</span>
              </div>
              <span className="text-2xl font-display uppercase tracking-tight" data-testid="footer-name">
                {t("footer-name")}
              </span>
            </div>

            <p className="text-text-light mb-6 max-w-2xl text-balance" data-testid="footer-description">
              {t("footer-description")}
            </p>

            <div className="text-text-light text-sm space-y-2">
              <p data-testid="footer-copyright">{t("footer-copyright")}</p>
              <p data-testid="footer-made-with">{t("footer-made-with")}</p>
            </div>
          </div>

          <div className="flex md:justify-end space-x-4 md:space-x-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              title={t("footer-github-label")}
              aria-label={t("footer-github-label")}
              data-magnetic="true"
              className="w-11 h-11 border border-border bg-secondary flex items-center justify-center text-text-light hover:text-primary hover:border-primary/70 transition-colors"
              data-testid="footer-github">
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title={t("footer-linkedin-label")}
              aria-label={t("footer-linkedin-label")}
              data-magnetic="true"
              className="w-11 h-11 border border-border bg-secondary flex items-center justify-center text-text-light hover:text-primary hover:border-primary/70 transition-colors"
              data-testid="footer-linkedin">
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              title={t("footer-portfolio-label")}
              aria-label={t("footer-portfolio-label")}
              data-magnetic="true"
              className="w-11 h-11 border border-border bg-secondary flex items-center justify-center text-text-light hover:text-primary hover:border-primary/70 transition-colors"
              data-testid="footer-portfolio">
              <Globe className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { personalInfo, techStack } from "@/lib/constants";
import { Trans, useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="about-title">
            {t("about")} <span className="gradient-text">{t("me")}</span>
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto" data-testid="about-subtitle">
            {t("about-description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary" data-testid="journey-title">
                {t("my-journey")}
              </h3>
              <div className="space-y-4 text-text-light">
                <p data-testid="journey-item-1">
                  <Trans i18nKey="journey-item-1" components={[<strong className="text-foreground" />]} />
                </p>
                <p data-testid="journey-item-2">
                  <Trans i18nKey="journey-item-2" components={[<strong className="text-foreground" />]} />
                </p>
                <p data-testid="journey-item-3">
                  <Trans i18nKey="journey-item-3" components={[<strong className="text-foreground" />]} />
                </p>
                <p data-testid="journey-item-4">
                  <Trans i18nKey="journey-item-4" components={[<strong className="text-foreground" />]} />
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 glass-light rounded-xl" data-testid="stat-repositories">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-text-light">{t("stat-repositories")}</div>
                </div>
                <div className="text-center p-4 glass-light rounded-xl" data-testid="stat-experience">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-text-light">{t("stat-experience")}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-primary" data-testid="tech-stack-title">
                {t("tech-stack-title")}
              </h3>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
                  <h4 className="text-lg font-semibold text-foreground" data-testid="frontend-title">
                    Frontend
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techStack.frontend.map((tech, index) => (
                    <div key={tech.name} className="tech-icon flex items-center space-x-2 p-3 glass-light rounded-lg hover:scale-105 transition-transform duration-200" data-testid={`frontend-tech-${index}`}>
                      <div className={`text-2xl ${tech.color}`} dangerouslySetInnerHTML={{ __html: tech.icon }} />
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <h4 className="text-lg font-semibold text-foreground" data-testid="backend-title">
                    Backend
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techStack.backend.map((tech, index) => (
                    <div key={tech.name} className="tech-icon flex items-center space-x-2 p-3 glass-light rounded-lg hover:scale-105 transition-transform duration-200" data-testid={`backend-tech-${index}`}>
                      <div className={`text-2xl ${tech.color}`} dangerouslySetInnerHTML={{ __html: tech.icon }} />
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <h4 className="text-lg font-semibold text-foreground" data-testid="tools-title">
                    {t("tools")}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techStack.tools.map((tech, index) => (
                    <div key={tech.name} className="tech-icon flex items-center space-x-2 p-3 glass-light rounded-lg hover:scale-105 transition-transform duration-200" data-testid={`tools-tech-${index}`}>
                      <div className={`text-2xl ${tech.color}`} dangerouslySetInnerHTML={{ __html: tech.icon }} />
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

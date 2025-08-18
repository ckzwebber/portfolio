import { experience, education, achievements } from "@/lib/constants";
import { Trans, useTranslation } from "react-i18next";

export default function ExperienceSection() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="experience-title">
            <Trans i18nKey="experience-title" components={[<span className="gradient-text" />]} />
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto" data-testid="experience-subtitle">
            {t("experience-subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="reveal">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-primary" data-testid="timeline-title">
                {t("timeline-title")}
              </h3>

              {experience.map((job, index) => (
                <div key={index} className="timeline-item mb-8" data-testid={`job-${index}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-foreground" data-testid={`job-title-${index}`}>
                      {i18n.language === "en" ? job.positionEn : job.position}
                    </h4>
                    <span className="text-sm text-text-light" data-testid={`job-period-${index}`}>
                      {i18n.language === "en" ? job.periodEn : job.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-2" data-testid={`job-company-${index}`}>
                    {i18n.language === "en" ? job.companyEn : job.company}
                  </p>
                  <ul className="text-text-light space-y-1 text-sm">
                    {i18n.language === "en"
                      ? job.responsibilitiesEn.map((responsibility: any, respIndex: any) => (
                          <li key={respIndex} data-testid={`job-responsibility-${index}-${respIndex}`}>
                            • {responsibility}
                          </li>
                        ))
                      : job.responsibilities.map((responsibility: any, respIndex: any) => (
                          <li key={respIndex} data-testid={`job-responsibility-${index}-${respIndex}`}>
                            • {responsibility}
                          </li>
                        ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass rounded-2xl p-8 reveal">
              <h3 className="text-2xl font-bold mb-6 text-primary" data-testid="education-title">
                {t("education-title")}
              </h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-2" data-testid="education-course">
                  {i18n.language === "en" ? education.courseEn : education.course}
                </h4>
                <p className="text-primary font-medium mb-1" data-testid="education-institution">
                  {i18n.language === "en" ? education.institutionEn : education.institution}
                </p>
                <p className="text-text-light text-sm" data-testid="education-status">
                  {i18n.language === "en" ? `${education.statusEn} • ${education.locationEn}` : `${education.status} • ${education.location}`}
                </p>
              </div>

              <div className="pt-6 border-t border-dark-border">
                <h4 className="text-lg font-semibold text-foreground mb-4" data-testid="location-title">
                  {t("location-title")}
                </h4>
                <div className="flex items-center text-text-light" data-testid="location">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{t("location")}</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 reveal">
              <h3 className="text-2xl font-bold mb-6 text-primary" data-testid="achievements-title">
                {t("achievements-title")}
              </h3>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={achievement.title} className="flex items-start space-x-3" data-testid={`achievement-${index}`}>
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid={`achievement-title-${index}`}>
                        {i18n.language === "en" ? achievement.titleEn : achievement.title}
                      </h4>
                      <p className="text-text-light text-sm" data-testid={`achievement-description-${index}`}>
                        {i18n.language === "en" ? achievement.descriptionEn : achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

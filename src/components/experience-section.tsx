import { motion } from "framer-motion";
import { achievements, education, experience } from "@/lib/constants";
import { Trans, useTranslation } from "react-i18next";
import SectionHeading from "@/components/section-heading";

export default function ExperienceSection() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <section id="experience" className="section-shell">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading number="03" title={<Trans i18nKey="experience-title" components={[<span className="gradient-text" />]} />} subtitle={t("experience-subtitle")} />

        <div className="grid xl:grid-cols-[1.08fr_0.92fr] gap-6 md:gap-8 lg:gap-10 items-start">
          <div className="panel reveal" data-reveal="slice">
            <h3 className="text-3xl md:text-5xl mb-8 text-primary" data-testid="timeline-title">
              {t("timeline-title")}
            </h3>

            <div className="space-y-4">
              {experience.map((job, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.52, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="grid md:grid-cols-[auto_1fr] gap-4 border border-border bg-secondary/35 p-4 md:p-5"
                  data-testid={`job-${index}`}>
                  <div className="md:pr-2 border-b md:border-b-0 md:border-r border-border pb-2 md:pb-0 md:min-w-[120px]">
                    <p className="text-[2rem] md:text-[2.6rem] leading-none text-primary/70">{String(index + 1).padStart(2, "0")}</p>
                    <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-text-light mt-2" data-testid={`job-period-${index}`}>
                      {i18n.language === "en" ? job.periodEn : job.period}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl md:text-2xl text-foreground leading-tight" data-testid={`job-title-${index}`}>
                      {i18n.language === "en" ? job.positionEn : job.position}
                    </h4>
                    <p className="text-primary font-medium mt-1 mb-3" data-testid={`job-company-${index}`}>
                      {i18n.language === "en" ? job.companyEn : job.company}
                    </p>

                    <ul className="text-text-light space-y-2 text-sm leading-relaxed">
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
                </motion.article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="panel reveal" data-reveal="lift">
              <h3 className="text-3xl md:text-5xl mb-6 text-primary" data-testid="education-title">
                {t("education-title")}
              </h3>

              <div className="grid gap-4">
                <div className="border border-border p-4">
                  <h4 className="text-lg md:text-xl text-foreground mb-2" data-testid="education-course">
                    {i18n.language === "en" ? education.courseEn : education.course}
                  </h4>
                  <p className="text-primary font-medium mb-1" data-testid="education-institution">
                    {i18n.language === "en" ? education.institutionEn : education.institution}
                  </p>
                  <p className="text-text-light text-sm" data-testid="education-status">
                    {i18n.language === "en" ? `${education.statusEn} • ${education.locationEn}` : `${education.status} • ${education.location}`}
                  </p>
                </div>

                <div className="border border-border p-4">
                  <h4 className="text-sm font-mono uppercase tracking-widest text-foreground mb-3" data-testid="location-title">
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
            </div>

            <div className="panel reveal" data-reveal="zoom">
              <h3 className="text-3xl md:text-5xl mb-6 text-primary" data-testid="achievements-title">
                {t("achievements-title")}
              </h3>

              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 220, damping: 16 }}
                    className="grid grid-cols-[auto_1fr] gap-3 border border-border p-3"
                    data-testid={`achievement-${index}`}>
                    <span className="text-xs font-mono text-primary/80 pt-1">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid={`achievement-title-${index}`}>
                        {i18n.language === "en" ? achievement.titleEn : achievement.title}
                      </h4>
                      <p className="text-text-light text-sm" data-testid={`achievement-description-${index}`}>
                        {i18n.language === "en" ? achievement.descriptionEn : achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

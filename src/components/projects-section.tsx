import { useEffect, useMemo, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { projects, techStack } from "@/lib/constants";
import { Trans, useTranslation } from "react-i18next";
import SectionHeading from "@/components/section-heading";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const filters = [
    { key: "all", label: t("filter-all") },
    { key: "fullstack", label: t("filter-fullstack") },
    { key: "backend", label: t("filter-backend") },
    { key: "tools", label: t("filter-tools") },
  ];

  const filteredProjects = useMemo(() => {
    return activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    setActiveIndex(0);
  }, [activeFilter]);

  const activeProject = filteredProjects[activeIndex];
  const isEnglish = i18n.language === "en";

  const stackStats = useMemo(() => {
    if (!activeProject) return { backend: 0, frontend: 0, tools: 0 };

    const backendSet = new Set(techStack.backend.map((tech) => tech.name));
    const frontendSet = new Set(techStack.frontend.map((tech) => tech.name));
    const toolsSet = new Set(techStack.tools.map((tech) => tech.name));

    return activeProject.technologies.reduce(
      (acc, tech) => {
        if (backendSet.has(tech)) acc.backend += 1;
        else if (frontendSet.has(tech)) acc.frontend += 1;
        else if (toolsSet.has(tech)) acc.tools += 1;
        else acc.tools += 1;
        return acc;
      },
      { backend: 0, frontend: 0, tools: 0 },
    );
  }, [activeProject]);

  const techContext = useMemo(() => {
    return {
      TypeScript: isEnglish ? "Development language" : "Linguagem de Desenvolvimento",
      "Node.js": isEnglish ? "Execution runtime" : "Runtime de Execucao",
      "REST API": isEnglish ? "Integration contract" : "Contrato de Integracao",
      CLI: isEnglish ? "Automation interface" : "Interface de Automacao",
      PostgreSQL: isEnglish ? "Persistent data base" : "Base de Dados Persistente",
      React: isEnglish ? "User interface layer" : "Camada de Interface",
      API: isEnglish ? "External integration source" : "Fonte de Integracao",
      Rust: isEnglish ? "Performance core" : "Nucleo de Performance",
      PDF: isEnglish ? "Document source" : "Fonte dos Dados",
      Python: isEnglish ? "Data processing" : "Processamento dos Dados",
      Excel: isEnglish ? "Data source" : "Fonte dos Dados",
    } as Record<string, string>;
  }, [isEnglish]);

  return (
    <section id="projects" className="section-shell pt-20 md:pt-24">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading number="02" title={<Trans i18nKey="projects-title" components={[<span className="gradient-text" />]} />} subtitle={t("projects-subtitle")} align="center" />

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 reveal" data-reveal="line">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "ghost"}
              onClick={() => setActiveFilter(filter.key)}
              data-magnetic="true"
              className={`px-4 md:px-6 py-2 rounded-none text-xs md:text-sm uppercase tracking-wider transition-colors ${activeFilter === filter.key ? "bg-primary text-white" : "glass-light hover:bg-primary/35"}`}
              data-testid={`filter-${filter.key}`}>
              {filter.label}
            </Button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 md:gap-8 lg:gap-10 items-start">
            <div className="panel reveal" data-reveal="slice">
              <div className="space-y-2">
                {filteredProjects.map((project, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={`${activeFilter}-${project.title}-${index}`}
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                      className={`w-full text-left border px-3 md:px-4 py-4 transition-colors ${isActive ? "border-primary bg-primary/12" : "border-border bg-secondary/45 hover:bg-primary/8"}`}
                      data-testid={`project-card-${index}`}>
                      <div className="grid grid-cols-[auto_1fr] gap-3 md:gap-4 items-start">
                        <span className={`font-mono text-xs md:text-sm mt-1 ${isActive ? "text-primary" : "text-text-light"}`}>{String(index + 1).padStart(2, "0")}</span>
                        <div>
                          <h3 className="text-xl md:text-2xl leading-tight glitch-hover" data-text={project.title} data-testid={`project-title-${index}`}>
                            {project.title}
                          </h3>
                          <p className="text-sm text-text-light mt-2 leading-relaxed" data-testid={`project-description-${index}`}>
                            {i18n.language === "en" ? project.descriptionEn : project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span key={tech} className={`px-2.5 py-1 border border-border text-[11px] uppercase font-mono ${project.techColors[techIndex]}`} data-testid={`project-tech-${index}-${techIndex}`}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {activeProject && (
              <motion.article
                key={`${activeFilter}-${activeProject.title}-${activeIndex}`}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="panel reveal h-full flex flex-col"
                data-reveal="zoom">
                <div className="relative overflow-hidden border border-border mb-5">
                  <img src={activeProject.image} alt={t("project-image-alt", { title: activeProject.title })} className="w-full h-[260px] md:h-[340px] object-cover" data-testid={`project-image-${activeIndex}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute left-4 top-4 font-mono text-xs tracking-[0.14em] uppercase text-white/80">{activeFilter}</div>
                </div>

                <h3 className="text-3xl md:text-5xl leading-[0.92] mb-3">{activeProject.title}</h3>
                <p className="text-text-light mb-8 leading-relaxed">{i18n.language === "en" ? activeProject.descriptionEn : activeProject.description}</p>

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex flex-wrap gap-4 mb-4">
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-magnetic="true"
                      className="inline-flex items-center text-text-light hover:text-primary transition-colors text-sm"
                      data-testid={`project-github-${activeIndex}`}>
                      <Github className="mr-2 h-4 w-4" />
                      {t("project-code")}
                    </a>
                    {activeProject.demo && (
                      <a
                        href={activeProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-magnetic="true"
                        className="inline-flex items-center text-text-light hover:text-primary transition-colors text-sm"
                        data-testid={`project-demo-${activeIndex}`}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-2">
                    {activeProject.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                        className="border border-border bg-secondary/35 p-3"
                        data-testid={`project-tech-${activeIndex}-${techIndex}`}>
                        <p className={`text-sm md:text-base uppercase font-mono ${activeProject.techColors[techIndex]}`}>{tech}</p>
                        <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-text-light mt-2">{techContext[tech] ?? (isEnglish ? "Core technology" : "Tecnologia Principal")}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-border space-y-3">
                  <p className="text-xs font-mono uppercase tracking-[0.14em] text-text-light">{t("tech-stack-title")}</p>

                  <div className="space-y-2">
                    {[
                      { label: "Backend", value: stackStats.backend },
                      { label: "Frontend", value: stackStats.frontend },
                      { label: t("tools"), value: stackStats.tools },
                    ].map((item) => {
                      const width = activeProject.technologies.length > 0 ? Math.max((item.value / activeProject.technologies.length) * 100, item.value > 0 ? 18 : 0) : 0;
                      return (
                        <div key={item.label} className="grid grid-cols-[6rem_1fr_auto] items-center gap-2">
                          <span className="text-xs font-mono uppercase tracking-[0.14em] text-text-light">{item.label}</span>
                          <div className="h-1.5 border border-border bg-secondary/35">
                            <motion.div className="h-full bg-primary" animate={{ width: `${width}%` }} transition={{ type: "spring", stiffness: 200, damping: 22 }} />
                          </div>
                          <span className="text-xs font-mono text-primary">{item.value}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border border-border bg-secondary/30 px-3 py-2">
                    <p className="text-xs font-mono uppercase tracking-[0.14em] text-text-light">{activeFilter}</p>
                  </div>
                </div>
              </motion.article>
            )}
          </div>
        ) : (
          <div className="panel text-center py-12">
            <p className="text-text-light text-lg" data-testid="no-projects-message">
              Nenhum projeto encontrado para esta categoria.
            </p>
          </div>
        )}

        <div className="text-center mt-16 md:mt-20 reveal" data-reveal="lift">
          <a
            href="https://github.com/ckzwebber"
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic="true"
            className="inline-flex items-center px-8 py-3 glass-light hover:bg-primary/35 font-semibold rounded-none transition-colors"
            data-testid="view-all-projects">
            <Github className="mr-2 h-4 w-4" />
            {t("view-all-projects")}
          </a>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";
import { Trans, useTranslation } from "react-i18next";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const filters = [
    { key: "all", label: t("filter-all") },
    { key: "fullstack", label: t("filter-fullstack") },
    { key: "backend", label: t("filter-backend") },
    { key: "tools", label: t("filter-tools") },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="projects-title">
            <Trans i18nKey="projects-title" components={[<span className="gradient-text" />]} />
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto" data-testid="projects-subtitle">
            {t("projects-subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "ghost"}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === filter.key ? "bg-primary text-white" : "glass-light hover:bg-primary"}`}
              data-testid={`filter-${filter.key}`}>
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" key={activeFilter}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div key={`${activeFilter}-${project.title}-${index}`} className="project-card glass rounded-2xl p-6 animate-fade-in" data-testid={`project-card-${index}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl mb-4" data-testid={`project-image-${index}`} />

                <h3 className="text-xl font-bold mb-3" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>

                <p className="text-text-light mb-4" data-testid={`project-description-${index}`}>
                  {i18n.language === "en" ? project.descriptionEn : project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={tech} className={`px-3 py-1 rounded-full text-sm ${project.techColors[techIndex]}`} data-testid={`project-tech-${index}-${techIndex}`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-text-light hover:text-primary transition-colors" data-testid={`project-github-${index}`}>
                    <Github className="mr-2 h-4 w-4" />
                    {t("project-code")}
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-text-light hover:text-primary transition-colors" data-testid={`project-demo-${index}`}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-text-light text-lg" data-testid="no-projects-message">
                Nenhum projeto encontrado para esta categoria.
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href="https://github.com/ckzwebber"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 glass-light hover:bg-primary hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            data-testid="view-all-projects">
            <Github className="mr-2 h-4 w-4" />
            {t("view-all-projects")}
          </a>
        </div>
      </div>
    </section>
  );
}

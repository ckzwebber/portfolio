import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects, techStack } from "@/lib/constants";
import { Trans, useTranslation } from "react-i18next";
import SectionHeading from "@/components/section-heading";

type ActiveTech = {
  key: string;
  label: string;
  name: string;
  icon: string;
  color: string;
};

function CountUp({ end }: { end: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1100;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(end * progress));
      if (progress < 1) raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [end]);

  return <>{value}</>;
}

export default function AboutSection() {
  const { t } = useTranslation();
  const [activeTechKey, setActiveTechKey] = useState("backend:Node.js");
  const [isHoveringTech, setIsHoveringTech] = useState(false);

  const techEntries: ActiveTech[] = useMemo(
    () => [
      ...techStack.backend.map((tech) => ({ key: `backend:${tech.name}`, label: "Backend", name: tech.name, icon: tech.icon, color: tech.color })),
      ...techStack.frontend.map((tech) => ({ key: `frontend:${tech.name}`, label: "Frontend", name: tech.name, icon: tech.icon, color: tech.color })),
      ...techStack.tools.map((tech) => ({ key: `tools:${tech.name}`, label: t("tools"), name: tech.name, icon: tech.icon, color: tech.color })),
    ],
    [t],
  );

  useEffect(() => {
    if (!techEntries.length || isHoveringTech) return;

    const interval = window.setInterval(() => {
      setActiveTechKey((current) => {
        const index = techEntries.findIndex((entry) => entry.key === current);
        const nextIndex = index === -1 ? 0 : (index + 1) % techEntries.length;
        return techEntries[nextIndex].key;
      });
    }, 2400);

    return () => window.clearInterval(interval);
  }, [isHoveringTech, techEntries]);

  const activeTech = techEntries.find((entry) => entry.key === activeTechKey) ?? techEntries[0];

  const relatedProjects = useMemo(() => {
    if (!activeTech) return [];
    return projects.filter((project) => project.technologies.includes(activeTech.name));
  }, [activeTech]);

  const techTraits = useMemo(() => {
    if (!activeTech) return [];

    const groupTraits: Record<string, string[]> = {
      Backend: ["runtime", "api", "services"],
      Frontend: ["ui", "state", "render"],
      [t("tools")]: ["workflow", "infra", "delivery"],
    };

    const nameTraits: Record<string, string[]> = {
      "Node.js": ["event-loop", "javascript"],
      TypeScript: ["typed", "tooling"],
      Express: ["routing", "middleware"],
      "Nest.js": ["modular", "scalable"],
      Java: ["jvm", "oop"],
      Prisma: ["orm", "schema"],
      React: ["components", "hooks"],
      Next: ["ssr", "edge"],
      Tailwind: ["utility", "design-system"],
      Docker: ["containers", "images"],
      PostgreSQL: ["sql", "transactions"],
      AWS: ["cloud", "managed"],
      Git: ["versioning", "branching"],
      MongoDB: ["documents", "nosql"],
      Vite: ["bundler", "hmr"],
    };

    const byGroup = groupTraits[activeTech.label] ?? ["engineering", "architecture", "performance"];
    const matchedName = Object.keys(nameTraits).find((name) => activeTech.name.includes(name));
    const byName = matchedName ? nameTraits[matchedName] : ["production", "testing"];

    return [...byGroup, ...byName].slice(0, 5);
  }, [activeTech, t]);

  return (
    <section id="about" className="section-shell">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          number="01"
          title={
            <>
              {t("about")} <span className="gradient-text">{t("me")}</span>
            </>
          }
          subtitle={t("about-description")}
        />

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 md:gap-8 lg:gap-10 items-start">
          <aside className="panel reveal" data-reveal="lift">
            <div className="border-b border-border pb-4 mb-6">
              <h3 className="text-3xl md:text-5xl text-primary" data-testid="journey-title">
                {t("my-journey")}
              </h3>
            </div>

            <div className="space-y-4 text-text-light leading-relaxed">
              {[
                { key: "journey-item-1", testId: "journey-item-1" },
                { key: "journey-item-2", testId: "journey-item-2" },
                { key: "journey-item-3", testId: "journey-item-3" },
                { key: "journey-item-4", testId: "journey-item-4" },
              ].map((entry, index) => (
                <div key={entry.key} className="grid grid-cols-[auto_1fr] gap-3 border-l border-border pl-3">
                  <span className="font-mono text-xs text-primary/80 pt-1">0{index + 1}</span>
                  <p data-testid={entry.testId}>
                    <Trans i18nKey={entry.key} components={[<strong className="text-foreground" />]} />
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="glass-light p-4 md:p-5" data-testid="stat-repositories">
                <p className="text-[2.2rem] md:text-[3.2rem] leading-none text-primary">
                  <CountUp end={20} />+
                </p>
                <p className="text-xs uppercase tracking-[0.14em] text-text-light mt-2">{t("stat-repositories")}</p>
              </div>
              <div className="glass-light p-4 md:p-5" data-testid="stat-experience">
                <p className="text-[2.2rem] md:text-[3.2rem] leading-none text-primary">
                  <CountUp end={2} />+
                </p>
                <p className="text-xs uppercase tracking-[0.14em] text-text-light mt-2">{t("stat-experience")}</p>
              </div>
            </div>
          </aside>

          <div className="panel reveal relative" data-reveal="slice">
            <div className="absolute right-2 top-2 md:right-3 md:top-1 text-[5rem] md:text-[7rem] leading-none text-primary/10 pointer-events-none">01</div>
            <div className="absolute inset-0 pointer-events-none opacity-35">
              <motion.div className="h-px bg-primary/80" initial={{ y: 0 }} animate={{ y: [0, 620, 0] }} transition={{ duration: 6.4, repeat: Infinity, ease: "linear" }} />
            </div>

            <h3 className="text-3xl md:text-5xl mb-7 text-primary" data-testid="tech-stack-title">
              {t("tech-stack-title")}
            </h3>

            {activeTech && (
              <motion.div key={activeTech.key} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }} className="mb-5 border border-border bg-secondary/40 p-4">
                <div className="flex items-center gap-3">
                  <div className={`text-2xl ${activeTech.color}`} dangerouslySetInnerHTML={{ __html: activeTech.icon }} />
                  <div>
                    <p className="text-lg md:text-xl leading-none">{activeTech.name}</p>
                    <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-text-light mt-1">{activeTech.label}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 border border-border text-[11px] font-mono uppercase text-text-light">{t("projects")}</span>
                  {relatedProjects.slice(0, 2).map((project) => (
                    <span key={project.title} className="px-2 py-1 border border-border text-[11px] font-mono uppercase text-text-light">
                      {project.title}
                    </span>
                  ))}
                  {techTraits.slice(0, Math.max(1, 4 - relatedProjects.slice(0, 2).length)).map((trait) => (
                    <span key={trait} className="px-2 py-1 border border-border text-[11px] font-mono uppercase text-primary/90">
                      {trait}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            <div className="space-y-6 md:space-y-7" onMouseEnter={() => setIsHoveringTech(true)} onMouseLeave={() => setIsHoveringTech(false)}>
              <div>
                <div className="flex items-center justify-between border-b border-border pb-2 mb-3">
                  <h4 className="text-sm font-mono uppercase tracking-[0.18em]" data-testid="backend-title">
                    Backend
                  </h4>
                  <span className="text-xs font-mono text-text-light">{techStack.backend.length.toString().padStart(2, "0")}</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {techStack.backend.map((tech, index) => {
                    const key = `backend:${tech.name}`;
                    const isActive = activeTechKey === key;
                    return (
                      <motion.button
                        key={tech.name}
                        type="button"
                        onMouseEnter={() => setActiveTechKey(key)}
                        onFocus={() => setActiveTechKey(key)}
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 220, damping: 14 }}
                        className={`tech-icon w-full text-left glass-light flex items-center gap-2 p-3 border min-h-[56px] ${isActive ? "border-primary bg-primary/12" : "border-border"}`}
                        data-testid={`backend-tech-${index}`}>
                        <div className={`text-xl ${tech.color}`} dangerouslySetInnerHTML={{ __html: tech.icon }} />
                        <span className="text-sm leading-tight">{tech.name}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between border-b border-border pb-2 mb-3">
                  <h4 className="text-sm font-mono uppercase tracking-[0.18em]" data-testid="frontend-title">
                    Frontend
                  </h4>
                  <span className="text-xs font-mono text-text-light">{techStack.frontend.length.toString().padStart(2, "0")}</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {techStack.frontend.map((tech, index) => {
                    const key = `frontend:${tech.name}`;
                    const isActive = activeTechKey === key;
                    return (
                      <motion.button
                        key={tech.name}
                        type="button"
                        onMouseEnter={() => setActiveTechKey(key)}
                        onFocus={() => setActiveTechKey(key)}
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 220, damping: 14 }}
                        className={`tech-icon w-full text-left glass-light flex items-center gap-2 p-3 border min-h-[56px] ${isActive ? "border-primary bg-primary/12" : "border-border"}`}
                        data-testid={`frontend-tech-${index}`}>
                        <div className={`text-xl ${tech.color}`} dangerouslySetInnerHTML={{ __html: tech.icon }} />
                        <span className="text-sm leading-tight">{tech.name}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between border-b border-border pb-2 mb-3">
                  <h4 className="text-sm font-mono uppercase tracking-[0.18em]" data-testid="tools-title">
                    {t("tools")}
                  </h4>
                  <span className="text-xs font-mono text-text-light">{techStack.tools.length.toString().padStart(2, "0")}</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {techStack.tools.map((tech, index) => {
                    const key = `tools:${tech.name}`;
                    const isActive = activeTechKey === key;
                    return (
                      <motion.button
                        key={tech.name}
                        type="button"
                        onMouseEnter={() => setActiveTechKey(key)}
                        onFocus={() => setActiveTechKey(key)}
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 220, damping: 14 }}
                        className={`tech-icon w-full text-left glass-light flex items-center gap-2 p-3 border min-h-[56px] ${isActive ? "border-primary bg-primary/12" : "border-border"}`}
                        data-testid={`tools-tech-${index}`}>
                        <div className={`text-xl ${tech.color}`} dangerouslySetInnerHTML={{ __html: tech.icon }} />
                        <span className="text-sm leading-tight">{tech.name}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

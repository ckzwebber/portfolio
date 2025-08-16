import { personalInfo, techStack } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="about-title">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto" data-testid="about-subtitle">
            Desenvolvedor Backend com paixão por tecnologia e inovação. Especializado em criar aplicações robustas e escaláveis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary" data-testid="journey-title">
                Minha Jornada
              </h3>
              <div className="space-y-4 text-text-light">
                <p data-testid="journey-item-1">
                  ✨ <strong className="text-foreground">Criando bugs desde 2021</strong> - mas sempre aprendendo com eles!
                </p>
                <p data-testid="journey-item-2">
                  📚 <strong className="text-foreground">Estudante de Ciência da Computação</strong> na UNESC, sempre em busca de novos conhecimentos e desafios.
                </p>
                <p data-testid="journey-item-3">
                  🎯 <strong className="text-foreground">Foco em Backend Development</strong> com Node.js, TypeScript e tecnologias modernas do ecossistema JavaScript.
                </p>
                <p data-testid="journey-item-4">
                  🏆 <strong className="text-foreground">Conquistas acadêmicas:</strong> CS50 Harvard, 3x Menções Honrosas OBMEP, e certificações em desenvolvimento web.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 glass-light rounded-xl" data-testid="stat-repositories">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-text-light">Repositórios</div>
                </div>
                <div className="text-center p-4 glass-light rounded-xl" data-testid="stat-experience">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-text-light">Anos de Exp.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-primary" data-testid="tech-stack-title">
                Stack Tecnológico
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
                    Ferramentas & Database
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

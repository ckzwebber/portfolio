import { Mail, Github, Linkedin, Globe } from "lucide-react";

export const personalInfo = {
  name: "Carlos Miguel Webber Model",
  title: "Backend Developer",
  location: "Criciúma - SC - Brasil 🇧🇷",
  education: "Ciência da Computação - UNESC (em andamento)",
  linkedin: "https://www.linkedin.com/in/cakowebber/",
  github: "https://github.com/ckzwebber",
  portfolio: "https://webberportfolio.netlify.app/",
  email: "kacowebber11@unesc.net",
};

export const techStack = {
  frontend: [
    { name: "HTML5", icon: '<i class="devicon-html5-plain"></i>', color: "text-orange-500" },
    { name: "CSS3", icon: '<i class="devicon-css3-plain"></i>', color: "text-blue-500" },
    { name: "JavaScript", icon: '<i class="devicon-javascript-plain"></i>', color: "text-yellow-500" },
    { name: "React", icon: '<i class="devicon-react-original"></i>', color: "text-cyan-400" },
    { name: "Next.js", icon: '<i class="devicon-nextjs-plain"></i>', color: "text-gray-800 dark:text-white" },
    { name: "Tailwind", icon: '<i class="devicon-tailwindcss-original"></i>', color: "text-teal-400" },
  ],
  backend: [
    { name: "Node.js", icon: '<i class="devicon-nodejs-plain"></i>', color: "text-green-500" },
    { name: "TypeScript", icon: '<i class="devicon-typescript-plain"></i>', color: "text-blue-600" },
    { name: "Express", icon: '<i class="devicon-express-original"></i>', color: "text-gray-600 dark:text-gray-300" },
    { name: "Nest.js", icon: '<i class="devicon-nestjs-plain"></i>', color: "text-red-600" },
    { name: "Java", icon: '<i class="devicon-java-plain"></i>', color: "text-red-500" },
    { name: "Prisma", icon: '<i class="devicon-prisma-original"></i>', color: "text-indigo-600" },
  ],
  tools: [
    { name: "PostgreSQL", icon: '<i class="devicon-postgresql-plain"></i>', color: "text-blue-600" },
    { name: "Docker", icon: '<i class="devicon-docker-plain"></i>', color: "text-blue-400" },
    { name: "AWS", icon: '<i class="devicon-amazonwebservices-plain-wordmark"></i>', color: "text-orange-400" },
    { name: "Git", icon: '<i class="devicon-git-plain"></i>', color: "text-orange-600" },
    { name: "MongoDB", icon: '<i class="devicon-mongodb-plain"></i>', color: "text-green-600" },
    { name: "Vite", icon: '<i class="devicon-vite-original"></i>', color: "text-purple-500" },
  ],
};

export const projects = [
  {
    title: "VTEX Gift Generator",
    description: "CLI interativo em TypeScript para operações de gift card na plataforma VTEX, consulta clientes por pedido, e-mail ou CPF/CNPJ e cria/credita gift cards em um único fluxo.",
    descriptionEn: "Interactive CLI in TypeScript for VTEX gift card operations, look up customers by order, email or CPF/CNPJ, then create and credit gift cards in a single flow.",
    image: "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["TypeScript", "Node.js", "REST API"],
    techColors: ["bg-blue-600/20 text-blue-400", "bg-green-500/20 text-green-400", "bg-purple-500/20 text-purple-400"],
    github: "https://github.com/ckzwebber/vtex-gift-generator",
    demo: null,
    category: "tools",
  },
  {
    title: "VTEX Environment Migrator",
    description: "CLI robusto em TypeScript para migração de componentes de catálogo VTEX entre ambientes, com interface moderna e interativa.",
    descriptionEn: "Robust TypeScript CLI for migrating VTEX catalog components between environments, featuring a modern interactive interface.",
    image: "https://images.unsplash.com/photo-1615525137689-198778541af6?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["TypeScript", "Node.js", "CLI"],
    techColors: ["bg-blue-600/20 text-blue-400", "bg-green-500/20 text-green-400", "bg-gray-500/20 text-gray-400"],
    github: "https://github.com/ckzwebber/vtex-environment-migrator",
    demo: null,
    category: "tools",
  },
  {
    title: "Day Tasks",
    description: "Micro-app em Node.js e TypeScript que busca tarefas agendadas no PostgreSQL e dispara e-mails automaticamente às 05:00 via cron job. Integração com Nodemailer e agendamento com node-cron.",
    descriptionEn: "Node.js and TypeScript micro-app that queries scheduled tasks from PostgreSQL and automatically sends emails at 05:00 via cron job. Integrated with Nodemailer and node-cron.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    technologies: ["TypeScript", "Node.js", "PostgreSQL"],
    techColors: ["bg-blue-600/20 text-blue-400", "bg-green-500/20 text-green-400", "bg-blue-500/20 text-blue-400"],
    github: "https://github.com/ckzwebber/day-tasks",
    demo: null,
    category: "backend",
  },
  {
    title: "Wallet Watch",
    description: "Aplicação React com TypeScript que consome API de câmbio em tempo real para exibir a variação de moedas internacionais em relação ao BRL, com atualização automática e interface responsiva.",
    descriptionEn: "React and TypeScript application consuming a real-time exchange API to display international currency variations against the BRL, with auto-refresh and responsive interface.",
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    technologies: ["TypeScript", "React", "API"],
    techColors: ["bg-blue-600/20 text-blue-400", "bg-cyan-500/20 text-cyan-400", "bg-green-500/20 text-green-400"],
    github: "https://github.com/ckzwebber/wallet-watch",
    demo: null,
    category: "fullstack",
  },
  {
    title: "CLI Word PDF Counter",
    description: "Ferramenta CLI em Rust para extração de texto e contagem das palavras mais frequentes em arquivos PDF, com suporte a múltiplos arquivos e saída formatada no terminal.",
    descriptionEn: "CLI tool built in Rust for text extraction and most frequent word counting across PDF files, with multi-file support and formatted terminal output.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    technologies: ["Rust", "CLI", "PDF"],
    techColors: ["bg-orange-600/20 text-orange-400", "bg-gray-500/20 text-gray-400", "bg-red-500/20 text-red-400"],
    github: "https://github.com/ckzwebber/cli-word-pdf-counter",
    demo: null,
    category: "tools",
  },
  {
    title: "Simples Nacional Status Checker",
    description: "Script Python que lê uma planilha Excel, extrai CNPJs e consulta em lote a situação de cada empresa no Simples Nacional via API pública, exportando os resultados automaticamente.",
    descriptionEn: "Python script that reads an Excel spreadsheet, extracts CNPJs and batch-queries each company's Simples Nacional status via public API, automatically exporting the results.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    technologies: ["Python", "API", "Excel"],
    techColors: ["bg-blue-500/20 text-blue-400", "bg-green-500/20 text-green-400", "bg-green-600/20 text-green-500"],
    github: "https://github.com/ckzwebber/simples-nacional-status-checker",
    demo: null,
    category: "backend",
  },
];

export const experience = [
  {
    position: "Desenvolvedor Backend",
    positionEn: "Backend Developer",
    company: "La Moda",
    companyEn: "La Moda",
    period: "05/2025 - Presente",
    periodEn: "05/2025 - Present",
    responsibilities: [
      "Desenvolvimento de integrações em Node.js e NestJS, reduzindo em até 25% o tempo de resposta de APIs internas.",
      "Integração com MySQL e PostgreSQL garantindo confiabilidade no fluxo de dados entre sistemas legados e novos módulos.",
      "Boas práticas: Git, Scrum/Kanban.",
    ],
    responsibilitiesEn: [
      "Built integrations in Node.js and NestJS, reducing internal API response time by up to 25%.",
      "Integrated MySQL and PostgreSQL ensuring reliable data flow between legacy systems and new modules.",
      "Best practices: Git, Scrum/Kanban.",
    ],
  },
  {
    position: "Desenvolvedor Web FullStack",
    positionEn: "FullStack Web Developer",
    company: "La Moda",
    companyEn: "La Moda",
    period: "09/2024 - 05/2025",
    periodEn: "09/2024 - 05/2025",
    responsibilities: [
      "Interfaces em React.js integradas a APIs RESTful com melhoria de até 20% na velocidade de carregamento.",
      "Backend em Node.js/Express com autenticação e operações CRUD.",
      "Entregas dentro do prazo em 95% dos casos atuando em times ágeis.",
    ],
    responsibilitiesEn: [
      "Built React.js interfaces connected to RESTful APIs, improving page load speed by up to 20%.",
      "Backend services in Node.js/Express including authentication and CRUD operations.",
      "Delivered on time in 95% of sprints working in agile teams.",
    ],
  },
  {
    position: "Desenvolvedor de Software",
    positionEn: "Software Developer",
    company: "Useall Software",
    companyEn: "Useall Software",
    period: "08/2024 - 09/2024",
    periodEn: "08/2024 - 09/2024",
    responsibilities: ["Desenvolvimento em Python e C#", "Implementação de soluções customizadas"],
    responsibilitiesEn: ["Development using Python and C#", "Implementation of customized solutions"],
  },
  {
    position: "Técnico de TI",
    positionEn: "IT Technician",
    company: "MDS Informática",
    companyEn: "MDS Informática",
    period: "02/2023 - 02/2024",
    periodEn: "02/2023 - 02/2024",
    responsibilities: ["Manutenção e configuração de sistemas", "Suporte a clientes corporativos", "Resolução de problemas técnicos complexos"],
    responsibilitiesEn: ["Maintenance and configuration of systems", "Support for corporate clients", "Resolution of complex technical issues"],
  },
];

export const education = {
  course: "Ciência da Computação",
  courseEn: "Computer Science",
  institution: "UNESC - Universidade do Extremo Sul Catarinense",
  institutionEn: "UNESC - University of the Extreme South of Santa Catarina",
  status: "Em andamento",
  statusEn: "Ongoing",
  location: "Criciúma, SC",
  locationEn: "Criciúma, SC",
};

export const achievements = [
  {
    title: "CS50 - Harvard University",
    titleEn: "CS50 - Harvard University",
    description: "Curso de ciência da computação e programação",
    descriptionEn: "Computer Science and Programming course",
  },
  {
    title: "3x Menções Honrosas - OBMEP",
    titleEn: "3x Honourable Mentions - OBMEP",
    description: "Reconhecimento em Matemática",
    descriptionEn: "3x Honourable Mentions - OBMEP (Mathematics Recognition)",
  },
  {
    title: "Curso.dev - Filipe Deschamps",
    titleEn: "Curso.dev - Filipe Deschamps",
    description: "Formação completa em desenvolvimento web",
    descriptionEn: "Complete training in web development",
  },
  {
    title: ".NET Developer - DIO",
    titleEn: ".NET Developer - DIO",
    description: "Especialização em C# e .NET",
    descriptionEn: "Specialization in C# and .NET",
  },
  {
    title: "DevTheDevs - PUCRS",
    titleEn: "DevTheDevs - PUCRS",
    description: "Capacitação em desenvolvimento Java",
    descriptionEn: "Training in Java development",
  },
];

export const contactInfo = [
  {
    label: "Email",
    value: "kacowebber11@unesc.net",
    copyValue: "kacowebber11@unesc.net",
    href: "mailto:kacowebber11@unesc.net",
    icon: <Mail className="text-primary text-xl" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/cakowebber",
    copyValue: "https://www.linkedin.com/in/cakowebber/",
    href: "https://www.linkedin.com/in/cakowebber/",
    icon: <Linkedin className="text-primary text-xl" />,
  },
  {
    label: "GitHub",
    value: "github.com/ckzwebber",
    copyValue: "https://github.com/ckzwebber",
    href: "https://github.com/ckzwebber",
    icon: <Github className="text-primary text-xl" />,
  },
  {
    label: "Portfolio",
    value: "webberportfolio.netlify.app",
    copyValue: "https://webberportfolio.netlify.app/",
    href: "https://webberportfolio.netlify.app/",
    icon: <Globe className="text-primary text-xl" />,
  },
];

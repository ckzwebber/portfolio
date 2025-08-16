import { Mail, Github, Linkedin, Globe } from "lucide-react";

export const personalInfo = {
  name: "Carlos Miguel Webber Model",
  title: "Desenvolvedor Backend / Desenvolvedor FullStack",
  location: "Criciúma - SC - Brasil 🇧🇷",
  education: "Ciência da Computação - UNESC (em andamento)",
  linkedin: "https://www.linkedin.com/in/cmiguelwm/",
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
    title: "Game Tracker",
    description: "Aplicação para acompanhar jogos que eu joguei e estou jogando, incluindo avaliações e horas jogadas.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    technologies: ["JavaScript", "HTML", "CSS"],
    techColors: ["bg-yellow-500/20 text-yellow-400", "bg-orange-500/20 text-orange-400", "bg-blue-500/20 text-blue-400"],
    github: "https://github.com/ckzwebber/game-tracker",
    demo: null,
    category: "fullstack",
  },
  {
    title: "Day Tasks",
    description: "Micro-app em Node.js + TypeScript + PostgreSQL que envia e-mails diários com tarefas agendadas às 05:00.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    technologies: ["TypeScript", "Node.js", "PostgreSQL"],
    techColors: ["bg-blue-600/20 text-blue-400", "bg-green-500/20 text-green-400", "bg-blue-500/20 text-blue-400"],
    github: "https://github.com/ckzwebber/day-tasks",
    demo: null,
    category: "backend",
  },
  {
    title: "Wallet Watch",
    description: "Acompanhe a variação de preços de diversas moedas em relação ao BRL em tempo real.",
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    technologies: ["TypeScript", "React", "API"],
    techColors: ["bg-blue-600/20 text-blue-400", "bg-cyan-500/20 text-cyan-400", "bg-green-500/20 text-green-400"],
    github: "https://github.com/ckzwebber/wallet-watch",
    demo: null,
    category: "fullstack",
  },
  {
    title: "UNESC FIPE Web Search",
    description: "Projeto web que permite consultar e exibir modelos de carros da Tabela FIPE.",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["JavaScript", "HTML", "CSS", "API"],
    techColors: ["bg-yellow-500/20 text-yellow-400", "bg-orange-500/20 text-orange-400", "bg-blue-500/20 text-blue-400", "bg-green-500/20 text-green-400"],
    github: "https://github.com/ckzwebber/unesc-fipe-web-search",
    demo: null,
    category: "fullstack",
  },
  {
    title: "LinkedIn Post Generator",
    description: "Gera e envia posts diários para LinkedIn sobre tecnologias modernas usando IA com API Ollama.",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "AI / ML", "API"],
    techColors: ["bg-blue-500/20 text-blue-400", "bg-purple-500/20 text-purple-400", "bg-green-500/20 text-green-400"],
    github: "https://github.com/ckzwebber/linkedin-post-generator",
    demo: null,
    category: "tools",
  },
  {
    title: "CLI Word PDF Counter",
    description: "Ferramenta CLI em Rust para extrair texto e contar palavras mais frequentes em PDFs.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    technologies: ["Rust", "CLI", "PDF"],
    techColors: ["bg-orange-600/20 text-orange-400", "bg-gray-500/20 text-gray-400", "bg-red-500/20 text-red-400"],
    github: "https://github.com/ckzwebber/cli-word-pdf-counter",
    demo: null,
    category: "tools",
  },
  {
    title: "Simples Nacional Status Checker",
    description: "Script em Python para extrair CNPJs e consultar automaticamente a situação no Simples Nacional via API.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    technologies: ["Python", "API", "Excel"],
    techColors: ["bg-blue-500/20 text-blue-400", "bg-green-500/20 text-green-400", "bg-green-600/20 text-green-500"],
    github: "https://github.com/ckzwebber/simples-nacional-status-checker",
    demo: null,
    category: "backend",
  },
  {
    title: "UNESC Java Projects",
    description: "Coleção de pequenos projetos em Java desenvolvidos durante o curso de Ciência da Computação.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    technologies: ["Java", "OOP", "Algorithms"],
    techColors: ["bg-red-500/20 text-red-400", "bg-purple-500/20 text-purple-400", "bg-blue-600/20 text-blue-400"],
    github: "https://github.com/ckzwebber/unesc-java-projects",
    demo: null,
    category: "backend",
  },
  {
    title: "UNESC Binary Search Pokédex",
    description: "Aplicativo Pokédex baseado em Electron que implementa busca binária para pesquisas rápidas de Pokémon.",
    image: "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["JavaScript", "Electron", "API"],
    techColors: ["bg-yellow-500/20 text-yellow-400", "bg-blue-600/20 text-blue-400", "bg-green-500/20 text-green-400"],
    github: "https://github.com/ckzwebber/unesc-binary-search",
    demo: null,
    category: "tools",
  },
];

export const experience = [
  {
    position: "Desenvolvedor Backend",
    company: "La Moda",
    period: "05/2025 - Presente",
    responsibilities: ["Desenvolvimento de integrações com JavaScript e TypeScript (Node.js)", "Foco em performance e otimização de sistemas", "Implementação de soluções escaláveis e eficientes"],
  },
  {
    position: "Desenvolvedor Web FullStack",
    company: "La Moda",
    period: "09/2024 - 05/2025",
    responsibilities: ["Desenvolvimento e manutenção de aplicações web", "Stack: TypeScript, JavaScript, React, Node.js, AWS, SQL", "Colaboração em projetos de alta complexidade"],
  },
  {
    position: "Desenvolvedor de Software",
    company: "Useall Software",
    period: "08/2024 - 09/2024",
    responsibilities: ["Desenvolvimento em Python e C#", "Implementação de soluções customizadas"],
  },
  {
    position: "Técnico de TI",
    company: "MDS Informática",
    period: "02/2023 - 02/2024",
    responsibilities: ["Manutenção e configuração de sistemas", "Suporte a clientes corporativos", "Resolução de problemas técnicos complexos"],
  },
];

export const education = {
  course: "Ciência da Computação",
  institution: "UNESC - Universidade do Extremo Sul Catarinense",
  status: "Em andamento",
  location: "Criciúma, SC",
};

export const achievements = [
  {
    title: "CS50 - Harvard University",
    description: "Curso de ciência da computação e programação",
  },
  {
    title: "3x Menções Honrosas - OBMEP",
    description: "Reconhecimento em Matemática",
  },
  {
    title: "Curso.dev - Filipe Deschamps",
    description: "Formação completa em desenvolvimento web",
  },
  {
    title: ".NET Developer - DIO",
    description: "Especialização em C# e .NET",
  },
  {
    title: "DevTheDevs - PUCRS",
    description: "Capacitação em desenvolvimento Java",
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
    value: "linkedin.com/in/cmiguelwm",
    copyValue: "https://www.linkedin.com/in/cmiguelwm/",
    href: "https://www.linkedin.com/in/cmiguelwm/",
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

import { Mail, Github, Linkedin, Globe } from "lucide-react";
import ArenaImg from "../assets/arena.png";
import LamborghiniImg from "../assets/lamborghini.png";
import CSImg from "../assets/cs.png";
import GameTrackerImg from "../assets/gametracker.png";
import CentralComprasImg from "../assets/centralcompras.png";

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
    title: "Central de Compras",
    description:
      "Plataforma B2B fullstack conectando lojas e fornecedores, com catálogo, pedidos, campanhas e três perfis de acesso (admin, fornecedor, loja). Auth via cookie HttpOnly + JWT sem token no localStorage, seed idempotente para manter a demo estável, proxy de API no Next.js para resolver cookie cross-site entre Vercel e Koyeb, e viewer de logs com buffer em memória e auto-refresh.",
    descriptionEn:
      "Fullstack B2B platform connecting stores and suppliers, with catalog, orders, campaigns and three access profiles (admin, supplier, store). Auth via HttpOnly cookie + JWT with no token in localStorage, idempotent seed for stable demo, Next.js API proxy to solve cross-site cookies between Vercel and Koyeb, and a custom log viewer with in-memory buffer and auto-refresh.",
    image: CentralComprasImg,
    technologies: ["Next.js", "Express", "TypeScript", "PostgreSQL", "Tailwind"],
    techColors: ["bg-gray-500/20 text-gray-300", "bg-red-600/20 text-red-400", "bg-blue-600/20 text-blue-400", "bg-blue-500/20 text-blue-400", "bg-teal-500/20 text-teal-400"],
    github: "https://github.com/ckzwebber/unesc-projeto-central-compras-frontend",
    demo: "https://central-compras.vercel.app",
    category: "fullstack",
  },
  {
    title: "Lista Smart Backend",
    description:
      "Backend NestJS de um sistema de recomendação personalizada para app mobile de lista de compras. Implementa cinco algoritmos de recomendação — categoria favorita com score híbrido, co-ocorrência entre produtos, sugestões por lista atual, trending global e restock por intervalo de categoria — sem banco de dados, tudo em memória via arrays TypeScript. Inclui um dashboard interativo em tempo real que exibe o pipeline de eventos, a matriz de co-ocorrência e os cinco algoritmos lado a lado para diferentes usuários, tornando a personalização visualmente demonstrável.",
    descriptionEn:
      "NestJS backend for a personalized recommendation system in a mobile grocery list app. Implements five recommendation algorithms — hybrid-score favorite category, product co-occurrence, current-list suggestions, global trending, and category-based restock — with no database, using in-memory TypeScript arrays. Ships with a real-time interactive dashboard showing the event pipeline, co-occurrence matrix, and all five algorithms live across multiple user contexts, making personalization visually demonstrable.",
    image: "https://opengraph.githubassets.com/0fe3580010802d4268393c76ff972196587e6cab642812eb39e5f9105270b060/ckzwebber/lista-smart-backend",
    technologies: ["NestJS", "TypeScript", "Node.js"],
    techColors: ["bg-red-600/20 text-red-400", "bg-blue-600/20 text-blue-400", "bg-green-500/20 text-green-400"],
    github: "https://github.com/ckzwebber/lista-smart-backend",
    demo: null,
    category: "backend",
  },
  {
    title: "CS2 Arena",
    description:
      "FPS multiplayer no browser inspirado no CS2, com modos 1v1 e 5v5 completos. Servidor autoritativo com validação de tiros via ray-AABB, client-side prediction, server reconciliation e entity interpolation a 64 ticks. Renderização 3D com Three.js (modelos procedurais, sem assets externos), sistema de granadas (smoke, flash, HE) com física de trajetória e efeitos visuais, sistema de bomba C4 com plant/defuse, faca com backstab detection, pistola, death cam, nicknames, sons procedurais via Web Audio API e rounds MR12. Deploy na Hetzner com Nginx, PM2 e pipeline CI/CD via GitHub Actions.",
    descriptionEn:
      "Browser-based multiplayer FPS inspired by CS2, featuring full 1v1 and 5v5 game modes. Authoritative server with ray-AABB hit validation, client-side prediction, server reconciliation and entity interpolation at 64 ticks. 3D rendering with Three.js (procedural models, zero external assets), grenade system (smoke, flash, HE) with trajectory physics and visual effects, C4 bomb system with plant/defuse, knife with backstab detection, pistol, death cam, nicknames, procedural audio via Web Audio API and MR12 rounds. Deployed on Hetzner with Nginx, PM2 and CI/CD pipeline via GitHub Actions.",
    image: CSImg,
    technologies: ["Three.js", "Socket.IO", "Node.js", "JavaScript"],
    techColors: ["bg-gray-500/20 text-gray-300", "bg-gray-500/20 text-gray-300", "bg-green-500/20 text-green-400", "bg-yellow-500/20 text-yellow-400"],
    github: null,
    demo: "https://cs.cakowebber.dev",
    category: "fullstack",
  },
  {
    title: "Arena",
    description:
      "Jogo multiplayer top-down PvP em tempo real. Cliente renderizado em Canvas 2D com prediction e reconciliação de estado. Servidor autoritativo em NestJS com game loop a 60fps, broadcast via Socket.IO e sistema de kill/death/respawn.",
    descriptionEn:
      "Real-time top-down PvP multiplayer game. Canvas 2D client with state prediction and reconciliation. Authoritative NestJS server running a 60fps game loop, Socket.IO broadcast and kill/death/respawn system.",
    image: ArenaImg,
    technologies: ["React", "TypeScript", "NestJS", "Socket.IO", "Canvas"],
    techColors: ["bg-cyan-500/20 text-cyan-400", "bg-blue-600/20 text-blue-400", "bg-red-600/20 text-red-400", "bg-gray-500/20 text-gray-300", "bg-purple-500/20 text-purple-400"],
    github: "https://github.com/ckzwebber/websocket-game-front",
    demo: "https://websocket-game-front.vercel.app/",
    category: "fullstack",
  },
  {
    title: "GameTracker",
    description: "Catálogo pessoal de jogos com design cinematic dark, motion com Framer Motion e imagens servidas direto da Steam CDN via appid. Dados em JSON tipado, filtros por status e ordenação por nota/horas.",
    descriptionEn: "Personal game catalog with cinematic dark design, Framer Motion animations and images served directly from Steam CDN via appid. Typed JSON data source, status filters and rating/hours sorting.",
    image: GameTrackerImg,
    technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    techColors: ["bg-cyan-500/20 text-cyan-400", "bg-blue-600/20 text-blue-400", "bg-teal-500/20 text-teal-400", "bg-pink-500/20 text-pink-400"],
    github: "https://github.com/ckzwebber/game-tracker",
    demo: "https://webbergametracker.netlify.app/",
    category: "frontend",
  },
  {
    title: "Day Tasks",
    description:
      "Micro-app que consulta tarefas no PostgreSQL e dispara e-mail diário às 05:00 via cron job. Template HTML com Handlebars, logging estruturado com Pino e stack de observabilidade Loki + Grafana via Docker Compose.",
    descriptionEn:
      "Micro-app that queries tasks from PostgreSQL and sends a daily email at 05:00 via cron job. HTML template with Handlebars, structured logging with Pino and Loki + Grafana observability stack via Docker Compose.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2340&auto=format&fit=crop",
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Docker"],
    techColors: ["bg-blue-600/20 text-blue-400", "bg-green-500/20 text-green-400", "bg-blue-500/20 text-blue-400", "bg-blue-400/20 text-blue-300"],
    github: "https://github.com/ckzwebber/day-tasks",
    demo: null,
    category: "backend",
  },
  {
    title: "Lamborghini Project",
    description: "Site não-oficial da Lamborghini com páginas de modelos, informações da marca e contato. Projeto de estudo com foco em componentização React e design responsivo.",
    descriptionEn: "Unofficial Lamborghini website with model pages, brand info and contact. Study project focused on React componentization and responsive design.",
    image: LamborghiniImg,
    technologies: ["React", "JavaScript", "CSS"],
    techColors: ["bg-cyan-500/20 text-cyan-400", "bg-yellow-500/20 text-yellow-400", "bg-blue-500/20 text-blue-400"],
    github: "https://github.com/ckzwebber/lamborghini-project",
    demo: "https://webberlamborghini.netlify.app/",
    category: "frontend",
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
    title: "Factorio AI Exporter",
    description:
      "Mod para Factorio 2.x em Lua que exporta o estado completo da fábrica em JSON estruturado + screenshots cobrindo toda a base. Varre todos os chunks explorados de forma assíncrona (5 chunks/tick via on_tick para evitar lag), coleta receitas, módulos, velocidades e bônus de produtividade por entidade, estatísticas de fluxo via LuaFlowStatistics em múltiplas janelas de tempo, e gera screenshots em grade com zoom adaptativo via take_screenshot. Output direto em script-output/ para colar em qualquer modelo de IA e receber análises contextualizadas de gargalos, layout e configuração de módulos.",
    descriptionEn:
      "Factorio 2.x Lua mod that exports the complete factory state as structured JSON + screenshots covering the entire base. Asynchronously scans all explored chunks (5 chunks/tick via on_tick to avoid lag), collects recipes, modules, speeds and productivity bonuses per entity, flow statistics via LuaFlowStatistics across multiple time windows, and generates grid screenshots with adaptive zoom via take_screenshot. Output goes directly to script-output/ to paste into any AI model for contextualized analysis of bottlenecks, layout and module configuration.",
    image: "https://i.ytimg.com/vi/BqaAjgpsoW8/maxresdefault.jpg",
    technologies: ["Lua", "Factorio API"],
    techColors: ["bg-blue-700/20 text-blue-300", "bg-yellow-600/20 text-yellow-400"],
    github: "https://github.com/ckzwebber/factorio-ai-exporter",
    demo: null,
    category: "tools",
  },
  {
    title: "Factorio Auto Sort",
    description:
      "Mod para Factorio em Lua que adiciona botão de ordenação automática ao abrir baús. Usa a API de eventos do jogo (on_gui_opened, on_gui_click, on_gui_closed) para gerenciar o ciclo de vida do botão e reordenar inventário.",
    descriptionEn:
      "Factorio mod written in Lua that adds an auto-sort button when opening chests. Uses the game's event API (on_gui_opened, on_gui_click, on_gui_closed) to manage button lifecycle and reorder inventory.",
    image: "https://i.ytimg.com/vi/BqaAjgpsoW8/maxresdefault.jpg",
    technologies: ["Lua", "Factorio API"],
    techColors: ["bg-blue-700/20 text-blue-300", "bg-yellow-600/20 text-yellow-400"],
    github: "https://github.com/ckzwebber/factorio-auto-sort-chest-mod",
    demo: null,
    category: "tools",
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
      "Atuação no HUB, plataforma interna de integrações que conecta ERP SAP a múltiplos marketplaces (Mercado Livre, Dafiti, Netshoes, Privalia), participando do system design e da arquitetura em AWS/EKS.",
      "Implementação de módulos de pedido e produto em NestJS/TypeScript, com RabbitMQ (topic exchange, retry e DLQ) para mensageria assíncrona e KEDA para autoscaling baseado em profundidade de fila.",
      "Desenvolvimento de pipeline de integração de imagens de produtos com foco em alto volume, otimização de complexidade algorítmica e processamento em lote.",
      "Depuração de fluxos críticos de pedido entre plataformas, incluindo resolução de desincronizações entre SAP e marketplaces e correção de filtragem indevida de cashback em pedidos de marketplace.",
    ],
    responsibilitiesEn: [
      "Core contributor to HUB, an internal integration platform connecting SAP ERP to multiple marketplaces (Mercado Livre, Dafiti, Netshoes, Privalia), participating in system design and AWS/EKS architecture.",
      "Built order and product modules in NestJS/TypeScript, with RabbitMQ (topic exchange, retry and DLQ) for async messaging and KEDA for queue-depth-based autoscaling.",
      "Developed a product image integration pipeline focused on high volume, algorithmic complexity optimization and batch processing.",
      "Debugged critical order flows across platforms, including SAP-marketplace desynchronization and incorrect cashback filtering on marketplace orders.",
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
      "Desenvolvimento individual de ponta a ponta de uma plataforma interna de avaliação de peças de roupa: frontend em React, backend em Node.js/Express com autenticação própria e banco MariaDB.",
      "Implementação de serviços de CRUD, controle de acesso e upload de imagens com AWS S3, em time ágil com ciclos de sprint quinzenais.",
    ],
    responsibilitiesEn: [
      "Solo end-to-end development of an internal clothing evaluation platform: React frontend, Node.js/Express backend with custom auth and MariaDB database.",
      "Built CRUD services, access control and image upload with AWS S3, working in an agile team with biweekly sprints.",
    ],
  },
  {
    position: "Desenvolvedor de Software",
    positionEn: "Software Developer",
    company: "Useall Software",
    companyEn: "Useall Software",
    period: "08/2024 - 09/2024",
    periodEn: "08/2024 - 09/2024",
    responsibilities: ["Desenvolvimento em C# e Python, implementando scripts de automação de processos administrativos internos."],
    responsibilitiesEn: ["Development in C# and Python, implementing automation scripts for internal administrative processes."],
  },
  {
    position: "Técnico de TI",
    positionEn: "IT Technician",
    company: "MDS Informática",
    companyEn: "MDS Informática",
    period: "02/2023 - 02/2024",
    periodEn: "02/2023 - 02/2024",
    responsibilities: ["Manutenção e configuração de sistemas, suporte a clientes corporativos e resolução de problemas técnicos."],
    responsibilitiesEn: ["System maintenance and configuration, corporate client support and technical troubleshooting."],
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

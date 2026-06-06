export const navLinks = [
  { href: "#sobre", label: "Empresa" },
  { href: "#competencias", label: "Serviços" },
  { href: "#profissionais", label: "Time" },
  { href: "#depoimentos", label: "Clientes" },
  { href: "#cta", label: "Contato" },
] as const;

export const heroStats = [
  { value: "+200", label: "Projetos Entregues" },
  { value: "98%", label: "Satisfação" },
  { value: "8", label: "Anos de Mercado" },
  { value: "40+", label: "Especialistas" },
] as const;

export const values = [
  {
    icon: "🚀",
    title: "Missão",
    description:
      "Levar empresas ao próximo nível com tecnologia de ponta e execução impecável.",
  },
  {
    icon: "🌐",
    title: "Visão",
    description:
      "Ser referência nacional em desenvolvimento de software e transformação digital.",
  },
  {
    icon: "💎",
    title: "Valores",
    description:
      "Transparência, excelência técnica, entrega ágil e parceria genuína com o cliente.",
  },
] as const;

export type Skill = { label: string; percentage: number };

export type Competency = {
  icon: string;
  title: string;
  description: string;
  skills: Skill[];
};

export const competencies: Competency[] = [
  {
    icon: "🖥️",
    title: "Desenvolvimento Web",
    description:
      "Sistemas web modernos, rápidos e escaláveis com as melhores tecnologias do mercado: React, Next.js, Node, Laravel e mais.",
    skills: [
      { label: "Front-end", percentage: 95 },
      { label: "Back-end", percentage: 92 },
    ],
  },
  {
    icon: "📱",
    title: "Apps Mobile",
    description:
      "Aplicativos nativos e híbridos para iOS e Android com UX centrada no usuário e performance nativa.",
    skills: [
      { label: "React Native", percentage: 90 },
      { label: "Flutter", percentage: 85 },
    ],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    description:
      "Infraestrutura em nuvem robusta com AWS, Azure e GCP. Pipelines CI/CD, containers Docker e Kubernetes.",
    skills: [
      { label: "AWS / Azure", percentage: 93 },
      { label: "DevOps", percentage: 88 },
    ],
  },
  {
    icon: "🤖",
    title: "Inteligência Artificial",
    description:
      "Automação inteligente, chatbots, análise preditiva e integração de modelos de linguagem em produtos reais.",
    skills: [
      { label: "Machine Learning", percentage: 87 },
      { label: "NLP / LLMs", percentage: 82 },
    ],
  },
  {
    icon: "🔒",
    title: "Cybersegurança",
    description:
      "Proteção de dados, auditorias de segurança, pentesting e conformidade com LGPD e normas internacionais.",
    skills: [
      { label: "Segurança", percentage: 91 },
      { label: "Conformidade", percentage: 94 },
    ],
  },
  {
    icon: "📊",
    title: "Business Intelligence",
    description:
      "Dashboards, data warehouses e pipelines de dados que transformam informação bruta em decisões estratégicas.",
    skills: [
      { label: "Análise de Dados", percentage: 89 },
      { label: "Visualização", percentage: 86 },
    ],
  },
];

export const teamMembers = [
  {
    avatar: "🧑‍💼",
    badge: "CEO & Fundador",
    name: "Rafael Orbita",
    role: "Chief Executive Officer",
    tags: ["Visão Estratégica", "Tech Leader", "Startups"],
  },
  {
    avatar: "👩‍💻",
    badge: "Tech Lead",
    name: "Ana Cavalcanti",
    role: "Lead Software Engineer",
    tags: ["React", "Node.js", "AWS"],
  },
  {
    avatar: "🧑‍🔬",
    badge: "Data Science",
    name: "Lucas Mendes",
    role: "AI & Data Scientist",
    tags: ["Machine Learning", "Python", "LLMs"],
  },
  {
    avatar: "👩‍🎨",
    badge: "Design Lead",
    name: "Carla Viana",
    role: "UX/UI Design Lead",
    tags: ["Figma", "UX Research", "Design Systems"],
  },
] as const;

export const testimonials = [
  {
    text: "A OrbitaTech transformou completamente a nossa plataforma digital. Em 4 meses, entregaram um sistema que nossa equipe interna levaria anos para concluir. Profissionalismo impecável.",
    initials: "MC",
    name: "Marcos Costa",
    company: "CEO — Fintera Soluções",
  },
  {
    text: "Contratamos a OrbitaTech para modernizar nossa infraestrutura em cloud. Resultado: 60% de redução nos custos de servidor e tempo de resposta 3x mais rápido. Recomendo sem reservas.",
    initials: "JS",
    name: "Juliana Souza",
    company: "CTO — LogiFlow Brasil",
  },
  {
    text: "O app que a OrbitaTech desenvolveu para nós foi premiado no setor. A equipe deles realmente entende de UX e entrega tecnologia que o usuário final ama usar. Parceiros para sempre.",
    initials: "PR",
    name: "Pedro Rocha",
    company: "Founder — HealthTrack App",
  },
] as const;

export const footerServices = [
  "Desenvolvimento Web",
  "Apps Mobile",
  "Cloud & DevOps",
  "Inteligência Artificial",
  "Cybersegurança",
] as const;

export const footerCompany = [
  "Sobre Nós",
  "Nosso Time",
  "Cases de Sucesso",
  "Blog Tech",
  "Carreiras",
] as const;

export const footerContact = [
  "contato@orbitatech.com.br",
  "(62) 9 9999-0000",
  "Goiânia — GO",
  "Suporte 24/7",
] as const;

export const socialLinks = ["in", "tw", "gh", "ig"] as const;

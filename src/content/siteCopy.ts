export const site = {
  nav: {
    logo: "LM Soft",
    links: [
      { href: "#servicos",    label: "Serviços" },
      { href: "#tecnologias", label: "Tecnologias" },
      { href: "#processo",    label: "Processo" },
      { href: "#sobre",       label: "Sobre" },
      { href: "#contato",     label: "Contato" },
    ],
    cta: { href: "#contato", label: "Falar com a gente" },
  },

  hero: {
    badge: "Disponível para novos projetos",
    headline: ["Construímos software", "que dura."],
    sub: "LM Soft projeta e desenvolve sistemas sob medida para empresas que exigem qualidade real — código limpo, arquitetura sólida e evolução contínua.",
    cta:          { label: "Falar com a gente", href: "#contato" },
    ctaSecondary: { label: "Ver o que fazemos", href: "#servicos" },
  },

  stats: [
    { value: "50+",  label: "Projetos entregues" },
    { value: "8+",   label: "Anos de mercado" },
    { value: "100%", label: "Código próprio" },
  ],

  services: {
    id:    "servicos",
    badge: "Serviços",
    title: "Tudo que você precisa para escalar com confiança",
    items: [
      {
        icon:  "code",
        title: "Software sob medida",
        desc:  "Sistemas desenhados do zero para o seu negócio. Sem templates, sem atalhos — só código que resolve o problema certo.",
      },
      {
        icon:  "puzzle",
        title: "Integrações & APIs",
        desc:  "Conectamos suas ferramentas, automatizamos fluxos e construímos APIs robustas que evoluem com o tempo.",
      },
      {
        icon:  "layers",
        title: "Arquitetura de sistemas",
        desc:  "Projetamos a base tecnológica ideal para o seu contexto — escalável, segura e sustentável a longo prazo.",
      },
      {
        icon:  "refresh",
        title: "Modernização de legado",
        desc:  "Transformamos sistemas antigos em plataformas modernas sem parar a operação nem descartar o conhecimento acumulado.",
      },
    ],
  },

  tech: {
    id:    "tecnologias",
    badge: "Tecnologias",
    title: "Stack moderno e comprovado em produção",
    groups: [
      { label: "Backend",       items: ["Node.js", "PHP", "Python"] },
      { label: "Infra & Cloud", items: ["AWS", "Docker", "Kubernetes"] },
      { label: "Dados",         items: ["PostgreSQL", "Redis", "Elasticsearch"] },
      { label: "Frontend",      items: ["React", "TypeScript", "Next.js"] },
    ],
  },

  process: {
    id:    "processo",
    badge: "Processo",
    title: "Da ideia ao ar, sem surpresas",
    steps: [
      {
        number: "01",
        title:  "Descoberta",
        desc:   "Entendemos o problema real antes de propor qualquer solução. Sem pular etapas.",
      },
      {
        number: "02",
        title:  "Arquitetura",
        desc:   "Projetamos a solução ideal: stack, fluxos de dados e estrutura do sistema.",
      },
      {
        number: "03",
        title:  "Desenvolvimento",
        desc:   "Construímos em ciclos curtos com entregas visíveis e alinhamento constante.",
      },
      {
        number: "04",
        title:  "Operação",
        desc:   "Entregamos em produção e mantemos o sistema evoluindo com o negócio.",
      },
    ],
  },

  faq: {
    id:    "faq",
    badge: "Dúvidas frequentes",
    title: "Perguntas frequentes",
    items: [
      {
        q: "Como funciona o processo de início de um projeto?",
        a: "Começamos com uma conversa para entender o seu negócio e o problema que precisa ser resolvido. A partir daí, fazemos uma proposta técnica com escopo, prazo e investimento antes de qualquer linha de código.",
      },
      {
        q: "Vocês atendem empresas de qualquer porte?",
        a: "Trabalhamos principalmente com empresas de médio porte que precisam de sistemas sob medida, mas atendemos desde startups em crescimento até operações maiores. O critério é o alinhamento com o projeto — não o tamanho da empresa.",
      },
      {
        q: "Qual é o prazo médio de entrega?",
        a: "Depende da complexidade. Projetos menores saem em 6 a 10 semanas. Sistemas mais robustos geralmente levam de 3 a 6 meses. Trabalhamos em ciclos curtos com entregas intermediárias para que o cliente acompanhe a evolução.",
      },
      {
        q: "O código desenvolvido fica com o cliente?",
        a: "Sempre. Todo o código produzido é propriedade do cliente, incluindo repositório, documentação técnica e infraestrutura. Sem lock-in, sem restrições.",
      },
      {
        q: "Vocês oferecem suporte após a entrega?",
        a: "Sim. Oferecemos planos de manutenção, suporte técnico e evolução contínua para os sistemas que desenvolvemos. A maioria dos nossos clientes trabalha conosco a longo prazo exatamente por isso.",
      },
    ],
  },

  about: {
    id:    "sobre",
    badge: "Sobre",
    title: "Uma software house feita para durar",
    paragraphs: [
      "A LM Soft é uma software house boutique — trabalhamos com poucos clientes por vez, com foco total em qualidade e relacionamento próximo.",
      "Acreditamos que bom software começa com entendimento profundo do negócio. Por isso, nos envolvemos de verdade com cada projeto, do diagnóstico à operação.",
      "Lamim & Martins LTDA. — com sede no Brasil, atendendo empresas que precisam de sistemas confiáveis e evolução contínua.",
    ],
    highlights: [
      "Atendimento direto, sem intermediários",
      "Código e documentação entregues ao cliente",
      "Poucos projetos simultâneos — foco total no seu",
    ],
  },

  contact: {
    id:    "contato",
    badge: "Contato",
    title: "Vamos conversar sobre o seu projeto?",
    sub:   "Preencha o formulário e entraremos em contato em até 1 dia útil.",
    fields: {
      name:    { label: "Nome",    placeholder: "Seu nome completo" },
      email:   { label: "E-mail", placeholder: "seu@email.com" },
      company: { label: "Empresa (opcional)", placeholder: "Nome da empresa" },
      message: { label: "Mensagem", placeholder: "Descreva brevemente seu projeto ou desafio..." },
    },
    submit:       "Enviar mensagem",
    submitting:   "Enviando...",
    successTitle: "Mensagem recebida!",
    successSub:   "Obrigado pelo contato. Retornaremos em até 1 dia útil.",
    errorMsg:     "Ocorreu um erro ao enviar. Tente novamente ou escreva para contato@lmsoft.com.br",
  },

  cta: {
    title: "Pronto para construir algo que dura?",
    sub:   "Conte seu desafio. A gente analisa e propõe o caminho certo.",
    cta:   { label: "contato@lmsoft.com.br", href: "mailto:contato@lmsoft.com.br" },
  },

  footer: {
    logo:    "LM Soft",
    tagline: "Software sob medida para empresas que exigem qualidade.",
    links: [
      { href: "#servicos",    label: "Serviços" },
      { href: "#tecnologias", label: "Tecnologias" },
      { href: "#processo",    label: "Processo" },
      { href: "#sobre",       label: "Sobre" },
      { href: "#contato",     label: "Contato" },
    ],
    email: "contato@lmsoft.com.br",
    copy:  "© 2026 LM Soft · Lamim & Martins LTDA.",
  },
} as const

export type SiteCopy = typeof site

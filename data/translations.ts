import { portfolioData as originalData } from "./portfolio";

export type PortfolioData = typeof originalData;

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      menu: "MENU",
      github_text: "htamagnus on github"
    },
    hero: {
      greeting: "Hello, I am",
      role_prefix: "I create",
      since_prefix: "Building digital experiences since",
      view_projects: "View Projects",
      contact_me: "Contact Me"
    },
    about: {
      title: "About Me",
      experience: "Experience",
      education: "Education",
      since: "Since",
      journey_title: "My Journey",
      journey_p1: "I started my journey in 2021 as a <strong>Full Stack Javascript Developer</strong>, building complete web applications across both front end and back end. since then, i've been deepening my skills and staying aligned with the latest trends in modern web development.",
      journey_p2: "Currently at <strong>Wake Creators (Squid)</strong>, i focus on creating scalable solutions for the creator economy. My background in Systems Analysis combined with practices like microservices and ci/cd helps me deliver stable, modern products with a strong focus on user experience."
    },
    skills: {
      title: "My Arsenal",
      subtitle: "Technologies & Tools",
      what_means_title: "Okay, but what does this mean?",
      what_means_text: "It means i <em>don’t just write code</em>. I build complete solutions, from <strong>scalable APIs</strong> that handle thousands of users to <strong>fast and intuitive interfaces</strong> that keep them engaged. I take technical complexity and turn it into simple, efficient and <strong>growth-ready products</strong>."
    },
    experience: {
      title: "XP",
      subtitle: "& Projects"
    },
    contact: {
      success_title: "Message Sent!",
      success_msg: "Thanks for reaching out. I'll get back to you soon!",
      send_another: "Send Another",
      title: "Let's Talk",
      subtitle: "Have a project in mind? Let's build something awesome together.",
      form: {
        name: "Name",
        name_placeholder: "YOUR NAME",
        email: "Email",
        email_placeholder: "YOUR@EMAIL.COM",
        message: "Message",
        message_placeholder: "TELL ME ABOUT YOUR PROJECT",
        submit: "Send Message",
        submitting: "Sending..."
      }
    },
    portfolio: originalData
  },
  pt: {
    nav: {
      about: "Sobre",
      skills: "Skills",
      experience: "Experiência",
      contact: "Contato",
      menu: "MENU",
      github_text: "htamagnus no github"
    },
    hero: {
      greeting: "Olá, eu sou",
      role_prefix: "Eu crio",
      since_prefix: "Construindo experiências digitais desde",
      view_projects: "Ver Projetos",
      contact_me: "Me contate"
    },
    about: {
      title: "Sobre Mim",
      experience: "Experiência",
      education: "Educação",
      since: "Desde",
      journey_title: "Minha Jornada",
      journey_p1: "Comecei minha jornada em 2021 como <strong>Desenvolvedora Full Stack JavaScript</strong>, criando aplicações completas no front-end e no back-end. Desde então, venho aprofundando minhas habilidades e acompanhando as inovações do ecossistema web.",
      journey_p2: "Atualmente na <strong>Wake Creators (Squid)</strong>, trabalho na construção de soluções escaláveis para o mercado de influência. A combinação da minha formação em Análise e Desenvolvimento de Sistemas com práticas como microsserviços e CI/CD me ajuda a entregar produtos estáveis, modernos e focados em uma boa experiência para quem usa nossa plataforma."
    },
    skills: {
      title: "Meu Arsenal",
      subtitle: "Tecnologias & Ferramentas",
      what_means_title: "Ok, mas o que isso significa?",
      what_means_text: "Significa que além de escrever código, eu crio <strong>soluções completas</strong>: desde <strong>APIs escaláveis</strong> que atendem milhares de usuários até <strong>interfaces rápidas</strong> e intuitivas que engajam de verdade. Eu pego complexidade técnica e transformo em produtos simples, eficientes e <strong>prontos para crescer</strong>."
    },
    experience: {
      title: "XP",
      subtitle: "& Projetos"
    },
    contact: {
      success_title: "Mensagem Enviada!",
      success_msg: "Obrigada pelo contato. Retornarei em breve!",
      send_another: "Enviar Outra",
      title: "Vamos Conversar",
      subtitle: "Tem um projeto em mente? Vamos construir algo incrível juntos.",
      form: {
        name: "Nome",
        name_placeholder: "SEU NOME",
        email: "Email",
        email_placeholder: "SEU@EMAIL.COM",
        message: "Mensagem",
        message_placeholder: "ME CONTE SOBRE SEU PROJETO",
        submit: "Enviar Mensagem",
        submitting: "Enviando..."
      }
    },
    portfolio: {
      ...originalData,
      role: "Desenvolvedora FullStack",
      description: "Especializada em construir backends robustos com NestJS e frontends dinâmicos com Next.js. Criando experiências digitais que unem performance e estética.",
      experience: [
        {
          company: "Wake Creators (Squid)",
          role: "Desenvolvedora Full Stack",
          period: "2023 - Atual",
          description: "Desenvolvendo novas funcionalidades para uma plataforma líder em marketing de influência. Focada em estabilidade do sistema, correções de bugs e otimização de performance.",
          stack: ["React", "NodeJS", "TypeScript", "AWS", "Cypress", "Angular", "NestJS", "Microservices", "Redis", "Firebase", "MySQL"],
        },
        {
          company: "Velox (Projeto Pessoal)",
          role: "Desenvolvedora Full Stack",
          period: "2025",
          description: "Desenvolvi um planejador de rotas de bike personalizado na AWS Free Tier. Integra com Strava para estimativas reais de tempo, dados de clima/trânsito em tempo real e perfis de elevação.",
          stack: ["Next.js", "NestJS", "PostgreSQL", "AWS", "Google Maps API", "Strava API"],
        },
        {
          company: "RPG Project (Voluntário)",
          role: "Líder de Equipe",
          period: "Anterior",
          description: "Liderei uma equipe para construir uma plataforma conectando jogadores de RPG. Gerenciei backlog, refinei tarefas e garanti a qualidade do código.",
          stack: ["React", "NodeJS", "Docker", "Prisma"],
        },
      ],
      education: {
        degree: "Análise e Desenvolvimento de Sistemas",
        status: "Graduada",
      },
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationType = typeof translations.en;

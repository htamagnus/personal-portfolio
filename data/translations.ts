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
      journey_p1: "I started my journey in 2021 and have been passionate about FullStack development ever since. With a strong foundation in Systems Analysis and Development, I've led teams and contributed to major platforms.",
      journey_p2: "Currently at <strong>Wake Creators</strong>, I focus on building scalable solutions for the creator economy."
    },
    skills: {
      title: "My Arsenal",
      subtitle: "Technologies & Tools"
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
      journey_p1: "Comecei minha jornada em 2021 e sou apaixonada por desenvolvimento FullStack desde então. Com uma base sólida em Análise e Desenvolvimento de Sistemas, liderei equipes e contribuí para grandes plataformas.",
      journey_p2: "Atualmente na <strong>Wake Creators</strong>, foco em construir soluções escaláveis para a economia de criadores."
    },
    skills: {
      title: "Meu Arsenal",
      subtitle: "Tecnologias & Ferramentas"
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
          stack: ["React", "NodeJS", "TypeScript"],
        },
        {
          company: "RPG Project (Voluntário)",
          role: "Líder de Equipe",
          period: "Anterior",
          description: "Liderei uma equipe para construir uma plataforma conectando jogadores de RPG. Gerenciei backlog, refinei tarefas e garanti a qualidade do código.",
          stack: ["React", "NodeJS"],
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

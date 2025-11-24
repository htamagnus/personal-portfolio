import { portfolioData as originalData } from "./portfolio";

export type PortfolioData = typeof originalData;

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
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
      subtitle: "& Projects",
      description: "Explore my professional journey and the projects that define my growth."
    },
    projects: {
      title: "Selected",
      subtitle: "Projects",
      description: "A collection of personal projects and freelance work that showcase my creativity and technical skills."
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
      projects: "Projetos",
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
      subtitle: "& Projetos",
      description: "Explore minha jornada profissional e os projetos que definem meu crescimento."
    },
    projects: {
      title: "Projetos",
      subtitle: "Selecionados",
      description: "Uma coleção de projetos pessoais e trabalhos freelance que demonstram minha criatividade e habilidades técnicas."
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
          company: "RPG Project (Voluntário)",
          role: "Líder de Equipe",
          period: "Anterior",
          description: "Liderei uma equipe para construir uma plataforma conectando jogadores de RPG. Gerenciei backlog, refinei tarefas e garanti a qualidade do código.",
          stack: ["React", "NodeJS", "Docker", "Prisma"],
        },
      ],
      projects: [
        {
          title: "Velox | WEB APP",
          role: "Desenvolvimento Full Stack",
          period: "2025",
          description: "Desenvolvi um planejador de rotas de bike personalizado na AWS Free Tier. O app integra com Strava para estimativas reais de tempo, dados de clima/trânsito em tempo real e perfis de elevação.",
          infoProject: "A diferença do velox é simples: ele calcula o tempo do percurso usando a sua velocidade média real, não em uma média genérica. Além disso, o velox gera a rota com mapa interativo e perfil de elevação, mostra o clima usando openweather, exibe o tráfego em tempo real, sugere rotas alternativas como a mais rápida, a com menos subidas ou a mais longa, calcula calorias com base no seu peso, idade e intensidade, mostra ganho e perda de elevação, oferece modos como mtb, speed e urbano e ainda guarda o histórico das suas rotas.",
          stack: ["Next.js", "NestJS", "PostgreSQL", "AWS", "Google Maps API", "Strava API"],
          links: [
            { label: "Demo", url: "https://main.d3mjxv9z617jt5.amplifyapp.com/", type: "website" },
            { label: "GitHub", url: "https://github.com/htamagnus/api-velox", type: "github" },
          ],
          thumbnail: "/projects/project-1/thumb-velox.png",
          gallery: {
            images: [
              "/projects/project-1/thumb-velox.png",
              "/projects/project-1/image-1.png",
            ],
            iphoneMocks: [
              "/projects/project-1/mock-iphone-4.png",
              "/projects/project-1/mock-iphone-5.png",
              "/projects/project-1/mock-iphone-1.png",
              "/projects/project-1/mock-iphone-2.png",
              "/projects/project-1/mock-iphone-3.png",
              "/projects/project-1/mock-iphone-6.png",
            ]
          }
        },
        {
          title: "Portfolio | Aquatic Ambience",
          role: "Desenvolvimento Frontend",
          period: "2025",
          description: "Portfólio construído para uma cliente, combinando a calmaria de ambientes aquáticos com um toque retrô dos anos 2000. Ele tem paisagens sonoras imersivas, animações suaves com framer-motion e vários easter eggs escondidos.",
          infoProject: "O site usa animações bem fluidas e transições leves que deixam a navegação mais natural. A estética lembra telas antigas, inspiradas em interfaces clássicas. Vários elementos reagem ao mouse ou ao scroll, criando microinterações que deixam a experiência mais viva. Detalhes como sons do windows antigo, efeitos de água e pequenas surpresas fazem o usuário querer explorar cada canto. Será que você consegue encontrar todos os <strong>easter eggs</strong> que eu construí?",
          stack: ["Next.js", "TailwindCSS", "Framer Motion"],
          links: [
            { label: "Demo", url: "https://visualcutes-portfolio.vercel.app/", type: "website" },
            { label: "GitHub", url: "#", type: "github" },
          ],
          thumbnail: "/projects/project-2/aquatic-thumb-2.png",
          gallery: {
            macMocks: [
              "/projects/project-2/mock-mac-1.png",
              "/projects/project-2/mock-mac-2.png",
              "/projects/project-2/mock-mac-3.png",
              "/projects/project-2/mock-mac-4.png",
              "/projects/project-2/mock-mac-5.png",
              "/projects/project-2/mock-mac-6.png",
              "/projects/project-2/mock-mac-7.png",
              "/projects/project-2/mock-mac-8.png",
            ]
          }
        }
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

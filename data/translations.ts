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
      journey_p2: "Currently at <strong>Squid Creators</strong>, i focus on creating scalable solutions for the creator economy. My background in Systems Analysis combined with practices like microservices and ci/cd helps me deliver stable, modern products with a strong focus on user experience."
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
      description: "Explore my professional journey and the projects that define my growth.",
      view_highlights: "View highlights",
      before: "Before",
      after: "After"
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
      journey_p2: "Atualmente na <strong>Squid Creators</strong>, trabalho na construção de soluções escaláveis para o mercado de influência. A combinação da minha formação em Análise e Desenvolvimento de Sistemas com práticas como microsserviços e CI/CD me ajuda a entregar produtos estáveis, modernos e focados em uma boa experiência para quem usa nossa plataforma."
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
      description: "Explore minha jornada profissional e os projetos que definem meu crescimento.",
      view_highlights: "Ver destaques",
      before: "Antes",
      after: "Depois"
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
          company: "Squid Creators",
          about: "Empresa de tecnologia que atua há mais de uma década em marketing de influência, conectando marcas a resultados reais por meio de dados, criatividade e uma comunidade de mais de 300 mil creators certificados.",
          website: "https://squid.com.br",
          role: "Desenvolvedora Full Stack",
          period: "2023 - Atual",
          description: "Construo e mantenho os microsserviços em Node.js + TypeScript de uma plataforma líder em marketing de influência: APIs REST, workers e jobs de ETL, com foco em estabilidade e performance.",
          stack: ["NodeJS", "TypeScript", "NestJS", "Hapi", "MongoDB", "MySQL", "PostgreSQL", "Redis", "Pub/Sub", "Kubernetes", "GCP", "Angular"],
          highlights: [
            {
              title: "Eu Quero: da POC à produção",
              tag: "Produto",
              headline: "Automação de DMs no Instagram, de ponta a ponta",
              summary: "Numa campanha com vários creators, a marca <strong>não conseguia medir quantas conversões vinham de cada um</strong>. O Eu Quero resolve isso automatizando o Instagram dos creators: quando um seguidor comenta a palavra-chave num post, ele responde em público e manda uma DM com o link rastreável daquele creator. Levei o produto de uma <mark>prova de conceito até produção</mark>.",
              flow: {
                label: "Como funciona",
                steps: ["Seguidor comenta a palavra-chave", "Webhook da Meta", "Acha a ativação do creator", "Resposta pública", "DM com link rastreável"],
              },
              points: [
                "Migrei a persistência de Prisma/SQLite para <strong>Drizzle + PostgreSQL</strong> e modelei o schema compartilhado entre o produto e o Portal, com enums nativos e sem delete em cascata.",
                "Integrei o Instagram pela plataforma da Meta: login com a conta que o creator já usa, webhook de comentários com validação de assinatura, e a resposta pública e a DM no mesmo fluxo.",
                "Fiz um <strong>estudo de capacidade</strong> com harness de carga (Graph API mockada, webhooks assinados em taxa fixa). Ele achou o teto real por pod, mostrou que o limite da Meta de 750 DMs por hora por creator chega antes da nossa infra, e pegou um índice faltando que deixava a dedup mais lenta a cada evento gravado.",
                "Montei a observabilidade: log estruturado, alertas por log, probes de liveness e readiness e shutdown sem perder o que está em processamento.",
                "Integrei com o nosso produto: 9 rotas, um ciclo de vida da ativação com 7 estados, trava de palavra-chave entre campanhas e desligamento automático quando a campanha encerra.",
              ],
              metrics: [
                { value: "~7 mil/min", label: "comentários por pod, em teste de carga" },
                { value: "221 → 0,05 ms", label: "consulta de dedup com o índice certo" },
              ],
              stack: ["Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Meta Graph API", "NestJS", "Kubernetes"],
            },
            {
              title: "Migração do bulk import de recrutamentos",
              tag: "Migração",
              headline: "-86,4% no tempo de resposta",
              summary: "Na minha primeira semana no novo time, assumi a migração de um microsserviço legado em Express.js, que gerava bugs com frequência, para TypeScript. A rota mais crítica era a de inserção de recrutamentos: ela podia receber <mark>até 10 mil de uma vez</mark>, mas o código legado tinha sido escrito para <strong>inserir um por vez</strong>.",
              points: [
                "Levantei as regras de negócio e os edge cases do código legado antes de reescrever, indo atrás de documentação para entender o que a migração podia quebrar.",
                "Troquei a inserção perfil por perfil por <strong>processamento em lotes</strong>.",
                "Adicionei <strong>cache</strong> para consultas que se repetiam durante a importação.",
                "Tirei a gravação de logs do caminho crítico: ela era síncrona e segurava a resposta.",
                "Ajustei o tratamento de erros: falhas pontuais davam <code>throw</code> e paravam a importação inteira, agora são registradas e o processo segue.",
              ],
              metrics: [
                { value: "-86,4%", label: "tempo de resposta" },
                { value: "6,6×", label: "mais rápido" },
              ],
              comparison: { label: "Tempo da requisição de bulk import", before: 35.5, after: 5.4, unit: "s" },
              stack: ["TypeScript", "NestJS", "MongoDB", "Redis"],
            },
            {
              title: "O gargalo dos 11 mil perfis",
              tag: "Performance",
              headline: "Importação 8,2× mais rápida, sem problemas de performance desde então",
              summary: "Com o volume crescendo, importações com mais de 10 mil perfis começaram a <mark>estourar o timeout</mark>. Em vez de chutar, fiz profiling do fluxo antes de mexer e corrigi em duas rodadas, medindo de novo depois de cada uma. Desde então, a feature não teve mais <strong>nenhum bug nem problema de performance</strong>.",
              points: [
                "Profiling com <strong>Clinic.js Doctor e Flame</strong>: picos de event loop delay de ~700 ms e duas funções dominando a execução, ambas esperando o banco.",
                "Diagnóstico: um <strong>N+1 disfarçado de paralelismo</strong>. Cerca de 22 mil operações individuais disparadas de uma vez disputavam o mesmo connection pool do MongoDB.",
                "Troquei por <code>bulkWrite</code> com <code>ordered: false</code> em chunks de 1.000.",
                "Logs de auditoria em fire-and-forget, com lotes em paralelo e <code>.catch()</code> explícito para nenhum erro se perder.",
                "No caminho, achei erros que um <code>Promise.allSettled</code> descartava em silêncio e passei a logar as falhas parciais do lote.",
              ],
              metrics: [
                { value: "8,2×", label: "mais rápido" },
                { value: "-87,8%", label: "tempo total" },
                { value: "~22,7 mil → ~37", label: "idas ao banco" },
              ],
              comparison: { label: "Importação completa de 11.338 perfis", before: 464, after: 56.6, unit: "s" },
              stack: ["Node.js", "MongoDB", "Clinic.js"],
            },
            {
              title: "Hardening de segurança após pentest",
              tag: "Segurança",
              headline: "13 falhas corrigidas em 7 serviços",
              summary: "Depois de um pentest externo, reforcei o <mark>isolamento de dados entre as empresas</mark> da plataforma em sete serviços.",
              points: [
                "Trabalhei em três classes do OWASP API Top 10: <strong>BOLA/IDOR</strong>, broken access control e broken function-level authorization.",
                "Coloquei a checagem de dono num guard compartilhado que roda <strong>antes</strong> da validação do payload, para que uma requisição negada nunca revele se o recurso existe nem devolva os dados dele.",
                "Toda escrita passou a registrar quem fez a alteração (<code>updatedBy</code>).",
                "Troquei um link de download que dependia da sessão de login por um token de curta duração preso a um único arquivo, para os links enviados por e-mail continuarem funcionando sem abrir a rota.",
                "Validei cada correção reproduzindo a prova de conceito do pentest antes e depois.",
              ],
              metrics: [
                { value: "13", label: "falhas corrigidas" },
                { value: "7", label: "serviços" },
              ],
              stack: ["Node.js", "NestJS", "Hapi", "JWT", "Angular"],
            },
            {
              title: "Pré-curadoria de conteúdo com IA",
              tag: "IA",
              headline: "Vídeos avaliados por IA antes de chegar à marca",
              summary: "Os vídeos dos creators eram conferidos manualmente contra o briefing. Com o volume crescendo, <mark>a revisão virou gargalo</mark>, o critério mudava de revisor para revisor e o creator só descobria o erro quando a marca reprovava, gerando retrabalho e atrasando a campanha. Construí o worker que avalia com IA cada vídeo antes de chegar à marca: ele confere cada requisito da campanha e devolve uma decisão com a justificativa por critério, então <strong>o creator sabe exatamente o que corrigir</strong>.",
              flow: {
                label: "Pipeline",
                steps: ["Vídeo transcodificado", "Pub/Sub", "Worker de IA", "LLM multimodal", "Score por critério"],
              },
              points: [
                "Worker orientado a eventos no <strong>Pub/Sub</strong>, com um job sweeper que republica avaliações presas há mais de 10 minutos, com deduplicação.",
                "Cada requisito da campanha virou um critério separado para o modelo, com resposta estruturada por critério.",
                "<strong>Reprovação determinística</strong> onde o modelo não deve decidir: vídeo sem áudio reprova nos critérios que dependem de fala sem chamar o modelo, inclusive arquivos com faixa de áudio muda, detectada pelo volume.",
                "Endureci os prompts depois de falsos positivos reais, como o modelo tendendo a aprovar critérios ambíguos.",
              ],
              metrics: [
                { value: "-60 dB", label: "abaixo disso, o áudio conta como mudo" },
                { value: "10 min", label: "até uma avaliação presa ser reenviada" },
              ],
              stack: ["NestJS", "LLM", "Pub/Sub", "PostgreSQL", "FFmpeg"],
            },
            {
              title: "Gerador de relatório de campanha",
              tag: "Refatoração",
              headline: "Foi para produção sem nenhum bug",
              summary: "A rota que monta a apresentação de resultados de uma campanha no Google Slides vivia num serviço legado em JavaScript, com magic numbers e parâmetros mortos, então <strong>qualquer mudança era arriscada</strong>. Ela decidia os slides pelo tipo da campanha, o que gerava seções vazias ou com dados que não se aplicavam, e dependia de outra API só para buscar as métricas. Migrei e refatorei a rota para TypeScript: um pipeline longo, passando por MongoDB, MySQL e três APIs do Google, que foi para produção <mark>sem nenhum bug</mark>.",
              flow: {
                label: "O que a rota faz",
                steps: ["Campanha (MongoDB)", "Métricas (MySQL)", "Copia template (Drive)", "Preenche slides (Slides)", "Gera gráficos (Sheets)", "Compartilha link"],
              },
              points: [
                "Mudei a regra de quais slides aparecem: em vez de depender do tipo da campanha, cada seção só fica quando existem <strong>dados reais</strong> para preencher.",
                "Passei a buscar as métricas direto no banco de BI, em vez de passar por outra API.",
                "Removi parâmetros legados que o front nunca enviava e troquei os <strong>magic numbers</strong> da remoção de slides e do cálculo de CTR por lógica com nomes claros.",
                "Adicionei erros personalizados para facilitar o debug, e testes unitários.",
              ],
              metrics: [
                { value: "0", label: "bugs após o deploy" },
                { value: "3", label: "APIs do Google orquestradas" },
                { value: "34", label: "arquivos refatorados" },
              ],
              stack: ["NestJS", "TypeScript", "Google APIs", "MongoDB", "MySQL"],
            },
            {
              title: "Mapa de microsserviços",
              tag: "Iniciativa",
              headline: "44 serviços e 111 conexões mapeados automaticamente",
              summary: "Os microsserviços da empresa cresceram ao longo dos anos e <strong>ninguém tinha uma visão clara de quem chama quem</strong>. Numa migração de autenticação entre serviços, mapear essas dependências exigia busca manual repo por repo, então, <mark>por iniciativa própria</mark>, criei uma ferramenta que faz esse mapa automaticamente.",
              points: [
                "Extrator com <strong>análise estática (ts-morph)</strong> que lê os clients HTTP de cada repositório e identifica origem, destino, método e path de cada chamada interna.",
                "<strong>Strategy Pattern</strong> para suportar tanto o client padrão do time quanto código legado que chama <code>got</code>, <code>axios</code> ou <code>fetch</code> direto.",
                "Normalização de paths (<code>/users/123</code> → <code>/users/:id</code>) para agrupar chamadas equivalentes.",
                "Grafo interativo para explorar qualquer serviço: quem chama ele e quem ele chama.",
              ],
              metrics: [
                { value: "44", label: "serviços" },
                { value: "111", label: "conexões" },
                { value: "474", label: "endpoints" },
              ],
              image: "/experience/microservices-map.webp",
              imageAlt: "Grafo interativo com um serviço no centro, os serviços que chamam ele à esquerda e os que ele chama à direita",
              imageCaption: "Nomes dos serviços borrados por confidencialidade.",
              stack: ["NestJS", "ts-morph", "PostgreSQL", "Next.js", "React Flow"],
            },
            {
              title: "Migração de autenticação M2M, e além do card",
              tag: "Segurança",
              headline: "JWT assinado entre serviços e uma dependência arriscada removida",
              summary: "Dentro da migração da empresa para uma nova autenticação entre serviços, migrei as chamadas internas de um serviço para JWT assinado, e fui <mark>além do escopo do card</mark> no caminho.",
              points: [
                "Implementei autenticação M2M com <strong>JWT assinado em RS256</strong>, substituindo o token estático antigo em todos os clients HTTP, e atualizei configmaps e secrets do Kubernetes em staging e produção.",
                "Percebi que o serviço dependia de uma <strong>rota interna deprecada e com problemas de segurança</strong>. Não fazia sentido colocar autenticação numa rota que ia ser removida, então passei a buscar esse dado direto no banco com Drizzle ORM.",
                "Removi o código legado da autenticação antiga.",
              ],
              metrics: [
                { value: "RS256", label: "tokens assinados entre serviços" },
                { value: "1", label: "dependência deprecada removida" },
              ],
              stack: ["Node.js", "Hapi", "JWT", "Drizzle ORM", "MySQL", "Kubernetes"],
            },
            {
              title: "A data que voltava um dia",
              tag: "Bug",
              headline: "D-1 → D, sem bugs de timezone desde então",
              summary: "O upload de conteúdo falhava quando a data escolhida era \"hoje\". O bug do back estava <mark>escondido atrás de um bug do front</mark>: o front quebrava antes, então a requisição nem chegava na API.",
              points: [
                "Corrigi o front primeiro: quando a data era hoje, ela era tratada como número em vez de <code>Date</code>, diferente do resto do fluxo.",
                "Com isso resolvido, apareceu o problema real do back: o conteúdo era criado, mas aparecia no board com um dia a menos.",
                "Pesquisei boas práticas de timezone e passei a ancorar datas sem horário ao <strong>meio-dia em vez da meia-noite</strong>. A meia-noite fica bem na virada do dia, então qualquer fuso negativo joga ela para o dia anterior; o meio-dia deixa 12 horas de margem para cada lado.",
              ],
              metrics: [
                { value: "D-1 → D", label: "data exibida no board" },
                { value: "±12h", label: "de margem até a data mudar" },
                { value: "0", label: "bugs de timezone desde então" },
              ],
              stack: ["Node.js", "Hapi", "Angular"],
            },
          ],
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

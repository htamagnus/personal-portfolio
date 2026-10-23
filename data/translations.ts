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
      after: "After",
      result: "Result"
    },
    projects: {
      title: "Selected",
      subtitle: "Projects",
      description: "A collection of personal projects and freelance work that showcase my creativity and technical skills.",
      view_details: "View details",
      more_on_github: "More projects on GitHub"
    },
    contact: {
      success_title: "Message Sent!",
      success_msg: "Thanks for reaching out. I'll get back to you soon!",
      send_another: "Send Another",
      title: "Let's Talk",
      subtitle: "Have a role or a project in mind? Let's build something awesome together.",
      direct: "Prefer to reach out directly?",
      form: {
        name: "Name",
        name_placeholder: "YOUR NAME",
        email: "Email",
        email_placeholder: "YOUR@EMAIL.COM",
        message: "Message",
        message_placeholder: "TELL ME ABOUT THE ROLE OR PROJECT",
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
      after: "Depois",
      result: "Resultado"
    },
    projects: {
      title: "Projetos",
      subtitle: "Selecionados",
      description: "Uma coleção de projetos pessoais e trabalhos freelance que demonstram minha criatividade e habilidades técnicas.",
      view_details: "Ver detalhes",
      more_on_github: "Mais projetos no GitHub"
    },
    contact: {
      success_title: "Mensagem Enviada!",
      success_msg: "Obrigada pelo contato. Retornarei em breve!",
      send_another: "Enviar Outra",
      title: "Vamos Conversar",
      subtitle: "Tem uma vaga ou um projeto em mente? Vamos construir algo incrível juntos.",
      direct: "Prefere ir direto?",
      form: {
        name: "Nome",
        name_placeholder: "SEU NOME",
        email: "Email",
        email_placeholder: "SEU@EMAIL.COM",
        message: "Mensagem",
        message_placeholder: "ME CONTE SOBRE A VAGA OU O PROJETO",
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
          description: "Construo e mantenho os <strong>microsserviços em Node.js + TypeScript</strong> de uma plataforma líder em marketing de influência: APIs REST, workers e jobs de ETL, com foco em estabilidade e performance. Também sou responsável pela <strong>primeira triagem de bugs do time</strong>: recebo o que chega do suporte, garanto que o card está claro, entendo o problema e delego a correção para a pessoa certa, dando mais agilidade e qualidade às correções.",
          stack: ["NodeJS", "TypeScript", "NestJS", "Hapi", "MongoDB", "MySQL", "PostgreSQL", "Redis", "Pub/Sub", "Kubernetes", "GCP", "Angular"],
          highlights: [
            {
              title: "Mapa de microsserviços",
              tag: "Iniciativa",
              headline: "44 serviços e 111 conexões mapeados automaticamente",
              summary: "Os microsserviços da empresa cresceram ao longo dos anos e <strong>ninguém tinha uma visão clara de quem chama quem</strong>. Sem esse mapa, mudar ou proteger uma rota significa descobrir na mão quem depende dela, e um chamador esquecido pode quebrar em produção. Então, <mark>por iniciativa própria</mark>, criei uma ferramenta que faz esse mapa automaticamente.",
              points: [
                "Extrator com <strong>análise estática (ts-morph)</strong> que lê os clients HTTP de cada repositório e identifica origem, destino, método e path de cada chamada interna.",
                "<a href=\"https://refactoring.guru/pt-br/design-patterns/strategy\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Strategy Pattern</strong></a> para suportar tanto o client padrão do time quanto código legado que chama <code>got</code>, <code>axios</code> ou <code>fetch</code> direto.",
                "Grafo interativo para explorar qualquer serviço: quem chama ele e quem ele chama.",
              ],
              result: "Com o mapa, todo o time de desenvolvimento passou a consultar rapidamente o impacto de uma correção ou mudança numa API. Isso agilizou o desenvolvimento e <strong>diminuiu muito o risco de mexer num código e, sem saber, gerar bug em outra API ou fluxo que dependia dele</strong>. O mapa também facilitou o planejamento de novas iniciativas e correções, melhorando a qualidade das entregas de todo o time.",
              image: "/experience/microservices-map.webp",
              imageAlt: "Grafo interativo com um serviço no centro, os serviços que chamam ele à esquerda e os que ele chama à direita",
              imageCaption: "Nomes dos serviços borrados por confidencialidade.",
              stack: ["NestJS", "ts-morph", "PostgreSQL", "Next.js", "React Flow"],
            },
            {
              title: "Pré-curadoria de conteúdo com IA",
              tag: "IA",
              headline: "Vídeos avaliados por IA antes de chegar à marca",
              summary: "Os vídeos dos creators eram conferidos manualmente contra o briefing. Com o volume crescendo, <mark>a revisão virou gargalo</mark>, o critério mudava de revisor para revisor e o creator só descobria o erro quando a marca reprovava, gerando retrabalho e atrasando a campanha. Construí o worker que avalia com IA cada vídeo antes de chegar à marca: ele confere cada requisito da campanha e devolve uma decisão com a justificativa por critério, então <strong>o creator sabe exatamente o que corrigir</strong>.",
              flow: {
                label: "Pipeline",
                steps: ["Vídeo transcodificado", "Pub/Sub", "Worker de IA", "LLM multimodal", "Resultado da avaliação"],
              },
              points: [
                "Cada requisito da campanha virou um critério separado para o modelo, com resposta estruturada por critério.",
                "<strong>Reprovação determinística</strong> onde o modelo não deve decidir. O áudio é um exemplo: vídeo sem áudio, ou com a faixa de áudio muda, reprova nos critérios que dependem de fala sem chamar o modelo. Os outros critérios de reprovação são definidos pelo usuário em cada campanha.",
                "Endureci os prompts depois de falsos positivos reais, como o modelo tendendo a aprovar critérios ambíguos.",
                "<strong>Tudo auditável</strong>: cada decisão da IA fica registrada no fluxo de aprovação com a justificativa por critério, o modelo usado, a versão da configuração da campanha e os tokens gastos.",
              ],
              metrics: [
                { value: "22 h → 19 s", label: "tempo mediano do envio à reprovação, curadoria manual → IA" },
                { value: "~7,5 mil", label: "tokens por avaliação, em média" },
                { value: "US$ 0,0035", label: "custo médio por avaliação" },
              ],
              stack: ["NestJS", "LLM", "Pub/Sub", "PostgreSQL", "FFmpeg"],
            },
            {
              title: "Eu Quero: da POC à produção",
              tag: "Produto",
              headline: "Automação de DMs no Instagram, de ponta a ponta",
              summary: "Numa campanha com vários creators, a marca <strong>não conseguia medir quantas conversões vinham de cada um</strong>. O Eu Quero resolve isso automatizando o Instagram dos creators: quando um seguidor comenta a palavra-chave num post, ele responde em público e manda uma DM com o link rastreável daquele creator. Levei o produto de uma <mark>prova de conceito até produção</mark>.",
              result: "O Eu Quero está em produção e <strong>a marca passou a saber quantas conversões vieram de cada creator</strong>. Também me preocupei em entender quanto a nossa infra aguentaria, e fiz testes de carga para medir isso.",
              points: [
                "Integrei o Instagram pela plataforma da Meta: o creator entra com a conta que já usa, o sistema recebe cada comentário na hora (e confere a assinatura para garantir que veio mesmo da Meta) e manda a resposta pública e a DM no mesmo fluxo.",
                "Fiz um <strong>teste de carga</strong> simulando a Meta para descobrir quanto o sistema aguenta: cada pod processa cerca de 7 mil comentários por minuto.",
                "Deixei o serviço pronto para produção: <strong>logs e alertas</strong> que avisam o time quando algo falha, <a href=\"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/\" target=\"_blank\" rel=\"noopener noreferrer\">health checks</a> para o Kubernetes reiniciar o serviço se ele travar e desligamento seguro, sem perder comentários no meio de um deploy.",
                "Conectei o Eu Quero ao nosso produto principal, para as ativações dos creators serem criadas e acompanhadas por lá.",
              ],
              stack: ["Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Meta Graph API", "NestJS", "Kubernetes"],
            },
            {
              title: "Migração da importação em massa de recrutamentos",
              tag: "Migração",
              headline: "-86,4% no tempo de resposta",
              summary: "Na minha primeira semana no novo time, assumi a migração de um microsserviço legado em Express.js, que gerava bugs com frequência, para TypeScript. A rota mais crítica era a de inserção de recrutamentos: ela podia receber <mark>até 10 mil perfis de creators de uma vez</mark>, mas o código legado tinha sido escrito para <strong>inserir um por vez</strong>.",
              points: [
                "Antes de reescrever, levantei as regras de negócio e os edge cases do código legado, lendo a documentação interna da empresa sobre esse serviço para entender o que a migração podia quebrar.",
                "Troquei a inserção perfil por perfil por <a href=\"https://www.mongodb.com/docs/manual/core/bulk-write-operations/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>processamento em lotes</strong></a>.",
                "Adicionei <strong>cache</strong> para consultas que se repetiam durante a importação.",
                "Tirei a gravação de logs do caminho crítico: ela era síncrona e segurava a resposta.",
                "Ajustei o tratamento de erros: falhas pontuais davam <code>throw</code> e paravam a importação inteira, agora são registradas e o processo segue.",
              ],
              metrics: [
                { value: "-86,4%", label: "tempo de resposta" },
                { value: "6,6×", label: "mais rápido" },
              ],
              comparison: { label: "Tempo de resposta da importação em massa de perfis de creators", before: 35.5, after: 5.4, unit: "s" },
              stack: ["TypeScript", "NestJS", "MongoDB", "Redis"],
            },
            {
              title: "O gargalo dos 11 mil perfis",
              tag: "Performance",
              headline: "Importação 8,2× mais rápida, sem problemas de performance desde então",
              summary: "Com o volume crescendo, importações com mais de 10 mil perfis começaram a <mark>estourar o timeout</mark>. Em vez de chutar, fiz profiling do fluxo antes de mexer e corrigi em duas rodadas, medindo de novo depois de cada uma. Desde então, a feature não teve mais <strong>nenhum bug nem problema de performance</strong>.",
              points: [
                "Profiling com <a href=\"https://clinicjs.org/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Clinic.js Doctor e Flame</strong></a>: picos de event loop delay de ~700 ms e duas funções dominando a execução, ambas esperando o banco.",
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
            // {
            //   title: "Hardening de segurança após pentest",
            //   tag: "Segurança",
            //   headline: "13 falhas corrigidas em 7 serviços",
            //   summary: "Depois de um pentest externo, reforcei o <mark>isolamento de dados entre as empresas</mark> da plataforma em sete serviços.",
            //   points: [
            //     "Trabalhei em três classes do OWASP API Top 10: <a href=\"https://api-security.owasp.org/editions/2023/en/0xa1-broken-object-level-authorization/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>BOLA/IDOR</strong></a>, broken access control e broken function-level authorization.",
            //     "Coloquei a checagem de dono num guard compartilhado que roda <strong>antes</strong> da validação do payload, para que uma requisição negada nunca revele se o recurso existe nem devolva os dados dele.",
            //     "Toda escrita passou a registrar quem fez a alteração (<code>updatedBy</code>).",
            //     "Troquei um link de download que dependia da sessão de login por um token de curta duração preso a um único arquivo, para os links enviados por e-mail continuarem funcionando sem abrir a rota.",
            //     "Validei cada correção reproduzindo a prova de conceito do pentest antes e depois.",
            //   ],
            //   metrics: [
            //     { value: "13", label: "falhas corrigidas" },
            //     { value: "7", label: "serviços" },
            //   ],
            //   stack: ["Node.js", "NestJS", "Hapi", "JWT", "Angular"],
            // },
            {
              title: "Gerador de relatório de campanha",
              tag: "Refatoração",
              headline: "Apresentação de resultados só com o que importa para cada campanha",
              summary: "A plataforma gera automaticamente, no Google Slides, a apresentação com os resultados de cada campanha para a marca. Ela escolhia os slides pelo tipo da campanha, então <strong>a apresentação muitas vezes saía com seções vazias ou com dados que não se aplicavam</strong>. O código vivia num serviço legado em JavaScript, com magic numbers e parâmetros que ninguém usava, e qualquer mudança era arriscada. Migrei e refatorei essa geração para <mark>TypeScript</mark>.",
              result: "A apresentação passou a sair <strong>só com as seções que têm dados daquela campanha</strong>, sem slides vazios ou fora de contexto. O código ficou mais fácil de entender e de mudar, e a nova versão foi para produção <strong>sem nenhum bug</strong>.",
              points: [
                "Mudei a regra de quais slides aparecem: em vez de depender do tipo da campanha, cada seção só fica quando existem <strong>dados reais</strong> para preencher.",
                "Passei a buscar as métricas direto no banco de BI, em vez de passar por outra API: uma dependência a menos para falhar.",              ],
              stack: ["NestJS", "TypeScript", "Google APIs", "MongoDB", "MySQL"],
            },
            // {
            //   title: "Migração de autenticação M2M, e além do card",
            //   tag: "Segurança",
            //   headline: "JWT assinado entre serviços e uma dependência arriscada removida",
            //   summary: "Token estático entre serviços é um risco clássico: ele não expira e, <strong>se vazar, continua valendo até alguém trocar na mão</strong>, o que exige atualizar a configuração de todos os serviços que usam ele. A empresa estava migrando a autenticação entre serviços para JWT assinado em RS256, em que só quem tem a chave privada consegue emitir um token válido e quem recebe confere a assinatura com a chave pública. Migrei as chamadas internas de um serviço e fui <mark>além do escopo do card</mark> no caminho.",
            //   points: [
            //     "Implementei autenticação M2M com <a href=\"https://www.jwt.io/introduction\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>JWT assinado em RS256</strong></a>, substituindo o token estático antigo em todos os clients HTTP, e atualizei configmaps e secrets do Kubernetes em staging e produção.",
            //     "Percebi que o serviço dependia de uma <strong>rota interna deprecada e com problemas de segurança</strong>. Não fazia sentido colocar autenticação numa rota que ia ser removida, então passei a buscar esse dado direto no banco com Drizzle ORM.",
            //     "Removi o código legado da autenticação antiga.",
            //   ],
            //   metrics: [
            //     { value: "RS256", label: "tokens assinados entre serviços" },
            //     { value: "1", label: "dependência deprecada removida" },
            //   ],
            //   stack: ["Node.js", "Hapi", "JWT", "Drizzle ORM", "MySQL", "Kubernetes"],
            // },
            {
              title: "O histórico que voltava vazio",
              tag: "Bug",
              headline: "Um bug que nasceu meses antes, em outro serviço",
              summary: "A aba de histórico do creator numa campanha aparecia vazia, mesmo com o perfil já tendo passado por várias etapas. O dado existia no banco, mas a busca não achava. Em microsserviços, esse tipo de bug é difícil de rastrear porque <strong>a causa não está no serviço que quebra</strong>: ela nasceu <mark>meses antes, em outro serviço</mark>.",
              result: "A aba de histórico voltou a mostrar todas as etapas do creator, <strong>inclusive os registros gravados nos meses em que o bug passou despercebido</strong>.",
              points: [
                "Dois serviços gravavam na mesma collection do MongoDB: um salvava o ID da empresa como <code>ObjectId</code> e o outro, desde uma mudança de meses antes, como <code>String</code>.",
                "Na leitura, o Mongoose fazia <a href=\"https://mongoosejs.com/docs/tutorials/query_casting.html\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>cast automático</strong></a> do valor da busca para <code>ObjectId</code>. Em BSON, tipos diferentes não casam, então os registros gravados como texto nunca apareciam.",
                "Na correção, o campo passou a <code>Mixed</code>, desligando o cast, e a busca procura pelos dois formatos com <code>$in</code>, cobrindo registros antigos e novos.",
              ],
              stack: ["Node.js", "Hapi", "GraphQL", "MongoDB", "Mongoose"],
            },
            {
              title: "A data que voltava um dia",
              tag: "Bug",
              headline: "D-1 → D, sem bugs de timezone desde então",
              summary: "O conteúdo enviado aparecia no board <mark>com um dia a menos</mark> do que a data escolhida. Bug de timezone é traiçoeiro: uma data como \"22/10\" não tem horário, mas o Date do JavaScript e o banco guardam um instante exato. Se front, back e banco não concordam na hora e no fuso usados nessa conversão, <strong>a mesma data vira dias diferentes</strong> dependendo de onde é lida. E como o erro só aparece em certos fusos e horários, ele costuma passar nos testes.",
              result: "O conteúdo passou a aparecer no board na data certa, e escrevi <strong>testes unitários e de integração com Cypress</strong> para o bug não voltar. Como esse tipo de bug pode aparecer em qualquer fluxo que lida com datas, <strong>escrevi uma documentação interna sobre timezone no JavaScript</strong> para o time, explicando por que a data muda de dia e como ancorar ao meio-dia evita isso.",
              points: [
                "Pesquisei boas práticas de timezone e passei a ancorar datas sem horário ao <strong>meio-dia em vez da meia-noite</strong>. A meia-noite fica bem na virada do dia, então qualquer fuso negativo joga ela para o dia anterior; o meio-dia deixa 12 horas de margem para cada lado.",
              ],
              stack: ["Node.js", "Hapi", "Angular", "Cypress"],
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

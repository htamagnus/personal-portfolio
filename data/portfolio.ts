export const portfolioData = {
  name: "Agatha Magnus",
  role: "FullStack Developer",
  since: "2021",
  description: "Specialized in building robust backends with NestJS and dynamic frontends with Next.js. Creating digital experiences that merge performance with aesthetics.",
  socials: {
    github: "https://github.com/htamagnus",
    linkedin: "https://linkedin.com/in/agathamagnus",
    email: "mailto:agathamagnus.dev@gmail.com",
  },
  skills: {
    languages: ["JavaScript", "TypeScript"],
    frontend: ["React", "Next.js", "Angular", "Tailwind CSS", "Framer Motion", "Sass"],
    backend: ["NodeJS", "NestJS", "Hapi", "Express.js", "Zod"],
    database: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Drizzle ORM", "Firebase", "Supabase"],
    devops: ["Docker", "Kubernetes", "GCP", "AWS", "GitHub Actions"],
    monitoring: ["Grafana", "Google Cloud Logging"],
    testing: ["Jest", "Cypress"],
    messaging: ["Google Pub/Sub", "BullMQ"],
    analytics: ["Google Analytics 4", "BigQuery"],
  },
  experience: [
    {
      company: "Wake Creators (Squid)",
      role: "Full Stack Developer",
      period: "2023 - Present",
      description: "Building and maintaining the Node.js + TypeScript microservices behind a leading influencer marketing platform: REST APIs, background workers and ETL jobs, with a focus on stability and performance.",
      stack: ["NodeJS", "TypeScript", "NestJS", "Hapi", "MongoDB", "MySQL", "PostgreSQL", "Redis", "Pub/Sub", "Kubernetes", "GCP", "Angular"],
    },
    {
      company: "RPG Project (Volunteer)",
      role: "Team Lead",
      period: "Previous",
      description: "Led a team to build a platform connecting RPG players. Managed backlog, refined tasks, and ensured code quality.",
      stack: ["React", "NodeJS", "Docker", "Prisma"],
    },
  ],
  projects: [
    {
      title: "Velox | WEB APP",
      role: "Full Stack Development",
      period: "2025",
      description: "Built a personalized bike route planner deployed on AWS Free Tier. Features Strava integration for realistic time estimates, real-time weather/traffic data, and elevation profiles.",
      infoProject: "The difference with velox is simple: it calculates your route time using <strong>your real average speed</strong>, not a generic estimate. It also builds the route with an interactive map and elevation profile, shows weather using openweather, displays real time traffic, suggests alternative routes like the fastest, the one with fewer climbs or the longer option, calculates calories based on your weight, age and intensity, shows elevation gain and loss, supports mtb, road and urban modes and keeps the history of your routes.",
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
      role: "Frontend Development",
      period: "2025",
      description: "Portfolio built for a client, blending the calm vibe of aquatic environments with a soft early-2000s retro touch. It features immersive soundscapes, smooth framer-motion animations and several hidden easter eggs.",
      infoProject: "The site uses fluid animations and gentle transitions that make navigation feel natural. The aesthetic echoes old screens inspired by classic interfaces. Many elements react to mouse movement or scrolling, creating microinteractions that make the experience feel more alive. Details like old windows sounds, water effects and small surprises encourage the user to explore every corner. Can you find all the <strong>easter eggs</strong> i hid in the site?",
      stack: ["Next.js", "TailwindCSS", "Framer Motion", "Typescript"],
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
    degree: "Systems Analysis and Development",
    status: "Graduated",
  },
};

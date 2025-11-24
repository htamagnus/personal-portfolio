export const portfolioData = {
  name: "Agatha Magnus",
  role: "FullStack Developer",
  since: "2021",
  description: "Specialized in building robust backends with NestJS and dynamic frontends with Next.js. Creating digital experiences that merge performance with aesthetics.",
  socials: {
    github: "https://github.com/agathamagnus",
    linkedin: "https://linkedin.com/in/agathamagnus",
    email: "mailto:agathamagnus.dev@gmail.com",
  },
  skills: {
    languages: ["JavaScript", "TypeScript"],
    frontend: ["React", "Next.js", "Vue.js", "Angular", "CSS", "Sass"],
    backend: ["NodeJS", "NestJS", "Express.js"],
    database: ["MongoDB", "MySQL", "Redis", "Firebase"],
    devops: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD"],
    monitoring: ["Grafana", "Google Cloud Logging"],
    testing: ["Jest", "Cypress"],
    messaging: ["Google Pub/Sub"],
    analytics: ["Google Analytics 4"],
  },
  experience: [
    {
      company: "Wake Creators (Squid)",
      role: "Full Stack Developer",
      period: "2023 - Present",
      description: "Developing new features for a leading influencer marketing platform. Focused on system stability, bug fixes, and performance optimization.",
      stack: ["React", "NodeJS", "TypeScript", "AWS", "Cypress", "Angular", "NestJS", "Microservices", "Redis", "Firebase", "MySQL"],
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
      stack: ["Next.js", "NestJS", "AWS", "Google Maps API", "Strava API"],
      links: [
        { label: "Demo", url: "https://main.d3mjxv9z617jt5.amplifyapp.com/", type: "website" },
        { label: "GitHub", url: "https://github.com/htamagnus/api-velox", type: "github" },
      ],
      thumbnail: "/projects/velox-thumb.png"
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
        { label: "GitHub", url: "#", type: "github" },
      ],
      thumbnail: "/projects/aquatic-thumb-2.png"
    }
  ],
  education: {
    degree: "Systems Analysis and Development",
    status: "Graduated",
  },
};

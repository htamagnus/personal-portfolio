import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const baseUrl = "https://agathamagnusdev-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${portfolioData.name} | ${portfolioData.role}`,
    template: `%s | ${portfolioData.name}`,
  },
  description: portfolioData.description,
  keywords: [
    "FullStack Developer",
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Node.js",
    "AWS",
    "MySQL",
    "Cypress",
    "Agatha Magnus",
    "Portfolio",
    ...portfolioData.skills.languages,
    ...portfolioData.skills.frontend,
    ...portfolioData.skills.backend,
  ],
  authors: [{ name: portfolioData.name, url: portfolioData.socials.github }],
  creator: portfolioData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: `${portfolioData.name} | ${portfolioData.role}`,
    description: portfolioData.description,
    siteName: portfolioData.name,
    images: [
      {
        url: "/picture-agathamagnus.jpg",
        width: 1200,
        height: 630,
        alt: portfolioData.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.name} | ${portfolioData.role}`,
    description: portfolioData.description,
    images: ["/picture-agathamagnus.jpg"],
    creator: "@agathamagnus", 
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.name,
    url: baseUrl,
    image: `${baseUrl}/picture-agathamagnus.jpg`,
    sameAs: [
      portfolioData.socials.github,
      portfolioData.socials.linkedin,
    ],
    jobTitle: portfolioData.role,
    worksFor: {
      "@type": "Organization",
      name: "Wake Creators (Squid)",
    },
    description: portfolioData.description,
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

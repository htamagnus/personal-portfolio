"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "github": return <Github className="w-5 h-5" />;
    case "linkedin": return <Linkedin className="w-5 h-5" />;
    case "email": return <Mail className="w-5 h-5" />;
    default: return null;
  }
};

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t-3 border-black dark:border-white bg-neon-yellow py-6 text-black">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-display font-bold uppercase flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <span>Agatha Magnus</span>
            <span className="hidden md:inline text-lg opacity-50">|</span>
            <span className="text-base md:text-lg font-mono">{t.portfolio.role}</span>
          </h2>
          <p className="font-mono text-xs mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          {Object.entries(t.portfolio.socials).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${key} profile`}
              className="flex items-center gap-2 text-sm md:text-base font-bold uppercase hover:underline decoration-black decoration-2 underline-offset-4 group"
            >
              {getIcon(key)}
              <span className="hidden sm:inline">{key}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b-3 border-black bg-background/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <div className="flex-shrink-0">
            <Link 
              href="https://github.com/htamagnus" 
              target="_blank"
              className="flex items-center gap-2 text-lg font-mono font-bold uppercase tracking-tighter hover:text-neon-pink transition-colors group"
            >
              <Github className="w-6 h-6" />
              <span>{t.nav.github_text}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-bold uppercase hover:text-neon-pink hover:underline decoration-4 decoration-neon-green underline-offset-4 transition-all"
                >
                  {item.name}
                </Link>
              ))}
              <LanguageSwitcher />
            </div>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button className="p-2 border-2 border-black dark:border-white font-bold uppercase">
              {t.nav.menu}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

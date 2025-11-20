"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useState, useEffect } from "react";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-[60] border-b-3 border-black bg-background/80 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            <div className="flex-shrink-0 z-[60]">
              <Link 
                href="https://github.com/htamagnus" 
                target="_blank"
                className="flex items-center gap-2 text-lg font-mono font-bold uppercase tracking-tighter hover:text-neon-pink transition-colors group"
              >
                <Github className="w-6 h-6" />
                <span className="hidden sm:inline">{t.nav.github_text}</span>
                <span className="sm:hidden">Github</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
            
            {/* Desktop Menu */}
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

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-4 z-[60]">
              <LanguageSwitcher />
              <button 
                onClick={toggleMenu}
                className="p-2 border-2 border-black bg-white hover:bg-neon-yellow transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[50] bg-[#FCEEE3] bg-grid-pattern pt-24 px-4 md:hidden flex flex-col overflow-y-auto h-screen"
          >
            <div className="flex flex-col gap-8 items-center mt-8 pb-20">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-4xl font-display font-black uppercase hover:text-neon-pink transition-colors py-4 border-b-2 border-black w-full bg-white border-x-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

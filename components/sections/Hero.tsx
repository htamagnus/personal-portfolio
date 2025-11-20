"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const MaskedReveal = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  return (
    <div className="overflow-hidden inline-block align-bottom">
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }}
        className={`inline-block ${className}`}
      >
        {text}
      </motion.span>
    </div>
  );
};

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full bg-grid-pattern">
      <Section className="min-h-screen flex flex-col justify-center items-start pt-24 md:pt-32 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full z-10 relative"
        >
          <h2 className="text-lg md:text-2xl font-mono mb-4 text-black-200">
            <strong>{t.hero.greeting}</strong>
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black uppercase tracking-tighter leading-none mb-6">
            <MaskedReveal text="Agatha" className="text-neon-blue" delay={0.1} />
            <br />
            <MaskedReveal text="Magnus" className="text-stroke animate-highlight px-8 -mx-8 py-2 -my-2" delay={0.2} />
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-xl md:max-w-2xl text-base md:text-xl font-mono mb-8 border-l-4 border-neon-pink pl-4"
          >
            <strong>{t.portfolio.role} </strong><br />
            <span className="text-gray-600 dark:text-gray-700">
              {t.hero.since_prefix} {t.portfolio.since}
            </span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button className="bg-neon-green w-full sm:w-auto" size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              {t.hero.view_projects}
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              {t.hero.contact_me}
            </Button>
          </motion.div>
        </motion.div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="relative w-[500px] h-[500px]">
            <div className="absolute inset-0 rounded-full border-4 border-black bg-neon-yellow/20 animate-spin-slow" style={{ animationDuration: "20s" }}></div>
            <div className="absolute inset-4 rounded-full border-4 border-black overflow-hidden bg-white">
              <Image 
                src="/picture-agathamagnus-3.jpg" 
                width={600}
                height={600}
                alt="Agatha Magnus" 
                className="w-full h-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                quality={90}
              />
            </div>
            
            <motion.svg
              viewBox="0 0 412 412"
              className="absolute -bottom-12 -right-12 w-50 h-50 z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <path 
                d="M206 136.3L291.3 0L255.3 156.7L412 120.7L275.7 206L412 291.3L255.3 255.3L291.3 412L206 275.7L120.7 412L156.7 255.3L0 291.3L136.3 206L0 120.7L156.7 156.7L120.7 0L206 136.3Z" 
                fill="var(--color-neon-yellow)"
                stroke="black"
                strokeWidth="8"
              />
            </motion.svg>
          </div>
        </div>
      </Section>
    </div>
  );
}

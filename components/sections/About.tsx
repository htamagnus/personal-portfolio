"use client";

import { Section } from "@/components/ui/Section";
import { BrowserWindow } from "@/components/ui/BrowserWindow";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about" className="bg-transparent scroll-mt-20 overflow-x-clip">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 mr-4 md:mb-0 md:mr-0" // Margin to prevent shadow clip on mobile if container is tight
        >
            <BrowserWindow className="h-full flex flex-col justify-center">
               <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-6">{t.about.title}</h2>
               <p className="text-base md:text-lg font-mono leading-relaxed mb-6">
                 {t.portfolio.description}
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="border-2 border-black dark:border-white p-4 bg-neon-yellow text-black">
                   <span className="block text-sm font-bold uppercase">{t.about.experience}</span>
                   <span className="text-2xl font-display font-bold">{t.about.since} {t.portfolio.since}</span>
                 </div>
                 <div className="border-2 border-black dark:border-white p-4 bg-neon-blue text-black">
                   <span className="block text-sm font-bold uppercase">{t.about.education}</span>
                   <span className="block text-xl font-display font-bold">{t.portfolio.education.degree}</span>
                   <span className="text-sm font-bold">{t.portfolio.education.institution} · {t.portfolio.education.status}</span>
                 </div>
                 <a
                   href={t.portfolio.certification.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="sm:col-span-2 border-2 border-black dark:border-white p-4 bg-neon-green text-black hover:bg-neon-pink transition-colors"
                 >
                   <span className="block text-sm font-bold uppercase">{t.about.certification}</span>
                   <span className="text-xl font-display font-bold">
                     {t.portfolio.certification.name} <ArrowUpRight className="inline w-5 h-5" aria-hidden />
                   </span>
                 </a>
               </div>
            </BrowserWindow>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-display font-bold uppercase border-b-4 border-neon-pink inline-block">
            {t.about.journey_title}
          </h3>
          <p 
            className="text-base md:text-lg text-gray-700 dark:text-gray-900"
            dangerouslySetInnerHTML={{ __html: t.about.journey_p1 }}
          ></p>
          <p 
            className="text-base md:text-lg text-gray-700 dark:text-gray-800"
            dangerouslySetInnerHTML={{ __html: t.about.journey_p2 }}
          ></p>
        </motion.div>
      </div>
    </Section>
  );
}

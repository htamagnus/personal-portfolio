"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Github, Globe, ArrowUpRight, Maximize2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExperienceModal, type Experience as ExperienceItem } from "@/components/ui/ExperienceModal";
import { useCallback } from "react";
import { useUrlParam } from "@/lib/useUrlParam";

const slug = (exp: ExperienceItem) => exp.company.toLowerCase().replace(/\W+/g, "-");

export function Experience() {
  const { t } = useLanguage();
  const [highlights, setHighlights] = useUrlParam("highlights");
  const selected = t.portfolio.experience.find((exp) => slug(exp) === highlights) ?? null;
  const setSelected = (exp: ExperienceItem) => setHighlights(slug(exp));
  const close = useCallback(() => setHighlights(null), [setHighlights]);

  return (
    <div className="w-full bg-grid-pattern">
      <Section id="experience" className="bg-transparent scroll-mt-20">
        <SectionHeader 
          title={
            <>
              {t.experience.title} <span className="text-neon-pink">{t.experience.subtitle}</span>
            </>
          }
          description={t.experience.description}
        />

        <div className="space-y-12 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-black -translate-x-1/2 hidden md:block"></div>

          {t.portfolio.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 w-full">
                <Card
                  className={`hover:bg-neon-yellow transition-colors duration-300 group ${exp.highlights ? "cursor-pointer" : ""}`}
                  role={exp.highlights ? "button" : undefined}
                  tabIndex={exp.highlights ? 0 : undefined}
                  onClick={exp.highlights ? () => setSelected(exp) : undefined}
                  onKeyDown={exp.highlights ? (e) => e.key === "Enter" && setSelected(exp) : undefined}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col items-start">
                      <h3 className="text-2xl font-display font-bold uppercase border-b-4 border-neon-pink inline-block mb-2">
                        {exp.company}
                      </h3>
                      <p className="font-mono text-sm font-bold text-gray-600 dark:text-gray-600 group-hover:text-black">
                        {exp.role}
                      </p>
                    </div>
                    <span className="bg-black text-white px-3 py-1 font-mono text-xs font-bold">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mb-6 font-sans">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-bold uppercase border border-black px-2 py-1 bg-neon-yellow text-black group-hover:bg-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.highlights && (
                    <div className="mt-6 inline-flex items-center gap-2 bg-neon-pink border-2 border-black px-3 py-2 font-mono text-xs font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                      <Maximize2 className="w-4 h-4" />
                      {t.experience.view_highlights}
                    </div>
                  )}
                </Card>
              </div>
              <div className="w-8 h-8 bg-neon-green border-4 border-black dark:border-white rounded-full z-10 hidden md:block"></div>
              
              <div className="flex-1 w-full hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </Section>

      <ExperienceModal experience={selected} onClose={close} />
    </div>
  );
}

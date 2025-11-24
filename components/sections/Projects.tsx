"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Github, Globe, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";
import { useState } from "react";
import { ProjectModal } from "@/components/ui/ProjectModal";

interface ProjectLink {
  label: string;
  url: string;
  type: string;
}

interface Project {
  title: string;
  role: string;
  period: string;
  infoProject: string;
  stack: string[];
  links: ProjectLink[];
  thumbnail?: string;
}

export function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="w-full bg-neon-green border-y-4 border-black">
      <Section id="projects" className="bg-transparent scroll-mt-20">
        <SectionHeader
          title={
            <>
              {t.projects.title} <span className="text-white">{t.projects.subtitle}</span>
            </>
          }
          description={t.projects.description}
          titleClassName="text-black"
          descriptionClassName="text-black font-bold"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.portfolio.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card 
                className="h-full flex flex-col hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 bg-white border-black cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                {project.thumbnail && (
                  <div className="w-full h-64 relative border-b-4 border-black mb-6 overflow-hidden">
                     <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-display font-bold uppercase border-b-4 border-neon-green inline-block mb-2 text-black group-hover:bg-neon-green transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-sm font-bold text-gray-600">
                      {project.role}
                    </p>
                  </div>
                  <span className="bg-black text-white px-3 py-1 font-mono text-xs font-bold">
                    {project.period}
                  </span>
                </div>
                
                <p className="mb-6 font-sans text-black flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-bold uppercase border border-black px-2 py-1 bg-neon-green text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.links.map((link, i) => (
                    <div
                      key={i}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link
                        href={link.url}
                        target="_blank"
                        className="flex items-center gap-2 text-xs font-bold uppercase border-2 border-black px-3 py-2 bg-black text-white hover:bg-white hover:text-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                      >
                        {link.type === "github" ? (
                          <Github className="w-4 h-4" />
                        ) : (
                          <Globe className="w-4 h-4" />
                        )}
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </div>
  );
}

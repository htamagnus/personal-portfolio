"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Globe, ArrowUpRight, Maximize2, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

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
  gallery?: {
    images?: string[];
    iphoneMocks?: string[];
    macMocks?: string[];
  };
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if (!project) return null;

  const projectImages = project.gallery?.images || [];
  const iphoneMocks = project.gallery?.iphoneMocks;
  const macMocks = project.gallery?.macMocks;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-[#FCEEE3] w-full lg:max-w-[1550px] max-h-[90vh] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col pointer-events-auto overflow-hidden">
              
              <div className="bg-neon-blue border-b-4 border-black p-2 flex justify-between items-center select-none">
                <div className="flex items-center gap-2 px-2">
                  <div className="w-3 h-3 bg-white border border-black rounded-full"></div>
                  <div className="w-3 h-3 bg-white border border-black rounded-full"></div>
                  <div className="w-3 h-3 bg-white border border-black rounded-full"></div>
                  <span className="font-mono font-bold text-sm ml-2 uppercase truncate max-w-[200px] md:max-w-none">
                    {project.title} - Explorer.exe
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-white/50 border border-transparent hover:border-black transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <button className="p-1 hover:bg-white/50 border border-transparent hover:border-black transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={onClose}
                    className="p-1 bg-red-500 hover:bg-red-600 text-white border border-black transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto p-6 md:p-8 bg-grid-pattern h-full">
                <div className="flex flex-col gap-8">
                  
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 border-b-2 border-black pb-6">
                    <div>
                      <h2 className="text-3xl md:text-5xl font-display font-black uppercase mb-2">
                        {project.title}
                      </h2>
                      <div className="flex flex-wrap gap-3 items-center">
                        <span className="font-mono font-bold text-neon-pink bg-black px-2 py-0.5">
                          {project.role}
                        </span>
                        <span className="font-mono font-bold text-black border border-black px-2 py-0.5">
                          {project.period}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {project.links.map((link, i) => (
                        <Link
                          key={i}
                          href={link.url}
                          target="_blank"
                          className="flex items-center gap-2 text-xs font-bold uppercase border-2 border-black px-3 py-2 bg-white text-black hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                        >
                          {link.type === "github" ? (
                            <Github className="w-4 h-4" />
                          ) : (
                            <Globe className="w-4 h-4" />
                          )}
                          {link.label}
                          <ArrowUpRight className="w-3 h-3 ml-1" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <div>
                        <h3 className="font-display font-bold text-xl uppercase mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-black"></span>
                          About Project
                        </h3>
                        <div 
                          className="font-mono text-lg leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: project.infoProject }} 
                        />
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <div className="bg-white border-2 border-black p-4 sticky top-0 mt-10">
                        <h3 className="font-display font-bold text-xl uppercase mb-4 border-b-2 border-black pb-2 ">
                          Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-bold uppercase border border-black px-2 py-1 bg-neon-yellow text-black"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-1">
                    <h3 className="font-display font-bold text-xl uppercase mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-black"></span>
                      Gallery
                    </h3>
                    
                    {projectImages.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {projectImages.map((img, idx) => (
                          <div key={idx} className="relative w-full h-60 md:h-120 border-2 border-black bg-gray-200 group overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <Image
                              src={img}
                              alt={`Project screenshot ${idx + 1}`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {iphoneMocks && iphoneMocks.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {iphoneMocks.map((img, idx) => (
                          <div key={idx} className="relative w-full aspect-[9/17]">
                            <Image
                              src={img}
                              alt={`iPhone mock ${idx + 1}`}
                              fill
                              className="object-contain"
                              style={{ filter: "drop-shadow(12px 8px 0px #000000)" }}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {macMocks && macMocks.length > 0 && (
                      <div className="grid grid-cols-1 gap-6">
                        {macMocks.map((img, idx) => (
                          <div key={idx} className="relative w-full aspect-[16/10]">
                            <Image
                              src={img}
                              alt={`MacBook mock ${idx + 1}`}
                              fill
                              className="object-contain"
                              style={{ filter: "drop-shadow(12px 8px 0px #000000)" }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </div>

              <div className="bg-[#FCEEE3] border-t-4 border-black p-1 px-4 flex justify-between items-center font-mono text-xs uppercase">
                <span>Status: Online</span>
                <span>{project.stack.length} Technologies Used</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

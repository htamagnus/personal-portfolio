"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Globe, ArrowUpRight, ArrowRight, Maximize2, Minus, Bike, Mountain, CloudSun, Route, Flame, History, Waves, Monitor, Volume2, MousePointer2, Sparkles, Egg, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { UnavailableLink } from "@/components/ui/UnavailableLink";

interface ProjectLink {
  label: string;
  url: string;
  type: string;
  unavailable?: string;
}

interface Project {
  title: string;
  role: string;
  period: string;
  infoProject: string;
  features?: { icon: string; title: string; text: string }[];
  result?: string;
  flow?: { label: string; steps: string[] };
  points?: string[];
  stack: string[];
  links: ProjectLink[];
  thumbnail?: string;
  gallery?: {
    images?: string[];
    iphoneMocks?: string[];
    macMocks?: string[];
  };
}

const featureIcons: Record<string, LucideIcon> = {
  bike: Bike,
  mountain: Mountain,
  "cloud-sun": CloudSun,
  route: Route,
  flame: Flame,
  history: History,
  waves: Waves,
  monitor: Monitor,
  "volume-2": Volume2,
  "mouse-pointer-2": MousePointer2,
  sparkles: Sparkles,
  egg: Egg,
};

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const { t } = useLanguage();

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

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src));
  };

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
            className="fixed inset-0 z-[80] flex items-center justify-center p-2 md:p-4 pointer-events-none"
          >
            <div className="bg-[#FCEEE3] w-full lg:max-w-[1550px] h-[92vh] md:max-h-[90vh] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col pointer-events-auto overflow-hidden">
              
              <div className="bg-neon-blue border-b-4 border-black p-2 md:p-2 flex justify-between items-center select-none">
                <div className="flex items-center gap-1 md:gap-2 px-1 md:px-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white border border-black rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white border border-black rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white border border-black rounded-full"></div>
                  <span className="font-mono font-bold text-xs md:text-sm ml-1 md:ml-2 uppercase truncate max-w-[120px] md:max-w-none">
                    {project.title} - Explorer.exe
                  </span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <button className="p-1 hover:bg-white/50 border border-transparent hover:border-black transition-colors hidden md:block">
                    <Minus className="w-4 h-4" />
                  </button>
                  <button className="p-1 hover:bg-white/50 border border-transparent hover:border-black transition-colors hidden md:block">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={onClose}
                    className="p-1.5 md:p-1 bg-red-500 hover:bg-red-600 text-white border-2 border-black transition-colors"
                  >
                    <X className="w-5 h-5 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto p-6 md:p-8 bg-grid-pattern h-full scrollbar-hide md:scrollbar-default">
                <div className="flex flex-col gap-8">
                  
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 border-b-2 border-black pb-6">
                    <div>
                      <h2 className="text-3xl md:text-5xl font-display font-black uppercase mb-2">
                        {project.title}
                      </h2>
                      <div className="flex flex-wrap gap-3 items-center">
                        <span className="font-mono font-bold text-black bg-neon-pink border border-black px-2 py-0.5">
                          {project.role}
                        </span>
                        <span className="font-mono font-bold text-black border border-black px-2 py-0.5">
                          {project.period}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {project.links.map((link, i) => link.unavailable ? (
                        <UnavailableLink key={i} label={link.label} reason={link.unavailable} />
                      ) : (
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

                  <div className="flex flex-col gap-6">
                    <p
                      className="marker font-mono text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: project.infoProject }}
                    />

                    {project.features && (
                      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                        {project.features.map((feature) => {
                          const Icon = featureIcons[feature.icon];
                          return (
                            <li key={feature.title} className="flex gap-3">
                              <span className="w-9 h-9 shrink-0 border-2 border-black bg-neon-yellow text-black flex items-center justify-center">
                                {Icon && <Icon className="w-5 h-5" aria-hidden />}
                              </span>
                              <div>
                                <span className="block font-display font-bold">{feature.title}</span>
                                <span className="block font-mono text-sm leading-snug">{feature.text}</span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    {project.result && (
                      <div className="border-2 border-black bg-neon-green p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-2">
                        <span className="font-mono text-sm font-black uppercase">{t.experience.result}</span>
                        <p
                          className="font-mono text-base md:text-lg leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: project.result }}
                        />
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-bold uppercase border border-black px-2 py-1 bg-neon-pink text-black"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-1">

                    {projectImages.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {projectImages.map((img, idx) => (
                          <div key={idx} className="relative w-full h-60 md:h-120 border-2 border-black bg-gray-200 group overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            {!loadedImages.has(img) && (
                              <div className="absolute inset-0 bg-gray-200 animate-pulse">
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
                              </div>
                            )}
                            <Image
                              src={img}
                              alt={`Project screenshot ${idx + 1}`}
                              fill
                              sizes="(max-width: 767px) 100vw, 50vw"
                              priority={idx < 2}
                              loading={idx < 2 ? "eager" : "lazy"}
                              className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                                loadedImages.has(img) ? "opacity-100" : "opacity-0"
                              }`}
                              onLoad={() => handleImageLoad(img)}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {(project.flow || project.points) && (
                      <div className="flex flex-col gap-6 mb-8">
                        {project.flow && (
                          <h3 className="font-display font-bold text-xl uppercase flex items-center gap-2">
                            <span className="w-2 h-2 bg-black"></span>
                            {project.flow.label}
                          </h3>
                        )}

                        {project.flow && (
                          <div className="border-2 border-black bg-[#FCEEE3] p-4">
                            <ol className="flex flex-wrap items-center gap-2">
                              {project.flow.steps.map((step, i) => (
                                <li key={step} className="flex items-center gap-2">
                                  {i > 0 && <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />}
                                  <span className="bg-white border-2 border-black px-2 py-1 font-mono text-xs md:text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                    {step}
                                  </span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        )}

                        {project.points && (
                          <ul className="flex flex-col gap-3">
                            {project.points.map((point) => (
                              <li key={point} className="flex gap-3 font-mono text-sm md:text-base leading-relaxed">
                                <span className="mt-2 w-2 h-2 bg-black shrink-0"></span>
                                <span dangerouslySetInnerHTML={{ __html: point }} />
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {iphoneMocks && iphoneMocks.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {iphoneMocks.map((img, idx) => (
                          <div key={idx} className="relative w-full aspect-[9/17]">
                            {!loadedImages.has(img) && (
                              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-3xl" />
                            )}
                            <Image
                              src={img}
                              alt={`iPhone mock ${idx + 1}`}
                              fill
                              sizes="(max-width: 767px) 100vw, 33vw"
                              priority={idx < 3}
                              loading={idx < 3 ? "eager" : "lazy"}
                              className={`object-contain transition-opacity duration-500 ${
                                loadedImages.has(img) ? "opacity-100" : "opacity-0"
                              }`}
                              style={{ filter: "drop-shadow(12px 8px 0px #000000)" }}
                              onLoad={() => handleImageLoad(img)}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {macMocks && macMocks.length > 0 && (
                      <div className="grid grid-cols-1 gap-6">
                        {macMocks.map((img, idx) => (
                          <div key={idx} className="relative w-full aspect-[16/12] md:aspect-[16/7] mb-1 md:mb-14">
                            {!loadedImages.has(img) && (
                              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl" />
                            )}
                            <Image
                              src={img}
                              alt={`MacBook mock ${idx + 1}`}
                              fill
                              sizes="100vw"
                              priority={idx === 0}
                              loading={idx === 0 ? "eager" : "lazy"}
                              className={`object-contain transition-opacity duration-500 ${
                                loadedImages.has(img) ? "opacity-100" : "opacity-0"
                              }`}
                              style={{ filter: "drop-shadow(12px 8px 0px #000000)" }}
                              onLoad={() => handleImageLoad(img)}
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
                <span>{project.stack.length} {t.projects.technologies_used}</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

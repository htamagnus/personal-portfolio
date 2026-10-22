"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationType } from "@/data/translations";

export type Experience = TranslationType["portfolio"]["experience"][number];
type Highlight = NonNullable<Experience["highlights"]>[number];

interface ExperienceModalProps {
  experience: Experience | null;
  onClose: () => void;
}

export function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  const isOpen = experience !== null;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollTarget = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add("overflow-hidden");
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {experience?.highlights && (
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
            <div
              role="dialog"
              aria-modal="true"
              aria-label={experience.company}
              className="bg-[#FCEEE3] w-full lg:max-w-[1200px] h-[92vh] md:max-h-[90vh] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col pointer-events-auto overflow-hidden"
            >
              <div className="bg-neon-pink border-b-4 border-black p-2 flex justify-between items-center select-none">
                <div className="flex items-center gap-1 md:gap-2 px-1 md:px-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white border border-black rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white border border-black rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white border border-black rounded-full"></div>
                  <span className="font-mono font-bold text-xs md:text-sm ml-1 md:ml-2 uppercase truncate max-w-[180px] md:max-w-none">
                    {experience.company} - Highlights.exe
                  </span>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="p-1.5 md:p-1 bg-red-500 hover:bg-red-600 text-white border-2 border-black transition-colors"
                >
                  <X className="w-5 h-5 md:w-4 md:h-4" />
                </button>
              </div>

              <div className="overflow-y-auto p-4 md:p-8 bg-grid-pattern h-full scrollbar-hide md:scrollbar-default">
                <div className="flex flex-col gap-10">
                  <div className="border-b-2 border-black pb-6">
                    <h2 className="text-3xl md:text-5xl font-display font-black uppercase mb-2">
                      {experience.company}
                    </h2>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="font-mono font-bold text-neon-pink bg-black px-2 py-0.5">
                        {experience.role}
                      </span>
                      <span className="font-mono font-bold text-black border border-black px-2 py-0.5">
                        {experience.period}
                      </span>
                    </div>
                    {experience.about && (
                      <p className="font-mono text-sm md:text-base leading-relaxed mt-4 max-w-3xl">
                        {experience.about}{" "}
                        {experience.website && (
                          <a
                            href={experience.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-bold underline decoration-2 decoration-neon-pink underline-offset-4 hover:bg-neon-yellow"
                          >
                            {new URL(experience.website).hostname}
                            <ArrowUpRight className="w-4 h-4" aria-hidden />
                          </a>
                        )}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-4">
                    {experience.highlights.map((highlight, index) => {
                      const open = openIndex === index;
                      return (
                        <article
                          key={highlight.title}
                          className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                        >
                          <h3>
                            <button
                              ref={(el) => { headerRefs.current[index] = el; }}
                              type="button"
                              aria-expanded={open}
                              aria-controls={`highlight-${index}`}
                              onClick={() => {
                                scrollTarget.current = open ? null : index;
                                setOpenIndex(open ? null : index);
                              }}
                              className={`w-full flex items-center gap-3 md:gap-4 p-4 md:p-5 text-left transition-colors ${open ? "bg-neon-yellow" : "hover:bg-neon-yellow"}`}
                            >
                              <span className="font-mono font-black text-lg md:text-2xl bg-neon-pink text-black border-2 border-black px-2 shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <span className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                <span className="font-display font-black uppercase text-base md:text-xl">
                                  {highlight.title}
                                </span>
                                <span className="self-start md:self-auto shrink-0 bg-neon-green border-2 border-black px-2 py-0.5 font-mono text-[10px] md:text-xs font-bold uppercase">
                                  {highlight.tag}
                                </span>
                              </span>
                              <ChevronDown
                                aria-hidden
                                className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                              />
                            </button>
                          </h3>

                          <AnimatePresence initial={false}>
                            {open && (
                              <motion.div
                                id={`highlight-${index}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onAnimationComplete={() => {
                                  if (scrollTarget.current !== index) return;
                                  scrollTarget.current = null;
                                  headerRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
                                }}
                                className="overflow-hidden"
                              >
                                <HighlightDetails highlight={highlight} />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function HighlightDetails({ highlight }: { highlight: Highlight }) {
  const { t, language } = useLanguage();
  const formatNumber = (n: number) => n.toLocaleString(language === "pt" ? "pt-BR" : "en-US");

  return (
    <div className="border-t-2 border-black p-5 md:p-8 flex flex-col gap-6">
      <p className="font-mono text-base md:text-lg leading-relaxed">{highlight.summary}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {highlight.metrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-neon-yellow border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="font-display font-black text-xl md:text-3xl">{metric.value}</div>
            <div className="font-mono text-xs font-bold uppercase">{metric.label}</div>
          </div>
        ))}
      </div>

      {highlight.comparison && (
        <div className="border-2 border-black bg-[#FCEEE3] p-4 flex flex-col gap-3">
          <span className="font-mono text-xs font-bold uppercase">{highlight.comparison.label}</span>
          {[
            { label: t.experience.before, value: highlight.comparison.before, color: "bg-neon-pink" },
            { label: t.experience.after, value: highlight.comparison.after, color: "bg-neon-green" },
          ].map((bar) => (
            <div key={bar.label} className="flex items-center gap-3">
              <span className="w-16 shrink-0 font-mono text-xs font-bold uppercase">{bar.label}</span>
              <div className="flex-1 flex items-center gap-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(bar.value / highlight.comparison!.before) * 80}%` }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`${bar.color} h-7 border-2 border-black`}
                />
                <span className="font-mono text-sm font-bold whitespace-nowrap">
                  {formatNumber(bar.value)} {highlight.comparison!.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {highlight.flow && (
        <div className="border-2 border-black bg-[#FCEEE3] p-4 flex flex-col gap-3">
          <span className="font-mono text-xs font-bold uppercase">{highlight.flow.label}</span>
          <ol className="flex flex-wrap items-center gap-2">
            {highlight.flow.steps.map((step, i) => (
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

      <ul className="flex flex-col gap-3">
        {highlight.points.map((point) => (
          <li key={point} className="flex gap-3 font-mono text-sm md:text-base leading-relaxed">
            <span className="mt-2 w-2 h-2 bg-black shrink-0"></span>
            <span
              className="[&_code]:bg-neon-yellow [&_code]:border [&_code]:border-black [&_code]:px-1 [&_code]:text-sm"
              dangerouslySetInnerHTML={{ __html: point }}
            />
          </li>
        ))}
      </ul>

      {highlight.image && (
        <figure className="flex flex-col gap-2">
          <div className="border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <Image
              src={highlight.image}
              alt={highlight.imageAlt ?? ""}
              width={2001}
              height={990}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="font-mono text-xs">{highlight.imageCaption}</figcaption>
        </figure>
      )}

      <div className="flex flex-wrap gap-2">
        {highlight.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-bold uppercase border border-black px-2 py-1 bg-neon-yellow text-black"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

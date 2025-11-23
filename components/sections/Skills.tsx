"use client";

import { Section } from "@/components/ui/Section";
import { Marquee } from "@/components/ui/Marquee";
import { useLanguage } from "@/context/LanguageContext";
import { BrutalistIcon } from "@/components/ui/BrutalistIcon";

export function Skills() {
  const { t } = useLanguage();
  const allSkills = [
    ...t.portfolio.skills.languages,
    ...t.portfolio.skills.frontend,
    ...t.portfolio.skills.backend,
    ...t.portfolio.skills.database,
    ...t.portfolio.skills.devops,
  ];

  return (
    <div id="skills" className="w-full bg-neon-pink border-y-4 border-black py-14 overflow-hidden scroll-mt-20">
      <Section className="bg-transparent py-0 md:py-0">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-black mb-4">
            {t.skills.title}
          </h2>
          <p className="text-black font-mono font-bold text-xl">{t.skills.subtitle}</p>
        </div>
      </Section>

      <div className="w-full">
        <Marquee className="bg-black text-white py-0.5 md:py-2 border-y-2 md:border-y-4 border-white rotate-1 mb-4 md:mb-8 w-[110%] -ml-[5%]" speed="slow">
          {allSkills.map((skill, index) => (
            <span key={index} className="mx-4 md:mx-8 text-lg md:text-4xl font-display font-bold uppercase">
              {skill} <span className="text-neon-green mx-2 md:mx-4">•</span>
            </span>
          ))}
        </Marquee>

        <Marquee className="bg-white text-black py-0.5 md:py-2 border-y-2 md:border-y-4 border-black -rotate-1 w-[110%] -ml-[5%]" direction="right" speed="slow">
          {allSkills.reverse().map((skill, index) => (
            <span key={index} className="mx-4 md:mx-8 text-lg md:text-4xl font-display font-bold uppercase">
              {skill} <span className="text-neon-pink mx-2 md:mx-4">•</span>
            </span>
          ))}
        </Marquee>
      </div>
      
      <Section className="bg-transparent py-0 md:py-0 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(t.portfolio.skills).map(([category, skills]) => (
             <div key={category} className="bg-white border-3 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
               <h3 className="text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">{category}</h3>
               <div className="flex flex-wrap gap-2">
                 {skills.map((skill) => (
                   <span key={skill} className="bg-gray-200 px-3 py-1 text-sm font-mono font-bold border border-black">
                     {skill}
                   </span>
                 ))}
               </div>
             </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 md:mt-0 relative">
          {/* <div className="absolute -top-12 -right-12 hidden md:block z-0 pointer-events-none">
            <BrutalistIcon 
               icon="shield" 
               className="w-40 h-40 text-white" 
               customFill="black"
               customStroke="black"
               customStrokeWidth={4}
            />
          </div> */}
          <div className="bg-neon-blue border-3 border-black p-6 pt-10 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10">
             <div className="absolute -top-5 left-1/2 -translate-x-1/2 md:left-auto md:-left-6 md:translate-x-0 md:-top-6 bg-black text-white px-3 py-2 md:px-4 md:py-2 font-display font-bold uppercase text-sm md:text-xl border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transform -rotate-2 w-max max-w-[90%] text-center whitespace-normal">
                {t.skills.what_means_title}
             </div>
             <p 
              className="font-mono text-base md:text-xl leading-relaxed mt-2 md:mt-4 text-justify md:text-left"
              dangerouslySetInnerHTML={{ __html: t.skills.what_means_text }}
             ></p>
          </div>
        </div>
      </Section>
    </div>
  );
}

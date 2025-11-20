"use client";

import { Section } from "@/components/ui/Section";
import { Marquee } from "@/components/ui/Marquee";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  const allSkills = [
    ...portfolioData.skills.languages,
    ...portfolioData.skills.frontend,
    ...portfolioData.skills.backend,
    ...portfolioData.skills.database,
    ...portfolioData.skills.devops,
  ];

  return (
    <div className="w-full bg-neon-pink border-y-4 border-black py-24 overflow-hidden">
      <Section id="skills" className="bg-transparent py-0 md:py-0">
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase text-black mb-4">
            My Arsenal
          </h2>
          <p className="text-black font-mono font-bold text-xl">Technologies & Tools</p>
        </div>
      </Section>

      <div className="w-full">
        <Marquee className="bg-black text-white py-6 border-y-4 border-white rotate-1 mb-8 w-full" speed="slow">
          {allSkills.map((skill, index) => (
            <span key={index} className="mx-8 text-2xl md:text-4xl font-display font-bold uppercase">
              {skill} <span className="text-neon-green mx-4">•</span>
            </span>
          ))}
        </Marquee>

        <Marquee className="bg-white text-black py-6 border-y-4 border-black -rotate-1 w-full" direction="right" speed="slow">
          {allSkills.reverse().map((skill, index) => (
            <span key={index} className="mx-8 text-2xl md:text-4xl font-display font-bold uppercase">
              {skill} <span className="text-neon-pink mx-4">•</span>
            </span>
          ))}
        </Marquee>
      </div>
      
      <Section className="bg-transparent py-0 md:py-0 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
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
      </Section>
    </div>
  );
}

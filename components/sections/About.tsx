"use client";

import { Section } from "@/components/ui/Section";
import { BrowserWindow } from "@/components/ui/BrowserWindow";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about" className="bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
            <BrowserWindow className="h-full flex flex-col justify-center">
               <h2 className="text-4xl font-display font-bold uppercase mb-6">About Me</h2>
               <p className="text-lg font-mono leading-relaxed mb-6">
                 {portfolioData.description}
               </p>
               <div className="grid grid-cols-2 gap-4">
                 <div className="border-2 border-black dark:border-white p-4 bg-neon-yellow text-black">
                   <span className="block text-sm font-bold uppercase">Experience</span>
                   <span className="text-2xl font-display font-bold">Since {portfolioData.since}</span>
                 </div>
                 <div className="border-2 border-black dark:border-white p-4 bg-neon-blue text-black">
                   <span className="block text-sm font-bold uppercase">Education</span>
                   <span className="text-xl font-display font-bold">{portfolioData.education.status}</span>
                 </div>
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
            My Journey
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-900">
            I started my journey in 2021 and have been passionate about FullStack development ever since. 
            With a strong foundation in Systems Analysis and Development, I've led teams and contributed to major platforms.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-800">
            Currently at <strong>Wake Creators</strong>, I focus on building scalable solutions for the creator economy.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

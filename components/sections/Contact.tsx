"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useForm, ValidationError } from "@formspree/react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Linkedin, Mail } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const directLink = "inline-flex items-center justify-center gap-2 border-2 border-black px-5 py-3 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-[translate,box-shadow]";

const pop: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -8 },
  shown: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 14 } },
};

export function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || '');
  const { t } = useLanguage();

  if (state.succeeded) {
    return (
      <div className="w-full bg-neon-blue border-t-4 border-black">
        <Section id="contact" className="bg-transparent scroll-mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 2.5, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="text-4xl md:text-7xl font-display font-black uppercase text-black mb-8"
            >
              {t.contact.success_title}
            </motion.h2>
            <p className="text-lg md:text-xl font-mono font-bold mb-12 text-black">
              {t.contact.success_msg}
            </p>
            <Button onClick={() => window.location.reload()} size="lg">
              {t.contact.send_another}
            </Button>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="w-full bg-neon-blue border-t-4 border-black">
      <Section id="contact" className="bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            title={t.contact.title}
            subtitle={t.contact.subtitle}
            titleClassName="text-black"
            subtitleClassName="text-lg md:text-xl"
          />

          <motion.div
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: { opacity: 0, scale: 1.15, rotate: 4, y: -40 },
              shown: { opacity: 1, scale: 1, rotate: 0, y: 0, transition: { type: "spring", stiffness: 260, damping: 16 } },
            }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-white text-left">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold uppercase mb-2">{t.contact.form.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:bg-neon-yellow focus:-translate-x-[2px] focus:-translate-y-[2px] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                    placeholder={t.contact.form.name_placeholder}
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase mb-2">{t.contact.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:bg-neon-yellow focus:-translate-x-[2px] focus:-translate-y-[2px] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                    placeholder={t.contact.form.email_placeholder}
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold uppercase mb-2">{t.contact.form.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:bg-neon-yellow focus:-translate-x-[2px] focus:-translate-y-[2px] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                    placeholder={t.contact.form.message_placeholder}
                    required
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={state.submitting}>
                  {state.submitting ? t.contact.form.submitting : t.contact.form.submit}
                </Button>
              </form>
            </Card>
          </motion.div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="font-mono font-bold text-lg text-black">{t.contact.direct}</p>
            <motion.div
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true, amount: 0.8 }}
              variants={{ shown: { transition: { staggerChildren: 0.15 } } }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.a
                variants={pop}
                href={t.portfolio.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${directLink} bg-neon-yellow uppercase tracking-wider`}
              >
                <Linkedin className="w-5 h-5 shrink-0" />
                LinkedIn
              </motion.a>
              <motion.a variants={pop} href={t.portfolio.socials.email} className={`${directLink} bg-neon-green break-all`}>
                <Mail className="w-5 h-5 shrink-0" />
                {t.portfolio.socials.email.replace("mailto:", "")}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}

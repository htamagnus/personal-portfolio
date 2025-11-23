"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useForm, ValidationError } from "@formspree/react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || '');
  const { t } = useLanguage();

  if (state.succeeded) {
    return (
      <div className="w-full bg-neon-blue border-t-4 border-black">
        <Section id="contact" className="bg-transparent scroll-mt-20">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-4xl md:text-7xl font-display font-black uppercase text-black mb-8">
              {t.contact.success_title}
            </h2>
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

          <Card className="bg-white text-left max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase mb-2">{t.contact.form.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:bg-neon-yellow transition-colors"
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
                  className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:bg-neon-yellow transition-colors"
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
                  className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:bg-neon-yellow transition-colors"
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
        </div>
      </Section>
    </div>
  );
}

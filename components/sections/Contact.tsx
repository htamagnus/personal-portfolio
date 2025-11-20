"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || '');

  if (state.succeeded) {
    return (
      <div className="w-full bg-neon-blue border-t-4 border-black">
        <Section id="contact" className="bg-transparent">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-5xl md:text-7xl font-display font-black uppercase text-black mb-8">
              Message Sent!
            </h2>
            <p className="text-xl font-mono font-bold mb-12 text-black">
              Thanks for reaching out. I'll get back to you soon!
            </p>
            <Button onClick={() => window.location.reload()} size="lg">
              Send Another
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
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase text-black mb-8">
            Let's Talk
          </h2>
          <p className="text-xl font-mono font-bold mb-12 text-black">
            Have a project in mind? Let's build something awesome together.
          </p>

          <Card className="bg-white text-left max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:bg-neon-yellow transition-colors"
                  placeholder="YOUR NAME"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold uppercase mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:bg-neon-yellow transition-colors"
                  placeholder="YOUR@EMAIL.COM"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border-2 border-black p-3 font-mono focus:outline-none focus:bg-neon-yellow transition-colors"
                  placeholder="TELL ME ABOUT YOUR PROJECT"
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </Section>
    </div>
  );
}

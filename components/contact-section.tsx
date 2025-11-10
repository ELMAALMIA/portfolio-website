"use client";

import { hero } from "@/lib/data";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MailIcon, Send, Sparkle } from "lucide-react";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const { register, handleSubmit, reset } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    const subject = encodeURIComponent("Portfolio — New message");
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`);
    window.open(`mailto:${hero.contact.email}?subject=${subject}&body=${body}`, "_blank");
    reset();
  };

  return (
    <section id="contact" className="mx-auto my-24 w-full max-w-4xl px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="gradient-border rounded-3xl p-[1px]"
      >
        <div className="glass rounded-[calc(theme(borderRadius.3xl)-4px)] p-8 md:p-10">
          <header className="flex flex-col gap-2 text-center">
            <span className="mx-auto flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-slate-300">
              <MailIcon className="h-5 w-5 text-primary" /> Let’s build together
            </span>
            <h2 className="font-heading text-3xl text-white md:text-4xl">Ready to activate your roadmap</h2>
            <p className="text-slate-300">
              Need to automate an OCI workflow, embed AI into Salesforce, or scale a Java platform? Let’s outline the plan and make
              it shippable.
            </p>
          </header>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Name</span>
              <input
                {...register("name", { required: true })}
                placeholder="Your name"
                className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-primary"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Email</span>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="you@company.com"
                className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-primary"
              />
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Message</span>
              <textarea
                {...register("message", { required: true })}
                placeholder="Tell me about your project, bottlenecks, or the technologies you’d like to explore."
                rows={5}
                className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-primary"
              />
            </label>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
          <div className="mt-6 flex flex-col items-center gap-3 text-sm text-slate-400 md:flex-row md:justify-center">
            <div className="flex items-center gap-2">
              <Sparkle className="h-4 w-4 text-accent" />
              <span>Open to Java, DevOps, and AI integration engagements.</span>
            </div>
            <span>Replies within 48 hours.</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


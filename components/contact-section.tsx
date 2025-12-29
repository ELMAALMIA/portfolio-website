"use client";

import { hero } from "@/lib/data";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MailIcon, Send, Sparkle, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      // You'll need to set these in your .env.local file
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please set up your environment variables.");
      }

      // Initialize EmailJS
      emailjs.init(publicKey);

      // Send email
      await emailjs.send(serviceId, templateId, {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: hero.contact.email,
        reply_to: data.email,
      });

      setSubmitStatus("success");
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
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
            <span className="mx-auto flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-slate-200">
              <MailIcon className="h-5 w-5 text-primary" /> Let's build together
            </span>
            <h2 className="font-heading text-3xl text-white md:text-4xl">Ready to activate your roadmap</h2>
            <p className="text-slate-200">
              Need to automate an OCI workflow, embed AI into Salesforce, or scale a Java platform? Let’s outline the plan and make
              it shippable.
            </p>
          </header>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-300 font-medium">Name</span>
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Your name"
                className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              {errors.name && (
                <span className="text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.name.message}
                </span>
              )}
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-300 font-medium">Email</span>
              <input
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                type="email"
                placeholder="you@company.com"
                className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              {errors.email && (
                <span className="text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email.message}
                </span>
              )}
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-300 font-medium">Message</span>
              <textarea
                {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
                placeholder="Tell me about your project, bottlenecks, or the technologies you'd like to explore."
                rows={5}
                className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
              />
              {errors.message && (
                <span className="text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.message.message}
                </span>
              )}
            </label>
            <div className="md:col-span-2 flex flex-col gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
              
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 px-4 py-3 text-sm text-emerald-400"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent successfully! I'll get back to you within 48 hours.
                </motion.div>
              )}
              
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-2xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400"
                >
                  <AlertCircle className="h-4 w-4" />
                  Failed to send message. Please try again or contact me directly at {hero.contact.email}
                </motion.div>
              )}
            </div>
          </form>
          <div className="mt-6 flex flex-col items-center gap-3 text-sm text-slate-400 md:flex-row md:justify-center">
            <div className="flex items-center gap-2">
              <Sparkle className="h-4 w-4 text-accent" />
              <span>Open to Java, DevOps, and AI integration engagements.</span>
            </div>
            <span className="text-slate-500">Replies within 48 hours.</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


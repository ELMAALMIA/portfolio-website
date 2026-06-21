"use client";

import { hero } from "@/lib/data";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MailIcon, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";

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
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      if (process.env.NODE_ENV === "development") {
        console.log("EmailJS Config Check:", {
          hasServiceId: !!serviceId,
          hasTemplateId: !!templateId,
          hasPublicKey: !!publicKey,
          serviceId: serviceId ? `${serviceId.substring(0, 10)}...` : "missing",
        });
      }

      if (!serviceId || !templateId || !publicKey) {
        const missing = [];
        if (!serviceId) missing.push("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
        if (!templateId) missing.push("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");
        if (!publicKey) missing.push("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");

        throw new Error(
          `EmailJS configuration missing: ${missing.join(", ")}. ` +
          `Please create a .env.local file (for development) or .env.production (for production) ` +
          `with your EmailJS credentials. See EMAILJS_SETUP.md for instructions.`
        );
      }

      const emailjs = (await import("@emailjs/browser")).default;
      emailjs.init(publicKey);

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: hero.name,
        to_email: hero.contact.email ,
        reply_to: data.email,
        email: data.email,
      };
      console.log("templateParams", templateParams);

      if (process.env.NODE_ENV === "development") {
        console.log("Sending with params:", templateParams);
      }

      const result = await emailjs.send(serviceId, templateId, templateParams);

      if (process.env.NODE_ENV === "development") {
        console.log("Email sent successfully:", result);
      }

      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error: any) {
      console.error("Email sending failed:", error);

      let errorMessage = "Failed to send message. ";
      if (error?.text) {
        errorMessage += `EmailJS error: ${error.text}`;
      } else if (error?.message) {
        errorMessage += error.message;
      } else {
        errorMessage += "Please try again or email me directly.";
      }

      setSubmitStatus("error");
      console.error("Full error details:", error);
      setTimeout(() => setSubmitStatus(null), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto my-24 w-full max-w-3xl px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
      >
        <header className="flex flex-col gap-2 text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
            <MailIcon className="h-5 w-5 text-primary-dark" />
          </div>
          <h2 className="font-heading text-2xl text-slate-900 md:text-3xl">Let&apos;s work together</h2>
          <p className="text-sm text-slate-500">
            Looking for a Java/Kotlin developer to build your backend, set up microservices, or integrate AI into your platform? Let&apos;s talk.
          </p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-1.5">
            <span className="code-text text-[0.65rem] uppercase tracking-[0.15em] text-slate-500">Name</span>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Your name"
              className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/10"
            />
            {errors.name && (
              <span className="text-[0.65rem] text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.name.message}
              </span>
            )}
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="code-text text-[0.65rem] uppercase tracking-[0.15em] text-slate-500">Email</span>
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
              className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/10"
            />
            {errors.email && (
              <span className="text-[0.65rem] text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.email.message}
              </span>
            )}
          </label>
          <label className="flex flex-col gap-1.5 md:col-span-2">
            <span className="code-text text-[0.65rem] uppercase tracking-[0.15em] text-slate-500">Message</span>
            <textarea
              {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
              placeholder="Tell me about your project, backend requirements, or the services you need."
              rows={4}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/10 resize-none"
            />
            {errors.message && (
              <span className="text-[0.65rem] text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.message.message}
              </span>
            )}
          </label>

          <div className="md:col-span-2 flex flex-col gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-lg bg-emerald-50 border border-emerald-200 px-4 py-2.5 text-xs text-emerald-700"
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                Message sent! I&apos;ll get back to you within 48 hours.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-2 rounded-lg bg-red-50 border border-red-200 px-4 py-2.5 text-xs text-red-700"
              >
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>Failed to send message.</span>
                </div>
                <p className="text-[0.6rem] text-red-500 pl-5">
                  Check the browser console for details. Or email me directly at{" "}
                  <a href={`mailto:${hero.contact.email}`} className="underline hover:text-red-800">
                    {hero.contact.email}
                  </a>
                </p>
              </motion.div>
            )}
          </div>
        </form>

        <p className="mt-5 text-center text-[0.65rem] text-slate-400">
          Open to Java/Kotlin backend, Spring Boot microservices, and cloud integration engagements.
        </p>
      </motion.div>
    </section>
  );
}

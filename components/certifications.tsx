"use client";

import { certifications } from "@/lib/data";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto mt-24 w-full max-w-5xl px-6 md:px-8">
      <header className="mb-10 flex flex-col gap-2">
        <span className="code-text flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
          <Award className="h-4 w-4" /> Certifications
        </span>
        <h2 className="font-heading text-3xl text-white md:text-4xl">
          Validated expertise in Java & Cloud
        </h2>
        <p className="max-w-2xl text-sm text-slate-400">
          Industry credentials backing my Java, cloud infrastructure, and software engineering skills.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.article
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            className="flex flex-col rounded-xl border border-slate-800/50 bg-slate-900/30 p-5 transition hover:border-primary/20"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-4 w-4 text-primary" />
              </div>
              <span className="code-text text-[0.6rem] text-slate-500">{cert.issued}</span>
            </div>
            <h3 className="mt-3 text-sm font-medium leading-snug text-white">{cert.title}</h3>
            <p className="mt-1 text-xs text-slate-500">{cert.issuer}</p>
            {cert.expiry && <p className="mt-1 text-[0.6rem] text-slate-600">Expires: {cert.expiry}</p>}
            <div className="mt-auto flex flex-wrap gap-1 pt-3">
              {cert.skills.map((skill) => (
                <span key={skill} className="code-text rounded border border-slate-700/30 bg-slate-800/30 px-2 py-0.5 text-[0.6rem] text-slate-500">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

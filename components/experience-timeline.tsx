"use client";

import { experiences } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative mx-auto mt-16 w-full max-w-5xl px-6 md:px-8">
      <header className="mb-10 flex flex-col gap-2">
        <span className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-primary/80">
          <Briefcase className="h-5 w-5 text-primary" /> Experience
        </span>
        <h2 className="font-heading text-3xl text-white md:text-4xl">Shipping reliable systems with measurable outcomes</h2>
        <p className="max-w-2xl text-slate-300">
          From cloud automation at Oracle to AI-first customer solutions, every project blends resilience, observability, and
          product thinking.
        </p>
      </header>
      <div className="relative border-l border-slate-800/60 pl-8">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.period}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="mb-14 last:mb-0"
          >
            <div className="absolute -left-[13px] mt-2 h-3 w-3 rounded-full bg-primary" />
            <div className="glass rounded-3xl border border-slate-800/70 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading text-xl text-white">{experience.role}</h3>
                  <p className="text-sm text-slate-400">{experience.company}</p>
                </div>
                <div className="text-right text-sm text-slate-400">
                  <p>{experience.period}</p>
                  <p>{experience.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="leading-relaxed">
                    {achievement}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-200">
                {experience.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-700 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


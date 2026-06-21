"use client";

import { experiences } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative mx-auto mt-16 w-full max-w-5xl px-6 md:px-8">
      <header className="mb-10 flex flex-col gap-2">
        <span className="code-text flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
          <Briefcase className="h-4 w-4" /> Experience
        </span>
        <h2 className="font-heading text-3xl text-white md:text-4xl">
          Building Java services in production environments
        </h2>
        <p className="max-w-2xl text-sm text-slate-400">
          From microservices at Oracle to Kotlin multiplatform at 2SIS — shipping reliable backend systems with Spring Boot, cloud infrastructure, and CI/CD.
        </p>
      </header>

      <div className="relative space-y-6 border-l border-slate-800/40 pl-8">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.period}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[calc(2rem+5px)] mt-6 h-2.5 w-2.5 rounded-full border-2 border-primary bg-slate-950" />

            <div className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-6 transition hover:border-primary/20">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-heading text-lg text-white">{experience.company}</h3>
                  <p className="text-sm text-primary/80">{experience.role}</p>
                </div>
                <div className="text-right">
                  <p className="code-text text-xs text-slate-400">{experience.period}</p>
                  <p className="text-xs text-slate-500">{experience.location} &middot; {experience.type}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-2 text-sm leading-relaxed text-slate-300">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/60" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {experience.stack.map((tech) => {
                  const isJava = ["Java", "Spring Boot", "Kotlin", "KMM"].includes(tech);
                  return (
                    <span
                      key={tech}
                      className={`code-text rounded px-2 py-1 text-[0.65rem] ${
                        isJava
                          ? "border border-primary/20 bg-primary/5 text-primary"
                          : "border border-slate-700/40 bg-slate-800/40 text-slate-400"
                      }`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

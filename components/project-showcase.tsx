"use client";

import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Cpu, Layers } from "lucide-react";

const categoryConfig = {
  java: { label: "Java/Spring", color: "text-primary", border: "border-primary/20", bg: "bg-primary/5", icon: Code2 },
  kotlin: { label: "Kotlin", color: "text-java-kotlin", border: "border-java-kotlin/20", bg: "bg-java-kotlin/5", icon: Code2 },
  ai: { label: "AI Integration", color: "text-accent", border: "border-accent/20", bg: "bg-accent/5", icon: Cpu },
  fullstack: { label: "Fullstack", color: "text-slate-400", border: "border-slate-700/40", bg: "bg-slate-800/30", icon: Layers }
};

export function ProjectShowcase() {
  return (
    <section id="projects" className="mx-auto mt-24 w-full max-w-5xl px-6 md:px-8">
      <header className="mb-10 flex flex-col gap-2">
        <span className="code-text flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
          <Code2 className="h-4 w-4" /> Projects
        </span>
        <h2 className="font-heading text-3xl text-white md:text-4xl">
          Java backends, AI integrations, and clean architecture
        </h2>
        <p className="max-w-2xl text-sm text-slate-400">
          End-to-end projects spanning Spring Boot microservices, LLM orchestration, biometric authentication, and developer tooling — all production-focused.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const cat = categoryConfig[project.category || "fullstack"];
          const CatIcon = cat.icon;

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group flex flex-col rounded-xl border border-slate-800/50 bg-slate-900/30 p-6 transition hover:border-primary/20"
            >
              {/* Category + period */}
              <div className="flex items-center justify-between gap-3">
                <span className={`code-text inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-[0.6rem] uppercase tracking-wider ${cat.color} ${cat.border} ${cat.bg} border`}>
                  <CatIcon className="h-3 w-3" />
                  {cat.label}
                </span>
                {project.period && (
                  <span className="code-text text-[0.6rem] text-slate-500">{project.period}</span>
                )}
              </div>

              <h3 className="mt-3 font-heading text-lg text-white">{project.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

              {/* Tech pills */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => {
                  const isCore = ["Java", "Spring Boot", "Kotlin", "KMM"].includes(tech);
                  return (
                    <span
                      key={tech}
                      className={`code-text rounded px-2 py-0.5 text-[0.6rem] ${
                        isCore
                          ? "border border-primary/20 bg-primary/5 text-primary"
                          : "border border-slate-700/30 bg-slate-800/30 text-slate-500"
                      }`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              {/* Highlights */}
              <ul className="mt-4 flex-1 space-y-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-xs leading-relaxed text-slate-400">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/50" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Links */}
              {project.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3 border-t border-slate-800/40 pt-4">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition hover:text-primary-light"
                    >
                      {link.label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

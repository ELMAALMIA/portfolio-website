"use client";

import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Sparkles } from "lucide-react";

export function ProjectShowcase() {
  return (
    <section id="projects" className="mx-auto mt-20 w-full max-w-5xl px-6 md:px-8">
      <header className="mb-10 flex flex-col gap-2">
        <span className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-accent/70">
          <Sparkles className="h-5 w-5 text-accent" /> Projects
        </span>
        <h2 className="font-heading text-3xl text-white md:text-4xl">Where AI systems meet clean product experiences</h2>
        <p className="max-w-2xl text-slate-300">
          A curated set of end-to-end launches that combine robust architectures, AI integrations, and immersive user journeys.
          Every release is monitored, observable, and production ready.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="gradient-border rounded-3xl p-[1px]"
          >
            <div className="glass rounded-[calc(theme(borderRadius.3xl)-4px)] p-6">
              <header className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl text-white">{project.title}</h3>
                  {project.period && <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{project.period}</span>}
                </div>
                <p className="text-sm text-slate-300">{project.description}</p>
              </header>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-200">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-800/50 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/70"
                    >
                      {link.label}
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


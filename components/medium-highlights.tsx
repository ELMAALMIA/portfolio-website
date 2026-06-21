"use client";

import { articles } from "@/lib/data";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

export function MediumHighlights() {
  return (
    <section id="articles" className="mx-auto mt-24 w-full max-w-5xl px-6 md:px-8">
      <header className="mb-10 flex flex-col gap-2">
        <span className="code-text flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
          <BookOpen className="h-4 w-4" /> Writing
        </span>
        <h2 className="font-heading text-3xl text-white md:text-4xl">
          Java architecture & engineering deep-dives
        </h2>
        <p className="max-w-2xl text-sm text-slate-400">
          Long-form articles exploring hexagonal architecture, testing strategies, and debugging techniques for Java/Spring applications.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article, index) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="group flex flex-col rounded-xl border border-slate-800/50 bg-slate-900/30 p-5 transition hover:border-primary/20"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-medium leading-snug text-white group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 rounded-md p-1.5 text-slate-500 transition hover:bg-primary/10 hover:text-primary"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-400">{article.summary}</p>
            <div className="mt-3 flex items-center gap-4 border-t border-slate-800/40 pt-3">
              <span className="code-text text-[0.6rem] text-slate-500">{article.published}</span>
              <span className="code-text text-[0.6rem] text-slate-600">{article.views} views</span>
              <span className="code-text text-[0.6rem] text-slate-600">{article.reads} reads</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

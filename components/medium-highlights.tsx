"use client";

import { articles, stats } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, BarChart3 } from "lucide-react";

export function MediumHighlights() {
  return (
    <section id="articles" className="mx-auto mt-20 w-full max-w-5xl px-6 md:px-8">
      <div className="flex flex-col gap-8 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="glass gradient-border flex-1 rounded-3xl p-8"
        >
          <header className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-slate-400">
              <BookOpen className="h-5 w-5 text-slate-300" /> Medium Essays
            </span>
            <h2 className="font-heading text-3xl text-white">Hexagonal thinking & pragmatic engineering</h2>
            <p className="text-slate-300">
              Long-form explorations of architecture, testing, and automation that make complex systems understandable and
              adaptable.
            </p>
          </header>
          <div className="mt-6 space-y-6">
            {articles.map((article) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-slate-800/60 p-4 transition hover:border-primary/60"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-heading text-lg text-white">{article.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{article.published}</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{article.summary}</p>
                <div className="mt-4 flex items-center gap-6 text-xs text-slate-400">
                  <span>{article.views} views</span>
                  <span>{article.reads} reads</span>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70">
                    Read
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="glass flex w-full flex-1 flex-col justify-between rounded-3xl border border-slate-800/60 p-8"
        >
          <header className="flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-primary" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Reach & Community</p>
              <h3 className="font-heading text-xl text-white">Impact snapshot</h3>
            </div>
          </header>
          <div className="mt-6 space-y-6 text-sm text-slate-200">
            <div>
              <span className="text-3xl font-bold text-white">{stats.medium.monthly.views}</span>
              <p className="text-slate-400">Medium views this month</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-white">{stats.medium.monthly.reads}</span>
              <p className="text-slate-400">qualified reads</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-white">{stats.medium.lifetime.views}</span>
              <p className="text-slate-400">lifetime views on architecture series</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-white">{stats.linkedIn.profileViews}</span>
              <p className="text-slate-400">LinkedIn profile views (7 days)</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-white">{stats.linkedIn.postImpressions}</span>
              <p className="text-slate-400">#DevOps & #AI post impressions</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-white">{stats.linkedIn.searchAppearances}</span>
              <p className="text-slate-400">search appearances</p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}


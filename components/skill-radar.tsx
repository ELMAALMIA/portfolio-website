"use client";

import { coreSkills, technicalKnowledge } from "@/lib/data";
import { motion } from "framer-motion";
import { Layers, Wrench } from "lucide-react";

export function SkillRadar() {
  return (
    <section id="skills" className="mx-auto mt-24 w-full max-w-5xl px-6 md:px-8">
      <header className="mb-10 flex flex-col gap-2">
        <span className="code-text flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
          <Layers className="h-4 w-4" /> Skills
        </span>
        <h2 className="font-heading text-3xl text-white md:text-4xl">
          Core competencies & technical knowledge
        </h2>
        <p className="max-w-2xl text-sm text-slate-400">
          Structured around Java/Kotlin backend expertise, with complementary frontend, database, and DevOps skills.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-primary/15 bg-primary/[0.02] p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Layers className="h-4 w-4 text-primary" />
            </div>
            <h3 className="font-heading text-lg text-white">Core Competencies</h3>
          </div>
          <div className="space-y-5">
            {Object.entries(coreSkills).map(([category, values]) => (
              <div key={category}>
                <p className="code-text mb-2 text-[0.65rem] uppercase tracking-[0.15em] text-slate-400">{category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {values.map((value) => (
                    <span
                      key={value}
                      className="code-text rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs text-primary"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical Knowledge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800/60">
              <Wrench className="h-4 w-4 text-slate-400" />
            </div>
            <h3 className="font-heading text-lg text-white">Technical Knowledge</h3>
          </div>
          <div className="space-y-5">
            {Object.entries(technicalKnowledge).map(([category, values]) => (
              <div key={category}>
                <p className="code-text mb-2 text-[0.65rem] uppercase tracking-[0.15em] text-slate-500">{category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {values.map((value) => (
                    <span
                      key={value}
                      className="code-text rounded-md border border-slate-700/40 bg-slate-800/40 px-2.5 py-1 text-xs text-slate-400"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { education } from "@/lib/data";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function EducationTimeline() {
  return (
    <section id="education" className="mx-auto mt-24 w-full max-w-5xl px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-6 md:p-8"
      >
        <header className="flex items-center gap-3 mb-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <GraduationCap className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="code-text text-[0.65rem] uppercase tracking-[0.2em] text-primary/70">Education</p>
            <h2 className="font-heading text-xl text-white">Academic background</h2>
          </div>
        </header>

        <div className="space-y-3">
          {education.map((item) => (
            <div key={item.degree} className="flex flex-col gap-1 rounded-lg border border-slate-800/40 bg-slate-950/30 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium text-white">{item.degree}</p>
                <p className="text-xs text-slate-400">{item.school}</p>
              </div>
              <div className="flex items-center gap-3 mt-1 md:mt-0">
                <span className="code-text text-[0.6rem] text-primary/60">{item.mention}</span>
                <span className="code-text text-[0.6rem] text-slate-500">{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { education } from "@/lib/data";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function EducationTimeline() {
  return (
    <section className="mx-auto mt-20 w-full max-w-5xl px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8"
      >
        <header className="flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-primary" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Academic journey</p>
            <h2 className="font-heading text-2xl text-white">Software-focused excellence</h2>
          </div>
        </header>
        <div className="mt-6 space-y-4 text-sm text-slate-300">
          {education.map((item) => (
            <div key={item.degree} className="rounded-2xl border border-slate-800/60 p-5">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <p className="font-heading text-lg text-white">{item.degree}</p>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.period}</span>
              </div>
              <p className="text-slate-400">{item.school}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">{item.mention}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


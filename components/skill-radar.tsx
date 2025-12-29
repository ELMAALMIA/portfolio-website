"use client";

import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

export function SkillRadar() {
  return (
    <section className="mx-auto mt-20 w-full max-w-5xl px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="glass gradient-border rounded-3xl p-8"
      >
        <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-slate-300">
              <Layers className="h-5 w-5 text-primary" /> Skills
            </span>
            <h2 className="font-heading text-3xl text-white md:text-4xl">A capability stack built around product impact</h2>
            <p className="mt-2 max-w-2xl text-slate-200">
              A balance between backend & frontend engineering, cloud orchestration, AI integrations, and software quality to ship
              end-to-end experiences.
            </p>
          </div>
        </header>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, values]) => (
            <div 
              key={category} 
              className={`rounded-2xl border p-6 ${
                category === 'backend' 
                  ? 'border-primary/30 bg-primary/5' 
                  : 'border-slate-700/50'
              }`}
            >
              <h3 className="font-heading text-lg capitalize text-white">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-200">
                {values.map((value) => (
                  <span 
                    key={value} 
                    className={`rounded-full px-3 py-1.5 ${
                      category === 'backend'
                        ? 'bg-primary/10 border border-primary/20 text-primary-foreground'
                        : 'bg-slate-800/70 border border-slate-600/40'
                    }`}
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

